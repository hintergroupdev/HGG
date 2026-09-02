import React, { useState } from 'react';
import { useClient } from 'sanity';
import { Card, Stack, Text, Button, Box, Heading, Inline, Badge, Grid } from '@sanity/ui';
import { articlesData, publicationStreams } from '../../lib/insightsData';
import { defaultLeadershipMembers } from '../../lib/sanityData';

function SeedToolComponent() {
  const client = useClient({ apiVersion: '2024-08-30' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // 1. Categories
  const categoriesToSeed = publicationStreams.map((s, idx) => ({
    _id: `cat-${s.id}`,
    _type: 'category',
    title: s.title,
    slug: { _type: 'slug', current: s.id },
    description: s.desc,
    order: idx + 1,
  }));

  // 2. Posts (18 Institutional Publications)
  const postsToSeed = articlesData.map((art, idx) => {
    const bodyBlocks = (art.content || [art.excerpt]).map((paragraph, pIdx) => ({
      _key: `p-${idx}-${pIdx}`,
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: `span-${idx}-${pIdx}`,
          _type: 'span',
          text: paragraph,
        },
      ],
    }));

    return {
      _id: `post-${art.id}`,
      _type: 'post',
      title: art.title,
      slug: { _type: 'slug', current: art.slug },
      publishedAt: '2026-08-01',
      category: {
        _type: 'reference',
        _ref: `cat-${art.categoryId}`,
      },
      excerpt: art.excerpt,
      body: bodyBlocks,
      tags: art.tags || ['Strategy', 'Ghana', 'Investment'],
      featured: idx < 3,
    };
  });

  // 3. Projects (Test Data 1, 2, 3)
  const testProjects = [
    {
      _id: 'test-data-1',
      _type: 'project',
      title: 'Test Data 1: West African Renewable Energy & Grid Infrastructure Facilitation',
      slug: { _type: 'slug', current: 'test-data-1' },
      status: 'facilitation',
      confidentialityHold: false,
      summary:
        'Strategic coordination and commercial alignment framework for a cross-border clean energy and regional transmission infrastructure initiative.',
      deliverables: [
        'Inter-agency regulatory and licensing roadmap',
        'Commercial risk matrix and stakeholder alignment dossier',
        'Institutional investor & DFI engagement framework',
      ],
      narrative: [
        {
          _key: 'block-1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'span-1',
              _type: 'span',
              text: 'This is sample Test Data 1 in Sanity CMS. You can edit this text, update its status, upload cover images, or delete this document from Sanity Studio.',
            },
          ],
        },
      ],
    },
    {
      _id: 'test-data-2',
      _type: 'project',
      title: 'Test Data 2: Commercial Agribusiness Processing & Cold-Chain Logistics Corridor',
      slug: { _type: 'slug', current: 'test-data-2' },
      status: 'in_development',
      confidentialityHold: false,
      summary:
        'Facilitating multi-stakeholder partnerships between agricultural producer cooperatives, international equipment providers, and regional logistics operators.',
      deliverables: [
        'Preliminary commercial feasibility & cold-chain logistics model',
        'Technology partner matching and procurement advisory',
        'Community stakeholder engagement & outgrower framework',
      ],
      narrative: [
        {
          _key: 'block-2',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'span-2',
              _type: 'span',
              text: 'This is sample Test Data 2 in Sanity CMS demonstrating an agribusiness infrastructure and market-linkage initiative.',
            },
          ],
        },
      ],
    },
    {
      _id: 'test-data-3',
      _type: 'project',
      title: 'Test Data 3: Sustainable Urban Waste-to-Value & Circular Resource Facility',
      slug: { _type: 'slug', current: 'test-data-3' },
      status: 'formalized',
      confidentialityHold: false,
      summary:
        'Structuring an institutional collaboration framework between municipal authorities, private technology developers, and development finance institutions.',
      deliverables: [
        'Municipal coordination and statutory stakeholder facilitation',
        'Environmental and social governance (ESG) diligence support',
        'Long-term public-private partnership (PPP) structure',
      ],
      narrative: [
        {
          _key: 'block-3',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'span-3',
              _type: 'span',
              text: 'This is sample Test Data 3 in Sanity CMS showing circular economy and municipal resource recovery structuring.',
            },
          ],
        },
      ],
    },
  ];

  // 4. Leadership Team
  const leadershipToSeed = defaultLeadershipMembers.map((m) => ({
    _id: `leader-${m.id}`,
    _type: 'leadershipMember',
    name: m.name,
    title: m.title,
    slug: { _type: 'slug', current: m.id },
    category: m.category || 'executive',
    order: m.order,
    shortBio: m.shortBio,
    principles: m.principles || [],
    fullBiography: [
      {
        _key: `bio-${m.id}`,
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: `span-${m.id}`,
            _type: 'span',
            text: m.fullBiography,
          },
        ],
      },
    ],
    linkedinUrl: m.linkedinUrl,
  }));

  // 5. Core Services
  const servicesToSeed = [
    {
      _id: 'service-consulting',
      _type: 'service',
      title: 'Strategic Consulting',
      slug: { _type: 'slug', current: 'strategic-consulting' },
      order: 1,
      tagline: 'Clarity. Direction. Sustainable Growth.',
      shortSummary:
        'Strategic advisory support designed to help organizations evaluate opportunities, strengthen decision-making, navigate complex business environments, and develop practical strategies for sustainable growth.',
      icon: 'Compass',
      capabilities: [
        { _key: 'cap-1', number: '01', title: 'Business Strategy & Growth Planning', description: 'HGG supports organizations in developing strategic plans designed to strengthen market positioning, identify growth opportunities, and support sustainable expansion.' },
        { _key: 'cap-2', number: '02', title: 'Market Entry & Expansion Strategy', description: 'Helping clients understand local business environments, identify relevant stakeholders, and develop strategies for responsible market entry.' },
        { _key: 'cap-3', number: '03', title: 'Opportunity Evaluation', description: 'Assisting clients in evaluating opportunities based on commercial relevance, stakeholder alignment, strategic fit, and risk constraints.' },
        { _key: 'cap-4', number: '04', title: 'Stakeholder Strategy', description: 'Identifying relevant decision-makers, institutions, partners, authorities, and communities while developing appropriate strategies for transparent engagement.' },
        { _key: 'cap-5', number: '05', title: 'Partnership Strategy', description: 'Supporting organizations in identifying potential strategic partners, defining partnership objectives, and developing frameworks for collaboration.' },
        { _key: 'cap-6', number: '06', title: 'Business Positioning', description: 'Strengthening how organizations position themselves before investors, institutions, partners, and governments.' },
        { _key: 'cap-7', number: '07', title: 'Strategic Problem Solving', description: 'Combining commercial judgment, stakeholder understanding, and practical coordination to resolve complex business challenges.' },
        { _key: 'cap-8', number: '08', title: 'Advisory Support for Complex Initiatives', description: 'Providing end-to-end strategic advisory support for multi-party and cross-jurisdictional initiatives.' },
      ],
      processTitle: '5-Stage Strategic Consulting Process',
      process: [
        { _key: 'p-1', stage: 'UNDERSTAND', desc: "Clarify the client's objectives, challenges, operating environment, and strategic priorities." },
        { _key: 'p-2', stage: 'ASSESS', desc: 'Evaluate the opportunity, business environment, stakeholders, risks, and potential pathways forward.' },
        { _key: 'p-3', stage: 'DEVELOP', desc: "Create a practical strategic approach aligned with the client's objectives and available resources." },
        { _key: 'p-4', stage: 'ALIGN', desc: 'Support engagement and alignment among relevant stakeholders, partners, and decision-makers.' },
        { _key: 'p-5', stage: 'ADVANCE', desc: 'Assist the client in moving from strategy toward practical implementation and measurable progress.' },
      ],
      valueStatement: 'HGG’s strategic consulting services are designed to provide more than recommendations. Our goal is to help clients gain clarity, make better-informed decisions, strengthen relationships, identify opportunities, and develop practical strategies capable of creating sustainable value.',
      ctaText: 'DISCUSS YOUR STRATEGY WITH HGG',
    },
    {
      _id: 'service-ventures',
      _type: 'service',
      title: 'Venture Development & Investment Facilitation',
      slug: { _type: 'slug', current: 'venture-development' },
      order: 2,
      tagline: 'From Opportunity to Investable Potential.',
      shortSummary:
        'Supports the identification, development, positioning, and advancement of promising business and investment opportunities from early concept toward structured engagement.',
      icon: 'Rocket',
      capabilities: [
        { _key: 'cap-1', number: '01', title: 'Opportunity Identification', description: 'Identifying and evaluating potential ventures and investment opportunities with credible commercial potential.' },
        { _key: 'cap-2', number: '02', title: 'Venture Positioning', description: 'Strengthening how opportunities are presented to prospective investors and partners.' },
        { _key: 'cap-3', number: '03', title: 'Investment Facilitation', description: 'Connecting credible opportunities with potential investors, financial institutions, and DFIs.' },
        { _key: 'cap-4', number: '04', title: 'Partner Identification', description: 'Identifying organizations that provide capital, technology, technical expertise, and market access.' },
        { _key: 'cap-5', number: '05', title: 'Stakeholder Development', description: 'Supporting multi-party relationships, facilitating communication, and coordinating alignment.' },
        { _key: 'cap-6', number: '06', title: 'Project Readiness Support', description: 'Coordinating executive summaries, opportunity briefs, and preliminary project documentation.' },
        { _key: 'cap-7', number: '07', title: 'Investor & Partner Engagement', description: 'Supporting constructive engagement through strategic introductions and meeting coordination.' },
        { _key: 'cap-8', number: '08', title: 'Venture Coordination', description: 'Maintaining communication and coordination among all parties as opportunities evolve.' },
      ],
      processTitle: '6-Stage Venture Advancement Process',
      process: [
        { _key: 'p-1', stage: 'IDENTIFY', desc: 'Identify or receive a potentially credible business or investment opportunity.' },
        { _key: 'p-2', stage: 'ASSESS', desc: 'Understand the opportunity, objectives, stakeholders, and strategic requirements.' },
        { _key: 'p-3', stage: 'POSITION', desc: 'Strengthen how the opportunity is structured and presented for engagement.' },
        { _key: 'p-4', stage: 'CONNECT', desc: 'Identify and facilitate engagement with relevant investors and partners.' },
        { _key: 'p-5', stage: 'COORDINATE', desc: 'Support communication, information exchange, and stakeholder alignment.' },
        { _key: 'p-6', stage: 'ADVANCE', desc: 'Assist stakeholders in moving discussions toward structured partnership.' },
      ],
      valueStatement: 'HGG’s role in investment facilitation does not replace independent legal, financial, technical, or commercial due diligence.',
      ctaText: 'EXPLORE INVESTMENT & VENTURE OPPORTUNITIES',
    },
    {
      _id: 'service-brokerage',
      _type: 'service',
      title: 'Commercial Brokerage & Business Development',
      slug: { _type: 'slug', current: 'commercial-brokerage' },
      order: 3,
      tagline: 'Connecting Relationships. Advancing Opportunities. Creating Value.',
      shortSummary:
        'Provides brokerage and business development support designed to help organizations identify commercial opportunities, build strategic relationships, and facilitate mutually beneficial business engagements.',
      icon: 'Handshake',
      capabilities: [
        { _key: 'cap-1', number: '01', title: 'Strategic Introductions', description: 'Facilitating introductions between organizations that benefit from working together.' },
        { _key: 'cap-2', number: '02', title: 'Commercial Intermediation', description: 'Assisting parties in establishing communication, clarifying objectives, and exploring collaboration.' },
        { _key: 'cap-3', number: '03', title: 'Business Development Support', description: 'Supporting organizations seeking to expand their commercial presence and client base.' },
        { _key: 'cap-4', number: '04', title: 'Relationship Facilitation', description: 'Building and maintaining constructive relationships between commercial entities and institutions.' },
        { _key: 'cap-5', number: '05', title: 'Opportunity Sourcing', description: 'Identifying commercial opportunities, assets, projects, or partnerships that align with client requirements.' },
        { _key: 'cap-6', number: '06', title: 'Transaction Coordination Support', description: 'Supporting the coordination of discussions, documentation, and stakeholder alignment.' },
        { _key: 'cap-7', number: '07', title: 'Cross-Border Business Development', description: 'Connecting international companies with commercial opportunities across African markets.' },
        { _key: 'cap-8', number: '08', title: 'Confidential Business Representation', description: 'Representing client interests in preliminary discussions with complete discretion.' },
      ],
      processTitle: '5-Stage Commercial Engagement Process',
      process: [
        { _key: 'p-1', stage: 'UNDERSTAND', desc: 'Clarify the client’s commercial objectives, criteria, and expectations.' },
        { _key: 'p-2', stage: 'IDENTIFY', desc: 'Identify relevant counter-parties, opportunities, or potential strategic partners.' },
        { _key: 'p-3', stage: 'INTRODUCE', desc: 'Facilitate professional introductions and preliminary discussions.' },
        { _key: 'p-4', stage: 'COORDINATE', desc: 'Support ongoing communication, information exchange, and stakeholder alignment.' },
        { _key: 'p-5', stage: 'FACILITATE', desc: 'Assist parties in moving toward formal agreement, transaction, or ongoing relationship.' },
      ],
      valueStatement: 'HGG is not a licensed broker-dealer and does not provide regulated securities brokerage or investment banking services.',
      ctaText: 'ENGAGE REGARDING COMMERCIAL BROKERAGE',
    },
  ];

  // 5.5. 9 Priority Sectors of Focus
  const industriesToSeed = [
    {
      _id: 'industry-infrastructure',
      _type: 'industry',
      title: 'Infrastructure & Urban Development',
      slug: { _type: 'slug', current: 'infrastructure-urban-development' },
      order: 1,
      shortDescription:
        'Supporting projects that improve transportation, public infrastructure, urban planning, and community development while promoting long-term economic growth.',
      fullLead:
        'Infrastructure and urban development form the foundation of sustainable economic transformation. HGG collaborates with governments, institutional investors, engineering contractors, and urban planners to advance high-impact transport corridors, municipal infrastructure, and strategic regional projects.',
      focusAreas: [
        'Transportation Corridors & Logistics Hubs',
        'Urban Planning & Municipal Infrastructure',
        'Public-Private Partnerships (PPP)',
        'Community & Regional Development',
      ],
      hggRole:
        'Strategic opportunity identification, stakeholder coordination, and investment facilitation for public and private infrastructure initiatives.',
      color: '#0A2457',
    },
    {
      _id: 'industry-energy',
      _type: 'industry',
      title: 'Energy & Environmental Solutions',
      slug: { _type: 'slug', current: 'energy-environmental-solutions' },
      order: 2,
      shortDescription:
        'Facilitating opportunities involving renewable energy, energy transition, environmental sustainability, circular economy initiatives, and responsible resource management.',
      fullLead:
        'The transition toward clean, resilient energy systems is essential for industrial growth. HGG works with developers, utilities, DFIs, and technology providers to structure renewable generation, off-grid power, and environmental stewardship projects.',
      focusAreas: [
        'Renewable Power (Solar, Hydro, Biomass)',
        'Energy Transition & Grid Infrastructure',
        'Environmental Compliance & ESG Diligence',
        'Circular Resource & Carbon Reduction',
      ],
      hggRole:
        'Connecting energy developers with institutional funding, regulatory guidance, and cross-border technology partners.',
      color: '#059669',
    },
    {
      _id: 'industry-waste',
      _type: 'industry',
      title: 'Waste Management & Resource Recovery',
      slug: { _type: 'slug', current: 'waste-management-resource-recovery' },
      order: 3,
      shortDescription:
        'Supporting innovative waste management solutions, recycling initiatives, waste-to-resource opportunities, and environmentally responsible technologies.',
      fullLead:
        'Sustainable waste management converts environmental burdens into circular economic assets. HGG facilitates partnerships between municipal authorities, private recyclers, and technology innovators for resource recovery.',
      focusAreas: [
        'Municipal Solid Waste & Recycling Systems',
        'Waste-to-Energy & Circular Conversion',
        'Industrial Resource Recovery',
        'Environmental Sanitation & Technology',
      ],
      hggRole:
        'Structuring municipal collaboration frameworks, concession advisory, and circular technology partner matching.',
      color: '#0D9488',
    },
    {
      _id: 'industry-real-estate',
      _type: 'industry',
      title: 'Real Estate & Property Development',
      slug: { _type: 'slug', current: 'real-estate-property-development' },
      order: 4,
      shortDescription:
        'Identifying and supporting strategic real estate opportunities, commercial developments, mixed-use projects, and property investment initiatives.',
      fullLead:
        'Strategic real estate developments drive urbanization and commercial activity. HGG coordinates landholders, institutional developers, and capital partners across mixed-use and commercial projects.',
      focusAreas: [
        'Commercial & Corporate Complexes',
        'Mixed-Use & Master-Planned Communities',
        'Industrial Parks & Logistics Warehousing',
        'Property Investment Structuring',
      ],
      hggRole:
        'Commercial feasibility review, institutional capital introduction, and development partnership coordination.',
      color: '#7C3AED',
    },
    {
      _id: 'industry-agribusiness',
      _type: 'industry',
      title: 'Agriculture & Agribusiness',
      slug: { _type: 'slug', current: 'agriculture-agribusiness' },
      order: 5,
      shortDescription:
        'Promoting opportunities across agriculture, food production, agribusiness development, value-chain enhancement, agro-processing, and food security initiatives.',
      fullLead:
        'Agribusiness transformation is vital for food security and export competitiveness. HGG assists agricultural enterprises and investors in agro-processing, cold-chain logistics, and modern farming technologies.',
      focusAreas: [
        'Commercial Farming & Outgrower Schemes',
        'Agro-Processing & Value Addition',
        'Cold-Chain & Food Logistics Hubs',
        'Export Market Linkages & Trade',
      ],
      hggRole:
        'Value-chain enhancement, technology partner matching, and strategic investment facilitation.',
      color: '#16A34A',
    },
    {
      _id: 'industry-healthcare',
      _type: 'industry',
      title: 'Healthcare & Life Sciences',
      slug: { _type: 'slug', current: 'healthcare-life-sciences' },
      order: 6,
      shortDescription:
        'Supporting investments and partnerships that strengthen healthcare delivery, medical infrastructure, public health initiatives, and health technologies.',
      fullLead:
        'Accessible, high-quality medical infrastructure is a cornerstone of societal resilience. HGG supports private and public healthcare providers in expanding medical facilities, diagnostic centers, and pharmaceutical distribution.',
      focusAreas: [
        'Hospital Infrastructure & Diagnostic Clinics',
        'Pharmaceutical Manufacturing & Supply',
        'Digital Health & Telemedicine Solutions',
        'Medical Equipment Procurement Advisory',
      ],
      hggRole:
        'Facilitating public-private health partnerships, medical equipment financing, and international clinical alliances.',
      color: '#E11D48',
    },
    {
      _id: 'industry-technology',
      _type: 'industry',
      title: 'Technology & Digital Transformation',
      slug: { _type: 'slug', current: 'technology-digital-transformation' },
      order: 7,
      shortDescription:
        'Encouraging innovation through technology partnerships, digital solutions, smart infrastructure, emerging technologies, and business transformation initiatives.',
      fullLead:
        'Digital infrastructure empowers modern African economies. HGG connects technology providers, fintech platforms, telecom operators, and enterprise clients to drive digital transformation.',
      focusAreas: [
        'Enterprise Digital Transformation',
        'Fintech & Digital Financial Infrastructure',
        'Smart City & IoT Systems',
        'Data Infrastructure & Cloud Services',
      ],
      hggRole:
        'Strategic technology partner identification, cross-border market entry, and venture commercialization.',
      color: '#2563EB',
    },
    {
      _id: 'industry-trade',
      _type: 'industry',
      title: 'International Trade & Investment',
      slug: { _type: 'slug', current: 'international-trade-investment' },
      order: 8,
      shortDescription:
        'Building relationships that encourage responsible international investment, cross-border collaboration, technology transfer, and sustainable economic partnerships.',
      fullLead:
        'Connecting Ghanaian and African markets to global capital networks accelerates regional integration under AfCFTA. HGG serves as a trusted intermediary for bilateral trade and foreign direct investment.',
      focusAreas: [
        'Bilateral Trade & Commercial Corridors',
        'AfCFTA Market Entry & Expansion',
        'Foreign Direct Investment (FDI) Facilitation',
        'Strategic Joint Venture Structuring',
      ],
      hggRole:
        'High-level commercial brokerage, trade facilitation, and counter-party risk assessment.',
      color: '#D97706',
    },
    {
      _id: 'industry-education',
      _type: 'industry',
      title: 'Education & Human Capital Development',
      slug: { _type: 'slug', current: 'education-human-capital' },
      order: 9,
      shortDescription:
        'Supporting educational institutions, workforce development initiatives, vocational training, research collaboration, and leadership development programs.',
      fullLead:
        'Human capital development ensures sustainable long-term economic prosperity. HGG works with universities, vocational academies, and international foundations to build capacity.',
      focusAreas: [
        'Higher Education & Institutional Partnerships',
        'Technical & Vocational Education (TVET)',
        'Executive & Workforce Skill Development',
        'Research & Technology Transfer Programs',
      ],
      hggRole:
        'Institutional liaison, educational initiative development, and international university partnerships.',
      color: '#4F46E5',
    },
  ];

  // 6. Global Site Settings
  const siteSettingsToSeed = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    companyName: 'THE HINTER GROUP GHANA LTD',
    tagline: 'Consulting + Ventures | Brokerage • Committed to Excellence',
    contactEmail: 'info@hintergroupghana.com',
    contactPhone: '+233 (0) 30 200 0000',
    officeAddress: '2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana',
    linkedinUrl: 'https://linkedin.com',
    twitterUrl: 'https://x.com',
    facebookUrl: 'https://facebook.com',
  };

  // 7. Legal Pages (Privacy Policy & Terms of Service)
  const legalPagesToSeed = [
    {
      _id: 'legal-privacy-policy',
      _type: 'legalPage',
      title: 'Privacy Policy',
      slug: { _type: 'slug', current: 'privacy-policy' },
      categoryLabel: 'LEGAL & COMPLIANCE',
      effectiveDate: 'August 2026',
      leadText: 'Data governance and institutional confidentiality charter of THE HINTER GROUP GHANA LTD under the Data Protection Act, 2012 (Act 843) of Ghana.',
      sections: [
        {
          _key: 'sec-1',
          sectionId: 'sec-1',
          title: '1. Scope & Application',
          summary: 'Jurisdictional scope and applicable users',
          content: [
            {
              _key: 'p1',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's1',
                  _type: 'span',
                  text: "This Privacy Policy applies to all organizations, institutions, investors, project developers, technology providers, entrepreneurs, and visitors who access THE HINTER GROUP GHANA LTD's digital platforms, submit inquiries through our online contact portals, or engage in preliminary discussions with our corporate practice teams.",
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-2',
          sectionId: 'sec-2',
          title: '2. Information We Collect',
          summary: 'Direct submission and operational logs',
          content: [
            {
              _key: 'p2',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's2',
                  _type: 'span',
                  text: 'We gather information submitted directly by you to assess potential collaboration and ensure secure communication, including Identity & Representation (Full name, title, organization), Corporate Contact Channels (Official email, direct lines, office location), Opportunity & Inquiries (High-level project overviews, partnership mandate objectives), and Technical Infrastructure Logs (Anonymized telemetry and security timestamps).',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-3',
          sectionId: 'sec-3',
          title: '3. Purpose & Legal Basis for Processing',
          summary: 'Commercial evaluation and compliance frameworks',
          content: [
            {
              _key: 'p3',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's3',
                  _type: 'span',
                  text: 'HGG processes collected information under legitimate commercial interest and pre-contractual assessment principles to evaluate strategic alignment, coordinate formal introductory discussions with relevant sector practice leaders, direct inquiries across our 9 priority corridors, and comply with regulatory obligations and AML compliance frameworks in Ghana.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-4',
          sectionId: 'sec-4',
          title: '4. Commercial Confidentiality & Information Governance',
          summary: 'Institutional discretion and bilateral NDA requirements',
          content: [
            {
              _key: 'p4',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's4',
                  _type: 'span',
                  text: 'All submitted commercial inquiries are handled with institutional discretion. Visitors are advised not to submit confidential trade secrets, restricted financial models, or legally privileged records through general website forms until an appropriate bilateral Non-Disclosure Agreement (NDA) is executed between the parties.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-5',
          sectionId: 'sec-5',
          title: '5. Non-Disclosure & Authorized Data Sharing',
          summary: 'Permitted disclosures and statutory obligations',
          content: [
            {
              _key: 'p5',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's5',
                  _type: 'span',
                  text: 'HGG will not disclose your information to third parties except to Authorized Professional Advisors (retained legal counsel, auditors under binding non-disclosure covenants), Transaction Consortiums (strategic co-investors or institutional partners with explicit written authorization), or Statutory Authorities (when compelled by valid court orders under the laws of the Republic of Ghana).',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-6',
          sectionId: 'sec-6',
          title: '6. Security Protocols & Data Retention',
          summary: 'Physical, technical, and administrative data controls',
          content: [
            {
              _key: 'p6',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's6',
                  _type: 'span',
                  text: 'We employ comprehensive physical, technical, and administrative controls to protect submitted information against unauthorized access, loss, or manipulation. Data is retained strictly for the duration required to complete opportunity reviews or as mandated by statutory compliance timelines.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-7',
          sectionId: 'sec-7',
          title: '7. Your Statutory Rights Under Act 843',
          summary: 'Rights under the Data Protection Act, 2012 (Act 843) of Ghana',
          content: [
            {
              _key: 'p7',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's7',
                  _type: 'span',
                  text: 'Pursuant to the Data Protection Act, 2012 (Act 843) of Ghana, data subjects retain the right to access formal records held by HGG, request prompt rectification of inaccurate records, and object to processing subject to statutory legal retention mandates.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-8',
          sectionId: 'sec-8',
          title: '8. Compliance & Legal Affairs Desk',
          summary: 'Direct governance contact and corporate headquarters',
          content: [
            {
              _key: 'p8',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 's8',
                  _type: 'span',
                  text: 'For statutory requests or information governance inquiries, please reach out to our corporate Compliance & Legal Affairs Desk via official contact channels.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 'legal-terms-of-service',
      _type: 'legalPage',
      title: 'Terms of Service',
      slug: { _type: 'slug', current: 'terms-of-service' },
      categoryLabel: 'LEGAL & COMPLIANCE',
      effectiveDate: 'August 2026',
      leadText: 'Corporate platform use and engagement terms of THE HINTER GROUP GHANA LTD under the laws of the Republic of Ghana.',
      sections: [
        {
          _key: 'sec-1',
          sectionId: 'sec-1',
          title: '1. Corporate Purpose & Platform Mandate',
          summary: 'Platform scope and orientation purpose',
          content: [
            {
              _key: 't1',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts1',
                  _type: 'span',
                  text: 'THE HINTER GROUP GHANA LTD is a strategic consulting, ventures, and brokerage company established to identify opportunities, mobilize resources, and structure sustainable development initiatives across Ghana, Africa, and international markets. This digital platform provides orientation, company updates, and preliminary inquiry channels.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-2',
          sectionId: 'sec-2',
          title: '2. No Fiduciary, Advisory, or Client Relationship',
          summary: 'Non-binding nature of website interactions',
          content: [
            {
              _key: 't2',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts2',
                  _type: 'span',
                  text: 'Submitting a website inquiry, project summary, or accessing published content does not create an advisory, broker-client, fiduciary, investment, legal, or other professional relationship with HGG. Any formal partnership, transaction facilitation, or advisory mandate is established solely through a separate, signed written agreement.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-3',
          sectionId: 'sec-3',
          title: '3. Opportunity Screening & Institutional Discretion',
          summary: 'Preliminary evaluation and absolute engagement discretion',
          content: [
            {
              _key: 't3',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts3',
                  _type: 'span',
                  text: 'HGG conducts preliminary screening of all proposals to assess capability alignment and strategic fit. Submitting an inquiry does not guarantee that HGG will accept, facilitate, represent, fund, introduce, or endorse the proposed opportunity. HGG reserves absolute discretion regarding project engagement.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-4',
          sectionId: 'sec-4',
          title: '4. Intellectual Property & Proprietary Frameworks',
          summary: 'Exclusive ownership of trademarks and methodologies',
          content: [
            {
              _key: 't4',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts4',
                  _type: 'span',
                  text: "All visual assets, trademarks, corporate emblems, text, and proprietary methodologies—including HGG's 6-Stage Strategic Approach—are the exclusive intellectual property of THE HINTER GROUP GHANA LTD. Unauthorized reproduction, modification, or commercial re-use is strictly prohibited.",
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-5',
          sectionId: 'sec-5',
          title: '5. Information Accuracy & General Orientation Disclaimers',
          summary: 'General orientation without financial or investment warranty',
          content: [
            {
              _key: 't5',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts5',
                  _type: 'span',
                  text: 'Platform materials are provided for general orientation. While HGG exercises diligence, materials are provided "as is" without warranties. Published market perspectives or industry observations represent high-level macroeconomic viewpoints and do not constitute financial, investment, tax, or legal advice.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-6',
          sectionId: 'sec-6',
          title: '6. Confidentiality Protocol & Trade Secrets',
          summary: 'Pre-NDA submission protocols',
          content: [
            {
              _key: 't6',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts6',
                  _type: 'span',
                  text: 'Visitors should not transmit restricted proprietary data, unreleased financial structures, or legally sensitive records through general website forms. Where an opportunity requires sensitive disclosures, HGG will establish an appropriate Non-Disclosure Agreement before detailed exchange.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-7',
          sectionId: 'sec-7',
          title: '7. Limitation of Liability',
          summary: 'Exclusion of consequential and incidental platform damages',
          content: [
            {
              _key: 't7',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts7',
                  _type: 'span',
                  text: 'To the maximum extent permissible under applicable law, THE HINTER GROUP GHANA LTD and its directors, executives, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from platform access, data transmission, or reliance on published briefings.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-8',
          sectionId: 'sec-8',
          title: '8. Governing Law & Exclusive Jurisdiction',
          summary: 'Jurisdiction of the Republic of Ghana',
          content: [
            {
              _key: 't8',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts8',
                  _type: 'span',
                  text: 'These Terms of Service and all related interactions shall be governed by, interpreted, and enforced in accordance with the laws of the Republic of Ghana. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of Accra, Ghana.',
                },
              ],
            },
          ],
        },
        {
          _key: 'sec-9',
          sectionId: 'sec-9',
          title: '9. Corporate Inquiries & Legal Desk',
          summary: 'Direct legal and corporate governance communication',
          content: [
            {
              _key: 't9',
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _key: 'ts9',
                  _type: 'span',
                  text: 'For formal corporate inquiries, statutory communications, or legal governance matters, please contact THE HINTER GROUP GHANA LTD Corporate Desk.',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // Handlers
  async function handleInjectSiteSettings() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      await client.createOrReplace(siteSettingsToSeed);
      setMessage('Successfully injected Global Site Settings (Headquarters, Email, Telephone, Social Media) into Sanity dataset!');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject site settings into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectLeadership() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      for (const leader of leadershipToSeed) {
        await client.createOrReplace(leader);
      }
      setMessage(`Successfully injected ${leadershipToSeed.length} Leadership Profiles into Sanity dataset!`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject leadership profiles into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectIndustries() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      for (const ind of industriesToSeed) {
        await client.createOrReplace(ind);
      }
      setMessage(`Successfully injected all 9 Priority Sectors of Focus into Sanity dataset!`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject priority sectors into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectServices() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      for (const s of servicesToSeed) {
        await client.createOrReplace(s);
      }
      setMessage('Successfully injected 3 Core Service Pillars into Sanity CMS dataset!');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject services into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectInsights() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      for (const cat of categoriesToSeed) await client.createOrReplace(cat);
      for (const post of postsToSeed) await client.createOrReplace(post);
      setMessage(`Successfully injected 6 Categories and ${postsToSeed.length} Articles into Sanity CMS dataset!`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject articles into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectProjects() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      for (const proj of testProjects) await client.createOrReplace(proj);
      setMessage('Successfully injected 3 Test Projects into Sanity dataset!');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject projects into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectLegalPages() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      for (const doc of legalPagesToSeed) await client.createOrReplace(doc);
      setMessage('Successfully injected Legal Pages (Privacy Policy & Terms of Service) into Sanity dataset!');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject legal pages into Sanity.');
    } finally {
      setLoading(false);
    }
  }

  async function handleInjectAllMasterData() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      await client.createOrReplace(siteSettingsToSeed);
      for (const ind of industriesToSeed) await client.createOrReplace(ind);
      for (const cat of categoriesToSeed) await client.createOrReplace(cat);
      for (const post of postsToSeed) await client.createOrReplace(post);
      for (const proj of testProjects) await client.createOrReplace(proj);
      for (const leader of leadershipToSeed) await client.createOrReplace(leader);
      for (const service of servicesToSeed) await client.createOrReplace(service);
      for (const doc of legalPagesToSeed) await client.createOrReplace(doc);

      setMessage(`Success! Injected all master datasets: Global Site Settings, 9 Priority Sectors, 3 Service Pillars, 6 Categories, ${postsToSeed.length} Articles, 3 Projects, ${leadershipToSeed.length} Leadership Profiles, and Legal Pages (Privacy & Terms) into Sanity!`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to inject all master data.');
    } finally {
      setLoading(false);
    }
  }

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  };

  const btnStyle = (tone) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 18px',
    fontSize: '13px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: loading ? 'not-allowed' : 'pointer',
    border: 'none',
    backgroundColor: tone === 'critical' ? '#dc2626' : tone === 'positive' ? '#059669' : '#061739',
    color: '#ffffff',
    transition: 'all 0.2s ease',
    opacity: loading ? 0.6 : 1,
  });

  return (
    <div style={{ maxWidth: '840px', margin: '40px auto', padding: '0 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#061739', margin: '0 0 8px 0' }}>
          Sanity CMS Master Data Seeder
        </h1>
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
          Inject official master datasets directly into your active Sanity dataset (<code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>0rqjd271 / production</code>) using your active Studio session.
        </p>
      </div>

      {message && (
        <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '14px 18px', color: '#065f46', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
          ✓ {message}
        </div>
      )}

      {error && (
        <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '14px 18px', color: '#991b1b', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
          ✕ Error: {error}
        </div>
      )}

      {/* Action 1: Global Site Settings */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          1. Global Site Settings & Contact Info
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects official <strong>Corporate Headquarters Address, Contact Email, Telephone, and Social Media links</strong> into the <code>siteSettings</code> singleton.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectSiteSettings}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject Global Site Settings'}
        </button>
      </div>

      {/* Action 2: Leadership Profiles */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          2. Leadership & Governance Profiles
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects the <strong>Chairman & Founder</strong> and all <strong>Executive Leadership Team members</strong> with full biographies and core focus areas into the <code>leadershipMember</code> document type.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectLeadership}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject Leadership Profiles'}
        </button>
      </div>

      {/* Action 3: 9 Priority Sectors */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          3. 9 Priority Sectors of Focus Injection
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects all <strong>9 Priority Economic Corridors</strong> (Infrastructure, Energy, Waste Management, Real Estate, Agribusiness, Healthcare, Technology, Trade, Education) into the <code>industry</code> document type.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectIndustries}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject 9 Priority Sectors'}
        </button>
      </div>

      {/* Action 4: Services */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          4. Core Service Pillars Injection
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects the <strong>3 Core Practice Pillars</strong> (Strategic Consulting, Venture Development, Commercial Brokerage) with all 24 modules and execution stages into the <code>service</code> document type.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectServices}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject 3 Service Pillars'}
        </button>
      </div>

      {/* Action 5: Insights & News */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          5. Insights & News Articles Injection
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects all <strong>6 Publication Stream Categories</strong> and <strong>18 Official Articles</strong> with full rich-text content, tags, and category links.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectInsights}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject All 18 Articles & 6 Streams'}
        </button>
      </div>

      {/* Action 6: Projects */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          6. Projects Test Data Injection
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects <strong>Test Data 1, 2, and 3</strong> into the <code>project</code> document type.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectProjects}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject Test Projects (1, 2, 3)'}
        </button>
      </div>

      {/* Action 7: Legal Pages */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#061739', margin: '0 0 6px 0' }}>
          7. Legal Pages Injection (Privacy Policy & Terms of Service)
        </h2>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects full verbatim clauses for <strong>Privacy Policy (Act 843 compliant)</strong> and <strong>Terms of Service</strong> with editable section structures into the <code>legalPage</code> document type.
        </p>
        <button
          style={btnStyle('positive')}
          onClick={handleInjectLegalPages}
          disabled={loading}
        >
          {loading ? 'Injecting...' : 'Inject Legal Pages (Privacy & Terms)'}
        </button>
      </div>

      {/* Action 8: Bulk Inject All */}
      <div style={{ ...cardStyle, border: '2px solid #DFB758', backgroundColor: '#fefce8' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#854d0e', margin: '0 0 6px 0' }}>
          8. Master Bulk Injection (All Content Types)
        </h2>
        <p style={{ fontSize: '13px', color: '#713f12', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          Injects <strong>Site Settings, 9 Priority Sectors, Leadership Profiles, Services, Articles, Categories, Projects, and Legal Pages</strong> all at once.
        </p>
        <button
          style={btnStyle('critical')}
          onClick={handleInjectAllMasterData}
          disabled={loading}
        >
          {loading ? 'Injecting All...' : 'Inject All Master Data'}
        </button>
      </div>
    </div>
  );
}

export function seedTool() {
  return {
    name: 'data-seeder',
    title: 'Data Seeder',
    component: SeedToolComponent,
  };
}
