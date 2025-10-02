// src/pages/response/CyberExtortionBlackmailResponse.jsx
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
  indigo25: "#F7F8FF",
  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo300: "#A5B4FC",
  indigo400: "#818CF8",
  indigo600: "#4F46E5",
  indigo800: "#3730A3",
  emerald25: "#F3FCF7",
  emerald50: "#ECFDF5",
  emerald100: "#D1FAE5",
  emerald300: "#86EFAC",
  emerald400: "#34D399",
  emerald600: "#059669",
  amber50: "#FFFBEB",
  amber200: "#FDE68A",
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
  title: "Cyber Extortion & Blackmail Response Team – CRCCF",
  tagline: "Immediate Assistance and Holistic Support for Victims",
  pills: [
    "Rapid Response",
    "Legal",
    "Evidence",
    "Cybersecurity",
    "Psychological Care",
    "Monitoring",
  ],
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Immediate Response to Cyber Threats",
      content: `Cyber extortion and blackmail pose serious threats to the personal, financial, and emotional security of individuals. The subcard “Cyber Extortion & Blackmail Response Team” emphasizes providing rapid, professional support to victims facing these digital threats. Our organization ensures that victims have access to legal guidance, technical expertise, and psychological counselling to respond effectively and prevent further exploitation.
CRCCF combines timely intervention, expert assistance, and preventive strategies to safeguard victims. By addressing both immediate risks and long-term recovery, victims regain control over their digital and personal environments while restoring confidence and safety.`,
      svg: "IntroSVG",
    },
    {
      id: "immediate",
      heading: "2. Right to Immediate Intervention",
      content: `Victims of cyber extortion or blackmail have the right to prompt assistance to protect themselves and mitigate ongoing risks. Rapid intervention is critical to prevent perpetrators from escalating threats or exploiting vulnerabilities.
Our 24/7 response team is available to help victims report incidents, secure compromised devices, and implement protective measures. CRCCF ensures swift action, reducing potential harm and enabling victims to regain a sense of control and security quickly.`,
      svg: "ImmediateSVG",
    },
    {
      id: "legal",
      heading: "3. Legal Guidance and Complaint Filing",
      content: `Victims have the right to pursue legal remedies and ensure accountability for offenders. Legal guidance is essential for navigating cybercrime laws, filing complaints, and understanding protections under criminal statutes.
CRCCF provides professional support in drafting formal complaints, coordinating with law enforcement, and advocating for protective actions. Structured legal assistance ensures that victims’ cases are handled efficiently, strengthening their position for justice.`,
      svg: "LegalSVG",
    },
    {
      id: "evidence",
      heading: "4. Evidence Collection and Preservation",
      content: `Proper documentation is crucial in cases of cyber extortion and blackmail. Victims have the right to expert assistance in preserving emails, messages, screenshots, financial records, and other digital proof.
Our response team ensures that evidence is collected systematically, securely, and in a legally admissible format. CRCCF strengthens victims’ cases, enabling effective prosecution and reinforcing their legal position.`,
      svg: "EvidenceSVG",
    },
    {
      id: "technical",
      heading: "5. Technical and Cybersecurity Support",
      content: `Cyber extortion often involves unauthorized access to accounts, devices, or sensitive information. Victims have the right to professional technical support to secure systems, recover compromised accounts, and implement cybersecurity measures.
CRCCF guides victims on password management, two-factor authentication, secure storage, and monitoring for suspicious activity. By reinforcing digital defenses, victims prevent further exploitation and regain confidence in their online environment.`,
      svg: "TechnicalSVG",
    },
    {
      id: "emotional",
      heading: "6. Psychological and Emotional Support",
      content: `The stress and fear associated with extortion and blackmail can be overwhelming. Victims have the right to counselling and emotional guidance to manage trauma and anxiety.
Our organization provides therapy, coping strategies, and continuous emotional support, helping victims regain confidence and a sense of safety. CRCCF ensures that psychological well-being is addressed alongside legal and technical recovery.`,
      svg: "EmotionalSVG",
    },
    {
      id: "monitoring",
      heading: "7. Continuous Monitoring and Follow-Up",
      content: `Victims have the right to ongoing support and updates until resolution. Continuous monitoring helps track case progress and ensures that protective measures are effective.
CRCCF maintains transparent communication, provides updates on legal actions, and offers guidance throughout the recovery process. Regular follow-up fosters trust, reduces uncertainty, and ensures that victims remain informed and empowered.`,
      svg: "MonitoringSVG",
    },
    {
      id: "org-role",
      heading: "8. CRCCF’s Role in Response and Support",
      content: `Our organization is committed to delivering holistic assistance through the Cyber Extortion & Blackmail Response Team. By combining legal guidance, technical expertise, emotional counseling, and ongoing monitoring, we create a comprehensive framework for victim protection.
Every intervention is handled with professionalism, empathy, and confidentiality. CRCCF ensures that victims feel secure, supported, and empowered to confront cyber threats and navigate recovery effectively.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Protecting Victims Against Cyber Extortion",
      content: `The Cyber Extortion & Blackmail Response Team ensures victims receive immediate support, legal remedies, technical assistance, and emotional guidance. Upholding these rights enables individuals to protect themselves, recover from digital threats, and pursue justice confidently.
CRCCF remains dedicated to delivering professional, comprehensive, and compassionate services, empowering every victim to address extortion and blackmail safely, effectively, and with restored confidence.`,
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
   Narrative:
   - Threat panel: “PAY OR ELSE” bubble + countdown timer.
   - Victim device receiving demand; agent console triggers countermeasures.
   - Shield + law (gavel) + forensics hash ticker; alerts flip from red→green.
   If prefers-reduced-motion or no video: pure SVG with animated shapes.
============================================================================= */
const VideoHeroExtortion = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Cyber Extortion & Blackmail — Rapid Response";
  const desc =
    "Threat message and countdown; response console activates countermeasures; shield + legal icons confirm protection.";

  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleCE vhDescCE" className="w-full h-auto">
        <title id="vhTitleCE">{title}</title>
        <desc id="vhDescCE">{desc}</desc>
        <defs>
          <linearGradient id="ceGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo50}>
              <animate attributeName="offset" values="0;0.2;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.cyan50}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald50} />
          </linearGradient>
          <filter id="softCE" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
          </filter>
        </defs>

        <g filter="url(#softCE)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#ceGrad)" />
        </g>

        {/* Left: Threat bubble + countdown */}
        <g transform="translate(70,90)">
          <rect x="0" y="0" width="340" height="140" rx="18" fill={color.white} stroke={color.slate300} />
          <text x="24" y="44" fontFamily="ui-sans-serif,system-ui" fontWeight="800" fontSize="22" fill={color.rose400}>
            PAY OR ELSE
          </text>
          <rect x="24" y="70" width="180" height="12" rx="6" fill={color.slate500} />
          <g transform="translate(260,24)">
            <circle cx="40" cy="40" r="36" fill={color.rose100} stroke={color.rose400} strokeWidth="5" />
            <g>
              <line x1="40" y1="40" x2="40" y2="14" stroke={color.rose400} strokeWidth="4">
                <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite" />
              </line>
              <line x1="40" y1="40" x2="64" y2="40" stroke={color.rose400} strokeWidth="3">
                <animateTransform attributeName="transform" type="rotate" values="0;360" dur="60s" repeatCount="indefinite" />
              </line>
            </g>
          </g>
        </g>

        {/* Center: Victim device */}
        <g transform="translate(450,80)">
          <rect x="0" y="0" width="260" height="180" rx="18" fill={color.white} stroke={color.slate300} />
          <rect x="20" y="24" width="180" height="12" rx="6" fill={color.indigo600} />
          <rect x="20" y="48" width="160" height="10" rx="5" fill={color.slate500} />
          <rect x="20" y="72" width="140" height="10" rx="5" fill={color.slate500} />
          {/* flashing alert */}
          <g transform="translate(200,120)">
            <circle cx="18" cy="18" r="14" fill={color.rose400}>
              <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* Right: Response console */}
        <g transform="translate(760,60)">
          <rect x="0" y="0" width="300" height="120" rx="16" fill={color.white} stroke={color.slate300} />
          <rect x="20" y="24" width="160" height="12" rx="6" fill={color.indigo600} />
          <rect x="20" y="48" width="120" height="10" rx="5" fill={color.slate500} />
          <g transform="translate(220,22)">
            <rect x="0" y="0" width="60" height="28" rx="8" fill={color.emerald100} stroke={color.emerald400} />
            <text x="30" y="19" textAnchor="middle" fontFamily="ui-sans-serif,system-ui" fontWeight="700" fontSize="12" fill={color.emerald600}>
              ACTION
            </text>
          </g>
        </g>

        {/* Bottom: Shield + gavel + hash ticker */}
        <g transform="translate(320,320)">
          <path d="M0 -60l64 24v28c0 36-22 66-64 84-42-18-64-48-64-84v-28l64-24z" fill={color.white} stroke={color.indigo400} strokeWidth="5" />
          <circle cx="0" cy="-24" r="10" fill={color.emerald400}>
            <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        <g transform="translate(540,320)">
          <rect x="0" y="0" width="240" height="54" rx="12" fill={color.white} stroke={color.slate300} />
          <text x="16" y="34" fontFamily="ui-mono,monospace" fontSize="16" fill={color.slate700}>
            HASH:
            <tspan>
              {" "}
              a9f…
              <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
            </tspan>
          </text>
        </g>
        <g transform="translate(820,316) rotate(-20)">
          <rect x="-14" y="-14" width="28" height="88" rx="10" fill={color.rose100} stroke={color.rose400} />
          <rect x="-60" y="56" width="120" height="16" rx="8" fill={color.indigo300} />
        </g>
      </svg>
    );
  }

  // (Optional masked <video>) Not used here since no src is passed.
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgCE" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo50} />
          <stop offset="60%" stopColor={color.cyan50} />
          <stop offset="100%" stopColor={color.emerald50} />
        </linearGradient>
        <filter id="softCE2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0" />
        </filter>
        <clipPath id="stageCE2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softCE2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgCE)" />
      </g>

      <g clipPath="url(#stageCE2)">
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
            style={{ width: "100%", height: "100%", objectFit: "cover", display: src ? "block" : "none" }}
          >
            {src ? <source src={src} type="video/mp4" /> : null}
          </video>
        </foreignObject>
      </g>

      {/* Overlay cues */}
      <g transform="translate(770,60)">
        <g transform="translate(40,16)">
          <circle cx="0" cy="0" r="28" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
          <text x="0" y="6" textAnchor="middle" fontFamily="ui-sans-serif,system-ui" fontWeight="800" fontSize="12" fill={color.indigo600}>
            24/7
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
  <svg viewBox="0 0 820 380" role="img" aria-label="Introduction: Immediate Response to Cyber Threats" className="w-full h-full" {...props}>
    <BG id="gIntroCE" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowIntroCE" std={9} alpha={0.45} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gIntroCE)" />
    {/* Threat on device + agent reply */}
    <g transform="translate(80,80)" filter="url(#glowIntroCE)">
      <Card x="0" y="0" w="300" h="180" r="18" />
      <rect x="24" y="24" width="190" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(220,110)">
        <circle cx="0" cy="0" r="14" fill={color.rose400}>
          <animate attributeName="opacity" values="1;0.35;1" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>
    <g transform="translate(440,100)">
      <rect x="0" y="0" width="260" height="120" rx="16" fill={color.white} stroke={color.slate300} />
      <rect x="18" y="24" width="150" height="12" rx="6" fill={color.emerald600} />
      <rect x="18" y="48" width="120" height="10" rx="5" fill={color.slate500} />
      <path d="M200 30l10 10 18-18" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

/* 2) Immediate Intervention */
const ImmediateSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Right to Immediate Intervention" className="w-full h-full" {...props}>
    <BG id="gImmCE" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowImmCE" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gImmCE)" />
    {/* siren */}
    <g transform="translate(120,110)">
      <rect x="0" y="40" width="140" height="32" rx="8" fill={color.slate300} />
      <rect x="18" y="0" width="104" height="64" rx="16" fill={color.rose100} stroke={color.rose400} />
      <circle cx="70" cy="16" r="6" fill={color.rose400}>
        <animate attributeName="opacity" values="1;0.25;1" dur="0.9s" repeatCount="indefinite" />
      </circle>
    </g>
    {/* steps panel */}
    <g transform="translate(360,90)" filter="url(#glowImmCE)">
      <Card x="0" y="0" w="360" h="200" r="18" />
      {["Report Incident", "Secure Devices", "Protect Accounts"].map((t, i) => (
        <g key={t} transform={`translate(20,${26 + i * 56})`}>
          <rect x="0" y="0" width="200" height="12" rx="6" fill={color.indigo600} />
          <rect x="0" y="20" width="160" height="10" rx="5" fill={color.slate500} />
          <path d="M230 8l10 10 18-18" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
  </svg>
);

/* 3) Legal Guidance */
const LegalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Legal Guidance and Complaint Filing" className="w-full h-full" {...props}>
    <BG id="gLegalCE" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLegalCE" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalCE)" />
    <g transform="translate(80,100)" filter="url(#glowLegalCE)">
      <Card x="0" y="40" w="300" h="160" r="18" />
      <rect x="24" y="70" width="220" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="98" width="180" height="10" rx="5" fill={color.slate500} />
    </g>
    {/* gavel + court doc */}
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

/* 4) Evidence Collection */
const EvidenceSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Evidence Collection and Preservation" className="w-full h-full" {...props}>
    <BG id="gEvCE" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowEvCE" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEvCE)" />
    {/* evidence tiles */}
    <g transform="translate(90,90)" filter="url(#glowEvCE)">
      {["Emails", "Chats", "Screenshots", "Bank Records"].map((t, i) => (
        <g key={t} transform={`translate(${(i % 2) * 180},${Math.floor(i / 2) * 110})`}>
          <rect x="0" y="0" width="160" height="90" rx="16" fill={color.white} stroke={color.slate300} />
          <rect x="18" y="20" width="120" height="12" rx="6" fill={color.indigo600} />
          <path d="M20 64l14 14 24-24" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
    {/* hash chain */}
    <g transform="translate(470,120)">
      <rect x="0" y="0" width="300" height="46" rx="12" fill={color.white} stroke={color.slate300} />
      {[18, 78, 138, 198, 258].map((x, i) => (
        <circle key={i} cx={x} cy="23" r="6" fill={color.indigo600}>
          <animate attributeName="r" values="6;8;6" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="16" y="78" fontFamily="ui-mono,monospace" fontSize="14" fill={color.slate700}>
        Chain-of-custody
      </text>
    </g>
  </svg>
);

/* 5) Technical Support */
const TechnicalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Technical and Cybersecurity Support" className="w-full h-full" {...props}>
    <BG id="gTechCE" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowTechCE" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gTechCE)" />
    {/* password reset + 2FA */}
    <g transform="translate(80,110)" filter="url(#glowTechCE)">
      <rect x="0" y="0" width="320" height="56" rx="14" fill={color.white} stroke={color.slate300} />
      {[18, 48, 78, 108, 138, 168, 198, 228].map((x, i) => (
        <circle key={i} cx={x} cy="28" r="6" fill={color.indigo600} />
      ))}
      <g transform="translate(340,6)">
        <rect x="0" y="0" width="140" height="44" rx="12" fill={color.indigo100} stroke={color.indigo400} />
        <text x="70" y="28" fontFamily="ui-sans-serif,system-ui" fontWeight="700" fontSize="16" fill={color.indigo800} textAnchor="middle">
          2FA ON
        </text>
      </g>
    </g>
    {/* secure storage + monitor */}
    <g transform="translate(120,220)">
      {["Secure Storage", "Activity Monitor", "Account Recovery"].map((t, i) => (
        <g key={t} transform={`translate(${i * 210},0)`}>
          <rect x="0" y="0" width="180" height="100" rx="16" fill={color.white} stroke={color.slate300} />
          <rect x="18" y="20" width="140" height="12" rx="6" fill={color.indigo600} />
          <path d="M20 70l14 14 24-24" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
  </svg>
);

/* 6) Emotional Support */
const EmotionalSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Psychological and Emotional Support" className="w-full h-full" {...props}>
    <BG id="gEmoCE" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowEmoCE" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gEmoCE)" />
    <g transform="translate(100,110)" filter="url(#glowEmoCE)">
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

/* 7) Monitoring & Follow-Up */
const MonitoringSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Continuous Monitoring and Follow-Up" className="w-full h-full" {...props}>
    <BG id="gMonCE" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowMonCE" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gMonCE)" />
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
    <g transform="translate(420,110)" filter="url(#glowMonCE)">
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
    {/* bell */}
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
  <svg viewBox="0 0 820 380" role="img" aria-label="CRCCF’s Role in Response and Support" className="w-full h-full" {...props}>
    <BG id="gRoleCE" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
    <SoftGlow id="glowRoleCE" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRoleCE)" />
    {/* hub + spokes */}
    <g transform="translate(180,180)">
      <circle cx="0" cy="0" r="24" fill={color.cyan500} />
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={i} transform={`rotate(${a}) translate(0 -90)`}>
          <circle cx="0" cy="0" r="16" fill={i % 2 ? color.indigo400 : color.emerald400} />
          <path d="M0 16v50" stroke={color.slate400} strokeWidth="3" />
        </g>
      ))}
    </g>
    {/* playbook card */}
    <g transform="translate(380,90)" filter="url(#glowRoleCE)">
      <Card x="0" y="0" w="360" h="200" r="18" />
      <rect x="24" y="26" width="240" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="54" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="180" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="160" height="14" rx="7" fill={color.emerald400} />
    </g>
  </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 820 380" role="img" aria-label="Conclusion: Protecting Victims Against Cyber Extortion" className="w-full h-full" {...props}>
    <BG id="gConcCE" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConcCE)" />
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
export default function CyberExtortionBlackmailResponse() {
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
        <span className="text-gray-700" aria-current="page">Cyber Extortion & Blackmail</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">
            {data.tagline}
          </p>
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
              <VideoHeroExtortion />
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
              ImmediateSVG,
              LegalSVG,
              EvidenceSVG,
              TechnicalSVG,
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides rapid response, guidance, and support. This does not replace
            law enforcement or court procedures. All information is handled confidentially and per applicable laws.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
