# Pre-Launch Checklist for GTMwithFerm Website

## 🎯 Critical (Must Do Before Launch)

### 1. Content & Copy Review
- [ ] **Replace placeholder legal content** (`src/content/legal.ts`)
  - Update company name, registration, publication director
  - Verify hosting information matches your actual hosting provider
  - Replace copyright notice with your actual copyright
  - Update credits section with actual credits
  
- [ ] **Verify all personal information is accurate**
  - Email: `andujar609@gmail.com` (verify this is correct)
  - Phone: `(347) 751-7446` (verify this is correct)
  - Location: "Based in Orlando • Working remotely" (verify this is correct)
  - LinkedIn URL: `https://www.linkedin.com/in/fermin-andujar/` (verify this is correct)
  - Calendly URL: `https://calendly.com/gtmbyferm/30min` (verify this is correct)

- [ ] **Review all content for accuracy**
  - About page content is accurate and professional
  - Project descriptions are accurate and up-to-date
  - All certifications are current and verifiable
  - Resume PDF is current and downloadable

- [ ] **Verify all images are appropriate**
  - Check that images are not placeholder/test images
  - Ensure all images have proper alt text
  - Verify image licensing if using stock photos
  - Optimize image file sizes for web

### 2. SEO & Metadata
- [ ] **Enhance metadata in `src/app/layout.tsx`**
  - Add Open Graph tags (og:title, og:description, og:image, og:url)
  - Add Twitter Card tags
  - Add canonical URLs
  - Add keywords meta tag (if desired)
  - Add author information
  
- [ ] **Create `public/robots.txt`**
  ```
  User-agent: *
  Allow: /
  Sitemap: https://yourdomain.com/sitemap.xml
  ```

- [ ] **Create sitemap.xml** (Next.js can generate this, but verify it works)
  - Ensure all pages are included
  - Set appropriate priority and change frequency
  - Update sitemap URL in robots.txt with your actual domain

- [ ] **Add page-specific metadata**
  - Add unique titles and descriptions for each page (home, about, clients, legal)
  - Add Open Graph images for each page (recommended: 1200x630px)

- [ ] **Verify structured data (JSON-LD)**
  - Add structured data for Person, Organization, or Portfolio
  - Test with Google's Rich Results Test tool

### 3. Security
- [ ] **Review security headers** (if using Vercel, many are handled automatically)
  - Content Security Policy (CSP)
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy

- [ ] **Remove any sensitive information**
  - No API keys in client-side code
  - No hardcoded secrets
  - No debug information in production

- [ ] **Verify external links are secure**
  - All external links use `rel="noreferrer noopener"`
  - Verify Calendly and LinkedIn links are correct

### 4. Legal & Compliance
- [ ] **Update legal page with real information**
  - Replace "Placeholder Studio" with your actual business name
  - Update registration/SIRET if applicable
  - Add actual publication director name
  - Update hosting information
  - Update copyright notice
  - Add privacy policy (if collecting any data)
  - Add terms of service (if applicable)

- [ ] **GDPR/Privacy Compliance** (if applicable)
  - Add privacy policy page
  - Add cookie consent banner (if using analytics/tracking)
  - Ensure data collection is disclosed

### 5. Performance Optimization
- [ ] **Run production build and test**
  ```bash
  npm run build
  npm run start
  ```
  - Verify build completes without errors
  - Test all pages load correctly
  - Check for console errors

- [ ] **Run Lighthouse audit**
  - Target: Performance > 90, Accessibility > 90, Best Practices > 90, SEO > 90
  - Fix any critical issues
  - Optimize images if needed
  - Check Core Web Vitals (LCP, FID, CLS)

- [ ] **Image optimization**
  - Ensure all images use Next.js Image component
  - Verify images are properly sized
  - Check that images load lazily where appropriate
  - Compress images if needed

- [ ] **Font optimization**
  - Verify fonts are loading correctly
  - Check font-display: swap is set (already done)
  - Consider preloading critical fonts

### 6. Functionality Testing
- [ ] **Test all navigation links**
  - Header navigation works on all pages
  - Footer links work correctly
  - Mobile menu works correctly
  - All internal links work

- [ ] **Test all interactive elements**
  - CTA buttons work correctly
  - Resume download works
  - Calendly link opens correctly
  - LinkedIn link works
  - Email and phone links work on mobile

- [ ] **Test responsive design**
  - Test on mobile devices (320px and up)
  - Test on tablets
  - Test on desktop (various sizes)
  - Verify all content is readable at all sizes
  - Check that images scale properly

- [ ] **Test cross-browser compatibility**
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)
  - Mobile Safari (iOS)
  - Chrome Mobile (Android)

### 7. Analytics & Tracking
- [ ] **Set up analytics** (if desired)
  - Google Analytics 4
  - Or other analytics tool (Plausible, Fathom, etc.)
  - Verify tracking code is working

- [ ] **Set up error tracking** (optional but recommended)
  - Sentry or similar error tracking service
  - Monitor for JavaScript errors

- [ ] **Set up uptime monitoring** (optional)
  - UptimeRobot, Pingdom, or similar
  - Get notified if site goes down

## 📋 Important (Should Do Before Launch)

### 8. Domain & DNS
- [ ] **Purchase and configure domain**
  - Purchase domain name
  - Configure DNS settings
  - Set up SSL certificate (usually automatic with hosting)

- [ ] **Verify domain configuration**
  - Domain points to correct hosting
  - SSL certificate is valid and auto-renewing
  - www and non-www redirects are set up correctly
  - Choose one (www or non-www) and redirect the other

### 9. Favicon & App Icons
- [ ] **Add favicon**
  - Create favicon.ico
  - Add to `public/favicon.ico`
  - Add to `src/app/icon.png` or `src/app/icon.ico` (Next.js 13+)

- [ ] **Add app icons** (optional but recommended)
  - Apple touch icon
  - Android chrome icons
  - Add to `public/` or use Next.js metadata API

### 10. Social Media
- [ ] **Create social media preview images**
  - Open Graph image (1200x630px)
  - Twitter Card image (1200x675px)
  - Add to `public/` and reference in metadata

- [ ] **Test social media sharing**
  - Test Facebook sharing debugger
  - Test Twitter Card validator
  - Test LinkedIn post inspector
  - Verify images and descriptions show correctly

### 11. Email & Contact
- [ ] **Verify email is monitored**
  - Set up email forwarding if using custom domain
  - Verify `andujar609@gmail.com` is monitored
  - Test contact form if you have one

- [ ] **Verify Calendly integration**
  - Test Calendly link works
  - Verify booking flow works
  - Check timezone settings

### 12. Backup & Version Control
- [ ] **Ensure code is in version control**
  - Code is pushed to GitHub/GitLab
  - .env files are in .gitignore
  - Sensitive data is not committed

- [ ] **Set up backups** (if applicable)
  - Database backups (if using database)
  - Content backups
  - Regular backup schedule

## 🔍 Nice to Have (Can Do After Launch)

### 13. Advanced Features
- [ ] **Add search functionality** (if site grows large)
- [ ] **Add blog/news section** (if desired)
- [ ] **Add testimonials section** (if you have testimonials)
- [ ] **Add case studies** (detailed project pages)

### 14. Monitoring & Maintenance
- [ ] **Set up performance monitoring**
- [ ] **Set up SEO monitoring** (Google Search Console)
- [ ] **Set up regular content updates schedule**
- [ ] **Plan for regular security updates**

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` and fix any errors
- [ ] Test production build locally (`npm run start`)
- [ ] Review all environment variables
- [ ] Verify all secrets are in environment variables (not hardcoded)

### Deployment
- [ ] Deploy to staging environment first (if available)
- [ ] Test staging environment thoroughly
- [ ] Deploy to production
- [ ] Verify production deployment works
- [ ] Check all pages load correctly
- [ ] Verify SSL certificate is active
- [ ] Test on multiple devices and browsers

### Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Analytics is tracking
- [ ] Test all forms and contact methods
- [ ] Monitor error logs for first 24-48 hours
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Verify mobile-friendliness in Google Search Console

## 📝 Quick Reference

### Key Files to Update:
1. `src/content/legal.ts` - Legal information
2. `src/content/site.ts` - Site information (already looks good)
3. `src/app/layout.tsx` - Metadata and SEO
4. `public/robots.txt` - Create this file
5. `public/favicon.ico` - Add favicon
6. `next.config.mjs` - Review configuration

### Key Commands:
```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Run linter
npm run lint

# Development server
npm run dev
```

### Useful Tools:
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [Google Search Console](https://search.google.com/search-console) - SEO monitoring
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [Rich Results Test](https://search.google.com/test/rich-results) - Structured data testing
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - OG tag testing
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Twitter card testing

## 🎉 Final Steps

1. **Do a final walkthrough** - Go through every page as if you're a visitor
2. **Ask someone else to review** - Fresh eyes catch things you might miss
3. **Test on a slow connection** - Verify site works on slower networks
4. **Check on real devices** - Don't just rely on browser dev tools
5. **Monitor after launch** - Keep an eye on analytics and error logs

---

**Good luck with your launch! 🚀**

If you need help implementing any of these items, let me know and I can assist you with the specific tasks.

