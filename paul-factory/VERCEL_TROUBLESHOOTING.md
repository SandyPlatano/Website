# Vercel vs Localhost Differences - Troubleshooting Guide

## Common Causes & Solutions

### 1. **Root Directory Not Configured** ⚠️ MOST COMMON

**Problem:** Vercel is building from the wrong directory (root instead of `paul-factory`).

**Solution:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **General**
4. Scroll to **Root Directory**
5. Click **Edit** → Set to `paul-factory`
6. Click **Save**
7. Go to **Deployments** tab
8. Click **Redeploy** (or push a new commit)

**How to verify:** Check the build logs in Vercel. If you see errors like "Cannot find package.json" or "Module not found", this is likely the issue.

---

### 2. **Build Cache Issues** 🗑️

**Problem:** Vercel is using cached builds that don't include your latest changes.

**Solution:**
1. Go to Vercel Dashboard → Your Project → **Settings** → **General**
2. Scroll to **Build Cache**
3. Click **Clear Build Cache**
4. Go to **Deployments** tab
5. Click **Redeploy** on the latest deployment
6. Wait for the new build to complete

**Alternative:** Add a comment to `package.json` or make a small change to force a fresh build.

---

### 3. **Git Not Synced** 📤

**Problem:** Your local changes aren't pushed to GitHub, so Vercel doesn't have them.

**Solution:**
```bash
# Check what's not committed
cd /Users/ferm/Documents/GitHub/Website/paul-factory
git status

# Check what's not pushed
git log origin/main..HEAD

# If there are uncommitted changes:
git add .
git commit -m "Your changes"
git push origin main

# Vercel will automatically deploy after push
```

**How to verify:** Check your GitHub repository - are your latest changes there?

---

### 4. **Environment Variables Missing** 🔐

**Problem:** Missing environment variables in Vercel can cause different behavior.

**Solution:**
1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add any required variables (especially `NEXT_PUBLIC_*` variables)
3. Common ones to check:
   - `NEXT_PUBLIC_SITE_URL` - Your site URL
   - Any API keys or configuration
4. **Redeploy** after adding variables

**Note:** Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser. Others are server-side only.

---

### 5. **CSS/Styling Differences** 🎨

**Problem:** Tailwind CSS might be purging classes differently in production.

**Solution:**
1. **Check Tailwind Config:**
   - Ensure `content` paths in `tailwind.config.ts` are correct
   - Make sure all component paths are included

2. **Check for Dynamic Classes:**
   - Tailwind can't detect dynamically generated classes
   - Use full class names instead of string concatenation
   - Or add classes to `safelist` in `tailwind.config.ts`

3. **Verify Build Output:**
   ```bash
   # Build locally and check if styles are generated
   cd /Users/ferm/Documents/GitHub/Website/paul-factory
   npm run build
   # Check the .next directory for CSS files
   ```

---

### 6. **Node Version Mismatch** 📦

**Problem:** Different Node.js versions between local and Vercel can cause issues.

**Solution:**
1. Check your local Node version:
   ```bash
   node --version
   ```

2. Set Node version in Vercel:
   - Go to Vercel Dashboard → **Settings** → **General**
   - Scroll to **Node.js Version**
   - Set to match your local version (recommended: 20.x)

3. Or specify in `package.json`:
   ```json
   {
     "engines": {
       "node": ">=20.0.0"
     }
   }
   ```

---

### 7. **Static Assets Not Deployed** 📁

**Problem:** Images or other static assets in `public/` might not be deployed.

**Solution:**
1. **Verify files are committed:**
   ```bash
   git ls-files public/
   ```

2. **Check file sizes:**
   - Vercel has limits on file sizes
   - Large files might not deploy

3. **Check paths:**
   - Use `/filename.png` (not `./filename.png`) for public assets
   - Use `next/image` for images

---

### 8. **Production Build Differences** 🏗️

**Problem:** Production builds can behave differently than dev builds.

**Solution:**
1. **Test production build locally:**
   ```bash
   cd /Users/ferm/Documents/GitHub/Website/paul-factory
   npm run build
   npm run start
   # Visit http://localhost:3000
   # Compare with your dev server
   ```

2. **Check for console errors:**
   - Open browser DevTools
   - Check Console and Network tabs
   - Look for 404s or errors

---

## Quick Diagnostic Checklist

Run through this checklist to identify the issue:

- [ ] **Root Directory set to `paul-factory` in Vercel?**
- [ ] **All changes committed and pushed to GitHub?**
- [ ] **Build cache cleared in Vercel?**
- [ ] **Environment variables set in Vercel?**
- [ ] **Node version matches between local and Vercel?**
- [ ] **Production build works locally? (`npm run build && npm run start`)**
- [ ] **No console errors in browser DevTools?**
- [ ] **Static assets committed to git?**
- [ ] **Tailwind CSS classes not being purged incorrectly?**
- [ ] **Build logs in Vercel show no errors?**

---

## Step-by-Step Fix Process

### Step 1: Verify Local Build
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
npm run build
npm run start
# Visit http://localhost:3000 and verify it looks correct
```

### Step 2: Verify Git Sync
```bash
# Check if everything is committed
git status

# Check if everything is pushed
git log origin/main..HEAD

# If not, commit and push:
git add .
git commit -m "Fix: [describe your changes]"
git push origin main
```

### Step 3: Check Vercel Configuration
1. Go to Vercel Dashboard
2. Verify **Root Directory** is `paul-factory`
3. Verify **Build Command** is `npm run build`
4. Verify **Node Version** is correct (20.x recommended)
5. Check **Environment Variables** are set

### Step 4: Clear Cache and Redeploy
1. Go to Vercel Dashboard → **Settings** → **General**
2. Click **Clear Build Cache**
3. Go to **Deployments** tab
4. Click **Redeploy** on latest deployment
5. Wait for build to complete

### Step 5: Compare Builds
1. Check Vercel build logs for errors
2. Compare local production build (`npm run start`) with Vercel
3. Check browser console for errors
4. Check Network tab for missing resources

---

## Still Not Working?

If none of the above fixes the issue:

1. **Check Vercel Build Logs:**
   - Go to Vercel Dashboard → **Deployments**
   - Click on the latest deployment
   - Check **Build Logs** for errors
   - Look for warnings or missing files

2. **Compare File Structure:**
   - Ensure all files in `src/` are committed
   - Check that `public/` assets are committed
   - Verify `package.json` is up to date

3. **Check for Runtime Errors:**
   - Open browser DevTools on Vercel site
   - Check Console for JavaScript errors
   - Check Network tab for failed requests
   - Check for CORS issues

4. **Contact Support:**
   - Vercel has excellent support
   - Include build logs and error messages
   - Include comparison between local and Vercel

---

## Prevention Tips

1. **Always test production builds locally:**
   ```bash
   npm run build && npm run start
   ```

2. **Keep Vercel settings in sync:**
   - Root Directory: `paul-factory`
   - Node Version: 20.x
   - Build Command: `npm run build`

3. **Commit and push regularly:**
   - Don't leave uncommitted changes
   - Push to GitHub frequently
   - Tag important releases

4. **Monitor build logs:**
   - Check Vercel build logs after each deployment
   - Fix warnings before they become errors
   - Keep dependencies updated

5. **Use environment variables:**
   - Don't hardcode configuration
   - Use `NEXT_PUBLIC_*` for client-side vars
   - Keep secrets in Vercel environment variables

---

## Quick Commands Reference

```bash
# Check git status
git status

# Check what's not pushed
git log origin/main..HEAD

# Build and test locally
npm run build
npm run start

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version

# Check if port is in use
lsof -ti:3000
```

---

## Need More Help?

If you're still experiencing issues:
1. Check Vercel build logs for specific errors
2. Compare browser console errors between local and Vercel
3. Verify all files are committed and pushed
4. Test production build locally first
5. Contact Vercel support with build logs

