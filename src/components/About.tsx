'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, CheckCircle2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-navy-800">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-navy-900 dark:text-white">About Mechanic Computer</h2>
            
            <p className="body-large">
              We provide AI integration, cloud infrastructure, and DevOps automation for businesses across Indonesia and Southeast Asia.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              Our team specializes in building scalable infrastructure, integrating AI capabilities, and automating deployment pipelines.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Award, label: 'Professional', desc: 'Quality service' },
              { icon: Users, label: '50+ Projects', desc: 'Delivered' },
              { icon: Clock, label: '24/7 Support', desc: 'Available' },
              { icon: CheckCircle2, label: 'Jakarta Based', desc: 'Indonesia' }
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="bg-white dark:bg-navy-700 rounded-lg border border-neutral-200 dark:border-navy-600 p-6">
                  <Icon className="text-primary mb-3" size={24} />
                  <div className="font-semibold text-navy-900 dark:text-white text-sm mb-1">{item.label}</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-xs">{item.desc}</div>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
