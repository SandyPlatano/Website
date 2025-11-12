# Netlify "Page Not Found" Fix

## 🔴 **The Problem**

You're seeing a "Page not found" error on Netlify. This is a common issue with Next.js App Router deployments.

## ✅ **The Solution**

I've fixed the `netlify.toml` file. The issue was a redirect rule that conflicts with Next.js routing.

### What I Fixed:

1. **Removed the conflicting redirect rule** - The Next.js plugin handles all routing automatically
2. **Ensured the Next.js plugin is properly configured**

## 🚀 **Next Steps**

### Step 1: Push the Fixed Configuration

```bash
cd /Users/ferm/Documents/GitHub/Website
git add paul-factory/netlify.toml
git commit -m "Fix Netlify configuration for Next.js App Router"
git push origin main
```

### Step 2: Verify Netlify Settings

Go to your Netlify dashboard and check:

1. **Site Settings → Build & Deploy → Build Settings**
   - **Base directory:** Should be `paul-factory` ⚠️ (CRITICAL!)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (or leave empty - plugin handles it)

2. **Site Settings → Build & Deploy → Continuous Deployment**
   - Make sure it's connected to your GitHub repo
   - Branch: `main`

3. **Site Settings → Build & Deploy → Environment Variables**
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://your-site-name.netlify.app`
   - (Get the actual URL after first successful deploy)

### Step 3: Trigger a New Deploy

1. Go to **Deploys** tab in Netlify
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Or push a new commit to trigger auto-deploy

### Step 4: Check Build Logs

After deploying, check the build logs:

1. Click on the deployment
2. Look for:
   - ✅ "Installing @netlify/plugin-nextjs"
   - ✅ "Next.js detected"
   - ✅ "Build completed successfully"

If you see errors, check:
- Is the base directory set to `paul-factory`?
- Is the Next.js plugin installing?
- Are there any build errors?

## 🔧 **Common Issues & Fixes**

### Issue 1: "Cannot find package.json"
**Fix:** Set Base directory to `paul-factory` in Netlify settings

### Issue 2: "Plugin not found"
**Fix:** The plugin should auto-install. If not:
1. Go to Site Settings → Build & Deploy → Plugins
2. Make sure "@netlify/plugin-nextjs" is listed
3. If not, it will install on next deploy

### Issue 3: Still seeing 404
**Fix:** 
1. Clear Netlify cache: Site Settings → Build & Deploy → Clear cache and deploy site
2. Make sure base directory is `paul-factory`
3. Verify the plugin is installed (check build logs)

### Issue 4: Build succeeds but pages don't load
**Fix:**
1. Check that publish directory is `.next` (or empty)
2. Verify environment variable `NEXT_PUBLIC_SITE_URL` is set
3. Check browser console for errors

## 📋 **Checklist**

Before deploying:
- [x] `netlify.toml` is fixed (removed conflicting redirect)
- [ ] Base directory set to `paul-factory` in Netlify
- [ ] Next.js plugin will auto-install
- [ ] Environment variable `NEXT_PUBLIC_SITE_URL` added (after first deploy)

After deploying:
- [ ] Build completes successfully
- [ ] Homepage loads correctly
- [ ] All routes work (/about, /clients, /legal)
- [ ] Sitemap works: `/sitemap.xml`
- [ ] Robots.txt works: `/robots.txt`

## 🎯 **Most Important Setting**

**Base Directory = `paul-factory`**

This is the #1 cause of Netlify deployment issues. Make sure it's set correctly!

---

**After you push the fixed `netlify.toml` and verify the base directory setting, your site should work!** 🚀

