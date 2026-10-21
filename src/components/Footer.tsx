'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 text-gray-400">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Mechanic Computer" className="h-7 w-7" />
              <span className="font-semibold text-white">Mechanic Computer</span>
            </div>
            <p className="text-sm text-gray-500">AI & Cloud Solutions</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition">AI Systems</a></li>
              <li><a href="#services" className="hover:text-white transition">Web Hosting</a></li>
              <li><a href="#services" className="hover:text-white transition">Backend Services</a></li>
              <li><a href="#services" className="hover:text-white transition">DevOps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Gedung Graha Pratama Lt. 15</p>
              <p>Jakarta Selatan 12810</p>
              <p>hello@mechaniccomputer.co.id</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          <p>&copy; 2026 Mechanic Computer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
