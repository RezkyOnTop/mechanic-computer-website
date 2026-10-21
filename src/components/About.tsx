'use client'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Mechanic Computer</h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We provide AI integration, cloud infrastructure, and DevOps automation for businesses in Indonesia and Southeast Asia.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            Our team specializes in building scalable infrastructure, integrating AI capabilities, and automating deployment pipelines.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">Jakarta</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
