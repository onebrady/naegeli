import { Construction, TowerControl, Forklift, Settings } from "lucide-react";

export default function WhatWeMove() {
  const categories = [
    {
      title: "Construction Equipment",
      icon: Construction,
      items: ["Excavators", "Dozers & loaders", "Graders & compactors", "Trenchers & scrapers"],
    },
    {
      title: "Cranes",
      icon: TowerControl,
      items: ["Crawler cranes", "Truck cranes", "Rough terrain", "All types & sizes"],
    },
    {
      title: "Forklifts",
      icon: Forklift,
      items: ["Warehouse style", "Heavy lift capacity", "Container handlers", "5,000–100,000 lbs"],
    },
    {
      title: "Machine Tools",
      icon: Settings,
      items: ["CNC equipment", "Fabricating equipment", "Injection machines", "Industrial machinery"],
    },
  ];

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-4">What We Move</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
          Specialized expertise moving heavy equipment across multiple industries
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold">{category.title}</h4>
                </div>
                <ul className="space-y-2 text-slate-700">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-orange-50 border border-orange-200 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-lg text-slate-800">
            <span className="font-semibold text-orange-700">Plus:</span> Skid-mounted buildings and
            turnkey shop relocations
          </p>
        </div>
      </div>
    </section>
  );
}
