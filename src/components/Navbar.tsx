'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="section-container flex items-center justify-between py-4">
        
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Mechanic Computer" className="h-8 w-8" />
          <span className="font-semibold text-gray-900 dark:text-white">Mechanic Computer</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Services</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">About</a>
          <a href="#contact" className="btn-primary text-sm">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <div className="section-container py-4 space-y-3">
            <a href="#services" className="block text-sm text-gray-700 dark:text-gray-300 py-2">Services</a>
            <a href="#about" className="block text-sm text-gray-700 dark:text-gray-300 py-2">About</a>
            <a href="#contact" className="block btn-primary w-full text-center">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
