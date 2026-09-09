import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SENSITIVITIES_LIST, getSensitivityBySlug } from "@/lib/data/sensitivities";
import { getActiveBySlug } from "@/lib/data/actives";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SENSITIVITIES_LIST.map((sens) => ({
    slug: sens.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sens = getSensitivityBySlug(slug);

  if (!sens) {
    return {
      title: "Skincare Sensitivity Dossier | Miko",
    };
  }

  return {
    title: sens.seoTitle,
    description: sens.description,
    alternates: {
      canonical: `/sensitivities/${slug}`,
    },
    openGraph: {
      title: sens.seoTitle,
      description: sens.description,
      url: `${baseUrl}/sensitivities/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: sens.seoTitle,
      description: sens.description,
    },
  };
}

export default async function SensitivityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sens = getSensitivityBySlug(slug);

  if (!sens) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: sens.name,
        description: sens.description,
        url: `${baseUrl}/sensitivities/${sens.slug}`,
        about: {
          "@type": "MedicalCondition",
          name: `${sens.name} Sensitivity`,
          signOrSymptom: sens.reactionSymptoms.map((sym) => ({
            "@type": "MedicalSignOrSymptom",
            name: sym,
          })),
        },
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
          {
            "@type": "ListItem",
            position: 3,
            name: sens.name,
            item: `${baseUrl}/sensitivities/${sens.slug}`,
          },
        ],
      },
    ],
  };

  // Other sensitivities for cross-navigation
  const otherSens = SENSITIVITIES_LIST.filter((s) => s.slug !== sens.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/sensitivities" className="hover:text-[#241E19] transition-colors">
              Sensitivities
            </Link>
            <span>/</span>
            <span className="text-[#241E19] truncate">{sens.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFE9E1] border border-[#E2DAD0] text-xs font-mono text-[#554C43]">
            <span>CONTACT DERMATOLOGY DOSSIER</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            {sens.seoTitle.replace(" | Miko", "")}
          </h1>

          <p className="text-lg text-[#554C43] leading-relaxed">
            {sens.description}
          </p>
        </div>

        {/* Common INCI Declaration Table */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B8074]">
            <span className="w-2 h-2 rounded-full bg-[#8C6D53]" />
            INGREDIENT LABEL DECLARATIONS
          </div>
          <h2 className="font-serif text-2xl text-[#241E19]">
            Common INCI Names on Packaging
          </h2>
          <p className="text-xs text-[#7C7166]">
            These ingredients represent primary triggers associated with this sensitivity class:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {sens.commonInci.map((inci) => (
              <div
                key={inci}
                className="px-3.5 py-2 rounded-lg bg-[#FBF7F2] border border-[#E8E2D9] font-mono text-xs text-[#241E19]"
              >
                {inci}
              </div>
            ))}
          </div>
        </section>

        {/* Biological Mechanism Box */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B8074]">
            <span className="w-2 h-2 rounded-full bg-[#8C6D53]" />
            CELLULAR PATHOLOGY
          </div>
          <h2 className="font-serif text-2xl text-[#241E19]">
            Biological Mechanism of Irritation
          </h2>
          <p className="text-sm sm:text-base text-[#554C43] leading-relaxed">
            {sens.biologicalMechanism}
          </p>
        </section>

        {/* Clinical Symptoms */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFBF7] border border-[#ECDCCB] space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A0522D]">
              DIAGNOSTIC CRITERIA
            </span>
            <h2 className="font-serif text-2xl text-[#241E19]">
              Common Cutaneous Reaction Symptoms
            </h2>
          </div>

          <ul className="space-y-2.5 text-sm text-[#554C43]">
            {sens.reactionSymptoms.map((sym, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#8B0000] font-mono text-xs mt-1">✕</span>
                <span>{sym}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tolerated Alternatives */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
              HYPOALLERGENIC REPLACEMENTS
            </span>
            <h2 className="font-serif text-2xl text-[#241E19]">
              Tolerated & Non-Sensitizing Alternatives
            </h2>
          </div>

          <div className="space-y-3 pt-2">
            {sens.toleratedAlternatives.map((alt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E8E2D9] flex items-start gap-3"
              >
                <span className="text-[#4A6741] font-mono text-sm mt-0.5">✓</span>
                <span className="text-xs sm:text-sm text-[#3C342C] leading-relaxed">
                  {alt}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pharmacist Label Reading Tip */}
        <section className="p-6 rounded-2xl bg-[#EFE9E1] border border-[#E2DAD0] space-y-2">
          <div className="text-xs font-mono text-[#8B8074]">
            PHARMACEUTICAL LABEL AUDITING
          </div>
          <h3 className="font-serif text-xl text-[#241E19]">
            How to Read Product Labels for This Class
          </h3>
          <p className="text-sm text-[#554C43] leading-relaxed">
            {sens.labelReadingTip}
          </p>
        </section>

        {/* Related Soothing Actives */}
        {sens.relatedActives && sens.relatedActives.length > 0 && (
          <section className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
              CALMING & REPARATIVE INGREDIENTS
            </span>
            <h2 className="font-serif text-2xl text-[#241E19]">
              Supportive Actives for Sensitized Skin
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sens.relatedActives.map((activeSlug) => {
                const active = getActiveBySlug(activeSlug);
                return (
                  <Link
                    key={activeSlug}
                    href={`/ingredients/${activeSlug}`}
                    className="p-4 rounded-xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all text-center group"
                  >
                    <div className="font-serif text-base text-[#241E19] group-hover:text-[#8C6D53] transition-colors">
                      {active ? active.name : activeSlug}
                    </div>
                    <span className="text-[11px] font-mono text-[#7C7166] block mt-1">
                      Ingredient profile →
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Sensitivities Navigation */}
        <section className="pt-8 border-t border-[#E8E2D9] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-[#241E19]">Explore Other Sensitivities</h3>
            <Link
              href="/sensitivities"
              className="text-xs font-mono text-[#7C7166] hover:text-[#241E19]"
            >
              View all 6 dossiers →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherSens.map((other) => (
              <Link
                key={other.id}
                href={`/sensitivities/${other.slug}`}
                className="p-4 rounded-xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all group"
              >
                <div className="text-xs font-mono text-[#8B8074]">SENSITIVITY</div>
                <h4 className="font-medium text-sm text-[#241E19] group-hover:text-[#8C6D53] transition-colors line-clamp-1">
                  {other.name}
                </h4>
                <p className="text-xs text-[#7C7166] line-clamp-2 mt-1">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* App CTA */}
        <div className="p-8 rounded-2xl bg-[#241E19] text-[#FBF7F2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-2xl">
              Screen your products for {sens.name.toLowerCase()}.
            </h4>
            <p className="text-xs text-[#B8ADA0]">
              Instant local INCI scanning with zero cloud transmission.
            </p>
          </div>
          <AppStoreButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
