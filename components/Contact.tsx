"use client"

import React, { useState } from "react"
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "SaaS Product",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.")
      return
    }
    setError("")
    setLoading(true)

    // Simulate API request
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        projectType: "SaaS Product",
        message: ""
      })
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 w-[350px] h-[350px] rounded-full bg-[#005cc1]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-[#00f0ff]/5 blur-[90px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] block">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-none">
                Let's Partner Up
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
                Have a project idea or need custom software developed? Drop us a line! 
                Our experts will analyze your specifications and build a production-ready roadmap.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#4099D9]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Us</p>
                  <a href="mailto:info@riyadsoft.com" className="text-sm sm:text-base text-white font-semibold hover:text-[#4099D9] transition-colors">
                    info@riyadsoft.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#005CC1]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us</p>
                  <a href="tel:+8801996702375" className="text-sm sm:text-base text-white font-semibold hover:text-[#005CC1] transition-colors">
                    +880 1996 702375
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm sm:text-base text-white font-semibold">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 border-white/5 shadow-2xl relative">
              {success ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-float">
                  <div className="w-16 h-16 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] mb-2">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-sm">
                    Thank you for reaching out. A software specialist from RiyadSoft will contact you via email shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="px-4 py-3 bg-white/5 border border-white/10 focus:border-[#4099D9]/50 focus:ring-1 focus:ring-[#4099D9]/50 rounded-xl text-white outline-none text-sm transition-all placeholder:text-slate-600"
                        required
                      />
                    </div>

                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="px-4 py-3 bg-white/5 border border-white/10 focus:border-[#4099D9]/50 focus:ring-1 focus:ring-[#4099D9]/50 rounded-xl text-white outline-none text-sm transition-all placeholder:text-slate-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Project Requirement
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="px-4 py-3 bg-[#0A1021] border border-white/10 focus:border-[#4099D9]/50 rounded-xl text-white outline-none text-sm transition-all"
                    >
                      <option value="SaaS Product">SaaS Product (like Travel Hisab)</option>
                      <option value="Custom Web App">Custom Web Application</option>
                      <option value="Mobile Application">Mobile Application (iOS/Android)</option>
                      <option value="Enterprise ERP/CRM">Enterprise ERP/CRM System</option>
                      <option value="Cloud Migration">Cloud Migration &amp; Infrastructure</option>
                    </select>
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, features..."
                      rows={5}
                      className="px-4 py-3 bg-white/5 border border-white/10 focus:border-[#4099D9]/50 focus:ring-1 focus:ring-[#4099D9]/50 rounded-xl text-white outline-none text-sm transition-all resize-none placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-[#005CC1] to-[#4099D9] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[#005cc1]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
