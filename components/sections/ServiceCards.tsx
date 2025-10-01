import { Truck, Wrench, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServiceCards() {
  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-4">Our Core Services</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
          Specialized heavy haul transportation and expert rigging services for industrial equipment
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Heavy Haul Transportation */}
          <div className="card group border-l-4 border-l-orange-500 !p-0 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-64 bg-slate-200 overflow-hidden">
              <Image
                src="/images/heavy-haul-transportation.webp"
                alt="Heavy haul transportation equipment including lowboys and trailers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl mb-4">Heavy Haul Transportation</h3>

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

              <a
                href="/heavy-haul"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-700 transition-colors group/link"
                aria-label="Learn more about Heavy Haul Transportation services"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Crane & Rigging */}
          <div className="card group border-l-4 border-l-orange-500 !p-0 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-64 bg-slate-200 overflow-hidden">
              <Image
                src="/images/crane-rigging-machine-tool-moving.webp"
                alt="Crane and rigging services for industrial equipment installation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <Wrench className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl mb-4">Crane & Rigging / Machine Tool Moving</h3>

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

              <a
                href="/machine-tool-moving-crane-rigging"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-700 transition-colors group/link"
                aria-label="Learn more about Crane and Rigging services"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
