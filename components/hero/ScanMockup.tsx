"use client";

import React, { useState } from "react";
import { THEME } from "@/lib/theme";

export function ScanMockup() {
  const [activeTab, setActiveTab] = useState<"both" | "scan" | "read">("both");

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Mobile Tab Switcher for smaller screens */}
      <div className="flex md:hidden justify-center mb-6">
        <div className="inline-flex rounded-full bg-[#F2EBE1] p-1 border border-[#EFE7DC]">
          <button
            onClick={() => setActiveTab("scan")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "scan"
                ? "bg-white text-[#241E19] shadow-xs"
                : "text-[#554C43]"
            }`}
          >
            1. The Viewfinder
          </button>
          <button
            onClick={() => setActiveTab("read")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "read"
                ? "bg-white text-[#241E19] shadow-xs"
                : "text-[#554C43]"
            }`}
          >
            2. The Read
          </button>
        </div>
      </div>

      {/* The Scan-to-Read Pair */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Device 1: The Viewfinder (Camera Scan) */}
        <div
          className={`${
            activeTab === "read" ? "hidden md:block" : "block"
          } transition-all`}
        >
          <div className="relative mx-auto w-[280px] sm:w-[310px] bg-[#1A1612] rounded-[44px] p-3 shadow-2xl border-4 border-[#3A332B]/80 ring-1 ring-black/20">
            {/* Speaker & Dynamic Island Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2A231D]/80 ml-auto mr-2" />
            </div>

            {/* Screen Glass */}
            <div className="relative h-[560px] bg-[#12100E] rounded-[36px] overflow-hidden flex flex-col justify-between p-4 text-white">
              {/* Top Viewfinder Bar */}
              <div className="pt-7 pb-2 px-2 flex items-center justify-between z-10">
                <span className="text-[11px] font-mono text-white/70 uppercase tracking-wider">
                  Miko Label Lens
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-full text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Aligning INCI
                </span>
              </div>

              {/* Viewfinder Center Target & Simulated Bottle Back */}
              <div className="relative my-auto flex flex-col items-center justify-center">
                {/* Simulated Product Label Target */}
                <div className="w-[230px] h-[310px] bg-[#F7F2EB] rounded-xl p-3 text-[#241E19] shadow-inner relative overflow-hidden border border-[#D9CDBE]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] border-b border-[#E3D7C5] pb-1 mb-2 font-bold">
                    Ingredients / Ingrédients
                  </div>
                  <p className="font-mono text-[8px] leading-[13px] text-[#554C43] select-none break-words opacity-85">
                    AQUA/WATER/EAU, GLYCERIN, NIACINAMIDE, CETEARYL ISONONANOATE,
                    GLYCERYL STEARATE, RETINOL, CERAMIDE NP, CERAMIDE AP, SODIUM
                    HYALURONATE, PHYTOSPHINGOSINE, CHOLESTEROL, TOCOPHEROL,
                    CARBOMER, ETHYLHEXYLGLYCERIN, CITRIC ACID, PHENOXYETHANOL.
                  </p>

                  {/* Recognition Scanning Bracket Box */}
                  <div className="absolute inset-3 border-2 border-[#D97742] rounded-lg pointer-events-none">
                    <div className="absolute -top-2.5 left-2 bg-[#D97742] text-white text-[8px] font-mono px-1.5 py-0.2 rounded">
                      RETINOL DETECTED
                    </div>
                    <div className="absolute bottom-2 right-2 bg-[#5E9E78] text-white text-[8px] font-mono px-1.5 py-0.2 rounded">
                      CERAMIDE NP
                    </div>
                  </div>

                  {/* Scanning Laser Line */}
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97742] to-transparent animate-bounce opacity-80 top-24" />
                </div>
              </div>

              {/* Bottom Shutter / Status Bar */}
              <div className="pb-3 pt-2 px-2 flex flex-col items-center gap-2 z-10">
                <div className="text-center">
                  <span className="text-xs font-sans font-medium text-white/90">
                    Hold still at back label
                  </span>
                  <p className="text-[11px] text-white/50 font-mono">
                    24 ingredients isolated
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white/80 p-0.5 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs font-mono text-[#7C7166] mt-3">
            Step 1 · The Viewfinder
          </p>
        </div>

        {/* Device 2: The Read (The Parsed Analysis) */}
        <div
          className={`${
            activeTab === "scan" ? "hidden md:block" : "block"
          } transition-all`}
        >
          <div className="relative mx-auto w-[280px] sm:w-[310px] bg-[#241E19] rounded-[44px] p-3 shadow-2xl border-4 border-[#3A332B]/80 ring-1 ring-black/20">
            {/* Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2A231D]/80 ml-auto mr-2" />
            </div>

            {/* Screen Glass */}
            <div className="relative h-[560px] bg-[#FBF7F2] rounded-[36px] overflow-hidden flex flex-col p-4 text-[#241E19]">
              {/* Status header */}
              <div className="pt-7 pb-3 flex items-center justify-between border-b border-[#EFE7DC]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166]">
                  Instant Label Read
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#4E8F68] bg-[#EDF5F0] px-2 py-0.5 rounded-full">
                  100% Parsed
                </span>
              </div>

              {/* Product Header Card */}
              <div className="mt-3 p-3 rounded-xl bg-white border border-[#EFE7DC] shadow-2xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block text-[9px] font-mono uppercase tracking-wider text-[#D97742] bg-[#FBF0EB] px-1.5 py-0.5 rounded font-semibold">
                      Active: Retinoid
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#241E19] mt-1 leading-tight">
                      Night Retinol Complex
                    </h4>
                    <p className="text-[10px] text-[#7C7166] mt-0.5">
                      30ml Emulsion · Step 5 (PM)
                    </p>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: THEME.colors.actives.retinoid }}
                    title="Dominant Active: Retinoid"
                  />
                </div>
              </div>

              {/* Flagged Breakdown Scroll */}
              <div className="mt-3 space-y-2 flex-1 overflow-y-auto pr-1">
                {/* Watch item */}
                <div className="p-2.5 rounded-xl bg-[#FBF4E7] border border-[#B07A26]/30">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#241E19]">
                      Retinol
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#B07A26] bg-white/80 px-1.5 py-0.5 rounded">
                      Watch
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E6358] mt-1 leading-snug">
                    High cellular turnover active. Introduce 2 nights/week. Do not layer with AHA/BHA.
                  </p>
                </div>

                {/* Good item 1 */}
                <div className="p-2.5 rounded-xl bg-[#EDF5F0] border border-[#4E8F68]/30">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#241E19]">
                      Ceramide NP
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#4E8F68] bg-white/80 px-1.5 py-0.5 rounded">
                      Good for you
                    </span>
                  </div>
                  <p className="text-[11px] text-[#554C43] mt-1 leading-snug">
                    Lipid replenishment. Protects moisture barrier while retinoid activates.
                  </p>
                </div>

                {/* Good item 2 */}
                <div className="p-2.5 rounded-xl bg-[#EDF5F0] border border-[#4E8F68]/30">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#241E19]">
                      Niacinamide
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#4E8F68] bg-white/80 px-1.5 py-0.5 rounded">
                      Good for you
                    </span>
                  </div>
                  <p className="text-[11px] text-[#554C43] mt-1 leading-snug">
                    Barrier cofactor. Reduces erythema and flaking from retinoid desquamation.
                  </p>
                </div>

                {/* Conflict Notice */}
                <div className="p-2 rounded-lg bg-[#F2EBE1] border border-[#EFE7DC] text-[10px] text-[#554C43] flex items-start gap-1.5">
                  <span className="text-[#B07A26] font-bold">⚠️</span>
                  <span>
                    <strong>Slot rule:</strong> Do not use direct acids on the same evening.
                  </span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 pb-1 border-t border-[#EFE7DC]">
                <div className="w-full py-2 bg-[#241E19] text-[#FBF7F2] rounded-xl text-xs font-medium text-center shadow-xs">
                  Add to My Shelf (PM Slot)
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs font-mono text-[#7C7166] mt-3">
            Step 2 · The Read
          </p>
        </div>
      </div>
    </div>
  );
}
