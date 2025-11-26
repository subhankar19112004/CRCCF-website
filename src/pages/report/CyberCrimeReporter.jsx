// src/pages/cyber-crime/SupportForWomenAndGirls.jsx
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
// !!  (The compiler was failing here)                                     !!
// !!======================================================================!!
import { supportForWomenAndGirlsData } from "../../data/reportACyberCrime/supportForWomenAndGirlsData";

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
  pink50: "#FDF2F8",
  pink100: "#FCE7F3",
  pink600: "#DB2777",
  pink700: "#BE185D",
  pink900: "#831843",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray600: "#4b5563",
  gray700: "#374151",
  gray900: "#111827",
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title. Sections are imported.
const data = {
  title: "Support for Women & Girls",
  // Tagline will be pulled from the first data section
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A supportive hand reaching out to someone at a desk. */

// Overlay SVG defined as a separate component
const SupportOverlay = () => (
  <g
    stroke={color.white}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    opacity="0.25"
  >
    <motion.path
      d="M80 120 Q 90 100, 110 90 C 130 80, 150 85, 160 100 C 170 115, 160 135, 140 145 C 120 155, 90 150, 80 135 L 70 110 L 80 120 Z"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.25 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path
      d="M110 40 H 190 V 110 H 170"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.25 }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <motion.path
      d="M10 50 L 90 50 L 90 90 L 20 90 L 10 80 Z"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.25 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M150 40 L 150 20 L 170 20 L 170 40"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 0.25 }}
      transition={{ duration: 1, delay: 0.6 }}
    />
  </g>
);

// Specific VideoHero component for this page
const VideoHeroSupport = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Support for Women & Girls Hero";
  const desc =
    "A supportive hand reaches out towards a person at a desk. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (shouldReduce || !src) {
    return (
      <svg
        viewBox="0 0 200 150"
        role="img"
        aria-labelledby="supportTitle supportDesc"
        className="w-full h-auto"
      >
        <title id="supportTitle">{title}</title>
        <desc id="supportDesc">{desc}</desc>
        <defs>
          <linearGradient id="supportGrad" x1="0" y1="0" x2="1" y2="1">
            <motion.stop
              offset="0%"
              stopColor={color.indigo800}
              animate={{
                stopColor: [color.indigo800, color.cyan500, color.indigo800],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.stop
              offset="100%"
              stopColor={color.cyan500}
              animate={{
                stopColor: [color.cyan500, color.indigo800, color.cyan500],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </linearGradient>
          <filter id="supportSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0"
            />
          </filter>
        </defs>

        <g filter="url(#supportSoft)">
          <rect
            x="0"
            y="0"
            width="200"
            height="150"
            rx="12"
            fill="url(#supportGrad)"
          />
        </g>
        <SupportOverlay />
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg
      viewBox="0 0 200 150"
      className="w-full h-auto block"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="supportBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="100%" stopColor={color.cyan100} />
        </linearGradient>
        <filter id="supportSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix
            in="b"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0"
          />
        </filter>
        <mask id="supportMask">
          <rect width="100%" height="100%" fill="white" />
          <SupportOverlay />
        </mask>
      </defs>

      <g filter="url(#supportSoft2)">
        <rect
          x="0"
          y="0"
          width="200"
          height="150"
          rx="12"
          fill="url(#supportBG)"
        />
      </g>

      {/* poster + masked video */}
      <g mask="url(#supportMask)">
        {poster ? (
          <image
            href={poster}
            x="0"
            y="0"
            width="200"
            height="150"
            preserveAspectRatio="xMidYMid slice"
            opacity="0.86"
          />
        ) : null}
        <foreignObject x="0" y="0" width="200" height="150">
          <video
            src={src}
            poster={poster || undefined}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            crossOrigin="anonymous"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </foreignObject>
      </g>

      <SupportOverlay />
    </svg>
  );
};

/* ---------------------------- SVG helpers & utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs>
    {" "}
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {" "}
      {stops.map((s, i) => (
        <stop
          key={i}
          offset={s.offset}
          stopColor={s.color}
          stopOpacity={s.opacity ?? 1}
        />
      ))}{" "}
    </linearGradient>{" "}
  </defs>
);
const Card = ({
  x,
  y,
  w,
  h,
  r = 16,
  fill = color.white,
  stroke = color.slate200,
  sw = 1,
  opacity = 1,
}) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx={r}
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    opacity={opacity}
  />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs>
    {" "}
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      {" "}
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />{" "}
      <feColorMatrix
        in="b"
        type="matrix"
        values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`}
      />{" "}
    </filter>{" "}
  </defs>
);

/* ------------------------ Complex section SVG illustrations (22 Reusable) ------------------------ */

const SvgSupportiveHand = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradSupport"
      stops={[
        { offset: "0%", color: color.indigo300 },
        { offset: "100%", color: color.cyan300 },
      ]}
    />
    <BG
      id="gradHand1"
      stops={[
        { offset: "0%", color: color.amber100 },
        { offset: "100%", color: color.rose100 },
      ]}
    />
    <BG
      id="gradHand2"
      stops={[
        { offset: "0%", color: color.slate300 },
        { offset: "100%", color: color.slate200 },
      ]}
    />
    <path
      d="M100 140 C 60 140, 30 110, 20 75 C 10 40, 40 10, 80 10 C 120 10, 150 40, 150 65"
      fill="none"
      stroke="url(#gradSupport)"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.3"
    />
    <path
      d="M100 145 C 140 145, 170 115, 180 80 C 190 45, 160 15, 120 15 C 80 15, 50 45, 50 70"
      fill="none"
      stroke="url(#gradSupport)"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.3"
    />
    <motion.path
      d="M60 110 Q 70 90, 90 80 C 110 70, 130 75, 140 90 C 150 105, 140 125, 120 135 C 100 145, 70 140, 60 125 L 50 100 L 60 110 Z"
      fill="url(#gradHand2)"
      stroke={color.slate400}
      strokeWidth="1.5"
      initial={{ y: 5, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
    />
    <motion.path
      d="M140 80 Q 130 60, 110 50 C 90 40, 70 45, 60 60 C 50 75, 60 95, 80 105 C 100 115, 130 110, 140 95 L 150 70 L 140 80 Z"
      fill="url(#gradHand1)"
      stroke={color.rose400}
      strokeWidth="1.5"
      initial={{ y: -5, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
    <motion.circle
      cx="100"
      cy="95"
      r="10"
      fill={color.white}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    >
      <animate
        attributeName="r"
        values="10;12;10"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </motion.circle>
    <motion.circle cx="100" cy="95" r="7" fill="url(#gradSupport)" />
  </svg>
);

const SvgLegalJustice = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradBook"
      stops={[
        { offset: "0%", color: color.indigo800 },
        { offset: "100%", color: color.indigo600 },
      ]}
    />
    <SoftGlow id="glowLegal" std={6} alpha={0.6} />
    <motion.g
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <path
        d="M50 130 L 50 30 Q 50 20, 60 20 L 140 20 Q 150 20, 150 30 L 150 130 L 100 115 L 50 130 Z"
        fill="url(#gradBook)"
        stroke={color.indigo300}
        strokeWidth="2"
      />
      <rect
        x="55"
        y="20"
        width="90"
        height="10"
        fill={color.indigo100}
        opacity="0.5"
      />
      <path
        d="M100 35 L 80 45 L 100 55 L 120 45 L 100 35 Z"
        fill={color.amber100}
        stroke={color.amber500}
        strokeWidth="1.5"
      />
      <rect x="70" y="65" width="60" height="4" rx="2" fill={color.indigo100} />
      <rect x="70" y="75" width="60" height="4" rx="2" fill={color.indigo100} />
      <rect x="70" y="85" width="60" height="4" rx="2" fill={color.indigo100} />
    </motion.g>
    <motion.g
      transform="translate(100 70) scale(0.8)"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 0.8, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring" }}
    >
      <path
        d="M0 -50 L 0 0 L -60 0 L 60 0 L 0 0"
        stroke={color.slate500}
        strokeWidth="4"
      />
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M-60 0 L -80 20 L -40 20 Z" fill={color.slate300} />
        <path d="M-60 0 L -60 10" stroke={color.slate500} strokeWidth="3" />
      </motion.g>
      <motion.g
        animate={{ y: [0, 3, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        <path d="M60 0 L 80 20 L 40 20 Z" fill={color.slate300} />
        <path d="M60 0 L 60 10" stroke={color.slate500} strokeWidth="3" />
      </motion.g>
    </motion.g>
  </svg>
);

const SvgSafeEnvironment = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradShield"
      stops={[
        { offset: "0%", color: color.emerald300 },
        { offset: "100%", color: color.cyan300 },
      ]}
    />
    <SoftGlow id="glowSafe" std={10} alpha={0.5} />
    <motion.path
      d="M100 20 C 100 20, 160 30, 160 75 C 160 120, 100 140, 100 140 C 100 140, 40 120, 40 75 C 40 30, 100 20, 100 20 Z"
      fill="url(#gradShield)"
      stroke={color.emerald600}
      strokeWidth="3"
      filter="url(#glowSafe)"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    />
    <motion.path
      d="M80 75 L 95 90 L 120 65"
      fill="none"
      stroke={color.white}
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    />
    <motion.circle
      cx="100"
      cy="75"
      r="60"
      fill="none"
      stroke={color.white}
      strokeWidth="2"
      strokeDasharray="5 5"
      opacity="0.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 100 75"
        to="360 100 75"
        dur="20s"
        repeatCount="indefinite"
      />
    </motion.circle>
  </svg>
);

const SvgAwarenessLightbulb = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradBulb"
      stops={[
        { offset: "0%", color: color.amber100 },
        { offset: "100%", color: color.amber500 },
      ]}
    />
    <SoftGlow id="glowBulb" std={12} alpha={0.7} />
    <motion.g
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <path
        d="M100 10 C 75 10, 55 30, 55 55 C 55 75, 70 90, 80 105 L 85 115 L 115 115 L 120 105 C 130 90, 145 75, 145 55 C 145 30, 125 10, 100 10 Z"
        fill="url(#gradBulb)"
        filter="url(#glowBulb)"
      >
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      <rect x="85" y="115" width="30" height="15" rx="3" fill={color.slate400} />
      <rect x="80" y="130" width="40" height="5" rx="2" fill={color.slate300} />
    </motion.g>
    <motion.g
      fill={color.slate700}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <path d="M100 40 L 100 80" stroke={color.slate700} strokeWidth="3" />
      <path d="M90 80 L 110 80" stroke={color.slate700} strokeWidth="3" />
      <circle cx="100" cy="30" r="3" />
    </motion.g>
    <motion.path
      d="M50 60 L 30 60"
      stroke="url(#gradBulb)"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ x: 0 }}
      animate={{ x: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
    />
    <motion.path
      d="M150 60 L 170 60"
      stroke="url(#gradBulb)"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ x: 0 }}
      animate={{ x: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
    />
  </svg>
);

const SvgSelfProtection = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradPerson"
      stops={[
        { offset: "0%", color: color.indigo400 },
        { offset: "100%", color: color.indigo600 },
      ]}
    />
    <BG
      id="gradShieldFill"
      stops={[
        { offset: "0%", color: color.cyan100 },
        { offset: "100%", color: color.white },
      ]}
    />
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="100" cy="55" r="15" fill="url(#gradPerson)" />
      <path
        d="M80 75 L 80 110 C 80 120, 120 120, 120 110 L 120 75 Z"
        fill="url(#gradPerson)"
      />
    </motion.g>
    <motion.path
      d="M100 60 C 100 60, 140 65, 140 100 C 140 135, 100 145, 100 145 C 100 145, 60 135, 60 100 C 60 65, 100 60, 100 60 Z"
      fill="url(#gradShieldFill)"
      stroke={color.cyan500}
      strokeWidth="3"
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring" }}
    />
    <motion.g
      transform="translate(100 100)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <path
        d="M0 -15 L 15 0 L 0 15 L -15 0 Z"
        fill={color.cyan500}
        stroke={color.white}
        strokeWidth="2"
      />
      <motion.path
        d="M0 -15 L 15 0 L 0 15 L -15 0 Z"
        fill="none"
        stroke={color.cyan300}
        strokeWidth="4"
        opacity="0.5"
      >
        <animate
          attributeName="stroke-width"
          values="0;8;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </motion.path>
    </motion.g>
  </svg>
);

const SvgPrivacyLock = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradLockBody"
      stops={[
        { offset: "0%", color: color.slate500 },
        { offset: "100%", color: color.slate700 },
      ]}
    />
    <BG
      id="gradLockHandle"
      stops={[
        { offset: "0%", color: color.slate300 },
        { offset: "100%", color: color.slate400 },
      ]}
    />
    <SoftGlow id="glowLock" std={5} alpha={0.4} />
    <motion.g
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <rect
        x="60"
        y="70"
        width="80"
        height="60"
        rx="10"
        fill="url(#gradLockBody)"
        filter="url(#glowLock)"
      />
      <motion.path
        d="M80 70 L 80 40 C 80 25, 120 25, 120 40 L 120 70"
        fill="none"
        stroke="url(#gradLockHandle)"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </motion.g>
    <motion.circle
      cx="100"
      cy="100"
      r="10"
      fill={color.cyan300}
      stroke={color.white}
      strokeWidth="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring" }}
    />
    <motion.path
      d="M100 100 L 100 110"
      stroke={color.white}
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ scale: 0, y: -5 }}
      whileInView={{ scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, type: "spring" }}
    />
    <motion.path
      d="M150 50 L 180 50"
      stroke={color.slate300}
      strokeWidth="3"
      strokeDasharray="5 5"
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    />
    <motion.path
      d="M20 100 L 50 100"
      stroke={color.slate300}
      strokeWidth="3"
      strokeDasharray="5 5"
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
    />
  </svg>
);

const SvgMisinformation = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradNews"
      stops={[
        { offset: "0%", color: color.white },
        { offset: "100%", color: color.slate200 },
      ]}
    />
    <Card
      x="30"
      y="30"
      w="140"
      h="90"
      r="10"
      fill="url(#gradNews)"
      stroke={color.slate300}
      sw="2"
    />
    <rect x="45" y="45" width="50" height="20" rx="3" fill={color.slate400} />
    <rect x="45" y="75" width="110" height="4" rx="2" fill={color.slate300} />
    <rect x="45" y="85" width="110" height="4" rx="2" fill={color.slate300} />
    <rect x="45" y="95" width="80" height="4" rx="2" fill={color.slate300} />
    <motion.g
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
    >
      <circle cx="100" cy="75" r="40" fill={color.rose600} opacity="0.8" />
      <path
        d="M80 55 L 120 95"
        stroke={color.white}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M120 55 L 80 95"
        stroke={color.white}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </motion.g>
    <motion.g
      transform="translate(125 55)"
      animate={{
        y: [0, -3, 0],
        x: [0, 2, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M0 0 L 20 0 L 15 15 L 5 15 Z"
        fill={color.rose400}
        stroke={color.rose600}
        strokeWidth="1.5"
      />
      <path d="M10 15 L 10 25 L 5 22 L 15 22 L 10 25" fill={color.rose100} />
    </motion.g>
  </svg>
);

const SvgBullying = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradMsg1"
      stops={[
        { offset: "0%", color: color.rose100 },
        { offset: "100%", color: color.rose50 },
      ]}
    />
    <BG
      id="gradMsg2"
      stops={[
        { offset: "0%", color: color.slate200 },
        { offset: "100%", color: color.slate300 },
      ]}
    />
    <circle
      cx="100"
      cy="75"
      r="25"
      fill={color.amber100}
      stroke={color.amber500}
      sw="2"
    />
    <path
      d="M90 70 C 90 65, 95 65, 95 70"
      fill={color.slate700}
      stroke={color.slate700}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M110 70 C 110 65, 105 65, 105 70"
      fill={color.slate700}
      stroke={color.slate700}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M90 85 Q 100 80, 110 85"
      fill="none"
      stroke={color.slate700}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <motion.g
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <path
        d="M20 40 L 70 40 L 70 60 L 30 60 L 20 50 L 20 40 Z"
        fill="url(#gradMsg1)"
        stroke={color.rose400}
        strokeWidth="1.5"
      />
      <text x="30" y="53" fontSize="10" fill={color.rose600} fontWeight="bold">
        !!!
      </text>
    </motion.g>
    <motion.g
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <path
        d="M180 60 L 130 60 L 130 80 L 170 80 L 180 70 L 180 60 Z"
        fill="url(#gradMsg2)"
        stroke={color.slate500}
        strokeWidth="1.5"
      />
      <text x="140" y="73" fontSize="10" fill={color.slate700} fontWeight="bold">
        ...
      </text>
    </motion.g>
    <motion.g
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <path
        d="M30 100 L 80 100 L 80 120 L 40 120 L 30 110 L 30 100 Z"
        fill="url(#gradMsg1)"
        stroke={color.rose400}
        strokeWidth="1.5"
      />
      <text x="40" y="113" fontSize="10" fill={color.rose600} fontWeight="bold">
        !!!
      </text>
    </motion.g>
  </svg>
);

const SvgStalking = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <SoftGlow id="glowStalk" std={5} alpha={0.7} />
    <motion.g
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="60" cy="75" r="10" fill={color.indigo400} />
      <path d="M55 90 L 55 110 L 65 110 L 65 90 Z" fill={color.indigo400} />
      <path
        d="M60 75 L 100 75 L 100 100"
        fill="none"
        stroke={color.slate300}
        strokeWidth="3"
        strokeDasharray="5 5"
      />
    </motion.g>
    <motion.g
      transform="translate(130 60)"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <path
        d="M0 20 C 20 0, 50 0, 70 20 C 50 40, 20 40, 0 20 Z"
        fill={color.slate200}
        stroke={color.slate400}
        strokeWidth="2"
      />
      <circle cx="35" cy="20" r="15" fill={color.white} />
      <motion.circle cx="35" cy="20" r="8" fill={color.slate900}>
        <animate
          attributeName="cx"
          values="30;40;30"
          dur="3s"
          repeatCount="indefinite"
        />
      </motion.circle>
      <circle cx="40" cy="15" r="3" fill={color.white} opacity="0.7" />
    </motion.g>
  </svg>
);

const SvgIdentityTheft = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradCard"
      stops={[
        { offset: "0%", color: color.indigo100 },
        { offset: "100%", color: color.indigo50 },
      ]}
    />
    <Card
      x="40"
      y="40"
      w="120"
      h="70"
      r="8"
      fill="url(#gradCard)"
      stroke={color.indigo300}
      sw="2"
    />
    <circle cx="65" cy="65" r="12" fill={color.slate300} />
    <rect x="85" y="55" width="60" height="5" rx="2" fill={color.slate400} />
    <rect x="85" y="65" width="60" height="5" rx="2" fill={color.slate300} />
    <rect x="85" y="75" width="40" height="5" rx="2" fill={color.slate300} />
    <motion.g
      transform="translate(100 75)"
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring" }}
    >
      <path
        d="M-40 0 C -40 -30, 40 -30, 40 0 C 40 30, -40 30, -40 0 Z"
        fill={color.white}
        stroke={color.slate400}
        strokeWidth="2"
      />
      <circle cx="-15" cy="-5" r="5" fill={color.slate700} />
      <circle cx="15" cy="-5" r="5" fill={color.slate700} />
      <path
        d="M-10 10 Q 0 15, 10 10"
        fill="none"
        stroke={color.slate700}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.g>
  </svg>
);

const SvgBlackmail = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <Card
      x="20"
      y="20"
      w="160"
      h="110"
      r="10"
      fill={color.slate900}
      stroke={color.slate700}
      sw="3"
    />
    <rect x="25" y="25" width="150" height="100" rx="5" fill={color.black} />
    <motion.g
      initial={{ x: 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <path
        d="M100 75 L 140 75 L 160 50 L 170 60 L 180 55 L 180 110 L 165 130 L 100 130 Z"
        fill={color.slate400}
        stroke={color.slate500}
        strokeWidth="2"
      />
      <path
        d="M140 75 L 140 85 L 130 85"
        fill="none"
        stroke={color.slate700}
        strokeWidth="2"
      />
    </motion.g>
    <motion.text
      x="90"
      y="85"
      fontSize="40"
      fill={color.rose600}
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      textAnchor="middle"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, type: "spring" }}
    >
      $!
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="1s"
        repeatCount="indefinite"
      />
    </motion.text>
  </svg>
);

const SvgRevengePorn = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <Card
      x="40"
      y="40"
      w="120"
      h="80"
      r="8"
      fill={color.rose50}
      stroke={color.rose400}
      sw="2"
    />
    <motion.path
      d="M100 65 C 90 55, 70 55, 60 65 C 50 75, 60 95, 100 115 C 140 95, 150 75, 140 65 C 130 55, 110 55, 100 65 Z"
      fill={color.rose400}
      stroke={color.rose600}
      strokeWidth="2"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring" }}
    />
    <motion.path
      d="M75 90 L 125 70"
      stroke={color.rose100}
      strokeWidth="10"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
    />
    <motion.circle
      cx="100"
      cy="75"
      r="50"
      fill="none"
      stroke={color.slate700}
      strokeWidth="8"
      opacity="0.8"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.8 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    />
    <motion.path
      d="M65 40 L 135 110"
      stroke={color.slate700}
      strokeWidth="8"
      strokeLinecap="round"
      opacity="0.8"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.8 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    />
  </svg>
);

const SvgDeepfake = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <clipPath id="faceClip">
        <circle cx="100" cy="75" r="40" />
      </clipPath>
    </defs>
    <circle
      cx="100"
      cy="75"
      r="40"
      fill={color.indigo100}
      stroke={color.indigo300}
      sw="2"
    />
    <path
      d="M90 65 C 90 60, 95 60, 95 65"
      fill={color.slate700}
      stroke={color.slate700}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M110 65 C 110 60, 105 60, 105 65"
      fill={color.slate700}
      stroke={color.slate700}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M90 85 Q 100 95, 110 85"
      fill="none"
      stroke={color.slate700}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <g clipPath="url(#faceClip)">
      <motion.g
        animate={{ x: [0, 5, -5, 3, -3, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <rect x="100" y="35" width="40" height="80" fill={color.rose100} />
        <path
          d="M105 65 C 105 60, 110 60, 110 65"
          fill={color.rose600}
          stroke={color.rose600}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M125 65 C 125 60, 120 60, 120 65"
          fill={color.rose600}
          stroke={color.rose600}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M105 85 Q 115 75, 125 85"
          fill="none"
          stroke={color.rose600}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.g>
    </g>
    <motion.rect
      x="98"
      y="35"
      width="4"
      height="80"
      fill={color.cyan300}
      filter="url(#glowSafe)"
    >
      <animate
        attributeName="x"
        values="60;140;60"
        dur="2s"
        repeatCount="indefinite"
      />
    </motion.rect>
  </svg>
);

const SvgPhishing = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradWater"
      stops={[
        { offset: "0%", color: color.cyan50 },
        { offset: "100%", color: color.cyan200 },
      ]}
    />
    <rect x="0" y="80" width="200" height="70" fill="url(#gradWater)" />
    <motion.path
      d="M100 10 L 100 90 C 100 110, 80 110, 80 90"
      fill="none"
      stroke={color.slate500}
      strokeWidth="4"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
    <motion.path
      d="M80 90 C 75 85, 75 75, 80 70 L 90 80 L 80 90 Z"
      fill={color.slate700}
      stroke={color.slate900}
      strokeWidth="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring" }}
    />
    <motion.g
      transform="translate(130 110)"
      animate={{ x: [0, -5, 0, 5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M0 0 C 10 0, 20 -10, 30 0 S 50 0, 60 0 L 50 15 L 10 15 L 0 0 Z"
        fill={color.indigo600}
      />
      <circle cx="15" cy="5" r="3" fill={color.white} />
      <circle cx="45" cy="5" r="3" fill={color.white} />
    </motion.g>
    <text x="75" y="85" fontSize="10" fill={color.white} fontWeight="bold">
      ID
    </text>
  </svg>
);

const SvgSocialEngineering = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <motion.g
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="70" cy="60" r="15" fill={color.indigo100} />
      <path d="M55 80 L 55 110 L 85 110 L 85 80 Z" fill={color.indigo100} />
    </motion.g>
    <motion.g
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="130" cy="60" r="15" fill={color.rose100} />
      <path d="M115 80 L 115 110 L 145 110 L 145 80 Z" fill={color.rose100} />
    </motion.g>
    <motion.path
      d="M110 75 C 100 75, 90 70, 80 70"
      fill="none"
      stroke={color.slate400}
      strokeWidth="3"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.7 }}
    />
    <motion.g
      transform="translate(130 60)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
    >
      <path
        d="M-15 -15 C -15 -25, 15 -25, 15 -15 C 15 -5, -15 -5, -15 -15 Z"
        fill={color.white}
        stroke={color.slate400}
        strokeWidth="2"
      />
      <path
        d="M-5 -18 L 5 -12"
        stroke={color.slate700}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 -18 L -5 -12"
        stroke={color.slate700}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.g>
  </svg>
);

const SvgTrafficking = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <Card
      x="20"
      y="20"
      w="160"
      h="110"
      r="10"
      fill={color.slate900}
      stroke={color.slate700}
      sw="3"
    />
    <rect x="25" y="25" width="150" height="100" rx="5" fill={color.black} />
    <motion.g
      initial={{ x: 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <path
        d="M100 75 L 140 75 L 160 50 L 170 60 L 180 55 L 180 110 L 165 130 L 100 130 Z"
        fill={color.slate400}
        stroke={color.slate500}
        strokeWidth="2"
      />
    </motion.g>
    <motion.g
      transform="translate(90 75)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <motion.circle
        cx="0"
        cy="0"
        r="12"
        fill="none"
        stroke={color.rose600}
        strokeWidth="4"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="20"
        cy="0"
        r="12"
        fill="none"
        stroke={color.rose600}
        strokeWidth="4"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <rect x="10" y="-2" width="10" height="4" fill={color.rose600} />
    </motion.g>
  </svg>
);

const SvgThreat = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <motion.g
      animate={{
        y: [0, -2, 0, 2, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
    >
      <path
        d="M100 20 L 140 90 L 100 130 L 60 90 L 100 20 Z"
        fill={color.rose100}
        stroke={color.rose600}
        strokeWidth="3"
      />
      <rect x="95" y="50" width="10" height="40" rx="3" fill={color.rose600} />
      <circle cx="100" cy="105" r="6" fill={color.rose600} />
    </motion.g>
    <motion.path
      d="M100 20 L 100 5"
      stroke={color.rose400}
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: [0, 1, 0], y: -5 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
    <motion.path
      d="M140 90 L 155 100"
      stroke={color.rose400}
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ opacity: 0, x: -5, y: -5 }}
      animate={{ opacity: [0, 1, 0], x: 5, y: 5 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
    />
    <motion.path
      d="M60 90 L 45 100"
      stroke={color.rose400}
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ opacity: 0, x: 5, y: -5 }}
      animate={{ opacity: [0, 1, 0], x: -5, y: 5 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
    />
  </svg>
);

const SvgSpyware = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <Card
      x="50"
      y="30"
      w="100"
      h="100"
      r="10"
      fill={color.slate900}
      stroke={color.slate700}
      sw="2"
    />
    <rect x="55" y="35" width="90" height="90" rx="5" fill={color.indigo800} />
    <rect x="65" y="45" width="20" height="20" rx="3" fill={color.indigo400} />
    <rect x="90" y="45" width="20" height="20" rx="3" fill={color.indigo400} />
    <rect x="115" y="45" width="20" height="20" rx="3" fill={color.indigo400} />
    <rect x="65" y="70" width="70" height="10" rx="3" fill={color.indigo400} />
    <motion.g
      transform="translate(60 90)"
      animate={{ x: [0, 80, 0], y: [0, -30, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="0" cy="0" r="20" fill={color.cyan100} opacity="0.8" />
      <circle cx="0" cy="0" r="12" fill={color.cyan300} />
      <path
        d="M-15 -15 L 15 15"
        stroke={color.cyan100}
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M-20 0 L -30 0"
        stroke={color.cyan100}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 0 L 30 0"
        stroke={color.cyan100}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.g>
  </svg>
);

const SvgFinancialFraud = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <Card
      x="30"
      y="40"
      w="140"
      h="80"
      r="8"
      fill={color.emerald50}
      stroke={color.emerald300}
      sw="2"
    />
    <path
      d="M45 100 L 70 70 L 95 90 L 120 60 L 155 80"
      fill="none"
      stroke={color.emerald600}
      strokeWidth="4"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <motion.path
      d="M45 100 L 70 120 L 95 100 L 120 130 L 155 110"
      fill="none"
      stroke={color.rose600}
      strokeWidth="4"
      strokeLinejoin="round"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <animate
        attributeName="stroke-dasharray"
        values="0 200; 200 0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </motion.path>
    <circle cx="155" cy="110" r="5" fill={color.rose600}>
      <animate
        attributeName="r"
        values="0;6;0"
        dur="1s"
        repeatCount="indefinite"
        begin="0.5s"
      />
    </circle>
  </svg>
);

const SvgDigitalEvidence = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradMag"
      stops={[
        { offset: "0%", color: color.cyan100 },
        { offset: "100%", color: color.cyan300 },
      ]}
    />
    <motion.g
      transform="translate(130 90) rotate(30)"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring" }}
    >
      <circle cx="0" cy="0" r="25" fill="url(#gradMag)" opacity="0.7" />
      <circle cx="0" cy="0" r="18" fill={color.white} />
      <path
        d="M0 25 L 0 50 L 10 50 L 10 25"
        fill={color.slate500}
        stroke={color.slate700}
        strokeWidth="2"
      />
    </motion.g>
    <motion.g
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        x="30"
        y="40"
        w="90"
        h="70"
        r="5"
        fill={color.indigo50}
        stroke={color.indigo300}
        sw="2"
      />
      <rect x="40" y="50" width="70" height="4" rx="2" fill={color.slate300} />
      <rect x="40" y="60" width="70" height="4" rx="2" fill={color.slate300} />
      <rect x="40" y="70" width="50" height="4" rx="2" fill={color.slate300} />
      <rect x="40" y="80" width="70" height="4" rx="2" fill={color.slate300} />
      <rect x="40" y="90" width="60" height="4" rx="2" fill={color.slate300} />
    </motion.g>
  </svg>
);

const SvgAI = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradAI"
      stops={[
        { offset: "0%", color: color.indigo300 },
        { offset: "100%", color: color.indigo800 },
      ]}
    />
    <path
      d="M70 40 L 70 20 L 130 20 L 130 40 L 140 40 L 140 110 L 130 110 L 130 130 L 70 130 L 70 110 L 60 110 L 60 40 L 70 40 Z"
      fill="url(#gradAI)"
      stroke={color.indigo100}
      strokeWidth="2"
    />
    <rect x="75" y="45" width="50" height="60" rx="3" fill={color.black} />
    <motion.g
      fill={color.cyan300}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <circle cx="90" cy="65" r="5" />
      <circle cx="110" cy="65" r="5" />
      <rect x="85" y="85" width="30" height="5" rx="2" />
    </motion.g>
    <motion.path
      d="M100 45 L 100 20"
      stroke={color.cyan300}
      strokeWidth="3"
      strokeLinecap="round"
    >
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </motion.path>
    <motion.path
      d="M100 105 L 100 130"
      stroke={color.cyan300}
      strokeWidth="3"
      strokeLinecap="round"
    >
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.5s"
      />
    </motion.path>
  </svg>
);

const SvgGlobal = ({ className }) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <BG
      id="gradGlobe"
      stops={[
        { offset: "0%", color: color.cyan200 },
        { offset: "100%", color: color.indigo300 },
      ]}
    />
    <motion.circle
      cx="100"
      cy="75"
      r="50"
      fill="url(#gradGlobe)"
      stroke={color.indigo100}
      strokeWidth="2"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
    <path
      d="M100 25 C 80 50, 80 100, 100 125"
      fill="none"
      stroke={color.white}
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M100 25 C 120 50, 120 100, 100 125"
      fill="none"
      stroke={color.white}
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M50 75 C 75 60, 125 60, 150 75"
      fill="none"
      stroke={color.white}
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M50 75 C 75 90, 125 90, 150 75"
      fill="none"
      stroke={color.white}
      strokeWidth="2"
      opacity="0.7"
    />
    <motion.circle
      cx="60"
      cy="60"
      r="5"
      fill={color.amber500}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.circle
      cx="140"
      cy="80"
      r="5"
      fill={color.amber500}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    />
    <motion.circle
      cx="100"
      cy="110"
      r="5"
      fill={color.amber500}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
    />
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
export default function SupportForWomenAndGirls() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (22 defined, reused for 75 sections)
  const svgMap = {
    "sec1-the-rising-threat-of-cybercrime": SvgSupportiveHand,
    "sec2-emotional-and-psychological-support": SvgSupportiveHand,
    "sec3-legal-guidance-and-case-preparation": SvgLegalJustice,
    "sec4-creating-a-safe-and-supportive-environment": SvgSafeEnvironment,
    "sec5-awareness-and-cyber-education": SvgAwarenessLightbulb,
    "sec6-empowering-self-protection-and-independence": SvgSelfProtection,
    "sec7-protecting-reputation-and-privacy": SvgPrivacyLock,
    "sec8-preventing-misinformation-and-fraud": SvgMisinformation,
    "sec9-continuous-support-and-guidance": SvgSupportiveHand,
    "sec10-commitment-to-justice-and-awareness": SvgLegalJustice,
    "sec11-cyberbullying-and-online-harassment": SvgBullying,
    "sec12-cyberstalking-and-digital-surveillance": SvgStalking,
    "sec13-identity-theft-and-impersonation": SvgIdentityTheft,
    "sec14-online-blackmail-and-extortion": SvgBlackmail,
    "sec15-revenge-porn-and-non-consensual-content-sharing": SvgRevengePorn,
    "sec16-deepfake-misuse-and-digital-manipulation": SvgDeepfake,
    "sec17-phishing-and-online-scams": SvgPhishing,
    "sec18-fake-profiles-and-online-impersonation": SvgIdentityTheft,
    "sec19-social-engineering-and-emotional-manipulation": SvgSocialEngineering,
    "sec20-cyber-trafficking-and-online-exploitation": SvgTrafficking,
    "sec21-online-blackmail-and-sextortion": SvgBlackmail,
    "sec22-impersonation-and-fake-profiles": SvgIdentityTheft,
    "sec23-cyberbullying-and-character-defamation": SvgBullying,
    "sec24-deepfake-exploitation": SvgDeepfake,
    "sec25-phishing-and-romance-scams": SvgPhishing,
    "sec26-cyberstalking": SvgStalking,
    "sec27-cyber-trafficking": SvgTrafficking,
    "sec28-revenge-porn-and-non-consensual-media-sharing": SvgRevengePorn,
    "sec29-social-engineering-and-manipulation": SvgSocialEngineering,
    "sec30-identity-theft": SvgIdentityTheft,
    "sec31-online-threats-and-intimidation": SvgThreat,
    "sec32-online-job-and-modeling-scams": SvgMisinformation,
    "sec33-location-tracking-and-spyware-misuse": SvgSpyware,
    "sec34-non-consensual-data-collection": SvgPrivacyLock, // Remapped
    "sec35-cyber-financial-exploitation": SvgFinancialFraud,
    "sec36-online-harassment-in-gaming-platforms": SvgBullying,
    "sec37-deep-scam-networks-and-fake-support-groups": SvgMisinformation,
    "sec38-manipulated-reviews-and-public-humiliation": SvgBullying,
    "sec39-digital-consent-violations": SvgPrivacyLock,
    "sec40-manipulative-ai-chat-and-romance-bots": SvgAI,
    "sec41-cyber-blackmail-and-emotional-extortion": SvgBlackmail,
    "sec42-cyber-grooming-and-exploitation": SvgSocialEngineering,
    "sec43-revenge-porn-and-image-misuse": SvgRevengePorn,
    "sec44-deepfake-exploitation-and-synthetic-media-misuse": SvgDeepfake,
    "sec45-cyber-trafficking-and-exploitative-recruitment": SvgTrafficking,
    "sec46-impersonation-and-identity-misuse": SvgIdentityTheft,
    "sec47-online-lottery-dating-and-romance-scams": SvgPhishing,
    "sec48-public-shaming-and-online-defamation": SvgBullying,
    "sec49-non-consensual-screen-recording-and-sharing": SvgPrivacyLock,
    "sec50-misuse-of-cloud-storage-and-data-leaks": SvgPrivacyLock, // Remapped
    "sec51-online-reputation-manipulation-and-character-smearing": SvgBullying,
    "sec52-cyber-harassment-through-email-spoofing": SvgPhishing,
    "sec53-misuse-of-online-surveys-and-contests": SvgMisinformation,
    "sec54-exploitation-through-digital-loans-and-financial-apps": SvgFinancialFraud,
    "sec55-misleading-feminism-or-empowerment-scams": SvgMisinformation,
    "sec56-cyber-harassment-through-anonymous-forums": SvgBullying,
    "sec57-unauthorized-use-of-personal-images-in-advertisements": SvgPrivacyLock,
    "sec58-misuse-of-educational-platforms-and-online-classes":
      SvgAwarenessLightbulb,
    "sec59-unauthorized-sale-of-personal-data-on-dark-web": SvgPrivacyLock, // Remapped
    "sec60-misuse-of-artificial-intelligence-for-harassment": SvgAI,
    "sec61-digital-evidence-management": SvgDigitalEvidence,
    "sec62-blockchain-forensics-and-crypto-investigation": SvgFinancialFraud,
    "sec63-dark-web-monitoring-and-intelligence": SvgSpyware,
    "sec64-cyber-crisis-response-cell": SvgThreat,
    "sec65-digital-footprint-protection": SvgSelfProtection,
    "sec66-cyber-intelligence-and-threat-analysis": SvgAI,
    "sec67-ai-governance-and-ethical-tech-use": SvgLegalJustice, // Remapped
    "sec68-data-privacy-auditing-and-compliance": SvgPrivacyLock, // Remapped
    "sec69-digital-evidence-training-and-certification": SvgDigitalEvidence,
    "sec70-social-engineering-awareness-drive": SvgSocialEngineering,
    "sec71-cyber-law-and-policy-research-wing": SvgLegalJustice, // Remapped
    "sec72-digital-child-protection-cell": SvgSafeEnvironment,
    "sec73-womens-cyber-safety-taskforce": SvgSafeEnvironment,
    "sec74-cybersecurity-policy-advocacy": SvgLegalJustice, // Remapped
    "sec75-international-collaboration-and-digital-diplomacy": SvgGlobal,
  };

  // Extract hero content from the first section
  const firstSection = supportForWomenAndGirlsData[0];
  const heroTagline = firstSection.content.split("\n")[0].replace(/"/g, "");
  const heroPills = [
    "Confidential Support",
    "Legal Guidance",
    "Cyber Awareness",
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
        <Link to="/report/cybercrime-reporter" className="hover:underline text-indigo-600">
          cyber-crime
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          Support for Women & Girls
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
              <VideoHeroSupport
                src="https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-in-a-dark-room-4050/1080p.mp4" // Placeholder video
                // poster="/assets/video/support-hero.jpg" // Placeholder poster
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {supportForWomenAndGirlsData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || SvgSupportiveHand;
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

      {/* The pagination is intentionally removed to match the structure 
        of EmploymentEligibilityCriteria.jsx, which lists all sections.
      */}
    </motion.section>
  );
}