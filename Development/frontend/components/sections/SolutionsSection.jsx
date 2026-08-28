"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users2,
  TrendingUp,
  Handshake,
  Globe2,
  ArrowRight,
  Layers,
} from "lucide-react";

const solutionNodes = [
  {
    step: "01",
    title: "Consulting",
    tagline: "Strategic Advisory",
    description:
      "Strategic advice and execution support that enable organizations to perform, transform, and grow.",
    icon: Users2,
    href: "/expertise#consulting",
    color: "#0A2457",
    iconBg: "bg-[#0A2457]",
    iconColor: "text-white",
    accentColor: "group-hover:border-[#14588B]/50",
  },
  {
    step: "02",
    title: "Ventures",
    tagline: "Venture Development",
    description:
      "We invest in and build ventures that solve real problems and create sustainable returns.",
    icon: TrendingUp,
    href: "/expertise#ventures",
    color: "#C49838",
    iconBg: "bg-[#C49838]",
    iconColor: "text-[#061739]",
    accentColor: "group-hover:border-[#C49838]/50",
  },
  {
    step: "03",
    title: "Brokerage",
    tagline: "Commercial Mediation",
    description:
      "Connecting capital, opportunities, and expertise to accelerate successful outcomes.",
    icon: Handshake,
    href: "/expertise#brokerage",
    color: "#0A2457",
    iconBg: "bg-[#0A2457]",
    iconColor: "text-white",
    accentColor: "group-hover:border-[#14588B]/50",
  },
  {
    step: "04",
    title: "Industries",
    tagline: "Sectors of Focus",
    description:
      "Deep sector knowledge across infrastructure, energy, real estate, trade, and more.",
    icon: Globe2,
    href: "/expertise#sectors",
    color: "#DFB758",
    iconBg: "bg-[#DFB758]",
    iconColor: "text-[#061739]",
    accentColor: "group-hover:border-[#DFB758]/50",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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
          viewport={{ once: true, margin: "-60px" }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C49838]" />
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#0A2457] uppercase">
              SOLUTIONS THAT <span className="text-[#C49838]">DRIVE IMPACT</span>
            </h2>
            <span className="h-[1px] w-8 bg-[#C49838]" />
          </div>
          <p className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-[#061739] tracking-tight leading-[1.25]">
            Integrated Solutions for Sustainable Value Creation
          </p>
        </motion.div>

        {/* ── TREE DIAGRAM: TOP ROOT HUB NODE (HGG SERVICES) ── */}
        <div className="flex flex-col items-center justify-center relative mb-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-[#061739] text-white shadow-xl border border-[#DFB758]/50 relative z-20 hover:border-[#DFB758] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#DFB758] animate-pulse" />
            <h3 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.18em] text-white uppercase">
              HGG SERVICES
            </h3>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#DFB758] rounded-[0.5px]" />
          </motion.div>

          {/* ── DESKTOP TREE BRANCHING CONNECTOR SVG LINES ── */}
          <div className="hidden lg:block w-full max-w-6xl h-12 relative z-10 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1152 48" fill="none">
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
              <line x1="576" y1="0" x2="576" y2="20" stroke="#061739" strokeWidth="2" strokeOpacity="0.45" />
              
              {/* Horizontal Distribution Rail */}
              <line x1="144" y1="20" x2="1008" y2="20" stroke="#061739" strokeWidth="2" strokeOpacity="0.45" />

              {/* Branch 1 to Consulting */}
              <path d="M 144 20 L 144 48" stroke="#0A2457" strokeWidth="2" markerEnd="url(#tree-arrow)" />

              {/* Branch 2 to Ventures */}
              <path d="M 432 20 L 432 48" stroke="#C49838" strokeWidth="2" markerEnd="url(#tree-arrow)" />

              {/* Branch 3 to Brokerage */}
              <path d="M 720 20 L 720 48" stroke="#0A2457" strokeWidth="2" markerEnd="url(#tree-arrow)" />

              {/* Branch 4 to Industries */}
              <path d="M 1008 20 L 1008 48" stroke="#DFB758" strokeWidth="2" markerEnd="url(#tree-arrow)" />
            </svg>
          </div>
          {/* ── MOBILE/TABLET TREE BRANCHING CONNECTOR ── */}
          <div className="lg:hidden h-8 w-px bg-gradient-to-b from-[#061739]/50 to-transparent relative z-10 mt-2 mb-2" />
        </div>

        {/* ── 4 SOLUTION CARDS (Clean Grid) ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch"
        >
          {solutionNodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group relative bg-white p-4 sm:p-6 lg:p-7 rounded-2xl border border-slate-200/90 hover:border-[#DFB758]/50 shadow-[0_4px_20px_-2px_rgba(6,23,57,0.04)] hover:shadow-[0_16px_36px_-4px_rgba(6,23,57,0.10)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta: Icon + Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </div>

                    <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-slate-400 group-hover:text-[#C49838] bg-slate-100 px-1.5 sm:px-2 py-0.5 rounded border border-slate-200/60 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#14588B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono font-semibold text-[#C49838] uppercase mb-2 sm:mb-3">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-[11px] sm:text-xs lg:text-[13px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Action */}
                <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0A2457] group-hover:text-[#C49838] transition-colors duration-300"
                  >
                    <span className="hidden sm:inline">Learn more</span>
                    <span className="sm:hidden">Learn</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300" />
                  </Link>

                  <div className="w-5 h-[1px] bg-slate-200 group-hover:w-8 group-hover:bg-[#C49838] transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
