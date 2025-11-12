# Netlify Settings Fix

## ⚠️ **Issue Found in Your Netlify Settings**

Looking at your Netlify build settings, I can see one incorrect setting:

### ❌ **Publish Directory is Wrong**

**Current:** `paul-factory/`  
**Should be:** `.next` (or leave empty)

## ✅ **Correct Netlify Settings**

Here's what your settings should be:

### 1. Base directory
- **Value:** `paul-factory` ✅ (You have this correct!)

### 2. Package directory
- **Value:** Leave **empty** or set to `paul-factory/`
- **Note:** Only needed for monorepos. Since your `netlify.toml` is in `paul-factory/`, you can leave this empty.

### 3. Build command
- **Value:** `npm run build` ✅ (You have this correct!)

### 4. Publish directory ⚠️ **FIX THIS**
- **Current:** `paul-factory/` ❌
- **Should be:** `.next` ✅
- **Why:** Next.js builds output to `.next` directory. The Netlify Next.js plugin expects this.

### 5. Functions directory
- **Value:** `paul-factory/netlify/functions` (or leave empty if not using functions)
- **Note:** This is fine if you're not using Netlify functions.

## 🔧 **How to Fix**

### Option 1: Update in Netlify Dashboard (Recommended)

1. Go to your Netlify site settings
2. Navigate to: **Build & Deploy → Build Settings**
3. Find **"Publish directory"**
4. Change from: `paul-factory/`
5. Change to: `.next`
6. Click **"Save"**
7. Go to **Deploys** tab
8. Click **"Trigger deploy"** → **"Deploy site"**

### Option 2: Let netlify.toml Handle It

The `netlify.toml` file already has the correct setting. You can:

1. In Netlify dashboard, set **Publish directory** to: `.next`
2. Or leave it **empty** - the `netlify.toml` will be used

## 📋 **Complete Settings Checklist**

Here's what your Netlify settings should look like:

```
Base directory:        paul-factory          ✅
Package directory:     (empty)               ✅
Build command:         npm run build         ✅
Publish directory:     .next                 ⚠️ FIX THIS
Functions directory:   (empty or default)    ✅
```

## 🎯 **Why This Matters**

The **Publish directory** tells Netlify where to find your built files:

- ❌ `paul-factory/` - Points to the source directory, not the build output
- ✅ `.next` - Points to Next.js build output directory
- ✅ (empty) - Netlify plugin will auto-detect

When set incorrectly, Netlify can't find your built files, causing 404 errors.

## 🚀 **After Fixing**

1. **Save the settings** in Netlify
2. **Trigger a new deploy** (or wait for auto-deploy on next push)
3. **Wait 2-3 minutes** for build to complete
4. **Visit your site** - should work now!

## ✅ **Expected Result**

After fixing the publish directory:
- ✅ Homepage loads: https://gtmwithferm.netlify.app/
- ✅ All routes work: `/about`, `/clients`, `/contact`, `/legal`
- ✅ No more 404 errors
- ✅ Sitemap works: `/sitemap.xml`
- ✅ Robots.txt works: `/robots.txt`

---

**The fix is simple:** Change **Publish directory** from `paul-factory/` to `.next` in your Netlify settings! 🎯

