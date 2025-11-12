# Vercel Deployment Guide

## Quick Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Authenticate with Vercel:**
   ```bash
   cd /Users/ferm/Documents/GitHub/Website/paul-factory
   vercel login
   ```
   - This will open a browser window for authentication
   - Complete the authentication in your browser

2. **Deploy to Production:**
   ```bash
   vercel --prod
   ```
   - First deployment will ask you to link the project
   - Follow the prompts to complete the deployment

### Option 2: Deploy via Vercel Dashboard (Easier)

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Sign in with your GitHub account

2. **Import Your Project:**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - **Important:** Set the **Root Directory** to `paul-factory`

3. **Configure Build Settings:**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install`

4. **Environment Variables (Optional):**
   - `NEXT_PUBLIC_SITE_URL` - Your site URL (e.g., `https://your-domain.vercel.app`)
   - Firebase config is already hardcoded in the project

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete

## Environment Variables

The following environment variable can be set in Vercel Dashboard (Settings → Environment Variables):

- `NEXT_PUBLIC_SITE_URL` - Your production site URL (defaults to `https://gtmwithferm.com` if not set)

## Post-Deployment

After successful deployment:

1. **Get Your Deployment URL:**
   - Vercel will provide a URL like `https://your-project.vercel.app`

2. **Set Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update `NEXT_PUBLIC_SITE_URL` environment variable to match your domain

3. **Verify Deployment:**
   - Visit your deployment URL
   - Check that all pages load correctly
   - Test the contact form (if applicable)

## Troubleshooting

### Build Fails
- Ensure Node.js version is 20.x (set in Vercel Settings → General → Node.js Version)
- Check that all dependencies are in `package.json`
- Review build logs in Vercel dashboard

### Pages Return 404
- Verify Root Directory is set to `paul-factory`
- Check that Next.js framework is detected
- Ensure all pages are in `src/app/` directory

### Environment Variables Not Working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding environment variables

## Current Configuration

- **Project Location:** `paul-factory/`
- **Framework:** Next.js 14.2.33
- **Build Command:** `npm run build`
- **Node Version:** 20.x (recommended)
- **Output Directory:** `.next` (auto-detected)

