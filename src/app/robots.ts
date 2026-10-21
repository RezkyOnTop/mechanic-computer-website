import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://mechaniccomputer.biz.id/sitemap.xml',
    host: 'https://mechaniccomputer.biz.id',
  }
}
