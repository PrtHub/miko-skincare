import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro";

export const metadata = {
  title: "Privacy Policy: Zero Accounts, On-Device | Miko",
  description:
    "Privacy policy detailing Miko's local on-device SQLite architecture. No user accounts, ephemeral OCR processing, and zero advertising trackers.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy: Zero Accounts, On-Device | Miko",
    description:
      "Privacy policy detailing Miko's local on-device SQLite architecture. No user accounts, ephemeral OCR processing, and zero advertising trackers.",
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
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
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
            Miko — Skincare Routine Builder · Last updated: 10 September 2026
          </p>
        </div>

        {/* The Short Version Box */}
        <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-4 text-xs sm:text-sm text-[#554C43] leading-relaxed">
          <h3 className="font-serif text-base text-[#241E19] font-semibold">
            The Short Version
          </h3>
          <p>
            Miko has no user accounts and no remote database. Your shelf, routine,
            notes, and answers about your skin are stored in an encrypted local
            database on your phone and nowhere else. We could not identify you if we
            were asked to.
          </p>
          <div className="space-y-2">
            <p className="font-medium text-[#241E19]">
              Two things leave your device when you ask for them:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                <strong>A photograph of a product label:</strong> Sent over encrypted
                TLS to parse ingredients, processed in memory, and never retained.
              </li>
              <li>
                <strong>Your skin profile and the active formula:</strong> Sent to
                generate conversational answers in Ask Miko.
              </li>
            </ol>
          </div>
          <div className="space-y-2 pt-1 border-t border-[#E8DFC8]">
            <p>
              <strong>What leaves automatically:</strong> Scoped telemetry recording
              the set-up funnel screens you reach and the subscription plan tapped
              (screen names and plan IDs only—never your clinical answers, no IDFA, and
              no location tracking).
            </p>
            <p className="font-semibold text-[#241E19]">
              Your life-state status (pregnancy, breastfeeding, isotretinoin, or
              post-procedure) NEVER leaves your phone in any flow.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#554C43] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">1. Who We Are</h2>
            <p>
              Miko is developed and operated as an independent private utility. For the
              purposes of the UK GDPR and EU GDPR, we act as the data controller for the
              narrow, ephemeral transmissions described in §4.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">2. There Is No Account</h2>
            <p>
              Miko has no sign-up, no login, and no server-side record of your identity.
              We do not ask for your name, email address, phone number, or social
              accounts, and our infrastructure contains no user table.
            </p>
            <p>
              This is architectural rather than a policy preference: there is simply no
              central server to store your profile.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              3. What Is Stored Locally on Your Device
            </h2>
            <p>
              All personal configuration lives in a local SQLite database on your device
              and is never transmitted to our servers:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-[#EFE7DC] rounded-xl bg-white text-xs">
                <thead>
                  <tr className="bg-[#FAF6F0] border-b border-[#EFE7DC] text-[#241E19] font-mono">
                    <th className="p-3">Category</th>
                    <th className="p-3">Data Stored Locally</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DC]">
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Your Shelf</td>
                    <td className="p-3">
                      Products added, date added, container volume, finished status.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Your Scans</td>
                    <td className="p-3">
                      Photographed label extracts and extracted INCI ingredient lists.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Your Routine</td>
                    <td className="p-3">
                      7-day AM/PM schedule, slot order, and custom application times.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Skin Profile</td>
                    <td className="p-3">
                      Skin type, concerns, sensitivities, observed reactions, climate,
                      age bracket, shaving habits.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Life-State</td>
                    <td className="p-3 font-medium text-[#241E19]">
                      Pregnancy, lactation, oral isotretinoin, post-procedure status.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Ask Miko Chats</td>
                    <td className="p-3">
                      Historical chat messages with the formulation assistant.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Cached Reads</td>
                    <td className="p-3">
                      Locally cached evaluations allowing immediate offline access.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl text-[#241E19]">
              4. What Leaves Your Device
            </h2>
            <p>
              Outbound network transmissions are strictly constrained to necessary
              ephemeral computations:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
                <h3 className="font-serif text-sm font-semibold text-[#241E19]">
                  4a. Label Photographs (OCR Extraction)
                </h3>
                <p>
                  When you photograph an ingredient list, the image is transmitted over
                  TLS 1.3 to our OCR processing service. It is processed entirely in
                  volatile memory to parse the INCI text and discarded immediately. It
                  is not linked to your identity or stored on disk.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
                <h3 className="font-serif text-sm font-semibold text-[#241E19]">
                  4b. Ask Miko Consultations
                </h3>
                <p>
                  When initiating a query in Ask Miko, your query text and relevant
                  formula context are transmitted to generate an answer. No personal
                  identifying information is attached. Crucially, your life-state status
                  is pre-filtered locally and never transmitted.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
                <h3 className="font-serif text-sm font-semibold text-[#241E19]">
                  4c. Subscription Processing (RevenueCat & Apple StoreKit)
                </h3>
                <p>
                  In-app purchases are handled through Apple StoreKit and verified via
                  RevenueCat using an anonymous App User ID. We do not transmit or
                  collect your name, credit card details, or email address.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] space-y-1.5">
                <h3 className="font-serif text-sm font-semibold text-[#241E19]">
                  4d. Setup Funnel Telemetry (Mixpanel)
                </h3>
                <p>
                  To measure onboarding drop-off, Miko emits telemetry strictly
                  confined to a four-key runtime allowlist:{" "}
                  <code className="font-mono text-xs bg-[#FAF6F0] px-1.5 py-0.5 rounded border border-[#EFE7DC]">
                    screen_name
                  </code>
                  ,{" "}
                  <code className="font-mono text-xs bg-[#FAF6F0] px-1.5 py-0.5 rounded border border-[#EFE7DC]">
                    step_index
                  </code>
                  ,{" "}
                  <code className="font-mono text-xs bg-[#FAF6F0] px-1.5 py-0.5 rounded border border-[#EFE7DC]">
                    total_steps
                  </code>
                  , and{" "}
                  <code className="font-mono text-xs bg-[#FAF6F0] px-1.5 py-0.5 rounded border border-[#EFE7DC]">
                    plan_id
                  </code>
                  .
                </p>
                <p className="text-[11px] text-[#7C7166]">
                  User answers (such as selected skin type or sensitivities), location
                  data, and device fingerprints are strictly forbidden by architectural
                  test assertions. Autocapture and session replays are disabled.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              5. Zero Advertising Tracking
            </h2>
            <p>
              Miko does not integrate advertising SDKs, does not access the iOS
              Advertising Identifier (IDFA), does not engage in cross-app tracking, and
              never sells personal data to data brokers.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              6. Life-State Privacy Firewall
            </h2>
            <p>
              Gestational and medical status answers (such as pregnancy, breastfeeding,
              oral retinoid use, or clinical procedures) are governed by an air-gapped
              local firewall. Conflict checks against contraindications are computed
              entirely within your phone&apos;s SQLite engine without contacting external
              servers.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              7. Retention & Data Erasure
            </h2>
            <p>
              Because your personal profile exists solely within your device&apos;s
              local database, you retain direct, unconditional control over its
              retention:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Data Deletion:</strong> Deleting the Miko app immediately and
                permanently wipes the local SQLite database from your device.
              </li>
              <li>
                <strong>Data Export:</strong> You can export your product shelf and
                routine at any time directly through in-app settings.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">8. Your Rights</h2>
            <p>
              Under GDPR, UK GDPR, and CCPA, users hold rights of access, correction, and
              erasure. Because Miko holds no server-side records or identifiers linked to
              you, these rights are exercised directly through your device by managing or
              clearing your local app data.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              9. Medical Disclaimer
            </h2>
            <p>
              Miko is not a medical device and does not provide medical care or
              individualized prescriptions. Nothing in this policy suggests that Miko
              maintains a regulated health record. Please refer to our{" "}
              <Link href="/terms" className="underline hover:text-[#241E19]">
                Terms of Use
              </Link>{" "}
              for complete clinical notices.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">10. Contact</h2>
            <p>
              For questions regarding our privacy architecture, please contact us at{" "}
              <span className="font-mono text-xs">privacy@mikocare.pro</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
