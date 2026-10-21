import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import styles from '../content.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI systems, application hosting, backend and data services, and DevOps infrastructure delivered from Banjarbaru, South Kalimantan.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Mechanic Computer',
    description: 'AI systems, hosting, backend and data services, DevOps infrastructure.',
    url: '/services',
  },
}

const services = [
  {
    no: '01',
    title: 'AI & Intelligent Systems',
    body: 'Models placed where they change an actual decision — retrieval over internal documents, classification of incoming work, extraction from messy records. We handle evaluation, guardrails, cost per request, and the fallback path for when a model is wrong.',
    tags: ['Retrieval pipelines', 'Model evaluation', 'Inference cost control', 'Human review loops'],
  },
  {
    no: '02',
    title: 'Web & App Hosting',
    body: 'Applications served from infrastructure that survives a bad deploy. Edge caching, image pipelines, preview environments per branch, and rollback that takes seconds rather than an incident call.',
    tags: ['Edge delivery', 'Preview environments', 'Zero-downtime release', 'CDN and caching'],
  },
  {
    no: '03',
    title: 'Backend & Data Services',
    body: 'The API and the schema underneath it. Contract-first design, migration paths that do not lock you in, queueing where synchronous calls would fail, and reporting that runs on read replicas instead of the primary.',
    tags: ['API design', 'PostgreSQL', 'Queue and workers', 'Schema migration'],
  },
  {
    no: '04',
    title: 'DevOps & Infrastructure',
    body: 'Infrastructure described in code, environments that match, and observability that answers questions before a customer asks them. Build pipelines, secrets handling, and the boring reliability work that keeps a system quiet.',
    tags: ['Infrastructure as code', 'CI and CD', 'Monitoring', 'Incident readiness'],
  },
]

export default function Services() {
  return (
    <PageShell active="/services">
      <main className={styles.wrap}>
        <p className={styles.eyebrow}>Capabilities</p>
        <h1>
          Four capabilities.
          <br />
          <em>One accountable team.</em>
        </h1>
        <p className={styles.lead}>
          We take a system from an unclear requirement to something that runs in production and stays running. No handoff
          between a strategy group and a delivery group — the same people do both.
        </p>

        <div className={styles.divider} />

        {services.map((s) => (
          <article key={s.no} className={styles.item}>
            <span>{s.no}</span>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
            <ul className={styles.tags}>
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}

        <Link href="/contact" className={styles.cta}>
          Discuss a capability <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </PageShell>
  )
}
