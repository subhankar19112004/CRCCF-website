// src/pages/victimSupport/WomenChildCyberSafetySupport.jsx
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

/* ---------------------------- Hero SVG (Women & Child Safety) ---------------------------- */
const VideoHeroWomenChildSafety = () => {
  const shouldReduce = useReducedMotion();
  // Video: A scene depicting a futuristic protective shield forming around a woman and a child,
  // symbolizing safety and relief. There's a subtle animation of a helping hand reaching out.
  const videoURL = "https://cdn.pixabay.com/video/2023/07/04/173003-838641975_large.mp4"; // Futuristic shield/protection

  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Women & Child Cyber Safety Support">
      <defs>
        <linearGradient id="heroBG_WCS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.rose100} />
          <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <clipPath id="heroClip_WCS">
           <rect x="0" y="0" width="1000" height="460" rx="28" />
        </clipPath>
      </defs>

      {/* Fallback for reduced motion */}
      {shouldReduce ? (
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#heroBG_WCS)" />
      ) : (
        <g clipPath="url(#heroClip_WCS)">
            <rect x="0" y="0" width="1000" height="460" fill="url(#heroBG_WCS)" />
            <foreignObject x="0" y="0" width="1000" height="460">
            <video
                src={videoURL}
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </foreignObject>
        </g>
      )}

      {/* Overlaid elements for a realistic and futuristic scene */}
      <g>
        {/* Woman figure receiving help (futuristic, calm pose) */}
        <motion.g
            transform="translate(680, 260)" // Position adjusted for a taller figure
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
            <path d="M -50 0 L 50 0 L 40 -120 L -40 -120 Z" fill={color.indigo300} rx="10" /> {/* Body */}
            <circle cx="0" cy="-140" r="30" fill={color.indigo400} /> {/* Head */}
            <path d="M 40 -100 Q 70 -80, 60 -40 Q 50 0, 0 20 L 0 -100 Z" fill={color.indigo600} /> {/* Arm, slightly embracing */}
            <text x="-40" y="-80" fontSize="20" fill={color.white} opacity="0.8">{"♀️"}</text>
        </motion.g>

        {/* Child figure relieved (smaller, beside the woman, looking up) */}
        <motion.g
            transform="translate(600, 320)" // Positioned next to the woman
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
            <path d="M -30 0 L 30 0 L 25 -80 L -25 -80 Z" fill={color.emerald300} rx="8" /> {/* Body */}
            <circle cx="0" cy="-95" r="20" fill={color.emerald400} /> {/* Head */}
            <path d="M 25 -70 Q 40 -60, 35 -30 Q 30 0, 0 10 L 0 -70 Z" fill={color.emerald600} /> {/* Small arm, relaxed */}
            <text x="-15" y="-55" fontSize="16" fill={color.white} opacity="0.8">{"👶"}</text>
        </motion.g>

        {/* Helping Hand (futuristic glowing representation) */}
        <motion.g
            transform="translate(250, 180)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
            <path
                d="M 0 0 C 80 -80, 160 -80, 240 0 C 160 80, 80 80, 0 0 Z"
                fill="none" stroke={color.cyan300} strokeWidth="6"
                filter="url(#glowStrong)" // Use a stronger glow filter
            />
            <path d="M 120 -40 L 120 40 M 80 0 L 160 0" stroke={color.cyan500} strokeWidth="4" />
        </motion.g>

         {/* Glow filter definition */}
         <defs>
          <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="glow" />
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </g>
    </svg>
  );
};


/* ---------------------------- Section SVGs ---------------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Protecting Vulnerable Groups Online" className="w-full h-full">
      <BG id="gIntroWCS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowIntroWCS" std={8} alpha={0.4} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroWCS)" />
      {/* Abstract representation of a protective digital shield around a woman and child */}
      <g transform="translate(400 190)">
        {/* Child */}
        <motion.circle cx="-50" cy="20" r="20" fill={color.emerald300} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
        {/* Woman */}
        <motion.circle cx="50" cy="0" r="30" fill={color.indigo300} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} />
        {/* Protective shield */}
        <motion.path
          d="M -150 0 A 150 150 0 0 1 150 0 A 150 150 0 0 1 -150 0 Z"
          fill={color.cyan200} opacity="0.6" filter="url(#glowIntroWCS)"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        />
        {/* Checkmark inside for safety */}
        <motion.path d="M -30 0 L 0 30 L 60 -30" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
        />
      </g>
    </svg>
  ),
  digitalSafety: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Digital Safety" className="w-full h-full">
      <BG id="gDigitalSafetyWCS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gDigitalSafetyWCS)" />
      {/* A stylized shield with a lock, protecting a device icon */}
      <g transform="translate(400 190)">
        {/* Shield */}
        <motion.path
          d="M 0 -100 L -100 0 C -100 80, 100 80, 100 0 Z" fill={color.indigo600}
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        />
        {/* Lock */}
        <motion.rect x="-20" y="-30" width="40" height="30" rx="8" fill={color.white}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }}
        />
        <motion.path d="M -10 -50 V -70 A 10 10 0 0 1 10 -70 V -50" fill="none" stroke={color.white} strokeWidth="6"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }}
        />
        {/* Device behind shield */}
        <motion.rect x="-40" y="20" width="80" height="50" rx="10" fill={color.slate700}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.4 }}
        />
        <motion.rect x="-25" y="30" width="50" height="30" fill={color.slate900} rx="5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.4 }}
        />
      </g>
    </svg>
  ),
  legalGuidance: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Legal Guidance and Complaint Assistance" className="w-full h-full">
      <BG id="gLegalGuidanceWCS" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.white }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalGuidanceWCS)" />
      {/* Gavel, legal document, and a child/woman silhouette */}
      <g transform="translate(150 80)">
        {/* Gavel */}
        <motion.g initial={{ rotate: -15, originX: "50%", originY: "50%" }} animate={{ rotate: 15 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}>
          <rect x="0" y="0" width="100" height="25" rx="8" fill={color.slate700} />
          <rect x="35" y="25" width="25" height="60" fill={color.slate700} />
        </motion.g>
        {/* Legal Document */}
        <motion.rect
          x="180" y="50" width="250" height="180" rx="15" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
        />
        <rect x="200" y="70" width="210" height="15" rx="5" fill={color.cyan200} />
        <rect x="200" y="100" width="150" height="10" rx="4" fill={color.indigo200} />
        <rect x="200" y="120" width="180" height="10" rx="4" fill={color.indigo200} />
        {/* Woman/Child Silhouette */}
        <motion.g transform="translate(500 150)" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
          <circle cx="0" cy="-30" r="20" fill={color.slate700} />
          <rect x="-25" y="-10" width="50" height="60" rx="25" fill={color.slate700} />
        </motion.g>
      </g>
    </svg>
  ),
  psychologicalSupport: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Psychological and Emotional Support" className="w-full h-full">
      <BG id="gPsychWCS" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.rose50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychWCS)" />
      {/* Two figures, one comforting another, with a radiating heart/mind */}
      <g transform="translate(200 120)">
        {/* Supporter */}
        <motion.circle cx="80" cy="80" r="30" fill={color.emerald300} />
        <motion.rect x="50" y="110" width="60" height="80" rx="30" fill={color.emerald300} />
        {/* Vulnerable figure */}
        <motion.circle cx="280" cy="80" r="30" fill={color.indigo300} />
        <motion.rect x="250" y="110" width="60" height="80" rx="30" fill={color.indigo300} />
        {/* Connecting, comforting lines */}
        <motion.path
          d="M 110 140 C 150 100, 210 100, 250 140" stroke={color.indigo600} strokeWidth="5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
        />
        {/* Radiating heart/mind */}
        <motion.path
          d="M 180 50 a 40 40 0 0 1 40 40 a 40 40 0 0 1 -40 40 q 0 -40 -40 -40 a 40 40 0 0 1 40 -40"
          fill={color.rose400} opacity="0.8" filter="url(#glowIntroWCS)"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150, delay: 1 }}
        />
      </g>
    </svg>
  ),
  cybersecurityEducation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Cybersecurity Education and Awareness" className="w-full h-full">
      <BG id="gCyberEduWCS" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.cyan100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCyberEduWCS)" />
      {/* Open book/tablet showing safety tips to a diverse group of figures */}
      <g transform="translate(100 80)">
        {/* Open book / Tablet */}
        <motion.rect
          x="150" y="50" width="300" height="200" rx="15" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ rotateX: 90, originY: "100%", originZ: "0%" }} animate={{ rotateX: 0 }} transition={{ duration: 0.8 }}
        />
        <text x="170" y="100" fill={color.indigo600} fontSize="20" fontWeight="bold">SAFE TIPS</text>
        <rect x="170" y="130" width="100" height="10" rx="3" fill={color.cyan200} />
        <rect x="170" y="150" width="150" height="10" rx="3" fill={color.cyan200} />
        {/* Figures looking at the book */}
        <motion.g transform="translate(100 200)" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <circle cx="0" cy="0" r="20" fill={color.indigo300} />
          <rect x="-25" y="20" width="50" height="60" rx="25" fill={color.indigo300} />
        </motion.g>
        <motion.g transform="translate(500 200)" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
          <circle cx="0" cy="0" r="15" fill={color.emerald300} />
          <rect x="-20" y="15" width="40" height="50" rx="20" fill={color.emerald300} />
        </motion.g>
      </g>
    </svg>
  ),
  evidencePreservation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Evidence Preservation and Reporting" className="w-full h-full">
      <BG id="gEvidenceWCS" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvidenceWCS)" />
      {/* Magnifying glass over digital data, with a folder for reporting */}
      <g transform="translate(150 80)">
        {/* Screen with evidence */}
        <motion.rect
          x="0" y="0" width="300" height="200" rx="15" fill={color.slate900}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
        />
        <text x="30" y="50" fill={color.emerald400} fontSize="18" fontFamily="monospace">CHAT LOG:</text>
        <text x="30" y="80" fill={color.cyan300} fontSize="14" fontFamily="monospace">"Threatening msg..."</text>
        <text x="30" y="100" fill={color.cyan300} fontSize="14" fontFamily="monospace">"Screenshot attached"</text>
        {/* Magnifying glass */}
        <g transform="translate(180 100)">
          <motion.circle cx="0" cy="0" r="50" fill="none" stroke={color.cyan200} strokeWidth="8"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.line x1="35" y1="35" x2="80" y2="80" stroke={color.cyan200} strokeWidth="12" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          />
        </g>
      </g>
      {/* Reporting folder */}
      <g transform="translate(500 100)">
        <motion.rect x="0" y="0" width="150" height="120" rx="10" fill={color.white} stroke={color.indigo300} strokeWidth="2"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
        />
        <path d="M 0 20 L 20 0 H 130 A 10 10 0 0 1 140 10 V 120 A 10 10 0 0 1 130 130 H 10 A 10 10 0 0 1 0 120 Z" fill={color.white} stroke={color.indigo300} strokeWidth="2" />
        <path d="M 40 60 L 70 90 L 110 30" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  ),
  continuousSupport: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Support and Helpline Services" className="w-full h-full">
      <BG id="gSupportWCS" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSupportWCS)" />
      {/* A phone icon with continuous waves, a chat bubble, and a helpline symbol */}
      <g transform="translate(400 190)">
        {/* Phone */}
        <motion.rect
          x="-50" y="-80" width="100" height="160" rx="15" fill={color.slate700}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.circle cx="0" cy="50" r="10" fill={color.white} />
        <motion.path
          d="M -30 -50 h 60 M -30 -30 h 60 M -30 -10 h 40" stroke={color.white} strokeWidth="4" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
        />
        {/* Waves for continuous support */}
        <motion.path
          d="M -150 0 Q -100 -50, -50 0 Q 0 50, 50 0 Q 100 -50, 150 0" stroke={color.cyan500} strokeWidth="4" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 1.5 }}
        />
        {/* Chat bubble */}
        <motion.path
          d="M 100 -100 Q 150 -130, 200 -100 Q 230 -70, 200 -40 L 180 -40 L 150 -20 L 150 -40 Q 100 -70, 100 -100 Z"
          fill={color.emerald300} stroke={color.emerald600} strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        />
      </g>
    </svg>
  ),
  orgRole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Cyber Safety Support" className="w-full h-full">
      <BG id="gOrgRoleWCS" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.rose100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgRoleWCS)" />
      {/* Central CRCCF shield with surrounding service icons */}
      <g transform="translate(400 190)">
        <motion.path
          d="M 0 -80 L -80 0 C -80 60, 80 60, 80 0 Z" fill={color.indigo600}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        <text x="0" y="-10" textAnchor="middle" fill={color.white} fontSize="25" fontWeight="bold">CRCCF</text>
        {/* Service icons */}
        <motion.g transform="translate(0 -120)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}>
          <circle r="25" fill={color.white} /> <text x="-10" y="8" fontSize="30">🛡️</text>
        </motion.g>
        <motion.g transform="translate(100 0)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
          <circle r="25" fill={color.white} /> <text x="-10" y="8" fontSize="30">⚖️</text>
        </motion.g>
        <motion.g transform="translate(0 120)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}>
          <circle r="25" fill={color.white} /> <text x="-10" y="8" fontSize="30">❤️</text>
        </motion.g>
        <motion.g transform="translate(-100 0)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1, type: "spring" }}>
          <circle r="25" fill={color.white} /> <text x="-10" y="8" fontSize="30">🎓</text>
        </motion.g>
      </g>
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Empowering Women and Children Online" className="w-full h-full">
      <BG id="gConcWCS" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.cyan100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcWCS)" />
      {/* Empowered woman and child silhouettes standing confidently */}
      <g transform="translate(400 210)">
        {/* Woman */}
        <motion.circle cx="-60" cy="-60" r="30" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.rect x="-90" y="-30" width="60" height="90" rx="30" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        />
        {/* Child */}
        <motion.circle cx="60" cy="-40" r="25" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        />
        <motion.rect x="35" y="-15" width="50" height="70" rx="25" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
        />
        {/* Radiant glow of empowerment */}
        <motion.circle
          cx="0" cy="0" r="150" fill={color.amber100} opacity="0.4" filter="url(#glowIntroWCS)"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 100 }}
        />
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
  title: "Women & Child Cyber Safety Support – CRCCF",
  tagline: "Protecting, Guiding, and Empowering Vulnerable Groups Online",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Protecting Vulnerable Groups Online",
      content: `Women and children are among the most vulnerable targets of cybercrime, facing risks such as harassment, exploitation, and identity theft. The subcard “Women & Child Cyber Safety Support” emphasizes providing specialized guidance, legal assistance, and emotional support to protect these groups in the digital environment. Our organization ensures that women and children can safely navigate online spaces while accessing immediate professional help whenever needed.
CRCCF operates dedicated teams to respond to cyber threats affecting women and children, offering timely intervention, guidance, and reassurance. By delivering continuous support and expert advice, victims and their guardians are empowered to act proactively and safeguard themselves from online risks.`,
      svg: svgMap.intro,
    },
    {
      id: "digitalSafety",
      heading: "2. Right to Digital Safety",
      content: `Every woman and child has the right to a secure digital environment free from harassment, exploitation, or abuse. Our support services educate victims and guardians on safe online practices, privacy measures, and preventive strategies.
Providing knowledge about cyber threats helps women and children recognize risks and adopt proactive measures. CRCCF equips vulnerable users with practical guidance, enabling them to confidently protect themselves and maintain control over their online experiences.`,
      svg: svgMap.digitalSafety,
    },
    {
      id: "legalGuidance",
      heading: "3. Legal Guidance and Complaint Assistance",
      content: `Victims have the right to pursue legal remedies in cases of cybercrime affecting women and children. Our organization provides expert guidance on filing complaints, understanding cyber laws, and pursuing civil or criminal actions.
CRCCF assists victims at every stage of the legal process, ensuring proper documentation and submission of evidence. This approach strengthens cases, guarantees accountability for perpetrators, and ensures that justice is served efficiently and effectively.`,
      svg: svgMap.legalGuidance,
    },
    {
      id: "psychologicalSupport",
      heading: "4. Psychological and Emotional Support",
      content: `Cyber incidents can have profound emotional effects, particularly on children and women who may experience fear, anxiety, or trauma. Victims have the right to professional counselling and emotional guidance.
CRCCF offers tailored therapy sessions, coping strategies, and continuous emotional support. By addressing mental well-being, victims regain confidence, resilience, and the ability to engage safely in both digital and offline spaces.`,
      svg: svgMap.psychologicalSupport,
    },
    {
      id: "cybersecurityEducation",
      heading: "5. Cybersecurity Education and Awareness",
      content: `Education is a crucial tool in preventing cybercrime. Women and children have the right to access resources and training that increase awareness of threats such as phishing, cyberbullying, scams, and inappropriate content.
Our organization conducts workshops, distributes educational materials, and provides practical advice to ensure vulnerable groups can identify risks, apply safe online practices, and interact confidently with digital platforms.`,
      svg: svgMap.cybersecurityEducation,
    },
    {
      id: "evidencePreservation",
      heading: "6. Evidence Preservation and Reporting",
      content: `Proper documentation of cyber incidents is vital for legal action. Victims have the right to expert assistance in preserving digital evidence, including messages, emails, screenshots, and social media interactions.
CRCCF ensures that evidence is collected meticulously and maintained in a legally admissible format. This strengthens the case, safeguards the victim’s interests, and supports successful judicial outcomes.`,
      svg: svgMap.evidencePreservation,
    },
    {
      id: "continuousSupport",
      heading: "7. Continuous Support and Helpline Services",
      content: `Women and children have the right to ongoing assistance whenever required. Our organization provides dedicated helplines, chat support, and follow-ups, ensuring that victims or guardians can access guidance, report new incidents, and receive timely advice.
Continuous support reinforces confidence, resilience, and safety in the digital environment. CRCCF ensures that vulnerable groups remain protected and informed throughout their recovery and engagement with online spaces.`,
      svg: svgMap.continuousSupport,
    },
    {
      id: "orgRole",
      heading: "8. Organization’s Role in Cyber Safety Support",
      content: `Our organization is committed to holistic cyber safety services for women and children. By integrating legal guidance, emotional counseling, cybersecurity education, and round-the-clock support, we create a comprehensive framework for protection and empowerment.
Every intervention is conducted professionally, confidentially, and empathetically. CRCCF ensures that victims feel safe, respected, and supported, enabling them to navigate digital platforms securely and confidently.`,
      svg: svgMap.orgRole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Women and Children Online",
      content: `Women & Child Cyber Safety Support guarantees that vulnerable groups can use digital spaces safely while receiving immediate assistance when facing cyber threats. Upholding their rights to safety, justice, and emotional support allows victims to act confidently, protect themselves, and recover effectively.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate services, empowering every woman and child to navigate the online world securely, confidently, and with dignity.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function WomenChildCyberSafetySupport() {
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
        <span className="text-gray-700" aria-current="page">Women & Child Cyber Safety Support</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-rose-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Vulnerable Groups", "Protection", "Empowerment"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroWomenChildSafety />
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
            🛡️ <strong>Disclaimer:</strong> CRCCF provides specialized support for women and children facing cyber threats.
            Our services are complementary to legal authorities. All interactions are confidential and handled with utmost care.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}