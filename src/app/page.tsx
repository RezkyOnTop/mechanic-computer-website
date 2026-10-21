import type { Metadata } from 'next'
import CorporateSite from '@/components/CorporateSite'

export const metadata: Metadata = {
  title: 'Mechanic Computer | AI & Cloud Infrastructure',
  description: 'Mechanic Computer designs AI systems, cloud infrastructure, backend platforms, and DevOps delivery for teams doing serious work.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mechanic Computer | AI & Cloud Infrastructure',
    description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery built for serious work.',
    url: '/',
  },
  twitter: {
    title: 'Mechanic Computer | AI & Cloud Infrastructure',
    description: 'AI systems, cloud infrastructure, backend platforms, and DevOps delivery built for serious work.',
  },
}

export default function Home() {
  return <CorporateSite />
}
