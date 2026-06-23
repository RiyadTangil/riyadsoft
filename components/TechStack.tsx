"use client"

import React from "react"
import { Code2, Server, Database, Cloud, ShieldAlert, Cpu } from "lucide-react"

export default function TechStack() {
  const stack = [
    {
      icon: <Code2 className="h-6 w-6 text-[#00F0FF]" />,
      name: "Next.js & React",
      description: "App Router development for rich, fast UI/UX."
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#4099D9]" />,
      name: "TypeScript",
      description: "Strict compile safety for heavy accounting logic."
    },
    {
      icon: <Server className="h-6 w-6 text-[#005CC1]" />,
      name: "Node.js & Express",
      description: "Scalable REST APIs and structured controller systems."
    },
    {
      icon: <Database className="h-6 w-6 text-[#00F0FF]" />,
      name: "MongoDB & Mongoose",
      description: "Aggregations and multi-db prod/local switching."
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#4099D9]" />,
      name: "AWS & S3 Storage",
      description: "Secure asset storage and high availability servers."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-[#005CC1]" />,
      name: "Next-Auth (Auth.js)",
      description: "Advanced session encryption and role permissions."
    }
  ]

  return (
    <section id="tech-stack" className="relative py-24 border-t border-white/5 bg-[#070b16]/30 overflow-hidden">
      {/* Mesh gradients */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-[#005cc1]/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-3 block">
            Our Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Technologies We Master
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            We build with modern, industry-standard technology frameworks. This guarantees 
            that our clients get scalable, highly maintainable, and high-performing products.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((tech, idx) => (
            <div key={idx} className="glass-panel p-6 flex items-center gap-5 hover:border-[#00f0ff]/30">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {tech.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium leading-normal">
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
