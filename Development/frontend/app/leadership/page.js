"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  CheckCircle2,
  X,
  Building2,
  Scale,
  ShieldCheck,
  FileCheck,
  Briefcase,
  Globe2,
  TrendingUp,
  Target,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { getLeadershipMembers, defaultLeadershipMembers } from "@/lib/sanityData";
import CustomPortableText from "@/components/ui/CustomPortableText";

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={`fill-current shrink-0 ${className}`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79v-7.6H6.46M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: custom, ease: "easeOut" },
  }),
};

/* ─────────────────────────────────────────────────────────────
   12 COLLECTIVE LEADERSHIP RESPONSIBILITIES (Verbatim from Client Docs)
───────────────────────────────────────────────────────────── */
const collectiveResponsibilities = [
  "Strategic direction, corporate planning, and long-term organizational development",
  "Opportunity identification, preliminary assessment, and strategic alignment",
  "Relationship development with government institutions, private sector entities, and strategic partners",
  "Coordination and facilitation of investment, commercial, and development initiatives",
  "Corporate governance, compliance, accountability, and institutional integrity",
  "Executive-level oversight of projects, ventures, brokerage activities, and advisory mandates",
  "Review of legal, regulatory, policy, and stakeholder considerations affecting business activities",
  "Evaluation of business models, partnerships, operational structures, and resource requirements",
  "Management of external communications, institutional representation, and brand reputation",
  "Cross-functional coordination across advisory, operational, technical, and commercial areas",
  "Identification and engagement of specialized advisors, technical partners, and project teams",
  "Periodic review of corporate performance, strategic priorities, and organizational effectiveness",
];

/* ─────────────────────────────────────────────────────────────
   10 CORE PRINCIPLES OF LEADERSHIP & GOVERNANCE
───────────────────────────────────────────────────────────── */
const leadershipPrinciples = [
  { title: "Integrity", desc: "Honesty and ethical conduct in all relationships and transactions." },
  { title: "Accountability", desc: "Clear responsibility and measurable stewardship in every engagement." },
  { title: "Professionalism", desc: "Rigorous execution, thorough preparation, and institutional respect." },
  { title: "Confidentiality", desc: "Strict non-disclosure protocols protecting proprietary client information." },
  { title: "Collaboration", desc: "Bringing complementary perspectives together around shared objectives." },
  { title: "Strategic Discipline", desc: "Methodical de-risking and structured decision frameworks." },
  { title: "Responsible Leadership", desc: "Protecting the interests of all stakeholders, communities, and partners." },
  { title: "Mutual Respect", desc: "Building sustainable relationships founded upon transparency and trust." },
  { title: "Sound Judgment", desc: "Balancing commercial ambition with pragmatic risk awareness." },
  { title: "Commitment to Excellence", desc: "Applying the highest standards across communication and execution." },
];

export default function LeadershipPage() {
  const [members, setMembers] = useState(defaultLeadershipMembers);
  const [activeBioModal, setActiveBioModal] = useState(null);
  const [activeTier, setActiveTier] = useState("all");
  const [isPhilosophyModalOpen, setIsPhilosophyModalOpen] = useState(false);
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);
  const [showAllTenets, setShowAllTenets] = useState(false);

  const handleToggleResponsibilities = () => {
    if (showAllResponsibilities) {
      setShowAllResponsibilities(false);
      const el = document.getElementById("shared-responsibilities");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllResponsibilities(true);
    }
  };

  const handleToggleTenets = () => {
    if (showAllTenets) {
      setShowAllTenets(false);
      const el = document.getElementById("core-tenets");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllTenets(true);
    }
  };

  useEffect(() => {
    async function loadMembers() {
      try {
        const liveMembers = await getLeadershipMembers();
        if (liveMembers && liveMembers.length > 0) {
          setMembers(liveMembers);
        }
      } catch (err) {
        console.warn("[Sanity Leadership Load Error]", err);
      }
    }
    loadMembers();
  }, []);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveBioModal(null);
        setIsPhilosophyModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeBioModal || isPhilosophyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeBioModal, isPhilosophyModalOpen]);

  const founder = members.find((m) => m.id === "charles-n-hammond") || members[0];
  const teamMembers = members.filter((m) => m.id !== "charles-n-hammond");

  const filteredTeam =
    activeTier === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeTier);

  return (
    <div className="bg-[#F4F5F7] text-[#0F172A] min-h-screen font-sans antialiased selection:bg-[#DFB758]/20 selection:text-[#061739]">

      {/* ─────────────────────────────────────────────────
          1. HERO  — Diagonal Split: Dark Navy Left / Landmark Photo Right
      ───────────────────────────────────────────────── */}
      <section className="relative bg-[#061739] overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] lg:h-[440px] flex items-center border-b border-[#14588B]/20">

        {/* Right: Ghana Landmark Photo */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[66%] xl:w-[64%] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/img_new_2.PNG"
            alt="Ghana Corporate Landmark"
            fill
            priority
            loading="eager"
            unoptimized
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center lg:object-[72%_24%] filter contrast-[1.06] brightness-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061739] via-[#061739]/92 to-[#061739]/30 lg:hidden" />
        </div>

        {/* Left: Solid Dark Navy Slanted Polygon (Positive Tangent) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden lg:block bg-[#061739]"
          style={{
            clipPath: "polygon(0 0, 55% 0, 39% 100%, 0 100%)",
          }}
        />

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-8 sm:py-10 lg:py-10">
          <div className="max-w-lg lg:max-w-md xl:max-w-lg space-y-3.5">

            {/* Eyebrow */}
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

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.06}
              className="font-heading text-3xl sm:text-4xl lg:text-[2.9rem] font-bold text-white tracking-tight leading-none"
            >
              Leadership & Governance
            </motion.h1>

            {/* Gold Accent Bar */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="w-12 h-[3px] bg-[#DFB758] rounded-full"
            />

            {/* Lead Narrative Copy */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="text-slate-200 text-[13px] sm:text-[13.5px] leading-relaxed font-normal"
            >
              At THE HINTER GROUP GHANA LTD, leadership is grounded in responsibility, integrity, strategic thinking, and a commitment to creating long-term value. Our leadership philosophy is built on disciplined decision-making, accountability, trusted relationships, and the ability to bring stakeholders together around shared objectives.
            </motion.p>

            {/* Quick Action Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="pt-1 flex flex-wrap items-center gap-2.5"
            >
              <button
                type="button"
                onClick={() => setIsPhilosophyModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-2 rounded-md bg-gradient-to-r from-[#DFB758] to-[#C49838] hover:from-[#E5C168] hover:to-[#DFB758] text-[#061739] font-heading text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Leadership Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#team"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 sm:py-2 rounded-md bg-white/10 hover:bg-white/15 text-white font-heading text-xs font-semibold tracking-wider uppercase transition-colors border border-white/15"
              >
                Executive Team ↓
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          2. CHAIRMAN & FOUNDER PROFILE — Premium Split Card
      ───────────────────────────────────────────────── */}
      <section id="founder" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[100px] sm:max-w-[200px]" />
              <span className="text-[10.5px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                EXECUTIVE STEWARDSHIP
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[100px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Leading with Purpose.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Building with Vision.
              </span>
            </h2>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Strategic direction, corporate oversight, and institutional partnership development connecting Ghana to international commercial networks.
            </p>
          </motion.div>

          {/* Chairman Detailed Feature Card */}
          {founder && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">

                {/* Left: Prominent Avatar / Portrait Box */}
                <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
                  {founder.portraitUrl ? (
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 border-[#DFB758]/50 shadow-xl bg-slate-100 ring-4 ring-[#DFB758]/10">
                      <Image
                        src={founder.portraitUrl}
                        alt={founder.name}
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl bg-gradient-to-br from-[#0A2457] via-[#14588B] to-[#061739] border-2 border-[#DFB758]/40 flex flex-col items-center justify-center text-white shadow-xl p-6 ring-4 ring-[#DFB758]/10">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#DFB758]/20 border border-[#DFB758] flex items-center justify-center mb-3 text-[#DFB758] font-heading font-extrabold text-3xl sm:text-4xl shadow-inner">
                        CNH
                      </div>
                      <span className="text-xs font-mono text-[#DFB758] uppercase tracking-widest font-bold">
                        FOUNDER
                      </span>
                    </div>
                  )}

                  <div className="space-y-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#061739] text-[#DFB758] text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider">
                      CHAIRMAN & FOUNDER
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#061739]">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      THE HINTER GROUP GHANA LTD
                    </p>
                  </div>
                </div>

                {/* Right: Narrative & Strategic Priorities */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed border-t lg:border-t-0 lg:border-l border-slate-200 pt-5 sm:pt-6 lg:pt-0 lg:pl-8">
                  <p className="text-slate-800 text-sm sm:text-[14.5px] font-medium leading-relaxed">
                    {founder.shortBio}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    His leadership approach is grounded in integrity, professionalism, disciplined execution, and the belief that meaningful business success is built through trusted relationships and long-term value creation.
                  </p>

                  {/* Chairman's Direct Quote Callout */}
                  <blockquote className="border-l-3 border-[#C49838] pl-3.5 sm:pl-4 py-2 bg-white rounded-r-lg text-slate-800 italic text-xs sm:text-[13px] font-medium shadow-2xs">
                    “Our commitment is not merely to business success, but to creating trusted partnerships that inspire innovation, responsible investment, and sustainable development.”
                  </blockquote>

                  {/* Action Buttons & LinkedIn Link */}
                  <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveBioModal(founder)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#061739] hover:bg-[#14588B] text-white font-heading text-xs font-bold tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Read Full Executive Biography</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFB758]" />
                    </button>

                    {founder.linkedinUrl && (
                      <a
                        href={founder.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all text-xs font-heading font-bold uppercase tracking-wider shadow-2xs"
                      >
                        <LinkedInIcon className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          3. EXECUTIVE LEADERSHIP TEAM — Dynamic CMS Roster
      ───────────────────────────────────────────────── */}
      <section id="team" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                EXECUTIVE LEADERSHIP TEAM
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Shared Responsibility.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Collaborative Execution.
              </span>
            </h2>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Working alongside the Chairman & Founder, the Executive Leadership Team contributes multidisciplinary capabilities across business coordination, stakeholder engagement, finance, and strategic research.
            </p>
          </motion.div>

          {/* Tier Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 no-scrollbar px-1">
            {[
              { id: "all", label: "All Leadership" },
              { id: "executive", label: "Executive Leadership" },
              { id: "advisory", label: "Advisory Council" },
              { id: "board", label: "Board of Directors" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTier(tab.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-md text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shrink-0 ${activeTier === tab.id
                  ? "bg-[#061739] text-[#DFB758] shadow-sm border border-[#14588B]/40"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredTeam.map((member, idx) => {
              const initials = member.name
                .replace(/^(Lt\.|Commander|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/gi, "")
                .trim()
                .split(/\s+/)
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase() || "HGG";

              return (
                <motion.div
                  key={member.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.08}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#DFB758]/50 transition-all flex flex-col justify-between group"
                >
                  {/* Prominent Large Top Image / Portrait Frame */}
                  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#0A2457] via-[#061739] to-[#14588B] overflow-hidden flex items-center justify-center">
                    {member.portraitUrl ? (
                      <Image
                        src={member.portraitUrl}
                        alt={member.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 text-center p-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 border border-[#DFB758]/40 backdrop-blur-xs flex flex-col items-center justify-center text-[#DFB758] font-heading font-extrabold text-2xl sm:text-3xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                          {initials}
                        </div>
                        <span className="text-[10.5px] font-mono text-[#DFB758] font-bold tracking-widest uppercase">
                          {member.name}
                        </span>
                      </div>
                    )}

                    {/* Tier Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-[#061739]/90 backdrop-blur-xs text-[#DFB758] border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                        {member.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-heading text-lg font-bold text-[#061739] group-hover:text-[#14588B] transition-colors leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#C49838] font-medium line-clamp-2 leading-relaxed min-h-0 sm:min-h-[32px]">
                        {member.title}
                      </p>
                      <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed line-clamp-3 pt-2 border-t border-slate-100">
                        {member.shortBio}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveBioModal(member)}
                      className="text-xs font-heading font-bold text-[#14588B] hover:text-[#C49838] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>View Role & Bio</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white hover:bg-[#0A66C2] text-slate-500 hover:text-white border border-slate-200 hover:border-[#0A66C2] text-[11px] font-mono font-bold transition-all shadow-2xs"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <LinkedInIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          4. 12 COLLECTIVE LEADERSHIP RESPONSIBILITIES
      ───────────────────────────────────────────────── */}
      <section id="shared-responsibilities" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[100px] sm:max-w-[200px]" />
              <span className="text-[10.5px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                SHARED RESPONSIBILITY
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[100px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Collective Leadership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Mandate
              </span>
            </h2>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Depending on the nature of the matter under consideration, the Executive Leadership Team collaborates with the Chairman & Founder to advance organizational objectives across 12 core disciplines.
            </p>
          </motion.div>

          {/* 12 Responsibility Cards Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4.5 max-w-6xl mx-auto">
            {collectiveResponsibilities.map((resp, idx) => {
              const isHidden = !showAllResponsibilities && idx >= 6;
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    isHidden ? "hidden sm:flex" : "flex"
                  } p-3.5 sm:p-4.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 items-start gap-3 hover:border-[#DFB758]/50 hover:bg-white transition-all shadow-2xs`}
                >
                  <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#061739] text-[#DFB758] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#061739] leading-snug">
                    {resp}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile See More / Show Less Toggle Button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={handleToggleResponsibilities}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
            >
              <span>
                {showAllResponsibilities
                  ? "SHOW LESS"
                  : `SEE MORE RESPONSIBILITIES (${collectiveResponsibilities.length - 6} MORE)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllResponsibilities ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          5. 10 LEADERSHIP PRINCIPLES & GOVERNANCE
      ───────────────────────────────────────────────── */}
      <section id="core-tenets" className="py-14 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-slate-200/80 relative overflow-hidden">
        {/* ── Right-Side Focused Background Image: img_new_1.PNG (Black Star Square - Alternating Landmark per Section 2) ── */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[50%] z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/img_new_1.PNG"
            alt="Ghana Black Star Square Background"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            unoptimized
            className="object-cover object-right lg:object-[80%_center] filter contrast-[1.08] brightness-[1.02] opacity-[0.14] sm:opacity-[0.18]"
          />
          {/* Smooth horizontal gradient fade to the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/85 to-[#F8F9FA]/50 lg:via-[#F8F9FA]/70 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F8F9FA]/90" />
          {/* Top and bottom edge blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-[#F8F9FA]/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[100px] sm:max-w-[200px]" />
              <span className="text-[10.5px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                CORE TENETS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[100px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Principles Guiding Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Stewardship
              </span>
            </h2>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Our executive leadership and governance frameworks are anchored in 10 fundamental principles applied across all stakeholder engagements.
            </p>
          </motion.div>

          {/* 10 Principles Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {leadershipPrinciples.map((item, idx) => {
              const isHidden = !showAllTenets && idx >= 4;
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    isHidden ? "hidden sm:flex" : "flex"
                  } p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#DFB758]/60 hover:-translate-y-0.5 transition-all duration-300 flex-col justify-between`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#C49838]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-heading text-sm font-bold text-[#061739]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile See More / Show Less Toggle Button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={handleToggleTenets}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
            >
              <span>
                {showAllTenets
                  ? "SHOW LESS"
                  : `SEE MORE TENETS (${leadershipPrinciples.length - 4} MORE)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllTenets ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {/* 4 Governance Standards Cards */}
          <div className="mt-10 sm:mt-14 pt-8 sm:pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#C49838] uppercase">
                INSTITUTIONAL INTEGRITY
              </span>
              <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#061739]">
                Governance & Accountability Standards
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Fiduciary Oversight",
                  desc: "Structured decision frameworks and risk reviews for all commercial and advisory initiatives.",
                },
                {
                  icon: Scale,
                  title: "Regulatory Compliance",
                  desc: "Strict adherence to Ghanaian legal requirements and international compliance standards.",
                },
                {
                  icon: FileCheck,
                  title: "Confidentiality Protocols",
                  desc: "Robust non-disclosure agreements protecting proprietary partner and project details.",
                },
                {
                  icon: Building2,
                  title: "Institutional Stewardship",
                  desc: "Long-term value creation aligned with national economic development priorities.",
                },
              ].map((std, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200/90 space-y-2 sm:space-y-2.5 shadow-2xs hover:shadow-sm hover:border-[#DFB758]/50 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#061739] text-[#DFB758] flex items-center justify-center">
                    <std.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#061739]">
                    {std.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────
              6. GUIDING PRINCIPLE BOTTOM CALLOUT CARD
          ───────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden shadow-sm border border-slate-200 mt-10 sm:mt-14 max-w-4xl mx-auto"
          >
            <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061739]/5 border border-[#14588B]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49838]" />
                <span className="text-[10px] sm:text-[10.5px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase">
                  OUR GUIDING PRINCIPLE
                </span>
              </div>

              <blockquote className="font-heading text-base sm:text-xl lg:text-[1.45rem] font-bold text-[#061739] leading-[1.38] tracking-tight">
                “At HGG, we believe that long-term success is built through trusted relationships, responsible leadership, disciplined execution, and a genuine commitment to creating value for all stakeholders.”
              </blockquote>

              <div className="w-12 h-[2.5px] bg-[#DFB758] rounded-full mx-auto" />

              <div className="pt-2 sm:pt-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#0A2457] to-[#061739] hover:from-[#14588B] hover:to-[#0A2457] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                >
                  <span>Connect with HGG Executive Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFB758]" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          7. BIOGRAPHY MODAL POPUP (Optimized 90dvh for Mobile)
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeBioModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBioModal(null)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10 flex items-start gap-4">
                {activeBioModal.portraitUrl && (
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#DFB758]/40 shrink-0 shadow-md bg-slate-800">
                    <Image
                      src={activeBioModal.portraitUrl}
                      alt={activeBioModal.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                )}

                <div className="space-y-1.5 pr-8 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#DFB758] text-[#061739] uppercase tracking-wider inline-block">
                      {activeBioModal.category}
                    </span>

                    {activeBioModal.linkedinUrl && (
                      <a
                        href={activeBioModal.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0A66C2]/20 hover:bg-[#0A66C2] text-white border border-[#0A66C2]/40 transition-colors text-[10.5px] font-mono font-bold tracking-wider"
                      >
                        <LinkedInIcon className="w-3 h-3 text-[#00A0DC]" />
                        <span>LinkedIn Profile ↗</span>
                      </a>
                    )}
                  </div>

                  <h3 className="font-heading text-lg sm:text-2xl font-bold leading-tight pt-0.5">
                    {activeBioModal.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    {activeBioModal.title}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveBioModal(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Close biography modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed flex-1 max-h-[calc(90dvh-130px)]">
                {activeBioModal.fullBiography && Array.isArray(activeBioModal.fullBiography) ? (
                  <CustomPortableText value={activeBioModal.fullBiography} />
                ) : typeof activeBioModal.fullBiography === "string" ? (
                  activeBioModal.fullBiography
                    .split("\n\n")
                    .map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                ) : (
                  <p>{activeBioModal.shortBio}</p>
                )}

                {activeBioModal.principles && activeBioModal.principles.length > 0 && (
                  <div className="pt-4 mt-6 border-t border-slate-200 space-y-2.5">
                    <h4 className="text-xs font-heading font-bold tracking-wider text-[#061739] uppercase">
                      {activeBioModal.id === "charles-n-hammond"
                        ? "Core Leadership Priorities & Mandates:"
                        : "Core Focus & Responsibilities:"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {activeBioModal.principles.map((pr, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#F8FAFC] p-2.5 rounded-md border border-slate-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C49838] shrink-0" />
                          <span className="leading-snug">{pr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveBioModal(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-heading font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────
          8. PHILOSOPHY OVERVIEW MODAL POPUP (Optimized 90dvh for Mobile)
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isPhilosophyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPhilosophyModalOpen(false)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setIsPhilosophyModalOpen(false)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Close philosophy modal"
                >
                  <X className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DFB758]">
                  EXECUTIVE GOVERNANCE
                </span>
                <h3 className="font-heading text-lg sm:text-2xl font-bold leading-tight pt-1">
                  Our Leadership Philosophy
                </h3>
              </div>

              <div className="p-5 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed flex-1 max-h-[calc(90dvh-130px)]">
                <p>
                  At THE HINTER GROUP GHANA LTD, leadership is grounded in responsibility, integrity, strategic thinking, and a commitment to creating long-term value.
                </p>
                <p>
                  Our leadership philosophy is built on the belief that sustainable success requires more than authority. It requires disciplined decision-making, accountability, trusted relationships, and the ability to bring people together around shared objectives.
                </p>
                <p className="font-semibold text-[#061739]">
                  We believe effective leadership means:
                </p>
                <ul className="space-y-2.5 pl-1">
                  {[
                    "Setting a clear strategic direction",
                    "Protecting the interests of the organization and its stakeholders",
                    "Making informed and responsible decisions",
                    "Building trusted relationships",
                    "Encouraging collaboration and accountability",
                    "Maintaining professional and ethical standards",
                    "Supporting innovation and long-term growth",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C49838] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setIsPhilosophyModalOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-heading font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
