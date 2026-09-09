import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CONCERNS_LIST } from "@/lib/data/concerns";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Target Skin Concerns with Safe Actives | Miko",
  description:
    "Evidence-based active ingredient protocols for hyperpigmentation, clogged pores, damaged barriers, melasma, and facial redness.",
  alternates: {
    canonical: "/concerns",
  },
  openGraph: {
    title: "Target Skin Concerns with Safe Actives | Miko",
    description:
      "Evidence-based active ingredient protocols for hyperpigmentation, clogged pores, damaged barriers, melasma, and facial redness.",
    url: `${baseUrl}/concerns`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Target Skin Concerns with Safe Actives | Miko",
    description:
      "Biological active ingredient matching for 10 primary skin concerns from Miko.",
  },
};

export default function ConcernsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Target Skin Concerns with Safe Actives",
        description:
          "Evidence-based active ingredient protocols for hyperpigmentation, clogged pores, damaged barriers, melasma, and facial redness.",
        url: `${baseUrl}/concerns`,
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
            name: "Concerns",
            item: `${baseUrl}/concerns`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: CONCERNS_LIST.map((c, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/concerns/${c.slug}`,
          name: c.name,
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
            <span className="text-[#241E19]">Concerns</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFE9E1] border border-[#E2DAD0] text-xs font-mono text-[#554C43]">
            <span>CELLULAR MECHANISM DIRECTORY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Target skin concerns with evidence-based actives.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Every skin concern stems from a distinct cellular pathway: tyrosinase
            hyperactivity, retention hyperkeratosis, or lamellar lipid depletion.
            Discover validated actives that address the biological root cause.
          </p>
        </div>

        {/* Concerns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONCERNS_LIST.map((concern) => (
            <Link
              key={concern.id}
              href={`/concerns/${concern.slug}`}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8B8074]">
                    DOSSIER: {concern.slug.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#7C7166] group-hover:text-[#241E19] transition-colors">
                    Read protocol →
                  </span>
                </div>

                <h2 className="font-serif text-2xl text-[#241E19] group-hover:text-[#8C6D53] transition-colors">
                  {concern.name}
                </h2>

                <p className="text-sm text-[#554C43] leading-relaxed line-clamp-3">
                  {concern.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166] block mb-2">
                    Primary Actives:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {concern.primaryActives.map((act) => (
                      <span
                        key={act.activeSlug}
                        className="px-2 py-0.5 rounded bg-[#F4EFEA] border border-[#E8E2D9] text-xs font-mono text-[#3C342C]"
                      >
                        {act.activeName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7C7166]">
                <span className="italic">{concern.tagline}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Cross-linking and educational banner */}
        <div className="p-8 rounded-2xl bg-[#EFE9E1] border border-[#E2DAD0] space-y-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-2xl text-[#241E19]">
              Building a personalized active schedule?
            </h3>
            <p className="text-sm text-[#554C43] leading-relaxed">
              Applying effective actives in the wrong order or combining incompatible
              pH environments can trigger irritation before results occur. Cross-reference
              with our skin-type routine frameworks and conflict guides.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/routine"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              View Skin-Type Routines →
            </Link>
            <Link
              href="/guides/active-layering-protocol"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Layering Master Guide →
            </Link>
            <Link
              href="/can-i-use"
              className="px-4 py-2.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
            >
              Check Conflict Engine →
            </Link>
          </div>
        </div>

        {/* CTA section */}
        <div className="pt-8 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#241E19]">
              Audit your current shelf for conflicts.
            </h4>
            <p className="text-xs text-[#7C7166]">
              Deterministic safety checks running 100% on-device.
            </p>
          </div>
          <AppStoreButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
