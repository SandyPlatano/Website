# Vercel Deployment Fix Guide

## 🔧 The Problem

Your Next.js project is in the `paul-factory` subdirectory, but Vercel needs to know where to find it.

## ✅ Solution: Configure Root Directory in Vercel Dashboard

### Step 1: Go to Project Settings

1. Go to https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **General**

### Step 2: Set Root Directory

1. Scroll down to **Root Directory**
2. Click **Edit**
3. Select **Set Root Directory**
4. Choose: `paul-factory`
5. Click **Save**

### Step 3: Verify Build Settings

After setting the root directory, Vercel should auto-detect:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (or `next build`)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install`

### Step 4: Deploy

1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment, OR
3. Push a new commit to trigger automatic deployment

## 🚀 Alternative: Deploy via CLI

If you prefer using the CLI:

```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
vercel --cwd . --yes
```

Or from the root:

```bash
cd /Users/ferm/Documents/GitHub/Website
vercel --cwd paul-factory --yes
```

## 📋 Checklist

- [ ] Root Directory set to `paul-factory` in Vercel dashboard
- [ ] Build command is `npm run build`
- [ ] Output directory is `.next` (auto-detected)
- [ ] Deployment succeeds
- [ ] Site is accessible at Vercel URL

## 🐛 Troubleshooting

### Build Fails: "Cannot find package.json"
**Fix:** Make sure Root Directory is set to `paul-factory` in Vercel settings

### Build Fails: "Module not found"
**Fix:** 
1. Verify Root Directory is `paul-factory`
2. Check that `node_modules` exists in `paul-factory/`
3. Try clearing build cache in Vercel dashboard

### Pages Return 404
**Fix:** 
1. Verify Next.js framework is detected
2. Check that Output Directory is `.next`
3. Ensure all pages are in `paul-factory/src/app/`

### Deployment Stuck
**Fix:**
1. Cancel the deployment
2. Clear build cache (Settings → General → Clear Build Cache)
3. Redeploy

## 📝 Current Configuration

- **Project Location:** `/paul-factory/`
- **Build Command:** `npm run build`
- **Framework:** Next.js 14.2.3
- **Node Version:** 20.x (recommended)

## ✅ After Successful Deployment

Once deployed, you'll get a Vercel URL like:
- `https://your-project.vercel.app`

Then you can:
1. Add your custom domain (Settings → Domains)
2. Set environment variable `NEXT_PUBLIC_SITE_URL` to your domain
3. Update code files with your domain (I can help with this!)

