"use client";

import { Phone, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Heavy Haul", href: "/heavy-haul" },
  { label: "Machine Moving", href: "/machine-tool-moving-crane-rigging" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Employment", href: "#" },
  { label: "News", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Tier 1: Utility Bar (Hidden on mobile) */}
        <div className="hidden md:block bg-charcoal text-white">
          <div className="container">
            <div className="flex items-center justify-between py-2 text-sm">
              {/* Left: Trust indicators */}
              <div className="flex items-center gap-2 text-slate-300">
                <span>Since 1956</span>
                <span className="text-slate-500">•</span>
                <span className="text-orange-500 font-semibold">Let Us Pull Your Weight</span>
              </div>

              {/* Right: Phone + CTA */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:7139464000"
                  className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>(713) 946-4000</span>
                </a>
                <a
                  href="#quote"
                  onClick={scrollToQuote}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded font-semibold transition-colors text-sm"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Navigation */}
        <div className="bg-white border-b border-slate-200">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <Image
                  src="/images/naegeli-logo.png"
                  alt="Naegeli Transportation"
                  width={250}
                  height={50}
                  priority
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-slate-700 hover:text-orange-500 font-medium transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              {/* Desktop Search */}
              <div className="hidden lg:block">
                <SearchBar />
              </div>

              {/* Mobile: Search Icon + Hamburger */}
              <div className="flex items-center gap-2 lg:hidden">
                <SearchBar mobile />
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <Menu className="w-6 h-6 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only utility bar (shows on smaller screens when utility bar is hidden) */}
        <div className="md:hidden bg-charcoal text-white">
          <div className="container">
            <div className="flex items-center justify-between py-2 text-xs">
              <span className="text-slate-300">Since 1956</span>
              <a
                href="tel:7139464000"
                className="flex items-center gap-1.5 text-orange-500 hover:text-orange-400 transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(713) 946-4000</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
