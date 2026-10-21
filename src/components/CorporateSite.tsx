'use client'

import { useState } from 'react'
import styles from './CorporateSite.module.css'

type Track = 'AI systems' | 'Cloud platform' | 'Backend services' | 'DevOps delivery'

const tracks: Record<Track, { title: string; line: string; outcome: string }> = {
  'AI systems': { title: 'AI systems', line: 'Discovery → data & model → integration → operations', outcome: 'A production-ready AI workflow, connected to your existing business process.' },
  'Cloud platform': { title: 'Cloud platform', line: 'Architecture → migration → hardening → observability', outcome: 'Infrastructure built for stable performance, sensible cost, and clear ownership.' },
  'Backend services': { title: 'Backend services', line: 'Requirements → API design → implementation → handover', outcome: 'Maintainable services and data flows that make future work easier.' },
  'DevOps delivery': { title: 'DevOps delivery', line: 'Baseline → CI/CD → monitoring → continuous improvement', outcome: 'A release process your team can repeat with confidence.' },
}

const services = [
  ['AI & Intelligent Systems', 'Custom agents, LLM integration, RAG pipelines, and automation.'],
  ['Cloud Infrastructure', 'Architecture, hosting, migration, security hardening, and observability.'],
  ['Backend & Data', 'APIs, databases, caching, authentication, and integrations.'],
  ['DevOps & Delivery', 'CI/CD, containers, monitoring, infrastructure as code, and operations.'],
]

export default function CorporateSite() {
  const [track, setTrack] = useState<Track>('AI systems')
  const current = tracks[track]

  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#main">Skip to content</a>
      <header className={styles.header}>
        <a href="#top" className={styles.brand} aria-label="Mechanic Computer home">
          <span className={styles.brandMark}>MC</span>
          <span>MECHANIC<br />COMPUTER</span>
        </a>
        <nav aria-label="Primary navigation" className={styles.nav}>
          <a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#technology">Technology</a><a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className={styles.headerAction}>Start a conversation</a>
      </header>

      <main id="main">
        <section id="top" className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.tile} ${styles.heroName}`}><h1 id="hero-title">MECHANIC<br />COMPUTER</h1></div>
          <div className={`${styles.tile} ${styles.heroStatement}`}>
            <p>AI systems and cloud infrastructure built to keep business moving.</p>
            <a href="#contact" className={styles.solidAction}>Talk to our team <span>↗</span></a>
          </div>
          <div className={`${styles.tile} ${styles.heroImage}`}><div className={styles.topologyLabel}>SYSTEM TOPOLOGY</div><div className={styles.gridOrbit} /><div className={styles.node} /><div className={styles.nodeTwo} /><div className={styles.nodeThree} /><div className={styles.topologyCaption}>Designed for connected services, clear ownership, and dependable operations.</div></div>
          <div className={`${styles.tile} ${styles.heroFact}`}><strong>Jakarta</strong><span>Indonesia-based<br />regional delivery</span></div>
          <div className={`${styles.tile} ${styles.heroFact}`}><strong>End to end</strong><span>Architecture, build,<br />release, operations</span></div>
          <div className={`${styles.tile} ${styles.heroContact}`}><a href="#capabilities">Explore capabilities <span>↗</span></a></div>
        </section>

        <section className={styles.statement} aria-labelledby="statement-title">
          <div className={`${styles.tile} ${styles.statementMain}`}><h2 id="statement-title">Systems that<br />hold up under<br />real work.</h2></div>
          <div className={`${styles.tile} ${styles.statementSmall}`}>AI</div>
          <div className={`${styles.tile} ${styles.statementPhoto}`}><div className={styles.signalLines}><i /><i /><i /><i /></div><span>Architecture first.<br />Operations always.</span></div>
          <div className={`${styles.tile} ${styles.statementCopy}`}><p>Mechanic Computer works with teams that need technical decisions to lead somewhere practical. We design the system, build the right parts, and leave an operating path your team can own.</p></div>
        </section>

        <section id="capabilities" className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.capabilityIntro}><h2 id="capabilities-title">Four disciplines.<br /><em>One delivery standard.</em></h2><p>Clear architecture, disciplined implementation, and practical operations from first conversation to handover.</p><a href="#contact">Discuss a project ↗</a></div>
          <div className={styles.capabilityRows}>{services.map(([title, description], index) => <article key={title} className={styles.capabilityRow}><span>{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section id="approach" className={styles.route} aria-labelledby="route-title">
          <div className={styles.routeHeader}><p>Choose your starting point</p><h2 id="route-title">See the delivery path.</h2></div>
          <div className={styles.routeChoices}>{(Object.keys(tracks) as Track[]).map(item => <button className={track === item ? styles.active : ''} onClick={() => setTrack(item)} key={item}>{item}</button>)}</div>
          <div className={styles.routeBoard}>
            <div><span>Selected track</span><h3>{current.title}</h3></div><div><span>Working sequence</span><p>{current.line}</p></div><div><span>What leaves the engagement</span><p>{current.outcome}</p></div><a href="#contact">Start here ↗</a>
          </div>
        </section>

        <section id="technology" className={styles.tech} aria-labelledby="tech-title">
          <div className={styles.techTitle}><h2 id="tech-title">Technology<br />with a job to do.</h2><p>Tools follow the architecture. We select for fit, maintainability, and operating clarity.</p></div>
          {['Next.js', 'Docker', 'PostgreSQL', 'Redis', 'OpenAI', 'Cloud infrastructure', 'CI/CD', 'Observability'].map((item, index) => <div className={styles.techTile} key={item}><span>{index + 1}</span>{item}</div>)}
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.contactHeading}><h2 id="contact-title">Bring the hard<br />part to the table.</h2><p>Tell us what is changing, what is stuck, or what needs to run better.</p></div>
          <form className={styles.form} action="mailto:hello@mechaniccomputer.co.id" method="post" encType="text/plain"><input name="name" aria-label="Your name" placeholder="Your name" required /><input type="email" name="email" aria-label="Work email" placeholder="Work email" required /><textarea name="project" aria-label="What do you need help with" placeholder="What do you need help with?" required /><button type="submit">Send enquiry ↗</button></form>
          <div className={styles.contactMeta}><span>Jakarta, Indonesia</span><a href="mailto:hello@mechaniccomputer.co.id">hello@mechaniccomputer.co.id</a><span>Mon-Fri, 09:00-18:00 WIB</span></div>
        </section>
      </main>

      <footer className={styles.footer}><div className={styles.footerBrand}>MECHANIC<br />COMPUTER</div><div><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#technology">Technology</a></div><div><a href="mailto:hello@mechaniccomputer.co.id">hello@mechaniccomputer.co.id</a><p>© 2026 Mechanic Computer</p></div><a className={styles.footerAction} href="#contact">Build with<br />clarity <span>↗</span></a></footer>
    </div>
  )
}
