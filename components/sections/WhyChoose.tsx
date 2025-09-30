import { Award, Shield, CheckCircle2, Wrench } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: Award,
      title: "69+ Years Experience",
      description: "Family-owned and operated since 1956",
    },
    {
      icon: Shield,
      title: "Highest Safety Rating",
      description: "Top DOT rating with safety-conscious drivers",
    },
    {
      icon: CheckCircle2,
      title: "Full Certification",
      description: "TWIC and Hazmat certified for all projects",
    },
    {
      icon: Wrench,
      title: "Turnkey Service",
      description: "Complete rigging, moving, and installation",
    },
  ];

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <h2 className="text-center mb-4">Why Choose Naegeli</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
          Trusted expertise, modern fleet, and commitment to safety that sets us apart
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <Icon className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">State-of-the-art</span> communication
              systems
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">Rapid dispatch</span> and
              scheduling
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">Family-owned</span> accountability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
