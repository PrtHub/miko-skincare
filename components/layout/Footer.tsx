import React from "react";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-[#EFE7DC] bg-[#F7F1E9] text-[#554C43] pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E8DFC8]/60">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#241E19] flex items-center justify-center text-[#FBF7F2] font-serif text-lg font-bold">
                M
              </div>
              <span className="font-serif text-2xl tracking-tight text-[#241E19]">
                Miko
              </span>
            </div>
            <p className="text-xs text-[#554C43] leading-relaxed">
              Miko reads the label on any skincare product and tells you what is
              in it, whether it suits your skin, and what not to use it with.
              Computed locally on your phone.
            </p>
            <div className="pt-2">
              <AppStoreButton size="sm" />
            </div>
          </div>

          {/* Clinical Guides & Chemistry */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C7166] font-semibold">
              Guides & Chemistry
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/can-i-use"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Can I Use Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/pregnancy"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Pregnancy Skincare Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/ingredients"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Active Ingredients (58)
                </Link>
              </li>
              <li>
                <Link
                  href="/routine/application-order"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Application Order Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/can-i-use/vitamin-c-and-niacinamide"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Vit C + Niacinamide Myth
                </Link>
              </li>
            </ul>
          </div>

          {/* Product & Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C7166] font-semibold">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#241E19] transition-colors"
                >
                  About Miko
                </Link>
              </li>
              <li>
                <Link
                  href="/#scanner"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Label Scanner
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#241E19] transition-colors"
                >
                  The Shelf & Routine
                </Link>
              </li>
              <li>
                <Link
                  href="/#privacy"
                  className="hover:text-[#241E19] transition-colors"
                >
                  On-Device Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Pricing & Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Common Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C7166] font-semibold">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/support"
                  className="hover:text-[#241E19] transition-colors font-medium text-[#241E19]"
                >
                  Help & Subscription Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#241E19] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2">
                <span className="inline-block text-[10px] font-mono text-[#7C7166] bg-[#ECE2D2] px-2 py-0.5 rounded">
                  Zero Trackers · No Ads
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical & Regulatory Deferral */}
        <div className="pt-8 pb-6 text-xs text-[#7C7166] leading-relaxed space-y-2 border-b border-[#E8DFC8]/60">
          <p>
            <strong className="text-[#554C43]">Medical Deferral Notice:</strong>{" "}
            Miko provides cosmetic ingredient information and routine organisation,
            not medical advice, dermatological diagnosis, or treatment. Formulation
            compatibility and life-state considerations (including pregnancy and
            nursing) are cosmetic flags to discuss with a healthcare professional.{" "}
            <em className="font-medium text-[#554C43]">
              Confirm anything medical with your doctor.
            </em>
          </p>
          <p>
            Subscriptions renew automatically through your Apple ID account unless
            cancelled at least 24 hours prior to the end of the current billing
            period. Manage or cancel subscriptions anytime in your iOS Settings.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C7166]">
          <p>© {new Date().getFullYear()} Miko. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>58 Actives Tracked</span>
            <span>·</span>
            <span>19 Layering Rules</span>
            <span>·</span>
            <span>On-Device SQLite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
