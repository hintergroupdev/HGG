"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileCheck,
  Users,
  MessageSquareCheck,
  FolderGit2,
  Scale,
  FileSignature,
  Rocket,
  ArrowRight,
  ArrowDown,
  Workflow,
  Flag,
  Trophy,
  MoveRight,
  MoveLeft,
  ChevronsDown,
  ChevronDown,
} from "lucide-react";

import Image from "next/image";

/* ── 9 Steps with 9 Distinct Circumference Colors ── */
const steps = [
  { number: "01", title: "Opportunity Identification", scope: "Systematic market scanning and preliminary opportunity screening.", icon: Compass, color: "#0284C7" }, // Sky Blue
  { number: "02", title: "Preliminary Assessment", scope: "High-level viability review, risk mapping, and initial capacity evaluation.", icon: FileCheck, color: "#6366F1" }, // Indigo
  { number: "03", title: "Stakeholder Mapping", scope: "Identifying key institutional, private, and community stakeholders.", icon: Users, color: "#8B5CF6" }, // Purple
  { number: "04", title: "Strategic Engagement", scope: "Exploring compatibility, strategic interest, and core partner contributions.", icon: MessageSquareCheck, color: "#D97706" }, // Amber
  { number: "05", title: "Project & Partnership Development", scope: "Formulating project concepts, roles, and commercial briefs.", icon: FolderGit2, color: "#C49838" }, // HGG Gold
  { number: "06", title: "Professional Due Diligence", scope: "Coordinating legal, financial, environmental, and technical reviews.", icon: Scale, color: "#EA580C" }, // Tangerine
  { number: "07", title: "Formalization", scope: "Supporting execution of MOUs, Letters of Intent, JVs, and Service Agreements.", icon: FileSignature, color: "#0D9488" }, // Teal
  { number: "08", title: "Project Advancement", scope: "Active milestone management, progress tracking, and stakeholder liaison.", icon: Rocket, color: "#10B981" }, // Emerald
  { number: "09", title: "Long-Term Value Creation", scope: "Generating sustainable commercial returns, institutional cooperation, and economic impact.", icon: Trophy, color: "#059669" }, // Jade Finish
];

/* ── Circular Step Node Component (Compact Proportioned) ── */
function StepCard({ step, isHovered, onHover, onLeave }) {
  const Icon = step.icon;
  const isFinal = step.number === "09";

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative mx-auto w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] lg:w-[185px] lg:h-[185px] rounded-full cursor-pointer flex flex-col items-center justify-center p-3 text-center transition-all duration-300 group"
      style={{
        background: isFinal
          ? "radial-gradient(circle at 50% 40%, #FFFFFF 35%, #DCFCE7 100%)"
          : `radial-gradient(circle at 50% 35%, #FFFFFF 35%, ${step.color}18 100%)`,
        border: `2px solid ${isHovered ? step.color : isFinal ? "#10B981" : "rgba(226,232,240,0.95)"}`,
        boxShadow: isHovered
          ? `0 14px 30px -6px ${step.color}35, 0 0 0 4px ${step.color}20`
          : `0 4px 16px rgba(6,23,57,0.05), 0 0 0 2px ${step.color}12`,
      }}
    >
      {/* Decorative Inner Ring with Step Color */}
      <div
        className="absolute inset-1 rounded-full border border-dashed pointer-events-none transition-colors duration-300"
        style={{
          borderColor: isHovered ? `${step.color}70` : `${step.color}35`,
        }}
      />

      {/* Top Icon Badge - Filled with Step Color */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center mb-1 shadow-xs transition-all duration-300"
        style={{
          backgroundColor: step.color,
          color: "#FFFFFF",
        }}
      >
        <Icon className="w-3.5 h-3.5" />
      </div>

      {/* Step Number Tag - Filled with Step Color */}
      <div className="flex items-center gap-1 mb-0.5">
        <span
          className="text-[8.5px] font-mono font-black tracking-wider uppercase transition-colors duration-300 px-2 py-0.5 rounded-full text-white shadow-xs"
          style={{
            backgroundColor: isHovered ? "#061739" : step.color,
          }}
        >
          STEP {step.number}
        </span>
        {isFinal && (
          <span className="flex items-center text-[7.5px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded-full">
            <Flag className="w-2 h-2 mr-0.5 text-emerald-600" /> GOAL
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="font-heading text-[11px] lg:text-[11.5px] font-extrabold text-[#061739] leading-tight line-clamp-2 mb-0.5 px-1">
        {step.title}
      </h4>

      {/* Scope Description */}
      <p className="text-[8.5px] lg:text-[9px] text-slate-600 leading-tight line-clamp-2 px-1 max-w-[155px]">
        {step.scope}
      </p>
    </motion.div>
  );
}

export default function DisciplinedPathwaySection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [showAllSteps, setShowAllSteps] = useState(false);

  /* Snake rows: Row1 L→R, Row2 R→L, Row3 L→R */
  const row1 = [steps[0], steps[1], steps[2]];
  const row2 = [steps[3], steps[4], steps[5]]; // Step 04, 05, 06
  const row3 = [steps[6], steps[7], steps[8]];

  return (
    <section
      id="pathway"
      className="py-14 lg:py-18 relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]"
    >
      {/* ── Ground-Level Perspective Road Background (Fixed height to prevent stretch on expand) ── */}
      <div className="absolute left-0 top-0 w-full lg:w-[60%] h-[1500px] pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/ground-road-bg.jpg"
            alt="Ground-level perspective photograph looking down the center of an asphalt road towards sunset"
            fill
            className="object-cover object-top lg:object-left-top brightness-[1.02] contrast-[1.05]"
            priority={true}
          />
          {/* Smooth Fade Out from Left to Right + Top/Bottom edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8FAFC]/40 to-[#F8FAFC]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
        </div>
      </div>

      {/* Soft ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#0284C7]/[0.05] rounded-full blur-[120px] pointer-events-none z-1" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#C49838]/[0.06] rounded-full blur-[120px] pointer-events-none z-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#DFB758]/50 shadow-xs mb-3">
            <Workflow className="w-3 h-3 text-[#C49838]" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#061739] uppercase">
              OUR APPROACH
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold text-[#061739] tracking-tight leading-[1.15]">
            The 9-Step Disciplined{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
              Project Pathway
            </span>
          </h2>

          <p className="mt-2.5 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto">
            Our structured methodology guides high-impact initiatives from initial concept through institutional alignment, due diligence, and operational success.
          </p>
        </div>

        {/* ══════════ DESKTOP UNBROKEN CONTINUOUS ATTACHED PIPELINE ══════════ */}
        <div className="hidden md:block relative py-2">
          
          {/* ── UNBROKEN ATTACHED SVG PIPELINE LINE ── */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 580" preserveAspectRatio="none" fill="none">
              
              {/* Continuous Gold Pipeline Track */}
              <path
                d="M 166 92 
                   L 834 92 
                   C 970 92, 970 290, 834 290 
                   L 166 290 
                   C 30 290, 30 488, 166 488 
                   L 834 488"
                stroke="#C49838"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* ── DIRECTIONAL ARROWS ON THE UNBROKEN TRACK ── */}
              {/* Row 1 Forward Arrows */}
              <g transform="translate(333, 92)">
                <polygon points="-5,-5 5,0 -5,5" fill="#C49838" />
              </g>
              <g transform="translate(666, 92)">
                <polygon points="-5,-5 5,0 -5,5" fill="#C49838" />
              </g>

              {/* Right Turn Downward Arrow */}
              <g transform="translate(938, 191)">
                <polygon points="-5,-5 0,5 5,-5" fill="#C49838" />
              </g>

              {/* Row 2 Backward (Right to Left) Arrows */}
              <g transform="translate(666, 290)">
                <polygon points="5,-5 -5,0 5,5" fill="#C49838" />
              </g>
              <g transform="translate(333, 290)">
                <polygon points="5,-5 -5,0 5,5" fill="#C49838" />
              </g>

              {/* Left Turn Downward Arrow */}
              <g transform="translate(62, 389)">
                <polygon points="-5,-5 0,5 5,-5" fill="#C49838" />
              </g>

              {/* Row 3 Forward Arrows */}
              <g transform="translate(333, 488)">
                <polygon points="-5,-5 5,0 -5,5" fill="#C49838" />
              </g>
              <g transform="translate(666, 488)">
                <polygon points="-5,-5 5,0 -5,5" fill="#C49838" />
              </g>

            </svg>
          </div>

          {/* ── 3 ROWS OF 3 CIRCULAR STEP NODES ── */}
          <div className="space-y-6 lg:space-y-8 relative z-10">

            {/* ROW 1: Step 01 ➔ Step 02 ➔ Step 03 */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row1[0]} isHovered={hoveredIdx === 0} onHover={() => setHoveredIdx(0)} onLeave={() => setHoveredIdx(null)} />
              <StepCard step={row1[1]} isHovered={hoveredIdx === 1} onHover={() => setHoveredIdx(1)} onLeave={() => setHoveredIdx(null)} />
              <StepCard step={row1[2]} isHovered={hoveredIdx === 2} onHover={() => setHoveredIdx(2)} onLeave={() => setHoveredIdx(null)} />
            </div>

            {/* ROW 2: Step 06 🠔 Step 05 🠔 Step 04 (Reversed order for Right-to-Left Snake flow) */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row2[2]} isHovered={hoveredIdx === 5} onHover={() => setHoveredIdx(5)} onLeave={() => setHoveredIdx(null)} />
              <StepCard step={row2[1]} isHovered={hoveredIdx === 4} onHover={() => setHoveredIdx(4)} onLeave={() => setHoveredIdx(null)} />
              <StepCard step={row2[0]} isHovered={hoveredIdx === 3} onHover={() => setHoveredIdx(3)} onLeave={() => setHoveredIdx(null)} />
            </div>

            {/* ROW 3: Step 07 ➔ Step 08 ➔ Step 09 */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row3[0]} isHovered={hoveredIdx === 6} onHover={() => setHoveredIdx(6)} onLeave={() => setHoveredIdx(null)} />
              <StepCard step={row3[1]} isHovered={hoveredIdx === 7} onHover={() => setHoveredIdx(7)} onLeave={() => setHoveredIdx(null)} />
              <StepCard step={row3[2]} isHovered={hoveredIdx === 8} onHover={() => setHoveredIdx(8)} onLeave={() => setHoveredIdx(null)} />
            </div>

          </div>

        </div>

        {/* ══════════ MOBILE VERTICAL TIMELINE ══════════ */}
        <div className="md:hidden">
          <div className="relative pl-10">
            <div className="absolute left-[18px] top-0 bottom-0 w-[3.5px] bg-[#C49838] rounded-full" />

            {/* First 5 Steps (Always Visible) */}
            {steps.slice(0, 5).map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative mb-5"
                >
                  <div
                    style={{ borderColor: step.color }}
                    className="absolute -left-[28px] top-5 w-[22px] h-[22px] rounded-full bg-white border-[3px] shadow-md flex items-center justify-center z-10"
                  >
                    <span style={{ backgroundColor: step.color }} className="w-2 h-2 rounded-full" />
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-slate-300 hover:shadow-md shadow-sm transition-all duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        style={{ backgroundColor: step.color }}
                        className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full"
                      >
                        {step.number}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>

                    <h4 className="font-heading text-sm font-bold text-[#061739] mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.scope}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Remaining Steps 06-09 (Smooth Accordion Height & Fade Transition) */}
            <AnimatePresence initial={false}>
              {showAllSteps && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  {steps.slice(5).map((step, idx) => {
                    const Icon = step.icon;
                    const isFinal = step.number === "09";

                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06, duration: 0.35 }}
                        className="relative mb-5 last:mb-0"
                      >
                        <div
                          style={{ borderColor: step.color }}
                          className="absolute -left-[28px] top-5 w-[22px] h-[22px] rounded-full bg-white border-[3px] shadow-md flex items-center justify-center z-10"
                        >
                          <span style={{ backgroundColor: step.color }} className="w-2 h-2 rounded-full" />
                        </div>

                        <div
                          className={`bg-white rounded-2xl p-4 border shadow-sm ${
                            isFinal
                              ? "border-[#10B981] ring-2 ring-emerald-400/15"
                              : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                          } transition-all duration-200`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span
                                style={{ backgroundColor: step.color }}
                                className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full"
                              >
                                {step.number}
                              </span>
                              {isFinal && <Flag className="w-3 h-3 text-[#10B981]" />}
                            </div>
                            <Icon className="w-4 h-4 text-slate-400" />
                          </div>

                          <h4 className="font-heading text-sm font-bold text-[#061739] mb-0.5">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {step.scope}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Read More / Read Less Toggle Button for Mobile */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAllSteps(!showAllSteps)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-sm hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95"
            >
              <span>{showAllSteps ? "SEE LESS" : "SEE MORE (4 MORE STEPS)"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAllSteps ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <Link
            href="/projects-and-partnerships"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:shadow-xl hover:shadow-[#C49838]/25 rounded-xl transition-all duration-300 hover:-translate-y-0.5 group shadow-md"
          >
            <span>EXPLORE OUR PROJECT & PARTNERSHIP MODEL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
