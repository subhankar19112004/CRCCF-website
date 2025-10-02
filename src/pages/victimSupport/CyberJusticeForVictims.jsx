// src/pages/victimSupport/CyberJusticeForVictims.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

/* -------------------------- Color Palette -------------------------- */
const color = {
  cyan25: "#F5FEFF", cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan200: "#A5F3FC", cyan300: "#67E8F9", cyan500: "#06B6D4",
  indigo25: "#F7F8FF", indigo50: "#EEF2FF", indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5", indigo800: "#3730A3",
  emerald50: "#ECFDF5", emerald100: "#D1FAE5", emerald300: "#86EFAC", emerald400: "#34D399", emerald600: "#059669",
  amber50: "#FFFBEB", amber100: "#FEF3C7",
  rose50: "#FFF1F2", rose100: "#FFE4E6", rose400: "#FB7185", rose500: "#F43F5E",
  slate200: "#E2E8F0", slate300: "#CBD5E1", slate400: "#94A3B8", slate500: "#64748B", slate700: "#334155", slate900: "#0F172A",
  white: "#FFFFFF", black: "#000000",
};

/* ------------------------- Framer Motion Helper ------------------------- */
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

/* ---------------------------- Section SVG Helpers ---------------------------- */
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

/* ---------------------------- Hero SVG (Cyber Justice) ---------------------------- */
const VideoHeroJustice = () => {
  const shouldReduce = useReducedMotion();
  // Video shows an abstract digital background with glowing particles, representing the digital realm where justice is sought.
  const videoURL = "https://cdn.pixabay.com/video/2022/10/04/133039-759473839_large.mp4";

  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Cyber Justice Scene">
      <defs>
        <linearGradient id="heroBG_Justice" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="100%" stopColor={color.cyan100} />
        </linearGradient>
        <mask id="videoMask_Justice">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="white" />
        </mask>
        <clipPath id="heroClip">
           <rect x="0" y="0" width="1000" height="460" rx="28" />
        </clipPath>
      </defs>

      {/* Fallback for reduced motion */}
      {shouldReduce ? (
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#heroBG_Justice)" />
      ) : (
        <g clipPath="url(#heroClip)">
            <rect x="0" y="0" width="1000" height="460" fill="url(#heroBG_Justice)" />
            <foreignObject x="0" y="0" width="1000" height="460">
            <video
                src={videoURL}
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </foreignObject>
        </g>
      )}

      {/* Static SVG elements overlaid on the video/gradient */}
      <g>
        {/* Central Gavel and Shield */}
        <g transform="translate(420 150)">
            <motion.path
                d="M100 0 C 40 -10, 40 130, 100 120 S 160 -10, 100 0 Z"
                fill={color.white} fillOpacity="0.8" stroke={color.indigo400} strokeWidth="3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.g
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <rect x="85" y="40" width="30" height="15" rx="4" fill={color.slate700} />
                <rect x="95" y="55" width="10" height="35" rx="3" fill={color.slate700} />
                <path d="M75 35 h 50" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
            </motion.g>
        </g>
        {/* Floating UI Elements */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Card x={150} y={120} w={180} h={100} r={20} fill={color.white} opacity={0.7} stroke={color.slate200} sw={2} />
            <rect x={170} y={140} width={80} height={8} rx={4} fill={color.cyan200} />
            <rect x={170} y={155} width={140} height={8} rx={4} fill={color.indigo200} />
            <rect x={170} y={170} width={100} height={8} rx={4} fill={color.cyan200} />
            <path d="M780 320 l 15 15 l 25 -25" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="800" cy={330} r={35} fill="none" stroke={color.white} strokeWidth="4" opacity="0.8" />
        </motion.g>
      </g>
    </svg>
  );
};


/* ---------------------------- Section SVGs ---------------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Justice in the Digital Realm" className="w-full h-full">
      <BG id="gIntroCJ" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
      <SoftGlow id="glowIntroCJ" std={10} alpha={0.4} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroCJ)" />
      {/* Scales of justice balanced over a digital landscape */}
      <g transform="translate(280 80)">
        <path d="M0 130 Q 120 180, 240 130" stroke={color.slate400} strokeWidth="8" fill="none" />
        <line x1="120" y1="0" x2="120" y2="130" stroke={color.slate400} strokeWidth="8" />
        <rect x="80" y="-10" width="80" height="20" rx="10" fill={color.slate400} />
        {/* Left Pan: Digital Icons */}
        <g transform="translate(0, 130)">
          <path d="M -50 0 L 0 50 L 50 0 Z" fill={color.indigo100} stroke={color.indigo400} strokeWidth="3" />
          <rect x="-20" y="10" width="15" height="20" rx="4" fill={color.cyan500} />
          <circle cx="15" cy="20" r="8" fill={color.emerald400} />
        </g>
        {/* Right Pan: Legal/User Icons */}
        <g transform="translate(240, 130)">
          <path d="M -50 0 L 0 50 L 50 0 Z" fill={color.indigo100} stroke={color.indigo400} strokeWidth="3" />
          <circle cx="0" cy="15" r="7" fill={color.slate700} />
          <rect x="-5" y="24" width="10" height="12" rx="5" fill={color.slate700} />
        </g>
      </g>
      {/* Background circuit patterns */}
      <path d="M 50 350 L 150 350 L 150 250 L 250 250 M 750 50 L 650 50 L 650 150" stroke={color.indigo100} strokeWidth="6" fill="none" />
    </svg>
  ),
  legalRedressal: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Legal Redressal" className="w-full h-full">
      <BG id="gLegalCJ" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.emerald50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalCJ)" />
      {/* A legal document on a tablet being signed */}
      <g transform="translate(180 70)">
        <Card x="0" y="0" w={440} h={240} r={20} stroke={color.slate300} sw={3} />
        <rect x="20" y="20" width="400" height="30" rx="8" fill={color.indigo100} />
        <rect x="20" y="70" width="300" height="10" rx="5" fill={color.slate200} />
        <rect x="20" y="95" width="380" height="10" rx="5" fill={color.slate200} />
        <rect x="20" y="120" width="350" height="10" rx="5" fill={color.slate200} />
        {/* Signature */}
        <path d="M 280 180 C 310 160, 340 200, 370 180" stroke={color.indigo600} strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Stylus */}
        <g transform="translate(370 160) rotate(20)">
            <rect x="0" y="0" width="80" height="12" rx="6" fill={color.slate700} />
            <polygon points="80,0 80,12 90,6" fill={color.slate700} />
        </g>
      </g>
    </svg>
  ),
  forensics: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Access to Cyber Forensic Expertise" className="w-full h-full">
      <BG id="gForensicsCJ" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gForensicsCJ)" />
      {/* Magnifying glass over a screen with binary data */}
      <g transform="translate(150 50)">
        <Card x="0" y="0" w="500" h="280" r={20} fill={color.slate900} />
        <text y="50" fill={color.emerald400} fontSize="20" fontFamily="monospace">
          <tspan x="30">01101001 01101110 01110110 01100101 01110011 01110100</tspan>
          <tspan x="30" dy="30">01101001 01100111 01100001 01110100 01100101 00101110</tspan>
          <tspan x="30" dy="30" fill={color.rose400}>01000101 01010110 01001001 01000100 01000101 01001110</tspan>
          <tspan x="30" dy="30">01000011 01000101 00100000 01000110 01001111 01010101</tspan>
          <tspan x="30" dy="30">01001110 01000100 00100000 00110001 00110011 00110100</tspan>
          <tspan x="30" dy="30">00110111 00101110 00100000 01010011 01000101 01000011</tspan>
        </text>
        {/* Magnifying glass */}
        <g transform="translate(300 120)">
          <circle cx="0" cy="0" r="80" fill="none" stroke={color.cyan200} strokeWidth="12" />
          <line x1="60" y1="60" x2="140" y2="140" stroke={color.cyan200} strokeWidth="18" strokeLinecap="round" />
          <circle cx="0" cy="0" r="70" fill={color.white} opacity="0.1" />
        </g>
      </g>
    </svg>
  ),
  protection: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Protection of Victim Rights" className="w-full h-full">
      <BG id="gProtectCJ" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.cyan100 }]} />
      <SoftGlow id="glowProtectCJ" std={12} alpha={0.5} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gProtectCJ)" />
      {/* Central shield deflecting threats */}
      <g transform="translate(400 190)">
        <path d="M 0 -120 L -100 0 C -100 80, 100 80, 100 0 Z" fill={color.white} filter="url(#glowProtectCJ)" />
        <path d="M 0 -120 L -100 0 C -100 80, 100 80, 100 0 Z" fill="url(#gProtectCJ)" stroke={color.indigo600} strokeWidth="6" />
        {/* User Icon inside shield */}
        <circle cx="0" cy="-20" r="25" fill={color.slate700} />
        <rect x="-30" y="10" width="60" height="40" rx="30" fill={color.slate700} />
      </g>
      {/* Threats being deflected */}
      <motion.path
        d="M 50 100 C 150 150, 250 50, 300 80" stroke={color.rose500} strokeWidth="8" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
      />
      <motion.path
        d="M 750 120 C 650 170, 550 70, 500 100" stroke={color.rose500} strokeWidth="8" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
      />
    </svg>
  ),
  psych: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Psychological and Emotional Support" className="w-full h-full">
      <BG id="gPsychCJ" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychCJ)" />
      {/* Two figures in a supportive conversation */}
      <g transform="translate(200 100)">
        {/* Counselor */}
        <circle cx="80" cy="80" r="30" fill={color.indigo300} />
        <rect x="50" y="110" width="60" height="80" rx="30" fill={color.indigo300} />
        {/* Victim */}
        <circle cx="280" cy="80" r="30" fill={color.emerald300} />
        <rect x="250" y="110" width="60" height="80" rx="30" fill={color.emerald300} />
        {/* Supportive Heart */}
        <motion.path
          d="M 180 100 a 40 40 0 0 1 40 40 a 40 40 0 0 1 -40 40 q 0 -40 -40 -40 a 40 40 0 0 1 40 -40"
          fill={color.rose400}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
        />
        {/* Speech Bubble */}
        <path d="M 130 50 C 110 20, 180 20, 200 50 C 220 20, 290 20, 270 50 C 290 80, 220 80, 200 50" fill={color.white} opacity="0.8"/>
      </g>
    </svg>
  ),
  updates: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Case Updates and Advocacy" className="w-full h-full">
      <BG id="gUpdatesCJ" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.white }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gUpdatesCJ)" />
      {/* Progress timeline on a device */}
      <Card x="150" y="80" w="500" h="220" r={20} fill={color.white} stroke={color.slate200} sw={2} />
      <line x1="200" y1="190" x2="600" y2="190" stroke={color.slate300} strokeWidth="6" />
      {/* Progress Steps */}
      {[200, 333, 466, 600].map((pos, i) => (
        <g key={i}>
          <motion.circle cx={pos} cy="190" r="15" fill={i < 3 ? color.emerald600 : color.slate300}
             initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 * i }}
          />
          <motion.path d={`M ${pos-7} 188 l 6 6 l 10 -10`} stroke={color.white} strokeWidth="3" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: i < 3 ? 1: 0 }} transition={{ delay: 0.2 * i + 0.1 }}
          />
        </g>
      ))}
      <text x="200" y="230" textAnchor="middle" fill={color.slate700}>Complaint</text>
      <text x="333" y="230" textAnchor="middle" fill={color.slate700}>Evidence</text>
      <text x="466" y="230" textAnchor="middle" fill={color.slate700}>Hearing</text>
      <text x="600" y="230" textAnchor="middle" fill={color.slate500}>Resolution</text>
    </svg>
  ),
  orgrole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role" className="w-full h-full">
      <BG id="gOrgRoleCJ" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgRoleCJ)" />
      {/* Central Hub with radiating services */}
      <g transform="translate(400 190)">
        <circle cx="0" cy="0" r="50" fill={color.indigo600} />
        <text x="0" y="10" textAnchor="middle" fill={color.white} fontSize="24" fontWeight="bold">CRCCF</text>
        {/* Service Lines & Icons */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.line key={i}
                x1="0" y1="0"
                x2={Math.cos((angle - 90) * Math.PI / 180) * 150}
                y2={Math.sin((angle - 90) * Math.PI / 180) * 150}
                stroke={color.indigo400} strokeWidth="4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.15 }}
            />
        ))}
        {/* Icons */}
        <g transform="translate(0, -180)">
            <rect x="-15" y="-15" width="30" height="30" rx="5" fill={color.white} stroke={color.indigo400} strokeWidth="2"/>
            <path d="M-10 0 h 20 m -10 -8 v 16" stroke={color.indigo600} strokeWidth="3" />
        </g>
        <g transform="translate(142, -105)">
            <circle cx="0" cy="0" r="15" fill={color.white} stroke={color.indigo400} strokeWidth="2"/>
            <path d="M-7 0 l 6 6 l 8 -8" stroke={color.emerald600} strokeWidth="3" fill="none" />
        </g>
        <g transform="translate(88, 145)">
            <path d="M -15 -10 L 0 15 L 15 -10 Z" fill={color.white} stroke={color.indigo400} strokeWidth="2"/>
        </g>
      </g>
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Comprehensive Cyber Justice" className="w-full h-full">
      <BG id="gConcCJ" stops={[{ offset: "0%", color: color.indigo200 }, { offset: "100%", color: color.emerald100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcCJ)" />
      {/* Empowered person with a shield and sunrise */}
      <g transform="translate(400 210)">
        <path d="M -200 150 C -100 -50, 100 -50, 200 150 Z" fill={color.amber100} opacity="0.7" />
        <circle cx="0" cy="150" r="200" fill={color.amber50} />
        <circle cx="0" cy="0" r="30" fill={color.slate700} />
        <rect x="-40" y="30" width="80" height="90" rx="40" fill={color.slate700} />
        <path d="M 0 50 L -40 100 L -30 110 L 0 65 L 30 110 L 40 100 Z" fill={color.indigo600} />
      </g>
    </svg>
  ),
};

/* ------------------------------ Section Block ------------------------------ */
const SectionBlock = ({ id, heading, content, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const paragraphs = content.split("\n").filter(p => p.trim() !== "").map((p, i) => (
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
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <SVG />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{heading}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* ------------------------------- DATA (intact) ------------------------------- */
const data = {
  title: "Cyber Justice for Victims – CRCCF",
  tagline: "Ensuring Fair, Timely, and Effective Justice for Cybercrime Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Ensuring Justice in the Digital Realm",
      content: `With the exponential growth of digital platforms, cybercrimes have become increasingly sophisticated, targeting individuals, businesses, and institutions alike. The subcard “Cyber Justice for Victims” emphasizes the importance of timely, fair, and comprehensive justice.
CRCCF ensures victims have access to legal guidance, technical expertise, and emotional support, empowering them to navigate cybercrime laws confidently and secure rightful outcomes without fear or confusion.`,
      svg: svgMap.intro,
    },
    {
      id: "legalRedressal",
      heading: "2. Right to Legal Redressal",
      content: `Every victim has the fundamental right to seek justice and legal remedies. This includes filing formal complaints, initiating investigations, and pursuing civil or criminal claims.
CRCCF assists victims in understanding applicable laws, preparing accurate documentation, and submitting complaints to appropriate authorities. Legal support ensures that victims’ claims are professionally represented, strengthening the likelihood of a favourable resolution and reinforcing confidence in the justice process.`,
      svg: svgMap.legalRedressal,
    },
    {
      id: "forensics",
      heading: "3. Access to Cyber Forensic Expertise",
      content: `Cyberjustice depends heavily on credible digital evidence. Victims have the right to expert assistance in collecting, preserving, and analysing emails, transaction records, social media communications, and other electronic data.
CRCCF collaborates with certified cyber forensic specialists to ensure that evidence is handled meticulously, maintaining integrity and admissibility in court. This guarantees that cases are strengthened, and perpetrators can be held accountable with professional precision.`,
      svg: svgMap.forensics,
    },
    {
      id: "protection",
      heading: "4. Protection of Victim Rights",
      content: `Victims are entitled to protection from retaliation, intimidation, and further cyber threats throughout legal proceedings. CRCCF ensures that personal, financial, and digital information remains confidential and secure.
Protective measures include secure communication channels, monitoring online activity, and advising victims on safe digital practices. Safeguarding these rights fosters trust and allows victims to participate fully in the justice process without fear.`,
      svg: svgMap.protection,
    },
    {
      id: "psych",
      heading: "5. Psychological and Emotional Support",
      content: `Pursuing justice for cybercrime can be mentally and emotionally challenging. Victims have the right to professional counselling and cyber-psychology support to manage stress, fear, and trauma.
CRCCF provides continuous emotional guidance, therapy sessions, and coping strategies, enabling victims to approach legal proceedings with confidence, resilience, and mental clarity. Emotional recovery is integral to achieving holistic justice and restoring a sense of security.`,
      svg: svgMap.psych,
    },
    {
      id: "updates",
      heading: "6. Continuous Case Updates and Advocacy",
      content: `Victims have the right to remain informed about every stage of their case, from investigations to court proceedings. CRCCF provides continuous updates, advocacy, and monitoring to ensure victims are actively involved and aware of developments.
Transparent communication fosters trust, reduces anxiety, and empowers victims to make well-informed decisions while navigating complex legal procedures.`,
      svg: svgMap.updates,
    },
    {
      id: "orgrole",
      heading: "7. Organization’s Role in Achieving Cyber Justice",
      content: `CRCCF is committed to delivering end-to-end support for cybercrime victims by combining legal guidance, forensic expertise, digital security advice, and psychological counselling. We assist in complaint registration, evidence preservation, court representation, and post-case preventive measures, ensuring that justice is not only sought but effectively realized.
By integrating all aspects of support, CRCCF guarantees that victims’ rights are fully protected and that they are empowered throughout the journey toward justice.`,
      svg: svgMap.orgrole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Comprehensive Cyber Justice for Victims",
      content: `Cyber justice encompasses legal redressal, protection of rights, evidence management, and emotional support. Upholding these rights allows victims to pursue justice confidently, recover from cybercrime impacts, and regain control over their digital and personal lives.
CRCCF remains dedicated to providing professional, thorough, and compassionate services, ensuring that every cybercrime victim receives robust support, secure representation, and complete empowerment throughout the pursuit of justice.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function CyberJusticeForVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
        <span className="text-gray-700" aria-current="page">Cyber Justice for Victims</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-indigo-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Legal", "Forensic", "Justice"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroJustice />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => (
          <SectionBlock
            key={sec.id}
            id={sec.id}
            heading={sec.heading}
            content={sec.content}
            SVG={sec.svg}
            reverse={idx % 2 === 1}
          />
        ))}
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