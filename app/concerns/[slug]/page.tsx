import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CONCERNS_LIST, getConcernBySlug } from "@/lib/data/concerns";
import { getActiveBySlug } from "@/lib/data/actives";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONCERNS_LIST.map((concern) => ({
    slug: concern.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikocare.pro";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    return {
      title: "Skin Concern Protocol | Miko",
    };
  }

  return {
    title: concern.seoTitle,
    description: concern.description,
    alternates: {
      canonical: `/concerns/${slug}`,
    },
    openGraph: {
      title: concern.seoTitle,
      description: concern.description,
      url: `${baseUrl}/concerns/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: concern.seoTitle,
      description: concern.description,
    },
  };
}

export default async function ConcernDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: concern.name,
        description: concern.description,
        url: `${baseUrl}/concerns/${concern.slug}`,
        about: {
          "@type": "MedicalCondition",
          name: concern.name,
          possibleTreatment: concern.primaryActives.map((a) => ({
            "@type": "MedicalTherapy",
            name: a.activeName,
            description: a.mechanism,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: concern.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
            name: "Concerns",
            item: `${baseUrl}/concerns`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: concern.name,
            item: `${baseUrl}/concerns/${concern.slug}`,
          },
        ],
      },
    ],
  };

  // Other concerns for cross-navigation
  const otherConcerns = CONCERNS_LIST.filter((c) => c.slug !== concern.slug).slice(0, 3);

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
            <Link href="/concerns" className="hover:text-[#241E19] transition-colors">
              Concerns
            </Link>
            <span>/</span>
            <span className="text-[#241E19] truncate">{concern.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFE9E1] border border-[#E2DAD0] text-xs font-mono text-[#554C43]">
            <span>CLINICAL MECHANISM DOSSIER</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            {concern.name}
          </h1>

          <p className="text-lg text-[#554C43] leading-relaxed">
            {concern.description}
          </p>
        </div>

        {/* Biological Mechanism Box */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B8074]">
            <span className="w-2 h-2 rounded-full bg-[#8C6D53]" />
            UNDERLYING PATHOPHYSIOLOGY
          </div>
          <h2 className="font-serif text-2xl text-[#241E19]">
            Biological Mechanism
          </h2>
          <p className="text-sm sm:text-base text-[#554C43] leading-relaxed">
            {concern.biologicalMechanism}
          </p>
        </section>

        {/* Primary Actives */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
              FIRST-LINE EVIDENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
              Primary Recommended Actives
            </h2>
          </div>

          <div className="space-y-4">
            {concern.primaryActives.map((active) => {
              const activeData = getActiveBySlug(active.activeSlug);
              return (
                <div
                  key={active.activeSlug}
                  className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl text-[#241E19]">
                        {active.activeName}
                      </h3>
                      <span className="text-xs font-mono text-[#8C6D53]">
                        ROLE: {active.role}
                      </span>
                    </div>
                    {activeData && (
                      <Link
                        href={`/ingredients/${active.activeSlug}`}
                        className="inline-flex items-center text-xs font-mono text-[#554C43] hover:text-[#241E19] bg-[#F4EFEA] hover:bg-[#EFE9E1] px-3 py-1.5 rounded-lg border border-[#E8E2D9] transition-colors w-fit"
                      >
                        Ingredient profile →
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-[#554C43] leading-relaxed">
                    {active.mechanism}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Secondary Actives */}
        {concern.secondaryActives.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
                COMPLEMENTARY MODALITIES
              </span>
              <h2 className="font-serif text-2xl text-[#241E19]">
                Secondary & Supporting Actives
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {concern.secondaryActives.map((active) => {
                const activeData = getActiveBySlug(active.activeSlug);
                return (
                  <div
                    key={active.activeSlug}
                    className="p-5 rounded-2xl bg-white border border-[#E8E2D9] space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-lg text-[#241E19]">
                          {active.activeName}
                        </h3>
                        {activeData && (
                          <Link
                            href={`/ingredients/${active.activeSlug}`}
                            className="text-xs font-mono text-[#8B8074] hover:text-[#241E19]"
                          >
                            Profile →
                          </Link>
                        )}
                      </div>
                      <span className="text-xs font-mono text-[#7C7166] block mb-2">
                        {active.role}
                      </span>
                      <p className="text-xs text-[#554C43] leading-relaxed">
                        {active.mechanism}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Actives to Avoid */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFBF7] border border-[#ECDCCB] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A0522D]">
              CONTRAINDICATIONS & PITFALLS
            </span>
            <h2 className="font-serif text-2xl text-[#241E19]">
              Ingredients & Approaches to Avoid
            </h2>
          </div>

          <div className="space-y-4">
            {concern.activesToAvoid.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 border border-[#ECDCCB] space-y-1"
              >
                <div className="text-sm font-semibold text-[#8B0000]">
                  ✕ {item.ingredient}
                </div>
                <div className="text-xs text-[#554C43] leading-relaxed">
                  {item.reason}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Routine Strategy AM / PM */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
              CADENCE PROTOCOL
            </span>
            <h2 className="font-serif text-2xl text-[#241E19]">
              AM & PM Application Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
              <div className="text-xs font-mono text-[#8B8074]">MORNING (AM)</div>
              <h3 className="font-serif text-lg text-[#241E19]">Photoprotection & Defense</h3>
              <p className="text-sm text-[#554C43] leading-relaxed">
                {concern.amRoutineStrategy}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-2">
              <div className="text-xs font-mono text-[#8B8074]">EVENING (PM)</div>
              <h3 className="font-serif text-lg text-[#241E19]">Targeted Cellular Repair</h3>
              <p className="text-sm text-[#554C43] leading-relaxed">
                {concern.pmRoutineStrategy}
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {concern.faqs.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
                COMMON INQUIRIES
              </span>
              <h2 className="font-serif text-2xl text-[#241E19]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {concern.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-2"
                >
                  <h3 className="font-medium text-base text-[#241E19]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#554C43] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Active Pairs */}
        {concern.relatedPairs && concern.relatedPairs.length > 0 && (
          <section className="p-6 sm:p-8 rounded-2xl bg-[#EFE9E1] border border-[#E2DAD0] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
              CONFLICT & INTERACTION ENGINE
            </span>
            <h3 className="font-serif text-xl text-[#241E19]">
              Layering Pair Audits for This Concern
            </h3>
            <div className="flex flex-wrap gap-2">
              {concern.relatedPairs.map((pair) => (
                <Link
                  key={pair}
                  href={`/can-i-use/${pair}`}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#DDD5CA] text-xs font-mono text-[#241E19] hover:border-[#241E19] transition-colors"
                >
                  {pair.replace(/-/g, " ")} →
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other Concerns Navigation */}
        <section className="pt-8 border-t border-[#E8E2D9] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-[#241E19]">Explore Other Concerns</h3>
            <Link
              href="/concerns"
              className="text-xs font-mono text-[#7C7166] hover:text-[#241E19]"
            >
              View all {CONCERNS_LIST.length} concerns →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherConcerns.map((other) => (
              <Link
                key={other.id}
                href={`/concerns/${other.slug}`}
                className="p-4 rounded-xl bg-white border border-[#E8E2D9] hover:border-[#241E19]/30 transition-all group"
              >
                <div className="text-xs font-mono text-[#8B8074]">DOSSIER</div>
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
              Audit your routine for {concern.name.toLowerCase()}.
            </h4>
            <p className="text-xs text-[#B8ADA0]">
              Detect ingredient conflicts and inappropriate textures automatically.
            </p>
          </div>
          <AppStoreButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
