// src/pages/safety/OnlineSafetyTips.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { onlineSafetyTipsData } from '../../data/onlineSafetyTipsData';

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
  cyan25:"#F5FEFF", cyan50:"#ECFEFF", cyan100:"#CFFAFE", cyan200:"#A5F3FC", cyan300:"#67E8F9", cyan500:"#06B6D4",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber500: "#F59E0B",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185", rose600: "#E11D48",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title. Sections are imported.
const data = {
  title: "Online Safety & Prevention Tips",
  // No tagline provided in stub, so it is omitted.
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: User at a computer, a large glowing shield deflects digital threats (phishing, viruses). */
const VideoHeroOnlineSafety = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Online Safety & Prevention Hero";
  const desc =
    "A user is protected by a digital shield deflecting cyber threats. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="osTitle osDesc" className="w-full h-auto">
        <title id="osTitle">{title}</title>
        <desc id="osDesc">{desc}</desc>
        <defs>
          <linearGradient id="osGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.emerald100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.indigo100} />
          </linearGradient>
          <filter id="osSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="osStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#osSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#osGrad)" />
        </g>
        <g clipPath="url(#osStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#osGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {OnlineSafetyOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="osBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.cyan100} />
          <stop offset="55%" stopColor={color.emerald100} />
          <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <filter id="osSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="osStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#osSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#osBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#osStage2)">
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

      {OnlineSafetyOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: digital safety scene ----------------------- */
function OnlineSafetyOverlay() {
  return (
    <g transform="translate(680, 40)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="400" rx="150" ry="18" fill={color.black} opacity="0.07" />
      
      {/* User at Desk */}
      <g transform="translate(90, 200)">
        <rect x="0" y="0" width="160" height="200" rx="12" fill={color.slate300} /> {/* Desk */}
        <rect x="20" y="-120" width="120" height="150" rx="10" fill={color.slate900} /> {/* Monitor */}
        <rect x="30" y="-110" width="100" height="130" rx="5" fill={color.white} /> {/* Screen */}
        <rect x="-10" y="0" width="180" height="15" rx="5" fill={color.slate400} /> {/* Desk Top */}
        <rect x="40" y="10" width="80" height="100" rx="10" fill={color.indigo600} /> {/* Person */}
        <circle cx="80" cy="-20" r="30" fill="#F5D0A6" /> {/* Head */}
      </g>

      {/* Glowing Shield */}
      <g transform="translate(170, 150)">
        <path d="M0 -80l120 40v60c0 70-45 125-120 155-75-30-120-85-120-155v-60l120-40z" fill={color.cyan300} opacity="0.3" stroke={color.cyan300} strokeWidth="4">
           <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
        </path>
         <path d="M-80 60l60 60 90-90" stroke={color.white} strokeWidth="12" fill="none" strokeLinecap="round" />
      </g>

      {/* Threats (deflected) */}
      <g transform="translate(20, 100)" opacity="0.8">
        <path d="M10 0 C 10 20, -10 20, -10 40 C -10 60, 10 60, 10 80 L 10 90 L 15 80 C 15 60, 30 60, 30 40 C 30 20, 15 20, 15 0 Z" fill={color.rose400} stroke={color.rose600} strokeWidth="2" />
        <animateTransform attributeName="transform" type="translate" values="0 0; 5 5; 0 0" dur="1.5s" repeatCount="indefinite" />
      </g>
      <g transform="translate(300, 80)" opacity="0.8">
        <circle cx="0" cy="0" r="15" fill={color.rose400} />
        <text x="0" y="8" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.white} textAnchor="middle">!</text>
        <animateTransform attributeName="transform" type="translate" values="0 0; -5 5; 0 0" dur="1.8s" repeatCount="indefinite" />
      </g>
      <g transform="translate(40, 250)" opacity="0.8">
        <circle cx="0" cy="0" r="12" fill={color.amber500} />
        <path d="M0 0 L 10 10 M 0 0 L 10 -10 M 0 0 L -10 10 M 0 0 L -10 -10" stroke={color.slate900} strokeWidth="2" />
        <animateTransform attributeName="transform" type="translate" values="0 0; 5 -5; 0 0" dur="1.6s" repeatCount="indefinite" />
      </g>
    </g>
  );
}

/* ---------------------------- SVG helpers & utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke = color.slate200, sw = 1, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* ------------------------ Complex section SVG illustrations ------------------------ */

// 1. Online Safety & Prevention Tips (Intro)
const Sec1_OnlineSafetyIntroSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Online Safety & Prevention Tips Introduction" className="w-full h-full" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowSec1" std={10} alpha={0.4} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    
    {/* CRCCF Building (stylized) */}
    <g transform="translate(100, 100)">
      <polygon points="0 200, 200 200, 200 50, 100 0, 0 50" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="40" y="80" width="120" height="120" fill={color.indigo100} />
      <rect x="60" y="100" width="80" height="100" fill={color.white} />
      <text x="100" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text>
    </g>
    
    {/* Magnifying Glass over Law Document */}
    <g transform="translate(350, 90)" filter="url(#glowSec1)">
      <Card x="0" y="0" w="200" h="250" r="12" />
      <rect x="20" y="20" width="160" height="10" rx="5" fill={color.slate700} />
      <rect x="20" y="40" width="140" height="6" rx="3" fill={color.slate400} />
      <rect x="20" y="56" width="150" height="6" rx="3" fill={color.slate400} />
      
      <g transform="translate(180, 160)">
        <circle cx="0" cy="0" r="60" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" />
        <line x1="45" y1="45" x2="90" y2="90" stroke={color.cyan500} strokeWidth="12" />
        <animateTransform attributeName="transform" type="translate" values="180 160; 175 155; 180 160" dur="3s" repeatCount="indefinite" />
      </g>
    </g>

    {/* Shield */}
    <g transform="translate(580, 120)">
      <path d="M50 0l70 30v40c0 50-28 85-70 105-42-20-70-55-70-105v-40l70-30z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="4" />
      <path d="M20 70l20 20 40-40" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

// 2. Protect Your Personal & Financial Data
const Sec2_ProtectDataSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Protect Your Personal & Financial Data" className="w-full h-full" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    
    {/* Credit Card */}
    <g transform="translate(80, 120)">
      <Card x="0" y="0" w="300" h="180" r="15" fill={color.indigo600} />
      <rect x="0" y="30" width="300" height="40" fill={color.black} opacity="0.2" />
      <rect x="20" y="120" width="100" height="12" rx="6" fill={color.white} opacity="0.7" />
      <rect x="220" y="110" width="60" height="40" rx="8" fill={color.amber100} />
    </g>

    {/* Large Padlock */}
    <g transform="translate(420, 80)">
      <rect x="0" y="0" width="280" height="200" rx="20" fill={color.slate700} stroke={color.slate900} strokeWidth="4" />
      <path d="M140 -80 C 220 -80, 220 50, 140 50 S 60 -80, 140 -80 Z" stroke={color.amber500} strokeWidth="25" fill="none" />
      <circle cx="140" cy="100" r="30" fill={color.amber100} />
      <rect x="130" y="100" width="20" height="50" fill={color.amber100} />
      <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="2.5s" repeatCount="indefinite" transform-origin="560 180" />
    </g>
    
    {/* 2FA Icon */}
    <g transform="translate(620, 220)">
      <circle cx="0" cy="0" r="50" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="-20" y="-30" width="40" height="60" rx="6" fill={color.emerald300} />
      <path d="M-10 0 l8 8 12-12" stroke={color.emerald600} strokeWidth="5" fill="none" />
    </g>
  </svg>
);

// 3. Be Cautious on Social Media Platforms
const Sec3_SocialMediaSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Be Cautious on Social Media Platforms" className="w-full h-full" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    
    {/* Smartphone */}
    <g transform="translate(120, 40)">
      <rect x="0" y="0" width="300" height="300" rx="25" fill={color.slate900} />
      <rect x="15" y="15" width="270" height="270" rx="15" fill={color.white} />
      {/* Profile */}
      <circle cx="150" cy="80" r="40" fill={color.indigo100} />
      <rect x="80" y="130" width="140" height="15" rx="7" fill={color.slate400} />
      {/* Posts */}
      <rect x="40" y="170" width="220" height="80" rx="10" fill={color.slate200} />
      
      {/* Caution Icon */}
      <g transform="translate(150, 80)">
         <circle cx="0" cy="0" r="45" fill="none" stroke={color.rose400} strokeWidth="6" />
         <line x1="-25" y1="-25" x2="25" y2="25" stroke={color.rose400} strokeWidth="6" />
         <line x1="-25" y1="25" x2="25" y2="-25" stroke={color.rose400} strokeWidth="6" />
      </g>
    </g>
    
    {/* Floating Icons */}
    <g transform="translate(500, 80)" filter="url(#glowSec1)">
      <circle cx="0" cy="0" r="40" fill={color.rose100} />
      <path d="M-15 -5 C -15 -20, 10 -20, 10 -5 C 10 10, -15 25, -15 25 S -15 -5, -15 -5 Z" fill={color.rose400} />
      <animateTransform attributeName="transform" type="translate" values="500 80; 510 90; 500 80" dur="2s" repeatCount="indefinite" />
    </g>
    <g transform="translate(600, 250)" filter="url(#glowSec1)">
      <circle cx="0" cy="0" r="50" fill={color.cyan100} />
      <path d="M-25 -10 L 10 -10 L 10 15 L -25 15 Z M 15 -10 H 25 V 15 H 15 Z" fill={color.cyan500} />
      <animateTransform attributeName="transform" type="translate" values="600 250; 590 245; 600 250" dur="2.5s" repeatCount="indefinite" />
    </g>
  </svg>
);

// 4. Beware of Phishing, Scams & Fraudulent Links
const Sec4_PhishingSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Beware of Phishing, Scams & Fraudulent Links" className="w-full h-full" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    
    {/* Laptop and Email */}
    <g transform="translate(100, 90)">
      <rect x="0" y="0" width="400" height="220" rx="15" fill={color.slate900} stroke={color.slate400} strokeWidth="2" />
      <rect x="10" y="10" width="380" height="200" rx="8" fill={color.white} />
      <rect x="-20" y="220" width="440" height="20" rx="10" fill={color.slate400} />
      {/* Email UI */}
      <rect x="30" y="30" width="340" height="40" rx="8" fill={color.rose100} />
      <text x="40" y="55" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color.rose600}>From: URGENT_Bank@scam.com</text>
      <rect x="30" y="80" width="340" height="110" rx="8" fill={color.slate200} />
      <text x="40" y="110" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Click link to secure account:</text>
      <text x="40" y="135" fontFamily="sans-serif" fontSize="16" fill={color.indigo600} textDecoration="underline">http://not-real-bank.xyz</text>
    </g>

    {/* Phishing Hook */}
    <g transform="translate(480, 50)">
      <path d="M50 0 C 50 80, -40 80, -40 170 C -40 260, 50 260, 50 340 L 50 360 L 80 330 C 80 260, 180 260, 180 170 C 180 80, 80 80, 80 0 Z" 
        fill={color.rose400} stroke={color.slate900} strokeWidth="6" transform="rotate(15)" />
      <line x1="65" y1="0" x2="65" y2="-40" stroke={color.slate900} strokeWidth="6" />
      <animateTransform attributeName="transform" type="rotate" values="480 50 15; 480 50 20; 480 50 15" dur="2s" repeatCount="indefinite" transform-origin="65 -40" />
    </g>
  </svg>
);

// 5. Workplace & Institutional Cyber Ethics
const Sec5_WorkplaceEthicsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Workplace & Institutional Cyber Ethics" className="w-full h-full" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    
    {/* Office Building */}
    <g transform="translate(100, 80)">
      <rect x="0" y="0" width="200" height="250" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="20" y="20" width="60" height="60" fill={color.cyan100} />
      <rect x="120" y="20" width="60" height="60" fill={color.cyan100} />
      <rect x="20" y="100" width="60" height="60" fill={color.cyan100} />
      <rect x="120" y="100" width="60" height="60" fill={color.cyan100} />
      <rect x="20" y="180" width="160" height="50" fill={color.indigo100} />
    </g>

    {/* Server Rack */}
    <g transform="translate(350, 100)">
      <rect x="0" y="0" width="120" height="200" rx="8" fill={color.slate700} />
      <rect x="10" y="15" width="100" height="30" rx="5" fill={color.emerald300} />
      <rect x="10" y="55" width="100" height="30" rx="5" fill={color.emerald300} />
      <rect x="10" y="95" width="100" height="30" rx="5" fill={color.slate500} />
      <rect x="10" y="135" width="100" height="30" rx="5" fill={color.slate500} />
      <g>
        <circle cx="25" cy="30" r="3" fill={color.emerald600}>
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="25" cy="70" r="3" fill={color.emerald600}>
           <animate attributeName="opacity" values="1;0;1" dur="1s" delay="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>
    
    {/* Training Whiteboard */}
    <g transform="translate(520, 120)">
      <rect x="0" y="0" width="220" height="150" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <text x="20" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.indigo600}>IT Audit</text>
      <path d="M30 120 L 70 80 L 110 100 L 150 70 L 190 90" stroke={color.emerald600} strokeWidth="4" fill="none" />
    </g>
  </svg>
);

// 6. Safety for Women & Children
const Sec6_WomenChildrenSafetySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Safety for Women & Children" className="w-full h-full" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    
    {/* Parent and Child Figures */}
    <g transform="translate(180, 120)">
      {/* Parent */}
      <circle cx="0" cy="0" r="40" fill="#F5D0A6" />
      <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} />
      {/* Child */}
      <circle cx="100" cy="50" r="30" fill="#F5D0A6" />
      <rect x="80" y="80" width="40" height="80" rx="10" fill={color.rose400} />
    </g>
    
    {/* Protective Bubble */}
    <ellipse cx="280" cy="170" rx="220" ry="160" fill="none" stroke={color.cyan300} strokeWidth="6" opacity="0.6">
      <animate attributeName="stroke-width" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
    </ellipse>

    {/* Report Flag / Chat */}
    <g transform="translate(550, 100)">
      <Card x="0" y="0" w="180" h="100" r="12" />
      <text x="20" y="40" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Report Abuse</text>
      <rect x="20" y="55" width="100" height="25" rx="12" fill={color.rose100} />
      <text x="35" y="73" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.rose600}>REPORT</text>
    </g>
  </svg>
);

// 7. Device Security & Software Protection
const Sec7_DeviceSecuritySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Device Security & Software Protection" className="w-full h-full" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    
    {/* Laptop */}
    <g transform="translate(200, 100)">
      <rect x="0" y="0" width="400" height="220" rx="15" fill={color.slate900} />
      <rect x="10" y="10" width="380" height="200" rx="8" fill={color.white} />
      <rect x="-20" y="220" width="440" height="20" rx="10" fill={color.slate400} />
      {/* Antivirus Shield */}
      <g transform="translate(140, 40)">
        <path d="M60 0l70 30v40c0 50-28 85-70 105-42-20-70-55-70-105v-40l70-30z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="5" />
        <path d="M30 70l20 20 40-40" stroke={color.emerald600} strokeWidth="10" fill="none" strokeLinecap="round" />
      </g>
    </g>
    
    {/* Smartphone */}
    <g transform="translate(80, 80)">
      <rect x="0" y="0" width="100" height="200" rx="15" fill={color.slate700} />
      <rect x="5" y="5" width="90" height="190" rx="10" fill={color.white} />
    </g>

    {/* Update Arrows */}
    <g transform="translate(650, 190)">
      <path d="M50 0 C 80 0, 80 50, 50 50 S 20 0, 50 0" stroke={color.indigo400} strokeWidth="6" fill="none" strokeDasharray="10 5" />
      <path d="M50 50 L 40 40 M 50 50 L 60 40" stroke={color.indigo400} strokeWidth="6" />
      <animateTransform attributeName="transform" type="rotate" values="650 190 0; 650 190 360" dur="4s" repeatCount="indefinite" transform-origin="50 25" />
    </g>
  </svg>
);

// 8. Recognize & Report Cybercrimes Early
const Sec8_ReportEarlySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Recognize & Report Cybercrimes Early" className="w-full h-full" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    
    {/* Brain (Recognize) */}
    <g transform="translate(120, 100)">
      <path d="M100 0 C 20 0, 0 80, 50 150 C 0 220, 60 300, 150 280 C 240 300, 300 220, 250 150 C 300 80, 280 0, 200 0 C 180 40, 120 40, 100 0 Z" 
        fill={color.rose100} stroke={color.rose400} strokeWidth="4" />
      <path d="M150 280 V 150" stroke={color.rose400} strokeWidth="4" />
      <path d="M100 100 C 130 80, 170 80, 200 100" stroke={color.rose400} strokeWidth="4" fill="none" />
      <path d="M80 180 C 120 160, 180 160, 220 180" stroke={color.rose400} strokeWidth="4" fill="none" />
    </g>
    
    {/* Arrow */}
    <g transform="translate(420, 180)">
      <line x1="0" y1="0" x2="80" y2="0" stroke={color.slate500} strokeWidth="8" />
      <polygon points="80 -15, 110 0, 80 15" fill={color.slate500} />
      <animateTransform attributeName="transform" type="translate" values="420 180; 430 180; 420 180" dur="1.5s" repeatCount="indefinite" />
    </g>
    
    {/* Police Building (Report) */}
    <g transform="translate(560, 80)">
      <rect x="0" y="0" width="180" height="230" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="30" y="120" width="120" height="110" fill={color.indigo100} />
      <polygon points="0 0, 180 0, 90 50" fill={color.indigo600} />
      <text x="90" y="100" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color.indigo800} textAnchor="middle">POLICE</text>
    </g>
  </svg>
);

// 9. Digital Discipline & Ethical Conduct Online
const Sec9_DigitalDisciplineSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Digital Discipline & Ethical Conduct Online" className="w-full h-full" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    
    {/* Scales of Justice */}
    <g transform="translate(120, 100)">
      <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" />
      <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" />
      <g transform="translate(50, 50)">
        <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" />
        <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" />
      </g>
      <g transform="translate(250, 50)">
        <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" />
        <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" />
      </g>
      <animateTransform attributeName="transform" type="rotate" values="120 100 -2; 120 100 2; 120 100 -2" dur="2.5s" repeatCount="indefinite" transform-origin="150 0" />
    </g>
    
    {/* Ethical Path vs. Misinformation Path */}
    <g transform="translate(480, 80)">
      <Card x="0" y="0" w="250" h="220" r="12" />
      <text x="20" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.slate700}>Verify Content</text>
      {/* Good Path */}
      <rect x="20" y="70" width="210" height="50" rx="10" fill={color.emerald100} />
      <text x="35" y="100" fontFamily="sans-serif" fontSize="16" fill={color.emerald600}>Ethical Sharing</text>
      {/* Bad Path */}
      <rect x="20" y="150" width="210" height="50" rx="10" fill={color.rose100} />
      <text x="35" y="180" fontFamily="sans-serif" fontSize="16" fill={color.rose600}>Misinformation</text>
    </g>
  </svg>
);

// 10. Quick Legal Awareness Checklist
const Sec10_ChecklistSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Quick Legal Awareness Checklist" className="w-full h-full" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />

    {/* Clipboard */}
    <g transform="translate(150, 30)">
      <Card x="0" y="0" w="500" h="330" r="12" stroke={color.slate300} sw="2" />
      <rect x="180" y="-15" width="140" height="30" rx="8" fill={color.slate500} stroke={color.slate700} strokeWidth="4" />
      
      {/* Checklist Items */}
      <text x="50" y="80" fontFamily="sans-serif" fontSize="40">✅</text>
      <text x="120" y="85" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>Keep passwords private 🔐</text>
      
      <text x="50" y="140" fontFamily="sans-serif" fontSize="40">✅</text>
      <text x="120" y="145" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>Verify links and senders 📧</text>

      <text x="50" y="200" fontFamily="sans-serif" fontSize="40">✅</text>
      <text x="120" y="205" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>Report to cybercrime.gov.in 🏛</text>

      <text x="50" y="260" fontFamily="sans-serif" fontSize="40">✅</text>
      <text x="120" y="265" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>Preserve evidence 📱</text>
    </g>
  </svg>
);

// 11. External Link Disclaimer
const Sec11_DisclaimerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="External Link Disclaimer" className="w-full h-full" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    
    {/* CRCCF Building */}
    <g transform="translate(100, 100)">
      <polygon points="0 200, 150 200, 150 50, 75 0, 0 50" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="30" y="80" width="90" height="120" fill={color.indigo100} />
      <text x="75" y="40" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text>
    </g>
    
    {/* Government Building */}
    <g transform="translate(550, 80)">
      <rect x="0" y="0" width="180" height="230" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="30" y="120" width="120" height="110" fill={color.amber100} />
      <polygon points="0 0, 180 0, 90 50" fill={color.amber500} />
      <text x="90" y="100" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color.amber500} textAnchor="middle">GOV.IN</text>
    </g>
    
    {/* "Not Equal" / Disclaimer Link */}
    <g transform="translate(350, 180)">
      <line x1="0" y1="0" x2="100" y2="0" stroke={color.slate400} strokeWidth="5" strokeDasharray="10 5" />
      <circle cx="50" cy="0" r="40" fill="none" stroke={color.rose600} strokeWidth="6" />
      <line x1="25" y1="-20" x2="75" y2="20" stroke={color.rose600} strokeWidth="6" />
      <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" transform-origin="400 180" />
    </g>
  </svg>
);

// 12. Empowering Digital India
const Sec12_EmpoweringIndiaSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Empowering Digital India" className="w-full h-full" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.indigo100 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />

    {/* Stylized Map of India */}
    <g transform="translate(250, 40)">
      <path d="M100 0 L 120 20 L 100 50 L 150 80 L 130 120 L 180 150 L 150 200 L 200 250 L 150 300 L 50 280 L 0 200 L 30 150 L 0 100 L 50 50 Z" 
        fill={color.white} stroke={color.slate300} strokeWidth="3" />
      {/* Nodes */}
      <circle cx="100" cy="50" r="10" fill={color.cyan500} />
      <circle cx="150" cy="100" r="10" fill={color.cyan500} />
      <circle cx="160" cy="200" r="10" fill={color.cyan500} />
      <circle cx="50" cy="250" r="10" fill={color.cyan500} />
      <circle cx="30" cy="150" r="10" fill={color.cyan500} />
      {/* Lines */}
      <path d="M100 50 L 150 100 L 160 200 L 50 250 L 30 150 Z" stroke={color.cyan300} strokeWidth="2" fill="none" opacity="0.7" />
    </g>

    {/* "Digital India" Text */}
    <g transform="translate(480, 150)">
      <text x="0" y="0" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo800}>Empowering</text>
      <text x="0" y="30" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo800}>Digital India</text>
      <path d="M0 50 H 150" stroke={color.emerald600} strokeWidth="4" />
    </g>
  </svg>
);


/* ------------------------------ Section block ------------------------------ */
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

/* ---------------------------------- Page ---------------------------------- */
export default function OnlineSafetyTips() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    'sec1-online-safety-and-prevention-tips': Sec1_OnlineSafetyIntroSVG,
    'sec2-protect-your-personal-and-financial-data': Sec2_ProtectDataSVG,
    'sec3-be-cautious-on-social-media-platforms': Sec3_SocialMediaSVG,
    'sec4-beware-of-phishing-scams-and-fraudulent-links': Sec4_PhishingSVG,
    'sec5-workplace-and-institutional-cyber-ethics': Sec5_WorkplaceEthicsSVG,
    'sec6-safety-for-women-and-children': Sec6_WomenChildrenSafetySVG,
    'sec7-device-security-and-software-protection': Sec7_DeviceSecuritySVG,
    'sec8-recognize-and-report-cybercrimes-early': Sec8_ReportEarlySVG,
    'sec9-digital-discipline-and-ethical-conduct-online': Sec9_DigitalDisciplineSVG,
    'sec10-quick-legal-awareness-checklist': Sec10_ChecklistSVG,
    'sec11-external-link-disclaimer': Sec11_DisclaimerSVG,
    'sec12-empowering-digital-india-through-legal-awareness-and-cyber-safety': Sec12_EmpoweringIndiaSVG,
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
        <Link to="/services" className="hover:underline">Services</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Online Safety Tips</span>
      </motion.nav>

      {/* Hero with Video-SVG (digital safety scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          {/* No tagline, as per stub */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Strong Passwords", "Two-Factor Auth", "Suspicious Links", "Software Updates"].map((pill) => (
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
              {/* Supply your video assets at these paths */}
              <VideoHeroOnlineSafety
                src="/assets/video/online-safety-hero.mp4"
                poster="/assets/video/online-safety-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {onlineSafetyTipsData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || Sec1_OnlineSafetyIntroSVG;
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
      
      {/* The disclaimer (sec11) and conclusion (sec12) are rendered as part of the 
        .map() block above, as they are included in your data file. 
        No separate hardcoded disclaimer is needed.
      */}

    </motion.section>
  );
}