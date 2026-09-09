import React from "react";
import { ActiveFamily, IngredientLevel, VerdictType } from "@/lib/types";
import { THEME } from "@/lib/theme";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "active" | "verdict" | "level" | "mono";
  activeFamily?: ActiveFamily;
  verdict?: VerdictType;
  level?: IngredientLevel;
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  activeFamily,
  verdict,
  level,
  className = "",
  dot = false,
}: BadgeProps) {
  // Active pill styling
  if (variant === "active" && activeFamily) {
    const color = THEME.colors.actives[activeFamily];
    const bg = THEME.colors.activeTints[activeFamily];
    return (
      <span
        style={{ color, backgroundColor: bg, borderColor: `${color}30` }}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${className}`}
      >
        {dot && (
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
        )}
        {children}
      </span>
    );
  }

  // Verdict pill styling
  if (variant === "verdict" && verdict) {
    const color = THEME.colors.verdicts[verdict];
    const bg = THEME.colors.verdictTints[verdict];
    const labels = {
      fine: "Compatible",
      separate: "Separate",
      avoid: "Avoid",
    };
    return (
      <span
        style={{ color, backgroundColor: bg, borderColor: `${color}35` }}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-mono border ${className}`}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        {children || labels[verdict]}
      </span>
    );
  }

  // 4 Levels pill styling
  if (variant === "level" && level) {
    const color = THEME.colors.levels[level];
    const bg = THEME.colors.levelTints[level];
    return (
      <span
        style={{ color, backgroundColor: bg, borderColor: `${color}30` }}
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border ${className}`}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        {children}
      </span>
    );
  }

  // Mono data pill
  if (variant === "mono") {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-[#F2EBE1] text-[#554C43] border border-[#EFE7DC] ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default neutral badge
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F2EBE1] text-[#554C43] border border-[#EFE7DC] ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-[#7C7166]" />}
      {children}
    </span>
  );
}
