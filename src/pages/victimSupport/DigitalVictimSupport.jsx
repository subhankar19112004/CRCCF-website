// src/pages/victimSupport/DigitalVictimSupport.jsx
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
  title: "Digital Victim Support & Protection – CRCCF",
  tagline: "Comprehensive Legal, Emotional, and Digital Support for Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Comprehensive Support for Digital Victims",
      content: `In the modern digital environment, victims of cybercrime face challenges such as data breaches, identity theft, financial fraud, and online harassment. The “Digital Victim Support & Protection” sub-card highlights CRCCF’s commitment to providing holistic, timely, and professional assistance to victims.
Our organization ensures that victims receive structured legal guidance, emotional support, and practical solutions to recover from digital crimes. By combining expertise across multiple domains, CRCCF empowers victims to regain control, protect their rights, and rebuild confidence in their digital and personal lives.`,
      svg: "IntroSVG",
    },
    {
      id: "immediate-support",
      heading: "2. Right to Immediate Support",
      content: `Victims have the right to prompt, professional assistance immediately after a cyber incident. This includes guidance on reporting crimes, securing critical digital evidence, and protecting sensitive information.
CRCCF provides rapid response support, ensuring victims feel safe, informed, and reassured during the crucial early stages. Immediate support mitigates damages, prevents further exploitation, and establishes a strong foundation for recovery and justice.`,
      svg: "ImmediateSupportSVG",
    },
    {
      id: "legal-advocacy",
      heading: "3. Legal Assistance and Advocacy",
      content: `Access to specialized legal counsel is essential for victims pursuing justice. Victims are entitled to guidance from experts in cyber law, digital forensics, and data protection to document evidence, file complaints, and navigate court procedures.
CRCCF offers dedicated advocacy services, ensuring cases are accurately prepared and presented. Our legal team enhances the likelihood of accountability for perpetrators and provides victims with the confidence and clarity needed to pursue justice effectively.`,
      svg: "LegalSVG",
    },
    {
      id: "data-protection",
      heading: "4. Protection of Personal and Digital Data",
      content: `Safeguarding sensitive personal and digital information is a fundamental right for victims. This includes confidential handling, secure communication, and proactive monitoring of online accounts.
CRCCF advises victims on best practices, including password security, detecting suspicious activity, and maintaining privacy online. Protecting personal data prevents further cyber risks, reinforces trust, and provides reassurance during recovery.`,
      svg: "DataProtectionSVG",
    },
    {
      id: "psych-support",
      heading: "5. Psychological and Emotional Support",
      content: `Cybercrime often leaves victims emotionally distressed and vulnerable, experiencing stress, anxiety, and uncertainty. Victims have the right to professional counseling and cyber-psychology support tailored to their unique circumstances.
CRCCF provides personalized emotional guidance, helping victims regain confidence, cope with trauma, and make informed decisions. Our services prioritize mental well-being, ensuring that victims can approach legal and protective measures with clarity and resilience.`,
      svg: "PsychSVG",
    },
    {
      id: "evidence",
      heading: "6. Evidence Preservation and Case Management",
      content: `Proper management of digital evidence is critical for successful legal outcomes. Victims are entitled to guidance in collecting, documenting, and preserving emails, transaction records, social media interactions, and other digital data.
CRCCF ensures evidence meets legal standards, reducing the risk of challenges or rejection in court. By combining technical expertise with practical support, we strengthen victims’ cases and enhance the likelihood of favourable legal resolutions.`,
      svg: "EvidenceSVG",
    },
    {
      id: "monitoring",
      heading: "7. Continuous Monitoring and Resources",
      content: `Victims have the right to ongoing updates about their cases and protective measures. CRCCF provides continuous monitoring, timely communication, and educational resources to help victims stay proactive and informed.
Regular updates and practical guidance empower victims to make informed decisions, maintain digital security, and reduce the risk of future cyber incidents. This ongoing support reinforces confidence in the recovery process.`,
      svg: "MonitoringSVG",
    },
    {
      id: "commitment",
      heading: "8. Organization’s Commitment to Victim Protection",
      content: `CRCCF is dedicated to providing complete protection and support for digital victims. By integrating legal assistance, emotional counseling, evidence management, and digital security guidance, we offer a robust and holistic framework for recovery.
Every step is handled with professionalism, confidentiality, and empathy, ensuring victims feel respected, protected, and confident throughout their journey. Our comprehensive approach restores trust and empowers victims to reclaim control over their digital lives.`,
      svg: "CommitmentSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Holistic Support and Protection for Digital Victims",
      content: `Digital Victim Support & Protection encompasses legal, emotional, and technical assistance, ensuring victims recover fully from cyber incidents. Upholding these rights empowers victims to seek justice, safeguard personal data, and regain confidence in their digital environment.
CRCCF is committed to delivering professional, empathetic, and comprehensive support, providing every victim with the tools, guidance, and protection needed for effective recovery and empowerment. Victims can reach out without hesitation, knowing they are backed by a trusted and legally-sound organization dedicated to their safety and justice.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A hacker at a terminal tries to breach a website; a victim site UI card flickers;
   a cybercrime officer rushes in with a shield, intercepts, and arrests the hacker.
   The <video> is masked inside a rounded stage; vector overlay explains story clearly. */
const VideoHeroDigitalSupport = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Digital Victim Support & Protection – Action Scene";
  const desc =
    "Hacker attempts breach; officer intervenes, shields the victim website, and catches the hacker. Clear kid-friendly story overlay.";

  // Reduced-motion / no-video fallback: animated gradient with illustrated overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="dvsTitle dvsDesc" className="w-full h-auto">
        <title id="dvsTitle">{title}</title>
        <desc id="dvsDesc">{desc}</desc>
        <defs>
          <linearGradient id="dvsGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.18;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.6;0.86;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="dvsSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="dvsStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#dvsSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#dvsGrad)" />
        </g>
        <g clipPath="url(#dvsStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#dvsGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {DigitalSupportOverlay()}
      </svg>
    );
  }

  // Main masked video with overlay story
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="dvsBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="60%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="dvsSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="dvsStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#dvsSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#dvsBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#dvsStage2)">
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

      {DigitalSupportOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: hacker ► officer ► safety ----------------------- */
function DigitalSupportOverlay() {
  return (
    <g transform="translate(710,44)">
      {/* ground shadow */}
      <rect x="-70" y="360" width="330" height="24" rx="12" fill={color.black} opacity="0.06" />

      {/* Victim website card (protected) */}
      <g transform="translate(0,50)">
        <rect x="0" y="0" width="220" height="150" rx="16" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <rect x="16" y="20" width="150" height="12" rx="6" fill={color.indigo600} />
        <rect x="16" y="48" width="120" height="10" rx="5" fill={color.slate500} />
        <rect x="16" y="70" width="140" height="10" rx="5" fill={color.slate500} />
        <rect x="16" y="92" width="100" height="10" rx="5" fill={color.slate500} />
        {/* safety shield */}
        <g transform="translate(170,18)">
          <path d="M16 -10l34 14v16c0 18-12 34-34 44-22-10-34-26-34-44V4l34-14z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
          <path d="M6 18l10 10 16-16" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* Hacker at terminal */}
      <g transform="translate(10,230)">
        <rect x="0" y="0" width="120" height="70" rx="10" fill={color.slate900} />
        <rect x="8" y="10" width="54" height="6" rx="3" fill={color.cyan300} />
        <rect x="8" y="22" width="80" height="6" rx="3" fill={color.cyan200} />
        <rect x="8" y="34" width="64" height="6" rx="3" fill={color.cyan200} />
        {/* binary typing */}
        {[...Array(6)].map((_, i) => (
          <text key={i} x={10 + i * 18} y="58" fontSize="8" fill={color.cyan300} opacity="0.8">
            01
            <animate attributeName="y" values="58;50;58" dur={`${1.6 + i * 0.12}s`} repeatCount="indefinite" />
          </text>
        ))}
        {/* masked hoodie head */}
        <circle cx="140" cy="-6" r="12" fill={color.slate700} />
        <path d="M128 8h24v22h-24z" fill={color.slate700} />
        {/* red alert to victim card */}
        <path d="M120 26 C150,10 180,24 210,62" stroke={color.rose400} strokeWidth="3" fill="none">
          <animate attributeName="stroke-width" values="3;1.5;3" dur="1.8s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Officer rushing in */}
      <g transform="translate(220,220)">
        {/* body */}
        <path d="M30 90c-18 0-30 14-30 30v26h60v-26c0-16-12-30-30-30z" fill={color.indigo400} />
        <circle cx="30" cy="66" r="14" fill="#F4C9A5" />
        {/* shield */}
        <g transform="translate(54,82)">
          <path d="M10 -8l28 12v14c0 16-10 30-28 38-18-8-28-22-28-38V4l28-12z" fill={color.white} stroke={color.indigo600} strokeWidth="3" />
          <path d="M2 16l10 10 14-14" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
        {/* handcuff line to hacker */}
        <path d="M44 120 C80,110 120,96 140,40" stroke={color.indigo600} strokeWidth="4" fill="none">
          <animate attributeName="stroke-dasharray" values="4 6;1 9;4 6" dur="1.8s" repeatCount="indefinite" />
        </path>
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
// 1) Intro: layered dashboard + lifebuoy + shield
const IntroSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Introduction: Comprehensive Support for Digital Victims" className="w-full h-full" {...props}>
    <BG id="gIntroDVS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowIntroDVS" std={8} alpha={0.45} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroDVS)" />

    {/* stacked UI */}
    <g transform="translate(80,90)" filter="url(#glowIntroDVS)">
      <Card x="0" y="0" w="300" h="170" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="22" y="26" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="74" width="180" height="10" rx="5" fill={color.slate500} />
    </g>

    {/* lifebuoy + shield */}
    <g transform="translate(420,80)" filter="url(#glowIntroDVS)">
      <circle cx="80" cy="80" r="60" fill={color.cyan100} stroke={color.cyan300} strokeWidth="10" />
      {[0,90,180,270].map((a,i)=>(
        <rect key={i} x="70" y="20" width="20" height="30" rx="6" fill={color.indigo100} transform={`rotate(${a},80,80)`} />
      ))}
      <g transform="translate(190,10)">
        <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
        <path d="M16 40l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// 2) Immediate Support: hotline + timeline + quick actions
const ImmediateSupportSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Right to Immediate Support" className="w-full h-full" {...props}>
    <BG id="gImmediateDVS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
    <SoftGlow id="glowImmediateDVS" std={8} alpha={0.45} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gImmediateDVS)" />

    <g transform="translate(80,90)" filter="url(#glowImmediateDVS)">
      <Card x="0" y="0" w="280" h="180" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="30" width="190" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="58" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="80" width="130" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="110" height="16" rx="8" fill={color.emerald400} />
    </g>

    {/* timeline */}
    <g transform="translate(380,130)">
      <rect x="0" y="32" width="340" height="8" rx="4" fill={color.slate300} />
      {[0,120,240,340].map((x,i)=>(
        <g key={i} transform={`translate(${x},32)`}>
          <circle cx="0" cy="0" r="10" fill={color.emerald400} />
          <rect x="-24" y="-28" width="48" height="16" rx="6" fill={color.white} stroke={color.slate300} />
        </g>
      ))}
    </g>
  </svg>
);

// 3) Legal Assistance and Advocacy: scales + briefcase + approved
const LegalSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Assistance and Advocacy" className="w-full h-full" {...props}>
    <BG id="gLegalDVS" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalDVS" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalDVS)" />

    {/* scales */}
    <g transform="translate(80,110)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
    </g>

    {/* briefcase + approved */}
    <g transform="translate(320,90)" filter="url(#glowLegalDVS)">
      <Card x="0" y="0" w="240" h="170" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="30" width="170" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="58" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="80" width="130" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(172,120)">
        <circle cx="0" cy="0" r="20" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// 4) Data Protection: lock + eye mask + secure message
const DataProtectionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Protection of Personal and Digital Data" className="w-full h-full" {...props}>
    <BG id="gDataDVS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowDataDVS" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gDataDVS)" />

    {/* lock */}
    <g transform="translate(120,120)">
      <path d="M80 60v-24a24 24 0 0 1 48 0v24" stroke={color.indigo600} strokeWidth="8" fill="none" />
      <Card x="70" y="60" w="100" h="90" r="14" fill={color.white} stroke={color.indigo600} sw="4" />
      <circle cx="120" cy="110" r="10" fill={color.indigo600} />
    </g>

    {/* secure message */}
    <g transform="translate(360,110)" filter="url(#glowDataDVS)">
      <Card x="0" y="0" w="280" h="150" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="28" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="80" width="120" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(210,16)">
        <path d="M16 -10l34 14v16c0 18-12 34-34 44-22-10-34-26-34-44V4l34-14z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
        <path d="M6 18l10 10 16-16" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// 5) Psychological Support: couch + heart pulse
const PsychSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gPsychDVS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowPsychDVS" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychDVS)" />

    <g transform="translate(100,190)" filter="url(#glowPsychDVS)">
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

// 6) Evidence Preservation: vault + document flow
const EvidenceSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Evidence Preservation and Case Management" className="w-full h-full" {...props}>
    <BG id="gEvDVS" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowEvDVS" std={7} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvDVS)" />

    {/* vault */}
    <g transform="translate(100,80)" filter="url(#glowEvDVS)">
      <rect x="0" y="0" width="240" height="220" rx="20" fill={color.white} stroke={color.indigo300} sw="3" />
      <circle cx="120" cy="110" r="46" fill={color.indigo100} stroke={color.indigo400} strokeWidth="4" />
      <circle cx="120" cy="110" r="6" fill={color.indigo600} />
      {[0,60,120,180,240,300].map((a,i)=>(
        <rect key={i} x="118" y="60" width="4" height="20" fill={color.indigo600} transform={`rotate(${a},120,110)`} />
      ))}
    </g>

    {/* document flow */}
    <g transform="translate(380,110)">
      <Card x="0" y="0" w="280" h="150" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="28" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="80" width="120" height="10" rx="5" fill={color.slate500} />
      <path d="M240 40c24 10 34 20 40 36" stroke={color.emerald600} strokeWidth="6" fill="none" />
    </g>
  </svg>
);

// 7) Continuous Monitoring: radar + notifications + shield
const MonitoringSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Continuous Monitoring and Resources" className="w-full h-full" {...props}>
    <BG id="gMonDVS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowMonDVS" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gMonDVS)" />

    {/* radar */}
    <g transform="translate(120,120)" opacity="0.95">
      <circle cx="100" cy="70" r="60" fill={color.white} stroke={color.cyan300} strokeWidth="4" />
      <circle cx="100" cy="70" r="40" fill="none" stroke={color.cyan200} />
      <circle cx="100" cy="70" r="20" fill="none" stroke={color.cyan200} />
      <path d="M100 70 L156 46" stroke={color.indigo600} strokeWidth="6">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 100 70" to="360 100 70" dur="6s" repeatCount="indefinite" />
      </path>
    </g>

    {/* notifications */}
    <g transform="translate(340,110)" filter="url(#glowMonDVS)">
      <Card x="0" y="0" w="300" h="160" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="28" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="78" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="110" width="120" height="14" rx="7" fill={color.emerald400} />
    </g>
  </svg>
);

// 8) Commitment: team + shield + workflow tiles
const CommitmentSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Organization’s Commitment to Victim Protection" className="w-full h-full" {...props}>
    <BG id="gCommitDVS" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowCommitDVS" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCommitDVS)" />

    {/* team nodes */}
    <g transform="translate(120,120)" filter="url(#glowCommitDVS)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      <circle cx="120" cy="-20" r="24" fill={color.indigo400} />
      <circle cx="60" cy="60" r="24" fill={color.emerald400} />
      <path d="M0 0L60 60L120 -20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>

    {/* hub + shield */}
    <g transform="translate(380,70)" filter="url(#glowCommitDVS)">
      <Card x="0" y="0" w="320" h="220" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <g transform="translate(210,18)">
        <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
        <path d="M16 40l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
      {/* tiles */}
      <g transform="translate(24,24)">
        <rect x="0" y="0" width="150" height="80" rx="12" fill={color.indigo100} />
        <rect x="0" y="96" width="150" height="80" rx="12" fill={color.cyan100} />
        <rect x="160" y="48" width="120" height="64" rx="12" fill={color.emerald100} />
      </g>
    </g>
  </svg>
);

// 9) Conclusion: ribbon + arcs of progress
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Conclusion: Holistic Support and Protection for Digital Victims" className="w-full h-full" {...props}>
    <BG id="gConclusionDVS" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConclusionDVS)" />
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
export default function DigitalVictimSupport() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    ImmediateSupportSVG,
    LegalSVG,
    DataProtectionSVG,
    PsychSVG,
    EvidenceSVG,
    MonitoringSVG,
    CommitmentSVG,
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
        <span className="text-gray-700" aria-current="page">Digital Victim Support &amp; Protection</span>
      </motion.nav>

      {/* Hero with Video-SVG (hacker ► officer ► protection) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Immediate", "Legal", "Data", "Psych", "Evidence", "Monitoring", "Commitment"].map((pill) => (
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
              <VideoHeroDigitalSupport
                src="/assets/video/digital-victim-support-hero.mp4"
                poster="/assets/video/digital-victim-support-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] || IntroSVG;
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
