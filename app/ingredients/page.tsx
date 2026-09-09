import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ACTIVES_LIST } from "@/lib/data/actives";
import { Badge } from "@/components/ui/Badge";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Active Skincare Ingredients Directory | Miko",
  description:
    "Explore the active skincare ingredients tracked by Miko. Decoded into chemistry families with active color tokens, cutaneous functions, and layering rules.",
  alternates: {
    canonical: "/ingredients",
  },
  openGraph: {
    title: "Active Skincare Ingredients Directory | Miko",
    description:
      "Explore the active skincare ingredients tracked by Miko. Decoded into chemistry families with active color tokens, cutaneous functions, and layering rules.",
    url: `${baseUrl}/ingredients`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Active Skincare Ingredients Directory | Miko",
    description:
      "Explore active skincare ingredients tracked by Miko. Cutaneous functions, INCI names, and routine placement.",
  },
};

export default function IngredientsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Active Skincare Ingredients Directory",
        description:
          "Explore the active skincare ingredients tracked by Miko with cutaneous mechanisms, INCI aliases, and layering rules.",
        url: `${baseUrl}/ingredients`,
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
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: ACTIVES_LIST.map((active, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/ingredients/${active.slug}`,
          name: active.name,
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
        {/* Header & Breadcrumb */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#241E19]">Active Directory</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            The Ingredients Directory.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Miko tracks 58 active ingredients across 14 chemistry families. Every
            active carries its dedicated color token — because color is information,
            not decoration.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Active Chemistry Families
            </h2>
            <span className="text-xs font-mono text-[#7C7166]">
              {ACTIVES_LIST.length} Families Catalogued
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACTIVES_LIST.map((active) => (
              <Link
                key={active.slug}
                href={`/ingredients/${active.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge activeFamily={active.family} variant="active" dot>
                      {active.name}
                    </Badge>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] bg-[#F2EBE1] px-2 py-0.5 rounded">
                      {active.bestUsedIn} Slot
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#241E19] group-hover:text-[#383028] pt-1">
                    {active.name}
                  </h3>

                  <p className="text-xs text-[#554C43] line-clamp-2 leading-relaxed">
                    {active.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFE7DC] flex items-center justify-between text-xs font-mono text-[#7C7166]">
                  <span>Aliases: {active.commonInci.length}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    View Active →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] shadow-sm text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
            Scan any bottle to map its actives automatically
          </h2>
          <p className="text-xs sm:text-sm text-[#554C43] max-w-lg mx-auto leading-relaxed">
            Miko isolates the active compounds in your skincare formulas in seconds
            and flags potential conflicts with what you already use.
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
