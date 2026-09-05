export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://hintergroupghana.com');

export const siteConfig = {
  name: 'THE HINTER GROUP GHANA LTD',
  shortName: 'HGG',
  legalName: 'THE HINTER GROUP GHANA LTD',
  tagline: 'Consulting + Ventures | Brokerage • Committed to Excellence',
  slogan: 'Connecting Opportunity. Creating Value.',
  description:
    'THE HINTER GROUP GHANA LTD (HGG) is an authoritative strategic consulting, venture development, and commercial brokerage firm based in Accra, Ghana. We facilitate high-impact investments, infrastructure, clean energy transition, and public-private partnerships across Ghana, West Africa, and global corridors.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/images/img_new_2.PNG`,
  logo: `${SITE_URL}/assets/logos/Logo/Logo_Horizontal_White.svg`,
  favicon: `${SITE_URL}/assets/logos/Favicon/Logo_Favicon.svg`,
  keywords: [
    'THE HINTER GROUP GHANA LTD',
    'HGG',
    'HGG LTD',
    'The Hinter Group',
    'Charles N. Hammond',
    'Ghana business consulting',
    'West Africa investment facilitation',
    'Ghana infrastructure development',
    'renewable energy transition Ghana',
    'commercial brokerage Africa',
    'Ghana venture development',
    'public-private partnerships Ghana',
    'Accra corporate advisory',
    'sustainable resource recovery Ghana',
    'agribusiness value chain West Africa',
    'international trade facilitation Ghana',
    'Ghana corporate governance ESG',
    'The Octagon Accra consulting',
  ],
  contact: {
    email: 'info@hintergroupghana.com',
    phone: '+233 (0) 30 200 0001',
    address: '2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana',
    locality: 'Accra',
    country: 'Ghana',
  },
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    facebook: 'https://facebook.com',
  },
};
