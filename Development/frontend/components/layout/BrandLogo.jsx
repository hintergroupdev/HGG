"use client";

import Image from "next/image";

export default function BrandLogo({
  size = "default",
  className = "",
  showHierarchy = false,
}) {
  const isLarge = size === "large";

  return (
    <div
      className={`relative inline-flex flex-col select-none transition-transform duration-300 group-hover:scale-[1.01] ${className}`}
    >
      {/* Tier 1: Approved Official HGG LTD Vector Logo Graphic */}
      <div
        className={`relative ${
          isLarge
            ? "w-[220px] h-[58px] sm:w-[250px] sm:h-[66px]"
            : "w-[170px] h-[46px] sm:w-[200px] sm:h-[52px]"
        }`}
      >
        <Image
          src="/assets/logos/Logo/Logo_Horizontal_White.svg"
          alt="HGG LTD — THE HINTER GROUP GHANA LTD"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* 
        4-Tier Corporate Lockup Refinement (Client Brief Section 3 — Large Presentations)
        Tier 1: HGG LTD (prominently rendered in vector logo above)
        Tier 2: THE HINTER GROUP GHANA LTD (visually subordinate)
        Tier 3: CONSULTING + VENTURES | BROKERAGE (gold corporate descriptor)
        Tier 4: COMMITTED TO EXCELLENCE (corporate motto)
      */}
      {(showHierarchy || isLarge) && (
        <div className="pt-2 text-left space-y-0.5 mt-1 border-t border-white/10 max-w-[270px]">
          {/* Tier 2: Full Corporate Legal Name (Visually Subordinate to HGG LTD) */}
          <div className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-[0.14em] text-slate-200 uppercase leading-snug">
            THE HINTER GROUP GHANA LTD
          </div>

          {/* Tier 3: Corporate Business Activity Descriptor */}
          <div className="text-[8.5px] sm:text-[9px] font-mono font-bold tracking-[0.16em] text-[#DFB758] uppercase leading-snug">
            CONSULTING + VENTURES | BROKERAGE
          </div>

          {/* Tier 4: Corporate Motto */}
          <div className="text-[7.5px] sm:text-[8px] font-sans font-medium tracking-[0.22em] text-slate-400 uppercase leading-none">
            COMMITTED TO EXCELLENCE
          </div>
        </div>
      )}
    </div>
  );
}
