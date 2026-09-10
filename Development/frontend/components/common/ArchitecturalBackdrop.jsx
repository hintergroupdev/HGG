/**
 * ArchitecturalBackdrop
 * ─────────────────────
 * A shared background treatment for all dark navy (bg-[#061739]) sections.
 * Renders the diagonal glass-panel geometry and gold diagonal accent lines
 * from the HGG corporate reference image using pure SVG — no extra images.
 *
 * Props:
 *   variant: "hero" | "section" | "footer"
 */
export default function ArchitecturalBackdrop({ variant = "section" }) {
  const isHero = variant === "hero";
  const isFooter = variant === "footer";

  const panelOpacity = isHero ? 0.055 : isFooter ? 0.045 : 0.065;
  const goldOpacity = isHero ? 0.22 : isFooter ? 0.16 : 0.26;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* ── DIAGONAL GLASS PANEL GEOMETRY (SVG) ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`panel-fill-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14588B" stopOpacity={panelOpacity * 1.6} />
            <stop offset="60%" stopColor="#0A2457" stopOpacity={panelOpacity} />
            <stop offset="100%" stopColor="#061739" stopOpacity={panelOpacity * 0.4} />
          </linearGradient>

          <linearGradient id={`gold-line-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFB758" stopOpacity={0} />
            <stop offset="30%" stopColor="#DFB758" stopOpacity={goldOpacity} />
            <stop offset="70%" stopColor="#F5E2B3" stopOpacity={goldOpacity * 0.9} />
            <stop offset="100%" stopColor="#DFB758" stopOpacity={0} />
          </linearGradient>

          <linearGradient id={`gold-vert-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DFB758" stopOpacity={0} />
            <stop offset="35%" stopColor="#DFB758" stopOpacity={goldOpacity * 0.8} />
            <stop offset="65%" stopColor="#F5E2B3" stopOpacity={goldOpacity * 0.7} />
            <stop offset="100%" stopColor="#DFB758" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* PANEL GROUP A — Right cluster (tall architectural towers) */}
        <polygon
          points="980,0 1060,0 1010,560 930,560"
          fill={`url(#panel-fill-${variant})`}
        />
        <polygon
          points="1060,0 1130,0 1080,560 1010,560"
          fill={`url(#panel-fill-${variant})`}
          opacity={0.7}
        />
        <polygon
          points="1180,0 1260,0 1215,560 1135,560"
          fill={`url(#panel-fill-${variant})`}
          opacity={0.55}
        />
        <polygon
          points="1280,0 1340,0 1310,560 1250,560"
          fill={`url(#panel-fill-${variant})`}
          opacity={0.35}
        />

        {/* PANEL GROUP B — Left side diagonal */}
        <polygon
          points="0,80 120,0 90,560 0,560"
          fill={`url(#panel-fill-${variant})`}
          opacity={0.5}
        />
        <polygon
          points="100,0 160,0 130,400 70,400"
          fill={`url(#panel-fill-${variant})`}
          opacity={0.3}
        />

        {/* GOLD ACCENT LINES — Diagonal dividers matching reference */}
        <line x1="980" y1="0" x2="930" y2="560"
          stroke={`url(#gold-vert-${variant})`} strokeWidth="1.2" />
        <line x1="1060" y1="0" x2="1010" y2="560"
          stroke={`url(#gold-vert-${variant})`} strokeWidth="0.8" opacity={0.7} />
        <line x1="1260" y1="0" x2="1215" y2="560"
          stroke={`url(#gold-vert-${variant})`} strokeWidth="0.7" opacity={0.5} />
        <line x1="120" y1="0" x2="90" y2="560"
          stroke={`url(#gold-vert-${variant})`} strokeWidth="0.9" opacity={0.55} />

        {/* Horizontal gold rule — bottom divider strip */}
        <line x1="0" y1="530" x2="1440" y2="530"
          stroke={`url(#gold-line-${variant})`} strokeWidth="0.8" />
      </svg>

      {/* ── AMBIENT RADIAL GLOWS ── */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#14588B]/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 w-[480px] h-[380px] bg-[#DFB758]/[0.08] rounded-full blur-[130px]" />
      {!isFooter && (
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0A2457]/30 rounded-full blur-[100px]" />
      )}
    </div>
  );
}
