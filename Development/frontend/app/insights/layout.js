import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Insights & Corporate News | Strategic Analysis & Market Intelligence",
  description:
    "Thought leadership, economic commentary, and official corporate announcements from THE HINTER GROUP GHANA LTD on West African investment, trade corridors, and sustainable growth.",
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: "Insights & Corporate News | THE HINTER GROUP GHANA LTD",
    description:
      "Thought leadership, economic commentary, and official corporate announcements from THE HINTER GROUP GHANA LTD on West African investment, trade corridors, and sustainable growth.",
    url: `${siteConfig.url}/insights`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Insights & News — THE HINTER GROUP GHANA LTD" }],
  },
};

export default function InsightsLayout({ children }) {
  return children;
}
