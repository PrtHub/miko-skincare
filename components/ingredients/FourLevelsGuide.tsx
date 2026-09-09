import React from "react";
import { THEME } from "@/lib/theme";

export function FourLevelsGuide() {
  const levels = [
    {
      name: "Good for you",
      color: THEME.colors.levels.good,
      bg: THEME.colors.levelTints.good,
      border: "#4E8F6840",
      description: "Aimed at something you said you are working on.",
      context: "Directly targets your selected skin goals (e.g. barrier restoration or hyperpigmentation).",
      example: "Ceramide NP · 15% L-Ascorbic Acid",
    },
    {
      name: "Neutral",
      color: THEME.colors.levels.neutral,
      bg: THEME.colors.levelTints.neutral,
      border: "#7C716640",
      description: "Doing a job, nothing to say about it — the majority of any label.",
      context: "Emulsifiers, solvents, preservatives, and texture stabilizers essential for formulation stability.",
      example: "Aqua · Cetearyl Alcohol · Phenoxyethanol",
    },
    {
      name: "Watch",
      color: THEME.colors.levels.watch,
      bg: THEME.colors.levelTints.watch,
      border: "#B07A2640",
      description: "Worth introducing carefully, given what you told us.",
      context: "High-potency actives requiring gradual titration or specific application order to avoid irritant dermatitis.",
      example: "Retinol · Glycolic Acid · Salicylic Acid",
    },
    {
      name: "Avoid",
      color: THEME.colors.levels.avoid,
      bg: THEME.colors.levelTints.avoid,
      border: "#B84A3D40",
      description: "You told us you react to this, or your life-state rules it out.",
      context: "Ingredients flagged by declared contact allergies or restricted during pregnancy and medical procedures.",
      example: "Hydroquinone · Tretinoin · Declared Fragrance",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {levels.map((lvl) => (
          <div
            key={lvl.name}
            style={{ borderColor: lvl.border }}
            className="p-5 rounded-2xl bg-white border shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: lvl.color }}
                />
                <h4
                  style={{ color: lvl.color }}
                  className="font-serif text-lg font-bold tracking-tight"
                >
                  {lvl.name}
                </h4>
              </div>
              <p className="text-xs font-medium text-[#241E19] leading-snug">
                {lvl.description}
              </p>
              <p className="text-[11px] text-[#6E6358] leading-relaxed">
                {lvl.context}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EFE7DC]">
              <span className="text-[10px] font-mono text-[#A2988B] uppercase tracking-wider block mb-1">
                Typical ingredients
              </span>
              <span className="font-mono text-xs text-[#554C43] block">
                {lvl.example}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Crucial Ethical Copy Banner: No Toxic Level */}
      <div className="p-4 rounded-xl bg-[#F2EBE1] border border-[#E3D7C5] flex items-start gap-3">
        <span className="text-base text-[#554C43] mt-0.5">ℹ️</span>
        <div className="text-xs text-[#554C43] leading-relaxed">
          <strong className="text-[#241E19]">
            There is no &ldquo;toxic&rdquo; rating and Miko will never imply one.
          </strong>{" "}
          Labels list safe cosmetic ingredients under regulatory limits. A product
          is either compatible with your biology or worth watching — inventing
          toxic categories is marketing, not pharmacology.
        </div>
      </div>
    </div>
  );
}
