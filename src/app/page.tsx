import type { Metadata } from 'next'
import CorporateSite from '@/components/CorporateSite'

export const metadata: Metadata = {
  title: 'Mechanic Computer | AI & Cloud Infrastructure',
  description: 'AI systems, cloud infrastructure, backend services, and DevOps delivery for modern businesses.',
}

export default function Home() {
  return <CorporateSite />
}
