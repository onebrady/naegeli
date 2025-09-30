import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Contact */}
          <div>
            <h4 className="text-orange-500 font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  7201 Easthaven Blvd.
                  <br />
                  Houston, Texas 77017
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <a href="tel:7139464000" className="hover:text-orange-500 transition-colors">
                    (713) 946-4000
                  </a>
                  <div className="text-sm text-slate-400">Fax: (713) 946-4375</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:8004514217" className="hover:text-orange-500 transition-colors">
                  Toll Free: (800) 451-4217
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-500 font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Heavy Haul Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Machine Tool Moving
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Rigging Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Equipment Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-orange-500 font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-orange-500 font-semibold text-lg mb-4">Service Area</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Houston, TX</li>
              <li>Texas (Statewide)</li>
              <li>Louisiana</li>
              <li>Arkansas</li>
              <li>Oklahoma</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Naegeli Transportation, Inc. All rights reserved.
            <span className="mx-2">|</span>
            <span className="text-orange-500 font-semibold">Let Us Pull Your Weight</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
