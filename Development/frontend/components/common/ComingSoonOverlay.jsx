"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Sparkles, Clock } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";

export default function ComingSoonOverlay({ pageTitle = "Page Under Development", children }) {
  return (
    <>
      {/* ── Executive Coming Soon Screen ── */}
      <section className="min-h-[85vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#061739] via-[#081F4D] to-[#061739] text-white">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#DFB758]/[0.08] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#14588B]/[0.15] rounded-full blur-[130px] pointer-events-none" />

        {/* Subtle dot matrix */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#DFB758 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          
          {/* Brand Logo Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-2xl">
              <BrandLogo size="lg" />
            </div>
          </motion.div>

          {/* Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#DFB758]/40 shadow-xs mb-6"
          >
            <Clock className="w-3.5 h-3.5 text-[#DFB758] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#DFB758] uppercase">
              COMING SOON
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5"
          >
            {pageTitle}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#DFB758]">
              Coming Soon
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-light mb-10"
          >
            We are currently refining the complete documentation, insights, and structural details for this section. Please check back shortly or connect directly with our advisory team.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] hover:shadow-xl hover:shadow-[#C49838]/25 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO HOMEPAGE</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── Preserved Original Content (Safely Hidden in DOM) ── */}
      <div className="hidden aria-hidden" aria-hidden="true">
        {children}
      </div>
    </>
  );
}
