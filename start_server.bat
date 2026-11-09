@echo off
title Daisy Day - Flower Catalog Web Server
echo Starting Daisy Day Web Catalog on http://localhost:8080 ...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
