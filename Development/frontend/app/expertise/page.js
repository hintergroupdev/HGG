import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, Handshake, CheckCircle2 } from "lucide-react";
import IndustrySectorsSection from "@/components/sections/IndustrySectorsSection";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export const metadata = {
  title: "Expertise & Our Services | THE HINTER GROUP GHANA LTD",
  description: "Explore HGG's core service pillars in Strategic Consulting, Venture Development, and Commercial Brokerage.",
};

export default function ExpertisePage() {
  const pillars = [
    {
      id: "consulting",
      title: "Strategic Consulting",
      tagline: "Sound Judgment • Practical Solutions • Long-Term Value",
      icon: Target,
      desc: "HGG provides strategic advisory support to organizations seeking to evaluate opportunities, strengthen business positioning, develop market-entry strategies, improve stakeholder engagement, and navigate complex commercial environments.",
      points: [
        "Market Entry & Expansion Strategy",
        "Stakeholder Mapping & Institutional Engagement",
        "Opportunity & Feasibility Evaluation",
        "Strategic Roadmapping & Positioning",
      ],
    },
    {
      id: "ventures",
      title: "Venture Development",
      tagline: "Origination • Consortium Assembly • Co-Development",
      icon: TrendingUp,
      desc: "HGG supports the identification, development, and advancement of promising business and investment opportunities across priority growth sectors in Ghana and Africa.",
      points: [
        "Opportunity Discovery & Concept Formulation",
        "Strategic Consortium Assembly",
        "Commercial Structuring & Feasibility",
        "Project Facilitation through Launch",
      ],
    },
    {
      id: "brokerage",
      title: "Brokerage & Commercial Facilitation",
      tagline: "Deal Facilitation • Investor Matching • Trade Enablement",
      icon: Handshake,
      desc: "HGG connects buyers, sellers, capital providers, and strategic partners through structured, transparent commercial mediation and transaction support.",
      points: [
        "Investor & Project Matching",
        "Commercial Mediation & Partnership Structuring",
        "Asset & Strategic Commodity Brokerage",
        "International Trade & Supply Chain Linkages",
      ],
    },
  ];

  return (
    <ComingSoonOverlay pageTitle="Expertise & Services">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838] mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C49838] uppercase block">
              OUR CORE SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Strategic Expertise for Complex Commercial Environments
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
              We operate across three complementary pillars designed to support clients and partners at every stage of the business, project, and transaction lifecycle.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#C49838]/50 hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A2457]/5 text-[#0A2457] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-xs font-mono text-[#C49838] mt-0.5">{pillar.tagline}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                    
                    <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                      {pillar.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#14588B] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full py-2.5 text-center text-xs font-bold tracking-wider text-[#0A2457] bg-slate-100 hover:bg-[#C49838] hover:text-[#061739] rounded-lg transition-colors"
                  >
                    Inquire About {pillar.title}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Sectors of Focus */}
          <div className="pt-8">
            <IndustrySectorsSection />
          </div>
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
