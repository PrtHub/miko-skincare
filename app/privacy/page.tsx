import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Privacy Policy: Zero Accounts, On-Device | Miko",
  description:
    "Privacy policy detailing Miko's local on-device SQLite architecture. No user accounts, no remote tracking database, and zero advertising trackers.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy: Zero Accounts, On-Device | Miko",
    description:
      "Privacy policy detailing Miko's local on-device SQLite architecture. No user accounts, no remote tracking database, and zero advertising trackers.",
    url: `${baseUrl}/privacy`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy: Zero Accounts, On-Device | Miko",
    description:
      "On-device SQLite architecture. No accounts, no database with your name on it.",
  },
};

export default function PrivacyPage() {
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
        name: "Privacy Policy",
        item: `${baseUrl}/privacy`,
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
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#7C7166]">
            Miko — Skincare Routine Builder · Effective 9 September 2026
          </p>
        </div>

        {/* Short Version Box */}
        <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-3 text-xs sm:text-sm text-[#554C43] leading-relaxed">
          <h3 className="font-serif text-base text-[#241E19]">The Short Version</h3>
          <p>
            Miko has no accounts and no user database. Your products, your routine,
            and everything you tell us about your skin are stored locally on your
            phone in an encrypted SQLite database and nowhere else.
          </p>
          <p>
            Two things leave your device, only when explicitly initiated by you:
          </p>
          <ol className="list-decimal pl-5 space-y-1 font-mono text-xs">
            <li>A photograph of a product label, sent to be read for ingredients.</li>
            <li>Your contextual product question sent to the Ask Miko assistant.</li>
          </ol>
          <p className="font-medium text-[#241E19]">
            Neither is stored on our servers. Your life-state answers (pregnancy,
            breastfeeding, isotretinoin) never cross the network at all.
          </p>
        </div>

        <div className="prose prose-stone text-xs sm:text-sm text-[#554C43] leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">1. There Is No Account</h2>
            <p>
              Miko has no sign-up, no login, and no remote profile. We do not ask
              for your name, email address, or phone number. There is no user table
              in any cloud infrastructure to store your identity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">2. Stored on Your Phone</h2>
            <p>
              Your shelf, product inventory, application order, sensitivity flags,
              and dosage estimates live exclusively on your device. If you delete
              the app, your local database is erased.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">3. The OCR Exception</h2>
            <p>
              When you capture a photograph of an ingredient label, the image is
              streamed over encrypted TLS to an OCR extraction service. The image is
              processed in memory, mapped into INCI chemical strings, and returned
              to your device. The image is not retained or associated with an identity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241E19]">4. Life-State Privacy Firewall</h2>
            <p>
              Your answers regarding pregnancy, lactation, oral medication, or recent
              procedures never cross the network. When formulating local recommendations,
              the phone sends a bare list of raw ingredients to exclude with no reason
              attached.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
