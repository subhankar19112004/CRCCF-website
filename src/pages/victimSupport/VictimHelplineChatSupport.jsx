// src/pages/victimSupport/VictimHelplineChatSupport.jsx
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
  title: "24/7 Victim Helpline & Chat Support – CRCCF",
  tagline: "Round-the-Clock Assistance and Guidance for Cyber Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Round-the-Clock Assistance for Victims",
      content: `Cybercrime can occur at any time, leaving victims vulnerable and in urgent need of support. The subcard “24/7 Victim Helpline & Chat Support” highlights the importance of providing immediate access to professional help, available day and night. Our organization ensures that victims receive legal, technical, and emotional assistance whenever it is required, minimizing delays in addressing cyber incidents.
CRCCF operates a dedicated team to provide timely guidance, crisis intervention, and reassurance. By offering continuous support, victims can feel secure knowing that expert help is always accessible, enabling them to respond promptly and effectively to cyber threats.`,
      svg: "IntroSVG",
    },
    {
      id: "immediate",
      heading: "2. Right to Immediate Assistance",
      content: `Victims have the fundamental right to obtain prompt help without unnecessary delays. The 24/7 helpline ensures that incidents can be reported, guidance received, and protective measures implemented immediately.
Our trained support staff listens attentively, advises on next steps, and coordinates further actions. Timely intervention helps victims feel safe, reduces panic, and ensures that preventive measures and legal steps are taken from the very first contact.`,
      svg: "ImmediateAssistSVG",
    },
    {
      id: "confidential",
      heading: "3. Confidential and Secure Communication",
      content: `Maintaining privacy and security is crucial for victims seeking help. All calls and chat interactions are conducted confidentially, safeguarding personal and sensitive information.
CRCCF prioritizes secure communication channels, allowing victims to share details without fear of exposure or misuse. This trusted environment fosters open communication, ensuring that victims feel safe and supported throughout the process.`,
      svg: "ConfidentialSVG",
    },
    {
      id: "legal",
      heading: "4. Legal Guidance and Case Support",
      content: `Victims often require immediate legal assistance to act against perpetrators. The helpline and chat support provide real-time guidance on filing complaints, preserving evidence, and understanding relevant cyber laws.
Our organization ensures that victims receive clear and professional legal advice, empowering them to take informed steps, protect their rights, and initiate legal action effectively, even during urgent or high-stress situations.`,
      svg: "LegalSupportSVG",
    },
    {
      id: "emotional",
      heading: "5. Psychological and Emotional Support",
      content: `Cybercrime can cause severe emotional distress, including anxiety, fear, and trauma. Victims have the right to immediate psychological support alongside legal guidance.
CRCCF’s 24/7 support team includes trained counsellors who provide emotional assistance, coping strategies, and reassurance. Continuous guidance helps victims regain stability, manage stress, and engage confidently in both recovery and legal processes.`,
      svg: "EmotionalSVG",
    },
    {
      id: "technical",
      heading: "6. Technical Assistance and Cybersecurity Advice",
      content: `Victims often need prompt advice on securing digital accounts, personal information, and online assets. The helpline provides practical guidance on cybersecurity best practices, such as strong passwords, account recovery, and monitoring threats.
By offering immediate technical assistance, CRCCF helps victims restore control over their digital environment and prevent further cyber incidents, reducing vulnerability and enhancing confidence in online safety.`,
      svg: "TechnicalSVG",
    },
    {
      id: "monitoring",
      heading: "7. Continuous Monitoring and Follow-Up",
      content: `Support does not end with initial assistance. Victims have the right to ongoing follow-up and updates regarding their case status and protective measures.
CRCCF tracks each case, provides regular communication, and ensures that victims remain informed about progress, next steps, and available resources. Continuous monitoring builds trust, reduces anxiety, and reinforces confidence throughout the recovery and justice process.`,
      svg: "MonitoringSVG",
    },
    {
      id: "org-role",
      heading: "8. Organization’s Role in 24/7 Support",
      content: `Our organization is committed to delivering comprehensive round-the-clock support for cybercrime victims. By integrating legal guidance, emotional counselling, and technical assistance into a 24/7 helpline and chat service, we ensure immediate and sustained care.
Every interaction is conducted professionally, empathetically, and confidentially. CRCCF guarantees that victims feel supported, informed, and empowered at every stage, fostering resilience and prompt action in the face of cyber threats.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Continuous Support",
      content: `The 24/7 Victim Helpline & Chat Support ensures that victims of cybercrime have access to immediate professional guidance, emotional assistance, and practical advice whenever needed. Upholding these rights allows victims to respond promptly, safeguard their interests, and initiate recovery without delay.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate services, empowering every victim to feel safe, informed, and supported around the clock.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
/* Story:
   - Animated 24/7 clock + ringing phone + chat bubbles
   - People icons moving toward help counter; agent responds
   - Clear, kid-friendly visual narrative
*/
const VideoHeroHelpline = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF 24/7 Helpline & Chat — Always On";
  const desc = "Clock 24/7, phone and chat active, people queue to a support desk with agent.";

  if (prefersReduced || !src) {
    // Animated fallback (pure SVG)
    return (
      <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleHL vhDescHL" className="w-full h-auto">
        <title id="vhTitleHL">{title}</title>
        <desc id="vhDescHL">{desc}</desc>
        <defs>
          <linearGradient id="hlGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo50}>
              <animate attributeName="offset" values="0;0.2;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.cyan50}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald50} />
          </linearGradient>
          <filter id="softHL" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
          </filter>
        </defs>

        <g filter="url(#softHL)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#hlGrad)" />
        </g>

        {/* 24/7 Clock */}
        <g transform="translate(120,130)">
          <circle cx="0" cy="0" r="80" fill={color.white} stroke={color.indigo300} strokeWidth="6" />
          <text x="0" y="8" textAnchor="middle" fontFamily="ui-sans-serif,system-ui" fontWeight="700" fontSize="26" fill={color.indigo600}>24/7</text>
          <g>
            <line x1="0" y1="0" x2="0" y2="-58" stroke={color.cyan500} strokeWidth="6">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="10s" repeatCount="indefinite" />
            </line>
            <line x1="0" y1="0" x2="42" y2="0" stroke={color.indigo400} strokeWidth="4">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="60s" repeatCount="indefinite" />
            </line>
          </g>
        </g>

        {/* Ringing phone */}
        <g transform="translate(330,110)">
          <rect x="0" y="0" width="110" height="180" rx="24" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <circle cx="55" cy="28" r="6" fill={color.slate300} />
          <rect x="18" y="52" width="74" height="12" rx="6" fill={color.indigo600} />
          <rect x="18" y="76" width="60" height="10" rx="5" fill={color.slate500} />
          <rect x="18" y="98" width="68" height="10" rx="5" fill={color.slate500} />
          {/* wave */}
          <path d="M110 140c16-8 16-28 0-36" stroke={color.cyan300} strokeWidth="4" fill="none">
            <animate attributeName="d" values="M110 140c16-8 16-28 0-36; M110 140c22-8 22-28 0-36; M110 140c16-8 16-28 0-36" dur="1.8s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Chat bubbles */}
        <g transform="translate(520,120)">
          <rect x="0" y="0" width="240" height="120" rx="16" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <rect x="18" y="20" width="160" height="12" rx="6" fill={color.indigo600} />
          <rect x="18" y="46" width="120" height="10" rx="5" fill={color.slate500} />
          <g transform="translate(170,70)">
            <rect x="0" y="0" width="60" height="34" rx="10" fill={color.cyan100} />
            <circle cx="14" cy="17" r="4" fill={color.indigo600}>
              <animate attributeName="opacity" values="1;0.25;1" dur="1.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="30" cy="17" r="4" fill={color.indigo600}>
              <animate attributeName="opacity" values="0.25;1;0.25" dur="1.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="46" cy="17" r="4" fill={color.indigo600}>
              <animate attributeName="opacity" values="0.25;0.25;1" dur="1.4s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* Queue of people -> Help desk */}
        <g transform="translate(160,360)">
          {[0,1,2].map((i)=>(
            <g key={i} transform={`translate(${i*90},0)`} opacity={0.9}>
              <circle cx="0" cy="-22" r="12" fill="#F4C9A5" />
              <rect x="-14" y="-8" width="28" height="28" rx="6" fill={i%2?color.cyan300:color.indigo300} />
              <animateTransform attributeName="transform" type="translate" values={`0 0; ${10+i*4} -4; 0 0`} dur={`${2.4+i*0.2}s`} repeatCount="indefinite" />
            </g>
          ))}
          {/* help counter */}
          <g transform="translate(360,-46)">
            <rect x="0" y="0" width="220" height="70" rx="14" fill={color.white} stroke={color.slate300} strokeWidth="3" />
            <rect x="18" y="18" width="150" height="12" rx="6" fill={color.indigo600} />
            <rect x="18" y="42" width="120" height="10" rx="5" fill={color.slate500} />
            {/* agent */}
            <g transform="translate(188,8)">
              <circle cx="0" cy="0" r="10" fill="#EBC4A0" />
              <rect x="-12" y="12" width="24" height="14" rx="6" fill={color.emerald300} />
              <path d="M-16 8h32" stroke={color.emerald600} strokeWidth="3" />
            </g>
          </g>
        </g>
      </svg>
    );
  }

  // Masked video with overlay drawings (richer)
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgHL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo50} />
          <stop offset="60%" stopColor={color.cyan50} />
          <stop offset="100%" stopColor={color.emerald50} />
        </linearGradient>
        <filter id="softHL2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
        </filter>
        <clipPath id="stageHL2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softHL2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgHL)" />
      </g>

      <g clipPath="url(#stageHL2)">
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

      {/* Overlay glyphs for clarity */}
      <g transform="translate(770,60)">
        {/* 24/7 badge */}
        <g transform="translate(40,16)">
          <circle cx="0" cy="0" r="28" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
          <text x="0" y="6" textAnchor="middle" fontFamily="ui-sans-serif,system-ui" fontWeight="800" fontSize="14" fill={color.indigo600}>24/7</text>
        </g>
        {/* chat bubble */}
        <g transform="translate(0,72)">
          <rect x="0" y="0" width="140" height="46" rx="12" fill={color.white} stroke={color.slate300} />
          <rect x="16" y="12" width="80" height="10" rx="5" fill={color.indigo600} />
          <rect x="16" y="28" width="64" height="8" rx="4" fill={color.slate500} />
        </g>
        {/* phone tile */}
        <g transform="translate(160,72)">
          <rect x="0" y="0" width="46" height="46" rx="10" fill={color.cyan100} />
          <path d="M16 14c10 8 14 12 16 18" stroke={color.indigo600} strokeWidth="3" fill="none" />
        </g>
      </g>
    </svg>
  );
};

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
/* 1) Intro */
const IntroSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Introduction: Round-the-Clock Assistance for Victims" className="w-full h-full" {...props}>
    <BG id="gIntroHL" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowIntroHL" std={9} alpha={0.45} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIntroHL)" />
    {/* 24/7 tile + headset agent */}
    <g transform="translate(100,90)" filter="url(#glowIntroHL)">
      <Card x="0" y="0" w="280" h="160" r="18" />
      <text x="24" y="48" fontSize="44" fontWeight="800" fill={color.indigo600}>24/7</text>
      <rect x="24" y="72" width="160" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="96" width="140" height="10" rx="5" fill={color.slate500} />
    </g>
    <g transform="translate(440,100)">
      <circle cx="40" cy="40" r="22" fill="#EBC4A0" />
      <rect x="20" y="66" width="40" height="16" rx="8" fill={color.emerald300} />
      <rect x="0" y="100" width="220" height="80" rx="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="18" y="122" width="150" height="12" rx="6" fill={color.indigo600} />
      <rect x="18" y="146" width="120" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

/* 2) Immediate Assistance */
const ImmediateAssistSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Immediate Assistance" className="w-full h-full" {...props}>
    <BG id="gImmHL" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowImmHL" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gImmHL)" />
    <g transform="translate(90,80)" filter="url(#glowImmHL)">
      <Card x="0" y="0" w="280" h="180" r="18" />
      <rect x="24" y="24" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="74" width="140" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="120" height="14" rx="7" fill={color.emerald400} />
    </g>
    {/* alert + lightning fast arrows */}
    <g transform="translate(440,120)">
      <circle cx="0" cy="0" r="30" fill={color.rose400} />
      <path d="M-6 -6l12 0 -6 20 16 0 -28 38 6 -24 -16 0z" fill={color.white} opacity="0.95" />
      <path d="M40 40c40-20 80-20 120 0" stroke={color.cyan300} strokeWidth="6" fill="none" />
      <path d="M40 70c60-20 100-20 160 0" stroke={color.cyan300} strokeWidth="6" fill="none" />
    </g>
  </svg>
);

/* 3) Confidential Communication */
const ConfidentialSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Confidential and Secure Communication" className="w-full h-full" {...props}>
    <BG id="gConfHL" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowConfHL" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConfHL)" />
    <g transform="translate(90,90)" filter="url(#glowConfHL)">
      <Card x="0" y="0" w="300" h="160" r="18" />
      <rect x="24" y="24" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      {/* lock */}
      <g transform="translate(220,86)">
        <rect x="0" y="0" width="56" height="44" rx="10" fill={color.white} stroke={color.slate300} />
        <path d="M12 0v-10a16 16 0 0 1 32 0V0" stroke={color.indigo600} strokeWidth="4" fill="none" />
      </g>
    </g>
    {/* shield */}
    <g transform="translate(460,120)">
      <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M16 40l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

/* 4) Legal Guidance */
const LegalSupportSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Legal Guidance and Case Support" className="w-full h-full" {...props}>
    <BG id="gLegalHL" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalHL" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalHL)" />
    <g transform="translate(80,100)" filter="url(#glowLegalHL)">
      <Card x="0" y="40" w="300" h="160" r="18" />
      <rect x="24" y="70" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="98" width="170" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(220,118)">
        <circle cx="0" cy="0" r="16" fill={color.emerald400} />
        <path d="M-8 0l6 6 12-12" stroke={color.white} strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
    </g>
    {/* courthouse */}
    <g transform="translate(470,90)">
      <path d="M120 20 v120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo800} />
      <path d="M60 60 h120" stroke={color.indigo800} strokeWidth="6" />
      <circle cx="60" cy="100" r="24" fill={color.indigo100} />
      <circle cx="180" cy="100" r="24" fill={color.indigo100} />
    </g>
  </svg>
);

/* 5) Emotional Support */
const EmotionalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gEmoHL" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowEmoHL" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEmoHL)" />
    <g transform="translate(100,110)" filter="url(#glowEmoHL)">
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

/* 6) Technical Assistance */
const TechnicalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Technical Assistance and Cybersecurity Advice" className="w-full h-full" {...props}>
    <BG id="gTechHL" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowTechHL" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gTechHL)" />
    <g transform="translate(90,90)" filter="url(#glowTechHL)">
      <Card x="0" y="0" w="300" h="180" r="18" />
      <rect x="24" y="24" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="74" width="140" height="10" rx="5" fill={color.slate500} />
      {/* shield check */}
      <g transform="translate(230,120)">
        <path d="M20 -8l36 14v16c0 18-12 34-36 44-24-10-36-26-36-44V6l36-14z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
        <path d="M8 18l10 10 16-16" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
    {/* password bar */}
    <g transform="translate(440,140)">
      <rect x="0" y="0" width="300" height="46" rx="12" fill={color.white} stroke={color.slate300} />
      {[18,48,78,108,138,168,198].map((x,i)=>(
        <circle key={i} cx={x} cy="23" r="6" fill={color.indigo600} />
      ))}
    </g>
  </svg>
);

/* 7) Monitoring & Follow-Up */
const MonitoringSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Continuous Monitoring and Follow-Up" className="w-full h-full" {...props}>
    <BG id="gMonHL" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowMonHL" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gMonHL)" />
    <g transform="translate(90,80)">
      <Card x="0" y="0" w="280" h="180" r="18" />
      <path d="M0 44h280" stroke={color.slate200} strokeWidth="3" />
      {[0,1,2,3].map((i)=>(
        <rect key={i} x={20+i*62} y="60" width="42" height="28" rx="8" fill={i===2?color.emerald100:color.indigo100} />
      ))}
    </g>
    <g transform="translate(420,110)" filter="url(#glowMonHL)">
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

/* 8) Org Role */
const OrgRoleSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Organization’s Role in 24/7 Support" className="w-full h-full" {...props}>
    <BG id="gRoleHL" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowRoleHL" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRoleHL)" />
    {/* hub + spokes */}
    <g transform="translate(180,180)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      {[0,72,144,216,288].map((a,i)=>(
        <g key={i} transform={`rotate(${a}) translate(0 -90)`}>
          <circle cx="0" cy="0" r="16" fill={i%2?color.indigo400:color.emerald400} />
          <path d="M0 16v50" stroke={color.slate400} strokeWidth="3" />
        </g>
      ))}
    </g>
    <g transform="translate(380,90)" filter="url(#glowRoleHL)">
      <Card x="0" y="0" w="360" h="200" r="18" />
      <rect x="24" y="26" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="54" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="150" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="130" height="14" rx="7" fill={color.emerald400} />
    </g>
  </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Conclusion: Empowering Victims Through Continuous Support" className="w-full h-full" {...props}>
    <BG id="gConcHL" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConcHL)" />
    <rect x="90" y="90" width="16" height="180" rx="8" fill={color.indigo600} />
    <path d="M106 92h160l-24 24 24 24H106z" fill={color.cyan500} />
    <g transform="translate(260,240)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9">
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

/* =================================== PAGE =================================== */
export default function VictimHelplineChatSupport() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    ImmediateAssistSVG,
    ConfidentialSVG,
    LegalSupportSVG,
    EmotionalSVG,
    TechnicalSVG,
    MonitoringSVG,
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
        <span className="text-gray-700" aria-current="page">24/7 Helpline & Chat</span>
      </motion.nav>

      {/* Hero with in-file Video SVG */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">
            {data.tagline}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Immediate Help", "Confidential", "Legal", "Emotional", "Technical", "Monitoring"].map((pill) => (
              <span
                key={pill}
                className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroHelpline
                src="/assets/video/helpline-hero.mp4"
                poster="/assets/video/helpline-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp =
            ({ IntroSVG, ImmediateAssistSVG, ConfidentialSVG, LegalSupportSVG, EmotionalSVG, TechnicalSVG, MonitoringSVG, OrgRoleSVG, ConclusionSVG }[sec.svg]) ||
            IntroSVG;
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance but does not replace law enforcement or court procedures.
            All information is handled confidentially and in compliance with applicable laws.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
