import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GUIDES_LIST } from "@/lib/data/guides";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikocare.pro";

export const metadata = {
  title: "Evidence-Based Skincare Guides & Protocols | Miko",
  description:
    "Actionable step-by-step master guides for starting retinoids without stinging, auditing pregnancy shelves, and layering active serums.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Evidence-Based Skincare Guides & Protocols | Miko",
    description:
      "Actionable step-by-step master guides for starting retinoids without stinging, auditing pregnancy shelves, and layering active serums.",
    url: `${baseUrl}/guides`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence-Based Skincare Guides & Protocols | Miko",
    description:
      "Structured skincare protocols and master guides from Miko. Built for real routines.",
  },
};

export default function GuidesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Evidence-Based Skincare Guides & Protocols",
        description:
          "Actionable step-by-step master guides for starting retinoids, auditing pregnancy shelves, and layering active serums.",
        url: `${baseUrl}/guides`,
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
            name: "Guides",
            item: `${baseUrl}/guides`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: GUIDES_LIST.map((guide, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/guides/${guide.slug}`,
          name: guide.title,
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
            <span className="text-[#241E19]">Guides</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Evidence-based skincare master guides.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Deterministic step-by-step protocols designed around epidermal biology.
            No twenty-step routines — just structured schedules that protect your
            skin barrier.
          </p>
        </div>

        {/* Guides Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Protocols & Masterclasses
            </h2>
            <span className="text-xs font-mono text-[#7C7166]">
              {GUIDES_LIST.length} Guides Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDES_LIST.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7C7166]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E8DFC8] text-[#241E19]">
                      {guide.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#F2EBE1] px-2 py-0.5 rounded-md text-[11px]">
                        {guide.level}
                      </span>
                      <span>·</span>
                      <span>{guide.steps.length} Steps</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#241E19] group-hover:text-[#383028] transition-colors leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed line-clamp-3">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE7DC] flex items-center justify-between text-xs font-mono text-[#7C7166]">
                  <span>{guide.readTime}</span>
                  <span className="text-[#241E19] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Start Protocol →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Supporting Cross-Link to Application Order */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              The Canonical Foundation
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-[#241E19]">
              What order should you apply your products in?
            </h2>
            <p className="text-xs sm:text-sm text-[#554C43] max-w-md leading-relaxed">
              Read our foundational guide on the physiological rule of skincare
              layering: from thinnest aqueous fluids to thickest occlusive lipids.
            </p>
          </div>
          <Link
            href="/routine/application-order"
            className="px-5 py-2.5 rounded-full bg-[#241E19] text-[#FBF7F2] font-mono text-xs font-medium hover:bg-[#383028] transition-colors shrink-0"
          >
            Application Order Guide →
          </Link>
        </section>

        {/* App Store CTA */}
        <aside className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Let Miko build your weekly schedule automatically
            </h2>
            <p className="text-xs text-[#554C43] max-w-md leading-relaxed">
              Photograph your bottles. Miko determines viscosity, detects active
              conflicts, and organizes a 7-day schedule computed locally on your device.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
