import { Shield, ClipboardCheck, FileCheck } from "lucide-react";

export default function SafetyCertifications() {
  const certifications = [
    {
      icon: Shield,
      title: "DOT Certification",
      items: [
        "DOT-certified rigger crews",
        "Comprehensive training programs",
        "Regular safety audits",
        "OSHA compliance",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Equipment Standards",
      items: [
        "Inspected and maintained equipment",
        "Load-tested rigging gear",
        "Certified lifting equipment",
        "Documentation and records",
      ],
    },
    {
      icon: FileCheck,
      title: "Insurance & Bonding",
      items: [
        "Comprehensive liability coverage",
        "Workers' compensation",
        "Equipment coverage",
        "Bonded and compliant",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-12">Safety, Compliance & Professional Standards</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="bg-orange-500 rounded-lg p-4 mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cert.title}</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
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
