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
    <section id="contact" className="contact-section">
      {/* Glow Backdrops */}
      <div className="glow-sphere contact-glow-top" />
      <div className="glow-sphere contact-glow-bottom" />

      <div className="container relative-z">
        <div className="contact-container-grid">
          {/* Info Column */}
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <span className="section-tag text-[#00f0ff]">
                Get in Touch
              </span>
              <h2 className="contact-info-title">
                Let's Partner Up
              </h2>
              <p className="contact-info-desc">
                Have a project idea or need custom software developed? Drop us a line! 
                Our experts will analyze your specifications and build a production-ready roadmap.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="contact-details-list">
              <div className="contact-detail-row">
                <div className="contact-detail-icon border-[#4099D9]/20 text-[#4099D9]">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-content">
                  <p className="contact-detail-label">Email Us</p>
                  <a href="mailto:info@riyadsoft.com" className="contact-detail-value link-hover">
                    info@riyadsoft.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon border-[#005CC1]/20 text-[#005CC1]">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-content">
                  <p className="contact-detail-label">Call Us</p>
                  <a href="tel:+8801996702375" className="contact-detail-value link-hover">
                    +880 1996 702375
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon border-[#00f0ff]/20 text-[#00f0ff]">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-content">
                  <p className="contact-detail-label">Location</p>
                  <p className="contact-detail-value">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-panel">
            <div className="form-wrapper glass-panel">
              {success ? (
                <div className="form-success animate-float">
                  <div className="form-success-icon text-[#00f0ff]">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="form-success-title">Inquiry Received!</h3>
                  <p className="form-success-desc">
                    Thank you for reaching out. A software specialist from RiyadSoft will contact you via email shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-reset"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-element">
                  {error && (
                    <div className="form-error">
                      {error}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">
                      Project Requirement
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="SaaS Product">SaaS Product (like Travel Hisab)</option>
                      <option value="Custom Web App">Custom Web Application</option>
                      <option value="Mobile Application">Mobile Application (iOS/Android)</option>
                      <option value="Enterprise ERP/CRM">Enterprise ERP/CRM System</option>
                      <option value="Cloud Migration">Cloud Migration &amp; Infrastructure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, features..."
                      rows={5}
                      className="form-textarea"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-submit"
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                    <Send size={16} className="btn-submit-icon" />
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
