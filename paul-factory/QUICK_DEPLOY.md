# Quick Deploy Instructions

## 🚀 Deploy Your Website Now

Your code is ready! Here's the fastest way to deploy:

### Step 1: Push to GitHub (if needed)

If you haven't pushed your changes yet:
```bash
cd /Users/ferm/Documents/GitHub/Website
git push origin main
```
(You'll need to authenticate with GitHub - use a personal access token if needed)

### Step 2: Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest - Recommended)**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import `SandyPlatano/Website`
5. **IMPORTANT:** Set "Root Directory" to `paul-factory`
6. Click "Deploy"
7. Wait 2-3 minutes for build
8. Your site will be live! 🎉

**Option B: Via Vercel CLI**

Run these commands:
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
vercel login
vercel
```

Follow the prompts. When asked:
- "Set up and deploy?" → Yes
- "Which scope?" → Your account
- "Link to existing project?" → No (first time)
- "What's your project's name?" → gtmwithferm (or press Enter)
- "In which directory is your code located?" → ./ (current directory)

After first deployment, deploy to production:
```bash
vercel --prod
```

### Step 3: Set Environment Variable

After deployment, add this environment variable in Vercel:
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `https://your-actual-domain.vercel.app` (or your custom domain)

Go to: Project Settings → Environment Variables → Add

### Step 4: Update Domain URLs (After First Deploy)

Once you have your live URL, update these files:
1. `src/app/layout.tsx` - Replace `https://yourdomain.com`
2. `src/app/sitemap.ts` - Replace `https://yourdomain.com`
3. `src/app/robots.ts` - Replace `https://yourdomain.com`
4. `src/app/manifest.ts` - Replace `https://yourdomain.com`
5. `public/robots.txt` - Replace `https://yourdomain.com`

Then commit and push:
```bash
git add .
git commit -m "Update domain URLs"
git push origin main
```

Vercel will automatically redeploy!

---

**That's it!** Your website will be live in minutes. 🚀

For detailed instructions, see `DEPLOYMENT_GUIDE.md`

