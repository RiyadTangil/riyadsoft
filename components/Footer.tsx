"use client"

import React from "react"
import { Globe, Shield, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="relative bg-[#02050c] border-t border-white/5 py-16 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 font-display text-2xl font-black tracking-tight text-white">
              <span className="bg-gradient-to-r from-white to-[#4099D9] bg-clip-text text-transparent">Riyad</span>
              <span className="text-[#005CC1]">Soft</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              RiyadSoft is an enterprise-grade software product studio. We specialize in custom web portals, 
              scalable SaaS tools, mobile apps, and robust cloud configurations.
            </p>
          </div>

          {/* Quick Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors">
                Our IT Services
              </a>
              <a href="#products" onClick={(e) => handleScrollTo(e, "#products")} className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors">
                SaaS Products
              </a>
              <a href="#tech-stack" onClick={(e) => handleScrollTo(e, "#tech-stack")} className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors">
                Technology Stack
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors">
                Contact Inquiry
              </a>
            </div>
          </div>

          {/* Products Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Featured Products
            </h4>
            <div className="flex flex-col gap-2.5">
              <a 
                href="https://travelhisab.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors"
              >
                <Globe className="h-4 w-4 text-[#4099D9]" />
                Travel Hisab (travelhisab.com)
              </a>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">
                The flagship SaaS billing &amp; accounting solution built for 500+ travel agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] sm:text-xs text-slate-500 font-semibold flex items-center gap-1">
            &copy; {currentYear} RiyadSoft. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 font-semibold flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for SaaS Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
