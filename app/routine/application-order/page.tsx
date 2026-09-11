import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro";

export const metadata = {
  title: "Skincare Routine Order: Thinnest to Thickest | Miko",
  description:
    "Scientific guide on the correct application order for skincare products. Why molecular weight and formulation vehicles dictate absorption.",
  alternates: {
    canonical: "/routine/application-order",
  },
  openGraph: {
    title: "Skincare Routine Order: Thinnest to Thickest | Miko",
    description:
      "Scientific guide on the correct application order for skincare products. Why molecular weight and formulation vehicles dictate absorption.",
    url: `${baseUrl}/routine/application-order`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skincare Routine Order: Thinnest to Thickest | Miko",
    description:
      "Scientific guide on the correct application order for skincare products from thinnest to thickest.",
  },
};

export default function ApplicationOrderPage() {
  const steps = [
    {
      step: "01",
      name: "Cleanser",
      texture: "Water-rinsed aqueous gel / balm",
      time: "AM & PM",
      why: "Removes sebum, desquamated cells, particulate pollution, and residual night products without stripping physiological intercellular lipids.",
    },
    {
      step: "02",
      name: "Aqueous Exfoliant or Toner",
      texture: "Water / watery liquid",
      time: "PM (alternate nights)",
      why: "Low-viscosity chemical exfoliants (AHA/BHA) require direct access to keratinocytes. If applied over creams, lipid films prevent cutaneous acid penetration.",
    },
    {
      step: "03",
      name: "Hydrating Essence",
      texture: "Light-slip aqueous fluid",
      time: "AM & PM",
      why: "Pre-hydrates the stratum corneum with humectants (polyols, beta-glucan, hyaluronic acid), expanding corneocytes to receive subsequent active compounds.",
    },
    {
      step: "04",
      name: "Targeted Active Serums",
      texture: "Viscous serum / light gel",
      time: "AM: Vitamin C · PM: Retinoids",
      why: "High-potency bioactives belong here. Pure L-ascorbic acid operates in the morning alongside UV defense; retinoids activate cellular turnover overnight.",
    },
    {
      step: "05",
      name: "Emulsion or Eye Contour",
      texture: "Light lotion",
      time: "AM / PM optional",
      why: "Transitional vehicle providing light lipid replenishment to delicate, sebaceous-poor areas without occluding active absorption.",
    },
    {
      step: "06",
      name: "Barrier Restoring Moisturizer",
      texture: "Rich lipid cream",
      time: "AM & PM",
      why: "Contains ceramides, cholesterol, and fatty acids that seal the epidermal surface, curbing transepidermal water loss (TEWL) and buffering micro-irritation.",
    },
    {
      step: "07",
      name: "Sunscreen (UV Defense)",
      texture: "Fluid / cream emulsion",
      time: "AM Strictly — Final Step",
      why: "UV filters must form an unbroken, undisturbed film across the outermost stratum corneum. Applying any cream or oil over sunscreen compromises UV shielding.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to Apply Skincare Products in the Correct Order",
        description:
          "Dermatological sequence for layering skincare formulations from thinnest aqueous fluids to thickest lipid creams.",
        step: steps.map((item, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: `${item.step}. ${item.name}`,
          text: `${item.why} Applied during ${item.time}. Texture: ${item.texture}.`,
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
            name: "Routine Order Guide",
            item: `${baseUrl}/routine/application-order`,
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
        {/* Navigation Breadcrumb */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#241E19]">Routine Order</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            What order should you put your skincare on in?
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            The cardinal rule of dermatological formulation is simple:{" "}
            <strong className="text-[#241E19] font-medium">
              from thinnest texture to thickest texture
            </strong>
            . Here is the biological science of why application order matters.
          </p>
        </div>

        {/* The Fundamental Principle Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            The Formulation Rule
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19]">
            Aqueous Solutions First, Occlusive Lipids Last.
          </h2>
          <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
            Formulations are vehicles engineered to deliver active molecules across
            the stratum corneum. Water-based serums have low viscosity and small
            droplet sizes. In contrast, moisturizers and oils contain occlusives
            (dimethicone, plant oils, squalane) that form hydrophobic films. If you
            apply a thick cream first, water-soluble actives cannot penetrate the lipid
            barrier and will simply evaporate or pill.
          </p>
        </div>

        {/* 7-Step Sequence */}
        <div className="space-y-6">
          <div className="border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              The Step-by-Step Sequence
            </h2>
            <p className="text-xs font-mono text-[#7C7166] mt-1">
              Deterministic ordering from packaging scan to bathroom shelf
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-white border border-[#EFE7DC] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#241E19] text-[#FBF7F2] font-mono text-xs flex items-center justify-center font-bold">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-xl text-[#241E19]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#554C43] leading-relaxed">
                    {item.why}
                  </p>
                </div>

                <div className="sm:text-right shrink-0 font-mono text-xs text-[#7C7166] space-y-1">
                  <span className="block text-[#241E19] font-medium">
                    {item.time}
                  </span>
                  <span className="block text-[11px]">{item.texture}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Midday Explanation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B07A26]" />
            <h2 className="font-serif text-2xl text-[#241E19]">
              Why Midday Exists in Miko
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
            Most routine apps force an artificial &ldquo;afternoon routine&rdquo; filled with
            extra face mists and unnecessary serums. Miko refuses to pad routines:{" "}
            <strong>Midday exists because &ldquo;reapply&rdquo; needs somewhere to live.</strong>{" "}
            It carries sunscreen only, and it remains empty for anyone without an SPF
            on their shelf.
          </p>
        </div>

        {/* Explore Related Guides & Utilities */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#241E19]">
            Explore Formulation Guides & Compatibility
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/can-i-use"
              className="p-5 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
            >
              <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                Conflict Engine
              </span>
              <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                Can I Use These Together? →
              </span>
              <p className="text-xs text-[#7C7166] leading-relaxed">
                Check molecular compatibility between active serums in your routine.
              </p>
            </Link>
            <Link
              href="/ingredients"
              className="p-5 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
            >
              <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                Active Catalog
              </span>
              <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                58 Actives Directory →
              </span>
              <p className="text-xs text-[#7C7166] leading-relaxed">
                Understand how direct acids, retinoids, and peptides behave on skin.
              </p>
            </Link>
            <Link
              href="/pregnancy"
              className="p-5 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
            >
              <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                Life-State Guidance
              </span>
              <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                Pregnancy Skincare Guide →
              </span>
              <p className="text-xs text-[#7C7166] leading-relaxed">
                Review commonly paused ingredients and permitted alternatives.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <aside className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Let Miko sort your bathroom shelf automatically
            </h2>
            <p className="text-xs text-[#554C43] max-w-md">
              Miko reads your bottle labels, identifies textures and chemistry families,
              and generates a 7-day schedule computed locally on your phone.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
