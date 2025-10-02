"use client";

import { Phone, Award, Shield, Truck, CheckCircle2, MapPin, Compass } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeavyHaulHero() {
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
      className="relative min-h-[640px] lg:min-h-[760px] pt-[76px] flex items-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/heavy-haul-transportation.webp"
            alt="Naegeli Transportation heavy haul lowboy trailer transporting industrial equipment across Texas"
            fill
            priority
            className="object-cover object-[70%_center]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/75 to-transparent" />
        </div>

        <div className="absolute right-0 top-10 bottom-10 hidden lg:block w-[55%]">
          <div className="relative h-full w-full overflow-hidden rounded-l-[56px] border border-white/10 bg-slate-950/60 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)]">
            <Image
              src="/images/heavy-haul-transportation.webp"
              alt="Naegeli Transportation heavy haul lowboy trailer transporting industrial equipment across Texas"
              fill
              priority
              className="object-cover object-center"
              sizes="55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/5 via-slate-950/40 to-slate-950/95" />
            <div className="absolute top-10 right-10 h-20 w-20 rounded-full border border-white/20" />
            <div className="absolute bottom-12 right-1/2 h-28 w-28 -translate-x-1/2 transform rounded-full border border-white/10" />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, rgba(255,255,255,0) 55%)" }} />
          </div>
        </div>

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/25 blur-[140px]" />
        <div className="absolute right-1/3 -bottom-20 h-72 w-72 rounded-full bg-sky-400/10 blur-[160px]" />
        <div className="absolute inset-y-12 right-[54%] hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-16 lg:py-24">
        <div className="max-w-3xl space-y-10">
          <div
            className="fade-in inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-white/80 backdrop-blur"
            style={{ animationDelay: "0ms" }}
          >
            Heavy Haul Transport
          </div>

          <div className="space-y-6">
            <h1 className="fade-in text-white leading-tight" style={{ animationDelay: "100ms" }}>
              <span className="block text-[44px] sm:text-5xl lg:text-6xl font-semibold">
                Let Us Pull
              </span>
              <span className="block text-[48px] sm:text-6xl lg:text-7xl font-black text-orange-500">
                Your Weight
              </span>
            </h1>

            <p
              className="fade-in text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-2xl leading-relaxed"
              style={{ animationDelay: "180ms" }}
            >
              Houston's heavy haul experts since 1956. Moving 2,000 to 200,000 lbs across TX, LA, AR, OK, and MS with precision, permits, and secure escorts included when you need them.
            </p>
          </div>

          <div className="fade-in flex flex-wrap gap-4" style={{ animationDelay: "260ms" }}>
            <a
              href="#quote"
              onClick={scrollToQuote}
              className="w-full sm:flex-none sm:min-w-[220px] lg:min-w-[240px] bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl min-h-[56px] flex items-center justify-center shadow-[0_20px_45px_-15px_rgba(249,115,22,0.65)] transition-all duration-300 hover:translate-y-[-2px]"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:7139464000"
              className="w-full sm:flex-none sm:min-w-[220px] lg:min-w-[240px] border border-white/30 bg-white/10 hover:bg-white/15 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl min-h-[56px] flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur"
            >
              <Phone className="w-5 h-5" />
              Call (713) 946-4000
            </a>
          </div>

          <div className="fade-in grid grid-cols-2 gap-4 lg:grid-cols-4" style={{ animationDelay: "340ms" }}>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-white/90 backdrop-blur">
              <Award className="mx-auto mb-3 h-6 w-6 text-orange-400" />
              <p className="text-3xl font-bold text-white">69+</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Years</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-white/90 backdrop-blur">
              <Truck className="mx-auto mb-3 h-6 w-6 text-orange-400" />
              <p className="text-3xl font-bold text-white">70+</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Vehicles</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-white/90 backdrop-blur">
              <Shield className="mx-auto mb-3 h-6 w-6 text-orange-400" />
              <p className="text-2xl font-bold text-white">DOT</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Top Rating</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-white/90 backdrop-blur">
              <CheckCircle2 className="mx-auto mb-3 h-6 w-6 text-orange-400" />
              <p className="text-2xl font-bold text-white">TWIC</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">& Hazmat</p>
            </div>
          </div>

          <div
            className="fade-in flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70"
            style={{ animationDelay: "420ms" }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-400" />
              Oversized routing & escorts handled in-house
            </span>
            <span className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-orange-400" />
              24/7 dispatch across Gulf Coast and Southwest corridors
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(16px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in.fade-in {
          animation: fadeInUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
