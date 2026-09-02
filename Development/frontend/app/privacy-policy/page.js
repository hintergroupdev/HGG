"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  FileText,
  Scale,
  Globe2,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Building2,
  Clock,
  Eye,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { getSiteSettings, getLegalPage } from "@/lib/sanityData";
import CustomPortableText from "@/components/ui/CustomPortableText";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("sec-1");
  const [legalDoc, setLegalDoc] = useState(null);
  const [siteSettings, setSiteSettings] = useState({
    companyName: "THE HINTER GROUP GHANA LTD",
    tagline: "Consulting + Ventures | Brokerage • Committed to Excellence",
    contactEmail: "info@hintergroupghana.com",
    contactPhone: "+233 (0) 30 200 0000",
    officeAddress: "2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana",
  });

  useEffect(() => {
    async function loadData() {
      try {
        const [settings, doc] = await Promise.all([
          getSiteSettings(),
          getLegalPage("privacy-policy"),
        ]);
        if (settings) setSiteSettings(settings);
        if (doc) setLegalDoc(doc);
      } catch (err) {
        console.error("Failed to load settings in privacy:", err);
      }
    }
    loadData();
  }, []);

  const defaultTableOfContents = [
    { id: "sec-1", title: "1. Scope & Application" },
    { id: "sec-2", title: "2. Information We Collect" },
    { id: "sec-3", title: "3. Purpose & Legal Basis" },
    { id: "sec-4", title: "4. Information Governance" },
    { id: "sec-5", title: "5. Non-Disclosure & Sharing" },
    { id: "sec-6", title: "6. Security & Data Retention" },
    { id: "sec-7", title: "7. Your Rights Under Act 843" },
    { id: "sec-8", title: "8. Compliance Desk" },
  ];

  const tableOfContents =
    legalDoc?.sections && legalDoc.sections.length > 0
      ? legalDoc.sections.map((s, idx) => ({
          id: s.sectionId || `sec-${idx + 1}`,
          title: s.title || `Section ${idx + 1}`,
        }))
      : defaultTableOfContents;

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#DFB758]/20 selection:text-[#061739] pt-6 sm:pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Clean & Compact) */}
        <div className="mb-8 pb-5 border-b border-slate-200/90">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] w-8 sm:w-12" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                LEGAL & COMPLIANCE
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[80px] sm:max-w-[140px]" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#061739] tracking-tight leading-tight">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Policy
              </span>
            </h1>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Data governance and institutional confidentiality charter of THE HINTER GROUP GHANA LTD under the <strong>Data Protection Act, 2012 (Act 843) of Ghana</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 pt-1">
              <span>THE HINTER GROUP GHANA LTD</span>
              <span>•</span>
              <span>Effective: August 2026</span>
              <span>•</span>
              <span className="bg-[#DFB758]/15 text-[#8A6314] px-2 py-0.5 rounded font-bold">Act 843 Compliant</span>
            </div>

            {/* Legal Review Qualification Notice (Client Brief Section 17) */}
            <div className="mt-3 p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-[11.5px] text-slate-500 leading-relaxed max-w-2xl flex items-start gap-2">
              <Scale className="w-4 h-4 text-[#C49838] shrink-0 mt-0.5" />
              <span>
                <strong>Corporate Legal Notice:</strong> This policy constitutes HGG&apos;s operational data governance baseline and remains subject to final HGG executive review and external legal-counsel approval prior to formal execution.
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Sidebar Table of Contents (4 cols) + Content Cards (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Navigation Table of Contents (Sticky on Desktop) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <FileText className="w-4 h-4 text-[#C49838]" />
                <h3 className="font-heading text-xs font-bold text-[#061739] uppercase tracking-wider">
                  Table of Contents
                </h3>
              </div>

              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-xs font-heading font-medium rounded-lg transition-all flex items-center justify-between ${
                      activeSection === item.id
                        ? "bg-[#061739] text-[#DFB758] font-bold shadow-xs"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#061739]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <span className="text-[10px] opacity-60 font-mono">→</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Guarantee Callout Box */}
            <div className="bg-[#061739] text-white p-6 rounded-2xl border border-[#14588B]/25 space-y-3">
              <div className="flex items-center gap-2 text-[#DFB758]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-heading font-bold tracking-widest uppercase">
                  ZERO DATA SALE PLEDGE
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                HGG strictly does not sell, rent, or lease personal or commercial inquiry data to any third party for marketing or speculative purposes.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Document Clauses (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {legalDoc?.sections && legalDoc.sections.length > 0 ? (
              legalDoc.sections.map((section, idx) => {
                const secId = section.sectionId || `sec-${idx + 1}`;
                const isContactDesk = secId === "sec-8" || section.title?.toLowerCase().includes("compliance");

                if (isContactDesk) {
                  return (
                    <section
                      key={section._key || idx}
                      id={secId}
                      className="bg-[#061739] text-white p-6 sm:p-8 rounded-2xl border border-[#14588B]/25 space-y-5 scroll-mt-24 shadow-xs"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#DFB758] uppercase">
                          SECTION 08 • DIRECT GOVERNANCE CONTACT
                        </span>
                        <h3 className="font-heading text-xl font-bold text-white">
                          {section.title}
                        </h3>
                        <div className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                          {section.content ? (
                            <CustomPortableText value={section.content} />
                          ) : (
                            <p>{section.summary}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-[#DFB758] shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <span className="text-slate-400 font-mono text-[10.5px] block uppercase">Headquarters</span>
                            <span className="text-white leading-relaxed block whitespace-pre-line">
                              {siteSettings.officeAddress}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#DFB758] shrink-0" />
                            <div>
                              <span className="text-slate-400 font-mono text-[10.5px] block uppercase">Official Email</span>
                              <a href={`mailto:${siteSettings.contactEmail}`} className="text-white hover:text-[#DFB758] font-medium transition-colors">
                                {siteSettings.contactEmail}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#DFB758] shrink-0" />
                            <div>
                              <span className="text-slate-400 font-mono text-[10.5px] block uppercase">Telephone</span>
                              <a href={`tel:${siteSettings.contactPhone.replace(/\s+/g, '')}`} className="text-white hover:text-[#DFB758] font-medium transition-colors">
                                {siteSettings.contactPhone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                }

                return (
                  <section
                    key={section._key || idx}
                    id={secId}
                    className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                  >
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                        {section.title}
                      </h2>
                    </div>
                    {section.summary && (
                      <p className="text-[11px] font-mono font-bold text-[#C49838] uppercase tracking-wider">
                        {section.summary}
                      </p>
                    )}
                    <div className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed space-y-2">
                      {section.content ? (
                        <CustomPortableText value={section.content} />
                      ) : (
                        <p>{section.summary}</p>
                      )}
                    </div>
                  </section>
                );
              })
            ) : (
              <>
                {/* Fallback Static Section 1 */}
                <section
                  id="sec-1"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      01
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Scope & Application
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    This Privacy Policy applies to all organizations, institutions, investors, project developers, technology providers, entrepreneurs, and visitors who access THE HINTER GROUP GHANA LTD&apos;s digital platforms, submit inquiries through our online contact portals, or engage in preliminary discussions with our corporate practice teams.
                  </p>
                </section>

                {/* Fallback Static Section 2 */}
                <section
                  id="sec-2"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      02
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Information We Collect
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    We gather information submitted directly by you to assess potential collaboration and ensure secure communication:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                      <span className="font-heading font-bold text-xs text-[#061739] block">
                        Identity & Representation
                      </span>
                      <span className="text-slate-500 text-xs leading-relaxed block">
                        Full name, executive title, company or institution name, and jurisdiction.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                      <span className="font-heading font-bold text-xs text-[#061739] block">
                        Corporate Contact Channels
                      </span>
                      <span className="text-slate-500 text-xs leading-relaxed block">
                        Official business email, direct telephone/WhatsApp lines, and office location.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                      <span className="font-heading font-bold text-xs text-[#061739] block">
                        Opportunity & Inquiries
                      </span>
                      <span className="text-slate-500 text-xs leading-relaxed block">
                        High-level project overviews, partnership mandate objectives, and sector interests.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                      <span className="font-heading font-bold text-xs text-[#061739] block">
                        Technical Infrastructure Logs
                      </span>
                      <span className="text-slate-500 text-xs leading-relaxed block">
                        Anonymized telemetry, device browser parameters, and IP timestamps for security.
                      </span>
                    </div>
                  </div>
                </section>

                {/* Fallback Static Section 3 */}
                <section
                  id="sec-3"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      03
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Purpose & Legal Basis for Processing
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    HGG processes collected information under legitimate commercial interest and pre-contractual assessment principles to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-slate-600">
                    <li>Evaluate strategic alignment and conduct preliminary opportunity screening.</li>
                    <li>Coordinate formal introductory discussions with relevant sector practice leaders.</li>
                    <li>Direct inquiries across our 9 priority sectors (Energy, Infrastructure, Agribusiness, etc.).</li>
                    <li>Comply with regulatory obligations, statutory reporting, and AML compliance frameworks in Ghana.</li>
                  </ul>
                </section>

                {/* Fallback Static Section 4 */}
                <section
                  id="sec-4"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      04
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Commercial Confidentiality & Information Governance
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    All submitted commercial inquiries are handled with institutional discretion. Visitors are advised not to submit confidential trade secrets, restricted financial models, or legally privileged records through general website forms until an appropriate bilateral Non-Disclosure Agreement (NDA) is executed between the parties.
                  </p>
                </section>

                {/* Fallback Static Section 5 */}
                <section
                  id="sec-5"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      05
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Non-Disclosure & Authorized Data Sharing
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    HGG will not disclose your information to third parties except:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-slate-600">
                    <li><strong>Authorized Professional Advisors:</strong> Retained legal counsel, financial auditors, and technical specialists under binding non-disclosure covenants.</li>
                    <li><strong>Transaction Consortiums:</strong> Strategic co-investors or institutional partners, solely with prior explicit written authorization.</li>
                    <li><strong>Statutory Authorities:</strong> When compelled by valid court orders or applicable regulatory bodies under the laws of the Republic of Ghana.</li>
                  </ul>
                </section>

                {/* Fallback Static Section 6 */}
                <section
                  id="sec-6"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      06
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Security Protocols & Data Retention
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    We employ comprehensive physical, technical, and administrative controls to protect submitted information against unauthorized access, loss, or manipulation. Data is retained strictly for the duration required to complete opportunity reviews or as mandated by statutory compliance timelines.
                  </p>
                </section>

                {/* Fallback Static Section 7 */}
                <section
                  id="sec-7"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      07
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Your Statutory Rights Under Act 843
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    Pursuant to the Data Protection Act, 2012 (Act 843) of Ghana, data subjects retain the right to:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                      <span className="font-heading font-bold text-xs text-[#061739] block">Right of Access</span>
                      <span className="text-slate-500 text-[11.5px] leading-snug mt-1 block">Request formal copies of records held by HGG.</span>
                    </div>
                    <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                      <span className="font-heading font-bold text-xs text-[#061739] block">Right of Rectification</span>
                      <span className="text-slate-500 text-[11.5px] leading-snug mt-1 block">Request prompt correction of inaccurate records.</span>
                    </div>
                    <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                      <span className="font-heading font-bold text-xs text-[#061739] block">Right to Object</span>
                      <span className="text-slate-500 text-[11.5px] leading-snug mt-1 block">Object to processing subject to legal retention mandates.</span>
                    </div>
                  </div>
                </section>

                {/* Fallback Static Section 8 */}
                <section
                  id="sec-8"
                  className="bg-[#061739] text-white p-6 sm:p-8 rounded-2xl border border-[#14588B]/25 space-y-5 scroll-mt-24 shadow-xs"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#DFB758] uppercase">
                      SECTION 08 • DIRECT GOVERNANCE CONTACT
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Compliance & Legal Affairs Desk
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                      For statutory requests or information governance inquiries, please reach out to our corporate desk:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#DFB758] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-slate-400 font-mono text-[10.5px] block uppercase">Headquarters</span>
                        <span className="text-white leading-relaxed block whitespace-pre-line">
                          {siteSettings.officeAddress}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#DFB758] shrink-0" />
                        <div>
                          <span className="text-slate-400 font-mono text-[10.5px] block uppercase">Official Email</span>
                          <a href={`mailto:${siteSettings.contactEmail}`} className="text-white hover:text-[#DFB758] font-medium transition-colors">
                            {siteSettings.contactEmail}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#DFB758] shrink-0" />
                        <div>
                          <span className="text-slate-400 font-mono text-[10.5px] block uppercase">Telephone</span>
                          <a href={`tel:${siteSettings.contactPhone.replace(/\s+/g, '')}`} className="text-white hover:text-[#DFB758] font-medium transition-colors">
                            {siteSettings.contactPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>

        </div>

        {/* Bottom Cross-Navigation */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>© {new Date().getFullYear()} THE HINTER GROUP GHANA LTD. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/terms-of-service" className="text-[#14588B] hover:text-[#C49838] font-bold transition-colors">
              Terms of Service →
            </Link>
            <Link href="/contact" className="text-[#14588B] hover:text-[#C49838] font-bold transition-colors">
              Contact Desk →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
