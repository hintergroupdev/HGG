"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Handshake,
  Globe2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const quickPillars = [
  { icon: Target, title: "Strategic Consulting", desc: "Market entry & advisory" },
  { icon: TrendingUp, title: "Investment Ventures", desc: "Capital & project incubation" },
  { icon: Handshake, title: "Brokerage Solutions", desc: "Institutional deal structuring" },
  { icon: Globe2, title: "Global-Local Bridge", desc: "Ghana to global corridors" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#061739] text-white min-h-[420px] sm:min-h-[450px] lg:min-h-[460px] flex items-center pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-10 overflow-hidden border-b border-[#14588B]/20">
      
      {/* ── 1. PANORAMIC IMAGE WITH SMOOTH HORIZONTAL GRADIENT FADE ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/img_new_2.PNG"
          alt="Ghana Independence Arch & Trade Corridors"
          fill
          priority
          loading="eager"
          unoptimized
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-90 filter contrast-[1.05]"
        />

        {/* Horizontal Gradient: Solid Deep Navy on the Left for Crisp Text, Smoothly Fading to Transparent on the Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061739] via-[#061739]/92 via-45% to-transparent lg:via-[#061739]/88 lg:via-52%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061739] via-transparent to-[#061739]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061739]/50 via-transparent to-transparent" />

        {/* Subtle Architectural Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#DFB758 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Deep Ambient Lighting Glows */}
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-[#14588B]/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#DFB758]/10 rounded-full blur-[130px]" />
      </div>

      {/* ── 2. HERO CONTENT CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-5">
          
          {/* Eyebrow Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061739]/80 border border-[#DFB758]/35 backdrop-blur-md shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFB758] animate-pulse" />
            <span className="text-[10px] font-bold font-mono tracking-widest text-[#DFB758] uppercase">
              THE HINTER GROUP GHANA LTD
            </span>
            <span className="text-white/20 text-xs">|</span>
            <span className="text-[10px] font-medium text-slate-300 tracking-wider">
              ACCRA • WEST AFRICA
            </span>
          </motion.div>

          {/* Headline with Gold Accents */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="font-heading text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight leading-[1.2] text-white"
          >
            Connecting Opportunity.{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB758] via-[#F5E2B3] to-[#C49838] drop-shadow-[0_2px_12px_rgba(223,183,88,0.25)] inline-block">
              Creating Value.
            </span>
            <br />
            Advancing Sustainable Growth.
          </motion.h1>

          {/* Lead Description (Master Spec Exact Copy) */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.16}
            className="text-slate-200 text-[13px] sm:text-sm lg:text-[15px] leading-[1.6] sm:leading-relaxed max-w-xl font-normal drop-shadow-sm"
          >
            THE HINTER GROUP GHANA LTD is a Ghana-based consulting, ventures,
            and brokerage company connecting strategic opportunities with
            investors, technology providers, institutions, and development
            partners in Ghana and international markets.
          </motion.p>

          {/* Action Buttons (Subtle Rounded-md Radius) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="flex flex-wrap items-center gap-3.5 pt-1"
          >
            <Link
              href="/expertise"
              className="inline-flex justify-center items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] bg-[length:200%_auto] hover:bg-right rounded-md shadow-[0_2px_16px_rgba(196,152,56,0.3)] hover:shadow-[0_4px_24px_rgba(223,183,88,0.45)] transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>Explore HGG</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#061739]/60 hover:bg-[#061739]/90 border border-white/25 hover:border-[#DFB758]/60 rounded-md backdrop-blur-md transition-all duration-300 group"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFB758] group-hover:text-white transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Quick Pillars Mini-Grid (Hidden on Mobile) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.32}
            className="hidden sm:block pt-4 border-t border-white/10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {quickPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#061739]/80 hover:bg-[#061739] border border-white/[0.08] hover:border-[#DFB758]/40 transition-colors backdrop-blur-md flex flex-col items-start gap-1.5"
                  >
                    <div className="w-6 h-6 rounded bg-[#14588B]/40 flex items-center justify-center text-[#DFB758]">
                      <Icon className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white tracking-wide leading-tight">
                        {pillar.title}
                      </div>
                      <div className="text-[9.5px] text-slate-300 mt-0.5 leading-snug">
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
