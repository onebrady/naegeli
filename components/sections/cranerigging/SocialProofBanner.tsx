"use client";

import Image from "next/image";

export default function SocialProofBanner() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Equipment OEMs
  const oems = [
    { name: "DMG MORI", logo: "/images/dmg-mori-logo.png" },
    { name: "Mazak", logo: "/images/mazak-logo.webp" },
    { name: "Okuma", logo: "/images/okuma-logo.webp" },
    { name: "Toshiba", logo: "/images/toshiba-logo.webp" },
  ];

  // Industrial Clients
  const industrialClients = [
    { name: "Baker Hughes", logo: "/images/baker-hughes-logo.webp" },
    { name: "Halliburton", logo: "/images/halliburton-logo.webp" },
    { name: "Schlumberger", logo: "/images/slb-logo.png" },
    { name: "Cameron", logo: "/images/cameron-logo.png" },
    { name: "NOV", logo: "/images/nov-logo.webp" },
    { name: "Mustang CAT", logo: "/images/mustang-cat-logo.png" },
    { name: "Cloeren", logo: "/images/cloeren-logo.webp" },
    { name: "Magni", logo: "/images/magni-logo.webp" },
  ];

  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="container">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-slate-700 mb-8">
          Trusted by Industry Leaders
        </h2>

        {/* Equipment Manufacturers Row */}
        <div className="mb-6">
          <p className="text-center text-sm text-slate-600 mb-4 font-semibold">Equipment Manufacturers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {oems.map((oem) => (
              <div
                key={oem.name}
                className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={oem.logo}
                  alt={`${oem.name} logo`}
                  width={140}
                  height={56}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Clients Row */}
        <div>
          <p className="text-center text-sm text-slate-600 mb-4 font-semibold">Industrial Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {industrialClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={140}
                  height={56}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="btn btn-secondary text-sm sm:text-base px-6 py-2.5 min-h-[44px]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
