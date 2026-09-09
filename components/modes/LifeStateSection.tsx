import React from "react";
import { InteractiveModeSwitcher } from "./InteractiveModeSwitcher";

export function LifeStateSection() {
  return (
    <section id="modes" className="py-20 md:py-28 border-t border-[#EFE7DC] bg-[#FAF6F0]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7166]">
            <span>05</span>
            <span>·</span>
            <span>Life-State Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241E19] tracking-tight leading-[1.18]">
            Pregnancy, and three other modes.
          </h2>
          <p className="text-base sm:text-lg text-[#554C43] leading-relaxed">
            Pregnancy · breastfeeding · isotretinoin · post-procedure. Flip a switch
            and the shelf re-renders: blocked products grey out with a lock, and the
            week rebuilds around what remains —{" "}
            <strong className="text-[#241E19] font-medium">
              filling gaps from products you already own
            </strong>
            , never from anything anyone could earn a commission on.
          </p>
        </div>

        {/* Interactive Mode Demonstration */}
        <InteractiveModeSwitcher />

        {/* Clinical Copy Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block">
              Clinical Guardrail 01
            </span>
            <h4 className="font-serif text-base text-[#241E19]">
              Never &ldquo;Safe&rdquo; or &ldquo;Unsafe&rdquo;
            </h4>
            <p className="text-xs text-[#554C43] leading-relaxed">
              We state: <em>&ldquo;Commonly advised against during pregnancy&rdquo;</em>.
              Cosmetics are not pharmaceuticals, and binary safety claims on labels
              are irresponsible.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block">
              Clinical Guardrail 02
            </span>
            <h4 className="font-serif text-base text-[#241E19]">
              Mandatory Medical Deferral
            </h4>
            <p className="text-xs text-[#554C43] leading-relaxed">
              Every life-state banner is accompanied by the explicit instruction:{" "}
              <strong className="text-[#241E19]">
                Confirm anything medical with your doctor.
              </strong>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EFE7DC] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block">
              Clinical Guardrail 03
            </span>
            <h4 className="font-serif text-base text-[#241E19]">
              Zero Network Transmission
            </h4>
            <p className="text-xs text-[#554C43] leading-relaxed">
              Your pregnancy or medication answer never crosses the network. The
              phone translates it into a local ingredient blacklist without sending
              your medical state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
