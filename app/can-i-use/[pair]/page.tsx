import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LAYERING_RULES, getRuleByPairSlug } from "@/lib/data/layeringRules";
import { ACTIVES_LIST } from "@/lib/data/actives";
import { Badge } from "@/components/ui/Badge";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ pair: string }>;
}

export async function generateStaticParams() {
  return LAYERING_RULES.map((rule) => ({
    pair: rule.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { pair } = await params;
  const rule = getRuleByPairSlug(pair);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

  if (!rule) {
    const formatted = pair.replace(/-/g, " ");
    return {
      title: `Can I Use ${formatted}? | Miko`,
      description: `Compatibility, molecular interaction, and routine layering advice for ${formatted}.`,
      alternates: {
        canonical: `/can-i-use/${pair}`,
      },
    };
  }

  // Generate natural query phrasing from slug or rule
  const cleanNames = pair
    .split("-and-")
    .map((s) =>
      s
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    );
  const title = `Can I Use ${cleanNames[0]} and ${cleanNames[1]} Together? | Miko`;

  return {
    title,
    description: `${rule.headline}. Biological mechanisms, pH compatibility, and morning vs evening routine guidance.`,
    alternates: {
      canonical: `/can-i-use/${pair}`,
    },
    openGraph: {
      title,
      description: `${rule.headline}. Verified formulation compatibility from Miko.`,
      url: `${baseUrl}/can-i-use/${pair}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: rule.headline,
    },
  };
}

export default async function CanIUseDetailPage({ params }: PageProps) {
  const { pair } = await params;
  const rule = getRuleByPairSlug(pair);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

  // If not found in known rules, handle gracefully
  if (!rule) {
    const parts = pair.split("-and-");
    if (parts.length !== 2) {
      notFound();
    }

    const name1 = parts[0].replace(/-/g, " ");
    const name2 = parts[1].replace(/-/g, " ");

    const fallbackBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Can I Use",
          item: `${baseUrl}/can-i-use`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${name1} and ${name2}`,
          item: `${baseUrl}/can-i-use/${pair}`,
        },
      ],
    };

    return (
      <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fallbackBreadcrumb) }}
        />
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10">
          <div className="space-y-4">
            <Link
              href="/can-i-use"
              className="text-xs font-mono text-[#7C7166] hover:text-[#241E19] flex items-center gap-1.5"
            >
              ← Back to Compatibility Index
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#241E19] capitalize">
              Can I use {name1} and {name2} together?
            </h1>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-4">
            <Badge variant="mono">Tier 3 · No Specific Rule Documented</Badge>
            <h3 className="font-serif text-xl text-[#241E19]">
              We do not have a verified rule for this specific pairing.
            </h3>
            <p className="text-sm text-[#554C43] leading-relaxed">
              Miko does not fabricate confident answers. When two cosmetic actives
              lack peer-reviewed pharmacokinetic interaction studies, we tell you
              plainly. As a general rule of thumb, separate potent actives between
              your morning and evening routines if you experience redness or barrier
              stinging.
            </p>
          </div>

          <div className="text-center py-6 space-y-3">
            <p className="text-xs font-mono text-[#7C7166]">
              Audit your full product lineup in Miko:
            </p>
            <AppStoreButton size="md" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find linked ingredient pages if available
  const active1Match = ACTIVES_LIST.find((a) =>
    rule.active1.toLowerCase().includes(a.name.toLowerCase().split(" ")[0])
  );
  const active2Match = ACTIVES_LIST.find((a) =>
    rule.active2.toLowerCase().includes(a.name.toLowerCase().split(" ")[0])
  );

  // Other related pairings
  const relatedRules = LAYERING_RULES.filter((r) => r.slug !== rule.slug).slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Can I Use",
        item: `${baseUrl}/can-i-use`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${rule.active1} and ${rule.active2}`,
        item: `${baseUrl}/can-i-use/${rule.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Can I use ${rule.active1} and ${rule.active2} together?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${rule.headline}. ${rule.reasoning} Guidance: ${rule.guidance}`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/can-i-use" className="hover:text-[#241E19] transition-colors">
              Can I Use
            </Link>
            <span>/</span>
            <span className="text-[#241E19] truncate max-w-[200px]">
              {rule.active1.split(" ")[0]} + {rule.active2.split(" ")[0]}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Badge verdict={rule.verdict} variant="verdict">
              {rule.verdict === "fine" && "Compatible Pairing"}
              {rule.verdict === "separate" && "Separate Routines (AM/PM)"}
              {rule.verdict === "avoid" && "Avoid Concurrent Layering"}
            </Badge>

            {rule.isMythBuster && (
              <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#E0AE39]/20 text-[#8F6A17] px-2.5 py-1 rounded-full">
                Myth-Buster
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            Can I use {rule.active1} and {rule.active2} together?
          </h1>
        </nav>

        {/* Verdict Summary Box */}
        <article className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-6">
          <header className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              The Compatibility Verdict
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#241E19]">
              {rule.headline}
            </p>
          </header>

          {/* Myth Explanation if applicable */}
          {rule.mythExplanation && (
            <div className="p-4 rounded-2xl bg-[#FBEDED] border border-[#B84A3D]/20 text-xs text-[#554C43] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-[#B84A3D] tracking-wider block">
                The Historical Myth Explained
              </span>
              <p className="leading-relaxed">{rule.mythExplanation}</p>
            </div>
          )}

          {/* Biological Mechanism & Routine Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <section className="p-5 rounded-2xl bg-[#FBF7F2] border border-[#EFE7DC] space-y-2">
              <h2 className="font-mono text-[11px] uppercase text-[#7C7166] tracking-wider font-semibold">
                Pharmacological Mechanism
              </h2>
              <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
                {rule.reasoning}
              </p>
            </section>

            <section className="p-5 rounded-2xl bg-[#FBF7F2] border border-[#EFE7DC] space-y-2">
              <h2 className="font-mono text-[11px] uppercase text-[#7C7166] tracking-wider font-semibold">
                Miko Routine Guidance
              </h2>
              <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
                {rule.guidance}
              </p>
            </section>
          </div>

          {/* Internal Cross-Linking to Ingredient Profiles */}
          <div className="pt-4 border-t border-[#EFE7DC] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Explore Individual Active Profiles
            </span>
            <div className="flex flex-wrap gap-3">
              {active1Match && (
                <Link
                  href={`/ingredients/${active1Match.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAF6F0] border border-[#E8DFC8] text-[#241E19] hover:border-[#CBB8A1] transition-colors"
                >
                  <span>{active1Match.name} Profile →</span>
                </Link>
              )}
              {active2Match && (
                <Link
                  href={`/ingredients/${active2Match.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAF6F0] border border-[#E8DFC8] text-[#241E19] hover:border-[#CBB8A1] transition-colors"
                >
                  <span>{active2Match.name} Profile →</span>
                </Link>
              )}
            </div>
          </div>
        </article>

        {/* Related Pairings (Internal Linking) */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#241E19]">
            Other Verified Pairings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedRules.map((r) => (
              <Link
                key={r.slug}
                href={`/can-i-use/${r.slug}`}
                className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-2 group"
              >
                <span className="font-serif text-sm text-[#241E19] group-hover:text-[#383028] block">
                  {r.active1.split(" ")[0]} + {r.active2.split(" ")[0]}
                </span>
                <Badge verdict={r.verdict} variant="verdict">
                  {r.verdict}
                </Badge>
              </Link>
            ))}
          </div>
        </section>

        {/* Callout on How Miko Solves This Automatically */}
        <aside className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Never worry about ingredient compatibility again
            </h2>
            <p className="text-xs text-[#554C43] max-w-md leading-relaxed">
              Photograph any bottle to scan all 32 ingredients. Miko automatically
              slots your products into morning, midday, and evening without conflicts.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
