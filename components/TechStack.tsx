"use client"

import React from "react"
import { Code2, Server, Database, Cloud, ShieldAlert, Cpu } from "lucide-react"

export default function TechStack() {
  const stack = [
    {
      icon: <Code2 className="tech-main-icon text-[#00F0FF]" />,
      name: "Next.js & React",
      description: "App Router development for rich, fast UI/UX."
    },
    {
      icon: <Cpu className="tech-main-icon text-[#4099D9]" />,
      name: "TypeScript",
      description: "Strict compile safety for heavy accounting logic."
    },
    {
      icon: <Server className="tech-main-icon text-[#005CC1]" />,
      name: "Node.js & Express",
      description: "Scalable REST APIs and structured controller systems."
    },
    {
      icon: <Database className="tech-main-icon text-[#00F0FF]" />,
      name: "MongoDB & Mongoose",
      description: "Aggregations and multi-db prod/local switching."
    },
    {
      icon: <Cloud className="tech-main-icon text-[#4099D9]" />,
      name: "AWS & S3 Storage",
      description: "Secure asset storage and high availability servers."
    },
    {
      icon: <ShieldAlert className="tech-main-icon text-[#005CC1]" />,
      name: "Next-Auth (Auth.js)",
      description: "Advanced session encryption and role permissions."
    }
  ]

  return (
    <section id="tech-stack" className="tech-section">
      {/* Mesh gradients */}
      <div className="glow-sphere tech-glow" />

      <div className="container relative-z">
        {/* Header */}
        <div className="tech-header">
          <span className="section-tag text-[#00f0ff]">
            Our Stack
          </span>
          <h2 className="section-title">
            Technologies We Master
          </h2>
          <p className="section-desc">
            We build with modern, industry-standard technology frameworks. This guarantees 
            that our clients get scalable, highly maintainable, and high-performing products.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="tech-grid-list">
          {stack.map((tech, idx) => (
            <div key={idx} className="tech-card-item glass-panel">
              <div className="tech-card-icon">
                {tech.icon}
              </div>
              <div className="tech-card-content">
                <h3 className="tech-card-title">
                  {tech.name}
                </h3>
                <p className="tech-card-desc">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
