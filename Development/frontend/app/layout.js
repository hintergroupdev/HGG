import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata = {
  metadataBase: new URL("https://hintergroupghana.com"),
  title: {
    default: "THE HINTER GROUP GHANA LTD | Consulting • Ventures • Brokerage",
    template: "%s | THE HINTER GROUP GHANA LTD",
  },
  description:
    "Ghana-based consulting, ventures, and brokerage company connecting strategic opportunities with investors, technology providers, institutions, and development partners in Ghana and international markets.",
  keywords: [
    "Ghana Business Consulting",
    "West Africa Investment",
    "Venture Development Ghana",
    "Commodity Brokerage",
    "Infrastructure Facilitation",
    "Hinter Group Ghana",
  ],
  icons: {
    icon: "/assets/logos/Favicon/Logo_Favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#0F172A]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
