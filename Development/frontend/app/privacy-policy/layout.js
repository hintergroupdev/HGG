import { siteConfig } from "@/lib/siteConfig";

export const revalidate = 60;
export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy & Data Governance | Compliance Charter",
  description:
    "Corporate data governance and privacy policy of THE HINTER GROUP GHANA LTD in compliance with the Data Protection Act, 2012 (Act 843) of Ghana.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | THE HINTER GROUP GHANA LTD",
    description:
      "Corporate data governance and privacy policy of THE HINTER GROUP GHANA LTD in compliance with the Data Protection Act, 2012 (Act 843) of Ghana.",
    url: `${siteConfig.url}/privacy-policy`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Privacy Policy — THE HINTER GROUP GHANA LTD" }],
  },
};

export default function PrivacyLayout({ children }) {
  return children;
}
