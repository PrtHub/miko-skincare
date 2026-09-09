import React from "react";
import { Badge } from "@/components/ui/Badge";

export function MythBusterCard() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF5EE] to-[#F2EBE1] border border-[#E8DFC8] shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E3D7C5]">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#E0AE39]/20 text-[#8F6A17] uppercase tracking-wider">
            Layering Myth #1
          </span>
          <span className="text-xs font-mono text-[#7C7166]">
            1 of 4 Myth-Busters
          </span>
        </div>
        <Badge verdict="fine" variant="verdict">
          Compatible · No Wait Required
        </Badge>
      </div>

      <div className="space-y-3">
        <h4 className="font-serif text-2xl text-[#241E19] leading-snug">
          &ldquo;Vitamin C and Niacinamide cancel each other out.&rdquo;
        </h4>
        <div className="inline-block text-xs font-mono font-semibold text-[#B84A3D] bg-white px-2 py-0.5 rounded border border-[#EFE7DC]">
          False · Outdated 1960s laboratory artifact
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#554C43] leading-relaxed">
        <div className="p-4 rounded-xl bg-white/80 border border-[#EFE7DC] space-y-1.5">
          <span className="font-mono text-[10px] uppercase text-[#7C7166] tracking-wider block font-semibold">
            Where the myth came from
          </span>
          <p>
            In the early 1960s, researchers heated unformulated ascorbic acid
            and niacinamide to extreme temperatures (&gt;120°C) in non-cosmetic
            acid solutions for weeks. It produced a yellow nicotinic acid complex
            that caused intense facial flushing.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white/80 border border-[#EFE7DC] space-y-1.5">
          <span className="font-mono text-[10px] uppercase text-[#7C7166] tracking-wider block font-semibold">
            What clinical pharmacology shows today
          </span>
          <p>
            Modern stabilized formulas at ambient skin temperatures do not form
            irreversible complexes. Niacinamide strengthens barrier resistance
            while L-ascorbic acid scavenges free radicals. They are safe to use
            in the same AM routine.
          </p>
        </div>
      </div>

      <div className="pt-2 text-[11px] font-mono text-[#7C7166] flex items-center justify-between border-t border-[#E3D7C5]">
        <span>Four of Miko&apos;s 19 layering rules exist to debunk myths</span>
        <span>Impartial formulation science</span>
      </div>
    </div>
  );
}
