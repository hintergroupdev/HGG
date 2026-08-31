import { sanityFetch } from '@/sanity/lib/client';
import {
  siteSettingsQuery,
  leadershipMembersQuery,
  servicesQuery,
  industriesQuery,
  projectsQuery,
  postsQuery,
  postBySlugQuery,
  categoriesQuery,
  legalPageBySlugQuery,
} from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { articlesData, publicationStreams } from './insightsData';

/* ─────────────────────────────────────────────────────────────
   1. SITE SETTINGS DATA FETCHER
───────────────────────────────────────────────────────────── */
export async function getSiteSettings() {
  const fallback = {
    companyName: 'THE HINTER GROUP GHANA LTD',
    tagline: 'Consulting + Ventures | Brokerage • Committed to Excellence',
    contactEmail: 'info@hintergroupghana.com',
    contactPhone: '+233 (0) 30 200 0000',
    officeAddress: '2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana',
    linkedinUrl: 'https://linkedin.com',
    twitterUrl: 'https://x.com',
    facebookUrl: 'https://facebook.com',
    defaultOgImage: null,
  };

  const data = await sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] });
  if (!data) return fallback;

  return {
    ...fallback,
    ...data,
    logoUrl: data.logo ? urlForImage(data.logo)?.url() : null,
    heroImageUrl: data.heroImage ? urlForImage(data.heroImage)?.url() : null,
    defaultOgImageUrl: data.defaultOgImage ? urlForImage(data.defaultOgImage)?.url() : null,
  };
}

/* ─────────────────────────────────────────────────────────────
   2. LEADERSHIP & GOVERNANCE DATA FETCHER
───────────────────────────────────────────────────────────── */
export const defaultLeadershipMembers = [
  {
    id: 'charles-n-hammond',
    name: 'Charles N. Hammond',
    title: 'Chairman & Founder',
    category: 'executive',
    order: 1,
    portraitUrl: null,
    shortBio:
      'Charles N. Hammond provides the strategic vision, corporate oversight, and institutional direction for THE HINTER GROUP GHANA LTD, guiding the firm’s development across strategic consulting, ventures, and brokerage.',
    fullBiography:
      'Charles N. Hammond is the Chairman and Founder of THE HINTER GROUP GHANA LTD (HGG), where he provides the strategic vision, institutional leadership, and corporate governance direction for the company.\n\nMr. Hammond brings a strategic and relationship-focused perspective to HGG’s development, with particular emphasis on identifying viable commercial opportunities, building long-term stakeholder partnerships, and structuring high-impact initiatives across Ghana, Africa, and international corridors.\n\nHis leadership approach is grounded in uncompromising integrity, professionalism, disciplined execution, and the conviction that meaningful economic progress is built through trusted relationships, risk awareness, and sustainable value creation. As Founder, Mr. Hammond has positioned HGG as an authoritative bridge connecting governments, private enterprises, global technology providers, and institutional investors.\n\nUnder his stewardship, the firm champions responsible leadership and ESG alignment, ensuring every project under HGG’s advisory or incubation framework meets the highest standards of governance and delivers lasting economic and social value.',
    principles: [
      'Strategic Direction & Corporate Development',
      'Business Development & Opportunity Identification',
      'Strategic Partnerships & Institutional Engagement',
      'Corporate Governance, Accountability & Integrity',
    ],
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'daniel-kotei',
    name: 'Lt. Commander Daniel Kotei',
    title: 'Executive Leadership Team — Strategic Coordination & Stakeholder Engagement',
    category: 'executive',
    order: 2,
    portraitUrl: null,
    shortBio:
      'Contributes to HGG’s strategic coordination, stakeholder engagement, relationship development, and executive-level business discussions.',
    fullBiography:
      'Lt. Commander Daniel Kotei contributes to HGG’s strategic coordination, stakeholder engagement, relationship development, and executive-level business discussions. His involvement supports HGG’s efforts to establish and maintain constructive relationships with relevant stakeholders while helping coordinate opportunities that require disciplined communication, institutional engagement, and strategic alignment.\n\nHis contribution to the Executive Leadership Team reflects HGG’s emphasis on responsible coordination, professional relationships, and collaborative execution.',
    principles: [
      'Strategic Stakeholder Liaison',
      'Institutional Engagement & Communication',
      'Disciplined Commercial Alignment',
    ],
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'mathew-essien',
    name: 'Mathew Essien',
    title: 'Executive Leadership Team — Strategic Development & Business Coordination',
    category: 'executive',
    order: 3,
    portraitUrl: null,
    shortBio:
      'Contributes to HGG’s strategic development, business coordination, opportunity assessment, and executive-level planning.',
    fullBiography:
      'Mathew Essien contributes to HGG’s strategic development, business coordination, opportunity assessment, and executive-level planning. His involvement supports the company’s efforts to evaluate emerging opportunities, strengthen internal coordination, contribute to strategic discussions, and advance business-development initiatives consistent with HGG’s objectives.\n\nHis role within the Executive Leadership Team supports collaborative decision-making and the disciplined advancement of HGG’s business interests.',
    principles: [
      'Opportunity Assessment & Feasibility',
      'Business Development Strategy',
      'Cross-Functional Coordination',
    ],
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'harold-lumor',
    name: 'Harold Lumor',
    title: 'Executive Leadership Team — Finance & Commercial Review',
    category: 'executive',
    order: 4,
    portraitUrl: null,
    shortBio:
      'Contributes financial and commercial perspective to HGG’s Executive Leadership Team, supporting the review of commercial opportunities and business planning.',
    fullBiography:
      'Harold Lumor contributes financial and commercial perspective to HGG’s Executive Leadership Team. His involvement supports the review of financial considerations, commercial opportunities, project-related information, business planning, and other matters requiring responsible financial awareness and disciplined evaluation.\n\nHis contribution helps strengthen HGG’s approach to financial oversight, commercial decision-making, opportunity assessment, and sustainable organizational growth.',
    principles: [
      'Commercial Viability Reviews',
      'Financial Awareness & Structuring',
      'Disciplined Opportunity Evaluation',
    ],
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'rodney-rollins',
    name: 'Rodney Rollins',
    title: 'Executive Leadership Team — Research & Strategic Analysis',
    category: 'executive',
    order: 5,
    portraitUrl: null,
    shortBio:
      'Contributes to HGG’s research, strategic analysis, market intelligence, and opportunity-development activities.',
    fullBiography:
      'Rodney Rollins contributes to HGG’s research, strategic analysis, market intelligence, and opportunity-development activities. His work supports the gathering and evaluation of information relevant to business opportunities, stakeholder environments, markets, institutions, funding pathways, and strategic initiatives.\n\nHis contribution helps provide HGG’s leadership with organized research and analytical information that can support informed decision-making and business-development activities.',
    principles: [
      'Market Intelligence & Sector Research',
      'Data-Driven Decision Support',
      'Opportunity Landscape Mapping',
    ],
    linkedinUrl: 'https://linkedin.com',
  },
];

export async function getLeadershipMembers() {
  const data = await sanityFetch({ query: leadershipMembersQuery, tags: ['leadershipMember'] });
  if (!data || data.length === 0) return defaultLeadershipMembers;

  return data.map((m) => ({
    id: m.slug?.current || m._id,
    name: m.name,
    title: m.title,
    category: m.category || 'executive',
    order: m.order ?? 10,
    portraitUrl: m.portrait ? urlForImage(m.portrait)?.url() : null,
    shortBio: m.shortBio,
    fullBiography: m.fullBiography,
    principles: m.principles && m.principles.length > 0 ? m.principles : [],
    linkedinUrl: m.linkedinUrl,
  }));
}

/* ─────────────────────────────────────────────────────────────
   3. INSIGHTS & NEWS DATA FETCHER (POSTS & CATEGORIES)
───────────────────────────────────────────────────────────── */
export async function getInsightsArticles() {
  const data = await sanityFetch({ query: postsQuery, tags: ['post', 'category'] });
  if (!data || data.length === 0) {
    // Return built-in master dataset
    return articlesData;
  }

  return data.map((post) => {
    const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;
    const authorPortrait = post.author?.portrait ? urlForImage(post.author.portrait)?.url() : null;

    return {
      id: post._id || post.slug?.current,
      slug: post.slug?.current || post._id,
      title: post.title,
      categoryId: post.category?.slug?.current || 'company-news',
      category: post.category?.title || 'Company News',
      date: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        : 'August 2026',
      readTime: '4 min read',
      author: post.author?.name || 'HGG Editorial Team',
      authorRole: post.author?.title || 'Corporate Communications',
      authorPortrait,
      excerpt: post.excerpt,
      featuredImage: imageUrl,
      // Rich text body blocks or fallback array
      body: post.body || [],
      tags: post.tags || ['Strategy', 'Ghana', 'Investment'],
      keyTakeaways: [],
      featured: post.featured ?? false,
      isFromSanity: true,
    };
  });
}

export async function getPublicationStreams() {
  const data = await sanityFetch({ query: categoriesQuery, tags: ['category'] });
  if (!data || data.length === 0) return publicationStreams;

  return data.map((c) => ({
    id: c.slug?.current || c._id,
    title: c.title,
    desc: c.description || '',
    order: c.order ?? 1,
    imageUrl: c.mainImage ? urlForImage(c.mainImage)?.url() : null,
  }));
}

/* ─────────────────────────────────────────────────────────────
   3.5. CORE SERVICES & PRACTICE PILLARS DATA FETCHER
───────────────────────────────────────────────────────────── */
export async function getServices() {
  const data = await sanityFetch({ query: servicesQuery, tags: ['service'] });
  if (!data || data.length === 0) {
    return null;
  }
  return data.map((s) => ({
    ...s,
    imageUrl: s.mainImage ? urlForImage(s.mainImage)?.url() : null,
  }));
}

/* ─────────────────────────────────────────────────────────────
   3.6. FOCUS SECTORS & INDUSTRIES DATA FETCHER
───────────────────────────────────────────────────────────── */
export async function getIndustries() {
  const data = await sanityFetch({ query: industriesQuery, tags: ['industry'] });
  if (!data || data.length === 0) {
    return null;
  }
  return data;
}

/* ─────────────────────────────────────────────────────────────
   4. PROJECTS & PARTNERSHIPS DATA FETCHER
───────────────────────────────────────────────────────────── */
export const defaultProjects = [
  {
    id: "test-data-1",
    slug: "test-data-1",
    title: "Test Data 1: West African Renewable Energy & Grid Infrastructure Facilitation",
    sector: "Energy & Environmental Solutions",
    status: "Active Facilitation",
    summary: "Strategic coordination and commercial alignment framework for a cross-border clean energy and regional transmission infrastructure initiative.",
    deliverables: [
      "Inter-agency regulatory and licensing roadmap",
      "Commercial risk matrix and stakeholder alignment dossier",
      "Institutional investor & DFI engagement framework"
    ],
    narrative: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "This is sample Test Data 1 created to demonstrate dynamic CMS project rendering and multi-party facilitation frameworks. In Sanity Studio (/studio), you can edit, publish live case studies, or delete this project document anytime."
          }
        ]
      }
    ],
    isFromSanity: false,
  },
  {
    id: "test-data-2",
    slug: "test-data-2",
    title: "Test Data 2: Commercial Agribusiness Processing & Cold-Chain Logistics Corridor",
    sector: "Agriculture & Agribusiness",
    status: "In Development",
    summary: "Facilitating multi-stakeholder partnerships between agricultural producer cooperatives, international equipment providers, and regional logistics operators.",
    deliverables: [
      "Preliminary commercial feasibility & cold-chain logistics model",
      "Technology partner matching and procurement advisory",
      "Community stakeholder engagement & outgrower framework"
    ],
    narrative: [
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "This is sample Test Data 2 demonstrating an agribusiness infrastructure and market-linkage initiative. It can be modified, updated with real partner details, or deleted directly in Sanity Studio (/studio)."
          }
        ]
      }
    ],
    isFromSanity: false,
  },
  {
    id: "test-data-3",
    slug: "test-data-3",
    title: "Test Data 3: Sustainable Urban Waste-to-Value & Circular Resource Facility",
    sector: "Waste Management & Resource Recovery",
    status: "Formalized Partnership",
    summary: "Structuring an institutional collaboration framework between municipal authorities, private technology developers, and development finance institutions.",
    deliverables: [
      "Municipal coordination and statutory stakeholder facilitation",
      "Environmental and social governance (ESG) diligence support",
      "Long-term public-private partnership (PPP) structure"
    ],
    narrative: [
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "This is sample Test Data 3 showing circular economy and municipal resource recovery structuring. Easily manageable and deletable via Sanity Studio (/studio)."
          }
        ]
      }
    ],
    isFromSanity: false,
  }
];

export async function getProjects() {
  const data = await sanityFetch({ query: projectsQuery, tags: ['project', 'industry'] });
  if (!data || data.length === 0) {
    return defaultProjects;
  }

  const liveProjects = data
    .filter((p) => !p.confidentialityHold)
    .map((p) => ({
      id: p._id || p.slug?.current,
      slug: p.slug?.current || p._id,
      title: p.title,
      sector: p.sector?.title || 'Cross-Sector Strategic Initiative',
      status: p.status || 'in_development',
      imageUrl: p.mainImage ? urlForImage(p.mainImage)?.url() : null,
      summary: p.summary || '',
      narrative: p.narrative || [],
      deliverables: p.deliverables || [],
      isFromSanity: true,
    }));

  return liveProjects.length > 0 ? liveProjects : defaultProjects;
}

/* ─────────────────────────────────────────────────────────────
   5. LEGAL PAGES DATA FETCHER (PRIVACY POLICY & TERMS OF SERVICE)
───────────────────────────────────────────────────────────── */
export async function getLegalPage(slug) {
  try {
    const data = await sanityFetch({
      query: legalPageBySlugQuery,
      params: { slug },
      tags: ['legalPage', slug],
    });
    return data || null;
  } catch (err) {
    console.warn(`[Sanity Legal Page Load Error for ${slug}]`, err);
    return null;
  }
}

