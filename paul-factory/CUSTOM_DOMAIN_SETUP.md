# Custom Domain Setup Guide for Vercel

## 🚀 Quick Steps

### Step 1: Add Domain in Vercel Dashboard

1. Go to your project on Vercel: https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your domain (e.g., `gtmwithferm.com`)
6. Click **Add**

### Step 2: Configure DNS Records

Vercel will show you the DNS records you need to add. You have two options:

#### Option A: Use Vercel's Nameservers (Easier - Recommended)

1. In Vercel, you'll see nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. Go to your domain registrar (where you bought the domain)
3. Find **DNS Settings** or **Nameservers**
4. Replace your current nameservers with Vercel's nameservers
5. Save and wait for propagation (usually 5-30 minutes)

#### Option B: Add DNS Records Manually

If you prefer to keep your current nameservers, add these records:

**For root domain (gtmwithferm.com):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (check Vercel dashboard for exact IP)

**For www subdomain (www.gtmwithferm.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com` (check Vercel dashboard for exact value)

### Step 3: Set Environment Variable

1. In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Click **Add New**
3. Add:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://yourdomain.com` (replace with your actual domain)
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
4. Click **Save**

### Step 4: Redeploy

After adding the environment variable:
1. Go to **Deployments** tab
2. Click **...** (three dots) on the latest deployment
3. Click **Redeploy**
4. Select **Use existing Build Cache** (optional)
5. Click **Redeploy**

### Step 5: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Usually works within 30 minutes
- Check status in Vercel dashboard (should show "Valid Configuration" when ready)

### Step 6: Verify Everything Works

Test these URLs:
- ✅ `https://yourdomain.com` - Homepage
- ✅ `https://www.yourdomain.com` - Homepage (if configured)
- ✅ `https://yourdomain.com/sitemap.xml` - Sitemap
- ✅ `https://yourdomain.com/robots.txt` - Robots.txt
- ✅ `https://yourdomain.com/manifest.webmanifest` - Manifest

## 📝 Files That Will Be Updated

Once you provide your domain, these files will be updated:
- ✅ `src/app/layout.tsx` - Metadata URLs
- ✅ `src/app/sitemap.ts` - Sitemap URLs
- ✅ `src/app/robots.ts` - Robots.txt reference
- ✅ `src/app/manifest.ts` - Manifest URLs
- ✅ `public/robots.txt` - Hardcoded sitemap URL

## 🔍 Verify Domain Configuration

In Vercel dashboard, check:
- Domain shows "Valid Configuration" ✅
- SSL certificate is issued (automatic, takes a few minutes)
- Both root and www domains work (if configured)

## 🆘 Troubleshooting

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check Vercel dashboard for configuration errors
- Use `dig yourdomain.com` or `nslookup yourdomain.com` to check DNS

### SSL Certificate Issues
- Vercel automatically provisions SSL (Let's Encrypt)
- Wait 5-10 minutes after adding domain
- Check SSL status in Vercel dashboard

### Environment Variable Not Working
- Make sure variable name is exactly `NEXT_PUBLIC_SITE_URL`
- Redeploy after adding the variable
- Check that it's enabled for Production environment

### www Redirect Not Working
- In Vercel, go to Domains settings
- Enable "Redirect www to root" or "Redirect root to www" as preferred

