"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getServices } from "@/lib/sanityData";
import {
  ArrowRight,
  ChevronRight,
  Target,
  TrendingUp,
  Handshake,
  Network,
  Rocket,
  Search,
  Globe2,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Users2,
  Lightbulb,
  Scale,
  Compass,
  FileCheck,
  Briefcase,
  Layers,
  BarChart3,
  Check,
  ChevronDown,
  Info,
  ArrowUpRight,
  Quote,
  X,
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

/* ── 3 Primary Core Pillars with Complete Verbatim Deep Breakdown from docx_text.txt ── */
const corePillarsData = [
  {
    id: "consulting",
    number: "01",
    title: "Strategic Consulting",
    tagline: "Clarity. Direction. Sustainable Growth.",
    shortDesc: "Strategic advisory support designed to help organizations evaluate opportunities, strengthen decision-making, navigate complex business environments, and develop practical strategies for sustainable growth.",
    icon: Compass,
    leadText: "THE HINTER GROUP GHANA LTD provides strategic consulting services designed to help organizations evaluate opportunities, strengthen decision-making, navigate complex business environments, and develop practical strategies for sustainable growth. Our consulting approach is grounded in careful analysis, stakeholder understanding, disciplined planning, and a strong focus on long-term value creation. We work collaboratively with clients to understand their objectives, operating environment, stakeholders, risks, and strategic priorities before recommending a course of action.",
    modules: [
      {
        number: "01",
        title: "Business Strategy & Growth Planning",
        description: "HGG supports organizations in developing strategic plans designed to strengthen market positioning, identify growth opportunities, improve business direction, and support sustainable expansion. Our focus is on helping clients define clear priorities and practical pathways toward achieving their objectives.",
      },
      {
        number: "02",
        title: "Market Entry & Expansion Strategy",
        description: "Organizations entering new markets often require more than market research. HGG supports clients by helping them understand local business environments, identify relevant stakeholders, evaluate potential opportunities, and develop strategies for responsible market entry and expansion across Ghana, broader African markets, and international corridors.",
      },
      {
        number: "03",
        title: "Opportunity Evaluation",
        description: "Before significant time, capital, or relationships are committed to an opportunity, it is important to understand its strategic potential. HGG assists clients in evaluating opportunities based on commercial relevance, stakeholder alignment, strategic fit, market potential, partnership requirements, development impact, long-term sustainability, and risk constraints.",
      },
      {
        number: "04",
        title: "Stakeholder Strategy",
        description: "Many business and development opportunities depend on successful engagement with multiple stakeholders. HGG helps clients identify relevant decision-makers, institutions, partners, authorities, and communities while developing appropriate strategies for transparent engagement, communication, and relationship development.",
      },
      {
        number: "05",
        title: "Partnership Strategy",
        description: "Strong partnerships require clarity of purpose. HGG supports organizations in identifying potential strategic partners, defining partnership objectives, understanding stakeholder interests, and developing frameworks for mutually beneficial collaboration.",
      },
      {
        number: "06",
        title: "Business Positioning",
        description: "HGG assists organizations in strengthening how they position themselves before investors, institutions, partners, governments, and other stakeholders. This includes reviewing business propositions, strategic messaging, partnership positioning, market presentation, and stakeholder communication.",
      },
      {
        number: "07",
        title: "Strategic Problem Solving",
        description: "Complex business challenges often require a combination of commercial judgment, stakeholder understanding, and practical coordination. HGG works collaboratively with clients to identify challenges, evaluate possible solutions, and develop practical strategies designed to advance organizational objectives.",
      },
      {
        number: "08",
        title: "Advisory Support for Complex Initiatives",
        description: "For initiatives involving multiple organizations, jurisdictions, investors, technologies, or stakeholder groups, HGG provides end-to-end strategic advisory support, including strategic planning, opportunity positioning, stakeholder mapping, partnership development, and risk awareness.",
      },
    ],
    processTitle: "5-Stage Strategic Consulting Process",
    process: [
      { stage: "UNDERSTAND", desc: "Clarify the client's objectives, challenges, operating environment, and strategic priorities." },
      { stage: "ASSESS", desc: "Evaluate the opportunity, business environment, stakeholders, risks, and potential pathways forward." },
      { stage: "DEVELOP", desc: "Create a practical strategic approach aligned with the client's objectives and available resources." },
      { stage: "ALIGN", desc: "Support engagement and alignment among relevant stakeholders, partners, and decision-makers." },
      { stage: "ADVANCE", desc: "Assist the client in moving from strategy toward practical implementation and measurable progress." },
    ],
    valueStatement: "HGG’s strategic consulting services are designed to provide more than recommendations. Our goal is to help clients gain clarity, make better-informed decisions, strengthen relationships, identify opportunities, and develop practical strategies capable of creating sustainable value.",
    ctaText: "DISCUSS YOUR STRATEGY WITH HGG",
  },
  {
    id: "ventures",
    number: "02",
    title: "Venture Development & Investment Facilitation",
    tagline: "From Opportunity to Investable Potential.",
    shortDesc: "Supports the identification, development, positioning, and advancement of promising business and investment opportunities from early concept toward structured engagement.",
    icon: Rocket,
    leadText: "THE HINTER GROUP GHANA LTD supports the identification, development, positioning, and advancement of promising business and investment opportunities. Our role is to help move credible opportunities from an early concept or initial introduction toward a more structured stage where the right stakeholders, investors, technologies, institutions, and strategic partners can engage meaningfully with commercial awareness and long-term discipline.",
    modules: [
      {
        number: "01",
        title: "Opportunity Identification",
        description: "HGG identifies and evaluates potential ventures, projects, business concepts, and investment opportunities that may benefit from strategic development, partnership formation, or investor engagement, focusing on opportunities with credible commercial, economic, technological, or social potential.",
      },
      {
        number: "02",
        title: "Venture Positioning",
        description: "A promising idea must be clearly positioned before it can attract serious interest. HGG helps strengthen how an opportunity is presented to prospective investors and partners through strategic narratives, partnership propositions, investment messaging, and preliminary business materials.",
      },
      {
        number: "03",
        title: "Investment Facilitation",
        description: "HGG helps connect credible opportunities with potential investors, financial institutions, development organizations, technology providers, and strategic partners while creating conditions for informed discussions around investment potential and project structures.",
      },
      {
        number: "04",
        title: "Partner Identification",
        description: "The right partner can significantly influence the success of an opportunity. HGG assists in identifying organizations that provide investment capital, technology, technical expertise, market access, institutional support, development finance, and strategic collaboration.",
      },
      {
        number: "05",
        title: "Stakeholder Development",
        description: "Many ventures require the participation of multiple organizations. HGG supports stakeholder relationships by identifying relevant parties, facilitating communication, coordinating engagement, and strengthening alignment around shared objectives.",
      },
      {
        number: "06",
        title: "Project Readiness Support",
        description: "Before an opportunity can advance toward meaningful investor engagement, key information must be organized clearly. HGG assists in coordinating executive summaries, opportunity briefs, business presentations, and preliminary project documentation alongside qualified specialists.",
      },
      {
        number: "07",
        title: "Investor & Partner Engagement",
        description: "HGG supports constructive engagement between opportunity owners and prospective investors or strategic partners through strategic introductions, meeting coordination, presentation support, information exchange, and follow-up relationship management.",
      },
      {
        number: "08",
        title: "Venture Coordination",
        description: "As opportunities evolve, HGG assists in maintaining communication and coordination among all parties involved to ensure stakeholders remain informed, aligned, and focused on advancing clearly defined objectives.",
      },
    ],
    processTitle: "6-Stage Venture Advancement Process",
    process: [
      { stage: "IDENTIFY", desc: "Identify or receive a potentially credible business or investment opportunity." },
      { stage: "ASSESS", desc: "Understand the opportunity, objectives, stakeholders, development stage, and strategic requirements." },
      { stage: "POSITION", desc: "Help strengthen how the opportunity is structured and presented for appropriate stakeholder engagement." },
      { stage: "CONNECT", desc: "Identify and facilitate engagement with relevant investors, technology providers, and strategic partners." },
      { stage: "COORDINATE", desc: "Support communication, information exchange, meetings, and stakeholder alignment." },
      { stage: "ADVANCE", desc: "Assist stakeholders in moving discussions toward structured partnership, investment, or implementation." },
    ],
    valueStatement: "HGG’s role in investment facilitation does not replace independent legal, financial, technical, or commercial due diligence. All parties remain responsible for conducting their own evaluation before entering into binding commitments.",
    ctaText: "EXPLORE INVESTMENT & VENTURE OPPORTUNITIES",
  },
  {
    id: "brokerage",
    number: "03",
    title: "Brokerage & Business Development",
    tagline: "Connecting Relationships. Advancing Opportunities. Creating Value.",
    shortDesc: "Provides brokerage and business development support designed to help organizations identify commercial opportunities, build strategic relationships, and facilitate mutually beneficial engagements.",
    icon: Handshake,
    leadText: "THE HINTER GROUP GHANA LTD provides brokerage and business development support designed to help organizations identify commercial opportunities, build strategic relationships, and facilitate mutually beneficial business engagements grounded in professionalism, discretion, transparency, and clear alignment of mutual interests.",
    modules: [
      {
        number: "01",
        title: "Strategic Introductions",
        description: "HGG facilitates introductions between organizations that benefit from working together, including buyers and sellers, investors and project owners, technology providers and local partners, developers and institutions, and international companies with African enterprises.",
      },
      {
        number: "02",
        title: "Business Opportunity Development",
        description: "HGG assists in identifying and developing commercial opportunities that benefit from strategic positioning, partnership formation, investor engagement, or market access, moving them toward structured commercial engagement.",
      },
      {
        number: "03",
        title: "Commercial Relationship Facilitation",
        description: "Successful transactions depend on strong communication and trusted relationships. HGG facilitates engagement by supporting initial introductions, meeting coordination, information exchange, follow-up communication, and commercial discussions.",
      },
      {
        number: "04",
        title: "Market Access Support",
        description: "Organizations entering new markets frequently require trusted relationships and local understanding. HGG helps companies identify potential partners, stakeholders, institutions, and commercial pathways that support market entry or expansion.",
      },
      {
        number: "05",
        title: "Partnership Development",
        description: "HGG works with organizations seeking to establish long-term strategic relationships rather than one-time transactions, clarifying objectives, facilitating discussions, and developing frameworks for mutual value creation.",
      },
      {
        number: "06",
        title: "Opportunity Representation",
        description: "Where formally authorized, HGG represents or supports organizations in presenting business opportunities to prospective partners, investors, and institutions within agreed responsibilities, confidentiality, and professional conduct.",
      },
      {
        number: "07",
        title: "Transaction Facilitation",
        description: "HGG supports communication, meeting facilitation, information coordination, and commercial follow-up as parties progress toward potential commercial transactions while ensuring legal and financial matters are handled by qualified advisors.",
      },
      {
        number: "08",
        title: "Confidentiality & Relationship Protection",
        description: "Commercial relationships involve proprietary information and valuable contacts. HGG places utmost importance on discretion, supported by appropriate confidentiality, non-disclosure, non-circumvention, or brokerage agreements.",
      },
    ],
    processTitle: "5-Stage Business Development Process",
    process: [
      { stage: "UNDERSTAND", desc: "Understand the commercial opportunity and the objectives of the parties involved." },
      { stage: "IDENTIFY", desc: "Identify relevant organizations, decision-makers, partners, buyers, investors, or institutions." },
      { stage: "INTRODUCE", desc: "Facilitate appropriate and professionally managed introductions." },
      { stage: "DEVELOP", desc: "Support communication, relationship-building, commercial discussions, and stakeholder alignment." },
      { stage: "ADVANCE", desc: "Assist the parties in progressing toward a structured commercial relationship or potential transaction." },
    ],
    valueStatement: "HGG combines relationship development, market understanding, stakeholder coordination, and commercial awareness to help organizations access opportunities that may otherwise be difficult to identify or navigate.",
    ctaText: "DISCUSS A BUSINESS OPPORTUNITY",
  },
];

/* ── 9 Comprehensive Service Disciplines with Verbatim Deep Metadata ── */
const serviceDisciplines = [
  {
    number: "01",
    icon: Target,
    title: "Strategic Consulting",
    description:
      "Strategic advisory to evaluate opportunities, strengthen market positioning, and navigate complex business environments.",
    fullLead:
      "THE HINTER GROUP GHANA LTD delivers strategic advisory services that help organizations evaluate opportunities, formulate sustainable growth strategies, strengthen stakeholder engagement, and navigate complex commercial environments across Ghana and international markets.",
    keyCapabilities: [
      {
        title: "Business Strategy & Growth Planning",
        desc: "Defining clear commercial priorities and practical pathways toward sustainable market expansion.",
      },
      {
        title: "Market Entry & Expansion Strategy",
        desc: "Guiding organizations entering African corridors with local regulatory, institutional, and commercial insight.",
      },
      {
        title: "Stakeholder & Partnership Strategy",
        desc: "Mapping relevant decision-makers and developing mutually beneficial collaboration frameworks.",
      },
    ],
    targetOutcomes: [
      "Informed C-Suite decision making",
      "De-risked market entry",
      "Enhanced commercial positioning",
    ],
    applicableStakeholders: [
      "Private Enterprises",
      "Government Agencies",
      "International Corporates",
      "Financial Institutions",
    ],
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Venture Development",
    description:
      "Transforming early-stage business concepts into structured, investable ventures with commercial discipline.",
    fullLead:
      "HGG assists in identifying, developing, and advancing promising business and investment concepts. We help move credible opportunities from early concept or introduction toward a structured stage capable of attracting strategic capital and operational partners.",
    keyCapabilities: [
      {
        title: "Opportunity Identification & Screening",
        desc: "Evaluating commercial viability, development impact, and strategic fit across high-impact sectors.",
      },
      {
        title: "Venture Structuring & Positioning",
        desc: "Refining investment narratives, preliminary models, and partnership propositions.",
      },
      {
        title: "Operational Roadmap Design",
        desc: "Establishing governance structures, implementation milestones, and resource allocation models.",
      },
    ],
    targetOutcomes: [
      "Accelerated concept-to-market timeline",
      "Institutional-grade venture readiness",
      "Clear risk allocation frameworks",
    ],
    applicableStakeholders: [
      "Entrepreneurs",
      "Project Promoters",
      "Growth Enterprises",
      "Technology Providers",
    ],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Investment Facilitation",
    description:
      "Connecting credible opportunities with qualified investors, financial institutions, and capital partners.",
    fullLead:
      "HGG facilitates investment by connecting vetted, high-potential projects with domestic and international investors, development finance institutions (DFIs), sovereign funds, and technology partners while fostering constructive dialogue.",
    keyCapabilities: [
      {
        title: "Capital Matching & Investor Briefs",
        desc: "Pairing capital requirements with qualified equity, debt, and blended finance institutions.",
      },
      {
        title: "Project Readiness Coordination",
        desc: "Synthesizing executive summaries, opportunity dossiers, and preliminary due diligence materials.",
      },
      {
        title: "Stakeholder & Deal Engagement",
        desc: "Structuring preliminary discussions and supporting constructive commercial negotiations.",
      },
    ],
    targetOutcomes: [
      "Direct access to institutional capital",
      "Efficient investor engagement",
      "Transparent deal structuring",
    ],
    applicableStakeholders: [
      "Institutional Investors",
      "Development Banks",
      "Private Equity Funds",
      "Asset Owners",
    ],
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Brokerage & Business Development",
    description:
      "Facilitating strategic commercial transactions and business relationships with discretion and integrity.",
    fullLead:
      "As a trusted intermediary, HGG facilitates strategic commercial relationships that create mutual value. We support transactions through professionally managed introductions, commercial negotiations, and strict confidentiality.",
    keyCapabilities: [
      {
        title: "Strategic Commercial Matchmaking",
        desc: "Connecting buyers and sellers, technology providers and local operators with aligned commercial objectives.",
      },
      {
        title: "Confidentiality & Relationship Protection",
        desc: "Conducting engagements under strict non-disclosure and non-circumvention protocols.",
      },
      {
        title: "Transaction Coordination",
        desc: "Guiding parties through commercial milestones from initial dialogue through closing.",
      },
    ],
    targetOutcomes: [
      "Protected commercial relationships",
      "Targeted business opportunities",
      "Frictionless deal coordination",
    ],
    applicableStakeholders: [
      "Trading Houses",
      "Technology Providers",
      "Industrial Corporations",
      "Commercial Enterprises",
    ],
  },
  {
    number: "05",
    icon: Handshake,
    title: "Strategic Partnership Development",
    description:
      "Building collaborative alliances among governments, corporations, and institutions for transformative impact.",
    fullLead:
      "Strong partnerships are the foundation of meaningful progress. HGG facilitates enduring alliances among public authorities, multinational corporations, research institutions, and development partners to advance shared long-term objectives.",
    keyCapabilities: [
      {
        title: "Alliance Architecture",
        desc: "Structuring joint ventures, public-private dialogues, and consortium frameworks.",
      },
      {
        title: "Shared Value Alignment",
        desc: "Harmonizing commercial imperatives with institutional mandates and socio-economic goals.",
      },
      {
        title: "Long-Term Partnership Governance",
        desc: "Establishing communication channels to ensure continued alignment and mutual benefit.",
      },
    ],
    targetOutcomes: [
      "Multi-stakeholder consensus",
      "Consortium formation for large projects",
      "Sustainable partnership governance",
    ],
    applicableStakeholders: [
      "Public Sector Authorities",
      "Multinational Corporations",
      "Academic Institutions",
      "NGOs",
    ],
  },
  {
    number: "06",
    icon: Layers,
    title: "Project Development & Facilitation",
    description:
      "Guiding initiatives from initial concept through stakeholder coordination and implementation readiness.",
    fullLead:
      "From concept development through multi-stakeholder coordination, HGG assists organizations in transforming ambitious ideas into structured, bankable initiatives capable of attracting capital, technology, and operational support.",
    keyCapabilities: [
      {
        title: "Concept Structuring & Scoping",
        desc: "Translating broad strategic visions into actionable, phased development plans.",
      },
      {
        title: "Stakeholder Mobilization",
        desc: "Aligning technical consultants, legal advisors, community leaders, and regulatory bodies.",
      },
      {
        title: "Implementation Governance",
        desc: "Setting up milestone tracking, risk monitoring, and coordinated inter-agency progress.",
      },
    ],
    targetOutcomes: [
      "Bankable project documentation",
      "Seamless stakeholder coordination",
      "De-risked execution roadmaps",
    ],
    applicableStakeholders: [
      "Infrastructure Developers",
      "Municipal Authorities",
      "Energy Companies",
      "Industrial Sponsors",
    ],
  },
  {
    number: "07",
    icon: Users2,
    title: "Stakeholder Engagement",
    description:
      "Facilitating constructive dialogue among authorities, private enterprises, and communities to build consensus.",
    fullLead:
      "Complex economic initiatives depend on successful engagement with diverse stakeholders. HGG provides disciplined facilitation to build trust, resolve differing priorities, and maintain transparent communication across all parties.",
    keyCapabilities: [
      {
        title: "Stakeholder Mapping & Prioritization",
        desc: "Identifying key decision-makers, regulatory authorities, and community representatives.",
      },
      {
        title: "Consensus-Building Dialogues",
        desc: "Designing transparent communication forums that address regulatory, environmental, and social priorities.",
      },
      {
        title: "Long-Term Relationship Stewardship",
        desc: "Maintaining trust and open channels throughout multi-year project lifecycles.",
      },
    ],
    targetOutcomes: [
      "Regulatory goodwill & compliance",
      "Community & institutional buy-in",
      "Minimization of social friction",
    ],
    applicableStakeholders: [
      "Government Ministries",
      "Local Municipalities",
      "Community Leaders",
      "Corporate Citizens",
    ],
  },
  {
    number: "08",
    icon: Globe2,
    title: "Market Entry & International Support",
    description:
      "Bridging local opportunities with global markets to foster responsible investment and cross-border trade.",
    fullLead:
      "HGG serves as a vital bridge between Ghanaian/African opportunities and international corridors, supporting foreign direct investment, technology transfer, and international expansion for local enterprises.",
    keyCapabilities: [
      {
        title: "Inbound Investment & Corridors",
        desc: "Assisting international firms in navigating Ghana's business landscape, legal norms, and commercial culture.",
      },
      {
        title: "Outbound Expansion Support",
        desc: "Connecting African enterprises with global partners, technology providers, and export corridors.",
      },
      {
        title: "Cross-Border Technology Transfer",
        desc: "Facilitating partnerships that introduce proven sustainable technologies into emerging markets.",
      },
    ],
    targetOutcomes: [
      "Accelerated cross-border expansion",
      "Cultural and regulatory de-risking",
      "Access to global technology and markets",
    ],
    applicableStakeholders: [
      "Foreign Direct Investors",
      "Export-Oriented Firms",
      "International Trade Agencies",
      "Global Tech Vendors",
    ],
  },
  {
    number: "09",
    icon: Search,
    title: "Research & Opportunity Assessment",
    description:
      "Commercial and market intelligence to empower data-driven decisions before committing capital.",
    fullLead:
      "Sound business decisions require robust intelligence. HGG conducts thorough market research, competitive landscape assessments, regulatory analyses, and feasibility reviews to ensure clients proceed with clarity and confidence.",
    keyCapabilities: [
      {
        title: "Commercial Feasibility Analysis",
        desc: "Evaluating market demand, unit economics, supply chain dynamics, and revenue potential.",
      },
      {
        title: "Regulatory & Policy Landscape Review",
        desc: "Assessing policy incentives, licensing requirements, and compliance standards.",
      },
      {
        title: "Risk & Scenario Modeling",
        desc: "Identifying macroeconomic, operational, and stakeholder risks with mitigation strategies.",
      },
    ],
    targetOutcomes: [
      "Evidence-based capital allocation",
      "Early risk identification",
      "Competitive strategic advantage",
    ],
    applicableStakeholders: [
      "Investment Committees",
      "Corporate Strategists",
      "Institutional Lenders",
      "Policy Planners",
    ],
  },
];

/* ── 5 Service Delivery Principles with Verbatim Deep Metadata ── */
const deliveryPrinciples = [
  {
    step: "01",
    title: "Understand the Objective",
    description: "Clarify organizational goals, operational requirements, and strategic priorities.",
    fullLead:
      "Before any strategy is formulated or relationships are engaged, HGG conducts a thorough orientation to understand the client or partner's foundational objectives, challenges, operating parameters, and long-term vision.",
    keyDeliverables: [
      {
        title: "Stakeholder Intent & Scoping",
        desc: "Aligning executive leadership priorities, timelines, capital parameters, and risk appetites.",
      },
      {
        title: "Operational Environment Mapping",
        desc: "Reviewing regulatory frameworks, competitive landscapes, and institutional constraints.",
      },
      {
        title: "Strategic Baseline Definition",
        desc: "Establishing clear success criteria, benchmarks, and expected milestones for the engagement.",
      },
    ],
    qualityAssurance: [
      "Targeted strategic alignment",
      "Clear definition of deliverables",
      "Elimination of conflicting assumptions",
    ],
    governanceStandard:
      "Strict institutional confidentiality and alignment with corporate governance standards.",
  },
  {
    step: "02",
    title: "Evaluate the Opportunity",
    description: "Rigorous assessment of commercial feasibility, market fit, and regulatory factors.",
    fullLead:
      "Every opportunity undergoes comprehensive analysis before significant time, capital, or commercial relationships are committed, ensuring that projects possess credible commercial relevance, market viability, and developmental impact.",
    keyDeliverables: [
      {
        title: "Commercial & Economic Viability",
        desc: "Evaluating market demand, unit economics, supply chain resilience, and revenue stability.",
      },
      {
        title: "Regulatory & Compliance Due Diligence",
        desc: "Assessing local statutory requirements, licensing needs, and cross-border standards.",
      },
      {
        title: "Risk Identification & Mitigation Modeling",
        desc: "Analyzing potential market, geopolitical, operational, and financial risks.",
      },
    ],
    qualityAssurance: [
      "De-risked capital deployment",
      "Comprehensive regulatory certainty",
      "Independent commercial validation",
    ],
    governanceStandard:
      "Objective analytical rigor and adherence to international due diligence principles.",
  },
  {
    step: "03",
    title: "Identify the Right Stakeholders",
    description: "Connect with relevant institutions, decision-makers, and aligned partners.",
    fullLead:
      "Sustainable initiatives require the participation of the right decision-makers, institutions, and capital providers. HGG maps and identifies key stakeholders capable of contributing strategic value, technology, capital, or regulatory support.",
    keyDeliverables: [
      {
        title: "Stakeholder Matrix & Authority Mapping",
        desc: "Identifying relevant public agencies, municipal bodies, institutional investors, and technical operators.",
      },
      {
        title: "Strategic Capability Matching",
        desc: "Pairing project requirements with qualified technology providers, EPC contractors, and equity partners.",
      },
      {
        title: "Interest & Mandate Harmonization",
        desc: "Ensuring all prospective participants have complementary goals and aligned long-term incentives.",
      },
    ],
    qualityAssurance: [
      "Institutional-grade stakeholder ecosystem",
      "Direct access to key decision-makers",
      "Mitigation of misaligned partnerships",
    ],
    governanceStandard:
      "Transparent stakeholder engagement and professional representation.",
  },
  {
    step: "04",
    title: "Build Trusted Relationships",
    description: "Foster transparent communication, discretion, and enduring collaboration.",
    fullLead:
      "Long-term success is built upon integrity, transparency, and mutual respect. HGG fosters constructive dialogue and manages introductions with utmost discretion, ensuring a strong foundation for enduring partnerships.",
    keyDeliverables: [
      {
        title: "Discreet & Professional Introductions",
        desc: "Managing executive introductions under appropriate non-disclosure and non-circumvention protocols.",
      },
      {
        title: "Consensus-Building & Multi-Party Dialogue",
        desc: "Facilitating productive discussions to resolve differing priorities and establish common ground.",
      },
      {
        title: "Framework & Partnership Agreements",
        desc: "Coordinating memorandums of understanding (MOUs) and formal collaboration frameworks.",
      },
    ],
    qualityAssurance: [
      "High-trust commercial environment",
      "Protected intellectual property and contacts",
      "Long-term partnership durability",
    ],
    governanceStandard:
      "Strict adherence to ethics, confidentiality, and anti-circumvention standards.",
  },
  {
    step: "05",
    title: "Support Sustainable Outcomes",
    description: "Ensure initiatives create measurable commercial, economic, and social value.",
    fullLead:
      "Our commitment extends beyond initial agreements toward disciplined execution and long-term value creation. HGG assists partners in progressing from strategy toward sustainable economic and social impact.",
    keyDeliverables: [
      {
        title: "Implementation Coordination",
        desc: "Maintaining ongoing stakeholder alignment, information exchange, and milestone tracking.",
      },
      {
        title: "Value & Impact Monitoring",
        desc: "Measuring economic returns alongside environmental sustainability and community benefits.",
      },
      {
        title: "Long-Term Relationship Stewardship",
        desc: "Supporting post-closing operations, expansions, and follow-on phase opportunities.",
      },
    ],
    qualityAssurance: [
      "Measurable socio-economic value",
      "Sustained commercial performance",
      "Long-term multi-phase scalability",
    ],
    governanceStandard:
      "Commitment to sustainable development principles and responsible business practices.",
  },
];

/* ── 11 Client & Partner Categories ── */
const targetStakeholders = [
  "Governments and Public Institutions",
  "Private Companies",
  "International Investors",
  "Technology Providers",
  "Development Institutions",
  "Financial Organizations",
  "Academic and Research Institutions",
  "Non-Governmental Organizations",
  "Project Developers",
  "Entrepreneurs and Emerging Enterprises",
  "Strategic Business Partners",
];

export default function ExpertisePage() {
  const [pillarsData, setPillarsData] = useState(corePillarsData);
  const [selectedPillarModal, setSelectedPillarModal] = useState(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [selectedPrincipleModal, setSelectedPrincipleModal] = useState(null);
  const [showAllDisciplines, setShowAllDisciplines] = useState(false);
  const [showAllDeliveryPrinciples, setShowAllDeliveryPrinciples] = useState(false);

  const handleToggleDisciplines = () => {
    if (showAllDisciplines) {
      setShowAllDisciplines(false);
      const el = document.getElementById("service-disciplines");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllDisciplines(true);
    }
  };

  const handleToggleDeliveryPrinciples = () => {
    if (showAllDeliveryPrinciples) {
      setShowAllDeliveryPrinciples(false);
      const el = document.getElementById("delivery-principles");
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setShowAllDeliveryPrinciples(true);
    }
  };

  // Load live services from Sanity CMS if available
  useEffect(() => {
    async function loadCmsServices() {
      try {
        const liveServices = await getServices();
        if (liveServices && liveServices.length > 0) {
          setPillarsData((prev) =>
            prev.map((p) => {
              const live = liveServices.find(
                (s) => s.slug?.current === p.id || s.title?.toLowerCase().includes(p.id)
              );
              if (!live) return p;
              return {
                ...p,
                title: live.title || p.title,
                tagline: live.tagline || p.tagline,
                shortDesc: live.shortSummary || p.shortDesc,
                imageUrl: live.imageUrl || null,
                modules: live.capabilities && live.capabilities.length > 0 ? live.capabilities : p.modules,
                process: live.process && live.process.length > 0 ? live.process : p.process,
                valueStatement: live.valueStatement || p.valueStatement,
              };
            })
          );
        }
      } catch (err) {
        console.error("Failed to load services from Sanity:", err);
      }
    }
    loadCmsServices();
  }, []);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPillarModal(null);
        setSelectedServiceModal(null);
        setSelectedPrincipleModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when any modal is active
  useEffect(() => {
    if (selectedPillarModal || selectedServiceModal || selectedPrincipleModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPillarModal, selectedServiceModal, selectedPrincipleModal]);

  return (
    <div className="bg-[#F4F5F7] text-[#0F172A] min-h-screen">

      {/* ─────────────────────────────────────────────────
          1. HERO — Compact Diagonal Split: Dark Navy Left / Vibrant Photo Right
      ───────────────────────────────────────────────── */}
      <section className="relative bg-[#061739] overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] lg:h-[440px] flex items-center border-b border-[#14588B]/20">

        {/* ── Right: Photo Framed for Tangent Slant ── */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[66%] xl:w-[64%] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/img_new_2.PNG"
            alt="Ghana Business & Landmark Landscape"
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

            {/* Main Title: Our Services */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.06}
              className="font-heading text-3xl sm:text-4xl lg:text-[2.9rem] font-bold text-white tracking-tight leading-none"
            >
              Our Services
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
                <strong className="font-semibold text-white">Strategic Insight. Trusted Relationships. Practical Execution.</strong>
              </p>
              <p className="text-slate-300 text-[12.5px] leading-relaxed">
                THE HINTER GROUP GHANA LTD provides consulting, venture development, brokerage, and strategic partnership services tailored to the unique circumstances of each engagement.
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
                href="#pillars"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded-md shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                Core Pillars <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#service-disciplines"
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-heading font-bold tracking-wider text-white border border-white/20 hover:border-[#DFB758]/60 bg-white/5 hover:bg-white/10 rounded-md backdrop-blur-sm transition-all duration-300 uppercase"
              >
                All Disciplines
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          2. CORE SERVICE PILLARS — Enhanced Architectural 3-Way Selector & Deep Dive
      ───────────────────────────────────────────────── */}
      <section id="pillars" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header with Centered Gold Divider */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="text-center max-w-3xl mx-auto mb-10 space-y-3"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[140px] sm:max-w-[220px]" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase">
                CORE SERVICE PILLARS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[140px] sm:max-w-[220px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Three Complementary Capabilities for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Sustainable Growth
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
            <p className="text-slate-600 text-xs sm:text-[13.5px] font-medium max-w-2xl mx-auto pt-1">
              Select a pillar below to explore its comprehensive specialized modules, execution pathway, and governance standards.
            </p>
          </motion.div>

          {/* ── TREE DIAGRAM: TOP ROOT HUB NODE (HGG SERVICES) ── */}
          <div className="flex flex-col items-center justify-center relative mb-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-[#061739] text-white shadow-xl border border-[#DFB758]/50 relative z-20 hover:border-[#DFB758] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#DFB758] animate-pulse" />
              <h3 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.18em] text-white uppercase">
                HGG CORE SERVICES
              </h3>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#DFB758] rounded-[0.5px]" />
            </motion.div>

            {/* ── DESKTOP 3-WAY TREE BRANCHING CONNECTOR SVG LINES ── */}
            <div className="hidden lg:block w-full max-w-5xl h-12 relative z-10 pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1024 48" fill="none">
                <defs>
                  <marker
                    id="tree-arrow-expertise"
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
                <line x1="512" y1="0" x2="512" y2="20" stroke="#061739" strokeWidth="2" strokeOpacity="0.4" />

                {/* Horizontal Distribution Rail */}
                <line x1="170" y1="20" x2="854" y2="20" stroke="#061739" strokeWidth="2" strokeOpacity="0.4" />

                {/* Branch 1 to Consulting */}
                <path d="M 170 20 L 170 48" stroke="#061739" strokeWidth="2" markerEnd="url(#tree-arrow-expertise)" />

                {/* Branch 2 to Ventures (Center) */}
                <path d="M 512 20 L 512 48" stroke="#061739" strokeWidth="2" markerEnd="url(#tree-arrow-expertise)" />

                {/* Branch 3 to Brokerage */}
                <path d="M 854 20 L 854 48" stroke="#061739" strokeWidth="2" markerEnd="url(#tree-arrow-expertise)" />
              </svg>
            </div>
            {/* ── MOBILE/TABLET TREE BRANCHING CONNECTOR ── */}
            <div className="lg:hidden h-8 w-px bg-gradient-to-b from-[#061739]/50 to-transparent relative z-10 mt-2 mb-2" />
          </div>

          {/* ── 3 Pillar Cards (Uniform Luxury Presentation) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {pillarsData.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <a
                  key={pillar.id}
                  href={`#pillar-${pillar.id}`}
                  className="bg-white/95 backdrop-blur-xs text-[#0F172A] border border-slate-200 shadow-sm hover:border-[#DFB758]/70 hover:shadow-xl hover:-translate-y-1 rounded-2xl p-7 sm:p-8 transition-all duration-300 relative flex flex-col justify-between group"
                >
                  {/* Corner Accent Bracket */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#DFB758]/30 group-hover:border-[#DFB758] rounded-tr-2xl transition-colors" />

                  <div>
                    {/* Header: Icon & Step Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-xl bg-[#061739] group-hover:bg-[#14588B] text-[#DFB758] flex items-center justify-center shadow-xs group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#C49838] transition-colors">
                        0{pillar.number}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-heading text-xl sm:text-2xl font-bold mb-1.5 tracking-tight text-[#061739] group-hover:text-[#14588B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5 text-[#C49838]">
                      {pillar.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#DFB758] group-hover:bg-[#C49838] text-[#061739] text-[11.5px] font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-xs">
                      <span>Explore Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#061739] group-hover:translate-x-1 transition-all" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* ─────────────────────────────────────────────────
              3 DISTINCT PILLAR SHOWCASES (2-Portion Layout Matching Reference Image)
          ───────────────────────────────────────────────── */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-28 pt-6">

            {/* ── PILLAR 01: STRATEGIC CONSULTING ── */}
            <div id="pillar-consulting" className="scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                {/* Left: Consultation Illustration / Uploaded Image */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl h-[340px] sm:h-[420px] lg:h-[460px]">
                    <Image
                      src={pillarsData[0]?.imageUrl || "/images/consulting-icon.png"}
                      alt="Strategic Consulting"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 480px"
                      unoptimized
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Right: Discussion & Stages */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase block">
                      WHO WE ARE • PILLAR 01
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#061739] tracking-tight leading-tight">
                      {pillarsData[0]?.title || "Strategic Consulting"}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono font-bold text-[#C49838] uppercase tracking-wider">
                      {pillarsData[0]?.tagline || "Clarity. Direction. Sustainable Growth."}
                    </p>
                  </div>

                  {/* Clean Narrative Text */}
                  <div className="space-y-3 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                    <p>
                      <strong className="text-[#061739] font-semibold">THE HINTER GROUP GHANA LTD</strong> provides strategic consulting services designed to help organizations evaluate opportunities, strengthen decision-making, navigate complex business environments, and develop practical strategies for sustainable growth.
                    </p>
                    <p>
                      Our consulting approach is grounded in careful analysis, stakeholder understanding, disciplined planning, and a strong focus on long-term value creation across Ghana, broader African markets, and international corridors.
                    </p>
                  </div>

                  {/* Stages with Horizontal Connecting Line */}
                  <div className="pt-2">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#061739]/80 block mb-3.5">
                      Execution Stages:
                    </span>
                    <div className="relative overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                      <div className="min-w-[420px] sm:min-w-0 relative">
                        {/* Horizontal Connector Line */}
                        <div className="absolute top-[17px] left-[6%] right-[6%] h-[2px] bg-slate-200" />
                        <div className="absolute top-[17px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#DFB758] via-[#C49838] to-[#DFB758] opacity-70" />

                        <div className="grid grid-cols-5 gap-1.5 relative z-10">
                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              01
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              UNDERSTAND
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Clarify objectives & priorities
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              02
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              ASSESS
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Evaluate market fit & risks
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              03
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              DEVELOP
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Formulate strategic approach
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              04
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              ALIGN
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Engage aligned stakeholders
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              05
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              ADVANCE
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Execute & drive progress
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button: Read More Modal Trigger */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPillarModal(pillarsData[0])}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:bg-right bg-[length:200%_auto] text-[#061739] text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_14px_rgba(196,152,56,0.25)] hover:shadow-[0_4px_20px_rgba(223,183,88,0.4)] hover:-translate-y-0.5 group/btn cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 text-[#061739] group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* ── PILLAR 02: VENTURE DEVELOPMENT & INVESTMENT FACILITATION (FLIPPED LAYOUT) ── */}
            <div id="pillar-ventures" className="scroll-mt-24 pt-10 border-t border-slate-200/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                {/* Left (on desktop): Discussion & Stages */}
                <div className="lg:col-span-7 order-2 lg:order-1 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase block">
                      WHO WE ARE • PILLAR 02
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#061739] tracking-tight leading-tight">
                      {pillarsData[1]?.title || "Venture Development & Investment Facilitation"}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono font-bold text-[#C49838] uppercase tracking-wider">
                      {pillarsData[1]?.tagline || "From Opportunity to Investable Potential."}
                    </p>
                  </div>

                  {/* Clean Narrative Text */}
                  <div className="space-y-3 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                    <p>
                      <strong className="text-[#061739] font-semibold">THE HINTER GROUP GHANA LTD</strong> supports the identification, development, positioning, and advancement of promising business and investment opportunities.
                    </p>
                    <p>
                      Our role is to help move credible opportunities from early concept toward a more structured stage where the right stakeholders, investors, technologies, institutions, and strategic partners can engage meaningfully with commercial awareness.
                    </p>
                  </div>

                  {/* Stages with Horizontal Connecting Line */}
                  <div className="pt-2">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#061739]/80 block mb-3.5">
                      Advancement Stages:
                    </span>
                    <div className="relative overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                      <div className="min-w-[420px] sm:min-w-0 relative">
                        {/* Horizontal Connector Line */}
                        <div className="absolute top-[17px] left-[6%] right-[6%] h-[2px] bg-slate-200" />
                        <div className="absolute top-[17px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#DFB758] via-[#C49838] to-[#DFB758] opacity-70" />

                        <div className="grid grid-cols-5 gap-1.5 relative z-10">
                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              01
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              IDENTIFY
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Screen business concepts
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              02
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              ASSESS
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Evaluate capital requirements
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              03
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              POSITION
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Structure investment briefs
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              04
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              CONNECT
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Engage investors & partners
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              05
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              COORDINATE
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Align deal execution
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button: Read More Modal Trigger */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPillarModal(pillarsData[1])}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:bg-right bg-[length:200%_auto] text-[#061739] text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_14px_rgba(196,152,56,0.25)] hover:shadow-[0_4px_20px_rgba(223,183,88,0.4)] hover:-translate-y-0.5 group/btn cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 text-[#061739] group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>

                {/* Right (on desktop): Venture Development Illustration / Uploaded Image */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md h-[280px] sm:h-[340px] lg:h-[380px]">
                    <Image
                      src={pillarsData[1]?.imageUrl || "/images/ventures-icon.png"}
                      alt="Venture Development & Investment Facilitation"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 420px"
                      unoptimized
                      className="object-contain object-center"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ── PILLAR 03: BROKERAGE & BUSINESS DEVELOPMENT ── */}
            <div id="pillar-brokerage" className="scroll-mt-24 pt-10 border-t border-slate-200/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                {/* Left: Brokerage Illustration / Uploaded Image */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md h-[280px] sm:h-[340px] lg:h-[380px]">
                    <Image
                      src={pillarsData[2]?.imageUrl || "/images/brokerage-icon.png"}
                      alt="Brokerage & Business Development"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 420px"
                      unoptimized
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Right: Discussion & Stages */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase block">
                      WHO WE ARE • PILLAR 03
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#061739] tracking-tight leading-tight">
                      {pillarsData[2]?.title || "Brokerage & Business Development"}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono font-bold text-[#C49838] uppercase tracking-wider">
                      {pillarsData[2]?.tagline || "Connecting Relationships. Advancing Opportunities. Creating Value."}
                    </p>
                  </div>

                  {/* Clean Narrative Text */}
                  <div className="space-y-3 text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                    <p>
                      <strong className="text-[#061739] font-semibold">THE HINTER GROUP GHANA LTD</strong> provides brokerage and business development support designed to help organizations identify commercial opportunities, build strategic relationships, and facilitate mutually beneficial business engagements.
                    </p>
                    <p>
                      We place utmost importance on professional discretion, transparent alignment of mutual interests, and robust confidentiality across all commercial transactions.
                    </p>
                  </div>

                  {/* Stages with Horizontal Connecting Line */}
                  <div className="pt-2">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#061739]/80 block mb-3.5">
                      Facilitation Stages:
                    </span>
                    <div className="relative overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                      <div className="min-w-[420px] sm:min-w-0 relative">
                        {/* Horizontal Connector Line */}
                        <div className="absolute top-[17px] left-[6%] right-[6%] h-[2px] bg-slate-200" />
                        <div className="absolute top-[17px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#DFB758] via-[#C49838] to-[#DFB758] opacity-70" />

                        <div className="grid grid-cols-5 gap-1.5 relative z-10">
                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              01
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              UNDERSTAND
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Clarify commercial objectives
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              02
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              IDENTIFY
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Map qualified buyers & partners
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              03
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              INTRODUCE
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Discreet introductions
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              04
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              DEVELOP
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Guide deal discussions
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center group">
                            <div className="w-8.5 h-8.5 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              05
                            </div>
                            <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-bold text-[#061739] uppercase tracking-wider block">
                              ADVANCE
                            </span>
                            <p className="text-slate-500 text-[9.5px] sm:text-[10px] leading-tight mt-0.5 max-w-[95px] hidden sm:block">
                              Finalize agreements & closing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button: Read More Modal Trigger */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPillarModal(pillarsData[2])}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:bg-right bg-[length:200%_auto] text-[#061739] text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_14px_rgba(196,152,56,0.25)] hover:shadow-[0_4px_20px_rgba(223,183,88,0.4)] hover:-translate-y-0.5 group/btn cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 text-[#061739] group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          DETAILED PRACTICE PILLAR POPUP MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedPillarModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillarModal(null)}
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
                  onClick={() => setSelectedPillarModal(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close details popup"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9.5px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#DFB758] px-2.5 py-0.5 rounded-full bg-[#DFB758]/15 border border-[#DFB758]/30">
                      CORE PRACTICE AREA • PILLAR 0{selectedPillarModal.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-300">
                      {selectedPillarModal.tagline}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedPillarModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable with Full Detailed Verbatim Text) */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">

                {/* 1. Practice Overview */}
                <div className="space-y-2">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                    PRACTICE OVERVIEW & MANDATE
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {selectedPillarModal.leadText}
                  </p>
                </div>

                {/* 2. Detailed Focus Modules (8 Specialized Modules) */}
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    SPECIALIZED ADVISORY & EXECUTION TRACKS ({selectedPillarModal.modules.length} MODULES)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPillarModal.modules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#DFB758] px-1.5 py-0.5 rounded bg-[#061739]">
                            {mod.number}
                          </span>
                          <h4 className="font-heading text-xs sm:text-[12.5px] font-bold text-[#061739] leading-snug">
                            {mod.title}
                          </h4>
                        </div>
                        <p className="text-slate-500 text-[11.5px] leading-relaxed pt-0.5">
                          {mod.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Multi-Stage Delivery Framework */}
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    {selectedPillarModal.processTitle.toUpperCase()}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {selectedPillarModal.process.map((stg, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 text-center space-y-1 flex flex-col justify-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#061739] text-[#DFB758] font-mono text-[9px] font-bold mx-auto flex items-center justify-center">
                          0{sIdx + 1}
                        </div>
                        <h5 className="font-mono text-[10px] font-bold text-[#061739] uppercase">
                          {stg.stage}
                        </h5>
                        <p className="text-slate-500 text-[10px] leading-snug">
                          {stg.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Value Commitment Statement */}
                <div className="p-4 rounded-xl bg-[#061739]/5 border border-[#DFB758]/30 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49838]" />
                    <span className="text-[10px] font-heading font-bold tracking-[0.15em] text-[#061739] uppercase">
                      HGG VALUE COMMITMENT
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed italic">
                    "{selectedPillarModal.valueStatement}"
                  </p>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="px-5 py-4 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedPillarModal(null)}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-slate-600 hover:text-[#061739] bg-white border border-slate-200 hover:border-slate-300 transition-colors uppercase cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href={`/contact?practice=${encodeURIComponent(selectedPillarModal.title)}`}
                  onClick={() => setSelectedPillarModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:from-[#DFB758] hover:to-[#C49838] transition-all uppercase shadow-xs"
                >
                  <span>Inquire Regarding This Practice Area</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────
          3. ALL SERVICE DISCIPLINES — 9 Grid with Left-Anchored Background Image
      ───────────────────────────────────────────────── */}
      <section id="service-disciplines" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] text-[#0F172A] relative overflow-hidden border-b border-slate-200/80">

        {/* Left-Side Focused Background Landmark Image (Subtle Low-Opacity per Client Brief Section 2) */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[56%] xl:w-[50%] z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/img_new_1.PNG"
            alt="Ghana Landmark Scenery"
            fill
            unoptimized
            className="object-cover object-left lg:object-[15%_center] filter contrast-[1.08] brightness-[1.02] opacity-[0.15] sm:opacity-[0.20]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8F9FA]/60 to-[#F8F9FA]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-[#F8F9FA]/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/90 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="max-w-3xl mx-auto text-center mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase">
                OUR SERVICE AREAS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Comprehensive Capabilities Across the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Opportunity Lifecycle
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
          </motion.div>

          {/* 9 Service Disciplines Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 sm:mb-14">
            {serviceDisciplines.map((item, idx) => {
              const Icon = item.icon;
              const isHidden = !showAllDisciplines && idx >= 4;
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    isHidden ? "hidden sm:flex" : "flex"
                  } bg-white/95 backdrop-blur-xs hover:bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#DFB758]/70 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 relative group flex-col justify-between`}
                >
                  <div>
                    {/* Header: Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#061739] text-[#DFB758] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#14588B] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#C49838] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-heading text-[14px] font-bold text-[#061739] mb-2 uppercase tracking-wide leading-snug">
                      {item.title}
                    </h4>

                    {/* Concise Preview Description */}
                    <p className="text-slate-600 text-[12.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom: Read More Button */}
                  <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedServiceModal(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#DFB758] hover:bg-[#C49838] text-[#061739] text-[11px] font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer group/btn"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 text-[#061739] group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <span className="text-[9.5px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      Track 0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile See More / Show Less Toggle Button */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={handleToggleDisciplines}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
            >
              <span>
                {showAllDisciplines
                  ? "SHOW LESS"
                  : `SEE MORE DISCIPLINES (${serviceDisciplines.length - 4} MORE)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllDisciplines ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          DETAILED SERVICE DISCIPLINE POPUP MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedServiceModal(null)}
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
              {/* Modal Top Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedServiceModal(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close details popup"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9.5px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#DFB758] px-2.5 py-0.5 rounded-full bg-[#DFB758]/15 border border-[#DFB758]/30">
                      SERVICE DISCIPLINE • {selectedServiceModal.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedServiceModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable with Full Detailed Verbatim Text) */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">

                {/* 1. Executive Scope & Mandate */}
                <div className="space-y-2">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                    STRATEGIC SCOPE & MANDATE
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {selectedServiceModal.fullLead}
                  </p>
                </div>

                {/* 2. Core Advisory & Execution Capabilities */}
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    CORE CAPABILITIES & MECHANISMS
                  </span>
                  <div className="space-y-2.5">
                    {selectedServiceModal.keyCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C49838] shrink-0" />
                          <h4 className="font-heading text-xs sm:text-[12.5px] font-bold text-[#061739] leading-snug">
                            {cap.title}
                          </h4>
                        </div>
                        <p className="text-slate-500 text-[11.5px] leading-relaxed pl-6">
                          {cap.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Target Outcomes & Value Drivers */}
                <div className="space-y-2.5 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    STRATEGIC VALUE DRIVERS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedServiceModal.targetOutcomes.map((out, oIdx) => (
                      <div
                        key={oIdx}
                        className="p-3 rounded-lg bg-slate-50 border border-slate-200/90 text-center"
                      >
                        <span className="text-slate-600 text-[11px] font-medium leading-snug block">
                          {out}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Applicable Stakeholder Groups */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    KEY APPLICABLE STAKEHOLDERS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedServiceModal.applicableStakeholders.map((stk, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10.5px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#061739]/5 text-[#061739] border border-slate-200"
                      >
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
                  onClick={() => setSelectedServiceModal(null)}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-slate-600 hover:text-[#061739] bg-white border border-slate-200 hover:border-slate-300 transition-colors uppercase cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href={`/contact?service=${encodeURIComponent(selectedServiceModal.title)}`}
                  onClick={() => setSelectedServiceModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:from-[#DFB758] hover:to-[#C49838] transition-all uppercase shadow-xs"
                >
                  <span>Inquire Regarding This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────
          4. SERVICE DELIVERY PRINCIPLES — 5-Step Continuous Ribbon
      ───────────────────────────────────────────────── */}
      <section id="delivery-principles" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase">
                SERVICE DELIVERY PRINCIPLES
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Guided by Discipline, Integrity, and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Long-Term Value
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
          </motion.div>

          {/* 5-Step Continuous Delivery Pathway with Horizontal Connecting Line */}
          <div className="relative mb-8 sm:mb-14">
            {/* Desktop Horizontal Connecting Rail */}
            <div className="hidden lg:block absolute top-[40px] left-[8%] right-[8%] h-[2px] bg-slate-200 z-0" />
            <div className="hidden lg:block absolute top-[40px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#DFB758] via-[#C49838] to-[#DFB758] opacity-70 z-0" />

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {deliveryPrinciples.map((item, idx) => {
                const isHidden = !showAllDeliveryPrinciples && idx >= 3;
                return (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`${
                      isHidden ? "hidden sm:flex" : "flex"
                    } bg-[#F8F9FA] rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-[#DFB758]/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex-col justify-between relative group`}
                  >
                    <div>
                      {/* Header: Numbered Circle Node & Step Label */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#061739] border-2 border-[#DFB758] text-[#DFB758] font-mono text-[11px] font-bold flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                            {item.step}
                          </div>
                          <span className="text-[11px] font-mono font-bold tracking-widest text-[#C49838]">
                            STEP {item.step}
                          </span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DFB758]/40 group-hover:bg-[#DFB758] transition-colors" />
                      </div>

                      <h4 className="font-heading text-sm font-bold text-[#061739] mb-2 uppercase leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-[12px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedPrincipleModal(item)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DFB758] hover:bg-[#C49838] text-[#061739] text-[10.5px] font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3 text-[#061739] group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                      <span className="text-[9px] font-mono text-slate-400 uppercase font-semibold">
                        Phase {item.step}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile See More / Show Less Toggle Button */}
            <div className="mt-6 flex justify-center sm:hidden">
              <button
                type="button"
                onClick={handleToggleDeliveryPrinciples}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-white border border-slate-200 shadow-2xs hover:text-[#C49838] hover:border-[#DFB758] transition-all active:scale-95 cursor-pointer uppercase"
              >
                <span>
                  {showAllDeliveryPrinciples
                    ? "SHOW LESS"
                    : `SEE MORE PRINCIPLES (${deliveryPrinciples.length - 3} MORE)`}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    showAllDeliveryPrinciples ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          DETAILED SERVICE DELIVERY PRINCIPLE POPUP MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedPrincipleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPrincipleModal(null)}
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
              {/* Modal Top Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedPrincipleModal(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close details popup"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9.5px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#DFB758] px-2.5 py-0.5 rounded-full bg-[#DFB758]/15 border border-[#DFB758]/30">
                      DELIVERY PRINCIPLE • STEP {selectedPrincipleModal.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {selectedPrincipleModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable with Full Detailed Verbatim Text) */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#0F172A] flex-1 max-h-[calc(90dvh-130px)]">

                {/* 1. Principle Mandate & Overview */}
                <div className="space-y-2">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C49838] uppercase block">
                    OPERATIONAL SCOPE & PURPOSE
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {selectedPrincipleModal.fullLead}
                  </p>
                </div>

                {/* 2. Key Execution Deliverables */}
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    KEY EXECUTION DELIVERABLES & MECHANISMS
                  </span>
                  <div className="space-y-2.5">
                    {selectedPrincipleModal.keyDeliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C49838] shrink-0" />
                          <h4 className="font-heading text-xs sm:text-[12.5px] font-bold text-[#061739] leading-snug">
                            {del.title}
                          </h4>
                        </div>
                        <p className="text-slate-500 text-[11.5px] leading-relaxed pl-6">
                          {del.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Quality Assurance Standards */}
                <div className="space-y-2.5 pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#061739] uppercase block">
                    QUALITY ASSURANCE PILLARS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedPrincipleModal.qualityAssurance.map((qa, qIdx) => (
                      <div
                        key={qIdx}
                        className="p-3 rounded-lg bg-slate-50 border border-slate-200/90 text-center"
                      >
                        <span className="text-slate-600 text-[11px] font-medium leading-snug block">
                          {qa}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Institutional Governance Standard */}
                <div className="p-4 rounded-xl bg-[#061739]/5 border border-[#DFB758]/30 space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C49838]" />
                    <span className="text-[10px] font-heading font-bold tracking-[0.15em] text-[#061739] uppercase">
                      GOVERNANCE & INTEGRITY STANDARD
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed italic">
                    "{selectedPrincipleModal.governanceStandard}"
                  </p>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="px-5 py-4 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedPrincipleModal(null)}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-slate-600 hover:text-[#061739] bg-white border border-slate-200 hover:border-slate-300 transition-colors uppercase cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href="/contact"
                  onClick={() => setSelectedPrincipleModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:from-[#DFB758] hover:to-[#C49838] transition-all uppercase shadow-xs"
                >
                  <span>Engage in Our Delivery Process</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────
          5. WHO WE WORK WITH — Client & Partner Ecosystem
      ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-3"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.25em] text-[#C49838] uppercase">
                WHO WE WORK WITH
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[120px] sm:max-w-[200px]" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Supporting Diverse Stakeholders Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Global & Regional Markets
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full mx-auto my-3" />
          </motion.div>

          {/* 11 Stakeholder Badges Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-14">
            {targetStakeholders.map((stakeholder, sIdx) => (
              <motion.div
                key={sIdx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={Math.min(sIdx * 0.02, 0.15)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-[13px] font-medium text-[#061739] shadow-xs hover:border-[#DFB758]/60 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C49838] flex-shrink-0" />
                <span>{stakeholder}</span>
              </motion.div>
            ))}
          </div>

          {/* ── Institutional Statement Panel ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="bg-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm border border-slate-200 max-w-4xl mx-auto"
          >
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061739]/5 border border-[#14588B]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49838]" />
                <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#C49838] uppercase">
                  OUR COMMITMENT
                </span>
              </div>

              <blockquote className="font-heading text-base sm:text-xl lg:text-[1.35rem] font-bold text-[#061739] leading-[1.4] tracking-tight">
                “HGG is committed to providing services with integrity, discretion, professionalism, transparency, and respect for the interests of all parties involved.”
              </blockquote>

              <div className="w-12 h-[2.5px] bg-[#DFB758] rounded-full mx-auto" />

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                Our objective is to become a trusted long-term partner to organizations seeking responsible growth, meaningful collaboration, and sustainable value creation.
              </p>

              {/* Professional Diligence Disclaimer (Client Brief Section 7 & 10) */}
              <div className="pt-3 pb-1 max-w-xl mx-auto text-[11px] text-slate-500 leading-relaxed border-t border-slate-100">
                <p>
                  <em>Note: Where engagements require specialist legal, financial, environmental, or engineering assessments, HGG facilitates and coordinates these workstreams alongside appropriately qualified and accredited professional advisers and technical specialists.</em>
                </p>
              </div>

              {/* CTA Button Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-heading font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
                >
                  <span>Initiate Service Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about-us#areas-of-focus"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-heading font-bold tracking-wider text-[#061739] border border-slate-300 hover:border-[#DFB758]/60 bg-white hover:bg-slate-50 rounded transition-all duration-300 uppercase"
                >
                  View Focus Corridors
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
