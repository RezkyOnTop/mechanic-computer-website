'use client'

import { Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">Get in Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Office</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gedung Graha Pratama Lt. 15<br />
                  Jl. MT. Haryono Kav. 15<br />
                  Tebet, Jakarta Selatan 12810
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:hello@mechaniccomputer.co.id" className="text-sm text-blue-600 hover:underline">
                  hello@mechaniccomputer.co.id
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
            </div>

            <button type="submit" className="w-full btn-primary">Send</button>
          </form>

        </div>
      </div>
    </section>
  )
}
