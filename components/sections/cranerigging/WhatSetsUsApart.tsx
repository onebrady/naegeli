import { Award, CheckCircle2, Shield, Users } from "lucide-react";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: Award,
      title: "Experience & Expertise",
      items: [
        "209+ years combined crew experience",
        "DOT-certified professional riggers",
        "Moves mills, presses, lathes, grinders",
        "Complex machinery specialists",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Turnkey Service",
      items: [
        "Complete project management",
        "Lifting, relocating, setting, aligning",
        "Disassembly and reassembly",
        "One point of contact",
      ],
    },
    {
      icon: Shield,
      title: "Safety & Reliability",
      items: [
        "Job safety conscious operations",
        "Thoroughly inspected equipment",
        "Fully insured and bonded",
        "Comprehensive safety program",
      ],
    },
    {
      icon: Users,
      title: "Professional Crews",
      items: [
        "Experienced riggers and millwrights",
        "Indoor/outdoor lift experience",
        "Professional communication",
        "Problem-solving expertise",
      ],
    },
  ];

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-12">Why Industry Leaders Choose Naegeli</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="bg-orange-500 rounded-lg p-4 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {feature.items.map((item, idx) => (
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
      </div>
    </section>
  );
}
