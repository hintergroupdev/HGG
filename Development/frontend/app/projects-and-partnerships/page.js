"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DisciplinedPathwaySection from "@/components/sections/DisciplinedPathwaySection";
import { getProjects } from "@/lib/sanityData";
import CustomPortableText from "@/components/ui/CustomPortableText";
import {
  ArrowRight,
  Handshake,
  Building2,
  TrendingUp,
  Globe2,
  Briefcase,
  GraduationCap,
  Layers,
  Landmark,
  FlaskConical,
  Search,
  BarChart2,
  Link2,
  AlignCenter,
  Rocket,
  Sparkles,
  CheckCircle2,
  Shield,
  ShieldCheck,
  Lock,
  Users,
  Target,
  Lightbulb,
  TreePine,
  Network,
  GitMerge,
  Compass,
  FileCheck,
  MessageSquareCheck,
  Scale,
  FileSignature,
  Trophy,
  ChevronRight,
  ChevronDown,
  MapPin,
  Clock,
  X,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: Math.min(d, 0.22), ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (d = 0) => ({
    opacity: 1,
    transition: { duration: 0.42, delay: Math.min(d, 0.18), ease: "easeOut" },
  }),
};

/* ─── Section Header Component ─── */
function SectionHeader({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="text-center space-y-3 mb-12 sm:mb-16">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5"
      >
        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
        <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
          {eyebrow}
        </span>
        <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
      </motion.div>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.06}
        className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight max-w-3xl mx-auto"
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
              {highlight}
            </span>
          </>
        )}
      </motion.h2>
      <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.12}
          className="text-slate-500 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ─── 3 Core Philosophy Pillars ─── */
const philosophyPillars = [
  {
    icon: Handshake,
    color: "#DFB758",
    label: "OUR COLLABORATIVE APPROACH",
    title: "Every successful project begins with strong relationships.",
    body: "HGG works closely with stakeholders throughout every stage of project development — identifying strategic opportunities, facilitating engagement, and connecting investors with credible pathways forward.",
  },
  {
    icon: Compass,
    color: "#14588B",
    label: "OUR PROJECT PHILOSOPHY",
    title: "Every opportunity is unique.",
    body: "HGG approaches each engagement with careful planning, disciplined execution, and a commitment to understanding the objectives of every stakeholder involved — creating practical, sustainable solutions that generate measurable value.",
  },
  {
    icon: Globe2,
    color: "#059669",
    label: "WORKING WITH HGG",
    title: "Collaboration built on shared commitment.",
    body: "Whether supporting governments, private enterprises, investors, development institutions, or international organizations, HGG is committed to building relationships that encourage innovation, responsible investment, and sustainable growth.",
  },
];

/* ─── 8 Collaborative Approach Steps ─── */
const collaborativeSteps = [
  { icon: Search, text: "Identifying strategic opportunities." },
  { icon: Users, text: "Facilitating stakeholder engagement." },
  { icon: TrendingUp, text: "Connecting investors with credible opportunities." },
  { icon: Network, text: "Supporting project planning and coordination." },
  { icon: Handshake, text: "Building strategic partnerships." },
  { icon: Shield, text: "Promoting responsible investment." },
  { icon: Lightbulb, text: "Encouraging innovation and technology transfer." },
  { icon: TreePine, text: "Supporting sustainable economic development." },
];

/* ─── 8 Partner Categories ─── */
const partnerCategories = [
  {
    icon: Building2,
    color: "#0284C7",
    title: "Private Companies & Project Developers",
    desc: "Enterprises with viable commercial projects seeking strategic structuring, capital access, and market facilitation.",
  },
  {
    icon: Globe2,
    color: "#6366F1",
    title: "International Institutional Investors",
    desc: "Global investment funds, sovereign wealth entities, and institutional capital seeking credible African opportunities.",
  },
  {
    icon: FlaskConical,
    color: "#8B5CF6",
    title: "Multinational Technology Providers",
    desc: "Technology companies and innovators seeking market entry and deployment pathways in Ghana and West Africa.",
  },
  {
    icon: Landmark,
    color: "#D97706",
    title: "Financial Institutions & Funds",
    desc: "Banks, development finance institutions, and structured finance providers supporting project capitalization.",
  },
  {
    icon: Briefcase,
    color: "#C49838",
    title: "Government Ministries, Departments & Agencies",
    desc: "Public sector bodies seeking private sector partnerships, investment facilitation, and project coordination support.",
  },
  {
    icon: MapPin,
    color: "#0D9488",
    title: "Municipal & Local Authorities",
    desc: "Metropolitan and district authorities advancing urban infrastructure, community development, and sustainability programs.",
  },
  {
    icon: TrendingUp,
    color: "#10B981",
    title: "Development Finance Institutions (DFIs)",
    desc: "Multilateral and bilateral development lenders providing concessional finance for high-impact economic programs.",
  },
  {
    icon: GraduationCap,
    color: "#059669",
    title: "Academic & Research Organizations",
    desc: "Universities, research centres, and knowledge institutions advancing innovation, training, and capacity building.",
  },
];

/* ─── 8 HGG Engagement Roles ─── */
const engagementRoles = [
  { icon: Target, label: "Strategic Advisor", desc: "Providing strategic advisory support on opportunity evaluation, positioning, and navigation." },
  { icon: Rocket, label: "Business Development Partner", desc: "Identifying, developing, and advancing promising commercial and investment opportunities." },
  { icon: Lightbulb, label: "Venture Facilitator", desc: "Supporting early-stage concepts through positioning, partnership formation, and coordination." },
  { icon: GitMerge, label: "Brokerage & Intermediary Partner", desc: "Facilitating trusted strategic business relationships with full confidentiality and professionalism." },
  { icon: Network, label: "Stakeholder Coordinator", desc: "Managing multi-party engagement, alignment, and disciplined communication across all stages." },
  { icon: TrendingUp, label: "Investment Facilitator", desc: "Connecting credible opportunities with investors, DFIs, financial institutions, and capital." },
  { icon: Handshake, label: "Partnership Development Partner", desc: "Building long-term strategic partnerships across governments, corporations, and institutions." },
  { icon: Layers, label: "Project Development Facilitator", desc: "Transforming ideas into structured initiatives capable of attracting investment and implementation." },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllApproachSteps, setShowAllApproachSteps] = useState(false);
  const [showAllPartners, setShowAllPartners] = useState(false);
  const [showAllRoles, setShowAllRoles] = useState(false);

  const handleToggleApproachSteps = () => {
    if (showAllApproachSteps) {
      setShowAllApproachSteps(false);
      const el = document.getElementById("approach");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllApproachSteps(true);
    }
  };

  const handleTogglePartners = () => {
    if (showAllPartners) {
      setShowAllPartners(false);
      const el = document.getElementById("partner-categories");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllPartners(true);
    }
  };

  const handleToggleRoles = () => {
    if (showAllRoles) {
      setShowAllRoles(false);
      const el = document.getElementById("engagement-roles");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllRoles(true);
    }
  };

  useEffect(() => {
    async function loadCmsProjects() {
      try {
        const live = await getProjects();
        if (live && live.length > 0) {
          setProjects(live);
        }
      } catch (err) {
        console.error("Failed to load projects from Sanity:", err);
      }
    }
    loadCmsProjects();
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <div className="bg-[#F4F5F7] text-[#0F172A] min-h-screen">

      {/* ─────────────────────────────────────────────────
          1. HERO — Compact Diagonal Split: Dark Navy Left / Vibrant Photo Right
      ───────────────────────────────────────────────── */}
      <section className="relative bg-[#061739] overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] lg:h-[440px] flex items-center border-b border-[#14588B]/20">

        {/* ── Right: Photo Framed for Tangent Slant ── */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[66%] xl:w-[64%] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/img_new_1.PNG"
            alt="Strategic Partnerships — HGG Ghana"
            fill
            priority
            loading="eager"
            unoptimized
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center lg:object-[72%_24%] filter contrast-[1.06] brightness-[1.02]"
          />
          {/* Mobile dark gradient overlay so text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061739] via-[#061739]/92 to-[#061739]/30 lg:hidden" />
        </div>

        {/* ── Left: Solid Dark Navy Tangent Slanted Polygon (Positive Tangent) ── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden lg:block bg-[#061739]"
          style={{
            clipPath: "polygon(0 0, 55% 0, 39% 100%, 0 100%)",
          }}
        />

        {/* ── Hero Content Container ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-8 sm:py-10 lg:py-10">
          <div className="max-w-lg lg:max-w-md xl:max-w-lg space-y-3.5">

            {/* Eyebrow in Gold */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block"
            >
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#DFB758] uppercase">
                THE HINTER GROUP GHANA LTD
              </span>
            </motion.div>

            {/* Main Title: Projects & Partnerships */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.06}
              className="font-heading text-3xl sm:text-4xl lg:text-[2.9rem] font-bold text-white tracking-tight leading-none"
            >
              Projects & Partnerships
            </motion.h1>

            {/* Gold Horizontal Accent Bar */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="w-12 h-[3px] bg-[#DFB758] rounded-full"
            />

            {/* Lead Narrative Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="space-y-2 text-slate-200 text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[1.6] font-normal"
            >
              <p>
                <strong className="font-semibold text-white">Building Lasting Partnerships That Create Sustainable Impact.</strong>
              </p>
              <p className="text-slate-300 text-[12.5px] leading-relaxed">
                HGG brings together governments, investors, private enterprises, development institutions, and technology providers to advance transformative initiatives across Ghana and international markets.
              </p>
            </motion.div>

            {/* Quick Action Navigation */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
            >
              <a
                href="#pathway"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded-md shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                9-Step Pathway <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-heading font-bold tracking-wider text-white border border-white/20 hover:border-[#DFB758]/60 bg-white/5 hover:bg-white/10 rounded-md backdrop-blur-sm transition-all duration-300 uppercase"
              >
                Our Philosophy
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — PHILOSOPHY: 3-Column Pillars
      ═══════════════════════════════════════════════════ */}
      <section id="philosophy" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Landmark Architectural Background Watermark */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] pointer-events-none z-0 overflow-hidden select-none opacity-[0.06] hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/img_new_1.PNG"
              alt="Ghana Landmark Background"
              fill
              unoptimized
              className="object-cover object-right-top filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          </div>
        </div>

        {/* Ambient dot grid */}
        <div className="absolute left-6 top-8 w-40 h-40 opacity-[0.04] pointer-events-none select-none"
          style={{ backgroundImage: "radial-gradient(#061739 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="OUR PARTNERSHIP PHILOSOPHY"
            title="The Foundation of"
            highlight="Lasting Progress"
            subtitle="Every meaningful outcome begins with principled collaboration, careful planning, and a genuine commitment to shared value."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {philosophyPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  className="group relative bg-[#F8FAFC] border border-slate-200 rounded-2xl p-7 sm:p-8 hover:border-[#DFB758]/50 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#DFB758]/40 rounded-tl-sm" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#DFB758]/40 rounded-tr-sm" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#DFB758]/40 rounded-bl-sm" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#DFB758]/40 rounded-br-sm" />

                  {/* Hover glow */}
                  <div
                    className="absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: pillar.color }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white shadow-xs"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className="text-[9.5px] font-heading font-bold tracking-[0.18em] uppercase block mb-2"
                    style={{ color: pillar.color }}
                  >
                    {pillar.label}
                  </span>
                  <h3 className="font-heading text-[17px] sm:text-lg font-bold text-[#061739] leading-snug mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{pillar.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — COLLABORATIVE APPROACH: 8 Steps (Light Executive)
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F4F6F9] relative overflow-hidden border-b border-slate-200/80" id="approach">
        {/* Subtle Architectural Landscape Watermark on Left */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[48%] pointer-events-none z-0 overflow-hidden select-none opacity-[0.07]">
          <div className="relative w-full h-full">
            <Image
              src="/images/img_new_2.PNG"
              alt="HGG Landscape Watermark"
              fill
              unoptimized
              className="object-cover object-left filter contrast-[1.05] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4F6F9]/70 to-[#F4F6F9]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6F9]/80 via-transparent to-[#F4F6F9]/80" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="OUR COLLABORATIVE APPROACH"
            title="How HGG Drives"
            highlight="Projects Forward"
            subtitle="HGG works closely with stakeholders throughout every stage of project development to build alignment and momentum:"
          />

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {collaborativeSteps.map((step, i) => {
              const Icon = step.icon;
              const isHidden = !showAllApproachSteps && i >= 4;
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    isHidden ? "hidden sm:flex" : "flex"
                  } group items-start gap-3.5 p-5 rounded-xl bg-white border border-slate-200/90 hover:border-[#DFB758]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-xs`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#DFB758]/12 border border-[#DFB758]/25 flex items-center justify-center shrink-0 group-hover:bg-[#DFB758]/25 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#C49838]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold text-[#C49838] uppercase tracking-widest block mb-0.5">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#061739] text-[13px] sm:text-[13.5px] leading-snug font-semibold">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile See More / Show Less Toggle Button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={handleToggleApproachSteps}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
            >
              <span>
                {showAllApproachSteps
                  ? "SHOW LESS"
                  : `SEE MORE STEPS (${collaborativeSteps.length - 4} MORE)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllApproachSteps ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          DYNAMIC CMS SECTION — APPROVED PUBLIC INITIATIVES
          (Rendered dynamically when projects are published in Sanity Studio)
      ───────────────────────────────────────────────── */}
      {projects.length > 0 && (
        <section id="approved-initiatives" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              eyebrow="APPROVED INITIATIVES & CASE STUDIES"
              title="Public Projects &"
              highlight="Strategic Engagements"
              subtitle="Publicly disclosed initiatives and active facilitation frameworks structured by THE HINTER GROUP GHANA LTD."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, pIdx) => (
                <motion.div
                  key={proj.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={pIdx * 0.06}
                  onClick={() => setSelectedProject(proj)}
                  className="group bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#DFB758]/70 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {proj.imageUrl && (
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-200/80 bg-slate-100">
                        <Image
                          src={proj.imageUrl}
                          alt={proj.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#C49838] uppercase px-2.5 py-1 rounded bg-[#DFB758]/10 border border-[#DFB758]/20">
                        {proj.sector}
                      </span>
                      <span className="text-[9.5px] font-heading font-bold text-slate-500 uppercase tracking-widest">
                        {proj.status.replace("_", " ")}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#061739] group-hover:text-[#14588B] transition-colors mb-3 leading-snug">
                      {proj.title}
                    </h3>

                    {proj.summary && (
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-4">
                        {proj.summary}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-heading font-bold text-[#061739] group-hover:text-[#C49838] transition-colors uppercase tracking-wider flex items-center gap-1.5">
                      <span>View Full Initiative</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────
          4. THE 9-STEP DISCIPLINED PROJECT PATHWAY
      ───────────────────────────────────────────────── */}
      <DisciplinedPathwaySection
        ctaLink="/contact"
        ctaText="INITIATE A PROJECT INQUIRY"
      />

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — WHO WE WELCOME: 8 Partner Categories
      ═══════════════════════════════════════════════════ */}
      <section id="partner-categories" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle dot matrix */}
        <div className="absolute right-8 top-12 w-44 h-44 opacity-[0.04] pointer-events-none select-none"
          style={{ backgroundImage: "radial-gradient(#061739 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="WHO WE WELCOME TO PARTNER"
            title="Organizations"
            highlight="We Work With"
            subtitle="HGG collaborates with a broad range of public, private, and institutional stakeholders committed to responsible investment and sustainable development."
          />

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerCategories.map((partner, i) => {
              const Icon = partner.icon;
              const isHidden = !showAllPartners && i >= 4;
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    isHidden ? "hidden sm:block" : "block"
                  } group relative bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-[#DFB758]/50 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  {/* Corner bracket */}
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#DFB758]/30 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                    style={{ backgroundColor: `${partner.color}12`, borderColor: `${partner.color}20`, color: partner.color }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading text-[14px] font-bold text-[#061739] leading-snug mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-slate-500 text-[12px] leading-relaxed">{partner.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile See More / Show Less Toggle Button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={handleTogglePartners}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
            >
              <span>
                {showAllPartners
                  ? "SHOW LESS"
                  : `SEE MORE CATEGORIES (${partnerCategories.length - 4} MORE)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllPartners ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — HGG'S ROLE: 8 Engagement Capacities
      ═══════════════════════════════════════════════════ */}
      <section id="engagement-roles" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        {/* Faint Architectural Background Watermark */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[40%] pointer-events-none z-0 overflow-hidden select-none opacity-[0.06] hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/img_new_1.PNG"
              alt="HGG Architectural Landmark"
              fill
              unoptimized
              className="object-cover object-center filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F8FAFC]/70 to-[#F8FAFC]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="OUR ROLE IN EVERY ENGAGEMENT"
            title="How HGG Serves"
            highlight="Your Initiative"
            subtitle="Depending on the nature of the engagement, HGG may serve in one or more of the following capacities. The specific role is defined according to the objectives, structure, and requirements of each initiative."
          />

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagementRoles.map((role, i) => {
              const Icon = role.icon;
              const isHidden = !showAllRoles && i >= 4;
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    isHidden ? "hidden sm:block" : "block"
                  } group bg-white border border-slate-200 rounded-xl p-5 hover:border-[#DFB758]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-xs`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#061739]/6 border border-[#061739]/8 flex items-center justify-center shrink-0 group-hover:bg-[#DFB758]/15 group-hover:border-[#DFB758]/25 transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 text-[#061739] group-hover:text-[#C49838] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-[13px] font-bold text-[#061739] leading-tight">{role.label}</h3>
                  </div>
                  <p className="text-slate-500 text-[12px] leading-relaxed pl-11">{role.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile See More / Show Less Toggle Button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={handleToggleRoles}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
            >
              <span>
                {showAllRoles
                  ? "SHOW LESS"
                  : `SEE MORE CAPACITIES (${engagementRoles.length - 4} MORE)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllRoles ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {/* ── Dual Institutional Standards: Responsible Development & Confidentiality ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

            {/* Left: Responsible Project Development & Due Diligence */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14588B]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#14588B] uppercase">
                    PROJECT GOVERNANCE
                  </span>
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#061739] mb-2">
                  Responsible Project Development
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                  Where appropriate, projects are subject to rigorous independent review across essential commercial and technical disciplines:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Legal Review",
                    "Financial Assessment",
                    "Technical Evaluation",
                    "Regulatory Review",
                    "Environmental Review",
                    "Commercial Diligence",
                    "Risk Analysis",
                  ].map((discipline, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-[11px] font-semibold text-[#061739]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14588B] shrink-0" />
                      <span>{discipline}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-100">
                Working alongside qualified professional advisors and technical specialists where required.
              </p>
            </motion.div>

            {/* Right: Confidentiality & Discretion Protocol */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB758]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase">
                    DISCLOSURE PROTOCOL
                  </span>
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#061739] mb-2">
                  Confidentiality & Professional Discretion
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3">
                  Strategic partnerships frequently involve commercially sensitive negotiations, proprietary technologies, or confidential transactions.
                </p>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  HGG exercises strict discretion: only projects, institutional partnerships, and organizational relationships expressly authorized for public disclosure appear on this website.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-[#C49838] shrink-0" />
                <span className="text-[11px] font-mono text-slate-500 font-medium">
                  Protected under strict non-disclosure & non-circumvention protocols.
                </span>
              </div>
            </motion.div>

          </div>

          {/* Philosophy Objective Note Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.16}
            className="mt-6 bg-white border border-[#DFB758]/35 rounded-xl p-6 sm:p-8 flex gap-5 items-start shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#DFB758]/15 border border-[#DFB758]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-4.5 h-4.5 text-[#C49838]" />
            </div>
            <div>
              <h4 className="font-heading text-[15px] font-bold text-[#061739] mb-1">Our Objective</h4>
              <p className="text-slate-500 text-[13.5px] leading-relaxed">
                To help transform credible opportunities into structured relationships, strategic partnerships,
                and sustainable ventures capable of creating lasting value for all stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 7 — GUIDING PRINCIPLE SPEECH PANEL & CTA
      ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F1F5F9] relative overflow-hidden">
        {/* Subtle dot textures */}
        <div className="absolute left-8 top-12 w-48 h-48 opacity-[0.045] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#061739 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
        <div className="absolute right-12 bottom-12 w-56 h-56 opacity-[0.05] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#DFB758 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-md border border-slate-200"
          >
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061739]/5 border border-[#14588B]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49838]" />
                <span className="text-[10.5px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase">
                  OUR STRATEGIC COMMITMENT
                </span>
              </div>

              {/* Main Corporate Statement */}
              <blockquote className="font-heading text-lg sm:text-2xl lg:text-[1.55rem] font-bold text-[#061739] leading-[1.38] tracking-tight">
                “Rather than working in isolation, HGG brings together governments, investors, private enterprises, development institutions, and technology providers to develop innovative solutions and support projects capable of delivering long-term value.”
              </blockquote>

              {/* Gold Accent Line */}
              <div className="w-12 h-[2.5px] bg-[#DFB758] rounded-full mx-auto" />

              {/* Supporting Copy */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
                Interested in exploring partnership opportunities? We welcome the opportunity to discuss how HGG can collaborate with your organization to develop innovative solutions, facilitate strategic partnerships, and create sustainable value.
              </p>

              {/* CTA Button Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
                >
                  <span>Initiate Partnership Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-heading font-bold tracking-wider text-[#061739] border border-slate-300 hover:border-[#DFB758]/60 bg-white hover:bg-slate-50 rounded transition-all duration-300 uppercase"
                >
                  Explore Core Services
                </Link>
              </div>

              {/* Corporate Signature */}
              <div className="pt-2 text-[11px] font-heading font-bold tracking-[0.22em] text-[#061739]/70 uppercase">
                THE HINTER GROUP GHANA LTD • ACCRA, GHANA
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          DETAILED CMS PROJECT MODAL DIALOG
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Top Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9.5px] font-heading font-bold uppercase tracking-widest text-[#DFB758] px-2.5 py-0.5 rounded-full bg-[#DFB758]/15 border border-[#DFB758]/30">
                      {selectedProject.sector}
                    </span>
                    <span className="text-[9.5px] font-mono uppercase text-slate-300">
                      • {selectedProject.status.replace("_", " ")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">
                {selectedProject.imageUrl && (
                  <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )}

                {selectedProject.summary && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                      EXECUTIVE SUMMARY
                    </span>
                    <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                      {selectedProject.summary}
                    </p>
                  </div>
                )}

                {/* Deliverables */}
                {selectedProject.deliverables && selectedProject.deliverables.length > 0 && (
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                      KEY DELIVERABLES & MILESTONES
                    </span>
                    <div className="space-y-2">
                      {selectedProject.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-[#C49838] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-[12.5px] text-[#061739] font-medium leading-snug">
                            {deliv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rich Narrative (PortableText) */}
                {selectedProject.narrative && selectedProject.narrative.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                      FULL PROJECT OVERVIEW
                    </span>
                    <div className="prose prose-slate prose-xs max-w-none">
                      <CustomPortableText value={selectedProject.narrative} />
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="px-5 py-4 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-slate-600 hover:text-[#061739] bg-white border border-slate-200 hover:border-slate-300 transition-colors uppercase cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:from-[#DFB758] hover:to-[#C49838] transition-all uppercase shadow-xs"
                >
                  <span>Inquire Regarding This Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
