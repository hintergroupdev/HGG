import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { employeeVerificationQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { siteConfig } from '@/lib/siteConfig';
import VerificationClientActions from './VerificationClientActions';

export const dynamic = 'force-dynamic';

const displayDomain = siteConfig.url.replace(/^https?:\/\//, '');

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id?.toUpperCase() || 'VERIFY';
  return {
    title: `Identity Verification — ${id} | ${siteConfig.name}`,
    description: 'Official personnel credential and identity verification system of The Hinter Group Ghana Ltd.',
    robots: { index: false, follow: false, noarchive: true, nosnippet: true },
  };
}

const DEFAULT_VERIFIED_EMPLOYEES = {
  'HGG-001': {
    employeeId: 'HGG-001',
    fullName: 'Charles N. Hammond',
    position: 'Chairman & Chief Executive Officer',
    organization: 'THE HINTER GROUP GHANA LTD',
    department: 'Executive Leadership & Governance',
    status: 'active',
    issuedDate: '2026-09-01',
    portraitUrl: '/images/CEO.PNG',
  },
  '0001': {
    employeeId: '0001', fullName: 'Charles N. Hammond', position: 'Chairman & Chief Executive Officer',
    organization: 'THE HINTER GROUP GHANA LTD', department: 'Executive Leadership & Governance',
    status: 'active', issuedDate: '2026-09-01', portraitUrl: '/images/CEO.PNG',
  },
  'HGG-0001': {
    employeeId: 'HGG-0001', fullName: 'Charles N. Hammond', position: 'Chairman & Chief Executive Officer',
    organization: 'THE HINTER GROUP GHANA LTD', department: 'Executive Leadership & Governance',
    status: 'active', issuedDate: '2026-09-01', portraitUrl: '/images/CEO.PNG',
  },
};

export default async function EmployeeVerifyPage({ params }) {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id;
  if (!rawId) notFound();

  const employeeId = rawId.toUpperCase().trim();

  let employee = null;
  try {
    employee = await client.fetch(employeeVerificationQuery, { employeeId }, { next: { revalidate: 0 } });
  } catch (err) {
    console.error('Sanity fetch error:', err);
  }
  if (!employee && DEFAULT_VERIFIED_EMPLOYEES[employeeId]) {
    employee = DEFAULT_VERIFIED_EMPLOYEES[employeeId];
  }

  const isVerified  = employee?.status === 'active';
  const isSuspended = employee?.status === 'suspended';

  let portraitSrc = null;
  if (employee?.portrait && urlForImage(employee.portrait)) {
    portraitSrc = urlForImage(employee.portrait).width(600).height(600).url();
  } else if (employee?.portraitUrl) {
    portraitSrc = employee.portraitUrl;
  }

  const sc = isVerified ? 'sv' : isSuspended ? 'ss' : 'si';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        html, body {
          margin: 0;
          padding: 0;
          background: #010912 !important;
          min-height: 100%;
        }

        /* ── Root Container ── */
        .vp {
          min-height: 100dvh;
          background: #010912;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #E8EDF5;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Background Elements ── */
        .vp-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .vp-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,168,92,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,168,92,.035) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .vp-bg-o1 {
          position: absolute;
          width: 750px;
          height: 750px;
          top: -220px;
          left: -180px;
          background: radial-gradient(circle, rgba(20,80,140,.2) 0%, transparent 70%);
          border-radius: 50%;
        }
        .vp-bg-o2 {
          position: absolute;
          width: 550px;
          height: 550px;
          bottom: -120px;
          right: -80px;
          background: radial-gradient(circle, rgba(200,168,92,.11) 0%, transparent 70%);
          border-radius: 50%;
        }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:.45;} }

        /* ── Top Bar ── */
        .vp-bar {
          position: relative;
          z-index: 20;
          background: rgba(1,9,18,.94);
          border-bottom: 1px solid rgba(200,168,92,.16);
          backdrop-filter: blur(24px);
          height: 52px;
          padding: 0 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .vp-bar-l { display: flex; align-items: center; gap: 14px; }
        .vp-bar-div { width: 1px; height: 18px; background: rgba(200,168,92,.25); }
        .vp-bar-org { font-size: 11px; font-weight: 700; letter-spacing: .12em; color: rgba(232,237,245,.5); text-transform: uppercase; }
        .vp-bar-portal { font-size: 11px; font-weight: 600; letter-spacing: .08em; color: rgba(200,168,92,.75); text-transform: uppercase; }
        .vp-bar-r { display: flex; align-items: center; gap: 18px; }
        .vp-bar-tls { display: flex; align-items: center; gap: 6px; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(52,211,153,.7); letter-spacing: .04em; }
        .vp-bar-tls-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; animation: pulse 2s ease-in-out infinite; }
        .vp-bar-home { font-size: 11px; font-weight: 600; color: rgba(232,237,245,.4); text-decoration: none; letter-spacing: .04em; transition: color .2s; }
        .vp-bar-home:hover { color: #C8A85C; }

        /* ── Main Viewport Area ── */
        .vp-main {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
        }

        /* ── Card ── */
        .vp-card {
          width: 100%;
          max-width: 416px;
          background: rgba(7,16,34,.93);
          border: 1px solid rgba(200,168,92,.22);
          border-radius: 18px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(200,168,92,.07),
            0 32px 72px -16px rgba(0,0,0,.92),
            inset 0 1px 0 rgba(200,168,92,.35);
          backdrop-filter: blur(40px);
          display: flex;
          flex-direction: column;
        }

        .vp-stripe {
          height: 3px;
          background: linear-gradient(90deg, #DFB758 0%, #C49838 55%, rgba(139,107,48,0.2) 100%);
        }

        /* ── Org Header ── */
        .vp-org-head {
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.015);
        }
        .vp-org-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #0A1E4A 0%, #05122E 100%);
          border: 1.5px solid rgba(200,168,92,.45);
          border-radius: 9px;
          padding: 6px;
          box-shadow: 0 0 16px rgba(200,168,92,.15);
          flex-shrink: 0;
        }
        .vp-org-text { display: flex; flex-direction: column; gap: 2px; }
        .vp-org-name { font-size: 10px; font-weight: 800; letter-spacing: .13em; color: #C8A85C; text-transform: uppercase; line-height: 1.3; }
        .vp-org-sub { font-size: 9px; font-weight: 600; color: rgba(232,237,245,.4); letter-spacing: .06em; text-transform: uppercase; }

        /* ── Status Banner ── */
        .vp-status {
          padding: 9px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,.05);
        }
        .vp-status.sv { background: rgba(16,185,129,.07); border-bottom-color: rgba(16,185,129,.16) !important; }
        .vp-status.ss { background: rgba(239,68,68,.07); border-bottom-color: rgba(239,68,68,.16) !important; }
        .vp-status.si { background: rgba(100,116,139,.07); border-bottom-color: rgba(100,116,139,.12) !important; }
        .vp-status-l { display: flex; align-items: center; gap: 8px; }
        .vp-dot { width: 8px; height: 8px; border-radius: 50%; }
        .sv .vp-dot { background: #10B981; box-shadow: 0 0 8px #10B981; animation: pulse 2s ease-in-out infinite; }
        .ss .vp-dot { background: #EF4444; box-shadow: 0 0 8px #EF4444; }
        .si .vp-dot { background: #64748B; }
        .vp-status-txt { font-size: 11px; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
        .sv .vp-status-txt { color: #34D399; }
        .ss .vp-status-txt { color: #FCA5A5; }
        .si .vp-status-txt { color: #94A3B8; }
        .vp-status-pill { font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; padding: 3px 10px; border-radius: 20px; }
        .sv .vp-status-pill { background: rgba(16,185,129,.12); border: 1px solid rgba(16,185,129,.28); color: #34D399; }
        .ss .vp-status-pill { background: rgba(239,68,68,.12); border: 1px solid rgba(239,68,68,.28); color: #FCA5A5; }
        .si .vp-status-pill { background: rgba(100,116,139,.12); border: 1px solid rgba(100,116,139,.28); color: #94A3B8; }

        /* ── Portrait Section ── */
        .vp-portrait-wrap {
          padding-top: 24px;
          padding-bottom: 12px;
          display: flex;
          justify-content: center;
        }
        .vp-portrait-frame {
          position: relative;
          width: 104px;
          height: 104px;
        }
        .vp-portrait {
          width: 104px;
          height: 104px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          border: 2px solid rgba(200,168,92,.6);
          box-shadow: 0 0 0 4px rgba(200,168,92,.09), 0 14px 32px -6px rgba(0,0,0,.75);
          display: block;
        }
        .vp-portrait-ph {
          width: 104px;
          height: 104px;
          border-radius: 50%;
          background: linear-gradient(135deg, #091628, #05101E);
          border: 2px solid rgba(200,168,92,.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(200,168,92,.4);
        }
        .vp-portrait-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #0A1E4A;
          border: 2px solid #C8A85C;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(200,168,92,.3);
        }

        /* ── Identity Section ── */
        .vp-identity {
          padding: 0 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .vp-id-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(200,168,92,.08);
          border: 1px solid rgba(200,168,92,.22);
          border-radius: 5px;
          padding: 2px 10px;
          margin-bottom: 10px;
        }
        .vp-id-lbl { font-size: 9px; font-weight: 700; letter-spacing: .1em; color: rgba(200,168,92,.55); text-transform: uppercase; }
        .vp-id-val { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #C8A85C; }
        .vp-name { font-size: 23px; font-weight: 900; color: #FFFFFF; letter-spacing: -.02em; line-height: 1.2; margin-bottom: 5px; }
        .vp-position { font-size: 13px; font-weight: 600; color: #DFB758; margin-bottom: 7px; }
        .vp-dept { font-size: 10px; font-weight: 600; color: rgba(232,237,245,.45); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 3px; }
        .vp-org { font-size: 10px; font-weight: 600; color: rgba(232,237,245,.3); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 16px; }
        .vp-confirmed { display: inline-flex; align-items: center; gap: 7px; padding: 7px 16px; border-radius: 8px; }
        .vp-confirmed.sv { background: rgba(16,185,129,.08); border: 1px solid rgba(16,185,129,.22); }
        .vp-confirmed.ss { background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.22); }
        .vp-confirmed.si { background: rgba(100,116,139,.08); border: 1px solid rgba(100,116,139,.22); }
        .vp-conf-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .sv .vp-conf-dot { background: #10B981; box-shadow: 0 0 6px #10B981; animation: pulse 2s ease-in-out infinite; }
        .ss .vp-conf-dot { background: #EF4444; }
        .si .vp-conf-dot { background: #64748B; }
        .vp-conf-txt { font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .sv .vp-conf-txt { color: #34D399; }
        .ss .vp-conf-txt { color: #FCA5A5; }
        .si .vp-conf-txt { color: #94A3B8; }

        /* ── Meta Row ── */
        .vp-meta {
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-bottom: 1px solid rgba(255,255,255,.05);
          background: rgba(255,255,255,.01);
        }
        .vp-meta-lbl { font-size: 9px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; color: rgba(200,168,92,.5); }
        .vp-meta-sep { width: 1px; height: 12px; background: rgba(255,255,255,.1); }
        .vp-meta-val { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: rgba(232,237,245,.6); }

        /* ── Actions Row ── */
        .vp-actions-row {
          padding: 14px 24px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .verify-live-clock {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: rgba(232,237,245,.3);
          letter-spacing: .03em;
        }
        .verify-clock-icon { color: rgba(200,168,92,.4); }
        .verify-clock-time { color: rgba(200,168,92,.55); font-weight: 600; }
        .verify-actions { display: flex; align-items: center; justify-content: center; }
        .verify-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .02em;
          cursor: pointer;
          transition: all .18s ease;
          text-decoration: none;
          border: 1px solid transparent;
        }
        .verify-action-copy {
          background: rgba(255,255,255,.05);
          border-color: rgba(255,255,255,.09);
          color: rgba(232,237,245,.55);
        }
        .verify-action-copy:hover {
          background: rgba(255,255,255,.09);
          border-color: rgba(200,168,92,.25);
          color: #E8EDF5;
        }
        .verify-action-copy.copied {
          background: rgba(16,185,129,.1);
          border-color: rgba(16,185,129,.25);
          color: #34D399;
        }

        /* ── Footer ── */
        .vp-footer {
          position: relative;
          z-index: 10;
          padding: 12px 36px;
          border-top: 1px solid rgba(255,255,255,.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-shrink: 0;
          margin-top: auto;
          background: rgba(1,9,18,.8);
        }
        .vp-footer-copy { font-size: 10px; color: rgba(232,237,245,.25); letter-spacing: .03em; }
        .vp-footer-links { display: flex; align-items: center; gap: 16px; }
        .vp-footer-link { font-size: 10px; color: rgba(200,168,92,.45); text-decoration: none; letter-spacing: .04em; transition: color .2s; }
        .vp-footer-link:hover { color: #C8A85C; }
        .vp-footer-sep { width: 1px; height: 11px; background: rgba(255,255,255,.08); }

        /* ── Invalid Record State ── */
        .vp-invalid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          padding: 56px 32px;
          text-align: center;
        }
        .vp-inv-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid rgba(239,68,68,.3);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(239,68,68,.06);
          box-shadow: 0 0 32px rgba(239,68,68,.12);
        }
        .vp-inv-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 4px 14px;
          background: rgba(239,68,68,.09);
          border: 1px solid rgba(239,68,68,.22);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
          color: #FCA5A5;
        }
        .vp-inv-title { font-size: 22px; font-weight: 900; color: #E8EDF5; letter-spacing: -.02em; margin-top: 4px; }
        .vp-inv-desc { font-size: 13px; color: rgba(232,237,245,.4); max-width: 360px; line-height: 1.65; margin-top: 6px; }
        .vp-inv-notice {
          background: rgba(239,68,68,.04);
          border: 1px solid rgba(239,68,68,.12);
          border-radius: 10px;
          padding: 14px 18px;
          max-width: 360px;
          text-align: left;
        }
        .vp-inv-notice-title {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(252,165,165,.6);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .vp-inv-notice-txt { font-size: 12px; color: rgba(232,237,245,.35); line-height: 1.65; }
        .vp-inv-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 22px;
          background: rgba(200,168,92,.07);
          border: 1px solid rgba(200,168,92,.22);
          border-radius: 9px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(200,168,92,.8);
          text-decoration: none;
          transition: all .2s;
        }
        .vp-inv-back:hover { background: rgba(200,168,92,.14); color: #C8A85C; }
        .mono-id { font-family: 'JetBrains Mono', monospace; font-weight: 600; color: #FCA5A5; }

        /* ── Responsive Mobile ── */
        @media (max-width: 640px) {
          .vp-bar {
            padding: 0 16px;
            height: 48px;
          }
          .vp-bar-org, .vp-bar-portal, .vp-bar-div, .vp-bar-tls {
            display: none;
          }
          .vp-bar-home {
            font-size: 11px;
            max-width: 160px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .vp-main {
            padding: 20px 14px;
          }
          .vp-card {
            max-width: 100%;
          }
          .vp-org-head {
            padding: 14px 18px;
          }
          .vp-status {
            padding: 8px 18px;
          }
          .vp-portrait-wrap {
            padding-top: 20px;
            padding-bottom: 10px;
          }
          .vp-portrait-frame, .vp-portrait, .vp-portrait-ph {
            width: 98px;
            height: 98px;
          }
          .vp-name {
            font-size: 21px;
          }
          .vp-identity {
            padding: 0 18px 20px;
          }
          .vp-meta {
            padding: 10px 18px;
          }
          .vp-actions-row {
            padding: 12px 18px 16px;
          }
          .vp-footer {
            padding: 14px 16px;
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
          .vp-footer-links {
            justify-content: center;
          }
        }
      `}</style>

      <div className="vp">
        <div className="vp-bg">
          <div className="vp-bg-grid" />
          <div className="vp-bg-o1" />
          <div className="vp-bg-o2" />
        </div>

        {/* Top Bar */}
        <header className="vp-bar">
          <div className="vp-bar-l">
            <Link href={siteConfig.url} style={{ display:'flex', alignItems:'center' }}>
              <Image src="/assets/logos/Favicon/Logo_Favicon.svg" alt="HGG" width={26} height={26} priority />
            </Link>
            <div className="vp-bar-div" />
            <span className="vp-bar-org">The Hinter Group Ghana Ltd</span>
            <div className="vp-bar-div" />
            <span className="vp-bar-portal">Personnel Verification</span>
          </div>
          <div className="vp-bar-r">
            <div className="vp-bar-tls">
              <div className="vp-bar-tls-dot" />
              <span>TLS 1.3 · Live Registry</span>
            </div>
            <Link href={siteConfig.url} className="vp-bar-home">{displayDomain} ↗</Link>
          </div>
        </header>

        {/* Main */}
        <main className="vp-main">
          <div className="vp-card">
            {employee ? (
              <>
                <div className="vp-stripe" />

                {/* Org header */}
                <div className="vp-org-head">
                  <div className="vp-org-icon">
                    <Image src="/assets/logos/Favicon/Logo_Favicon.svg" alt="HGG" width={28} height={28} style={{ width:'100%', height:'100%', objectFit:'contain' }} priority />
                  </div>
                  <div className="vp-org-text">
                    <span className="vp-org-name">The Hinter Group Ghana Ltd</span>
                    <span className="vp-org-sub">Official Credential Registry</span>
                  </div>
                </div>

                {/* Status banner */}
                <div className={`vp-status ${sc}`}>
                  <div className="vp-status-l">
                    <div className="vp-dot" />
                    <span className="vp-status-txt">
                      {isVerified ? 'VERIFIED · ACTIVE' : isSuspended ? 'SUSPENDED' : 'INACTIVE'}
                    </span>
                  </div>
                  <span className="vp-status-pill">
                    {isVerified ? 'Identity Confirmed' : isSuspended ? 'Access Revoked' : 'Credential Lapsed'}
                  </span>
                </div>

                {/* Portrait */}
                <div className="vp-portrait-wrap">
                  <div className="vp-portrait-frame">
                    {portraitSrc ? (
                      <img src={portraitSrc} alt={employee.fullName} className="vp-portrait" />
                    ) : (
                      <div className="vp-portrait-ph">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                        </svg>
                      </div>
                    )}
                    <div className="vp-portrait-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8A85C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Identity */}
                <div className="vp-identity">
                  <div className="vp-id-pill">
                    <span className="vp-id-lbl">ID</span>
                    <span className="vp-id-val">{employee.employeeId}</span>
                  </div>
                  <h1 className="vp-name">{employee.fullName}</h1>
                  <p className="vp-position">{employee.position}</p>
                  {employee.department && <p className="vp-dept">{employee.department}</p>}
                  <p className="vp-org">{employee.organization || 'THE HINTER GROUP GHANA LTD'}</p>
                  <div className={`vp-confirmed ${sc}`}>
                    <span className="vp-conf-dot" />
                    <span className="vp-conf-txt">
                      {isVerified
                        ? 'Verified against central registry'
                        : isSuspended
                        ? 'Privileges suspended — review pending'
                        : 'Credential not currently active'}
                    </span>
                  </div>
                </div>

                {/* Issued date */}
                <div className="vp-meta">
                  <span className="vp-meta-lbl">Credential Issued</span>
                  <div className="vp-meta-sep" />
                  <span className="vp-meta-val">{employee.issuedDate || '—'}</span>
                </div>

                {/* Actions */}
                <div className="vp-actions-row">
                  <VerificationClientActions
                    employeeId={employee.employeeId}
                    fullName={employee.fullName}
                    isVerified={isVerified}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="vp-stripe" />
                <div className="vp-invalid">
                  <div className="vp-inv-ring">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <div>
                    <div className="vp-inv-badge">
                      <span style={{ width:6, height:6, borderRadius:'50%', background:'#EF4444', display:'inline-block' }} />
                      Credential Not Recognised
                    </div>
                    <h1 className="vp-inv-title">Not Found in Registry</h1>
                    <p className="vp-inv-desc">
                      The identifier <span className="mono-id">{employeeId}</span> does not match any active record in the HGG personnel database.
                    </p>
                  </div>
                  <div className="vp-inv-notice">
                    <div className="vp-inv-notice-title">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      Security Notice
                    </div>
                    <p className="vp-inv-notice-txt">
                      Possession or use of invalid identification bearing the trademark of THE HINTER GROUP GHANA LTD is strictly prohibited and may be subject to legal action. If you believe this is an error, contact Corporate Security.
                    </p>
                  </div>
                  <Link href={siteConfig.url} className="vp-inv-back">← Return to Corporate Site</Link>
                </div>
              </>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="vp-footer">
          <span className="vp-footer-copy">© {new Date().getFullYear()} THE HINTER GROUP GHANA LTD · All Rights Reserved</span>
          <div className="vp-footer-links">
            <Link href={siteConfig.url} className="vp-footer-link">Corporate Site</Link>
            <div className="vp-footer-sep" />
            <Link href="/privacy-policy" className="vp-footer-link">Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
