import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutFoundationSection from "@/components/sections/AboutFoundationSection";
import IndustrySectorsSection from "@/components/sections/IndustrySectorsSection";
import DisciplinedPathwaySection from "@/components/sections/DisciplinedPathwaySection";
import InsightsPreviewSection from "@/components/sections/InsightsPreviewSection";

import { siteConfig } from "@/lib/siteConfig";
import { getSiteSettings } from "@/lib/sanityData";

export async function generateMetadata() {
  let settings = null;
  try {
    settings = await getSiteSettings();
  } catch {
    // Fallback
  }

  const companyName = settings?.companyName || siteConfig.name;
  const slogan = settings?.tagline || siteConfig.slogan;
  const ogImageUrl = settings?.defaultOgImageUrl || settings?.heroImageUrl || siteConfig.ogImage;

  return {
    title: `${companyName} | ${slogan}`,
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      title: `${companyName} | ${slogan}`,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: companyName,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: companyName }],
    },
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Solutions That Drive Impact */}
      <SolutionsSection />

      {/* 3. About Us & Our Foundation / Strategic Approach */}
      <AboutFoundationSection />

      {/* 4. Sectors of Focus (9 Industries) */}
      <IndustrySectorsSection />

      {/* 5. The 6-Stage Strategic Approach */}
      <DisciplinedPathwaySection />

      {/* 6. Perspectives on Market Opportunities (Insights) */}
      <InsightsPreviewSection />
    </div>
  );
}
