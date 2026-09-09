"use client";

import React, { useState } from "react";

interface PromptExample {
  id: string;
  userQuestion: string;
  mikoResponse: string;
  shelfContext: string;
}

const EXAMPLES: PromptExample[] = [
  {
    id: "ex1",
    userQuestion: "Can I introduce a glycolic acid toner tonight?",
    mikoResponse:
      "Tonight is Tuesday: you have 0.3% Retinol scheduled in your PM slot. Introducing 7% Glycolic Acid in the same routine will double your exfoliation rate and increase water loss. Use the glycolic toner tomorrow (Wednesday evening) instead, and pause the retinol for that night.",
    shelfContext: "Reads Tuesday PM shelf: Retinol 0.3% scheduled",
  },
  {
    id: "ex2",
    userQuestion: "Why did my sunscreen pill up this morning?",
    mikoResponse:
      "Looking at your AM routine: Step 5 is your Ceramide Barrier Cream (high dimethicone base), followed immediately by your Zinc Oxide SPF 50 fluid. The silicone polymer film hasn't absorbed before the mineral powder is applied. Wait 90 seconds after moisturizer before smoothing on your SPF, and pat rather than rub.",
    shelfContext: "Reads AM formulations: Silicone cream + mineral fluid",
  },
  {
    id: "ex3",
    userQuestion: "I found out I'm pregnant today. What do I stop?",
    mikoResponse:
      "Congratulations. Toggle Pregnancy Mode in settings immediately: this will automatically lock your 0.3% Retinol night emulsion and your 2% Salicylic Acid liquid. Your Hyaluronic Essence, Centella Cleanser, and Ceramide Cream remain active and your schedule will rebalance around them. Confirm anything medical with your doctor.",
    shelfContext: "Reads full active catalog: Flags Retinoid + BHA",
  },
];

export function ChatPreview() {
  const [selectedEx, setSelectedEx] = useState<PromptExample>(EXAMPLES[0]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-6">
      {/* Sample Question Prompts */}
      <div className="flex flex-wrap gap-2 pb-2">
        {EXAMPLES.map((ex) => {
          const isSelected = ex.id === selectedEx.id;
          return (
            <button
              key={ex.id}
              onClick={() => setSelectedEx(ex)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left border ${
                isSelected
                  ? "bg-[#241E19] text-[#FBF7F2] border-[#241E19] shadow-2xs font-semibold"
                  : "bg-[#FBF7F2] text-[#554C43] border-[#EFE7DC] hover:border-[#DFD5C6]"
              }`}
            >
              &ldquo;{ex.userQuestion}&rdquo;
            </button>
          );
        })}
      </div>

      {/* Simulated Chat Interface */}
      <div className="rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] p-5 sm:p-6 space-y-5">
        {/* Context Pill */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#7C7166] pb-3 border-b border-[#E8DFC8]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4E8F68]" />
            Shelf Context Loaded
          </span>
          <span>{selectedEx.shelfContext}</span>
        </div>

        {/* User Message Bubble */}
        <div className="flex justify-end">
          <div className="max-w-md p-3.5 rounded-2xl rounded-tr-xs bg-[#241E19] text-[#FBF7F2] text-xs sm:text-sm font-sans leading-relaxed shadow-2xs">
            {selectedEx.userQuestion}
          </div>
        </div>

        {/* Miko Assistant Response Bubble */}
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#241E19] flex items-center justify-center text-white font-serif text-xs font-bold shrink-0 mt-0.5">
            M
          </div>
          <div className="max-w-lg p-4 rounded-2xl rounded-tl-xs bg-white border border-[#EFE7DC] text-xs sm:text-sm text-[#241E19] leading-relaxed shadow-2xs space-y-2">
            <p>{selectedEx.mikoResponse}</p>
          </div>
        </div>
      </div>

      <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-[#7C7166]">
        <span>No repetitive setup: already knows your bottles & sensitivities</span>
        <span>Contextual Clinical Assistant</span>
      </div>
    </div>
  );
}
