"use client";

import Image from "next/image";

export default function SocialProofBanner() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const clients = [
    { name: "Schlumberger", logo: "/images/slb-logo.png" },
    { name: "Weatherford", logo: "/images/weatherford-logo.png" },
    { name: "Bechtel", logo: "/images/bechtel-logo.png" },
    { name: "Bigge Crane", logo: "/images/biggie-crane-logo.png" },
    { name: "Kobelco", logo: "/images/kobelco-logo.png" },
    { name: "Terex", logo: "/images/terex.png" },
    { name: "Manitowoc", logo: "/images/manitowoc-logo.png" },
    { name: "DMG MORI", logo: "/images/dmg-mori-logo.png" },
    { name: "Cameron", logo: "/images/cameron-logo.png" },
    { name: "Mustang CAT", logo: "/images/mustang-cat-logo.png" },
  ];

  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="container">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-slate-700 mb-8">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
          {clients.map((client, index) => (
            <div
              key={index}
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

        <div className="text-center">
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
