import React from "react";
import { FAQAccordion } from "./FAQAccordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-[#EFE7DC] bg-[#FAF6F0]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>09</span>
            <span>·</span>
            <span>Evidence & Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#554C43] leading-relaxed">
            Honest answers grounded in cosmetic formulation science and epidermal
            biology — without marketing hyperbole.
          </p>
        </div>

        {/* Accordion Component */}
        <FAQAccordion />

        {/* Long-tail SEO Subtext Note */}
        <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] text-center text-xs text-[#7C7166]">
          Have a specific pairing question? Miko tracks 58 active ingredients and
          detects molecular conflicts directly from packaging scans.
        </div>
      </div>
    </section>
  );
}
