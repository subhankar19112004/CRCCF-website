
// src/pages/victimSupport/SupportServicesForVictims.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

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
  cyan25:   "#F5FEFF", cyan50:   "#ECFEFF", cyan100: "#CFFAFE", cyan200: "#A5F3FC", cyan300: "#67E8F9", cyan500: "#06B6D4", cyan700: "#0E7490",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald200:"#A7F3D0", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber300:"#FCD34D",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF",
};

/* --------------------------- DATA (kept exactly) --------------------------- */
const data = {
  title: "Support Services for Victims – CRCCF",
  tagline: "Comprehensive Assistance. Legal Guidance. Emotional & Practical Support.",
  sections: [
    {
      id: "intro-support",
      heading: "1. Introduction to Victim Support Services",
      content: `Victims of cybercrime face complex challenges, including financial losses, emotional trauma, and legal uncertainties. CRCCF’s Support Services for Victims are designed to provide comprehensive, tailored assistance for every case.
Our services guide victims through all stages of recovery, ensuring they feel protected, empowered, and informed while navigating legal procedures, psychological recovery, and technical complexities. With CRCCF, victims never face cybercrime challenges alone, and receive structured, professional support at every step.`,
      svg: "IntroSupportSVG",
    },
    {
      id: "legal-guidance",
      heading: "2. Right to Legal Guidance and Assistance",
      content: `Access to expert legal guidance is a core component of victim support services. Victims are entitled to consult professionals specializing in cyber laws, digital forensics, and data protection.
CRCCF ensures victims understand their rights, assisting in complaint filing, evidence preservation, and pursuing civil or criminal remedies. By providing continuous legal counsel, we help victims navigate court procedures efficiently, maintain proper documentation, and secure competent representation throughout investigations and hearings.`,
      svg: "LegalSVG",
    },
    {
      id: "psych-support",
      heading: "3. Psychological and Emotional Support",
      content: `The impact of cybercrime can be deeply emotional, resulting in stress, anxiety, and diminished confidence. Victims have the right to confidential counselling and cyber-psychology support tailored to their unique experiences.
CRCCF’s support services provide ongoing guidance, therapy sessions, and practical coping strategies, helping victims recover mental and emotional strength. Our empathetic approach empowers victims to regain resilience, participate actively in legal processes, and rebuild trust in their online and offline environments.`,
      svg: "PsychSVG",
    },
    {
      id: "evidence-assist",
      heading: "4. Assistance with Evidence Preservation",
      content: `Accurate evidence collection is crucial for successful legal outcomes. Victims are entitled to assistance in securing emails, financial records, social media content, and other digital information without compromising integrity or admissibility.
CRCCF guides victims step-by-step, providing technical expertise and practical support to ensure evidence meets legal standards. This proactive assistance minimizes the risk of challenges or rejection during legal proceedings and strengthens the overall case for justice.`,
      svg: "EvidenceSVG",
    },
    {
      id: "financial-support",
      heading: "5. Financial and Resource Support",
      content: `Cybercrime often results in financial loss or unauthorized transactions. Victims have the right to recover funds, claim compensation, and receive guidance on navigating financial institutions.
CRCCF offers comprehensive resource support, including access to educational materials, secure digital platforms, and practical advice on preventing future incidents. This holistic approach helps victims regain control over financial and digital aspects of their lives, ensuring stability and long-term security.`,
      svg: "FinancialSVG",
    },
    {
      id: "monitoring-updates",
      heading: "6. Continuous Monitoring and Updates",
      content: `Victims are entitled to regular updates on their case status and guidance on protective measures. CRCCF’s support services provide continuous monitoring and transparent communication, keeping victims informed about legal proceedings, investigation progress, and relevant preventive steps.
Staying informed allows victims to make timely, informed decisions while fostering trust in the justice process. Continuous engagement ensures that victims feel supported, valued, and confident throughout their journey.`,
      svg: "MonitoringSVG",
    },
    {
      id: "role-comprehensive",
      heading: "7. CRCCF’s Role in Delivering Comprehensive Support",
      content: `CRCCF is dedicated to providing end-to-end support for cybercrime victims, integrating legal, psychological, technical, and financial assistance. Our team ensures that victims receive personalized and professional help from initial complaint registration to long-term preventive guidance.
By offering a holistic support system, CRCCF protects, empowers, and rehabilitates victims, ensuring that every individual’s rights and well-being are prioritized. Our mission is to provide structured, empathetic, and legally sound assistance at every stage of recovery.`,
      svg: "RoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Ensuring Holistic Recovery for Victims",
      content: `CRCCF’s Support Services for Victims go beyond basic guidance—they provide a complete framework for legal, emotional, and practical assistance. By upholding victims’ rights and offering structured support, we ensure that victims navigate the aftermath of cybercrime with confidence, recover effectively, and pursue justice successfully.
Victims can approach CRCCF without hesitation, assured that they are supported by a trusted, legally-backed, and empathetic organization committed to restoring security, dignity, and peace of mind in their digital and personal lives.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ------------------------- HERO: Video SVG (self-contained) ------------------------- */
const VideoHeroSupport = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Support Services for Victims – Officer Assisting Victim";
  const desc = "A CRCCF support officer approaches and gently helps a distressed victim, offering a support pamphlet in an empathetic scene.";

  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 980 460" role="img" aria-labelledby="vhTitleSS vhDescSS" className="w-full h-auto">
        <title id="vhTitleSS">{title}</title>
        <desc id="vhDescSS">{desc}</desc>
        <defs>
          <linearGradient id="vhSS_grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.18;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="980" height="460" rx="28" fill="url(#vhSS_grad)" />
        {OfficerHelpsVictimOverlay()}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 980 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <clipPath id="vhSS_stage2">
          <rect x="36" y="36" width="620" height="388" rx="26" />
        </clipPath>
      </defs>
      <g clipPath="url(#vhSS_stage2)">
        {poster ? (
          <image href={poster} x="0" y="0" width="980" height="460" preserveAspectRatio="xMidYMid slice" opacity="0.85" />
        ) : null}
        <foreignObject x="0" y="0" width="980" height="460">
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
      {OfficerHelpsVictimOverlay()}
    </svg>
  );
};

/* -------- Realistically Redesigned Overlay: officer helps victim -------- */
function OfficerHelpsVictimOverlay() {
  return (
    <g transform="translate(680, 80)">
      <rect x="0" y="320" width="280" height="15" rx="7.5" fill={color.slate900} opacity="0.08" />
      {/* Victim */}
      <g transform="translate(50, 160)">
        <path d="M0 160 L100 160 L110 170 L-10 170 Z" fill={color.slate300} /> {/* Bench */}
        <circle cx="50" cy="75" r="25" fill="#F8D7B9" />
        <path d="M10 100 C10 150, 90 150, 90 100 Z" fill={color.indigo400} /> {/* Body */}
        <path d="M30 60 C10 70, 20 90, 40 90 M70 60 C90 70, 80 90, 60 90" stroke="#F8D7B9" strokeWidth="12" fill="none" strokeLinecap="round" /> {/* Hands on head */}
      </g>
      {/* Officer */}
      <g transform="translate(180, 150)">
        <circle cx="50" cy="85" r="25" fill="#E0B598" />
        <path d="M10 110 C10 160, 90 160, 90 110 V180 H10 Z" fill={color.emerald600} /> {/* Body */}
        <circle cx="20" cy="125" r="8" fill={color.amber300} /> {/* Badge */}
        <path d="M50 140 C10 130, -20 120, -40 100" stroke={color.emerald600} strokeWidth="14" fill="none" strokeLinecap="round"> {/* Arm */}
           <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Pamphlet */}
        <rect x="-65" y="85" width="40" height="30" rx="4" fill={color.white} stroke={color.slate300}/>
        <rect x="-60" y="95" width="30" height="5" rx="2" fill={color.cyan500}/>
      </g>
    </g>
  );
}

/* ------------------------- SVG helpers & utilities ------------------------- */
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

/* --------------------- Complex, realistic section SVGs --------------------- */
const IntroSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A support agent presenting a clear flowchart of the recovery process." {...props}>
        <BG id="gIntroSS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gIntroSS)" />
        <g transform="translate(520, 200)">
            <circle cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
        </g>
        <g transform="translate(50, 50)">
            <Card w="600" h="300" stroke={color.slate300} sw="2"/>
            <rect x="250" y="40" width="100" height="40" rx="20" fill={color.rose100} />
            <text x="300" y="65" textAnchor="middle">Report</text>
            <path d="M300 80 V120" stroke={color.slate300} strokeWidth="3"/>
            <path d="M150 140 H450" stroke={color.slate300} strokeWidth="3"/>
            {[
                { x: 100, y: 140, label: 'Legal ⚖️', fill: color.indigo100 },
                { x: 250, y: 140, label: 'Emotional ❤️', fill: color.rose100 },
                { x: 400, y: 140, label: 'Technical ⚙️', fill: color.emerald100 },
            ].map(item => (
                <g key={item.label}>
                    <path d={`M300 120 L${item.x + 50} 140`} stroke={color.slate300} strokeWidth="3"/>
                    <rect x={item.x} y={item.y} width="100" height="40" rx="20" fill={item.fill} />
                    <text x={item.x + 50} y={item.y + 25} textAnchor="middle">{item.label}</text>
                </g>
            ))}
        </g>
    </svg>
);

const LegalSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A lawyer and victim reviewing a law book titled 'Cyber Victim Rights'." {...props}>
        <BG id="gLegalSS" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gLegalSS)" />
        <path d="M50 350 H770" stroke={color.slate400} strokeWidth="8"/>
        <g transform="translate(250, 190)">
            <circle cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
        </g>
        <g transform="translate(550, 190)">
            <circle cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.slate700}/>
        </g>
        <g transform="translate(400, 260) rotate(-10)">
            <rect x="-100" y="-60" width="200" height="120" rx="10" fill={color.indigo800}/>
            <rect x="-90" y="-50" width="180" height="100" fill={color.white}/>
            <text x="0" y="-20" textAnchor="middle" fontSize="16" fontWeight="bold">Cyber Victim Rights</text>
            <path d="M-70 10 H70" stroke={color.amber100} strokeWidth="4"/>
        </g>
    </svg>
);

const PsychSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A therapist helping untangle a metaphorical knot of stress for a victim." {...props}>
        <BG id="gPsychSS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.emerald50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gPsychSS)" />
        <g transform="translate(250, 220)">
            <circle cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
        </g>
        <g transform="translate(550, 220)">
            <circle cy="-30" r="25" fill="#E0B598"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.emerald600}/>
        </g>
        <g>
            <path id="tangle" d="M300 100 C 350 50, 450 150, 500 100 S 350 150, 400 50" stroke={color.slate500} strokeWidth="5" fill="none" strokeLinecap="round"/>
            <animate target="#tangle" attributeName="d" values="M300 100 C 350 50, 450 150, 500 100 S 350 150, 400 50; M300 100 C 320 120, 480 80, 500 100 S 350 80, 400 120; M300 100 C 350 50, 450 150, 500 100 S 350 150, 400 50" dur="4s" repeatCount="indefinite" />
        </g>
    </svg>
);

const EvidenceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A digital chain of custody, showing evidence moving securely from victim to case file." {...props}>
        <BG id="gEvidenceSS" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEvidenceSS)" />
        {[
            { x: 150, icon: '📱' }, { x: 350, icon: '🔒' }, { x: 550, icon: '📁' }
        ].map((item, i) => (
            <g key={i}>
                <circle cx={item.x} cy="200" r="50" fill={color.white}/>
                <text x={item.x} y="215" textAnchor="middle" fontSize="50">{item.icon}</text>
                <circle cx={item.x} cy="200" r="50" fill="none" stroke={color.emerald400} strokeWidth="5" strokeDasharray="314" strokeDashoffset="314">
                    <animate attributeName="stroke-dashoffset" from="314" to="0" dur="1s" begin={`${i * 0.5 + 0.5}s`} fill="freeze"/>
                </circle>
            </g>
        ))}
        <path d="M200 200 H300" stroke={color.slate300} strokeWidth="4" strokeDasharray="5" />
        <path d="M400 200 H500" stroke={color.slate300} strokeWidth="4" strokeDasharray="5" />
    </svg>
);

const FinancialSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A shield protecting a bank account from unauthorized fund withdrawal." {...props}>
        <BG id="gFinancialSS" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gFinancialSS)" />
        <g transform="translate(120, 100)">
            <Card w="250" h="200" stroke={color.slate300} sw="2"/>
            <text x="20" y="40">Bank Account</text>
            <text x="20" y="80" fontSize="30" fontWeight="bold">$1,234</text>
            <text x="20" y="140" fill={color.rose400}>-$500 <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/></text>
        </g>
        <g transform="translate(450, 100)">
            <path d="M60 -20l90 36v40c0 44-30 80-90 104-60-24-90-60-90-104v-40l90-36z" fill={color.emerald400} opacity="0">
                <animate attributeName="opacity" from="0" to="0.8" dur="0.5s" begin="1s" fill="freeze"/>
            </path>
        </g>
    </svg>
);

const MonitoringSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A CRCCF agent on a call with a victim, with a monitoring dashboard in the background." {...props}>
        <BG id="gMonitorSS" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo25 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gMonitorSS)" />
        <g transform="translate(180, 220)">
            <circle cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
        </g>
        <g transform="translate(620, 220)">
            <circle cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
        </g>
        <path d="M260 200 C350 150, 450 150, 540 200" stroke={color.cyan300} strokeWidth="4" fill="none" strokeDasharray="5"/>
        <g transform="translate(410, 150)">
            <rect x="-200" y="-100" width="400" height="180" rx="10" fill={color.slate900} opacity="0.5"/>
            <path d="M-180 -20 L-100 -20 L -80 0 L 0 0 L 20 -40 L 100 -40 L 120 -20 L 180 -20" stroke={color.emerald300} strokeWidth="3" fill="none"/>
        </g>
    </svg>
);

const RoleSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A central shield made of four puzzle pieces: Legal, Emotional, Technical, and Financial support." {...props}>
        <BG id="gRoleSS" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gRoleSS)" />
        <g transform="translate(410, 200)">
            <g id="p1" transform="translate(-10, -10)"><path d="M-100 0 h100 v100 h-90 a10 10 0 0 1 -10 -10z" fill={color.indigo100}/><text x="-50" y="50">⚖️</text></g>
            <g id="p2" transform="translate(10, -10)"><path d="M0 0 h100 v90 a10 10 0 0 1 -10 10h-90v-100z" fill={color.rose100}/><text x="50" y="50">❤️</text></g>
            <g id="p3" transform="translate(-10, 10)"><path d="M-100 0 v90 a10 10 0 0 0 10 10h90v-100z" fill={color.emerald100}/><text x="-50" y="50">⚙️</text></g>
            <g id="p4" transform="translate(10, 10)"><path d="M0 0 v100 h90 a10 10 0 0 0 10-10v-90z" fill={color.amber100}/><text x="50" y="50">💵</text></g>
            <g fontSize="50" textAnchor="middle">
                 <animateTransform target="#p1" attributeName="transform" type="translate" from="0 0" to="-10 -10" dur="2s" repeatCount="indefinite" direction="alternate"/>
                 <animateTransform target="#p2" attributeName="transform" type="translate" from="0 0" to="10 -10" dur="2s" repeatCount="indefinite" direction="alternate"/>
                 <animateTransform target="#p3" attributeName="transform" type="translate" from="0 0" to="-10 10" dur="2s" repeatCount="indefinite" direction="alternate"/>
                 <animateTransform target="#p4" attributeName="transform" type="translate" from="0 0" to="10 10" dur="2s" repeatCount="indefinite" direction="alternate"/>
            </g>
        </g>
    </svg>
);

const ConclusionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="An empowered victim holding icons for each type of support they received." {...props}>
        <BG id="gConclusionSS" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gConclusionSS)" />
        <g transform="translate(410, 220)">
            <circle cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
        </g>
        <g fontSize="50" textAnchor="middle">
            <text x="200" y="200">⚖️</text>
            <text x="300" y="150">❤️</text>
            <text x="500" y="150">⚙️</text>
            <text x="600" y="200">💵</text>
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
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-[400px] overflow-hidden">
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
export default function SupportServicesForVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSupportSVG,
    LegalSVG,
    PsychSVG,
    EvidenceSVG,
    FinancialSVG,
    MonitoringSVG,
    RoleSVG,
    ConclusionSVG,
  };

  return (
    <motion.section id="top" variants={container} initial="hidden" animate="show" className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Breadcrumb */}
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Support Services for Victims</span>
      </motion.nav>

      {/* Hero w/ masked Video SVG (officer helping victim) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Legal", "Psychology", "Evidence", "Financial", "Monitoring", "Holistic"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">{pill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroSupport
                src="/assets/video/support-services-hero.mp4"
                poster="/assets/video/support-services-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] || IntroSupportSVG;
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
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 md:mt-12 max-w-4xl">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-gray-600">
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or court procedures.
            All information is handled with confidentiality and in compliance with the IT Act & DPDP Act.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}