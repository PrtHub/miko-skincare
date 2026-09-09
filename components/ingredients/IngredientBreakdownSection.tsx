import React from "react";
import { FourLevelsGuide } from "./FourLevelsGuide";
import { InteractiveLabelInspector } from "./InteractiveLabelInspector";

export function IngredientBreakdownSection() {
  return (
    <section id="scanner" className="py-20 md:py-28 border-t border-[#EFE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>02</span>
            <span>·</span>
            <span>Optical Label Recognition</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            Thirty-two ingredients. Sorted, and flagged for your skin.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            The thing nobody can do for themselves: thirty-two names in six-point type,
            sorted into what they are each doing there, with the two or three that
            matter to <em className="font-medium text-[#241E19]">this person</em> marked
            and explained.
          </p>
        </div>

        {/* The Four Levels Visual Signature */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl text-[#241E19]">
              The Four Evaluation Levels
            </h3>
            <p className="text-xs font-mono text-[#7C7166]">
              Neutral is the majority of any bottle · No emotional marketing
            </p>
          </div>
          <FourLevelsGuide />
        </div>

        {/* Interactive INCI Inspector Demo */}
        <div className="space-y-6 pt-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="font-serif text-2xl text-[#241E19]">
              From Raw INCI Packaging to Plain Biology
            </h3>
            <p className="text-sm text-[#554C43] leading-relaxed">
              Every chemical name is mapped to its active family, formulation purpose,
              and tolerance threshold. No guesswork, no ingredient lookup rabbit holes.
            </p>
          </div>
          <InteractiveLabelInspector />
        </div>
      </div>
    </section>
  );
}
