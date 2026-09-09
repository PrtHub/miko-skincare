import React from "react";

export function PrivacyArchitectureDiagram() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#EFE7DC]">
        <span className="font-serif text-xl text-[#241E19]">
          Data Flow Architecture
        </span>
        <span className="text-xs font-mono text-[#4E8F68] bg-[#EDF5F0] px-2.5 py-1 rounded-full">
          Zero Accounts · SQLite On-Device
        </span>
      </div>

      {/* Visual Architectural Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Device Local Boundary */}
        <div className="p-6 rounded-2xl bg-[#FAF6F0] border-2 border-[#E8DFC8] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#4E8F68]" />
              <h4 className="font-serif text-lg text-[#241E19]">
                Your Phone (Private Enclave)
              </h4>
            </div>
            <p className="text-xs text-[#554C43] leading-relaxed">
              Everything personal is written into an encrypted SQLite database on
              your device. There is no user table on any server.
            </p>

            <ul className="space-y-2 pt-2 text-xs font-mono text-[#554C43]">
              <li className="flex items-center gap-2">
                <span className="text-[#4E8F68]">✓</span> Your physical bathroom shelf
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4E8F68]">✓</span> 7-day weekly scheduled routine
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4E8F68]">✓</span> Declared contact sensitivities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4E8F68]">✓</span> Life-state answers (Pregnancy, Isotretinoin)
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#E8DFC8]">
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#4E8F68] bg-[#EDF5F0] px-2 py-0.5 rounded font-bold">
              Never Crosses The Network
            </span>
          </div>
        </div>

        {/* Right: The Honest Exception */}
        <div className="p-6 rounded-2xl bg-white border border-[#EFE7DC] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E0AE39]" />
              <h4 className="font-serif text-lg text-[#241E19]">
                The One Exception: Label OCR
              </h4>
            </div>
            <p className="text-xs text-[#554C43] leading-relaxed">
              When you take a photograph of a bottle, the image is transmitted to
              extract the 32 raw chemical names off the packaging.
            </p>

            <div className="p-3.5 rounded-xl bg-[#FBF7F2] border border-[#EFE7DC] space-y-1.5 text-xs text-[#554C43]">
              <span className="text-[10px] font-mono text-[#7C7166] uppercase tracking-wider block font-semibold">
                Privacy Safeguards
              </span>
              <p className="text-[11px] leading-relaxed">
                • Not linked to an email, name, phone, or Apple ID.
                <br />
                • Immediately discarded once parsed into INCI text.
                <br />
                • No face data, location coordinates, or telemetry collected.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EFE7DC]">
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#554C43] bg-[#F2EBE1] px-2 py-0.5 rounded font-bold">
              Stateless Label Extraction Only
            </span>
          </div>
        </div>
      </div>

      {/* Strongest Claim Callout */}
      <div className="p-4 rounded-xl bg-[#241E19] text-[#FBF7F2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-xs sm:text-sm font-serif leading-relaxed">
          &ldquo;Your life-state answer never crosses the network at all. The phone
          sends a bare list of ingredients to avoid with no reason attached.&rdquo;
        </p>
        <span className="text-[10px] font-mono text-[#A2988B] shrink-0 uppercase tracking-wider">
          Architectural Privacy
        </span>
      </div>
    </div>
  );
}
