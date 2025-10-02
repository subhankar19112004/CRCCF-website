// src/pages/victimSupport/OnlineSafetyVictimHelp.jsx
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

/* ---------------------------- Hero SVG (Child-friendly Online Safety) ---------------------------- */
const VideoHeroOnlineSafety = () => {
  const shouldReduce = useReducedMotion();
  // Video: An animated scene of a friendly cartoon robot helping a child navigate a tablet,
  // showing safe online activities (e.g., locking a padlock icon, putting on a 'shield' with a checkmark).
  // The background is a soft, warm digital landscape.
  const videoURL = "https://cdn.pixabay.com/video/2023/11/08/187902-885741369_large.mp4"; // Example of a friendly digital animation

  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Child-friendly Online Safety Scene">
      <defs>
        <linearGradient id="heroBG_Safety" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.emerald100} />
          <stop offset="100%" stopColor={color.cyan100} />
        </linearGradient>
        <mask id="videoMask_Safety">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="white" />
        </mask>
        <clipPath id="heroClip_Safety">
           <rect x="0" y="0" width="1000" height="460" rx="28" />
        </clipPath>
      </defs>

      {/* Fallback for reduced motion */}
      {shouldReduce ? (
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#heroBG_Safety)" />
      ) : (
        <g clipPath="url(#heroClip_Safety)">
            <rect x="0" y="0" width="1000" height="460" fill="url(#heroBG_Safety)" />
            <foreignObject x="0" y="0" width="1000" height="460">
            <video
                src={videoURL}
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </foreignObject>
        </g>
      )}

      {/* Overlaid friendly cartoon elements */}
      <g>
        {/* Friendly Robot */}
        <motion.g
            transform="translate(700, 280)"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <circle cx="0" cy="-60" r="30" fill={color.slate700} /> {/* Head */}
            <rect x="-40" y="-30" width="80" height="80" rx="15" fill={color.slate700} /> {/* Body */}
            <rect x="-60" y="-20" width="20" height="40" rx="10" fill={color.slate500} /> {/* Left Arm */}
            <rect x="40" y="-20" width="20" height="40" rx="10" fill={color.slate500} /> {/* Right Arm */}
            <circle cx="-15" cy="-65" r="5" fill={color.cyan200} /> {/* Left Eye */}
            <circle cx="15" cy="-65" r="5" fill={color.cyan200} /> {/* Right Eye */}
            <path d="M -10 -45 Q 0 -40, 10 -45" stroke={color.white} strokeWidth="3" fill="none" strokeLinecap="round" /> {/* Mouth */}
            <rect x="-20" y="50" width="40" height="20" rx="10" fill={color.slate900} /> {/* Legs connector */}
            <rect x="-30" y="70" width="15" height="40" rx="7" fill={color.slate500} /> {/* Left Leg */}
            <rect x="15" y="70" width="15" height="40" rx="7" fill={color.slate500} /> {/* Right Leg */}
        </motion.g>

        {/* Child with tablet */}
        <motion.g
            transform="translate(250, 300)"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <circle cx="0" cy="-70" r="25" fill={color.amber100} /> {/* Head */}
            <rect x="-30" y="-45" width="60" height="70" rx="20" fill={color.emerald300} /> {/* Body */}
            <path d="M -15 -60 Q 0 -55, 15 -60" stroke={color.slate700} strokeWidth="2" fill="none" strokeLinecap="round" /> {/* Mouth */}
            <circle cx="-10" cy="-75" r="3" fill={color.slate700} /> {/* Left Eye */}
            <circle cx="10" cy="-75" r="3" fill={color.slate700} /> {/* Right Eye */}

            {/* Tablet */}
            <motion.rect
                x="30" y="-30" width="80" height="120" rx="10" fill={color.indigo400}
                initial={{ rotate: -10, originX: "50%", originY: "50%" }}
                animate={{ rotate: 5 }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
            />
            <circle cx="70" cy="15" r="10" fill={color.cyan100} /> {/* Tablet Icon: Lock */}
            <path d="M 70 10 v -10 h 5 v 10" stroke={color.slate700} strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="67" y="10" width="6" height="8" fill={color.slate700} rx="1" />
        </motion.g>

        {/* Floating security icons */}
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
            transform="translate(480, 100)"
        >
            <path d="M0 0l30 15v20c0 25-15 45-30 55-15-10-30-30-30-55v-20l30-15z" fill={color.white} stroke={color.emerald600} strokeWidth="3"/>
            <path d="M-10 20l10 10l15 -15" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round" />
        </motion.g>
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
            transform="translate(150, 180)"
        >
            <rect x="-20" y="-20" width="40" height="40" rx="8" fill={color.white} stroke={color.indigo400} strokeWidth="2" />
            <circle cx="0" cy="0" r="10" fill={color.slate700} />
            <path d="M 0 -10 v -5 m 0 10 v 5" stroke={color.indigo400} strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </g>
    </svg>
  );
};


/* ---------------------------- Section SVGs ---------------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Promoting Online Safety" className="w-full h-full">
      <BG id="gIntroOS" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
      <SoftGlow id="glowIntroOS" std={8} alpha={0.4} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroOS)" />
      {/* Abstract representation of safe online interaction: shield, secure connection */}
      <g transform="translate(150 80)">
        {/* Shield */}
        <motion.path
          d="M 100 0 L 0 100 C 0 180, 200 180, 200 100 Z" fill={color.white} stroke={color.emerald400} strokeWidth="5"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        />
        <path d="M 70 60 l 30 30 l 50 -50" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(480 120)">
        {/* Secure connection lines */}
        <motion.line x1="0" y1="0" x2="150" y2="0" stroke={color.indigo400} strokeWidth="8" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.line x1="150" y1="0" x2="150" y2="80" stroke={color.indigo400} strokeWidth="8" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
        />
        <circle cx="0" cy="0" r="20" fill={color.cyan500} />
        <circle cx="150" cy="80" r="20" fill={color.cyan500} />
      </g>
    </svg>
  ),
  secureEnvironments: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Secure Digital Environments" className="w-full h-full">
      <BG id="gSecureOS" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.rose50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSecureOS)" />
      {/* Padlock and multiple secured devices */}
      <g transform="translate(150 100)">
        {/* Central Padlock */}
        <motion.rect
          x="0" y="0" width="100" height="70" rx="15" fill={color.white} stroke={color.indigo600} strokeWidth="4"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M 25 0 V -30 A 25 25 0 0 1 75 -30 V 0" fill="none" stroke={color.indigo600} strokeWidth="8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        />
        {/* Devices */}
        <motion.rect
          x="150" y="20" width="60" height="40" rx="8" fill={color.slate700}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
        />
        <motion.rect
          x="230" y="80" width="40" height="70" rx="8" fill={color.slate700}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        />
        <motion.rect
          x="-50" y="100" width="70" height="50" rx="8" fill={color.slate700}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
        />
      </g>
    </svg>
  ),
  legalGuidance: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Legal Guidance and Support" className="w-full h-full">
      <BG id="gLegalOS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalOS)" />
      {/* Gavel and legal documents */}
      <g transform="translate(200 100)">
        {/* Gavel */}
        <motion.rect
          x="0" y="0" width="120" height="30" rx="10" fill={color.slate700}
          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        />
        <motion.rect
          x="45" y="30" width="30" height="70" fill={color.slate700}
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.circle
          cx="60" cy="120" r="40" fill={color.amber100} stroke={color.amber100} strokeWidth="3"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
        />
      </g>
      <g transform="translate(450 100)">
        {/* Documents */}
        <motion.rect
          x="0" y="0" width="150" height="180" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ rotate: 5, originX: "0%", originY: "100%" }} animate={{ rotate: 0 }} transition={{ duration: 0.6 }}
        />
        <rect x="20" y="20" width="110" height="15" rx="5" fill={color.indigo200} />
        <rect x="20" y="50" width="80" height="10" rx="4" fill={color.cyan200} />
        <rect x="20" y="70" width="95" height="10" rx="4" fill={color.cyan200} />
        <rect x="20" y="90" width="70" height="10" rx="4" fill={color.cyan200} />
      </g>
    </svg>
  ),
  cybersecurityAwareness: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Cybersecurity Awareness and Education" className="w-full h-full">
      <BG id="gAwarenessOS" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAwarenessOS)" />
      {/* People learning from a screen with various threat icons */}
      <g transform="translate(100 80)">
        {/* Central Screen */}
        <motion.rect
          x="0" y="0" width="300" height="200" rx="15" fill={color.slate900} stroke={color.slate700} strokeWidth="3"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
        />
        <text x="150" y="50" textAnchor="middle" fill={color.white} fontSize="20" fontWeight="bold">CYBER TIPS</text>
        <circle cx="100" cy="120" r="15" fill={color.rose400} /> {/* Warning icon */}
        <text x="96" y="127" fontSize="20" fill={color.white} fontWeight="bold">!</text>
        <path d="M 200 120 L 220 100 L 200 80 Z" fill={color.emerald400} /> {/* Phishing arrow */}

        {/* Learning figures */}
        <motion.g
          transform="translate(380 180)"
          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        >
          <circle cx="0" cy="0" r="25" fill={color.indigo300} />
          <rect x="-30" y="25" width="60" height="60" rx="15" fill={color.indigo300} />
        </motion.g>
        <motion.g
          transform="translate(500 180)"
          initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
        >
          <circle cx="0" cy="0" r="25" fill={color.emerald300} />
          <rect x="-30" y="25" width="60" height="60" rx="15" fill={color.emerald300} />
        </motion.g>
      </g>
    </svg>
  ),
  psychologicalSupport: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Psychological and Emotional Support" className="w-full h-full">
      <BG id="gPsychOS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychOS)" />
      {/* A calm setting with a person receiving support, indicated by a gentle wave and heart */}
      <g transform="translate(200 120)">
        {/* Person */}
        <motion.circle cx="0" cy="0" r="30" fill={color.indigo300}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        />
        <motion.rect x="-40" y="30" width="80" height="100" rx="40" fill={color.indigo300}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
        />
        {/* Waving hand of support */}
        <motion.path
          d="M 80 50 Q 120 30, 100 0 Q 80 -30, 60 0" fill={color.emerald300}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
        />
        {/* Heart icon */}
        <motion.path
          d="M 120 -50 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 q 0 -30 -30 -30 a 30 30 0 0 1 30 -30" fill={color.rose400}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150, delay: 0.7 }}
        />
      </g>
    </svg>
  ),
  evidencePreservation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Evidence Preservation and Case Assistance" className="w-full h-full">
      <BG id="gEvidenceOS" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.cyan200 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvidenceOS)" />
      {/* File folders, magnify glass, and digital display for evidence */}
      <g transform="translate(100 80)">
        {/* Folder 1 */}
        <motion.rect
          x="0" y="50" width="120" height="100" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
        />
        <motion.rect
          x="10" y="40" width="60" height="15" rx="5" fill={color.indigo300}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
        />
        {/* Folder 2 */}
        <motion.rect
          x="80" y="70" width="120" height="100" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.rect
          x="90" y="60" width="60" height="15" rx="5" fill={color.cyan300}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
        />
      </g>
      <g transform="translate(350 100)">
        {/* Digital screen with checkmark */}
        <motion.rect
          x="0" y="0" width="250" height="150" rx="15" fill={color.slate900}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.path
          d="M 70 70 L 100 100 L 180 40" stroke={color.emerald400} strokeWidth="10" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
        />
      </g>
    </svg>
  ),
  monitoringGuidance: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Monitoring and Guidance" className="w-full h-full">
      <BG id="gMonitoringOS" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gMonitoringOS)" />
      {/* Eye icon for monitoring, surrounded by communication bubbles */}
      <g transform="translate(400 190)">
        {/* Eye */}
        <motion.ellipse
          cx="0" cy="0" rx="80" ry="40" fill={color.white} stroke={color.indigo600} strokeWidth="5"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.circle cx="0" cy="0" r="25" fill={color.slate700}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.4 }}
        />
        <motion.circle cx="10" cy="-5" r="8" fill={color.white}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.3 }}
        />
      </g>
      {/* Communication Bubbles */}
      <motion.rect
        x="150" y="80" width="120" height="60" rx="15" fill={color.cyan100}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
      />
      <motion.rect
        x="530" y="250" width="120" height="60" rx="15" fill={color.emerald100}
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
      />
    </svg>
  ),
  orgRole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Online Safety and Help" className="w-full h-full">
      <BG id="gOrgRoleOS" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgRoleOS)" />
      {/* Hands holding up various service icons */}
      <g transform="translate(400 190)">
        {/* Main Hand */}
        <motion.path
          d="M 0 0 C 50 -80, 100 -50, 100 0 C 100 50, 50 80, 0 80 C -50 80, -100 50, -100 0 C -100 -50, -50 -80, 0 0 Z"
          fill={color.indigo400}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        {/* Service Icons */}
        <motion.circle cx="-60" cy="-30" r="20" fill={color.white}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        > <text x="-65" y="-23" fontSize="20" fill={color.slate700}>🛡️</text> </motion.circle>
        <motion.circle cx="60" cy="-30" r="20" fill={color.white}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        > <text x="50" y="-23" fontSize="20" fill={color.slate700}>📚</text> </motion.circle>
        <motion.circle cx="0" cy="50" r="20" fill={color.white}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        > <text x="-10" y="57" fontSize="20" fill={color.slate700}>❤️</text> </motion.circle>
      </g>
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Ensuring Safety and Support" className="w-full h-full">
      <BG id="gConcOS" stops={[{ offset: "0%", color: color.cyan200 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcOS)" />
      {/* Empowered person standing confidently in a safe digital bubble */}
      <g transform="translate(400 210)">
        {/* Digital Bubble / Sphere */}
        <motion.circle
          cx="0" cy="0" r="150" fill={color.white} opacity="0.8" stroke={color.emerald400} strokeWidth="4"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}
        />
        {/* Person */}
        <motion.circle cx="0" cy="0" r="40" fill={color.indigo300}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
        />
        <motion.rect x="-50" y="40" width="100" height="120" rx="50" fill={color.indigo300}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        />
        {/* Checkmark of safety */}
        <motion.path
          d="M -30 -30 L 0 0 L 50 -50" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
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
  title: "Online Safety & Victim Help – CRCCF",
  tagline: "Protecting, Guiding, and Empowering Victims in the Digital Space",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Promoting Online Safety for Victims",
      content: `In the modern digital landscape, cyber threats are becoming increasingly sophisticated, targeting individuals, organizations, and communities. The subcard “Online Safety & Victim Help” highlights the importance of empowering victims with tools, knowledge, and support to navigate online risks safely. Our organization ensures that victims can protect themselves while receiving guidance to recover from cyber incidents efficiently and securely.`,
      svg: svgMap.intro,
    },
    {
      id: "secureEnvironments",
      heading: "2. Right to Secure Digital Environments",
      content: `Victims have the right to safe and secure digital spaces where personal, financial, and sensitive information is protected.
Our organization provides education on secure digital practices, including strong password management, two-factor authentication, device security, and privacy settings. Implementing these measures helps victims minimize exposure to cyber threats, regain control over their digital activities, and strengthen confidence in online interactions.`,
      svg: svgMap.secureEnvironments,
    },
    {
      id: "legalGuidance",
      heading: "3. Legal Guidance and Support",
      content: `Victims of online offenses have the right to timely legal assistance to report incidents, seek redressal, and pursue justice.
CRCCF guides victims through filing complaints, preserving digital evidence, and understanding applicable cyber laws. Legal support ensures that victims’ rights are protected, perpetrators are held accountable, and the judicial process is navigated with clarity and confidence.`,
      svg: svgMap.legalGuidance,
    },
    {
      id: "cybersecurityAwareness",
      heading: "4. Cybersecurity Awareness and Education",
      content: `Knowledge and awareness are fundamental to online safety. Victims are entitled to training, resources, and guidance to identify phishing, malware, scams, and other cyber threats.
Our organization conducts educational workshops, distributes practical tips, and provides interactive sessions to enhance victims’ digital literacy. This proactive approach empowers victims to make informed decisions and adopt preventive measures that safeguard their online presence.`,
      svg: svgMap.cybersecurityAwareness,
    },
    {
      id: "psychologicalSupport",
      heading: "5. Psychological and Emotional Support",
      content: `Experiencing cyber incidents can lead to stress, anxiety, and digital apprehension. Victims have the right to professional counselling and emotional guidance.
CRCCF offers tailored therapy sessions, coping strategies, and continuous support, helping victims regain emotional stability, rebuild confidence, and safely resume online engagement while minimizing fear or vulnerability.`,
      svg: svgMap.psychologicalSupport,
    },
    {
      id: "evidencePreservation",
      heading: "6. Evidence Preservation and Case Assistance",
      content: `Proper documentation of digital incidents is critical for successful legal outcomes. Victims are entitled to expert guidance in preserving emails, social media interactions, transaction records, and other digital evidence.
Our organization ensures that evidence is collected meticulously, maintained securely, and presented accurately, strengthening legal cases and enhancing the likelihood of justice for victims.`,
      svg: svgMap.evidencePreservation,
    },
    {
      id: "monitoringGuidance",
      heading: "7. Continuous Monitoring and Guidance",
      content: `Victims have the right to ongoing support and updates regarding their safety, online presence, and legal matters.
CRCCF provides continuous monitoring, preventive advice, and guidance, ensuring victims remain informed, secure, and confident throughout the recovery and investigative process. Regular supervision and communication help maintain vigilance and reduce the risk of repeated cyber threats.`,
      svg: svgMap.monitoringGuidance,
    },
    {
      id: "orgRole",
      heading: "8. Organization’s Role in Online Safety and Help",
      content: `CRCCF is committed to delivering holistic support combining legal guidance, cybersecurity education, emotional counselling, and evidence preservation.
Each intervention is professional, confidential, and empathetic, ensuring victims feel protected, informed, and empowered to take control of their digital safety while pursuing justice and recovery.`,
      svg: svgMap.orgRole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Ensuring Safety and Support for Online Victims",
      content: `Online Safety & Victim Help equips victims with the knowledge, tools, and resources to navigate digital threats while recovering from cyber incidents. Upholding these rights ensures that victims can engage confidently with online platforms, safeguard their digital identity, and pursue justice effectively. CRCCF remains dedicated to providing professional, comprehensive, and compassionate support, empowering every victim to maintain safety, security, and peace of mind in the online world.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function OnlineSafetyVictimHelp() {
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
        <span className="text-gray-700" aria-current="page">Online Safety & Victim Help</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-emerald-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Security", "Guidance", "Empowerment"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroOnlineSafety />
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