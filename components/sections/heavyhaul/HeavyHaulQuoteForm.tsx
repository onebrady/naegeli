"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, CheckCircle2, Clock, MapPin } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email address required"),
  equipmentType: z.string().min(1, "Equipment type is required"),
  equipmentWeight: z.string().min(1, "Equipment weight is required"),
  origin: z.string().min(2, "Origin location required"),
  destination: z.string().min(2, "Destination location required"),
  timeline: z.string().min(1, "Timeline is required"),
  additionalDetails: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function HeavyHaulQuoteForm() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSuccess(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 5000);
  };

  return (
    <section id="quote" className="section bg-white scroll-mt-20">
      <div className="container">
        <h2 className="text-center mb-4">Request Your Heavy Haul Transportation Quote</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
          Get competitive pricing and expert logistics support.{" "}
          <span className="font-semibold text-orange-600">We respond to all inquiries within 4 business hours.</span>
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Form - 2/3 width */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-900 mb-2">Thank You!</h3>
                <p className="text-green-800">
                  Your quote request has been received. We'll get back to you within 4 business hours.
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
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
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
                      placeholder="ABC Construction"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
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
                      placeholder="(713) 555-1234"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
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
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Equipment Type & Weight */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="equipmentType" className="block text-sm font-semibold text-slate-900 mb-2">
                      Equipment Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      {...register("equipmentType")}
                      id="equipmentType"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                        errors.equipmentType ? "border-red-600" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select equipment type</option>
                      <option value="excavator">Excavator</option>
                      <option value="dozer">Dozer</option>
                      <option value="crane">Crane</option>
                      <option value="forklift">Forklift</option>
                      <option value="industrial-machinery">Industrial Machinery</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.equipmentType && (
                      <p className="mt-1 text-sm text-red-600">{errors.equipmentType.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="equipmentWeight" className="block text-sm font-semibold text-slate-900 mb-2">
                      Equipment Weight <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register("equipmentWeight")}
                      type="text"
                      id="equipmentWeight"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                        errors.equipmentWeight ? "border-red-600" : "border-slate-300"
                      }`}
                      placeholder="45000 lbs"
                    />
                    {errors.equipmentWeight && (
                      <p className="mt-1 text-sm text-red-600">{errors.equipmentWeight.message}</p>
                    )}
                  </div>
                </div>

                {/* Origin & Destination */}
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
                    placeholder="Houston, TX 77017 or full address"
                  />
                  {errors.origin && <p className="mt-1 text-sm text-red-600">{errors.origin.message}</p>}
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-slate-900 mb-2">
                    Destination Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("destination")}
                    type="text"
                    id="destination"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                      errors.destination ? "border-red-600" : "border-slate-300"
                    }`}
                    placeholder="Baton Rouge, LA or full address"
                  />
                  {errors.destination && <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>}
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-2">
                    Timeline <span className="text-red-600">*</span>
                  </label>
                  <select
                    {...register("timeline")}
                    id="timeline"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                      errors.timeline ? "border-red-600" : "border-slate-300"
                    }`}
                  >
                    <option value="">Select timeline</option>
                    <option value="within-1-week">Within 1 week</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="2-4-weeks">2-4 weeks</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="planning-ahead">Planning ahead</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>}
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="additionalDetails" className="block text-sm font-semibold text-slate-900 mb-2">
                    Additional Details <span className="text-slate-500">(Optional)</span>
                  </label>
                  <textarea
                    {...register("additionalDetails")}
                    id="additionalDetails"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Equipment dimensions (L x W x H), special handling needs, access restrictions, loading/unloading requirements, etc."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                  >
                    {isSubmitting ? "Submitting..." : "Request Quote"}
                  </button>
                  <p className="text-center text-sm text-slate-600 mt-4">
                    All inquiries are confidential. Your information will not be shared with third parties.
                  </p>
                </div>
              </form>
            )}

            {/* Alternative Contact Methods */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-center text-slate-700 font-semibold mb-4">Prefer to speak with someone directly?</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:7139464000"
                  className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg p-4 transition-colors group min-h-[44px]"
                >
                  <Phone className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 text-sm">Call Dispatch</div>
                    <div className="text-orange-500 font-semibold">(713) 946-4000</div>
                  </div>
                </a>
                <a
                  href="mailto:dispatch@naegeli.com"
                  className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg p-4 transition-colors group min-h-[44px]"
                >
                  <Mail className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 text-sm">Email Us</div>
                    <div className="text-orange-500 font-semibold text-sm">dispatch@naegeli.com</div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-4 text-sm text-slate-600">
                <MapPin className="w-4 h-4 inline-block mr-1" />
                7201 Easthaven Blvd, Houston, TX 77017
              </div>
            </div>
          </div>

          {/* Trust Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 sticky top-24">
              <h3 className="text-xl font-display font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:7139464000"
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (713) 946-4000
                </a>
                <a
                  href="tel:8004514217"
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (800) 451-4217
                </a>
                <a
                  href="mailto:dispatch@naegeli.com"
                  className="flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  dispatch@naegeli.com
                </a>
                <div className="flex items-start gap-2 text-slate-700 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>7201 Easthaven Blvd, Houston, TX 77017</span>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-4 mb-6">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Hours of Operation
                </h4>
                <p className="text-sm text-slate-700 mb-1">Monday-Friday: 7:00 AM - 6:00 PM CST</p>
                <p className="text-sm text-slate-700">Emergency/After Hours: Available</p>
              </div>

              <div className="border-t border-slate-300 pt-4 mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">Response Time</h4>
                <p className="text-sm text-slate-700 mb-1">
                  Average quote response: <span className="font-semibold text-orange-600">4 business hours</span>
                </p>
                <p className="text-sm text-slate-700">Rush requests: Call for immediate assistance</p>
              </div>

              <div className="border-t border-slate-300 pt-4">
                <h4 className="font-semibold text-slate-900 mb-3">Why Choose Naegeli?</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>69+ years experience (since 1956)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>70+ vehicle fleet ready daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>65+ DOT certified drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>TWIC & Hazmat certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Port of Houston access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Family-owned & operated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Highest DOT safety rating</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="tel:7139464000"
                  className="block w-full btn btn-primary text-center py-3 min-h-[44px]"
                >
                  Call Now: (713) 946-4000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
