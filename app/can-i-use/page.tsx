import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LAYERING_RULES } from "@/lib/data/layeringRules";
import { Badge } from "@/components/ui/Badge";
import { THEME } from "@/lib/theme";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Can I Use These Skincare Actives Together? | Miko",
  description:
    "Check whether two active ingredients can be layered together. Evidence-based cosmetic compatibility verdicts, including myth-busters and AM/PM routine slots.",
  alternates: {
    canonical: "/can-i-use",
  },
  openGraph: {
    title: "Can I Use These Skincare Actives Together? | Miko",
    description:
      "Check whether two active ingredients can be layered together. Evidence-based cosmetic compatibility verdicts, including myth-busters and AM/PM routine slots.",
    url: `${baseUrl}/can-i-use`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I Use These Skincare Actives Together? | Miko",
    description:
      "Check whether two active ingredients can be layered together. Evidence-based cosmetic compatibility verdicts and AM/PM routine slots.",
  },
};

export default function CanIUseIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Can I Use These Skincare Actives Together?",
        description:
          "Evidence-based cosmetic compatibility verdicts, myth-busters, and AM/PM routine slots for active skincare ingredients.",
        url: `${baseUrl}/can-i-use`,
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
            name: "Can I Use",
            item: `${baseUrl}/can-i-use`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: LAYERING_RULES.map((rule, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/can-i-use/${rule.slug}`,
          name: `Can I use ${rule.active1.split(" ")[0]} and ${rule.active2.split(" ")[0]} together?`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#241E19]">Can I Use</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Can I use these together?
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Every pair of active ingredients is a question someone types into a
            search bar. We evaluate cosmetic compatibility without sensationalism:
            compatibility, never safety.
          </p>
        </div>

        {/* The 3-Tier Transparency Box */}
        <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-serif text-lg text-[#241E19]">
              How Miko Answers Layering Queries
            </h3>
            <span className="text-xs font-mono text-[#7C7166]">
              19 Verified Rules in v1
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
            There are 58 active ingredients in Miko, creating 1,653 possible pairings.
            We do not fabricate confident answers we do not have. If an exact pair has
            not been verified in cosmetic literature, we admit it openly and provide
            family-level guidelines.
          </p>
        </div>

        {/* Directory of Curated Pairings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Verified Ingredient Pairs
            </h2>
            <span className="text-xs font-mono text-[#7C7166]">
              Select any pairing for detailed guidance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LAYERING_RULES.map((rule) => {
              const verdictColor = THEME.colors.verdicts[rule.verdict];

              return (
                <Link
                  key={rule.slug}
                  href={`/can-i-use/${rule.slug}`}
                  className="p-6 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: verdictColor }}
                        />
                        <span className="font-serif text-lg text-[#241E19] group-hover:text-[#383028]">
                          {rule.active1} + {rule.active2}
                        </span>
                      </div>
                      {rule.isMythBuster && (
                        <span className="text-[10px] font-mono font-bold bg-[#E0AE39]/20 text-[#8F6A17] px-2 py-0.5 rounded">
                          Myth-Buster
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#554C43] line-clamp-2 leading-relaxed">
                      {rule.headline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EFE7DC] flex items-center justify-between text-xs font-mono text-[#7C7166]">
                    <Badge verdict={rule.verdict} variant="verdict">
                      {rule.verdict === "fine" && "Compatible"}
                      {rule.verdict === "separate" && "Separate AM/PM"}
                      {rule.verdict === "avoid" && "Avoid"}
                    </Badge>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Read Rule →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] shadow-sm text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#241E19]">
            Audit your full bathroom shelf automatically
          </h3>
          <p className="text-xs sm:text-sm text-[#554C43] max-w-lg mx-auto leading-relaxed">
            Miko checks all your bottles at once from a single photograph of the label,
            and organizes them into morning, midday, and evening slots without conflicts.
          </p>
          <div className="pt-2">
            <AppStoreButton size="md" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
