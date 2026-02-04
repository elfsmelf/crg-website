import { Zap, Wrench, Users } from "lucide-react"

export function AboutSection() {
  const services = [
    {
      icon: Zap,
      title: "Commercial Fitouts",
      description: "Complete electrical design, installation and certification for retail spaces, offices, and commercial properties."
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "Scheduled maintenance programs and rapid response repairs to keep your business running safely."
    },
    {
      icon: Users,
      title: "Industrial Services",
      description: "Factory fit-outs, machinery installation, and industrial-grade electrical solutions."
    }
  ]

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-[family-name:var(--font-heading)]">
            We Design, Install and Maintain
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Full lifecycle electrical services for commercial and industrial clients across the Tweed Coast to Brisbane region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#216597]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#216597] flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#216597] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Why Gold Coast Businesses Choose CRG
              </h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Unlike other electricians, we handle everything from initial design through to ongoing maintenance. One point of contact, complete accountability, and work completed by our own licensed team – never subcontracted.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Minimal lead time for scheduling",
                  "We work nights & weekends – minimal disruption to your business",
                  "No call-out fees for commercial clients",
                  "Tweed Coast to Brisbane coverage"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    <span className="text-white/90 text-xs sm:text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Fast</div>
                <div className="text-xs sm:text-sm text-white/80">Quote Turnaround</div>
              </div>
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/80">Licensed Team</div>
              </div>
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-xs sm:text-sm text-white/80">Subcontractors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
