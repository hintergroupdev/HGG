import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to escape HTML characters and prevent injection / broken markup
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, organization, email, phone, inquiryType, message } = body;

    // Strict Field Validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide full name, email, and message.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(fullName.trim());
    const safeOrg = escapeHtml(organization?.trim() || 'Not Specified');
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone?.trim() || 'Not Specified');
    const safeType = escapeHtml(inquiryType?.trim() || 'General Business Inquiries');
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER?.trim() || 'chakmashuvo2016@gmail.com';
    // Google App Passwords have 4-character spaces on screen - MUST strip whitespace for SMTP
    const rawPass = process.env.SMTP_PASS || 'bgyqlukfodrnexbe';
    const smtpPass = rawPass.replace(/\s+/g, '');
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL?.trim() || smtpUser || 'chakmashuvo2016@gmail.com';

    console.log('[HGG Contact API] Dispatching email to:', receiverEmail, 'via', smtpUser);

    // Development fallback simulation if credentials are empty
    if (!smtpUser || !smtpPass) {
      console.warn(
        '[HGG Contact API] SMTP_USER and/or SMTP_PASS are not configured. Simulating dispatch.'
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Inquiry received in dev simulation mode.',
      });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timestampGmt = new Date().toUTCString();
    const emailSubject = `Inquiry: ${fullName.trim()} — ${inquiryType || 'General Business'} | HGG Portal`;

    // ── 1. High-Deliverability Responsive HTML Email (Inlined CSS & Table-Based Layout) ──
    const htmlEmail = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f1f5f9" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container (Max 600px) -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(6,23,57,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td bgcolor="#061739" style="background-color: #061739; padding: 30px 24px; text-align: center; border-bottom: 4px solid #DFB758;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <span style="display: inline-block; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: 1px; line-height: 1.3; text-transform: uppercase;">
                      THE HINTER GROUP GHANA LTD
                    </span>
                    <br />
                    <span style="display: inline-block; margin-top: 6px; font-size: 11px; font-weight: 700; color: #DFB758; letter-spacing: 2px; text-transform: uppercase;">
                      INBOUND PORTAL INQUIRY
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 28px 24px 20px 24px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.5; color: #334155;">
                A new inquiry has been submitted through the official corporate website portal.
              </p>

              <!-- Inquirer Metadata Table -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 24px; border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden;">
                <tr bgcolor="#f8fafc">
                  <td width="35%" style="padding: 11px 14px; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                    Full Name
                  </td>
                  <td style="padding: 11px 14px; font-size: 13.5px; font-weight: 700; color: #061739; border-bottom: 1px solid #e2e8f0;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 11px 14px; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                    Organization
                  </td>
                  <td style="padding: 11px 14px; font-size: 13.5px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">
                    ${safeOrg}
                  </td>
                </tr>
                <tr bgcolor="#f8fafc">
                  <td style="padding: 11px 14px; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                    Email Address
                  </td>
                  <td style="padding: 11px 14px; font-size: 13.5px; color: #14588B; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${safeEmail}" style="color: #14588B; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 11px 14px; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                    Phone / WhatsApp
                  </td>
                  <td style="padding: 11px 14px; font-size: 13.5px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">
                    ${safePhone}
                  </td>
                </tr>
                <tr bgcolor="#f8fafc">
                  <td style="padding: 11px 14px; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                    Inquiry Type
                  </td>
                  <td style="padding: 11px 14px; font-size: 13.5px; color: #C49838; font-weight: 700; border-bottom: 1px solid #e2e8f0;">
                    ${safeType}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 11px 14px; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Date & Time
                  </td>
                  <td style="padding: 11px 14px; font-size: 12.5px; color: #64748b;">
                    ${timestampGmt}
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-left: 4px solid #DFB758; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 18px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px; margin-bottom: 8px;">
                      Inquiry Details & Message
                    </div>
                    <div style="font-size: 14px; line-height: 1.65; color: #0f172a; word-break: break-word;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Quick Action Button -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-top: 10px; padding-bottom: 10px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(inquiryType || 'General Business')}%20-%20THE%20HINTER%20GROUP%20GHANA%20LTD" style="display: inline-block; background-color: #061739; color: #ffffff; padding: 12px 24px; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 8px; letter-spacing: 0.5px;">
                      Reply Directly to Inquirer &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Area -->
          <tr>
            <td bgcolor="#f8fafc" style="background-color: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">
                This message was delivered by the official <strong>THE HINTER GROUP GHANA LTD</strong> web portal.
              </p>
              <p style="margin: 0; font-size: 10.5px; color: #94a3b8;">
                &copy; ${new Date().getFullYear()} THE HINTER GROUP GHANA LTD &bull; 2nd Floor, The Octagon, Accra, Ghana
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // ── 2. Clean Plain-Text Alternative Body (Required for 100% Anti-Spam Compliance) ──
    const textEmail = `THE HINTER GROUP GHANA LTD — NEW PORTAL INQUIRY
============================================================

Full Name:              ${fullName.trim()}
Organization:           ${organization?.trim() || 'Not Specified'}
Email:                  ${email.trim()}
Phone / WhatsApp:       ${phone?.trim() || 'Not Specified'}
Inquiry Classification: ${inquiryType?.trim() || 'General Business Inquiries'}
Submission Time:        ${timestampGmt}

MESSAGE:
------------------------------------------------------------
${message.trim()}

------------------------------------------------------------
To respond, hit Reply in your email client or write directly to ${email.trim()}.
© ${new Date().getFullYear()} THE HINTER GROUP GHANA LTD. All rights reserved.`;

    // Dispatch Email with proper RFC headers
    await transporter.sendMail({
      from: `"THE HINTER GROUP GHANA LTD" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: `"${fullName.trim()}" <${email.trim()}>`,
      subject: emailSubject,
      text: textEmail,
      html: htmlEmail,
      headers: {
        'X-Priority': '3',
        'X-Entity-Ref-ID': `HGG-${Date.now()}`,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry transmitted successfully to HGG.',
    });
  } catch (error) {
    console.error('[HGG Contact API Error]:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to dispatch email inquiry. Please verify your SMTP credentials.' },
      { status: 500 }
    );
  }
}
