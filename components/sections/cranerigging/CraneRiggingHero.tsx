"use client";

import { Phone, Award, Shield, CheckCircle2, Wrench } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CraneRiggingHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-[350px] md:h-[450px] lg:h-[500px] pt-[80px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/crane-rigging-machine-tool-moving.webp"
          alt="Naegeli crane and rigging crew lifting industrial equipment with professional rigging gear Houston Texas"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        {/* Trust Badges Overlay */}
        <div className="fade-in flex flex-wrap items-center justify-center gap-3 mb-6 opacity-0 translate-y-4" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="font-semibold">209+ Years Combined Experience</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm">
            <Shield className="w-4 h-4 text-orange-500" />
            <span className="font-semibold">DOT-Certified Riggers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm">
            <Wrench className="w-4 h-4 text-orange-500" />
            <span className="font-semibold">Indoor/Outdoor Capabilities</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-orange-500" />
            <span className="font-semibold">Turnkey Service</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="fade-in text-4xl sm:text-5xl lg:text-[56px] font-bold mb-4 opacity-0 translate-y-4 max-w-4xl mx-auto leading-tight" style={{ animationDelay: "0ms" }}>
          <span className="text-orange-500">When You Need It Done Right</span>
        </h1>

        {/* Subheadline */}
        <p className="fade-in text-base sm:text-lg lg:text-xl text-slate-200 mb-8 max-w-3xl mx-auto opacity-0 translate-y-4" style={{ animationDelay: "100ms" }}>
          Expert crane, rigging & machine tool moving. 209+ years of combined crew experience. DOT-certified riggers. Complete turnkey service from lifting to setting and aligning. Serving TX, LA, AR, OK, MS.
        </p>

        {/* CTAs */}
        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-4" style={{ animationDelay: "200ms" }}>
          <a href="#quote" onClick={scrollToQuote} className="btn btn-primary text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 w-full sm:w-auto min-h-[44px]">
            Request a Free Quote
          </a>
          <a href="tel:7139464000,3" className="btn btn-secondary text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 w-full sm:w-auto min-h-[44px]">
            <Phone className="w-5 h-5 mr-2" />
            Call (713) 946-4000
          </a>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[5]" />

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in.fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
