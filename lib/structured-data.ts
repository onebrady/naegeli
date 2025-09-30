export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Naegeli Transportation, Inc.",
  image: "https://heavyhaultexas.com/logo.png",
  "@id": "https://heavyhaultexas.com",
  url: "https://heavyhaultexas.com",
  telephone: "+17139464000",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7201 Easthaven Blvd.",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77017",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7024,
    longitude: -95.1853,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.facebook.com/NaegeliTransportation",
    "https://www.linkedin.com/company/naegeli-transportation-inc",
  ],
  areaServed: [
    {
      "@type": "State",
      name: "Texas",
    },
    {
      "@type": "State",
      name: "Louisiana",
    },
    {
      "@type": "State",
      name: "Arkansas",
    },
    {
      "@type": "State",
      name: "Oklahoma",
    },
  ],
  description:
    "Expert heavy equipment transport (2,000–200,000 lbs) and crane/rigging services. Family-owned since 1956 with 70+ vehicles and DOT-certified drivers.",
  foundingDate: "1956",
  slogan: "Let Us Pull Your Weight",
};

export const serviceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Heavy Haul Transportation",
    provider: {
      "@type": "MovingCompany",
      name: "Naegeli Transportation, Inc.",
    },
    areaServed: ["Texas", "Louisiana", "Arkansas", "Oklahoma"],
    description:
      "Specialized transport for oversized, overweight, and over-dimensional equipment from 2,000 to 200,000 lbs.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Crane and Rigging Services",
    provider: {
      "@type": "MovingCompany",
      name: "Naegeli Transportation, Inc.",
    },
    areaServed: ["Texas", "Louisiana", "Arkansas", "Oklahoma"],
    description:
      "Complete turnkey service for machine tool installation, shop moves, and industrial equipment relocation with DOT-certified riggers.",
  },
];
