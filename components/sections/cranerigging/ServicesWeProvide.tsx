"use client";

import { useState } from "react";
import { ChevronDown, Wrench, Building2, Construction, Hammer } from "lucide-react";

export default function ServicesWeProvide() {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories = [
    {
      icon: Wrench,
      title: "Machine Tool Moving & Installation",
      description: "Complete relocation and installation services for precision machinery",
      services: [
        "CNC mills and lathes",
        "Horizontal and vertical machining centers",
        "Grinding machines",
        "EDM equipment",
        "Fabricating equipment",
        "Injection molding machines",
        "Production line equipment",
        "Machine alignment and leveling",
        "Power disconnect/reconnect coordination",
        "Precision setting and startup support",
      ],
    },
    {
      icon: Building2,
      title: "Complete Shop Relocations",
      description: "Turnkey facility moves with minimal downtime",
      services: [
        "Pre-move planning and layout design",
        "Equipment inventory and labeling",
        "Coordinated disassembly",
        "Transportation management",
        "Sequential installation",
        "Production line restart support",
        "Documentation and reporting",
      ],
    },
    {
      icon: Construction,
      title: "Crane & Rigging Services",
      description: "Expert lifting and positioning for heavy industrial equipment",
      services: [
        "Heavy equipment lifts (indoor/outdoor)",
        "Plant and facility installations",
        "Equipment positioning and alignment",
        "Structural steel erection",
        "HVAC equipment installation",
        "Transformer and electrical equipment",
        "Emergency equipment removal",
        "Critical lift planning and engineering",
      ],
    },
    {
      icon: Hammer,
      title: "Millwright Services",
      description: "Skilled installation, maintenance, and repair services",
      services: [
        "Equipment installation",
        "Precision alignment and leveling",
        "Anchor bolt installation",
        "Grouting and foundation work",
        "Equipment disassembly/reassembly",
        "Bearing and coupling service",
        "Preventive maintenance",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Comprehensive Equipment Moving & Rigging Services</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
          From single equipment moves to complete facility relocations, we provide turnkey solutions for every phase of your project
        </p>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-lg border-2 transition-all text-left min-h-[44px] ${
                  activeTab === index
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 bg-white hover:border-orange-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon
                    className={`w-5 h-5 ${activeTab === index ? "text-orange-500" : "text-slate-400"}`}
                  />
                  <h3
                    className={`font-bold text-sm md:text-base ${
                      activeTab === index ? "text-orange-900" : "text-slate-900"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-start gap-4 mb-6">
            {(() => {
              const Icon = serviceCategories[activeTab].icon;
              return (
                <div className="bg-orange-500 rounded-lg p-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              );
            })()}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {serviceCategories[activeTab].title}
              </h3>
              <p className="text-slate-600 text-lg">{serviceCategories[activeTab].description}</p>
            </div>
          </div>

          <div className="border-t border-slate-300 pt-6">
            <h4 className="font-bold text-slate-900 mb-4 text-lg">Services Include:</h4>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {serviceCategories[activeTab].services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5 rotate-[-90deg]" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
