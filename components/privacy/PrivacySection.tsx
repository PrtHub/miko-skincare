import React from "react";
import { PrivacyArchitectureDiagram } from "./PrivacyArchitectureDiagram";

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 md:py-28 border-t border-[#EFE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>06</span>
            <span>·</span>
            <span>On-Device Privacy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            Nothing about you leaves your phone.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            No account. No sign-up. No database with your name on it — because there
            is no database. Your shelf, your routine, and your life-state live in
            an encrypted database on your phone.
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <PrivacyArchitectureDiagram />

        {/* Three Honest Privacy Tenets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
            <h4 className="font-serif text-base text-[#241E19]">
              Zero Accounts
            </h4>
            <p className="text-xs text-[#554C43] leading-relaxed">
              We never ask for your email address, phone number, or full name. We
              could not identify you if we were subpoenaed to do so.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
            <h4 className="font-serif text-base text-[#241E19]">
              The Stated Exception
            </h4>
            <p className="text-xs text-[#554C43] leading-relaxed">
              A photograph of a bottle label goes out to be parsed for its
              ingredients. Saying so plainly is what makes the rest of the claim
              credible.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
            <h4 className="font-serif text-base text-[#241E19]">
              Zero Ad Networks
            </h4>
            <p className="text-xs text-[#554C43] leading-relaxed">
              No Meta Pixels, no Google Analytics SDKs, and no behavioral tracking
              brokers. The product is financed purely by subscriptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
