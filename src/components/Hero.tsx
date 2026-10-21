'use client'

export default function Hero() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              AI & Cloud Solutions for Your Business
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build, deploy, and scale AI agents, web applications, and cloud infrastructure with professional support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">View Services</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Jakarta Office</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Gedung Graha Pratama Lt. 15<br />
                Jl. MT. Haryono Kav. 15<br />
                Tebet, Jakarta Selatan 12810
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Uptime</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Support</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
