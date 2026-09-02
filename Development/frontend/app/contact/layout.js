import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact Us | Headquarters & Executive Inquiries",
  description:
    "Connect with THE HINTER GROUP GHANA LTD at The Octagon, Accra, Ghana. Submit commercial proposals, institutional inquiries, and explore cross-border partnership opportunities.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Us | THE HINTER GROUP GHANA LTD",
    description:
      "Connect with THE HINTER GROUP GHANA LTD at The Octagon, Accra, Ghana. Submit commercial proposals, institutional inquiries, and explore cross-border partnership opportunities.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Contact THE HINTER GROUP GHANA LTD" }],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
