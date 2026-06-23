"use client"

import React from "react"
import { Monitor, Smartphone, Cloud, FileText } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-[#00F0FF]" />,
      title: "Web App Development",
      description: "We engineer premium, scalable web portals and applications using React, Next.js, and Node.js. Tailored for enterprise productivity."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#4099D9]" />,
      title: "Mobile App Development",
      description: "Beautiful native iOS and Android applications, as well as React Native solutions, that deliver robust mobile services to users."
    },
    {
      icon: <Cloud className="h-8 w-8 text-[#005CC1]" />,
      title: "Cloud Infrastructure",
      description: "Secure, reliable, and high-performance cloud deployment, server virtualization, and automated CI/CD pipelines using AWS."
    },
    {
      icon: <FileText className="h-8 w-8 text-[#00F0FF]" />,
      title: "Enterprise Solutions",
      description: "End-to-end custom ERPs, HRMSs, and invoice-ledger billing platforms designed specifically to optimize business management workflows."
    }
  ]

  return (
    <section id="services" className="relative py-24 border-t border-white/5 bg-[#070b16]/40 overflow-hidden">
      {/* Blurred background glows */}
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] rounded-full bg-[#005CC1]/5 blur-[90px]" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-[#00f0ff]/5 blur-[100px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-3 block">
            Custom Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Our Enterprise IT Services
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
            RiyadSoft provides premium technology consultation and development services. 
            We build state-of-the-art software systems to accelerate growth and streamline operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="glass-panel p-8 flex flex-col items-start gap-5 hover:translate-y-[-5px]">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {svc.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
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
