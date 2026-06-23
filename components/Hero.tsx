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
    <section className="hero-section">
      {/* Background patterns and glowing effects */}
      <div className="glow-backdrop" />
      <div className="tech-grid" />
      
      {/* Blurred glowing spheres */}
      <div className="glow-sphere top-glow" />
      <div className="glow-sphere bottom-glow" />

      <div className="container hero-container">
        {/* Floating Badge */}
        <div className="hero-badge animate-float">
          <Sparkles className="badge-icon text-[#00f0ff]" />
          <span className="badge-text">
            SaaS &amp; Enterprise Software Studio
          </span>
        </div>

        {/* Catchy Main Title */}
        <h1 className="hero-title">
          We Build Software That <br className="desktop-only" />
          <span className="text-gradient">Transforms Businesses</span>
        </h1>

        {/* Sub-text */}
        <p className="hero-subtitle">
          RiyadSoft designs, engineers, and scales premium custom software solutions. 
          We build next-generation SaaS tools, enterprise platforms, and mobile apps 
          helping businesses streamline operations.
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas">
          <button
            onClick={() => handleScrollTo("#products")}
            className="btn-primary"
          >
            Explore Flagship Products
            <ArrowRight size={16} className="btn-icon-right" />
          </button>

          <button
            onClick={() => handleScrollTo("#services")}
            className="btn-secondary"
          >
            Our IT Services
          </button>
        </div>
      </div>
    </section>
  )
}
