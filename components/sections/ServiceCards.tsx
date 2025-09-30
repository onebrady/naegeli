import { Truck, Wrench, ArrowRight } from "lucide-react";

export default function ServiceCards() {
  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-4">Our Core Services</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
          Specialized heavy haul transportation and expert rigging services for industrial equipment
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Heavy Haul Transportation */}
          <div className="card group border-l-4 border-l-orange-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <Truck className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl lg:text-3xl">Heavy Haul Transportation</h3>
            </div>

            <ul className="space-y-3 mb-6 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Construction equipment (excavators, dozers, graders, loaders)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Industrial machinery and machine tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Cranes (crawler, truck, rough terrain—all types and sizes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Forklifts (5,000–100,000 lbs)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span className="font-semibold">Weights: 2,000–200,000 lbs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Fleet: lowboys, beam/rail trailers, tilt beds, multi-axle power units</span>
              </li>
            </ul>

            <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-700 transition-colors group/link">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Crane & Rigging */}
          <div className="card group border-l-4 border-l-orange-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <Wrench className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl lg:text-3xl">Crane & Rigging / Machine Tool Moving</h3>
            </div>

            <ul className="space-y-3 mb-6 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span className="font-semibold">Complete turnkey service: lifting, relocating, setting, and aligning equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>DOT-certified riggers with indoor/outdoor lift experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Shop moves and plant installations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Equipment inspected and maintained</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span>Specialized rigging gear and crane services</span>
              </li>
            </ul>

            <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-700 transition-colors group/link">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
