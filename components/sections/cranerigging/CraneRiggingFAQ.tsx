"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CraneRiggingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the heaviest equipment you can move?",
      answer:
        "Our crews have successfully moved equipment ranging from 500 lbs to over 200,000 lbs. We assess each project individually and bring the appropriate equipment and expertise.",
    },
    {
      question: "Do you provide insurance and bonding?",
      answer:
        "Yes. We carry comprehensive liability insurance, workers' compensation, and equipment coverage. Certificates of insurance are provided upon request.",
    },
    {
      question: "Can you move equipment between floors?",
      answer:
        "Yes. We have experience with multi-floor installations using cranes, hoists, and specialized rigging techniques. We assess structural capacity and access during our site survey.",
    },
    {
      question: "How much notice do you need for a project?",
      answer:
        "Project timelines vary based on complexity. Simple moves can often be scheduled within a week, while complex relocations require 2-4 weeks for proper planning. Emergency services are available.",
      cta: { text: "Request a quote", href: "#quote" },
    },
    {
      question: "Do you handle equipment disconnection and reconnection?",
      answer:
        "We coordinate with qualified electricians and technicians for utility disconnections. Our crews handle mechanical disassembly, moving, and reassembly. We can manage the entire process as your single point of contact.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We're based in Houston and primarily serve Texas, Louisiana, Arkansas, Oklahoma, and Mississippi. Contact us for projects in other regions.",
    },
    {
      question: "Do you offer storage for equipment?",
      answer:
        "Yes. We have both indoor and outdoor storage facilities available for short-term and long-term equipment storage needs.",
    },
    {
      question: "Can you handle Port of Houston deliveries?",
      answer:
        "Absolutely. We have extensive Port of Houston experience and coordinate delivery from port to final installation. The U.S. Merchants project is a great example - we handled delivery and installation of 50 injection molding machines from the port.",
    },
    {
      question: "What size equipment can your forklifts handle?",
      answer:
        "Our heavy-duty forklifts can handle equipment up to 120,000 lbs. We also use air jacks and hydraulic systems for precision positioning of even heavier loads.",
    },
    {
      question: "Do you provide transportation as well as rigging?",
      answer:
        "Yes. In addition to crane and rigging services, we offer complete heavy haul transportation with 70+ vehicles. We can handle your entire project from pickup to final installation.",
      cta: { text: "Learn more about heavy haul", href: "#related-services" },
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section bg-slate-100">
      <div className="container max-w-4xl">
        <h2 className="text-center mb-12">Crane & Rigging FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors min-h-[44px]"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 text-base lg:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                  <p>{faq.answer}</p>
                  {faq.cta && (
                    <a
                      href={faq.cta.href}
                      onClick={(e) => handleCTAClick(e, faq.cta.href)}
                      className="inline-block mt-3 text-orange-500 font-semibold hover:text-orange-700 transition-colors"
                    >
                      {faq.cta.text} →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
