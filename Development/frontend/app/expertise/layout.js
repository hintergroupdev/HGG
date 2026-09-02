import { siteConfig } from "@/lib/siteConfig";

export const revalidate = 60;
export const dynamic = "force-static";

export const metadata = {
  title: "Our Expertise | Strategic Consulting • Ventures • Brokerage",
  description:
    "Explore HGG's practice architecture across Strategic Consulting, Venture Development, and Commercial Brokerage, bridging investors, public institutions, and high-impact African opportunities.",
  alternates: {
    canonical: `${siteConfig.url}/expertise`,
  },
  openGraph: {
    title: "Our Expertise | THE HINTER GROUP GHANA LTD",
    description:
      "Explore HGG's practice architecture across Strategic Consulting, Venture Development, and Commercial Brokerage, bridging investors, public institutions, and high-impact African opportunities.",
    url: `${siteConfig.url}/expertise`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Expertise of THE HINTER GROUP GHANA LTD" }],
  },
};

export default function ExpertiseLayout({ children }) {
  return children;
}
