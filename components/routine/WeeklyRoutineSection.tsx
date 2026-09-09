import React from "react";
import { ShelfVisual } from "@/components/shelf/ShelfVisual";
import { RoutineGrid } from "./RoutineGrid";

export function WeeklyRoutineSection() {
  return (
    <section id="features" className="py-20 md:py-28 border-t border-[#EFE7DC] bg-[#FAF6F0]/40">
      <span id="shelf" className="sr-only" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>03</span>
            <span>·</span>
            <span>The Shelf & The Week</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            A routine built from what you already own.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            Seven days, three slots — morning, midday, evening — built from the
            products you already own, in application order, thinnest to thickest.
            No brand pushes, no unnecessary new bottles.
          </p>
        </div>

        {/* The Signature Shelf Installation */}
        <div className="space-y-4">
          <ShelfVisual />
        </div>

        {/* Routine Schedule Architecture */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl text-[#241E19]">
              The Seven-Day Schedule
            </h3>
            <span className="text-xs font-mono text-[#7C7166]">
              Computed on your device · Deterministic & Unchanging
            </span>
          </div>

          <RoutineGrid />

          {/* Technical Details Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
              <h4 className="font-serif text-base text-[#241E19]">
                Why Midday Exists
              </h4>
              <p className="text-xs text-[#554C43] leading-relaxed">
                Midday exists because &ldquo;reapply&rdquo; needs somewhere to
                live. It carries sunscreen only, and it is empty for anyone
                without SPF rather than artificially padded.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
              <h4 className="font-serif text-base text-[#241E19]">
                Computed on Your Phone
              </h4>
              <p className="text-xs text-[#554C43] leading-relaxed">
                Your schedule is computed on your phone, so it is identical
                every time you open it. A schedule that quietly rearranges itself
                is worth less than no schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
