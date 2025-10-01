"use client";

import { Settings, Factory, Zap, Package } from "lucide-react";

export default function EquipmentWeMove() {
  const equipmentCategories = [
    {
      icon: Settings,
      title: "Machine Tools",
      items: [
        "CNC mills (vertical/horizontal)",
        "CNC lathes",
        "Grinding machines",
        "Boring mills",
        "Drill presses",
        "Gear cutting equipment",
        "EDM machines",
        "Waterjet cutters",
      ],
    },
    {
      icon: Factory,
      title: "Production Equipment",
      items: [
        "Stamping presses",
        "Hydraulic presses",
        "Injection molding machines",
        "Extrusion equipment",
        "Assembly line machinery",
        "Packaging equipment",
        "Material handling systems",
      ],
    },
    {
      icon: Zap,
      title: "Industrial Machinery",
      items: [
        "Industrial boilers",
        "Generators",
        "Compressors",
        "Pumps and motors",
        "Conveyor systems",
        "Processing equipment",
        "HVAC systems",
      ],
    },
    {
      icon: Package,
      title: "Heavy Equipment",
      items: [
        "Transformers",
        "Electrical switchgear",
        "Storage tanks",
        "Structural steel",
        "Pre-fabricated units",
        "Skid-mounted equipment",
      ],
    },
  ];

  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-12">Specialized in Complex Machinery & Equipment</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {equipmentCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 rounded-lg p-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-center text-white max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-semibold mb-4 leading-relaxed">
            Moving specialized or custom equipment? Our experienced crews have successfully relocated some of the most complex industrial machinery.
          </p>
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-md hover:bg-slate-100 transition-colors min-h-[44px]"
          >
            Contact Us to Discuss Your Specific Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
