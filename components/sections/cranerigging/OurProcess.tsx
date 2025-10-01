import { ClipboardCheck, Users, Wrench, Truck, CheckCircle2 } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "1",
      title: "Site Assessment & Planning",
      description:
        "Our team surveys your facility, reviews equipment specifications, and develops a comprehensive move plan including rigging requirements and timeline.",
    },
    {
      icon: Users,
      number: "2",
      title: "Pre-Move Coordination",
      description:
        "We coordinate all aspects including equipment shutdown, utility disconnections, access requirements, and safety protocols with your team.",
    },
    {
      icon: Wrench,
      number: "3",
      title: "Safe Disassembly & Rigging",
      description:
        "DOT-certified riggers carefully disassemble (if needed), rig, and lift equipment using appropriate specialized gear and proper techniques.",
    },
    {
      icon: Truck,
      number: "4",
      title: "Transportation",
      description:
        "Equipment is transported using our specialized trailers and secured properly for safe transit to the destination facility.",
    },
    {
      icon: CheckCircle2,
      number: "5",
      title: "Installation & Alignment",
      description:
        "We set, level, and align equipment to manufacturer specifications. Grouting, anchor bolts, and final positioning completed to your requirements.",
    },
  ];

  return (
    <section className="section bg-[#1a1a1a] text-white">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Our Turnkey Approach</h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-3xl mx-auto">
          From initial planning to final installation, we manage every phase of your equipment relocation project
        </p>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-orange-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>
          </div>

          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon & Number */}
                  <div className="relative mb-6">
                    <div className="bg-orange-500 rounded-full w-24 h-24 mx-auto flex items-center justify-center border-4 border-[#1a1a1a] relative z-10">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-orange-500 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center border-2 border-orange-500 z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center relative">
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-2 -right-2 bg-white text-orange-500 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-orange-500">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <p className="text-slate-200 text-lg">
            <span className="font-semibold text-orange-400">Additional Services:</span> Post-installation support and documentation provided for every project.
          </p>
        </div>
      </div>
    </section>
  );
}
