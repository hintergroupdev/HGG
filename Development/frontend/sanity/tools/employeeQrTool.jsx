import React, { useState, useEffect } from 'react';
import { useClient } from 'sanity';
import { generateHggQrSvg, downloadHggQrSvg, downloadHggQrPng } from '../../lib/qrGenerator';

export function EmployeeQrToolComponent() {
  const client = useClient({ apiVersion: '2024-08-30' });
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrPreviews, setQrPreviews] = useState({});

  // Dynamic canonical domain from environment
  const siteBaseUrl =
    typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : typeof window !== 'undefined'
      ? window.location.origin
      : 'https://hintergroupghana.com';

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const query = `*[_type == "employeeVerification"] | order(employeeId asc) {
        _id,
        employeeId,
        fullName,
        position,
        organization,
        department,
        status,
        issuedDate,
        internalNotes,
        portrait {
          asset->{
            url
          }
        }
      }`;
      const data = await client.fetch(query);
      setEmployees(data || []);

      // Generate QR previews for all registered employees
      const previews = {};
      for (const emp of data || []) {
        if (emp.employeeId) {
          const url = `${siteBaseUrl}/verify/${emp.employeeId}`;
          try {
            previews[emp.employeeId] = await generateHggQrSvg(url);
          } catch (e) {
            console.error('Failed to generate preview for', emp.employeeId, e);
          }
        }
      }
      setQrPreviews(previews);
    } catch (err) {
      console.error('Failed to fetch employees:', err);
      setError('Failed to load employee records. Please ensure your Sanity token or permissions are active.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDownloadSvg = async (employeeId) => {
    const url = `${siteBaseUrl}/verify/${employeeId}`;
    await downloadHggQrSvg(url, employeeId);
  };

  const handleDownloadPng = async (employeeId) => {
    const url = `${siteBaseUrl}/verify/${employeeId}`;
    await downloadHggQrPng(url, employeeId, 1200);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Error Alert */}
      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #ef4444', color: '#991b1b', padding: '14px 20px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' }}>
          {error}
        </div>
      )}

      {/* Control Actions Bar */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
            Registered Employee ID & QR Registry
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Official registered corporate personnel credentials. All QR codes correspond strictly to validated database records.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Redirects directly to Structure tool new employeeVerification page */}
          <a
            href="/studio/intent/create/type=employeeVerification/"
            style={{
              background: '#0A2457',
              color: '#ffffff',
              border: '1px solid #C59B3F',
              borderRadius: '8px',
              padding: '10px 18px',
              fontSize: '13px',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(10, 36, 87, 0.1)',
            }}
          >
            + Register New Employee ↗
          </a>
          <button
            onClick={fetchEmployees}
            disabled={loading}
            style={{
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px 16px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            ↻ Refresh
          </button>
        </div>
      </div>

      {/* Section: Employee Directory */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0A2457', margin: 0 }}>
            Registered Personnel Credentials ({employees.length})
          </h2>
          <span style={{ fontSize: '12px', color: '#64748b' }}>
            Domain: <code>{siteBaseUrl}</code>
          </span>
        </div>

        {loading && employees.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', background: '#f8fafc', borderRadius: '12px', color: '#64748b' }}>
            Loading employee credentials...
          </div>
        ) : employees.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', background: '#f8fafc', borderRadius: '12px', border: '2px dashed #cbd5e1' }}>
            <p style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
              No employee verification records registered yet.
            </p>
            <a
              href="/studio/intent/create/type=employeeVerification/"
              style={{
                background: '#0A2457',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '13px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              + Register First Employee in Structure ↗
            </a>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
            {employees.map((emp) => {
              const previewSvg = qrPreviews[emp.employeeId];
              const verifyUrl = `${siteBaseUrl}/verify/${emp.employeeId}`;
              const isVerified = emp.status === 'active';
              const cleanDocId = (emp._id || '').replace(/^drafts\./, '');
              const editUrl = `/studio/intent/edit/id=${cleanDocId};type=employeeVerification/`;

              return (
                <div
                  key={emp._id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '24px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Card Top: ID Badge & Status */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span
                        style={{
                          background: '#0A2457',
                          color: '#DFB758',
                          fontSize: '13px',
                          fontWeight: '800',
                          fontFamily: 'monospace',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {emp.employeeId}
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: isVerified ? '#ecfdf5' : '#fef2f2',
                          color: isVerified ? '#047857' : '#b91c1c',
                          border: `1px solid ${isVerified ? '#a7f3d0' : '#fecaca'}`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {isVerified ? '● Active / Verified' : '○ Inactive'}
                      </span>
                    </div>

                    {/* Personnel Profile Details */}
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
                      {emp.fullName}
                    </h3>
                    <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#14588b', fontWeight: '600' }}>
                      {emp.position}
                    </p>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px', lineHeight: '1.4' }}>
                      <div><strong>Organization:</strong> {emp.organization}</div>
                      {emp.department && <div><strong>Department:</strong> {emp.department}</div>}
                    </div>

                    {/* QR Code Preview with Embedded Shield on Navy ID Card Surface */}
                    <div
                      style={{
                        background: '#081A38',
                        borderRadius: '12px',
                        padding: '20px',
                        border: '1px solid #14588b',
                        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      {previewSvg ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: previewSvg }}
                          style={{ width: '180px', height: '180px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        />
                      ) : (
                        <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '12px' }}>
                          Generating QR...
                        </div>
                      )}
                      <div style={{ marginTop: '12px', fontSize: '11px', color: '#DFB758', textAlign: 'center', fontWeight: '600' }}>
                        Level-H (30%) • Gold Border & Centered Shield
                      </div>
                    </div>

                    {/* Verification Link */}
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>
                        Verification Link:
                      </div>
                      <a
                        href={verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: '11px',
                          color: '#14588b',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                          background: '#f1f5f9',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          display: 'block',
                          border: '1px solid #cbd5e1',
                        }}
                      >
                        {verifyUrl} ↗
                      </a>
                    </div>

                    {/* Edit Details in Structure Tool Button */}
                    <div style={{ marginBottom: '14px' }}>
                      <a
                        href={editUrl}
                        style={{
                          background: '#f8fafc',
                          color: '#0A2457',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          padding: '8px 12px',
                          fontSize: '12px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          transition: 'background 0.2s',
                        }}
                        title="Open and edit full employee details in Sanity Structure"
                      >
                        ✎ Edit Details in Structure ↗
                      </a>
                    </div>
                  </div>

                  {/* Actions: Download SVG & PNG */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <button
                      onClick={() => handleDownloadSvg(emp.employeeId)}
                      style={{
                        background: '#0A2457',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '9px 12px',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                      title="Download print-ready vector SVG for ID card artwork"
                    >
                      ↓ Download SVG
                    </button>
                    <button
                      onClick={() => handleDownloadPng(emp.employeeId)}
                      style={{
                        background: '#DFB758',
                        color: '#0A2457',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '9px 12px',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                      title="Download 1200x1200px 300-DPI high-res PNG for card printing"
                    >
                      ↓ Download PNG
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function employeeQrTool() {
  return {
    name: 'employee-id-qr',
    title: 'Employee ID & QR',
    component: EmployeeQrToolComponent,
  };
}
