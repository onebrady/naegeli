"use client";

export default function SocialProofBanner() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Equipment OEMs
  const oems = [
    { name: "DMG MORI", id: "dmg-mori" },
    { name: "Mazak", id: "mazak" },
    { name: "Okuma", id: "okuma" },
    { name: "Toshiba", id: "toshiba" },
  ];

  // Industrial Clients
  const industrialClients = [
    { name: "Baker Hughes", id: "baker-hughes" },
    { name: "Halliburton", id: "halliburton" },
    { name: "Schlumberger", id: "schlumberger" },
    { name: "Cameron", id: "cameron" },
    { name: "NOV", id: "nov" },
    { name: "Mustang CAT", id: "mustang-cat" },
    { name: "Cloeren", id: "cloeren" },
    { name: "Magni", id: "magni" },
  ];

  return (
    <section className="section bg-white py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900">
          Trusted by Industry Leaders
        </h2>

        {/* Equipment Manufacturers Row */}
        <div className="mb-6">
          <p className="text-center text-sm text-slate-600 mb-4 font-semibold">Equipment Manufacturers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {oems.map((oem) => (
              <div
                key={oem.id}
                className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors min-h-[80px]"
              >
                {/* TODO: Replace with actual logo images */}
                <div className="text-center">
                  <div className="text-slate-400 text-xs mb-1">LOGO</div>
                  <div className="text-slate-700 font-semibold text-sm">{oem.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Clients Row */}
        <div>
          <p className="text-center text-sm text-slate-600 mb-4 font-semibold">Industrial Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
            {industrialClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors min-h-[80px]"
              >
                {/* TODO: Replace with actual logo images */}
                <div className="text-center">
                  <div className="text-slate-400 text-xs mb-1">LOGO</div>
                  <div className="text-slate-700 font-semibold text-sm">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="inline-block btn btn-primary px-8 py-3 min-h-[44px]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
