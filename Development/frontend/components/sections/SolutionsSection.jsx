"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users2,
  TrendingUp,
  Handshake,
  ArrowRight,
  ChevronRight,
  Compass,
  Rocket,
} from "lucide-react";

const solutionNodes = [
  {
    step: "01",
    title: "Consulting",
    tagline: "Strategic Advisory",
    description:
      "Strategic advice, feasibility evaluation, and market-entry execution support that enable organizations to perform, transform, and grow.",
    icon: Compass,
    href: "/expertise#pillar-consulting",
    color: "#0A2457",
    iconBg: "bg-[#061739]",
    iconColor: "text-[#DFB758]",
    accentColor: "group-hover:border-[#14588B]/50",
  },
  {
    step: "02",
    title: "Ventures",
    tagline: "Venture Development",
    description:
      "We identify, structure, and co-develop commercial ventures that solve real problems, align consortia, and create sustainable returns.",
    icon: Rocket,
    href: "/expertise#pillar-ventures",
    color: "#C49838",
    iconBg: "bg-[#061739]",
    iconColor: "text-[#DFB758]",
    accentColor: "group-hover:border-[#C49838]/50",
  },
  {
    step: "03",
    title: "Brokerage",
    tagline: "Commercial Mediation",
    description:
      "Connecting credible project opportunities with strategic investors, cross-border trade partners, and institutions to facilitate high-value commercial outcomes.",
    icon: Handshake,
    href: "/expertise#pillar-brokerage",
    color: "#0A2457",
    iconBg: "bg-[#061739]",
    iconColor: "text-[#DFB758]",
    accentColor: "group-hover:border-[#14588B]/50",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0], delay: Math.min(d, 0.18) },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export default function SolutionsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background architectural dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
              SOLUTIONS THAT DRIVE IMPACT
            </span>
            <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-heading font-extrabold text-[#061739] tracking-tight leading-[1.25]">
            Integrated Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
              Sustainable Value Creation
            </span>
          </h2>
          <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto mt-3" />
        </motion.div>

        {/* ── TREE DIAGRAM: TOP ROOT HUB NODE (HGG SERVICES) ── */}
        <div className="flex flex-col items-center justify-center relative mb-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-[#061739] text-white shadow-xl border border-[#DFB758]/50 relative z-20 hover:border-[#DFB758] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#DFB758] animate-pulse" />
            <h3 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.18em] text-white uppercase">
              HGG CORE SERVICES
            </h3>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#DFB758] rounded-[0.5px]" />
          </motion.div>

          {/* ── DESKTOP 3-WAY TREE BRANCHING CONNECTOR SVG LINES ── */}
          <div className="hidden lg:block w-full max-w-5xl h-12 relative z-10 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1024 48" fill="none">
              <defs>
                <marker
                  id="tree-arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#C49838" />
                </marker>
              </defs>

              {/* Central Trunk */}
              <line x1="512" y1="0" x2="512" y2="20" stroke="#061739" strokeWidth="2" strokeOpacity="0.4" />
              
              {/* Horizontal Distribution Rail */}
              <line x1="170" y1="20" x2="854" y2="20" stroke="#061739" strokeWidth="2" strokeOpacity="0.4" />

              {/* Branch 1 to Consulting */}
              <path d="M 170 20 L 170 48" stroke="#0A2457" strokeWidth="2" markerEnd="url(#tree-arrow)" />

              {/* Branch 2 to Ventures (Center) */}
              <path d="M 512 20 L 512 48" stroke="#C49838" strokeWidth="2" markerEnd="url(#tree-arrow)" />

              {/* Branch 3 to Brokerage */}
              <path d="M 854 20 L 854 48" stroke="#0A2457" strokeWidth="2" markerEnd="url(#tree-arrow)" />
            </svg>
          </div>
          {/* ── MOBILE/TABLET TREE BRANCHING CONNECTOR ── */}
          <div className="lg:hidden h-8 w-px bg-gradient-to-b from-[#061739]/50 to-transparent relative z-10 mt-2 mb-2" />
        </div>

        {/* ── 3 CORE SERVICE CARDS ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {solutionNodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index * 0.04}
                className="group relative bg-gradient-to-b from-white via-white to-slate-50/70 p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(6,23,57,0.12)] hover:border-[#DFB758]/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Subtle Luxury Gold Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#DFB758]/40 to-transparent group-hover:via-[#DFB758] transition-all duration-500" />

                {/* Corner Accent Bracket */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#DFB758]/30 rounded-tr-2xl group-hover:border-[#DFB758] transition-colors" />

                <div>
                  {/* Top Meta: Icon + Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center border border-[#14588B]/30 shadow-md group-hover:scale-105 group-hover:bg-[#0A2457] group-hover:border-[#DFB758]/60 transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#C49838] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#061739] mb-1 group-hover:text-[#14588B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono font-bold text-[#C49838] uppercase tracking-wider mb-3">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Action */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#DFB758] to-[#C49838] hover:from-[#C49838] hover:to-[#B8860B] text-[#061739] text-[11.5px] font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_8px_rgba(223,183,88,0.25)] hover:shadow-[0_4px_12px_rgba(223,183,88,0.35)] group/btn"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#061739] transition-transform group-hover/btn:translate-x-1 duration-300" />
                  </Link>

                  <div className="w-6 h-[1.5px] bg-slate-200 group-hover:w-10 group-hover:bg-[#C49838] transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
