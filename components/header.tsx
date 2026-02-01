"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="bg-[#0a0a0a] text-white border-b border-white/5 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://assets.guestsnapper.com/wedding-gallery-media/CRG%20Electrical%20Logo%20122.webp"
              alt="CRG Electrical"
              width={200}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* CTA Phone */}
          <a 
            href="tel:0756680097" 
            className="flex items-center gap-3 bg-[#216597] hover:bg-[#2a7ab5] text-white px-4 py-2.5 rounded-lg transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold text-lg">07 5668 0097</span>
          </a>
        </div>
      </div>
    </header>
  )
}
