# Vercel Custom Domain Setup Guide

## 🚀 Quick Setup Steps

### 1. Add Your Domain in Vercel Dashboard

1. Go to your project on Vercel: https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your domain (e.g., `gtmwithferm.com`)
6. Follow the DNS configuration instructions

### 2. Configure DNS Records

Vercel will provide you with DNS records to add. Typically:

**For root domain (gtmwithferm.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP - check your dashboard for exact value)

**For www subdomain (www.gtmwithferm.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com` (check your dashboard for exact value)

**Or use Vercel's nameservers:**
- Replace your domain's nameservers with Vercel's (easier option)

### 3. Set Environment Variable

1. In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Click **Add New**
3. Add:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://yourdomain.com` (replace with your actual domain)
   - **Environments:** Production, Preview, Development (select all)
4. Click **Save**

### 4. Redeploy

After adding the environment variable:
- Vercel will automatically redeploy, OR
- Go to **Deployments** → Click **...** on latest deployment → **Redeploy**

### 5. Verify Domain

- Wait for DNS propagation (can take up to 48 hours, usually much faster)
- Check domain status in Vercel dashboard (should show "Valid Configuration")
- Visit your domain to verify it's working

## 📝 Files That Use the Domain

The following files will automatically use your domain via the `NEXT_PUBLIC_SITE_URL` environment variable:

- ✅ `src/app/layout.tsx` - Metadata and Open Graph URLs
- ✅ `src/app/sitemap.ts` - Sitemap URLs
- ✅ `src/app/robots.ts` - Robots.txt sitemap reference
- ✅ `src/app/manifest.ts` - Web app manifest

**Note:** The `public/robots.txt` file has a hardcoded URL that should be updated manually.

## 🔍 Verify Everything Works

After deployment, test:
- ✅ `https://yourdomain.com` - Homepage
- ✅ `https://yourdomain.com/sitemap.xml` - Sitemap
- ✅ `https://yourdomain.com/robots.txt` - Robots.txt
- ✅ `https://yourdomain.com/manifest.webmanifest` - Manifest
- ✅ Check page source - verify meta tags use your domain

## 🆘 Troubleshooting

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct in your domain registrar
- Check Vercel dashboard for any configuration errors

### SSL Certificate Issues
- Vercel automatically provisions SSL certificates
- Wait a few minutes after adding domain
- Check SSL status in Vercel dashboard

### Environment Variable Not Working
- Make sure variable name is exactly `NEXT_PUBLIC_SITE_URL`
- Redeploy after adding the variable
- Check that it's enabled for the correct environments

