import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "Privacy Policy | THE HINTER GROUP GHANA LTD",
  description: "Privacy Policy of THE HINTER GROUP GHANA LTD.",
};

export default function PrivacyPolicyPage() {
  return (
    <ComingSoonOverlay pageTitle="Privacy Policy">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838]">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C49838] uppercase">
                LEGAL NOTICE
              </span>
              <h1 className="text-3xl font-heading font-extrabold text-slate-900 mt-2">
                Privacy Policy
              </h1>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Last updated: August 2026
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Notice:</strong> This Privacy Policy layout follows the approved HGG design system. The final legal wording is subject to formal sign-off by HGG Legal Counsel prior to commercial deployment.
              </p>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
              <h2 className="text-lg font-heading font-bold text-slate-900">1. Information We Collect</h2>
              <p>
                THE HINTER GROUP GHANA LTD collects information you provide directly through our corporate inquiry forms, including your full name, organization, contact email, telephone number, and message contents.
              </p>

              <h2 className="text-lg font-heading font-bold text-slate-900">2. How We Use Information</h2>
              <p>
                Submitted inquiries are used solely to conduct preliminary opportunity assessments, evaluate strategic alignment, and coordinate potential introductory discussions. We do not sell or lease personal data to third parties.
              </p>

              <h2 className="text-lg font-heading font-bold text-slate-900">3. Confidentiality & Security</h2>
              <p>
                We maintain reasonable technical and organizational safeguards to protect confidential information provided by prospective partners and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
