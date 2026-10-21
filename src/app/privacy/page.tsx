import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './legal.module.css'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Mechanic Computer handles information sent through this website.',
  alternates: { canonical: '/privacy' },
}

export default function Privacy() {
  return (
    <main className={styles.legal}>
      <div className={styles.inner}>
        <Link href="/" className={styles.back}>
          ← Mechanic Computer
        </Link>

        <p className={styles.eyebrow}>Legal</p>
        <h1>Privacy notice</h1>
        <p className={styles.updated}>Last updated 22 October 2026</p>

        <section>
          <h2>What this site collects</h2>
          <p>
            This website has no accounts, no cookies, no analytics scripts, and no tracking pixels. Nothing is stored on
            your device when you browse.
          </p>
        </section>

        <section>
          <h2>The enquiry form</h2>
          <p>
            The enquiry form does not send data to our servers. When you submit it, your email application opens with your
            name, address, and message pre-filled. Nothing leaves your device until you press send in that application.
          </p>
          <p>
            If you do send the email, we receive your name, your email address, and whatever you write in the message. We use
            it to reply to you and to understand the work being asked about. We do not sell it, rent it, or add you to a
            mailing list.
          </p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>
            Enquiries are kept for as long as needed to handle the conversation. If no work follows, correspondence is
            deleted. You can ask us to delete it sooner and we will.
          </p>
        </section>

        <section>
          <h2>Third parties</h2>
          <p>
            The site is served by Vercel, which processes standard technical request data such as IP address and browser
            type to deliver pages and protect against abuse. We do not add further third-party services on top of that.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For anything related to this notice, write to{' '}
            <a href="mailto:project@mechaniccomputer.biz.id">project@mechaniccomputer.biz.id</a>.
          </p>
        </section>

        <div className={styles.bottom}>
          <Link href="/">Home</Link>
          <span>Mechanic Computer · Banjarbaru, Indonesia</span>
        </div>
      </div>
    </main>
  )
}
