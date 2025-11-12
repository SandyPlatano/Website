import { MetadataRoute } from 'next'

// Site URL - can be overridden with NEXT_PUBLIC_SITE_URL environment variable
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtmwithferm.netlify.app'

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

