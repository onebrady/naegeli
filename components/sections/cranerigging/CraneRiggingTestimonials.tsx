"use client";

import { Quote } from "lucide-react";

export default function CraneRiggingTestimonials() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonials = [
    {
      quote:
        "Moving over 1,000 tons of equipment is no small task, but Naegeli handled it professionally with not a single damaged item. Excellent experience.",
      author: "Daniel LaLonde",
      company: "Gulf Coast Modification",
      role: "",
    },
    {
      quote:
        "When we have machinery questions, we rely on Carl at Cameron who gives us the answers we need. Naegeli makes machine moving safe and easy.",
      author: "Carl Vidrine",
      company: "Cameron (Schlumberger)",
      role: "",
    },
    {
      quote:
        "DMG MORI has trusted Naegeli for years. They're the only company I use to deliver equipment to my customers. Always handled professionally and respectfully.",
      author: "Tad Shanks",
      company: "DMG MORI",
      role: "",
    },
  ];

  return (
    <section className="section bg-[#0a0a0a] text-white">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Trusted by Industry Leaders</h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-3xl mx-auto">
          Real feedback from companies who rely on our expertise for their most critical equipment moves
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-orange-500/50 transition-all"
            >
              <Quote className="w-10 h-10 text-orange-500 mb-4" />
              <p className="text-slate-200 text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-orange-400 text-sm font-semibold">{testimonial.company}</p>
                {testimonial.role && (
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-300 mb-6 text-lg">
            Join the industry leaders who trust Naegeli for their equipment relocation needs
          </p>
          <a
            href="#quote"
            onClick={scrollToQuote}
            className="btn btn-primary px-10 py-4 text-lg min-h-[44px]"
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}
