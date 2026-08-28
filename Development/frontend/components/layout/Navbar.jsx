"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ArrowRight, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "SERVICES", href: "/expertise" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "PROJECTS", href: "/projects-and-partnerships" },
    { name: "INSIGHTS", href: "/insights" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#061739]/96 backdrop-blur-md shadow-lg border-b border-[#14588B]/30 py-2 sm:py-2.5"
            : "bg-[#0A2457] border-b border-white/10 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <BrandLogo size="default" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-semibold tracking-wider transition-colors relative py-1 ${
                      isActive
                        ? "text-[#DFB758]"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DFB758] rounded-full shadow-[0_0_8px_rgba(223,183,88,0.6)]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-[#DFB758] border border-[#C49838] rounded-md hover:bg-[#C49838] hover:text-[#061739] transition-all duration-300 shadow-[0_0_15px_rgba(196,152,56,0.15)] group"
              >
                <span>PARTNER WITH US</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-slate-200 hover:text-white rounded-md focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── FULL-SPACE MOBILE SIDEBAR DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Full-Height Slide-In Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-0 sm:left-auto sm:right-0 sm:w-[400px] bg-[#061739] border-l border-[#14588B]/40 text-white flex flex-col justify-between p-6 sm:p-8 overflow-y-auto shadow-2xl"
            >
              {/* 1. Sidebar Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                  <BrandLogo size="default" />
                </Link>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 2. Navigation Links List */}
              <div className="py-6 space-y-2 flex-grow">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#57A3C0] font-bold pb-2">
                  NAVIGATION
                </div>
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 + 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold tracking-wider transition-all duration-200 ${
                          isActive
                            ? "bg-[#14588B]/40 text-[#DFB758] border border-[#DFB758]/30 font-bold"
                            : "text-slate-200 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-[#DFB758] shadow-[0_0_8px_#DFB758]" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-slate-400 opacity-50" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* 3. Sidebar Footer with CTA & Contact info */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded-xl shadow-[0_4px_20px_rgba(196,152,56,0.35)] transition-all duration-200 active:scale-[0.98]"
                >
                  <span>PARTNER WITH US</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {/* Quick Info */}
                <div className="text-[11px] text-slate-300 space-y-1.5 pt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#DFB758]" />
                    <span>Accra, Ghana • West Africa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#DFB758]" />
                    <span>info@hintergroupghana.com</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-300 pt-1">
                  CONSULTING + VENTURES | BROKERAGE
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
