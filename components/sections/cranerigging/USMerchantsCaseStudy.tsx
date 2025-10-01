"use client";

import { MapPin, Package, CheckCircle2 } from "lucide-react";

export default function USMerchantsCaseStudy() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Recent Project Highlight</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
          See how we handle large-scale industrial installations from port delivery to final commissioning
        </p>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Main Content */}
            <div className="lg:col-span-2 p-8 md:p-10 text-white">
              <div className="flex items-start gap-3 mb-6">
                <div className="bg-orange-500 rounded-lg p-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    U.S. Merchants Manufacturing Facility
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4" />
                    <span>10610 Telge Rd, Houston, TX</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-orange-400 font-bold mb-3 text-lg">Project Scope</h4>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">(40) 1200-Ton Plastic Injection Machines</span> @ 70,000 lbs each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">(10) 1300-Ton Plastic Injection Machines</span> @ 88,000 lbs each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">Total:</span> 50 machines, 3,680,000 pounds of equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">Service:</span> Port of Houston delivery through complete installation</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h5 className="text-orange-400 font-semibold mb-2 text-sm">Challenge</h5>
                  <p className="text-slate-300 text-sm">
                    Coordinate port delivery and install 50 large-scale plastic injection molding machines for new manufacturing facility.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h5 className="text-orange-400 font-semibold mb-2 text-sm">Solution</h5>
                  <p className="text-slate-300 text-sm">
                    Complete turnkey service including port coordination, transportation, rigging, setting, leveling, and alignment for all 50 machines.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h5 className="text-orange-400 font-semibold mb-2 text-sm">Result</h5>
                  <p className="text-slate-300 text-sm">
                    Successful installation of entire facility with precision placement and alignment, enabling on-schedule production startup.
                  </p>
                </div>
              </div>

              {/* Optional: Video embed placeholder */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center text-slate-400 text-sm">
                {/* TODO: Replace with actual video embed if available (US_Merchant_Naegeli.mp4) */}
                Project video available upon request
              </div>
            </div>

            {/* Callout Quote Sidebar */}
            <div className="lg:col-span-1 bg-orange-500 p-8 md:p-10 flex flex-col justify-center">
              <div className="text-6xl text-orange-300 mb-4 leading-none">"</div>
              <p className="text-white text-lg md:text-xl font-semibold mb-6 leading-relaxed">
                This project demonstrates our capability to handle large-scale industrial installations from port delivery to final commissioning.
              </p>
              <div className="pt-6 border-t border-orange-400">
                <p className="text-orange-100 text-sm font-semibold mb-1">Key Achievement</p>
                <p className="text-white font-bold text-2xl">3.68 Million lbs</p>
                <p className="text-orange-100 text-sm">Successfully installed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="btn btn-primary px-10 py-4 text-lg min-h-[44px]"
          >
            Request Quote for Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
