import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro";

export const metadata = {
  title: "Terms of Use | Miko Skincare",
  description:
    "Terms of use and auto-renewable subscription conditions for the Miko skincare routine builder application. Annual and monthly billing details.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | Miko Skincare",
    description:
      "Terms of use and auto-renewable subscription conditions for the Miko skincare routine builder application.",
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
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
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
            Miko — Skincare Routine Builder · Last updated: 10 September 2026
          </p>
        </div>

        {/* Prominent Medical Notice */}
        <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-3 text-xs sm:text-sm text-[#554C43] leading-relaxed">
          <h3 className="font-serif text-base text-[#241E19] font-semibold">
            Important Medical Notice
          </h3>
          <p>
            Miko does not provide medical advice and is not a medical device.
            Everything in the app is general educational information about cosmetic
            products and routine architecture. It is not a diagnosis, treatment plan,
            or clearance to use any chemical formulation.
          </p>
          <p className="font-medium text-[#241E19]">
            Always consult a qualified doctor, dermatologist, pharmacist, or midwife
            before altering your topical regimen, especially during pregnancy,
            lactation, or prescription dermatological treatment.
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#554C43] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">1. Agreement</h2>
            <p>
              These terms govern your use of the Miko application. By downloading,
              installing, or using Miko, you accept and agree to these terms. If you do
              not accept them, do not use the app.
            </p>
            <p>
              Apple&apos;s standard Licensed Application End User Licence Agreement (EULA)
              also applies to your use of the app. Where these terms and Apple&apos;s
              standard EULA conflict on a matter governed by Apple&apos;s EULA,
              Apple&apos;s terms prevail.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">2. What Miko Is and Is Not</h2>
            <p>
              Miko reads the ingredient list from a photograph of a cosmetic label,
              organizes formulation actives according to published pharmacological
              literature, and builds a scheduled routine based on application order and
              known ingredient incompatibilities.
            </p>
            <p>
              <strong>What it is not:</strong> A diagnosis, a medical prescription, a
              substitute for professional dermatological care, or a guarantee
              concerning any product&apos;s clinical tolerability, safety, or outcome.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl text-[#241E19]">3. Subscriptions & Billing</h2>
            <p>
              Miko operates exclusively on an auto-renewable subscription basis. There is
              no free tier and no limited free mode.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-[#EFE7DC] rounded-xl bg-white text-xs">
                <thead>
                  <tr className="bg-[#FAF6F0] border-b border-[#EFE7DC] text-[#241E19] font-mono">
                    <th className="p-3">Plan</th>
                    <th className="p-3">Price (US Storefront)</th>
                    <th className="p-3">Billing Cadence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DC]">
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Annual</td>
                    <td className="p-3 font-mono">US$49.99</td>
                    <td className="p-3">Billed once a year</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#241E19]">Monthly</td>
                    <td className="p-3 font-mono">US$9.99</td>
                    <td className="p-3">Billed once a month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[#7C7166]">
              Prices shown are for the United States App Store storefront. Local
              currency pricing is determined by Apple and displayed within the app
              before confirmation.
            </p>

            <div className="space-y-2 pt-1">
              <p>
                <strong>Auto-Renewal:</strong> Both plans renew automatically. Your
                Apple ID account is charged for renewal within 24 hours prior to the
                end of the current subscription period, unless auto-renew is disabled
                at least 24 hours before the conclusion of the period.
              </p>
              <p>
                <strong>Management & Cancellation:</strong> You can manage or cancel
                your subscription at any time within your device&apos;s Apple ID
                Subscription Settings. Deleting the application does not automatically
                cancel an active subscription.
              </p>
              <p>
                <strong>Refunds:</strong> All payments and refunds are handled
                directly by Apple in accordance with Apple Media Services Terms and
                Conditions. We do not have the administrative authority to issue
                refunds directly.
              </p>
              <p>
                <strong>No Free Trial:</strong> No free trial period is offered at
                present.
              </p>
              <p>
                <strong>Lapsed Subscriptions:</strong> If your subscription lapses, the
                interface locks to a subscription prompt, but{" "}
                <strong>all your data remains safely on your device</strong>. Your shelf,
                scanned formulas, and custom routine are not erased; renewing restores
                immediate access.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              4. Your Data Stays on Your Device
            </h2>
            <p>
              Miko has no accounts, no central user database, and does not store your
              profile on remote servers. Full technical details are set out in our{" "}
              <Link href="/privacy" className="underline hover:text-[#241E19]">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EFE7DC]">
              <strong>Backup Responsibility:</strong> Because we operate no user
              database, we cannot recover your data if your device is lost, damaged,
              wiped, or deleted without a valid backup. Keeping a backup copy of your
              device is your sole responsibility. Your subscription status is
              unaffected and can be restored using the &quot;Restore Purchases&quot; button.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              5. Not Medical Advice
            </h2>
            <p>
              Miko is strictly an educational tool for cosmetic products and routine
              organization.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Content in the app is not a clinical diagnosis, medical treatment plan,
                or individualized dermatological prescription.
              </li>
              <li>
                Life-state modes (Pregnancy, Breastfeeding, Isotretinoin, Post-procedure)
                flag cosmetic actives commonly cautioned against in clinical
                literature so you can discuss them with a clinician. They are not a
                clinical clearance to apply any formulation.
              </li>
              <li>
                Do not use Miko to initiate, discontinue, or alter any prescribed
                medical therapy. Always consult the prescribing clinician.
              </li>
              <li>
                If you experience cutaneous irritation, swelling, erythema, or an
                allergic reaction, discontinue product use immediately and seek medical
                attention.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">
              6. AI-Generated Analysis & Limitations
            </h2>
            <p>
              Portions of Miko&apos;s product parsing and conversational guidance are
              facilitated by automated language and computer vision models.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Computer vision may misread packaging typography, miss small active
                concentrations, or misidentify regional formula variations. Always verify
                the physical ingredient list on your packaging.
              </li>
              <li>
                Cosmetic brands frequently modify formulations without altering outer
                packaging design. Photographing the complete INCI ingredient panel on the
                back of the container yields the most accurate reading.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">7. Acceptable Use</h2>
            <p>
              You agree not to use the application for unlawful purposes, reverse
              engineer the proprietary active interaction matrix, circumvent request rate
              limits, or extract network credentials.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">8. Third Parties & Brand Names</h2>
            <p>
              Third-party brand names, cosmetic trademarks, and product designations
              referenced in the app remain the intellectual property of their respective
              owners. Miko is an independent diagnostic utility and is not affiliated
              with, sponsored by, or receiving affiliate commissions from any skincare
              manufacturer.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">9. Intellectual Property</h2>
            <p>
              The application, user interface design, reference rule engine, and
              original editorial content are owned by Miko. Data generated on your
              device—your shelf inventory, notes, and routine—remains your personal
              property.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">10. Disclaimers & Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Miko is provided on an
              &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind.
              We are not liable for indirect, incidental, or consequential damages
              arising out of your use of the application or third-party cosmetic products.
            </p>
          </section>

          {/* Section 11 & 12 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">11. Changes to Terms</h2>
            <p>
              We may revise these terms from time to time. Material updates will be
              accompanied by an updated date at the top of this document and an in-app
              notice prior to taking effect.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#241E19]">12. Contact</h2>
            <p>
              For inquiries regarding these Terms of Use, please reach out via our
              designated support channels or at{" "}
              <span className="font-mono text-xs">legal@mikocare.pro</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
