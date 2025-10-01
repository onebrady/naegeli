import { FileText, Map, Package, Truck } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Request Quote",
      description:
        "Provide equipment details, origin, destination, and timing. We respond within 4 business hours with competitive pricing.",
    },
    {
      number: "2",
      icon: Map,
      title: "Route Planning",
      description:
        "Our logistics team plans the optimal route, secures necessary permits, and coordinates escort vehicles if required.",
    },
    {
      number: "3",
      icon: Package,
      title: "Safe Loading",
      description:
        "Professional drivers and riggers ensure proper loading, securing, and weight distribution using appropriate equipment.",
    },
    {
      number: "4",
      icon: Truck,
      title: "On-Time Delivery",
      description:
        "GPS tracking keeps you informed. Equipment arrives safely at your destination, unloaded with care.",
    },
  ];

  return (
    <section className="section bg-charcoal text-white">
      <div className="container">
        <h2 className="text-center mb-12 text-white">How Heavy Haul Transport Works</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-orange-500/30" />
                )}

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-charcoal font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
