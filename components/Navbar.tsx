"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Contact", href: "#contact" }
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]" 
          : "py-6 bg-transparent border-b border-transparent"
      }`}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-display text-xl sm:text-2xl font-black tracking-tight text-white">
            <span className="bg-gradient-to-r from-white to-[#4099D9] bg-clip-text text-transparent">Riyad</span>
            <span className="text-[#005CC1]">Soft</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-semibold text-slate-400 hover:text-white uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-5 py-2.5 bg-gradient-to-r from-[#005CC1] to-[#4099D9] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-[#005cc1]/20 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-lg font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "#contact")}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-[#005CC1] to-[#4099D9] text-white font-bold uppercase tracking-widest rounded-lg shadow-lg"
        >
          Get a Quote
        </a>
      </div>
    </>
  )
}
