// src/pages/victimSupport/EmpoweringCybercrimeVictims.jsx
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
// Same palette family you shared (kept intact)
const color = {
  cyan25:"#F5FEFF", cyan50:"#ECFEFF", cyan100:"#CFFAFE", cyan200:"#A5F3FC", cyan300:"#67E8F9", cyan500:"#06B6D4",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* --------------------------- DATA (kept 100% intact) --------------------------- */
const data = {
  title: "Empowering Cybercrime Victims – CRCCF",
  tagline: "Providing Knowledge, Strength, and Support for Cybercrime Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Empowerment Through Knowledge and Support",
      content: `Empowering cybercrime victims is central to helping them regain control, confidence, and security. The subcard “Empowering Cybercrime Victims” emphasizes equipping victims with the tools, resources, and guidance necessary to navigate digital threats, legal proceedings, and emotional recovery.
CRCCF ensures victims are active participants in their recovery, not passive observers, enabling them to pursue justice and protection with clarity and determination.`,
      svg: "IntroEmpowerSVG",
    },
    {
      id: "access-info",
      heading: "2. Right to Access Clear Information",
      content: `Victims have the right to understand their legal rights, reporting options, and available support mechanisms. Knowledge reduces confusion, fear, and uncertainty following a cyber incident.
CRCCF provides comprehensive guidance, educating victims about cybercrime risks, complaint procedures, and preventive measures. Being informed allows victims to make confident decisions and take proactive steps toward securing their personal and digital well-being.`,
      svg: "InfoAccessSVG",
    },
    {
      id: "legal-empowerment",
      heading: "3. Legal Empowerment and Representation",
      content: `Victims are entitled to effective legal assistance for filing complaints, preserving evidence, and pursuing justice in courts or administrative forums. Legal empowerment ensures victims can assert their rights and receive fair remedies.
CRCCF provides continuous legal guidance, supporting victims throughout every stage of their case. Our legal experts explain options clearly, assist with documentation, and represent victims’ interests professionally, fostering confidence and empowering them to take decisive action.`,
      svg: "LegalEmpowerSVG",
    },
    {
      id: "psych-support",
      heading: "4. Psychological and Emotional Support",
      content: `Cybercrime can leave victims feeling vulnerable, anxious, and isolated. Victims have the right to professional counselling and emotional guidance to address mental health challenges and regain resilience.
CRCCF’s cyber-psychology team offers tailored therapy, coping strategies, and continuous support, helping victims manage stress, make rational decisions, and rebuild confidence. Emotional empowerment is essential for victims to actively engage in the pursuit of justice.`,
      svg: "PsychSVG",
    },
    {
      id: "technical-safety",
      heading: "5. Technical Empowerment and Digital Safety",
      content: `Victims also have the right to strengthen their digital security and prevent future incidents. This includes guidance on secure online practices, protecting accounts, monitoring for suspicious activity, and using advanced cybersecurity measures.
CRCCF provides practical technical advice, ensuring victims can safeguard their devices, personal data, and digital interactions. Technical empowerment builds confidence, reduces vulnerability, and enables proactive self-protection against cyber threats.`,
      svg: "TechSVG",
    },
    {
      id: "resources-support",
      heading: "6. Access to Resources and Continuous Support",
      content: `Empowerment is reinforced through access to educational materials, legal documents, helplines, and reporting tools. Victims should have ongoing guidance throughout recovery, legal proceedings, and preventive planning.
CRCCF ensures continuous engagement, providing updates, resources, and practical solutions to help victims make informed decisions and navigate complex situations effectively. This constant support strengthens victims’ ability to reclaim control over their lives.`,
      svg: "ResourcesSVG",
    },
    {
      id: "org-role",
      heading: "7. Organization’s Role in Victim Empowerment",
      content: `CRCCF is dedicated to empowering cybercrime victims through a holistic approach combining legal guidance, psychological counselling, and technical support. We provide individualized assistance, expert advice, and practical solutions, ensuring victims regain confidence, autonomy, and resilience.
By fostering knowledge, emotional stability, and technical competence, CRCCF transforms victims from a state of vulnerability to empowered individuals capable of pursuing justice and securing their digital lives.`,
      svg: "RoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Holistic Empowerment for Cybercrime Victims",
      content: `Empowerment is the key to helping cybercrime victims regain control, security, and confidence. By integrating legal support, emotional guidance, and technical assistance, CRCCF ensures that every victim is not only protected but strengthened to navigate digital challenges successfully.
Through empowerment, victims become informed, resilient, and capable, able to face cyber threats, secure justice, and rebuild their lives with confidence, knowing that CRCCF stands by them every step of the way.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: empowerment clinic—mentor guiding victims; devices, shield UI, learning vibe. */
const VideoHeroEmpower = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Empowering Cybercrime Victims – Knowledge in Action";
  const desc =
    "Cartoon-styled mentor guiding victims in a cyber safety clinic; masked video background, soft professional gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="emTitle emDesc" className="w-full h-auto">
        <title id="emTitle">{title}</title>
        <desc id="emDesc">{desc}</desc>
        <defs>
          <linearGradient id="emGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="emSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="emStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#emSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#emGrad)" />
        </g>
        <g clipPath="url(#emStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#emGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {EmpowermentOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="emBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="55%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="emSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="emStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#emSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#emBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#emStage2)">
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

      {EmpowermentOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: mentor + learning scene ----------------------- */
function EmpowermentOverlay() {
  return (
    <g transform="translate(710,44)">
      {/* ground shadow */}
      <rect x="-70" y="360" width="330" height="24" rx="12" fill={color.black} opacity="0.06" />

      {/* mentor figure with pointer */}
      <g transform="translate(10,120)">
        <rect x="-6" y="32" width="12" height="34" rx="6" fill={color.indigo600} />
        <circle cx="0" cy="20" r="12" fill="#F5D0A6" />
        <path d="M4 44 L90 12" stroke={color.cyan500} strokeWidth="6" />
      </g>

      {/* info panel card */}
      <g transform="translate(80,80)">
        <rect x="0" y="0" width="180" height="110" rx="14" fill={color.white} stroke={color.slate300} />
        <rect x="16" y="18" width="120" height="10" rx="5" fill={color.indigo600} />
        <rect x="16" y="38" width="100" height="8" rx="4" fill={color.slate500} />
        <rect x="16" y="54" width="80" height="8" rx="4" fill={color.slate500} />
      </g>

      {/* shield of confidence */}
      <g transform="translate(210,130)">
        <path d="M30 -12l48 20v24c0 28-18 50-48 64-30-14-48-36-48-64v-24l48-20z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
        <path d="M10 30l14 14 22-22" stroke={color.emerald600} strokeWidth="7" fill="none" strokeLinecap="round" />
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

/* ------------------------ Complex section SVG illustrations ------------------------ */
// 1) Intro Empower: mentor + attendees + screen
const IntroEmpowerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Introduction: Empowerment Through Knowledge and Support" className="w-full h-full" {...props}>
    <BG id="gIntroEmp" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowIntroEmp" std={8} alpha={0.45} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroEmp)" />

    {/* mentor + attendees */}
    <g transform="translate(80,110)" filter="url(#glowIntroEmp)">
      <Card x="0" y="0" w="300" h="180" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="24" width="200" height="14" rx="7" fill={color.indigo600} />
      <rect x="20" y="52" width="172" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="74" width="140" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(240,120)">
        <circle cx="0" cy="0" r="16" fill={color.indigo400} />
        <path d="M-12 10L0 0 20 10" stroke={color.cyan500} strokeWidth="6" fill="none" />
      </g>
    </g>

    {/* screen */}
    <g transform="translate(420,90)" filter="url(#glowIntroEmp)">
      <Card x="0" y="0" w="280" h="200" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="18" y="26" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="18" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="18" y="72" width="120" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

// 2) Info Access: open book + signposts + shield
const InfoAccessSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Right to Access Clear Information" className="w-full h-full" {...props}>
    <BG id="gInfoEmp" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowInfoEmp" std={8} alpha={0.45} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gInfoEmp)" />

    {/* book */}
    <g transform="translate(80,110)" filter="url(#glowInfoEmp)">
      <path d="M0 40q90-40 180 0-90 50-180 0z" fill={color.indigo100} stroke={color.indigo300} />
      <Card x="0" y="40" w="180" h="110" r="12" fill={color.white} stroke={color.slate300} sw="3" />
    </g>

    {/* signposts */}
    <g transform="translate(320,120)">
      <rect x="0" y="0" width="26" height="160" rx="8" fill={color.white} stroke={color.slate300} />
      <rect x="-90" y="20" width="120" height="24" rx="8" fill={color.indigo100} />
      <rect x="-80" y="60" width="130" height="24" rx="8" fill={color.cyan100} />
    </g>

    {/* shield */}
    <g transform="translate(520,90)">
      <path d="M60 -20l90 36v40c0 44-30 80-90 104-60-24-90-60-90-104v-40l90-36z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M36 40l26 26 34-34" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

// 3) Legal Empowerment: scales + document + tick
const LegalEmpowerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Empowerment and Representation" className="w-full h-full" {...props}>
    <BG id="gLegalEmp" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalEmp" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalEmp)" />

    {/* scales */}
    <g transform="translate(90,110)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
    </g>

    {/* document */}
    <g transform="translate(340,94)" filter="url(#glowLegalEmp)">
      <Card x="0" y="0" w="260" h="180" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="30" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="58" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="80" width="130" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(184,124)">
        <circle cx="0" cy="0" r="20" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// 4) Psychological Support: couch + calm heart
const PsychSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gPsychEmp" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowPsychEmp" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychEmp)" />

    <g transform="translate(100,190)" filter="url(#glowPsychEmp)">
      <rect x="0" y="0" width="280" height="66" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="-30" width="180" height="42" rx="14" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="230" y="-22" width="42" height="34" rx="10" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="36" y="72" width="18" height="22" rx="6" fill={color.slate400} />
      <rect x="232" y="72" width="18" height="22" rx="6" fill={color.slate400} />
    </g>

    <g transform="translate(460,120)">
      <path d="M-40 20h22l12 -12 10 16 12 -14 12 10h22" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-width" values="6;4;6" dur="1.8s" repeatCount="indefinite" />
      </path>
      <path d="M0 20c0-12 10-20 20-20 8 0 14 4 20 10 6-6 12-10 20-10 10 0 20 8 20 20 0 26-40 46-40 46S0 46 0 20z" fill={color.rose100} stroke={color.rose400} />
    </g>
  </svg>
);

// 5) Technical Empowerment: laptop + phone + lock
const TechSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Technical Empowerment and Digital Safety" className="w-full h-full" {...props}>
    <BG id="gTechEmp" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowTechEmp" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gTechEmp)" />

    {/* devices */}
    <g transform="translate(120,120)" filter="url(#glowTechEmp)">
      <rect x="0" y="0" width="240" height="150" rx="14" fill={color.white} stroke={color.slate300} />
      <rect x="0" y="150" width="240" height="16" rx="8" fill={color.cyan100} />
      <rect x="260" y="18" width="90" height="140" rx="16" fill={color.white} stroke={color.slate300} />
      {/* lock */}
      <g transform="translate(380,20)">
        <rect x="0" y="0" width="120" height="100" rx="16" fill={color.white} stroke={color.slate300} />
        <rect x="30" y="-28" width="60" height="46" rx="18" fill={color.indigo100} stroke={color.indigo300} />
        <circle cx="60" cy="50" r="10" fill={color.indigo600} />
      </g>
    </g>
  </svg>
);

// 6) Resources: documents + helpline + update badge
const ResourcesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Access to Resources and Continuous Support" className="w-full h-full" {...props}>
    <BG id="gResEmp" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowResEmp" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gResEmp)" />

    <g transform="translate(100,110)" filter="url(#glowResEmp)">
      <Card x="0" y="0" w="200" h="220" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="30" width="150" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="58" width="130" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="80" width="110" height="10" rx="5" fill={color.slate500} />
    </g>

    {/* helpline bubble + update */}
    <g transform="translate(360,110)" filter="url(#glowResEmp)">
      <rect x="0" y="0" width="260" height="100" rx="18" fill={color.white} stroke={color.slate300} />
      <circle cx="40" cy="50" r="12" fill={color.cyan500} />
      <rect x="60" y="42" width="140" height="16" rx="8" fill={color.indigo100} />
      <rect x="70" y="120" width="120" height="34" rx="10" fill={color.cyan100} />
    </g>
  </svg>
);

// 7) Organization Role: pipeline tiles + shield
const RoleSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Organization’s Role in Victim Empowerment" className="w-full h-full" {...props}>
    <BG id="gRoleEmp" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowRoleEmp" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gRoleEmp)" />

    <g transform="translate(100,100)" filter="url(#glowRoleEmp)">
      <Card x="0" y="0" w="320" h="200" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="24" width="130" height="60" rx="12" fill={color.indigo100} />
      <rect x="20" y="94" width="130" height="60" rx="12" fill={color.cyan100} />
      <rect x="170" y="54" width="120" height="80" rx="12" fill={color.emerald100} />
    </g>

    <g transform="translate(470,80)" filter="url(#glowRoleEmp)">
      <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M16 40l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

// 8) Conclusion: progress arcs
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Conclusion: Holistic Empowerment for Cybercrime Victims" className="w-full h-full" {...props}>
    <BG id="gConcEmp" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcEmp)" />
    <rect x="90" y="90" width="16" height="180" rx="8" fill={color.indigo600} />
    <path d="M106 92h150l-24 24 24 24H106z" fill={color.cyan500} />
    <g transform="translate(220,250)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.85">
      <path d="M0 0c60-40 120-40 180 0" />
      <path d="M180 0c60-40 120-40 120 0" />
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
export default function EmpoweringCybercrimeVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroEmpowerSVG,
    InfoAccessSVG,
    LegalEmpowerSVG,
    PsychSVG,
    TechSVG,
    ResourcesSVG,
    RoleSVG,
    ConclusionSVG,
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
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Empowering Cybercrime Victims</span>
      </motion.nav>

      {/* Hero with Video-SVG (empowerment scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Knowledge", "Confidence", "Protection"].map((pill) => (
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
              {/* Supply your video assets at these paths */}
              <VideoHeroEmpower
                src="/assets/video/empowering-victims-hero.mp4"
                poster="/assets/video/empowering-victims-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] || IntroEmpowerSVG;
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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-12 max-w-4xl"
      >
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-gray-600">
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or court procedures.
            All information is handled with confidentiality and in compliance with applicable laws and regulations.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}