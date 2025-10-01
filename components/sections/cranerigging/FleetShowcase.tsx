"use client";

import { Forklift, Wind, Anchor, Truck, Wrench } from "lucide-react";

export default function FleetShowcase() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const equipmentCategories = [
    {
      icon: Forklift,
      title: "Heavy-Duty Forklifts",
      items: [
        "Up to 120,000 lb capacity",
        "Indoor and outdoor models",
        "Warehouse and industrial configurations",
        "Specialized attachments available",
      ],
    },
    {
      icon: Wind,
      title: "Air Jacks & Hydraulic Systems",
      items: [
        "Low-profile air bearings",
        "Hydraulic gantry systems",
        "Precision positioning equipment",
        "Load-moving skates",
      ],
    },
    {
      icon: Anchor,
      title: "Rigging Gear",
      items: [
        "Chain hoists and come-alongs",
        "Slings (wire rope, synthetic, chain)",
        "Spreader bars and lifting beams",
        "Custom rigging fabrication",
      ],
    },
    {
      icon: Truck,
      title: "Transportation Fleet",
      items: [
        "Roll-back trailers (dock-high capability)",
        "Heavy haul lowboys",
        "Flatbed trailers",
        "Specialized transport equipment",
      ],
    },
    {
      icon: Wrench,
      title: "Support Equipment",
      items: [
        "Precision leveling instruments",
        "Alignment tools",
        "Grouting equipment",
        "Power tools and installation hardware",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Specialized Equipment for Every Move</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
          Our comprehensive fleet and specialized equipment ensure safe, efficient handling of your most valuable assets
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {equipmentCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg"
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

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-slate-100 rounded-lg px-6 py-3 border border-slate-300">
            <p className="text-slate-700 font-semibold">
              Download Equipment & Capabilities Guide (PDF)
            </p>
            <p className="text-slate-500 text-sm mt-1">Coming soon - contact us for details</p>
          </div>
          <div>
            <a
              href="#quote"
              onClick={scrollToQuote}
              className="btn btn-primary px-10 py-4 text-lg min-h-[44px]"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
