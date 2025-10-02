import { MapPin, CheckCircle2, Building2, Anchor, Scale, Package } from "lucide-react";
import Image from "next/image";

export default function ServiceAreaCoverage() {
  const primaryAreas = [
    "Houston Metro (all surrounding counties)",
    "Texas (statewide coverage)",
    "Louisiana (including New Orleans, Baton Rouge, Shreveport)",
    "Arkansas (Little Rock, Fort Smith)",
    "Oklahoma (Oklahoma City, Tulsa)",
    "Mississippi (Gulf Coast, Jackson)",
  ];

  const capabilities = [
    {
      icon: Anchor,
      text: "Port of Houston access and expertise (competitive advantage)",
    },
    {
      icon: Building2,
      text: "Industrial corridor familiarity (Houston Ship Channel, Bayport)",
    },
    {
      icon: MapPin,
      text: "Construction site coordination",
    },
    {
      icon: Building2,
      text: "Plant and facility access",
    },
    {
      icon: Scale,
      text: "Certified truck scale on-site",
    },
    {
      icon: Package,
      text: "Equipment storage yards available",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-12">Houston-Based, Regionally Focused</h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Map Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
              <Image
                src="/images/houston-basedx.webp"
                alt="Naegeli Transportation service area map showing coverage in TX, LA, AR, OK, MS"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Coverage Details */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-orange-500" />
                Primary Service Area
              </h3>
              <ul className="space-y-3">
                {primaryAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">Special Capabilities</h3>
              <ul className="space-y-3">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <Icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{capability.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
