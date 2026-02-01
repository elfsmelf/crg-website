"use client"

import React from "react"

import Image from "next/image"
import { Shield, Clock, Star, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jobType: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you! We'll call you within 4 business hours.")
  }

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Commercial building interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Value Proposition */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#216597]/20 border border-[#216597]/30 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-white">Trusted by TSS, Victoria & Albert & Gold Coast Businesses</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight font-[family-name:var(--font-heading)] mb-4">
                Gold Coast Commercial Electricians
              </h1>
              <p className="text-xl md:text-2xl text-[#216597] font-medium">
                Fitouts &bull; Maintenance &bull; Emergency Repairs
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
              We specialise exclusively in commercial electrical work. No residential jobs – just dedicated expertise for Gold Coast businesses.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Quotes within 24 hours",
                "Fixed pricing – no surprises",
                "We work around your hours",
                "Never subcontracted"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#216597] flex-shrink-0" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#216597]" />
                <span className="text-sm text-gray-400">QBCC Lic. 85658</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#216597]" />
                <span className="text-sm text-gray-400">ACRS A047073</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#216597]" />
                <span className="text-sm text-gray-400">24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
              <p className="text-gray-600 text-sm">{"We'll call you within 4 business hours"}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#216597] focus:border-[#216597] outline-none transition-all text-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#216597] focus:border-[#216597] outline-none transition-all text-gray-900"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#216597] focus:border-[#216597] outline-none transition-all text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type *
                </label>
                <select
                  id="jobType"
                  required
                  value={formData.jobType}
                  onChange={(e) => setFormData({...formData, jobType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#216597] focus:border-[#216597] outline-none transition-all text-gray-900 bg-white"
                >
                  <option value="">Select job type...</option>
                  <option value="commercial-fitout">Commercial Fitout</option>
                  <option value="maintenance">Maintenance & Repairs</option>
                  <option value="new-installation">New Installation</option>
                  <option value="emergency">Emergency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Description (Optional)
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#216597] focus:border-[#216597] outline-none transition-all text-gray-900 resize-none"
                  placeholder="Tell us briefly about your project"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#216597] hover:bg-[#1a5070] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
              >
                Get My Free Quote
              </button>

              <p className="text-center text-xs text-gray-500">
                Your details are secure and never shared
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
