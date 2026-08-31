"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Award,
  Lock,
  Users2,
  Leaf,
  Handshake,
  CheckCircle2,
  Search,
  CheckSquare,
  Network,
  GitMerge,
  Rocket,
  LineChart,
  Lightbulb,
  Scale,
  Quote,
  Target,
  Eye,
  Globe2,
  Sparkles,
  TrendingUp,
  X,
  Building2,
  Zap,
  Recycle,
  Home,
  Sprout,
  HeartPulse,
  Cpu,
  GraduationCap,
  Compass,
  Briefcase,
} from "lucide-react";

/* ── Clean & Subtle Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: Math.min(custom, 0.18),
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: Math.min(custom, 0.12),
      ease: "easeOut",
    },
  }),
};

/* ── Core Values ── */
const coreValues = [
  { icon: ShieldCheck, title: "Integrity", description: "We conduct every engagement with honesty, transparency, accountability, and ethical leadership. We believe trust must be earned through consistent actions, responsible leadership, and adherence to the highest ethical standards." },
  { icon: Award, title: "Excellence", description: "Excellence is not simply an aspiration; it is the standard by which we measure our work. We strive for quality, professionalism, disciplined execution, continuous improvement, and attention to detail in every engagement." },
  { icon: Lock, title: "Professionalism", description: "We approach every relationship and assignment with competence, discretion, reliability, preparedness, and respect. HGG is committed to maintaining professional standards that inspire confidence among clients, investors, and institutions." },
  { icon: Users2, title: "Collaboration", description: "We believe meaningful and sustainable progress is rarely achieved in isolation. HGG promotes collaboration by bringing together individuals and organizations with complementary capabilities, shared objectives, and a commitment to creating mutual value." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace forward-looking ideas, technologies, business models, and solutions capable of addressing evolving economic, social, environmental, and commercial challenges." },
  { icon: Scale, title: "Accountability", description: "We believe responsible leadership requires accountability. HGG takes its commitments seriously and strives to communicate clearly, manage expectations responsibly, and remain accountable for the role we undertake in every engagement." },
  { icon: Leaf, title: "Sustainability", description: "We support opportunities and partnerships that balance commercial objectives with long-term economic, environmental, and social considerations. Our goal is to help advance initiatives capable of creating value today while contributing positively to future generations." },
  { icon: Handshake, title: "Respect", description: "We recognize the importance of culture, institutions, communities, professional expertise, and diverse perspectives. Every HGG relationship is approached with dignity, fairness, and respect." },
];

/* ── 9 Priority Focus Corridors ── */
const priorityCorridors = [
  {
    id: "infrastructure",
    number: "01",
    title: "Infrastructure & Urban Development",
    category: "Strategic Infrastructure & Municipal Systems",
    color: "#0284C7", // Azure Blue
    summary:
      "Supporting projects that improve transportation, public infrastructure, urban planning, and community development while promoting long-term economic growth.",
    extendedDetails:
      "Transportation corridors, ports, rail networks, modern municipal infrastructure, and smart industrial park planning across Ghana and regional trade routes.",
    strategicFocus: [
      "Transportation Corridors",
      "Public Infrastructure",
      "Urban Master Planning",
      "Smart Industrial Parks",
      "Municipal Services",
    ],
    stakeholders: ["Ministry of Roads & Highways", "Urban Authorities", "Infrastructure Funds", "EPC Contractors"],
  },
  {
    id: "energy",
    number: "02",
    title: "Energy & Environmental Solutions",
    category: "Clean Power, Storage & Transition",
    color: "#EAB308", // Sun Gold
    summary:
      "Facilitating opportunities involving renewable energy, energy transition, environmental sustainability, circular economy initiatives, and responsible resource management.",
    extendedDetails:
      "Advancing clean energy transition, commercial & utility solar systems, grid modernization, battery storage, and energy efficiency solutions.",
    strategicFocus: [
      "Utility & Rooftop Solar",
      "Grid Modernization",
      "Battery Energy Storage (BESS)",
      "Decarbonization Systems",
      "Clean Energy Transition",
    ],
    stakeholders: ["Energy Developers", "Independent Power Producers (IPPs)", "Clean Tech Providers", "DFIs"],
  },
  {
    id: "waste",
    number: "03",
    title: "Waste Management & Resource Recovery",
    category: "Circular Economy & Resource Optimization",
    color: "#10B981", // Emerald Green
    summary:
      "Supporting innovative waste management solutions, recycling initiatives, waste-to-resource opportunities, and environmentally responsible technologies that contribute to cleaner and more sustainable communities.",
    extendedDetails:
      "Structuring circular economy initiatives, recycling facilities, waste-to-energy assets, industrial resource recovery, and sustainable municipal waste management.",
    strategicFocus: [
      "Recycling Infrastructure",
      "Waste-to-Resource Tech",
      "Circular Economy Hubs",
      "Industrial Byproduct Recovery",
      "Ecological Stewardship",
    ],
    stakeholders: ["Municipal Assemblies", "Environmental Authorities", "Recycling Operators", "Green Investors"],
  },
  {
    id: "real-estate",
    number: "04",
    title: "Real Estate & Property Development",
    category: "Commercial, Logistics & Residential Assets",
    color: "#F97316", // Terracotta Bronze
    summary:
      "Identifying and supporting strategic real estate opportunities, commercial developments, mixed-use projects, and property investment initiatives.",
    extendedDetails:
      "Connecting institutional investors, asset owners, and master developers for prime commercial hubs, modern logistics warehouses, and residential schemes.",
    strategicFocus: [
      "Commercial Prime Hubs",
      "Logistics & Warehousing",
      "Mixed-Use Developments",
      "Master-Planned Communities",
      "Asset Development Advisory",
    ],
    stakeholders: ["Institutional Landowners", "Property Developers", "REITs", "Commercial Tenants"],
  },
  {
    id: "agriculture",
    number: "05",
    title: "Agriculture & Agribusiness",
    category: "Value Chains, Processing & Export",
    color: "#84CC16", // Agro Lime Green
    summary:
      "Promoting opportunities across agriculture, food production, agribusiness development, value-chain enhancement, agro-processing, and food security initiatives.",
    extendedDetails:
      "Unlocking commercial value chains through farming ventures, agro-processing facilities, cold-chain storage logistics, and international export linkages.",
    strategicFocus: [
      "Commercial Farming Ventures",
      "Agro-Processing Plants",
      "Cold-Chain Logistics",
      "Outgrower Networks",
      "Export Market Access",
    ],
    stakeholders: ["Agribusiness Cooperatives", "Commodity Exporters", "Food Processors", "Agri-Funds"],
  },
  {
    id: "healthcare",
    number: "06",
    title: "Healthcare & Life Sciences",
    category: "Medical Infrastructure & Health Technology",
    color: "#F43F5E", // Rose Medical
    summary:
      "Supporting investments and partnerships that strengthen healthcare delivery, medical infrastructure, public health initiatives, health technologies, and life science innovation.",
    extendedDetails:
      "Facilitating partnerships for state-of-the-art medical centers, diagnostic facilities, pharmaceutical manufacturing, and healthcare supply chain modernization.",
    strategicFocus: [
      "Diagnostic & Clinical Centers",
      "Specialized Hospitals",
      "Pharma Manufacturing",
      "Health Supply Chains",
      "Medical Innovation",
    ],
    stakeholders: ["Health Authorities", "Hospital Operators", "Pharma Producers", "Healthcare Investors"],
  },
  {
    id: "technology",
    number: "07",
    title: "Technology & Digital Transformation",
    category: "Digital Infrastructure & Enterprise Innovation",
    color: "#6366F1", // Cyber Indigo
    summary:
      "Encouraging innovation through technology partnerships, digital solutions, smart infrastructure, emerging technologies, and business transformation initiatives.",
    extendedDetails:
      "Deploying scalable fintech rails, enterprise software platforms, cloud data centers, smart telecommunications infrastructure, and digital economy systems.",
    strategicFocus: [
      "Fintech & Payment Rails",
      "Data Center Infrastructure",
      "Enterprise Platforms",
      "Smart City Tech",
      "Digital System Integration",
    ],
    stakeholders: ["Tech Enterprises", "Telecom Providers", "Fintech Scaleups", "Digital Regulators"],
  },
  {
    id: "trade",
    number: "08",
    title: "International Trade & Investment",
    category: "Cross-Border Commerce & AfCFTA Enablement",
    color: "#06B6D4", // Cyan Commerce
    summary:
      "Building relationships that encourage responsible international investment, cross-border collaboration, technology transfer, and sustainable economic partnerships.",
    extendedDetails:
      "Enabling cross-border commerce, AfCFTA trade enablement, capital importation, and strategic international joint ventures connecting Africa with global markets.",
    strategicFocus: [
      "AfCFTA Trade Facilitation",
      "Foreign Direct Investment (FDI)",
      "Cross-Border JVs",
      "Technology Transfer",
      "Bilateral Commerce",
    ],
    stakeholders: ["Trade Ministries", "Bilateral Chambers", "Foreign Investors", "Multinational Corporations"],
  },
  {
    id: "education",
    number: "09",
    title: "Education & Human Capital Development",
    category: "Workforce Capacity, TVET & Executive Learning",
    color: "#A855F7", // Purple Academy
    summary:
      "Supporting educational institutions, workforce development initiatives, vocational training, research collaboration, knowledge exchange, and leadership development programs.",
    extendedDetails:
      "Supporting technical institutions, vocational training centers, executive learning academies, and international academic partnerships.",
    strategicFocus: [
      "Technical & Vocational (TVET)",
      "Executive Leadership Programs",
      "Workforce Skill Centers",
      "University Partnerships",
      "Applied Research",
    ],
    stakeholders: ["Academic Institutions", "TVET Authorities", "Corporate Training Boards", "Educational Foundations"],
  },
];

/* ── Why Choose HGG ── */
const whyChooseHgg = [
  {
    icon: Globe2,
    title: "Local Insight With Global Outlook",
    description: "HGG is rooted in Ghana while maintaining an international perspective. This allows us to understand local realities, institutional structures, business environments, cultural considerations, and stakeholder dynamics while remaining connected to global opportunities, technologies, investors, and strategic partners.",
  },
  {
    icon: Handshake,
    title: "Relationship-Driven Approach",
    description: "We believe strong relationships are the foundation of sustainable business. HGG places significant importance on trust, communication, mutual respect, confidentiality, and long-term collaboration. Our objective is not simply to facilitate an introduction, but to help create relationships capable of developing into meaningful and sustainable partnerships.",
  },
  {
    icon: GitMerge,
    title: "Strategic Stakeholder Coordination",
    description: "Complex opportunities often involve multiple stakeholders with different responsibilities, expectations, and priorities. HGG helps facilitate communication and coordination among governments, businesses, investors, institutions, technology providers, development organizations, and other relevant parties.",
  },
  {
    icon: Target,
    title: "Disciplined Opportunity Development",
    description: "Not every opportunity should be pursued. HGG approaches potential projects and partnerships with strategic consideration, seeking to understand commercial viability, stakeholder interests, long-term value, and the broader development objectives involved.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Confidentiality",
    description: "Trust is central to our work. HGG understands that strategic transactions and partnerships frequently involve commercially sensitive information, proprietary relationships, and confidential discussions. We therefore approach engagements with professionalism, discretion, and respect for the interests of all parties involved.",
  },
  {
    icon: Lightbulb,
    title: "Collaborative Problem Solving",
    description: "We do not believe in imposing one-size-fits-all solutions. Every engagement is approached according to its individual circumstances, objectives, stakeholders, and challenges. HGG works collaboratively with clients and partners to identify practical pathways capable of advancing shared objectives.",
  },
  {
    icon: Users2,
    title: "Long-Term Partnership Mindset",
    description: "HGG seeks relationships that extend beyond individual transactions. We aim to become a trusted long-term partner to organizations that value professionalism, transparency, responsible growth, and strategic collaboration.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "Our corporate motto, \"Committed to Excellence,\" reflects more than a branding statement. It represents the standard we seek to apply to our communication, relationships, strategic thinking, execution, and professional conduct.",
  },
];

/* ── Strategic Pathway ── */
const pathwaySteps = [
  { step: "01", title: "IDENTIFY", subtitle: "Identifying credible opportunities.", icon: Search, description: "HGG identifies business, investment, partnership, and development opportunities that demonstrate potential for economic, commercial, technological, environmental, or social value. We remain focused on opportunities that align with responsible growth, strategic collaboration, and long-term sustainability." },
  { step: "02", title: "EVALUATE", subtitle: "Understanding the opportunity.", icon: CheckSquare, description: "Before advancing an opportunity, HGG seeks to understand its objectives, stakeholders, potential risks, commercial considerations, development impact, and overall strategic relevance. This helps ensure that relationships and resources are directed toward opportunities with meaningful potential." },
  { step: "03", title: "CONNECT", subtitle: "Bringing the right stakeholders together.", icon: Network, description: "HGG connects opportunities with the organizations, investors, institutions, technologies, expertise, and strategic relationships capable of helping advance them. Our role is to create meaningful connections rather than simply introductions." },
  { step: "04", title: "COORDINATE", subtitle: "Building alignment among stakeholders.", icon: GitMerge, description: "Complex opportunities often involve multiple parties with different responsibilities and expectations. HGG facilitates communication, stakeholder engagement, and coordination in order to help establish clarity, shared objectives, and constructive collaboration throughout the development process." },
  { step: "05", title: "ADVANCE", subtitle: "Supporting the path toward implementation.", icon: Rocket, description: "As opportunities progress, HGG supports the development process through strategic facilitation, business coordination, stakeholder engagement, and relationship management. Our objective is to help move promising opportunities from discussion toward structured and actionable initiatives." },
  { step: "06", title: "CREATE VALUE", subtitle: "Building outcomes designed to last.", icon: LineChart, description: "The ultimate goal of every HGG engagement is to help create measurable and sustainable value. This may include commercial growth, investment opportunities, economic development, institutional collaboration, technology transfer, environmental improvement, job creation, or broader social impact." },
];

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState(null);
  const [isCorporateProfileOpen, setIsCorporateProfileOpen] = useState(false);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCorporateProfileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when modal is active
  useEffect(() => {
    if (isCorporateProfileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCorporateProfileOpen]);

  return (
    <div className="bg-[#F4F5F7] text-[#0F172A] min-h-screen">

      {/* ─────────────────────────────────────────────────
          1. HERO  — Compact Diagonal Split: Dark Navy Left / Vibrant Photo Right
      ───────────────────────────────────────────────── */}
      <section className="relative bg-[#061739] overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] lg:h-[440px] flex items-center border-b border-[#14588B]/20">

        {/* ── Right: Black Star Gate Photo Framed for Tangent Slant ── */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[66%] xl:w-[64%] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/img_new_1.PNG"
            alt="Ghana Independence Arch & Black Star Gate"
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

        {/* ── Left: Solid Dark Navy Tangent Slanted Polygon (Flipped / Tangent = -1) ── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden lg:block bg-[#061739]"
          style={{
            clipPath: "polygon(0 0, 42% 0, 58% 100%, 0 100%)",
          }}
        >
          {/* Subtle Upward Chevron Watermark in Navy Area */}
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none select-none">
            <svg width="220" height="280" viewBox="0 0 100 130" fill="currentColor" className="text-[#DFB758]">
              <path d="M50 12 L90 52 L74 52 L74 112 L26 112 L26 52 L10 52 Z" />
            </svg>
          </div>
          <div className="absolute left-[25%] top-[15%] opacity-[0.02] pointer-events-none select-none">
            <svg width="150" height="200" viewBox="0 0 100 130" fill="currentColor" className="text-[#DFB758]">
              <path d="M50 12 L90 52 L74 52 L74 112 L26 112 L26 52 L10 52 Z" />
            </svg>
          </div>
        </div>

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

            {/* Main Title: About Us */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.06}
              className="font-heading text-3xl sm:text-4xl lg:text-[2.9rem] font-bold text-white tracking-tight leading-none"
            >
              About Us
            </motion.h1>

            {/* Gold Horizontal Accent Bar */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="w-12 h-[3px] bg-[#DFB758] rounded-full"
            />

            {/* Lead Narrative Copy (Verbatim from Documents) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="space-y-2 text-slate-200 text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[1.6] font-normal"
            >
              <p>
                THE HINTER GROUP GHANA LTD (HGG) is a Ghana-based consulting, ventures, and brokerage company established to facilitate strategic partnerships, responsible investment, and sustainable business development across Ghana, Africa, and international markets.
              </p>
              <p className="text-slate-300 text-[12.5px] leading-relaxed hidden xl:block">
                Our company was founded on the belief that meaningful progress is achieved when the right people, organizations, technologies, and opportunities are brought together through integrity, professionalism, and a shared commitment to excellence.
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
                href="#who-we-are"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                Who We Are <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#areas-of-focus"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-wider text-white border border-white/20 hover:border-[#DFB758]/60 bg-white/5 hover:bg-white/10 rounded backdrop-blur-sm transition-all duration-300 uppercase"
              >
                Areas of Focus
              </a>
              <a
                href="#strategy"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-wider text-white border border-white/20 hover:border-[#DFB758]/60 bg-white/5 hover:bg-white/10 rounded backdrop-blur-sm transition-all duration-300 uppercase"
              >
                Strategic Approach
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          2. MAIN ABOUT US (WHO WE ARE) — Split Card with Gold Accent Tab
      ───────────────────────────────────────────────── */}
      <section id="who-we-are" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: HGG Corporate Logo PNG Card with Gold Corner Tab */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="lg:col-span-6 relative"
            >
              {/* Outer Wrapper with Gold Tab at bottom-left */}
              <div className="relative pb-3 pl-3">
                {/* Gold Accent Tab */}
                <div className="absolute bottom-0 left-0 w-24 h-4 bg-[#DFB758] rounded-xs shadow-xs" />

                {/* Logo PNG Card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-slate-200 bg-white shadow-md flex items-center justify-center p-6 sm:p-10">
                  <Image
                    src="/assets/logos/Logo/Logo_Logo.png"
                    alt="The Hinter Group Ghana Ltd Logo"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6 filter contrast-[1.02]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Narrative Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="lg:col-span-6 space-y-5"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 sm:gap-4 mb-2.5">
                <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] w-8 sm:w-12" />
                <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                  WHO WE ARE
                </span>
                <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[80px] sm:max-w-[140px]" />
              </div>

              {/* Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#061739] leading-[1.18] tracking-tight">
                Built on Purpose.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838] block sm:inline">
                  Driven by Excellence.
                </span>
              </h2>
              <div className="w-14 h-[3px] bg-[#C49838] rounded-full my-3" />

              {/* Paragraphs (100% Verbatim Copy from docx_text.txt) */}
              <div className="space-y-4 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                <p>
                  <strong className="font-bold text-[#061739]">THE HINTER GROUP GHANA LTD (HGG)</strong> is a Ghana-based consulting, ventures, and brokerage company established to facilitate strategic partnerships, responsible investment, and sustainable business development across Ghana, Africa, and international markets.
                </p>
                <p>
                  Our company was founded on the belief that meaningful progress is achieved when the right people, organizations, technologies, and opportunities are brought together through integrity, professionalism, and a shared commitment to excellence.
                </p>
                <p>
                  At HGG, we recognize that today's business environment requires more than traditional consulting. Organizations increasingly need trusted advisors who can identify opportunities, connect stakeholders, facilitate collaboration, and support the development of innovative solutions capable of creating measurable economic and social impact.
                </p>
              </div>

              {/* CTA Button: Read More Modal Trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsCorporateProfileOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#DFB758] hover:bg-[#C49838] text-[#061739] text-[11.5px] font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm group/btn cursor-pointer"
                >
                  <span>Read Full Corporate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#061739] group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          CORPORATE PROFILE & INSTITUTIONAL CHARTER MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isCorporateProfileOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCorporateProfileOpen(false)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Top Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setIsCorporateProfileOpen(false)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close details popup"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9.5px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#DFB758] px-2 py-0.5 rounded-full bg-[#DFB758]/15 border border-[#DFB758]/30">
                      CORPORATE PROFILE & CHARTER
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-300">
                      THE HINTER GROUP GHANA LTD
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    Corporate Mandate, Leadership & Value Charter
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable with 100% Verbatim Document Text) */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">

                {/* 1. Verbatim Institutional Scope */}
                <div className="space-y-3">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                    SECTION 01 • INSTITUTIONAL MANDATE & SCOPE
                  </span>
                  <div className="space-y-3 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    <p className="border-l-3 border-[#DFB758] pl-3.5 italic text-slate-800 font-medium bg-[#F8FAFC] p-3 rounded-r-xl border border-slate-200/80">
                      "THE HINTER GROUP GHANA LTD (HGG) is a Ghana-based consulting, ventures, and brokerage company dedicated to identifying, developing, and advancing strategic business and investment opportunities across Ghana and international markets."
                    </p>
                    <p>
                      Founded on the principles of integrity, professionalism, innovation, and excellence, HGG serves as a trusted bridge between governments, private enterprises, investors, technology providers, development institutions, and strategic partners seeking to create sustainable economic value.
                    </p>
                    <p>
                      Our approach extends beyond traditional consulting. We work collaboratively with our partners to identify opportunities, facilitate meaningful relationships, coordinate stakeholders, and support the successful development and execution of projects that contribute to long-term growth and positive impact.
                    </p>
                    <p>
                      Whether supporting investment initiatives, facilitating strategic partnerships, or helping organizations navigate complex business environments, HGG remains committed to delivering practical solutions built on trust, transparency, and measurable value.
                    </p>
                    <p>
                      As our company continues to grow, our vision remains clear: to become a respected international organization recognized for connecting opportunity with sustainable development while maintaining the highest standards of corporate integrity and professional excellence.
                    </p>
                  </div>
                </div>

                {/* 2. Mission & Vision Dual Cards */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    SECTION 02 • STRATEGIC PURPOSE FRAMEWORK
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#DFB758]" />
                        <h4 className="font-heading text-xs sm:text-[13px] font-bold text-[#061739] uppercase tracking-wider">
                          OUR MISSION
                        </h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        To connect strategic opportunities with the right people, organizations, technologies, and investments while delivering innovative consulting, venture development, and brokerage solutions that create lasting economic and social value.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#14588B]" />
                        <h4 className="font-heading text-xs sm:text-[13px] font-bold text-[#061739] uppercase tracking-wider">
                          OUR VISION
                        </h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        To become one of Africa's most trusted consulting, ventures, and brokerage companies, recognized internationally for facilitating transformative partnerships, responsible investments, and sustainable development initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. The 6 Core Values */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    SECTION 03 • 6 CORE VALUES & ETHICAL STANDARDS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { name: "Integrity", desc: "We conduct every engagement with honesty, transparency, accountability, and ethical leadership." },
                      { name: "Excellence", desc: "We pursue the highest standards of professionalism, quality, and continuous improvement in everything we do." },
                      { name: "Innovation", desc: "We embrace forward-thinking ideas and practical solutions that create meaningful opportunities for our clients and partners." },
                      { name: "Collaboration", desc: "We believe sustainable success is achieved through strong partnerships built on mutual trust, respect, and shared objectives." },
                      { name: "Professionalism", desc: "We maintain the highest level of competence, confidentiality, reliability, and corporate responsibility in every relationship we establish." },
                      { name: "Sustainability", desc: "We support initiatives that create long-term economic, environmental, and social value for present and future generations." },
                    ].map((val, vIdx) => (
                      <div key={vIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C49838] shrink-0" />
                          <h5 className="font-heading text-xs font-bold text-[#061739]">{val.name}</h5>
                        </div>
                        <p className="text-slate-500 text-[11px] leading-relaxed pl-5.5">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="px-5 py-4 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsCorporateProfileOpen(false)}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-slate-600 hover:text-[#061739] bg-white border border-slate-200 hover:border-slate-300 transition-colors uppercase cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsCorporateProfileOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:from-[#DFB758] hover:to-[#C49838] transition-all uppercase shadow-xs"
                >
                  <span>Connect with HGG Executive Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────
          2. OUR PURPOSE & OUR FUTURE — Dedicated Strategic Horizons Section
      ───────────────────────────────────────────────── */}
      <section id="purpose-future" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFB758]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14588B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                STRATEGIC HORIZONS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Our Purpose &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Future Vision.
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Connecting people, organizations, and opportunities today to create lasting economic value and positive social impact for generations to come.
            </p>
          </motion.div>

          {/* Dual Main Cards: OUR PURPOSE & OUR FUTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1: OUR PURPOSE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="bg-[#F8FAFC] hover:bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm relative group hover:shadow-xl hover:border-[#DFB758]/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Tag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#061739] text-[#DFB758] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-[10.5px] font-mono font-bold px-3 py-1 rounded-full bg-[#DFB758]/15 text-[#C49838] border border-[#DFB758]/35 uppercase tracking-wider">
                    CORE PURPOSE
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#061739] mb-4">
                  Our Purpose
                </h3>

                <div className="space-y-4 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                  <p>
                    Our purpose is to connect people, organizations, and opportunities that contribute to sustainable economic development while promoting responsible investment, innovation, and long-term collaboration.
                  </p>
                  <p>
                    Through strategic consulting, venture development, brokerage, and partnership facilitation, we help create environments where businesses, institutions, governments, and investors can work together to achieve meaningful and measurable outcomes.
                  </p>
                </div>
              </div>

              {/* Bottom Feature Tags */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap gap-2">
                {[
                  "Strategic Consulting",
                  "Venture Development",
                  "Commercial Brokerage",
                  "Partnership Facilitation",
                  "Responsible Investment",
                ].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200/90 text-[#061739]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C49838]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 2: OUR FUTURE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="bg-[#F8FAFC] hover:bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm relative group hover:shadow-xl hover:border-[#DFB758]/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Tag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#061739] text-[#DFB758] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <span className="text-[10.5px] font-mono font-bold px-3 py-1 rounded-full bg-[#14588B]/15 text-[#14588B] border border-[#14588B]/35 uppercase tracking-wider">
                    FUTURE OUTLOOK
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#061739] mb-4">
                  Our Future
                </h3>

                <div className="space-y-4 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                  <p>
                    HGG is committed to continuous growth while maintaining the values upon which the company was founded.
                  </p>
                  <p>
                    As we expand our reach across Ghana, Africa, and international markets, we remain focused on building trusted relationships, supporting transformative initiatives, and creating opportunities that generate lasting value for future generations.
                  </p>
                </div>
              </div>

              {/* Bottom Feature Tags */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap gap-2">
                {[
                  "Ghanaian Foundation",
                  "Pan-African Reach",
                  "International Markets",
                  "Transformative Initiatives",
                  "Generational Value",
                ].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200/90 text-[#061739]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14588B]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          3. MISSION, VISION & CORE VALUES — Enhanced Dynamic Architecture
      ───────────────────────────────────────────────── */}
      <section id="mission" className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-slate-200/80 relative overflow-hidden">

        {/* ── Background Architectural Graphic Layer ── */}

        {/* Primary Looping Growth Arrow (Spanning between Mission & Vision) */}
        <div className="absolute left-[38%] top-[8%] w-[420px] sm:w-[540px] lg:w-[620px] h-[420px] sm:h-[540px] lg:h-[620px] opacity-[0.28] sm:opacity-[0.35] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="goldLoopArrow1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14588B" stopOpacity="0.3" />
                <stop offset="35%" stopColor="#C49838" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#DFB758" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#E5C168" stopOpacity="1" />
              </linearGradient>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#DFB758" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Dynamic Swirling Loop Curve */}
            <path
              d="M 85 450 
                 C 30 310 60 160 195 135 
                 C 315 110 370 265 285 348 
                 C 200 430 175 270 238 182 
                 C 285 120 355 80 445 52"
              stroke="url(#goldLoopArrow1)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldGlow)"
            />

            {/* Arrowhead */}
            <path
              d="M 392 38 L 452 50 L 428 102"
              stroke="url(#goldLoopArrow1)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Decorative orbit nodes */}
            <circle cx="195" cy="135" r="5" fill="#DFB758" opacity="0.8" />
            <circle cx="285" cy="348" r="6" fill="#C49838" opacity="0.9" />
          </svg>
        </div>

        {/* 4. Secondary Trajectory Wave Curve (Flowing across Core Values) */}
        <div className="absolute left-[5%] top-[54%] w-[90%] h-[320px] opacity-[0.22] sm:opacity-[0.28] pointer-events-none select-none z-0 hidden md:block">
          <svg viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="goldWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14588B" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#DFB758" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C49838" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Smooth S-curve linking values to growth */}
            <path
              d="M 50 250 C 250 280 320 80 550 140 C 780 200 850 60 960 40"
              stroke="url(#goldWaveGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="6 12"
            />
            {/* Arrowhead at the end of Core Values wave */}
            <path
              d="M 920 30 L 965 38 L 945 75"
              stroke="url(#goldWaveGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 5. Subtle Dot-Matrix Texture Blocks */}
        <div className="absolute left-8 top-12 w-48 h-48 opacity-[0.045] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#061739 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
        <div className="absolute right-12 bottom-20 w-56 h-56 opacity-[0.05] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#DFB758 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Top Header: OUR MISSION & VISION with Gold Lines ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12"
          >
            <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[140px] sm:max-w-[240px]" />
            <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase text-center">
              OUR MISSION & VISION
            </span>
            <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[140px] sm:max-w-[240px]" />
          </motion.div>

          {/* ── Mission & Vision White Twin Cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20">

            {/* Our Mission Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="bg-white/95 backdrop-blur-xs rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm relative group hover:shadow-xl hover:border-[#DFB758]/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Corner accent bracket */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#DFB758]/40 rounded-tr-2xl group-hover:border-[#DFB758] transition-colors" />

              {/* Card Header: Circular Badge + Title */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#061739] text-[#DFB758] flex items-center justify-center border-2 border-[#14588B]/30 shadow-md flex-shrink-0 group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#061739]">
                    Our Mission
                  </h3>
                  <div className="w-10 h-[2.5px] bg-[#DFB758] mt-1.5 rounded-full" />
                </div>
              </div>

              {/* Body Text */}
              <div className="space-y-4 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                <p>
                  To identify, develop, and connect strategic opportunities with the people, organizations, technologies, and investments capable of creating sustainable economic and social value.
                </p>
                <p>
                  Through consulting, venture development, brokerage, and strategic facilitation, <strong className="text-[#061739] font-semibold">THE HINTER GROUP GHANA LTD</strong> works to build trusted relationships, strengthen collaboration, support responsible investment, and help transform promising opportunities into meaningful and sustainable outcomes.
                </p>
              </div>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="bg-white/95 backdrop-blur-xs rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm relative group hover:shadow-xl hover:border-[#DFB758]/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Corner accent bracket */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#DFB758]/40 rounded-tr-2xl group-hover:border-[#DFB758] transition-colors" />

              {/* Card Header: Circular Badge + Title */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#061739] text-[#DFB758] flex items-center justify-center border-2 border-[#14588B]/30 shadow-md flex-shrink-0 group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#061739]">
                    Our Vision
                  </h3>
                  <div className="w-10 h-[2.5px] bg-[#DFB758] mt-1.5 rounded-full" />
                </div>
              </div>

              {/* Body Text */}
              <div className="space-y-4 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                <p>
                  To become a respected and trusted African-based international consulting, ventures, and brokerage organization recognized for connecting opportunities, facilitating transformative partnerships, advancing responsible investment, and contributing to sustainable development across Ghana, Africa, and global markets.
                </p>
                <p>
                  Our long-term vision is to build an organization known not only for the opportunities it helps create, but also for the integrity, professionalism, and lasting value behind every relationship it develops.
                </p>
              </div>
            </motion.div>

          </div>

          {/* ── Middle Header: OUR CORE VALUES with Gold Lines ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[140px] sm:max-w-[240px]" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase">
                OUR CORE VALUES
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[140px] sm:max-w-[240px]" />
            </div>
            <p className="text-slate-600 text-xs sm:text-[13.5px] font-medium">
              The principles that guide every decision, relationship, and engagement.
            </p>
          </motion.div>

          {/* Core Values 8-Grid (Enhanced with Elevated Aesthetics) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 relative z-10">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={Math.min(idx * 0.025, 0.15)}
                  className="bg-white/95 backdrop-blur-xs border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-[#DFB758]/60 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#061739] text-[#DFB758] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#C49838] transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-heading text-base font-bold text-[#061739] mb-2 uppercase tracking-wide">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-[12.5px] leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      HGG Standard
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#DFB758]/50 group-hover:bg-[#DFB758] transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Guiding Principle Panel — Institutional White & Gold Design ── */}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          4. OUR AREAS OF FOCUS — Strategic Engagement Across 9 Priority Corridors
      ───────────────────────────────────────────────── */}
      <section id="areas-of-focus" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">

        {/* Subtle Architectural Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#061739 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Atmospheric Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#14588B]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#DFB758]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-3.5"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase">
                OUR AREAS OF FOCUS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#061739] tracking-tight leading-[1.18]">
              Strategic Engagement Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                9 Priority Corridors
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              THE HINTER GROUP GHANA LTD is committed to identifying, facilitating, and advancing strategic opportunities across sectors that contribute to sustainable economic development, innovation, investment, and long-term value creation.
            </p>
          </motion.div>

          {/* ── 9 Priority Corridors 3x3 Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {priorityCorridors.map((corridor, idx) => {
              return (
                <motion.div
                  key={corridor.id}
                  id={corridor.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={Math.min(idx * 0.03, 0.2)}
                  className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#DFB758]/70 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  {/* Corner Glow on Hover */}
                  <div
                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: corridor.color }}
                  />

                  <div>
                    {/* Top Meta Header */}
                    <div className="mb-4 pb-3.5 border-b border-slate-200/80">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          style={{
                            backgroundColor: `${corridor.color}14`,
                            color: corridor.color,
                            borderColor: `${corridor.color}35`,
                          }}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border whitespace-nowrap shadow-2xs"
                        >
                          <span
                            style={{ backgroundColor: corridor.color }}
                            className="w-1.5 h-1.5 rounded-full inline-block"
                          />
                          CORRIDOR {corridor.number}
                        </span>
                        <span
                          style={{ color: corridor.color }}
                          className="text-xs font-mono font-bold tracking-wider"
                        >
                          0{idx + 1}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block leading-normal">
                        {corridor.category}
                      </span>
                    </div>

                    {/* Corridor Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#061739] mb-3 leading-snug group-hover:text-[#0A2457] transition-colors">
                      {corridor.title}
                    </h3>

                    {/* Verbatim Narrative Scope */}
                    <p className="text-slate-600 text-[13px] leading-relaxed mb-5">
                      {corridor.summary}
                    </p>

                    {/* Strategic Focus Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {corridor.strategicFocus.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-700 shadow-2xs group-hover:border-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          5. WHY CHOOSE HGG — Clean Light Architectural Design
      ───────────────────────────────────────────────── */}
      <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] text-[#0F172A] relative overflow-hidden border-b border-slate-200/80">

        {/* ── Left-Side Focused Background Image: img_new_1.PNG ── */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[56%] xl:w-[50%] z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/img_new_1.PNG"
            alt="Ghana Landmark Background"
            fill
            unoptimized
            className="object-cover object-left lg:object-[15%_center] filter contrast-[1.08] brightness-[1.02] opacity-[0.60] sm:opacity-[0.72]"
          />
          {/* Smooth horizontal gradient fade to the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8F9FA]/40 to-[#F8F9FA]" />
          {/* Top and bottom edge blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-[#F8F9FA]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Clean Section Header ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                WHY CHOOSE HGG
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Local Understanding. International Perspective.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Trusted Relationships.
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
          </motion.div>

          {/* ── 8 Pillars Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {whyChooseHgg.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={Math.min(idx * 0.025, 0.15)}
                  className="bg-white/95 backdrop-blur-xs hover:bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#DFB758]/70 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#061739] text-[#DFB758] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#C49838] transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-heading text-[13.5px] font-bold text-[#061739] mb-2 uppercase tracking-wide leading-snug">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-[12.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Accent Line */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      HGG Advantage
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DFB758]/50 group-hover:bg-[#DFB758] transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── THE HGG DIFFERENCE: Core Capabilities Synthesis ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="lg:max-w-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB758]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase">
                    THE HGG DIFFERENCE
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                  Integrated Capabilities. Measurable Impact.
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Connecting local foundation with international reach for responsible and sustainable growth.
                </p>
              </div>

              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  "Local Understanding",
                  "International Perspective",
                  "Trusted Relationships",
                  "Strategic Coordination",
                  "Business Insight",
                  "Confidentiality & Discretion",
                  "Long-Term Thinking",
                  "Sustainable Growth",
                ].map((diff, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-[11.5px] font-medium text-[#061739] hover:bg-white transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB758] shrink-0" />
                    <span>{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          6. STRATEGIC APPROACH — 6-Stage Process
      ───────────────────────────────────────────────── */}
      <section id="strategy" className="py-20 lg:py-28 relative overflow-hidden bg-[#F4F5F7]">
        {/* Decorative bg image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image src="/images/img_new_2.PNG" alt="" fill unoptimized aria-hidden="true"
            className="object-cover object-center opacity-[0.04] saturate-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14 space-y-3">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                OUR STRATEGIC APPROACH
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739]">
              From Opportunity to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Sustainable Value.
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
          </motion.div>

          {/* Steps */}
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-14">
            {pathwaySteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={idx}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }} custom={Math.min(idx * 0.03, 0.15)}
                  className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#14588B]/20 hover:shadow-xl shadow-sm transition-all duration-300 relative overflow-hidden">

                  {/* Large ghost step number */}
                  <div className="absolute -top-2 -right-2 font-heading text-[7rem] font-black text-slate-50 select-none leading-none group-hover:text-[#061739]/5 transition-colors duration-500">
                    {item.step}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#061739] to-[#14588B] flex items-center justify-center text-[#DFB758] mb-5 shadow-lg group-hover:shadow-[#14588B]/30 group-hover:scale-[1.05] transition-transform duration-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Step badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-[#C49838] uppercase tracking-widest">{item.step}</span>
                      <div className="flex-1 h-[1px] bg-slate-100" />
                    </div>
                    <h3 className="font-heading text-xl font-extrabold text-[#061739] mb-1 uppercase tracking-wide group-hover:text-[#14588B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[12px] font-bold text-[#C49838] mb-3 uppercase tracking-wide">{item.subtitle}</p>
                    <p className="text-slate-500 text-[13px] leading-relaxed group-hover:text-slate-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Multidisciplinary Roles & Core Philosophy Dual Panel ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {/* Left: Our Operational Capacities / Roles */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14588B]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#14588B] uppercase">
                    OUR INSTITUTIONAL ROLES
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#061739] mb-2">
                  Our Engagement Capacities
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                  Depending on the nature of the engagement, HGG serves in one or more specialized capacities:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Strategic Advisor",
                    "Business Development Partner",
                    "Venture Facilitator",
                    "Brokerage & Intermediary Partner",
                    "Stakeholder Coordinator",
                    "Investment Facilitator",
                    "Partnership Development Partner",
                    "Project Development Facilitator",
                  ].map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-xs font-semibold text-[#061739]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#14588B]" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-100">
                Defined according to the objectives, structure, and requirements of each engagement.
              </p>
            </motion.div>

            {/* Right: Our Core Philosophy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB758]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase">
                    STRATEGIC PHILOSOPHY
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#061739] mb-2">
                  Foundational Success Drivers
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                  HGG believes sustainable success requires more than opportunity alone. It requires:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "The Right Strategy",
                    "The Right Relationships",
                    "The Right Stakeholders",
                    "Clear Communication",
                    "Disciplined Execution",
                    "Responsible Leadership",
                    "Long-Term Commitment",
                    "Sustainable Value",
                  ].map((phil, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-xs font-semibold text-[#061739]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB758] shrink-0" />
                      <span>{phil}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-100">
                Transforming credible opportunities into structured relationships and sustainable ventures.
              </p>
            </motion.div>
          </div>

          {/* ── Guiding Principle Panel / Speech Card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm border border-slate-200 mt-4"
          >
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061739]/5 border border-[#14588B]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49838]" />
                <span className="text-[10.5px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase">
                  OUR GUIDING PRINCIPLE
                </span>
              </div>

              {/* Main Corporate Statement */}
              <blockquote className="font-heading text-lg sm:text-2xl lg:text-[1.55rem] font-bold text-[#061739] leading-[1.38] tracking-tight">
                “At HGG, we believe that long-term success is built through trusted relationships, responsible leadership, disciplined execution, and a genuine commitment to creating value for all stakeholders.”
              </blockquote>

              {/* Gold Accent Line */}
              <div className="w-12 h-[2.5px] bg-[#DFB758] rounded-full mx-auto" />

              {/* Supporting Copy */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
                Discover how HGG can support your organization in identifying opportunities, building partnerships, and advancing strategic initiatives across Ghana, Africa, and international markets.
              </p>

              {/* CTA Button Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
                >
                  <span>Partner With HGG</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-heading font-bold tracking-wider text-[#061739] border border-slate-300 hover:border-[#DFB758]/60 bg-white hover:bg-slate-50 rounded transition-all duration-300 uppercase"
                >
                  Explore Our Expertise
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

    </div>
  );
}
