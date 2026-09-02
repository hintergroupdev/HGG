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
  const officeAddress = settings?.officeAddress || "2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana";

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
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contactPhone,
        contactType: "corporate inquiries",
        email: contactEmail,
        areaServed: ["GH", "Africa", "Global"],
        availableLanguage: ["English"],
      },
    ],
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
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
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
      "Commodity & Commercial Brokerage",
      "Infrastructure Development & Public-Private Partnerships",
      "Clean Energy Transition & Environmental Sustainability",
      "Cross-Border Trade & Investment Facilitation",
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
