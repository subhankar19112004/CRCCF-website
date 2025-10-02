// src/pages/victimSupport/DigitalJusticeSupportServices.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

/* =============================== Motion =============================== */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.28, when: "beforeChildren", staggerChildren: 0.06 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* =============================== Palette =============================== */
const color = {
  cyan25:"#F5FEFF", cyan50:"#ECFEFF", cyan100:"#CFFAFE", cyan300:"#67E8F9", cyan500:"#06B6D4",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald25:"#F3FCF7", emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* ================= DATA (kept 100% intact, nothing edited) ================= */
const data = {
  title: "Digital Justice Support Services – CRCCF",
  tagline: "Guiding, Protecting, and Empowering Victims in the Digital Realm",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Supporting Victims in the Digital Era",
      content: `As technology advances, cybercrime increasingly affects individuals, businesses, and communities. The subcard “Digital Justice Support Services” emphasizes providing victims with comprehensive guidance to navigate the digital justice system. Our organization ensures that victims receive legal support, technical expertise, emotional counselling, and advocacy for effective and accessible justice.
CRCCF delivers a holistic framework that integrates multiple support mechanisms. By addressing all aspects of digital crime, our organization empowers victims to respond confidently, seek justice effectively, and recover safely while navigating complex cyber environments.`,
      svg: "IntroSVG",
    },
    {
      id: "comprehensive-support",
      heading: "2. Right to Comprehensive Support",
      content: `Victims of cybercrime have the right to thorough support covering legal, technical, and emotional needs. Assistance must be available at every stage of reporting, evidence collection, legal procedures, and recovery.
Our organization provides integrated digital justice services, guiding victims step by step. This approach strengthens their ability to act decisively, pursue justice confidently, and mitigate the complexities of digital crimes.`,
      svg: "ComprehensiveSVG",
    },
    {
      id: "legal-assistance",
      heading: "3. Legal Assistance and Guidance",
      content: `Access to skilled legal professionals is crucial for pursuing digital justice. Victims have the right to consult experts who provide guidance on filing complaints, understanding cyber laws, and seeking civil or criminal remedies.
CRCCF ensures that victims are supported throughout the legal process. Proper documentation, case preparation, and court guidance are provided to guarantee that victims’ rights are protected and legal proceedings proceed smoothly.`,
      svg: "LegalAssistSVG",
    },
    {
      id: "forensics",
      heading: "4. Cyber Forensics and Technical Support",
      content: `Digital justice often requires expert technical investigation to validate cyber incidents. Victims have the right to forensic analysis of emails, social media, transactions, and other digital data.
Our organization collaborates with certified cyber forensic specialists to preserve evidence accurately. This ensures that cases are supported with reliable, admissible proof, strengthening legal outcomes and safeguarding victims’ interests.`,
      svg: "ForensicsSVG",
    },
    {
      id: "emotional-support",
      heading: "5. Psychological and Emotional Support",
      content: `Cybercrime can cause severe psychological distress, including anxiety, fear, and trauma. Victims have the right to counselling and therapy to maintain mental well-being.
CRCCF provides cyber-psychology services to help victims regain confidence, process trauma, and engage fully in legal procedures. Continuous emotional guidance enables victims to recover while actively participating in justice processes.`,
      svg: "EmotionalSVG",
    },
    {
      id: "monitoring",
      heading: "6. Continuous Monitoring and Updates",
      content: `Victims have the right to stay informed about their cases, protective measures, and legal developments. Timely updates ensure active involvement and awareness throughout the justice process.
Our organization offers ongoing guidance, case monitoring, and advocacy. Transparent communication fosters trust, reduces uncertainty, and helps victims make informed decisions during their journey toward justice.`,
      svg: "MonitoringSVG",
    },
    {
      id: "advocacy",
      heading: "7. Advocacy and Protection of Rights",
      content: `Digital justice includes defending victims’ rights, interests, and sensitive information. Victims have the right to confidentiality, protection from retaliation, and legal representation in all forums.
CRCCF ensures every intervention respect dignity and promotes accountability. Victims are supported to navigate the justice system confidently while their rights and personal data remain secure.`,
      svg: "AdvocacySVG",
    },
    {
      id: "org-role",
      heading: "8. Organization’s Role in Digital Justice",
      content: `Our organization is committed to providing integrated digital justice support. By combining legal guidance, forensic expertise, emotional counselling, and advocacy, CRCCF creates a comprehensive framework for victim assistance.
Every step is handled professionally, confidentially, and empathetically. Our organization ensures that victims receive the tools, guidance, and protection necessary to achieve justice and reclaim control over their digital lives.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Holistic Digital Justice for Victims",
      content: `Digital Justice Support Services equip victims with legal, technical, and emotional resources to address cybercrime effectively. Upholding these rights ensures victims can pursue justice confidently, safeguard their interests, and recover securely from digital harm.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate support, empowering every victim to access justice, reclaim control, and navigate the digital realm safely and confidently.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
/* Story (clear + “cartoon-realistic”):
   - Left: Investigation officer approaches calmly (badge, tablet).
   - Right: Victim at desk with hacked laptop (alert icon).
   - Center tablet UI emits protective shield wave.
   - Background shows subtle network grid + justice motifs.
*/
const VideoHeroDJSS = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Digital Justice Support — Officer Assists Victim";
  const desc = "Investigation officer guiding a victim; protective waves; justice motifs; clear kid-friendly narrative.";

  if (prefersReduced || !src) {
    // Animated fallback (no external assets)
    return (
      <svg viewBox="0 0 1100 520" role="img" aria-labelledby="djssTitle djssDesc" className="w-full h-auto">
        <title id="djssTitle">{title}</title>
        <desc id="djssDesc">{desc}</desc>
        <defs>
          <linearGradient id="djssGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo50}>
              <animate attributeName="offset" values="0;0.2;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.cyan50}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald50} />
          </linearGradient>
          <filter id="softDJSS" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
          </filter>
          <clipPath id="stageDJSS">
            <rect x="40" y="44" width="700" height="432" rx="28" />
          </clipPath>
        </defs>

        <g filter="url(#softDJSS)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#djssGrad)" />
        </g>

        <g clipPath="url(#stageDJSS)">
          <rect x="0" y="0" width="1100" height="520" fill="url(#djssGrad)">
            <animate attributeName="x" values="0;18;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {OverlayOfficerVictim()}
      </svg>
    );
  }

  // Masked video with overlay drawings
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgDJSS" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo50} />
          <stop offset="60%" stopColor={color.cyan50} />
          <stop offset="100%" stopColor={color.emerald50} />
        </linearGradient>
        <filter id="softDJSS2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
        </filter>
        <clipPath id="stageDJSS2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softDJSS2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgDJSS)" />
      </g>

      <g clipPath="url(#stageDJSS2)">
        {poster ? (
          <image href={poster} x="0" y="0" width="1100" height="520" preserveAspectRatio="xMidYMid slice" opacity="0.9" />
        ) : null}
        <foreignObject x="0" y="0" width="1100" height="520">
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

      {OverlayOfficerVictim()}
    </svg>
  );
};

function OverlayOfficerVictim() {
  return (
    <g transform="translate(770,52)">
      {/* floor shade */}
      <rect x="-90" y="420" width="370" height="26" rx="13" fill={color.black} opacity="0.06" />

      {/* network grid + subtle scales */}
      <g transform="translate(-70,0)" opacity="0.2">
        {[0,1,2,3,4,5].map((i)=>(
          <path key={i} d={`M${i*40} 0v420`} stroke={color.indigo800} strokeWidth="1" />
        ))}
        {[0,1,2,3,4,5,6,7,8].map((i)=>(
          <path key={`h-${i}`} d={`M0 ${i*48}h240`} stroke={color.indigo800} strokeWidth="1" />
        ))}
      </g>
      <g transform="translate(60,10)" opacity="0.25">
        <path d="M60 20 v100" stroke={color.indigo800} strokeWidth="6" />
        <circle cx="60" cy="20" r="8" fill={color.indigo800} />
        <path d="M20 56 h80" stroke={color.indigo800} strokeWidth="6" />
        <circle cx="20" cy="96" r="16" fill={color.indigo100} />
        <circle cx="100" cy="96" r="16" fill={color.indigo100} />
      </g>

      {/* Officer (left) with badge + tablet */}
      <g transform="translate(-10,170)">
        <circle cx="24" cy="-6" r="12" fill="#EBC4A0" />
        <path d="M6 10h36v28H6z" fill={color.indigo400} />
        <rect x="4" y="38" width="40" height="10" rx="5" fill={color.indigo600} />
        {/* badge */}
        <path d="M38 6l10 4v6c0 7-4 12-10 15-6-3-10-8-10-15v-6l10-4z" fill={color.emerald300} stroke={color.emerald600} />
        {/* tablet */}
        <g transform="translate(70,-8)">
          <rect x="0" y="0" width="110" height="70" rx="12" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <rect x="14" y="14" width="72" height="10" rx="5" fill={color.indigo600} />
          <rect x="14" y="32" width="62" height="8" rx="4" fill={color.slate500} />
          {/* protective wave */}
          <path d="M14 54c28-10 56-10 84 0" stroke={color.cyan300} strokeWidth="4" fill="none">
            <animate attributeName="d" values="
              M14 54c28-10 56-10 84 0;
              M14 54c28-14 56-6 84 0;
              M14 54c28-10 56-10 84 0" dur="2.6s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      {/* Victim (right) w/ hacked laptop */}
      <g transform="translate(200,210)">
        <circle cx="18" cy="-8" r="11" fill="#F4C9A5" />
        <path d="M2 6h32v24H2z" fill={color.cyan300} />
        {/* laptop */}
        <g transform="translate(56,-12)">
          <rect x="0" y="0" width="120" height="70" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <path d="M8 52h104" stroke={color.slate200} strokeWidth="6" />
          {/* alert */}
          <g transform="translate(90,14)">
            <circle cx="0" cy="0" r="12" fill={color.rose400} />
            <rect x="-2" y="-6" width="4" height="10" rx="2" fill={color.white} />
            <rect x="-2" y="6" width="4" height="4" rx="2" fill={color.white} />
          </g>
        </g>
      </g>
    </g>
  );
}

/* ============================== SVG helpers ============================== */
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
const SoftGlow = ({ id = "glow", std = 7, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* ===================== Complex Section Illustrations ===================== */
/* 1) Intro: courthouse grid + support card */
const IntroSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Introduction: Supporting Victims in the Digital Era" className="w-full h-full" {...props}>
    <BG id="gIntroDJ" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowIntroDJ" std={9} alpha={0.45} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIntroDJ)" />
    <g transform="translate(80,80)" filter="url(#glowIntroDJ)">
      <path d="M70 180c0-100 60-160 160-160s160 60 160 160" stroke={color.indigo300} strokeWidth="10" fill="none" />
      <rect x="110" y="120" width="240" height="120" rx="18" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="136" y="146" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="136" y="174" width="160" height="10" rx="5" fill={color.slate500} />
    </g>
    <g transform="translate(520,110)">
      <circle cx="0" cy="0" r="18" fill={color.cyan500} />
      <circle cx="60" cy="40" r="18" fill={color.indigo400} />
      <circle cx="120" cy="0" r="18" fill={color.emerald400} />
      <path d="M0 0L60 40L120 0" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>
  </svg>
);

/* 2) Comprehensive Support: tri-stack (legal/tech/emotional) linked to hub */
const ComprehensiveSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Comprehensive Support" className="w-full h-full" {...props}>
    <BG id="gComp" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowComp" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gComp)" />
    <g transform="translate(90,80)" filter="url(#glowComp)">
      <Card x="0" y="0" w="180" h="80" r="16" fill={color.white} stroke={color.indigo300} sw="3" />
      <Card x="0" y="96" w="180" h="80" r="16" fill={color.white} stroke={color.cyan300} sw="3" />
      <Card x="0" y="192" w="180" h="80" r="16" fill={color.white} stroke={color.emerald300} sw="3" />
      <rect x="24" y="24" width="120" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="120" width="120" height="12" rx="6" fill={color.cyan500} />
      <rect x="24" y="216" width="120" height="12" rx="6" fill={color.emerald600} />
    </g>
    <g transform="translate(340,120)">
      <Card x="0" y="0" w="360" h="180" r="18" />
      <path d="M-70 40 C 0 40, 0 40, 0 40" stroke={color.indigo400} strokeWidth="6" fill="none" />
      <path d="M-70 136 C 0 136, 0 136, 0 136" stroke={color.cyan500} strokeWidth="6" fill="none" />
      <path d="M-70 232 C 0 176, 0 176, 0 176" stroke={color.emerald600} strokeWidth="6" fill="none" />
      <rect x="24" y="26" width="220" height="12" rx="6" fill={color.slate500} />
      <rect x="24" y="54" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="80" width="170" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

/* 3) Legal Assistance: courthouse + doc stamps */
const LegalAssistSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Legal Assistance and Guidance" className="w-full h-full" {...props}>
    <BG id="gLegalDJ" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalDJ" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalDJ)" />
    <g transform="translate(80,100)" filter="url(#glowLegalDJ)">
      <Card x="0" y="40" w="300" h="160" r="18" />
      <rect x="24" y="70" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="98" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="120" width="140" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(220,118)">
        <circle cx="0" cy="0" r="16" fill={color.emerald400} />
        <path d="M-8 0l6 6 12-12" stroke={color.white} strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
    </g>
    <g transform="translate(460,90)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
    </g>
  </svg>
);

/* 4) Forensics: magnifier on email + chain of custody */
const ForensicsSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Cyber Forensics and Technical Support" className="w-full h-full" {...props}>
    <BG id="gForen" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowForen" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gForen)" />
    <g transform="translate(90,90)" filter="url(#glowForen)">
      <Card x="0" y="0" w="300" h="180" r="18" />
      <rect x="24" y="24" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="74" width="140" height="10" rx="5" fill={color.slate500} />
      {/* envelope icon */}
      <g transform="translate(230,120)">
        <rect x="0" y="0" width="52" height="36" rx="6" fill={color.indigo100} stroke={color.indigo300} />
        <path d="M0 0l26 20 26-20" stroke={color.indigo400} strokeWidth="3" fill="none" />
      </g>
    </g>
    {/* magnifier */}
    <g transform="translate(440,120)">
      <circle cx="56" cy="56" r="54" fill={color.white} stroke={color.slate300} strokeWidth="4" />
      <circle cx="56" cy="56" r="36" fill={color.cyan100} />
      <rect x="102" y="94" width="18" height="66" rx="9" fill={color.slate400} transform="rotate(40 111 127)" />
    </g>
  </svg>
);

/* 5) Emotional Support: chat bubbles + heart pulse */
const EmotionalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gEmo" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowEmo" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEmo)" />
    <g transform="translate(100,110)" filter="url(#glowEmo)">
      <rect x="0" y="0" width="280" height="140" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="22" y="24" width="170" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="52" width="150" height="10" rx="5" fill={color.slate500} />
      <path d="M22 94h120" stroke={color.slate400} strokeWidth="6" />
    </g>
    <g transform="translate(460,120)">
      <rect x="0" y="0" width="220" height="120" rx="16" fill={color.white} stroke={color.slate300} sw="3" />
      <g transform="translate(150,18)">
        <path d="M0 16c0-10 8-16 16-16 6 0 12 4 16 10 6-6 10-10 16-10 10 0 16 8 16 16 0 22-32 38-32 38S0 38 0 16z" fill={color.rose100} stroke={color.rose400} />
        <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2s" repeatCount="indefinite" />
      </g>
      <rect x="18" y="24" width="110" height="12" rx="6" fill={color.cyan500} />
      <rect x="18" y="48" width="90" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

/* 6) Monitoring: timeline + bell + progress */
const MonitoringSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Continuous Monitoring and Updates" className="w-full h-full" {...props}>
    <BG id="gMon" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowMon" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gMon)" />
    <g transform="translate(90,80)">
      <Card x="0" y="0" w="280" h="180" r="18" />
      <path d="M0 44h280" stroke={color.slate200} strokeWidth="3" />
      {[0,1,2,3].map((i)=>(
        <rect key={i} x={20+i*62} y="60" width="42" height="28" rx="8" fill={i===2?color.emerald100:color.indigo100} />
      ))}
    </g>
    <g transform="translate(420,110)" filter="url(#glowMon)">
      <Card x="0" y="0" w="300" h="160" r="18" />
      <rect x="20" y="28" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="80" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="112" width="120" height="14" rx="7" fill={color.emerald400} />
    </g>
    <g transform="translate(420,290)">
      <rect x="0" y="0" width="300" height="8" rx="4" fill={color.slate300} />
      {[0,75,150,225,300].map((x,i)=>(
        <circle key={i} cx={x} cy="4" r="7" fill={color.cyan500} />
      ))}
    </g>
  </svg>
);

/* 7) Advocacy: shield + privacy lock + handshake */
const AdvocacySVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Advocacy and Protection of Rights" className="w-full h-full" {...props}>
    <BG id="gAdv" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowAdv" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gAdv)" />
    <g transform="translate(420,70)" filter="url(#glowAdv)">
      <Card x="0" y="0" w="320" h="220" r="18" />
      <g transform="translate(210,18)">
        <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
        <path d="M16 40l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(24,24)">
        <rect x="0" y="0" width="150" height="80" rx="12" fill={color.indigo100} />
        <rect x="0" y="96" width="150" height="80" rx="12" fill={color.cyan100} />
        <rect x="160" y="48" width="120" height="64" rx="12" fill={color.emerald100} />
      </g>
    </g>
    {/* handshake */}
    <g transform="translate(110,220)" stroke={color.indigo600} strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9">
      <path d="M0 0c60-30 100-30 160 0" />
      <circle cx="-6" cy="0" r="14" fill={color.indigo600} />
      <circle cx="166" cy="0" r="14" fill={color.indigo600} />
    </g>
  </svg>
);

/* 8) Org Role: hub + nodes */
const OrgRoleSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Organization’s Role in Digital Justice" className="w-full h-full" {...props}>
    <BG id="gRoleDJ" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowRoleDJ" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRoleDJ)" />
    <g transform="translate(100,120)" filter="url(#glowRoleDJ)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      <circle cx="120" cy="-20" r="24" fill={color.indigo400} />
      <circle cx="60" cy="60" r="24" fill={color.emerald400} />
      <path d="M0 0L60 60L120 -20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>
    <g transform="translate(380,90)" filter="url(#glowRoleDJ)">
      <Card x="0" y="0" w="360" h="200" r="18" />
      <rect x="24" y="26" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="54" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="130" height="14" rx="7" fill={color.emerald400} />
    </g>
  </svg>
);

/* 9) Conclusion: ribbon + arcs + checks */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Conclusion: Holistic Digital Justice for Victims" className="w-full h-full" {...props}>
    <BG id="gConcDJ" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConcDJ)" />
    <rect x="90" y="90" width="16" height="180" rx="8" fill={color.indigo600} />
    <path d="M106 92h160l-24 24 24 24H106z" fill={color.cyan500} />
    <g transform="translate(240,240)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9">
      <path d="M0 0c60-40 120-40 180 0" />
      <path d="M180 0c60-40 120-40 120 0" />
    </g>
    <g transform="translate(520,120)">
      {[0,1,2].map((i)=>(
        <g key={i} transform={`translate(${i*46},${i%2?22:0})`}>
          <circle cx="0" cy="0" r="14" fill={color.emerald400} />
          <path d="M-8 0l6 6 12-12" stroke={color.white} strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
  </svg>
);

/* ============================= Section Wrapper ============================= */
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

/* =================================== Page =================================== */
export default function DigitalJusticeSupportServices() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    ComprehensiveSVG,
    LegalAssistSVG,
    ForensicsSVG,
    EmotionalSVG,
    MonitoringSVG,
    AdvocacySVG,
    OrgRoleSVG,
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
        <span className="text-gray-700" aria-current="page">Digital Justice Support Services</span>
      </motion.nav>

      {/* HERO: Officer helps victim (video-SVG self-contained) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Support", "Legal", "Forensics", "Emotional", "Monitoring", "Advocacy"].map((pill) => (
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
              {/* Point to your actual asset paths */}
              <VideoHeroDJSS
                src="/assets/video/digital-justice-support-hero.mp4"
                poster="/assets/video/digital-justice-support-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp =
            ({
              IntroSVG,
              ComprehensiveSVG,
              LegalAssistSVG,
              ForensicsSVG,
              EmotionalSVG,
              MonitoringSVG,
              AdvocacySVG,
              OrgRoleSVG,
              ConclusionSVG,
            }[sec.svg]) || IntroSVG;
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF supports victims with integrated digital justice services alongside law
            enforcement and judicial processes. All information is handled confidentially and in accordance with applicable laws.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
