export default function EquipmentWeMove() {
  const equipmentCategories = [
    {
      title: "Construction Equipment",
      items: [
        "Backhoes",
        "Bull dozers",
        "Excavators",
        "Graders",
        "Trenchers",
        "Scrapers",
        "Compactors",
        "Loaders (wheel & track)",
      ],
    },
    {
      title: "Cranes & Lifting Equipment",
      items: [
        "Crawler cranes",
        "Truck-mounted cranes",
        "Rough terrain cranes",
        "All-terrain cranes",
        "Tower cranes",
        "Boom trucks",
        "All capacities",
      ],
    },
    {
      title: "Forklifts & Material Handling",
      items: [
        "Warehouse forklifts",
        "Heavy-duty forklifts (5K–100K lbs)",
        "Container handlers",
        "Reach stackers",
        "Telehandlers",
        "Side loaders",
      ],
    },
    {
      title: "Industrial Machinery",
      items: [
        "CNC machines",
        "Fabricating equipment",
        "Machine tools",
        "Production equipment",
        "Processing machinery",
        "Custom/specialized loads",
      ],
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Heavy Equipment Transportation Specialists</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
          From construction sites to industrial facilities, we safely transport the equipment that builds America's infrastructure.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {equipmentCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg lg:text-xl font-display font-semibold mb-4 text-orange-600">
                {category.title}
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-slate-800 font-medium">
            <span className="font-bold text-orange-600">Need to move something not listed?</span> We handle custom and
            specialized heavy equipment transport. Contact us to discuss your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
