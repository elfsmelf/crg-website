"use client"

import React from "react"

import Image from "next/image"
import { Shield, Star, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useSourcebuster } from "@/hooks/use-sourcebuster"

const WEBHOOK_URL = "https://hook.us1.make.com/4mpv343jh3ft17qyb611x8nspsie6mu7"

export function Hero() {
  const trackingData = useSourcebuster()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jobType: "",
    description: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const payload = {
      ...formData,
      date_time: new Date().toISOString(),
      channel: trackingData?.channel || "Direct",
      source: trackingData?.source || "",
      medium: trackingData?.medium || "",
      campaign: trackingData?.campaign || "",
      content: trackingData?.content || "",
      term: trackingData?.term || "",
      gclid: trackingData?.gclid || "",
      firstSource: trackingData?.firstSource || "",
      firstMedium: trackingData?.firstMedium || "",
      firstCampaign: trackingData?.firstCampaign || "",
      visits: trackingData?.visits || "1",
      pagesSeen: trackingData?.pagesSeen || "1",
      landingPage: trackingData?.landingPage || "",
      leadPage: trackingData?.leadPage || "",
      referer: trackingData?.referer || "",
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setSubmitStatus("success")
      setFormData({ name: "", phone: "", email: "", jobType: "", description: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[auto] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://assets.guestsnapper.com/wedding-gallery-media/sheraton%20lobby.jpg"
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
          <div className="space-y-6 sm:space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#216597]/20 border border-[#216597]/30 rounded-full px-3 sm:px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white">Trusted by Sheraton Grand Mirage Resort, Tailored Project Group & Gold Coast Businesses</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight font-[family-name:var(--font-heading)] mb-3 sm:mb-4">
                Gold Coast and Brisbane, Commercial & Industrial Electricians
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#5eb3e4] font-medium">
                Fitouts &bull; Maintenance &bull; Customised Quotes
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
              We specialise exclusively in commercial electrical work. No residential jobs – just dedicated expertise for Gold Coast & Brisbane businesses.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Quotes actioned immediately",
                "Fixed pricing – no surprises",
                "We work around your hours",
                "Never subcontracted"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5eb3e4] flex-shrink-0" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-[#5eb3e4]" />
                <span className="text-xs sm:text-sm text-gray-400">Electrical Contractors Lic# 1509847</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-[#5eb3e4]" />
                <span className="text-xs sm:text-sm text-gray-400">ACRS A047073</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div id="quote-form" className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl scroll-mt-24">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
              <p className="text-gray-600 text-sm">{"Quotes actioned immediately"}</p>
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
                disabled={isSubmitting}
                className="w-full bg-[#216597] hover:bg-[#1a5070] disabled:bg-[#216597]/60 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
              </button>

              {submitStatus === "success" && (
                <p className="text-center text-sm text-green-600 font-medium">
                  Thank you! Your quote will be actioned immediately.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-center text-sm text-red-600 font-medium">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

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
