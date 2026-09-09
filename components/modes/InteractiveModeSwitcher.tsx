"use client";

import React, { useState } from "react";
import { LIFE_STATE_MODES } from "@/lib/data/lifeStateRules";
import { SAMPLE_SHELF_PRODUCTS } from "@/lib/data/sampleProducts";
import { ShelfVisual } from "@/components/shelf/ShelfVisual";
import { LifeStateMode } from "@/lib/types";

export function InteractiveModeSwitcher() {
  const [selectedModeId, setSelectedModeId] =
    useState<LifeStateMode["id"]>("pregnancy");

  const currentMode =
    LIFE_STATE_MODES.find((m) => m.id === selectedModeId) || LIFE_STATE_MODES[1];

  // Calculate remaining unblocked products
  const remainingProducts = SAMPLE_SHELF_PRODUCTS.filter((p) => {
    if (selectedModeId === "all") return true;
    return !(
      p.blockedInModes &&
      p.blockedInModes.includes(
        selectedModeId as
          | "pregnancy"
          | "breastfeeding"
          | "isotretinoin"
          | "postProcedure"
      )
    );
  });

  const blockedCount = SAMPLE_SHELF_PRODUCTS.length - remainingProducts.length;

  return (
    <div className="space-y-8">
      {/* Mode Switcher Buttons */}
      <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
        {LIFE_STATE_MODES.map((mode) => {
          const isSelected = mode.id === selectedModeId;

          return (
            <button
              key={mode.id}
              onClick={() => setSelectedModeId(mode.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 border ${
                isSelected
                  ? "bg-[#241E19] text-[#FBF7F2] border-[#241E19] shadow-sm font-semibold"
                  : "bg-white border-[#EFE7DC] text-[#554C43] hover:border-[#DFD5C6]"
              }`}
            >
              <span>{mode.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-[#F2EBE1] text-[#7C7166]"
                }`}
              >
                {mode.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mode Status & Deferral Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EFE7DC] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EFE7DC]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B84A3D]" />
            <h4 className="font-serif text-xl text-[#241E19]">
              {currentMode.name} Active
            </h4>
          </div>
          <span className="text-xs font-mono text-[#7C7166]">
            {blockedCount > 0
              ? `${blockedCount} products locked · Routine auto-rebuilt`
              : "Full shelf accessible"}
          </span>
        </div>

        <p className="text-sm text-[#554C43] leading-relaxed">
          {currentMode.summary}
        </p>

        {/* Strict Medical Deferral Notice */}
        <div className="p-3.5 rounded-xl bg-[#FBEDED] border border-[#B84A3D]/20 text-xs text-[#554C43] flex items-start gap-2.5">
          <span className="text-sm shrink-0">⚠️</span>
          <div className="space-y-1">
            <p className="font-medium text-[#241E19]">
              {currentMode.deferralNotice}
            </p>
            <p className="text-[11px] text-[#7C7166]">
              Never imply clearance. The mode flags cosmetic formulations to raise
              with a qualified healthcare professional.
            </p>
          </div>
        </div>
      </div>

      {/* Re-rendered Shelf with Greyed Out Blocked Products */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-[#7C7166]">
          <span>Live Shelf Re-render:</span>
          <span>
            {remainingProducts.length} of {SAMPLE_SHELF_PRODUCTS.length} products
            available
          </span>
        </div>
        <ShelfVisual
          products={SAMPLE_SHELF_PRODUCTS}
          activeMode={selectedModeId}
        />
      </div>

      {/* Zero Commission Reassurance */}
      <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFC8] text-xs text-[#554C43] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span>🌿</span>
          <span>
            <strong>Zero Affiliate Commission:</strong> When products are locked, Miko rebuilds your routine strictly around what you already own. We never recommend new bottles for commercial kickbacks.
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#7C7166]">100% Impartial</span>
      </div>
    </div>
  );
}
