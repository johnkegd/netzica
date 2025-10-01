#!/bin/bash

# Construction Mode Toggle Script for Netlify

echo "🏗️  Netzica Construction Mode Toggle"
echo "======================================"

# Check if we're in construction mode
if [ -f "src/app/components/construction/construction.ts" ]; then
    echo "Current status: Construction mode is ENABLED"
    echo ""
    echo "Options:"
    echo "1. Disable construction mode (remove password protection)"
    echo "2. Change password"
    echo "3. Exit"
    echo ""
    read -p "Choose an option (1-3): " choice
    
    case $choice in
        1)
            echo "Disabling construction mode..."
            # Comment out the construction guard in routes
            sed -i.bak 's/canActivate: \[ConstructionGuard\]/\/\/ canActivate: [ConstructionGuard]/' src/app/app.routes.ts
            echo "✅ Construction mode disabled. Main site is now accessible."
            ;;
        2)
            read -p "Enter new password: " new_password
            sed -i.bak "s/CONSTRUCTION_PASSWORD = '.*'/CONSTRUCTION_PASSWORD = '$new_password'/" src/app/components/construction/construction.ts
            echo "✅ Password updated to: $new_password"
            ;;
        3)
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
else
    echo "Construction mode is DISABLED"
    echo ""
    read -p "Enable construction mode? (y/n): " enable
    if [ "$enable" = "y" ]; then
        # Uncomment the construction guard
        sed -i.bak 's/\/\/ canActivate: \[ConstructionGuard\]/canActivate: [ConstructionGuard]/' src/app/app.routes.ts
        echo "✅ Construction mode enabled. Site is now password protected."
    fi
fi

echo ""
echo "Next steps:"
echo "1. Commit your changes: git add . && git commit -m 'Toggle construction mode'"
echo "2. Deploy to Netlify: git push"
