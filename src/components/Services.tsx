'use client'

import { Brain, Globe, Database, Zap } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI & Intelligent Systems',
    desc: 'Custom AI agents, LLM integration, and automation workflows.'
  },
  {
    icon: Globe,
    title: 'Web & App Hosting',
    desc: 'High-performance hosting with 99.9% uptime guarantee.'
  },
  {
    icon: Database,
    title: 'Backend & Data Services',
    desc: 'Scalable APIs, databases, and data management solutions.'
  },
  {
    icon: Zap,
    title: 'DevOps & Infrastructure',
    desc: 'CI/CD pipelines, containerization, and 24/7 monitoring.'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive solutions for AI, cloud infrastructure, and DevOps.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Icon className="text-blue-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
