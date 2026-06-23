"use client"

import React from "react"
import { Globe, Heart } from "lucide-react"

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
    <footer className="footer-section">
      <div className="container relative-z">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-col-main">
            <a href="#" className="footer-logo">
              <span className="logo-brand">Riyad</span>
              <span className="logo-accent">Soft</span>
            </a>
            <p className="footer-desc">
              RiyadSoft is an enterprise-grade software product studio. We specialize in custom web portals, 
              scalable SaaS tools, mobile apps, and robust cloud configurations.
            </p>
          </div>

          {/* Quick Navigation links */}
          <div className="footer-col-nav">
            <h4 className="footer-title">
              Company
            </h4>
            <div className="footer-links-list">
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="footer-link-item">
                Our IT Services
              </a>
              <a href="#products" onClick={(e) => handleScrollTo(e, "#products")} className="footer-link-item">
                SaaS Products
              </a>
              <a href="#tech-stack" onClick={(e) => handleScrollTo(e, "#tech-stack")} className="footer-link-item">
                Technology Stack
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="footer-link-item">
                Contact Inquiry
              </a>
            </div>
          </div>

          {/* Products Quick Links */}
          <div className="footer-col-prod">
            <h4 className="footer-title">
              Featured Products
            </h4>
            <div className="footer-links-list">
              <a 
                href="https://travelhisab.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-prod-row hover-color"
              >
                <Globe size={16} className="text-[#4099D9] prod-globe-icon" />
                Travel Hisab (travelhisab.com)
              </a>
              <p className="footer-prod-label">
                The flagship SaaS billing &amp; accounting solution built for 500+ travel agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} RiyadSoft. All rights reserved.
          </p>
          <p className="footer-love">
            Made with <Heart size={12} className="heart-icon" /> for SaaS Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
