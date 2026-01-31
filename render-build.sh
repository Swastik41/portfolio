#!/usr/bin/env bash
# Render build script

echo "Installing dependencies..."
npm install

echo "Building backend..."
npm run build

echo "Build complete!"
