import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Terms of Use | Miko Skincare",
  description:
    "Terms of use and auto-renewable subscription conditions for the Miko skincare routine builder iOS application.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | Miko Skincare",
    description:
      "Terms of use and auto-renewable subscription conditions for the Miko skincare routine builder iOS application.",
    url: `${baseUrl}/terms`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Miko Skincare",
    description:
      "Terms of use and subscription conditions for the Miko skincare application.",
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
        name: "Terms of Use",
        item: `${baseUrl}/terms`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="space-y-3 border-b border-[#EFE7DC] pb-6">
          <Link
            href="/"
            className="text-xs font-mono text-[#7C7166] hover:text-[#241E19] flex items-center gap-1.5"
          >
            ← Back to Home
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#241E19]">
            Terms of Use
          </h1>
          <p className="text-xs font-mono text-[#7C7166]">
            Miko — Skincare Routine Builder · Last updated: 9 September 2026
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFC8] text-xs text-[#554C43] leading-relaxed">
          <strong>Important Medical Notice:</strong> Miko provides cosmetic ingredient
          information and routine organization. It is not a medical diagnosis,
          prescription, or substitute for a qualified dermatologist. Always confirm
          medical questions with a physician.
        </div>

        <div className="prose prose-stone text-xs sm:text-sm text-[#554C43] leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">1. Agreement</h2>
            <p>
              These terms govern your use of the Miko application. By downloading,
              installing, or using Miko, you agree to these terms. Apple&apos;s
              standard Licensed Application End User Licence Agreement (EULA) also
              applies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">2. What Miko Is and Is Not</h2>
            <p>
              Miko reads cosmetic ingredient lists from photographs or manual inputs,
              categorizes actives according to published literature, and schedules
              products in application order.
            </p>
            <p>
              <strong>What it is not:</strong> Medical advice, a cure, or a safety
              guarantee. Cosmetic ingredients can cause unforeseen contact dermatitis
              or allergic sensitization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">3. Subscriptions & Billing</h2>
            <p>
              Miko requires an active auto-renewing subscription. There is no free tier.
              Prices: US$49.99/year (billed annually) or US$7.99/week (billed weekly).
            </p>
            <p>
              <strong>Auto-Renewal:</strong> Subscriptions renew automatically
              unless cancelled at least 24 hours prior to the conclusion of the
              current billing period. Manage subscriptions directly in Apple ID settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">4. Medical Deferral Clause</h2>
            <p>
              Life-state features (such as Pregnancy, Breastfeeding, Isotretinoin,
              and Post-procedure modes) are cosmetic organizational tools. They do
              not constitute medical clearance. Consult your doctor or OB-GYN
              regarding any substance used during pregnancy or clinical treatment.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
