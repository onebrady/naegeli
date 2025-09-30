import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RecruitmentBanner() {
  return (
    <section className="bg-slate-200 py-12">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              We're Hiring CDL Drivers & Riggers
            </h3>
            <p className="text-slate-600">Join our team of experienced professionals</p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-md font-semibold transition-colors whitespace-nowrap"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
