"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, CheckCircle2 } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email address required"),
  origin: z.string().min(2, "Origin location required"),
  destination: z.string().min(2, "Destination location required"),
  loadDetails: z.string().min(10, "Please provide load details (at least 10 characters)"),
  timing: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);
    setIsSuccess(true);
    setIsSubmitting(false);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 5000);
  };

  return (
    <section id="quote" className="section bg-white scroll-mt-20">
      <div className="container max-w-4xl">
        <h2 className="text-center mb-4">Request a Quote</h2>
        <p className="text-center text-slate-600 text-lg mb-10">
          Get a free quote for your heavy haul or rigging project
        </p>

        {isSuccess ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-green-900 mb-2">Thank You!</h3>
            <p className="text-green-800">
              Your quote request has been received. We'll get back to you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.name ? "border-red-600" : "border-slate-300"
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                  Company <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("company")}
                  type="text"
                  id="company"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.company ? "border-red-600" : "border-slate-300"
                  }`}
                  placeholder="Your Company Name"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.phone ? "border-red-600" : "border-slate-300"
                  }`}
                  placeholder="(713) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.email ? "border-red-600" : "border-slate-300"
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="origin" className="block text-sm font-semibold text-slate-900 mb-2">
                  Origin Location <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("origin")}
                  type="text"
                  id="origin"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.origin ? "border-red-600" : "border-slate-300"
                  }`}
                  placeholder="Houston, TX"
                />
                {errors.origin && (
                  <p className="mt-1 text-sm text-red-600">{errors.origin.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Destination Location <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("destination")}
                  type="text"
                  id="destination"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.destination ? "border-red-600" : "border-slate-300"
                  }`}
                  placeholder="Dallas, TX"
                />
                {errors.destination && (
                  <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
                )}
              </div>
            </div>

            {/* Load Details */}
            <div>
              <label htmlFor="loadDetails" className="block text-sm font-semibold text-slate-900 mb-2">
                Load Details <span className="text-red-600">*</span>
              </label>
              <textarea
                {...register("loadDetails")}
                id="loadDetails"
                rows={5}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none ${
                  errors.loadDetails ? "border-red-600" : "border-slate-300"
                }`}
                placeholder="Equipment type, dimensions (L x W x H), weight, special requirements..."
              />
              {errors.loadDetails && (
                <p className="mt-1 text-sm text-red-600">{errors.loadDetails.message}</p>
              )}
            </div>

            {/* Timing */}
            <div>
              <label htmlFor="timing" className="block text-sm font-semibold text-slate-900 mb-2">
                Preferred Timing <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                {...register("timing")}
                type="text"
                id="timing"
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="ASAP, Next week, Specific date..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Request Quote"}
              </button>
              <p className="text-center text-sm text-slate-600 mt-4">
                Quotes returned within one business day. All inquiries confidential.
              </p>
            </div>
          </form>
        )}

        {/* Alternative Contact Methods */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <a
            href="tel:7139464000"
            className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 transition-colors group"
          >
            <Phone className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Call Dispatch</div>
              <div className="text-orange-500 font-semibold">(713) 946-4000</div>
            </div>
          </a>

          <a
            href="mailto:info@heavyhaultexas.com"
            className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 transition-colors group"
          >
            <Mail className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Email Us</div>
              <div className="text-orange-500 font-semibold">info@heavyhaultexas.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
