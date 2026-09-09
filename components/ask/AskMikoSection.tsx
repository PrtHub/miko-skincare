import React from "react";
import { ChatPreview } from "./ChatPreview";

export function AskMikoSection() {
  return (
    <section className="py-20 md:py-28 border-t border-[#EFE7DC] bg-[#FAF6F0]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>07</span>
            <span>·</span>
            <span>Shelf-Aware Conversation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            Ask Miko.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            A chat that already knows your shelf, your products&apos; full
            ingredient lists, and what you told it about your skin — so a
            question needs no tedious set-up.
          </p>
        </div>

        {/* Interactive Chat Simulation */}
        <ChatPreview />
      </div>
    </section>
  );
}
