"use client";

import { X, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <span className="font-display font-bold text-lg text-slate-900">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={onClose}
              className="block px-6 py-3 text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-slate-200 my-4" />

        {/* Contact Section */}
        <div className="px-6 py-4 space-y-4">
          {/* Phone */}
          <a
            href="tel:7139464000"
            className="flex items-center gap-3 text-slate-900 hover:text-orange-500 transition-colors"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Call Us</div>
              <div className="font-semibold">(713) 946-4000</div>
            </div>
          </a>

          {/* Quote Button */}
          <a
            href="#quote"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              const quoteSection = document.getElementById("quote");
              quoteSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold transition-colors"
          >
            Request a Quote
          </a>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 text-center text-sm text-slate-500">
          <p>Since 1956</p>
          <p className="text-orange-500 font-semibold mt-1">Let Us Pull Your Weight</p>
        </div>
      </div>
    </>
  );
}
