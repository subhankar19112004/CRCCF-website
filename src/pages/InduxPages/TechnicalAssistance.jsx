// src/pages/support/TechnicalAssistance.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// !!======================================================================!!
// !!  YOU MUST FIX THIS IMPORT PATH TO MATCH YOUR PROJECT'S FOLDER STRUCTURE  !!
// !!======================================================================!!
import { technicalAssistanceData } from "../../data/induxData/technicalAssistanceData.js";

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
const data = {
  title: "Technical Assistance",
  tagline: "Expert diagnosis, repair, and support for all your digital devices and software challenges.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A high-tech diagnostic lab with screens showing device schematics and code. */

const TechAssistOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Central Device Schematic */}
      <rect x="100" y="50" width="200" height="140" rx="10" fill={color.slate800} stroke={color.slate600} strokeWidth="2" />
      <rect x="110" y="60" width="180" height="120" fill={color.slate900} />
      
      {/* Scanning Grid */}
      <g transform="translate(110, 60)" opacity="0.3">
        <path d="M0 20 H 180 M 0 40 H 180 M 0 60 H 180 M 0 80 H 180 M 0 100 H 180" stroke={color.cyan500} strokeWidth="1" />
        <path d="M20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120" stroke={color.cyan500} strokeWidth="1" />
      </g>

      {/* Diagnostic Scanner Line */}
      {!shouldReduce && (
        <motion.rect 
          x="110" y="60" width="180" height="2" fill={color.cyan400} opacity="0.8"
          animate={{ y: [0, 120, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Floating Repair Tools */}
      <g transform="translate(40, 220)">
        <motion.g 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="0" y="0" width="20" height="60" rx="2" fill={color.indigo500} />
          <path d="M0 0 L 10 -15 L 20 0" fill={color.slate300} />
        </motion.g>
        <motion.g 
          transform="translate(40, 20)"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="0" y="0" width="20" height="50" rx="2" fill={color.indigo500} />
          <circle cx="10" cy="0" r="10" fill={color.slate300} />
        </motion.g>
      </g>

      {/* Code/Status Window */}
      <g transform="translate(250, 240)">
        <rect x="0" y="0" width="120" height="80" rx="5" fill={color.slate800} stroke={color.emerald500} />
        {!shouldReduce && [1, 2, 3].map((i) => (
          <motion.rect 
            key={i}
            x="10" y={15 + i * 15} width="0" height="4" rx="2" fill={color.emerald400}
            animate={{ width: [0, 80] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3, repeatDelay: 2 }}
          />
        ))}
      </g>
    </g>
  );
};

const VideoHeroTechAssist = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Technical Assistance Hero";
  const desc = "A high-tech diagnostic lab scanning a device.";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-labelledby="taTitle taDesc" className="w-full h-auto">
        <title id="taTitle">{title}</title>
        <desc id="taDesc">{desc}</desc>
        <defs>
          <linearGradient id="taGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.cyan900} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#taGrad)" rx="20" />
        <TechAssistOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="taBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.cyan900} />
        </linearGradient>
        <mask id="taMask">
          <rect width="100%" height="100%" fill="white" />
          <TechAssistOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#taBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#taMask)">
        <video
          src={src}
          poster={poster || undefined}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </foreignObject>

      <TechAssistOverlay />
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

/* ------------------------ 10 Unique Section SVGs ------------------------ */

// 1. Comprehensive Device Support
const SvgDeviceSupport = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradDev" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradDev)" />
    
    {/* Laptop & Phone */}
    <g transform="translate(80, 80)">
      <rect x="0" y="0" width="160" height="100" rx="8" fill={color.slate800} />
      <rect x="5" y="5" width="150" height="90" fill={color.slate900} />
      <rect x="-20" y="100" width="200" height="10" rx="3" fill={color.slate700} />
      
      <g transform="translate(180, 40)">
        <rect x="0" y="0" width="50" height="90" rx="5" fill={color.slate800} />
        <rect x="3" y="3" width="44" height="84" rx="2" fill={color.slate900} />
      </g>
      
      {/* Repair Icons */}
      <motion.circle cx="80" cy="50" r="20" fill={color.emerald500} opacity="0.2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <path d="M70 50 L 80 60 L 95 40" stroke={color.emerald400} strokeWidth="4" fill="none" />
    </g>
  </svg>
);

// 2. Software Installation
const SvgSoftwareFix = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSoft" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.blue50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSoft)" />
    
    <g transform="translate(130, 80)">
      <rect x="0" y="0" width="140" height="100" rx="5" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <rect x="0" y="0" width="140" height="20" rx="5" fill={color.slate200} />
      <circle cx="10" cy="10" r="3" fill={color.rose400} />
      <circle cx="20" cy="10" r="3" fill={color.amber400} />
      <circle cx="30" cy="10" r="3" fill={color.emerald400} />
      
      {/* Progress Bar */}
      <rect x="20" y="50" width="100" height="10" rx="5" fill={color.slate100} />
      <motion.rect 
        x="20" y="50" width="0" height="10" rx="5" fill={color.emerald400}
        animate={{ width: 100 }} transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Gear */}
      <motion.path 
        d="M120 100 L 125 115 L 115 120 Z" fill={color.slate500} 
        transform="translate(100, 80)"
        animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </g>
  </svg>
);

// 3. Network Troubleshooting
const SvgNetworkFix = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradNet" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.purple50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradNet)" />
    
    <g transform="translate(150, 100)">
      {/* Router */}
      <rect x="0" y="50" width="100" height="30" rx="5" fill={color.slate800} />
      <line x1="20" y1="50" x2="20" y2="20" stroke={color.slate800} strokeWidth="4" />
      <line x1="80" y1="50" x2="80" y2="20" stroke={color.slate800} strokeWidth="4" />
      
      {/* Signal Waves */}
      <motion.path 
        d="M50 10 Q 80 10, 80 40 M 50 10 Q 20 10, 20 40" 
        fill="none" stroke={color.cyan500} strokeWidth="3"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
      <circle cx="30" cy="65" r="3" fill={color.emerald400} />
      <circle cx="45" cy="65" r="3" fill={color.emerald400} />
      <circle cx="60" cy="65" r="3" fill={color.emerald400} />
    </g>
  </svg>
);

// 4. Mobile Support
const SvgMobileFix = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradMob" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.slate200 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradMob)" />
    
    <g transform="translate(160, 60)">
      <rect x="0" y="0" width="80" height="160" rx="10" fill={color.slate800} />
      <rect x="5" y="10" width="70" height="140" fill={color.white} />
      
      {/* Diagnostic overlay */}
      <rect x="15" y="40" width="50" height="80" rx="5" fill={color.cyan50} opacity="0.8" stroke={color.cyan300} />
      <path d="M30 60 L 40 70 L 55 50" stroke={color.emerald500} strokeWidth="3" fill="none" />
      <rect x="25" y="80" width="30" height="4" fill={color.slate300} />
      <rect x="25" y="90" width="20" height="4" fill={color.slate300} />
    </g>
  </svg>
);

// 5. App & Website Usage
const SvgAppUsage = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradApp" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.orange50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradApp)" />
    
    <g transform="translate(120, 80)">
      {/* Browser Window */}
      <rect x="0" y="0" width="160" height="120" rx="5" fill={color.white} stroke={color.slate300} />
      <rect x="0" y="0" width="160" height="20" rx="5" fill={color.slate200} />
      
      {/* Cursor */}
      <motion.path 
        d="M100 100 L 100 80 L 115 90 Z" fill={color.slate800}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }} transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Click Target */}
      <motion.circle 
        cx="60" cy="60" r="10" fill={color.indigo200} 
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}
      />
    </g>
  </svg>
);

// 6. Remote Support
const SvgRemote = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradRem" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradRem)" />
    
    <g transform="translate(100, 100)">
      {/* Local Screen */}
      <rect x="0" y="0" width="80" height="60" rx="2" fill={color.slate700} />
      
      {/* Remote Screen */}
      <rect x="120" y="0" width="80" height="60" rx="2" fill={color.slate700} />
      
      {/* Connection Arc */}
      <path d="M40 0 Q 100 -50, 160 0" fill="none" stroke={color.indigo400} strokeWidth="2" strokeDasharray="5 5" />
      <motion.circle 
        r="4" fill={color.indigo600}
        animate={{ offsetDistance: "100%" }} 
        style={{ offsetPath: "path('M40 0 Q 100 -50, 160 0')" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </g>
  </svg>
);

// 7. On-Site Assistance
const SvgOnSite = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSite" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSite)" />
    
    <g transform="translate(150, 100)">
      {/* Toolbox */}
      <rect x="0" y="20" width="100" height="60" rx="5" fill={color.rose600} />
      <path d="M40 20 V 10 H 60 V 20" stroke={color.rose800} strokeWidth="4" fill="none" />
      <rect x="45" y="40" width="10" height="20" fill={color.rose800} />
      
      {/* Wrench */}
      <motion.g transform="translate(80, 0)" animate={{ rotate: [0, 20, 0] }} transition={{ duration: 1, repeat: Infinity }}>
        <path d="M0 0 L 10 30 L -10 30 Z" fill={color.slate500} />
        <circle cx="0" cy="0" r="8" fill={color.slate500} />
      </motion.g>
    </g>
  </svg>
);

// 8. Diagnostics
const SvgDiagnostics = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradDiag" stops={[{ offset: "0%", color: color.slate800 }, { offset: "100%", color: color.slate900 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradDiag)" />
    
    <g transform="translate(120, 80)">
      {/* Graph */}
      <rect x="0" y="0" width="160" height="120" rx="5" fill={color.black} stroke={color.slate600} />
      <motion.path 
        d="M10 100 L 40 80 L 60 90 L 90 40 L 120 60 L 150 20" 
        fill="none" stroke={color.cyan400} strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
      />
      <motion.rect 
        x="10" y="10" width="140" height="2" fill={color.rose500} opacity="0.5"
        animate={{ y: [10, 110, 10] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </g>
  </svg>
);

// 9. Technical Guidance
const SvgGuide = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradGuide" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradGuide)" />
    
    <g transform="translate(140, 80)">
      <rect x="0" y="0" width="120" height="140" rx="5" fill={color.white} stroke={color.slate300} />
      {/* Lightbulb */}
      <path d="M60 40 C 40 40, 40 70, 60 90 C 80 70, 80 40, 60 40" fill={color.amber300} />
      <rect x="55" y="90" width="10" height="10" fill={color.slate500} />
      <motion.path 
        d="M40 40 L 30 30 M 80 40 L 90 30 M 60 20 L 60 10" 
        stroke={color.amber500} strokeWidth="2"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}
      />
    </g>
  </svg>
);

// 10. Emergency 24/7
const SvgEmergency = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradEmerg" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.red50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradEmerg)" />
    
    <g transform="translate(150, 80)">
      <circle cx="50" cy="50" r="40" fill={color.rose600} />
      <path d="M30 50 H 70 M 50 30 V 70" stroke={color.white} strokeWidth="8" />
      <text x="50" y="120" textAnchor="middle" fontSize="14" fill={color.rose800} fontWeight="bold">24 / 7</text>
      
      <motion.circle 
        cx="50" cy="50" r="50" stroke={color.rose400} strokeWidth="2" fill="none"
        animate={{ scale: [1, 1.3], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
    </g>
  </svg>
);

// Map SVGs
const svgMap = {
  'sec1-comprehensive-device-support': SvgDeviceSupport,
  'sec2-software-installation-and-error-fixing': SvgSoftwareFix,
  'sec3-internet-and-network-troubleshooting': SvgNetworkFix,
  'sec4-mobile-device-technical-support': SvgMobileFix,
  'sec5-app-and-website-usage-support': SvgAppUsage,
  'sec6-remote-technical-support': SvgRemote,
  'sec7-on-site-technical-assistance': SvgOnSite,
  'sec8-advanced-troubleshooting-and-diagnostics': SvgDiagnostics,
  'sec9-technical-guidance-and-skill-support': SvgGuide,
  'sec10-247-emergency-technical-support': SvgEmergency,
};

/* ------------------------------ Section block ------------------------------ */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
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
      <motion.div
        style={{ opacity: shouldReduce ? 1 : opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: shouldReduce ? 0 : 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 md:items-stretch"
      >
        <motion.div
          style={{ y }}
          className={`relative min-w-0 flex flex-col ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex-grow flex items-center justify-center overflow-hidden">
            <div className="w-full h-full max-h-[400px] md:max-h-full">
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        <div
          className={`${
            reverse ? "md:order-1" : "md:order-2"
          } min-w-0 py-2`}
        >
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function TechnicalAssistance() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
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
      <motion.nav
        variants={itemUp}
        className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4"
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
          Technical Assistance
        </span>
      </motion.nav>

      {/* Hero */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="mt-2 text-base md:text-lg text-cyan-700 max-w-2xl">
            {data.tagline}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Device Help", "Diagnosis", "Repair"].map((pill) => (
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
              <VideoHeroTechAssist
                src="https://cdn.coverr.co/videos/coverr-motherboard-assembly-close-up-5145/1080p.mp4" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {technicalAssistanceData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || SvgDeviceSupport;
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
    </motion.section>
  );
}