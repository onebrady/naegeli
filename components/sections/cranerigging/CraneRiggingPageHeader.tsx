import Image from "next/image";
import { ArrowRight, Award, Shield } from "lucide-react";

export default function CraneRiggingPageHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white lg:max-h-[560px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_600px] xl:grid-cols-[minmax(0,1fr)_680px] lg:items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-white/80 backdrop-blur">
              Crane & Rigging
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Expert Crane, Rigging & Machine Tool Moving
              </h1>
              <p className="text-base text-slate-200/90 sm:text-lg">
                Complete turnkey service from lifting to setting and aligning. Our DOT-certified riggers bring 209+ years of combined experience to every job across TX, LA, AR, OK, and MS.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-200/80">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-orange-400" />
                209+ Years Combined Experience
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-orange-400" />
                DOT-Certified Riggers
              </span>
            </div>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(249,115,22,0.65)] transition hover:translate-y-[-1px] hover:bg-orange-600"
            >
              Request a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative hidden lg:block lg:-mr-24 xl:-mr-32">
            <div className="aspect-[1184/693] w-full max-w-[680px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] shadow-[0_40px_80px_-50px_rgba(15,23,42,1)]">
              <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-slate-950/40">
                <Image
                  src="/images/crane-rigging-machine-tool-moving.webp"
                  alt="Naegeli crane and rigging crew lifting industrial equipment with professional rigging gear Houston Texas"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 600px, 0px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                <div className="absolute -top-10 right-6 h-24 w-24 rounded-full border border-white/10 opacity-50" />
                <div className="absolute bottom-6 left-1/2 h-20 w-20 -translate-x-1/2 transform rounded-full border border-white/10 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
