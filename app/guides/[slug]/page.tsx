import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GUIDES_LIST, getGuideBySlug } from "@/lib/data/guides";
import { getActiveBySlug } from "@/lib/data/actives";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES_LIST.map((guide) => ({
    slug: guide.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikocare.pro";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Skincare Protocol Guide | Miko",
    };
  }

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      url: `${baseUrl}/guides/${slug}`,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle,
      description: guide.description,
    },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Related guides
  const otherGuides = GUIDES_LIST.filter((g) => g.slug !== guide.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: guide.title,
        description: guide.description,
        step: guide.steps.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: `${s.stepNumber}. ${s.title}`,
          text: `${s.instructions} Rationale: ${s.rationale} Timing: ${s.timing}.`,
        })),
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
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: `${baseUrl}/guides/${slug}`,
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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16">
        {/* Navigation Breadcrumb & Header */}
        <div className="space-y-4">
          <Link
            href="/guides"
            className="text-xs font-mono text-[#7C7166] hover:text-[#241E19] flex items-center gap-1.5 transition-colors"
          >
            ← Back to Guides Directory
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono text-[#7C7166]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E8DFC8] text-[#241E19] font-medium">
              {guide.category}
            </span>
            <span className="bg-[#F2EBE1] px-2 py-0.5 rounded-md text-[11px]">
              {guide.level}
            </span>
            <span>·</span>
            <span>{guide.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            {guide.title}
          </h1>

          <p className="text-sm sm:text-base text-[#554C43] leading-relaxed">
            {guide.summary}
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
            Core Protocol Rules
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-[#554C43] leading-relaxed">
            {guide.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#4E8F68] font-bold shrink-0">✓</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step-by-Step Sequence */}
        <section className="space-y-6">
          <div className="border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
              The Step-by-Step Protocol
            </h2>
            <p className="text-xs font-mono text-[#7C7166] mt-1">
              Follow sequentially in your morning or evening routine slots
            </p>
          </div>

          <div className="space-y-6">
            {guide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-2xs space-y-4"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#241E19] text-[#FBF7F2] font-mono text-xs font-bold flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#241E19]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF6F0] border border-[#E8DFC8] text-[#554C43]">
                    {step.timing}
                  </span>
                </div>

                <p className="text-sm text-[#241E19] leading-relaxed">
                  {step.instructions}
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF6F0]/60 border border-[#EFE7DC] space-y-1.5 text-xs text-[#554C43] leading-relaxed">
                  <span className="font-mono font-bold uppercase tracking-wider text-[10px] text-[#7C7166] block">
                    Cutaneous Rationale
                  </span>
                  <p>{step.rationale}</p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-[#EFE7DC] text-xs font-mono text-[#7C7166]">
                  <span>
                    Textures: {step.recommendedTextures.join(", ")}
                  </span>
                  {step.watchOutFor && (
                    <span className="text-[#B07A26]">
                      ⚠️ {step.watchOutFor}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#FBEDED]/40 border border-[#B84A3D]/25 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <h2 className="font-serif text-xl text-[#241E19]">
              Common Mistakes to Avoid
            </h2>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#554C43] leading-relaxed">
            {guide.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#B84A3D] font-bold shrink-0">✕</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cross-Linking: Related Actives & Pairs */}
        {((guide.recommendedActives && guide.recommendedActives.length > 0) ||
          (guide.relatedPairs && guide.relatedPairs.length > 0)) && (
          <section className="space-y-4 pt-4 border-t border-[#EFE7DC]">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Relevant Actives & Conflict Checks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {guide.recommendedActives?.map((slug) => {
                const active = getActiveBySlug(slug);
                if (!active) return null;
                return (
                  <Link
                    key={slug}
                    href={`/ingredients/${active.slug}`}
                    className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                  >
                    <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                      Active Dossier
                    </span>
                    <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block">
                      {active.name} →
                    </span>
                  </Link>
                );
              })}
              {guide.relatedPairs?.map((pairSlug) => (
                <Link
                  key={pairSlug}
                  href={`/can-i-use/${pairSlug}`}
                  className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    Pairing Rule
                  </span>
                  <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block capitalize">
                    {pairSlug.replace(/-/g, " ")} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other Guides Carousel/Grid */}
        {otherGuides.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-[#EFE7DC]">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Explore Other Master Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-2 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    {g.category} · {g.steps.length} Steps
                  </span>
                  <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                    {g.title} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Automate your routine schedule in Miko
            </h2>
            <p className="text-xs text-[#554C43] max-w-md leading-relaxed">
              Miko reads your bottle labels and organizes an optimal 7-day schedule,
              spacing direct acids and retinoids without overlapping irritation.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
