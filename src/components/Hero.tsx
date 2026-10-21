'use client'

import { motion } from 'framer-motion'
import { Building2, CheckCircle2, MapPin, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="section-padding bg-white dark:bg-navy-900">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Shield size={16} />
              <span>Professional Infrastructure Partner</span>
            </div>

            <h1 className="heading-xl text-navy-900 dark:text-white">
              AI & Cloud Solutions for Your Business
            </h1>

            <p className="body-large">
              Build, deploy, and scale AI agents, web applications, and cloud infrastructure with professional support and reliable operations.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'Autonomous AI agents & LLM integration',
                'Scalable cloud infrastructure & APIs',
                'Enterprise-grade monitoring & support'
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
              <a href="#services" className="btn-secondary">
                View Services
              </a>
            </div>
          </motion.div>

          {/* Right: Trust Signals & Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Office Card */}
            <div className="bg-neutral-50 dark:bg-navy-800 border border-neutral-200 dark:border-navy-700 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-2">Jakarta Office</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    Gedung Graha Pratama Lt. 15<br />
                    Jl. MT. Haryono Kav. 15<br />
                    Tebet, Jakarta Selatan 12810
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-neutral-50 dark:bg-navy-800 rounded-lg p-4 text-center border border-neutral-200 dark:border-navy-700">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Projects</div>
              </div>
              <div className="bg-neutral-50 dark:bg-navy-800 rounded-lg p-4 text-center border border-neutral-200 dark:border-navy-700">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Uptime</div>
              </div>
              <div className="bg-neutral-50 dark:bg-navy-800 rounded-lg p-4 text-center border border-neutral-200 dark:border-navy-700">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Support</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
