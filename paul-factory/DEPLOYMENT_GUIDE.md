# Deployment Guide - GTMwithFerm Website

## 🚀 Quick Deploy to Vercel (Recommended for Next.js)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git push origin main
   ```
   (You may need to authenticate with GitHub)

2. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with your GitHub account

3. **Import your project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `SandyPlatano/Website`
   - Vercel will auto-detect it's a Next.js project

4. **Configure the project:**
   - **Root Directory:** Set to `paul-factory` (important!)
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

5. **Add Environment Variable:**
   - Go to "Environment Variables"
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://your-actual-domain.com`
   - (Replace with your actual domain after first deployment)

6. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

7. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to your project:**
   ```bash
   cd paul-factory
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked for root directory, specify: `paul-factory` or `.`
   - When asked to link to existing project, choose "No" for first deployment

5. **Set environment variable:**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   ```
   - Enter your domain URL when prompted

6. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] **Updated domain URLs** in:
  - `src/app/layout.tsx`
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
  - `src/app/manifest.ts`
  - `public/robots.txt`

- [ ] **Created favicon** and placed in `public/` folder:
  - `favicon.ico`
  - `icon-192.png`
  - `icon-512.png`
  - `apple-touch-icon.png`

- [ ] **Created social media images:**
  - `og-image.jpg` (1200x630px)
  - `twitter-image.jpg` (1200x675px)
  - Uncommented in `src/app/layout.tsx`

- [ ] **Updated legal content** in `src/content/legal.ts`

- [ ] **Added Twitter handle** in `src/app/layout.tsx`

- [ ] **Verified contact information** is correct

## 🔧 Vercel Configuration

If you need a `vercel.json` file (usually not needed for Next.js), create it in the `paul-factory` folder:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

## 🌐 Other Deployment Options

### Netlify

1. Connect GitHub repo to Netlify
2. Set build command: `cd paul-factory && npm run build`
3. Set publish directory: `paul-factory/.next`
4. Add environment variable: `NEXT_PUBLIC_SITE_URL`

### AWS Amplify

1. Connect GitHub repo
2. Set app root: `paul-factory`
3. Build settings: Auto-detect Next.js
4. Add environment variable: `NEXT_PUBLIC_SITE_URL`

### Self-Hosted (VPS/Server)

1. Build the project:
   ```bash
   cd paul-factory
   npm install
   npm run build
   ```

2. Start the server:
   ```bash
   npm run start
   ```

3. Use PM2 or similar for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "gtmwithferm" -- start
   ```

4. Set up reverse proxy (Nginx/Apache) pointing to port 3000

## ✅ Post-Deployment Checklist

After deploying:

- [ ] Visit your live site and test all pages
- [ ] Verify sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`
- [ ] Verify manifest: `https://yourdomain.com/manifest.webmanifest`
- [ ] Test 404 page (visit a non-existent URL)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit on live site
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)
- [ ] Verify all links work
- [ ] Check for console errors

## 🐛 Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Ensure `package.json` is in the `paul-factory` folder
3. Verify Node.js version (Vercel auto-detects, but you can specify in `package.json`):
   ```json
   "engines": {
     "node": ">=18.18.0"
   }
   ```

### Environment Variables Not Working

- Make sure variable name is exactly `NEXT_PUBLIC_SITE_URL`
- Redeploy after adding environment variables
- Check that variable is set for "Production" environment

### Domain Not Working

- Check DNS settings
- Wait for DNS propagation (can take up to 48 hours)
- Verify SSL certificate is active (automatic with Vercel)

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support

---

**Ready to deploy?** Start with Option 1 (Vercel Dashboard) - it's the easiest! 🚀

