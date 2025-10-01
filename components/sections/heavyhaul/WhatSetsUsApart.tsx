import { Award, Truck, Shield, MapPin } from "lucide-react";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: Award,
      title: "Experience & Expertise",
      items: [
        "69+ years serving Texas and beyond",
        "65+ DOT-certified professional drivers",
        "Family-owned and operated since 1956",
        "Highest US DOT safety rating",
      ],
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      items: [
        "70+ late-model trucks and trailers",
        "Thoroughly inspected and maintained",
        "GPS navigation on every vehicle",
        "State-of-the-art communication systems",
      ],
    },
    {
      icon: Shield,
      title: "Safety First",
      items: [
        "DOT, TWIC, and Hazmat certified",
        "Comprehensive safety program",
        "Fully insured and bonded",
        "Zero-incident focus on every job",
      ],
    },
    {
      icon: MapPin,
      title: "Service Coverage",
      items: [
        "Based in Houston, Texas",
        "Serving TX, LA, AR, OK, MS",
        "Port of Houston access expertise",
        "Regional and long-haul capability",
      ],
    },
  ];

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-12">Why Choose Naegeli for Heavy Haul Transportation</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
