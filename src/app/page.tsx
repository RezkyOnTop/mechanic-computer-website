import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import TechStack from '@/components/TechStack'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mechanic Computer - AI & Cloud Solutions',
  description: 'AI integration, cloud infrastructure, and DevOps solutions for businesses in Indonesia and Southeast Asia.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
