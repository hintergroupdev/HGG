import { groq } from 'next-sanity';

// 1. Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    companyName,
    tagline,
    contactEmail,
    contactPhone,
    contactPhoneAlt,
    officeAddress,
    corporatePostalAddress,
    linkedinUrl,
    twitterUrl,
    facebookUrl,
    instagramUrl,
    youtubeUrl,
    logo,
    heroImage,
    defaultOgImage
  }
`;

// 2. Leadership Query — Unified Executive Query
export const leadershipMembersQuery = groq`
  *[
    (_type == "employeeVerification" && (isExecutive == true || (employeeId in ["HGG-001", "HGG-002", "HGG-003", "HGG-004", "HGG-005"] && isExecutive != false))) ||
    (_type == "leadershipMember")
  ] | order(coalesce(leadershipOrder, order, 10) asc, employeeId asc, name asc, fullName asc) {
    _id,
    _type,
    employeeId,
    isExecutive,
    "name": coalesce(fullName, name),
    "title": coalesce(position, title),
    "position": coalesce(position, title),
    "category": coalesce(leadershipCategory, category, "executive"),
    "order": coalesce(leadershipOrder, order, 10),
    slug,
    portrait,
    shortBio,
    fullBiography,
    principles,
    linkedinUrl
  }
`;

// 3. Service Pillars Query
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc, title asc) {
    _id,
    title,
    slug,
    order,
    tagline,
    shortSummary,
    icon,
    mainImage,
    capabilities,
    processTitle,
    process,
    valueStatement,
    ctaText
  }
`;

// 4. Focus Industries Query
export const industriesQuery = groq`
  *[_type == "industry"] | order(order asc) {
    _id,
    title,
    slug,
    order,
    shortDescription,
    fullLead,
    focusAreas,
    hggRole,
    color
  }
`;

// 5. Projects Query
export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    sector->{
      _id,
      title,
      slug
    },
    status,
    confidentialityHold,
    mainImage,
    summary,
    narrative,
    deliverables
  }
`;

// 6. Insights & News Posts Query
export const postsQuery = groq`
  *[_type == "post" && (!defined(isApproved) || isApproved == true)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      title,
      portrait
    },
    mainImage,
    excerpt,
    body,
    tags,
    featured
  }
`;

// 7. Single Post by Slug Query
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    category->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      title,
      portrait
    },
    mainImage,
    excerpt,
    body,
    tags
  }
`;

// 8. Categories Query
export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc, title asc) {
    _id,
    title,
    slug,
    description,
    icon,
    order,
    mainImage
  }
`;

// 9. Legal Page by Slug Query (Privacy Policy & Terms of Service)
export const legalPageBySlugQuery = groq`
  *[_type == "legalPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    categoryLabel,
    effectiveDate,
    leadText,
    sections[] {
      _key,
      sectionId,
      title,
      summary,
      content
    }
  }
`;

// 10. Employee Verification by ID Query
export const employeeVerificationQuery = groq`
  *[_type == "employeeVerification" && (employeeId == $employeeId || employeeId == upper($employeeId))][0] {
    _id,
    employeeId,
    fullName,
    position,
    organization,
    department,
    status,
    issuedDate,
    portrait,
    isExecutive,
    "category": coalesce(leadershipCategory, "executive"),
    "order": coalesce(leadershipOrder, 10),
    shortBio,
    fullBiography,
    principles,
    linkedinUrl,
    _createdAt
  }
`;

// 11. All Employee Verifications Query (For Admin Studio Tool)
export const allEmployeeVerificationsQuery = groq`
  *[_type == "employeeVerification"] | order(employeeId asc) {
    _id,
    employeeId,
    fullName,
    position,
    organization,
    department,
    status,
    issuedDate,
    portrait,
    isExecutive,
    internalNotes,
    _createdAt,
    _updatedAt
  }
`;

