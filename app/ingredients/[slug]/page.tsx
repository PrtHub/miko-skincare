import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ACTIVES_LIST, getActiveBySlug } from "@/lib/data/actives";
import { Badge } from "@/components/ui/Badge";
import { AppStoreButton } from "@/components/ui/Button";

import { LAYERING_RULES } from "@/lib/data/layeringRules";
import { PREGNANCY_INGREDIENTS } from "@/lib/data/pregnancyData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACTIVES_LIST.map((active) => ({
    slug: active.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const active = getActiveBySlug(slug);

  if (!active) {
    return {
      title: "Active Ingredient Guide | Miko",
    };
  }

  const title = `${active.name}: INCI, Role & Layering | Miko`;
  const description = `${active.description} Cutaneous mechanism, recognized INCI packaging aliases, and layering rules.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/ingredients/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/ingredients/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function IngredientDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const active = getActiveBySlug(slug);

  if (!active) {
    notFound();
  }

  // Find related layering rules
  const firstWord = active.name.split(" ")[0].toLowerCase();
  const matchingRules = LAYERING_RULES.filter(
    (r) =>
      r.active1.toLowerCase().includes(firstWord) ||
      r.active2.toLowerCase().includes(firstWord)
  );

  // Find matching pregnancy item
  const pregnancyGuide = PREGNANCY_INGREDIENTS.find(
    (p) => p.slug === active.slug || p.name.toLowerCase().includes(firstWord)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        name: `${active.name} Active Profile`,
        description: active.description,
        url: `${baseUrl}/ingredients/${slug}`,
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
            name: "Ingredients Directory",
            item: `${baseUrl}/ingredients`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: active.name,
            item: `${baseUrl}/ingredients/${slug}`,
          },
        ],
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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="space-y-4">
          <Link
            href="/ingredients"
            className="text-xs font-mono text-[#7C7166] hover:text-[#241E19] flex items-center gap-1.5"
          >
            ← Back to Ingredients Directory
          </Link>

          <div className="flex items-center gap-2">
            <Badge activeFamily={active.family} variant="active" dot>
              {active.familyDisplayName}
            </Badge>
            <span className="text-xs font-mono text-[#7C7166] bg-[#F2EBE1] px-2.5 py-0.5 rounded-full">
              Recommended: {active.bestUsedIn} Slot
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            {active.name}
          </h1>
        </div>

        {/* Overview Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-8">
          <div className="space-y-2 pb-6 border-b border-[#EFE7DC]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Clinical Overview
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#241E19] leading-snug">
              {active.description}
            </p>
          </div>

          {/* Biological Mechanism */}
          {active.mechanism && (
            <div className="space-y-2 pb-6 border-b border-[#EFE7DC]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
                Epidermal & Cutaneous Mechanism
              </span>
              <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
                {active.mechanism}
              </p>
            </div>
          )}

          {/* Targeted Skin Concerns */}
          {active.concerns && active.concerns.length > 0 && (
            <div className="space-y-3 pb-6 border-b border-[#EFE7DC]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
                Addresses Skin Concerns
              </span>
              <div className="flex flex-wrap gap-2">
                {active.concerns.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF6F0] text-[#554C43] border border-[#E8DFC8]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Common INCI names found on packaging */}
          <div className="space-y-3 pb-6 border-b border-[#EFE7DC]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Recognized INCI Names on Packaging Labels
            </span>
            <div className="flex flex-wrap gap-2">
              {active.commonInci.map((inci) => (
                <span
                  key={inci}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F2EBE1] text-[#241E19] border border-[#EFE7DC]"
                >
                  {inci}
                </span>
              ))}
            </div>
          </div>

          {/* Layering & Compatibility Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-[#EDF5F0] border border-[#4E8F68]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4E8F68] uppercase tracking-wider block">
                Compatible Synergies
              </span>
              <ul className="space-y-1.5 text-xs text-[#554C43]">
                {active.pairsWith && active.pairsWith.length > 0 ? (
                  active.pairsWith.map((pair) => (
                    <li key={pair} className="flex items-center gap-1.5">
                      <span>✓</span>
                      <span>{pair}</span>
                    </li>
                  ))
                ) : (
                  <li>Universal tolerance with gentle hydrators.</li>
                )}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#B07A26]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#B07A26] uppercase tracking-wider block">
                Separate or Alternate
              </span>
              <ul className="space-y-1.5 text-xs text-[#554C43]">
                {active.separateFrom && active.separateFrom.length > 0 ? (
                  active.separateFrom.map((sep) => (
                    <li key={sep} className="flex items-center gap-1.5">
                      <span>⚠️</span>
                      <span>{sep}</span>
                    </li>
                  ))
                ) : (
                  <li>No significant contraindications documented.</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Cross-Linking: Layering Rules & Pregnancy Guidance */}
        {(matchingRules.length > 0 || pregnancyGuide) && (
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Layering Rules & Life-State Compatibility
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {matchingRules.slice(0, 2).map((rule) => (
                <Link
                  key={rule.slug}
                  href={`/can-i-use/${rule.slug}`}
                  className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    Pairing Verdict · {rule.verdict}
                  </span>
                  <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block">
                    Can I use {rule.active1.split(" ")[0]} and {rule.active2.split(" ")[0]}? →
                  </span>
                </Link>
              ))}
              {pregnancyGuide && (
                <Link
                  href={`/pregnancy/${pregnancyGuide.slug}`}
                  className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    Pregnancy Guide · {pregnancyGuide.statusLabel}
                  </span>
                  <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block">
                    {active.name} During Pregnancy →
                  </span>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Track your bottles and actives in Miko
            </h2>
            <p className="text-xs text-[#554C43] max-w-md">
              Point your camera at any label to automatically identify active
              percentages, chemistry families, and optimal routine placements.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
