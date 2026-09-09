"use client";

import React, { useState } from "react";
import { ShelfProduct } from "@/lib/types";
import { SAMPLE_SHELF_PRODUCTS } from "@/lib/data/sampleProducts";
import { Bottle } from "./Bottle";
import { Badge } from "@/components/ui/Badge";

interface ShelfVisualProps {
  products?: ShelfProduct[];
  activeMode?: "all" | "pregnancy" | "breastfeeding" | "isotretinoin" | "postProcedure";
}

export function ShelfVisual({
  products = SAMPLE_SHELF_PRODUCTS,
  activeMode = "all",
}: ShelfVisualProps) {
  const [selectedProduct, setSelectedProduct] = useState<ShelfProduct>(products[2]); // default to Vit C serum

  return (
    <div className="w-full space-y-6">
      {/* The Bathroom Shelf Installation */}
      <div className="relative pt-6 pb-2 px-4 sm:px-8 bg-gradient-to-b from-[#FAF5EE] to-[#F2EBE1]/40 rounded-3xl border border-[#EFE7DC] shadow-inner overflow-x-auto">
        {/* Shelf Heading Bar */}
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#EFE7DC]/80 min-w-[580px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4E8F68]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#554C43] font-semibold">
              The Bathroom Shelf · Tiered by Application Order
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#7C7166]">
            Thinnest (Water) → Thickest (Emulsion)
          </span>
        </div>

        {/* Bottles Lined Up On Shelf */}
        <div className="flex items-end justify-between gap-3 sm:gap-6 min-w-[580px] px-2 pb-0">
          {products.map((p) => {
            const isBlocked =
              activeMode !== "all" &&
              p.blockedInModes &&
              p.blockedInModes.includes(
                activeMode as
                  | "pregnancy"
                  | "breastfeeding"
                  | "isotretinoin"
                  | "postProcedure"
              );

            return (
              <Bottle
                key={p.id}
                product={p}
                isBlocked={Boolean(isBlocked)}
                isSelected={selectedProduct.id === p.id}
                onClick={() => setSelectedProduct(p)}
              />
            );
          })}
        </div>

        {/* The Signature Three-Strip Shelf Board Furniture */}
        <div className="shelf-board-container min-w-[580px] mt-0">
          {/* 1. Lit Top Surface */}
          <div className="shelf-strip-top" />
          {/* 2. Front Edge Board */}
          <div className="shelf-strip-front flex items-center justify-between px-4">
            <span className="text-[7px] font-mono tracking-widest text-[#7C6E5B] uppercase">
              Solid Ash Wood 18mm
            </span>
            <span className="text-[7px] font-mono tracking-widest text-[#7C6E5B] uppercase">
              Computed Local Store
            </span>
          </div>
          {/* 3. Darker Underside Shadow */}
          <div className="shelf-strip-underside" />
        </div>
      </div>

      {/* Product Detail Inspector Card */}
      {selectedProduct && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFE7DC] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#7C7166]">
                Step 0{selectedProduct.stepOrder} ({selectedProduct.texture})
              </span>
              <Badge activeFamily={selectedProduct.activeFamily} variant="active" dot>
                {selectedProduct.dominantActive}
              </Badge>
            </div>
            <h4 className="font-serif text-lg text-[#241E19]">
              {selectedProduct.name}
            </h4>
            <p className="text-xs text-[#6E6358] font-mono">
              Volume: {selectedProduct.sizeMl}ml · Estimated fill: {selectedProduct.remainingPercent}% · {selectedProduct.inciCount} raw ingredients parsed
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="text-right sm:border-r border-[#EFE7DC] sm:pr-4">
              <span className="text-[10px] font-mono uppercase text-[#7C7166] block">
                Scheduled Slots
              </span>
              <span className="text-xs font-mono font-medium text-[#241E19]">
                {selectedProduct.slots.join(" & ")}
              </span>
            </div>
            <div className="pl-1">
              <span className="text-[10px] font-mono uppercase text-[#7C7166] block">
                Days
              </span>
              <span className="text-xs font-mono font-medium text-[#241E19]">
                {selectedProduct.days.length === 7 ? "Daily" : selectedProduct.days.join(", ")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
