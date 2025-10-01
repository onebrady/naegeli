"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeavyHaulFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the maximum weight you can transport?",
      answer:
        "We safely transport equipment weighing from 2,000 to 200,000 pounds. For loads exceeding these limits, contact us to discuss specialized solutions.",
      cta: { text: "Request a quote", href: "#quote" },
    },
    {
      question: "How quickly can you dispatch a truck?",
      answer:
        "With 70+ vehicles ready for daily dispatch, we can often accommodate same-day or next-day service depending on route and equipment availability.",
      cta: { text: "Call (713) 946-4000", href: "tel:7139464000" },
    },
    {
      question: "Do you handle permits for oversize loads?",
      answer:
        "Yes. Our logistics team coordinates all necessary permits, route surveys, and escort vehicle requirements for oversize and overweight transport. One point of contact handles everything.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We're based in Houston and primarily serve Texas, Louisiana, Arkansas, Oklahoma, and Mississippi. Contact us for transport to other regions.",
    },
    {
      question: "How do you ensure equipment safety during transport?",
      answer:
        "Our experienced drivers use proper loading techniques, appropriate securing methods, and well-maintained equipment. Every load is inspected before departure. We maintain the highest DOT safety rating.",
    },
    {
      question: "Do you provide GPS tracking?",
      answer:
        "Yes. All our vehicles are equipped with GPS navigation and communication systems for real-time tracking and updates.",
    },
    {
      question: "Can you transport equipment to/from Port of Houston?",
      answer:
        "Absolutely. We have extensive Port of Houston expertise and are TWIC certified for port access. We're familiar with Houston Ship Channel, Bayport, and all major industrial corridors.",
    },
    {
      question: "Do you also provide crane and rigging services?",
      answer:
        "Yes. In addition to heavy haul transportation, we offer complete crane, rigging, and machine tool moving services. Contact us for turnkey equipment relocation solutions.",
      cta: { text: "Learn more about crane & rigging", href: "#related-services" },
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
        <h2 className="text-center mb-12">Heavy Haul Transportation FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors min-h-[44px]"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 text-base lg:text-lg pr-4">{faq.question}</span>
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
