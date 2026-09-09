import React from "react";
import { AppStoreButton } from "@/components/ui/Button";
import { ScanMockup } from "./ScanMockup";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#EFE3D3] blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-[#E8DDD0] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EBE1] border border-[#EFE7DC] text-xs font-mono text-[#554C43] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#4E8F68]" />
            <span>58 Actives Tracked · 163 INCI Names · On-Device Compute</span>
          </div>
        </div>

        {/* Main Headline Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Point it at any bottle.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed max-w-2xl mx-auto font-normal">
            Miko reads the label and tells you what is in it, what that means
            for your skin, and what not to use it with.
          </p>

          {/* Primary Action - Single App Store button repeated */}
          <div className="pt-2 pb-2 flex flex-col items-center gap-3">
            <AppStoreButton size="lg" />
            <p className="text-xs font-mono text-[#7C7166]">
              iOS 17+ · No account required · Stored locally on your device
            </p>
          </div>
        </div>

        {/* Hero Visual: Scan-to-Read Pair */}
        <div className="mt-12 md:mt-16">
          <ScanMockup />
        </div>

        {/* Value Anchor Strip */}
        <div className="mt-16 pt-10 border-t border-[#EFE7DC] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1.5">
            <span className="font-serif text-2xl text-[#241E19]">32 Names</span>
            <p className="text-xs text-[#6E6358] max-w-xs mx-auto">
              Decoded from tiny 6pt packaging text into clinical actions and purposes.
            </p>
          </div>
          <div className="space-y-1.5">
            <span className="font-serif text-2xl text-[#241E19]">19 Layering Rules</span>
            <p className="text-xs text-[#6E6358] max-w-xs mx-auto">
              Formulation-tested compatibility verdicts, including 4 debunked myths.
            </p>
          </div>
          <div className="space-y-1.5">
            <span className="font-serif text-2xl text-[#241E19]">Local Database</span>
            <p className="text-xs text-[#6E6358] max-w-xs mx-auto">
              Your shelf and skin history live on your phone. No server user table exists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
