import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 CRG Electrical Contracting Services. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              QBCC Lic. 85658 | ACRS A047073 | Gold Coast to Byron Bay
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-3">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#216597]/20 hover:text-[#216597] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#216597]/20 hover:text-[#216597] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
