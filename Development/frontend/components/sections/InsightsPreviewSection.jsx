"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { articlesData } from "@/lib/insightsData";
import { getInsightsArticles } from "@/lib/sanityData";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function InsightsPreviewSection() {
  const [articles, setArticles] = useState(articlesData);

  useEffect(() => {
    async function loadSanityArticles() {
      try {
        const liveArticles = await getInsightsArticles();
        if (liveArticles && liveArticles.length > 0) {
          setArticles(liveArticles);
        }
      } catch (err) {
        console.warn("[Sanity Preview Load Error]", err);
      }
    }
    loadSanityArticles();
  }, []);

  const previewArticles = articles.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle Black Star Square Landmark Watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/images/img_new_1.PNG"
          alt="Black Star Square Landmark Watermark"
          fill
          unoptimized
          priority
          sizes="50vw"
          className="object-cover object-center lg:object-right-top opacity-[0.09] lg:opacity-[0.14] filter contrast-[1.05] saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]/20 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-transparent to-[#F8FAFC]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] w-8 sm:w-12" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                INSIGHTS & NEWS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[80px] sm:max-w-[140px]" />
            </div>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-[#061739] tracking-tight leading-tight">
              Perspectives on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Market Opportunities
              </span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C49838] rounded-full my-3" />
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Strategic analysis, corporate announcements, and thought
              leadership on opportunities shaping Ghana and international
              markets.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-wider text-[#061739] hover:text-[#C49838] transition-colors group pb-1 border-b border-[#061739]/30 hover:border-[#C49838] whitespace-nowrap self-start md:self-auto"
          >
            <span>VIEW ALL INSIGHTS</span>
            <ArrowUpRight className="w-4 h-4 text-[#C49838] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Articles Grid - Always Reliably Visible on All Devices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {previewArticles.map((article, idx) => (
            <motion.article
              key={article.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{
                y: -5,
                boxShadow: "0 18px 36px -8px rgba(6,23,57,0.12)",
                transition: { duration: 0.25 },
              }}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-[#DFB758]/50 flex flex-col justify-between transition-all duration-300 relative"
            >
              <div className="flex flex-col flex-1">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#061739] text-white text-[11px] font-heading font-extrabold uppercase tracking-wider shadow-xs">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#061739] group-hover:text-[#14588B] transition-colors leading-snug tracking-tight mt-5 mb-3">
                  <Link href={`/insights?article=${article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer Divider */}
              <div className="border-t border-slate-100 pt-4.5 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 font-medium">
                  <Calendar className="w-4 h-4 text-[#C49838]" />
                  <span>{article.date}</span>
                </div>

                <Link
                  href={`/insights?article=${article.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DFB758] hover:bg-[#C49838] text-[#061739] font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group/btn"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#061739] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Insights Footer CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-xs font-heading font-bold text-[#061739] bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#DFB758] transition-all uppercase tracking-wider"
          >
            <span>EXPLORE ALL INSIGHTS</span>
            <ArrowRight className="w-4 h-4 text-[#C49838]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono font-bold text-[#14588B] uppercase tracking-wider flex items-center gap-1">
                      <Megaphone className="w-2.5 h-2.5 text-[#14588B]" /> OFFICIAL NOTICE
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-base sm:text-lg font-extrabold text-[#061739] group-hover:text-[#14588B] transition-colors leading-snug tracking-tight mt-4 mb-2.5">
                  <Link href={`/insights?article=${article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer Divider */}
              <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#C49838]" />
                  <span>{article.date}</span>
                </div>

                <Link
                  href={`/insights?article=${article.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#DFB758] to-[#C49838] hover:from-[#C49838] hover:to-[#B8860B] text-[#061739] font-heading font-bold text-[11px] uppercase tracking-wider transition-all duration-200 shadow-[0_2px_6px_rgba(223,183,88,0.25)] hover:shadow-[0_4px_10px_rgba(223,183,88,0.35)] cursor-pointer group/btn"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3 h-3 text-[#061739] group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Insights Footer CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-xs font-heading font-bold text-[#061739] bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#DFB758] transition-all uppercase tracking-wider"
          >
            <span>EXPLORE ALL INSIGHTS</span>
            <ArrowRight className="w-4 h-4 text-[#C49838]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
