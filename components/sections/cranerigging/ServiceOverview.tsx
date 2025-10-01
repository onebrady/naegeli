"use client";

import { Wrench, Settings, Hammer } from "lucide-react";

export default function ServiceOverview() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Wrench,
      title: "Crane & Rigging Services",
      items: [
        "Heavy equipment lifting and positioning",
        "Indoor and outdoor crane operations",
        "Specialized rigging for complex lifts",
        "Equipment disassembly and reassembly",
        "Millwright services",
        "Plant and facility installations",
      ],
    },
    {
      icon: Settings,
      title: "Machine Tool Moving",
      items: [
        "CNC machine relocation",
        "Production equipment moving",
        "Precision alignment and leveling",
        "Complete shop relocations",
        "Equipment decommissioning",
        "Installation and startup support",
      ],
    },
    {
      icon: Hammer,
      title: "Equipment & Capabilities",
      items: [
        "120,000 lb capacity forklifts",
        "Air jacks and hydraulic systems",
        "Roll-back trailers (dock-high)",
        "Heavy haul lowboys",
        "Specialized rigging gear",
        "Indoor/outdoor storage available",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Complete Machine Tool Moving & Rigging Solutions</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
          Naegeli Transportation provides comprehensive equipment installation, relocation, and rigging services. From initial planning to final alignment, our DOT-certified crews handle every phase of your project with precision and care. Whether you're moving a single CNC machine or relocating an entire production facility, we deliver safe, efficient, turnkey solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 rounded-lg p-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="btn btn-primary px-10 py-4 text-lg min-h-[44px]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
