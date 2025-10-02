// src/pages/ourDepartments/CyberAwarenessDepartment.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* -------------------- Motion Controls (respects reduced motion) -------------------- */
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
  return { container, itemUp, shouldReduce };
};

/* -------------------- Page Data (FULL, inline) -------------------- */
const data = {
  title: "Cyber Awareness Department",
  shortName: "Cyber Awareness",
  tagline: "Spreading Awareness, Protecting Digital Lives, and Building a Cyber-Secure Society.",
  summary:
    "CRCCF’s Cyber Awareness Department empowers citizens, organizations, and agencies with practical knowledge to stay safe online. We close the gap between technology and people through lawful, culturally-relevant outreach across India and beyond.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      bullets: [
        "First line of defense against identity theft, fraud, cyberbullying, and hacking.",
        "Promotes digital literacy, responsible communication, and stakeholder trust.",
        "Aligned to national laws, international best practices, and CRCCF’s cyber-safe mission.",
      ],
      svg: "IntroSVG",
    },
    {
      id: "purpose-scope",
      heading: "Purpose & Scope",
      bullets: [
        "Prevent cybercrime via proactive education, outreach, and communication.",
        "Serve both community programs and commercial services with structured, sustainable initiatives.",
        "Campaigns strictly adhere to IT Act, DPDP Act, IPC, and related laws.",
        "Multilingual, accessible materials for diverse communities; collaborate widely to scale impact.",
      ],
      svg: "ScopeSVG",
    },
    /* ---------- 2.x Core Responsibilities ---------- */
    {
      id: "public-campaigns",
      heading: "2.1 Public Awareness Campaigns",
      bullets: [
        "Nationwide cyber hygiene, phishing prevention, privacy, and safe e-commerce campaigns.",
        "Multi-channel outreach: social, print, TV, radio, and community events.",
        "Inclusive content tailored by demographic; influencer and media partnerships.",
        "Measure reach, engagement, and behavior change for effectiveness.",
      ],
      svg: "CampaignsSVG",
    },
    {
      id: "educational-programs",
      heading: "2.2 Educational Programs",
      bullets: [
        "Workshops/seminars on cyberbullying, digital privacy, and password security.",
        "Integrate sessions into school/college curricula via board partnerships.",
        "Interactive e-learning modules for remote and rural audiences.",
        "Resource libraries: videos, guides, infographics; public certification programs.",
      ],
      svg: "EducationSVG",
    },
    {
      id: "research-analytics",
      heading: "2.3 Research & Analytics",
      bullets: [
        "Track cybercrime trends and awareness levels; annual surveys for gaps.",
        "University/think-tank collaborations for reports and whitepapers.",
        "Publish case studies to inform policy and improve strategies.",
      ],
      svg: "ResearchSVG",
    },
    {
      id: "collab-partnerships",
      heading: "2.4 Collaboration & Partnerships",
      bullets: [
        "Work with government, law enforcement, NGOs, and international bodies.",
        "Corporate sponsorships for scale; legal and cyber experts for credibility.",
        "Align with global awareness efforts for shared learning.",
      ],
      svg: "PartnershipsSVG",
    },
    {
      id: "digital-content",
      heading: "2.5 Digital Content & Communication",
      bullets: [
        "Manage portals, apps, and social channels with fact-based, lawful content.",
        "Leverage AI and gamification for interactive learning; multi-lingual accessibility.",
        "Ensure WCAG-friendly assets for persons with disabilities.",
      ],
      svg: "DigitalContentSVG",
    },
    {
      id: "community-outreach",
      heading: "2.6 Community Engagement & Outreach",
      bullets: [
        "Hackathons, competitions, and cyber safety fairs.",
        "Community cyber ambassadors to localize awareness.",
        "Central database of outreach and impact; continuous feedback loop.",
      ],
      svg: "CommunitySVG",
    },
    {
      id: "compliance-legal",
      heading: "2.7 Compliance & Legal Oversight",
      bullets: [
        "Adherence to IT Act 2000, DPDP Act 2023, IPC 1860, and related laws.",
        "Participant data protected with encryption and secure storage.",
        "Privacy policies and consent forms; regular audits for transparency.",
      ],
      svg: "ComplianceSVG",
    },
    {
      id: "training-support",
      heading: "2.8 Training Support",
      bullets: [
        "Support Training Department with trainers and awareness assets.",
        "Corporate-focused modules for staff cyber awareness.",
        "Assist government and law-enforcement programs with content.",
      ],
      svg: "TrainingSupportSVG",
    },
    /* ---------- Additional Sections ---------- */
    {
      id: "daily-tasks",
      heading: "3. Detailed Responsibilities & Daily Tasks",
      bullets: [
        "Daily monitoring of cyber trends and threats; verified updates on CRCCF channels.",
        "Public engagement via chats, helplines, live sessions; weekly internal syncs.",
        "Document campaign scopes, outcomes, and lessons for future planning.",
      ],
      svg: "DailyTasksSVG",
    },
    {
      id: "ethics",
      heading: "4. Confidentiality & Ethical Standards",
      bullets: [
        "Strict confidentiality; unauthorized sharing leads to disciplinary/legal action.",
        "Mandatory professionalism, transparency, and ethical conduct.",
      ],
      svg: "EthicsSVG",
    },
    {
      id: "monitoring-eval",
      heading: "5. Monitoring & Evaluation",
      bullets: [
        "Continuous M&E through dashboards, feedback forms, and audits.",
        "Quarterly reports to senior management; public transparency of results.",
      ],
      svg: "EvaluationSVG",
    },
    {
      id: "legal-framework",
      heading: "6. Legal Framework & References",
      bullets: [
        "IT Act 2000 & IT Amendment 2008; DPDP Act 2023; IPC 1860.",
        "Right to Education Act 2009; Copyright Act 1957.",
        "UN cyber safety guidelines; ISO information security standards.",
      ],
      svg: "LegalRefsSVG",
    },
    {
      id: "conclusion",
      heading: "7. Conclusion",
      bullets: [
        "Frontline defender of public digital safety for a cyber-confident society.",
        "Legal compliance + innovative communication + community outreach = real impact.",
        "Equipping every citizen to navigate online spaces securely and confidently.",
      ],
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------- Colors -------------------- */
const color = {
  cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
  indigo100: "#E0E7FF", indigo400: "#818CF8", indigo600: "#4F46E5",
  emerald100: "#D1FAE5", emerald400: "#34D399",
  amber100: "#FEF3C7", amber400: "#F59E0B",
  rose100: "#FFE4E6", rose400: "#FB7185",
  slate700: "#334155", slate900: "#0F172A",
  white: "#FFFFFF",
};

/* -------------------- Big Hero Illustration -------------------- */
const AwarenessHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="awHeroTitle awHeroDesc" className="w-full h-auto" {...props}>
    <title id="awHeroTitle">Cyber Awareness Illustration</title>
    <desc id="awHeroDesc">Cartoon megaphone, people, posters, and a phone screen symbolizing campaigns and education.</desc>

    {/* Soft blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="170" rx="160" ry="70" fill={color.cyan100} />
      <ellipse cx="530" cy="130" rx="140" ry="60" fill={color.indigo100} />
      <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Megaphone */}
    <g transform="translate(120,120)">
      <path d="M0 80l120-40v80L0 80z" fill={color.indigo400} />
      <rect x="120" y="56" width="36" height="48" rx="8" fill={color.indigo600} />
      <rect x="150" y="68" width="18" height="24" rx="6" fill={color.cyan500} />
    </g>

    {/* Phone poster */}
    <g transform="translate(480,100)">
      <rect x="0" y="0" width="160" height="280" rx="24" fill={color.white} stroke={color.cyan500} strokeWidth="4" />
      <rect x="30" y="40" width="100" height="14" rx="7" fill={color.indigo400} />
      <rect x="30" y="70" width="100" height="14" rx="7" fill={color.indigo400} />
      <rect x="30" y="110" width="60" height="60" rx="12" fill={color.cyan100} />
      <rect x="30" y="190" width="100" height="12" rx="6" fill={color.emerald400} />
      <rect x="30" y="212" width="80" height="12" rx="6" fill={color.amber400} />
    </g>

    {/* People dots */}
    <g transform="translate(220,320)">
      <circle cx="0" cy="0" r="10" fill={color.indigo400} />
      <circle cx="40" cy="10" r="10" fill={color.cyan500} />
      <circle cx="80" cy="0" r="10" fill={color.emerald400} />
    </g>
  </svg>
);

/* -------------------- SVG Building Blocks -------------------- */
const BG = ({ id, from, to }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={from} />
      <stop offset="1" stopColor={to} />
    </linearGradient>
  </defs>
);
const Panel = ({ x, y, w, h, r = 12, fill = "white", stroke, sw = 0 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} />
);

/* -------------------- Section SVGs (big, one per section) -------------------- */
const IntroSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Introduction" className="w-full h-full" {...props}>
    <BG id="gIntro" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gIntro)" />
    <Panel x="70" y="70" w="220" h="160" r="16" fill={color.white} />
    <Panel x="110" y="100" w="140" h="12" r="6" fill={color.slate700} />
    <Panel x="110" y="126" w="120" h="12" r="6" fill={color.slate700} />
    <Panel x="420" y="90" w="220" h="140" r="16" fill={color.indigo100} />
    <circle cx="460" cy="130" r="16" fill={color.indigo400} />
    <circle cx="510" cy="150" r="16" fill={color.cyan500} />
    <circle cx="560" cy="130" r="16" fill={color.emerald400} />
  </svg>
);

const ScopeSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Purpose & Scope" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    <path d="M120 260c-8-48 24-88 88-96 0 64-40 96-88 96z" fill={color.emerald400} />
    <Panel x="380" y="80" w="260" h="80" r="14" fill={color.white} />
    <Panel x="380" y="170" w="220" h="60" r="14" fill={color.white} />
  </svg>
);

const CampaignsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Public Campaigns" className="w-full h-full" {...props}>
    <BG id="gCamp" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gCamp)" />
    {/* Megaphone + poster cards */}
    <path d="M120 220l160-50v100l-160-50z" fill={color.indigo400} />
    <Panel x="320" y="90" w="120" h="170" r="16" fill={color.white} stroke={color.cyan500} sw="3" />
    <Panel x="456" y="110" w="120" h="150" r="16" fill={color.white} stroke={color.indigo400} sw="3" />
  </svg>
);

const EducationSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Educational Programs" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Blackboard + books */}
    <Panel x="100" y="70" w="260" h="160" r="12" fill={color.white} />
    <Panel x="130" y="100" w="200" h="12" r="6" fill={color.slate700} />
    <Panel x="130" y="124" w="160" h="12" r="6" fill={color.slate700} />
    <Panel x="420" y="120" w="80" h="18" r="9" fill={color.indigo400} />
    <Panel x="510" y="110" w="80" h="18" r="9" fill={color.cyan500} />
    <Panel x="600" y="120" w="80" h="18" r="9" fill={color.emerald400} />
  </svg>
);

const ResearchSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Research & Analytics" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Chart + magnifier */}
    <Panel x="120" y="90" w="220" h="140" r="12" fill={color.white} />
    <Panel x="150" y="200" w="40" h="30" r="6" fill={color.cyan500} />
    <Panel x="200" y="170" w="40" h="60" r="6" fill={color.indigo400} />
    <Panel x="250" y="150" w="40" h="80" r="6" fill={color.emerald400} />
    <circle cx="520" cy="180" r="34" fill={color.white} />
    <path d="M545 205l30 30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const PartnershipsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Collaboration & Partnerships" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Handshake + network */}
    <path d="M160 200c60-30 100-30 160 0" stroke={color.indigo400} strokeWidth="10" fill="none" strokeLinecap="round" />
    <circle cx="150" cy="200" r="16" fill={color.indigo400} />
    <circle cx="320" cy="200" r="16" fill={color.indigo400} />
    <circle cx="520" cy="100" r="10" fill={color.cyan500} />
    <circle cx="600" cy="140" r="10" fill={color.emerald400} />
    <circle cx="560" cy="220" r="10" fill={color.indigo600} />
    <path d="M520 100L600 140 560 220 520 100" stroke={color.slate700} strokeWidth="2" fill="none" />
  </svg>
);

const DigitalContentSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Digital Content & Communication" className="w-full h-full" {...props}>
    <BG id="gDC" from={color.cyan100} to={color.emerald100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gDC)" />
    {/* App + posts */}
    <Panel x="110" y="80" w="200" h="220" r="24" fill={color.white} stroke={color.cyan500} sw="3" />
    <Panel x="360" y="110" w="100" h="60" r="12" fill={color.white} />
    <Panel x="480" y="110" w="100" h="60" r="12" fill={color.white} />
    <Panel x="420" y="190" w="160" h="60" r="12" fill={color.white} />
  </svg>
);

const CommunitySVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Community Engagement & Outreach" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Stage + crowd dots */}
    <Panel x="100" y="80" w="260" h="100" r="12" fill={color.indigo100} />
    <circle cx="140" cy="220" r="10" fill={color.indigo400} />
    <circle cx="180" cy="230" r="10" fill={color.cyan500} />
    <circle cx="220" cy="220" r="10" fill={color.emerald400} />
    <circle cx="260" cy="230" r="10" fill={color.amber400} />
  </svg>
);

const ComplianceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Compliance & Legal" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Shield + policy page */}
    <g transform="translate(100,80)">
      <path d="M60 0l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90V32L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M30 70l28 28 44-44" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
    <Panel x="420" y="90" w="220" h="160" r="12" fill={color.white} />
    <Panel x="450" y="120" w="160" h="12" r="6" fill={color.slate700} />
    <Panel x="450" y="146" w="120" h="12" r="6" fill={color.slate700} />
  </svg>
);

const TrainingSupportSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Training Support" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Instructor + slides */}
    <Panel x="120" y="90" w="240" h="140" r="12" fill={color.white} />
    <Panel x="150" y="120" w="180" h="12" r="6" fill={color.slate700} />
    <Panel x="150" y="146" w="140" h="12" r="6" fill={color.slate700} />
    <Panel x="430" y="120" w="180" h="120" r="12" fill={color.white} />
  </svg>
);

const DailyTasksSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Daily Tasks" className="w-full h-full" {...props}>
    <BG id="gDT" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gDT)" />
    {/* Checklist + chat bubbles */}
    <Panel x="100" y="80" w="220" h="140" r="12" fill={color.white} />
    <Panel x="130" y="110" w="140" h="10" r="5" fill={color.slate700} />
    <Panel x="130" y="130" w="160" h="10" r="5" fill={color.slate700} />
    <Panel x="420" y="90" w="120" h="60" r="12" fill={color.white} />
    <Panel x="560" y="120" w="120" h="60" r="12" fill={color.white} />
  </svg>
);

const EthicsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Confidentiality & Ethics" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
    {/* Lock + document */}
    <Panel x="120" y="90" w="200" h="160" r="12" fill={color.white} />
    <path d="M420 160v-20a28 28 0 0 1 56 0v20" stroke={color.rose400} strokeWidth="6" fill="none" />
    <Panel x="402" y="160" w="92" h="120" r="12" fill={color.white} stroke={color.rose400} sw="4" />
    <circle cx="448" cy="240" r="14" fill={color.rose400} />
  </svg>
);

const EvaluationSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Monitoring & Evaluation" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Dashboard gauges */}
    <Panel x="110" y="90" w="220" h="140" r="12" fill={color.white} />
    <circle cx="200" cy="160" r="30" fill={color.cyan100} />
    <path d="M200 160l26-10" stroke={color.cyan500} strokeWidth="6" strokeLinecap="round" />
    <Panel x="380" y="90" w="250" h="140" r="12" fill={color.white} />
    <Panel x="410" y="190" w="40" h="40" r="6" fill={color.cyan500} />
    <Panel x="460" y="170" w="40" h="60" r="6" fill={color.indigo400} />
    <Panel x="510" y="150" w="40" h="80" r="6" fill={color.emerald400} />
  </svg>
);

const LegalRefsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal Framework & References" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Books + globe */}
    <Panel x="120" y="120" w="120" h="24" r="6" fill={color.rose100} />
    <Panel x="136" y="96" w="120" h="24" r="6" fill={color.amber100} />
    <Panel x="152" y="72" w="120" h="24" r="6" fill={color.cyan100} />
    <circle cx="560" cy="160" r="46" fill={color.white} />
    <path d="M560 120a40 40 0 0 1 0 80a40 40 0 0 1 0-80" stroke={color.indigo400} strokeWidth="4" fill="none" />
    <path d="M520 160h80" stroke={color.indigo400} strokeWidth="4" />
  </svg>
);

const ConclusionSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Flag + laurel */}
    <Panel x="120" y="70" w="14" h="160" r="7" fill={color.indigo600} />
    <path d="M134 72h120l-20 22 20 22H134z" fill={color.cyan500} />
    <path d="M520 240c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
    <path d="M520 240c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
  </svg>
);

/* -------------------- Feature Section Wrapper (parallax + reveal) -------------------- */
const FeatureSection = ({ id, title, bullets, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
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
          <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed text-[15px] sm:text-base">{b}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------- Page -------------------- */
export default function CyberAwarenessDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

  const svgMap = {
    IntroSVG,
    ScopeSVG,
    CampaignsSVG,
    EducationSVG,
    ResearchSVG,
    PartnershipsSVG,
    DigitalContentSVG,
    CommunitySVG,
    ComplianceSVG,
    TrainingSupportSVG,
    DailyTasksSVG,
    EthicsSVG,
    EvaluationSVG,
    LegalRefsSVG,
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
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/department" className="hover:underline">Departments</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">{data.title}</span>
      </motion.nav>

      {/* Hero with parallax illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
          </h1>
          <p className="mt-1.5 sm:mt-2 text-gray-700 text-[15px] sm:text-base">{data.summary}</p>
          <p className="mt-2 sm:mt-3 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

          {/* Quick Pills */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Campaigns", "Education", "Compliance", "Community"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} variants={itemUp} className="relative">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <AwarenessHeroSVG />
            </div>
          </div>
        </motion.div>
      </div>

      {/* All sections as BIG feature blocks with alternating layout */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] ?? IntroSVG;
          return (
            <FeatureSection
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              bullets={sec.bullets}
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-12"
      >
        <Link
          to="/department"
          className="inline-flex items-center text-cyan-700 hover:text-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        >
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Departments
        </Link>
      </motion.div>
    </motion.section>
  );
}
