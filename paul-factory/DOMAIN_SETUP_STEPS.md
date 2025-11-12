# Domain Setup Steps for gtmwithferm.com

## ✅ Code Files Updated

All code files have been updated to use `https://gtmwithferm.com`:
- ✅ `src/app/layout.tsx`
- ✅ `src/app/sitemap.ts`
- ✅ `src/app/robots.ts`
- ✅ `src/app/manifest.ts`
- ✅ `public/robots.txt`

## 🚀 Next Steps in Vercel Dashboard

### Step 1: Add Your Domain

1. Go to https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `gtmwithferm.com`
6. Click **Add**

### Step 2: Configure DNS

Vercel will show you DNS configuration options. Choose one:

**Option A: Use Vercel Nameservers (Easiest)**
- Vercel will show you nameservers (e.g., `ns1.vercel-dns.com`)
- Go to your domain registrar
- Replace your current nameservers with Vercel's
- Save and wait 5-30 minutes

**Option B: Add DNS Records Manually**
- Add an A record: `@` → `76.76.21.21` (check Vercel for exact IP)
- Add a CNAME: `www` → `cname.vercel-dns.com` (check Vercel for exact value)

### Step 3: Set Environment Variable

1. In Vercel Dashboard → **Settings** → **Environment Variables**
2. Click **Add New**
3. Add:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://gtmwithferm.com`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
4. Click **Save**

### Step 4: Commit and Push Changes

```bash
cd /Users/ferm/Documents/GitHub/Website
git add paul-factory/src/app/layout.tsx paul-factory/src/app/sitemap.ts paul-factory/src/app/robots.ts paul-factory/src/app/manifest.ts paul-factory/public/robots.txt
git commit -m "Update all URLs to use gtmwithferm.com domain"
git push origin main
```

This will trigger an automatic deployment on Vercel.

### Step 5: Wait for DNS & SSL

- DNS propagation: 5 minutes to 48 hours (usually 30 minutes)
- SSL certificate: Automatically provisioned by Vercel (5-10 minutes)
- Check status in Vercel dashboard (should show "Valid Configuration")

### Step 6: Verify Everything Works

Test these URLs:
- ✅ `https://gtmwithferm.com` - Homepage
- ✅ `https://gtmwithferm.com/sitemap.xml` - Sitemap
- ✅ `https://gtmwithferm.com/robots.txt` - Robots.txt
- ✅ `https://gtmwithferm.com/manifest.webmanifest` - Manifest

## 📋 Checklist

- [ ] Domain added in Vercel (Settings → Domains)
- [ ] DNS configured (nameservers or DNS records)
- [ ] Environment variable `NEXT_PUBLIC_SITE_URL` set to `https://gtmwithferm.com`
- [ ] Code changes committed and pushed
- [ ] Deployment successful
- [ ] Domain shows "Valid Configuration" in Vercel
- [ ] SSL certificate issued (automatic)
- [ ] Site accessible at https://gtmwithferm.com

## 🎉 You're All Set!

Once DNS propagates, your site will be live at **https://gtmwithferm.com**!

