import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Projects & Strategic Partnerships | Collaborative Impact",
  description:
    "Discover strategic collaborations and commercial facilitation frameworks structured by THE HINTER GROUP GHANA LTD across energy, infrastructure, agribusiness, and circular economy sectors.",
  alternates: {
    canonical: `${siteConfig.url}/projects-and-partnerships`,
  },
  openGraph: {
    title: "Projects & Strategic Partnerships | THE HINTER GROUP GHANA LTD",
    description:
      "Discover strategic collaborations and commercial facilitation frameworks structured by THE HINTER GROUP GHANA LTD across energy, infrastructure, agribusiness, and circular economy sectors.",
    url: `${siteConfig.url}/projects-and-partnerships`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Projects & Partnerships — THE HINTER GROUP GHANA LTD" }],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
