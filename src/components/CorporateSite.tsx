'use client'

import { useEffect, useState } from 'react'
import styles from './CorporateSite.module.css'

const services = [
  ['01', 'AI & Intelligent Systems', 'AI agent, RAG knowledge base, LLM integration, workflow automation, evaluation, and handover documentation.'],
  ['02', 'Cloud Infrastructure', 'Cloud architecture, migration plan, secure hosting, network baseline, monitoring, incident runbook, and cost visibility.'],
  ['03', 'Backend & Data Services', 'API design, authentication, database schema, caching, third-party integrations, admin workflow, and data migration.'],
  ['04', 'DevOps & Delivery', 'CI/CD pipelines, Docker environments, Terraform modules, release controls, observability dashboards, and operating handover.'],
] as const

const technology = [
  { group: 'Application engineering', items: [
    ['/tech/nextjs.svg', 'Next.js'], ['/tech/react.svg', 'React'], ['/tech/typescript.svg', 'TypeScript'], ['/tech/javascript.svg', 'JavaScript'], ['/tech/nodejs.svg', 'Node.js'], ['/tech/nestjs.svg', 'NestJS'], ['/tech/python.svg', 'Python'], ['/tech/go.svg', 'Go'], ['/tech/graphql.svg', 'GraphQL'],
  ] },
  { group: 'AI & automation', items: [
    ['/tech/ai-systems.svg', 'AI Systems'], ['/tech/python.svg', 'Python'], ['/tech/redis.svg', 'Redis'], ['/tech/elasticsearch.svg', 'Elasticsearch'], ['/tech/apachekafka.svg', 'Kafka'], ['/tech/rabbitmq.svg', 'RabbitMQ'],
  ] },
  { group: 'Cloud & edge', items: [
    ['/tech/amazonwebservices.svg', 'AWS'], ['/tech/googlecloud.svg', 'Google Cloud'], ['/tech/azure.svg', 'Azure'], ['/tech/cloudflare.svg', 'Cloudflare'], ['/tech/nginx.svg', 'NGINX'], ['/tech/linux.svg', 'Linux'],
  ] },
  { group: 'Data platforms', items: [
    ['/tech/postgresql.svg', 'PostgreSQL'], ['/tech/mysql.svg', 'MySQL'], ['/tech/mongodb.svg', 'MongoDB'], ['/tech/redis.svg', 'Redis'], ['/tech/prisma.svg', 'Prisma'], ['/tech/elasticsearch.svg', 'Elasticsearch'],
  ] },
  { group: 'Delivery & infrastructure', items: [
    ['/tech/docker.svg', 'Docker'], ['/tech/kubernetes.svg', 'Kubernetes'], ['/tech/terraform.svg', 'Terraform'], ['/tech/githubactions.svg', 'GitHub Actions'], ['/tech/git.svg', 'Git'], ['/tech/nginx.svg', 'NGINX'],
  ] },
  { group: 'Observability & reliability', items: [
    ['/tech/prometheus.svg', 'Prometheus'], ['/tech/grafana.svg', 'Grafana'], ['/tech/sentry.svg', 'Sentry'], ['/tech/elasticsearch.svg', 'Elasticsearch'], ['/tech/kubernetes.svg', 'Kubernetes'],
  ] },
] as const

const technologyCount = technology.reduce((total, group) => total + group.items.length, 0)

const phases = [
  ['Discover', '01', 'Scope, constraints, and dependencies mapped before a line of code.'],
  ['Build', '02', 'Architecture, implementation, and release controls in one track.'],
  ['Operate', '03', 'Ownership, observability, and a clear path for improvement.'],
] as const

const faqs = [
  ['What type of project can we discuss?', 'AI workflows, cloud platforms, internal tools, backend APIs, operational infrastructure, and the systems around them.'],
  ['Do you work with an existing engineering team?', 'Yes. Engagement can extend an existing team, lead a focused delivery track, or prepare a clean handover.'],
  ['How do projects begin?', 'Start with a short discovery conversation. We map the operating need, constraints, owners, and a practical next step.'],
  ['Can you take over an existing system?', 'Yes. We begin with an architecture and operational review before proposing changes or a delivery plan.'],
  ['What happens after launch?', 'Every engagement defines ownership, documentation, observability, and a support or improvement path before handover.'],
  ['Do you offer ongoing support?', 'Yes. Retainer and dedicated-team models are available when the system needs continuous delivery or operations support.'],
] as const

export default function CorporateSite() {
  const [selected, setSelected] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [phase, setPhase] = useState(0)
  const [pulse, setPulse] = useState(0)
  const [filled, setFilled] = useState(0)
  const [formReady, setFormReady] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const active = services[selected]

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    const subject = encodeURIComponent(`Project enquiry — ${name || 'New lead'}`)
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`)
    window.location.href = `mailto:project@mechaniccomputer.biz.id?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('main section')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add(styles.inView); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    targets.forEach((target) => { target.classList.add(styles.revealReady); observer.observe(target) })
    return () => observer.disconnect()
  }, [])

  return <div className={styles.site}>
    <a className={styles.skip} href="#main">Skip to content</a>
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Mechanic Computer home"><img src="/mechanic-logo-lockup.png" alt="Mechanic Computer" /></a>
      <nav className={styles.nav} aria-label="Primary navigation"><a href="#services">Services</a><a href="#about">About</a><a href="#technology">Technology</a><a href="#contact">Contact</a></nav>
      <a className={styles.headerCta} href="#contact" aria-label="Start a project"><span className={styles.ctaLabel}>Start a project</span><b>↗</b></a>
    </header>

    <main id="main">
      <section id="top" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroMeta}><span>Mechanic Computer</span><span>Banjarbaru, Indonesia</span><span>Engineering systems that last</span></div>
        <div className={styles.heroCopy}><p className={styles.heroKicker}>Technology partner for serious work</p><h1 id="hero-title">Build once.<br /><em>Operate well.</em></h1><p className={styles.lead}>AI systems, cloud infrastructure, backend platforms, and delivery operations designed to stay clear after launch.</p><div className={styles.heroActions}><a href="#contact" className={styles.primary}>Start a project <span>↗</span></a><a href="#services" className={styles.secondary}>Explore services</a></div></div>
        <div className={styles.heroVisual} aria-label="Mechanic Computer systems field"><span className={styles.visualLabel}>CONNECTED DELIVERY</span><div className={styles.field}><div className={styles.fieldHalo} /><div className={`${styles.fieldCore} ${styles.fieldCoreActive}`}><b>{phases[phase][1]}</b><small>{phases[phase][0]}</small></div><span key={`r-${pulse}`} className={styles.ripple} />{phases.map(([label], index) => <button type="button" key={label} onClick={() => { setPhase(index); setPulse((n) => n + 1) }} aria-pressed={phase === index} className={`${styles.fieldTag} ${styles.fieldTagPos} ${phase === index ? styles.fieldTagOn : ''}`}>{label}</button>)}<i /><i /><i /><i /></div><p key={`cap-${phase}`} className={styles.fieldCaption}>{phases[phase][2]}</p></div>
        <div className={styles.heroProof}><a href="#services"><strong>01</strong><span>Discover<br />the right scope</span><b>↗</b></a><a href="#services"><strong>02</strong><span>Build<br />with control</span><b>↗</b></a><a href="#approach"><strong>03</strong><span>Operate<br />with clarity</span><b>↗</b></a></div>
      </section>

      <section className={styles.intro}><p>Mechanic Computer is an engineering partner for teams that need technology to become dependable business infrastructure—not another fragile experiment.</p></section>

      <section id="services" className={styles.services} aria-labelledby="services-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>Capabilities</p><h2 id="services-title">Four capabilities.<br />One accountable team.</h2></div><div className={styles.serviceList}>{services.map(([no, title, text], index) => <button key={no} className={`${styles.service} ${selected === index ? styles.serviceActive : ''}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{no}</span><h3>{title}</h3><p>{text}</p><b>↗</b></button>)}</div><aside className={styles.serviceFocus}><span>Selected deliverables</span><h3>{active[1]}</h3><p>{active[2]}</p><a href="#contact">Discuss this capability <b>↗</b></a></aside></section>

      <section id="about" className={styles.about} aria-labelledby="about-title" data-reveal><div className={styles.aboutCopy}><p className={styles.eyebrow}>About Mechanic Computer</p><h2 id="about-title">Engineering clarity<br />for complex work.</h2><p>We turn technical complexity into systems that teams can operate, improve, and own. Architecture, delivery, and operations stay connected from the first decision through handover.</p></div><div className={styles.aboutSignal}><span>01 / SYSTEM THINKING</span><strong>Architecture before<br />implementation.</strong><p>Every engagement starts by making dependencies, ownership, and operating risk visible.</p><span>02 / DELIVERY DISCIPLINE</span><strong>Build with a path<br />to operation.</strong><p>Clear handover, observability, and maintenance are part of delivery—not an afterthought.</p></div></section>

      <section id="approach" className={styles.approach} aria-labelledby="approach-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>How we work</p><h2 id="approach-title">Make complexity<br />operable.</h2></div><div className={styles.steps}><article><span>01</span><h3>Understand</h3><p>Map constraints, dependencies, and the real operating need.</p></article><article><span>02</span><h3>Build</h3><p>Ship systems with deliberate architecture and delivery controls.</p></article><article><span>03</span><h3>Operate</h3><p>Hand over clear ownership, visibility, and a path for improvement.</p></article></div></section>

      <section className={styles.engagements} aria-labelledby="engagement-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>Engagement models</p><h2 id="engagement-title">Work at the pace<br />your system needs.</h2></div><div className={styles.engagementList}><article><span>01</span><h3>Project-based</h3><p>Focused discovery, build, migration, or system upgrade with a defined outcome and handover.</p></article><article><span>02</span><h3>Retainer</h3><p>Ongoing technical improvement, advisory, and operational support with a predictable working rhythm.</p></article><article><span>03</span><h3>Dedicated team</h3><p>A focused engineering unit integrated with your product and operations team for sustained delivery.</p></article></div></section>

      <section id="technology" className={styles.technology} aria-labelledby="tech-title"><div className={styles.techCopy}><p className={styles.eyebrow}>Technology ecosystem</p><h2 id="tech-title">Tools selected<br />to do their job.</h2><p>Production technology across product, intelligence, cloud, data, delivery, and reliability.</p><strong className={styles.techCount}>{technologyCount} production-grade tools</strong></div><div className={styles.techGroups}>{technology.map(({ group, items }) => <section className={styles.techGroup} key={group} aria-label={group}><h3>{group}<span>{String(items.length).padStart(2, '0')}</span></h3><div className={styles.logoGrid}>{items.map(([src, name]) => <div className={styles.techItem} key={`${group}-${name}`}><img src={src} alt="" /><strong>{name}</strong></div>)}</div></section>)}</div></section>

      <section className={styles.faq} aria-labelledby="faq-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>FAQ</p><h2 id="faq-title">Clear before<br />we begin.</h2></div><div className={styles.faqList}>{faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? styles.faqOpen : ''}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><b>+</b></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.contactIntro}><p className={styles.eyebrow}>Start a project</p><h2 id="contact-title">Bring the hard part<br />to the table.</h2><p className={styles.contactLead}>Tell us what is changing, what is stuck, or what must run better. You will get a direct answer, not a sales sequence.</p><div className={styles.contactCards}><a className={styles.contactCard} href="mailto:project@mechaniccomputer.biz.id"><span className={styles.cardIcon} aria-hidden="true">✉</span><span className={styles.cardBody}><small>Email</small><strong>project@mechaniccomputer.biz.id</strong></span><b aria-hidden="true">↗</b></a><a className={styles.contactCard} href="https://wa.me/6289580319561" target="_blank" rel="noopener noreferrer"><span className={styles.cardIcon} aria-hidden="true">wa</span><span className={styles.cardBody}><small>WhatsApp</small><strong>+62 895-8031-95612</strong></span><b aria-hidden="true">↗</b></a><div className={`${styles.contactCard} ${styles.contactCardStatic}`}><span className={styles.cardIcon} aria-hidden="true">◎</span><span className={styles.cardBody}><small>Location</small><strong>Jl. Barjad, Loktabat Utara, Banjarbaru Utara, Banjarbaru, Kalimantan Selatan 70714</strong></span></div></div><p className={styles.contactNote}>Typical reply within one business day. Banjarbaru time, UTC+8.</p></div>
        <form className={`${styles.contactForm} ${formReady ? styles.formComplete : ''} `} onSubmit={submit} onInput={(event) => { const form = event.currentTarget; const count = ['name', 'email', 'message'].filter((name) => { const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null; return !!el && el.value.trim().length > 0 }).length; setFilled(count); setFormReady(count === 3) }}>
          <div className={styles.formHead}><div><span className={styles.formKicker}>Brief intake</span><strong>Project enquiry</strong></div><span className={styles.formProgress} aria-live="polite">{String(filled).padStart(2, '0')} / 03</span></div>
          <div className={styles.progressTrack} aria-hidden="true"><i style={{ width: `${(filled / 3) * 100}%` }} /></div>
          <label className={styles.formField}><span>Name</span><input name="name" placeholder="Your name" autoComplete="name" required /></label>
          <label className={styles.formField}><span>Work email</span><input type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
          <label className={styles.formField}><span>Message</span><textarea name="message" placeholder="What are you building, migrating, or fixing?" required /></label>
          <button className={styles.submit} type="submit"><span>{formReady ? 'Open in email app' : 'Compose enquiry'}</span><b aria-hidden="true">↗</b></button>
          <div className={styles.formFoot}><span className={styles.formDots} aria-hidden="true"><i className={filled > 0 ? styles.dotOn : ''} /><i className={filled > 1 ? styles.dotOn : ''} /><i className={filled > 2 ? styles.dotOn : ''} /></span><small aria-live="polite">{status === 'sent' ? 'Email app opened with your details filled in.' : 'Opens your email app with everything pre-filled.'}</small></div>
        </form></section>
    </main>

    <footer className={styles.footer}><div className={styles.footerTop}><div className={styles.footerBrand}><img src="/mechanic-logo-lockup.png" alt="Mechanic Computer" /><p>AI systems, cloud infrastructure, backend platforms, and DevOps delivery for teams doing serious work.</p></div><nav className={styles.footerCol} aria-label="Footer navigation"><span>Explore</span><a href="#services">Services</a><a href="#about">About</a><a href="#technology">Technology</a><a href="#approach">How we work</a></nav><div className={styles.footerCol}><span>Contact</span><a href="mailto:project@mechaniccomputer.biz.id">project@mechaniccomputer.biz.id</a><a href="https://wa.me/6289580319561" target="_blank" rel="noopener noreferrer">WhatsApp +62 895-8031-95612</a><p className={styles.footerPlace}>Jl. Barjad, Loktabat Utara, Banjarbaru Utara, Kalimantan Selatan 70714</p></div></div><div className={styles.footerBottom}><small>© 2026 Mechanic Computer. Banjarbaru, Indonesia. All rights reserved.</small><a href="#top">Back to top ↑</a></div></footer>
  </div>
}
