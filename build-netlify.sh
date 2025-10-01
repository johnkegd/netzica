#!/bin/bash

# Build script for Netlify deployment with environment variable replacement

echo "🔨 Building Angular application for Netlify..."

# Check if CONSTRUCTION_PASSWORD environment variable is set
if [ -z "$CONSTRUCTION_PASSWORD" ]; then
    echo "⚠️  Warning: CONSTRUCTION_PASSWORD environment variable is not set"
    echo "   Using default password: netzica2024"
    CONSTRUCTION_PASSWORD="netzica2024"
else
    echo "✅ Using CONSTRUCTION_PASSWORD from environment"
fi

# Replace placeholder in production environment file
echo "🔧 Replacing environment variable placeholder..."
sed -i.bak "s/CONSTRUCTION_PASSWORD_PLACEHOLDER/$CONSTRUCTION_PASSWORD/g" src/environments/environment.prod.ts

# Build the application
echo "📦 Building Angular application..."
ng build --configuration=production

# Restore original file
echo "🔄 Restoring original environment file..."
mv src/environments/environment.prod.ts.bak src/environments/environment.prod.ts

echo "✅ Build complete!"
echo "📁 Output directory: dist/netzica"
