import { Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RelatedServicesCTA() {
  return (
    <section id="related-services" className="section bg-slate-100">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 text-center text-white shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 rounded-full p-4">
              <Truck className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Need Transportation Too?</h2>

          <p className="text-slate-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Naegeli also provides expert heavy haul transportation services with 70+ vehicles ready for dispatch. From construction equipment to industrial machinery (2,000-200,000 lbs), we handle every aspect of moving your assets safely across TX, LA, AR, OK, MS.
          </p>

          <Link
            href="/heavy-haul"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-md transition-all hover:shadow-lg min-h-[44px]"
          >
            Explore Heavy Haul Transportation
            <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-slate-300 text-sm">
              <span className="font-semibold text-orange-400">Turnkey Solutions:</span> We can handle your entire project from rigging to transportation to final installation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
