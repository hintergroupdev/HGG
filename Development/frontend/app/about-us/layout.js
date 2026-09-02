import { siteConfig } from "@/lib/siteConfig";

export const revalidate = 60;
export const dynamic = "force-static";

export const metadata = {
  title: "About Us | Corporate Philosophy & 6-Stage Strategic Approach",
  description:
    "Learn about THE HINTER GROUP GHANA LTD, our corporate governance, multidisciplinary foundation, the approved 6-Stage Strategic Approach, and 9 priority focus sectors in Ghana and Africa.",
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
  openGraph: {
    title: "About Us | THE HINTER GROUP GHANA LTD",
    description:
      "Learn about THE HINTER GROUP GHANA LTD, our corporate governance, multidisciplinary foundation, the approved 6-Stage Strategic Approach, and 9 priority focus sectors in Ghana and Africa.",
    url: `${siteConfig.url}/about-us`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "About THE HINTER GROUP GHANA LTD" }],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
