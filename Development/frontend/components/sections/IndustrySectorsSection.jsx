"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Zap,
  Recycle,
  Home,
  Sprout,
  HeartPulse,
  Cpu,
  Globe2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

/* ── 9 Sectors with Full Verbatim Names & Distinct Electron Colors ── */
const sectors = [
  {
    id: "infrastructure",
    number: "01",
    fullName: "Infrastructure & Urban Development",
    category: "Strategic Infrastructure",
    icon: Building2,
    color: "#0284C7", // Azure Blue
    description:
      "Transportation corridors, ports, modern municipal infrastructure, and smart industrial park planning across Ghana.",
  },
  {
    id: "energy",
    number: "02",
    fullName: "Energy & Environmental Solutions",
    category: "Clean Power & Transition",
    icon: Zap,
    color: "#EAB308", // Sun Gold
    description:
      "Advancing clean energy transition, commercial & utility solar, grid modernization, battery storage, and energy efficiency.",
  },
  {
    id: "waste",
    number: "03",
    fullName: "Waste Management & Resource Recovery",
    category: "Circular Economy",
    icon: Recycle,
    color: "#10B981", // Emerald Green
    description:
      "Structuring circular economy initiatives, recycling facilities, waste-to-energy assets, and sustainable resource management.",
  },
  {
    id: "real-estate",
    number: "04",
    fullName: "Real Estate & Property Development",
    category: "Commercial & Residential Assets",
    icon: Home,
    color: "#F97316", // Terracotta Bronze
    description:
      "Connecting institutional investors and developers for prime commercial hubs, logistics warehouses, and residential schemes.",
  },
  {
    id: "agriculture",
    number: "05",
    fullName: "Agriculture & Agribusiness",
    category: "Value Chains & Export",
    icon: Sprout,
    color: "#84CC16", // Agro Lime Green
    description:
      "Unlocking commercial value chains through farming ventures, agro-processing, cold-chain storage, and export linkages.",
  },
  {
    id: "healthcare",
    number: "06",
    fullName: "Healthcare & Life Sciences",
    category: "Medical & Health Infrastructure",
    icon: HeartPulse,
    color: "#F43F5E", // Rose Medical
    description:
      "Facilitating partnerships for state-of-the-art medical centers, diagnostics, pharma manufacturing, and healthcare supply chains.",
  },
  {
    id: "technology",
    number: "07",
    fullName: "Technology & Digital Transformation",
    category: "Digital Economy & Fintech",
    icon: Cpu,
    color: "#6366F1", // Cyber Indigo
    description:
      "Deploying scalable fintech rails, enterprise software platforms, cloud data centers, and telecommunications infrastructure.",
  },
  {
    id: "trade",
    number: "08",
    fullName: "International Trade & Investment",
    category: "Cross-Border Commerce & AfCFTA",
    icon: Globe2,
    color: "#06B6D4", // Cyan Commerce
    description:
      "Enabling cross-border commerce, AfCFTA trade enablement, capital importation, and strategic international joint ventures.",
  },
  {
    id: "education",
    number: "09",
    fullName: "Education & Human Capital Development",
    category: "Workforce & Talent Capacity",
    icon: GraduationCap,
    color: "#A855F7", // Purple Academy
    description:
      "Supporting technical institutions, vocational academies, executive training, and international academic partnerships.",
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

export default function IndustrySectorsSection() {
  const totalNodes = sectors.length;
  const radius = 310;
  const centerCoord = 420;

  return (
    <section id="sectors" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* ── CSS KEYFRAMES FOR SEAMLESS ORBIT & HOVER PAUSE ── */}
      <style jsx global>{`
        @keyframes orbitRevolve {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterRevolve {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-spin-track {
          animation: orbitRevolve 65s linear infinite;
        }
        .orbit-counter-node {
          animation: orbitCounterRevolve 65s linear infinite;
        }
        .orbit-wheel-canvas:hover .orbit-spin-track,
        .orbit-wheel-canvas:hover .orbit-counter-node {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Background Architectural Mesh */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#061739 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#14588B]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#DFB758]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DFB758]/50 shadow-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49838] animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#061739] uppercase">
                CIRCULAR ECOSYSTEM
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#061739] tracking-tight leading-[1.2]">
              Advancing Critical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Economic Sectors
              </span>
            </h2>

            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              HGG focuses on high-impact sectors essential for sustainable economic transformation in Ghana and West Africa.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.1}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider text-white bg-[#061739] hover:bg-[#0A2457] shadow-md hover:shadow-xl hover:shadow-[#061739]/15 transition-all duration-300 hover:-translate-y-0.5 group border border-white/10"
            >
              <span>VIEW ALL INDUSTRIES</span>
              <ArrowRight className="w-4 h-4 text-[#DFB758] transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* ── CONTINUOUS ELECTRON ORBITAL CANVAS (DESKTOP) ── */}
        <div className="hidden lg:flex items-center justify-center relative my-2 min-h-[840px] select-none">
          
          {/* Exact Circular Wheel Container */}
          <div className="orbit-wheel-canvas relative w-[840px] h-[840px] rounded-full flex items-center justify-center">
            
            {/* Orbital Circle Tracks SVG (Multi-Color Gradient Track) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-[840px] h-[840px] overflow-visible" viewBox="0 0 840 840" fill="none">
                <defs>
                  <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284C7" stopOpacity="0.5" />
                    <stop offset="25%" stopColor="#10B981" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#EAB308" stopOpacity="0.5" />
                    <stop offset="75%" stopColor="#F43F5E" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* Main Outer Dashed Orbit Track */}
                <circle
                  cx={centerCoord}
                  cy={centerCoord}
                  r={radius}
                  stroke="url(#orbit-grad)"
                  strokeWidth="2.5"
                  strokeDasharray="8 10"
                />

                {/* Inner Decorative Ring */}
                <circle
                  cx={centerCoord}
                  cy={centerCoord}
                  r="195"
                  stroke="#061739"
                  strokeOpacity="0.08"
                  strokeWidth="1.5"
                />

                {/* Tilted Electron Rings */}
                <ellipse
                  cx={centerCoord}
                  cy={centerCoord}
                  rx="310"
                  ry="120"
                  transform={`rotate(30 ${centerCoord} ${centerCoord})`}
                  stroke="#C49838"
                  strokeOpacity="0.15"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
                <ellipse
                  cx={centerCoord}
                  cy={centerCoord}
                  rx="310"
                  ry="120"
                  transform={`rotate(-30 ${centerCoord} ${centerCoord})`}
                  stroke="#14588B"
                  strokeOpacity="0.15"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
              </svg>
            </div>

            {/* ── 9 ORBITAL NODES (EACH WITH DISTINCT ELECTRON COLOR) ── */}
            <div className="orbit-spin-track absolute w-[840px] h-[840px] pointer-events-none">
              {sectors.map((sector, idx) => {
                const Icon = sector.icon;
                const angleDeg = idx * (360 / totalNodes) - 90;
                const angleRad = angleDeg * (Math.PI / 180);
                const x = centerCoord + Math.cos(angleRad) * radius;
                const y = centerCoord + Math.sin(angleRad) * radius;

                return (
                  <div
                    key={sector.id}
                    style={{
                      position: "absolute",
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="pointer-events-auto z-30"
                  >
                    {/* Counter-rotation to keep icons & text upright */}
                    <div className="orbit-counter-node flex flex-col items-center">
                      
                      {/* Electron Node Icon (Distinct Colorized Container) */}
                      <Link
                        href={`/industries#${sector.id}`}
                        style={{
                          borderColor: `${sector.color}40`,
                          boxShadow: `0 4px 20px -2px ${sector.color}35`,
                        }}
                        className="relative w-15 h-15 rounded-2xl flex flex-col items-center justify-center bg-white transition-all duration-300 shadow-md hover:scale-115 hover:shadow-xl group border-2"
                      >
                        {/* Monospaced Index Badge with Sector Color */}
                        <span
                          style={{
                            backgroundColor: sector.color,
                            color: "#ffffff",
                            borderColor: "#ffffff",
                          }}
                          className="absolute -top-2 -right-2 text-[9.5px] font-mono font-bold px-1.5 py-0.2 rounded-full border shadow-sm"
                        >
                          {sector.number}
                        </span>

                        {/* Distinct Colored Icon */}
                        <Icon
                          className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                          style={{ color: sector.color }}
                        />
                      </Link>

                      {/* Direct Link on Full Sector Title Badge with Sector Border Accent */}
                      <Link
                        href={`/industries#${sector.id}`}
                        style={{
                          borderColor: `${sector.color}35`,
                        }}
                        className="mt-2.5 px-3 py-1 rounded-xl text-[10.5px] font-bold tracking-tight text-center max-w-[150px] leading-tight cursor-pointer transition-all duration-200 shadow-sm border bg-white/95 text-slate-800 hover:text-[#061739] hover:border-slate-400 hover:scale-105"
                      >
                        <span style={{ color: sector.color }} className="font-extrabold mr-1">
                          •
                        </span>
                        {sector.fullName}
                      </Link>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── THE CENTRAL NUCLEUS (PERMANENT INDUSTRY HUB & SEE DETAILS) ── */}
            <div className="relative z-20 w-[350px] h-[350px] rounded-full bg-white/95 backdrop-blur-xl border-2 border-slate-200/90 shadow-[0_16px_50px_rgba(6,23,57,0.12)] p-7 flex flex-col items-center justify-center text-center group pointer-events-auto">
              
              {/* Top Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-0.8 rounded-full bg-[#061739]/5 border border-[#DFB758]/40 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49838] animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#061739] uppercase">
                  INDUSTRY ECOSYSTEM
                </span>
              </div>

              {/* Core Emblem / Crest Container */}
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#061739] to-[#0A2457] text-[#DFB758] flex items-center justify-center shadow-md mb-2.5 border border-[#DFB758]/30">
                <Globe2 className="w-7 h-7 text-[#DFB758]" />
              </div>

              {/* Central Nucleus Title */}
              <h3 className="font-heading text-lg font-extrabold text-[#061739] leading-snug px-2">
                Advancing Ghanaian Industry
              </h3>

              {/* Related Industry Context Text */}
              <p className="text-xs text-slate-600 leading-relaxed mt-2 px-3 font-normal">
                Structuring high-value partnerships, due diligence, and capital deployment across 9 key economic corridors.
              </p>

              {/* Dedicated See Details Link */}
              <div className="mt-4">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
                >
                  <span>See Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#061739] transition-transform group-hover:translate-x-1 duration-200" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ── MOBILE & TABLET RESPONSIVE VIEW (3x3 Grid Ecosystem) ── */}
        <div className="lg:hidden space-y-6">
          {/* 3x3 Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <Link
                  key={sector.id}
                  href={`/industries#${sector.id}`}
                  style={{
                    borderColor: `${sector.color}35`,
                  }}
                  className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all cursor-pointer bg-white border shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group relative overflow-hidden min-h-[110px] sm:min-h-[125px]"
                >
                  {/* Icon */}
                  <div
                    style={{
                      backgroundColor: `${sector.color}15`,
                      color: sector.color,
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Sector Number */}
                  <span
                    style={{ backgroundColor: sector.color, color: "#fff" }}
                    className="text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full mb-1"
                  >
                    {sector.number}
                  </span>

                  {/* Sector Name */}
                  <span className="text-[9.5px] sm:text-xs font-bold text-center leading-tight line-clamp-2 text-slate-800 group-hover:text-[#061739]">
                    {sector.fullName}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Core Hub Overview Card (Mobile) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-[#061739] text-[#DFB758] flex items-center justify-center shadow-md mb-3">
              <Globe2 className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-xl font-bold text-[#061739] mb-2">
              Advancing Ghanaian Industry
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
              Structuring high-value partnerships, due diligence, and capital deployment across 9 key economic corridors.
            </p>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>See Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
