import { Download } from "lucide-react";

export default function Fleet() {
  const fleetCategories = [
    {
      title: "Lowboy & Multi-Axle Trailers",
      specs: "55-85 ton capacity",
      description: "Heavy-duty lowboys for oversized equipment",
    },
    {
      title: "Beam/Rail & Stretch Decks",
      specs: "65-100 ton capacity",
      description: "Extended trailers for long loads",
    },
    {
      title: "Tilt/Rollback Trailers",
      specs: "Variable capacity",
      description: "Easy loading for wheeled equipment",
    },
    {
      title: "Forklifts with Operators",
      specs: "5,000-100,000 lbs",
      description: "On-site loading and positioning",
    },
    {
      title: "Specialized Rigging Gear",
      specs: "Custom solutions",
      description: "Hydraulic gantries, dollies, and more",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Our Fleet & Capabilities</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
          Modern, well-maintained equipment to handle any heavy haul challenge
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {fleetCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 border-2 border-slate-200 hover:border-orange-500 rounded-lg p-6 transition-all hover:shadow-md"
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h4>
              <div className="text-orange-600 font-bold mb-2">{category.specs}</div>
              <p className="text-slate-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* CTA for Capability Sheet */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Full Capability Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
