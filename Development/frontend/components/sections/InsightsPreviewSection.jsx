"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title:
      "Navigating Strategic Market Entry in West Africa: A Framework for Institutional Investors",
    category: "Business Insights",
    categoryBg: "bg-[#0A2457]",
    categoryText: "text-white",
    date: "August 2026",
    readTime: "5 min read",
    accentColor: "#0A2457",
    excerpt:
      "Key considerations for global capital providers seeking de-risked entry, regulatory alignment, and trusted stakeholder networks in Ghana's emerging infrastructure sectors.",
    slug: "navigating-strategic-market-entry-in-west-africa",
  },
  {
    title:
      "The Role of Public-Private Facilitation in Modernizing Industrial & Port Logistics",
    category: "Industry Perspective",
    categoryBg: "bg-[#C49838]",
    categoryText: "text-[#061739]",
    date: "July 2026",
    readTime: "4 min read",
    accentColor: "#C49838",
    excerpt:
      "How structured commercial mediation and multi-stakeholder coordination are unlocking maritime trade efficiency under the AfCFTA framework.",
    slug: "role-of-public-private-facilitation-in-port-logistics",
  },
  {
    title:
      "Renewable Energy & Grid Transition: Structuring Bankable Clean Power Ventures",
    category: "Energy & Environment",
    categoryBg: "bg-[#14588B]",
    categoryText: "text-white",
    date: "June 2026",
    readTime: "6 min read",
    accentColor: "#14588B",
    excerpt:
      "Analyzing commercial viability, environmental impact frameworks, and consortium assembly for commercial and industrial clean energy assets.",
    slug: "renewable-energy-and-grid-transition-ghana",
  },
];

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
  return (
    <section className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle Black Star Square Landmark Watermark (Low opacity & smooth gradient masks) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/images/img_new_1.PNG"
          alt="Black Star Square Landmark Watermark"
          fill
          unoptimized
          sizes="50vw"
          className="object-cover object-center lg:object-right-top opacity-[0.09] lg:opacity-[0.14] filter contrast-[1.05] saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C49838] uppercase">
              INSIGHTS & NEWS
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Perspectives on Market Opportunities
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Strategic analysis, corporate announcements, and thought
              leadership on opportunities shaping Ghana and international
              markets.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#0A2457] hover:text-[#C49838] transition-colors group pb-1 border-b border-[#0A2457]/30 hover:border-[#C49838] whitespace-nowrap"
          >
            <span>VIEW ALL INSIGHTS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -7,
                boxShadow: "0 24px 48px -8px rgba(10,36,87,0.14)",
                transition: { duration: 0.25 },
              }}
              className="group bg-[#F8F9FA] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 space-y-4 flex-grow">
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md tracking-wider uppercase ${article.categoryBg} ${article.categoryText}`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#14588B] transition-colors duration-300 leading-snug">
                  <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 sm:px-7 py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-[#C49838]" />
                  <span>{article.date}</span>
                </div>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#061739] bg-slate-100 hover:bg-[#C49838] hover:text-[#061739] transition-all duration-300 shadow-xs hover:shadow-sm group/btn"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
