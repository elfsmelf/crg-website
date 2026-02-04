import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1a4d6e] border-t border-[#153d57]">
      <div className="container mx-auto px-4 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="text-white text-xs sm:text-sm">
              © 2026 CRG Electrical Pty Ltd. All Rights Reserved.
            </p>
            <p className="text-white/70 text-[10px] sm:text-xs mt-1">
              Electrical Contractors Lic# 1509847 | ACRS A047073 | Tweed Coast to Brisbane
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/80 text-xs sm:text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
