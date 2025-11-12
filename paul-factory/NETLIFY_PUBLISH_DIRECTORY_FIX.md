# Netlify Publish Directory Fix

## 🔴 **The Problem**

Netlify won't let you change the publish directory from `paul-factory/` - it keeps reverting.

## ✅ **The Solution**

When you set **Base directory** to `paul-factory` in the Netlify dashboard, the **Publish directory** becomes **relative to that base directory**.

### Understanding the Paths

- **Base directory:** `paul-factory` (where Netlify runs the build)
- **Build output:** Next.js creates `.next` folder inside `paul-factory/`
- **Publish directory:** Should point to where the built files are

### The Fix

Since your base directory is `paul-factory`, and Next.js builds to `.next` inside that directory, you have two options:

## Option 1: Set Publish Directory Relative to Base (Recommended)

In Netlify dashboard:

1. **Base directory:** `paul-factory` ✅ (keep this)
2. **Publish directory:** `.next` (relative to base directory)

This means Netlify will look for: `paul-factory/.next`

**How to set it:**
- In the Publish directory field, type: `.next`
- Don't include `paul-factory/` - it's already the base
- Save the settings

## Option 2: Use Full Path (If Option 1 Doesn't Work)

If Netlify still won't accept `.next`, try:

1. **Base directory:** `paul-factory` ✅
2. **Publish directory:** `paul-factory/.next`

This explicitly tells Netlify the full path from repo root.

## Option 3: Let the Next.js Plugin Handle It (Best)

The `@netlify/plugin-nextjs` plugin should automatically handle the publish directory. To make this work:

1. **In Netlify dashboard:**
   - **Base directory:** `paul-factory` ✅
   - **Publish directory:** Leave **EMPTY** or delete the value
   - The plugin will auto-detect the correct directory

2. **Verify the plugin is installed:**
   - Go to: **Site Settings → Build & Deploy → Plugins**
   - Should see: `@netlify/plugin-nextjs`
   - If not, it will install on next deploy

## 🔧 **Step-by-Step Fix**

### Try This First:

1. Go to **Site Settings → Build & Deploy → Build Settings**
2. Find **"Publish directory"** field
3. **Clear the field completely** (delete `paul-factory/`)
4. **Leave it empty**
5. Click **"Save"**
6. The Next.js plugin will handle it automatically

### If That Doesn't Work:

1. Set **Publish directory** to: `.next` (without `paul-factory/`)
2. Save
3. The path will be: `paul-factory/.next` (base + publish)

### If Netlify Still Forces `paul-factory/`:

1. Set **Publish directory** to: `paul-factory/.next`
2. This explicitly sets the full path
3. Save and redeploy

## 🎯 **Why This Happens**

When you set a **Base directory** in Netlify:
- Netlify changes the working directory to that folder
- All paths become relative to that base directory
- The publish directory should be relative to the base, not the repo root

## ✅ **Correct Configuration**

**In Netlify Dashboard:**
```
Base directory:     paul-factory
Publish directory:  .next          (relative to base)
                     OR
                     (empty)        (let plugin handle it)
```

**What This Means:**
- Netlify runs: `cd paul-factory && npm run build`
- Build creates: `paul-factory/.next/`
- Netlify publishes from: `paul-factory/.next/`

## 🚀 **After Fixing**

1. **Save settings** in Netlify
2. **Clear cache and redeploy:**
   - Go to: **Deploys → Trigger deploy → Clear cache and deploy site**
3. **Wait for build** (2-3 minutes)
4. **Check build logs** for:
   - ✅ "Installing @netlify/plugin-nextjs"
   - ✅ "Next.js detected"
   - ✅ Build completes successfully
5. **Visit your site** - should work!

## 🆘 **If Still Not Working**

If Netlify absolutely won't let you change it:

1. **Remove Base directory** from dashboard (set to empty/root)
2. **Update `netlify.toml`** to handle everything:
   ```toml
   [build]
   base = "paul-factory"
   command = "npm run build"
   publish = "paul-factory/.next"
   ```
3. **Push the updated `netlify.toml`**
4. **Redeploy**

---

**The key:** Publish directory should be `.next` (relative to base) or `paul-factory/.next` (absolute from repo root), NOT just `paul-factory/`!

Try leaving it **empty** first - the Next.js plugin should handle it automatically! 🎯

