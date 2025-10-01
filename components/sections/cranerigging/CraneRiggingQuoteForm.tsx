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
  serviceType: z.string().min(1, "Service type is required"),
  timeline: z.string().min(1, "Preferred timeline is required"),
  equipmentDescription: z.string().min(10, "Please describe the equipment"),
  origin: z.string().optional(),
  destination: z.string().optional(),
  projectDetails: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function CraneRiggingQuoteForm() {
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
        <h2 className="text-center mb-4">Request Your Crane & Rigging Quote</h2>
        <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
          Tell us about your project and our experienced team will provide a detailed proposal.{" "}
          <span className="font-semibold text-orange-600">We respond to all inquiries within one business day.</span>
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Form - 2/3 width */}
          <div className="lg:col-span-2">
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
                      placeholder="ABC Manufacturing"
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

                {/* Service Type & Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-900 mb-2">
                      Service Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      {...register("serviceType")}
                      id="serviceType"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                        errors.serviceType ? "border-red-600" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select service type</option>
                      <option value="machine-tool-moving">Machine Tool Moving</option>
                      <option value="crane-rigging">Crane & Rigging</option>
                      <option value="shop-relocation">Shop Relocation</option>
                      <option value="equipment-installation">Equipment Installation</option>
                      <option value="millwright-services">Millwright Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.serviceType && (
                      <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-2">
                      Preferred Timeline <span className="text-red-600">*</span>
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
                      <option value="2-4-weeks">2-4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="planning-phase">Planning phase</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>}
                  </div>
                </div>

                {/* Equipment Description */}
                <div>
                  <label htmlFor="equipmentDescription" className="block text-sm font-semibold text-slate-900 mb-2">
                    Equipment Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    {...register("equipmentDescription")}
                    id="equipmentDescription"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none ${
                      errors.equipmentDescription ? "border-red-600" : "border-slate-300"
                    }`}
                    placeholder="Describe the equipment - type, weight, dimensions. Example: CNC mill, 15,000 lbs, 12'L x 8'W x 10'H"
                  />
                  {errors.equipmentDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.equipmentDescription.message}</p>
                  )}
                </div>

                {/* Origin Location */}
                <div>
                  <label htmlFor="origin" className="block text-sm font-semibold text-slate-900 mb-2">
                    Origin Location <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    {...register("origin")}
                    type="text"
                    id="origin"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Houston, TX 77017 or full address"
                  />
                </div>

                {/* Destination Location */}
                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-slate-900 mb-2">
                    Destination Location <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    {...register("destination")}
                    type="text"
                    id="destination"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Baton Rouge, LA or full address"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Details & Special Requirements <span className="text-slate-500">(Optional)</span>
                  </label>
                  <textarea
                    {...register("projectDetails")}
                    id="projectDetails"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Access limitations, floor loading restrictions, multi-floor installation, rigging requirements, utility coordination needs, etc."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                  </button>
                  <p className="text-center text-sm text-slate-600 mt-4">
                    All project details are confidential. Your information will not be shared with third parties.
                  </p>
                </div>
              </form>
            )}

            {/* Alternative Contact Methods */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-center text-slate-700 font-semibold mb-4">Prefer to speak with a rigging specialist?</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:7139464000,3"
                  className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg p-4 transition-colors group min-h-[44px]"
                >
                  <Phone className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 text-sm">Call Direct (ext. 3)</div>
                    <div className="text-orange-500 font-semibold">(713) 946-4000</div>
                  </div>
                </a>
                <a
                  href="mailto:rigging@naegeli.com"
                  className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg p-4 transition-colors group min-h-[44px]"
                >
                  <Mail className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 text-sm">Email Us</div>
                    <div className="text-orange-500 font-semibold text-sm">rigging@naegeli.com</div>
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
                  href="tel:7139464000,3"
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (713) 946-4000 ext. 3
                </a>
                <a
                  href="tel:8004514217,3"
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (800) 451-4217 ext. 3
                </a>
                <a
                  href="mailto:rigging@naegeli.com"
                  className="flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  rigging@naegeli.com
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
                  Average quote response: <span className="font-semibold text-orange-600">Within 1 business day</span>
                </p>
                <p className="text-sm text-slate-700">Complex projects: Detailed site survey scheduled</p>
              </div>

              <div className="border-t border-slate-300 pt-4">
                <h4 className="font-semibold text-slate-900 mb-3">Why Choose Naegeli?</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>209+ years combined crew experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>DOT-certified professional riggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>120,000 lb forklift capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Air jacks & hydraulic systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Complete turnkey service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Indoor/outdoor capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Storage facilities available</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-300">
                <p className="text-xs text-slate-600 font-semibold mb-2">Recent Project:</p>
                <p className="text-sm text-slate-700">U.S. Merchants: 50 machines, 3.68M lbs installed</p>
              </div>

              <div className="mt-6">
                <a
                  href="tel:7139464000,3"
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
