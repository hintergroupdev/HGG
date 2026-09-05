import QRCode from 'qrcode';
import faviconJson from './faviconBase64.json';

const FAVICON_DATA_URL = faviconJson.dataUrl;

/**
 * Generates an SVG string of the official HGG employee verification QR code.
 * Matches the official physical ID card specification:
 * - Rounded white card container
 * - Fine metallic gold outer border frame (#C59B3F)
 * - Crisp black QR modules with Level-H (30%) error correction
 * - Dedicated white quiet zone cutout with the HGG shield emblem centered
 *
 * @param {string} verificationUrl - Full canonical verification URL
 * @returns {Promise<string>} Clean, print-ready SVG string
 */
export async function generateHggQrSvg(verificationUrl) {
  const rawSvg = await QRCode.toString(verificationUrl, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 3,
    color: {
      dark: '#000000', // Standard high-contrast black modules
      light: '#FFFFFF',
    },
  });

  // Extract dimensions from viewBox
  const vbMatch = rawSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
  const size = vbMatch ? parseInt(vbMatch[1], 10) : 47;
  const center = size / 2;

  // Sizing for the central shield quiet zone matching reference photo
  const clearingWidth = size * 0.28;
  const clearingHeight = size * 0.32;
  const clearingX = center - clearingWidth / 2;
  const clearingY = center - clearingHeight / 2;

  const logoWidth = clearingWidth * 0.88;
  const logoHeight = clearingHeight * 0.90;
  const logoX = center - logoWidth / 2;
  const logoY = center - logoHeight / 2;

  // Replace default sharp background with rounded card
  let svg = rawSvg.replace(
    `<path fill="#FFFFFF" d="M0 0h${size}v${size}H0z"/>`,
    `<rect x="0" y="0" width="${size}" height="${size}" rx="3.5" fill="#FFFFFF" />`
  );

  const overlays = `
    <!-- Center Shield Quiet Zone -->
    <rect x="${clearingX}" y="${clearingY}" width="${clearingWidth}" height="${clearingHeight}" rx="1.5" fill="#FFFFFF" />

    <!-- Official HGG Shield Emblem -->
    <image href="${FAVICON_DATA_URL}" x="${logoX}" y="${logoY}" width="${logoWidth}" height="${logoHeight}" preserveAspectRatio="xMidYMid meet" />

    <!-- Outer Metallic Gold Border Frame -->
    <rect x="0.5" y="0.5" width="${size - 1}" height="${size - 1}" rx="3.2" fill="none" stroke="#C59B3F" stroke-width="0.9" />
  </svg>`;

  return svg.replace('</svg>', overlays);
}

/**
 * Client-side utility to trigger instant browser file download
 */
export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Client-side utility to trigger SVG file download
 */
export async function downloadHggQrSvg(verificationUrl, employeeId) {
  const svgString = await generateHggQrSvg(verificationUrl);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  downloadBlob(blob, `HGG-QR-${employeeId}.svg`);
}

/**
 * Client-side utility to render and download a high-resolution 300-DPI equivalent PNG
 */
export async function downloadHggQrPng(verificationUrl, employeeId, resolution = 1200) {
  const svgString = await generateHggQrSvg(verificationUrl);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.crossOrigin = 'anonymous';

  return new Promise((resolve, reject) => {
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = resolution;
        canvas.height = resolution;
        const ctx = canvas.getContext('2d');

        // High quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(img, 0, 0, resolution, resolution);
        URL.revokeObjectURL(url);

        canvas.toBlob((pngBlob) => {
          if (pngBlob) {
            downloadBlob(pngBlob, `HGG-QR-${employeeId}.png`);
            resolve();
          } else {
            reject(new Error('Failed to create PNG blob'));
          }
        }, 'image/png');
      } catch (err) {
        URL.revokeObjectURL(url);
        reject(err);
      }
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
}
