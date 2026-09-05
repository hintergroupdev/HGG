'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, Wifi } from 'lucide-react';

export default function VerificationClientActions({ employeeId, fullName, isVerified }) {
  const [copied, setCopied] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
      setDateStr(
        now.toLocaleDateString('en-GB', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      {/* Live Timestamp */}
      <div className="verify-live-clock">
        <Wifi size={11} className="verify-clock-icon" />
        <span className="verify-clock-date">{dateStr}</span>
        <span className="verify-clock-sep">·</span>
        <span className="verify-clock-time">{timeStr}</span>
      </div>

      {/* Actions */}
      <div className="verify-actions">
        <button
          onClick={handleCopyLink}
          className={`verify-action-btn verify-action-copy ${copied ? 'copied' : ''}`}
          title="Copy verification URL"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
        </button>
      </div>
    </>
  );
}
