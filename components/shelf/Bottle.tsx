import React from "react";
import { ShelfProduct } from "@/lib/types";
import { THEME } from "@/lib/theme";

interface BottleProps {
  product: ShelfProduct;
  isBlocked?: boolean;
  blockedReason?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export function Bottle({
  product,
  isBlocked = false,
  blockedReason,
  onClick,
  isSelected = false,
}: BottleProps) {
  const activeColor = THEME.colors.actives[product.activeFamily] || "#7C7166";

  // Height and width proportional to product category
  const dimensions = {
    cleanser: "w-14 h-36",
    toner: "w-12 h-32",
    essence: "w-11 h-28",
    serum: "w-10 h-24",
    moisturizer: "w-14 h-20",
    sunscreen: "w-12 h-30",
    oil: "w-9 h-22",
  }[product.category] || "w-11 h-26";

  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col items-center cursor-pointer transition-all duration-200 select-none ${
        isBlocked ? "opacity-35 grayscale" : "hover:-translate-y-2"
      } ${isSelected ? "-translate-y-2" : ""}`}
    >
      {/* Cap / Dropper / Pump top */}
      <div className="flex flex-col items-center">
        {product.category === "serum" || product.category === "oil" ? (
          // Dropper rubber bulb & collar
          <div className="flex flex-col items-center">
            <div className="w-3.5 h-3 bg-[#383028] rounded-t-sm" />
            <div className="w-5 h-2 bg-[#D1C4B2] border-b border-[#241E19]/20" />
          </div>
        ) : product.category === "cleanser" || product.category === "sunscreen" ? (
          // Flip-cap / pump
          <div className="w-6 h-3.5 bg-[#423930] rounded-t-sm border-b border-black/20" />
        ) : (
          // Jar lid or screw cap
          <div className="w-8 h-3 bg-[#383028] rounded-t-sm border-b border-black/20" />
        )}
      </div>

      {/* Bottle Body with Lit Left Edge */}
      <div
        className={`relative ${dimensions} rounded-t-md rounded-b-lg border border-[#D9CEBF] flex flex-col justify-between p-1.5 transition-shadow ${
          isSelected
            ? "ring-2 ring-[#241E19] shadow-lg"
            : "shadow-md group-hover:shadow-lg"
        }`}
        style={{
          background: isBlocked
            ? "#EFEBE6"
            : "linear-gradient(90deg, #FFFFFF 0%, #FAF5EE 15%, #F4ECE1 100%)",
          boxShadow: isBlocked
            ? "none"
            : "inset 2px 0 0 rgba(255, 255, 255, 0.9), inset -1px 0 0 rgba(36, 30, 25, 0.08), 0 8px 16px -4px rgba(36, 30, 25, 0.12)",
        }}
      >
        {/* Step Indicator & Volume */}
        <div className="flex items-center justify-between text-[8px] font-mono text-[#7C7166] px-0.5">
          <span className="font-bold text-[#241E19]">0{product.stepOrder}</span>
          <span>{product.sizeMl}ml</span>
        </div>

        {/* Active Color Signature Ribbon */}
        <div className="my-auto flex flex-col items-center py-1">
          <div
            className="w-full h-1.5 rounded-full mb-1"
            style={{ backgroundColor: activeColor }}
          />
          <span className="text-[7px] font-mono uppercase tracking-tighter text-[#554C43] truncate max-w-[46px] text-center font-semibold">
            {product.dominantActive.split(" ")[0]}
          </span>
        </div>

        {/* Remaining Percentage Pill */}
        <div className="w-full bg-[#E8DFC8]/60 h-1 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${product.remainingPercent}%`,
              backgroundColor: activeColor,
            }}
          />
        </div>
      </div>

      {/* Lock overlay when blocked by life-state mode */}
      {isBlocked && (
        <div
          title={blockedReason || "Locked in selected mode"}
          className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#241E19] text-white p-1 rounded-full shadow-md z-20"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* Product Name label underneath */}
      <div className="mt-2 text-center max-w-[70px]">
        <p className="text-[10px] font-mono text-[#241E19] leading-tight truncate">
          {product.name}
        </p>
        <span className="text-[8px] font-mono uppercase text-[#7C7166]">
          {product.category}
        </span>
      </div>
    </div>
  );
}
