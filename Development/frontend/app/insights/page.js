import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InsightsPreviewSection from "@/components/sections/InsightsPreviewSection";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "Insights & News | THE HINTER GROUP GHANA LTD",
  description: "Perspectives, developments, and opportunities from THE HINTER GROUP GHANA LTD.",
};

export default function InsightsPage() {
  return (
    <ComingSoonOverlay pageTitle="Insights & News">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838] mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C49838] uppercase block">
              INSIGHTS & NEWS
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Perspectives. Developments. Opportunities.
            </h1>
            <p className="mt-3 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
              THE HINTER GROUP GHANA LTD shares selected company updates, business perspectives, project developments, industry observations, and partnership announcements.
            </p>
          </div>

          <InsightsPreviewSection />
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
