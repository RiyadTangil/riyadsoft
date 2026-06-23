"use client"

import React from "react"
import { Monitor, Smartphone, Cloud, FileText } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Monitor className="icon-main text-[#00F0FF]" />,
      title: "Web App Development",
      description: "We engineer premium, scalable web portals and applications using React, Next.js, and Node.js. Tailored for enterprise productivity."
    },
    {
      icon: <Smartphone className="icon-main text-[#4099D9]" />,
      title: "Mobile App Development",
      description: "Beautiful native iOS and Android applications, as well as React Native solutions, that deliver robust mobile services to users."
    },
    {
      icon: <Cloud className="icon-main text-[#005CC1]" />,
      title: "Cloud Infrastructure",
      description: "Secure, reliable, and high-performance cloud deployment, server virtualization, and automated CI/CD pipelines using AWS."
    },
    {
      icon: <FileText className="icon-main text-[#00F0FF]" />,
      title: "Enterprise Solutions",
      description: "End-to-end custom ERPs, HRMSs, and invoice-ledger billing platforms designed specifically to optimize business management workflows."
    }
  ]

  return (
    <section id="services" className="services-section">
      {/* Blurred background glows */}
      <div className="glow-sphere services-glow-left" />
      <div className="glow-sphere services-glow-right" />

      <div className="container relative-z">
        {/* Section Header */}
        <div className="services-header">
          <span className="section-tag text-[#00f0ff]">
            Custom Solutions
          </span>
          <h2 className="section-title">
            Our Enterprise IT Services
          </h2>
          <p className="section-desc">
            RiyadSoft provides premium technology consultation and development services. 
            We build state-of-the-art software systems to accelerate growth and streamline operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card glass-panel">
              <div className="icon-box">
                {svc.icon}
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {svc.title}
                </h3>
                <p className="service-desc-text">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
