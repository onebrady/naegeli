import { Award, Truck, Users, Star, Shield } from "lucide-react";

export default function ProofBar() {
  const stats = [
    {
      icon: Award,
      number: "69+",
      label: "Years in Business",
    },
    {
      icon: Truck,
      number: "70+",
      label: "Vehicles",
    },
    {
      icon: Users,
      number: "65+",
      label: "DOT-Certified Drivers",
    },
    {
      icon: Star,
      number: "★★★★★",
      label: "Highest US DOT Rating",
    },
    {
      icon: Shield,
      number: "Certified",
      label: "TWIC & Hazmat",
    },
  ];

  return (
    <section className="bg-charcoal text-white py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-slate-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
