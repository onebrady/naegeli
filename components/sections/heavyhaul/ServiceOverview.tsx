"use client";

import { Truck, Settings, Scale } from "lucide-react";

export default function ServiceOverview() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Truck,
      title: "Equipment We Transport",
      items: [
        "Construction equipment (excavators, dozers, graders, loaders, trenchers, scrapers)",
        "Industrial machinery and machine tools",
        "Cranes (crawler, truck, rough terrain—all types and sizes)",
        "Forklifts (5,000–100,000 lbs capacity)",
        "Dump trucks and specialized vehicles",
      ],
    },
    {
      icon: Settings,
      title: "Fleet Capabilities",
      items: [
        "Lowboy trailers (55-85 ton capacity)",
        "Beam and rail trailers (100-ton capacity)",
        "Landoll tilt trailers",
        "Stretch flatbeds",
        "Multi-axle power units",
        "Specialized rigging equipment",
      ],
    },
    {
      icon: Scale,
      title: "Weight & Size Range",
      items: [
        "Weights: 2,000 to 200,000 lbs",
        "Oversize and overweight loads",
        "Permitted transport coordination",
        "Route surveys and planning",
        "Escort vehicle coordination",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Complete Heavy Haul Solutions</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-4xl mx-auto">
          With 70+ vehicles ready for daily dispatch, Naegeli Transportation provides safe, reliable heavy equipment transport.
          Our 65+ DOT-certified drivers, late-model fleet, and state-of-the-art GPS systems ensure your equipment arrives on time,
          every time. Family-owned since 1956.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-lg p-6 lg:p-8 border border-slate-200">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl mb-4 font-display font-semibold">{service.title}</h3>
                <ul className="space-y-2 text-slate-700">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm lg:text-base">
                      <span className="text-orange-500 font-bold mt-1 flex-shrink-0">✓</span>
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
            className="btn btn-primary text-lg px-10 py-4 min-h-[44px]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
