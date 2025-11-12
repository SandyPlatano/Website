import { MetadataRoute } from 'next'

// TODO: Update this URL with your actual domain before launching
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Disallow API routes if you add them
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

