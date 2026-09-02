import { siteConfig } from "@/lib/siteConfig";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#061739",
    theme_color: "#061739",
    icons: [
      {
        src: "/assets/logos/Favicon/Logo_Favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
