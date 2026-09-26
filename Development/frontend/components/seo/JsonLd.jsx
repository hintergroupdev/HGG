import { siteConfig } from "@/lib/siteConfig";
import { getSiteSettings } from "@/lib/sanityData";

export default async function JsonLd() {
  let settings = null;
  try {
    settings = await getSiteSettings();
  } catch {
    // Graceful fallback
  }

  const socialLinks = [
    settings?.linkedinUrl,
    settings?.twitterUrl,
    settings?.facebookUrl,
    settings?.instagramUrl,
    settings?.youtubeUrl,
  ].filter(Boolean);

  const companyName = settings?.companyName || siteConfig.legalName;
  const tagline = settings?.tagline || siteConfig.tagline;
  const logoImage = settings?.logoUrl || siteConfig.logo;
  const ogImage = settings?.defaultOgImageUrl || settings?.heroImageUrl || siteConfig.ogImage;
  const contactPhone = settings?.contactPhone || siteConfig.contact.phone;
  const contactEmail = settings?.contactEmail || siteConfig.contact.email;
  const officeAddress = settings?.officeAddress || "8 Teinor Street, Dzorwulu, Accra, GA-158-3464, Ghana";

  const contactPoints = [
    {
      "@type": "ContactPoint",
      telephone: settings?.contactPhone || siteConfig.contact.phone,
      contactType: "primary corporate inquiry",
      email: contactEmail,
      areaServed: ["GH", "Africa", "Global"],
      availableLanguage: ["English"],
    },
    ...(settings?.contactPhoneAlt || siteConfig.contact.phoneAlt
      ? [
          {
            "@type": "ContactPoint",
            telephone: settings?.contactPhoneAlt || siteConfig.contact.phoneAlt,
            contactType: "secondary corporate inquiry",
            email: contactEmail,
            areaServed: ["GH", "Africa", "Global"],
            availableLanguage: ["English"],
          },
        ]
      : []),
    ...(settings?.contactPhoneTertiary || siteConfig.contact.phoneTertiary
      ? [
          {
            "@type": "ContactPoint",
            telephone: settings?.contactPhoneTertiary || siteConfig.contact.phoneTertiary,
            contactType: "direct executive inquiry",
            email: contactEmail,
            areaServed: ["GH", "Africa", "Global"],
            availableLanguage: ["English"],
          },
        ]
      : []),
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${siteConfig.url}/#organization`,
    name: companyName,
    alternateName: ["HGG", "HGG LTD", "The Hinter Group", "The Hinter Group Ghana"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: logoImage,
      width: "512",
      height: "512",
    },
    image: ogImage,
    description: siteConfig.description,
    slogan: tagline,
    founder: {
      "@type": "Person",
      name: "Charles N. Hammond",
      jobTitle: "Chairman & Founder",
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: officeAddress,
      addressLocality: "Dzorwulu, Accra",
      addressRegion: "Greater Accra",
      postalCode: "GA-158-3464",
      addressCountry: "GH",
    },
    contactPoint: contactPoints,
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: companyName,
    alternateName: "HGG",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: companyName,
    url: siteConfig.url,
    image: ogImage,
    telephone: contactPhone,
    email: contactEmail,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: officeAddress,
      addressLocality: "Dzorwulu, Accra",
      addressRegion: "Greater Accra",
      postalCode: "GA-158-3464",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "5.5539",
      longitude: "-0.2012",
    },
    areaServed: [
      { "@type": "Country", name: "Ghana" },
      { "@type": "Continent", name: "Africa" },
      { "@type": "AdministrativeArea", name: "International" },
    ],
    knowsAbout: [
      "Strategic Business Consulting",
      "Venture Development & Commercial Incubation",
      "Business Brokerage & Deal Facilitation",
      "Infrastructure Development & Public-Private Partnerships",
      "Clean Energy Transition & Environmental Sustainability",
      "Cross-Border Business Brokerage & FDI Facilitation",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
