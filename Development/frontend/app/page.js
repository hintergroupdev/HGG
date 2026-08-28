import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutFoundationSection from "@/components/sections/AboutFoundationSection";
import IndustrySectorsSection from "@/components/sections/IndustrySectorsSection";
import DisciplinedPathwaySection from "@/components/sections/DisciplinedPathwaySection";
import InsightsPreviewSection from "@/components/sections/InsightsPreviewSection";

export const metadata = {
  title: "THE HINTER GROUP GHANA LTD | Connecting Opportunity. Creating Value.",
  description:
    "THE HINTER GROUP GHANA LTD is a Ghana-based consulting, ventures, and brokerage company connecting strategic opportunities with investors, technology providers, institutions, and development partners in Ghana and international markets.",
};

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

      {/* 5. Our Disciplined 9-Step Pathway */}
      <DisciplinedPathwaySection />

      {/* 6. Perspectives on Market Opportunities (Insights) */}
      <InsightsPreviewSection />
    </div>
  );
}
