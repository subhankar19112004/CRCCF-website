// src/pages/victimSupport/CybercrimeVictimRightsRelief.jsx
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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.28 },
    },
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
  indigo800: "#3730A3",
  emerald25: "#F3FCF7",
  emerald50: "#ECFDF5",
  emerald100: "#D1FAE5",
  emerald300: "#86EFAC",
  emerald400: "#34D399",
  emerald600: "#059669",
  amber50: "#FFFBEB",
  amber100: "#FEF3C7",
  amber300: "#FCD34D",
  amber500: "#F59E0B",
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

/* ================= DATA (converted from your text, unchanged) ================= */
const data = {
  title: "Cybercrime Victim Rights & Relief – CRCCF",
  tagline:
    "Recognizing Your Rights. Delivering Relief. Ensuring Justice and Support.",
  sections: [
    {
      id: "legal-recognition",
      heading: "1. Right to Legal Recognition as a Victim",
      content: `Every individual affected by cybercrime has the fundamental right to be officially recognized as a legal victim. Legal recognition is crucial for accessing justice, protection, and relief measures under the law. Being acknowledged ensures victims can initiate complaints, participate in legal proceedings, and claim remedies for damages caused by cyber offenses.
CRCCF guides victims through the formal recognition process, providing step-by-step support to ensure that no case goes unacknowledged, overlooked, or unsupported. Our expertise assures victims that their grievances are validated and handled with utmost professionalism.`,
      svg: "LegalRecognitionSVG",
    },
    {
      id: "complaints-redressal",
      heading: "2. Right to File Complaints and Seek Redressal",
      content: `Victims have the legal right to file complaints with law enforcement, cybercrime cells, or designated online reporting portals. Filing a complaint formally triggers the investigation process and opens pathways for obtaining legal relief.
CRCCF assists victims in documenting incidents accurately, preserving crucial digital evidence, and preparing comprehensive complaints. By supporting victims through every step, we maximize the chances of a successful outcome and ensure that their voice is heard in all proceedings.`,
      svg: "ComplaintsSVG",
    },
    {
      id: "immediate-relief",
      heading: "3. Right to Access Immediate Relief Measures",
      content: `Cybercrime can result in financial loss, identity theft, or unauthorized access to sensitive information, creating urgent situations. Victims have the right to immediate relief, which may include freezing compromised accounts, restoring digital access, recovering stolen funds, or obtaining temporary protective orders against perpetrators.
CRCCF coordinates with legal authorities, financial institutions, and cyber experts to ensure victims receive timely interventions. By acting swiftly, we reduce potential harm and provide essential support during the most critical early stages of a case.`,
      svg: "ImmediateReliefSVG",
    },
    {
      id: "psychological-support",
      heading: "4. Right to Psychological and Emotional Support",
      content: `The emotional and psychological impact of cybercrime can be as severe as financial or reputational damage. Victims have the right to professional counselling, therapy, and mental health support tailored to their experiences.

CRCCF’s cyber-psychology experts provide continuous guidance, helping victims manage stress, regain confidence, and make informed decisions. Emotional support is integral to recovery, empowering victims to pursue justice without fear or hesitation and regain control over their lives.`,
      svg: "PsychSupportSVG",
    },
    {
      id: "data-protection",
      heading: "5. Right to Protection of Digital and Personal Data",
      content: `Safeguarding sensitive personal and digital information is a critical component of victim relief. Victims are entitled to measures that protect their private data from misuse, exposure, or further cyber-attacks.

CRCCF provides secure communication channels, expert guidance, and step-by-step instructions for protecting devices, accounts, and online interactions. This proactive approach reduces the risk of repeat victimization and reassures victims that their digital safety is a priority.`,
      svg: "DataProtectionSVG",
    },
    {
      id: "compensation",
      heading: "6. Right to Financial and Legal Compensation",
      content: `Victims have the right to seek financial restitution for losses, including fraud, unauthorized transactions, or damages resulting from identity theft. Legal remedies may also include compensation for emotional trauma, reputational harm, and recovery costs.
CRCCF’s legal experts assist victims in calculating losses, filing claims, and pursuing fair compensation through appropriate legal channels. By ensuring comprehensive support, we help victims obtain justice, recover losses, and regain financial stability.`,
      svg: "CompensationSVG",
    },
    {
      id: "org-role",
      heading: "7. CRCCF’s Role in Ensuring Victim Rights & Relief",
      content: `CRCCF is committed to holistic support, encompassing legal, emotional, and practical relief measures. Our team conducts thorough case analyses, provides expert legal counsel, and facilitates relief interventions tailored to each victim’s needs.
From guiding victims through complex complaint procedures to offering long-term advice on digital security and personal safety, CRCCF ensures that every victim’s rights are upheld and relief is delivered effectively.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Full-Spectrum Rights and Relief for Cybercrime Victims",
      content: `Cybercrime victims have a wide range of rights and relief measures, designed to restore justice, protect their well-being, and support emotional recovery. Upholding these rights ensures that victims can navigate legal challenges confidently, recover from financial and psychological impacts, and regain control over their digital lives.
CRCCF is dedicated to providing complete assistance, combining legal advocacy, protective measures, and counselling to ensure that every victim receives justice, relief, and peace of mind. Victims can reach out without hesitation, knowing they are supported by a trusted, legally-backed, and empathetic organization fully committed to their protection and empowerment.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
/* Storyboard:
   - Scales of justice morph into a protective shield.
   - A “case file” card flips from pending → recognized.
   - Relief pipeline animates: lock icons freeze, bank arrow restores, heart pulse.
   - Subtle ticker of case-id hashes.
*/
const VideoHeroRights = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF — Cybercrime Victim Rights & Relief";
  const desc =
    "Justice scales morph to shield; case recognition flips; relief icons animate (freeze, restore, support); legal ticker streams.";

  if (prefersReduced || !src) {
    // Pure-SVG animated fallback
    return (
      <svg
        viewBox="0 0 1100 520"
        role="img"
        aria-labelledby="vhTitleR vhDescR"
        className="w-full h-auto"
      >
        <title id="vhTitleR">{title}</title>
        <desc id="vhDescR">{desc}</desc>
        <defs>
          <linearGradient id="rGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo50} />
            <stop offset="60%" stopColor={color.cyan50} />
            <stop offset="100%" stopColor={color.emerald50} />
          </linearGradient>
          <filter id="softR" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0"
            />
          </filter>
          <filter id="glowR" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="g" />
            <feColorMatrix
              in="g"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0"
            />
          </filter>
        </defs>

        <g filter="url(#softR)">
          <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#rGrad)" />
        </g>

        {/* Scales → Shield morph */}
        <g transform="translate(180,260)">
          <path
            id="scales"
            d="M0-80h0 M-60 -10 h120 M-80 -10 c0 30 30 50 60 50s60-20 60-50"
            stroke={color.indigo600}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
              M0-80h0 M-60 -10 h120 M-80 -10 c0 30 30 50 60 50s60-20 60-50;
              M-40 -40l80 32v36c0 46-30 86-80 108-50-22-80-62-80-108v-36l80-32;
              M0-80h0 M-60 -10 h120 M-80 -10 c0 30 30 50 60 50s60-20 60-50"
            />
          </path>
          <circle cx="0" cy="-92" r="6" fill={color.indigo600} />
        </g>

        {/* Case card: Pending → Recognized */}
        <g transform="translate(430,90)" filter="url(#glowR)">
          <rect x="0" y="0" width="280" height="160" rx="18" fill={color.white} stroke={color.slate300} />
          <rect x="22" y="26" width="160" height="12" rx="6" fill={color.indigo600} />
          <rect x="22" y="50" width="130" height="10" rx="5" fill={color.slate500} />
          <g transform="translate(200,26)">
            <rect x="0" y="0" width="70" height="28" rx="8" fill={color.rose100} stroke={color.rose400} />
            <text x="35" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color.rose400}>
              PENDING
            </text>
            <animate
              attributeName="opacity"
              values="1;0;0;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </g>
          <g transform="translate(186,96)">
            <rect x="0" y="0" width="96" height="32" rx="10" fill={color.emerald100} stroke={color.emerald400} />
            <text x="48" y="21" textAnchor="middle" fontSize="12" fontWeight="800" fill={color.emerald600}>
              RECOGNIZED
            </text>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="6s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Relief pipeline */}
        <g transform="translate(440,300)">
          <rect x="0" y="0" width="480" height="80" rx="18" fill={color.white} stroke={color.slate300} />
          {/* Freeze */}
          <g transform="translate(24,20)">
            <rect x="0" y="0" width="64" height="40" rx="10" fill={color.cyan100} />
            <text x="32" y="26" textAnchor="middle" fontSize="14" fill={color.cyan700}>🔒</text>
          </g>
          {/* Flow arrow */}
          <path d="M100 40h230" stroke={color.indigo400} strokeWidth="6" fill="none">
            <animate
              attributeName="stroke-dasharray"
              values="0,330;330,0;0,330"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          {/* Restore */}
          <g transform="translate(340,12)">
            <circle cx="28" cy="28" r="28" fill={color.emerald100} stroke={color.emerald400} />
            <path d="M16 28h24" stroke={color.emerald600} strokeWidth="6" />
            <path d="M28 16v24" stroke={color.emerald600} strokeWidth="6" />
          </g>
          {/* Heart beat */}
          <g transform="translate(420,40)">
            <path d="M0 0c10-8 20-8 30 0 10-8 20-8 30 0 0 22-30 36-30 36S0 22 0 0z" fill={color.rose100} stroke={color.rose400} />
            <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2s" repeatCount="indefinite" />
          </g>
        </g>

        {/* Ticker */}
        <g transform="translate(60,420)">
          <rect x="0" y="0" width="360" height="46" rx="12" fill={color.white} stroke={color.slate300} />
          <text x="16" y="30" fontFamily="ui-mono,monospace" fontSize="14" fill={color.slate700}>
            CASE# {`CR-`}
            <tspan>
              9a3f…
              <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
            </tspan>
          </text>
        </g>
      </svg>
    );
  }

  // Rich video-backed hero (if you provide src/poster later, it will render)
  return (
    <svg viewBox="0 0 1100 520" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="bgR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo50} />
          <stop offset="60%" stopColor={color.cyan50} />
          <stop offset="100%" stopColor={color.emerald50} />
        </linearGradient>
        <filter id="softR2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix
            in="b"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0"
          />
        </filter>
        <clipPath id="stageR2">
          <rect x="40" y="44" width="700" height="432" rx="28" />
        </clipPath>
      </defs>

      <g filter="url(#softR2)">
        <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#bgR)" />
      </g>

      <g clipPath="url(#stageR2)">
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
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: src ? "block" : "none",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          >
            {src ? <source src={src} type="video/mp4" /> : null}
          </video>
        </foreignObject>
      </g>

      {/* Overlay icons: justice + shield + heart */}
      <g transform="translate(770,60)">
        <g transform="translate(40,16)">
          <circle cx="0" cy="0" r="28" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontFamily="ui-sans-serif,system-ui"
            fontWeight="800"
            fontSize="14"
            fill={color.indigo600}
          >
            RIGHTS
          </text>
        </g>
        <g transform="translate(0,72)">
          <rect x="0" y="0" width="160" height="46" rx="12" fill={color.white} stroke={color.slate300} />
          <rect x="16" y="12" width="100" height="10" rx="5" fill={color.indigo600} />
          <rect x="16" y="28" width="84" height="8" rx="4" fill={color.slate500} />
        </g>
        <g transform="translate(180,72)">
          <rect x="0" y="0" width="46" height="46" rx="10" fill={color.emerald100} />
          <text x="23" y="30" textAnchor="middle" fontSize="22">🛡️</text>
        </g>
      </g>
    </svg>
  );
};

/* ============================== SVG helpers ============================== */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => (
        <stop
          key={i}
          offset={s.offset}
          stopColor={s.color}
          stopOpacity={s.opacity ?? 1}
        />
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

const Card = ({
  x,
  y,
  w,
  h,
  r = 16,
  fill = color.white,
  stroke,
  sw = 0,
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

/* ===================== Complex Section Illustrations (distinct) ===================== */

/* 1) Legal Recognition */
const LegalRecognitionSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="Legal recognition badge granted to a victim case file"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gLegalRec"
      stops={[
        { offset: "0%", color: color.indigo25 },
        { offset: "100%", color: color.cyan50 },
      ]}
    />
    <SoftGlow id="glowLegalRec" std={9} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gLegalRec)" />

    {/* Case file card */}
    <g transform="translate(90,80)" filter="url(#glowLegalRec)">
      <Card x="0" y="0" w="300" h="200" r="18" />
      <rect x="24" y="26" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="74" width="140" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(220,140)">
        <rect x="0" y="0" width="70" height="28" rx="8" fill={color.rose100} stroke={color.rose400} />
        <text x="35" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color.rose400}>PENDING</text>
        <animate attributeName="opacity" values="1;0;1" dur="5s" repeatCount="indefinite" />
      </g>
    </g>

    {/* Recognition badge */}
    <g transform="translate(480,110)">
      <circle cx="60" cy="60" r="60" fill={color.emerald100} stroke={color.emerald400} strokeWidth="6" />
      <path d="M36 62l20 20 36-36" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
      <animateTransform attributeName="transform" type="scale" values="1;1.06;1" dur="2s" repeatCount="indefinite" />
    </g>
  </svg>
);

/* 2) File Complaints */
const ComplaintsSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="Digital complaint submission with evidence attachments"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gComplaints"
      stops={[
        { offset: "0%", color: color.cyan50 },
        { offset: "100%", color: color.emerald50 },
      ]}
    />
    <SoftGlow id="glowComplaints" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gComplaints)" />

    {/* Submission form */}
    <g transform="translate(80,80)" filter="url(#glowComplaints)">
      <Card x="0" y="0" w="360" h="220" r="18" />
      <rect x="22" y="26" width="230" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="52" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="74" width="180" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="100" width="160" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(22,150)">
        <rect x="0" y="0" width="110" height="32" rx="10" fill={color.indigo100} stroke={color.indigo400} />
        <text x="55" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color.indigo800}>UPLOAD</text>
      </g>
      <g transform="translate(160,150)">
        <rect x="0" y="0" width="130" height="32" rx="10" fill={color.emerald100} stroke={color.emerald400} />
        <text x="65" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fill={color.emerald600}>SUBMIT</text>
      </g>
    </g>

    {/* Evidence chips */}
    <g transform="translate(480,110)">
      {["Email.eml", "Chat.png", "Txn.pdf"].map((t, i) => (
        <g key={t} transform={`translate(${i * 120},0)`}>
          <rect x="0" y="0" width="100" height="60" rx="12" fill={color.white} stroke={color.slate300} />
          <rect x="12" y="18" width="76" height="10" rx="5" fill={color.indigo600} />
          <rect x="12" y="36" width="54" height="8" rx="4" fill={color.slate500} />
          <animateTransform attributeName="transform" type="translate" values={`0 0; 0 -6; 0 0`} dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite" />
        </g>
      ))}
    </g>
  </svg>
);

/* 3) Immediate Relief */
const ImmediateReliefSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="Immediate relief: account freeze, access restore, temporary order"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gRelief"
      stops={[
        { offset: "0%", color: color.amber50 },
        { offset: "100%", color: color.indigo50 },
      ]}
    />
    <SoftGlow id="glowRelief" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRelief)" />

    {/* Pipeline bar */}
    <g transform="translate(80,170)" filter="url(#glowRelief)">
      <rect x="0" y="0" width="660" height="40" rx="12" fill={color.white} stroke={color.slate300} />
      <circle cx="30" cy="20" r="10" fill={color.cyan500} />
      <circle cx="240" cy="20" r="10" fill={color.cyan500} />
      <circle cx="450" cy="20" r="10" fill={color.cyan500} />
      <circle cx="630" cy="20" r="10" fill={color.cyan500} />
      <path d="M40 20h190M250 20h190M460 20h160" stroke={color.indigo400} strokeWidth="6" strokeDasharray="10 8">
        <animate attributeName="stroke-dashoffset" values="0; -260" dur="3s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Freeze tile */}
    <g transform="translate(80,80)">
      <rect x="0" y="0" width="180" height="70" rx="14" fill={color.white} stroke={color.slate300} />
      <text x="24" y="44" fontSize="18" fill={color.cyan700}>Freeze Accounts</text>
      <text x="140" y="44" fontSize="18">🧊</text>
    </g>
    {/* Restore tile */}
    <g transform="translate(300,80)">
      <rect x="0" y="0" width="200" height="70" rx="14" fill={color.white} stroke={color.slate300} />
      <text x="24" y="44" fontSize="18" fill={color.indigo600}>Restore Access</text>
      <text x="160" y="44" fontSize="18">🔑</text>
    </g>
    {/* Order tile */}
    <g transform="translate(540,80)">
      <rect x="0" y="0" width="200" height="70" rx="14" fill={color.white} stroke={color.slate300} />
      <text x="24" y="44" fontSize="18" fill={color.emerald600}>Protective Order</text>
      <text x="162" y="44" fontSize="18">📜</text>
    </g>
  </svg>
);

/* 4) Psychological & Emotional Support */
const PsychSupportSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="Counselling support: calming heartbeat, talk bubbles, resilience"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gPsych"
      stops={[
        { offset: "0%", color: color.rose50 },
        { offset: "100%", color: color.indigo50 },
      ]}
    />
    <SoftGlow id="glowPsych" std={8} alpha={0.5} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gPsych)" />

    {/* Couch + person */}
    <g transform="translate(100,210)">
      <rect x="0" y="0" width="240" height="70" rx="18" fill={color.slate300} opacity="0.3" />
      <circle cx="40" cy="-20" r="16" fill="#EBC4A0" />
      <rect x="24" y="-8" width="40" height="28" rx="8" fill={color.indigo300} />
      <rect x="80" y="-18" width="40" height="18" rx="8" fill={color.indigo100} />
    </g>

    {/* Therapist bubble */}
    <g transform="translate(380,120)">
      <rect x="0" y="0" width="220" height="120" rx="16" fill={color.white} stroke={color.slate300} />
      <rect x="18" y="24" width="120" height="12" rx="6" fill={color.indigo600} />
      <rect x="18" y="48" width="100" height="10" rx="5" fill={color.slate500} />
      <rect x="18" y="70" width="140" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(170,86)">
        <circle cx="0" cy="0" r="4" fill={color.indigo600}>
          <animate attributeName="opacity" values="1;0.2;1" dur="1.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="12" cy="0" r="4" fill={color.indigo600}>
          <animate attributeName="opacity" values="0.2;1;0.2" dur="1.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="0" r="4" fill={color.indigo600}>
          <animate attributeName="opacity" values="0.2;0.2;1" dur="1.3s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>

    {/* Heartbeat line */}
    <g transform="translate(120,310)" stroke={color.rose400} strokeWidth="6" fill="none">
      <path
        d="M0 0c40 0 40 -30 60 -30 20 0 20 30 40 30 20 0 20 -30 40 -30 20 0 20 30 40 30 20 0 20 -30 40 -30 20 0 20 30 40 30"
        strokeLinecap="round"
      >
        <animate attributeName="stroke-dasharray" values="0,300;300,0;0,300" dur="5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

/* 5) Digital & Personal Data Protection */
const DataProtectionSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="Shielded devices and secure channels protecting personal data"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gData"
      stops={[
        { offset: "0%", color: color.cyan50 },
        { offset: "100%", color: color.indigo50 },
      ]}
    />
    <SoftGlow id="glowData" std={9} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gData)" />

    {/* Devices */}
    <g transform="translate(80,110)" filter="url(#glowData)">
      <Card x="0" y="0" w="260" h="160" r="18" />
      <rect x="24" y="24" width="160" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="50" width="130" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="72" width="150" height="10" rx="5" fill={color.slate500} />
      {/* password dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={32 + i * 20} cy="118" r="5" fill={color.indigo600} />
      ))}
    </g>

    {/* Shield + lock */}
    <g transform="translate(420,110)">
      <path
        d="M60 -20l80 30v34c0 44-30 80-80 102-50-22-80-58-80-102v-34l80-30z"
        fill={color.white}
        stroke={color.indigo400}
        strokeWidth="5"
      />
      <g transform="translate(40,40)">
        <rect x="0" y="20" width="64" height="48" rx="12" fill={color.cyan100} stroke={color.cyan500} />
        <path d="M16 20v-12a16 16 0 0 1 32 0v12" stroke={color.indigo600} strokeWidth="4" fill="none" />
      </g>
      <animateTransform attributeName="transform" type="scale" values="1;1.04;1" dur="2.4s" repeatCount="indefinite" />
    </g>

    {/* Secure channel line */}
    <g transform="translate(420,300)">
      <rect x="0" y="0" width="300" height="8" rx="4" fill={color.slate300} />
      {[0, 75, 150, 225, 300].map((x, i) => (
        <circle key={i} cx={x} cy="4" r="7" fill={color.cyan500}>
          <animate attributeName="r" values="7;9;7" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>
  </svg>
);

/* 6) Financial & Legal Compensation */
const CompensationSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="Compensation scales balancing losses and restitution"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gComp"
      stops={[
        { offset: "0%", color: color.indigo25 },
        { offset: "100%", color: color.emerald50 },
      ]}
    />
    <SoftGlow id="glowComp" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gComp)" />

    {/* Ledger Card */}
    <g transform="translate(80,90)" filter="url(#glowComp)">
      <Card x="0" y="0" w="300" h="200" r="18" />
      <rect x="22" y="26" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="52" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="74" width="120" height="10" rx="5" fill={color.slate500} />
      <g transform="translate(22,120)">
        <rect x="0" y="0" width="88" height="28" rx="8" fill={color.emerald100} stroke={color.emerald400} />
        <text x="44" y="18" textAnchor="middle" fontSize="12" fontWeight="800" fill={color.emerald600}>CLAIM</text>
      </g>
    </g>

    {/* Scales with money + doc */}
    <g transform="translate(470,90)">
      <rect x="60" y="0" width="8" height="160" fill={color.indigo800} />
      <rect x="20" y="40" width="160" height="8" rx="4" fill={color.indigo800} />
      {/* left pan money */}
      <g transform="translate(20,48)">
        <path d="M0 0h80l-10 36H10z" fill={color.white} stroke={color.slate300} />
        <text x="40" y="28" textAnchor="middle" fontSize="16">₹</text>
      </g>
      {/* right pan doc */}
      <g transform="translate(100,48)">
        <path d="M0 0h80l10 36H10z" fill={color.white} stroke={color.slate300} />
        <rect x="20" y="12" width="40" height="6" rx="3" fill={color.indigo600} />
      </g>
      <animateTransform attributeName="transform" type="rotate" values="0 100 60; -6 100 60; 6 100 60; 0 100 60" dur="3.2s" repeatCount="indefinite" />
    </g>
  </svg>
);

/* 7) CRCCF Role */
const OrgRoleSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="CRCCF hub orchestrating legal, technical, and emotional support"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gRoleR"
      stops={[
        { offset: "0%", color: color.indigo50 },
        { offset: "100%", color: color.emerald50 },
      ]}
    />
    <SoftGlow id="glowRoleR" std={8} alpha={0.55} />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gRoleR)" />

    {/* Central hub */}
    <g transform="translate(200,200)">
      <circle cx="0" cy="0" r="28" fill={color.cyan500} />
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={i} transform={`rotate(${a}) translate(0 -110)`}>
          <circle cx="0" cy="0" r="18" fill={i % 2 ? color.indigo400 : color.emerald400} />
          <path d="M0 18v68" stroke={color.slate400} strokeWidth="3" />
        </g>
      ))}
    </g>

    {/* Playbook panel */}
    <g transform="translate(380,90)" filter="url(#glowRoleR)">
      <Card x="0" y="0" w="360" h="220" r="18" />
      <rect x="24" y="26" width="240" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="54" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="180" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="112" width="160" height="14" rx="7" fill={color.emerald400} />
      <rect x="24" y="140" width="180" height="10" rx="5" fill={color.slate500} />
    </g>
  </svg>
);

/* 8) Conclusion */
const ConclusionSVG = (props) => (
  <svg
    viewBox="0 0 820 380"
    role="img"
    aria-label="A clear forward path lit by justice, safety, and recovery"
    className="w-full h-full"
    {...props}
  >
    <BG
      id="gConcR"
      stops={[
        { offset: "0%", color: color.cyan100 },
        { offset: "100%", color: color.emerald100 },
      ]}
    />
    <rect x="0" y="0" width="820" height="380" rx="20" fill="url(#gConcR)" />
    {/* Path forward */}
    <g transform="translate(80,240)">
      <path
        d="M0 60c120-80 240-80 360 0 120-80 240-80 360 0"
        stroke={color.indigo600}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
    </g>
    {/* Milestone checks */}
    <g transform="translate(560,120)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${i * 46},${i % 2 ? 22 : 0})`}>
          <circle cx="0" cy="0" r="14" fill={color.emerald400} />
          <path
            d="M-8 0l6 6 12-12"
            stroke={color.white}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ))}
    </g>
    {/* Beacon */}
    <g transform="translate(140,120)">
      <circle cx="0" cy="0" r="12" fill={color.amber300}>
        <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

/* ============================= Section Wrapper ============================= */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), {
    stiffness: 120,
    damping: 20,
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const paragraphs = content.split("\n").map((p, i) => (
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
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start"
      >
        {/* Illustration */}
        <motion.div
          style={{ y }}
          className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}
        >
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
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* =================================== PAGE =================================== */
export default function CybercrimeVictimRightsRelief() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    LegalRecognitionSVG,
    ComplaintsSVG,
    ImmediateReliefSVG,
    PsychSupportSVG,
    DataProtectionSVG,
    CompensationSVG,
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
      <motion.nav
        variants={itemUp}
        className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4"
        aria-label="Breadcrumb"
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true"> › </span>
        <Link to="/report/victim-rights-support" className="hover:underline">
          Victim Rights & Support
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          Victim Rights & Relief
        </span>
      </motion.nav>

      {/* Hero with in-file Video SVG */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">
            {data.tagline}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {[
              "Legal Recognition",
              "Complaint Filing",
              "Immediate Relief",
              "Emotional Support",
              "Data Protection",
              "Compensation",
            ].map((pill) => (
              <span
                key={pill}
                className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan100 text-cyan700 border border-cyan-200"
                style={{ backgroundColor: color.cyan100, color: color.cyan700 }}
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
              <VideoHeroRights />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp =
            ({
              LegalRecognitionSVG,
              ComplaintsSVG,
              ImmediateReliefSVG,
              PsychSupportSVG,
              DataProtectionSVG,
              CompensationSVG,
              OrgRoleSVG,
              ConclusionSVG,
            }[sec.svg]) || LegalRecognitionSVG;

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
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides legal guidance, technical
            assistance, and emotional support. This is not a substitute for law
            enforcement or court processes. All information is handled
            confidentially and in compliance with applicable laws.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
