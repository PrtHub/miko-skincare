import React from "react";
import { InteractiveConflictChecker } from "./InteractiveConflictChecker";
import { MythBusterCard } from "./MythBusterCard";

export function ConflictEngineSection() {
  return (
    <section id="conflicts" className="py-20 md:py-28 border-t border-[#EFE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>04</span>
            <span>·</span>
            <span>The Conflict Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            Your shelf, and what happens when you mix it.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            The conflict engine evaluates molecular interaction and acid-mantle
            tolerance. We frame it as <em className="font-medium text-[#241E19]">compatibility</em>,
            never as safety: <em className="font-medium text-[#241E19]">&ldquo;commonly advised against layering&rdquo;</em>,
            never &ldquo;unsafe&rdquo;.
          </p>
        </div>

        {/* 19 Rules Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#EFE7DC] space-y-1">
            <span className="font-mono text-2xl font-bold text-[#4E8F68]">07</span>
            <span className="text-xs font-mono text-[#554C43] block">
              Compatible (Fine)
            </span>
            <p className="text-[11px] text-[#7C7166]">
              Synergistic pairings that enhance cellular tolerance.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#EFE7DC] space-y-1">
            <span className="font-mono text-2xl font-bold text-[#B07A26]">11</span>
            <span className="text-xs font-mono text-[#554C43] block">
              Separate (AM/PM)
            </span>
            <p className="text-[11px] text-[#7C7166]">
              Both effective, but best applied in alternate slots.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#EFE7DC] space-y-1">
            <span className="font-mono text-2xl font-bold text-[#B84A3D]">01</span>
            <span className="text-xs font-mono text-[#554C43] block">
              Avoid Together
            </span>
            <p className="text-[11px] text-[#7C7166]">
              Oxidative degradation neutralizes molecular efficacy.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-1">
            <span className="font-mono text-2xl font-bold text-[#D97742]">04</span>
            <span className="text-xs font-mono text-[#554C43] block">
              Myth-Busters
            </span>
            <p className="text-[11px] text-[#7C7166]">
              Debunking internet warnings that lack modern evidence.
            </p>
          </div>
        </div>

        {/* Featured Myth-Buster Card */}
        <div className="space-y-4">
          <div className="max-w-2xl space-y-1">
            <h3 className="font-serif text-2xl text-[#241E19]">
              Debunking Internet Lore
            </h3>
            <p className="text-xs text-[#6E6358]">
              Four rules exist solely to correct warnings that do not hold up under peer scrutiny.
            </p>
          </div>
          <MythBusterCard />
        </div>

        {/* Interactive Compatibility Engine */}
        <div className="space-y-4 pt-4">
          <div className="max-w-2xl space-y-1">
            <h3 className="font-serif text-2xl text-[#241E19]">
              Test an Ingredient Combination
            </h3>
            <p className="text-xs text-[#6E6358]">
              Select a pairing to review biological interactions and slot separation rules:
            </p>
          </div>
          <InteractiveConflictChecker />
        </div>
      </div>
    </section>
  );
}
