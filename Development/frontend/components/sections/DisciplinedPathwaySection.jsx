"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileCheck,
  Users,
  MessageSquareCheck,
  Rocket,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  X,
  Trophy,
  Flag,
} from "lucide-react";
import Image from "next/image";

/* ── 6 Approved Stages with Master Metadata (Client Brief Section 5 & 12) ── */
const stages = [
  {
    number: "01",
    title: "IDENTIFY",
    scope: "Identifying and sourcing high-potential opportunities.",
    phase: "Opportunity Identification",
    icon: Compass,
    color: "#0284C7", // Sky Blue
    fullLead:
      "HGG identifies business, investment, partnership, and development opportunities that demonstrate potential for economic, commercial, technological, environmental, or social value across Ghana, West Africa, and international corridors.",
    keyActivities: [
      {
        title: "Market & Sector Opportunity Scanning",
        desc: "Systematic screening across priority corridors including infrastructure, energy, agribusiness, technology, and industry.",
      },
      {
        title: "Strategic Relevance & Mandate Filtering",
        desc: "Assessing alignment with institutional mandates, commercial viability, and responsible long-term growth.",
      },
      {
        title: "Preliminary Opportunity Dossier",
        desc: "Structuring initial concept notes, operating briefs, and baseline commercial parameters.",
      },
    ],
    milestoneDeliverable: "Preliminary Opportunity Brief & Initial Screening Memo",
    stakeholdersInvolved: ["Project Promoters", "Industry Specialists", "HGG Advisory Desk"],
  },
  {
    number: "02",
    title: "EVALUATE",
    scope: "Comprehensive viability review, risk mapping, and feasibility.",
    phase: "Feasibility & Diligence",
    icon: FileCheck,
    color: "#14588B", // Corporate Navy Blue
    fullLead:
      "Before advancing an opportunity, HGG conducts rigorous evaluation to understand its objectives, stakeholders, potential risks, commercial considerations, development impact, and overall strategic relevance.",
    keyActivities: [
      {
        title: "Commercial & Economic Viability Analysis",
        desc: "Examining market demand, revenue drivers, cost structures, and preliminary financial feasibility.",
      },
      {
        title: "Regulatory & Legal Landscape Review",
        desc: "Mapping licensing requirements, statutory permits, local content requirements, and compliance standards alongside accredited external advisers.",
      },
      {
        title: "Risk Constraint Mapping & Mitigation",
        desc: "Identifying macroeconomic, operational, counterparty, and environmental risks with actionable mitigation paths.",
      },
    ],
    milestoneDeliverable: "Strategic Feasibility Dossier & Risk Matrix",
    stakeholdersInvolved: ["Corporate Sponsors", "Financial Analysts", "Technical Advisors"],
  },
  {
    number: "03",
    title: "CONNECT",
    scope: "Bringing the right stakeholders, capital, and expertise together.",
    phase: "Stakeholder Ecosystem Mobilization",
    icon: Users,
    color: "#C49838", // Warm Gold
    fullLead:
      "HGG connects opportunities with the organizations, investors, institutions, technologies, expertise, and strategic relationships capable of helping advance them. Our role is to create meaningful connections rather than simply introductions.",
    keyActivities: [
      {
        title: "Decision-Maker & Institutional Mapping",
        desc: "Pinpointing key public ministries, municipal agencies, statutory regulators, and community leaders.",
      },
      {
        title: "Capital & Tech Partner Profiling",
        desc: "Identifying suitable equity funds, development finance institutions, EPC contractors, and technology vendors.",
      },
      {
        title: "Confidential Introduction Protocols",
        desc: "Facilitating senior-level introductions under strict institutional confidentiality and non-disclosure standards.",
      },
    ],
    milestoneDeliverable: "Stakeholder Architecture Matrix & Strategic Introduction Brief",
    stakeholdersInvolved: ["Institutional Investors", "Technology Providers", "Public Authorities"],
  },
  {
    number: "04",
    title: "COORDINATE",
    scope: "Building alignment, governance clarity, and shared objectives.",
    phase: "Multi-Party Alignment & Structuring",
    icon: MessageSquareCheck,
    color: "#0A2457", // Deep Navy
    fullLead:
      "Complex opportunities often involve multiple parties with different responsibilities and expectations. HGG facilitates communication, stakeholder engagement, and coordination to establish clarity, shared objectives, and constructive collaboration throughout the development process.",
    keyActivities: [
      {
        title: "Multi-Party Dialogue & Facilitation",
        desc: "Structuring alignment workshops and negotiation frameworks to reconcile divergent stakeholder expectations.",
      },
      {
        title: "Commercial Architecture & Governance",
        desc: "Clarifying participant roles, responsibilities, contribution matrices, and institutional governance arrangements.",
      },
      {
        title: "Regulatory & Public-Private Interface",
        desc: "Coordinating public-private dialogue to ensure statutory alignment and institutional support.",
      },
    ],
    milestoneDeliverable: "Stakeholder Alignment Charter & Partnership Term Sheet",
    stakeholdersInvolved: ["Project Steering Committees", "Joint Venture Partners", "HGG Coordinators"],
  },
  {
    number: "05",
    title: "ADVANCE",
    scope: "Supporting the path toward execution and implementation.",
    phase: "Execution & Implementation Readiness",
    icon: Rocket,
    color: "#57A3C0", // Cyan Blue
    fullLead:
      "As opportunities progress, HGG supports the development process through strategic facilitation, business coordination, stakeholder engagement, and relationship management to help move promising opportunities from discussion toward structured and actionable initiatives.",
    keyActivities: [
      {
        title: "Transaction Facilitation & Readiness",
        desc: "Assisting parties in preparing documentation, structuring commercial agreements, and reaching closing.",
      },
      {
        title: "Resource & Partner Mobilization",
        desc: "Coordinating the assembly of capital, technology, and operational resources needed for deployment.",
      },
      {
        title: "Milestone Tracking & Execution Support",
        desc: "Providing active oversight, milestone monitoring, and relationship stewardship through project launch.",
      },
    ],
    milestoneDeliverable: "Execution Readiness Dossier & Implementation Framework",
    stakeholdersInvolved: ["Legal Counsel", "EPC Contractors", "Financing Syndicates"],
  },
  {
    number: "06",
    title: "CREATE VALUE",
    scope: "Building measurable, sustainable, and enduring multi-generational value.",
    phase: "Sustainable Impact & Value Realization",
    icon: Trophy,
    color: "#10B981", // Emerald Green
    fullLead:
      "The ultimate goal of every HGG engagement is to help create measurable and sustainable value. This includes commercial growth, investment opportunities, economic development, institutional collaboration, technology transfer, environmental improvement, job creation, and broader social impact.",
    keyActivities: [
      {
        title: "Socio-Economic & Impact Assessment",
        desc: "Measuring local job creation, supply chain linkages, technology transfer, and infrastructure improvements.",
      },
      {
        title: "Commercial Return & Sustainability",
        desc: "Ensuring steady revenue realization, investor yields, and operational sustainability.",
      },
      {
        title: "Expansion & Phased Scaling",
        desc: "Identifying follow-on growth opportunities to scale successful initiatives across regional markets.",
      },
    ],
    milestoneDeliverable: "Value Creation & Sustainability Review",
    stakeholdersInvolved: ["Asset Owners", "Communities", "Government Partners", "Long-Term Investors"],
  },
];

/* ── Circular Step Node Component (Interactive Clickable Node) ── */
function StepCard({ step, isHovered, onHover, onLeave, onSelect }) {
  const Icon = step.icon;
  const isFinal = step.number === "06";

  return (
    <motion.div
      onClick={() => onSelect(step)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
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
        className="w-8 h-8 rounded-full flex items-center justify-center mb-1.5 shadow-xs transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: step.color,
          color: "#FFFFFF",
        }}
      >
        <Icon className="w-4 h-4" />
      </div>

      {/* Step Number Tag - Filled with Step Color */}
      <div className="flex items-center gap-1 mb-1">
        <span
          className="text-[9px] font-mono font-black tracking-wider uppercase transition-colors duration-300 px-2.5 py-0.5 rounded-full text-white shadow-xs"
          style={{
            backgroundColor: isHovered ? "#061739" : step.color,
          }}
        >
          STAGE {step.number}
        </span>
        {isFinal && (
          <span className="flex items-center text-[7.5px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded-full shadow-2xs">
            GOAL
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="font-heading text-[12px] sm:text-[13px] font-bold text-[#061739] group-hover:text-[#14588B] transition-colors leading-tight line-clamp-1 px-1 uppercase tracking-wide">
        {step.title}
      </h4>

      {/* Scope Preview */}
      <p className="text-[9.5px] text-slate-500 line-clamp-2 leading-tight px-1 font-normal mt-0.5">
        {step.scope}
      </p>

      {/* Hover Prompt Pill */}
      <div className="absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 pointer-events-none">
        <span className="text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#061739] text-[#DFB758] shadow-md border border-[#DFB758]/40 flex items-center gap-1">
          Explore Stage →
        </span>
      </div>
    </motion.div>
  );
}

export default function DisciplinedPathwaySection({
  ctaLink = "/about-us#strategic-approach",
  ctaText = "LEARN MORE ABOUT OUR STRATEGIC APPROACH",
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [selectedStepModal, setSelectedStepModal] = useState(null);

  const handleToggleSteps = () => {
    if (showAllSteps) {
      setShowAllSteps(false);
      const el = document.getElementById("strategic-approach-section");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllSteps(true);
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedStepModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when modal is active
  useEffect(() => {
    if (selectedStepModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedStepModal]);

  /* 2 Rows of 3 Stages: Row 1 (01, 02, 03) and Row 2 (04, 05, 06) */
  const row1 = [stages[0], stages[1], stages[2]];
  const row2 = [stages[3], stages[4], stages[5]];

  return (
    <section
      id="strategic-approach-section"
      className="py-14 lg:py-18 relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]"
    >
      {/* ── Client Ghana Landmark Watermark: Black Star Square (Subtle Low-Opacity per Client Brief Section 2) ── */}
      <div className="absolute left-0 top-0 w-full lg:w-[50%] h-[1200px] pointer-events-none z-0 overflow-hidden select-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/img_new_1.PNG"
            alt="Black Star Square Landmark"
            fill
            unoptimized
            className="object-cover object-top lg:object-left-top opacity-[0.10] lg:opacity-[0.14] filter contrast-[1.05] saturate-110"
            priority={true}
          />
          {/* Smooth Fade Out from Left to Right + Top/Bottom edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8FAFC]/60 to-[#F8FAFC]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/80 via-transparent to-[#F8FAFC]" />
        </div>
      </div>

      {/* Soft ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#0284C7]/[0.05] rounded-full blur-[120px] pointer-events-none z-1" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#C49838]/[0.06] rounded-full blur-[120px] pointer-events-none z-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
              PRIMARY STRATEGIC METHODOLOGY
            </span>
            <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold text-[#061739] tracking-tight leading-[1.15]">
            The 6-Stage Strategic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
              Approach
            </span>
          </h2>
          <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

          <p className="mt-2.5 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto">
            HGG’s disciplined methodology connecting credible opportunities with the strategic stakeholders, capital, and execution coordination required to build enduring value across Ghana and international markets.
          </p>
        </div>

        {/* ══════════ DESKTOP UNBROKEN CONTINUOUS ATTACHED PIPELINE ══════════ */}
        <div className="hidden md:block relative py-2">
          
          {/* ── UNBROKEN ATTACHED SVG PIPELINE LINE ── */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 390" preserveAspectRatio="none" fill="none">
              
              {/* Continuous Gold Pipeline Track for 2 Rows */}
              <path
                d="M 166 92 
                   L 834 92 
                   C 970 92, 970 290, 834 290 
                   L 166 290"
                stroke="#C49838"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* ── DIRECTIONAL ARROWS ON THE UNBROKEN TRACK ── */}
              {/* Row 1 Forward Arrows (Left to Right) */}
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

              {/* Row 2 Backward (Right to Left) Arrows for Snake Flow to Final Goal */}
              <g transform="translate(666, 290)">
                <polygon points="5,-5 -5,0 5,5" fill="#C49838" />
              </g>
              <g transform="translate(333, 290)">
                <polygon points="5,-5 -5,0 5,5" fill="#C49838" />
              </g>

            </svg>
          </div>

          {/* ── 2 ROWS OF 3 CIRCULAR STEP NODES ── */}
          <div className="space-y-8 relative z-10">

            {/* ROW 1: Stage 01 ➔ Stage 02 ➔ Stage 03 */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row1[0]} isHovered={hoveredIdx === 0} onHover={() => setHoveredIdx(0)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row1[1]} isHovered={hoveredIdx === 1} onHover={() => setHoveredIdx(1)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row1[2]} isHovered={hoveredIdx === 2} onHover={() => setHoveredIdx(2)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
            </div>

            {/* ROW 2: Stage 06 🠔 Stage 05 🠔 Stage 04 (Reversed order for Right-to-Left Snake flow to Stage 06) */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row2[2]} isHovered={hoveredIdx === 5} onHover={() => setHoveredIdx(5)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row2[1]} isHovered={hoveredIdx === 4} onHover={() => setHoveredIdx(4)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row2[0]} isHovered={hoveredIdx === 3} onHover={() => setHoveredIdx(3)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
            </div>

          </div>

        </div>

        {/* ══════════ MOBILE VERTICAL TIMELINE ══════════ */}
        <div className="md:hidden">
          <div className="relative pl-9">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#0284C7] via-[#DFB758] to-[#10B981] rounded-full" />

            {/* Timeline Steps Container */}
            <div className="space-y-4">
              {stages.map((step, idx) => {
                const Icon = step.icon;
                const isFinal = step.number === "06";
                const isHidden = !showAllSteps && idx >= 4;

                if (isHidden) return null;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.2) }}
                    className="relative"
                  >
                    {/* Timeline Node - Always Aligned on Line */}
                    <div
                      style={{ borderColor: step.color }}
                      className="absolute -left-[28px] top-4 w-[22px] h-[22px] rounded-full bg-white border-[3px] shadow-sm flex items-center justify-center z-10"
                    >
                      <span
                        style={{ backgroundColor: step.color }}
                        className="w-2 h-2 rounded-full"
                      />
                    </div>

                    {/* Step Card */}
                    <div
                      onClick={() => setSelectedStepModal(step)}
                      className={`bg-white rounded-2xl p-4 border shadow-xs ${
                        isFinal
                          ? "border-emerald-500/80 ring-2 ring-emerald-400/20"
                          : "border-slate-200 hover:border-[#DFB758] hover:shadow-md"
                      } transition-all duration-200 cursor-pointer group active:scale-[0.99]`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            style={{ backgroundColor: step.color }}
                            className="text-[10px] font-mono font-bold text-white px-2.5 py-0.5 rounded-full shadow-2xs"
                          >
                            STAGE {step.number}
                          </span>
                          {isFinal && (
                            <span className="flex items-center text-[8.5px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                              <Flag className="w-2.5 h-2.5 mr-1 text-emerald-600" /> GOAL
                            </span>
                          )}
                        </div>
                        <div
                          style={{ color: step.color }}
                          className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform"
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-heading text-sm font-bold text-[#061739] mb-1 group-hover:text-[#C49838] transition-colors leading-snug uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {step.scope}
                      </p>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-[#C49838] flex items-center gap-1">
                          Explore Stage <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                        <span className="text-[9.5px] font-mono text-slate-400 uppercase tracking-wider">
                          {step.phase}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Read More / Read Less Toggle Button */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleToggleSteps}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
              >
                <span>{showAllSteps ? "SHOW LESS" : `VIEW ALL 6 STAGES (${stages.length - 4} MORE)`}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    showAllSteps ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2.5 px-7 py-3 text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:shadow-xl hover:shadow-[#C49838]/25 rounded-md transition-all duration-300 hover:-translate-y-0.5 group shadow-md uppercase"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          DETAILED 6-STAGE STRATEGIC APPROACH POPUP MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedStepModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStepModal(null)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedStepModal(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close stage details"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      style={{ backgroundColor: selectedStepModal.color }}
                      className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-white px-2.5 py-0.5 rounded-full shadow-xs"
                    >
                      STAGE {selectedStepModal.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-[#DFB758] uppercase tracking-wider">
                      {selectedStepModal.phase}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight uppercase">
                    {selectedStepModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">

                {/* 1. Mandate & Strategic Purpose */}
                <div className="space-y-2">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                    STRATEGIC SCOPE & PURPOSE
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {selectedStepModal.fullLead}
                  </p>
                </div>

                {/* 2. Key Execution Activities & Methodology */}
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    KEY ACTIVITIES & FACILITATION MECHANISMS
                  </span>
                  <div className="space-y-2.5">
                    {selectedStepModal.keyActivities.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0"
                            style={{ color: selectedStepModal.color }}
                          />
                          <h5 className="font-heading text-xs sm:text-[13px] font-bold text-[#061739]">
                            {act.title}
                          </h5>
                        </div>
                        <p className="text-[11.5px] sm:text-xs text-slate-500 pl-6 leading-relaxed">
                          {act.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Milestone Deliverable Callout */}
                <div className="p-4 rounded-xl bg-[#061739]/5 border border-[#14588B]/20 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C49838] shrink-0" />
                    <span className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-[#061739]">
                      Key Milestone Deliverable
                    </span>
                  </div>
                  <p className="text-xs sm:text-[12.5px] font-medium text-slate-700 pl-6">
                    {selectedStepModal.milestoneDeliverable}
                  </p>
                </div>

                {/* 4. Stakeholders Involved */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-slate-400 uppercase block">
                    PRIMARY STAKEHOLDERS INVOLVED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedStepModal.stakeholdersInvolved.map((stk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer with Direct Inquiry CTA */}
              <div className="px-5 py-3.5 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Part of HGG’s approved 6-Stage Strategic Approach
                </span>
                <Link
                  href={`/contact?step=Stage ${selectedStepModal.number}: ${selectedStepModal.title}`}
                  onClick={() => setSelectedStepModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#061739] hover:bg-[#14588B] text-white text-xs font-heading font-bold tracking-wider uppercase transition-colors shadow-xs"
                >
                  <span>Inquire Regarding This Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
