'use client'

import { useState } from 'react'
import styles from './CorporateSite.module.css'

const services = [
  ['01', 'AI & Intelligent Systems', 'Custom AI agents, LLM integration, RAG pipelines, and practical workflow automation.'],
  ['02', 'Cloud Infrastructure', 'Reliable architecture, hosting, migration, security hardening, and observability.'],
  ['03', 'Backend & Data Services', 'APIs, databases, caching, authentication, integrations, and data operations.'],
  ['04', 'DevOps & Delivery', 'CI/CD, containers, infrastructure as code, monitoring, and clear handover.'],
] as const

const technology = [
  ['/tech/nextjs.svg', 'Next.js', 'Web applications'],
  ['/tech/docker.svg', 'Docker', 'Container delivery'],
  ['/tech/postgresql.svg', 'PostgreSQL', 'Data foundation'],
  ['/tech/redis.svg', 'Redis', 'Performance layer'],
  ['/tech/ai-systems.svg', 'AI Systems', 'Applied intelligence'],
  ['/tech/terraform.svg', 'Terraform', 'Infrastructure as code'],
] as const

export default function CorporateSite() {
  const [selected, setSelected] = useState(0)
  const active = services[selected]

  return <div className={styles.site}>
    <a className={styles.skip} href="#main">Skip to content</a>
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Mechanic Computer home"><img src="/mechanic-logo-lockup.png" alt="Mechanic Computer" /></a>
      <nav className={styles.nav} aria-label="Primary navigation"><a href="#services">Services</a><a href="#approach">Approach</a><a href="#technology">Technology</a></nav>
      <a className={styles.headerCta} href="#contact" aria-label="Talk to Mechanic Computer"><span>↗</span></a>
    </header>

    <main id="main">
      <section id="top" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}><p className={styles.eyebrow}>Mechanic Computer · Jakarta, Indonesia</p><h1 id="hero-title">Technology built<br /><em>for the work ahead.</em></h1><p className={styles.lead}>We design AI systems, cloud platforms, backend services, and delivery operations that teams can run with confidence.</p><div className={styles.heroActions}><a href="#contact" className={styles.primary}>Start a conversation <span>↗</span></a><a href="#services" className={styles.secondary}>Explore services</a></div></div>
        <div className={styles.heroVisual} aria-label="Connected technology platform diagram"><span className={styles.visualLabel}>OPERATING PLATFORM</span><div className={styles.diagram}><div className={styles.diagramCore}>MC</div><div className={styles.diagramNode}>AI</div><div className={styles.diagramNode}>API</div><div className={styles.diagramNode}>OPS</div><i /><i /><i /></div><p>Architecture that connects product, infrastructure, data, and operations.</p></div>
        <div className={styles.heroProof}><div><strong>4</strong><span>Core technical disciplines</span></div><div><strong>End-to-end</strong><span>From architecture to handover</span></div><div><strong>Built to run</strong><span>Clear systems. Clear ownership.</span></div></div>
      </section>

      <section className={styles.intro}><p>Mechanic Computer is an engineering partner for teams that need technology to become dependable business infrastructure—not another fragile experiment.</p></section>

      <section id="services" className={styles.services} aria-labelledby="services-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>Capabilities</p><h2 id="services-title">Four capabilities.<br />One accountable team.</h2></div><div className={styles.serviceList}>{services.map(([no, title, text], index) => <button key={no} className={`${styles.service} ${selected === index ? styles.serviceActive : ''}`} onClick={() => setSelected(index)}><span>{no}</span><h3>{title}</h3><p>{text}</p><b>↗</b></button>)}</div><aside className={styles.serviceFocus}><span>Selected capability</span><h3>{active[1]}</h3><p>{active[2]}</p><a href="#contact">Discuss this capability <b>↗</b></a></aside></section>

      <section id="approach" className={styles.approach} aria-labelledby="approach-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>How we work</p><h2 id="approach-title">Make complexity<br />operable.</h2></div><div className={styles.steps}><article><span>01</span><h3>Understand</h3><p>Map constraints, dependencies, and the real operating need.</p></article><article><span>02</span><h3>Build</h3><p>Ship systems with deliberate architecture and delivery controls.</p></article><article><span>03</span><h3>Operate</h3><p>Hand over clear ownership, visibility, and a path for improvement.</p></article></div></section>

      <section id="technology" className={styles.technology} aria-labelledby="tech-title"><div className={styles.techCopy}><p className={styles.eyebrow}>Technology</p><h2 id="tech-title">Tools selected<br />to do their job.</h2><p>We use proven technology where it fits the system, the team, and long-term operation.</p></div><div className={styles.logoGrid}>{technology.map(([src, name, role]) => <div className={styles.techItem} key={name}><img src={src} alt="" /><div><strong>{name}</strong><span>{role}</span></div></div>)}</div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div><p className={styles.eyebrow}>Start a project</p><h2 id="contact-title">Bring the hard part<br />to the table.</h2><p>Tell us what is changing, what is stuck, or what must run better.</p></div><form action="mailto:hello@mechaniccomputer.co.id" method="post" encType="text/plain"><label>Name<input name="name" required /></label><label>Work email<input type="email" name="email" required /></label><label>What do you need help with?<textarea name="project" required /></label><button type="submit">Send enquiry <span>↗</span></button></form></section>
    </main>

    <footer className={styles.footer}><img src="/mechanic-logo-lockup.png" alt="Mechanic Computer" /><p>AI systems · Cloud infrastructure · Backend services · DevOps delivery</p><a href="mailto:hello@mechaniccomputer.co.id">hello@mechaniccomputer.co.id</a><small>© 2026 Mechanic Computer. Jakarta, Indonesia.</small></footer>
  </div>
}
