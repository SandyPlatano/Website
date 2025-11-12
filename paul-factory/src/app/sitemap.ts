import { MetadataRoute } from 'next'
import { siteInfo } from '@/content/site'

// TODO: Update this URL with your actual domain before launching
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/clients',
    '/legal',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}

