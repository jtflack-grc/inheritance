#!/bin/bash
# Build frontend and copy to static directory

set -e  # Exit on error

echo "Building frontend..."
cd frontend

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm ci || npm install
fi

# Build
echo "Running build..."
npm run build

# Copy to static
echo "Copying to static directory..."
cd ..
rm -rf static/*
cp -R frontend/dist/* static/

echo "✅ Build complete! Files copied to static/"
echo "You can now run: streamlit run app.py"
