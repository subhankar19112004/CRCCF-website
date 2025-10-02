// src/pages/privacy/DataPrivacyProtectionSupport.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

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
  cyan25: "#F5FEFF",
  cyan50: "#ECFEFF",
  cyan100: "#CFFAFE",
  cyan300: "#67E8F9",
  cyan500: "#06B6D4",
  cyan700: "#0E7490",
  indigo25: "#F7F8FF",
  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo300: "#A5B4FC",
  indigo400: "#818CF8",
  indigo600: "#4F46E5",
  indigo700: "#4338CA",
  indigo800: "#3730A3",
  emerald25: "#F3FCF7",
  emerald50: "#ECFDF5",
  emerald100: "#D1FAE5",
  emerald300: "#86EFAC",
  emerald400: "#34D399",
  emerald600: "#059669",
  amber50: "#FFFBEB",
  amber100: "#FEF3C7",
  rose50: "#FFF1F2",
  rose100: "#FFE4E6",
  rose400: "#FB7185",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate700: "#334155",
  slate900: "#0F172A",
  white: "#FFFFFF",
  black: "#000000",
};

/* ================= DATA (converted from your plain text) ================= */
const data = {
  title: "Data Privacy & Protection Support – CRCCF",
  tagline: "Safeguarding Digital Information and Empowering Victims",
  pills: [
    "Privacy",
    "Breach Response",
    "Cybersecurity",
    "Legal Remedies",
    "Emotional Care",
    "Monitoring",
  ],
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Safeguarding Personal Data",
      content: `In today’s digital environment, cybercrime increasingly targets personal, financial, and sensitive information. The subcard “Data Privacy & Protection Support” focuses on providing victims with guidance and tools to secure their data, prevent further breaches, and reclaim control over their digital privacy. Our organization ensures structured support to help victims navigate the complexities of data security effectively.
CRCCF combines professional legal guidance, cybersecurity advice, and emotional support to empower victims. By addressing both preventive and reactive measures, victims gain confidence and understanding to protect their information while minimizing exposure to cyber threats.`,
      svg: "IntroSVG",
    },
    {
      id: "right-privacy",
      heading: "2. Right to Data Privacy",
      content: `Every victim has the fundamental right to privacy and control over personal and sensitive digital information. Data privacy support includes guidance on safeguarding devices, accounts, and communications from unauthorized access or misuse.
Our organization educates victims about legal protections under privacy laws and provides actionable strategies for securing information across platforms. CRCCF ensures that victims can exercise their rights effectively while maintaining confidentiality and control over their digital lives.`,
      svg: "RightsSVG",
    },
    {
      id: "breach-response",
      heading: "3. Identifying and Responding to Data Breaches",
      content: `Cyber incidents such as identity theft, hacking, or unauthorized disclosure put victims at risk. Victims have the right to expert assistance in detecting breaches, assessing the extent of exposure, and implementing corrective measures.
CRCCF guides individuals in identifying vulnerabilities, securing accounts, and mitigating damages caused by data breaches. Prompt detection and professional advice enable victims to minimize losses and regain confidence in their digital environment.`,
      svg: "BreachSVG",
    },
    {
      id: "cyber-guidance",
      heading: "4. Cybersecurity Guidance and Preventive Measures",
      content: `Preventing future breaches is essential for maintaining digital safety. Victims have the right to receive tailored guidance on best practices, including strong passwords, two-factor authentication, encryption, and secure storage.
Our organization provides personalized strategies and training to enhance online security. CRCCF empowers victims to adopt preventive measures, reduce vulnerabilities, and maintain safe interactions in digital spaces.`,
      svg: "GuidanceSVG",
    },
    {
      id: "legal-assist",
      heading: "5. Legal Assistance for Data Protection",
      content: `Victims have the right to pursue legal remedies for violations of data privacy. Guidance includes filing complaints, seeking compensation, and holding offenders accountable under relevant cyber laws.
CRCCF ensures that legal processes are clear, accessible, and effective. Professional assistance reinforces victims’ rights, supports justice, and provides reassurance that their data protection concerns are taken seriously.`,
      svg: "LegalSVG",
    },
    {
      id: "emotional",
      heading: "6. Psychological and Emotional Support",
      content: `Data breaches can cause stress, anxiety, and feelings of vulnerability. Victims have the right to professional emotional support to manage these challenges effectively.
Our cyber-psychology experts provide counselling, coping strategies, and continuous guidance. CRCCF helps victims regain confidence, reduce fear, and maintain control over both personal and digital aspects of their lives.`,
      svg: "EmotionalSVG",
    },
    {
      id: "monitoring",
      heading: "7. Continuous Monitoring and Follow-Up",
      content: `Digital safety is an ongoing responsibility. Victims have the right to continuous monitoring, timely alerts, and proactive follow-up.
Our organization provides updates on emerging threats, guidance for risk management, and recommendations for maintaining secure practices. CRCCF ensures that victims remain informed, vigilant, and empowered to act promptly against new cyber risks.`,
      svg: "MonitoringSVG",
    },
    {
      id: "org-role",
      heading: "8. Organization’s Role in Data Privacy and Protection",
      content: `CRCCF is committed to delivering comprehensive data privacy and protection support. By integrating legal guidance, cybersecurity advice, monitoring, and emotional support, we create a robust framework for victim safety.
Every service is conducted with professionalism, confidentiality, and empathy. Our organization ensures that victims feel empowered, secure, and equipped to regain control over their digital information.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Data Protection",
      content: `Data Privacy & Protection Support ensures that cybercrime victims can safeguard sensitive information, seek legal remedies, and prevent future breaches. Upholding these rights allows victims to navigate the digital world with confidence, safety, and resilience.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate services, empowering every victim to secure their data and maintain digital integrity.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ============================== SVG helpers ============================== */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => (
        <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />
      ))}
    </linearGradient>
  </defs>
);

const SoftGlow = ({ id = "glow", std = 7, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix
        in="b"
        type="matrix"
        values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`}
      />
    </filter>
  </defs>
);

const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke, sw = 0, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);

/* ========================= HERO: Complex “Video” SVG =========================
   Narrative: A central shield + lock protects a flowing data stream (packets).
   Panels show “privacy settings”, “2FA success”, and “breach alert resolved”.
   - If prefers-reduced-motion → pure SVG animation only (no <video>).
   - If a src is provided you can mask a video, but we pass none (pure SVG).
============================================================================= */
const VideoHeroPrivacy = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Data Privacy & Protection — Safeguarding Information";
  const desc =
    "Animated data packets flowing into an encrypted shield; panels show privacy settings, 2FA, and resolved alerts.";

  if (prefersReduced || !src) {
    // Pure SVG “video-like” animation
    return (
      <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleDP vhDescDP" className="w-full h-auto">
        <title id="vhTitleDP">{title}</title>
        <desc id="vhDescDP">{desc}</desc>
        <defs>
          <linearGradient id="dpGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo50}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.cyan50}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald50} />
          </linearGradient>
          <filter id="softDP" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
          </filter>
          <linearGradient id="packet" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color.cyan100} />
            <stop offset="100%" stopColor={color.cyan300} />
          </linearGradient>
        </defs>

        <g filter="url(#softDP)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#dpGrad)" />
        </g>

        {/* Flowing data lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(60,${140 + i * 42})`}>
            <rect x="0" y="-6" width="640" height="12" rx="6" fill={color.white} opacity="0.4" />
            {/* packets */}
            {[0, 1, 2, 3, 4, 5].map((j) => (
              <rect
                key={j}
                x="0"
                y="-5"
                width="24"
                height="10"
                rx="4"
                fill="url(#packet)"
                opacity="0.95"
              >
                <animate
                  attributeName="x"
                  values="-40;640"
                  dur={`${3 + i * 0.4 + j * 0.2}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>
        ))}

        {/* Central encrypted shield */}
        <g transform="translate(800,240)">
          <path
            d="M0 -90l84 34v48c0 56-36 102-84 126-48-24-84-70-84-126v-48l84-34z"
            fill={color.white}
            stroke={color.indigo400}
            strokeWidth="5"
          />
          {/* lock */}
          <g>
            <rect x="-30" y="-10" width="60" height="58" rx="12" fill={color.indigo100} stroke={color.indigo600} strokeWidth="4" />
            <path d="M-10 -10v-16a20 20 0 0 1 40 0v16" stroke={color.indigo700} strokeWidth="5" fill="none" />
            <circle cx="0" cy="18" r="6" fill={color.indigo700}>
              <animate attributeName="cy" values="18;20;18" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </g>
          {/* shield pulse */}
          <circle cx="0" cy="-24" r="10" fill={color.emerald400} opacity="0.9">
            <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Right side status tiles */}
        <g transform="translate(760,60)">
          {/* Privacy settings */}
          <g transform="translate(0,0)">
            <rect x="0" y="0" width="260" height="70" rx="14" fill={color.white} stroke={color.slate300} />
            <rect x="18" y="18" width="150" height="12" rx="6" fill={color.indigo600} />
            <rect x="18" y="40" width="110" height="10" rx="5" fill={color.slate500} />
            <circle cx="224" cy="35" r="10" fill={color.emerald400} />
          </g>
          {/* 2FA success */}
          <g transform="translate(0,88)">
            <rect x="0" y="0" width="260" height="70" rx="14" fill={color.white} stroke={color.slate300} />
            <rect x="18" y="18" width="100" height="12" rx="6" fill={color.cyan700} />
            <rect x="18" y="40" width="140" height="10" rx="5" fill={color.slate500} />
            <path d="M210 24l10 10 18-18" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
          </g>
          {/* Alert resolved */}
          <g transform="translate(0,176)">
            <rect x="0" y="0" width="260" height="70" rx="14" fill={color.white} stroke={color.slate300} />
            <rect x="18" y="18" width="130" height="12" rx="6" fill={color.rose400} />
            <rect x="18" y="40" width="120" height="10" rx="5" fill={color.slate500} />
            <g transform="translate(210,18)">
              <circle cx="0" cy="16" r="14" fill={color.emerald300} />
              <path d="M-8 16l6 6 12-12" stroke={color.white} strokeWidth="4" fill="none" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    );
  }

  // (Optional masked <video> version — not used here since no src is passed)
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgDP" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo50} />
          <stop offset="60%" stopColor={color.cyan50} />
          <stop offset="100%" stopColor={color.emerald50} />
        </linearGradient>
        <filter id="softDP2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
        </filter>
        <clipPath id="stageDP2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softDP2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgDP)" />
      </g>

      <g clipPath="url(#stageDP2)">
        {poster ? (
          <image
            href={poster}
            x="0"
            y="0"
            width="1100"
            height="520"
            preserveAspectRatio="xMidYMid slice"
            opacity="0.9"
          />
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
            style={{ width: "100%", height: "100%", objectFit: "cover", display: src ? "block" : "none" }}
          >
            {src ? <source src={src} type="video/mp4" /> : null}
          </video>
        </foreignObject>
      </g>

      {/* Overlay privacy glyphs */}
      <g transform="translate(770,60)">
        <g transform="translate(40,16)">
          <circle cx="0" cy="0" r="28" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="ui-sans-serif,system-ui"
            fontWeight="800"
            fontSize="14"
            fill={color.indigo600}
          >
            E2E
          </text>
        </g>
        <g transform="translate(0,72)">
          <rect x="0" y="0" width="140" height="46" rx="12" fill={color.white} stroke={color.slate300} />
          <rect x="16" y="12" width="80" height="10" rx="5" fill={color.indigo600} />
          <rect x="16" y="28" width="64" height="8" rx="4" fill={color.slate500} />
        </g>
        <g transform="translate(160,72)">
          <rect x="0" y="0" width="46" height="46" rx="10" fill={color.cyan100} />
          <path d="M15 16c12 8 16 12 18 18" stroke={color.indigo600} strokeWidth="3" fill="none" />
        </g>
      </g>
    </svg>
  );
};

/* ===================== Complex Section Illustrations (unique) ===================== */
/* 1) Intro */
const IntroSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Introduction: Safeguarding Personal Data" className="w-full h-full" {...props}>
    <BG id="gIntroDP" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowIntroDP" std={9} alpha={0.45} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIntroDP)" />
    {/* Data vault card */}
    <g transform="translate(80,80)" filter="url(#glowIntroDP)">
      <Card x="0" y="0" w="300" h="180" r="18" />
      <rect x="24" y="24" width="190" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      {/* small lock */}
      <g transform="translate(230,112)">
        <rect x="0" y="0" width="56" height="44" rx="10" fill={color.white} stroke={color.slate300} />
        <path d="M12 0v-10a16 16 0 0 1 32 0V0" stroke={color.indigo600} strokeWidth="4" fill="none" />
      </g>
    </g>
    {/* Flowing packets into shield */}
    <g transform="translate(430,100)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0,${i * 34})`}>
          <rect x="0" y="10" width="260" height="8" rx="4" fill={color.white} opacity="0.5" />
          {[0, 1, 2, 3].map((j) => (
            <rect key={j} x="0" y="10" width="18" height="8" rx="4" fill={color.cyan300} opacity="0.95">
              <animate attributeName="x" values="-30;260" dur={`${2 + i * 0.3 + j * 0.2}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>
      ))}
      <g transform="translate(300,16)">
        <path
          d="M0 -30l48 18v20c0 24-16 44-48 54-32-10-48-30-48-54v-20l48-18z"
          fill={color.white}
          stroke={color.indigo400}
          strokeWidth="4"
        />
        <circle cx="0" cy="0" r="10" fill={color.emerald400}>
          <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>
  </svg>
);

/* 2) Right to Data Privacy */
const RightsSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Data Privacy" className="w-full h-full" {...props}>
    <BG id="gRightsDP" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowRightsDP" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRightsDP)" />
    <g transform="translate(90,90)" filter="url(#glowRightsDP)">
      <Card x="0" y="0" w="300" h="160" r="18" />
      <rect x="24" y="24" width="210" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      {/* person + shield */}
      <g transform="translate(230,88)">
        <circle cx="0" cy="-18" r="12" fill="#EBC4A0" />
        <rect x="-12" y="-4" width="24" height="18" rx="6" fill={color.cyan100} />
        <path d="M-28 24l28-10 28 10v10c0 10-8 20-28 28-20-8-28-18-28-28z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      </g>
    </g>
    {/* toggles */}
    <g transform="translate(460,110)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0,${i * 42})`}>
          <rect x="0" y="0" width="220" height="30" rx="15" fill={color.white} stroke={color.slate300} />
          <circle cx={i % 2 ? 190 : 30} cy="15" r="12" fill={i % 2 ? color.emerald400 : color.slate400}>
            <animate
              attributeName="cx"
              values={i % 2 ? "30;190;30" : "190;30;190"}
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </g>
  </svg>
);

/* 3) Breach Identification & Response */
const BreachSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Identifying and Responding to Data Breaches" className="w-full h-full" {...props}>
    <BG id="gBreachDP" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowBreachDP" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gBreachDP)" />
    {/* radar */}
    <g transform="translate(200,190)">
      <circle cx="0" cy="0" r="90" fill={color.white} opacity="0.8" />
      <circle cx="0" cy="0" r="70" fill="none" stroke={color.indigo300} />
      <circle cx="0" cy="0" r="50" fill="none" stroke={color.indigo300} />
      <path d="M0 0L90 0" stroke={color.cyan500} strokeWidth="6">
        <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s" repeatCount="indefinite" />
      </path>
      <circle cx="50" cy="-40" r="6" fill={color.rose400}>
        <animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </g>
    {/* response steps */}
    <g transform="translate(420,110)" filter="url(#glowBreachDP)">
      <Card x="0" y="0" w="320" h="180" r="18" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(20,${24 + i * 48})`}>
          <rect x="0" y="0" width="200" height="12" rx="6" fill={color.indigo600} />
          <rect x="0" y="20" width="160" height="10" rx="5" fill={color.slate500} />
          <path d="M230 8l10 10 18-18" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
  </svg>
);

/* 4) Cybersecurity Guidance */
const GuidanceSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Cybersecurity Guidance and Preventive Measures" className="w-full h-full" {...props}>
    <BG id="gGuideDP" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowGuideDP" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gGuideDP)" />
    {/* password bar + 2FA code */}
    <g transform="translate(80,110)" filter="url(#glowGuideDP)">
      <rect x="0" y="0" width="320" height="56" rx="14" fill={color.white} stroke={color.slate300} />
      {[18, 48, 78, 108, 138, 168, 198, 228].map((x, i) => (
        <circle key={i} cx={x} cy="28" r="6" fill={color.indigo600} />
      ))}
      <g transform="translate(340,6)">
        <rect x="0" y="0" width="140" height="44" rx="12" fill={color.indigo100} stroke={color.indigo400} />
        <text x="70" y="28" fontFamily="ui-sans-serif,system-ui" fontWeight="700" fontSize="16" fill={color.indigo700} textAnchor="middle">
          2FA: <tspan>••</tspan>
          <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
        </text>
      </g>
    </g>
    {/* checklist */}
    <g transform="translate(120,220)">
      {["Strong Passwords", "Encryption", "Secure Storage"].map((t, i) => (
        <g key={t} transform={`translate(${i * 210},0)`}>
          <rect x="0" y="0" width="180" height="100" rx="16" fill={color.white} stroke={color.slate300} />
          <rect x="18" y="20" width="120" height="12" rx="6" fill={color.indigo600} />
          <path d="M20 70l14 14 24-24" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
  </svg>
);

/* 5) Legal Assistance */
const LegalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Legal Assistance for Data Protection" className="w-full h-full" {...props}>
    <BG id="gLegalDP" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalDP" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalDP)" />
    <g transform="translate(80,100)" filter="url(#glowLegalDP)">
      <Card x="0" y="40" w="300" h="160" r="18" />
      <rect x="24" y="70" width="200" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="98" width="170" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(220,118)">
        <circle cx="0" cy="0" r="16" fill={color.emerald400} />
        <path d="M-8 0l6 6 12-12" stroke={color.white} strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
    </g>
    {/* gavel + document */}
    <g transform="translate(480,90)">
      <rect x="0" y="0" width="180" height="220" rx="16" fill={color.white} stroke={color.slate300} />
      <rect x="20" y="24" width="120" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="48" width="100" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="70" width="90" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(200,60) rotate(-20)">
        <rect x="-14" y="-14" width="28" height="88" rx="10" fill={color.rose100} stroke={color.rose400} />
        <rect x="-60" y="56" width="120" height="16" rx="8" fill={color.indigo300} />
      </g>
    </g>
  </svg>
);

/* 6) Emotional Support */
const EmotionalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gEmoDP" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowEmoDP" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEmoDP)" />
    <g transform="translate(100,110)" filter="url(#glowEmoDP)">
      <rect x="0" y="0" width="280" height="140" rx="18" fill={color.white} stroke={color.slate300} />
      <rect x="22" y="24" width="170" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="52" width="150" height="10" rx="5" fill={color.slate500} />
      <path d="M22 94h120" stroke={color.slate400} strokeWidth="6" />
    </g>
    <g transform="translate(460,120)">
      <rect x="0" y="0" width="220" height="120" rx="16" fill={color.white} stroke={color.slate300} />
      <g transform="translate(150,18)">
        <path
          d="M0 16c0-10 8-16 16-16 6 0 12 4 16 10 6-6 10-10 16-10 10 0 16 8 16 16 0 22-32 38-32 38S0 38 0 16z"
          fill={color.rose100}
          stroke={color.rose400}
        />
        <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2s" repeatCount="indefinite" />
      </g>
      <rect x="18" y="24" width="110" height="12" rx="6" fill={color.cyan500} />
      <rect x="18" y="48" width="90" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

/* 7) Continuous Monitoring */
const MonitoringSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Continuous Monitoring and Follow-Up" className="w-full h-full" {...props}>
    <BG id="gMonDP" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowMonDP" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gMonDP)" />
    <g transform="translate(90,80)">
      <Card x="0" y="0" w="280" h="180" r="18" />
      <path d="M0 44h280" stroke={color.slate200} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={20 + i * 62}
          y="60"
          width="42"
          height="28"
          rx="8"
          fill={i === 2 ? color.emerald100 : color.indigo100}
        />
      ))}
    </g>
    <g transform="translate(420,110)" filter="url(#glowMonDP)">
      <Card x="0" y="0" w="320" h="180" r="18" />
      <rect x="20" y="28" width="220" height="12" rx="6" fill={color.indigo600} />
      <rect x="20" y="56" width="180" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="80" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="20" y="112" width="130" height="14" rx="7" fill={color.emerald400} />
    </g>
    <g transform="translate(420,300)">
      <rect x="0" y="0" width="320" height="8" rx="4" fill={color.slate300} />
      {[0, 80, 160, 240, 320].map((x, i) => (
        <circle key={i} cx={x} cy="4" r="7" fill={color.cyan500} />
      ))}
    </g>
    {/* tiny bell */}
    <g transform="translate(770,60)">
      <path d="M0 0c20 0 28 12 28 28v16h-56v-16C-28 12 -20 0 0 0z" fill={color.indigo100} stroke={color.indigo400} />
      <circle cx="0" cy="48" r="6" fill={color.indigo600}>
        <animate attributeName="cy" values="48;50;48" dur="1.2s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

/* 8) Organization Role */
const OrgRoleSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Organization’s Role in Data Privacy and Protection" className="w-full h-full" {...props}>
    <BG id="gRoleDP" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowRoleDP" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRoleDP)" />
    {/* Hub & spokes */}
    <g transform="translate(180,180)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={i} transform={`rotate(${a}) translate(0 -90)`}>
          <circle cx="0" cy="0" r="16" fill={i % 2 ? color.indigo400 : color.emerald400} />
          <path d="M0 16v50" stroke={color.slate400} strokeWidth="3" />
        </g>
      ))}
    </g>
    <g transform="translate(380,90)" filter="url(#glowRoleDP)">
      <Card x="0" y="0" w="360" h="200" r="18" />
      <rect x="24" y="26" width="220" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="54" width="190" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="170" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="150" height="14" rx="7" fill={color.emerald400} />
    </g>
  </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Conclusion: Empowering Victims Through Data Protection" className="w-full h-full" {...props}>
    <BG id="gConcDP" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConcDP)" />
    <rect x="90" y="90" width="16" height="180" rx="8" fill={color.indigo600} />
    <path d="M106 92h180l-24 24 24 24H106z" fill={color.cyan500} />
    <g transform="translate(300,240)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9">
      <path d="M0 0c60-40 120-40 180 0" />
      <path d="M180 0c60-40 120-40 120 0" />
    </g>
    <g transform="translate(560,120)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${i * 46},${i % 2 ? 22 : 0})`}>
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
    <p key={i} className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
      {p}
    </p>
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
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
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
export default function DataPrivacyProtectionSupport() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map id->component for clarity (kept similar naming to your style)
  const svgMap = {
    IntroSVG,
    RightsSVG,
    BreachSVG,
    GuidanceSVG,
    LegalSVG,
    EmotionalSVG,
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
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true"> › </span>
        <Link to="/report/victim-rights-support" className="hover:underline">
          Victim Rights & Support
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          Data Privacy & Protection
        </span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {data.pills.map((pill) => (
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
              <VideoHeroPrivacy />
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
              RightsSVG,
              BreachSVG,
              GuidanceSVG,
              LegalSVG,
              EmotionalSVG,
              MonitoringSVG,
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides privacy & protection support and procedural guidance.
            This does not replace law enforcement, court procedures, or independent legal counsel. All information is
            handled confidentially and in compliance with applicable laws and best practices.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
