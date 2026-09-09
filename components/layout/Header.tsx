"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full py-3.5 transition-[background-color,border-color,box-shadow] duration-200 ${
        isScrolled
          ? "bg-[#FBF7F2]/90 backdrop-blur-md border-b border-[#EFE7DC] shadow-xs"
          : "bg-[#FBF7F2] border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brandmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#241E19] flex items-center justify-center text-[#FBF7F2] font-serif text-lg font-bold shadow-xs transition-transform group-hover:scale-105">
            M
          </div>
          <span className="font-serif text-2xl tracking-tight text-[#241E19]">
            Miko
          </span>
        </Link>

        {/* Navigation Anchors - Streamlined */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#554C43]">
          <Link
            href="/#scanner"
            className="hover:text-[#241E19] transition-colors py-1"
          >
            How it works
          </Link>
          <Link
            href="/#features"
            className="hover:text-[#241E19] transition-colors py-1"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="hover:text-[#241E19] transition-colors py-1"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="hover:text-[#241E19] transition-colors py-1"
          >
            About
          </Link>
        </nav>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <AppStoreButton size="md" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#554C43] hover:bg-[#F2EBE1]"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EFE7DC] bg-[#FBF7F2] px-6 py-4 space-y-3">
          <Link
            href="/#scanner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#554C43] hover:text-[#241E19] py-1.5"
          >
            How it works
          </Link>
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#554C43] hover:text-[#241E19] py-1.5"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#554C43] hover:text-[#241E19] py-1.5"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#554C43] hover:text-[#241E19] py-1.5"
          >
            About
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#554C43] hover:text-[#241E19] py-1.5"
          >
            FAQ
          </Link>
          <div className="pt-2">
            <AppStoreButton size="md" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
