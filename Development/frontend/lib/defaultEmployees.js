/**
 * Authoritative Central Employee Registry Data
 * Used by /verify/[id] route and Sanity Studio Employee ID & QR Tool.
 */

export const defaultVerifiedEmployeesList = [
  {
    _id: 'emp-HGG-001',
    employeeId: 'HGG-001',
    fullName: 'Charles N. Hammond',
    position: 'Chairman & Chief Executive Officer',
    organization: 'THE HINTER GROUP GHANA LTD',
    department: 'Executive Leadership & Governance',
    status: 'active',
    isExecutive: true,
    leadershipCategory: 'executive',
    leadershipOrder: 1,
    issuedDate: '2026-09-01',
    portraitUrl: '/images/CEO.PNG',
    shortBio:
      'Charles N. Hammond provides strategic leadership, corporate direction, and institutional oversight for THE HINTER GROUP GHANA LTD, guiding the firm’s development across consulting, ventures, and business brokerage.',
    fullBiography:
      'Charles N. Hammond is the Chairman and Founder of THE HINTER GROUP GHANA LTD (HGG), where he provides the strategic vision, institutional leadership, and corporate governance direction for the company.\n\nMr. Hammond brings a strategic and relationship-focused perspective to HGG’s development, with particular emphasis on identifying viable commercial opportunities, building long-term stakeholder partnerships, and structuring high-impact initiatives across Ghana, Africa, and international corridors.\n\nHis leadership approach is grounded in uncompromising integrity, professionalism, disciplined execution, and the conviction that meaningful economic progress is built through trusted relationships, risk awareness, and sustainable value creation.',
    principles: [
      'Strategic Direction & Corporate Development',
      'Business Development & Opportunity Identification',
      'Strategic Partnerships & Institutional Engagement',
      'Corporate Governance, Accountability & Integrity',
    ],
    linkedinUrl: 'https://linkedin.com',
    internalNotes: 'Executive verification credential linked to physical ID card.',
  },
  {
    _id: 'emp-HGG-002',
    employeeId: 'HGG-002',
    fullName: 'Lt. Commander Daniel Kotei — USN (Rtd.)',
    position: 'Strategic Coordination & Stakeholder Engagement',
    organization: 'THE HINTER GROUP GHANA LTD',
    department: 'Executive Leadership & Governance',
    status: 'active',
    isExecutive: true,
    leadershipCategory: 'executive',
    leadershipOrder: 2,
    issuedDate: '2026-09-01',
    portraitUrl: null,
    shortBio:
      'Contributes to HGG’s strategic coordination, stakeholder engagement, relationship development, and executive-level business discussions.',
    fullBiography:
      'Lt. Commander Daniel Kotei — USN (Rtd.) contributes to HGG’s strategic coordination, stakeholder engagement, relationship development, and executive-level business discussions. His involvement supports HGG’s efforts to establish and maintain constructive relationships with relevant stakeholders while helping coordinate opportunities that require disciplined communication, institutional engagement, and strategic alignment.\n\nHis contribution to the Executive Leadership Team reflects HGG’s emphasis on responsible coordination, professional relationships, and collaborative execution.',
    principles: [
      'Strategic Stakeholder Liaison',
      'Institutional Engagement & Communication',
      'Disciplined Commercial Alignment',
    ],
    linkedinUrl: 'https://linkedin.com',
    internalNotes: 'Executive verification credential linked to physical ID card.',
  },
  {
    _id: 'emp-HGG-003',
    employeeId: 'HGG-003',
    fullName: 'Maj. Gen. Matthew Essien — GAF (Rtd.)',
    position: 'Strategic Development & Business Coordination',
    organization: 'THE HINTER GROUP GHANA LTD',
    department: 'Executive Leadership & Governance',
    status: 'active',
    isExecutive: true,
    leadershipCategory: 'executive',
    leadershipOrder: 3,
    issuedDate: '2026-09-01',
    portraitUrl: null,
    shortBio:
      'Contributes to HGG’s strategic development, business coordination, opportunity assessment, and executive-level planning.',
    fullBiography:
      'Maj. Gen. Matthew Essien — GAF (Rtd.) contributes to HGG’s strategic development, business coordination, opportunity assessment, and executive-level planning. His involvement supports the company’s efforts to evaluate emerging opportunities, strengthen internal coordination, contribute to strategic discussions, and advance business-development initiatives consistent with HGG’s objectives.\n\nHis role within the Executive Leadership Team supports collaborative decision-making and the disciplined advancement of HGG’s business interests.',
    principles: [
      'Opportunity Assessment & Feasibility',
      'Business Development Strategy',
      'Cross-Functional Coordination',
    ],
    linkedinUrl: 'https://linkedin.com',
    internalNotes: 'Executive verification credential linked to physical ID card.',
  },
  {
    _id: 'emp-HGG-004',
    employeeId: 'HGG-004',
    fullName: 'Mr. Harold Lumor',
    position: 'Finance & Commercial Review',
    organization: 'THE HINTER GROUP GHANA LTD',
    department: 'Executive Leadership & Governance',
    status: 'active',
    isExecutive: true,
    leadershipCategory: 'executive',
    leadershipOrder: 4,
    issuedDate: '2026-09-01',
    portraitUrl: null,
    shortBio:
      'Contributes financial and commercial perspective to HGG’s Executive Leadership Team, supporting financial oversight and sustainable growth.',
    fullBiography:
      'Mr. Harold Lumor contributes financial and commercial perspective to HGG’s Executive Leadership Team.\n\nHis involvement supports the review of financial considerations, commercial opportunities, project-related information, business planning, and other matters requiring responsible financial awareness and disciplined evaluation.\n\nHis contribution helps strengthen HGG’s approach to financial oversight, commercial decision-making, opportunity assessment, and sustainable organizational growth.',
    principles: [
      'Finance & Commercial Review',
      'Commercial Opportunity Evaluation',
      'Financial Oversight & Business Planning',
    ],
    linkedinUrl: 'https://linkedin.com',
    internalNotes: 'Executive verification credential linked to physical ID card.',
  },
  {
    _id: 'emp-HGG-005',
    employeeId: 'HGG-005',
    fullName: 'Mr. Rodney Rollins',
    position: 'Research & Strategic Analysis',
    organization: 'THE HINTER GROUP GHANA LTD',
    department: 'Executive Leadership & Governance',
    status: 'active',
    isExecutive: true,
    leadershipCategory: 'executive',
    leadershipOrder: 5,
    issuedDate: '2026-09-01',
    portraitUrl: null,
    shortBio:
      'Contributes to HGG’s research, strategic analysis, market intelligence, and opportunity-development activities.',
    fullBiography:
      'Mr. Rodney Rollins contributes to HGG’s research, strategic analysis, market intelligence, and opportunity-development activities.\n\nHis work supports the gathering and evaluation of information relevant to business opportunities, stakeholder environments, markets, institutions, funding pathways, and strategic initiatives.\n\nHis contribution helps provide HGG’s leadership with organized research and analytical information that can support informed decision-making and business-development activities.',
    principles: [
      'Research & Strategic Analysis',
      'Market Intelligence & Opportunity Development',
      'Institutional & Strategic Evaluation',
    ],
    linkedinUrl: 'https://linkedin.com',
    internalNotes: 'Executive verification credential linked to physical ID card.',
  },
];

// Lookup map supporting standard codes and padding aliases (e.g. HGG-001, 0001, HGG-0001)
export const DEFAULT_VERIFIED_EMPLOYEES = defaultVerifiedEmployeesList.reduce((acc, emp) => {
  acc[emp.employeeId] = emp;
  const numMatch = emp.employeeId.match(/^HGG-(\d+)$/i);
  if (numMatch) {
    const rawNum = numMatch[1];
    acc[rawNum] = emp;
    acc[`HGG-${rawNum.padStart(4, '0')}`] = emp;
  }
  return acc;
}, {});
