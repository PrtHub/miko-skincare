import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  PREGNANCY_INGREDIENTS,
  getPregnancyIngredientBySlug,
} from "@/lib/data/pregnancyData";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ ingredient: string }>;
}

export async function generateStaticParams() {
  return PREGNANCY_INGREDIENTS.map((item) => ({
    ingredient: item.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export async function generateMetadata({ params }: PageProps) {
  const { ingredient } = await params;
  const item = getPregnancyIngredientBySlug(ingredient);

  if (!item) {
    return {
      title: "Pregnancy Skincare Guide | Miko",
    };
  }

  const queryName = item.name.includes("&")
    ? item.name.split("&")[0].trim()
    : item.name.includes("(")
    ? item.name.split("(")[0].trim()
    : item.name;
  const title = `Can You Use ${queryName} While Pregnant? | Miko`;
  const description = `${item.summary} Pharmacological risks, obstetric consensus, and permitted alternatives.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/pregnancy/${ingredient}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/pregnancy/${ingredient}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PregnancyIngredientPage({ params }: PageProps) {
  const { ingredient } = await params;
  const item = getPregnancyIngredientBySlug(ingredient);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Can you use ${item.name} while pregnant?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${item.summary} ${item.pharmacology} Always confirm anything medical with your doctor.`,
            },
          },
        ],
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
            name: "Pregnancy Guide",
            item: `${baseUrl}/pregnancy`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.name,
            item: `${baseUrl}/pregnancy/${item.slug}`,
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
            href="/pregnancy"
            className="text-xs font-mono text-[#7C7166] hover:text-[#241E19] flex items-center gap-1.5"
          >
            ← Back to Pregnancy Guide
          </Link>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                item.status === "avoid"
                  ? "bg-[#FBEDED] text-[#B84A3D]"
                  : item.status === "watch"
                  ? "bg-[#FBF4E7] text-[#B07A26]"
                  : "bg-[#EDF5F0] text-[#4E8F68]"
              }`}
            >
              {item.statusLabel}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            Can you use {item.name} during pregnancy?
          </h1>
        </div>

        {/* Mandatory Physician Deferral Notice */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FBEDED] border border-[#B84A3D]/25 text-xs sm:text-sm text-[#554C43] space-y-1.5">
          <div className="flex items-center gap-2 font-serif text-base text-[#241E19]">
            <span>⚠️</span>
            <span>Medical Deferral Notice</span>
          </div>
          <p className="leading-relaxed">
            {item.deferralNotice} Cosmetic classifications are formulation
            flags to discuss with your healthcare provider, not medical clearance.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-8">
          <div className="space-y-3 pb-6 border-b border-[#EFE7DC]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Clinical Summary
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#241E19] leading-snug">
              {item.summary}
            </p>
          </div>

          {/* Pharmacology & Rationale */}
          <div className="space-y-3 pb-6 border-b border-[#EFE7DC]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Pharmacological Mechanism & Teratogenic Context
            </span>
            <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
              {item.pharmacology}
            </p>
          </div>

          {/* Aliases found on packaging */}
          <div className="space-y-3 pb-6 border-b border-[#EFE7DC]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Common INCI Names on Packaging
            </span>
            <div className="flex flex-wrap gap-2">
              {item.commonInci.map((alias) => (
                <span
                  key={alias}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F2EBE1] text-[#554C43] border border-[#EFE7DC]"
                >
                  {alias}
                </span>
              ))}
            </div>
          </div>

          {/* Safe Alternatives */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Permitted Alternatives During Pregnancy
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#554C43]">
              {item.alternatives.map((alt) => (
                <li key={alt} className="flex items-center gap-2">
                  <span className="text-[#4E8F68] font-bold">✓</span>
                  <span>{alt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cross-linking & Related Guides */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#241E19]">
            Related Pregnancy & Active Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href={`/ingredients/${item.slug}`}
              className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
            >
              <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                Active Profile
              </span>
              <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block">
                {item.name} INCI & Layering →
              </span>
            </Link>
            {PREGNANCY_INGREDIENTS.filter((i) => i.slug !== item.slug)
              .slice(0, 2)
              .map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/pregnancy/${rel.slug}`}
                  className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    {rel.statusLabel}
                  </span>
                  <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block">
                    {rel.name} Guide →
                  </span>
                </Link>
              ))}
          </div>
        </section>

        {/* App Store CTA */}
        <aside className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-serif text-xl text-[#241E19]">
              Audit your entire shelf with Miko Pregnancy Mode
            </h3>
            <p className="text-xs text-[#554C43] max-w-md">
              Miko scans your bottles, locks out contraindicated actives, and
              rebuilds your routine from what you already own.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
