import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppStoreButton } from "@/components/ui/Button";
import { THEME } from "@/lib/theme";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikocare.pro";

export const metadata = {
  title: "About Miko — The Impartial Skincare Routine Builder",
  description:
    "Why Miko was built: to decode packaging labels into plain biology, detect ingredient conflicts, and structure weekly routines without brand kickbacks.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Miko — The Impartial Skincare Routine Builder",
    description:
      "Why Miko was built: to decode packaging labels into plain biology, detect ingredient conflicts, and structure weekly routines without brand kickbacks.",
    url: `${baseUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Miko — The Impartial Skincare Routine Builder",
    description:
      "Why Miko was built: to decode packaging labels into plain biology, detect ingredient conflicts, and structure weekly routines without brand kickbacks.",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Miko",
        description:
          "Why Miko was built: to decode packaging labels into plain biology, detect ingredient conflicts, and structure weekly routines without brand kickbacks.",
        url: `${baseUrl}/about`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${baseUrl}/about`,
          },
        ],
      },
    ],
  };
  const principles = [
    {
      number: "01",
      title: "Pharmacist, Not Influencer",
      description:
        "The skincare industry runs on sponsored endorsements, dramatic before-and-after claims, and emotional marketing. Miko is calm, specific, and slightly clinical. We never use words like 'clean', 'chemical-free', or 'toxic' — terms invented for marketing, not pharmacology.",
    },
    {
      number: "02",
      title: "Zero Affiliate Commissions",
      description:
        "Every routine gap is resolved using bottles you already own on your shelf. We do not sell skincare, we do not accept sponsor placements, and we earn no commission when you buy a product. Our only business model is your direct subscription.",
    },
    {
      number: "03",
      title: "Color as Information, Not Decoration",
      description:
        "Every active ingredient carries its dedicated color token across the app. When you glance at your shelf or routine, the dominant active family is immediately legible. Color is data.",
    },
    {
      number: "04",
      title: "Private by Architecture, Not Policy",
      description:
        "There is no user table in our database with your name on it — because there is no database. Your bathroom shelf, sensitivities, and life-state answers (including pregnancy) live in an encrypted SQLite store on your physical device.",
    },
  ];

  const activesList = [
    { name: "Retinoids", family: "retinoid" as const, color: THEME.colors.actives.retinoid },
    { name: "AHA & BHA Acids", family: "ahaBha" as const, color: THEME.colors.actives.ahaBha },
    { name: "Vitamin C", family: "vitaminC" as const, color: THEME.colors.actives.vitaminC },
    { name: "Ceramides", family: "barrier" as const, color: THEME.colors.actives.barrier },
    { name: "Hyaluronic Acid", family: "hydrator" as const, color: THEME.colors.actives.hydrator },
    { name: "Signal Peptides", family: "peptide" as const, color: THEME.colors.actives.peptide },
    { name: "Niacinamide", family: "brightening" as const, color: THEME.colors.actives.brightening },
    { name: "Centella & Ectoin", family: "soothing" as const, color: THEME.colors.actives.soothing },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-20">
        {/* Page Breadcrumb & Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#241E19]">About</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Why we built Miko.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Most people own six to ten skincare products bought on recommendations,
            have no idea whether they work together, and suspect some are cancelling
            each other out. Miko was created to give you permission to stop worrying.
          </p>
        </div>

        {/* The Concrete Proposition */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>The Single Proposition</span>
          </div>
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#241E19] leading-snug">
            &ldquo;Miko reads the label on any skincare product and tells you what
            is in it, whether it suits you, and what not to use it with.&rdquo;
          </blockquote>
          <p className="text-sm text-[#554C43] leading-relaxed max-w-2xl">
            We lead with the concrete thing — reading the bottle — and let the routine
            builder follow. A lookup utility has a brutal retention cliff: you search
            once and never return. The shelf is the product; conflict detection is
            what makes the shelf trustworthy.
          </p>
        </div>

        {/* Core Architectural Tenets */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
              Our Guiding Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E19]">
              Built on scientific impartiality.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EFE7DC] shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#A2988B] font-bold block">
                    {p.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#241E19]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Data Catalog Metrics */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EFE7DC] pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block">
                Verification Ledger
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
                What the engine tracks today
              </h2>
            </div>
            <span className="text-xs font-mono text-[#7C7166]">
              Verified formulation database
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#241E19]">58</span>
              <span className="text-xs font-mono text-[#554C43] block">Actives Tracked</span>
              <span className="text-[11px] text-[#7C7166] block">Across 14 chemistry families</span>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#241E19]">163</span>
              <span className="text-xs font-mono text-[#554C43] block">INCI Names</span>
              <span className="text-[11px] text-[#7C7166] block">Mapping aliases to actives</span>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#241E19]">19</span>
              <span className="text-xs font-mono text-[#554C43] block">Layering Rules</span>
              <span className="text-[11px] text-[#7C7166] block">Including 4 myth-busters</span>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#241E19]">25</span>
              <span className="text-xs font-mono text-[#554C43] block">Life-State Rules</span>
              <span className="text-[11px] text-[#7C7166] block">Pregnancy, nursing, meds</span>
            </div>
          </div>

          {/* Color Palette Demonstration */}
          <div className="pt-6 border-t border-[#EFE7DC] space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              The Chemistry Color Signature
            </span>
            <div className="flex flex-wrap gap-2">
              {activesList.map((a) => (
                <div
                  key={a.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[#FAF6F0] border border-[#EFE7DC]"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: a.color }}
                  />
                  <span className="text-[#554C43]">{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Honesty on Medical Bounds */}
        <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <h3 className="font-serif text-lg text-[#241E19]">
              Our Honest Clinical Boundary
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
            Miko is honest about what it does not know. If two obscure botanicals
            have no documented interaction, we state plainly:{" "}
            <em>&ldquo;We do not have a specific rule for this pair.&rdquo;</em> We
            do not fabricate confident answers. Furthermore, cosmetic rules are not
            medical clearance. Confirm anything medical with your doctor.
          </p>
        </div>

        {/* Bottom CTA Block */}
        <div className="text-center py-10 space-y-4">
          <h2 className="font-serif text-3xl text-[#241E19]">
            Ready to decode your bathroom shelf?
          </h2>
          <p className="text-sm text-[#554C43] max-w-md mx-auto">
            Download Miko on the App Store. No account required, 100% on-device.
          </p>
          <div className="pt-2">
            <AppStoreButton size="lg" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
