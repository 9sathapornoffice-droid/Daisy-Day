@echo off
title Bloom & Pastels - Flower Catalog Web Server
echo Starting Bloom & Pastels Web Catalog on http://localhost:8080 ...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
