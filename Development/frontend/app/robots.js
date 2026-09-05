import { siteConfig } from "@/lib/siteConfig";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/", "/verify/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/studio/", "/api/", "/verify/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/studio/", "/api/", "/verify/"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/studio/", "/api/", "/verify/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
