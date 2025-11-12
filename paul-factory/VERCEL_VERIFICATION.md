# Vercel Configuration Verification Checklist

Use this checklist to verify your Vercel settings match your local setup.

## 🔍 Step-by-Step Verification

### 1. Check Root Directory (CRITICAL)

**In Vercel Dashboard:**
1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **General**
4. Scroll to **Root Directory**
5. **Should be:** `paul-factory`
6. **If different:** Click Edit → Set Root Directory → Choose `paul-factory` → Save

**Why this matters:** If Vercel builds from the root directory instead of `paul-factory`, it won't find your `package.json`, `next.config.mjs`, or any of your source files.

---

### 2. Check Build Settings

**In Vercel Dashboard → Settings → General:**

- **Framework Preset:** Should be `Next.js` (auto-detected)
- **Build Command:** Should be `npm run build` or `next build`
- **Output Directory:** Should be `.next` (auto-detected)
- **Install Command:** Should be `npm install`
- **Node.js Version:** Should be `20.x` (recommended) or match your local version

**To check your local Node version:**
```bash
node --version
```

---

### 3. Check Environment Variables

**In Vercel Dashboard → Settings → Environment Variables:**

Check if you need any of these:
- `NEXT_PUBLIC_SITE_URL` - Your site URL (defaults to `https://gtmwithferm.com` if not set)

**Note:** Your Firebase config is hardcoded in `src/lib/firebase.ts`, so no env vars needed for that.

---

### 4. Compare Local Production Build

**Test locally:**
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
npm run build
npm run start
# Visit http://localhost:3000
```

**Compare:**
- Does local production build look like your dev server? ✅
- Does local production build look like Vercel? ❓
- If local production looks wrong, it's a build issue
- If local production looks right but Vercel doesn't, it's a Vercel config issue

---

### 5. Check Build Logs

**In Vercel Dashboard:**
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **Build Logs**
4. Look for:
   - ✅ "Build successful" or "Compiled successfully"
   - ❌ "Cannot find package.json" → Root directory issue
   - ❌ "Module not found" → Dependencies issue
   - ❌ CSS/styling errors → Tailwind config issue

---

### 6. Check Git Sync

**Verify your changes are on GitHub:**
```bash
cd /Users/ferm/Documents/GitHub/Website
git log --oneline -5
# Check if your latest changes are here
```

**Verify Vercel is connected to the right repo:**
- Vercel Dashboard → Settings → Git
- Should show: `SandyPlatano/Website`
- Branch: `main`

---

### 7. Clear Build Cache

**If things still look different:**
1. Vercel Dashboard → Settings → General
2. Scroll to **Build Cache**
3. Click **Clear Build Cache**
4. Go to **Deployments** tab
5. Click **Redeploy** on latest deployment

---

## 🎯 Quick Diagnostic Questions

Answer these to identify the issue:

1. **Does your local production build (`npm run start`) look correct?**
   - Yes → Vercel config issue (likely root directory)
   - No → Build issue (check Tailwind, CSS, dependencies)

2. **Are your latest changes visible on GitHub?**
   - Yes → Git is synced
   - No → Need to commit and push

3. **What specifically looks different on Vercel?**
   - Missing styles/CSS → Tailwind purging or root directory
   - Missing content → Root directory or build cache
   - Wrong layout → CSS/styling issue
   - Missing images → Static assets not deployed

4. **Do Vercel build logs show errors?**
   - No errors → Config issue (root directory most likely)
   - Errors shown → Fix those specific errors

---

## 🚀 Quick Fix Commands

**Test production build locally:**
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
npm run build
npm run start
# Visit http://localhost:3000
```

**Check if everything is committed:**
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
git status
git log origin/main..HEAD
```

**Force fresh build:**
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
rm -rf .next
npm run build
```

---

## 📋 Most Common Issues & Fixes

### Issue: "Site looks completely different"
**Fix:** Root directory not set to `paul-factory`

### Issue: "Some styles missing"
**Fix:** 
1. Check root directory
2. Clear build cache
3. Check Tailwind config content paths

### Issue: "Content not updated"
**Fix:**
1. Verify changes are pushed to GitHub
2. Clear build cache
3. Redeploy

### Issue: "Images not loading"
**Fix:**
1. Check if images are in `public/` directory
2. Verify images are committed to git
3. Check image paths in code

---

## ✅ Verification Checklist

Before asking for help, verify:

- [ ] Root Directory is `paul-factory` in Vercel
- [ ] Build Command is `npm run build`
- [ ] Node version matches local (20.x recommended)
- [ ] All changes committed and pushed to GitHub
- [ ] Build cache cleared in Vercel
- [ ] Local production build tested (`npm run build && npm run start`)
- [ ] Build logs checked in Vercel (no errors)
- [ ] Browser console checked (no JavaScript errors)

---

## 🆘 Still Need Help?

If you've checked everything above and it's still not working:

1. **Share specific differences:**
   - What looks different? (screenshot if possible)
   - Which page/section?
   - What should it look like?

2. **Share build logs:**
   - Copy the build log from Vercel
   - Look for any errors or warnings

3. **Share browser console:**
   - Open DevTools on Vercel site
   - Check Console tab for errors
   - Check Network tab for failed requests

4. **Compare file structure:**
   - Verify all files in `src/` are committed
   - Check that `public/` assets are committed
   - Ensure `package.json` is up to date

