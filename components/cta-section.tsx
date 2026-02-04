import { Phone, Clock, FileText } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-[#216597] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-[family-name:var(--font-heading)]">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Call now for a free quote or use the form above. We respond to all enquiries within 4 business hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:0756680097"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#216597] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-base sm:text-lg"
            >
              <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
              07 5668 0097
            </a>
            <a
              href="#quote-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#216597] transition-colors duration-200 text-base sm:text-lg"
            >
              <FileText className="w-5 sm:w-6 h-5 sm:h-6" />
              Get a Quote
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80 mt-4">
            <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-sm sm:text-base">Mon-Fri 7am-3pm</span>
          </div>

          {/* Trust reminder */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 text-white/80 text-xs sm:text-sm">
            <span>Electrical Contractors Lic# 1509847</span>
            <span>ACRS Accredited: A047073</span>
            <span>Fully Insured</span>
            <span>Tweed Coast to Brisbane</span>
          </div>
        </div>
      </div>
    </section>
  )
}
