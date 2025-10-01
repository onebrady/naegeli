"use client";

import Image from "next/image";

export default function FleetShowcase() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const fleetCategories = [
    {
      title: "Lowboy Trailers",
      description: [
        "Fixed-neck and removable gooseneck (RGN)",
        "2-axle to 9-axle configurations",
        "55-85 ton capacity",
        "Ideal for tall equipment clearance",
      ],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Lowboy+Trailers",
    },
    {
      title: "Beam & Rail Trailers",
      description: [
        "100-ton capacity",
        "Extendable decks",
        "Perfect for long, heavy loads",
        "Versatile hauling options",
      ],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Beam+%26+Rail",
    },
    {
      title: "Tilt & Landoll Trailers",
      description: [
        "Hydraulic tilt for easy loading",
        "No ramps required",
        "Ideal for wheeled equipment",
        "Quick turnaround",
      ],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Tilt+Trailers",
    },
    {
      title: "Multi-Axle Power Units",
      description: [
        "Heavy-duty tractors",
        "500+ HP capabilities",
        "Specialized for oversized loads",
        "Experienced operator teams",
      ],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Power+Units",
    },
  ];

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-12">Our Heavy Haul Fleet</h2>

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {fleetCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="relative w-full h-64">
                <Image
                  src={category.image}
                  alt={`${category.title} - Naegeli Transportation fleet`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-display font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-2 text-slate-700">
                  {category.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="btn btn-secondary text-base px-8 py-3 w-full sm:w-auto min-h-[44px]"
          >
            Download Full Capability Sheet (PDF)
          </a>
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="btn btn-primary text-base px-8 py-3 w-full sm:w-auto min-h-[44px]"
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}
