import {
  Newspaper,
  BookOpen,
  TrendingUp,
  Building2,
  Users2,
  Megaphone,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   PUBLICATION STREAMS
───────────────────────────────────────────────────────────── */
export const publicationStreams = [
  {
    id: "company-news",
    title: "Company News",
    icon: Newspaper,
    badgeColor: "#0A2457",
    desc: "Updates relating to HGG's organizational development, strategic initiatives, executive appointments, business milestones, and approved corporate announcements.",
  },
  {
    id: "project-partnerships",
    title: "Project & Partnership Updates",
    icon: Building2,
    badgeColor: "#14588B",
    desc: "Publicly approved information concerning selected projects, strategic partnerships, stakeholder engagements, formal meetings, site visits, and development milestones.",
  },
  {
    id: "business-insights",
    title: "Business Insights",
    icon: TrendingUp,
    badgeColor: "#C49838",
    desc: "Perspectives on business development, market entry, investment facilitation, partnership development, stakeholder engagement, and other strategic disciplines.",
  },
  {
    id: "industry-perspectives",
    title: "Industry & Market Perspectives",
    icon: BookOpen,
    badgeColor: "#061739",
    desc: "Selected observations across Infrastructure, Energy, Waste Management, Real Estate, Agribusiness, Healthcare, Technology, International Trade, and Education.",
  },
  {
    id: "leadership-perspectives",
    title: "Leadership Perspectives",
    icon: Users2,
    badgeColor: "#7C3AED",
    desc: "Selected articles, commentaries, or messages from HGG leadership addressing business governance, institutional development, responsible investment, and sustainable growth.",
  },
  {
    id: "announcements",
    title: "Official Announcements",
    icon: Megaphone,
    badgeColor: "#059669",
    desc: "Official HGG notices, symposium and event participation, partnership declarations, media releases, and communications approved for public distribution.",
  },
];

/* ─────────────────────────────────────────────────────────────
   EDITORIAL APPROACH CHARTER
───────────────────────────────────────────────────────────── */
export const editorialCharter = [
  {
    title: "Accurate",
    desc: "Factually grounded commentary verified by operational and sector specialists.",
  },
  {
    title: "Relevant",
    desc: "Focused on actionable economic opportunities shaping Ghana and West Africa.",
  },
  {
    title: "Professional",
    desc: "Authored in accordance with institutional corporate standards and market rigor.",
  },
  {
    title: "Responsible",
    desc: "Prioritizing sustainable value creation and ethical commercial alignment.",
  },
  {
    title: "Respectful of Confidentiality",
    desc: "Safeguarding proprietary stakeholder data, partner trust, and strategic privacy.",
  },
  {
    title: "Appropriate for Public Disclosure",
    desc: "Strictly disseminating publicly cleared milestones and verified information.",
  },
  {
    title: "Corporate Standards Alignment",
    desc: "Exemplifying HGG's core brand identity of discipline, transparency, and integrity.",
  },
];

/* ─────────────────────────────────────────────────────────────
   ARTICLES MASTER DATA (18 Institutional Publications)
───────────────────────────────────────────────────────────── */
export const articlesData = [
  {
    id: "art-1",
    slug: "navigating-strategic-market-entry-in-west-africa",
    title: "Navigating Strategic Market Entry in West Africa: A Framework for Institutional Investors",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "August 2026",
    readTime: "5 min read",
    author: "HGG Strategic Advisory Desk",
    excerpt: "Key considerations for global capital providers seeking de-risked entry, regulatory alignment, and trusted stakeholder networks in Ghana's expanding infrastructure and logistics sectors.",
    content: [
      "Expanding into West Africa represents one of the most compelling institutional growth opportunities of the current decade, accelerated by the operationalization of the African Continental Free Trade Area (AfCFTA). However, success requires navigating nuanced regulatory environments, establishing bankable project structures, and building deep multi-stakeholder trust.",
      "At THE HINTER GROUP GHANA LTD (HGG), our advisory approach underscores three non-negotiable fundamentals: rigorous preliminary feasibility assessments, transparent stakeholder alignment with statutory authorities, and institutional risk-mitigation frameworks that de-risk capital deployment while ensuring long-term socioeconomic returns.",
      "Organizations that thrive in this environment do not operate in isolation; they integrate local insight with global operational standards to build resilient, sustainable ventures."
    ],
    tags: ["Market Entry", "Institutional Capital", "Infrastructure", "AfCFTA"],
  },
  {
    id: "art-2",
    slug: "role-of-public-private-facilitation-in-port-logistics",
    title: "The Role of Public-Private Facilitation in Modernizing Industrial & Port Logistics",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "July 2026",
    readTime: "4 min read",
    author: "HGG Infrastructure & Trade Practice",
    excerpt: "How structured commercial mediation and multi-stakeholder coordination are unlocking maritime trade efficiency under the AfCFTA framework.",
    content: [
      "Ghana's strategic positioning along the Gulf of Guinea makes its maritime corridors pivotal for regional commerce. Modernizing port logistics requires sophisticated coordination between private concessionaires, customs authorities, and international shipping lines.",
      "HGG facilitates commercial dialogues and partnership structures that accelerate infrastructure throughput, reduce demurrage inefficiencies, and integrate digital customs solutions into transit corridors."
    ],
    tags: ["Maritime Logistics", "Public-Private Partnerships", "Trade Corridors"],
  },
  {
    id: "art-3",
    slug: "renewable-energy-and-grid-transition-ghana",
    title: "Renewable Energy & Grid Transition: Structuring Bankable Clean Power Ventures",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "June 2026",
    readTime: "6 min read",
    author: "HGG Energy & Sustainability Group",
    excerpt: "Analyzing commercial viability, environmental impact frameworks, and consortium assembly for commercial and industrial clean energy assets.",
    content: [
      "As industrialization accelerates across Ghana, securing stable, cost-effective, and low-carbon energy is critical for manufacturing competitiveness. Decentralized solar, mini-grids, and waste-to-energy solutions offer high-yield potential.",
      "HGG works with technical partners and institutional investors to structure bankable power purchase agreements (PPAs), coordinate environmental permitting, and ensure robust community engagement."
    ],
    tags: ["Renewable Energy", "Clean Power", "ESG", "Sustainability"],
  },
  {
    id: "art-4",
    slug: "agribusiness-value-addition-domestic-processing",
    title: "Agribusiness Value Addition: Transitioning from Raw Export to Domestic Processing",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "May 2026",
    readTime: "5 min read",
    author: "HGG Agricultural Ventures Desk",
    excerpt: "Examining strategic investment corridors in agro-processing, cold-chain logistics, and export certification to maximize domestic value capture.",
    content: [
      "Transforming agricultural commodities into high-value packaged goods is a core economic priority for Ghana. Realizing this potential requires integrated cold-chain logistics, certified storage facilities, and structured outgrower commercial schemes.",
      "HGG identifies bankable agro-processing opportunities and connects international equipment manufacturers and off-takers with established local farming cooperatives."
    ],
    tags: ["Agribusiness", "Agro-Processing", "Export Trade", "Supply Chain"],
  },
  {
    id: "art-5",
    slug: "sustainable-urban-infrastructure-commercial-industrial-corridors",
    title: "Sustainable Urban Infrastructure: Structuring Commercial & Industrial Corridors in Ghana",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "April 2026",
    readTime: "4 min read",
    author: "HGG Strategic Advisory Desk",
    excerpt: "Examining planning and commercial frameworks to support sustainable real estate, commercial hubs, and industrial zones across expanding urban centers.",
    content: [
      "Sustainable urban development requires rigorous feasibility planning, multi-stakeholder coordination, and disciplined alignment between master developers and public planning authorities.",
      "HGG evaluates commercial parameters and coordinates advisory workstreams to help structure institutional-grade industrial and commercial real estate initiatives."
    ],
    tags: ["Urban Development", "Industrial Corridors", "Commercial Infrastructure"],
  },
  {
    id: "art-6",
    slug: "leadership-commentary-disciplined-project-pathways",
    title: "HGG Leadership Commentary: The Imperative of Disciplined Execution in African Development",
    category: "LEADERSHIP PERSPECTIVES",
    categoryId: "leadership-perspectives",
    date: "March 2026",
    readTime: "7 min read",
    author: "Office of the Executive Leadership",
    excerpt: "A perspective on why structured execution, rigorous governance, and phased verification are essential for long-term stakeholder value creation.",
    content: [
      "Across developing markets, visionary concepts often stall not from a lack of capital, but from a deficit of structured, disciplined execution. A credible project pathway requires systematic progression from initial assessment through stakeholder alignment to post-launch optimization.",
      "At HGG, our 6-Stage Strategic Approach reflects our institutional commitment to de-risking ventures, honoring partner trust, and delivering measurable societal and commercial impact."
    ],
    tags: ["Leadership", "Governance", "Disciplined Execution", "Strategy"],
  },
  {
    id: "art-7",
    slug: "industrial-water-infrastructure-sustainable-resource-management",
    title: "Industrial Water Infrastructure & Sustainable Resource Management in West Africa",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "February 2026",
    readTime: "4 min read",
    author: "HGG Environmental Practice Group",
    excerpt: "Exploring commercial models for industrial effluent treatment, desalination, and potable water access for manufacturing zones.",
    content: [
      "Securing uninterrupted industrial water supplies while maintaining environmental sustainability is a growing priority for manufacturing zones across Ghana.",
      "HGG facilitates public-private dialogues and technical partnerships to deploy advanced water recycling, effluent treatment, and smart distribution networks."
    ],
    tags: ["Water Infrastructure", "Sustainability", "Industrial Utilities"],
  },
  {
    id: "art-8",
    slug: "multimodal-logistics-corridors-inland-trade-west-africa",
    title: "Multimodal Logistics Corridors: Accelerating Inland Trade in West Africa",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "January 2026",
    readTime: "4 min read",
    author: "HGG Infrastructure & Trade Practice",
    excerpt: "How multimodal transit dry ports and integrated warehousing can bridge maritime terminals with regional inland commerce.",
    content: [
      "Efficient cargo transit between Gulf of Guinea ports and inland commercial hubs is essential for West African economic integration.",
      "HGG analyzes commercial facilitation frameworks that optimize inter-modal logistics and reduce transit bottlenecks across primary corridors."
    ],
    tags: ["Logistics", "Trade Corridors", "Inland Transit", "AfCFTA"],
  },
  {
    id: "art-9",
    slug: "digital-infrastructure-subsea-fiber-connectivity",
    title: "Digital Infrastructure & Subsea Fiber Connectivity: Driving West African Enterprise Growth",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "December 2025",
    readTime: "5 min read",
    author: "HGG Technology & Digital Advisory",
    excerpt: "Analyzing high-capacity data centre investments and terrestrial fiber expansions unlocking digital trade under AfCFTA.",
    content: [
      "West Africa is experiencing surging demand for carrier-neutral data centres, enterprise cloud infrastructure, and low-latency digital transit routes.",
      "HGG supports international infrastructure funds and domestic operators in site acquisition, power reliability structuring, and statutory licensing."
    ],
    tags: ["Digital Infrastructure", "Data Centres", "Technology", "AfCFTA"],
  },
  {
    id: "art-10",
    slug: "healthcare-infrastructure-financing-ppps",
    title: "Healthcare Infrastructure Financing: Structuring PPPs for Specialist Diagnostic Centres",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "November 2025",
    readTime: "5 min read",
    author: "HGG Healthcare Practice Desk",
    excerpt: "Overcoming capital constraints in clinical infrastructure through blended finance, equipment leasing models, and institutional operating partnerships.",
    content: [
      "Modernizing diagnostic and specialist clinical capacity is critical for reducing medical outbound travel and improving community health outcomes.",
      "HGG designs innovative concession structures that unite medical equipment manufacturers, private healthcare operators, and development finance institutions."
    ],
    tags: ["Healthcare", "Blended Finance", "Public-Private Partnerships"],
  },
  {
    id: "art-11",
    slug: "infrastructure-capital-syndication-derisking-investment-west-africa",
    title: "Infrastructure Capital Syndication: De-risking Large-Scale Assets in West Africa",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "October 2025",
    readTime: "4 min read",
    author: "HGG Strategic Advisory Desk",
    excerpt: "Key institutional considerations for syndicating commercial debt, development finance, and private equity for large-scale economic infrastructure.",
    content: [
      "Large-scale infrastructure delivery depends on robust risk allocation frameworks that reconcile commercial imperatives with public development goals.",
      "Structuring credible syndicates requires early-stage feasibility evaluation, clear regulatory compliance, and active stakeholder coordination."
    ],
    tags: ["Capital Syndication", "Infrastructure", "Investment Facilitation"],
  },
  {
    id: "art-12",
    slug: "waste-to-energy-circular-economy-clean-power",
    title: "Waste-to-Energy & Circular Economy: Transforming Municipal Solid Waste into Clean Power",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "September 2025",
    readTime: "6 min read",
    author: "HGG Energy & Sustainability Group",
    excerpt: "Commercializing municipal waste streams through thermal conversion, methane capture, and engineered recyclable off-take agreements.",
    content: [
      "Rapid urbanization in West African cities creates urgent challenges for municipal waste management while simultaneously presenting a massive biomass energy opportunity.",
      "HGG advises municipalities and clean-tech developers on structuring bankable waste collection concessions and baseline power purchase agreements."
    ],
    tags: ["Waste-to-Energy", "Circular Economy", "Clean Energy", "Urban Resilience"],
  },
  {
    id: "art-13",
    slug: "mining-support-services-local-content-compliance",
    title: "Mining Support Services & Local Content Compliance: Enhancing Supply Chain Value",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "August 2025",
    readTime: "5 min read",
    author: "HGG Natural Resources & Trade Practice",
    excerpt: "Navigating statutory local content quotas while optimizing technical efficiency in mining equipment supply, maintenance, and civil works.",
    content: [
      "Ghana's mining sector continues to evolve with stringent local content requirements designed to foster domestic enterprise participation.",
      "HGG bridges international mining equipment suppliers with certified indigenous engineering firms to structure compliant joint ventures."
    ],
    tags: ["Mining", "Local Content", "Supply Chain", "Joint Ventures"],
  },
  {
    id: "art-14",
    slug: "leadership-perspective-institutional-governance-value-creation",
    title: "HGG Leadership Perspective: Institutional Governance and Long-Term Value Creation",
    category: "LEADERSHIP PERSPECTIVES",
    categoryId: "leadership-perspectives",
    date: "July 2025",
    readTime: "6 min read",
    author: "Office of the Executive Leadership",
    excerpt: "Reflections on why uncompromising corporate ethics and transparent commercial mediation form the bedrock of sustainable African enterprises.",
    content: [
      "In high-growth frontier markets, reputation and institutional trust are the ultimate differentiators. Commercial speed must never compromise compliance or partner transparency.",
      "At HGG, our operating philosophy is built upon disciplined corporate governance, providing foreign and domestic investors with absolute confidence."
    ],
    tags: ["Corporate Governance", "Leadership", "Business Ethics", "Integrity"],
  },
  {
    id: "art-15",
    slug: "sustainable-urban-housing-mixed-use-real-estate",
    title: "Sustainable Urban Housing & Mixed-Use Real Estate Development in Greater Accra",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "June 2025",
    readTime: "4 min read",
    author: "HGG Real Estate & Urban Advisory",
    excerpt: "Facilitating land title regularisation, environmental impact clearance, and master development financing for eco-friendly residential communities.",
    content: [
      "Meeting the housing deficit in urban Accra requires sustainable architectural design, efficient building materials, and reliable long-term mortgage financing structures.",
      "HGG collaborates with property developers, institutional lenders, and city planning authorities to de-risk residential projects."
    ],
    tags: ["Real Estate", "Housing", "Urban Development", "Sustainability"],
  },
  {
    id: "art-16",
    slug: "cross-border-trade-corridors-export-efficiency-afcfta",
    title: "Cross-Border Trade Corridors: Maximizing Export Efficiency Under AfCFTA",
    category: "BUSINESS INSIGHTS",
    categoryId: "business-insights",
    date: "May 2025",
    readTime: "4 min read",
    author: "HGG Strategic Advisory Desk",
    excerpt: "Understanding rules of origin, customs harmonisation, and structured commercial partnerships under the African Continental Free Trade Area.",
    content: [
      "The operationalization of AfCFTA provides unprecedented opportunities for regional manufacturers and agricultural producers.",
      "Navigating tariff classifications, verifying certificate of origin compliance, and securing reliable logistics partners are essential for capturing cross-border value."
    ],
    tags: ["AfCFTA", "Cross-Border Trade", "Export Strategy"],
  },
  {
    id: "art-17",
    slug: "commercial-solar-mini-grids-off-grid-processing",
    title: "Commercial Solar Mini-Grids for Off-Grid Industrial & Agricultural Processing Zones",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "April 2025",
    readTime: "5 min read",
    author: "HGG Energy & Sustainability Group",
    excerpt: "Examining decentralized energy economics for remote agro-processing clusters and rural manufacturing facilities across West Africa.",
    content: [
      "Grid instability in rural agricultural heartlands often impedes industrial value addition. Hybrid solar-battery mini-grids offer a dependable, cost-effective alternative.",
      "HGG structures anchor-load power purchase agreements that guarantee off-take while enabling local community electrification."
    ],
    tags: ["Solar Power", "Mini-Grids", "Agribusiness", "Rural Electrification"],
  },
  {
    id: "art-18",
    slug: "technical-feasibility-project-readiness-african-infrastructure",
    title: "Technical Feasibility & Project Readiness in African Infrastructure Delivery",
    category: "INDUSTRY PERSPECTIVES",
    categoryId: "industry-perspectives",
    date: "March 2025",
    readTime: "4 min read",
    author: "HGG Infrastructure & Trade Practice",
    excerpt: "Why comprehensive early-stage technical scoping and multi-agency coordination determine bankability in emerging infrastructure markets.",
    content: [
      "Across frontier markets, project readiness is the critical bridge between concept ambition and commercial implementation.",
      "Disciplined early-stage scoping, environmental impact assessment coordination, and transparent stakeholder engagement significantly enhance project bankability."
    ],
    tags: ["Project Readiness", "Infrastructure", "Bankability", "Governance"],
  },
];
