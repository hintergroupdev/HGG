import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#061739] text-white border-t border-[#14588B]/30 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14588B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#57A3C0]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Column 1: Brand & Socials (2 cols wide) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group inline-flex">
              <BrandLogo size="large" />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Connecting strategic opportunities with investors, technology providers, institutions, and development partners in Ghana and international markets.
            </p>

            {/* Social Links with SVG Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#14588B] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="HGG on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79v-7.6H6.46M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#14588B] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="HGG on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#14588B] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="HGG on Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono tracking-widest text-[#DFB758] uppercase">
                Committed to Excellence
              </span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-slate-300 hover:text-white transition-colors">
                  Leadership & Governance
                </Link>
              </li>
              <li>
                <Link href="/projects-and-partnerships" className="text-slate-300 hover:text-white transition-colors">
                  Projects & Partnerships
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-300 hover:text-white transition-colors">
                  News & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/expertise#consulting" className="text-slate-300 hover:text-white transition-colors">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="/expertise#ventures" className="text-slate-300 hover:text-white transition-colors">
                  Venture Development
                </Link>
              </li>
              <li>
                <Link href="/expertise#brokerage" className="text-slate-300 hover:text-white transition-colors">
                  Commercial Brokerage
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-slate-300 hover:text-white transition-colors">
                  Advisory Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/expertise#sectors" className="text-slate-300 hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/expertise#sectors" className="text-slate-300 hover:text-white transition-colors">
                  Energy & Environment
                </Link>
              </li>
              <li>
                <Link href="/expertise#sectors" className="text-slate-300 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/expertise#sectors" className="text-slate-300 hover:text-white transition-colors">
                  Trade & Investment
                </Link>
              </li>
              <li>
                <Link href="/expertise#sectors" className="text-[#57A3C0] hover:text-[#9DE9FC] transition-colors inline-flex items-center gap-1 font-medium text-xs">
                  View All 9 Sectors <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#57A3C0] flex-shrink-0 mt-0.5" />
                <span>
                  2nd Floor, The Octagon<br />
                  Block D, Central Avenue<br />
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#57A3C0] flex-shrink-0" />
                <span>+233 30 123 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#57A3C0] flex-shrink-0" />
                <a href="mailto:info@hintergroupghana.com" className="hover:text-white transition-colors">
                  info@hintergroupghana.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} THE HINTER GROUP GHANA LTD. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
