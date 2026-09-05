import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';

// Load .env.local if present
const envPath = path.resolve(process.cwd(), '.env.local');
let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hintergroupghana.com';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/NEXT_PUBLIC_SITE_URL\s*=\s*(.+)/);
  if (match && match[1]) {
    siteUrl = match[1].trim().replace(/['"]/g, '');
  }
}

const employeeId = (process.argv[2] || 'HGG-001').toUpperCase().trim();
const verifyUrl = `${siteUrl}/verify/${employeeId}`;

console.log(`=======================================================`);
console.log(`HGG ID CARD QR GENERATOR (OFFICIAL DESIGN)`);
console.log(`=======================================================`);
console.log(`Employee ID:       ${employeeId}`);
console.log(`Active Domain:     ${siteUrl}`);
console.log(`Verification URL:  ${verifyUrl}`);
console.log(`-------------------------------------------------------`);

const faviconDataUrl = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), 'lib/faviconBase64.json'), 'utf8')
).dataUrl;

async function run() {
  const rawSvg = await QRCode.toString(verifyUrl, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 3,
    color: {
      dark: '#000000', // Standard high-contrast black modules
      light: '#FFFFFF',
    },
  });

  const vbMatch = rawSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
  const size = vbMatch ? parseInt(vbMatch[1], 10) : 47;
  const center = size / 2;

  // Sizing matching user reference
  const clearingWidth = size * 0.28;
  const clearingHeight = size * 0.32;
  const clearingX = center - clearingWidth / 2;
  const clearingY = center - clearingHeight / 2;

  const logoWidth = clearingWidth * 0.88;
  const logoHeight = clearingHeight * 0.90;
  const logoX = center - logoWidth / 2;
  const logoY = center - logoHeight / 2;

  // Rounded card background
  let svg = rawSvg.replace(
    `<path fill="#FFFFFF" d="M0 0h${size}v${size}H0z"/>`,
    `<rect x="0" y="0" width="${size}" height="${size}" rx="3.5" fill="#FFFFFF" />`
  );

  const overlays = `
    <!-- Center Shield Quiet Zone -->
    <rect x="${clearingX}" y="${clearingY}" width="${clearingWidth}" height="${clearingHeight}" rx="1.5" fill="#FFFFFF" />

    <!-- Official HGG Shield Emblem -->
    <image href="${faviconDataUrl}" x="${logoX}" y="${logoY}" width="${logoWidth}" height="${logoHeight}" preserveAspectRatio="xMidYMid meet" />

    <!-- Outer Metallic Gold Border Frame -->
    <rect x="0.5" y="0.5" width="${size - 1}" height="${size - 1}" rx="3.2" fill="none" stroke="#C59B3F" stroke-width="0.9" />
  </svg>`;

  const finalSvg = svg.replace('</svg>', overlays);

  const outDir = path.resolve(process.cwd(), 'public/assets/id-cards');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const svgFilePath = path.join(outDir, `HGG-QR-${employeeId}.svg`);
  fs.writeFileSync(svgFilePath, finalSvg, 'utf8');
  console.log(`✓ Print-Ready SVG Vector saved: ${svgFilePath}`);
  console.log(`✓ Verification endpoint ready at: ${verifyUrl}`);
  console.log(`=======================================================`);
}

run().catch(console.error);
