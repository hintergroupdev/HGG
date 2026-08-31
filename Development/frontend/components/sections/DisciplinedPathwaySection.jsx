"use client";

import { useState, useEffect } from "react";
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
  CheckCircle2,
  ShieldCheck,
  X,
  Layers,
} from "lucide-react";

import Image from "next/image";

/* ── 9 Steps with 9 Distinct Circumference Colors & Rich Verbatim Master Metadata ── */
const steps = [
  {
    number: "01",
    title: "Opportunity Identification",
    scope: "Systematic market scanning and preliminary opportunity screening.",
    phase: "Conceptualization & Sourcing",
    icon: Compass,
    color: "#0284C7", // Sky Blue
    fullLead:
      "HGG proactively identifies, evaluates, and sources promising business, investment, and infrastructure opportunities that align with Ghana's economic priorities, regional growth corridors, and international investor criteria.",
    keyActivities: [
      {
        title: "Market & Sector Scanning",
        desc: "Evaluating high-impact sectors including energy, infrastructure, agribusiness, real estate, and technology.",
      },
      {
        title: "Strategic Fit Screening",
        desc: "Assessing alignment with institutional mandates, commercial viability, and developmental impact.",
      },
      {
        title: "Preliminary Opportunity Dossier",
        desc: "Structuring initial concept notes, operating briefs, and baseline parameter definitions.",
      },
    ],
    milestoneDeliverable: "Preliminary Opportunity Brief & Initial Screening Memo",
    stakeholdersInvolved: ["Project Promoters", "Industry Specialists", "HGG Advisory Desk"],
  },
  {
    number: "02",
    title: "Preliminary Assessment",
    scope: "High-level viability review, risk mapping, and initial capacity evaluation.",
    phase: "Feasibility & Risk Evaluation",
    icon: FileCheck,
    color: "#6366F1", // Indigo
    fullLead:
      "Before significant resources or relationships are committed, HGG conducts a rigorous preliminary assessment to understand commercial feasibility, technical viability, regulatory parameters, and strategic risk constraints.",
    keyActivities: [
      {
        title: "Commercial Viability Analysis",
        desc: "Examining market demand, revenue drivers, cost structures, and preliminary financial feasibility.",
      },
      {
        title: "Regulatory & Legal Landscape Review",
        desc: "Mapping licensing requirements, statutory permits, local content requirements, and compliance standards.",
      },
      {
        title: "Risk Constraint Mapping",
        desc: "Identifying macroeconomic, operational, counterparty, and environmental risks with mitigation paths.",
      },
    ],
    milestoneDeliverable: "High-Level Feasibility Dossier & Risk Matrix",
    stakeholdersInvolved: ["Corporate Sponsors", "Financial Analysts", "Regulatory Advisors"],
  },
  {
    number: "03",
    title: "Stakeholder Mapping",
    scope: "Identifying key institutional, private, and community stakeholders.",
    phase: "Ecosystem Mobilization",
    icon: Users,
    color: "#8B5CF6", // Purple
    fullLead:
      "Complex initiatives require multi-party alignment. HGG maps and analyzes the entire institutional, financial, and commercial ecosystem required to successfully develop, finance, and execute the initiative.",
    keyActivities: [
      {
        title: "Decision-Maker Identification",
        desc: "Pinpointing key public ministries, municipal agencies, statutory regulators, and community leaders.",
      },
      {
        title: "Capital & Tech Partner Profiling",
        desc: "Identifying suitable equity funds, development banks, EPC contractors, and technology vendors.",
      },
      {
        title: "Alignment Strategy Formulation",
        desc: "Developing tailored engagement plans to address each stakeholder group's strategic mandate.",
      },
    ],
    milestoneDeliverable: "Stakeholder Architecture Matrix & Engagement Blueprint",
    stakeholdersInvolved: ["Public Authorities", "Institutional Partners", "HGG Facilitators"],
  },
  {
    number: "04",
    title: "Strategic Engagement",
    scope: "Exploring compatibility, strategic interest, and core partner contributions.",
    phase: "Dialogue & Relationship Building",
    icon: MessageSquareCheck,
    color: "#D97706", // Amber
    fullLead:
      "HGG initiates and coordinates discreet, high-level discussions among identified stakeholders to explore compatibility, clarify strategic expectations, and confirm mutual interest in collaboration.",
    keyActivities: [
      {
        title: "Discreet Executive Introductions",
        desc: "Managing initial executive meetings under strict confidentiality and non-disclosure standards.",
      },
      {
        title: "Strategic Objective Clarification",
        desc: "Facilitating structured discussions to align commercial, technical, and developmental goals.",
      },
      {
        title: "Partner Contribution Scoping",
        desc: "Clarifying roles, equity commitments, technology transfer scopes, and operational responsibilities.",
      },
    ],
    milestoneDeliverable: "Strategic Alignment Summary & Partner Consensus Protocol",
    stakeholdersInvolved: ["Executive Leadership", "Investors", "Technology Providers", "Public Agencies"],
  },
  {
    number: "05",
    title: "Project & Partnership Development",
    scope: "Formulating project concepts, roles, and commercial briefs.",
    phase: "Structuring & Development",
    icon: FolderGit2,
    color: "#C49838", // HGG Gold
    fullLead:
      "HGG assists parties in transforming aligned interest into structured initiative concepts, establishing preliminary project governance, operational frameworks, and institutional partnership briefs.",
    keyActivities: [
      {
        title: "Commercial Brief & Project Blueprint",
        desc: "Drafting detailed project briefs, investment memoranda, and implementation roadmaps.",
      },
      {
        title: "Governance & Operating Frameworks",
        desc: "Designing governance models, steering committees, and clear division of responsibilities.",
      },
      {
        title: "Consortium & JV Structuring",
        desc: "Establishing structural parameters for joint ventures, public-private partnerships (PPPs), or consortia.",
      },
    ],
    milestoneDeliverable: "Comprehensive Project Blueprint & Term Sheet Framework",
    stakeholdersInvolved: ["Consortium Partners", "Legal Counsel", "HGG Project Leads"],
  },
  {
    number: "06",
    title: "Professional Due Diligence",
    scope: "Coordinating legal, financial, environmental, and technical reviews.",
    phase: "Verification & Compliance",
    icon: Scale,
    color: "#EA580C", // Tangerine
    fullLead:
      "All parties coordinate comprehensive professional due diligence alongside independent legal, financial, technical, environmental, and social impact specialists to ensure full transparency and compliance.",
    keyActivities: [
      {
        title: "Legal & Corporate Verification",
        desc: "Validating ownership, statutory licenses, corporate authority, and contract validity.",
      },
      {
        title: "Financial & Tax Modeling",
        desc: "Auditing financial projections, debt service capacities, and tax structuring.",
      },
      {
        title: "Environmental & Social Impact (ESIA)",
        desc: "Confirming compliance with EPA Ghana standards and international ESG benchmarks.",
      },
    ],
    milestoneDeliverable: "Independent Due Diligence Clearance & Bankability Report",
    stakeholdersInvolved: ["Independent Auditors", "Legal Specialists", "Technical Engineers", "DFIs"],
  },
  {
    number: "07",
    title: "Formalization",
    scope: "Supporting execution of MOUs, Letters of Intent, JVs, and Service Agreements.",
    phase: "Contractual Execution",
    icon: FileSignature,
    color: "#0D9488", // Teal
    fullLead:
      "Following successful due diligence and commercial consensus, HGG supports the finalization and formal execution of binding agreements, memorandums of understanding, joint venture contracts, and concession documents.",
    keyActivities: [
      {
        title: "Contractual Coordination",
        desc: "Harmonizing multi-party input into final definitive legal agreements alongside qualified counsel.",
      },
      {
        title: "Closing Condition Precedent (CP) Management",
        desc: "Tracking and fulfilling all closing conditions, board approvals, and regulatory clearances.",
      },
      {
        title: "Signing & Institutional Launch",
        desc: "Organizing formal ceremonial signing protocols and multi-agency stakeholder announcements.",
      },
    ],
    milestoneDeliverable: "Executed Definitive Agreements & Institutional Charter",
    stakeholdersInvolved: ["Legal Counsel", "Authorized Signatories", "Government Ministers", "Financiers"],
  },
  {
    number: "08",
    title: "Project Advancement",
    scope: "Active milestone management, progress tracking, and stakeholder liaison.",
    phase: "Implementation & Advancement",
    icon: Rocket,
    color: "#10B981", // Emerald
    fullLead:
      "Moving from agreements into active execution, HGG maintains ongoing stakeholder liaison, progress monitoring, and inter-agency coordination to ensure milestones are achieved on schedule.",
    keyActivities: [
      {
        title: "Implementation Liaison Desk",
        desc: "Maintaining active communication channels between project operators, investors, and public authorities.",
      },
      {
        title: "Milestone & Bottleneck Tracking",
        desc: "Proactively identifying operational or permitting delays and coordinating rapid resolution.",
      },
      {
        title: "Stakeholder Reporting & Alignment",
        desc: "Providing regular executive briefings to maintain transparency and ongoing confidence.",
      },
    ],
    milestoneDeliverable: "Milestone Progress Dashboard & Execution Review Logs",
    stakeholdersInvolved: ["Project Operators", "EPC Contractors", "Steering Committee", "HGG Desk"],
  },
  {
    number: "09",
    title: "Long-Term Value Creation",
    scope: "Generating sustainable commercial returns, institutional cooperation, and economic impact.",
    phase: "Operational Excellence & Impact",
    icon: Trophy,
    color: "#059669", // Jade Finish
    fullLead:
      "The ultimate milestone of HGG's pathway is the realization of enduring commercial profitability, socio-economic development, community upliftment, and sustainable multi-generational value across Ghana and Africa.",
    keyActivities: [
      {
        title: "Socio-Economic Impact Assessment",
        desc: "Measuring local job creation, supply chain linkages, technology transfer, and infrastructure improvements.",
      },
      {
        title: "Commercial Return Realization",
        desc: "Ensuring steady revenue realization, investor yields, and operational sustainability.",
      },
      {
        title: "Expansion & Follow-On Phasing",
        desc: "Identifying Phase 2 and follow-on growth opportunities to scale successful initiatives.",
      },
    ],
    milestoneDeliverable: "Annual Impact & Value Realization Report",
    stakeholdersInvolved: ["Asset Owners", "Communities", "Government Partners", "Long-Term Investors"],
  },
];

/* ── Circular Step Node Component (Interactive Clickable Node) ── */
function StepCard({ step, isHovered, onHover, onLeave, onSelect }) {
  const Icon = step.icon;
  const isFinal = step.number === "09";

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
        className="w-7 h-7 rounded-full flex items-center justify-center mb-1 shadow-xs transition-all duration-300 group-hover:scale-110"
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
      <h4 className="font-heading text-[11px] lg:text-[11.5px] font-extrabold text-[#061739] leading-tight line-clamp-2 mb-0.5 px-1 group-hover:text-[#C49838] transition-colors">
        {step.title}
      </h4>

      {/* Scope Description */}
      <p className="text-[8.5px] lg:text-[9px] text-slate-600 leading-tight line-clamp-2 px-1 max-w-[155px]">
        {step.scope}
      </p>

      {/* Hover Prompt Pill */}
      <div className="absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 pointer-events-none">
        <span className="text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#061739] text-[#DFB758] shadow-md border border-[#DFB758]/40 flex items-center gap-1">
          Explore Step →
        </span>
      </div>
    </motion.div>
  );
}

export default function DisciplinedPathwaySection({
  ctaLink = "/projects-and-partnerships",
  ctaText = "EXPLORE OUR PROJECT & PARTNERSHIP MODEL",
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [selectedStepModal, setSelectedStepModal] = useState(null);

  const handleToggleSteps = () => {
    if (showAllSteps) {
      setShowAllSteps(false);
      const el = document.getElementById("pathway");
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

  /* Snake rows: Row1 L→R, Row2 R→L, Row3 L→R */
  const row1 = [steps[0], steps[1], steps[2]];
  const row2 = [steps[3], steps[4], steps[5]]; // Step 04, 05, 06
  const row3 = [steps[6], steps[7], steps[8]];

  return (
    <section
      id="pathway"
      className="py-14 lg:py-18 relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]"
    >
      {/* ── Client Ghana Landmark Watermark: Black Star Square (Fixed height to prevent stretch on expand) ── */}
      <div className="absolute left-0 top-0 w-full lg:w-[50%] h-[1500px] pointer-events-none z-0 overflow-hidden select-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/img_new_1.PNG"
            alt="Black Star Square Landmark"
            fill
            unoptimized
            className="object-cover object-top lg:object-left-top opacity-[0.10] lg:opacity-[0.15] filter contrast-[1.05] saturate-110"
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
              OUR DISCIPLINED METHODOLOGY
            </span>
            <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold text-[#061739] tracking-tight leading-[1.15]">
            The 9-Step Disciplined{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
              Project Pathway
            </span>
          </h2>
          <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

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
              <StepCard step={row1[0]} isHovered={hoveredIdx === 0} onHover={() => setHoveredIdx(0)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row1[1]} isHovered={hoveredIdx === 1} onHover={() => setHoveredIdx(1)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row1[2]} isHovered={hoveredIdx === 2} onHover={() => setHoveredIdx(2)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
            </div>

            {/* ROW 2: Step 06 🠔 Step 05 🠔 Step 04 (Reversed order for Right-to-Left Snake flow) */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row2[2]} isHovered={hoveredIdx === 5} onHover={() => setHoveredIdx(5)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row2[1]} isHovered={hoveredIdx === 4} onHover={() => setHoveredIdx(4)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row2[0]} isHovered={hoveredIdx === 3} onHover={() => setHoveredIdx(3)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
            </div>

            {/* ROW 3: Step 07 ➔ Step 08 ➔ Step 09 */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <StepCard step={row3[0]} isHovered={hoveredIdx === 6} onHover={() => setHoveredIdx(6)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row3[1]} isHovered={hoveredIdx === 7} onHover={() => setHoveredIdx(7)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
              <StepCard step={row3[2]} isHovered={hoveredIdx === 8} onHover={() => setHoveredIdx(8)} onLeave={() => setHoveredIdx(null)} onSelect={setSelectedStepModal} />
            </div>

          </div>

        </div>

        {/* ══════════ MOBILE VERTICAL TIMELINE ══════════ */}
        <div className="md:hidden">
          <div className="relative pl-9">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#0284C7] via-[#DFB758] to-[#10B981] rounded-full" />

            {/* Timeline Steps Container with Zero Node Clipping */}
            <div className="space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isFinal = step.number === "09";
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
                            STEP {step.number}
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

                      <h4 className="font-heading text-sm font-bold text-[#061739] mb-1 group-hover:text-[#C49838] transition-colors leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {step.scope}
                      </p>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-[#C49838] flex items-center gap-1">
                          Explore Step <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
                <span>{showAllSteps ? "SHOW LESS" : `VIEW ALL 9 STEPS (${steps.length - 4} MORE)`}</span>
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
          DETAILED 9-STEP PROJECT PATHWAY POPUP MODAL
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
                  aria-label="Close step details"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      style={{ backgroundColor: selectedStepModal.color }}
                      className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-white px-2.5 py-0.5 rounded-full shadow-xs"
                    >
                      STEP {selectedStepModal.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-[#DFB758] uppercase tracking-wider">
                      {selectedStepModal.phase}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedStepModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable with Full Detailed Verbatim Text) */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">

                {/* 1. Step Mandate & Strategic Purpose */}
                <div className="space-y-2">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                    STRATEGIC SCOPE & PURPOSE
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {selectedStepModal.fullLead}
                  </p>
                </div>

                {/* 2. Key Execution Activities & Mechanisms */}
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    KEY EXECUTION ACTIVITIES & METHODOLOGY
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
                          <h4 className="font-heading text-xs sm:text-[12.5px] font-bold text-[#061739] leading-snug">
                            {act.title}
                          </h4>
                        </div>
                        <p className="text-slate-500 text-[11.5px] leading-relaxed pl-6">
                          {act.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Milestone Deliverable Banner */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C49838]" />
                    <span className="text-[10px] font-heading font-bold tracking-[0.15em] text-[#061739] uppercase">
                      CORE MILESTONE DELIVERABLE
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-[13px] font-semibold leading-snug pl-6">
                    {selectedStepModal.milestoneDeliverable}
                  </p>
                </div>

                {/* 4. Applicable Key Stakeholders */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-slate-500 uppercase block">
                    KEY PARTICIPATING STAKEHOLDERS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedStepModal.stakeholdersInvolved.map((stk, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: selectedStepModal.color }}
                        />
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="px-5 py-4 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedStepModal(null)}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-slate-600 hover:text-[#061739] bg-white border border-slate-200 hover:border-slate-300 transition-colors uppercase cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href={`/contact?step=${encodeURIComponent(selectedStepModal.title)}`}
                  onClick={() => setSelectedStepModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:from-[#DFB758] hover:to-[#C49838] transition-all uppercase shadow-xs"
                >
                  <span>Inquire Regarding Step {selectedStepModal.number}</span>
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
