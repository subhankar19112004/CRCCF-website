// src/pages/careers/RecruitmentPolicyAndEmploymentOverView.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import using the variable name from the data file and the path from your provided code
import { recruitmentPolicyAndEmploymentOverviewData } from '../../data/recruitment_rules_policies/RecruitmentPolicyAndEmploymentOverViewData';

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
  title: "Recruitment Policy & Employment Overview",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Professional CRCCF office, HR manager welcomes/interviews a new candidate. */
const VideoHeroRecruitment = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Recruitment and Policy Hero";
  const desc =
    "An HR manager and a candidate in a professional office setting, with CRCCF branding. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="rcTitle rcDesc" className="w-full h-auto">
        <title id="rcTitle">{title}</title>
        <desc id="rcDesc">{desc}</desc>
        <defs>
          <linearGradient id="rcGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="rcSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="rcStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#rcSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#rcGrad)" />
        </g>
        <g clipPath="url(#rcStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#rcGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {RecruitmentOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="rcBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="55%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="rcSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="rcStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#rcSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#rcBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#rcStage2)">
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

      {RecruitmentOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: recruitment scene ----------------------- */
function RecruitmentOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />

      {/* Office Plant */}
      <g transform="translate(280, 200)">
        <rect x="0" y="0" width="60" height="80" rx="10" fill={color.amber500} />
        <path d="M30 0 C 0 0, 0 80, 0 80" stroke={color.emerald600} strokeWidth="6" fill="none" />
        <path d="M30 0 C 60 0, 60 80, 60 80" stroke={color.emerald600} strokeWidth="6" fill="none" />
      </g>
      
      {/* HR Manager Figure */}
      <g transform="translate(40, 140)">
        <rect x="0" y="100" width="80" height="150" rx="15" fill={color.indigo800} /> {/* Suit */}
        <circle cx="40" cy="65" r="35" fill="#A0522D" /> {/* Head */}
        <rect x="10" y="100" width="60" height="15" rx="5" fill={color.white} /> {/* Shirt */}
      </g>
      
      {/* Candidate Figure */}
      <g transform="translate(200, 190)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.cyan500} /> {/* Shirt */}
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" /> {/* Head */}
      </g>

      {/* Desk */}
      <g transform="translate(0, 320)">
        <rect x="0" y="0" width="340" height="80" rx="10" fill={color.slate300} stroke={color.slate400} />
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
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke = color.slate200, sw = 1, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* ------------------------ Complex section SVG illustrations ------------------------ */
// (Keep the 15 SVG components exactly as they were defined before)

// 1. Introduction and Objective
const Sec1_IntroObjectiveSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Introduction and Objective" className="w-full h-full" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(120, 80)"> <polygon points="0 250, 300 250, 300 80, 150 0, 0 80" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="50" y="100" width="200" height="150" fill={color.indigo100} /> <rect x="70" y="120" width="160" height="130" fill={color.white} /> <text x="150" y="60" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text> </g>
    <g transform="translate(480, 100)" filter="url(#glowSec1)"> <circle cx="0" cy="0" r="60" fill={color.emerald100} stroke={color.emerald600} strokeWidth="4" /> <text x="0" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.emerald600} textAnchor="middle">Section 8</text> <text x="0" y="30" fontFamily="sans-serif" fontSize="14" fill={color.emerald600} textAnchor="middle">Compliant</text> <animateTransform attributeName="transform" type="scale" values="1;1.03;1" dur="2s" repeatCount="indefinite" transform-origin="480 100" /> </g>
    <g transform="translate(620, 200)" filter="url(#glowSec1)"> <circle cx="0" cy="0" r="50" fill={color.amber100} stroke={color.amber500} strokeWidth="4" /> <text x="0" y="5" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color.amber500} textAnchor="middle">MCA/ROC</text> <text x="0" y="25" fontFamily="sans-serif" fontSize="12" fill={color.amber500} textAnchor="middle">Guided</text> <animateTransform attributeName="transform" type="scale" values="1;1.03;1" dur="2s" delay="0.5s" repeatCount="indefinite" transform-origin="620 200" /> </g>
  </svg>
);
// 2. Scope and Applicability
const Sec2_ScopeApplicabilitySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" className="w-full h-full" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" stroke={color.slate300} sw="2" /> <text x="30" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo800}>Scope</text> <text x="30" y="100" fontFamily="sans-serif" fontSize="20">• Employee</text> <text x="30" y="140" fontFamily="sans-serif" fontSize="20">• Intern</text> <text x="30" y="180" fontFamily="sans-serif" fontSize="20">• Volunteer</text> <text x="30" y="220" fontFamily="sans-serif" fontSize="20">• All Roles</text> </g>
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="100" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="10" /> <line x1="70" y1="70" x2="140" y2="140" stroke={color.cyan500} strokeWidth="15" /> <animateTransform attributeName="transform" type="translate" values="500 120; 490 110; 500 120" dur="3s" repeatCount="indefinite" /> </g>
  </svg>
);
// 3. Equal Opportunity and Non-Discrimination
const Sec3_EqualOpportunitySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Equal Opportunity & Inclusion" className="w-full h-full" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(100, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /><rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> <circle cx="120" cy="0" r="40" fill="#A0522D" /><rect x="90" y="40" width="60" height="120" rx="10" fill={color.cyan500} /> <circle cx="240" cy="40" r="40" fill="#F5D0A6" /><rect x="210" y="80" width="60" height="80" rx="10" fill={color.emerald600} /><circle cx="210" cy="180" r="30" fill="none" stroke={color.slate700} strokeWidth="6" /><circle cx="270" cy="180" r="30" fill="none" stroke={color.slate700} strokeWidth="6" /> <circle cx="360" cy="0" r="40" fill="#A0522D" /><rect x="330" y="40" width="60" height="120" rx="10" fill={color.rose400} /> <circle cx="480" cy="0" r="40" fill="#F5D0A6" /><rect x="450" y="40" width="60" height="120" rx="10" fill={color.amber500} /> </g>
    <g transform="translate(620, 150)"> <path d="M0 0 L 30 30 L 60 0 L 80 20 L 40 60 L 20 40 Z" fill={color.indigo300} /> <path d="M0 30 L 30 0 L 60 30 L 80 10 L 40 -30 L 20 -10 Z" fill={color.emerald300} /> <animateTransform attributeName="transform" type="translate" values="620 150; 620 145; 620 150" dur="1s" repeatCount="indefinite" /> </g>
  </svg>
);
// 4. Official Communication Channels and Authenticity
const Sec4_CommunicationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Official Communication Channels" className="w-full h-full" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 100)"> <rect x="0" y="0" width="150" height="180" rx="10" fill={color.slate900} /> <rect x="5" y="5" width="140" height="170" rx="5" fill={color.white} /> <rect x="-10" y="180" width="170" height="15" rx="8" fill={color.slate400} /> <text x="75" y="80" textAnchor="middle">Portal</text> </g>
    <g transform="translate(300, 100)"> <rect x="0" y="0" width="180" height="120" rx="10" fill={color.white} stroke={color.slate300} /> <path d="M0 0 L 90 60 L 180 0" stroke={color.indigo600} strokeWidth="4" fill="none" /> <text x="90" y="150" textAnchor="middle">Email</text> </g>
    <g transform="translate(550, 100)"> <rect x="0" y="0" width="80" height="160" rx="15" fill={color.slate700} /> <rect x="5" y="5" width="70" height="150" rx="10" fill={color.white} /> <rect x="20" y="20" width="40" height="10" rx="5" fill={color.slate200} /> <text x="40" y="190" textAnchor="middle">SMS/WA</text> </g>
  </svg>
);
// 5. Eligibility, Job Description and Candidate Responsibility
const Sec5_EligibilitySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Eligibility, JD and Responsibility" className="w-full h-full" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <text x="30" y="50" fontSize="20" fontWeight="bold">Job Description</text> <rect x="30" y="70" width="240" height="8" rx="4" fill={color.slate400} /> </g>
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /><rect x="-30" y="40" width="60" height="100" rx="10" fill={color.indigo600} /> <path d="M30 0 l20 20 40 -40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
  </svg>
);
// 6. Online Application Process and Digital Consent
const Sec6_OnlineAppProcessSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Online Application and Consent" className="w-full h-full" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(150, 60)"> <rect x="0" y="0" width="500" height="280" rx="15" fill={color.slate900} /> <rect x="10" y="10" width="480" height="260" rx="8" fill={color.white} /> <rect x="-10" y="280" width="520" height="15" rx="8" fill={color.slate400} /> <rect x="180" y="200" width="140" height="40" rx="8" fill={color.indigo600} /> <text x="250" y="225" fill="white" fontWeight="bold" textAnchor="middle">SUBMIT</text> <rect x="50" y="150" width="20" height="20" rx="4" fill="white" stroke={color.slate400} /> <path d="M55 160 l5 5 10 -10" stroke={color.emerald600} strokeWidth="3" fill="none" /> <text x="80" y="165">I Agree to Terms (Consent)</text> </g>
  </svg>
);
// 7. Document Upload Standards and Verification Requirements
const Sec7_DocUploadSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Document Upload and Verification" className="w-full h-full" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="180" h="220" r="12" transform="rotate(-5)" /> <text x="20" y="50">ID Proof</text> <Card x="150" y="40" w="180" h="220" r="12" fill={color.indigo100} transform="rotate(3)" /> <text x="170" y="90">Certificate</text> </g>
    <g transform="translate(500, 120)"> <path d="M0 0 C -50 0, -50 80, 0 80 C 50 80, 50 0, 0 0 M -30 40 C -70 40, -70 100, -30 100 H 70 C 110 100, 110 40, 70 40" fill={color.cyan100} stroke={color.cyan500} strokeWidth="4"/> <path d="M0 20 L 0 80 M -20 50 H 20" stroke={color.cyan500} strokeWidth="6"/> <animateTransform attributeName="transform" type="translate" values="500 120; 500 115; 500 120" dur="1.5s" repeatCount="indefinite" /> </g>
  </svg>
);
// 8. Photograph and Signature Guidelines
const Sec8_PhotoSigSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Photograph and Signature" className="w-full h-full" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="200" height="250" rx="10" fill={color.white} stroke={color.slate300} /> <circle cx="100" cy="100" r="60" fill={color.slate200}/> <rect x="40" y="160" width="120" height="70" rx="10" fill={color.slate200}/> <text x="100" y="230" textAnchor="middle">Photo</text> </g>
    <g transform="translate(450, 150)"> <rect x="0" y="0" width="250" height="100" rx="10" fill={color.white} stroke={color.slate300} /> <path d="M20 70 Q 80 40, 140 70 T 230 70" stroke={color.slate700} strokeWidth="4" fill="none"/> <text x="125" y="90" textAnchor="middle">Signature</text> </g>
  </svg>
);
// 9. Payment and Fee Submission Policy
const Sec9_PaymentFeeSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Payment and Fee Policy" className="w-full h-full" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(150, 100)"> <rect x="0" y="0" width="150" height="100" rx="10" fill={color.white} stroke={color.emerald600} strokeWidth="4" /> <text x="75" y="40" fontFamily="sans-serif" fontSize="14" fill={color.slate700} textAnchor="middle">Official</text> <text x="75" y="60" fontFamily="sans-serif" fontSize="14" fill={color.slate700} textAnchor="middle">Gateway</text> <path d="M50 70 l20 20 30-30" stroke={color.emerald600} strokeWidth="6" fill="none" /> </g>
    <g transform="translate(400, 100)"> <circle cx="0" cy="0" r="60" fill={color.emerald600} /> <text x="0" y="15" fontFamily="sans-serif" fontSize="50" fontWeight="bold" fill={color.white} textAnchor="middle">₹</text> </g>
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="50" fill={color.rose100} stroke={color.rose600} strokeWidth="4" /> <line x1="-30" y1="-30" x2="30" y2="30" stroke={color.rose600} strokeWidth="6" /> <line x1="-30" y1="30" x2="30" y2="-30" stroke={color.rose600} strokeWidth="6" /> <text x="0" y="70" textAnchor="middle" fill={color.rose600}>No Cash</text> </g>
  </svg>
);
// 10. Acknowledgement and Registration Number
const Sec10_AcknowledgeRegSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Acknowledgement and Registration" className="w-full h-full" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="500" height="200" rx="15" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="0" y="0" width="500" height="40" rx="15" fill={color.indigo100} /> <text x="20" y="28" fill={color.indigo800}>Status: Submitted Successfully</text> <text x="20" y="80">Reg No: CRCCF-REG-12345</text> <text x="20" y="110">Ref Code: XYZABC</text> <path d="M400 100 l20 20 40 -40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
  </svg>
);
// 11. Screening and Shortlisting Process
const Sec11_ScreeningShortlistSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Screening and Shortlisting" className="w-full h-full" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    <g transform="translate(150, 100)"> <Card x="20" y="20" w="400" h="200" r="12" fill={color.slate200} transform="rotate(-3)" /> <Card x="10" y="10" w="400" h="200" r="12" fill={color.slate200} transform="rotate(2)" /> <Card x="0" y="0" w="400" h="200" r="12" fill={color.white} /> <text x="20" y="40" fontFamily="sans-serif" fontSize="18" fill={color.slate700}>Applicant: John Doe</text> <rect x="20" y="60" width="360" height="6" rx="3" fill={color.slate400} /> </g>
    <g transform="translate(300, 50)"> <circle cx="0" cy="0" r="100" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="10" /> <line x1="70" y1="70" x2="140" y2="140" stroke={color.cyan500} strokeWidth="15" /> <text x="-50" y="10" fontFamily="sans-serif" fontSize="18" fill={color.cyan500}>Shortlisted</text> <animateTransform attributeName="transform" type="translate" values="300 50; 290 40; 300 50" dur="3s" repeatCount="indefinite" /> </g>
  </svg>
);
// 12. Assessment, Tests, and Interview Rules
const Sec12_AssessmentInterviewSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Assessment, Tests, Interview" className="w-full h-full" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />
    <path d="M50 190 H 750" stroke={color.slate300} strokeWidth="8" />
    <g transform="translate(80, 160)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="-20" y="-15" width="40" height="30" rx="4" fill={color.indigo100} /> <line x1="-15" y1="-5" x2="15" y2="-5" stroke={color.indigo600} strokeWidth="2" /> <line x1="-15" y1="5" x2="15" y2="5" stroke={color.indigo600} strokeWidth="2" /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700} textAnchor="middle">Test</text> </g>
    <g transform="translate(270, 160)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <path d="M-15 0 l10 10 20-20" stroke={color.emerald600} strokeWidth="6" fill="none" /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700} textAnchor="middle">Skill Assess</text> </g>
    <g transform="translate(460, 160)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <circle cx="-15" cy="-5" r="8" fill={color.cyan500} /> <rect x="-20" y="5" width="10" height="15" rx="3" fill={color.cyan500} /> <circle cx="15" cy="-5" r="8" fill={color.cyan500} /> <rect x="10" y="5" width="10" height="15" rx="3" fill={color.cyan500} /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700} textAnchor="middle">Interview</text> </g>
    <g transform="translate(650, 160)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="-15" y="-20" width="30" height="40" rx="4" fill={color.indigo600} /> <path d="M-5 -5 l5 5 8-8" stroke={color.white} strokeWidth="3" fill="none" /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700} textAnchor="middle">GD</text> </g>
  </svg>
);
// 13. Background Verification and Medical Check
const Sec13_BackgroundMedicalSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Background and Medical Check" className="w-full h-full" {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
    <g transform="translate(150, 80)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo100} /> <g transform="translate(80, 20)"> <circle cx="0" cy="0" r="60" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="6" /> <line x1="45" y1="45" x2="90" y2="90" stroke={color.cyan500} strokeWidth="8" /> </g> </g>
    <g transform="translate(500, 100)"> <rect x="0" y="0" width="150" height="180" rx="10" fill={color.white} stroke={color.slate300} /> <path d="M75 30 V 150 M 40 90 H 110" stroke={color.rose600} strokeWidth="8" /> <text x="75" y="170" textAnchor="middle">Medical</text> </g>
  </svg>
);
// 14. Probation, Training, and Confirmation
const Sec14_ProbationConfirmSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Probation, Training, Confirmation" className="w-full h-full" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <path d="M100 190 H 700" stroke={color.slate300} strokeWidth="8" /> <circle cx="100" cy="190" r="15" fill={color.amber500} /> <text x="100" y="220" textAnchor="middle">Probation</text> <circle cx="400" cy="190" r="15" fill={color.cyan500} /> <text x="400" y="220" textAnchor="middle">Training</text> <circle cx="700" cy="190" r="15" fill={color.emerald600} /> <text x="700" y="220" textAnchor="middle">Confirm</text>
    <path d="M100 190 L 700 190" stroke={color.emerald600} strokeWidth="8" strokeDasharray="600" strokeDashoffset="600"> <animate attributeName="stroke-dashoffset" values="600;0" dur="3s" repeatCount="indefinite" /> </path>
  </svg>
);
// 15. Salary Structure and Employee Benefits
const Sec15_SalaryBenefitsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Salary and Benefits" className="w-full h-full" {...props}>
    <BG id="gSec15" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec15)" />
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="80" fill={color.emerald600} /> <text x="0" y="20" fontSize="80" fontWeight="bold" fill={color.white} textAnchor="middle">₹</text> </g>
    <g transform="translate(450, 100)"> <Card x="0" y="0" w="200" h="80" r="10" fill={color.indigo100} /> <text x="100" y="50" textAnchor="middle" fill={color.indigo800}>EPF</text> <Card x="0" y="100" w="200" h="80" r="10" fill={color.cyan100} /> <text x="100" y="150" textAnchor="middle" fill={color.cyan800}>ESI</text> </g>
  </svg>
);


/* ------------------------------ Section block ------------------------------ */
// Updated SectionBlock to handle tagline prop
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
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start"
      >
        {/* Illustration */}
        <motion.div style={{ y }} className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
              <SVG />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
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
export default function RecruitmentPolicyAndEmploymentOverView() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (15 defined + reuse logic)
  const svgComponents = [
    Sec1_IntroObjectiveSVG, Sec2_ScopeApplicabilitySVG, Sec3_EqualOpportunitySVG, Sec4_CommunicationSVG, Sec5_EligibilitySVG,
    Sec6_OnlineAppProcessSVG, Sec7_DocUploadSVG, Sec8_PhotoSigSVG, Sec9_PaymentFeeSVG, Sec10_AcknowledgeRegSVG,
    Sec11_ScreeningShortlistSVG, Sec12_AssessmentInterviewSVG, Sec13_BackgroundMedicalSVG, Sec14_ProbationConfirmSVG, Sec15_SalaryBenefitsSVG
  ];

  // Create the full svgMap for all 28 sections, reusing the 15 SVGs
  const svgMap = {};
  recruitmentPolicyAndEmploymentOverviewData.forEach((sec, idx) => {
      svgMap[sec.id] = svgComponents[idx % svgComponents.length]; // Cycle through the 15 SVGs
  });


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
        <span className="text-gray-700" aria-current="page">Recruitment Policy</span>
      </motion.nav>

      {/* Hero with Video-SVG (recruitment scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Careers", "Policy", "Ethics", "Join Us"].map((pill) => (
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
              <VideoHeroRecruitment
                src="/assets/video/recruitment-hero.mp4"
                poster="/assets/video/recruitment-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {recruitmentPolicyAndEmploymentOverviewData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_IntroObjectiveSVG;
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
      
      {/* The disclaimer is now section 28 from the data, rendered by the map */}

    </motion.section>
  );
}