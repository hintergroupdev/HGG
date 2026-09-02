"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Globe2,
  Lock,
  Clock,
} from "lucide-react";
import { getSiteSettings } from "@/lib/sanityData";

function ContactContent() {
  const searchParams = useSearchParams();
  const [siteSettings, setSiteSettings] = useState({
    companyName: "THE HINTER GROUP GHANA LTD",
    tagline: "Consulting + Ventures | Brokerage • Committed to Excellence",
    contactEmail: "info@hintergroupghana.com",
    contactPhone: "+233 (0) 30 200 0000",
    linkedinUrl: null,
    twitterUrl: null,
    facebookUrl: null,
    instagramUrl: null,
    youtubeUrl: null,
  });

  useEffect(() => {
    async function loadSettings() {
      try {
        const settings = await getSiteSettings();
        if (settings) {
          setSiteSettings(settings);
        }
      } catch (err) {
        console.error("Failed to load site settings:", err);
      }
    }
    loadSettings();
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "General Business Inquiries",
    message: "",
  });

  // Handle URL parameters (e.g. ?service=..., ?step=..., ?project=...)
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const stepParam = searchParams.get("step");
    const projectParam = searchParams.get("project");

    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Strategic Consulting",
        message: prev.message || `Inquiry regarding Service: ${serviceParam}`,
      }));
    } else if (stepParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Project Development & Facilitation",
        message: prev.message || `Inquiry regarding Project Pathway: ${stepParam}`,
      }));
    } else if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Strategic Partnerships",
        message: prev.message || `Inquiry regarding Project: ${projectParam}`,
      }));
    }
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#DFB758]/20 selection:text-[#061739] pt-8 pb-20 relative overflow-hidden">
      {/* Subtle Ghanaian Architectural Landmark Background (Client Brief Section 2) */}
      <div className="absolute right-0 top-0 w-full lg:w-[48%] h-[420px] pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/img_new_2.PNG"
          alt="Ghana Landmark Background"
          fill
          unoptimized
          priority
          className="object-cover object-[center_20%] filter contrast-[1.05] opacity-[0.10] lg:opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFC]/50 to-[#F8FAFC]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="mb-8 pb-6 border-b border-slate-200">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-2.5">
              <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB758]/60 to-[#DFB758] w-8 sm:w-12" />
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-[0.22em] text-[#C49838] uppercase">
                GET IN TOUCH
              </span>
              <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#DFB758]/60 to-[#DFB758] flex-1 max-w-[80px] sm:max-w-[140px]" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#061739] tracking-tight leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2457] via-[#14588B] to-[#C49838]">
                Us
              </span>
            </h1>

            <div className="w-14 h-[3px] bg-[#C49838] rounded-full my-3" />

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong className="text-[#061739] font-semibold">Start the Conversation.</strong> THE HINTER GROUP GHANA LTD welcomes inquiries from organizations, institutions, investors, project developers, and prospective strategic partners.
            </p>
          </div>
        </div>

        {/* 2-Column Simple Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info (5 Cols on desktop, bottom on mobile) */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
            <div className="bg-[#061739] text-white p-7 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-heading font-bold tracking-widest text-[#DFB758] uppercase">
                  HEADQUARTERS
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-bold mt-1">
                  {siteSettings.companyName}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {siteSettings.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DFB758] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono text-slate-400 block uppercase">
                      Office / Physical Headquarters
                    </span>
                    <span className="text-white font-medium leading-relaxed block whitespace-pre-line">
                      {siteSettings.officeAddress}
                    </span>
                  </div>
                </div>

                {siteSettings.corporatePostalAddress && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DFB758] mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-mono text-slate-400 block uppercase">
                        Postal Address
                      </span>
                      <span className="text-white font-medium leading-relaxed block whitespace-pre-line">
                        {siteSettings.corporatePostalAddress}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DFB758]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono text-slate-400 block uppercase">
                      Corporate Email
                    </span>
                    <a
                      href={`mailto:${siteSettings.contactEmail}`}
                      className="text-white hover:text-[#DFB758] font-medium transition-colors"
                    >
                      {siteSettings.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DFB758]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono text-slate-400 block uppercase">
                      Telephone / Primary Ghana Line
                    </span>
                    <a
                      href={`tel:${siteSettings.contactPhone.replace(/\s+/g, '')}`}
                      className="text-white hover:text-[#DFB758] font-medium transition-colors"
                    >
                      {siteSettings.contactPhone}
                    </a>
                  </div>
                </div>

                {siteSettings.contactPhoneAlt && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DFB758]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-mono text-slate-400 block uppercase">
                        Secondary / Direct Ghana Line
                      </span>
                      <a
                        href={`tel:${siteSettings.contactPhoneAlt.replace(/\s+/g, '')}`}
                        className="text-white hover:text-[#DFB758] font-medium transition-colors"
                      >
                        {siteSettings.contactPhoneAlt}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DFB758]">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono text-slate-400 block uppercase">
                      International Inquiries
                    </span>
                    <span className="text-slate-300 text-xs leading-relaxed">
                      We welcome cross-border partnerships and institutional opportunities across West Africa.
                    </span>
                  </div>
                </div>

                {/* Social Media Handles */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase mb-2.5">
                    Connect on Corporate Channels
                  </span>
                  <div className="flex items-center gap-2.5">
                    {siteSettings.linkedinUrl && (
                      <a
                        href={siteSettings.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79v-7.6H6.46M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                        </svg>
                      </a>
                    )}
                    {siteSettings.twitterUrl && (
                      <a
                        href={siteSettings.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                        aria-label="X (Twitter)"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {siteSettings.facebookUrl && (
                      <a
                        href={siteSettings.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                        aria-label="Facebook"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                        </svg>
                      </a>
                    )}
                    {siteSettings.instagramUrl && (
                      <a
                        href={siteSettings.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    )}
                    {siteSettings.youtubeUrl && (
                      <a
                        href={siteSettings.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#14588B] border border-white/10 hover:border-[#DFB758]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                        aria-label="YouTube"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (7 Cols on desktop, top on mobile) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#061739]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting THE HINTER GROUP GHANA LTD. Our corporate team will review your inquiry and follow up promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        organization: "",
                        email: "",
                        phone: "",
                        inquiryType: "General Business Inquiries",
                        message: "",
                      });
                    }}
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-heading font-bold text-[#061739] bg-[#DFB758] hover:bg-[#C49838] rounded-md transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 pb-3 border-b border-slate-100">
                    <h3 className="font-heading text-lg font-bold text-[#061739]">
                      Send an Inquiry
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Fill out the form below and our team will get in touch.
                    </p>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1">
                    <label className="block text-xs font-heading font-bold text-[#061739] uppercase tracking-wider">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all font-medium text-[#061739] cursor-pointer"
                    >
                      <option value="General Business Inquiries">General Business Inquiries</option>
                      <option value="Strategic Consulting">Strategic Consulting</option>
                      <option value="Project Development & Facilitation">Project Development & Facilitation</option>
                      <option value="Venture & Investment Opportunities">Venture & Investment Opportunities</option>
                      <option value="Brokerage & Business Development">Brokerage & Business Development</option>
                      <option value="Strategic Partnerships">Strategic Partnerships</option>
                      <option value="Market Entry & International Business">Market Entry & International Business</option>
                      <option value="Media & Corporate Communications">Media & Corporate Communications</option>
                      <option value="Other">Other / Custom Inquiries</option>
                    </select>
                  </div>

                  {/* Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-xs font-heading font-bold text-[#061739] uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-heading font-bold text-[#061739] uppercase tracking-wider">
                        Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="Company / Institution"
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-xs font-heading font-bold text-[#061739] uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-heading font-bold text-[#061739] uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+233..."
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-heading font-bold text-[#061739] uppercase tracking-wider">
                      Message / Inquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please share a brief summary of your inquiry..."
                      className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#DFB758] focus:ring-2 focus:ring-[#DFB758]/20 transition-all placeholder:text-slate-400 resize-y"
                    />
                  </div>

                  {/* Error Feedback */}
                  {errorMessage && (
                    <div className="p-3.5 bg-red-50/90 border border-red-200 text-red-700 rounded-md text-xs flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Confidentiality & Non-Engagement Notice (Client Brief Section 15) */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-md text-[11px] text-slate-500 leading-relaxed space-y-1.5">
                    <p className="flex items-start gap-1.5 text-slate-600">
                      <Lock className="w-3.5 h-3.5 text-[#C49838] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#061739] font-semibold">Confidentiality & Inquiries Notice:</strong> Please do not submit confidential, proprietary, privileged, or commercially sensitive information through this general inquiry form unless appropriate confidentiality arrangements or an executed non-disclosure agreement have been established.
                      </span>
                    </p>
                    <p className="text-[10.5px] text-slate-400 pl-5">
                      Submitting an inquiry through this website does not, by itself, establish a client, advisory, brokerage, fiduciary, or legal relationship with THE HINTER GROUP GHANA LTD.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-heading font-bold text-[#061739] bg-gradient-to-r from-[#C49838] via-[#DFB758] to-[#C49838] rounded-md shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider disabled:opacity-50 cursor-pointer min-h-[48px]"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
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
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <ContactContent />
    </Suspense>
  );
}
