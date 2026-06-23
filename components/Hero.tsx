"use client"

import React from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background patterns and glowing effects */}
      <div className="glow-backdrop" />
      <div className="tech-grid" />
      
      {/* Blurred glowing spheres */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#005CC1]/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4099D9]/8 blur-[120px] pulse-circle" />

      <div className="container relative z-10 text-center px-4 flex flex-col items-center justify-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-panel border-white/5 rounded-full shadow-inner animate-float">
          <Sparkles className="h-4.5 w-4.5 text-[#00f0ff]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#00f0ff]">
            SaaS &amp; Enterprise Software Studio
          </span>
        </div>

        {/* Catchy Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-6">
          <span className="text-white">We Build Software That </span>
          <br className="hidden sm:inline" />
          <span className="text-gradient">Transforms Businesses</span>
        </h1>

        {/* Sub-text */}
        <p className="max-w-2xl text-sm sm:text-lg text-slate-400 font-medium mb-10 leading-relaxed">
          RiyadSoft designs, engineer, and scales premium custom software solutions. 
          We build next-generation SaaS tools, enterprise platforms, and mobile apps 
          helping businesses streamline operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md">
          <button
            onClick={() => handleScrollTo("#products")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#005CC1] to-[#4099D9] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[#005cc1]/30 hover:opacity-95 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 group"
          >
            Explore Flagship Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => handleScrollTo("#services")}
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/5 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border-white/10 hover:border-white/20 transform hover:scale-[1.03] active:scale-[0.97]"
          >
            Our IT Services
          </button>
        </div>
      </div>
    </section>
  )
}
