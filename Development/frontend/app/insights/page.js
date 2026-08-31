"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  Calendar,
  Clock,
  Tag,
  Newspaper,
  BookOpen,
  TrendingUp,
  Building2,
  Users2,
  Megaphone,
  ShieldCheck,
  CheckCircle2,
  X,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";
import {
  articlesData,
  publicationStreams,
  editorialCharter,
} from "@/lib/insightsData";
import { getInsightsArticles } from "@/lib/sanityData";
import CustomPortableText from "@/components/ui/CustomPortableText";

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: custom, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ITEMS_PER_PAGE = 12;

/* ─────────────────────────────────────────────────────────────
   INSIGHTS CONTENT INNER COMPONENT (Handles Query Params & State)
───────────────────────────────────────────────────────────── */
function InsightsContent() {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState(articlesData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [isWhatWePublishOpen, setIsWhatWePublishOpen] = useState(false);
  const [activeCharterTab, setActiveCharterTab] = useState("streams");

  // Fetch live articles from Sanity if available
  useEffect(() => {
    async function loadSanityArticles() {
      try {
        const liveArticles = await getInsightsArticles();
        if (liveArticles && liveArticles.length > 0) {
          setArticles(liveArticles);
        }
      } catch (err) {
        console.warn("[Sanity Insights Load Error]", err);
      }
    }
    loadSanityArticles();
  }, []);

  // Handle direct URL deep-linking from homepage or external links (?article=art-1)
  useEffect(() => {
    const articleParam = searchParams.get("article");
    if (articleParam) {
      const found = articles.find(
        (a) => a.id === articleParam || a.slug === articleParam
      );
      if (found) {
        setActiveArticleModal(found);
      }
    }
    const catParam = searchParams.get("category");
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [searchParams, articles]);

  // Reset page number on filter, search, or sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveArticleModal(null);
        setIsWhatWePublishOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background scroll when either modal is active
  useEffect(() => {
    if (activeArticleModal || isWhatWePublishOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeArticleModal, isWhatWePublishOpen]);

  // Filter & Sort logic
  const filteredArticles = useMemo(() => {
    const result = articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.tags &&
          article.tags.some((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });

    // Helper to safely parse dates (e.g. "August 2026", "2026-08-15")
    const parseArticleDate = (a) => {
      if (a.publishedAt) {
        const t = new Date(a.publishedAt).getTime();
        if (!isNaN(t)) return t;
      }
      if (a.date) {
        const parsed = Date.parse(a.date);
        if (!isNaN(parsed)) return parsed;
      }
      return 0;
    };

    // Helper to parse reading time minutes
    const parseReadTime = (a) => {
      if (typeof a.readTime === "number") return a.readTime;
      if (typeof a.readTime === "string") {
        const num = parseInt(a.readTime, 10);
        if (!isNaN(num)) return num;
      }
      return 5;
    };

    result.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return parseArticleDate(a) - parseArticleDate(b);
        case "date-desc":
          return parseArticleDate(b) - parseArticleDate(a);
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "read-time-asc":
          return parseReadTime(a) - parseReadTime(b);
        case "read-time-desc":
          return parseReadTime(b) - parseReadTime(a);
        default:
          return 0;
      }
    });

    return result;
  }, [articles, selectedCategory, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const paginatedArticles = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased overflow-x-hidden selection:bg-[#DFB758]/20 selection:text-[#061739] pt-6 sm:pt-8 pb-20">

      {/* ─────────────────────────────────────────────────
          1. CLEAN PAGE HEADER WITH "WHAT WE PUBLISH" BUTTON
      ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-slate-200">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] w-8 sm:w-12" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                INTELLIGENCE & ANALYSIS
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[80px] sm:max-w-[140px]" />
            </div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#061739] tracking-tight leading-tight"
            >
              Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                News
              </span>
            </motion.h1>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full my-3" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-slate-600 text-xs sm:text-sm leading-relaxed"
            >
              <strong className="text-[#061739] font-semibold">Perspectives. Developments. Opportunities.</strong> Providing clients, partners, and stakeholders with clear insight into HGG’s evolving activities and opportunities shaping Ghana, Africa, and international markets.
            </motion.p>
          </div>

          {/* "What We Publish" Interactive Trigger Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="w-full sm:w-auto shrink-0"
          >
            <button
              onClick={() => setIsWhatWePublishOpen(true)}
              className="w-full sm:w-auto group inline-flex items-center justify-between sm:justify-start gap-2.5 px-5 py-3 rounded-md bg-white border border-slate-200 hover:border-[#DFB758] shadow-xs hover:shadow-md transition-all duration-300 text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#DFB758]/15 border border-[#DFB758]/30 flex items-center justify-center text-[#C49838] group-hover:scale-105 transition-transform shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C49838] uppercase tracking-wider block">
                    EDITORIAL CHARTER
                  </span>
                  <span className="text-xs font-heading font-bold text-[#061739] group-hover:text-[#14588B] transition-colors flex items-center gap-1">
                    What We Publish
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          2. PUBLICATIONS HUB (Search, Filters, & Articles)
      ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search Bar & Category Filter Controls */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 mb-8 shadow-xs space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, sector (e.g. Infrastructure, Energy, Agribusiness), or topic..."
              className="w-full pl-11 pr-10 py-3 text-xs sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-1 no-scrollbar touch-pan-x">
            <span className="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3" /> Filter:
            </span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#061739] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#061739]"
              }`}
            >
              All ({articles.length})
            </button>
            {publicationStreams.map((stream) => {
              const count = articles.filter(
                (a) => a.categoryId === stream.id
              ).length;
              return (
                <button
                  key={stream.id}
                  onClick={() => setSelectedCategory(stream.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-bold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === stream.id
                      ? "bg-[#061739] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#061739]"
                  }`}
                >
                  {stream.title} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Summary & Sorting Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>
                Showing <strong className="text-[#061739] font-bold">{filteredArticles.length}</strong>{" "}
                {filteredArticles.length === 1 ? "publication" : "publications"}
              </span>
              {(selectedCategory !== "all" || searchQuery || sortBy !== "date-desc") && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                    setSortBy("date-desc");
                  }}
                  className="text-[#C49838] hover:text-[#061739] font-bold text-[11px] underline ml-1 cursor-pointer transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Sorting Dropdown Menu */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <label
                htmlFor="sort-by-select"
                className="text-[11px] font-heading font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 shrink-0"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-[#C49838]" /> Sort By:
              </label>
              <div className="relative">
                <select
                  id="sort-by-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-[#F8FAFC] hover:bg-slate-100 text-xs font-semibold text-[#061739] border border-slate-200 rounded-md pl-3 pr-8 py-2 focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all cursor-pointer shadow-2xs"
                >
                  <option value="date-desc">Newest First (Recent)</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="title-asc">Title: A → Z (Ascending)</option>
                  <option value="title-desc">Title: Z → A (Descending)</option>
                  <option value="read-time-asc">Read Time: Shortest</option>
                  <option value="read-time-desc">Read Time: Longest</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-heading text-lg font-bold text-[#061739]">
              No publications found
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
              We couldn&apos;t find any articles matching your search query or selected category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-xs font-heading font-bold text-[#061739] bg-[#DFB758]/20 hover:bg-[#DFB758]/30 rounded-md transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paginatedArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.03}
                  className="group bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#DFB758]/60 flex flex-col justify-between transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col flex-1">
                    {/* Featured Image Thumbnail if present */}
                    {article.featuredImage && (
                      <div
                        onClick={() => setActiveArticleModal(article)}
                        className="relative w-full h-44 rounded-lg overflow-hidden mb-4 border border-slate-200/80 bg-slate-100 cursor-pointer"
                      >
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Meta Header */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#061739] text-white text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider shadow-xs">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveArticleModal(article)}
                      className="font-heading text-base sm:text-lg font-extrabold text-[#061739] group-hover:text-[#14588B] transition-colors leading-snug tracking-tight mt-4 mb-2.5 cursor-pointer"
                    >
                      {article.title}
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

                    <button
                      onClick={() => setActiveArticleModal(article)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#DFB758] hover:bg-[#C49838] text-[#061739] font-heading font-bold text-[11px] uppercase tracking-wider transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer group/btn"
                    >
                      <span>READ ARTICLE</span>
                      <ArrowRight className="w-3 h-3 text-[#061739] group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* ─────────────────────────────────────────────────
                3. PAGINATION CONTROLS (12 Per Page)
            ───────────────────────────────────────────────── */}
            {totalPages > 1 && (
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div className="text-xs text-slate-500 font-mono">
                  Showing{" "}
                  <span className="font-bold text-[#061739]">
                    {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
                    {Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length)}
                  </span>{" "}
                  of <span className="font-bold text-[#061739]">{filteredArticles.length}</span> publications
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Previous Page Button */}
                  <button
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage((prev) => prev - 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    disabled={currentPage === 1}
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-xs font-heading font-bold border transition-all cursor-pointer ${
                      currentPage === 1
                        ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                        : "bg-white text-[#061739] border-slate-200 hover:border-[#DFB758] hover:bg-slate-50 shadow-xs"
                    }`}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Prev</span>
                  </button>
                  {/* Numbered Page Buttons */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNo) => (
                      <button
                        key={pageNo}
                        onClick={() => {
                          setCurrentPage(pageNo);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md text-xs font-heading font-bold transition-all flex items-center justify-center cursor-pointer ${
                          currentPage === pageNo
                            ? "bg-[#061739] text-white shadow-xs"
                            : "bg-white text-slate-600 border border-slate-200 hover:border-[#DFB758] hover:bg-slate-50"
                        }`}
                      >
                        {pageNo}
                      </button>
                    ))}
                  </div>

                  {/* Next Page Button */}
                  <button
                    onClick={() => {
                      if (currentPage < totalPages) {
                        setCurrentPage((prev) => prev + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    disabled={currentPage === totalPages}
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-xs font-heading font-bold border transition-all cursor-pointer ${
                      currentPage === totalPages
                        ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                        : "bg-white text-[#061739] border-slate-200 hover:border-[#DFB758] hover:bg-slate-50 shadow-xs"
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* ─────────────────────────────────────────────────
          4. "WHAT WE PUBLISH & EDITORIAL CHARTER" MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isWhatWePublishOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWhatWePublishOpen(false)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Top Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  onClick={() => setIsWhatWePublishOpen(false)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1 pr-8">
                  <span className="text-[10px] font-heading font-bold text-[#DFB758] tracking-[0.2em] uppercase block">
                    PUBLICATIONS FRAMEWORK
                  </span>
                  <h2 className="font-heading text-lg sm:text-2xl font-bold tracking-tight">
                    What We Publish & Editorial Charter
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-2xl font-normal">
                    Structured market intelligence across six specialized publication streams, governed by strict corporate standards.
                  </p>
                </div>

                {/* 2-Tab Navigation */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                  <button
                    onClick={() => setActiveCharterTab("streams")}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-bold transition-all uppercase tracking-wider cursor-pointer ${
                      activeCharterTab === "streams"
                        ? "bg-[#DFB758] text-[#061739] shadow-xs"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    6 Knowledge Streams
                  </button>
                  <button
                    onClick={() => setActiveCharterTab("charter")}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-bold transition-all uppercase tracking-wider cursor-pointer ${
                      activeCharterTab === "charter"
                        ? "bg-[#DFB758] text-[#061739] shadow-xs"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    7-Point Quality Charter
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-6 max-h-[calc(90dvh-140px)]">
                {activeCharterTab === "streams" ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="font-heading text-xs font-bold text-[#061739] uppercase tracking-wider">
                        Publication Streams (Click to Filter Hub)
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        6 Categories
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                      {publicationStreams.map((stream) => {
                        const Icon = stream.icon;
                        return (
                          <div
                            key={stream.id}
                            onClick={() => {
                              setSelectedCategory(stream.id);
                              setCurrentPage(1);
                              setIsWhatWePublishOpen(false);
                            }}
                            className="group cursor-pointer p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#DFB758] hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between"
                          >
                            <div className="space-y-2">
                              <div className="w-8 h-8 rounded-md bg-[#061739]/5 group-hover:bg-[#DFB758]/15 border border-[#14588B]/15 group-hover:border-[#DFB758]/30 flex items-center justify-center text-[#14588B] group-hover:text-[#C49838] transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h4 className="font-heading text-[13.5px] font-bold text-[#061739] group-hover:text-[#14588B] transition-colors leading-snug">
                                {stream.title}
                              </h4>
                              <p className="text-[11.5px] text-slate-500 group-hover:text-slate-600 leading-relaxed line-clamp-3">
                                {stream.desc}
                              </p>
                            </div>

                            <div className="pt-3 flex items-center justify-between text-[10.5px] font-heading font-bold text-[#14588B] group-hover:text-[#C49838] uppercase tracking-wider">
                              <span>Filter Hub</span>
                              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="font-heading text-xs font-bold text-[#061739] uppercase tracking-wider">
                        Editorial Standards & Guidelines
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        7 Core Tenets
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {editorialCharter.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#061739]">
                              {item.title}
                            </h4>
                            <p className="text-[11.5px] text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-[#061739] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <span className="text-slate-300 text-center sm:text-left">
                        Interested in contributing or proposing a joint industry study?
                      </span>
                      <Link
                        href="/contact"
                        onClick={() => setIsWhatWePublishOpen(false)}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#DFB758] hover:bg-[#C49838] text-[#061739] font-heading font-bold uppercase tracking-wider shrink-0 transition-colors"
                      >
                        Contact Editorial Desk
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────
          5. ARTICLE DETAIL READING MODAL
      ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeArticleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticleModal(null)}
              className="absolute inset-0 bg-[#061739]/70 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 sm:px-8 sm:py-6 bg-[#061739] text-white relative border-b border-white/10">
                <button
                  onClick={() => setActiveArticleModal(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Close article modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-2 pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-heading font-bold bg-[#DFB758] text-[#061739] uppercase tracking-wider">
                      {activeArticleModal.category}
                    </span>
                    <span className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#DFB758]" />
                      <span>{activeArticleModal.date}</span>
                    </span>
                  </div>

                  <h2 className="font-heading text-base sm:text-xl md:text-2xl font-bold leading-snug tracking-tight">
                    {activeArticleModal.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono pt-0.5">
                    <span>By: <strong className="text-white font-heading">{activeArticleModal.author}</strong></span>
                    <span>•</span>
                    <span>Published: {activeArticleModal.date}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed max-h-[calc(90dvh-140px)]">
                {activeArticleModal.featuredImage && (
                  <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden mb-4 border border-slate-200 bg-slate-100 shadow-xs">
                    <Image
                      src={activeArticleModal.featuredImage}
                      alt={activeArticleModal.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )}

                {activeArticleModal.body && Array.isArray(activeArticleModal.body) && activeArticleModal.body.length > 0 ? (
                  <CustomPortableText value={activeArticleModal.body} />
                ) : activeArticleModal.content && Array.isArray(activeArticleModal.content) ? (
                  activeArticleModal.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{activeArticleModal.excerpt}</p>
                )}

                <div className="pt-5 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {activeArticleModal.tags && activeArticleModal.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-slate-200 text-slate-600 text-[11px] font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      onClick={() => setActiveArticleModal(null)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-heading font-bold text-[#061739] bg-[#DFB758] hover:bg-[#C49838] rounded-md transition-colors uppercase tracking-wider shadow-xs"
                    >
                      <span>Discuss with HGG</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function InsightsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <InsightsContent />
    </Suspense>
  );
}
