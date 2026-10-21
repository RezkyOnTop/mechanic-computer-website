import type { Metadata } from 'next'
import CorporateSite from '@/components/CorporateSite'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return <CorporateSite />
}
