"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Sparkles,
  Users2,
  Briefcase,
  Leaf,
  Lightbulb,
  Puzzle,
  Settings,
  TrendingUp,
  ChevronDown,
  Search,
  CheckSquare,
  Network,
  GitMerge,
  Rocket,
  LineChart,
} from "lucide-react";

/* ── 6 Core Values verbatim from HGG_Public_Website_Copy.docx ── */
const values = [
  "Integrity",
  "Excellence",
  "Innovation",
  "Collaboration",
  "Professionalism",
  "Sustainability",
];

/* ── Approved 6-Stage Strategic Approach (Client Brief Section 5 & 12) ── */
const steps = [
  {
    step: "01",
    title: "Identify",
    description: "Screening credible commercial opportunities.",
    icon: Search,
  },
  {
    step: "02",
    title: "Evaluate",
    description: "Rigorous viability and risk evaluation.",
    icon: CheckSquare,
  },
  {
    step: "03",
    title: "Connect",
    description: "Aligning capital, partners, and institutions.",
    icon: Network,
  },
  {
    step: "04",
    title: "Coordinate",
    description: "Building consensus and governance clarity.",
    icon: GitMerge,
  },
  {
    step: "05",
    title: "Advance",
    description: "Structuring actionable implementation.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Create Value",
    description: "Delivering lasting, sustainable outcomes.",
    icon: LineChart,
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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export default function AboutFoundationSection() {
  const [showFoundation, setShowFoundation] = useState(false);

  const handleToggleFoundation = () => {
    if (showFoundation) {
      setShowFoundation(false);
      const el = document.getElementById("our-foundation");
      if (el) {
        const offset = el.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    } else {
      setShowFoundation(true);
    }
  };

  return (
    <section id="about-foundation" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      
      {/* ── 1. RIGHT BACKGROUND: GHANA INDEPENDENCE ARCH (Properly blended across full height) ── */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[52%] pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/images/img_new_2.PNG"
          alt="Ghana Independence Arch Watermark"
          fill
          priority
          loading="eager"
          unoptimized
          sizes="50vw"
          className="object-cover object-[center_25%] opacity-[0.14] lg:opacity-[0.20] filter contrast-[1.08] saturate-110"
        />
        {/* Smooth multi-direction gradient masks to blend cleanly into the white background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: WHO WE ARE (With Right Dividing Border on Desktop) ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-slate-200 space-y-4 sm:space-y-5"
          >
            {/* Tag */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C49838] uppercase">
                WHO WE ARE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              custom={0.06}
              className="font-heading text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#061739] leading-[1.18] tracking-tight"
            >
              Building Bridges Between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838] block sm:inline">
                Opportunity and Investment
              </span>
            </motion.h2>

            {/* Gold Divider Line */}
            <motion.div
              variants={fadeUp}
              custom={0.1}
              className="w-14 h-[3px] bg-[#C49838] rounded-full"
            />

            {/* Body Paragraph 1 (Verbatim from docx) */}
            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="text-slate-700 text-xs sm:text-[13.5px] leading-relaxed font-normal"
            >
              <strong className="text-[#061739] font-bold">
                THE HINTER GROUP GHANA LTD (HGG)
              </strong>{" "}
              is a Ghana-based consulting, ventures, and brokerage company
              dedicated to identifying, developing, and advancing strategic
              business and investment opportunities across Ghana and
              international markets.
            </motion.p>

            {/* Body Paragraph 2 (Verbatim from docx) */}
            <motion.p
              variants={fadeUp}
              custom={0.18}
              className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal"
            >
              Founded on the principles of integrity, professionalism,
              innovation, and excellence, HGG serves as a trusted bridge between
              governments, private enterprises, investors, technology providers,
              development institutions, and strategic partners seeking to create
              sustainable economic value.
            </motion.p>

            {/* Body Paragraph 3 (Verbatim from docx) */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal hidden sm:block"
            >
              Our approach extends beyond traditional consulting. We work
              collaboratively with our partners to identify opportunities,
              facilitate meaningful relationships, coordinate stakeholders, and
              support the successful development and execution of projects that
              contribute to long-term growth and positive impact.
            </motion.p>

            {/* CTA Button (Matching Explore HGG Gold Gradient Button) - DESKTOP ONLY */}
            <motion.div variants={fadeUp} custom={0.22} className="pt-2 hidden lg:block">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] bg-[length:200%_auto] hover:bg-right rounded-md shadow-[0_2px_16px_rgba(196,152,56,0.28)] hover:shadow-[0_4px_24px_rgba(223,183,88,0.45)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-[#061739] transition-transform group-hover:translate-x-1 duration-300" />
              </Link>
            </motion.div>

            {/* Bottom Monogram Watermark & Tagline */}
            <motion.div
              variants={fadeUp}
              custom={0.26}
              className="pt-4 sm:pt-5 mt-2 lg:mt-0 flex items-center gap-3 border-t border-slate-200/80"
            >
              <div className="relative w-6 h-6 flex-shrink-0 opacity-40">
                <Image
                  src="/assets/logos/Favicon/Logo_Favicon.svg"
                  alt="HGG Monogram"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10.5px] font-mono font-semibold tracking-[0.28em] text-slate-400 uppercase">
                COMMITTED TO EXCELLENCE
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: OUR FOUNDATION (TOP) + OUR STRATEGIC APPROACH (BOTTOM) ── */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 lg:space-y-12">

            {/* 1. OUR FOUNDATION (Verbatim from docx: Mission, Vision, Values) */}
            <motion.div
              id="our-foundation"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-5 sm:space-y-6"
            >
              {/* Header with Gold Rule */}
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <h3 className="text-xs font-mono font-bold tracking-[0.22em] text-[#C49838] uppercase whitespace-nowrap">
                  OUR FOUNDATION
                </h3>
                <span className="h-[1px] w-full bg-[#DFB758]/50" />
              </motion.div>

              {/* 3 Columns Grid (Cards on mobile for clarity, side-by-side on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
                
                {/* Mission Card (Always visible on mobile & desktop) */}
                <motion.div
                  variants={fadeUp}
                  className="p-4 sm:p-0 rounded-xl sm:rounded-none bg-[#F8FAFC] sm:bg-transparent border border-slate-200/80 sm:border-none space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-md sm:rounded-full bg-[#061739]/5 flex items-center justify-center text-[#061739] mb-1.5 sm:mb-3">
                    <Target className="w-5 h-5 text-[#061739]" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#061739]">
                    Our Mission
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    To connect strategic opportunities with the right people,
                    organizations, technologies, and investments while delivering
                    innovative consulting, venture development, and brokerage
                    solutions that create lasting economic and social value.
                  </p>
                </motion.div>

                {/* Vision Card (Expandable on mobile, always visible on sm+) */}
                <motion.div
                  variants={fadeUp}
                  className={`p-4 sm:p-0 rounded-xl sm:rounded-none bg-[#F8FAFC] sm:bg-transparent border border-slate-200/80 sm:border-none space-y-2.5 ${
                    showFoundation ? "block" : "hidden sm:block"
                  }`}
                >
                  <div className="w-9 h-9 rounded-md sm:rounded-full bg-[#C49838]/10 flex items-center justify-center text-[#C49838] mb-1.5 sm:mb-3">
                    <Eye className="w-5 h-5 text-[#C49838]" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#061739]">
                    Our Vision
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    To become one of Africa&apos;s most trusted consulting,
                    ventures, and brokerage companies, recognized internationally
                    for facilitating transformative partnerships, responsible
                    investments, and sustainable development initiatives.
                  </p>
                </motion.div>

                {/* Core Values Card (Expandable on mobile, always visible on sm+) */}
                <motion.div
                  variants={fadeUp}
                  className={`p-4 sm:p-0 rounded-xl sm:rounded-none bg-[#F8FAFC] sm:bg-transparent border border-slate-200/80 sm:border-none space-y-2.5 ${
                    showFoundation ? "block" : "hidden sm:block"
                  }`}
                >
                  <div className="w-9 h-9 rounded-md sm:rounded-full bg-[#14588B]/10 flex items-center justify-center text-[#14588B] mb-1.5 sm:mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#14588B]" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#061739]">
                    Our Core Values
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-1.5 text-xs text-slate-600 font-normal">
                    {values.map((v, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C49838] flex-shrink-0" />
                        <span className="font-medium text-slate-700">{v}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>

              {/* Read More / Read Less Toggle Button (Mobile Only) */}
              <div className="sm:hidden pt-1 flex justify-center">
                <button
                  onClick={handleToggleFoundation}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#061739] hover:text-[#C49838] rounded-md font-heading text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
                >
                  <span>{showFoundation ? "SHOW LESS" : "SEE VISION & VALUES"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      showFoundation ? "rotate-180 text-[#C49838]" : "rotate-0 text-slate-500"
                    }`}
                  />
                </button>
              </div>
            </motion.div>

            {/* 2. OUR STRATEGIC APPROACH (4 Connected Steps) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
              className="space-y-5 sm:space-y-6"
            >
              {/* Header with Gold Rule */}
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <h3 className="text-xs font-mono font-bold tracking-[0.22em] text-[#C49838] uppercase whitespace-nowrap">
                  OUR 6-STAGE STRATEGIC APPROACH
                </h3>
                <span className="h-[1px] w-full bg-[#DFB758]/50" />
              </motion.div>

              {/* 6 Steps Container with Centered High-Visibility Connecting Line */}
              <div className="relative pt-2">
                {/* Precision Vector Dotted Line (Desktop - Connects Centers of Step 1 to Step 6) */}
                <div className="hidden lg:block absolute top-[30px] left-[8.33%] right-[8.33%] z-0 pointer-events-none">
                  <svg className="w-full h-[3px] overflow-visible" fill="none">
                    <line
                      x1="0"
                      y1="1.5"
                      x2="100%"
                      y2="1.5"
                      stroke="#061739"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      strokeOpacity="0.30"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-2.5 relative z-10">
                  {steps.map((stepItem, idx) => {
                    const Icon = stepItem.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={fadeUp}
                        custom={idx * 0.06}
                        className="p-3 sm:p-2 rounded-xl sm:rounded-none bg-[#F8FAFC] sm:bg-transparent border border-slate-200/80 sm:border-none flex flex-col items-center text-center group relative"
                      >
                        {/* Circular Dark Navy Icon Badge with Solid White Outline for Crisp Connector Cutout */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#061739] text-[#DFB758] ring-4 ring-white flex items-center justify-center mb-2 shadow-md group-hover:scale-105 group-hover:bg-[#0A2457] group-hover:shadow-lg transition-all duration-300 relative z-10">
                          <Icon className="w-5 h-5" />
                          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#DFB758] text-[#061739] font-mono font-extrabold text-[8.5px] flex items-center justify-center shadow-xs">
                            {stepItem.step}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-heading text-xs sm:text-[13px] font-bold text-[#061739] mb-1 group-hover:text-[#14588B] transition-colors uppercase tracking-wider">
                          {stepItem.title}
                        </h4>

                        {/* Description */}
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight font-normal line-clamp-2">
                          {stepItem.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* 3. EXECUTIVE COMMITMENT & VALUE DELIVERY BAR (Fills Bottom Right Void & Balances Height) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="bg-gradient-to-r from-slate-50/90 via-white/95 to-slate-50/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs backdrop-blur-md"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                <div className="flex items-center gap-3 sm:pr-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#061739]/5 flex items-center justify-center text-[#061739] flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C49838]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#061739]">Strict Confidentiality</h5>
                    <p className="text-[11px] text-slate-500 font-normal">Institutional oversight & trust</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#061739]/5 flex items-center justify-center text-[#061739] flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#14588B]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#061739]">Strategic Synergy</h5>
                    <p className="text-[11px] text-slate-500 font-normal">Public & private facilitation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#061739]/5 flex items-center justify-center text-[#061739] flex-shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#059669]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#061739]">Sustainable Value</h5>
                    <p className="text-[11px] text-slate-500 font-normal">Long-term economic impact</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ── MOBILE CTA BUTTON (AT THE BOTTOM) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="lg:hidden flex justify-center w-full mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/60"
        >
          <Link
            href="/about-us"
            className="w-full sm:w-auto text-center inline-flex justify-center items-center gap-2.5 px-7 py-3.5 text-xs sm:text-[13px] font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] bg-[length:200%_auto] hover:bg-right rounded-md shadow-[0_2px_16px_rgba(196,152,56,0.28)] transition-all duration-300 group min-h-[48px]"
          >
            <span>DISCOVER OUR STORY</span>
            <ArrowRight className="w-4 h-4 text-[#061739] transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
