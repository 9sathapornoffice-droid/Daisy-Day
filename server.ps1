$port = 8080
$prefix = "http://localhost:$port/"
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Magenta
    Write-Host " 🌸 Bloom & Pastels Web Catalog is Running!" -ForegroundColor Yellow
    Write-Host " 🔗 Link: http://localhost:$port/" -ForegroundColor Green
    Write-Host " 💾 Central Auto-Save API: http://localhost:$port/api/save" -ForegroundColor Cyan
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
                
                # 1. Save data/catalog.json
                $dataDir = Join-Path $root "data"
                if (-not (Test-Path $dataDir)) { New-Item -ItemType Directory -Path $dataDir -Force | Out-Null }
                $catalogPath = Join-Path $dataDir "catalog.json"
                [System.IO.File]::WriteAllText($catalogPath, $body, (New-Object System.Text.UTF8Encoding($false)))
                
                # 2. Update DEFAULT_PRODUCTS, DEFAULT_CATEGORIES, DEFAULT_SHOP_CONFIG in admin-logic.js
                $adminLogicPath = Join-Path $root "admin-logic.js"
                $imagesDataPath = Join-Path $root "images-data.js"
                $appJsPath = Join-Path $root "app.js"
                
                $dataObj = $body | ConvertFrom-Json
                
                if (Test-Path $adminLogicPath) {
                    $logicText = [System.IO.File]::ReadAllText($adminLogicPath, (New-Object System.Text.UTF8Encoding($false)))
                    
                    if ($dataObj.products) {
                        $prodJson = ($dataObj.products | ConvertTo-Json -Depth 10)
                        $logicText = [System.Text.RegularExpressions.Regex]::Replace($logicText, '(?s)const DEFAULT_PRODUCTS = \[.*?\];', "const DEFAULT_PRODUCTS = $prodJson;")
                    }
                    if ($dataObj.categories) {
                        $catJson = ($dataObj.categories | ConvertTo-Json -Depth 10)
                        $logicText = [System.Text.RegularExpressions.Regex]::Replace($logicText, '(?s)const DEFAULT_CATEGORIES = \[.*?\];', "const DEFAULT_CATEGORIES = $catJson;")
                    }
                    if ($dataObj.shopConfig) {
                        $shopJson = ($dataObj.shopConfig | ConvertTo-Json -Depth 10)
                        $logicText = [System.Text.RegularExpressions.Regex]::Replace($logicText, '(?s)const DEFAULT_SHOP_CONFIG = \{.*?\};', "const DEFAULT_SHOP_CONFIG = $shopJson;")
                    }
                    
                    [System.IO.File]::WriteAllText($adminLogicPath, $logicText, (New-Object System.Text.UTF8Encoding($false)))
                    
                    # 3. Re-bundle app.js
                    if (Test-Path $imagesDataPath) {
                        $imgText = [System.IO.File]::ReadAllText($imagesDataPath, (New-Object System.Text.UTF8Encoding($false)))
                        [System.IO.File]::WriteAllText($appJsPath, $imgText + "`n" + $logicText, (New-Object System.Text.UTF8Encoding($false)))
                    }
                }
                
                $resJson = '{"success":true,"message":"บันทึกข้อมูลลงส่วนกลาง (data/catalog.json และ app.js) เรียบร้อยแล้ว"}'
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