// src/pages/victimSupport/VictimOutreachLegalSupport.jsx
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

/* ---------------------------- Hero SVG (Victim Outreach) ---------------------------- */
const VideoHeroOutreach = () => {
  const shouldReduce = useReducedMotion();
  // Video: An abstract animation of connecting lines and gentle light particles, symbolizing the network of support reaching out.
  const videoURL = "https://cdn.pixabay.com/video/2023/09/20/181498-868665780_large.mp4";

  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Victim Outreach and Legal Support Scene">
      <defs>
        <linearGradient id="heroBG_Outreach" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <clipPath id="heroClip_Outreach">
           <rect x="0" y="0" width="1000" height="460" rx="28" />
        </clipPath>
      </defs>

      {/* Fallback for reduced motion */}
      {shouldReduce ? (
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#heroBG_Outreach)" />
      ) : (
        <g clipPath="url(#heroClip_Outreach)">
            <rect x="0" y="0" width="1000" height="460" fill="url(#heroBG_Outreach)" />
            <foreignObject x="0" y="0" width="1000" height="460">
            <video
                src={videoURL}
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </foreignObject>
        </g>
      )}

      {/* Overlaid elements for outreach */}
      <g>
        {/* Hand reaching out from screen/digital space */}
        <motion.g
          transform="translate(400, 230)"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <path
            d="M -150 0 C -100 -60, 100 -80, 150 0 C 100 80, -100 60, -150 0 Z"
            fill={color.white} fillOpacity="0.3"
          />
          <path
            d="M 0 0 C 50 -50, 120 -40, 150 20 L 130 50 C 80 80, 40 60, 0 40 L -80 60 L -120 20 C -100 -40, -50 -50, 0 0 Z"
            fill={color.emerald300} stroke={color.emerald600} strokeWidth="4"
          />
          {/* Gavel icon offered by hand */}
          <g transform="translate(150 -10)">
            <rect x="-15" y="-30" width="30" height="10" rx="3" fill={color.slate700} />
            <rect x="-5" y="-20" width="10" height="25" rx="3" fill={color.slate700} />
          </g>
        </motion.g>

        {/* Victim figure receiving help */}
        <motion.g
            transform="translate(750, 280)"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
            <circle cx="0" cy="-70" r="30" fill={color.indigo300} />
            <rect x="-40" y="-40" width="80" height="100" rx="40" fill={color.indigo300} />
            <rect x="-60" y="-20" width="40" height="20" rx="10" fill={color.indigo600} />
        </motion.g>

        {/* Floating support icons */}
        <motion.circle cx="200" cy="150" r="30" fill={color.white} opacity="0.8"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        />
        <text x="190" y="157" fontSize="20" fill={color.slate700}>❤️</text>
      </g>
    </svg>
  );
};

/* ---------------------------- Section SVGs ---------------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Reaching Out to Support Victims" className="w-full h-full">
      <BG id="gIntroOutreach" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroOutreach)" />
      {/* Central hub radiating support lines to individuals */}
      <g transform="translate(400 190)">
        <motion.circle cx="0" cy="0" r="40" fill={color.indigo600} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} />
        <text x="0" y="10" textAnchor="middle" fill={color.white} fontSize="20" fontWeight="bold">CRCCF</text>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <g key={i}>
            <motion.line
              x1="0" y1="0"
              x2={Math.cos((angle - 90) * Math.PI / 180) * 150}
              y2={Math.sin((angle - 90) * Math.PI / 180) * 150}
              stroke={color.indigo400} strokeWidth="3"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.15 + 0.5 }}
            />
            <motion.circle
              cx={Math.cos((angle - 90) * Math.PI / 180) * 150}
              cy={Math.sin((angle - 90) * Math.PI / 180) * 150}
              r="15" fill={color.emerald300}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15 + 0.8, type: "spring", stiffness: 200 }}
            />
          </g>
        ))}
      </g>
    </svg>
  ),
  awarenessGuidance: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Awareness and Guidance" className="w-full h-full">
      <BG id="gAwarenessOutreach" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAwarenessOutreach)" />
      {/* A person looking at a screen with helpful icons */}
      <g transform="translate(100 80)">
        {/* Screen */}
        <motion.rect
          x="150" y="0" width="400" height="250" rx="20" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
        />
        {/* Person */}
        <motion.circle cx="50" cy="150" r="30" fill={color.indigo300} />
        <motion.rect x="20" y="180" width="60" height="80" rx="30" fill={color.indigo300} />
        {/* Icons on Screen */}
        <motion.g transform="translate(250 80)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}>
          <circle r="30" fill={color.amber100} />
          <text x="-12" y="10" fontSize="40">💡</text>
        </motion.g>
        <motion.g transform="translate(450 150)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
          <circle r="30" fill={color.rose100} />
          <text x="-12" y="10" fontSize="40">⚖️</text>
        </motion.g>
      </g>
    </svg>
  ),
  proactiveEngagement: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Proactive Victim Engagement" className="w-full h-full">
      <BG id="gEngagementOutreach" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.rose50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEngagementOutreach)" />
      {/* A support worker initiating contact with a victim */}
      <g transform="translate(150 100)">
        {/* Support worker */}
        <motion.g initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <circle cx="80" cy="80" r="30" fill={color.emerald300} />
          <rect x="50" y="110" width="60" height="80" rx="30" fill={color.emerald300} />
        </motion.g>
        {/* Victim */}
        <motion.g transform="translate(350 0)" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <circle cx="80" cy="80" r="30" fill={color.indigo300} opacity="0.7" />
          <rect x="50" y="110" width="60" height="80" rx="30" fill={color.indigo300} opacity="0.7" />
        </motion.g>
        {/* Outreach / Connection */}
        <motion.path
          d="M 140 120 C 200 80, 300 80, 380 120" stroke={color.indigo600} strokeWidth="5" strokeDasharray="10 5" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.path
          d="M 160 150 L 180 150 L 170 170 Z" fill={color.indigo600}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        />
      </g>
    </svg>
  ),
  legalSupport: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Legal Support and Case Assistance" className="w-full h-full">
      <BG id="gLegalSupportOutreach" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.white }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalSupportOutreach)" />
      {/* Gavel, documents, and a helping hand */}
      <g transform="translate(150 80)">
        {/* Gavel */}
        <motion.g initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <rect x="0" y="0" width="120" height="30" rx="10" fill={color.slate700} />
          <rect x="45" y="30" width="30" height="70" fill={color.slate700} />
        </motion.g>
        {/* Documents */}
        <motion.rect
          x="200" y="50" width="250" height="200" rx="15" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        />
        <rect x="220" y="70" width="210" height="15" rx="5" fill={color.cyan200} />
        <rect x="220" y="100" width="150" height="10" rx="4" fill={color.indigo200} />
        <rect x="220" y="120" width="180" height="10" rx="4" fill={color.indigo200} />
        {/* Helping Hand */}
        <motion.path
          d="M 400 200 C 350 180, 300 250, 250 220" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
        />
      </g>
    </svg>
  ),
  protectionInfo: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Protection of Personal and Digital Information" className="w-full h-full">
      <BG id="gProtectionOutreach" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gProtectionOutreach)" />
      {/* A secure data vault with a shield */}
      <g transform="translate(250 80)">
        {/* Vault Door */}
        <motion.circle cx="150" cy="110" r="100" fill={color.slate700}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        <motion.circle cx="150" cy="110" r="80" fill={color.slate500}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.rect x="140" y="100" width="20" height="20" rx="5" fill={color.slate900}
          initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ delay: 0.6, duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {/* Shield */}
        <motion.path
          d="M 150 -10 L 50 90 C 50 170, 250 170, 250 90 Z" fill={color.white} stroke={color.indigo600} strokeWidth="5"
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, type: "spring" }}
        />
        <path d="M 120 70 l 30 30 l 50 -50" stroke={color.emerald600} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  ),
  emotionalSupport: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Emotional and Psychological Support" className="w-full h-full">
      <BG id="gEmotionalOutreach" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEmotionalOutreach)" />
      {/* A calm setting with a person receiving support, indicated by a gentle wave and heart */}
      <g transform="translate(200 120)">
        <motion.circle cx="0" cy="0" r="30" fill={color.indigo300} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
        <motion.rect x="-40" y="30" width="80" height="100" rx="40" fill={color.indigo300} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} />
        <motion.path d="M 80 50 Q 120 30, 100 0 Q 80 -30, 60 0" fill={color.emerald300} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }} />
        <motion.path d="M 120 -50 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 q 0 -30 -30 -30 a 30 30 0 0 1 30 -30" fill={color.rose400} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150, delay: 0.7 }} />
      </g>
    </svg>
  ),
  updatesAdvocacy: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Updates and Advocacy" className="w-full h-full">
      <BG id="gUpdatesOutreach" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gUpdatesOutreach)" />
      {/* A mobile device showing a list of positive updates */}
      <g transform="translate(250 60)">
        <motion.rect x="0" y="0" width="300" height="260" rx="20" fill={color.white} stroke={color.slate300} strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}
        />
        {[0, 1, 2].map(i => (
          <motion.g key={i} transform={`translate(20 ${40 + i * 60})`}
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.2 }}
          >
            <circle cx="15" cy="15" r="15" fill={color.emerald300} />
            <path d="M 8 15 l 6 6 l 10 -10" stroke={color.white} strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="40" y="5" width="200" height="20" rx="5" fill={color.cyan200} />
          </motion.g>
        ))}
      </g>
    </svg>
  ),
  orgRole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Outreach and Legal Support" className="w-full h-full">
      <BG id="gOrgRoleOutreach" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgRoleOutreach)" />
      {/* Central CRCCF icon surrounded by key service icons */}
      <g transform="translate(400 190)">
        <motion.circle cx="0" cy="0" r="60" fill={color.indigo600} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} />
        <text x="0" y="10" textAnchor="middle" fill={color.white} fontSize="30" fontWeight="bold">CRCCF</text>
        <motion.g transform="translate(0 -120)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}>
          <circle r="30" fill={color.white} /> <text x="-12" y="10" fontSize="40">📞</text>
        </motion.g>
        <motion.g transform="translate(120 0)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
          <circle r="30" fill={color.white} /> <text x="-12" y="10" fontSize="40">⚖️</text>
        </motion.g>
        <motion.g transform="translate(0 120)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}>
          <circle r="30" fill={color.white} /> <text x="-12" y="10" fontSize="40">❤️</text>
        </motion.g>
        <motion.g transform="translate(-120 0)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1, type: "spring" }}>
          <circle r="30" fill={color.white} /> <text x="-12" y="10" fontSize="40">🛡️</text>
        </motion.g>
      </g>
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Empowering Victims" className="w-full h-full">
      <BG id="gConcOutreach" stops={[{ offset: "0%", color: color.cyan200 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcOutreach)" />
      {/* An empowered person standing confidently on a lit path */}
      <g transform="translate(400 210)">
        <motion.path d="M -150 150 L -50 -150 L 50 -150 L 150 150 Z" fill={color.amber100} opacity="0.8"
          initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
        />
        <motion.circle cx="0" cy="-100" r="40" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
        />
        <motion.rect x="-50" y="-60" width="100" height="120" rx="50" fill={color.slate700}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
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
  title: "Victim Outreach & Legal Support – CRCCF",
  tagline: "Connecting, Guiding, and Empowering Victims in the Digital Space",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Reaching Out to Support Victims",
      content: `Cybercrime victims often experience fear, confusion, and isolation while navigating legal processes. The subcard “Victim Outreach & Legal Support” emphasizes proactive initiatives to connect with victims, inform them about their rights, and provide comprehensive legal guidance. Our organization ensures that every affected individual receives timely assistance and access to justice, reducing vulnerability and building confidence.
CRCCF delivers a structured outreach framework that combines awareness, legal aid, and emotional support. By addressing multiple needs simultaneously, victims are guided to take informed steps, report incidents effectively, and regain control over their circumstances.`,
      svg: svgMap.intro,
    },
    {
      id: "awarenessGuidance",
      heading: "2. Right to Awareness and Guidance",
      content: `Victims have the right to clear information regarding their legal options, reporting channels, and available support resources. Outreach initiatives are designed to educate victims about cybercrime laws, preventive measures, and actionable steps to pursue justice.
Our organization provides detailed guidance, empowering victims to make informed decisions and understand the tools, services, and assistance available to them. Awareness equips them to navigate cybercrime situations with confidence and clarity.`,
      svg: svgMap.awarenessGuidance,
    },
    {
      id: "proactiveEngagement",
      heading: "3. Proactive Victim Engagement",
      content: `Victim outreach involves actively contacting affected individuals rather than waiting for them to seek help. Our team identifies cybercrime victims, offers initial counselling, and provides support during incident reporting.
This proactive approach ensures timely assistance, reduces the risk of further harm, and helps victims navigate complex cybercrime cases efficiently. CRCCF ensures that no victim feels unsupported or uncertain during the process.`,
      svg: svgMap.proactiveEngagement,
    },
    {
      id: "legalSupport",
      heading: "4. Legal Support and Case Assistance",
      content: `Victims have the right to professional legal guidance for filing complaints, preserving digital evidence, and pursuing remedies in civil or criminal courts. Legal support includes advisory services, case documentation, court accompaniment, and advocacy.
CRCCF provides expert assistance throughout all legal procedures. Ensuring accurate representation and case management empowers victims to assert their rights, follow due process, and pursue justice confidently.`,
      svg: svgMap.legalSupport,
    },
    {
      id: "protectionInfo",
      heading: "5. Protection of Personal and Digital Information",
      content: `Maintaining confidentiality and security is a fundamental right for victims. Outreach and legal support programs ensure personal, financial, and digital data is handled securely.
Our organization implements protective measures including encrypted communication, secure case management systems, and practical advice on safeguarding online presence. These steps prevent further exploitation and reinforce victim trust.`,
      svg: svgMap.protectionInfo,
    },
    {
      id: "emotionalSupport",
      heading: "6. Emotional and Psychological Support",
      content: `Cybercrime can lead to emotional distress, anxiety, and vulnerability. Victims have the right to access counselling and guidance to address trauma and regain stability.
CRCCF offers cyber-psychology services, therapy sessions, and continuous support. This helps victims rebuild confidence, manage fear, and actively participate in legal proceedings while ensuring mental and emotional well-being.`,
      svg: svgMap.emotionalSupport,
    },
    {
      id: "updatesAdvocacy",
      heading: "7. Continuous Updates and Advocacy",
      content: `Victims have the right to receive updates about case progress, legal actions, and protective measures. Transparent communication ensures they remain informed and engaged.
Our organization provides ongoing monitoring, case advocacy, and timely updates. Regular communication builds trust, reduces uncertainty, and enables victims to stay empowered throughout the recovery and legal process.`,
      svg: svgMap.updatesAdvocacy,
    },
    {
      id: "orgRole",
      heading: "8. Organization’s Role in Outreach and Legal Support",
      content: `CRCCF is committed to delivering holistic victim outreach and legal assistance. By integrating proactive engagement, legal guidance, emotional support, and data protection, we create a comprehensive framework for victim care.
Every intervention is conducted with professionalism, confidentiality, and empathy. Our organization ensures that victims receive timely, effective, and compassionate support, enabling them to navigate cybercrime challenges confidently.`,
      svg: svgMap.orgRole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Outreach and Legal Aid",
      content: `Victim Outreach & Legal Support equips individuals affected by cybercrime with guidance, legal resources, and emotional support. Upholding these rights allows victims to pursue justice confidently, safeguard personal and digital interests, and recover effectively.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate services, ensuring that every victim receives the support and legal aid necessary to restore security, confidence, and empowerment.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function VictimOutreachLegalSupport() {
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
        <span className="text-gray-700" aria-current="page">Victim Outreach & Legal Support</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Outreach", "Legal Aid", "Guidance"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroOutreach />
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