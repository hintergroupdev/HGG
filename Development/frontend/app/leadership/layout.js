import { siteConfig } from "@/lib/siteConfig";

export const revalidate = 60;
export const dynamic = "force-static";

export const metadata = {
  title: "Executive Leadership & Corporate Governance | Charles N. Hammond",
  description:
    "Meet the executive leadership team of THE HINTER GROUP GHANA LTD, guided by Chairman & Founder Charles N. Hammond, upholding uncompromising governance, integrity, and strategic execution.",
  alternates: {
    canonical: `${siteConfig.url}/leadership`,
  },
  openGraph: {
    title: "Executive Leadership & Corporate Governance | THE HINTER GROUP GHANA LTD",
    description:
      "Meet the executive leadership team of THE HINTER GROUP GHANA LTD, guided by Chairman & Founder Charles N. Hammond, upholding uncompromising governance, integrity, and strategic execution.",
    url: `${siteConfig.url}/leadership`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Leadership Team — THE HINTER GROUP GHANA LTD" }],
  },
};

export default function LeadershipLayout({ children }) {
  return children;
}
