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
  const active = services[selected]

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
        <div className={styles.heroMeta}><span>Mechanic Computer</span><span>Jakarta, Indonesia</span><span>Engineering systems that last</span></div>
        <div className={styles.heroCopy}><p className={styles.heroKicker}>Technology partner for serious work</p><h1 id="hero-title">Build once.<br /><em>Operate well.</em></h1><p className={styles.lead}>AI systems, cloud infrastructure, backend platforms, and delivery operations designed to stay clear after launch.</p><div className={styles.heroActions}><a href="#contact" className={styles.primary}>Start a project <span>↗</span></a><a href="#services" className={styles.secondary}>Explore services</a></div></div>
        <div className={styles.heroVisual} aria-label="Mechanic Computer systems field"><span className={styles.visualLabel}>CONNECTED DELIVERY</span><div className={styles.field}><div className={styles.fieldHalo} /><div className={styles.fieldCore}>MC</div><span className={styles.fieldTag}>DISCOVER</span><span className={styles.fieldTag}>BUILD</span><span className={styles.fieldTag}>OPERATE</span><i /><i /><i /><i /></div><p>One team across architecture, implementation, release, and operation.</p></div>
        <div className={styles.heroProof}><a href="#services"><strong>01</strong><span>Discover<br />the right scope</span><b>↗</b></a><a href="#services"><strong>02</strong><span>Build<br />with control</span><b>↗</b></a><a href="#approach"><strong>03</strong><span>Operate<br />with clarity</span><b>↗</b></a></div>
      </section>

      <section className={styles.intro}><p>Mechanic Computer is an engineering partner for teams that need technology to become dependable business infrastructure—not another fragile experiment.</p></section>

      <section id="services" className={styles.services} aria-labelledby="services-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>Capabilities</p><h2 id="services-title">Four capabilities.<br />One accountable team.</h2></div><div className={styles.serviceList}>{services.map(([no, title, text], index) => <button key={no} className={`${styles.service} ${selected === index ? styles.serviceActive : ''}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{no}</span><h3>{title}</h3><p>{text}</p><b>↗</b></button>)}</div><aside className={styles.serviceFocus}><span>Selected deliverables</span><h3>{active[1]}</h3><p>{active[2]}</p><a href="#contact">Discuss this capability <b>↗</b></a></aside></section>

      <section id="about" className={styles.about} aria-labelledby="about-title" data-reveal><div className={styles.aboutCopy}><p className={styles.eyebrow}>About Mechanic Computer</p><h2 id="about-title">Engineering clarity<br />for complex work.</h2><p>We turn technical complexity into systems that teams can operate, improve, and own. Architecture, delivery, and operations stay connected from the first decision through handover.</p></div><div className={styles.aboutSignal}><span>01 / SYSTEM THINKING</span><strong>Architecture before<br />implementation.</strong><p>Every engagement starts by making dependencies, ownership, and operating risk visible.</p><span>02 / DELIVERY DISCIPLINE</span><strong>Build with a path<br />to operation.</strong><p>Clear handover, observability, and maintenance are part of delivery—not an afterthought.</p></div></section>

      <section id="approach" className={styles.approach} aria-labelledby="approach-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>How we work</p><h2 id="approach-title">Make complexity<br />operable.</h2></div><div className={styles.steps}><article><span>01</span><h3>Understand</h3><p>Map constraints, dependencies, and the real operating need.</p></article><article><span>02</span><h3>Build</h3><p>Ship systems with deliberate architecture and delivery controls.</p></article><article><span>03</span><h3>Operate</h3><p>Hand over clear ownership, visibility, and a path for improvement.</p></article></div></section>

      <section className={styles.engagements} aria-labelledby="engagement-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>Engagement models</p><h2 id="engagement-title">Work at the pace<br />your system needs.</h2></div><div className={styles.engagementList}><article><span>01</span><h3>Project-based</h3><p>Focused discovery, build, migration, or system upgrade with a defined outcome and handover.</p></article><article><span>02</span><h3>Retainer</h3><p>Ongoing technical improvement, advisory, and operational support with a predictable working rhythm.</p></article><article><span>03</span><h3>Dedicated team</h3><p>A focused engineering unit integrated with your product and operations team for sustained delivery.</p></article></div></section>

      <section id="technology" className={styles.technology} aria-labelledby="tech-title"><div className={styles.techCopy}><p className={styles.eyebrow}>Technology ecosystem</p><h2 id="tech-title">Tools selected<br />to do their job.</h2><p>Production technology across product, intelligence, cloud, data, delivery, and reliability.</p><strong className={styles.techCount}>{technologyCount} production-grade tools</strong></div><div className={styles.techGroups}>{technology.map(({ group, items }) => <section className={styles.techGroup} key={group} aria-label={group}><h3>{group}<span>{String(items.length).padStart(2, '0')}</span></h3><div className={styles.logoGrid}>{items.map(([src, name]) => <div className={styles.techItem} key={`${group}-${name}`}><img src={src} alt="" /><strong>{name}</strong></div>)}</div></section>)}</div></section>

      <section className={styles.faq} aria-labelledby="faq-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>FAQ</p><h2 id="faq-title">Clear before<br />we begin.</h2></div><div className={styles.faqList}>{faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? styles.faqOpen : ''}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><b>+</b></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div><p className={styles.eyebrow}>Start a project</p><h2 id="contact-title">Bring the hard part<br />to the table.</h2><p>Tell us what is changing, what is stuck, or what must run better.</p><div className={styles.contactLinks}><a href="mailto:hello@mechaniccomputer.co.id"><span>Email</span>hello@mechaniccomputer.co.id ↗</a><div><span>WhatsApp</span><b>Add verified WhatsApp number before launch</b></div><div><span>Location</span><b>Jakarta, Indonesia</b></div></div></div><form action="mailto:hello@mechaniccomputer.co.id" method="post" encType="text/plain"><label>Name<input name="name" required /></label><label>Work email<input type="email" name="email" required /></label><label>Message<textarea name="message" required /></label><button type="submit">Send enquiry <span>↗</span></button></form></section>
    </main>

    <footer className={styles.footer}><img src="/mechanic-logo-lockup.png" alt="Mechanic Computer" /><p>AI systems · Cloud infrastructure · Backend services · DevOps delivery</p><div className={styles.footerLinks}><a href="mailto:hello@mechaniccomputer.co.id">hello@mechaniccomputer.co.id</a><a href="#contact">WhatsApp — add verified number</a><span>LinkedIn — add verified profile</span></div><small>© 2026 Mechanic Computer. Jakarta, Indonesia. All rights reserved.</small></footer>
  </div>
}
