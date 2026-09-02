import { siteConfig } from "@/lib/siteConfig";
import { getInsightsArticles } from "@/lib/sanityData";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Core static marketing and corporate pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects-and-partnerships`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic Insight articles from CMS
  let articleRoutes = [];
  try {
    const articles = await getInsightsArticles();
    if (articles && articles.length > 0) {
      articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/insights?article=${encodeURIComponent(article.slug || article.id)}`,
        lastModified: article.publishedAt || currentDate,
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.warn("[Sitemap Generation Warning]", err);
  }

  return [...staticRoutes, ...articleRoutes];
}
