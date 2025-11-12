import { MetadataRoute } from 'next'
import { siteInfo } from '@/content/site'

// Site URL - can be overridden with NEXT_PUBLIC_SITE_URL environment variable
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtmwithferm.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/clients',
    '/contact',
    '/legal',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}

