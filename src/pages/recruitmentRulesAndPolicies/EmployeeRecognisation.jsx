// src/pages/careers/EmployeeRecognisation.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path and variable name as per your stub and data file
import { employeeRecognisationData } from '../../data/recruitment_rules_policies/employeeRecognisationData';

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
  title: "Employee Recognition & Awards Policy", // Using a more descriptive title based on data
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Award ceremony feel - certificate/medal being presented or highlighted. */
const VideoHeroRecognition = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Employee Recognition Hero";
  const desc =
    "Stylized award or certificate presentation, symbolizing recognition. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="recTitle recDesc" className="w-full h-auto">
        <title id="recTitle">{title}</title>
        <desc id="recDesc">{desc}</desc>
        <defs>
          <linearGradient id="recGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.amber100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="recSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="recStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#recSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#recGrad)" />
        </g>
        <g clipPath="url(#recStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#recGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {RecognitionOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="recBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.amber100} />
           <stop offset="55%" stopColor={color.cyan100} />
           <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="recSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="recStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#recSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#recBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#recStage2)">
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

      {RecognitionOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: recognition scene ----------------------- */
function RecognitionOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Certificate/Award */}
      <g transform="translate(40, 100)">
         <rect x="0" y="0" width="240" height="180" rx="10" fill={color.white} stroke={color.slate300}/>
         <circle cx="120" cy="70" r="30" fill={color.amber500}/>
         <polygon points="120 40, 130 65, 155 65, 135 80, 145 105, 120 90, 95 105, 105 80, 85 65, 110 65" fill={color.amber100}/>
         <text x="120" y="130" textAnchor="middle" fontWeight="bold">AWARD</text>
         <rect x="40" y="150" width="160" height="8" rx="4" fill={color.slate400}/>
         <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" transform-origin="160 190"/>
      </g>
      {/* Hand Presenting (Stylized) */}
      <g transform="translate(140, 300)">
        <path d="M0 0 H 60 L 70 20 L 70 60 H 0 Z" fill={color.amber100} transform="rotate(10)"/>
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

// 1. Purpose and Objective
const Sec1_PurposeObjectiveSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Objective" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Target/Goal */}
    <g transform="translate(200, 190)"> <circle cx="0" cy="0" r="100" fill="white"/> <circle cx="0" cy="0" r="60" fill={color.rose100}/> <circle cx="0" cy="0" r="20" fill={color.rose600}/> </g>
    {/* Certificate/Award Icon */}
    <g transform="translate(450, 100)"> <rect x="0" y="0" width="180" height="140" rx="10" fill={color.white}/> <circle cx="90" cy="50" r="25" fill={color.amber500}/> <polygon points="90 25, 98 45, 118 45, 103 58, 108 78, 90 65, 72 78, 77 58, 62 45, 82 45" fill={color.amber100}/> </g>
  </svg>
);
// 2. Scope and Applicability
const Sec2_ScopeSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" {...props}>
     <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
     <g transform="translate(400, 190)"> <circle cx="0" cy="0" r="50" fill={color.indigo600}/> <text x="0" y="10" fontSize="24" fill="white" textAnchor="middle">C</text> </g>
     <g stroke={color.slate400} strokeWidth="3" fill="none"> <path d="M400 140 V 80 H 200 V 60"/> <path d="M400 140 V 80 H 600 V 60"/> <path d="M400 240 V 300 H 200 V 320"/> <path d="M400 240 V 300 H 600 V 320"/> </g>
     <g transform="translate(180, 20)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Employee</text></g>
     <g transform="translate(580, 20)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Intern</text></g>
     <g transform="translate(180, 300)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Volunteer</text></g>
     <g transform="translate(580, 300)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Partner</text></g>
  </svg>
);
// 3. Principles of Recognition
const Sec3_PrinciplesSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Principles of Recognition" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" /> <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" /> <g transform="translate(50, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} /> </g> <g transform="translate(250, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} /> </g> </g>
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.indigo600}/> <text x="0" y="5" fontSize="16" fontWeight="bold" fill={color.indigo600} textAnchor="middle">Fairness</text> </g>
  </svg>
);
// 4. Types of Recognition & Awards
const Sec4_AwardTypesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Types of Awards" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    {/* Trophy */}
    <g transform="translate(150, 100)"> <rect x="0" y="150" width="100" height="30" rx="5" fill={color.amber500}/> <rect x="30" y="50" width="40" height="100" rx="5" fill={color.amber500}/> <path d="M-20 50 C -50 20, -50 -20, 0 -20" stroke={color.amber500} strokeWidth="10" fill="none"/> <path d="M120 50 C 150 20, 150 -20, 100 -20" stroke={color.amber500} strokeWidth="10" fill="none"/> </g>
    {/* Certificate */}
    <g transform="translate(350, 120)"> <Card x="0" y="0" w="150" h="100" r="8"/> <circle cx="110" cy="70" r="20" fill={color.amber100}/> </g>
    {/* Medal */}
    <g transform="translate(550, 100)"> <circle cx="0" cy="0" r="50" fill={color.slate200}/> <circle cx="0" cy="0" r="40" fill={color.amber500}/> <path d="M-20 -50 L 0 -30 L 20 -50 Z" fill={color.indigo600}/> </g>
  </svg>
);
// 5. Eligibility Criteria
const Sec5_EligibilitySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Eligibility Criteria" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <text x="30" y="50" fontSize="20" fontWeight="bold">Eligibility</text> <text x="30" y="90">✅ Performance</text> <text x="30" y="130">✅ Ethics</text> <text x="30" y="170">✅ Conduct</text> </g>
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /><rect x="-30" y="40" width="60" height="100" rx="10"/> <path d="M30 0 l20 20 40 -40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
  </svg>
);
// 6. Nomination & Selection Process
const Sec6_NominationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Nomination and Selection Process" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    {/* Flowchart */}
    <g fontSize="14" textAnchor="middle"> <rect x="50" y="50" width="100" height="40" rx="20" fill={color.white}/> <text x="100" y="75">Nominate</text> <path d="M100 90 V 120" stroke={color.slate400}/> <rect x="50" y="120" width="100" height="40" rx="5" fill={color.white}/> <text x="100" y="145">Review</text> <path d="M100 160 V 190" stroke={color.slate400}/> <rect x="50" y="190" width="100" height="40" rx="5" fill={color.white}/> <text x="100" y="215">Evaluate</text> <path d="M100 230 V 260" stroke={color.slate400}/> <rect x="50" y="260" width="100" height="40" rx="20" fill={color.emerald100}/> <text x="100" y="285">Approve</text> </g>
    {/* Committee Icon */}
    <g transform="translate(400, 120)"> <circle cx="0" cy="0" r="30"/> <rect x="-20" y="30" width="40" height="60" rx="8"/> <circle cx="80" cy="0" r="30"/> <rect x="60" y="30" width="40" height="60" rx="8"/> <circle cx="160" cy="0" r="30"/> <rect x="140" y="30" width="40" height="60" rx="8"/> </g>
  </svg>
);
// 7. Evaluation Parameters
const Sec7_EvaluationParamsSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Evaluation Parameters" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 60)" fontSize="18"> <text x="0" y="30">✅ Excellence</text> <text x="0" y="70">✅ Ethics</text> <text x="0" y="110">✅ Innovation</text> <text x="0" y="150">✅ Teamwork</text> <text x="0" y="190">✅ Contribution</text> </g>
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <path d="M30 180 L 80 120 L 130 140 L 180 90 L 230 110" stroke={color.emerald600} strokeWidth="5" fill="none"/> <line x1="30" y1="180" x2="230" y2="180" stroke={color.slate300}/> </g>
  </svg>
);
// 8. Award Categories
const Sec8_AwardCategoriesSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Award Categories" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(150, 100)"> <rect x="0" y="150" width="100" height="30" rx="5"/> <rect x="30" y="50" width="40" height="100" rx="5"/> <path d="M-20 50 C -50 20, -50 -20, 0 -20" stroke="black" strokeWidth="10" fill="none"/> <path d="M120 50 C 150 20, 150 -20, 100 -20" stroke="black" strokeWidth="10" fill="none"/> </g>
    <g transform="translate(350, 120)"> <Card x="0" y="0" w="150" h="100" r="8"/> <circle cx="110" cy="70" r="20"/> </g>
    <g transform="translate(550, 100)"> <circle cx="0" cy="0" r="50"/> <circle cx="0" cy="0" r="40"/> <path d="M-20 -50 L 0 -30 L 20 -50 Z"/> </g>
  </svg>
);
// 9. Frequency & Presentation of Awards
const Sec9_FrequencySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Frequency and Presentation" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    {/* Calendar */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15"/> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100}/> <text x="150" y="35" textAnchor="middle" fontWeight="bold">Quarterly/Annual</text> </g>
    {/* Stage/Podium */}
    <g transform="translate(450, 150)"> <polygon points="0 150, 250 150, 220 0, 30 0" fill={color.indigo100}/> <rect x="80" y="150" width="90" height="30" fill={color.slate300}/> </g>
  </svg>
);
// 10. Withdrawal, Misrepresentation & Policy Integrity
const Sec10_WithdrawalSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Withdrawal and Misrepresentation" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    {/* Award Icon */}
    <g transform="translate(200, 100)"> <rect x="0" y="0" width="180" height="140" rx="10" fill={color.white}/> <circle cx="90" cy="50" r="25" fill={color.amber500}/> <polygon points="90 25, 98 45, 118 45, 103 58, 108 78, 90 65, 72 78, 77 58, 62 45, 82 45" fill={color.amber100}/> </g>
    {/* Cross Mark */}
    <g transform="translate(450, 100)"> <line x1="0" y1="0" x2="150" y2="150" stroke={color.rose600} strokeWidth="15"/> <line x1="0" y1="150" x2="150" y2="0" stroke={color.rose600} strokeWidth="15"/> <text x="75" y="180" textAnchor="middle" fill={color.rose600}>Revoked</text> </g>
  </svg>
);
// 11. Legal Disclaimer & Ethical Note
const Sec11_LegalDisclaimerSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} transform="rotate(-20)" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12"/> <text x="20" y="50" fontSize="24" fontWeight="bold">Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontSize="14" fill={color.white} textAnchor="middle">Compliant</text> </g>
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
export default function EmployeeRecognisation() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (11 defined)
  const svgMap = {
    'sec1-purpose-and-objective': Sec1_PurposeObjectiveSVG,
    'sec2-scope-and-applicability': Sec2_ScopeSVG,
    'sec3-principles-of-recognition': Sec3_PrinciplesSVG,
    'sec4-types-of-recognition-and-awards': Sec4_AwardTypesSVG,
    'sec5-eligibility-criteria': Sec5_EligibilitySVG,
    'sec6-nomination-and-selection-process': Sec6_NominationSVG,
    'sec7-evaluation-parameters': Sec7_EvaluationParamsSVG,
    'sec8-award-categories': Sec8_AwardCategoriesSVG,
    'sec9-frequency-and-presentation-of-awards': Sec9_FrequencySVG,
    'sec10-withdrawal-misrepresentation-and-policy-integrity': Sec10_WithdrawalSVG,
    'sec11-legal-disclaimer-and-ethical-note': Sec11_LegalDisclaimerSVG,
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
        <Link to="/recruitment-process/recruitment-rules-policies" className="hover:underline">recruitment</Link> {/* Assuming this goes under careers */}
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Recognition Policy</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (recognition scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Recognition", "Awards", "Policy", "Merit"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-100 via-cyan-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroRecognition // Corrected Hero component name
                src="/assets/video/recognition-hero.mp4"
                poster="/assets/video/recognition-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {employeeRecognisationData.map((sec, idx) => { // Use correct data variable name
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_PurposeObjectiveSVG;
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

      {/* The disclaimer is now section 11 from the data, rendered by the map */}

    </motion.section>
  );
}