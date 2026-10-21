import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mechaniccomputer.biz.id'),
  title: { default: 'Mechanic Computer | AI & Cloud Infrastructure', template: '%s | Mechanic Computer' },
  description: 'Mechanic Computer designs AI systems, cloud infrastructure, backend platforms, and DevOps delivery for teams doing serious work.',
  openGraph: {
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mechanic Computer — AI & Cloud Infrastructure' }],
    locale: 'en_ID',
    url: '/',
    siteName: 'Mechanic Computer',
    title: 'Mechanic Computer | AI & Cloud Infrastructure',
    description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery built for serious work.',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'], title: 'Mechanic Computer | AI & Cloud Infrastructure', description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery.' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mechanic Computer',
  url: 'https://mechaniccomputer.biz.id',
  description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery.',
  areaServed: 'ID',
  address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
  email: 'hello@mechaniccomputer.co.id',
  knowsAbout: ['AI systems', 'Cloud infrastructure', 'Backend engineering', 'DevOps'],
}

export const viewport: Viewport = { themeColor: '#060e1a', colorScheme: 'dark' }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
