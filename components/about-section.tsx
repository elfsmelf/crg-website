import { Zap, Wrench, Clock, Users } from "lucide-react"

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
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency call-outs. We're here when you need us most."
    },
    {
      icon: Users,
      title: "Industrial Services",
      description: "Factory fit-outs, machinery installation, and industrial-grade electrical solutions."
    }
  ]

  return (
    <section className="bg-[#0d0d0d] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
            We Design, Install and Maintain
          </h2>
          <p className="text-gray-400 text-lg">
            Full lifecycle electrical services for commercial and industrial clients across the Gold Coast to Byron Bay region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#216597]/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#216597]/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#216597]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-[#216597]/10 to-transparent border border-[#216597]/20 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Why Gold Coast Businesses Choose CRG
              </h3>
              <p className="text-gray-300 mb-6">
                Unlike other electricians, we handle everything from initial design through to ongoing maintenance. One point of contact, complete accountability, and work completed by our own licensed team – never subcontracted.
              </p>
              <div className="space-y-3">
                {[
                  "Same-week scheduling for most jobs",
                  "We work nights & weekends – minimal disruption to your business",
                  "No call-out fees for commercial clients",
                  "Gold Coast to Byron Bay coverage"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#216597]" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#216597] mb-1">24hr</div>
                <div className="text-sm text-gray-400">Quote Turnaround</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#216597] mb-1">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#216597] mb-1">24/7</div>
                <div className="text-sm text-gray-400">Emergency Service</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#216597] mb-1">100%</div>
                <div className="text-sm text-gray-400">Licensed Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
