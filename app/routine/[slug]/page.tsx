import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SKIN_TYPES_LIST, getSkinTypeRoutineBySlug } from "@/lib/data/skinTypes";
import { getActiveBySlug } from "@/lib/data/actives";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SKIN_TYPES_LIST.map((routine) => ({
    slug: routine.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const routine = getSkinTypeRoutineBySlug(slug);

  if (!routine) {
    return {
      title: "Skincare Routine Blueprint | Miko",
    };
  }

  return {
    title: routine.seoTitle,
    description: routine.description,
    alternates: {
      canonical: `/routine/${slug}`,
    },
    openGraph: {
      title: routine.seoTitle,
      description: routine.description,
      url: `${baseUrl}/routine/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: routine.seoTitle,
      description: routine.description,
    },
  };
}

export default async function SkinTypeRoutineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const routine = getSkinTypeRoutineBySlug(slug);

  if (!routine) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: routine.seoTitle,
        description: routine.description,
        step: [
          ...routine.amSteps.map((s, idx) => ({
            "@type": "HowToStep",
            position: idx + 1,
            name: `AM ${s.order}: ${s.category} (${s.productType})`,
            text: `${s.purpose} Recommended texture: ${s.texture}.`,
          })),
          ...routine.pmSteps.map((s, idx) => ({
            "@type": "HowToStep",
            position: routine.amSteps.length + idx + 1,
            name: `PM ${s.order}: ${s.category} (${s.productType})`,
            text: `${s.purpose} Recommended texture: ${s.texture}.`,
          })),
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
            name: "Routine",
            item: `${baseUrl}/routine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: routine.skinType,
            item: `${baseUrl}/routine/${routine.slug}`,
          },
        ],
      },
    ],
  };

  // Other skin types for cross-navigation
  const otherRoutines = SKIN_TYPES_LIST.filter((r) => r.slug !== routine.slug).slice(0, 3);

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
            <Link href="/routine" className="hover:text-[#241E19] transition-colors">
              Routine
            </Link>
            <span>/</span>
            <span className="text-[#241E19] truncate">{routine.skinType}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFE9E1] border border-[#E2DAD0] text-xs font-mono text-[#554C43]">
            <span>ROUTINE ARCHITECTURE BLUEPRINT</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            {routine.seoTitle.replace(" | Miko", "")}
          </h1>

          <p className="text-lg text-[#554C43] leading-relaxed">
            {routine.description}
          </p>
        </div>

        {/* Clinical Characteristics Box */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B8074]">
            <span className="w-2 h-2 rounded-full bg-[#8C6D53]" />
            PHYSIOLOGICAL PROFILE
          </div>
          <h2 className="font-serif text-2xl text-[#241E19]">
            Skin Type Characteristics
          </h2>
          <ul className="space-y-2 text-sm text-[#554C43]">
            {routine.characteristics.map((trait, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#8C6D53] font-mono text-xs mt-1">●</span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Texture Strategy */}
        <section className="p-6 rounded-2xl bg-[#EFE9E1] border border-[#E2DAD0] space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            FORMULATION VEHICLE RULES
          </span>
          <h3 className="font-serif text-xl text-[#241E19]">
            Optimal Texture Strategy
          </h3>
          <p className="text-sm text-[#554C43] leading-relaxed">
            {routine.textureStrategy}
          </p>
        </section>

        {/* Morning AM Routine */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
                DAYTIME DEFENSE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
                Morning (AM) Routine
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8B8074] bg-white px-3 py-1 rounded-full border border-[#E8E2D9] w-fit">
              {routine.amSteps.length} Steps
            </span>
          </div>

          <div className="space-y-4">
            {routine.amSteps.map((step) => (
              <div
                key={step.order}
                className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F4EFEA] border border-[#E8E2D9] text-[#7C7166]">
                      {step.order}
                    </span>
                    <h3 className="font-serif text-xl text-[#241E19]">
                      {step.productType}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#8C6D53]">
                    {step.category}
                  </span>
                </div>
                <p className="text-sm text-[#554C43] leading-relaxed">
                  {step.purpose}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#7C7166]">
                  <span>Texture recommendation:</span>
                  <span className="text-[#241E19]">{step.texture}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Midday Protocol */}
        <section className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
          <div className="text-xs font-mono text-[#8B8074]">MIDDAY GUIDELINE</div>
          <h3 className="font-serif text-xl text-[#241E19]">Midday Maintenance</h3>
          <p className="text-sm text-[#554C43] leading-relaxed">
            {routine.middayRule}
          </p>
        </section>

        {/* Evening PM Routine */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
                NOCTURNAL RESTORATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
                Evening (PM) Routine
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8B8074] bg-white px-3 py-1 rounded-full border border-[#E8E2D9] w-fit">
              {routine.pmSteps.length} Steps
            </span>
          </div>

          <div className="space-y-4">
            {routine.pmSteps.map((step) => (
              <div
                key={step.order}
                className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F4EFEA] border border-[#E8E2D9] text-[#7C7166]">
                      {step.order}
                    </span>
                    <h3 className="font-serif text-xl text-[#241E19]">
                      {step.productType}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#8C6D53]">
                    {step.category}
                  </span>
                </div>
                <p className="text-sm text-[#554C43] leading-relaxed">
                  {step.purpose}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#7C7166]">
                  <span>Texture recommendation:</span>
                  <span className="text-[#241E19]">{step.texture}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Active Cadence */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] space-y-3">
          <div className="text-xs font-mono text-[#8B8074]">FREQUENCY SCHEDULE</div>
          <h2 className="font-serif text-2xl text-[#241E19]">
            Weekly Active Ingredient Cadence
          </h2>
          <p className="text-sm sm:text-base text-[#554C43] leading-relaxed">
            {routine.weeklyActiveCadence}
          </p>
        </section>

        {/* Common Pitfalls to Avoid */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFBF7] border border-[#ECDCCB] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A0522D]">
              CRITICAL FORMULATION ERRORS
            </span>
            <h2 className="font-serif text-2xl text-[#241E19]">
              Common Pitfalls for {routine.skinType}
            </h2>
          </div>

          <div className="space-y-3">
            {routine.pitfallsToAvoid.map((pitfall, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 border border-[#ECDCCB] flex items-start gap-3"
              >
                <span className="text-[#8B0000] font-mono text-sm mt-0.5">✕</span>
                <span className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
                  {pitfall}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Actives Dossiers */}
        <section className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            KEY ACTIVES PROFILES
          </span>
          <h2 className="font-serif text-2xl text-[#241E19]">
            Compatible Actives for {routine.skinType}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {routine.recommendedActives.map((activeSlug) => {
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
                    Ingredient dossier →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Related Routines */}
        <section className="pt-8 border-t border-[#E8E2D9] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-[#241E19]">Explore Other Skin Types</h3>
            <Link
              href="/routine"
              className="text-xs font-mono text-[#7C7166] hover:text-[#241E19]"
            >
              View all 6 blueprints →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherRoutines.map((other) => (
              <Link
                key={other.id}
                href={`/routine/${other.slug}`}
                className="p-4 rounded-xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all group"
              >
                <div className="text-xs font-mono text-[#8B8074]">BLUEPRINT</div>
                <h4 className="font-medium text-sm text-[#241E19] group-hover:text-[#8C6D53] transition-colors">
                  {other.skinType}
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
              Audit your current products for {routine.skinType.toLowerCase()}.
            </h4>
            <p className="text-xs text-[#B8ADA0]">
              Detect pore-clogging lipids or harsh stripping detergents before layering.
            </p>
          </div>
          <AppStoreButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
