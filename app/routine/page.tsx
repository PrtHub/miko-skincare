import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SKIN_TYPES_LIST } from "@/lib/data/skinTypes";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikocare.pro";

export const metadata = {
  title: "Skincare Routine by Skin Type: AM & PM Guides | Miko",
  description:
    "Evidence-based AM and PM routine blueprints for normal, oily, dry, sensitive, combination, acne-prone, and mature skin types.",
  alternates: {
    canonical: "/routine",
  },
  openGraph: {
    title: "Skincare Routine by Skin Type: AM & PM Guides | Miko",
    description:
      "Evidence-based AM and PM routine blueprints for normal, oily, dry, sensitive, combination, acne-prone, and mature skin types.",
    url: `${baseUrl}/routine`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skincare Routine by Skin Type: AM & PM Guides | Miko",
    description:
      "Step-by-step skincare routine frameworks organized by physiological skin type from Miko.",
  },
};

export default function RoutineHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Skincare Routine by Skin Type: AM & PM Guides",
        description:
          "Evidence-based AM and PM routine blueprints for normal, oily, dry, sensitive, combination, acne-prone, and mature skin types.",
        url: `${baseUrl}/routine`,
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
            name: "Routine",
            item: `${baseUrl}/routine`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: SKIN_TYPES_LIST.map((r, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/routine/${r.slug}`,
          name: r.skinType,
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
            <span className="text-[#241E19]">Routine</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFE9E1] border border-[#E2DAD0] text-xs font-mono text-[#554C43]">
            <span>PHYSIOLOGICAL BLUEPRINTS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Skincare routine blueprints by skin type.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Effective skincare follows physiological lipid production and barrier
            thickness. Select your skin type for a structured AM, Midday, and PM
            framework built to prevent active overload.
          </p>
        </div>

        {/* Featured Master Guide */}
        <Link
          href="/routine/application-order"
          className="group block p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all hover:shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-[#8C6D53]">
                CORE FOUNDATION GUIDE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19] group-hover:text-[#8C6D53] transition-colors">
                How to Layer Skincare: Proper Application Order
              </h2>
              <p className="text-sm text-[#554C43] leading-relaxed">
                The universal viscosity and pH rule: water before oil, thin before thick,
                and low-pH actives before neutralizing moisturizers.
              </p>
            </div>
            <span className="text-xs font-mono text-[#241E19] px-4 py-2 rounded-lg bg-[#F4EFEA] border border-[#E8E2D9] self-start sm:self-center shrink-0">
              Read order guide →
            </span>
          </div>
        </Link>

        {/* Skin Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKIN_TYPES_LIST.map((routine) => (
            <Link
              key={routine.id}
              href={`/routine/${routine.slug}`}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8B8074]">
                    BLUEPRINT: {routine.slug.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#7C7166] group-hover:text-[#241E19] transition-colors">
                    View schedule →
                  </span>
                </div>

                <h2 className="font-serif text-2xl text-[#241E19] group-hover:text-[#8C6D53] transition-colors">
                  {routine.skinType}
                </h2>

                <p className="text-sm text-[#554C43] leading-relaxed line-clamp-3">
                  {routine.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166] block">
                    Recommended Actives:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {routine.recommendedActives.map((act) => (
                      <span
                        key={act}
                        className="px-2 py-0.5 rounded bg-[#F4EFEA] border border-[#E8E2D9] text-xs font-mono text-[#3C342C]"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7C7166]">
                <span className="italic">{routine.tagline}</span>
                <span className="font-mono text-[11px]">{routine.amSteps.length} AM / {routine.pmSteps.length} PM steps</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Cross-linking Section */}
        <div className="p-8 rounded-2xl bg-[#EFE9E1] border border-[#E2DAD0] space-y-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-2xl text-[#241E19]">
              Cross-reference by concern and contact sensitivities
            </h3>
            <p className="text-sm text-[#554C43] leading-relaxed">
              Every skin type can experience hyperpigmentation, barrier impairment,
              or contact reactions to fragrances and drying alcohols. Review our
              targeted catalogs.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/concerns"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Skin Concerns Catalog →
            </Link>
            <Link
              href="/sensitivities"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Sensitivities & Irritants →
            </Link>
            <Link
              href="/pregnancy"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Pregnancy Actives Audit →
            </Link>
          </div>
        </div>

        {/* CTA section */}
        <div className="pt-8 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#241E19]">
              Map your physical shelf to your skin type.
            </h4>
            <p className="text-xs text-[#7C7166]">
              Instant conflict detection and step-by-step slot allocations.
            </p>
          </div>
          <AppStoreButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
