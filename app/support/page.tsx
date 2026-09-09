import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export const metadata = {
  title: "Support & Subscription Help | Miko Skincare",
  description:
    "Need help with Miko? Instructions for managing Apple ID subscriptions, label camera scanning tips, and contacting support.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support & Subscription Help | Miko Skincare",
    description:
      "Need help with Miko? Instructions for managing Apple ID subscriptions, label camera scanning tips, and contacting support.",
    url: `${baseUrl}/support`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support & Subscription Help | Miko Skincare",
    description:
      "Need help with Miko? Instructions for managing Apple ID subscriptions, label camera scanning tips, and contacting support.",
  },
};

export default function SupportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: "Miko Support & Subscription Help",
        description:
          "Guides and answers for managing your Miko subscription and troubleshooting scanning.",
        url: `${baseUrl}/support`,
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
            name: "Support",
            item: `${baseUrl}/support`,
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
            <span className="text-[#241E19]">Support</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Help & Support.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Everything you need to manage your subscription, optimize label scanning,
            and understand how Miko stores your data.
          </p>
        </div>

        {/* Support Grid */}
        <div className="space-y-12">
          {/* Section 1: Subscriptions & Cancellation */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-6">
            <div className="space-y-2 pb-4 border-b border-[#EFE7DC]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
                Billing & Account
              </span>
              <h2 className="font-serif text-2xl text-[#241E19]">
                Managing or Cancelling Your Subscription
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#554C43] leading-relaxed">
              <p>
                Miko is billed directly through Apple In-App Purchases. We do not
                collect or store your credit card details, and there are no web accounts.
              </p>
              <p>
                <strong>To cancel or change your plan:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 font-mono text-xs text-[#241E19]">
                <li>Open the <strong>Settings</strong> app on your iPhone or iPad.</li>
                <li>Tap your <strong>Apple ID name / profile</strong> at the top.</li>
                <li>Tap <strong>Subscriptions</strong>.</li>
                <li>Select <strong>Miko</strong> from your list.</li>
                <li>Tap <strong>Cancel Subscription</strong>.</li>
              </ol>
              <p className="text-xs text-[#7C7166] pt-2">
                Deleting the app does not automatically cancel a subscription. Subscriptions
                renew automatically unless cancelled at least 24 hours prior to the end
                of the current billing cycle.
              </p>
            </div>
          </div>

          {/* Section 2: Scanning Tips */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-6">
            <div className="space-y-2 pb-4 border-b border-[#EFE7DC]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
                Camera & OCR
              </span>
              <h2 className="font-serif text-2xl text-[#241E19]">
                Tips for Photographing Packaging Labels
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#554C43] leading-relaxed">
              <p>
                Miko uses optical character recognition to isolate chemical INCI
                strings printed in tiny 6-point type. To get an instant, error-free read:
              </p>
              <ul className="space-y-2 text-xs text-[#554C43]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4E8F68] font-bold">✓</span>
                  <span><strong>Aim at the back label:</strong> Target the section titled &ldquo;Ingredients&rdquo; or &ldquo;Ingrédients&rdquo;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E8F68] font-bold">✓</span>
                  <span><strong>Flatten curved bottles:</strong> On cylindrical bottles, rotate slightly to frame the middle lines first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E8F68] font-bold">✓</span>
                  <span><strong>Avoid glare:</strong> Diffuse lighting works best. Tilt shiny foil bottles away from direct ceiling lamps.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Data Deletion & Privacy */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-6">
            <div className="space-y-2 pb-4 border-b border-[#EFE7DC]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
                Data Privacy
              </span>
              <h2 className="font-serif text-2xl text-[#241E19]">
                Exporting or Deleting Your Local Data
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#554C43] leading-relaxed">
              <p>
                All your shelf products, routine assignments, and declared sensitivities
                reside in a local SQLite database on your device. We have no remote
                copy of your database.
              </p>
              <p>
                <strong>To delete all data:</strong> Simply delete the Miko application
                from your home screen. iOS will immediately purge the application&apos;s
                local sandboxed database.
              </p>
            </div>
          </div>

          {/* Direct Contact Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-4 text-center sm:text-left">
            <h3 className="font-serif text-2xl text-[#241E19]">
              Still have a question?
            </h3>
            <p className="text-xs sm:text-sm text-[#554C43] max-w-lg leading-relaxed">
              Our engineering and dermatological reference team is available by email.
              We respond to inquiries within 24–48 hours.
            </p>
            <div className="pt-2">
              <a
                href="mailto:support@miko-skincare.app"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#241E19] text-[#FBF7F2] font-mono text-xs hover:bg-[#383028] transition-colors"
              >
                <span>Email Support → support@miko-skincare.app</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
