import { Shield, Award, FileCheck } from "lucide-react";

export default function SafetyCertifications() {
  const sections = [
    {
      icon: Shield,
      title: "DOT Excellence",
      items: [
        "Highest US DOT safety rating",
        "Regular equipment inspections",
        "Driver qualification program",
        "Comprehensive maintenance logs",
        "Safety-first culture",
      ],
    },
    {
      icon: Award,
      title: "Certifications & Compliance",
      items: [
        "TWIC (Transportation Worker Identification Credential)",
        "Hazmat certified",
        "Port of Houston access (competitive advantage)",
        "Permitted transport expertise",
        "Oversize/overweight load specialists",
      ],
    },
    {
      icon: FileCheck,
      title: "Insurance & Bonding",
      items: [
        "Fully insured fleet",
        "Comprehensive liability coverage",
        "Cargo insurance",
        "Bonded and compliant",
        "Certificates available upon request",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-12">Safety, Compliance, and Certification</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-lg p-6 lg:p-8 border border-slate-200">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-slate-700">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm lg:text-base">
                      <span className="text-orange-500 font-bold mt-1 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
