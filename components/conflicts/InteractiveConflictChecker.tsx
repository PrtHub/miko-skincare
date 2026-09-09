"use client";

import React, { useState } from "react";
import { LAYERING_RULES } from "@/lib/data/layeringRules";
import { Badge } from "@/components/ui/Badge";
import { THEME } from "@/lib/theme";

export function InteractiveConflictChecker() {
  const [selectedRuleId, setSelectedRuleId] = useState<string>(LAYERING_RULES[1].id); // Retinol + AHA

  const currentRule =
    LAYERING_RULES.find((r) => r.id === selectedRuleId) || LAYERING_RULES[0];

  return (
    <div className="space-y-6">
      {/* Popular Pair Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-2">
        {LAYERING_RULES.map((rule) => {
          const isSelected = rule.id === selectedRuleId;
          const verdictColor = THEME.colors.verdicts[rule.verdict];

          return (
            <button
              key={rule.id}
              onClick={() => setSelectedRuleId(rule.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border text-left flex items-center gap-2 ${
                isSelected
                  ? "bg-white border-[#241E19] text-[#241E19] shadow-xs font-semibold ring-1 ring-[#241E19]"
                  : "bg-[#FBF7F2] border-[#EFE7DC] text-[#554C43] hover:border-[#DFD5C6]"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: verdictColor }}
              />
              <span>
                {rule.active1.split(" ")[0]} + {rule.active2.split(" ")[0]}
              </span>
              {rule.isMythBuster && (
                <span className="text-[9px] bg-[#E0AE39]/20 text-[#8F6A17] px-1 rounded font-mono">
                  MYTH
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Verdict Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-6">
        {/* Verdict Banner Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#EFE7DC]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166]">
              Formulation Compatibility Test
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-serif text-2xl text-[#241E19]">
                {currentRule.active1}
              </h4>
              <span className="text-[#A2988B] font-mono">+</span>
              <h4 className="font-serif text-2xl text-[#241E19]">
                {currentRule.active2}
              </h4>
            </div>
          </div>

          <Badge verdict={currentRule.verdict} variant="verdict">
            {currentRule.verdict === "fine" && "Compatible (Fine)"}
            {currentRule.verdict === "separate" && "Separate Routines"}
            {currentRule.verdict === "avoid" && "Avoid Concurrent Use"}
          </Badge>
        </div>

        {/* Verdict Headline & Details */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFC8]">
            <span className="text-[10px] font-mono uppercase text-[#7C7166] tracking-wider block mb-1">
              Verdict Summary
            </span>
            <p className="font-serif text-lg text-[#241E19]">
              {currentRule.headline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-[#7C7166] tracking-wider block font-semibold">
                Cutaneous Pharmacokinetics
              </span>
              <p className="text-xs text-[#554C43] leading-relaxed">
                {currentRule.reasoning}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-[#7C7166] tracking-wider block font-semibold">
                Miko Scheduling Guidance
              </span>
              <p className="text-xs text-[#554C43] leading-relaxed">
                {currentRule.guidance}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#7C7166] border-t border-[#EFE7DC]">
          <span>Framed strictly as compatibility, never sensationalized safety</span>
          <span>19 Layering Rules in v1</span>
        </div>
      </div>
    </div>
  );
}
