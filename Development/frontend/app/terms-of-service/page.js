"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Scale,
  FileText,
  Lock,
  Globe2,
  AlertCircle,
  MapPin,
  Mail,
  Phone,
  Building2,
  Clock,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { getSiteSettings, getLegalPage } from "@/lib/sanityData";
import CustomPortableText from "@/components/ui/CustomPortableText";

export default function TermsOfServicePage() {
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
          getLegalPage("terms-of-service"),
        ]);
        if (settings) setSiteSettings(settings);
        if (doc) setLegalDoc(doc);
      } catch (err) {
        console.error("Failed to load settings in terms:", err);
      }
    }
    loadData();
  }, []);

  const defaultTableOfContents = [
    { id: "sec-1", title: "1. Corporate Purpose" },
    { id: "sec-2", title: "2. Non-Fiduciary Status" },
    { id: "sec-3", title: "3. Opportunity Screening" },
    { id: "sec-4", title: "4. Intellectual Property" },
    { id: "sec-5", title: "5. Accuracy & Disclaimers" },
    { id: "sec-6", title: "6. Confidentiality Protocol" },
    { id: "sec-7", title: "7. Limitation of Liability" },
    { id: "sec-8", title: "8. Governing Law (Ghana)" },
    { id: "sec-9", title: "9. Legal Inquiries Desk" },
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
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Service
              </span>
            </h1>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Corporate platform use and engagement terms of THE HINTER GROUP GHANA LTD under the laws of the <strong>Republic of Ghana</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 pt-1">
              <span>THE HINTER GROUP GHANA LTD</span>
              <span>•</span>
              <span>Effective: August 2026</span>
              <span>•</span>
              <span className="bg-[#DFB758]/15 text-[#8A6314] px-2 py-0.5 rounded font-bold">Republic of Ghana</span>
            </div>

            {/* Legal Review Qualification Notice (Client Brief Section 17) */}
            <div className="mt-3 p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-[11.5px] text-slate-500 leading-relaxed max-w-2xl flex items-start gap-2">
              <Scale className="w-4 h-4 text-[#C49838] shrink-0 mt-0.5" />
              <span>
                <strong>Corporate Legal Notice:</strong> These terms govern corporate platform use and remain subject to final HGG executive review and external legal-counsel approval prior to formal execution.
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
                <Scale className="w-4 h-4 text-[#C49838]" />
                <h3 className="font-heading text-xs font-bold text-[#061739] uppercase tracking-wider">
                  Terms Navigation
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

            {/* Crucial Notice Callout Box */}
            <div className="bg-[#061739] text-white p-6 rounded-2xl border border-[#14588B]/25 space-y-3">
              <div className="flex items-center gap-2 text-[#DFB758]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-heading font-bold tracking-widest uppercase">
                  NON-BINDING PRELIMINARY USE
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Website interaction or inquiry submission does not constitute a client, advisory, fiduciary, or brokerage engagement until executed under separate written contract.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Terms Clauses (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {legalDoc?.sections && legalDoc.sections.length > 0 ? (
              legalDoc.sections.map((section, idx) => {
                const secId = section.sectionId || `sec-${idx + 1}`;
                const isContactDesk = secId === "sec-9" || section.title?.toLowerCase().includes("inquiries desk") || section.title?.toLowerCase().includes("legal desk");

                if (isContactDesk) {
                  return (
                    <section
                      key={section._key || idx}
                      id={secId}
                      className="bg-[#061739] text-white p-6 sm:p-8 rounded-2xl border border-[#14588B]/25 space-y-5 scroll-mt-24 shadow-xs"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#DFB758] uppercase">
                          SECTION 09 • LEGAL & CORPORATE AFFAIRS
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
                              <a href={`tel:${String(siteSettings.contactPhone || '').replace(/\s+/g, '')}`} className="text-white hover:text-[#DFB758] font-medium transition-colors">
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
                      Corporate Purpose & Platform Mandate
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    THE HINTER GROUP GHANA LTD is a strategic consulting, ventures, and brokerage company established to identify opportunities, mobilize resources, and structure sustainable development initiatives across Ghana, Africa, and international markets. This digital platform provides orientation, company updates, and preliminary inquiry channels.
                  </p>
                </section>

                {/* Fallback Static Section 2 */}
                <section
                  id="sec-2"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      02
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      No Fiduciary, Advisory, or Client Relationship
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    <strong>Submitting a website inquiry, project summary, or accessing published content does not create an advisory, broker-client, fiduciary, investment, legal, or other professional relationship with HGG.</strong> Any formal partnership, transaction facilitation, or advisory mandate is established solely through a separate, signed written agreement.
                  </p>
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
                      Opportunity Screening & Institutional Discretion
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    HGG conducts preliminary screening of all proposals to assess capability alignment and strategic fit. Submitting an inquiry does not guarantee that HGG will accept, facilitate, represent, fund, introduce, or endorse the proposed opportunity. HGG reserves absolute discretion regarding project engagement.
                  </p>
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
                      Intellectual Property & Proprietary Frameworks
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    All visual assets, trademarks, corporate emblems, text, and proprietary methodologies—including HGG&apos;s <em>6-Stage Strategic Approach</em>—are the exclusive intellectual property of THE HINTER GROUP GHANA LTD. Unauthorized reproduction, modification, or commercial re-use is strictly prohibited.
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
                      Information Accuracy & General Orientation Disclaimers
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    Platform materials are provided for general orientation. While HGG exercises diligence, materials are provided &quot;as is&quot; without warranties. Published market perspectives or industry observations represent high-level macroeconomic viewpoints and do not constitute financial, investment, tax, or legal advice.
                  </p>
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
                      Confidentiality Protocol & Trade Secrets
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    Visitors should not transmit restricted proprietary data, unreleased financial structures, or legally sensitive records through general website forms. Where an opportunity requires sensitive disclosures, HGG will establish an appropriate Non-Disclosure Agreement before detailed exchange.
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
                      Limitation of Liability
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    To the maximum extent permissible under applicable law, THE HINTER GROUP GHANA LTD and its directors, executives, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from platform access, data transmission, or reliance on published briefings.
                  </p>
                </section>

                {/* Fallback Static Section 8 */}
                <section
                  id="sec-8"
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#C49838] bg-[#DFB758]/15 px-2.5 py-1 rounded-md">
                      08
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#061739]">
                      Governing Law & Exclusive Jurisdiction
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    These Terms of Service and all related interactions shall be governed by, interpreted, and enforced in accordance with the laws of the <strong>Republic of Ghana</strong>. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of Accra, Ghana.
                  </p>
                </section>

                {/* Fallback Static Section 9 */}
                <section
                  id="sec-9"
                  className="bg-[#061739] text-white p-6 sm:p-8 rounded-2xl border border-[#14588B]/25 space-y-5 scroll-mt-24 shadow-xs"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#DFB758] uppercase">
                      SECTION 09 • LEGAL & CORPORATE AFFAIRS
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Corporate Inquiries & Legal Desk
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                      For formal corporate inquiries, statutory communications, or legal governance matters:
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
                          <a href={`tel:${String(siteSettings.contactPhone || '').replace(/\s+/g, '')}`} className="text-white hover:text-[#DFB758] font-medium transition-colors">
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
            <Link href="/privacy-policy" className="text-[#14588B] hover:text-[#C49838] font-bold transition-colors">
              Privacy Policy →
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
