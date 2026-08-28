"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import ComingSoonOverlay from "@/components/common/ComingSoonOverlay";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "General Business Inquiries",
    message: "",
    privacyConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <ComingSoonOverlay pageTitle="Contact Us">
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2457] hover:text-[#C49838]">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col: Contact Info & Notice (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0A2457] text-white p-8 rounded-2xl shadow-md space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#DFB758] uppercase">
                    START THE CONVERSATION
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-heading font-extrabold mt-1">
                    Contact Our Team
                  </h1>
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    We welcome inquiries from organizations, institutions, investors, project developers, and prospective strategic partners.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#57A3C0] flex-shrink-0 mt-0.5" />
                    <span>2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#57A3C0] flex-shrink-0" />
                    <span>+233 30 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#57A3C0] flex-shrink-0" />
                    <span>info@hintergroupghana.com</span>
                  </div>
                </div>
              </div>

              {/* Preliminary Review Notice */}
              <div className="bg-amber-50 border border-amber-200/80 p-5 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider font-mono">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>Important Preliminary Review Notice</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Submission of an inquiry does not constitute a formal engagement or commercial agreement with THE HINTER GROUP GHANA LTD. All inquiries undergo preliminary review to assess strategic alignment and capability fit.
                </p>
              </div>
            </div>

            {/* Right Col: Interactive Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting THE HINTER GROUP GHANA LTD. Our corporate communications and project facilitation team has received your submission and will review it promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-[#061739] bg-[#C49838] hover:bg-[#DFB758] rounded-md transition-colors mt-4"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-heading font-bold text-slate-900 mb-4">
                      Submit a Corporate Inquiry
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#14588B]"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Organization / Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#14588B]"
                          placeholder="Enterprise Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#14588B]"
                          placeholder="name@organization.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#14588B]"
                          placeholder="+233 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nature of Inquiry *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#14588B] bg-white"
                      >
                        <option>General Business Inquiries</option>
                        <option>Strategic Consulting</option>
                        <option>Project Development & Facilitation</option>
                        <option>Venture & Investment Opportunities</option>
                        <option>Brokerage & Business Development</option>
                        <option>Strategic Partnerships</option>
                        <option>Market Entry & International Business</option>
                        <option>Media & Corporate Communications</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Message / Brief Overview *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#14588B]"
                        placeholder="Please summarize your objectives, project scope, or partnership proposal..."
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        required
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 rounded text-[#14588B] focus:ring-[#14588B]"
                      />
                      <label htmlFor="privacyConsent" className="text-xs text-slate-600">
                        I acknowledge that submitted information will be reviewed under HGG&apos;s standard preliminary review and confidentiality protocols.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 text-xs font-bold tracking-wider text-[#061739] bg-[#C49838] hover:bg-[#DFB758] rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>SUBMIT INQUIRY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
