import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PREGNANCY_INGREDIENTS } from "@/lib/data/pregnancyData";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro";

export const metadata = {
  title: "What Skincare to Avoid While Pregnant? | Miko",
  description:
    "Evidence-based cosmetic guide for pregnancy and nursing. Discover which ingredients are commonly paused, which alternatives are permitted, and doctor deferrals.",
  alternates: {
    canonical: "/pregnancy",
  },
  openGraph: {
    title: "What Skincare to Avoid While Pregnant? | Miko",
    description:
      "Evidence-based cosmetic guide for pregnancy and nursing. Discover which ingredients are commonly paused, which alternatives are permitted, and doctor deferrals.",
    url: `${baseUrl}/pregnancy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Skincare to Avoid While Pregnant? | Miko",
    description:
      "Evidence-based cosmetic guide for pregnancy and nursing. Discover which ingredients are commonly paused and permitted alternatives.",
  },
};

export default function PregnancyHubPage() {
  const pausedList = PREGNANCY_INGREDIENTS.filter(
    (i) => i.status === "avoid" || i.status === "watch"
  );
  const permittedList = PREGNANCY_INGREDIENTS.filter(
    (i) => i.status === "permitted"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "What Skincare to Avoid While Pregnant?",
        description:
          "Evidence-based cosmetic guide for pregnancy and nursing, tracking commonly paused actives and permitted alternatives.",
        url: `${baseUrl}/pregnancy`,
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
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: PREGNANCY_INGREDIENTS.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/pregnancy/${item.slug}`,
          name: `Can you use ${item.name} while pregnant?`,
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
            <span className="text-[#241E19]">Pregnancy Guide</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Pregnancy & Skincare.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Finding out you are pregnant shouldn&apos;t require throwing out your entire
            bathroom shelf. We explain which ingredients are commonly advised against,
            which are commonly permitted, and what alternatives to use.
          </p>
        </div>

        {/* Mandatory Medical Deferral Alert */}
        <div className="p-6 rounded-2xl bg-[#FBEDED] border border-[#B84A3D]/25 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <h3 className="font-serif text-lg text-[#241E19]">
              Mandatory Physician Deferral Notice
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
            Miko provides cosmetic formulation information, not medical clearance.
            Every pregnancy is unique.{" "}
            <strong className="text-[#241E19]">
              Always confirm anything medical with your doctor or OB-GYN.
            </strong>
          </p>
        </div>

        {/* Commonly Paused Ingredients */}
        <div className="space-y-6">
          <div className="border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Ingredients Commonly Advised Against
            </h2>
            <p className="text-xs font-mono text-[#7C7166] mt-1">
              Topical actives usually paused during gestation and lactation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pausedList.map((item) => (
              <Link
                key={item.slug}
                href={`/pregnancy/${item.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-xl text-[#241E19] group-hover:text-[#383028]">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FBEDED] text-[#B84A3D] px-2 py-0.5 rounded font-bold">
                      {item.statusLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#554C43] line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFE7DC] flex items-center justify-between text-xs font-mono text-[#7C7166]">
                  <span>Aliases: {item.commonInci.slice(0, 2).join(", ")}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    View Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Permitted & Recommended Alternatives */}
        <div className="space-y-6">
          <div className="border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Dermatologist-Favored Alternatives
            </h2>
            <p className="text-xs font-mono text-[#7C7166] mt-1">
              Gentle, non-systemic actives effective for gestational breakouts and hydration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {permittedList.map((item) => (
              <Link
                key={item.slug}
                href={`/pregnancy/${item.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-xl text-[#241E19] group-hover:text-[#383028]">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#EDF5F0] text-[#4E8F68] px-2 py-0.5 rounded font-bold">
                      {item.statusLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#554C43] line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFE7DC] flex items-center justify-between text-xs font-mono text-[#7C7166]">
                  <span>Aliases: {item.commonInci.slice(0, 2).join(", ")}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    View Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* How Miko Pregnancy Mode Works */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
            How Miko&apos;s Pregnancy Mode Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-[#554C43]">
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#241E19] block">
                1. Flip The Switch
              </span>
              <p>
                Activate Pregnancy Mode in settings. The app immediately scans all
                formulations on your shelf.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#241E19] block">
                2. Blocked Bottles Lock
              </span>
              <p>
                Retinoids and high-potency BHAs grey out with a lock icon, preventing
                accidental morning or evening application.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#241E19] block">
                3. Rebuilds From What You Own
              </span>
              <p>
                Your weekly schedule rebuilds strictly around what remains. Zero
                affiliate product pushes.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <AppStoreButton size="md" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
