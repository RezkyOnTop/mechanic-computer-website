'use client'

import { motion } from 'framer-motion'
import { Brain, Cloud, Database, Workflow } from 'lucide-react'

const services = [
  { icon: Brain, title: 'AI & Intelligent Systems', desc: 'Custom AI agents, LLM integration, RAG pipelines, and workflow automation.' },
  { icon: Cloud, title: 'Web & App Hosting', desc: 'Secure hosting for corporate websites and web applications, built for stable delivery.' },
  { icon: Database, title: 'Backend & Data Services', desc: 'Reliable APIs, database design, caching, authentication, and system integration.' },
  { icon: Workflow, title: 'DevOps & Infrastructure', desc: 'CI/CD, containers, monitoring, and cloud operations that keep releases moving.' },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-neutral-50 dark:bg-navy-800">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Capabilities</p>
          <h2 className="heading-lg text-navy-900 dark:text-white mb-4">Built for systems that need to run.</h2>
          <p className="body-large">Four focused capabilities. One accountable technical partner.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon
            return <motion.article key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="group min-h-64 rounded-xl border border-navy-700 bg-navy-900/50 p-6 hover:border-primary/70 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-8 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><Icon size={22} /></div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm leading-6 text-neutral-400">{service.desc}</p>
            </motion.article>
          })}
        </div>
      </div>
    </section>
  )
}
