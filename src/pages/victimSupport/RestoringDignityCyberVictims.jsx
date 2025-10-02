// src/pages/victimSupport/RestoringDignityCyberVictims.jsx
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

/* ---------------------------- Hero SVG (Restoring Dignity) ---------------------------- */
const VideoHeroDignity = () => {
  const shouldReduce = useReducedMotion();
  // Video: An animated scene of a person (representing a helper) gently offering a glowing,
  // fragmented sphere (representing shattered dignity) to another person (the victim),
  // who then holds it and it becomes whole and radiant, symbolizing restored dignity and self-respect.
  // The background is soft and empathetic.
  const videoURL = "https://cdn.pixabay.com/video/2023/11/08/187902-885741369_large.mp4"; // Using a general empathetic video

  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Restoring Dignity to Cyber Victims">
      <defs>
        <linearGradient id="heroBG_Dignity" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.rose100} />
          <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <mask id="videoMask_Dignity">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="white" />
        </mask>
        <clipPath id="heroClip_Dignity">
           <rect x="0" y="0" width="1000" height="460" rx="28" />
        </clipPath>
      </defs>

      {/* Fallback for reduced motion */}
      {shouldReduce ? (
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#heroBG_Dignity)" />
      ) : (
        <g clipPath="url(#heroClip_Dignity)">
            <rect x="0" y="0" width="1000" height="460" fill="url(#heroBG_Dignity)" />
            <foreignObject x="0" y="0" width="1000" height="460">
            <video
                src={videoURL}
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </foreignObject>
        </g>
      )}

      {/* Overlaid elements for dignity restoration */}
      <g>
        {/* Helper Figure */}
        <motion.g
            transform="translate(250, 300)"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <circle cx="0" cy="-70" r="30" fill={color.emerald300} /> {/* Head */}
            <rect x="-40" y="-40" width="80" height="100" rx="40" fill={color.emerald300} /> {/* Body */}
            <rect x="40" y="-20" width="20" height="50" rx="10" fill={color.emerald600} /> {/* Arm offering */}
        </motion.g>

        {/* Victim Figure */}
        <motion.g
            transform="translate(700, 300)"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <circle cx="0" cy="-70" r="30" fill={color.indigo300} /> {/* Head */}
            <rect x="-40" y="-40" width="80" height="100" rx="40" fill={color.indigo300} /> {/* Body */}
            <rect x="-60" y="-20" width="20" height="50" rx="10" fill={color.indigo600} /> {/* Arm receiving */}
        </motion.g>

        {/* Fragmented Dignity Sphere transforming to Whole */}
        <motion.g
            transform="translate(475, 200)"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
        >
            {/* Fragments */}
            <motion.circle cx="-20" cy="-20" r="15" fill={color.white} opacity="0.6"
                initial={{ x: 0, y: 0 }} animate={{ x: -30, y: -30 }} transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.circle cx="20" cy="-10" r="12" fill={color.white} opacity="0.6"
                initial={{ x: 0, y: 0 }} animate={{ x: 25, y: -20 }} transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.circle cx="0" cy="20" r="18" fill={color.white} opacity="0.6"
                initial={{ x: 0, y: 0 }} animate={{ x: 0, y: 30 }} transition={{ duration: 1, delay: 1 }}
            />

            {/* Reforming Sphere */}
            <motion.circle
                cx="0" cy="0" r="40"
                fill={color.amber100} stroke={color.amber500} strokeWidth="3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
            />
            <motion.circle
                cx="0" cy="0" r="20" fill={color.white} opacity="0.3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, duration: 0.6, ease: "backOut" }}
            />
        </motion.g>
      </g>
    </svg>
  );
};


/* ---------------------------- Section SVGs ---------------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Importance of Dignity for Victims" className="w-full h-full">
      <BG id="gIntroDignity" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
      <SoftGlow id="glowIntroDignity" std={8} alpha={0.4} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroDignity)" />
      {/* Abstract representation of a person rebuilding self-esteem and social reputation */}
      <g transform="translate(200 100)">
        {/* Outline of a person */}
        <motion.circle cx="0" cy="0" r="30" fill={color.slate700} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
        <motion.rect x="-40" y="30" width="80" height="100" rx="40" fill={color.slate700} initial={{ scaleY: 0.8 }} animate={{ scaleY: 1 }} transition={{ delay: 0.1, duration: 0.5 }} />
        {/* Glowing aura / shield for renewed confidence */}
        <motion.circle cx="0" cy="0" r="80" fill={color.amber100} opacity="0.5"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        />
        {/* Rebuilding blocks (representing self-esteem/reputation) */}
        <motion.rect x="-100" y="100" width="40" height="40" rx="8" fill={color.indigo300}
          initial={{ y: 150, opacity: 0 }} animate={{ y: 100, opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }}
        />
        <motion.rect x="60" y="100" width="40" height="40" rx="8" fill={color.emerald300}
          initial={{ y: 150, opacity: 0 }} animate={{ y: 100, opacity: 1 }} transition={{ delay: 0.7, duration: 0.4 }}
        />
      </g>
    </svg>
  ),
  respectPrivacy: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Respect and Privacy" className="w-full h-full">
      <BG id="gPrivacyDignity" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPrivacyDignity)" />
      {/* Locked document and private communication icon */}
      <g transform="translate(150 100)">
        {/* Locked Document */}
        <motion.rect
          x="0" y="0" width="200" height="150" rx="15" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ rotate: -5, originX: "0%", originY: "100%" }} animate={{ rotate: 0 }} transition={{ duration: 0.6 }}
        />
        <motion.path
          d="M 60 0 V -30 A 30 30 0 0 1 140 -30 V 0" fill="none" stroke={color.indigo600} strokeWidth="6"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        />
        <rect x="20" y="20" width="160" height="15" rx="5" fill={color.cyan200} />
        <rect x="20" y="50" width="120" height="10" rx="4" fill={color.indigo200} />
      </g>
      <g transform="translate(450 120)">
        {/* Private Chat Bubble */}
        <motion.path
          d="M 0 0 Q 50 -50, 100 0 Q 150 50, 100 100 L 50 100 L 0 150 L 0 100 Q -50 50, 0 0 Z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="3"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
        />
        <motion.path d="M 30 40 h 40 M 30 60 h 20" stroke={color.emerald600} strokeWidth="4" fill="none" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
        />
      </g>
    </svg>
  ),
  psychologicalSupport: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Psychological and Emotional Support" className="w-full h-full">
      <BG id="gPsychDignity" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.rose50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychDignity)" />
      {/* Two figures in supportive conversation, with healing heart */}
      <g transform="translate(200 100)">
        {/* Helper */}
        <motion.circle cx="80" cy="80" r="30" fill={color.emerald300} />
        <motion.rect x="50" y="110" width="60" height="80" rx="30" fill={color.emerald300} />
        {/* Victim */}
        <motion.circle cx="280" cy="80" r="30" fill={color.indigo300} />
        <motion.rect x="250" y="110" width="60" height="80" rx="30" fill={color.indigo300} />
        {/* Connecting hands/empathy */}
        <motion.path
          d="M 110 140 C 150 100, 210 100, 250 140" stroke={color.indigo600} strokeWidth="5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
        />
        {/* Healing heart */}
        <motion.path
          d="M 180 50 a 40 40 0 0 1 40 40 a 40 40 0 0 1 -40 40 q 0 -40 -40 -40 a 40 40 0 0 1 40 -40"
          fill={color.rose400} opacity="0.8"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150, delay: 1 }}
        />
      </g>
    </svg>
  ),
  legalAssistance: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Legal Assistance to Uphold Rights" className="w-full h-full">
      <BG id="gLegalAssistDignity" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalAssistDignity)" />
      {/* Scales of justice with legal documents */}
      <g transform="translate(280 80)">
        <motion.path
          d="M0 130 Q 120 180, 240 130" stroke={color.slate400} strokeWidth="8" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.line x1="120" y1="0" x2="120" y2="130" stroke={color.slate400} strokeWidth="8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.rect
          x="80" y="-10" width="80" height="20" rx="10" fill={color.slate400}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.4 }}
        />
        {/* Left Pan: Legal Document */}
        <g transform="translate(0, 130)">
          <motion.rect
            x="-50" y="-10" width="100" height="70" rx="8" fill={color.white} stroke={color.indigo300} strokeWidth="2"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}
          />
          <rect x="-30" y="0" width="60" height="8" rx="3" fill={color.indigo200} />
          <rect x="-30" y="15" width="40" height="8" rx="3" fill={color.cyan200} />
        </g>
        {/* Right Pan: User Icon */}
        <g transform="translate(240, 130)">
          <motion.rect
            x="-50" y="-10" width="100" height="70" rx="8" fill={color.white} stroke={color.emerald300} strokeWidth="2"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}
          />
          <circle cx="0" cy="15" r="15" fill={color.slate700} />
          <rect x="-20" y="30" width="40" height="20" rx="10" fill={color.slate700} />
        </g>
      </g>
    </svg>
  ),
  socialReintegration: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Social Reintegration and Awareness" className="w-full h-full">
      <BG id="gSocialDignity" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.cyan100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSocialDignity)" />
      {/* Community figures, connected by positive interactions */}
      <g transform="translate(100 100)">
        {/* Central Figure */}
        <motion.circle cx="200" cy="70" r="30" fill={color.indigo300} />
        <motion.rect x="170" y="100" width="60" height="80" rx="30" fill={color.indigo300} />
        {/* Surrounding figures */}
        <motion.circle cx="100" cy="150" r="25" fill={color.emerald300} />
        <motion.circle cx="300" cy="150" r="25" fill={color.amber100} />
        <motion.circle cx="200" cy="20" r="25" fill={color.rose100} />
        {/* Connecting lines for positive interaction */}
        <motion.line x1="200" y1="70" x2="100" y2="150" stroke={color.emerald600} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
        <motion.line x1="200" y1="70" x2="300" y2="150" stroke={color.amber500} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
        <motion.line x1="200" y1="70" x2="200" y2="20" stroke={color.rose500} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9 }} />
      </g>
      {/* Speech bubble for positive communication */}
      <motion.path
        d="M 500 50 Q 550 20, 600 50 Q 650 80, 600 100 L 580 100 L 550 120 L 550 100 Q 500 80, 500 50 Z"
        fill={color.white} stroke={color.cyan500} strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
      />
    </svg>
  ),
  evidencePreservation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Evidence Preservation and Advocacy" className="w-full h-full">
      <BG id="gEvidenceDignity" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.cyan200 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvidenceDignity)" />
      {/* Magnifying glass over digital data, with a certificate of authenticity */}
      <g transform="translate(100 80)">
        {/* Digital Screen with data */}
        <motion.rect
          x="0" y="0" width="300" height="200" rx="15" fill={color.slate900}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
        />
        <text x="30" y="50" fill={color.emerald400} fontSize="18" fontFamily="monospace">DATA LOG:</text>
        <text x="30" y="80" fill={color.cyan300} fontSize="14" fontFamily="monospace">01/01/2023 10:30:00</text>
        <text x="30" y="100" fill={color.cyan300} fontSize="14" fontFamily="monospace">ACTION: LOGIN ATTEMPT</text>
        <text x="30" y="120" fill={color.cyan300} fontSize="14" fontFamily="monospace">STATUS: FAILED</text>
        {/* Magnifying glass */}
        <g transform="translate(200 100)">
          <motion.circle cx="0" cy="0" r="50" fill="none" stroke={color.cyan200} strokeWidth="8"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.line x1="35" y1="35" x2="80" y2="80" stroke={color.cyan200} strokeWidth="12" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          />
        </g>
      </g>
      {/* Certificate / Seal of authenticity */}
      <g transform="translate(450 100)">
        <motion.rect
          x="0" y="0" width="200" height="150" rx="15" fill={color.white} stroke={color.indigo300} strokeWidth="3"
          initial={{ rotate: 5, originX: "50%", originY: "50%" }} animate={{ rotate: -5 }} transition={{ delay: 0.8, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="100" cy="75" r="40" fill={color.amber100} stroke={color.amber500} strokeWidth="3" />
        <path d="M 80 70 L 100 90 L 130 50" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        <text x="100" y="120" textAnchor="middle" fill={color.indigo600} fontSize="14" fontWeight="bold">VALIDATED</text>
      </g>
    </svg>
  ),
  crccfRole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="CRCCF’s Role in Restoring Dignity" className="w-full h-full">
      <BG id="gCRCCFDignity" stops={[{ offset: "0%", color: color.rose100 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCRCCFDignity)" />
      {/* CRCCF logo/emblem as a central hub for support */}
      <g transform="translate(400 190)">
        <motion.circle cx="0" cy="0" r="60" fill={color.indigo600}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        <text x="0" y="10" textAnchor="middle" fill={color.white} fontSize="30" fontWeight="bold">CRCCF</text>
        {/* Radiating support lines */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.line key={i}
            x1="0" y1="0"
            x2={Math.cos((angle - 90) * Math.PI / 180) * 150}
            y2={Math.sin((angle - 90) * Math.PI / 180) * 150}
            stroke={color.indigo400} strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.2 + 0.5 }}
          />
        ))}
        {/* Icons representing services */}
        <motion.circle cx="150" cy="0" r="20" fill={color.emerald300} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} />
        <motion.circle cx="-150" cy="0" r="20" fill={color.amber100} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }} />
        <motion.circle cx="0" cy="150" r="20" fill={color.rose400} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, type: "spring" }} />
        <motion.circle cx="0" cy="-150" r="20" fill={color.cyan300} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, type: "spring" }} />
      </g>
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Empowering Victims to Reclaim Their Dignity" className="w-full h-full">
      <BG id="gConcDignity" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcDignity)" />
      {/* Silhouette of an empowered person standing tall, with a glowing heart */}
      <g transform="translate(400 210)">
        {/* Person */}
        <motion.circle cx="0" cy="0" r="40" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.rect x="-50" y="40" width="100" height="120" rx="50" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        />
        {/* Glowing Heart of Dignity/Self-respect */}
        <motion.path
          d="M 0 -80 a 40 40 0 0 1 40 40 a 40 40 0 0 1 -40 40 q 0 -40 -40 -40 a 40 40 0 0 1 40 -40"
          fill={color.rose400} filter="url(#glowIntroDignity)" opacity="0.9"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
        />
        {/* Rays of confidence */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.line key={i}
            x1="0" y1="0"
            x2={Math.cos((angle - 90) * Math.PI / 180) * 100}
            y2={Math.sin((angle - 90) * Math.PI / 180) * 100}
            stroke={color.amber100} strokeWidth="3" opacity="0.7"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
          />
        ))}
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
  title: "Restoring Dignity to Cyber Victims – CRCCF",
  tagline: "Protecting, Guiding, and Empowering Victims to Reclaim Their Self-Respect",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: The Importance of Dignity for Victims",
      content: `Cybercrime can severely affect a person’s dignity, self-esteem, and social reputation. The subcard “Restoring Dignity to Cyber Victims” emphasizes the importance of helping victims rebuild confidence, respect, and personal integrity. Our organization ensures that victims receive guidance and support to navigate emotional, social, and legal challenges effectively.
CRCCF provides a holistic approach, addressing the emotional, social, and legal consequences of cyber incidents. By empowering victims to reclaim their dignity, our organization ensures they feel heard, respected, and supported throughout their recovery journey.`,
      svg: svgMap.intro,
    },
    {
      id: "respectPrivacy",
      heading: "2. Right to Respect and Privacy",
      content: `Victims have the fundamental right to be treated with respect and have their privacy protected. Cyber incidents often expose sensitive information, making victims vulnerable to public scrutiny or social stigma.
CRCCF ensures that all communications, case details, and personal information are handled confidentially. By maintaining privacy and preventing further harm, we uphold the dignity of victims throughout the recovery process.`,
      svg: svgMap.respectPrivacy,
    },
    {
      id: "psychologicalSupport",
      heading: "3. Psychological and Emotional Support",
      content: `Emotional well-being is essential for restoring dignity. Victims may experience trauma, shame, anxiety, and a loss of self-confidence following cyber incidents.
Our organization provides professional counselling, therapy, and cyber-psychology support to help victims process these experiences. Continuous emotional guidance helps victims regain resilience, self-worth, and confidence while navigating legal and social challenges.`,
      svg: svgMap.psychologicalSupport,
    },
    {
      id: "legalAssistance",
      heading: "4. Legal Assistance to Uphold Rights",
      content: `Victims have the right to seek justice and protect their personal and digital interests. Ensuring accountability for perpetrators reinforces victims’ dignity and validates their experiences.
CRCCF guides victims in filing complaints, preserving evidence, and navigating court proceedings. Legal support empowers victims to assert their rights and participate confidently in the judicial process, strengthening both protection and self-respect.`,
      svg: svgMap.legalAssistance,
    },
    {
      id: "socialReintegration",
      heading: "5. Social Reintegration and Awareness",
      content: `Restoring dignity extends beyond legal and emotional support, encompassing social reintegration. Victims have the right to rebuild their reputation and re-engage confidently in social and professional environments.
Our organization offers guidance on handling public perception, reporting cyber harassment, and accessing resources that promote social awareness. This support helps victims regain trust, respect, and a sense of belonging within their communities.`,
      svg: svgMap.socialReintegration,
    },
    {
      id: "evidencePreservation",
      heading: "6. Evidence Preservation and Advocacy",
      content: `Proper evidence collection is vital not only for justice but also for protecting a victim’s credibility and dignity. Victims have the right to expert assistance in documenting emails, social media activity, transactions, and other digital proof.
CRCCF ensures that evidence is collected, preserved, and presented professionally. Our advocacy strengthens legal cases while safeguarding victims’ integrity, ensuring that their experiences are validated and respected.`,
      svg: svgMap.evidencePreservation,
    },
    {
      id: "crccfRole",
      heading: "7. CRCCF’s Role in Restoring Dignity",
      content: `CRCCF is dedicated to a comprehensive approach combining emotional support, legal guidance, digital security, and social advocacy. By addressing all facets of a victim’s experience, we help restore confidence, security, and dignity.
Every intervention is conducted professionally, confidentially, and empathetically. Our organization ensures that victims feel valued, protected, and empowered throughout their recovery, enabling them to reclaim control over their lives.`,
      svg: svgMap.crccfRole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims to Reclaim Their Dignity",
      content: `Restoring dignity to cyber victims involves safeguarding privacy, supporting emotional recovery, providing legal remedies, and fostering social reintegration. Upholding these rights allows victims to regain self-respect, confidence, and control over their lives.
CRCCF remains committed to delivering professional, compassionate, and comprehensive support. By empowering every cybercrime victim, we help them reclaim dignity, rebuild their lives, and thrive safely and confidently in the aftermath of their experiences.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function RestoringDignityCyberVictims() {
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
        <span className="text-gray-700" aria-current="page">Restoring Dignity to Cyber Victims</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-rose-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Respect", "Recovery", "Self-worth"].map((pill) => (
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
              <VideoHeroDignity />
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