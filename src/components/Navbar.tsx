'use client'

import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-navy-900 border-b border-neutral-200 dark:border-navy-700 shadow-sm">
      <div className="section-container flex items-center justify-between py-4">
        
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Mechanic Computer" className="h-10 w-auto max-w-40 object-contain" />
          <div className="flex flex-col">
            <span className="font-semibold text-navy-900 dark:text-white text-base">Mechanic Computer</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">AI & Cloud Solutions</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition">
            Home
          </a>
          <a href="#services" className="text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition">
            Services
          </a>
          <a href="#technology" className="text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition">
            Technology
          </a>
          <a href="#about" className="text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition">
            About
          </a>
          <a href="#contact" className="text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition">
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-navy-800 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="hidden md:block btn-primary text-sm">
            Get Started
          </a>

          <button
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-navy-700 bg-neutral-50 dark:bg-navy-800">
          <div className="section-container py-4 space-y-3">
            <a href="#home" className="block text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" className="block text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#technology" className="block text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Technology</a>
            <a href="#about" className="block text-neutral-700 dark:text-neutral-300 hover:text-navy-900 dark:hover:text-white text-sm font-medium py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="block btn-primary w-full text-center mt-2" onClick={() => setIsOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  )
}
