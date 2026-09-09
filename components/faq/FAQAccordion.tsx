"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data/faq";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="rounded-2xl bg-white border border-[#EFE7DC] overflow-hidden transition-all shadow-2xs"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#FAF6F0] transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.isMyth && (
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#E0AE39]/20 text-[#8F6A17] px-2 py-0.5 rounded font-bold shrink-0">
                    Myth
                  </span>
                )}
                <h4 className="font-serif text-lg sm:text-xl text-[#241E19]">
                  {item.question}
                </h4>
              </div>

              <div
                className={`w-6 h-6 rounded-full bg-[#F2EBE1] flex items-center justify-center shrink-0 transition-transform duration-200 text-[#554C43] ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#EFE7DC]/60 space-y-3">
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFC8]/60 text-xs font-mono font-medium text-[#241E19]">
                  {item.shortAnswer}
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#554C43] leading-relaxed">
                  {item.detailedAnswer.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
