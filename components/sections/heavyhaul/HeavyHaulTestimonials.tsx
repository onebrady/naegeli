"use client";

import { Quote } from "lucide-react";

export default function HeavyHaulTestimonials() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonials = [
    {
      quote:
        "Naegeli has been our go-to heavy haul partner for years. Their reliability and professionalism are unmatched.",
      author: "Daniel LaLonde",
      company: "Gulf Coast Modification",
    },
    {
      quote:
        "From permit coordination to on-time delivery, Naegeli handles every detail with expertise. They're the best in the business.",
      author: "Carl Vidrine",
      company: "Cameron/Schlumberger",
    },
    {
      quote:
        "We've worked with Naegeli for decades. Their expertise in handling precision equipment and commitment to safety set them apart.",
      author: "Tad Shanks",
      company: "DMG MORI",
    },
  ];

  return (
    <section className="section bg-black text-white">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Trusted by Industry Leaders</h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with Naegeli Transportation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-white/10 hover:border-orange-500/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-orange-500 mb-4" />
              <p className="text-slate-200 text-base lg:text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-slate-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-300 mb-6">
            Also proudly serving <span className="text-orange-500 font-semibold">Mustang CAT</span> and many more
            industrial leaders across the region.
          </p>
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="btn btn-primary text-lg px-10 py-4 min-h-[44px]"
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}
