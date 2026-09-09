"use client";

import React, { useState } from "react";
import { SAMPLE_SHELF_PRODUCTS } from "@/lib/data/sampleProducts";
import { Badge } from "@/components/ui/Badge";
import { THEME } from "@/lib/theme";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
type DayType = (typeof DAYS)[number];

export function RoutineGrid() {
  const [selectedDay, setSelectedDay] = useState<DayType>("Tue");

  // Get products for the selected day across slots
  const morningProducts = SAMPLE_SHELF_PRODUCTS.filter(
    (p) => p.slots.includes("AM") && p.days.includes(selectedDay)
  ).sort((a, b) => a.stepOrder - b.stepOrder);

  const middayProducts = SAMPLE_SHELF_PRODUCTS.filter(
    (p) => p.slots.includes("Midday") && p.days.includes(selectedDay)
  ).sort((a, b) => a.stepOrder - b.stepOrder);

  const eveningProducts = SAMPLE_SHELF_PRODUCTS.filter(
    (p) => p.slots.includes("PM") && p.days.includes(selectedDay)
  ).sort((a, b) => a.stepOrder - b.stepOrder);

  return (
    <div className="space-y-6">
      {/* Day Selector Pills */}
      <div className="flex items-center justify-between overflow-x-auto pb-2 border-b border-[#EFE7DC]">
        <div className="flex items-center gap-2">
          {DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-[#241E19] text-[#FBF7F2] font-semibold shadow-xs"
                    : "bg-[#F2EBE1] text-[#554C43] hover:bg-[#EAE0D2]"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-[#7C7166]">
          Computed Locally
        </span>
      </div>

      {/* 3 Slots Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Slot 1: Morning (AM) */}
        <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#EFE7DC]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E0AE39]" />
              <h4 className="font-serif text-lg text-[#241E19]">Morning</h4>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166]">
              {morningProducts.length} steps
            </span>
          </div>

          <div className="space-y-2.5">
            {morningProducts.map((p, idx) => (
              <div
                key={p.id}
                className="p-2.5 rounded-xl bg-[#FBF7F2] border border-[#EFE7DC] flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAE0D2] flex items-center justify-center font-mono text-[10px] text-[#554C43] font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#241E19] truncate max-w-[170px]">
                      {p.name}
                    </p>
                    <span className="text-[10px] font-mono text-[#7C7166]">
                      {p.dominantActive}
                    </span>
                  </div>
                </div>
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    backgroundColor:
                      THEME.colors.actives[p.activeFamily] || "#7C7166",
                  }}
                  title={p.activeFamily}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slot 2: Midday (Sunscreen Reapply Only!) */}
        <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B07A26]" />
              <h4 className="font-serif text-lg text-[#241E19]">Midday</h4>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166]">
              SPF Reapply Only
            </span>
          </div>

          <div className="space-y-2.5">
            {middayProducts.length > 0 ? (
              middayProducts.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-xl bg-white border border-[#E8DFC8] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#241E19]">
                      {p.name}
                    </span>
                    <Badge variant="mono">UV Protection</Badge>
                  </div>
                  <p className="text-[11px] text-[#6E6358] leading-snug">
                    Sunscreen reapplication slot. Midday carries sunscreen only —
                    never padded with non-essential products.
                  </p>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs font-mono text-[#A2988B]">
                Empty (No SPF configured on shelf)
              </div>
            )}
          </div>

          <div className="p-2.5 rounded-xl bg-[#F2EBE1]/60 text-[11px] text-[#6E6358] leading-relaxed">
            💡 <em>Midday exists because &ldquo;reapply&rdquo; needs somewhere to live. It carries sunscreen only.</em>
          </div>
        </div>

        {/* Slot 3: Evening (PM) */}
        <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#EFE7DC]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97742]" />
              <h4 className="font-serif text-lg text-[#241E19]">Evening</h4>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166]">
              {eveningProducts.length} steps
            </span>
          </div>

          <div className="space-y-2.5">
            {eveningProducts.map((p, idx) => (
              <div
                key={p.id}
                className="p-2.5 rounded-xl bg-[#FBF7F2] border border-[#EFE7DC] flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAE0D2] flex items-center justify-center font-mono text-[10px] text-[#554C43] font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#241E19] truncate max-w-[170px]">
                      {p.name}
                    </p>
                    <span className="text-[10px] font-mono text-[#7C7166]">
                      {p.dominantActive}
                    </span>
                  </div>
                </div>
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    backgroundColor:
                      THEME.colors.actives[p.activeFamily] || "#7C7166",
                  }}
                  title={p.activeFamily}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
