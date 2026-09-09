import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SENSITIVITIES_LIST } from "@/lib/data/sensitivities";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Common Skincare Sensitivities & Irritants | Miko",
  description:
    "Clinical dossiers on skincare irritants: fragrances, denatured alcohol, malassezia triggers, chemical sunscreen filters, and sulfate detergents.",
  alternates: {
    canonical: "/sensitivities",
  },
  openGraph: {
    title: "Common Skincare Sensitivities & Irritants | Miko",
    description:
      "Clinical dossiers on skincare irritants: fragrances, denatured alcohol, malassezia triggers, chemical sunscreen filters, and sulfate detergents.",
    url: `${baseUrl}/sensitivities`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Skincare Sensitivities & Irritants | Miko",
    description:
      "Biological contact sensitivity and irritant profiles from Miko.",
  },
};

export default function SensitivitiesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Common Skincare Sensitivities & Irritants",
        description:
          "Clinical dossiers on skincare irritants: fragrances, denatured alcohol, malassezia triggers, chemical sunscreen filters, and sulfate detergents.",
        url: `${baseUrl}/sensitivities`,
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
            name: "Sensitivities",
            item: `${baseUrl}/sensitivities`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: SENSITIVITIES_LIST.map((s, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/sensitivities/${s.slug}`,
          name: s.name,
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
            <span className="text-[#241E19]">Sensitivities</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFE9E1] border border-[#E2DAD0] text-xs font-mono text-[#554C43]">
            <span>CONTACT DERMATOLOGY DIRECTORY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Skincare sensitivities & contact irritants.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Persistent burning, breakouts, or flaking often stem from specific
            formulation vehicles rather than active ingredients. Identify common
            sensitizers, INCI aliases, and validated hypoallergenic alternatives.
          </p>
        </div>

        {/* Sensitivities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SENSITIVITIES_LIST.map((sens) => (
            <Link
              key={sens.id}
              href={`/sensitivities/${sens.slug}`}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8B8074]">
                    DOSSIER: {sens.slug.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#7C7166] group-hover:text-[#241E19] transition-colors">
                    Read analysis →
                  </span>
                </div>

                <h2 className="font-serif text-2xl text-[#241E19] group-hover:text-[#8C6D53] transition-colors">
                  {sens.name}
                </h2>

                <p className="text-sm text-[#554C43] leading-relaxed line-clamp-3">
                  {sens.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166] block">
                    Common INCI Aliases:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sens.commonInci.slice(0, 4).map((inci) => (
                      <span
                        key={inci}
                        className="px-2 py-0.5 rounded bg-[#F4EFEA] border border-[#E8E2D9] text-xs font-mono text-[#3C342C]"
                      >
                        {inci}
                      </span>
                    ))}
                    {sens.commonInci.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-[#F4EFEA] text-xs font-mono text-[#7C7166]">
                        +{sens.commonInci.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7C7166]">
                <span className="italic line-clamp-1">{sens.tagline}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Educational Cross-linking Callout */}
        <div className="p-8 rounded-2xl bg-[#EFE9E1] border border-[#E2DAD0] space-y-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-2xl text-[#241E19]">
              Distinguishing Irritation from an Active Allergic Response
            </h3>
            <p className="text-sm text-[#554C43] leading-relaxed">
              Irritant contact dermatitis occurs rapidly when an ingredient strips
              lipids or disrupts pH. Allergic contact dermatitis is a delayed
              T-cell-mediated reaction taking 24 to 72 hours to manifest. Both
              require eliminating offending formulations and restoring the lipid matrix.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides/how-to-restore-damaged-skin-barrier"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Barrier Repair Protocol →
            </Link>
            <Link
              href="/concerns/compromised-barrier"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Damaged Barrier Dossier →
            </Link>
            <Link
              href="/routine/sensitive-reactive-skin"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Sensitive Skin Blueprint →
            </Link>
          </div>
        </div>

        {/* CTA section */}
        <div className="pt-8 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#241E19]">
              Screen your skincare shelf for hidden irritants.
            </h4>
            <p className="text-xs text-[#7C7166]">
              Instantly flags fragrance terpenes, drying alcohols, and volatile extracts.
            </p>
          </div>
          <AppStoreButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
