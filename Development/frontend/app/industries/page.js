import Link from "next/link";
import { ArrowLeft, Building2, Zap, Recycle, Home, Sprout, HeartPulse, Cpu, Globe2, GraduationCap, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import IndustrySectorsSection from "@/components/sections/IndustrySectorsSection";

import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "Focus Industry Sectors | THE HINTER GROUP GHANA LTD",
  description:
    "Explore HGG's 9 priority economic corridors driving sustainable growth and investment across Ghana and West Africa.",
};

export default function IndustriesPage() {
  return (
    <ComingSoonOverlay pageTitle="Industry Sectors">
      <main className="min-h-screen bg-slate-50">
        {/* ── Page Hero Header ── */}
        <section className="pt-32 pb-16 bg-[#061739] text-white border-b border-[#14588B]/30 relative overflow-hidden">
          {/* Ambient lighting glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#14588B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DFB758]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#DFB758] hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#DFB758]/40 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB758] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#DFB758] uppercase">
                  SECTORS OF FOCUS
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                Advancing 9 Critical <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB758] via-[#F5E2B3] to-[#DFB758]">
                  Economic Corridors
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                THE HINTER GROUP GHANA LTD directs strategic consulting, venture co-development, and brokerage facilitation into high-impact sectors essential for long-term transformation in Ghana and international markets.
              </p>
            </div>
          </div>
        </section>

        {/* ── Interactive Sectors Showcase Component ── */}
        <IndustrySectorsSection />

        {/* ── Global Call to Action ── */}

      </main>
    </ComingSoonOverlay>
  );
}
