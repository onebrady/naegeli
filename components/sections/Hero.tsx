"use client";

import { Phone, Award, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Badges */}
        <div className="fade-in flex flex-wrap items-center justify-center gap-4 mb-8 opacity-0 translate-y-4" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold">69+ Years in Business</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold">Highest DOT Rating</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="fade-in text-4xl sm:text-5xl lg:text-[56px] font-bold mb-6 opacity-0 translate-y-4 max-w-5xl mx-auto leading-tight" style={{ animationDelay: "0ms" }}>
        <span className="text-orange-500">Move Anything </span>
          <br className="hidden sm:block" />
          2,000 to 200,000 Pounds&nbsp;
          <br className="hidden sm:block" />
          <span className="text-orange-500">Safely</span> and <span className="text-orange-500 whitespace-nowrap">On Time</span>
        </h1>

        {/* Subheadline */}
        <p className="fade-in text-lg sm:text-xl lg:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto opacity-0 translate-y-4" style={{ animationDelay: "100ms" }}>
          Houston's Heavy Haul & Rigging Experts Since 1956.
          <br />
          Serving TX, LA, AR, and OK.
        </p>

        {/* CTAs */}
        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 translate-y-4" style={{ animationDelay: "200ms" }}>
          <a href="#quote" onClick={scrollToQuote} className="btn btn-primary text-lg px-10 py-4 w-full sm:w-auto">
            Request a Quote
          </a>
          <a href="tel:7139464000" className="btn btn-secondary text-lg px-10 py-4 w-full sm:w-auto">
            <Phone className="w-5 h-5 mr-2" />
            Call (713) 946-4000
          </a>
        </div>

        {/* Tagline */}
        <p className="fade-in text-orange-500 font-semibold text-xl opacity-0" style={{ animationDelay: "300ms" }}>
          Let Us Pull Your Weight
        </p>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent" />

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
