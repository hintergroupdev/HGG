"use client";

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

const steps = [
  {
    title: "Understand",
    description: "We listen, research, and gain deep insight.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description: "We craft tailored strategies and solutions.",
    icon: Puzzle,
  },
  {
    title: "Execute",
    description: "We implement with discipline and precision.",
    icon: Settings,
  },
  {
    title: "Deliver Impact",
    description: "We measure results and drive sustainable growth.",
    icon: TrendingUp,
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

/* ── Custom Looping Arrow Vector Graphic ── */
function SpiralLoopArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gold-spiral-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C49838" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#DFB758" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F5E2B3" stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        d="M 35 210 C 15 155 25 80 80 48 C 145 12 190 90 150 155 C 110 205 70 160 80 105 C 92 55 160 38 230 26"
        stroke="url(#gold-spiral-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M 205 14 L 236 25 L 220 52"
        stroke="url(#gold-spiral-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutFoundationSection() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      
      {/* ── 1. RIGHT BACKGROUND: GHANA INDEPENDENCE ARCH (More Visible & Crisp) ── */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/assets/images/arch.jpg"
          alt="Ghana Independence Arch Watermark"
          fill
          priority
          loading="eager"
          unoptimized
          sizes="60vw"
          className="object-cover object-right opacity-[0.22] filter contrast-110"
        />
        {/* Subtle gradient masks for smooth transition without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      </div>

      {/* ── 2. BACKGROUND SPIRAL LOOP ARROW (Positioned at Right Bottom) ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -bottom-10 -right-6 sm:bottom-0 sm:right-6 lg:bottom-2 lg:right-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-70 lg:opacity-85 filter drop-shadow-[0_6px_20px_rgba(223,183,88,0.3)]"
        >
          <SpiralLoopArrow className="w-full h-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: WHO WE ARE (With Right Dividing Border on Desktop) ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-slate-200 space-y-5"
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
              className="font-heading text-3xl sm:text-[2.5rem] font-extrabold text-[#061739] leading-[1.18] tracking-tight"
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

            {/* CTA Button (Matching Explore HGG Gold Gradient Button) */}
            <motion.div variants={fadeUp} custom={0.22} className="pt-2">
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
              className="pt-5 flex items-center gap-3 border-t border-slate-200/80"
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

          {/* ── RIGHT COLUMN: OUR FOUNDATION + OUR STRATEGIC APPROACH ── */}
          <div className="lg:col-span-7 space-y-12">

            {/* 1. OUR FOUNDATION (Verbatim from docx: Mission, Vision, Values) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-6"
            >
              {/* Header with Gold Rule */}
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <h3 className="text-xs font-mono font-bold tracking-[0.22em] text-[#C49838] uppercase whitespace-nowrap">
                  OUR FOUNDATION
                </h3>
                <span className="h-[1px] w-full bg-[#DFB758]/50" />
              </motion.div>

              {/* 3 Columns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">
                
                {/* Mission (Verbatim docx) */}
                <motion.div variants={fadeUp} className="space-y-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#061739]/5 flex items-center justify-center text-[#061739] mb-3">
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

                {/* Vision (Verbatim docx) */}
                <motion.div variants={fadeUp} className="space-y-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#C49838]/10 flex items-center justify-center text-[#C49838] mb-3">
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

                {/* Core Values (Verbatim 6 Values from docx) */}
                <motion.div variants={fadeUp} className="space-y-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#14588B]/10 flex items-center justify-center text-[#14588B] mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#14588B]" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#061739]">
                    Our Core Values
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-normal">
                    {values.map((v, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C49838] flex-shrink-0" />
                        <span className="font-medium text-slate-700">{v}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </motion.div>

            {/* 2. OUR STRATEGIC APPROACH (4 Connected Steps) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
              className="space-y-6"
            >
              {/* Header with Gold Rule */}
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <h3 className="text-xs font-mono font-bold tracking-[0.22em] text-[#C49838] uppercase whitespace-nowrap">
                  OUR STRATEGIC APPROACH
                </h3>
                <span className="h-[1px] w-full bg-[#DFB758]/50" />
              </motion.div>

              {/* 4 Steps Container with Centered High-Visibility Connecting Line */}
              <div className="relative pt-2">
                {/* Precision Vector Dotted Line (Desktop - Connects Centers of Step 1 to Step 4) */}
                <div className="hidden lg:block absolute top-[35px] left-[12.5%] right-[12.5%] z-0 pointer-events-none">
                  <svg className="w-full h-[3px] overflow-visible" fill="none">
                    <line
                      x1="0"
                      y1="1.5"
                      x2="100%"
                      y2="1.5"
                      stroke="#061739"
                      strokeWidth="2.5"
                      strokeDasharray="5 7"
                      strokeOpacity="0.35"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
                  {steps.map((stepItem, idx) => {
                    const Icon = stepItem.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={fadeUp}
                        custom={idx * 0.08}
                        className="flex flex-col items-center text-center group"
                      >
                        {/* Circular Dark Navy Icon Badge with Solid White Outline for Crisp Connector Cutout */}
                        <div className="w-14 h-14 rounded-full bg-[#061739] text-[#DFB758] ring-4 ring-white flex items-center justify-center mb-3.5 shadow-md group-hover:scale-110 group-hover:bg-[#0A2457] group-hover:shadow-lg transition-all duration-300 relative z-10">
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Title */}
                        <h4 className="font-heading text-sm sm:text-base font-bold text-[#061739] mb-1.5 group-hover:text-[#14588B] transition-colors">
                          {stepItem.title}
                        </h4>

                        {/* Description */}
                        <p className="text-[11.5px] text-slate-500 leading-snug font-normal">
                          {stepItem.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
