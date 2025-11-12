install netlify# 404 Error Troubleshooting Guide

## 🔍 **Check These First**

### 1. Check Netlify Build Logs

Go to your Netlify dashboard → **Deploys** → Click on latest deploy → **View build logs**

**Look for:**
- ✅ "Installing @netlify/plugin-nextjs" - Plugin is installing
- ✅ "Next.js detected" - Plugin detected your Next.js app
- ✅ "Plugin @netlify/plugin-nextjs completed successfully" - Plugin ran
- ❌ If you DON'T see these, the plugin isn't working

### 2. Check Plugin Installation

**Site Settings → Build & Deploy → Plugins**

Should see: `@netlify/plugin-nextjs`

If not listed:
- The plugin should auto-install from `netlify.toml`
- If it doesn't, we've added it to `package.json` as a dependency
- Push the changes and it will install

### 3. Verify Netlify Settings

**Site Settings → Build & Deploy → Build Settings:**

- **Base directory:** `paul-factory` ✅
- **Build command:** `npm run build` ✅
- **Publish directory:** 
  - **Try:** Leave **EMPTY** (recommended)
  - **Or:** `.next`
  - **NOT:** `paul-factory/` or `paul-factory/.next`

## 🔧 **What I Just Fixed**

1. ✅ **Added plugin to package.json** - Ensures it installs
2. ✅ **Updated netlify.toml** - Better plugin configuration
3. ✅ **Removed _redirects file** - Plugin handles routing, redirects can conflict

## 🚀 **Next Steps**

### Step 1: Push the Changes

```bash
cd /Users/ferm/Documents/GitHub/Website
git push origin main
```

(You'll need to authenticate)

### Step 2: In Netlify Dashboard

1. **Set Publish Directory to EMPTY:**
   - Site Settings → Build & Deploy → Build Settings
   - **Publish directory:** Delete the value, leave it empty
   - **Save**

2. **Clear Cache and Redeploy:**
   - Site Settings → Build & Deploy → **Clear cache and deploy site**
   - Or: Deploys → **Trigger deploy** → **Clear cache and deploy site**

### Step 3: Watch the Build

Monitor the build logs. You should see:

```
Installing @netlify/plugin-nextjs
Next.js detected
Running build command...
Plugin @netlify/plugin-nextjs completed successfully
```

### Step 4: Test Your Site

After build completes:
- Visit: https://gtmwithferm.netlify.app/
- Should work now!

## 🐛 **If Still Getting 404**

### Check Build Logs for Errors

Look for:
- ❌ "Plugin not found"
- ❌ "Failed to install plugin"
- ❌ "Next.js not detected"
- ❌ Build errors

### Try This Nuclear Option

If nothing works, try removing base directory from dashboard:

1. **In Netlify Dashboard:**
   - Set **Base directory** to: **empty/root**
   
2. **Update netlify.toml:**
   - Change `base = "."` to `base = "paul-factory"`
   - Change `publish = ".next"` to `publish = "paul-factory/.next"`

3. **Push and redeploy**

## 📊 **Diagnostic Commands**

After pushing, check build logs for:

```bash
# Should see in logs:
✓ Installing @netlify/plugin-nextjs
✓ Next.js detected
✓ Plugin completed successfully
```

## ✅ **Success Indicators**

Your site works when:
- ✅ Build logs show plugin installing
- ✅ Build logs show "Next.js detected"
- ✅ Homepage loads: https://gtmwithferm.netlify.app/
- ✅ All routes work: /about, /clients, /contact, /legal
- ✅ No 404 errors

---

**The fix is pushed!** Now:
1. Push to GitHub
2. Set publish directory to EMPTY in Netlify
3. Clear cache and redeploy
4. Check build logs for plugin installation

Let me know what you see in the build logs! 🔍

