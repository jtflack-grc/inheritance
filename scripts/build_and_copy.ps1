# Build frontend and copy to static directory

$ErrorActionPreference = "Stop"

Write-Host "Building frontend..." -ForegroundColor Cyan

Set-Location frontend

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm ci
    if ($LASTEXITCODE -ne 0) {
        npm install
    }
}

# Build
Write-Host "Running build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# Copy to static
Write-Host "Copying to static directory..." -ForegroundColor Yellow
Set-Location ..

# Remove existing static files (except .gitkeep)
Get-ChildItem -Path static -Exclude .gitkeep | Remove-Item -Recurse -Force

# Copy dist contents to static
Copy-Item -Path "frontend\dist\*" -Destination "static\" -Recurse -Force

Write-Host "✅ Build complete! Files copied to static/" -ForegroundColor Green
Write-Host "You can now run: streamlit run app.py" -ForegroundColor Cyan
