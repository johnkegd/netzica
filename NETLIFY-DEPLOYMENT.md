# 🚀 Netlify Deployment Guide

## Environment Variable Setup

### 1. Set Environment Variable in Netlify

1. **Go to your Netlify dashboard**
2. **Select your site**
3. **Go to Site Settings → Environment Variables**
4. **Add new variable:**
   - **Key:** `CONSTRUCTION_PASSWORD`
   - **Value:** `your-secure-password-here`

### 2. Example Values

```bash
# Development (local)
CONSTRUCTION_PASSWORD=netzica2024

# Production (Netlify)
CONSTRUCTION_PASSWORD=my-super-secure-production-password-2024
```

## Build Process

The build script (`build-netlify.sh`) will:

1. ✅ Check for `CONSTRUCTION_PASSWORD` environment variable
2. ✅ Replace placeholder in `environment.prod.ts`
3. ✅ Build Angular application with production configuration
4. ✅ Restore original environment file

## Deployment Commands

### Local Testing with Environment Variable

```bash
# Set environment variable
export CONSTRUCTION_PASSWORD="test-password-123"

# Run build script
./build-netlify.sh

# Test locally
npx serve dist/netzica
```

### Netlify Deployment

The `netlify.toml` configuration handles:
- ✅ Custom build command
- ✅ SPA routing redirects
- ✅ Security headers
- ✅ Asset caching

## Security Features

- 🔐 **Password Protection:** Environment variable controlled
- ⏰ **Session Expiry:** 24-hour automatic expiration
- 🔄 **Navigation Guards:** Checks on every route change
- 🛡️ **Security Headers:** CSP, HSTS, XSS protection
- 🗑️ **Auto Cleanup:** Expired sessions automatically cleared

## Testing Deployment

1. **Deploy to Netlify**
2. **Visit your site** - should show construction page
3. **Enter password** from environment variable
4. **Access main site** for 24 hours
5. **Test expiry** by changing browser time or waiting

## Troubleshooting

### Environment Variable Not Working
- Check Netlify environment variables are set
- Verify build logs show correct password
- Test with `console.log(environment.constructionPassword)` in browser

### Build Failures
- Ensure `build-netlify.sh` is executable (`chmod +x`)
- Check Node.js version (18+)
- Verify Angular CLI is installed

### Authentication Issues
- Check browser console for errors
- Verify sessionStorage contains auth data
- Test with different browsers/incognito mode
