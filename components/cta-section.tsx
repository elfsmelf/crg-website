import { Phone, Clock } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-[#216597] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Call now for a free quote or use the form above. We respond to all enquiries within 4 business hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0756680097"
              className="inline-flex items-center gap-3 bg-white text-[#216597] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              <Phone className="w-6 h-6" />
              07 5668 0097
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span>Mon-Fri 7am-3pm | 24/7 Emergency</span>
            </div>
          </div>

          {/* Trust reminder */}
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span>QBCC Licensed: 85658</span>
            <span>ACRS Accredited: A047073</span>
            <span>Fully Insured</span>
            <span>Gold Coast to Byron Bay</span>
          </div>
        </div>
      </div>
    </section>
  )
}
