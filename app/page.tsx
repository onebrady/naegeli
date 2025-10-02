import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import Hero from "@/components/sections/Hero";
import ServiceCards from "@/components/sections/ServiceCards";
import ProofBar from "@/components/sections/ProofBar";
import Fleet from "@/components/sections/Fleet";
import WhatWeMove from "@/components/sections/WhatWeMove";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import WhyChoose from "@/components/sections/WhyChoose";
import QuoteForm from "@/components/sections/QuoteForm";
import RecruitmentBanner from "@/components/sections/RecruitmentBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[105px] md:pt-[129px]">
        <Hero />
        <ServiceCards />
        <ProofBar />
        <Fleet />
        <WhatWeMove />
        <ServiceArea />
        <Testimonials />
        <WhyChoose />
        <QuoteForm />
        <RecruitmentBanner />
      </main>
      <Footer />
    </>
  );
}
