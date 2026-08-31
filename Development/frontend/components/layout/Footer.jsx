import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight, Globe2, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061739] text-white border-t border-[#14588B]/30 relative overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14588B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DFB758]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* 5-Column Navigation & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Direct Socials (2 cols wide) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group inline-flex">
              <BrandLogo size="large" />
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Strategic consulting, venture development, and commercial brokerage facilitating investment, infrastructure, and institutional growth.
            </p>

            {/* Social Links */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                Corporate Channels
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79v-7.6H6.46M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Leadership & Governance
                </Link>
              </li>
              <li>
                <Link href="/projects-and-partnerships" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Projects & Partnerships
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Frameworks */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/expertise#consulting" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="/expertise#ventures" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Venture Development
                </Link>
              </li>
              <li>
                <Link href="/expertise#brokerage" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Commercial Brokerage
                </Link>
              </li>
              <li>
                <Link href="/projects-and-partnerships#pathway" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  9-Step Project Pathway
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-[#57A3C0] hover:text-[#9DE9FC] transition-colors inline-flex items-center gap-1 font-medium text-xs">
                  Full Service Architecture <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Priority Sectors */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Areas of Focus
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about-us#infrastructure" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Infrastructure & Urban Dev
                </Link>
              </li>
              <li>
                <Link href="/about-us#energy" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Energy & Environment
                </Link>
              </li>
              <li>
                <Link href="/about-us#agriculture" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Agriculture & Agribusiness
                </Link>
              </li>
              <li>
                <Link href="/about-us#real-estate" className="text-slate-300 hover:text-[#DFB758] transition-colors">
                  Real Estate Development
                </Link>
              </li>
              <li>
                <Link href="/about-us#areas-of-focus" className="text-[#57A3C0] hover:text-[#9DE9FC] transition-colors inline-flex items-center gap-1 font-medium text-xs">
                  View All 9 Focus Corridors <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#DFB758] uppercase">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFB758] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2nd Floor, The Octagon<br />
                  Block D, Central Avenue<br />
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFB758] shrink-0" />
                <a href="tel:+233301234567" className="hover:text-white transition-colors">
                  +233 (0) 30 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFB758] shrink-0" />
                <a href="mailto:info@hintergroupghana.com" className="hover:text-white transition-colors">
                  info@hintergroupghana.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Governance Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {currentYear} THE HINTER GROUP GHANA LTD. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-[#DFB758] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms-of-service" className="hover:text-[#DFB758] transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/contact" className="hover:text-[#DFB758] transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
