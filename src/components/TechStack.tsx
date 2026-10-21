'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
]

export default function TechStack() {
  return (
    <section id="technology" className="section-padding bg-white dark:bg-navy-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="heading-lg text-navy-900 dark:text-white mb-4">Technology Stack</h2>
          <p className="body-large">
            A practical stack for reliable delivery, operations, and long-term maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-neutral-100 dark:bg-navy-800 rounded-lg border border-neutral-200 dark:border-navy-700 group-hover:border-primary transition-colors">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
