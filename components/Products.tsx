"use client"

import React from "react"
import { CheckCircle2, ArrowUpRight, Globe, Layers, Database } from "lucide-react"

export default function Products() {
  const travelHisabFeatures = [
    "Full-cycle Travel Invoicing & Billing",
    "Money Receipts with Multiple Invoice Allocations",
    "Real-time Agent & Salesman Commission Tracking",
    "Consolidated Client & Vendor Ledger Statements",
    "Secure Multiple Database Switching (Local vs Prod)",
    "Instant PDF receipt downloads and report exports"
  ]

  return (
    <section id="products" className="relative py-24 border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#005CC1]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#4099D9]/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-3 block">
            Flagship Products
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Software Products We've Built
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            RiyadSoft designs and launches premium SaaS products. Our systems are engineered 
            specifically to solve industry-specific complex operations with beautiful, fast, and secure user interfaces.
          </p>
        </div>

        {/* Product Showcase: Travel Hisab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CC1]/10 border border-[#005CC1]/20 flex items-center justify-center text-[#005CC1]">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                SaaS Product for Travel Agencies
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Travel <span className="text-[#4099D9]">Hisab</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              Travel Hisab (Trabill Pro) is a leading cloud-based billing and accounting platform built specifically for travel agencies. 
              It simplifies complex ticketing workflows, agent commissions, and money allocations with state-of-the-art database integrity.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 gap-3 py-2">
              {travelHisabFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://travelhisab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#005CC1] to-[#4099D9] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[#005cc1]/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Visit travelhisab.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Visual Showcase Mockup Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-2 rounded-2xl border-white/5 relative overflow-hidden shadow-2xl animate-float">
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#005CC1]/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Generated Mockup Image */}
              <img
                src="/travel_hisab_dashboard_mockup.png"
                alt="Travel Hisab SaaS Dashboard Mockup"
                className="w-full h-auto rounded-xl object-cover shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Secondary Products Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
          <div className="glass-panel p-8 flex gap-6 hover:translate-y-[-4px]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[#00f0ff] shrink-0 h-fit">
              <Layers className="h-6 w-6" />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">RiyadSoft CRM &amp; HRMS</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                An integrated corporate customer relationship management and automated human resources payroll platform. 
                Streamlines employee salary ledgers, client communications, and target pipelines.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 flex gap-6 hover:translate-y-[-4px]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[#4099D9] shrink-0 h-fit">
              <Database className="h-6 w-6" />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">Custom POS &amp; Ledger Tools</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                High-performance retail billing software with real-time inventory adjustments and secure local/cloud database switches. 
                Perfect for large scale supply chain and invoice registries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
