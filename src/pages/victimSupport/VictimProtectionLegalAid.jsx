// src/pages/victimSupport/VictimProtectionLegalAid.jsx
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
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* ================= DATA (kept 100% intact, nothing edited) ================= */
const data = {
  title: "Victim Protection & Legal Aid – CRCCF",
  tagline: "Ensuring Safety, Legal Support, and Justice for Cybercrime Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Ensuring Safety and Justice",
      content: `Cybercrime victims often face complex challenges that require coordinated protection and legal assistance. The “Victim Protection & Legal Aid” sub-card highlights CRCCF’s commitment to providing holistic support, combining legal remedies, safety measures, and professional guidance.
Our organization ensures that victims are empowered, safeguarded, and fully informed, enabling them to navigate digital threats and legal processes confidently while pursuing justice effectively.`,
      svg: "IntroSVG",
    },
    {
      id: "immediate-protection",
      heading: "2. Right to Immediate Protection",
      content: `Victims have the right to prompt protective measures to mitigate further risks. This includes securing digital accounts, safeguarding personal information, and implementing preventive actions against harassment, fraud, or identity theft.

CRCCF delivers rapid support, ensuring that victims feel secure and protected while legal procedures are in progress. Immediate intervention not only prevents additional harm but also restores a sense of safety and control to the victim.`,
      svg: "ImmediateProtectionSVG",
    },
    {
      id: "legal-assistance",
      heading: "3. Access to Legal Assistance",
      content: `Victims are entitled to professional legal aid from experts in cyber laws, digital forensics, and data protection. Legal specialists assist in filing complaints, preparing case documents, and guiding victims through court or administrative procedures.
CRCCF provides step-by-step legal guidance, ensuring that victims understand their rights, options for remedies, and the correct legal steps to pursue justice. This empowers victims to take informed decisions confidently throughout their case.`,
      svg: "LegalAidSVG",
    },
    {
      id: "confidentiality",
      heading: "4. Right to Confidentiality",
      content: `Maintaining confidentiality is crucial for protection and legal integrity. Victims have the right to secure handling of personal, financial, and digital information, preventing misuse or public exposure.
CRCCF implements robust privacy measures and secure communication channels, ensuring that sensitive information remains protected during investigations and legal proceedings. Victims can rely on discretion and professionalism at every step.`,
      svg: "ConfidentialitySVG",
    },
    {
      id: "psych-support",
      heading: "5. Psychological Support and Counselling",
      content: `Cybercrime can cause emotional distress, fear, and trauma. Victims have the right to specialized counselling and cyber-psychology support to manage these challenges.
CRCCF offers tailored psychological guidance, helping victims cope with stress, regain confidence, and participate actively in their legal process. Emotional recovery is integral to achieving both personal well-being and effective justice.`,
      svg: "PsychSVG",
    },
    {
      id: "evidence",
      heading: "6. Evidence Collection and Case Strengthening",
      content: `Effective legal outcomes require accurate evidence collection and preservation. Victims have the right to professional assistance in documenting emails, transaction records, social media interactions, and other digital evidence without compromising integrity.
CRCCF guides victims through evidence management, ensuring that all digital proofs are legally admissible and strengthen the case. This increases the likelihood of holding perpetrators accountable while providing victims peace of mind regarding legal preparedness.`,
      svg: "EvidenceSVG",
    },
    {
      id: "updates",
      heading: "7. Continuous Monitoring and Updates",
      content: `Victims have the right to stay informed throughout their legal proceedings. CRCCF provides ongoing updates on investigation progress, court schedules, and protective measures, ensuring transparency and trust.
By maintaining regular communication, our organization ensures that victims remain engaged, aware, and reassured, knowing that every necessary step is being taken on their behalf.`,
      svg: "UpdatesSVG",
    },
    {
      id: "role",
      heading: "8. CRCCF’s Role in Protection and Legal Aid",
      content: `CRCCF is dedicated to delivering comprehensive protection and legal support for cybercrime victims. By combining expert legal counsel, psychological guidance, digital security measures, and evidence management, we ensure victims receive holistic and professional assistance.
Every intervention is conducted ethically, confidentially, and empathetically, prioritizing the victim’s rights while facilitating access to justice. Our approach guarantees that no victim feels unsupported or uncertain during their recovery journey.`,
      svg: "RoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Comprehensive Victim Protection and Legal Support",
      content: `Victim Protection & Legal Aid ensures that individuals affected by cybercrime are safe, informed, and empowered to pursue justice. Upholding these rights allows victims to protect themselves, seek legal remedies, and recover with confidence.
CRCCF remains committed to delivering professional, empathetic, and legally-backed support, guaranteeing that every cybercrime victim receives the protection, guidance, and justice they deserve. Victims can reach out without hesitation, trusting that our organization prioritizes their safety, rights, and well-being at all times.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Ultra-Complex Video SVG ========================== */
/* Storyboard (clear enough for kids):
   1) Left: Victim near a dim screen (worried). Center: Website card flickers.
   2) Right: Hooded hacker at a neon terminal sends red "attack" waves toward website.
   3) Officer enters from bottom-right holding a glowing shield; interposes shield; red waves deflect.
   4) Scales of justice rise. A legal document gets a big green check.
   5) Hacker’s terminal dims; a soft cuff line appears to the hacker.
   6) Victim’s screen brightens; lock + shield icon pulses.
   Video is masked; vector overlay provides the characters/props and animations.
*/
const VideoHeroVPLA = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Victim Protection & Legal Aid — Action Sequence";
  const desc = "Officer shields victim from hacker; justice scales rise; legal approval appears; safety restored.";

  if (prefersReduced || !src) {
    // Gradient + vector animation fallback
    return (
      <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vplaTitle vplaDesc" className="w-full h-auto">
        <title id="vplaTitle">{title}</title>
        <desc id="vplaDesc">{desc}</desc>
        <defs>
          <linearGradient id="vplaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.22;0" dur="9s" repeatCount="indefinite" />
            </stop>
            <stop offset="58%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.58;0.86;0.58" dur="9s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="softV" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
          </filter>
          <clipPath id="stageV">
            <rect x="40" y="44" width="700" height="432" rx="28" />
          </clipPath>
        </defs>

        <g filter="url(#softV)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#vplaGrad)" />
        </g>
        <g clipPath="url(#stageV)">
          <rect x="0" y="0" width="1100" height="520" fill="url(#vplaGrad)">
            <animate attributeName="x" values="0;24;0" dur="9s" repeatCount="indefinite" />
          </rect>
        </g>

        {OverlayVPLA()}
      </svg>
    );
  }

  // Full masked video with overlay
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgVPLA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="58%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="softV2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
        </filter>
        <clipPath id="stageV2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softV2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgVPLA)" />
      </g>

      <g clipPath="url(#stageV2)">
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

      {OverlayVPLA()}
    </svg>
  );
};

// Vector overlay: characters + props + micro-animations
function OverlayVPLA() {
  return (
    <g transform="translate(770,52)">
      {/* ground shade */}
      <rect x="-90" y="420" width="370" height="26" rx="13" fill={color.black} opacity="0.06" />

      {/* Victim + screen */}
      <g transform="translate(-40,40)">
        <rect x="0" y="0" width="210" height="140" rx="16" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <rect x="16" y="20" width="130" height="12" rx="6" fill={color.indigo600} />
        <rect x="16" y="48" width="110" height="10" rx="5" fill={color.slate500} />
        <rect x="16" y="70" width="140" height="10" rx="5" fill={color.slate500} />
        <rect x="16" y="92" width="90" height="10" rx="5" fill={color.slate500} />
        {/* worried emoji bubble */}
        <g transform="translate(-16,-22)">
          <circle cx="24" cy="24" r="16" fill={color.rose100} />
          <circle cx="20" cy="20" r="2" fill={color.rose400} />
          <circle cx="28" cy="20" r="2" fill={color.rose400} />
          <path d="M18 28c6-4 10-4 16 0" stroke={color.rose400} strokeWidth="2" fill="none" />
        </g>
      </g>

      {/* Hacker terminal & attack beam */}
      <g transform="translate(-20,250)">
        <rect x="0" y="0" width="130" height="72" rx="10" fill={color.slate900} />
        <rect x="10" y="12" width="54" height="6" rx="3" fill={color.cyan300} />
        <rect x="10" y="24" width="86" height="6" rx="3" fill={color.cyan200} />
        <rect x="10" y="36" width="70" height="6" rx="3" fill={color.cyan200} />
        {/* hooded head */}
        <circle cx="152" cy="-6" r="12" fill={color.slate700} />
        <path d="M140 8h24v22h-24z" fill={color.slate700} />
        {/* red attack wave */}
        <path d="M130 25 C200,8 240,28 290,78" stroke={color.rose400} strokeWidth="3" fill="none">
          <animate attributeName="stroke-width" values="3;1.6;3" dur="1.9s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Officer + shield + justice scales + legal paper check + cuffs */}
      <g transform="translate(210,210)">
        {/* officer body */}
        <path d="M30 90c-18 0-30 14-30 30v26h60v-26c0-16-12-30-30-30z" fill={color.indigo400} />
        <circle cx="30" cy="66" r="14" fill="#F4C9A5" />
        {/* shield */}
        <g transform="translate(54,82)">
          <path d="M10 -8l28 12v14c0 16-10 30-28 38-18-8-28-22-28-38V4l28-12z" fill={color.white} stroke={color.indigo600} strokeWidth="3" />
          <path d="M2 16l10 10 14-14" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
        {/* deflect wave */}
        <path d="M44 120 C88,110 128,96 154,62" stroke={color.indigo600} strokeWidth="4" fill="none">
          <animate attributeName="stroke-dasharray" values="4 6;1 9;4 6" dur="1.9s" repeatCount="indefinite" />
        </path>

        {/* justice scales rising */}
        <g transform="translate(120,-20)">
          <g>
            <path d="M60 20 v60" stroke={color.indigo800} strokeWidth="6" />
            <circle cx="60" cy="20" r="8" fill={color.indigo800} />
            <path d="M20 40 h80" stroke={color.indigo800} strokeWidth="6" />
            <circle cx="20" cy="70" r="16" fill={color.indigo100} />
            <circle cx="100" cy="70" r="16" fill={color.indigo100} />
          </g>
          <animateTransform attributeName="transform" type="translate" from="120,40" to="120,-20" dur="1.6s" fill="freeze" />
        </g>

        {/* legal doc + big green check */}
        <g transform="translate(156,20)">
          <rect x="0" y="0" width="120" height="86" rx="12" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <rect x="16" y="18" width="78" height="10" rx="5" fill={color.indigo600} />
          <rect x="16" y="36" width="64" height="8" rx="4" fill={color.slate500} />
          <rect x="16" y="52" width="50" height="8" rx="4" fill={color.slate500} />
          <g transform="translate(92,10)">
            <circle cx="0" cy="0" r="10" fill={color.emerald400} />
            <path d="M-6 0l4 4 8-8" stroke={color.white} strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* cuff line to hacker */}
        <path d="M190 90 C230,72 260,40 280,-30" stroke={color.indigo600} strokeWidth="3" fill="none">
          <animate attributeName="stroke-dasharray" values="2 8;8 2;2 8" dur="1.6s" repeatCount="indefinite" />
        </path>
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
/* 1) Intro: courtroom portal + digital shield + guided path */
const IntroSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Introduction: Ensuring Safety and Justice" className="w-full h-full" {...props}>
    <BG id="gIntroV" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowIntroV" std={9} alpha={0.45} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIntroV)" />
    {/* portal arch */}
    <g transform="translate(80,80)" filter="url(#glowIntroV)">
      <path d="M70 180c0-100 60-160 160-160s160 60 160 160" stroke={color.indigo300} strokeWidth="10" fill="none" />
      <rect x="110" y="120" width="240" height="120" rx="18" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="136" y="146" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="136" y="174" width="160" height="10" rx="5" fill={color.slate500} />
    </g>
    {/* shield + path */}
    <g transform="translate(500,90)" filter="url(#glowIntroV)">
      <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M16 40l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M-40 160c40-24 100-24 140 0" stroke={color.indigo400} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8" />
    </g>
  </svg>
);

/* 2) Immediate Protection: lock grid + emergency toggle + safe account card */
const ImmediateProtectionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Immediate Protection" className="w-full h-full" {...props}>
    <BG id="gIP" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
    <SoftGlow id="glowIP" std={9} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIP)" />
    {/* grid of locks */}
    <g transform="translate(90,80)" opacity="0.95">
      {[0,1,2].map((r)=>[0,1,2,3].map((c)=>(
        <g key={`${r}-${c}`} transform={`translate(${c*120},${r*90})`}>
          <path d="M40 36v-16a16 16 0 0 1 32 0v16" stroke={color.indigo600} strokeWidth="6" fill="none" />
          <Card x="30" y="36" w="64" h="52" r="10" fill={color.white} stroke={color.indigo600} sw="3" />
          <circle cx="62" cy="64" r="6" fill={color.indigo600} />
        </g>
      )))}
    </g>
    {/* emergency toggle + safe account */}
    <g transform="translate(460,110)" filter="url(#glowIP)">
      <Card x="0" y="0" w="300" h="160" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="22" y="30" width="160" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="58" width="120" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="82" width="140" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(210,50)">
        <rect x="0" y="0" width="70" height="30" rx="15" fill={color.indigo100} stroke={color.indigo400} />
        <circle cx="22" cy="15" r="11" fill={color.white}>
          <animate attributeName="cx" values="22;48;22" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>
  </svg>
);

/* 3) Legal Assistance: courtroom desk + documents + counsel badge */
const LegalAidSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Access to Legal Assistance" className="w-full h-full" {...props}>
    <BG id="gLegalV" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalV" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalV)" />
    <g transform="translate(80,100)" filter="url(#glowLegalV)">
      <Card x="0" y="40" w="300" h="160" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="70" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="98" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="120" width="130" height="10" rx="5" fill={color.slate500} />
      {/* counsel badge */}
      <g transform="translate(230,52)">
        <circle cx="0" cy="0" r="18" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </g>
    {/* scales + gavel hint */}
    <g transform="translate(460,90)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
      <rect x="220" y="120" width="80" height="16" rx="8" fill={color.slate400} />
    </g>
  </svg>
);

/* 4) Confidentiality: vault door + encrypted bubbles + mask icon */
const ConfidentialitySVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Confidentiality" className="w-full h-full" {...props}>
    <BG id="gConf" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowConf" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConf)" />
    {/* vault */}
    <g transform="translate(90,70)" filter="url(#glowConf)">
      <rect x="0" y="0" width="260" height="220" rx="20" fill={color.white} stroke={color.indigo300} sw="3" />
      <circle cx="130" cy="110" r="54" fill={color.indigo100} stroke={color.indigo400} strokeWidth="4" />
      <circle cx="130" cy="110" r="7" fill={color.indigo600} />
      {[0,45,90,135,180,225,270,315].map((a,i)=>(
        <rect key={i} x="128" y="60" width="4" height="22" fill={color.indigo600} transform={`rotate(${a},130,110)`} />
      ))}
    </g>
    {/* encrypted bubbles */}
    <g transform="translate(400,110)">
      {[0,1,2,3].map((i)=>(
        <g key={i} transform={`translate(${i*80},${i%2?30:0})`} opacity="0.9">
          <circle cx="0" cy="0" r="24" fill={color.indigo100} />
          <path d="M-8 0h16M-4 -8h8M-4 8h8" stroke={color.indigo600} strokeWidth="3" />
        </g>
      ))}
    </g>
  </svg>
);

/* 5) Psychological Support: counselor + chat bubble + calm gradient */
const PsychSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Psychological Support and Counselling" className="w-full h-full" {...props}>
    <BG id="gPsy" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowPsy" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gPsy)" />
    <g transform="translate(90,180)" filter="url(#glowPsy)">
      <rect x="0" y="0" width="290" height="70" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="-30" width="190" height="46" rx="15" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="240" y="-22" width="46" height="36" rx="10" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="40" y="76" width="18" height="22" rx="6" fill={color.slate400} />
      <rect x="238" y="76" width="18" height="22" rx="6" fill={color.slate400} />
    </g>
    {/* chat bubble + heart pulse */}
    <g transform="translate(460,110)">
      <rect x="0" y="0" width="260" height="140" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="22" y="26" width="160" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="54" width="140" height="10" rx="5" fill={color.slate500} />
      <path d="M22 96h120" stroke={color.slate400} strokeWidth="6" />
      <g transform="translate(200,22)">
        <path d="M0 16c0-10 8-16 16-16 6 0 12 4 16 10 6-6 10-10 16-10 10 0 16 8 16 16 0 22-32 38-32 38S0 38 0 16z" fill={color.rose100} stroke={color.rose400} />
        <path d="M-36 24h18l10 -10 8 14 10 -12 10 8h18" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round">
          <animate attributeName="stroke-width" values="6;4;6" dur="1.8s" repeatCount="indefinite" />
        </path>
      </g>
    </g>
  </svg>
);

/* 6) Evidence: camera chip + file chain + admissibility stamp */
const EvidenceSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Evidence Collection and Case Strengthening" className="w-full h-full" {...props}>
    <BG id="gEv" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowEv" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEv)" />
    {/* chip camera */}
    <g transform="translate(90,90)" filter="url(#glowEv)">
      <rect x="0" y="0" width="240" height="160" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <circle cx="60" cy="70" r="28" fill={color.indigo100} stroke={color.indigo400} strokeWidth="4" />
      <circle cx="60" cy="70" r="6" fill={color.indigo600} />
      {[0,90,180,270].map((a,i)=>(
        <rect key={i} x="56" y="28" width="6" height="16" rx="3" fill={color.indigo600} transform={`rotate(${a},60,70)`} />
      ))}
      <rect x="110" y="36" width="100" height="10" rx="5" fill={color.indigo600} />
      <rect x="110" y="58" width="80" height="8" rx="4" fill={color.slate500} />
      <rect x="110" y="76" width="60" height="8" rx="4" fill={color.slate500} />
    </g>
    {/* file chain */}
    <g transform="translate(380,110)">
      <Card x="0" y="0" w="300" h="150" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="22" y="28" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="56" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="78" width="120" height="10" rx="5" fill={color.slate500} />
      <path d="M240 36c26 10 34 22 42 42" stroke={color.emerald600} strokeWidth="6" fill="none" />
      {/* admissible stamp */}
      <g transform="translate(240,98)">
        <circle cx="0" cy="0" r="18" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

/* 7) Updates: calendar + bell notifications + timeline ticks */
const UpdatesSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Continuous Monitoring and Updates" className="w-full h-full" {...props}>
    <BG id="gUpd" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowUpd" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gUpd)" />
    {/* calendar */}
    <g transform="translate(90,80)">
      <Card x="0" y="0" w="280" h="180" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <path d="M0 44h280" stroke={color.slate200} strokeWidth="3" />
      {[0,1,2,3].map((i)=>(
        <rect key={i} x={20+i*62} y="60" width="42" height="28" rx="8" fill={i===1?color.emerald100:color.indigo100} />
      ))}
    </g>
    {/* notifications + timeline */}
    <g transform="translate(420,110)" filter="url(#glowUpd)">
      <Card x="0" y="0" w="300" h="160" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="20" y="28" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="80" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="112" width="120" height="14" rx="7" fill={color.emerald400} />
    </g>
    <g transform="translate(420,290)">
      <rect x="0" y="0" width="300" height="8" rx="4" fill={color.slate300} />
      {[0,60,140,220,300].map((x,i)=>(
        <circle key={i} cx={x} cy="4" r="7" fill={color.cyan500} />
      ))}
    </g>
  </svg>
);

/* 8) Role: hub of services + shield + people nodes + workflow */
const RoleSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="CRCCF’s Role in Protection and Legal Aid" className="w-full h-full" {...props}>
    <BG id="gRole" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowRole" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRole)" />
    {/* team nodes */}
    <g transform="translate(100,120)" filter="url(#glowRole)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      <circle cx="120" cy="-20" r="24" fill={color.indigo400} />
      <circle cx="60" cy="60" r="24" fill={color.emerald400} />
      <path d="M0 0L60 60L120 -20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>
    {/* hub with shield + tiles */}
    <g transform="translate(380,70)" filter="url(#glowRole)">
      <Card x="0" y="0" w="320" h="220" r="18" fill={color.white} stroke={color.slate300} sw="3" />
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
  </svg>
);

/* 9) Conclusion: ribbon + arcs + check cluster */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Conclusion: Comprehensive Victim Protection and Legal Support" className="w-full h-full" {...props}>
    <BG id="gConc" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConc)" />
    <rect x="90" y="90" width="16" height="180" rx="8" fill={color.indigo600} />
    <path d="M106 92h160l-24 24 24 24H106z" fill={color.cyan500} />
    <g transform="translate(240,240)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9">
      <path d="M0 0c60-40 120-40 180 0" />
      <path d="M180 0c60-40 120-40 120 0" />
    </g>
    {/* checks */}
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
export default function VictimProtectionLegalAid() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    ImmediateProtectionSVG,
    LegalAidSVG,
    ConfidentialitySVG,
    PsychSVG,
    EvidenceSVG,
    UpdatesSVG,
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
        <span className="text-gray-700" aria-current="page">Victim Protection &amp; Legal Aid</span>
      </motion.nav>

      {/* HERO: Ultra-complex video SVG */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Protection", "Legal Aid", "Confidentiality", "Psych Support", "Evidence", "Updates", "CRCCF Role"].map((pill) => (
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
              {/* Supply your video at these paths */}
              <VideoHeroVPLA
                src="/assets/video/victim-protection-legal-aid-hero.mp4"
                poster="/assets/video/victim-protection-legal-aid-hero.jpg"
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
              ImmediateProtectionSVG,
              LegalAidSVG,
              ConfidentialitySVG,
              PsychSVG,
              EvidenceSVG,
              UpdatesSVG,
              RoleSVG,
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance and works alongside law enforcement and courts.
            All information is handled confidentially and in compliance with applicable laws and regulations.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
