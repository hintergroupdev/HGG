import Link from "next/link";
import { ArrowLeft, Handshake, CheckCircle2, ShieldCheck } from "lucide-react";
import DisciplinedPathwaySection from "@/components/sections/DisciplinedPathwaySection";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "Projects & Strategic Partnerships | THE HINTER GROUP GHANA LTD",
  description: "Transforming relationships into meaningful opportunities through our 9-step disciplined pathway.",
};

export default function ProjectsPage() {
  const partners = [
    "Private Companies & Project Developers",
    "International Institutional Investors",
    "Multinational Technology Providers",
    "Financial Institutions & Funds",
    "Government Ministries, Departments & Agencies (MDAs)",
    "Municipal & Local Authorities",
    "Development Finance Institutions (DFIs)",
    "Academic & Research Organizations",
  ];

  return (
    <ComingSoonOverlay pageTitle="Projects & Partnerships">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838] mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C49838] uppercase block">
              PROJECTS & STRATEGIC PARTNERSHIPS
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Transforming Relationships into Meaningful Opportunities
            </h1>
            <p className="mt-3 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
              THE HINTER GROUP GHANA LTD works to identify, develop, facilitate, and advance projects and strategic partnerships capable of creating sustainable commercial, economic, institutional, and social value.
            </p>
          </div>

          {/* Who We Welcome */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-[#C49838]" />
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Who We Welcome to Partner
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14588B] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 9-Step Pathway */}
          <DisciplinedPathwaySection />
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
