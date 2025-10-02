import { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import CraneRiggingPageHeader from "@/components/sections/cranerigging/CraneRiggingPageHeader";
import SocialProofBanner from "@/components/sections/cranerigging/SocialProofBanner";
import ServiceOverview from "@/components/sections/cranerigging/ServiceOverview";
import WhatSetsUsApart from "@/components/sections/cranerigging/WhatSetsUsApart";
import USMerchantsCaseStudy from "@/components/sections/cranerigging/USMerchantsCaseStudy";
import ServicesWeProvide from "@/components/sections/cranerigging/ServicesWeProvide";
import EquipmentWeMove from "@/components/sections/cranerigging/EquipmentWeMove";
import OurProcess from "@/components/sections/cranerigging/OurProcess";
import IndustriesWeServe from "@/components/sections/cranerigging/IndustriesWeServe";
import FleetShowcase from "@/components/sections/cranerigging/FleetShowcase";
import CraneRiggingTestimonials from "@/components/sections/cranerigging/CraneRiggingTestimonials";
import SafetyCertifications from "@/components/sections/cranerigging/SafetyCertifications";
import CraneRiggingFAQ from "@/components/sections/cranerigging/CraneRiggingFAQ";
import CraneRiggingQuoteForm from "@/components/sections/cranerigging/CraneRiggingQuoteForm";
import RelatedServicesCTA from "@/components/sections/cranerigging/RelatedServicesCTA";

export const metadata: Metadata = {
  title: "Machine Tool Moving Houston | Crane & Rigging | Naegeli Since 1956",
  description:
    "Expert machine tool moving, crane & rigging services in Houston. 209+ years combined experience. DOT-certified riggers. Complete turnkey installation. Call (713) 946-4000.",
  keywords: [
    "Machine tool moving Houston",
    "CNC machine relocation Texas",
    "Shop relocation services Houston",
    "Crane and rigging services Houston",
    "Industrial equipment installation Houston",
    "Millwright services Houston",
    "Equipment rigging Houston TX",
  ],
  openGraph: {
    title: "Machine Tool Moving Houston | Crane & Rigging | Naegeli Since 1956",
    description: "Expert machine tool moving, crane & rigging services in Houston. 209+ years combined experience. DOT-certified riggers.",
    type: "website",
  },
};

export default function CraneRiggingPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[105px] md:pt-[129px]">
        <CraneRiggingPageHeader />
        <SocialProofBanner />
        <ServiceOverview />
        <WhatSetsUsApart />
        <USMerchantsCaseStudy />
        <ServicesWeProvide />
        <EquipmentWeMove />
        <OurProcess />
        <IndustriesWeServe />
        <FleetShowcase />
        <CraneRiggingTestimonials />
        <SafetyCertifications />
        <CraneRiggingFAQ />
        <CraneRiggingQuoteForm />
        <RelatedServicesCTA />
      </main>
      <Footer />
    </>
  );
}
