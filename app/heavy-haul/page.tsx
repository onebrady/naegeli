import { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import HeavyHaulHero from "@/components/sections/heavyhaul/HeavyHaulHero";
import SocialProofBanner from "@/components/sections/heavyhaul/SocialProofBanner";
import ServiceOverview from "@/components/sections/heavyhaul/ServiceOverview";
import WhatSetsUsApart from "@/components/sections/heavyhaul/WhatSetsUsApart";
import EquipmentWeMove from "@/components/sections/heavyhaul/EquipmentWeMove";
import OurProcess from "@/components/sections/heavyhaul/OurProcess";
import ServiceAreaCoverage from "@/components/sections/heavyhaul/ServiceAreaCoverage";
import FleetShowcase from "@/components/sections/heavyhaul/FleetShowcase";
import HeavyHaulTestimonials from "@/components/sections/heavyhaul/HeavyHaulTestimonials";
import SafetyCertifications from "@/components/sections/heavyhaul/SafetyCertifications";
import HeavyHaulFAQ from "@/components/sections/heavyhaul/HeavyHaulFAQ";
import HeavyHaulQuoteForm from "@/components/sections/heavyhaul/HeavyHaulQuoteForm";
import RelatedServicesCTA from "@/components/sections/heavyhaul/RelatedServicesCTA";

export const metadata: Metadata = {
  title: "Heavy Haul Transportation Houston TX | Naegeli Since 1956",
  description:
    "Expert heavy haul transportation in Houston. 2,000-200,000 lbs. DOT certified, 70+ vehicles. Serving TX, LA, AR, OK, MS. Call (713) 946-4000 for quote.",
  keywords: [
    "Heavy haul transportation Houston",
    "Construction equipment transport Texas",
    "Oversize load transport Houston",
    "Industrial machinery movers Texas",
    "Crane transportation services",
    "Heavy equipment hauling Houston",
  ],
  openGraph: {
    title: "Heavy Haul Transportation Houston TX | Naegeli Since 1956",
    description: "Expert heavy haul transportation in Houston. 2,000-200,000 lbs. DOT certified, 70+ vehicles.",
    type: "website",
  },
};

export default function HeavyHaulPage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeavyHaulHero />
        <SocialProofBanner />
        <ServiceOverview />
        <WhatSetsUsApart />
        <EquipmentWeMove />
        <OurProcess />
        <ServiceAreaCoverage />
        <FleetShowcase />
        <HeavyHaulTestimonials />
        <SafetyCertifications />
        <HeavyHaulFAQ />
        <HeavyHaulQuoteForm />
        <RelatedServicesCTA />
      </main>
      <Footer />
    </>
  );
}
