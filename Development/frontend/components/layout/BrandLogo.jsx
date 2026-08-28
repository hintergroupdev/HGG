"use client";

import Image from "next/image";

export default function BrandLogo({ size = "default", className = "" }) {
  const isLarge = size === "large";

  return (
    <div
      className={`relative inline-flex items-center select-none transition-transform duration-300 group-hover:scale-[1.02] ${className}`}
    >
      <div
        className={`relative ${
          isLarge
            ? "w-[260px] h-[70px] sm:w-[300px] sm:h-[80px]"
            : "w-[185px] h-[50px] sm:w-[220px] sm:h-[58px]"
        }`}
      >
        <Image
          src="/assets/logos/Logo/Logo_Horizontal_White.svg"
          alt="HGG LTD - Consulting + Ventures | Brokerage - Committed to Excellence"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}
