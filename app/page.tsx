import React from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { IngredientBreakdownSection } from "@/components/ingredients/IngredientBreakdownSection";

// Code splitting interactive sections for optimal initial load and responsiveness
const WeeklyRoutineSection = dynamic(
  () =>
    import("@/components/routine/WeeklyRoutineSection").then(
      (mod) => mod.WeeklyRoutineSection
    ),
  {
    loading: () => (
      <div className="py-24 max-w-6xl mx-auto px-4 text-center text-xs font-mono text-[#7C7166]">
        Loading Shelf & Routine...
      </div>
    ),
  }
);

const ConflictEngineSection = dynamic(
  () =>
    import("@/components/conflicts/ConflictEngineSection").then(
      (mod) => mod.ConflictEngineSection
    ),
  {
    loading: () => (
      <div className="py-24 max-w-6xl mx-auto px-4 text-center text-xs font-mono text-[#7C7166]">
        Loading Conflict Engine...
      </div>
    ),
  }
);

const LifeStateSection = dynamic(
  () =>
    import("@/components/modes/LifeStateSection").then(
      (mod) => mod.LifeStateSection
    ),
  {
    loading: () => (
      <div className="py-24 max-w-6xl mx-auto px-4 text-center text-xs font-mono text-[#7C7166]">
        Loading Life-State Modes...
      </div>
    ),
  }
);

const PrivacySection = dynamic(
  () =>
    import("@/components/privacy/PrivacySection").then(
      (mod) => mod.PrivacySection
    )
);

const AskMikoSection = dynamic(
  () =>
    import("@/components/ask/AskMikoSection").then((mod) => mod.AskMikoSection)
);

const PricingSection = dynamic(
  () =>
    import("@/components/pricing/PricingSection").then(
      (mod) => mod.PricingSection
    )
);

import { FAQ_ITEMS } from "@/lib/data/faq";

const FAQSection = dynamic(
  () => import("@/components/faq/FAQSection").then((mod) => mod.FAQSection)
);

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.shortAnswer} ${item.detailedAnswer.join(" ")}`,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section: "Point it at any bottle." */}
        <HeroSection />

        {/* 3. Section 2: Thirty-two ingredients, sorted and flagged */}
        <IngredientBreakdownSection />

        {/* 4. Section 3: The Shelf & Weekly Routine (thinnest to thickest) */}
        <WeeklyRoutineSection />

        {/* 5. Section 4: Conflict Engine & 4 Myth-Busters */}
        <ConflictEngineSection />

        {/* 6. Section 5: Pregnancy & Life-State Modes */}
        <LifeStateSection />

        {/* 7. Section 6: On-Device Privacy Architecture */}
        <PrivacySection />

        {/* 8. Section 7: Ask Miko Contextual Skincare Q&A */}
        <AskMikoSection />

        {/* 9. Section 8: Transparent Pricing */}
        <PricingSection />

        {/* 10. Section 9: Clinical & Practical FAQ */}
        <FAQSection />
      </main>

      {/* 11. Footer with Medical Notice and Legal Links */}
      <Footer />
    </div>
  );
}
