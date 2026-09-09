"use client";

import React, { useState } from "react";
import { AppStoreButton } from "@/components/ui/Button";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"annual" | "weekly">("annual");

  const annualMonthlyEquivalent = (49.99 / 12).toFixed(2);
  const weeklyAnnualized = (7.99 * 52).toFixed(2);
  const savingsPercent = Math.round((1 - 49.99 / (7.99 * 52)) * 100);

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-[#EFE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>08</span>
            <span>·</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            One subscription. No free tier, no ads.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            Miko is financed entirely by subscription. We do not sell user data,
            we do not take affiliate kickbacks on product recommendations, and we
            do not run third-party advertising.
          </p>
        </div>

        {/* Pricing Selector & Card */}
        <div className="max-w-xl mx-auto space-y-8">
          {/* Toggle pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-[#F2EBE1] border border-[#EFE7DC]">
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
                  billingCycle === "annual"
                    ? "bg-[#241E19] text-[#FBF7F2] font-semibold shadow-2xs"
                    : "text-[#554C43] hover:text-[#241E19]"
                }`}
              >
                Annual (Save {savingsPercent}%)
              </button>
              <button
                onClick={() => setBillingCycle("weekly")}
                className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
                  billingCycle === "weekly"
                    ? "bg-[#241E19] text-[#FBF7F2] font-semibold shadow-2xs"
                    : "text-[#554C43] hover:text-[#241E19]"
                }`}
              >
                Weekly
              </button>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#241E19] shadow-lg relative space-y-6">
            {/* Top Badge */}
            {billingCycle === "annual" && (
              <div className="absolute -top-3.5 right-8 bg-[#4E8F68] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Recommended · Save {savingsPercent}%
              </div>
            )}

            <div className="space-y-2 border-b border-[#EFE7DC] pb-6">
              <span className="font-serif text-xl text-[#241E19] block">
                {billingCycle === "annual" ? "Annual Plan" : "Weekly Plan"}
              </span>

              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#241E19]">
                  {billingCycle === "annual" ? "US$49.99" : "US$7.99"}
                </span>
                <span className="text-sm font-mono text-[#7C7166]">
                  {billingCycle === "annual" ? "/ year" : "/ week"}
                </span>
              </div>

              <p className="text-xs font-mono text-[#554C43] pt-1">
                {billingCycle === "annual"
                  ? `$${annualMonthlyEquivalent} a month, billed yearly`
                  : `Billed weekly ($${weeklyAnnualized}/year equivalent)`}
              </p>
            </div>

            {/* Included Value Points */}
            <div className="space-y-3 text-xs text-[#554C43]">
              <div className="flex items-center gap-2.5">
                <span className="text-[#4E8F68] font-bold">✓</span>
                <span>Full optical label scanner with OCR ingredient parsing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#4E8F68] font-bold">✓</span>
                <span>The 7-Day 3-Slot routine builder (thinnest to thickest order)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#4E8F68] font-bold">✓</span>
                <span>Conflict detection engine with 19 verified rules and myths</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#4E8F68] font-bold">✓</span>
                <span>Pregnancy, Breastfeeding, Isotretinoin, & Post-Procedure modes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#4E8F68] font-bold">✓</span>
                <span>Ask Miko context-aware chat (shelf & formulation aware)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#4E8F68] font-bold">✓</span>
                <span>100% private: stored in local on-device SQLite database</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 space-y-3">
              <AppStoreButton size="lg" className="w-full justify-center" />
              <p className="text-[11px] text-center font-mono text-[#7C7166]">
                Available on iOS 17 and later
              </p>
            </div>

            {/* Required Apple Subscription Disclosures */}
            <div className="pt-4 border-t border-[#EFE7DC] space-y-2 text-[11px] text-[#7C7166] leading-relaxed">
              <p>
                <strong>Auto-Renewal Terms:</strong> Subscriptions renew
                automatically unless cancelled at least 24 hours before the end
                of the current billing period. Charges are processed through
                your Apple ID account.
              </p>
              <p>
                Manage or cancel anytime in your Apple ID Subscription Settings.
                No free tier is offered.
              </p>
              <div className="pt-1 flex items-center justify-center gap-4 text-xs">
                <a
                  href="/terms"
                  className="underline hover:text-[#241E19] transition-colors"
                >
                  Terms of Use
                </a>
                <span>·</span>
                <a
                  href="/privacy"
                  className="underline hover:text-[#241E19] transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
