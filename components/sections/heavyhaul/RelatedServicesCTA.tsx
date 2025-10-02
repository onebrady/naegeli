import { Wrench, ArrowRight } from "lucide-react";

export default function RelatedServicesCTA() {
  return (
    <section id="related-services" className="section bg-slate-100">
      <div className="container max-w-4xl">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 lg:p-12 text-white text-center shadow-xl">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Need More Than Transportation?
          </h2>

          <p className="text-lg lg:text-xl text-orange-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Naegeli also provides expert crane and rigging services, machine tool moving, and complete shop relocations.
            Let us handle your entire project from start to finish.
          </p>

          <a
            href="/machine-tool-moving-crane-rigging"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-8 py-4 rounded-md hover:bg-slate-50 transition-all hover:scale-105 shadow-lg min-h-[44px]"
          >
            Explore Crane & Rigging Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
