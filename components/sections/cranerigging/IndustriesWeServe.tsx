import { Factory, Droplet, Plane, Zap, HeartPulse, UtensilsCrossed } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing & Fabrication",
      items: [
        "Precision machine shops",
        "Metal fabrication facilities",
        "Production plants",
        "Assembly operations",
      ],
    },
    {
      icon: Droplet,
      title: "Oil & Gas",
      items: [
        "Refineries",
        "Chemical plants",
        "Processing facilities",
        "Offshore support",
      ],
    },
    {
      icon: Plane,
      title: "Aerospace & Defense",
      items: [
        "Aircraft manufacturing",
        "Component production",
        "Testing facilities",
        "Military installations",
      ],
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      items: [
        "Power generation",
        "Substations",
        "Industrial facilities",
        "Infrastructure projects",
      ],
    },
    {
      icon: HeartPulse,
      title: "Medical Device & Pharmaceutical",
      items: [
        "Clean room equipment",
        "Production machinery",
        "Laboratory equipment",
        "Quality control systems",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Beverage",
      items: [
        "Processing equipment",
        "Packaging lines",
        "Production machinery",
        "Cold storage systems",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-12">Trusted Across Multiple Industries</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 rounded-lg p-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{industry.title}</h3>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {industry.items.map((item, idx) => (
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
      </div>
    </section>
  );
}
