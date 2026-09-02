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

// 2. Leadership Query
export const leadershipMembersQuery = groq`
  *[_type == "leadershipMember"] | order(order asc, name asc) {
    _id,
    name,
    title,
    slug,
    category,
    order,
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
