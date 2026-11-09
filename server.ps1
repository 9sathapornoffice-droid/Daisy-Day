$port = 8080
$prefix = "http://localhost:$port/"
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Magenta
    Write-Host " Daisy Day Web Catalog is Running!" -ForegroundColor Yellow
    Write-Host " Link: http://localhost:$port/" -ForegroundColor Green
    Write-Host " Central Auto-Save API: http://localhost:$port/api/save" -ForegroundColor Cyan
    Write-Host " Image Upload API: http://localhost:$port/api/upload" -ForegroundColor Cyan
    Write-Host " Press Ctrl+C in this window to stop server" -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Magenta
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # CORS Headers
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")
        
        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }
        
        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) {
            $urlPath = "index.html"
        }
        
        # Handle Central Auto-Save API
        if ($request.HttpMethod -eq "POST" -and ($urlPath -eq "api/save" -or $urlPath -eq "api/save/")) {
            try {
                $reader = New-Object System.IO.StreamReader($request.InputStream, (New-Object System.Text.UTF8Encoding($false)))
                $body = $reader.ReadToEnd()
                $reader.Close()
                
                # Helper to format JSON array properly (0, 1, or multiple items)
                function Format-JsonArray($items, $depth = 10) {
                    $arr = @($items)
                    if ($arr.Count -eq 0) {
                        return "[]"
                    } elseif ($arr.Count -eq 1) {
                        return "[$($arr[0] | ConvertTo-Json -Depth $depth)]"
                    } else {
                        return ($arr | ConvertTo-Json -Depth $depth)
                    }
                }
                
                # 1. Save data/catalog.json and root catalog.json
                $dataDir = Join-Path $root "data"
                if (-not (Test-Path $dataDir)) { New-Item -ItemType Directory -Path $dataDir -Force | Out-Null }
                $catalogPath = Join-Path $dataDir "catalog.json"
                [System.IO.File]::WriteAllText($catalogPath, $body, (New-Object System.Text.UTF8Encoding($false)))
                
                $rootCatalogPath = Join-Path $root "catalog.json"
                [System.IO.File]::WriteAllText($rootCatalogPath, $body, (New-Object System.Text.UTF8Encoding($false)))
                
                # 2. Update DEFAULT_PRODUCTS, DEFAULT_CATEGORIES, DEFAULT_SHOP_CONFIG in admin-logic.js
                $adminLogicPath = Join-Path $root "admin-logic.js"
                $imagesDataPath = Join-Path $root "images-data.js"
                $appJsPath = Join-Path $root "app.js"
                
                $dataObj = $body | ConvertFrom-Json
                
                if (Test-Path $adminLogicPath) {
                    $logicText = [System.IO.File]::ReadAllText($adminLogicPath, (New-Object System.Text.UTF8Encoding($false)))
                    
                    if ($null -ne $dataObj.products) {
                        $prodJson = Format-JsonArray $dataObj.products
                        $logicText = [System.Text.RegularExpressions.Regex]::Replace($logicText, '(?s)const DEFAULT_PRODUCTS = \[.*?\];', { param($m) "const DEFAULT_PRODUCTS = $prodJson;" })
                    }
                    if ($null -ne $dataObj.categories) {
                        $catJson = Format-JsonArray $dataObj.categories
                        $logicText = [System.Text.RegularExpressions.Regex]::Replace($logicText, '(?s)const DEFAULT_CATEGORIES = \[.*?\];', { param($m) "const DEFAULT_CATEGORIES = $catJson;" })
                    }
                    if ($null -ne $dataObj.shopConfig) {
                        $shopJson = ($dataObj.shopConfig | ConvertTo-Json -Depth 10)
                        $logicText = [System.Text.RegularExpressions.Regex]::Replace($logicText, '(?s)const DEFAULT_SHOP_CONFIG = \{.*?\};', { param($m) "const DEFAULT_SHOP_CONFIG = $shopJson;" })
                    }
                    
                    [System.IO.File]::WriteAllText($adminLogicPath, $logicText, (New-Object System.Text.UTF8Encoding($false)))
                    
                    # 3. Re-bundle app.js
                    if (Test-Path $imagesDataPath) {
                        $imgText = [System.IO.File]::ReadAllText($imagesDataPath, (New-Object System.Text.UTF8Encoding($false)))
                        [System.IO.File]::WriteAllText($appJsPath, $imgText + "`n" + $logicText, (New-Object System.Text.UTF8Encoding($false)))
                    }
                }
                
                $resJson = '{"success":true,"message":"Catalog data saved successfully"}'
                $bytes = (New-Object System.Text.UTF8Encoding($false)).GetBytes($resJson)
                $response.ContentType = "application/json; charset=utf-8"
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $errJson = '{"success":false,"error":"' + $_.Exception.Message.Replace('"', '\"') + '"}'
                $bytes = (New-Object System.Text.UTF8Encoding($false)).GetBytes($errJson)
                $response.ContentType = "application/json; charset=utf-8"
                $response.StatusCode = 500
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            $response.Close()
            continue
        }
        
        # Handle Image Upload API (Save file into assets/images/ and return web link)
        if ($request.HttpMethod -eq "POST" -and ($urlPath -eq "api/upload" -or $urlPath -eq "api/upload/")) {
            try {
                $reader = New-Object System.IO.StreamReader($request.InputStream, (New-Object System.Text.UTF8Encoding($false)))
                $body = $reader.ReadToEnd()
                $reader.Close()
                
                $uploadObj = $body | ConvertFrom-Json
                $rawBase64 = $uploadObj.imageBase64
                if ([string]::IsNullOrEmpty($rawBase64)) {
                    throw "No image data received"
                }
                
                # Determine extension
                $ext = ".jpg"
                if ($rawBase64 -match '^data:image\/png') { $ext = ".png" }
                elseif ($rawBase64 -match '^data:image\/webp') { $ext = ".webp" }
                
                # Sanitize filename or generate one
                $cleanName = $uploadObj.filename
                if ([string]::IsNullOrEmpty($cleanName)) {
                    $cleanName = "prod-" + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + $ext
                } else {
                    $cleanName = [System.IO.Path]::GetFileNameWithoutExtension($cleanName)
                    $cleanName = ($cleanName -replace '[^a-zA-Z0-9_\-]', '-').ToLower()
                    if ([string]::IsNullOrEmpty($cleanName)) { $cleanName = "img" }
                    $cleanName = $cleanName + "-" + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + $ext
                }
                
                $imagesDir = Join-Path $root "assets\images"
                if (-not (Test-Path $imagesDir)) { New-Item -ItemType Directory -Path $imagesDir -Force | Out-Null }
                $savePath = Join-Path $imagesDir $cleanName
                
                # Strip data URL prefix
                $pureBase64 = $rawBase64 -replace '^data:image\/[a-zA-Z]+;base64,', ''
                $imgBytes = [System.Convert]::FromBase64String($pureBase64)
                [System.IO.File]::WriteAllBytes($savePath, $imgBytes)
                
                $relUrl = "assets/images/" + $cleanName
                $fullUrl = "https://9sathapornoffice-droid.github.io/Daisy-Day/" + $relUrl
                
                $resJson = @{
                    success = $true
                    url = $relUrl
                    fullUrl = $fullUrl
                    filename = $cleanName
                    size = $imgBytes.Length
                } | ConvertTo-Json
                
                $bytes = (New-Object System.Text.UTF8Encoding($false)).GetBytes($resJson)
                $response.ContentType = "application/json; charset=utf-8"
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $errJson = '{"success":false,"error":"' + $_.Exception.Message.Replace('"', '\"') + '"}'
                $bytes = (New-Object System.Text.UTF8Encoding($false)).GetBytes($errJson)
                $response.ContentType = "application/json; charset=utf-8"
                $response.StatusCode = 500
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            $response.Close()
            continue
        }
        
        $localPath = Join-Path $root ($urlPath -replace '/', '\')
        
        if (Test-Path $localPath -PathType Leaf) {
            $ext = [IO.Path]::GetExtension($localPath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".png"  { "image/png" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }
            
            $bytes = [IO.File]::ReadAllBytes($localPath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = (New-Object System.Text.UTF8Encoding($false)).GetBytes("404 Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}