"use client";

import { Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "When it comes to moving large shop equipment, Naegeli is the only choice anyone should make to ensure it is done properly, efficiently, and safely. We relied on Naegeli for our combined shop move into a new facility moving over 1,000 tons of equipment. They performed stupendously with absolutely no issues!",
      author: "Daniel LaLonde",
      title: "Manufacturing Engineer",
      company: "Gulf Coast Modification",
    },
    {
      quote:
        "Naegeli Transportation has been our go-to partner for heavy haul needs for years. Their professionalism, attention to detail, and commitment to safety are unmatched in the industry.",
      author: "Carl Vidrine",
      title: "Operations Manager",
      company: "Industrial Services",
    },
    {
      quote:
        "We've worked with many heavy haul companies over the years, but Naegeli stands out for their reliability and communication. They understand the value of our equipment and treat every move with the utmost care.",
      author: "Equipment Dealer",
      title: "Senior Buyer",
      company: "Major Equipment Distributor",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-black text-white">
      <div className="container">
        <h2 className="text-center mb-12">What Our Clients Say</h2>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border-l-4 border-l-orange-500 rounded-lg p-8 lg:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-orange-500 mb-6" />

            <blockquote className="text-lg lg:text-xl text-slate-200 italic leading-relaxed mb-8">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-orange-500 text-lg">
                  {currentTestimonial.author}
                </div>
                <div className="text-slate-400">
                  {currentTestimonial.title} — {currentTestimonial.company}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-orange-500 w-8" : "bg-slate-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold mb-10 text-slate-300">
            We Come Highly Recommended
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {["SCHLUMBERGER", "BIGGE CRANE", "TEREX", "BECHTEL", "MANITOWOC", "KOBELCO"].map(
              (company, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-6 flex items-center justify-center text-center font-bold text-slate-400 hover:text-orange-500 hover:bg-slate-700 transition-colors min-h-[100px]"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
