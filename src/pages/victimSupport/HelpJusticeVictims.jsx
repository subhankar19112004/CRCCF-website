// src/pages/victimSupport/HelpJusticeVictims.jsx
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
  title: "Help & Justice for Victims – CRCCF",
  tagline: "Swift Help. Fair Justice. Empowered Recovery.",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Providing Help and Justice",
      content: `In today’s rapidly advancing digital environment, victims of cybercrime often face confusion, fear, and uncertainty regarding where to seek help. The “Help & Justice for Victims” sub-card from CRCCF is designed to provide comprehensive guidance and support, ensuring that victims have access to legal remedies, psychological support, and practical assistance.
CRCCF ensures that victims never face cybercrime challenges alone, offering structured, empathetic, and reliable support at every stage. Our mission is to make justice accessible and help immediate, so that every victim can confidently navigate their recovery journey.`,
      svg: "IntroSVG",
    },
    {
      id: "immediate-assistance",
      heading: "2. Right to Immediate Assistance",
      content: `Victims have the right to receive prompt and effective help following a cybercrime incident. This includes guidance on reporting the incident, securing crucial digital evidence, and understanding available legal remedies.
CRCCF acts as a first point of contact, providing clear instructions and rapid response to prevent further exploitation or damage. Immediate assistance ensures that victims feel supported, safe, and empowered, allowing them to take timely actions while minimizing risk.`,
      svg: "AssistSVG",
    },
    {
      id: "legal-representation",
      heading: "3. Right to Legal Representation",
      content: `Access to experienced legal counsel is critical for victims seeking justice. Victims are entitled to professional legal guidance from cyber law experts who assist in complaint registration, case documentation, and court proceedings.
CRCCF ensures continuous legal support, helping victims understand their rights, present evidence accurately, and pursue remedies confidently. Our legal experts empower victims to navigate complex judicial processes without fear or uncertainty, ensuring accountability and fair outcomes.`,
      svg: "LegalSVG",
    },
    {
      id: "protection-of-rights",
      heading: "4. Protection of Rights and Interests",
      content: `Victims have the right to protect their personal, financial, and digital interests throughout legal proceedings. This includes protection from retaliation, intimidation, or subsequent cyber threats.
CRCCF prioritizes victim safety, monitoring potential risks, safeguarding sensitive information, and advocating for victims’ interests during legal and administrative processes. Every action taken is focused on preserving rights and fostering a secure recovery environment.`,
      svg: "ProtectionSVG",
    },
    {
      id: "psychological-support",
      heading: "5. Access to Psychological and Emotional Support",
      content: `Cybercrime often leaves victims emotionally vulnerable, stressed, and anxious. Victims are entitled to professional counselling, therapy, and cyber-psychology guidance to address these impacts.
CRCCF provides personalized emotional support, helping victims manage psychological trauma, regain confidence, and actively engage in legal proceedings. By prioritizing emotional recovery, we ensure victims are mentally prepared and resilient throughout their pursuit of justice.`,
      svg: "PsychSVG",
    },
    {
      id: "evidence",
      heading: "6. Evidence Collection and Case Strengthening",
      content: `Proper evidence collection is essential for effective justice. Victims have the right to professional guidance in preserving emails, financial records, social media data, and other critical digital content.
CRCCF provides both technical and legal expertise, ensuring that all evidence is documented to meet legal standards. Strengthened cases increase the likelihood of favorable outcomes, giving victims confidence that their claims are supported by solid proof.`,
      svg: "EvidenceSVG",
    },
    {
      id: "role",
      heading: "7. CRCCF’s Role in Delivering Help and Justice",
      content: `CRCCF is committed to providing complete support and securing justice for every victim. Our organization integrates legal expertise, psychological support, and practical guidance to create a robust, empathetic, and efficient support system.
From assisting in complaint registration to advocating for victims in court, CRCCF ensures that every step of the journey is transparent, safe, and effective. We restore trust in the justice process while empowering victims to take control of their recovery.`,
      svg: "RoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Comprehensive Support for Victims",
      content: `Help and justice are inseparable for cybercrime victims. Victims have the right to immediate assistance, legal representation, protection of interests, emotional support, and evidence preservation to ensure fair outcomes.
CRCCF combines these elements to deliver holistic, professional, and empathetic support. Victims can approach us without hesitation, confident that their rights, safety, and dignity are fully prioritized. With CRCCF, every victim receives trusted guidance, structured relief, and unwavering support, enabling them to regain security, peace of mind, and faith in justice.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: 2–3 police/investigation officers sweep an area with flashlights,
   tracking a masked cybercriminal. The <video> sits masked in a rounded stage;
   animated vector overlay shows officers moving/search cones. */
const VideoHeroHelpJustice = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Help & Justice – Investigation in Action";
  const desc =
    "Cartoon-styled investigators with flashlights searching for a cybercriminal, layered over a masked video background.";

  // Reduced-motion or no-video fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="hjTitle hjDesc" className="w-full h-auto">
        <title id="hjTitle">{title}</title>
        <desc id="hjDesc">{desc}</desc>
        <defs>
          <linearGradient id="hjGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="hjSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="hjStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#hjSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#hjGrad)" />
        </g>
        <g clipPath="url(#hjStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#hjGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {InvestigationOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="hjBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="55%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="hjSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="hjStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#hjSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#hjBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#hjStage2)">
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

      {InvestigationOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: officers tracking suspect ----------------------- */
function InvestigationOverlay() {
  return (
    <g transform="translate(710,44)">
      {/* ground shadow */}
      <rect x="-70" y="360" width="330" height="24" rx="12" fill={color.black} opacity="0.06" />

      {/* Suspect silhouette (masked hoodie) */}
      <g transform="translate(140,160)">
        <path d="M20 0c-20 0-36 16-36 36v36h72v-36c0-20-16-36-36-36z" fill={color.slate700} opacity="0.9" />
        <circle cx="20" cy="-16" r="16" fill={color.slate900} />
        {/* binary rain on hoodie */}
        {[...Array(6)].map((_, i) => (
          <text key={i} x={-12 + i * 8} y="18" fontSize="8" fill={color.indigo300} opacity="0.6">
            01
            <animate attributeName="y" values="18;36;18" dur={`${1.6 + i * 0.15}s`} repeatCount="indefinite" />
          </text>
        ))}
      </g>

      {/* Officer 1 with flashlight cone */}
      <g transform="translate(10,180)">
        {/* body */}
        <path d="M30 90c-18 0-30 14-30 30v26h60v-26c0-16-12-30-30-30z" fill={color.indigo400} />
        <circle cx="30" cy="70" r="14" fill="#F5D0A6" />
        <rect x="26" y="112" width="8" height="18" rx="4" fill={color.cyan500} />
        {/* cone */}
        <path d="M40 124L160 80 160 150Z" fill={color.cyan200} opacity="0.35">
          <animate attributeName="d" dur="2.8s" repeatCount="indefinite"
            values="M40 124L160 80 160 150Z; M40 124L170 112 160 150Z; M40 124L160 80 160 150Z" />
        </path>
      </g>

      {/* Officer 2 with flashlight cone */}
      <g transform="translate(80,140)">
        <path d="M30 90c-18 0-30 14-30 30v26h60v-26c0-16-12-30-30-30z" fill={color.emerald400} />
        <circle cx="30" cy="70" r="14" fill="#F4C9A5" />
        <rect x="26" y="112" width="8" height="18" rx="4" fill={color.cyan500} />
        <path d="M40 124L200 120 200 164Z" fill={color.cyan300} opacity="0.32">
          <animate attributeName="d" dur="2.6s" repeatCount="indefinite"
            values="M40 124L200 120 200 164Z; M40 124L184 104 200 164Z; M40 124L200 120 200 164Z" />
        </path>
      </g>

      {/* Investigator with tablet + scanning arc */}
      <g transform="translate(40,80)">
        <rect x="0" y="0" width="38" height="26" rx="6" fill={color.white} stroke={color.slate300} />
        <rect x="6" y="6" width="26" height="6" rx="3" fill={color.indigo600} />
        <path d="M12 26c22-10 44-10 66 0" stroke={color.cyan500} strokeWidth="6" fill="none" opacity="0.8">
          <animate attributeName="d" values="M12 26c22-10 44-10 66 0; M12 26c26-8 52-8 66 0; M12 26c22-10 44-10 66 0" dur="2.8s" repeatCount="indefinite" />
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
// 1) Intro: courthouse+help desk + guiding arrows
const IntroSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Introduction: Providing Help and Justice" className="w-full h-full" {...props}>
    <BG id="gIntroHJ" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowIntroHJ" std={8} alpha={0.45} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroHJ)" />

    {/* courthouse */}
    <g transform="translate(80,80)" opacity="0.95" filter="url(#glowIntroHJ)">
      <polygon points="80,0 200,0 240,40 40,40" fill={color.indigo100} stroke={color.indigo300} strokeWidth="3" />
      <rect x="60" y="40" width="200" height="140" rx="10" fill={color.white} stroke={color.slate300} />
      <rect x="110" y="70" width="40" height="80" rx="6" fill={color.indigo100} />
      <rect x="170" y="70" width="40" height="80" rx="6" fill={color.indigo100} />
    </g>

    {/* help desk panel */}
    <g transform="translate(360,110)" filter="url(#glowIntroHJ)">
      <Card x="0" y="0" w="340" h="190" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="24" width="220" height="14" rx="7" fill={color.indigo600} />
      <rect x="20" y="52" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="74" width="160" height="10" rx="5" fill={color.slate500} />
      {/* arrows indicating guidance */}
      <path d="M240 130c30-20 60-20 90 0" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round">
        <animate attributeName="d" dur="3s" repeatCount="indefinite"
          values="M240 130c30-20 60-20 90 0; M240 130c34-16 68-16 90 0; M240 130c30-20 60-20 90 0" />
      </path>
    </g>
  </svg>
);

// 2) Immediate Assistance: hotline card + shield + quick actions
const AssistSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Right to Immediate Assistance" className="w-full h-full" {...props}>
    <BG id="gAssistHJ" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
    <SoftGlow id="glowAssistHJ" std={8} alpha={0.45} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAssistHJ)" />

    <g transform="translate(80,90)" filter="url(#glowAssistHJ)">
      <Card x="0" y="0" w="280" h="180" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="30" width="190" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="58" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="80" width="130" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="110" height="16" rx="8" fill={color.emerald400} />
    </g>

    {/* shield + lightning (rapid response) */}
    <g transform="translate(420,90)">
      <path d="M60 -20l90 36v40c0 44-30 80-90 104-60-24-90-60-90-104v-40l90-36z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M60 22l14 20-18 8 20 12-16 22" stroke={color.rose400} strokeWidth="6" fill="none" />
    </g>
  </svg>
);

// 3) Legal Representation: scale of justice + stamped file
const LegalSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Right to Legal Representation" className="w-full h-full" {...props}>
    <BG id="gLegalHJ" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalHJ" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalHJ)" />

    {/* scales */}
    <g transform="translate(80,110)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
    </g>

    {/* file + approved stamp */}
    <g transform="translate(320,90)" filter="url(#glowLegalHJ)">
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

// 4) Protection of Rights: lock + privacy mask + watch
const ProtectionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Protection of Rights and Interests" className="w-full h-full" {...props}>
    <BG id="gProtHJ" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowProtHJ" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gProtHJ)" />

    {/* lock */}
    <g transform="translate(120,120)">
      <path d="M80 60v-24a24 24 0 0 1 48 0v24" stroke={color.indigo600} strokeWidth="8" fill="none" />
      <Card x="70" y="60" w="100" h="90" r="14" fill={color.white} stroke={color.indigo600} sw="4" />
      <circle cx="120" cy="110" r="10" fill={color.indigo600} />
    </g>

    {/* eye mask (privacy) */}
    <g transform="translate(380,110)" opacity="0.9" filter="url(#glowProtHJ)">
      <path d="M0 40c40-26 140-26 180 0-40 26-140 26-180 0z" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <circle cx="50" cy="40" r="10" fill={color.indigo600} />
      <circle cx="130" cy="40" r="10" fill={color.indigo600} />
    </g>
  </svg>
);

// 5) Psychological Support: couch + calm pulse
const PsychSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Access to Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gPsychHJ" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowPsychHJ" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychHJ)" />

    <g transform="translate(100,190)" filter="url(#glowPsychHJ)">
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

// 6) Evidence Collection: vault + chain-of-custody
const EvidenceSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Evidence Collection and Case Strengthening" className="w-full h-full" {...props}>
    <BG id="gEvHJ" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowEvHJ" std={7} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvHJ)" />

    {/* vault */}
    <g transform="translate(100,80)" filter="url(#glowEvHJ)">
      <rect x="0" y="0" width="240" height="220" rx="20" fill={color.white} stroke={color.indigo300} sw="3" />
      <circle cx="120" cy="110" r="46" fill={color.indigo100} stroke={color.indigo400} strokeWidth="4" />
      <circle cx="120" cy="110" r="6" fill={color.indigo600} />
      {[0,60,120,180,240,300].map((a,i)=>(
        <rect key={i} x="118" y="60" width="4" height="20" fill={color.indigo600} transform={`rotate(${a},120,110)`} />
      ))}
    </g>

    {/* chain-of-custody timeline */}
    <g transform="translate(380,120)">
      <rect x="0" y="40" width="360" height="8" rx="4" fill={color.slate300} />
      {[0,120,240,360].map((x,i)=>(
        <g key={i} transform={`translate(${x},40)`}>
          <circle cx="0" cy="0" r="10" fill={color.emerald400} />
          <rect x="-24" y="-32" width="48" height="16" rx="6" fill={color.white} stroke={color.slate300} />
        </g>
      ))}
    </g>
  </svg>
);

// 7) CRCCF Role: team hub + shield + workflow tiles
const RoleSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="CRCCF’s Role in Delivering Help and Justice" className="w-full h-full" {...props}>
    <BG id="gRoleHJ" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowRoleHJ" std={8} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gRoleHJ)" />

    {/* team nodes */}
    <g transform="translate(120,120)" filter="url(#glowRoleHJ)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      <circle cx="120" cy="-20" r="24" fill={color.indigo400} />
      <circle cx="60" cy="60" r="24" fill={color.emerald400} />
      <path d="M0 0L60 60L120 -20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>

    {/* hub + shield */}
    <g transform="translate(380,70)" filter="url(#glowRoleHJ)">
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

// 8) Conclusion: ribbon + arcs of progress
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Conclusion: Comprehensive Support for Victims" className="w-full h-full" {...props}>
    <BG id="gConclusionHJ" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConclusionHJ)" />
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
export default function HelpJusticeVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    AssistSVG,
    LegalSVG,
    ProtectionSVG,
    PsychSVG,
    EvidenceSVG,
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
        <span className="text-gray-700" aria-current="page">Help &amp; Justice for Victims</span>
      </motion.nav>

      {/* Hero with Video-SVG (investigation scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Immediate Help", "Legal", "Protection", "Psych Support", "Evidence", "Justice"].map((pill) => (
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
              {/* Supply your actual video assets at these paths */}
              <VideoHeroHelpJustice
                src="/assets/video/help-justice-hero.mp4"
                poster="/assets/video/help-justice-hero.jpg"
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
