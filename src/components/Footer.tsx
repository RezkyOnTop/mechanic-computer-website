export default function Footer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-900 text-neutral-400">
      <div className="section-container py-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3"><img src="/logo.png" alt="Mechanic Computer" className="h-10 w-auto object-contain" /><span className="font-semibold text-white">Mechanic Computer</span></div>
          <p className="max-w-md text-sm leading-6">AI systems, cloud infrastructure, backend services, and DevOps.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a href="#services" className="hover:text-white">Services</a><a href="#technology" className="hover:text-white">Technology</a><a href="#about" className="hover:text-white">About</a><a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
      <div className="border-t border-navy-800"><div className="section-container py-5 text-xs text-neutral-500">© 2026 Mechanic Computer. All rights reserved.</div></div>
    </footer>
  )
}
