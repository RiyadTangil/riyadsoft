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
    <section id="products" className="products-section">
      {/* Glow backgrounds */}
      <div className="glow-sphere products-glow-right" />
      <div className="glow-sphere products-glow-left" />

      <div className="container relative-z">
        {/* Section Header */}
        <div className="products-header">
          <span className="section-tag text-[#00f0ff]">
            Flagship Products
          </span>
          <h2 className="section-title">
            Software Products We've Built
          </h2>
          <p className="section-desc">
            RiyadSoft designs and launches premium SaaS products. Our systems are engineered 
            specifically to solve industry-specific complex operations with beautiful, fast, and secure user interfaces.
          </p>
        </div>

        {/* Product Showcase: Travel Hisab */}
        <div className="showcase-grid">
          {/* Details Column */}
          <div className="showcase-details">
            <div className="showcase-meta">
              <div className="showcase-icon">
                <Globe size={20} className="text-[#005CC1]" />
              </div>
              <span className="showcase-tag">
                SaaS Product for Travel Agencies
              </span>
            </div>

            <h3 className="showcase-title">
              Travel <span className="text-[#4099D9]">Hisab</span>
            </h3>

            <p className="showcase-desc">
              Travel Hisab (Trabill Pro) is a leading cloud-based billing and accounting platform built specifically for travel agencies. 
              It simplifies complex ticketing workflows, agent commissions, and money allocations with state-of-the-art database integrity.
            </p>

            {/* Features list */}
            <div className="showcase-features">
              {travelHisabFeatures.map((feat, idx) => (
                <div key={idx} className="feature-row">
                  <CheckCircle2 size={18} className="text-[#00f0ff] feature-check" />
                  <span className="feature-text">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="showcase-cta">
              <a
                href="https://travelhisab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit travelhisab.com
                <ArrowUpRight size={16} className="btn-icon-right" />
              </a>
            </div>
          </div>

          {/* Visual Showcase Mockup Column */}
          <div className="showcase-visual">
            <div className="showcase-visual-frame glass-panel animate-float">
              {/* Overlay glow effect */}
              <div className="showcase-overlay" />
              
              {/* Generated Mockup Image */}
              <img
                src="/travel_hisab_dashboard_mockup.png"
                alt="Travel Hisab SaaS Dashboard Mockup"
                className="showcase-mockup"
              />
            </div>
          </div>
        </div>

        {/* Secondary Products Showcase Cards */}
        <div className="sub-products-grid">
          <div className="sub-product-card glass-panel">
            <div className="sub-product-icon text-[#00f0ff]">
              <Layers size={24} />
            </div>
            <div className="sub-product-content">
              <h4 className="sub-product-title">RiyadSoft CRM &amp; HRMS</h4>
              <p className="sub-product-desc">
                An integrated corporate customer relationship management and automated human resources payroll platform. 
                Streamlines employee salary ledgers, client communications, and target pipelines.
              </p>
            </div>
          </div>

          <div className="sub-product-card glass-panel">
            <div className="sub-product-icon text-[#4099D9]">
              <Database size={24} />
            </div>
            <div className="sub-product-content">
              <h4 className="sub-product-title">Custom POS &amp; Ledger Tools</h4>
              <p className="sub-product-desc">
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
