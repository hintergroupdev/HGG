import React, { useState, useEffect } from 'react';
import { useClient } from 'sanity';
import { generateHggQrSvg, downloadHggQrSvg, downloadHggQrPng } from '../../lib/qrGenerator';
import { siteConfig } from '../../lib/siteConfig';
import { defaultVerifiedEmployeesList } from '../../lib/defaultEmployees';

export function EmployeeQrToolComponent() {
  const client = useClient({ apiVersion: '2024-08-30' });
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrPreviews, setQrPreviews] = useState({});

  // Authoritative canonical domain: reads NEXT_PUBLIC_SITE_URL from .env; if nothing is given, defaults to https://hintergroupghana.com
  const siteBaseUrl = (siteConfig?.url || 'https://hintergroupghana.com').replace(/\/+$/, '');

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
        isExecutive,
        internalNotes,
        portrait {
          asset->{
            url
          }
        }
      }`;
      const data = await client.fetch(query);
      const remoteEmployees = data || [];

      // Ensure default executives have isExecutive: true and correct official designations/roles
      try {
        await client.patch('emp-HGG-001').setIfMissing({ isExecutive: true, leadershipOrder: 1, leadershipCategory: 'executive' }).commit();
        await client.patch('emp-HGG-002').set({
          fullName: 'Lt. Commander Daniel Kotei — USN (Rtd.)',
          position: 'Strategic Coordination & Stakeholder Engagement',
          isExecutive: true,
          leadershipOrder: 2,
          leadershipCategory: 'executive',
        }).commit();
        await client.patch('emp-HGG-003').set({
          fullName: 'Maj. Gen. Matthew Essien — GAF (Rtd.)',
          position: 'Strategic Development & Business Coordination',
          isExecutive: true,
          leadershipOrder: 3,
          leadershipCategory: 'executive',
        }).commit();
        await client.patch('emp-HGG-004').setIfMissing({
          isExecutive: true,
          leadershipOrder: 4,
          leadershipCategory: 'executive',
          fullName: 'Mr. Harold Lumor',
          position: 'Finance & Commercial Review',
        }).commit();
        await client.patch('emp-HGG-005').setIfMissing({
          isExecutive: true,
          leadershipOrder: 5,
          leadershipCategory: 'executive',
          fullName: 'Mr. Rodney Rollins',
          position: 'Research & Strategic Analysis',
        }).commit();
      } catch (patchErr) {
        // Safe ignore
      }

      // Auto-persist any missing default executive employees into Sanity dataset if client has write access
      for (const defEmp of defaultVerifiedEmployeesList) {
        const inRemote = remoteEmployees.some(
          (e) => (e.employeeId || '').toUpperCase() === (defEmp.employeeId || '').toUpperCase()
        );
        if (!inRemote) {
          try {
            await client.createIfNotExists({
              _id: defEmp._id,
              _type: 'employeeVerification',
              employeeId: defEmp.employeeId,
              fullName: defEmp.fullName,
              position: defEmp.position,
              organization: defEmp.organization,
              department: defEmp.department,
              status: defEmp.status,
              isExecutive: defEmp.isExecutive ?? false,
              leadershipCategory: defEmp.leadershipCategory || 'executive',
              leadershipOrder: defEmp.leadershipOrder || 10,
              shortBio: defEmp.shortBio || '',
              issuedDate: defEmp.issuedDate,
              internalNotes: defEmp.internalNotes,
            });
          } catch (writeErr) {
            // Unauthenticated or read-only context: safe to ignore as in-memory merge handles presentation
          }
        }
      }

      // Merge remote records with default verified employees
      const mergedEmployees = [...remoteEmployees];
      for (const defEmp of defaultVerifiedEmployeesList) {
        const index = mergedEmployees.findIndex(
          (e) => (e.employeeId || '').toUpperCase() === (defEmp.employeeId || '').toUpperCase()
        );
        if (index === -1) {
          mergedEmployees.push(defEmp);
        } else {
          // Keep official designations, positions, and executive status up to date
          mergedEmployees[index] = {
            ...mergedEmployees[index],
            fullName: defEmp.fullName || mergedEmployees[index].fullName,
            position: defEmp.position || mergedEmployees[index].position,
            isExecutive: mergedEmployees[index].isExecutive ?? defEmp.isExecutive,
          };
        }
      }

      // Order by sequential employee ID (HGG-001, HGG-002, HGG-003...)
      mergedEmployees.sort((a, b) => (a.employeeId || '').localeCompare(b.employeeId || ''));
      setEmployees(mergedEmployees);

      // Generate QR previews for all registered employees
      const previews = {};
      for (const emp of mergedEmployees) {
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
      // Fall back to default employees so the QR tool remains fully operational
      setEmployees(defaultVerifiedEmployeesList);
      const previews = {};
      for (const emp of defaultVerifiedEmployeesList) {
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
            Designed to enhance credential authentication with high error correction for improved scanning reliability. Credential updates are reflected dynamically through the central registry.
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '20px' }}>
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
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '8px 12px',
                        marginBottom: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            background: '#0A2457',
                            color: '#DFB758',
                            fontSize: '12px',
                            fontWeight: '800',
                            fontFamily: 'monospace',
                            padding: '4px 9px',
                            borderRadius: '6px',
                            letterSpacing: '0.04em',
                            whiteSpace: 'nowrap',
                            display: 'inline-flex',
                            alignItems: 'center',
                            lineHeight: '1.2',
                            flexShrink: 0,
                          }}
                        >
                          {emp.employeeId}
                        </span>
                        {emp.isExecutive && (
                          <span
                            style={{
                              background: 'linear-gradient(135deg, #DFB758 0%, #C49838 100%)',
                              color: '#061739',
                              fontSize: '10px',
                              fontWeight: '800',
                              padding: '4px 8px',
                              borderRadius: '6px',
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              whiteSpace: 'nowrap',
                              lineHeight: '1.2',
                              flexShrink: 0,
                            }}
                          >
                            <span>⭐</span>
                            <span>Executive</span>
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: '10.5px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: isVerified ? '#ecfdf5' : '#fef2f2',
                          color: isVerified ? '#047857' : '#b91c1c',
                          border: `1px solid ${isVerified ? '#a7f3d0' : '#fecaca'}`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          whiteSpace: 'nowrap',
                          lineHeight: '1.2',
                          flexShrink: 0,
                        }}
                      >
                        <span style={{ fontSize: '9px', lineHeight: 1 }}>{isVerified ? '●' : '○'}</span>
                        <span>{isVerified ? 'Active / Verified' : 'Inactive'}</span>
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
                        Level-H Error Correction • High Scanning Reliability • Gold Border & Centered Shield
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
