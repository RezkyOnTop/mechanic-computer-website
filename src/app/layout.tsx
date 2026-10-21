import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mechanic-computer-website.vercel.app'),
  title: { default: 'Mechanic Computer | AI & Cloud Infrastructure', template: '%s | Mechanic Computer' },
  description: 'Mechanic Computer designs AI systems, cloud infrastructure, backend platforms, and DevOps delivery for teams doing serious work.',
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: '/',
    siteName: 'Mechanic Computer',
    title: 'Mechanic Computer | AI & Cloud Infrastructure',
    description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery built for serious work.',
  },
  twitter: { card: 'summary_large_image', title: 'Mechanic Computer | AI & Cloud Infrastructure', description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery.' },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
