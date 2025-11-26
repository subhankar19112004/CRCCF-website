// src/pages/support/VictimSupportAssistance.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { victimSupportAssistanceData } from "../../data/reportACyberCrime/victimSupportAssistanceData";

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
  cyan25: "#F5FEFF",
  cyan50: "#ECFEFF",
  cyan100: "#CFFAFE",
  cyan200: "#A5F3FC",
  cyan300: "#67E8F9",
  cyan500: "#06B6D4",
  cyan700: "#0E7490",
  indigo25: "#F7F8FF",
  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo300: "#A5B4FC",
  indigo400: "#818CF8",
  indigo600: "#4F46E5",
  indigo800: "#3730A3",
  emerald50: "#ECFDF5",
  emerald100: "#D1FAE5",
  emerald300: "#86EFAC",
  emerald400: "#34D399",
  emerald600: "#059669",
  amber50: "#FFFBEB",
  amber100: "#FEF3C7",
  amber500: "#F59E0B",
  rose50: "#FFF1F2",
  rose100: "#FFE4E6",
  rose400: "#FB7185",
  rose600: "#E11D48",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate700: "#334155",
  slate900: "#0F172A",
  white: "#FFFFFF",
  black: "#000000",
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title. Sections are imported.
const data = {
  title: "Victim Support & Assistance",
  // Tagline will be pulled from the first data section
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A compassionate professional calmly talking with a victim in a secure office. */

// Overlay SVG defined as a separate component
const VictimSupportOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Background office elements */}
      <motion.rect 
        x="0" y="0" width="300" height="380" 
        fill={color.white} opacity="0.1"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.line 
        x1="0" y1="300" x2="300" y2="300" 
        stroke={color.cyan100} strokeWidth="2"
        initial={{ width: 0 }}
        animate={{ width: 300 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Counselor Figure */}
      <g transform="translate(40, 140)">
        <motion.circle 
          cx="35" cy="35" r="30" 
          fill={color.indigo300} opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.rect 
          x="0" y="70" width="70" height="130" rx="10" 
          fill={color.indigo600} opacity="0.8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </g>
      
      {/* Victim Figure */}
      <g transform="translate(190, 160)">
        <motion.circle 
          cx="30" cy="30" r="25" 
          fill={color.cyan200} opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.rect 
          x="0" y="60" width="60" height="100" rx="10" 
          fill={color.cyan500} opacity="0.8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </g>
      
      {/* Supportive Hand / Document */}
      <motion.g 
        transform="translate(110, 200)"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <rect x="0" y="0" width="80" height="50" rx="5" fill={color.white} stroke={color.indigo300} strokeWidth="2" />
        <line x1="10" y1="15" x2="70" y2="15" stroke={color.indigo100} strokeWidth="2" />
        <line x1="10" y1="25" x2="60" y2="25" stroke={color.indigo100} strokeWidth="2" />
        <line x1="10" y1="35" x2="50" y2="35" stroke={color.indigo100} strokeWidth="2" />
      </motion.g>
      
      {/* Animated HUD/UI elements */}
      {!shouldReduce && (
        <motion.circle 
          cx="150" cy="80" r="40" 
          fill="none" stroke={color.cyan300} strokeWidth="1.5"
          strokeDasharray="4 8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      )}
      <motion.path 
        d="M20 40 L 40 40 L 40 60" 
        fill="none" stroke={color.cyan300} strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      <motion.path 
        d="M280 340 L 260 340 L 260 320" 
        fill="none" stroke={color.cyan300} strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </g>
  );
};


// Specific VideoHero component for this page
const VideoHeroVictimSupport = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Victim Support Hero";
  const desc =
    "A compassionate professional calmly talking with a victim in a secure office. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="vsTitle vsDesc" className="w-full h-auto">
        <title id="vsTitle">{title}</title>
        <desc id="vsDesc">{desc}</desc>
        <defs>
          <linearGradient id="vsGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.indigo50} />
          </linearGradient>
          <filter id="vsSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="vsStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#vsSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#vsGrad)" />
        </g>
        <g clipPath="url(#vsStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#vsGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        <VictimSupportOverlay />
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="vsBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="100%" stopColor={color.cyan100} />
        </linearGradient>
        <filter id="vsSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="vsStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#vsSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#vsBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#vsStage2)">
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

      <VictimSupportOverlay />
    </svg>
  );
};


/* ---------------------------- SVG helpers & utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs> <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"> {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)} </linearGradient> </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke = color.slate200, sw = 1, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs> <filter id={id} x="-30%" y="-30%" width="160%" height="160%"> <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" /> <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} /> </filter> </defs>
);

/* ------------------------ Complex section SVG illustrations (15 Unique) ------------------------ */

// 1. Understanding Our Role and Commitment
const Sec1_OurRoleSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A balanced scale representing justice, next to a shield representing CRCCF's supportive role." {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowSec1" std={12} alpha={0.3} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec1)" filter="url(#glowSec1)" />
    
    {/* Scales of Justice */}
    <g transform="translate(130, 80)">
      <motion.path 
        d="M0 0 H 200 M 100 0 V 30" 
        stroke={color.slate700} strokeWidth="6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.g 
        initial={{ y: -10 }}
        animate={{ y: [-10, -8, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M0 30 L -60 60 L 60 60 Z" fill={color.slate300} />
        <path d="M-60 60 L -60 70" stroke={color.slate500} strokeWidth="4" />
        <path d="M-90 90 A 30 30 0 0 1 -30 90" fill="none" stroke={color.slate700} strokeWidth="5" />
      </motion.g>
      <motion.g 
        initial={{ y: -10 }}
        animate={{ y: [-8, -10, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M200 30 L 140 60 L 260 60 Z" fill={color.slate300} />
        <path d="M140 60 L 140 70" stroke={color.slate500} strokeWidth="4" />
        <path d="M110 90 A 30 30 0 0 1 170 90" fill="none" stroke={color.slate700} strokeWidth="5" />
      </motion.g>
      <text x="100" y="150" fill={color.slate500} fontSize="14" textAnchor="middle">Honourable Courts of India</text>
    </g>
    
    {/* CRCCF Shield */}
    <motion.g 
      transform="translate(370, 100)"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <path d="M50 0 C 50 0, 100 10, 100 50 C 100 90, 50 110, 50 110 C 50 110, 0 90, 0 50 C 0 10, 50 0, 50 0 Z" fill={color.indigo600} />
      <text x="50" y="60" fill={color.white} fontSize="18" fontWeight="bold" textAnchor="middle">CRCCF</text>
      <text x="50" y="80" fill={color.indigo100} fontSize="12" textAnchor="middle">Support</text>
    </motion.g>
  </svg>
);

// 2. Legal Assistance and Evidence Management
const Sec2_LegalEvidenceSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A secure digital folder containing verified evidence, with a magnifying glass examining a document." {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec2)" />
    
    {/* Secure Folder */}
    <g transform="translate(80, 60)">
      <motion.path 
        d="M20 0 H 150 V 20 H 170 L 190 40 H 300 V 180 H 20 Z" 
        fill={color.indigo600} stroke={color.indigo800} strokeWidth="3"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.path 
        d="M0 40 H 280 V 200 H 0 Z" 
        fill={color.indigo400} stroke={color.indigo600} strokeWidth="3"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Document Icon */}
      <motion.g 
        transform="translate(40, 70)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Card x="0" y="0" w="80" h="100" r="5" fill={color.white} stroke={color.slate300} sw="2" />
        <rect x="10" y="10" width="60" height="5" rx="2" fill={color.emerald400} />
        <rect x="10" y="25" width="60" height="3" rx="1" fill={color.slate300} />
        <rect x="10" y="35" width="60" height="3" rx="1" fill={color.slate300} />
        <path d="M10 50 l 10 10 l 20 -20" stroke={color.emerald600} strokeWidth="4" fill="none" />
        <text x="40" y="80" fill={color.emerald600} fontSize="10" fontWeight="bold">Verified</text>
      </motion.g>

      {/* Lock Icon */}
      <motion.g 
        transform="translate(200, 120)"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <rect x="0" y="15" width="40" height="30" rx="5" fill={color.amber500} />
        <path d="M10 15 V 5 C 10 -5, 30 -5, 30 5 V 15" fill="none" stroke={color.amber500} strokeWidth="6" />
        <circle cx="20" cy="30" r="4" fill={color.slate700} />
      </motion.g>
    </g>
  </svg>
);

// 3. Emotional and Psychological Support
const Sec3_EmotionalSupportSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A brain icon with glowing, calming waves emanating from it, representing mental peace." {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec3)" />
    <SoftGlow id="glowSec3" std={20} alpha={0.6} />
    
    {/* Brain Icon */}
    <g transform="translate(250, 150)">
      <motion.path 
        d="M0 -60 C -40 -60, -50 -20, -30 0 C -50 20, -40 60, 0 60 C 40 60, 50 20, 30 0 C 50 -20, 40 -60, 0 -60 Z M -20 -40 C -10 -40, -10 -20, -20 0 C -10 20, -10 40, -20 40 M 20 -40 C 10 -40, 10 -20, 20 0 C 10 20, 10 40, 20 40 M 0 -40 V 40"
        fill="none" stroke={color.emerald600} strokeWidth="6"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
      
      {/* Calming Waves */}
      <motion.circle 
        cx="0" cy="0" r="80" 
        fill="none" stroke={color.emerald300} strokeWidth="4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: [0.7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
      />
      <motion.circle 
        cx="0" cy="0" r="80" 
        fill="none" stroke={color.cyan300} strokeWidth="4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: [0.7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
      />
      <circle cx="0" cy="0" r="60" fill={color.white} opacity="0.5" filter="url(#glowSec3)" />
    </g>
  </svg>
);

// 4. Awareness, Guidance, and Documentation Support
const Sec4_AwarenessDocsSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A person standing at a crossroads with glowing signs pointing to 'Awareness' and 'Legal Path'." {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec4)" />
    
    {/* Person Figure */}
    <g transform="translate(120, 160)">
      <motion.circle 
        cx="20" cy="20" r="15" 
        fill={color.indigo400}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      />
      <motion.rect 
        x="0" y="35" width="40" height="60" rx="8" 
        fill={color.indigo400}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      />
    </g>
    
    {/* Crossroads Path */}
    <path d="M140 280 V 220 C 140 180, 180 180, 200 180" fill="none" stroke={color.slate400} strokeWidth="10" strokeDasharray="15 10" />
    <motion.path 
      d="M200 180 H 300" 
      fill="none" stroke={color.slate400} strokeWidth="10" strokeDasharray="15 10"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path 
      d="M200 180 L 250 100" 
      fill="none" stroke={color.slate400} strokeWidth="10" strokeDasharray="15 10"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />

    {/* Sign 1: Documentation */}
    <motion.g 
      transform="translate(300, 160)"
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <rect x="0" y="0" width="150" height="40" rx="5" fill={color.emerald600} />
      <text x="75" y="27" fill={color.white} fontSize="14" fontWeight="bold" textAnchor="middle">Documentation</text>
    </motion.g>
    
    {/* Sign 2: Awareness */}
    <motion.g 
      transform="translate(250, 80)"
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.3 }}
    >
      <rect x="0" y="0" width="150" height="40" rx="5" fill={color.amber500} />
      <text x="75" y="27" fill={color.slate900} fontSize="14" fontWeight="bold" textAnchor="middle">Awareness</text>
    </motion.g>
  </svg>
);

// 5. Privacy and Reputation Protection
const Sec5_PrivacyReputationSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A user profile icon protected by a glowing digital shield, deflecting negative comments." {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.slate900 }, { offset: "100%", color: color.indigo800 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec5)" />
    <SoftGlow id="glowSec5" std={15} alpha={0.7} />
    
    {/* Profile Icon */}
    <g transform="translate(250, 150)">
      <circle cx="0" cy="-20" r="30" fill={color.indigo300} />
      <path d="M-40 30 H 40 C 40 60, -40 60, -40 30 Z" fill={color.indigo300} />
    </g>
    
    {/* Shield */}
    <motion.path 
      d="M250 50 C 150 70, 150 230, 250 250 C 350 230, 350 70, 250 50 Z" 
      fill="none" stroke={color.cyan300} strokeWidth="6"
      filter="url(#glowSec5)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
    
    {/* Attacking elements */}
    <motion.g 
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <path d="M50 80 L 130 110" stroke={color.rose400} strokeWidth="4" />
      <text x="40" y="80" fill={color.rose400} fontSize="14">!!!</text>
    </motion.g>
    <motion.g 
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <path d="M70 220 L 130 190" stroke={color.rose400} strokeWidth="4" />
      <text x="60" y="220" fill={color.rose400} fontSize="14">@#$</text>
    </motion.g>
  </svg>
);

// 6. Step-by-Step Legal Guidance
const Sec6_StepByStepSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A series of glowing steps ascending towards a legal (gavel) icon." {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec6)" />
    
    {/* Gavel Icon */}
    <motion.g 
      transform="translate(380, 80)"
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, type: "spring" }}
    >
      <rect x="0" y="0" width="80" height="20" rx="5" fill={color.indigo800} />
      <rect x="30" y="-30" width="20" height="50" rx="4" fill={color.indigo800} />
    </motion.g>
    
    {/* Steps */}
    <g transform="translate(50, 250)">
      <motion.rect 
        x="0" y="0" width="100" height="30" rx="5" 
        fill={color.cyan500}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      />
      <text x="50" y="20" fill={color.white} fontSize="12" textAnchor="middle">1. Complaint</text>
      
      <motion.rect 
        x="120" y="-30" width="100" height="30" rx="5" 
        fill={color.cyan500}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      />
      <text x="170" y="-10" fill={color.white} fontSize="12" textAnchor="middle">2. Evidence</text>

      <motion.rect 
        x="240" y="-60" width="100" height="30" rx="5" 
        fill={color.cyan500}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      />
      <text x="290" y="-40" fill={color.white} fontSize="12" textAnchor="middle">3. Filing</text>
      
      <motion.rect 
        x="360" y="-90" width="100" height="30" rx="5" 
        fill={color.cyan500}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      />
      <text x="410" y="-70" fill={color.white} fontSize="12" textAnchor="middle">4. Process</text>
    </g>
  </svg>
);

// 7. Evidence Verification and Secure Handling
const Sec7_EvidenceSecureSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A data file being scanned and then placed inside a secure vault." {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo100 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec7)" />
    
    {/* Data File */}
    <motion.g 
      transform="translate(100, 100)"
      animate={{ x: [0, 100, 100], opacity: [1, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Card x="0" y="0" w="80" h="100" r="5" fill={color.white} stroke={color.slate300} sw="2" />
      <rect x="10" y="10" width="60" height="5" rx="2" fill={color.slate400} />
      <rect x="10" y="25" width="60" height="3" rx="1" fill={color.slate300} />
      <rect x="10" y="35" width="40" height="3" rx="1" fill={color.slate300} />
    </motion.g>

    {/* Scanner */}
    <g transform="translate(200, 80)">
      <path d="M0 0 H 20 V 140 H 0 Z" fill={color.slate300} />
      <motion.rect 
        x="5" y="10" width="10" height="20" 
        fill={color.cyan300}
        animate={{ y: [10, 110, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </g>
    
    {/* Vault */}
    <g transform="translate(300, 80)">
      <rect x="0" y="0" width="120" height="140" rx="10" fill={color.slate700} stroke={color.slate900} strokeWidth="4" />
      <motion.circle 
        cx="60" cy="70" r="30" 
        fill={color.slate500}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="60" cy="70" r="10" fill={color.slate900} />
    </g>
  </svg>
);

// 8. Cyber and Legal Awareness Programs
const Sec8_AwarenessProgramsSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A presenter in front of a screen showing a security icon to an audience." {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.white }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec8)" />
    
    {/* Screen */}
    <g transform="translate(150, 40)">
      <Card x="0" y="0" w="280" h="180" r="10" fill={color.slate900} />
      <rect x="5" y="5" width="270" height="170" rx="5" fill={color.indigo800} />
      <motion.path 
        d="M140 40 C 140 40, 180 50, 180 90 C 180 130, 140 140, 140 140 C 140 140, 100 130, 100 90 C 100 50, 140 40, 140 40 Z" 
        fill="none" stroke={color.cyan300} strokeWidth="6"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path 
        d="M125 90 L 138 105 L 155 85" 
        fill="none" stroke={color.cyan300} strokeWidth="8"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      />
    </g>
    
    {/* Presenter */}
    <g transform="translate(80, 150)">
      <circle cx="20" cy="20" r="15" fill={color.emerald600} />
      <rect x="0" y="35" width="40" height="60" rx="8" fill={color.emerald600} />
    </g>
    
    {/* Audience */}
    <g transform="translate(180, 240)">
      <circle cx="0" cy="0" r="10" fill={color.slate400} />
      <circle cx="30" cy="0" r="10" fill={color.slate400} />
      <circle cx="60" cy="0" r="10" fill={color.slate400} />
      <circle cx="90" cy="0" r="10" fill={color.slate400} />
    </g>
  </svg>
);

// 9. Protecting Victims from Misguidance
const Sec9_MisguidanceSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A person being offered two paths: one safe and verified by CRCCF, one a dangerous trap." {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec9)" />
    <SoftGlow id="glowSec9" std={15} alpha={0.7} />

    {/* Person */}
    <g transform="translate(240, 180)">
      <circle cx="20" cy="20" r="15" fill={color.slate700} />
      <rect x="0" y="35" width="40" height="60" rx="8" fill={color.slate700} />
    </g>
    
    {/* Bad Path */}
    <g transform="translate(320, 80)">
      <motion.path 
        d="M0 120 L 50 80 L 100 120 L 150 80" 
        fill="none" stroke={color.rose600} strokeWidth="6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      />
      <text x="75" y="70" fill={color.rose600} fontSize="14" fontWeight="bold" textAnchor="middle">MISINFORMATION</text>
      <motion.g 
        fill={color.rose600}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path d="M140 80 L 160 80 L 150 70 Z" />
      </motion.g>
    </g>

    {/* Good Path */}
    <g transform="translate(50, 80)">
      <motion.path 
        d="M0 120 L 150 120" 
        fill="none" stroke={color.emerald600} strokeWidth="6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      />
      <text x="75" y="110" fill={color.emerald600} fontSize="14" fontWeight="bold" textAnchor="middle">VERIFIED PATH</text>
      <motion.g 
        fill={color.emerald600}
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path d="M150 110 L 150 130 L 160 120 Z" />
      </motion.g>
    </g>
  </svg>
);

// 10. Continuous Support and Ethical Commitment
const Sec10_ContinuousSupportSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A person being encircled by a glowing, continuous ring of support." {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.white }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec10)" />
    
    {/* Person */}
    <g transform="translate(230, 110)">
      <circle cx="20" cy="20" r="15" fill={color.indigo600} />
      <rect x="0" y="35" width="40" height="60" rx="8" fill={color.indigo600} />
    </g>
    
    {/* Glowing Ring */}
    <motion.g 
      transform="translate(250, 150)"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
      <path 
        d="M0 -100 A 100 100 0 0 1 0 100 A 100 100 0 0 1 0 -100 Z"
        fill="none" stroke={color.cyan500} strokeWidth="8"
        strokeDasharray="30 15"
      />
    </motion.g>
    <motion.g 
      transform="translate(250, 150)"
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
    >
      <path 
        d="M0 -80 A 80 80 0 0 1 0 80 A 80 80 0 0 1 0 -80 Z"
        fill="none" stroke={color.emerald400} strokeWidth="6"
        strokeDasharray="5 10"
      />
    </motion.g>
  </svg>
);

// 11. Digital Forensics Collaboration
const Sec11_ForensicsSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A futuristic magnifying glass scanning a digital data stream." {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.slate900 }, { offset: "100%", color: color.indigo800 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec11)" />
    <SoftGlow id="glowSec11" std={15} alpha={0.7} />
    
    {/* Data stream */}
    <g>
      <motion.path 
        d="M50 100 C 150 50, 250 150, 350 100, 450 50" 
        fill="none" stroke={color.cyan300} strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.path 
        d="M50 150 C 150 200, 250 100, 350 150, 450 200" 
        fill="none" stroke={color.emerald300} strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.circle 
        cx="0" cy="0" r="5" 
        fill={color.white}
        filter="url(#glowSec11)"
      >
        <motion.path 
          d="M50 100 C 150 50, 250 150, 350 100, 450 50" 
          fill="none"
          animate={{ motionOffset: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.circle>
    </g>
    
    {/* Magnifying Glass */}
    <g transform="translate(180, 120)">
      <motion.circle 
        cx="0" cy="0" r="50" 
        fill={color.cyan100} opacity="0.1" 
        stroke={color.cyan100} strokeWidth="4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      />
      <path d="M40 40 L 80 80" stroke={color.cyan100} strokeWidth="6" />
    </g>
  </svg>
);

// 12. Collaboration with Law Enforcement
const Sec12_LEAcqllabSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A CRCCF hand and a Law Enforcement hand shaking in front of a legal document." {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.white }, { offset: "100%", color: color.slate200 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec12)" />

    {/* Document */}
    <g transform="translate(100, 50)">
      <Card x="0" y="0" w="300" h="200" r="10" fill={color.indigo50} stroke={color.indigo100} sw="2" />
      <rect x="20" y="20" width="260" height="8" rx="3" fill={color.slate300} />
      <rect x="20" y="40" width="260" height="5" rx="2" fill={color.slate200} />
      <rect x="20" y="55" width="200" height="5" rx="2" fill={color.slate200} />
    </g>

    {/* CRCCF Hand */}
    <motion.path 
      d="M100 150 Q 130 140, 150 150 L 160 200 L 120 190 L 110 240 L 80 230 L 90 180 Z" 
      fill={color.indigo600}
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    />
    
    {/* LEA Hand (Police) */}
    <motion.path 
      d="M400 150 Q 370 140, 350 150 L 340 200 L 380 190 L 390 240 L 420 230 L 410 180 Z" 
      fill={color.slate700}
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    />
    
    {/* Handshake */}
    <motion.g 
      transform="translate(250, 150)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, type: "spring" }}
    >
      <path d="M-50 0 L 50 0" stroke={color.amber500} strokeWidth="10" strokeLinecap="round" />
    </motion.g>
  </svg>
);

// 13. Preventive Cybersecurity Education
const Sec13_PreventiveEduSVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A user icon, a laptop, and a phone, all with glowing green checkmarks, indicating security." {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.emerald50 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec13)" />

    {/* Laptop */}
    <g transform="translate(180, 100)">
      <rect x="0" y="0" width="160" height="100" rx="8" fill={color.slate700} />
      <rect x="5" y="5" width="150" height="90" rx="3" fill={color.black} />
      <rect x="-20" y="100" width="200" height="10" rx="3" fill={color.slate700} />
      <motion.path 
        d="M50 30 L 70 50 L 110 30" 
        fill="none" stroke={color.emerald400} strokeWidth="10"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      />
    </g>

    {/* Phone */}
    <motion.g 
      transform="translate(380, 80)"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <rect x="0" y="0" width="70" height="120" rx="10" fill={color.slate700} />
      <rect x="5" y="5" width="60" height="110" rx="5" fill={color.black} />
      <path d="M25 50 L 35 60 L 45 50" fill="none" stroke={color.emerald400} strokeWidth="6" />
    </motion.g>
    
    {/* User */}
    <motion.g 
      transform="translate(80, 120)"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <circle cx="25" cy="25" r="20" fill={color.slate700} />
      <path d="M5 50 H 45 C 45 70, 5 70, 5 50 Z" fill={color.slate700} />
      <path d="M15 20 L 25 30 L 35 20" fill="none" stroke={color.emerald400} strokeWidth="4" />
    </motion.g>
  </svg>
);

// 14. Community Engagement and Social Responsibility
const Sec14_CommunitySVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="A network of interconnected people icons, representing a community." {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.indigo100 }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec14)" />
    
    {/* People Icons */}
    <g transform="translate(250, 150)">
      <motion.circle cx="0" cy="0" r="25" fill={color.indigo600} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
      <motion.circle cx="-100" cy="0" r="20" fill={color.cyan500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
      <motion.circle cx="100" cy="0" r="20" fill={color.cyan500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
      <motion.circle cx="0" cy="-80" r="20" fill={color.cyan500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      <motion.circle cx="0" cy="80" r="20" fill={color.cyan500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
    </g>
    
    {/* Connections */}
    <g transform="translate(250, 150)" stroke={color.slate400} strokeWidth="3" strokeDasharray="5 5">
      <motion.line x1="0" y1="0" x2="-100" y2="0" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
      <motion.line x1="0" y1="0" x2="100" y2="0" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} />
      <motion.line x1="0" y1="0" x2="0" y2="-80" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />
      <motion.line x1="0" y1="0" x2="0" y2="80" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} />
    </g>
  </svg>
);

// 15. Transparency, Accountability, and Grievance Redressal
const Sec15_TransparencySVG = (props) => (
  <svg viewBox="0 0 500 300" role="img" aria-label="An open book with a checkmark, symbolizing transparency, and a mail icon for grievances." {...props}>
    <BG id="gSec15" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.white }]} />
    <rect x="0" y="0" width="500" height="300" rx="20" fill="url(#gSec15)" />
    
    {/* Open Book */}
    <g transform="translate(150, 80)">
      <motion.path 
        d="M50 0 C 20 10, 20 190, 50 200 H 150 V 0 Z" 
        fill={color.white} stroke={color.slate400} strokeWidth="3"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      />
      <motion.path 
        d="M150 0 C 180 10, 180 190, 150 200 H 50 V 0 Z" 
        fill={color.white} stroke={color.slate400} strokeWidth="3"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      />
      <rect x="60" y="30" width="80" height="4" rx="2" fill={color.slate300} />
      <rect x="60" y="50" width="80" height="4" rx="2" fill={color.slate300} />
      <rect x="60" y="70" width="80" height="4" rx="2" fill={color.slate300} />
    </g>
    
    {/* Mail/Grievance Icon */}
    <motion.g 
      transform="translate(320, 120)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <rect x="0" y="0" width="100" height="60" rx="8" fill={color.indigo400} />
      <path d="M5 5 L 50 35 L 95 5" fill="none" stroke={color.white} strokeWidth="4" />
      <text x="50" y="80" fill={color.indigo800} fontSize="12" fontWeight="bold" textAnchor="middle">Grievance</text>
    </motion.g>
  </svg>
);


/* ------------------------------ Section block (Height Fixed) ------------------------------ */
const SectionBlock = ({ id, title, content, tagline, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const shouldReduce = useReducedMotion();
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [18, -18]),
    { stiffness: 120, damping: 20 }
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const paragraphs = content
    .split("\n")
    .map((p, i) => (
      <p
        key={i}
        className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap"
      >
        {p}
      </p>
    ));

  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      {/* Grid now uses md:items-stretch */}
      <motion.div
        style={{ opacity: shouldReduce ? 1 : opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: shouldReduce ? 0 : 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 md:items-stretch" // Changed items-start to items-stretch
      >
        {/* SVG Column: Added flex flex-col */}
        <motion.div
          style={{ y }}
          className={`relative min-w-0 flex flex-col ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          {/* Background Blur */}
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          {/* Inner Container: Added flex-grow and flex for centering */}
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex-grow flex items-center justify-center overflow-hidden">
            {/* SVG Container: Added h-full */}
            <div className="w-full h-full max-h-[400px] md:max-h-full">
              {/* SVG: Added h-full and object-contain */}
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div
          className={`${
            reverse ? "md:order-1" : "md:order-2"
          } min-w-0 py-2`}
        >
          {" "}
          {/* Added slight py for alignment */}
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
          {/* Render tagline if it exists */}
          {tagline && (
            <p className="mt-3 text-sm font-medium text-cyan-700 italic">
              {tagline}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function VictimSupportAssistance() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (15 defined)
  const svgMap = {
    'sec1-understanding-our-role-and-commitment': Sec1_OurRoleSVG,
    'sec2-legal-assistance-and-evidence-management': Sec2_LegalEvidenceSVG,
    'sec3-emotional-and-psychological-support': Sec3_EmotionalSupportSVG,
    'sec4-awareness-guidance-and-documentation-support': Sec4_AwarenessDocsSVG,
    'sec5-privacy-and-reputation-protection': Sec5_PrivacyReputationSVG,
    'sec6-step-by-step-legal-guidance': Sec6_StepByStepSVG,
    'sec7-evidence-verification-and-secure-handling': Sec7_EvidenceSecureSVG,
    'sec8-cyber-and-legal-awareness-programs': Sec8_AwarenessProgramsSVG,
    'sec9-protecting-victims-from-misguidance': Sec9_MisguidanceSVG,
    'sec10-continuous-support-and-ethical-commitment': Sec10_ContinuousSupportSVG,
    'sec11-digital-forensics-collaboration': Sec11_ForensicsSVG,
    'sec12-collaboration-with-law-enforcement-and-legal-professionals': Sec12_LEAcqllabSVG,
    'sec13-preventive-cybersecurity-education': Sec13_PreventiveEduSVG,
    'sec14-community-engagement-and-social-responsibility': Sec14_CommunitySVG,
    'sec1foo-transparency-accountability-and-grievance-redressal': Sec15_TransparencySVG,
  };

  // Extract hero content from the first section
  const firstSection = victimSupportAssistanceData[0];
  const heroTagline = firstSection.content.split("\n")[0].replace(/"/g, "");
  const heroPills = [
    "Ethical Support",
    "Legal Guidance",
    "Victim Assistance",
  ];

  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
    >
      {/* Breadcrumb */}
      <motion.nav
        variants={itemUp}
        className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4"
        aria-label="Breadcrumb"
      >
        <Link to="/" className="hover:underline text-indigo-600">
          Home
        </Link>
        <span aria-hidden="true"> › </span>
        <Link to="/support" className="hover:underline text-indigo-600">
          support
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          Victim Support
        </span>
      </motion.nav>

      {/* Hero with Video-SVG (support scene) */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          {/* Tagline extracted from data */}
          <p className="mt-2 text-base md:text-lg text-cyan-700 max-w-2xl">
            {heroTagline}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {heroPills.map((pill) => (
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
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroVictimSupport
                src="https://cdn.coverr.co/videos/coverr-a-woman-in-a-business-meeting-with-colleagues-5326/1080p.mp4" // Placeholder video
                // poster="/assets/video/support-hero.jpg" // Placeholder poster
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {victimSupportAssistanceData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_OurRoleSVG;
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              content={sec.content}
              tagline={sec.tagline} // Pass tagline to SectionBlock
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>
    </motion.section>
  );
}