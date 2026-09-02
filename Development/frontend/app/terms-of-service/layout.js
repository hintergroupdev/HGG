import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Terms of Service | Corporate Platform Engagement",
  description:
    "Corporate platform terms and engagement guidelines of THE HINTER GROUP GHANA LTD under the laws of the Republic of Ghana.",
  alternates: {
    canonical: `${siteConfig.url}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service | THE HINTER GROUP GHANA LTD",
    description:
      "Corporate platform terms and engagement guidelines of THE HINTER GROUP GHANA LTD under the laws of the Republic of Ghana.",
    url: `${siteConfig.url}/terms-of-service`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Terms of Service — THE HINTER GROUP GHANA LTD" }],
  },
};

export default function TermsLayout({ children }) {
  return children;
}
