import Link from "next/link";
import { ArrowLeft, Shield, Award, Users, CheckCircle2 } from "lucide-react";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "Leadership & Governance | THE HINTER GROUP GHANA LTD",
  description: "Learn about the corporate leadership philosophy and governance of THE HINTER GROUP GHANA LTD.",
};

export default function LeadershipPage() {
  return (
    <ComingSoonOverlay pageTitle="Leadership & Governance">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838] mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C49838] uppercase block">
              CORPORATE LEADERSHIP
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Vision. Integrity. Responsibility.
            </h1>
            <p className="mt-3 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
              At THE HINTER GROUP GHANA LTD, leadership is grounded in responsibility, integrity, strategic thinking, and a commitment to creating long-term value.
            </p>
          </div>

          {/* CEO Profile Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-4">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[#0A2457] to-[#14588B] flex items-center justify-center text-white text-center p-6 shadow-inner">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#DFB758]/20 border border-[#DFB758] flex items-center justify-center mx-auto mb-3 text-[#DFB758] font-heading font-bold text-2xl">
                    CNH
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">Charles N. Hammond</h3>
                  <p className="text-xs text-[#DFB758] font-mono mt-1">Chairman & Chief Executive Officer</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-slate-700 text-sm leading-relaxed">
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Charles N. Hammond
              </h2>
              <span className="text-xs font-mono text-[#C49838] font-bold block uppercase tracking-wider">
                Chairman & Chief Executive Officer
              </span>
              <p>
                Charles N. Hammond provides the strategic vision, institutional leadership, and corporate governance direction for THE HINTER GROUP GHANA LTD. Under his leadership, HGG has developed into a trusted bridge connecting global capital, technology providers, and Ghanaian commercial initiatives.
              </p>
              <p>
                His work focuses on structuring high-impact public-private partnerships, cross-border commercial transactions, and disciplined project facilitation that delivers lasting economic and social value.
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono font-bold tracking-wider text-[#0A2457] uppercase mb-2">
                  Core Leadership Principles:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49838]" /> Setting clear strategic direction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49838]" /> Protecting stakeholder interests
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49838]" /> Disciplined decision-making
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49838]" /> Uncompromising integrity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
