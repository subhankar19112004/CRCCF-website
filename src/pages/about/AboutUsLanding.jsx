import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { aboutUsMainData } from '../../data/aboutUsMainData.jsx';

// Constants
const WORDS_PER_PAGE = 1200;

// Complex Realistic SVG Components
const LegalIdentitySVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="legalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
      </filter>
    </defs>
    
    {/* Document Stack */}
    <motion.rect
      x="80" y="100" width="240" height="160" rx="8"
      fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"
      filter="url(#shadow)"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
      }}
    />
    
    <motion.rect
      x="90" y="90" width="220" height="150" rx="6"
      fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.1 } }
      }}
    />
    
    {/* Official Seal */}
    <motion.circle
      cx="200" cy="175" r="35"
      fill="none" stroke="url(#legalGrad)" strokeWidth="3"
      variants={{
        hidden: { scale: 0, rotate: -180 },
        visible: { scale: 1, rotate: 0, transition: { type: "spring", delay: 0.6 } }
      }}
    />
    
    <motion.path
      d="M200 160 L200 190 M185 175 L215 175"
      stroke="url(#legalGrad)" strokeWidth="2"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.8, delay: 1 } }
      }}
    />
    
    {/* Text Lines */}
    <motion.path
      d="M110 120 L290 120 M110 140 L270 140 M110 160 L250 160 M110 180 L230 180"
      stroke="#64748b" strokeWidth="1.5"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.2, delay: 0.3 } }
      }}
    />
  </motion.svg>
);

const DocumentsSVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
      }
    }}
  >
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <filter id="docShadow">
        <feDropShadow dx="3" dy="5" stdDeviation="6" floodOpacity="0.2"/>
      </filter>
    </defs>
    
    {/* Folder */}
    <motion.path
      d="M100 120 L140 100 L300 100 L300 220 L100 220 Z"
      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2"
      filter="url(#docShadow)"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.5 } }
      }}
    />
    
    {/* Documents */}
    <motion.rect
      x="120" y="130" width="160" height="20" rx="2"
      fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"
      variants={{
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.5 } }
      }}
    />
    
    <motion.rect
      x="120" y="160" width="140" height="20" rx="2"
      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"
      variants={{
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.7 } }
      }}
    />
    
    <motion.rect
      x="120" y="190" width="180" height="20" rx="2"
      fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"
      variants={{
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.9 } }
      }}
    />
    
    {/* Stamp */}
    <motion.rect
      x="280" y="130" width="40" height="40" rx="8"
      fill="none" stroke="url(#docGrad)" strokeWidth="3"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 1.2 } }
      }}
    />
  </motion.svg>
);

const QualitySVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="qualityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <radialGradient id="medalGrad">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="100%" stopColor="#fde68a" />
      </radialGradient>
    </defs>
    
    {/* Medal */}
    <motion.circle
      cx="200" cy="150" r="60"
      fill="url(#medalGrad)" stroke="url(#qualityGrad)" strokeWidth="4"
      variants={{
        hidden: { scale: 0, rotate: -180 },
        visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100 } }
      }}
    />
    
    {/* Ribbon */}
    <motion.path
      d="M140 150 Q200 120 260 150 Q200 180 140 150"
      fill="url(#qualityGrad)"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1, delay: 0.5 } }
      }}
    />
    
    {/* Check Marks */}
    <motion.path
      d="M180 140 L195 155 L220 130"
      stroke="#059669" strokeWidth="4" fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.6, delay: 1 } }
      }}
    />
    
    <motion.path
      d="M180 160 L195 175 L220 150"
      stroke="#059669" strokeWidth="4" fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.6, delay: 1.2 } }
      }}
    />
  </motion.svg>
);

const SecurityShieldSVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Shield */}
    <motion.path
      d="M200 80 Q280 100 300 150 Q280 200 200 220 Q120 200 100 150 Q120 100 200 80 Z"
      fill="url(#shieldGrad)" fillOpacity="0.1"
      stroke="url(#shieldGrad)" strokeWidth="4"
      filter="url(#glow)"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } }
      }}
    />
    
    {/* Lock */}
    <motion.rect
      x="170" y="130" width="60" height="50" rx="8"
      fill="#06b6d4" fillOpacity="0.2"
      stroke="url(#shieldGrad)" strokeWidth="3"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 0.8 } }
      }}
    />
    
    <motion.circle
      cx="200" cy="120" r="15"
      fill="none" stroke="url(#shieldGrad)" strokeWidth="3"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 1 } }
      }}
    />
    
    {/* Key */}
    <motion.path
      d="M250 170 L270 170 L270 160 L280 160 L280 180 L270 180 L270 170"
      stroke="#f59e0b" strokeWidth="3" fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.8, delay: 1.3 } }
      }}
    />
  </motion.svg>
);

const DataPrivacySVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    
    {/* Database */}
    <motion.ellipse
      cx="200" cy="100" rx="80" ry="20"
      fill="none" stroke="url(#dataGrad)" strokeWidth="3"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1 } }
      }}
    />
    
    <motion.rect
      x="120" y="100" width="160" height="120" rx="10"
      fill="none" stroke="url(#dataGrad)" strokeWidth="3"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1, delay: 0.3 } }
      }}
    />
    
    <motion.ellipse
      cx="200" cy="220" rx="80" ry="20"
      fill="none" stroke="url(#dataGrad)" strokeWidth="3"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1, delay: 0.6 } }
      }}
    />
    
    {/* Data Lines */}
    <motion.path
      d="M160 120 L240 120 M150 150 L250 150 M140 180 L260 180"
      stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.2, delay: 0.9 } }
      }}
    />
    
    {/* Lock Icon */}
    <motion.path
      d="M280 160 L300 160 L300 180 L280 180 Z M290 150 L290 160"
      stroke="#10b981" strokeWidth="3" fill="none"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 1.2 } }
      }}
    />
  </motion.svg>
);

const NetworkSecuritySVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
      }
    }}
  >
    <defs>
      <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    
    {/* Network Nodes */}
    <motion.circle
      cx="200" cy="150" r="8"
      fill="url(#networkGrad)"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 0.2 } }
      }}
    />
    
    {[
      { cx: 120, cy: 100 }, { cx: 280, cy: 100 },
      { cx: 100, cy: 200 }, { cx: 300, cy: 200 },
      { cx: 150, cy: 80 }, { cx: 250, cy: 80 },
      { cx: 80, cy: 150 }, { cx: 320, cy: 150 }
    ].map((node, index) => (
      <motion.circle
        key={index}
        cx={node.cx}
        cy={node.cy}
        r="5"
        fill="#ef4444"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1, transition: { type: "spring", delay: 0.1 * index } }
        }}
      />
    ))}
    
    {/* Connection Lines */}
    <motion.path
      d="M200 150 L120 100 M200 150 L280 100 M200 150 L100 200 M200 150 L300 200"
      stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.5, delay: 0.5 } }
      }}
    />
    
    {/* Protection Shield */}
    <motion.path
      d="M200 120 Q240 130 260 150 Q240 170 200 180 Q160 170 140 150 Q160 130 200 120 Z"
      fill="none" stroke="#10b981" strokeWidth="3"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.2, delay: 1 } }
      }}
    />
  </motion.svg>
);

const EducationSVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="eduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#84cc16" />
        <stop offset="100%" stopColor="#65a30d" />
      </linearGradient>
    </defs>
    
    {/* Book */}
    <motion.rect
      x="140" y="100" width="120" height="80" rx="4"
      fill="#fefce8" stroke="#eab308" strokeWidth="3"
      variants={{
        hidden: { rotateY: 90 },
        visible: { rotateY: 0, transition: { duration: 1 } }
      }}
    />
    
    {/* Pages */}
    <motion.path
      d="M140 100 L140 180 M160 110 L250 110 M160 130 L240 130 M160 150 L230 150"
      stroke="#ca8a04" strokeWidth="2"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1, delay: 0.5 } }
      }}
    />
    
    {/* Graduation Cap */}
    <motion.path
      d="M100 130 L300 130 L280 150 L120 150 Z"
      fill="#fefce8" stroke="#eab308" strokeWidth="2"
      variants={{
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.8 } }
      }}
    />
    
    <motion.path
      d="M200 130 L200 100 L220 110 L200 130"
      fill="#fefce8" stroke="#eab308" strokeWidth="2"
      variants={{
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 1 } }
      }}
    />
  </motion.svg>
);

const SocialImpactSVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
      }
    }}
  >
    <defs>
      <linearGradient id="socialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
    </defs>
    
    {/* Central Community */}
    <motion.circle
      cx="200" cy="150" r="15"
      fill="url(#socialGrad)"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 0.2 } }
      }}
    />
    
    {/* Surrounding People */}
    {[
      { cx: 120, cy: 120 }, { cx: 280, cy: 120 },
      { cx: 150, cy: 200 }, { cx: 250, cy: 200 },
      { cx: 100, cy: 150 }, { cx: 300, cy: 150 }
    ].map((person, index) => (
      <motion.circle
        key={index}
        cx={person.cx}
        cy={person.cy}
        r="8"
        fill="#ec4899"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1, transition: { type: "spring", delay: 0.1 * index + 0.3 } }
        }}
      />
    ))}
    
    {/* Connection Waves */}
    <motion.path
      d="M200 150 Q160 140 120 120 M200 150 Q240 140 280 120"
      stroke="#ec4899" strokeWidth="2" fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1, delay: 0.8 } }
      }}
    />
    
    {/* Heart */}
    <motion.path
      d="M200 180 Q220 160 240 170 Q260 180 240 200 Q220 220 200 240 Q180 220 160 200 Q140 180 160 170 Q180 160 200 180"
      fill="none" stroke="#ec4899" strokeWidth="3"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.5, delay: 1 } }
      }}
    />
  </motion.svg>
);

const DigitalForensicsSVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="forensicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
    </defs>
    
    {/* Magnifying Glass */}
    <motion.circle
      cx="180" cy="140" r="40"
      fill="none" stroke="url(#forensicGrad)" strokeWidth="4"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 0.3 } }
      }}
    />
    
    <motion.path
      d="M220 180 L260 220"
      stroke="url(#forensicGrad)" strokeWidth="4"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.8, delay: 0.6 } }
      }}
    />
    
    {/* Digital Traces */}
    <motion.path
      d="M120 100 L150 120 L130 150 L100 130 Z"
      fill="none" stroke="#10b981" strokeWidth="2"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.6, delay: 0.9 } }
      }}
    />
    
    <motion.path
      d="M280 100 L250 120 L270 150 L300 130 Z"
      fill="none" stroke="#ef4444" strokeWidth="2"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.6, delay: 1.1 } }
      }}
    />
    
    {/* Binary Code */}
    <motion.path
      d="M100 200 L120 200 M140 200 L160 200 M100 220 L120 220 M140 220 L160 220"
      stroke="#6b7280" strokeWidth="3"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 0.8, delay: 1.3 } }
      }}
    />
  </motion.svg>
);

const InnovationSVG = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 }
      }
    }}
  >
    <defs>
      <linearGradient id="innovationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
      <filter id="glow2">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood floodColor="#f97316" floodOpacity="0.5"/>
        <feComposite in2="blur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Brain/Innovation Center */}
    <motion.path
      d="M150 130 Q200 100 250 130 Q280 150 250 180 Q200 200 150 180 Q120 150 150 130"
      fill="none" stroke="url(#innovationGrad)" strokeWidth="4"
      filter="url(#glow2)"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 2 } }
      }}
    />
    
    {/* Spark Lines */}
    {[
      { d: "M200 150 L180 110", color: "#f97316" },
      { d: "M200 150 L220 110", color: "#f97316" },
      { d: "M200 150 L170 130", color: "#f59e0b" },
      { d: "M200 150 L230 130", color: "#f59e0b" },
      { d: "M200 150 L160 170", color: "#eab308" },
      { d: "M200 150 L240 170", color: "#eab308" }
    ].map((spark, index) => (
      <motion.path
        key={index}
        d={spark.d}
        stroke={spark.color}
        strokeWidth="2"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { duration: 0.6, delay: 0.5 + index * 0.1 } }
        }}
      />
    ))}
    
    {/* Light Bulb */}
    <motion.path
      d="M200 100 L190 80 L210 80 Z"
      fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", delay: 1.2 } }
      }}
    />
  </motion.svg>
);

// SVG Mapping with realistic categorization
const svgMap = {
  // Legal & Compliance
  'sec1-legal-identity-foundational-recognition': LegalIdentitySVG,
  'sec2-foundational-documents-public-trust': DocumentsSVG,
  'sec3-quality-governance-standards': QualitySVG,
  'sec65-legal-foundation-and-statutory-recognition': LegalIdentitySVG,
  'sec66-iso-certifications-and-quality-assurance': QualitySVG,
  'sec67-governance-accountability-and-public-trust': DocumentsSVG,
  'sec68-copyright-protection-notice': LegalIdentitySVG,
  'sec69-legal-enforcement-and-public-disclaimer': LegalIdentitySVG,
  'sec70-public-copyright-and-usage-guidelines': LegalIdentitySVG,
  
  // Security & Risk Management
  'sec4-risk-management-operational-resilience': NetworkSecuritySVG,
  'sec5-it-security-excellence': SecurityShieldSVG,
  'sec9-data-privacy-information-security': DataPrivacySVG,
  'sec36-cyber-risk-management-for-businesses': NetworkSecuritySVG,
  'sec51-join-hands-to-protect-citizens-online': SecurityShieldSVG,
  'sec56-building-a-safe-digital-future': SecurityShieldSVG,
  
  // Education & Training
  'sec7-learning-beyond-classrooms': EducationSVG,
  'sec11-empowering-every-student-building-a-safer-tomorrow': EducationSVG,
  'sec17-educational-alliance-for-cyber-literacy': EducationSVG,
  'sec24-volunteerism-internship-skill-development': EducationSVG,
  'sec37-skill-development-cyber-career-opportunities': EducationSVG,
  'sec41-national-cyber-volunteer-program': EducationSVG,
  'sec45-educational-outreach-skill-building': EducationSVG,
  'sec61-cyber-certification-education-for-skill-empowerment': EducationSVG,
  'sec62-transforming-lives-through-cyber-training-certification': EducationSVG,
  
  // Social Impact & Community
  'sec6-social-responsibility-humanity': SocialImpactSVG,
  'sec12-womens-dignity-nations-pride': SocialImpactSVG,
  'sec15-nation-first-humanity-always': SocialImpactSVG,
  'sec18-public-awareness-every-citizen-every-click': SocialImpactSVG,
  'sec20-social-welfare-through-technology-law': SocialImpactSVG,
  'sec23-public-contribution-donation-path-a-call-from-the-heart': SocialImpactSVG,
  'sec28-empowering-women-youth-vulnerable-groups': SocialImpactSVG,
  'sec30-together-for-a-cyber-safe-just-india': SocialImpactSVG,
  'sec35-national-mission-for-digital-safety': SocialImpactSVG,
  'sec38-awareness-campaigns-for-rural-urban-india': SocialImpactSVG,
  'sec39-womens-cybersecurity-leadership-program': SocialImpactSVG,
  'sec40-a-call-for-nationwide-unity-contribution': SocialImpactSVG,
  'sec44-women-children-empowerment-initiatives': SocialImpactSVG,
  'sec48-digital-awareness-community-campaigns': SocialImpactSVG,
  'sec50-join-the-mission-together-for-a-safe-india': SocialImpactSVG,
  'sec52-your-support-strengthens-odisha-and-the-nation': SocialImpactSVG,
  'sec54-empowering-communities-through-public-support': SocialImpactSVG,
  'sec57-mobilizing-citizens-for-cyber-protection': SocialImpactSVG,
  'sec59-empowering-women-children-communities': SocialImpactSVG,
  'sec60-join-crccf-your-contribution-saves-lives': SocialImpactSVG,
  'sec63-crccf-a-unified-vision-for-digital-safety': SocialImpactSVG,
  'sec64-call-to-action-join-support-and-empower': SocialImpactSVG,
  
  // Digital Forensics & Investigation
  'sec10-digital-forensics-evidence-integrity': DigitalForensicsSVG,
  'sec26-technological-innovation-forensic-excellence': DigitalForensicsSVG,
  'sec47-forensic-services-case-support': DigitalForensicsSVG,
  
  // Innovation & Technology
  'sec42-research-innovation-in-cybersecurity': InnovationSVG,
  
  // Corporate & Partnerships
  'sec8-integrity-anti-corruption-commitment': QualitySVG,
  'sec14-trust-of-institutions-power-of-collaboration': DocumentsSVG,
  'sec16-corporate-ethics-digital-responsibility': QualitySVG,
  'sec19-legal-network-multi-agency-collaboration': NetworkSecuritySVG,
  'sec21-international-collaboration-global-recognition': DocumentsSVG,
  'sec29-legal-compliance-corporate-governance-transparency': DocumentsSVG,
  'sec43-legal-policy-advocacy': LegalIdentitySVG,
  'sec46-corporate-ngo-collaboration-for-social-impact': DocumentsSVG,
  
  // Victim Support & Justice
  'sec13-justice-for-victims-strength-for-survivors': SocialImpactSVG,
  'sec27-public-grievance-redressal-victim-helpline': SocialImpactSVG,
  'sec32-emotional-support-for-victims-of-cybercrime': SocialImpactSVG,
  'sec34-legal-empowerment-pro-bono-network': LegalIdentitySVG,
  'sec49-emotional-healing-counseling-support': SocialImpactSVG,
  'sec58-supporting-victims-and-restoring-justice': SocialImpactSVG,
  
  // Awareness & Clubs
  'sec33-cyber-clubs-awareness-cells-in-institutions': EducationSVG,
  
  // Recognition & Impact
  'sec22-vision-for-a-digitally-safe-empowered-india': InnovationSVG,
  'sec25-recognition-awards-public-trust': QualitySVG,
  'sec31-public-trust-transparency-accountability': DocumentsSVG,
  'sec53-funding-cyber-safety-initiatives': DocumentsSVG,
  'sec55-every-contribution-creates-real-impact': QualitySVG,
};

const AboutUsLanding = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const sectionRefs = useRef({});

  // Calculate pages based on word count
  const pages = useMemo(() => {
    const calculatedPages = [];
    let currentPage = [];
    let currentWordCount = 0;

    aboutUsMainData.forEach((section) => {
      const sectionWordCount = section.content.split(/\s+/).length;
      
      if (currentWordCount + sectionWordCount > WORDS_PER_PAGE && currentPage.length > 0) {
        calculatedPages.push([...currentPage]);
        currentPage = [section];
        currentWordCount = sectionWordCount;
      } else {
        currentPage.push(section);
        currentWordCount += sectionWordCount;
      }
    });

    if (currentPage.length > 0) {
      calculatedPages.push(currentPage);
    }

    return calculatedPages;
  }, []);

  // Handle deep linking on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const targetSectionIndex = aboutUsMainData.findIndex(section => section.id === hash);
      if (targetSectionIndex !== -1) {
        const pageIndex = pages.findIndex(page => 
          page.some(section => section.id === hash)
        );
        if (pageIndex !== -1) {
          setActivePageIndex(pageIndex);
          setTimeout(() => {
            const element = sectionRefs.current[hash];
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }
      }
    }
  }, [pages]);

  const handlePageChange = (newPageIndex) => {
    setActivePageIndex(newPageIndex);
    if (pages[newPageIndex] && pages[newPageIndex][0]) {
      window.location.hash = pages[newPageIndex][0].id;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const parseContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.includes('💬') || line.includes('📜') || line.includes('⚠️') || line.includes('🎓') || line.includes('❤️')) {
        return (
          <motion.p
            key={index}
            className="text-blue-700 bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 my-2 rounded-r font-medium"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {line}
          </motion.p>
        );
      }
      return (
        <p key={index} className="mb-3 text-gray-700 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  const currentPageSections = pages[activePageIndex] || [];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About CR Cyber Crime Foundation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering Digital India with Legal Compliance, Cybersecurity Excellence, and Social Responsibility
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-20">
          {currentPageSections.map((section, index) => {
            const SectionSVG = svgMap[section.id];
            
            return (
              <motion.div
                key={section.id}
                ref={el => sectionRefs.current[section.id] = el}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" }
                  }
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                  {/* SVG Column - 2 columns on large screens */}
                  <motion.div
                    className="lg:col-span-2"
                    variants={{
                      hidden: { opacity: 0, x: -60 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.7, delay: 0.2 }
                      }
                    }}
                  >
                    <motion.div
                      className="border-2 border-gray-200 rounded-2xl shadow-2xl h-80 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 p-8"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {SectionSVG && <SectionSVG />}
                    </motion.div>
                  </motion.div>

                  {/* Text Column - 3 columns on large screens */}
                  <motion.div
                    className="lg:col-span-3"
                    variants={{
                      hidden: { opacity: 0, x: 60 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.7, delay: 0.2 }
                      }
                    }}
                  >
                    <div className="space-y-6">
                      <motion.h2
                        className="text-3xl font-bold text-gray-900 leading-tight"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {section.heading}
                      </motion.h2>
                      <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                        {parseContent(section.content)}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        {pages.length > 1 && (
          <motion.div
            className="flex justify-center items-center space-x-8 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => handlePageChange(activePageIndex - 1)}
              disabled={activePageIndex === 0}
              className="p-4 rounded-xl bg-white shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 hover:border-blue-400 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-4">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activePageIndex 
                      ? 'bg-blue-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handlePageChange(activePageIndex + 1)}
              disabled={activePageIndex === pages.length - 1}
              className="p-4 rounded-xl bg-white shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 hover:border-blue-400 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        <motion.div
          className="text-center mt-8 text-gray-600 font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Page {activePageIndex + 1} of {pages.length}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsLanding;