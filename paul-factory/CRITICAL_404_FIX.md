# Critical 404 Fix - Next.js on Netlify

## 🔴 **The Problem**

You're still getting 404 errors. This means the Next.js plugin isn't handling routing correctly.

## ✅ **The Solution**

The issue is likely that the **Next.js plugin isn't installed or enabled**. Here's how to fix it:

### Step 1: Verify Plugin Installation

1. Go to your Netlify dashboard
2. Navigate to: **Site Settings → Build & Deploy → Plugins**
3. **Check if `@netlify/plugin-nextjs` is listed**
   - If **NOT listed**: It needs to be installed
   - If **listed but disabled**: Enable it

### Step 2: Force Plugin Installation

The plugin should auto-install, but if it's not working:

**Option A: Let it auto-install on next deploy**
- The `netlify.toml` file specifies the plugin
- It should install automatically on the next build
- Check build logs for: "Installing @netlify/plugin-nextjs"

**Option B: Manually install via package.json** (if auto-install fails)

Add to `package.json`:
```json
{
  "devDependencies": {
    "@netlify/plugin-nextjs": "^4.39.0"
  }
}
```

Then run `npm install` and push.

### Step 3: Critical Netlify Settings

**In Netlify Dashboard → Build & Deploy → Build Settings:**

1. **Base directory:** `paul-factory` ✅
2. **Build command:** `npm run build` ✅
3. **Publish directory:** 
   - **Option 1:** Leave **EMPTY** (let plugin handle it) ⭐ **RECOMMENDED**
   - **Option 2:** Set to `.next` (relative to base)
   - **Option 3:** Set to `paul-factory/.next` (absolute path)

**Try Option 1 first** - leave publish directory empty!

### Step 4: Clear Everything and Redeploy

1. **Clear Netlify cache:**
   - Site Settings → Build & Deploy → **Clear cache and deploy site**

2. **Or manually trigger:**
   - Deploys → **Trigger deploy** → **Clear cache and deploy site**

3. **Wait for build** (3-5 minutes)

4. **Check build logs** for:
   - ✅ "Installing @netlify/plugin-nextjs"
   - ✅ "Next.js detected"
   - ✅ "Plugin @netlify/plugin-nextjs completed successfully"
   - ✅ Build completes without errors

### Step 5: Verify Plugin is Working

After deployment, check build logs. You should see:

```
10:00:00 PM: Installing @netlify/plugin-nextjs
10:00:05 PM: Next.js detected
10:00:10 PM: Running build command...
10:02:00 PM: Plugin @netlify/plugin-nextjs completed successfully
```

If you **don't see** "Installing @netlify/plugin-nextjs" in the logs, the plugin isn't installing.

## 🔧 **Alternative: Manual Plugin Installation**

If the plugin still won't install automatically:

1. **Add to package.json:**
   ```json
   "devDependencies": {
     "@netlify/plugin-nextjs": "^4.39.0"
   }
   ```

2. **Install locally:**
   ```bash
   cd paul-factory
   npm install --save-dev @netlify/plugin-nextjs
   ```

3. **Commit and push:**
   ```bash
   git add package.json package-lock.json
   git commit -m "Add Netlify Next.js plugin as dependency"
   git push origin main
   ```

4. **Redeploy on Netlify**

## 🎯 **Most Likely Issue**

The **Next.js plugin isn't installing or running**. This is why you get 404s - without the plugin, Netlify doesn't know how to handle Next.js App Router routing.

## ✅ **What Should Happen**

When the plugin works correctly:
- ✅ Plugin installs automatically
- ✅ Plugin detects Next.js
- ✅ Plugin handles all routing
- ✅ No 404 errors
- ✅ All pages work

## 🆘 **If Still Not Working**

### Check Build Logs

Look for these in your Netlify build logs:

1. **Plugin installation:**
   ```
   Installing @netlify/plugin-nextjs
   ```

2. **Next.js detection:**
   ```
   Next.js detected
   ```

3. **Plugin completion:**
   ```
   Plugin @netlify/plugin-nextjs completed successfully
   ```

### If Plugin Isn't Installing

1. **Check netlify.toml is in the right place:**
   - Should be in: `paul-factory/netlify.toml`
   - Not in: root of repo

2. **Check netlify.toml syntax:**
   - Should have: `[[plugins]]` section
   - Should specify: `package = "@netlify/plugin-nextjs"`

3. **Try removing base directory from dashboard:**
   - Set base directory to: **empty/root**
   - Update `netlify.toml` to: `base = "paul-factory"`
   - This might help Netlify read the config correctly

## 📋 **Quick Checklist**

- [ ] Plugin is listed in Netlify Plugins section
- [ ] Plugin is enabled
- [ ] Build logs show "Installing @netlify/plugin-nextjs"
- [ ] Build logs show "Next.js detected"
- [ ] Publish directory is empty or `.next`
- [ ] Base directory is `paul-factory`
- [ ] Build completes successfully

---

**The key:** The Next.js plugin MUST be installed and running for routing to work! Check your build logs to see if it's installing. 🔍

