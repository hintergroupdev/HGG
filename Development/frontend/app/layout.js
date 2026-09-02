import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

import { getSiteSettings } from "@/lib/sanityData";

export async function generateMetadata() {
  let settings = null;
  try {
    settings = await getSiteSettings();
  } catch {
    // Fallback
  }

  const companyName = settings?.companyName || siteConfig.name;
  const tagline = settings?.tagline || siteConfig.tagline;
  const description = settings?.tagline
    ? `${companyName} — ${tagline}. ${siteConfig.description}`
    : siteConfig.description;
  const ogImageUrl = settings?.defaultOgImageUrl || settings?.heroImageUrl || siteConfig.ogImage;
  const iconUrl = settings?.logoUrl || "/assets/logos/Favicon/Logo_Favicon.svg";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${companyName} | ${tagline}`,
      template: `%s | ${companyName}`,
    },
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: companyName, url: siteConfig.url }],
    creator: companyName,
    publisher: companyName,
    applicationName: companyName,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${companyName} | ${tagline}`,
      description,
      url: siteConfig.url,
      siteName: companyName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${companyName} — ${tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${companyName} | ${tagline}`,
      description,
      images: [ogImageUrl],
      creator: "@hintergroupgh",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: iconUrl, type: "image/svg+xml" },
      ],
      shortcut: iconUrl,
      apple: iconUrl,
    },
    category: "business",
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#F8F9FA] text-[#0F172A]"
        suppressHydrationWarning
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
