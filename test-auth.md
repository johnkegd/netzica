#!/bin/bash

echo "🔐 Construction Mode Authentication Test"
echo "========================================"
echo ""

echo "This script will help you test the authentication system:"
echo ""

echo "1. Start the development server:"
echo "   npm run start"
echo ""

echo "2. Open browser to http://localhost:4200"
echo "   - You should see the construction page"
echo "   - Enter the password: netzica2024"
echo "   - You'll be redirected to the main site"
echo ""

echo "3. Test session expiry:"
echo "   - Open browser DevTools (F12)"
echo "   - Go to Application/Storage tab"
echo "   - Find Session Storage"
echo "   - Look for 'construction-auth-expiry'"
echo "   - Change the date to yesterday"
echo "   - Refresh the page or navigate"
echo "   - You should be redirected back to construction page"
echo ""

echo "4. Test navigation protection:"
echo "   - While authenticated, try navigating to different routes"
echo "   - Change the expiry date in sessionStorage to yesterday"
echo "   - Try navigating - you should be redirected to construction"
echo ""

echo "5. Test periodic checks:"
echo "   - The system checks every 5 minutes for expired sessions"
echo "   - You can manually trigger this by changing the expiry date"
echo ""

echo "Environment Variables for Production:"
echo "===================================="
echo "Set CONSTRUCTION_PASSWORD in Netlify:"
echo "  - Go to Site Settings → Environment Variables"
echo "  - Add: CONSTRUCTION_PASSWORD = your-secure-password"
echo ""

echo "Toggle Construction Mode:"
echo "========================"
echo "Run: ./toggle-construction.sh"
echo "  - Option 1: Turn OFF (main site accessible without password)"
echo "  - Option 2: Turn ON (main site protected by password)"
echo ""
