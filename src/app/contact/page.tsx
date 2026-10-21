import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import styles from '../content.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Mechanic Computer. AI systems, cloud infrastructure, backend platforms, and DevOps delivery from Banjarbaru, South Kalimantan.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Mechanic Computer',
    description: 'Tell us what is changing, stuck, or must run better.',
    url: '/contact',
  },
}

const mailto = 'mailto:project@mechaniccomputer.biz.id'

export default function Contact() {
  return (
    <PageShell active="/contact">
      <main className={styles.wrap}>
        <p className={styles.eyebrow}>Start a project</p>
        <h1>
          Bring the hard part
          <br />
          <em>to the table.</em>
        </h1>
        <p className={styles.lead}>
          Tell us what is changing, what is stuck, or what must run better. You will get a direct answer from an engineer,
          not a sales sequence.
        </p>

        <div className={styles.links}>
          <a href={mailto}>
            <small>Email</small>
            <span>project@mechaniccomputer.biz.id</span>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://wa.me/6289580319561" target="_blank" rel="noopener noreferrer">
            <small>WhatsApp</small>
            <span>+62 895-8031-95612</span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>

        <div className={styles.facts}>
          <div>
            <span>Office</span>
            <b>Jl. Barjad, Loktabat Utara, Banjarbaru Utara, Banjarbaru, Kalimantan Selatan 70714</b>
          </div>
          <div>
            <span>Reply time</span>
            <b>Usually within one business day, UTC+8</b>
          </div>
        </div>

        <div className={styles.prose} style={{ marginTop: 56 }}>
          <h2>What helps us answer well</h2>
          <p>
            A short note is enough. Tell us the system or process involved, what is currently in the way, and any deadline
            that is already fixed. If you have a diagram, a stack trace, or a screenshot, send it — the more concrete the
            starting point, the more useful our first reply.
          </p>
          <p>
            If the work is not a fit for us, we will say so rather than stretch it. That has saved more relationships than
            it has cost.
          </p>
        </div>
      </main>
    </PageShell>
  )
}
