"use client";

import React, { useState } from "react";
import { THEME } from "@/lib/theme";
import { Badge } from "@/components/ui/Badge";

interface InciItem {
  name: string;
  level: "good" | "neutral" | "watch" | "avoid";
  activeFamily?: "retinoid" | "barrier" | "brightening" | "hydrator" | "soothing";
  role: string;
  explanation: string;
}

const SAMPLE_INCI: InciItem[] = [
  {
    name: "AQUA/WATER/EAU",
    level: "neutral",
    role: "Solvent & Vehicle",
    explanation: "Carries active compounds and dissolves water-soluble botanicals.",
  },
  {
    name: "GLYCERIN",
    level: "good",
    activeFamily: "hydrator",
    role: "Endogenous Humectant",
    explanation: "Traps ambient moisture into the stratum corneum and prevents cellular dehydration.",
  },
  {
    name: "NIACINAMIDE",
    level: "good",
    activeFamily: "brightening",
    role: "Nicotinic Cofactor (Vit B3)",
    explanation: "Supports lipid synthesis, modulates sebum output, and strengthens cellular defenses.",
  },
  {
    name: "CETEARYL ALCOHOL",
    level: "neutral",
    role: "Fatty Alcohol Emollient",
    explanation: "Smooths epidermal texture; non-drying unlike simple volatile alcohols.",
  },
  {
    name: "RETINOL",
    level: "watch",
    activeFamily: "retinoid",
    role: "Vitamin A Derivative",
    explanation: "Accelerates epidermal cell renewal. Introduce 2 nights per week to avoid barrier peeling.",
  },
  {
    name: "CERAMIDE NP",
    level: "good",
    activeFamily: "barrier",
    role: "Epidermal Sphingolipid",
    explanation: "Directly mimics natural intercellular cement between corneocytes, locking in hydration.",
  },
  {
    name: "SODIUM HYALURONATE",
    level: "good",
    activeFamily: "hydrator",
    role: "Salt Form of Hyaluronic Acid",
    explanation: "Deeply hydrates superficial layers without shifting product pH.",
  },
  {
    name: "PHENOXYETHANOL",
    level: "neutral",
    role: "Broad-Spectrum Preservative",
    explanation: "Prevents microbial growth, bacterial contamination, and mold. Safe at regulated <1%.",
  },
  {
    name: "ETHYLHEXYLGLYCERIN",
    level: "neutral",
    role: "Preservative Booster & Conditioner",
    explanation: "Enhances antimicrobials while softening skin.",
  },
  {
    name: "CITRIC ACID",
    level: "neutral",
    role: "pH Adjuster",
    explanation: "Balances formulation acidity to match normal physiological skin mantle (~5.0 to 5.5).",
  },
  {
    name: "TOCOPHEROL",
    level: "good",
    activeFamily: "barrier",
    role: "Vitamin E Antioxidant",
    explanation: "Shields formula lipids against oxidative rancidity.",
  },
  {
    name: "DISODIUM EDTA",
    level: "neutral",
    role: "Chelating Agent",
    explanation: "Binds metal ions in tap water that degrade sensitive active molecules.",
  },
];

export function InteractiveLabelInspector() {
  const [selectedItem, setSelectedItem] = useState<InciItem>(SAMPLE_INCI[4]); // default to Retinol

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Interactive INCI Container */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EFE7DC] p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EFE7DC]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] font-semibold">
              Package Label INCI List
            </span>
            <p className="text-xs text-[#554C43] mt-0.5">
              Tap any ingredient to inspect what it does and why it is flagged:
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#7C7166] bg-[#F2EBE1] px-2 py-0.5 rounded">
            6pt Type Demystified
          </span>
        </div>

        {/* INCI Pill Flow */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] leading-relaxed">
          {SAMPLE_INCI.map((item) => {
            const isSelected = selectedItem.name === item.name;
            const levelColor = THEME.colors.levels[item.level];

            return (
              <button
                key={item.name}
                onClick={() => setSelectedItem(item)}
                style={{
                  borderColor: isSelected ? levelColor : "#EFE7DC",
                  backgroundColor: isSelected
                    ? `${levelColor}15`
                    : item.level === "watch"
                    ? "#FBF4E7/60"
                    : "#FBF7F2",
                }}
                className={`px-2.5 py-1 rounded-md transition-all text-left flex items-center gap-1.5 border hover:border-[#CBB8A1] ${
                  isSelected ? "ring-1" : ""
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: levelColor }}
                />
                <span
                  className={`font-mono text-xs ${
                    isSelected ? "font-semibold text-[#241E19]" : "text-[#554C43]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Dynamic Inspector Card */}
      <div className="lg:col-span-5 bg-[#F2EBE1] rounded-2xl border border-[#E8DFC8]/70 p-6 shadow-xs">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166]">
              Clinical Classification
            </span>
            <Badge level={selectedItem.level} variant="level">
              {selectedItem.level === "good" && "Good for you"}
              {selectedItem.level === "neutral" && "Neutral (Functional)"}
              {selectedItem.level === "watch" && "Watch & Titrate"}
              {selectedItem.level === "avoid" && "Avoid / Contraindicated"}
            </Badge>
          </div>

          <div>
            <h4 className="font-mono text-base font-bold text-[#241E19] break-words">
              {selectedItem.name}
            </h4>
            <span className="text-xs font-serif text-[#7C7166] mt-0.5 block">
              {selectedItem.role}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
            <span className="text-[10px] font-mono text-[#A2988B] uppercase tracking-wider block">
              Miko Formulation Analysis
            </span>
            <p className="text-xs text-[#554C43] leading-relaxed">
              {selectedItem.explanation}
            </p>
          </div>

          {selectedItem.activeFamily && (
            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="text-[#7C7166] font-mono text-[11px]">Chemistry Family:</span>
              <Badge activeFamily={selectedItem.activeFamily} variant="active" dot>
                {selectedItem.activeFamily.toUpperCase()}
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
