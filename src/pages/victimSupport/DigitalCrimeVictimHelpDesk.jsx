// src/pages/victimSupport/DigitalCrimeVictimHelpDesk.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

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
  cyan25:  "#F5FEFF", cyan50:  "#ECFEFF", cyan100: "#CFFAFE", cyan200: "#A5F3FC", cyan300: "#67E8F9", cyan500: "#06B6D4", cyan700: "#0E7490",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald200:"#A7F3D0", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber300:"#FCD34D",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF",
};

/* --------------------------- DATA (kept exactly) --------------------------- */
const data = {
  title: "Digital Crime Victim Help Desk – CRCCF",
  tagline: "Your Centralized Support. Immediate Guidance. Reliable Relief.",
  sections: [
    {
      id: "intro-helpdesk",
      heading: "1. Introduction to the Help Desk",
      content: `In today’s digital world, victims of cybercrime often feel lost, overwhelmed, and unsure of where to turn for help. The Digital Crime Victim Help Desk at CRCCF serves as a dedicated point of contact, providing immediate guidance, support, and access to legal and psychological resources.
By centralizing assistance, the help desk ensures victims never navigate complex cybercrime processes alone. It offers a structured, professional, and dependable support system, enabling victims to regain control and confidence from the very first interaction.`,
      svg: "IntroHelpDeskSVG",
    },
    {
      id: "immediate-guidance",
      heading: "2. Right to Immediate Guidance and Support",
      content: `Victims approaching the help desk have the right to receive prompt and clear instructions on the steps to take following a cyber incident. This includes guidance on filing complaints, securing critical evidence, and understanding relevant legal procedures.
CRCCF professionals provide actionable advice, reducing confusion, alleviating anxiety, and empowering victims to make informed decisions quickly. Immediate guidance ensures that victims act efficiently without unnecessary delays, while feeling fully supported and understood.`,
      svg: "GuidanceSVG",
    },
    {
      id: "legal-assist",
      heading: "3. Legal Assistance and Case Registration",
      content: `The help desk is designed to assist victims in exercising their legal rights, including formal complaint registration and initiating investigations.
CRCCF’s legal experts help victims document incidents accurately, preserve crucial digital evidence, and submit cases to the appropriate authorities. This structured approach ensures professionalism, increases the likelihood of case resolution, and holds perpetrators accountable. Victims are reassured that their legal journey is guided, precise, and fully supported.`,
      svg: "LegalAssistSVG",
    },
    {
      id: "psych-support",
      heading: "4. Psychological Support and Counselling Services",
      content: `Cybercrime often inflicts stress, anxiety, and emotional trauma. Victims have the right to confidential psychological counselling and cyber-psychology support to address these challenges.
CRCCF provides continuous guidance, helping victims manage emotional impacts, regain confidence, and make rational decisions. Counselling services ensure victims feel heard, safe, and emotionally supported, making the help desk a secure and empathetic environment for recovery.`,
      svg: "PsychSupportSVG",
    },
    {
      id: "evidence",
      heading: "5. Assistance in Evidence Preservation",
      content: `Digital evidence is critical for legal proceedings, including emails, transaction records, social media interactions, and encrypted communications. Victims have the right to professional guidance in handling and preserving evidence without compromising its integrity.
CRCCF’s help desk team instructs victims on proper evidence management, ensuring digital content meets legal standards for investigations or court use. Victims also receive advice on common pitfalls to avoid, strengthening their case and enhancing trust in the justice process.`,
      svg: "EvidenceSVG",
    },
    {
      id: "resources-updates",
      heading: "6. Access to Resources and Continuous Updates",
      content: `Victims are entitled to regular updates about their cases and guidance on protective measures. The help desk acts as a centralized communication hub, providing status updates, legal insights, and preventive recommendations.
CRCCF equips victims with educational resources, digital security tips, and best practices, enabling them to stay informed, prevent future cyber threats, and navigate the online world confidently. Continuous communication ensures that victims never feel isolated or unsupported.`,
      svg: "ResourcesSVG",
    },
    {
      id: "commitment",
      heading: "7. CRCCF’s Commitment to Victims",
      content: `CRCCF is committed to making the Digital Crime Victim Help Desk a trusted and comprehensive support system. By integrating legal guidance, psychological counselling, and evidence management, we ensure victims receive holistic assistance from start to finish.
The help desk operates with confidentiality, professionalism, and empathy, giving every victim confidence that their concerns are heard, prioritized, and acted upon responsibly. CRCCF’s structured approach empowers victims to navigate the cybercrime landscape safely and effectively.`,
      svg: "CommitmentSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: A Centralized Support System for Cybercrime Victims",
      content: `The Digital Crime Victim Help Desk at CRCCF is more than a contact point—it is a lifeline for victims seeking justice, relief, and emotional support. From the moment a cyber incident is reported to the resolution of the case, victims receive immediate guidance, structured legal assistance, psychological support, and ongoing updates.
CRCCF is dedicated to upholding the rights of cybercrime victims, restoring safety, and providing reliable access to justice. Victims can reach out without hesitation, confident that they are supported by a trusted, legally-backed, and empathetic organization, fully committed to their protection, empowerment, and recovery.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ------------------------- Video SVG (self-contained) ------------------------- */
/* Hero: “man writing a digital report” — masked video in document frame,
   with drawn character overlay. Poster + animated gradient fallbacks included. */
const VideoHeroHelpDesk = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Digital Crime Victim Help Desk";
  const desc = "Man writing a report digitally, device + document motif.";

  // Fallback when motion reduced or no src
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 980 460" role="img" aria-labelledby="vhTitleHD vhDescHD" className="w-full h-auto">
        <title id="vhTitleHD">{title}</title>
        <desc id="vhDescHD">{desc}</desc>
        <defs>
          <linearGradient id="vhHD_grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.18;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="vhHD_soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="vhHD_doc">
            <rect x="40" y="40" width="580" height="380" rx="22" />
          </clipPath>
        </defs>
        <g filter="url(#vhHD_soft)">
          <rect x="0" y="0" width="980" height="460" rx="28" fill="url(#vhHD_grad)" />
        </g>
        <g clipPath="url(#vhHD_doc)">
          <rect x="0" y="0" width="980" height="460" fill="url(#vhHD_grad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Character overlay (man writing) */}
        {ManWritingOverlay()}
      </svg>
    );
  }

  // Primary masked video version
  return (
    <svg viewBox="0 0 980 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="vhHD_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.cyan100} />
          <stop offset="60%" stopColor={color.indigo100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="vhHD_soft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="vhHD_doc2">
          <rect x="40" y="40" width="580" height="380" rx="22" />
        </clipPath>
      </defs>

      <g filter="url(#vhHD_soft2)">
        <rect x="0" y="0" width="980" height="460" rx="28" fill="url(#vhHD_bg)" />
      </g>

      {/* Poster fallback + masked video */}
      <g clipPath="url(#vhHD_doc2)">
        {poster ? (
          <image href={poster} x="0" y="0" width="980" height="460" preserveAspectRatio="xMidYMid slice" opacity="0.85" />
        ) : null}
        <foreignObject x="0" y="0" width="980" height="460">
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

      {/* Character overlay (man writing a digital report) */}
      {ManWritingOverlay()}
    </svg>
  );
};

/* ------------ Reusable complex overlay: man writing digitally ------------ */
function ManWritingOverlay() {
  return (
    <g transform="translate(640,60)">
      {/* desk */}
      <rect x="-40" y="280" width="320" height="20" rx="8" fill="#1F2937" opacity="0.12" />
      {/* laptop */}
      <rect x="10" y="150" width="140" height="88" rx="8" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <rect x="28" y="168" width="104" height="10" rx="5" fill={color.indigo600} />
      <rect x="28" y="184" width="90" height="8" rx="4" fill={color.slate500} />
      {/* glowing cursor line */}
      <rect x="120" y="184" width="6" height="8" rx="3" fill={color.emerald400}>
        <animate attributeName="opacity" values="1;0;1" dur="1.4s" repeatCount="indefinite" />
      </rect>

      {/* document sheet */}
      <g transform="translate(-10,40)">
        <rect x="0" y="0" width="160" height="110" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <rect x="18" y="20" width="120" height="10" rx="5" fill={color.slate700} />
        <rect x="18" y="40" width="140" height="8" rx="4" fill={color.slate500} />
        <rect x="18" y="58" width="110" height="8" rx="4" fill={color.slate500} />
        <rect x="18" y="76" width="90" height="8" rx="4" fill={color.slate500} />
      </g>

      {/* man (simplified geometric, professional vibe) */}
      {/* torso */}
      <path d="M110 140c-18 0-32 14-32 32v32h64v-32c0-18-14-32-32-32z" fill={color.indigo600} />
      {/* head */}
      <circle cx="110" cy="120" r="18" fill="#F8D7B9" />
      {/* arm writing */}
      <g transform="translate(110,170)">
        <path d="M0 0c22 8 36 10 58 0" stroke={color.indigo800} strokeWidth="12" strokeLinecap="round" fill="none" />
        {/* pen */}
        <path d="M58 -2l20 6" stroke={color.slate700} strokeWidth="6" strokeLinecap="round">
          <animate attributeName="d" values="M58 -2l20 6; M58 -5l20 4; M58 -2l20 6" dur="1.6s" repeatCount="indefinite" />
        </path>
      </g>

      {/* floating icons to imply “digital” */}
      <g opacity="0.9">
        <circle cx="220" cy="40" r="10" fill={color.cyan300}>
          <animate attributeName="r" values="8;12;8" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <rect x="190" y="70" width="26" height="10" rx="5" fill={color.emerald300}>
          <animate attributeName="width" values="26;36;26" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="210" y="96" width="34" height="12" rx="6" fill={color.indigo300}>
          <animate attributeName="x" values="210;218;210" dur="2.4s" repeatCount="indefinite" />
        </rect>
      </g>
    </g>
  );
}

/* ------------------------- SVG helpers & utilities ------------------------- */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke, sw = 0, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 6, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* --------------------- Complex, realistic section SVGs --------------------- */
/* 1) Introduction: kiosk desk + headset agent + map of nodes */
const IntroHelpDeskSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Introduction to the Help Desk" className="w-full h-full" {...props}>
    <BG id="gIntroHD" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowIntroHD" std={8} alpha={0.45} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gIntroHD)" />

    {/* network map */}
    <g transform="translate(60,60)" opacity="0.9">
      <circle cx="80" cy="40" r="8" fill={color.cyan300} />
      <circle cx="180" cy="20" r="10" fill={color.indigo300} />
      <circle cx="220" cy="80" r="7" fill={color.emerald300} />
      <circle cx="130" cy="120" r="9" fill={color.cyan300} />
      <path d="M80 40L180 20L220 80L130 120Z" stroke={color.slate400} strokeWidth="2" fill="none" />
    </g>

    {/* help desk counter + agent */}
    <g transform="translate(380,110)" filter="url(#glowIntroHD)">
      <Card x="0" y="0" w="320" h="180" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      {/* screen */}
      <rect x="20" y="20" width="210" height="110" rx="12" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="40" y="44" width="170" height="12" rx="6" fill={color.indigo600} />
      <rect x="40" y="66" width="140" height="10" rx="5" fill={color.slate500} />
      {/* agent circle head + headset */}
      <circle cx="260" cy="56" r="18" fill="#F8D7B9" />
      <path d="M244 56c0-10 8-18 18-18s18 8 18 18" stroke={color.slate500} />
      <rect x="284" y="48" width="10" height="16" rx="5" fill={color.slate700} />
      {/* chat pill */}
      <rect x="230" y="96" width="80" height="20" rx="10" fill={color.cyan100} />
      <path d="M244 116l10-10 10 10z" fill={color.cyan100} />
    </g>
  </svg>
);

/* 2) Immediate Guidance: checklist + arrow flows + phone */
const GuidanceSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Immediate Guidance & Support" className="w-full h-full" {...props}>
    <BG id="gGuide" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowGuide" std={7} alpha={0.5} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gGuide)" />

    <g transform="translate(80,80)">
      <Card x="0" y="0" w="260" h="220" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
      {/* checklist */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(22, ${28 + i * 52})`}>
          <circle cx="0" cy="6" r="8" fill={color.emerald400} />
          <rect x="18" y="0" width="180" height="12" rx="6" fill={color.slate700} />
          <rect x="18" y="18" width="140" height="8" rx="4" fill={color.slate500} />
        </g>
      ))}
    </g>

    {/* flow arrows */}
    <defs>
      <marker id="arrowGuide" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill={color.indigo600} />
      </marker>
    </defs>
    <path d="M360 140h120" stroke={color.indigo600} strokeWidth="4" markerEnd="url(#arrowGuide)" />
    <path d="M360 210h140" stroke={color.cyan500} strokeWidth="4" markerEnd="url(#arrowGuide)">
      <animate attributeName="stroke-width" values="4;2;4" dur="1.6s" repeatCount="indefinite" />
    </path>

    {/* phone with steps */}
    <g transform="translate(520,100)" filter="url(#glowGuide)">
      <rect x="0" y="0" width="160" height="220" rx="24" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="40" width="120" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="68" width="100" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="96" width="120" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="156" width="120" height="16" rx="8" fill={color.emerald400}>
        <animate attributeName="opacity" values="1;0.8;1" dur="1.6s" repeatCount="indefinite" />
      </rect>
    </g>
  </svg>
);

/* 3) Legal Assistance: scales + stamped report + filing tray */
const LegalAssistSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Legal Assistance & Case Registration" className="w-full h-full" {...props}>
    <BG id="gLegal" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegal" std={7} alpha={0.5} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gLegal)" />

    {/* scales */}
    <g transform="translate(80,120)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
    </g>

    {/* stamped report */}
    <g transform="translate(320,90)" filter="url(#glowLegal)">
      <Card x="0" y="0" w="220" h="160" r="14" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="28" width="160" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="78" width="120" height="10" rx="5" fill={color.slate500} />
      {/* stamp */}
      <g transform="translate(150,110)">
        <circle cx="0" cy="0" r="20" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>

    {/* filing tray */}
    <g transform="translate(580,140)">
      <rect x="0" y="0" width="140" height="80" rx="12" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="14" y="14" width="112" height="52" rx="8" fill={color.white} />
      <rect x="26" y="28" width="88" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

/* 4) Psychological Support: couch + calm waves + heart pulse */
const PsychSupportSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Psychological Support & Counselling" className="w-full h-full" {...props}>
    <BG id="gPsych" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowPsych" std={8} alpha={0.5} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gPsych)" />

    {/* couch */}
    <g transform="translate(90,180)" filter="url(#glowPsych)">
      <rect x="0" y="0" width="260" height="60" rx="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="18" y="-30" width="160" height="40" rx="14" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="200" y="-20" width="40" height="30" rx="10" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="30" y="66" width="18" height="22" rx="6" fill={color.slate400} />
      <rect x="212" y="66" width="18" height="22" rx="6" fill={color.slate400} />
    </g>

    {/* calm waves */}
    <path d="M420 250c40-20 80-20 120 0s80 20 120 0" stroke={color.cyan300} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6">
      <animate attributeName="d" values="M420 250c40-20 80-20 120 0s80 20 120 0; M420 250c40-10 80-10 120 0s80 10 120 0; M420 250c40-20 80-20 120 0s80 20 120 0" dur="4s" repeatCount="indefinite" />
    </path>

    {/* heart pulse */}
    <g transform="translate(620,120)">
      <path d="M0 20c0-12 10-20 20-20 8 0 14 4 20 10 6-6 12-10 20-10 10 0 20 8 20 20 0 26-40 46-40 46S0 46 0 20z" fill={color.rose100} stroke={color.rose400} />
      <path d="M-40 20h22l12 -12 10 16 12 -14 12 10h22" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-width" values="6;4;6" dur="1.8s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

/* 5) Evidence Preservation: vault + chain-of-custody timeline + camera icon */
const EvidenceSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Evidence Preservation" className="w-full h-full" {...props}>
    <BG id="gEvidence" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowEvidence" std={7} alpha={0.5} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gEvidence)" />

    {/* vault */}
    <g transform="translate(80,80)" filter="url(#glowEvidence)">
      <rect x="0" y="0" width="220" height="220" rx="20" fill={color.white} stroke={color.indigo300} sw="3" />
      <circle cx="110" cy="110" r="46" fill={color.indigo100} stroke={color.indigo400} strokeWidth="4" />
      <circle cx="110" cy="110" r="6" fill={color.indigo600} />
      {[0,60,120,180,240,300].map((a,i)=>(
        <rect key={i} x="108" y="60" width="4" height="20" fill={color.indigo600} transform={`rotate(${a},110,110)`} />
      ))}
    </g>

    {/* chain of custody timeline */}
    <g transform="translate(340,120)">
      <rect x="0" y="40" width="360" height="8" rx="4" fill={color.slate300} />
      {[0, 120, 240, 360].map((x, i) => (
        <g key={i} transform={`translate(${x},40)`}>
          <circle cx="0" cy="0" r="10" fill={color.emerald400} />
          <rect x="-20" y="-32" width="40" height="16" rx="6" fill={color.white} stroke={color.slate300} />
        </g>
      ))}
    </g>

    {/* camera icon */}
    <g transform="translate(520,200)">
      <rect x="0" y="0" width="120" height="80" rx="14" fill={color.white} stroke={color.slate300} />
      <circle cx="60" cy="40" r="22" fill={color.indigo100} stroke={color.indigo400} />
      <circle cx="60" cy="40" r="8" fill={color.indigo600} />
      <rect x="12" y="10" width="20" height="10" rx="5" fill={color.slate400} />
    </g>
  </svg>
);

/* 6) Resources & Updates: bell + docs library + progress feed */
const ResourcesSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Resources & Continuous Updates" className="w-full h-full" {...props}>
    <BG id="gRes" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.amber50 }]} />
    <SoftGlow id="glowRes" std={7} alpha={0.5} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gRes)" />

    {/* bell */}
    <g transform="translate(90,100)" filter="url(#glowRes)">
      <path d="M60 40c0-22 18-40 40-40s40 18 40 40v40h-80z" fill={color.indigo100} stroke={color.indigo300} strokeWidth="3" />
      <circle cx="100" cy="88" r="10" fill={color.indigo600}>
        <animate attributeName="r" values="9;12;9" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* docs library */}
    <g transform="translate(220,80)">
      <Card x="0" y="0" w="200" h="220" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      {[0,1,2,3].map((i)=>(
        <g key={i} transform={`translate(18, ${24 + i*44})`}>
          <rect width="150" height="12" rx="6" fill={color.slate700} />
          <rect y="16" width="120" height="8" rx="4" fill={color.slate500} />
        </g>
      ))}
    </g>

    {/* progress feed */}
    <g transform="translate(460,110)" filter="url(#glowRes)">
      <Card x="0" y="0" w="260" h="180" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      {[0,1,2].map((i)=>(
        <g key={i} transform={`translate(22, ${26 + i*48})`}>
          <rect width="180" height="10" rx="5" fill={color.indigo600} opacity={0.12} />
          <rect width="60" height="10" rx="5" fill={color.indigo600}>
            <animate attributeName="width" values="60;180;60" dur="3s" begin={`${i*0.4}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
    </g>
  </svg>
);

/* 7) Commitment: handshake + shield + policy docs */
const CommitmentSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="CRCCF’s Commitment" className="w-full h-full" {...props}>
    <BG id="gCommit" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowCommit" std={8} alpha={0.5} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gCommit)" />

    {/* handshake */}
    <g transform="translate(110,120)" filter="url(#glowCommit)">
      <path d="M0 80c40-30 80-30 120 0" stroke={color.indigo600} strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M120 80c40-30 80-30 120 0" stroke={color.cyan500} strokeWidth="12" fill="none" strokeLinecap="round" />
      <circle cx="120" cy="80" r="16" fill={color.emerald400} />
    </g>

    {/* shield + tick */}
    <g transform="translate(420,70)" filter="url(#glowCommit)">
      <path d="M60 -20l90 36v40c0 44-30 80-90 104-60-24-90-60-90-104v-40l90-36z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M24 60l26 26 38-38" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>

    {/* policy docs */}
    <g transform="translate(600,220)">
      <Card x="0" y="0" w="120" h="90" r="12" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="18" y="22" width="84" height="10" rx="5" fill={color.slate700} />
      <rect x="18" y="42" width="70" height="8" rx="4" fill={color.slate500} />
    </g>
  </svg>
);

/* 8) Conclusion */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 780 380" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <BG id="gConclusion" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="780" height="380" rx="20" fill="url(#gConclusion)" />
    {/* ribbon */}
    <rect x="90" y="90" width="16" height="180" rx="8" fill={color.indigo600} />
    <path d="M106 92h150l-24 24 24 24H106z" fill={color.cyan500} />
    {/* arcs */}
    <g transform="translate(220,250)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.85">
      <path d="M0 0c60-40 120-40 180 0" />
      <path d="M180 0c60-40 120-40 180 0" />
    </g>
  </svg>
);

/* ------------------------------ Section block ------------------------------ */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
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
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function DigitalCrimeVictimHelpDesk() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroHelpDeskSVG,
    GuidanceSVG,
    LegalAssistSVG,
    PsychSupportSVG,
    EvidenceSVG,
    ResourcesSVG,
    CommitmentSVG,
    ConclusionSVG,
  };

  return (
    <motion.section id="top" variants={container} initial="hidden" animate="show" className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Breadcrumb */}
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Digital Crime Victim Help Desk</span>
      </motion.nav>

      {/* Hero w/ masked Video SVG + man writing overlay */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Guidance", "Legal", "Counselling", "Evidence", "Updates", "Commitment"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">{pill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              {/* Set your actual file paths in public/ */}
              <VideoHeroHelpDesk
                src="/assets/video/helpdesk-hero.mp4"
                poster="/assets/video/helpdesk-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] || IntroHelpDeskSVG;
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              content={sec.content}
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>

      {/* Disclaimer */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 md:mt-12 max-w-4xl">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-gray-600">
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or court procedures.
            All information is handled with confidentiality and in compliance with the IT Act & DPDP Act.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
