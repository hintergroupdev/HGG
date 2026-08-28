import Link from "next/link";
import { ArrowLeft, Target, Eye, Diamond, ShieldCheck } from "lucide-react";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "About Us | THE HINTER GROUP GHANA LTD",
  description: "Learn about the mission, vision, and core values of THE HINTER GROUP GHANA LTD.",
};

export default function AboutUsPage() {
  return (
    <ComingSoonOverlay pageTitle="About Us">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838]">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C49838] uppercase">
                ABOUT THE HINTER GROUP GHANA LTD
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
                Building Partnerships. Creating Opportunities. Shaping the Future.
              </h1>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>THE HINTER GROUP GHANA LTD (HGG)</strong> is a Ghana-based consulting, ventures, and brokerage company established to facilitate strategic partnerships, responsible investment, and sustainable business development across Ghana, Africa, and international markets.
              </p>
              <p>
                Our company was founded on the belief that meaningful progress is achieved when the right people, organizations, technologies, and opportunities are brought together through integrity, professionalism, and a shared commitment to excellence.
              </p>
              <p>
                At HGG, we recognize that today&apos;s business environment requires more than traditional consulting. Organizations increasingly need trusted advisors who can identify opportunities, connect stakeholders, facilitate collaboration, and support the development of innovative solutions capable of creating measurable economic and social impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-xl bg-[#F8F9FA] border border-slate-200/80">
                <Target className="w-6 h-6 text-[#0A2457] mb-3" />
                <h3 className="font-heading font-bold text-slate-900 mb-1">Our Purpose</h3>
                <p className="text-xs text-slate-600">To serve as a trusted bridge between opportunity and capital, enabling high-impact commercial ventures.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#F8F9FA] border border-slate-200/80">
                <Eye className="w-6 h-6 text-[#C49838] mb-3" />
                <h3 className="font-heading font-bold text-slate-900 mb-1">Our Vision</h3>
                <p className="text-xs text-slate-600">To be the partner of choice for investors, institutions, and enterprises seeking credible execution in West Africa.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#F8F9FA] border border-slate-200/80">
                <ShieldCheck className="w-6 h-6 text-[#14588B] mb-3" />
                <h3 className="font-heading font-bold text-slate-900 mb-1">Our Values</h3>
                <p className="text-xs text-slate-600">Integrity, professional discipline, strategic long-term thinking, and commitment to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
