// src/pages/careers/EmployeeGrowthAndFutureResposibilities.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { employeeGrowthAndFutureResposibilitiesData } from '../../data/recruitment_rules_policies/employeeGrowthAndFutureResposibilitiesData';

/* -------------------------------- Motion -------------------------------- */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* -------------------------------- Palette -------------------------------- */
const color = {
  cyan25:"#F5FEFF", cyan50:"#ECFEFF", cyan100:"#CFFAFE", cyan200:"#A5F3FC", cyan300:"#67E8F9", cyan500:"#06B6D4",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber500: "#F59E0B",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185", rose600: "#E11D48",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title. Sections are imported.
const data = {
  title: "Employee Growth & Future Opportunities",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Senior CRCCF leader presenting a certificate/award to a junior employee, showing growth. */
const VideoHeroGrowth = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Employee Growth and Opportunities Hero";
  const desc =
    "A senior leader presents an award to a junior member, symbolizing growth. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="grTitle grDesc" className="w-full h-auto">
        <title id="grTitle">{title}</title>
        <desc id="grDesc">{desc}</desc>
        <defs>
          <linearGradient id="grGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.emerald100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.amber100} />
          </linearGradient>
          <filter id="grSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="grStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#grSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#grGrad)" />
        </g>
        <g clipPath="url(#grStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#grGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {GrowthOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="grBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.emerald100} />
           <stop offset="55%" stopColor={color.cyan100} />
           <stop offset="100%" stopColor={color.amber100} />
        </linearGradient>
        <filter id="grSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="grStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#grSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#grBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#grStage2)">
        {poster ? (
          <image href={poster} x="0" y="0" width="1000" height="460" preserveAspectRatio="xMidYMid slice" opacity="0.86" />
        ) : null}
        <foreignObject x="0" y="0" width="1000" height="460">
          <video
            src={src}
            poster={poster || undefined}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            crossOrigin="anonymous"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </foreignObject>
      </g>

      {GrowthOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: growth/award scene ----------------------- */
function GrowthOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />

      {/* Senior Leader Figure */}
      <g transform="translate(40, 140)">
        <rect x="0" y="100" width="80" height="150" rx="15" fill={color.indigo800} /> {/* Suit */}
        <circle cx="40" cy="65" r="35" fill="#A0522D" /> {/* Head */}
        <rect x="10" y="100" width="60" height="15" rx="5" fill={color.white} /> {/* Shirt */}
      </g>

      {/* Junior Employee Figure */}
      <g transform="translate(200, 190)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.cyan500} /> {/* Shirt */}
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" /> {/* Head */}
      </g>

      {/* Certificate */}
      <g transform="translate(110, 220)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill={color.white} stroke={color.slate300} transform="rotate(-10)" />
        <circle cx="70" cy="40" r="15" fill={color.amber500} transform="rotate(-10)" />
        <rect x="10" y="10" width="50" height="4" rx="2" fill={color.slate400} transform="rotate(-10)" />
      </g>

      {/* CRCCF Logo on Wall */}
      <g transform="translate(150, 80)">
         <circle cx="0" cy="0" r="30" fill={color.white} stroke={color.indigo600} strokeWidth="4" />
         <text x="0" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.indigo600} textAnchor="middle">C</text>
         <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" transform-origin="150 80" />
      </g>
    </g>
  );
}

/* ---------------------------- SVG helpers & utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs> <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"> {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)} </linearGradient> </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke = color.slate200, sw = 1, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs> <filter id={id} x="-30%" y="-30%" width="160%" height="160%"> <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" /> <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} /> </filter> </defs>
);

/* ------------------------ Complex section SVG illustrations ------------------------ */
// Using the SVGs from the previous Employee Growth page

// 1. Empowering Tomorrow’s Cyber Leaders
const Sec1_EmpoweringLeadersSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Empowering Tomorrow’s Cyber Leaders" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> </g>
    <g transform="translate(180, 80)"> <path d="M0 220 C 150 220, 200 50, 350 50 S 500 220, 550 220" stroke={color.slate300} strokeWidth="12" fill="none" /> <path d="M0 220 C 150 220, 200 50, 350 50" stroke={color.emerald600} strokeWidth="12" fill="none" strokeDasharray="350" strokeDashoffset="350"> <animate attributeName="stroke-dashoffset" values="350;0" dur="2.5s" repeatCount="indefinite" /> </path> <g transform="translate(350, 10)"> <circle cx="0" cy="0" r="30" fill={color.white} stroke={color.amber500} strokeWidth="4" /> <polygon points="0 -15, 15 0, 0 15, -15 0" fill={color.amber500} /> </g> </g>
  </svg>
);
// 2. Professional Growth Beyond Employment
const Sec2_ProfGrowthSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Professional Growth Beyond Employment" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(200, 120)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="100" rx="10" fill={color.indigo600} /> <rect x="-100" y="140" width="200" height="40" rx="10" fill={color.slate300} /> </g>
    <g transform="translate(100, 80)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <path d="M-15 0 L 15 0 L 0 20 Z M -15 25 H 15" stroke={color.indigo600} strokeWidth="5" /> <animateTransform attributeName="transform" type="translate" values="100 80; 100 85; 100 80" dur="1.8s" repeatCount="indefinite" /> </g>
    <g transform="translate(500, 80)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <path d="M-15 -10 L 0 5 L -15 20 M 0 -10 L 15 5 L 0 20" stroke={color.cyan500} strokeWidth="5" fill="none" /> <animateTransform attributeName="transform" type="translate" values="500 80; 500 85; 500 80" dur="2s" repeatCount="indefinite" /> </g>
    <g transform="translate(100, 250)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <circle cx="0" cy="0" r="15" fill="none" stroke={color.amber500} strokeWidth="4" /> <line x1="12" y1="12" x2="25" y2="25" stroke={color.amber500} strokeWidth="6" /> </g>
    <g transform="translate(500, 250)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <path d="M-20 -15 L 20 -15 L 0 -30 Z M -20 -10 H 20 V 20 H -20 Z" fill={color.emerald600} /> </g>
  </svg>
);
// 3. Skill Development, Training & Mentorship
const Sec3_SkillDevSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Skill Development, Training & Mentorship" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(120, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <circle cx="120" cy="50" r="30" fill="#F5D0A6" /> <rect x="100" y="80" width="40" height="80" rx="10" fill={color.cyan500} /> </g>
    <g transform="translate(350, 100)"> <path d="M0 150 C 100 50, 200 50, 300 150" stroke={color.slate700} strokeWidth="10" fill="none" /> <line x1="50" y1="130" x2="50" y2="150" stroke={color.slate700} strokeWidth="6" /> <line x1="150" y1="80" x2="150" y2="150" stroke={color.slate700} strokeWidth="6" /> <line x1="250" y1="130" x2="250" y2="150" stroke={color.slate700} strokeWidth="6" /> <text x="0" y="180" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Education</text> <text x="250" y="180" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Practice</text> </g>
  </svg>
);
// 4. Recognized Certification & Professional Credibility
const Sec4_CertificationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Recognized Certification & Credibility" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="600" h="280" r="15" stroke={color.amber500} sw="4" /> <text x="300" y="80" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill={color.slate700} textAnchor="middle">Certificate of Contribution</text> <text x="300" y="120" fontFamily="sans-serif" fontSize="20" fill={color.slate700} textAnchor="middle">This verifies that</text> <rect x="200" y="140" width="200" height="10" rx="5" fill={color.indigo600} /> <text x="300" y="180" fontFamily="sans-serif" fontSize="20" fill={color.slate700} textAnchor="middle">has demonstrated experience in</text> <text x="300" y="210" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.slate700} textAnchor="middle">Public Cyber Awareness</text> <g transform="translate(100, 200)"> <circle cx="0" cy="0" r="40" fill={color.indigo100} stroke={color.indigo600} strokeWidth="3" /> <text x="0" y="5" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text> <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" transform-origin="100 200" /> </g> <g transform="translate(500, 200)"> <circle cx="0" cy="0" r="40" fill={color.emerald100} stroke={color.emerald600} strokeWidth="3" /> <path d="M-15 -10 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none" /> </g> </g>
  </svg>
);
// 5. Becoming a Cybercrime Protector
const Sec5_ProtectorSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Becoming a Cybercrime Protector" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(200, 80)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo600} /> <g transform="translate(100, 50)"> <path d="M0 -30l80 30v40c0 50-32 85-80 105-48-20-80-55-80-105v-40l80-30z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="5" /> <text x="0" y="45" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.emerald600} textAnchor="middle">CRCCF</text> <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" transform-origin="100 50" /> </g> </g>
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="30" fill={color.slate300} /> <rect x="-20" y="30" width="40" height="60" rx="8" fill={color.slate300} /> <circle cx="80" cy="0" r="30" fill={color.slate300} /> <rect x="60" y="30" width="40" height="60" rx="8" fill={color.slate300} /> </g>
  </svg>
);
// 6. Exposure to Legal and Technical Frameworks
const Sec6_LegalTechSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal and Technical Frameworks" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <line x1="400" y1="40" x2="400" y2="340" stroke={color.slate700} strokeWidth="6" strokeDasharray="10 5" />
    <g transform="translate(150, 100)"> <text x="0" y="0" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo800} textAnchor="middle">LEGAL</text> <g transform="translate(0, 50)"> <rect x="-80" y="0" width="160" height="30" rx="8" fill={color.amber500} /> <rect x="-20" y="-60" width="40" height="80" rx="8" fill={color.amber500} /> </g> <text x="0" y="150" fontFamily="sans-serif" fontSize="20" fill={color.slate700} textAnchor="middle">IT Act</text> </g>
    <g transform="translate(600, 100)"> <text x="0" y="0" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.emerald600} textAnchor="middle">TECHNICAL</text> <g transform="translate(0, 50)"> <path d="M-60 0 L -40 20 L -60 40 M -20 0 L 0 20 L -20 40" stroke={color.emerald600} strokeWidth="6" fill="none" /> <text x="30" y="30" fontFamily="monospace" fontSize="24" fill={color.emerald600}>10110</text> </g> <g transform="translate(0, 120)"> <rect x="-20" y="0" width="40" height="30" rx="8" fill={color.slate500} /> <path d="M0 -20 C 15 -20, 15 0, 0 0 S -15 -20, 0 -20 Z" stroke={color.slate700} strokeWidth="6" fill="none" /> </g> </g>
  </svg>
);
// 7. Ethical Leadership and Social Impact
const Sec7_EthicalLeadershipSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethical Leadership & Social Impact" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 120)"> <polygon points="0 180, 120 180, 100 50, 20 50" fill={color.amber500} /> <circle cx="60" cy="0" r="40" fill="#A0522D" /> <rect x="30" y="40" width="60" height="80" rx="10" fill={color.indigo800} /> </g>
    <g transform="translate(350, 80)"> <text x="0" y="20" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.slate700}>Social Impact</text> <path d="M0 220 L 80 150 L 160 170 L 240 100 L 320 80" stroke={color.emerald600} strokeWidth="8" fill="none" /> <path d="M320 80 L 300 100 M 320 80 L 300 80" stroke={color.emerald600} strokeWidth="8" /> <line x1="0" y1="220" x2="320" y2="220" stroke={color.slate300} strokeWidth="2" /> <path d="M0 220 L 80 150 L 160 170" stroke={color.white} strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" strokeDasharray="300" strokeDashoffset="300"> <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" /> </path> </g>
  </svg>
);
// 8. Vision for the Future
const Sec8_VisionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Vision for the Future" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> </g>
    <g transform="translate(350, 100)"> <rect x="0" y="100" width="80" height="150" rx="5" fill={color.slate300} /> <rect x="100" y="50" width="100" height="200" rx="5" fill={color.cyan100} /> <rect x="220" y="120" width="90" height="130" rx="5" fill={color.slate300} /> <text x="150" y="30" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.slate700} textAnchor="middle">Secure India</text> <g transform="translate(300, 40)"> <circle cx="0" cy="0" r="30" fill={color.amber500}> <animate attributeName="r" values="30;32;30" dur="2s" repeatCount="indefinite" /> </circle> </g> </g>
  </svg>
);
// 9. Disclaimer
const Sec9_DisclaimerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Disclaimer" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12" stroke={color.slate400} sw="2" /> <text x="20" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.slate700}>Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <rect x="20" y="100" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.white} textAnchor="middle">Section 8</text> <text x="260" y="190" fontFamily="sans-serif" fontSize="12" fill={color.white} textAnchor="middle">Compliant</text> </g>
  </svg>
);

/* ------------------------------ Section block (Height Fixed) ------------------------------ */
const SectionBlock = ({ id, title, content, tagline, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const paragraphs = content.split("\n").map((p, i) => (
    <p key={i} className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">{p}</p>
  ));

  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      {/* Grid now uses md:items-stretch */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 md:items-stretch" // Changed items-start to items-stretch
      >
        {/* SVG Column: Added flex flex-col */}
        <motion.div style={{ y }} className={`relative min-w-0 flex flex-col ${reverse ? "md:order-2" : "md:order-1"}`}>
          {/* Background Blur */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          {/* Inner Container: Added flex-grow and flex for centering */}
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex-grow flex items-center justify-center">
             {/* SVG Container: Added h-full */}
            <div className="w-full h-full">
              {/* SVG: Added h-full and object-contain */}
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0 py-2`}> {/* Added slight py for alignment */}
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
          {/* Render tagline if it exists */}
          {tagline && (
             <p className="mt-3 text-sm font-medium text-cyan-700 italic">{tagline}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};


/* ---------------------------------- Page ---------------------------------- */
export default function EmployeeGrowthAndFutureResposibilities() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (9 defined)
  const svgMap = {
    'sec1-empowering-tomorrows-cyber-leaders': Sec1_EmpoweringLeadersSVG,
    'sec2-professional-growth-beyond-employment': Sec2_ProfGrowthSVG,
    'sec3-skill-development-training-and-mentorship': Sec3_SkillDevSVG,
    'sec4-recognized-certification-and-professional-credibility': Sec4_CertificationSVG,
    'sec5-becoming-a-cybercrime-protector': Sec5_ProtectorSVG,
    'sec6-exposure-to-legal-and-technical-frameworks': Sec6_LegalTechSVG,
    'sec7-ethical-leadership-and-social-impact': Sec7_EthicalLeadershipSVG,
    'sec8-vision-for-the-future': Sec8_VisionSVG,
    'sec9-disclaimer': Sec9_DisclaimerSVG,
  };


  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
    >
      {/* Breadcrumb */}
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/recruitment-process/recruitment-rules-policies" className="hover:underline">recruitment</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Employee Growth</span> {/* Updated breadcrumb text */}
      </motion.nav>

      {/* Hero with Video-SVG (growth scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Growth", "Opportunities", "Mentorship", "Careers"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroGrowth // Corrected Hero component name
                src="/assets/video/employee-growth-hero.mp4"
                poster="/assets/video/employee-growth-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {employeeGrowthAndFutureResposibilitiesData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_EmpoweringLeadersSVG;
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              content={sec.content}
              tagline={sec.tagline} // Pass tagline to SectionBlock
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>
      
      {/* The disclaimer is now section 9 from the data, rendered by the map */}

    </motion.section>
  );
}