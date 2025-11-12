import { MetadataRoute } from 'next'

// TODO: Update this URL with your actual domain before launching
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GTMwithFerm',
    short_name: 'GTMwithFerm',
    description: 'Building go-to-market systems that drive results, remove friction, and amplify teams.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f1eb',
    theme_color: '#161528',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

