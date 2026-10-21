'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Backend integration point
    alert('Form submitted. Connect to your backend API.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-navy-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="heading-lg text-navy-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="body-large">
            Tell us what you need to build, operate, or scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-2">Office Address</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    Gedung Graha Pratama Lt. 15<br />
                    Jl. MT. Haryono Kav. 15<br />
                    Tebet, Jakarta Selatan 12810
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-2">Email</h3>
                  <a href="mailto:hello@mechaniccomputer.co.id" className="text-primary hover:underline text-sm">
                    hello@mechaniccomputer.co.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-2">Business Hours</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM WIB<br />
                    24/7 Technical Support Available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-neutral-50 dark:bg-navy-800 border border-neutral-200 dark:border-navy-700 rounded-lg p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-neutral-300 dark:border-navy-600 rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-neutral-300 dark:border-navy-600 rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-neutral-300 dark:border-navy-600 rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Your Company (Optional)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-neutral-300 dark:border-navy-600 rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
