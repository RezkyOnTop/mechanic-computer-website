import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import styles from '../content.module.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Mechanic Computer is an engineering team in Banjarbaru, South Kalimantan, building AI systems, cloud infrastructure, and backend platforms.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Mechanic Computer',
    description: 'An engineering team in Banjarbaru, South Kalimantan.',
    url: '/about',
  },
}

export default function About() {
  return (
    <PageShell active="/about">
      <main className={styles.wrap}>
        <p className={styles.eyebrow}>About</p>
        <h1>
          Engineers who stay
          <br />
          <em>after the launch.</em>
        </h1>
        <p className={styles.lead}>
          Mechanic Computer is a small engineering team based in Banjarbaru, South Kalimantan. We build and operate the
          systems that carry a business — the API behind a product, the infrastructure holding it up, the model that makes
          a decision cheaper than a human doing it.
        </p>

        <div className={styles.prose}>
          <h2>Why we exist</h2>
          <p>
            Most software projects do not fail at the code. They fail in the gap between the people who decided what to
            build and the people who had to keep it alive. We work across that gap deliberately: the same team that
            designs the system is the team on call when it misbehaves.
          </p>
          <p>
            That constraint shapes everything. It makes us conservative about dependencies, explicit about ownership, and
            impatient with architecture that looks impressive in a diagram but has no answer for a failed disk at 2am.
          </p>

          <h2>How we work</h2>
          <p>
            Every engagement starts by mapping constraints, not features. What already exists, what cannot change, what
            the team can realistically operate after we leave. The plan that follows is written in those terms.
          </p>
          <p>
            We deliver in small, reviewable pieces with working software at each step. If a direction turns out to be
            wrong, we would rather find that in week two than in month six — and we say so plainly rather than protecting a
            plan that has stopped making sense.
          </p>

          <h2>Where we work</h2>
          <p>
            We are based in South Kalimantan and work with organisations across the province and beyond it. Local presence
            matters here: it means we understand the operating conditions, the procurement rhythm, and the reality of
            infrastructure outside Java.
          </p>
        </div>

        <div className={styles.facts}>
          <div>
            <span>Based in</span>
            <b>Banjarbaru, Kalimantan Selatan, Indonesia</b>
          </div>
          <div>
            <span>Focus</span>
            <b>AI systems, cloud infrastructure, backend platforms, DevOps</b>
          </div>
          <div>
            <span>Working hours</span>
            <b>Monday to Friday, UTC+8</b>
          </div>
          <div>
            <span>Engagements</span>
            <b>Project-based, retainer, dedicated team</b>
          </div>
        </div>

        <Link href="/contact" className={styles.cta}>
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </PageShell>
  )
}
