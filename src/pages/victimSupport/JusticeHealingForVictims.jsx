// src/pages/victimSupport/JusticeHealingForVictims.jsx
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
  title: "Justice & Healing for Victims – CRCCF",
  tagline: "Balancing Legal Remedies and Emotional Recovery for Cybercrime Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Balancing Justice and Healing",
      content: `Cybercrime victims often face not only legal challenges but also emotional and psychological trauma. The subcard “Justice & Healing for Victims” highlights a holistic approach that combines legal remedies with emotional recovery. CRCCF ensures that victims can pursue justice while receiving the support necessary to heal from the impact of cyber incidents effectively and securely.`,
      svg: "IntroSVG",
    },
    {
      id: "legal-justice",
      heading: "2. Right to Legal Justice",
      content: `Victims have the fundamental right to seek justice through formal legal channels, including filing complaints, participating in investigations, and pursuing civil or criminal remedies.
CRCCF provides expert legal guidance, ensuring victims understand the legal procedures, document their cases accurately, and navigate the justice system with clarity and confidence.`,
      svg: "LegalJusticeSVG",
    },
    {
      id: "protection-rights",
      heading: "3. Protection of Rights and Interests",
      content: `Victims are entitled to protection from retaliation, harassment, or further cyber threats during legal proceedings.
CRCCF safeguards personal, financial, and digital information through secure communication, monitoring, and advice on safe digital practices, ensuring that victims’ rights and interests are upheld throughout the legal process.`,
      svg: "ProtectionRightsSVG",
    },
    {
      id: "emotional-healing",
      heading: "4. Psychological and Emotional Healing",
      content: `Healing from cybercrime requires addressing emotional and psychological distress such as anxiety, fear, and trauma. Victims have the right to access counselling, therapy, and cyber-psychology support to aid in recovery.
CRCCF provides continuous psychological guidance, helping victims regain confidence, manage stress, and rebuild a sense of safety and control over their lives.`,
      svg: "EmotionalHealingSVG",
    },
    {
      id: "evidence-support",
      heading: "5. Evidence Preservation and Case Support",
      content: `Proper evidence collection is essential for achieving justice. Victims have the right to professional assistance in preserving emails, social media communications, transaction records, and other digital evidence.
CRCCF ensures evidence is accurately documented, securely maintained, and legally admissible, strengthening the victim’s case while supporting a fair and transparent judicial process.`,
      svg: "EvidenceSupportSVG",
    },
    {
      id: "updates-guidance",
      heading: "6. Continuous Updates and Guidance",
      content: `Victims have the right to stay informed about the progress of their cases, protective measures, and available support resources.
CRCCF provides continuous updates, guidance, and monitoring to ensure victims remain actively involved and aware of every stage of their journey toward justice and healing. Transparent communication fosters trust and confidence throughout the recovery process.`,
      svg: "UpdatesGuidanceSVG",
    },
    {
      id: "org-role",
      heading: "7. Organization’s Role in Justice and Healing",
      content: `CRCCF is committed to delivering an integrated approach combining legal support, emotional healing, digital security guidance, and evidence management.
Each victim receives individualized care and attention, ensuring that both justice and emotional recovery are addressed comprehensively. Every intervention is professional, confidential, and empathetic, providing holistic support throughout the victim’s journey.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Achieving Justice and Emotional Recovery",
      content: `Justice & Healing for Victims ensures that cybercrime victims can pursue legal remedies while addressing emotional and psychological needs. Upholding these rights allows victims to navigate legal processes confidently, recover from trauma effectively, and rebuild their lives with security and resilience.
CRCCF remains dedicated to providing professional, holistic, and compassionate services, empowering every victim to achieve both justice and emotional recovery in the aftermath of cybercrime.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
/* Scene (clear, kid-friendly):
   - Left: therapist/doctor seated, gentle clinic room.
   - Right: victim seated, worried.
   - Middle: tablet shows heart + chat bubbles.
   - Animation:
     1) Tablet pulses; calm waves emit.
     2) Doctor's speech bubbles appear (blue).
     3) Victim's heart icon brightens; posture arc rises.
     4) Justice scales fade-in subtly in background linking healing with justice.
*/
const VideoHeroHealing = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Justice & Healing — Counselling in Action";
  const desc = "Doctor counselling a victim; calm UI waves; justice scales appear, showing healing + justice together.";

  if (prefersReduced || !src) {
    // Gradient + vector fallback (animated, no external asset)
    return (
      <svg viewBox="0 0 1100 520" role="img" aria-labelledby="jhTitle jhDesc" className="w-full h-auto">
        <title id="jhTitle">{title}</title>
        <desc id="jhDesc">{desc}</desc>
        <defs>
          <linearGradient id="jhGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.emerald50}>
              <animate attributeName="offset" values="0;0.2;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.indigo50}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.cyan50} />
          </linearGradient>
          <filter id="softJH" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
          </filter>
          <clipPath id="stageJH">
            <rect x="40" y="44" width="700" height="432" rx="28" />
          </clipPath>
        </defs>

        <g filter="url(#softJH)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#jhGrad)" />
        </g>

        <g clipPath="url(#stageJH)">
          <rect x="0" y="0" width="1100" height="520" fill="url(#jhGrad)">
            <animate attributeName="x" values="0;18;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {OverlayHealing()}
      </svg>
    );
  }

  // Full masked video with overlay vectors
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgJH" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.emerald50} />
          <stop offset="60%" stopColor={color.indigo50} />
          <stop offset="100%" stopColor={color.cyan50} />
        </linearGradient>
        <filter id="softJH2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
        </filter>
        <clipPath id="stageJH2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softJH2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgJH)" />
      </g>

      <g clipPath="url(#stageJH2)">
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

      {OverlayHealing()}
    </svg>
  );
};

function OverlayHealing() {
  return (
    <g transform="translate(770,52)">
      {/* floor shade */}
      <rect x="-90" y="420" width="370" height="26" rx="13" fill={color.black} opacity="0.06" />

      {/* Clinic wall decor: subtle scales of justice */}
      <g transform="translate(60,10)" opacity="0.25">
        <path d="M60 20 v100" stroke={color.indigo800} strokeWidth="6" />
        <circle cx="60" cy="20" r="8" fill={color.indigo800} />
        <path d="M20 56 h80" stroke={color.indigo800} strokeWidth="6" />
        <circle cx="20" cy="96" r="16" fill={color.indigo100} />
        <circle cx="100" cy="96" r="16" fill={color.indigo100} />
      </g>

      {/* Doctor (left) */}
      <g transform="translate(-30,180)">
        <circle cx="24" cy="-6" r="12" fill="#F4C9A5" />
        <path d="M6 10h36v28H6z" fill={color.emerald300} />
        <rect x="-2" y="36" width="52" height="10" rx="5" fill={color.emerald400} />
        {/* speech bubble */}
        <g transform="translate(60,-24)">
          <rect x="0" y="0" width="140" height="60" rx="12" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <rect x="16" y="16" width="90" height="10" rx="5" fill={color.indigo600} />
          <rect x="16" y="34" width="70" height="8" rx="4" fill={color.slate500} />
          <path d="M20 60l-10 14 0-14z" fill={color.white} stroke={color.slate300} />
        </g>
      </g>

      {/* Victim (right) */}
      <g transform="translate(210,220)">
        <circle cx="18" cy="-8" r="11" fill="#F4C9A5" />
        <path d="M2 6h32v24H2z" fill={color.indigo300} />
        {/* heart that brightens */}
        <g transform="translate(80,-16)">
          <path d="M0 12c0-8 6-12 12-12 4 0 8 3 12 8 4-5 8-8 12-8 8 0 12 6 12 12 0 16-24 28-24 28S0 28 0 12z" fill={color.rose100} stroke={color.rose400} />
          <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2.2s" repeatCount="indefinite" />
        </g>
      </g>

      {/* Tablet in the middle showing progress */}
      <g transform="translate(40,100)">
        <rect x="0" y="0" width="220" height="140" rx="16" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <rect x="18" y="20" width="140" height="12" rx="6" fill={color.indigo600} />
        <rect x="18" y="48" width="110" height="10" rx="5" fill={color.slate500} />
        <rect x="18" y="70" width="130" height="10" rx="5" fill={color.slate500} />
        {/* Calm waves */}
        <path d="M18 108c30-10 60-10 90 0s60 10 90 0" stroke={color.cyan300} strokeWidth="4" fill="none">
          <animate attributeName="d" values="
            M18 108c30-10 60-10 90 0s60 10 90 0;
            M18 108c30-14 60-6 90 0s60 16 90 0;
            M18 108c30-10 60-10 90 0s60 10 90 0" dur="2.6s" repeatCount="indefinite" />
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
/* 1) Intro: justice arch + healing leaf + guidance card */
const IntroSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Introduction: Balancing Justice and Healing" className="w-full h-full" {...props}>
    <BG id="gIntroJH" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowIntroJH" std={9} alpha={0.45} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIntroJH)" />
    <g transform="translate(80,80)" filter="url(#glowIntroJH)">
      <path d="M70 180c0-100 60-160 160-160s160 60 160 160" stroke={color.indigo300} strokeWidth="10" fill="none" />
      <rect x="110" y="120" width="240" height="120" rx="18" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="136" y="146" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="136" y="174" width="160" height="10" rx="5" fill={color.slate500} />
    </g>
    {/* healing leaf */}
    <g transform="translate(520,110)">
      <path d="M0 60c40-60 120-60 160 0-40 60-120 60-160 0z" fill={color.emerald100} />
      <path d="M0 60c40-60 120-60 160 0-40 60-120 60-160 0z" stroke={color.emerald400} strokeWidth="4" fill="none" />
    </g>
  </svg>
);

/* 2) Legal Justice: courthouse + case file + scale */
const LegalJusticeSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Legal Justice" className="w-full h-full" {...props}>
    <BG id="gLegalJ" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalJ" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalJ)" />
    <g transform="translate(80,100)" filter="url(#glowLegalJ)">
      <Card x="0" y="40" w="300" h="160" r="18" />
      <rect x="24" y="70" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="98" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="120" width="140" height="10" rx="5" fill={color.slate500} />
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

/* 3) Protection of Rights: shielded profile + secure lanes */
const ProtectionRightsSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Protection of Rights and Interests" className="w-full h-full" {...props}>
    <BG id="gProt" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowProt" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gProt)" />
    <g transform="translate(90,80)" filter="url(#glowProt)">
      <rect x="0" y="0" width="220" height="220" rx="20" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
      <circle cx="110" cy="70" r="30" fill={color.indigo100} />
      <path d="M40 160c20-26 60-26 80 0" stroke={color.indigo400} strokeWidth="6" fill="none" />
      {/* shield */}
      <g transform="translate(150,140)">
        <path d="M20 -8l34 14v18c0 22-14 40-34 50-20-10-34-28-34-50v-18l34-14z" fill={color.white} stroke={color.indigo600} strokeWidth="3" />
        <path d="M8 20l12 12 16-16" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
    {/* secure lanes */}
    <g transform="translate(380,140)">
      <path d="M0 0c60-24 120-24 180 0" stroke={color.indigo400} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M0 40c60-24 120-24 180 0" stroke={color.cyan300} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M0 80c60-24 120-24 180 0" stroke={color.emerald300} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  </svg>
);

/* 4) Emotional Healing: counselor couch + chat + heart pulse */
const EmotionalHealingSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Psychological and Emotional Healing" className="w-full h-full" {...props}>
    <BG id="gHeal" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowHeal" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gHeal)" />
    <g transform="translate(80,160)" filter="url(#glowHeal)">
      <rect x="0" y="0" width="300" height="90" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="-30" width="210" height="52" rx="16" fill={color.indigo100} stroke={color.indigo300} />
      <rect x="254" y="-18" width="52" height="40" rx="12" fill={color.indigo100} stroke={color.indigo300} />
    </g>
    <g transform="translate(440,110)">
      <rect x="0" y="0" width="280" height="150" rx="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="22" y="26" width="170" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="54" width="150" height="10" rx="5" fill={color.slate500} />
      <path d="M22 96h120" stroke={color.slate400} strokeWidth="6" />
      <g transform="translate(210,22)">
        <path d="M0 16c0-10 8-16 16-16 6 0 12 4 16 10 6-6 10-10 16-10 10 0 16 8 16 16 0 22-32 38-32 38S0 38 0 16z" fill={color.rose100} stroke={color.rose400} />
        <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2s" repeatCount="indefinite" />
      </g>
    </g>
  </svg>
);

/* 5) Evidence Support: folders + chain + admissibility stamp */
const EvidenceSupportSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Evidence Preservation and Case Support" className="w-full h-full" {...props}>
    <BG id="gEvJH" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowEvJH" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEvJH)" />
    <g transform="translate(90,100)" filter="url(#glowEvJH)">
      <Card x="0" y="0" w="260" h="160" r="18" />
      <rect x="24" y="28" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="56" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="78" width="130" height="10" rx="5" fill={color.slate500} />
    </g>
    <g transform="translate(400,110)">
      <Card x="0" y="0" w="300" h="150" r="18" />
      <path d="M24 56c20 12 40 18 58 40" stroke={color.emerald600} strokeWidth="6" fill="none" />
      <g transform="translate(250,100)">
        <circle cx="0" cy="0" r="18" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

/* 6) Updates & Guidance: timeline + bell + progress card */
const UpdatesGuidanceSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Continuous Updates and Guidance" className="w-full h-full" {...props}>
    <BG id="gUpdJH" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowUpdJH" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gUpdJH)" />
    <g transform="translate(90,80)">
      <Card x="0" y="0" w="280" h="180" r="18" />
      <path d="M0 44h280" stroke={color.slate200} strokeWidth="3" />
      {[0,1,2,3].map((i)=>(
        <rect key={i} x={20+i*62} y="60" width="42" height="28" rx="8" fill={i===2?color.emerald100:color.indigo100} />
      ))}
    </g>
    <g transform="translate(420,110)" filter="url(#glowUpdJH)">
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

/* 7) Organization Role: hub + people nodes + shield */
const OrgRoleSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Organization’s Role in Justice and Healing" className="w-full h-full" {...props}>
    <BG id="gRoleJH" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowRoleJH" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRoleJH)" />
    <g transform="translate(100,120)" filter="url(#glowRoleJH)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      <circle cx="120" cy="-20" r="24" fill={color.indigo400} />
      <circle cx="60" cy="60" r="24" fill={color.emerald400} />
      <path d="M0 0L60 60L120 -20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>
    <g transform="translate(380,70)" filter="url(#glowRoleJH)">
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
  </svg>
);

/* 8) Conclusion: ribbon + arcs + success checks */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Conclusion: Achieving Justice and Emotional Recovery" className="w-full h-full" {...props}>
    <BG id="gConcJH" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConcJH)" />
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
export default function JusticeHealingForVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    LegalJusticeSVG,
    ProtectionRightsSVG,
    EmotionalHealingSVG,
    EvidenceSupportSVG,
    UpdatesGuidanceSVG,
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
        <span className="text-gray-700" aria-current="page">Justice &amp; Healing for Victims</span>
      </motion.nav>

      {/* HERO: Counselling video-SVG (self-contained) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Justice", "Protection", "Healing", "Evidence", "Updates", "CRCCF Role"].map((pill) => (
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
              <VideoHeroHealing
                src="/assets/video/justice-healing-hero.mp4"
                poster="/assets/video/justice-healing-hero.jpg"
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
              LegalJusticeSVG,
              ProtectionRightsSVG,
              EmotionalHealingSVG,
              EvidenceSupportSVG,
              UpdatesGuidanceSVG,
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF supports victims with legal guidance and counselling alongside law
            enforcement and judicial processes. All information is handled confidentially and in accordance with applicable laws.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
