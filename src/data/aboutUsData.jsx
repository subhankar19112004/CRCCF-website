// // src/data/aboutUsData.js
// import {
//   FiInfo,
//   FiTarget,
//   FiEye,
//   FiHelpCircle,
//   FiActivity,
//   FiClipboard,
//   FiBriefcase,
//   FiShield,
//   FiLock,
//   FiGlobe,
//   FiFileText,
//   FiBookOpen,
//   FiFlag,
//   FiEdit,
//   FiAlertOctagon,
//   FiCheckCircle,
//   FiUsers,
//   FiClock,
//   FiHeart,
// } from "react-icons/fi";


// export const aboutUsData = [
//   {
//     slug: "introduction",
//     title: "Introduction of CRCCF",
//     description: "A foundational overview of CRCCF, who we are and our legal basis.",
//     icon: <FiInfo />,
//     content: (
//       <>
//         <p>CRCCF (Cyber Crime Foundation) was established in 2025 under Section 8 of the Companies Act.</p>
//         <p>We are a non-profit dedicated to strengthening India’s digital security ecosystem through awareness, research, and support.</p>
//       </>
//     )
//   },
//   {
//     slug: "what-we-do",
//     title: "What we do",
//     description: "Services, initiatives, and contributions of CRCCF.",
//     icon: <FiTarget />,
//     content: (
//       <>
//         <p>We conduct cyber awareness drives, investigate digital crimes, and provide legal and psychological support to victims.</p>
//         <ul>
//           <li>Cyber Awareness Campaigns</li>
//           <li>Incident Response Support</li>
//           <li>Training & Capacity Building</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "mission-vision",
//     title: "Mission or Vision of CRCCF",
//     description: "Our goals and long-term vision for a cyber-safe nation.",
//     icon: <FiEye />,
//     content: (
//       <>
//         <p>Our mission is to protect and empower citizens in the digital age.</p>
//         <p>Our vision is to make cyberspace safer, inclusive, and legally equipped to fight cybercrimes.</p>
//       </>
//     )
//   },
//   {
//     slug: "purpose",
//     title: "Purpose of CRCCF",
//     description: "Why CRCCF exists and the issues it addresses.",
//     icon: <FiHelpCircle />,
//     content: (
//       <>
//         <p>CRCCF was born out of the urgent need to support victims of cybercrimes and to prevent digital threats through awareness and action.</p>
//       </>
//     )
//   },
//   {
//     slug: "activity",
//     title: "Activity of CRCCF",
//     description: "Ongoing programs and fieldwork of CRCCF.",
//     icon: <FiActivity />,
//     content: (
//       <>
//         <ul>
//           <li>Workshops and Seminars</li>
//           <li>Online and Offline Investigations</li>
//           <li>Legal Clinics for Cyber Victims</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "objective",
//     title: "Objective of CRCCF",
//     description: "Core objectives that drive our mission.",
//     icon: <FiClipboard />,
//     content: (
//       <>
//         <p>To create a secure digital environment by reducing cyber vulnerabilities and helping affected individuals legally and emotionally.</p>
//       </>
//     )
//   },
//   {
//     slug: "service",
//     title: "Service of CRCCF",
//     description: "Our range of public services and assistance offerings.",
//     icon: <FiBriefcase />,
//     content: (
//       <>
//         <ul>
//           <li>Cyber Helpdesk</li>
//           <li>Legal Aid</li>
//           <li>Digital Literacy Training</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "privacy-policy",
//     title: "Privacy policy",
//     description: "How we collect and manage user data.",
//     icon: <FiShield />,
//     content: (
//       <>
//         <p>We respect user privacy and follow strict data protection measures to ensure confidentiality.</p>
//       </>
//     )
//   },
//   {
//     slug: "data-protection-policy",
//     title: "Privacy Data Protection Policy",
//     description: "Steps we take to protect personal data and digital identities.",
//     icon: <FiLock />,
//     content: (
//       <>
//         <p>Data is stored securely with minimal retention periods and encrypted access protocols.</p>
//       </>
//     )
//   },
//   {
//     slug: "gdpr",
//     title: "GDPR",
//     description: "Compliance with international data regulations like GDPR.",
//     icon: <FiGlobe />,
//     content: (
//       <>
//         <p>We adhere to GDPR principles to ensure transparency, accountability, and user rights.</p>
//       </>
//     )
//   },
//   {
//     slug: "terms",
//     title: "Term & Condition of CRCCF",
//     description: "The user terms for accessing our platforms and services.",
//     icon: <FiFileText />,
//     content: (
//       <>
//         <p>Use of our services is subject to terms ensuring responsible and lawful usage.</p>
//       </>
//     )
//   },
//   {
//     slug: "rules-regulation",
//     title: "Rules & Regulation of CRCCF",
//     description: "Internal and public rules that govern CRCCF operations.",
//     icon: <FiBookOpen />,
//     content: (
//       <>
//         <ul>
//           <li>Transparency</li>
//           <li>Accountability</li>
//           <li>Fair Usage</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "guidelines",
//     title: "Guidelines of CRCCF",
//     description: "General and legal guidelines we follow.",
//     icon: <FiFlag />,
//     content: (
//       <>
//         <p>All our programs and user interactions are governed by ethical and legal guidelines laid out by relevant authorities.</p>
//       </>
//     )
//   },
//   {
//     slug: "instruction",
//     title: "Instruction of CRCCF",
//     description: "Important instructions for users and beneficiaries.",
//     icon: <FiEdit />,
//     content: (
//       <>
//         <p>Please follow the instructions while reporting cybercrime or using our services to ensure smooth assistance.</p>
//       </>
//     )
//   },
//   {
//     slug: "legal-disclaimer",
//     title: "Legal Declaimer of CRCCF",
//     description: "Limitation of legal liability from CRCCF’s side.",
//     icon: <FiAlertOctagon />,
//     content: (
//       <>
//         <p>While we provide support and advice, we do not guarantee legal outcomes or serve as a substitute for law enforcement.</p>
//       </>
//     )
//   },
//   {
//     slug: "copyright-registration",
//     title: "Copy Right Registration",
//     description: "Services related to copyright filing and support.",
//     icon: <FiCheckCircle />,
//     content: (
//       <>
//         <p>We assist individuals and businesses in understanding and registering copyrights for their digital creations.</p>
//       </>
//     )
//   },
//   {
//     slug: "legal-compliance",
//     title: "Legal & Compliance",
//     description: "Ensuring legal alignment in all our processes and services.",
//     icon: <FiLock />,
//     content: (
//       <>
//         <p>All our operations adhere to Indian IT laws, privacy regulations, and digital safety frameworks.</p>
//       </>
//     )
//   },
//   {
//     slug: "department",
//     title: "Department of CRCCF",
//     description: "The internal structure and key departments.",
//     icon: <FiUsers />,
//     content: (
//       <>
//         <ul>
//           <li>Legal Department</li>
//           <li>Cyber Investigation</li>
//           <li>Training & Awareness</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "history",
//     title: "Our Story / History",
//     description: "The journey and evolution of CRCCF since inception.",
//     icon: <FiClock />,
//     content: (
//       <>
//         <p>Founded in 2025, we started with a handful of volunteers and have grown into a nationwide initiative combating cybercrime.</p>
//       </>
//     )
//   },
//   {
//     slug: "partnerships",
//     title: "Partnerships & Collaborations",
//     description: "Our affiliations with government, academic, and private bodies.",
//     icon: <FiHeart />,
//     content: (
//       <>
//         <ul>
//           <li>Cybersecurity Institutions</li>
//           <li>Law Enforcement Agencies</li>
//           <li>Universities & Research Centers</li>
//         </ul>
//       </>
//     )
//   }
// ];


// src/data/aboutUsData.js
// import {
//   FiInfo,
//   FiTarget,
//   FiEye,
//   FiHelpCircle,
//   FiActivity,
//   FiClipboard,
//   FiBriefcase,
//   FiShield,
//   FiLock,
//   FiGlobe,
//   FiFileText,
//   FiBookOpen,
//   FiFlag,
//   FiEdit,
//   FiAlertOctagon,
//   FiCheckCircle,
//   FiUsers,
//   FiClock,
//   FiHeart,
// } from "react-icons/fi";

// // Color mapping for each card based on content
// export const cardColors = {
//   "introduction": { bg: "#2563EB", text: "#FFFFFF", border: "#1D4ED8" }, // Blue - informational
//   "what-we-do": { bg: "#059669", text: "#FFFFFF", border: "#047857" }, // Green - action-oriented
//   "mission-vision": { bg: "#7C3AED", text: "#FFFFFF", border: "#6D28D9" }, // Purple - visionary
//   "purpose": { bg: "#DB2777", text: "#FFFFFF", border: "#BE185D" }, // Pink - purpose-driven
//   "activity": { bg: "#D97706", text: "#FFFFFF", border: "#B45309" }, // Amber - active
//   "objective": { bg: "#DC2626", text: "#FFFFFF", border: "#B91C1C" }, // Red - important
//   "service": { bg: "#0891B2", text: "#FFFFFF", border: "#0E7490" }, // Cyan - service-oriented
//   "privacy-policy": { bg: "#4F46E5", text: "#FFFFFF", border: "#4338CA" }, // Indigo - trustworthy
//   "data-protection-policy": { bg: "#0369A1", text: "#FFFFFF", border: "#0C4A6E" }, // Light blue - protective
//   "gdpr": { bg: "#0D9488", text: "#FFFFFF", border: "#0F766E" }, // Teal - compliance
//   "terms": { bg: "#65A30D", text: "#FFFFFF", border: "#4D7C0F" }, // Lime - formal
//   "rules-regulation": { bg: "#EA580C", text: "#FFFFFF", border: "#C2410C" }, // Orange - regulatory
//   "guidelines": { bg: "#7E22CE", text: "#FFFFFF", border: "#6B21A8" }, // Deep purple - guidance
//   "instruction": { bg: "#EAB308", text: "#000000", border: "#CA8A04" }, // Yellow - instructional
//   "legal-disclaimer": { bg: "#475569", text: "#FFFFFF", border: "#334155" }, // Gray - cautionary
//   "copyright-registration": { bg: "#10B981", text: "#FFFFFF", border: "#059669" }, // Emerald - creative
//   "legal-compliance": { bg: "#3730A3", text: "#FFFFFF", border: "#312E81" }, // Deep indigo - legal
//   "department": { bg: "#BE185D", text: "#FFFFFF", border: "#9D174D" }, // Rose - organizational
//   "history": { bg: "#4B5563", text: "#FFFFFF", border: "#374151" }, // Slate - historical
//   "partnerships": { bg: "#A855F7", text: "#FFFFFF", border: "#9333EA" }, // Light purple - collaborative
// };

// export const aboutUsData = [
//   {
//     slug: "introduction",
//     title: "Introduction of CRCCF",
//     description: "A foundational overview of CRCCF, who we are and our legal basis.",
//     icon: <FiInfo />,
//     content: (
//       <>
//         <p>CRCCF (Cyber Crime Foundation) was established in 2025 under Section 8 of the Companies Act.</p>
//         <p>We are a non-profit dedicated to strengthening India's digital security ecosystem through awareness, research, and support.</p>
//       </>
//     )
//   },
//   {
//     slug: "what-we-do",
//     title: "What we do",
//     description: "Services, initiatives, and contributions of CRCCF.",
//     icon: <FiTarget />,
//     content: (
//       <>
//         <p>We conduct cyber awareness drives, investigate digital crimes, and provide legal and psychological support to victims.</p>
//         <ul>
//           <li>Cyber Awareness Campaigns</li>
//           <li>Incident Response Support</li>
//           <li>Training & Capacity Building</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "mission-vision",
//     title: "Mission or Vision of CRCCF",
//     description: "Our goals and long-term vision for a cyber-safe nation.",
//     icon: <FiEye />,
//     content: (
//       <>
//         <p>Our mission is to protect and empower citizens in the digital age.</p>
//         <p>Our vision is to make cyberspace safer, inclusive, and legally equipped to fight cybercrimes.</p>
//       </>
//     )
//   },
//   {
//     slug: "purpose",
//     title: "Purpose of CRCCF",
//     description: "Why CRCCF exists and the issues it addresses.",
//     icon: <FiHelpCircle />,
//     content: (
//       <>
//         <p>CRCCF was born out of the urgent need to support victims of cybercrimes and to prevent digital threats through awareness and action.</p>
//       </>
//     )
//   },
//   {
//     slug: "activity",
//     title: "Activity of CRCCF",
//     description: "Ongoing programs and fieldwork of CRCCF.",
//     icon: <FiActivity />,
//     content: (
//       <>
//         <ul>
//           <li>Workshops and Seminars</li>
//           <li>Online and Offline Investigations</li>
//           <li>Legal Clinics for Cyber Victims</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "objective",
//     title: "Objective of CRCCF",
//     description: "Core objectives that drive our mission.",
//     icon: <FiClipboard />,
//     content: (
//       <>
//         <p>To create a secure digital environment by reducing cyber vulnerabilities and helping affected individuals legally and emotionally.</p>
//       </>
//     )
//   },
//   {
//     slug: "service",
//     title: "Service of CRCCF",
//     description: "Our range of public services and assistance offerings.",
//     icon: <FiBriefcase />,
//     content: (
//       <>
//         <ul>
//           <li>Cyber Helpdesk</li>
//           <li>Legal Aid</li>
//           <li>Digital Literacy Training</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "privacy-policy",
//     title: "Privacy policy",
//     description: "How we collect and manage user data.",
//     icon: <FiShield />,
//     content: (
//       <>
//         <p>We respect user privacy and follow strict data protection measures to ensure confidentiality.</p>
//       </>
//     )
//   },
//   {
//     slug: "data-protection-policy",
//     title: "Privacy Data Protection Policy",
//     description: "Steps we take to protect personal data and digital identities.",
//     icon: <FiLock />,
//     content: (
//       <>
//         <p>Data is stored securely with minimal retention periods and encrypted access protocols.</p>
//       </>
//     )
//   },
//   {
//     slug: "gdpr",
//     title: "GDPR",
//     description: "Compliance with international data regulations like GDPR.",
//     icon: <FiGlobe />,
//     content: (
//       <>
//         <p>We adhere to GDPR principles to ensure transparency, accountability, and user rights.</p>
//       </>
//     )
//   },
//   {
//     slug: "terms",
//     title: "Term & Condition of CRCCF",
//     description: "The user terms for accessing our platforms and services.",
//     icon: <FiFileText />,
//     content: (
//       <>
//         <p>Use of our services is subject to terms ensuring responsible and lawful usage.</p>
//       </>
//     )
//   },
//   {
//     slug: "rules-regulation",
//     title: "Rules & Regulation of CRCCF",
//     description: "Internal and public rules that govern CRCCF operations.",
//     icon: <FiBookOpen />,
//     content: (
//       <>
//         <ul>
//           <li>Transparency</li>
//           <li>Accountability</li>
//           <li>Fair Usage</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "guidelines",
//     title: "Guidelines of CRCCF",
//     description: "General and legal guidelines we follow.",
//     icon: <FiFlag />,
//     content: (
//       <>
//         <p>All our programs and user interactions are governed by ethical and legal guidelines laid out by relevant authorities.</p>
//       </>
//     )
//   },
//   {
//     slug: "instruction",
//     title: "Instruction of CRCCF",
//     description: "Important instructions for users and beneficiaries.",
//     icon: <FiEdit />,
//     content: (
//       <>
//         <p>Please follow the instructions while reporting cybercrime or using our services to ensure smooth assistance.</p>
//       </>
//     )
//   },
//   {
//     slug: "legal-disclaimer",
//     title: "Legal Declaimer of CRCCF",
//     description: "Limitation of legal liability from CRCCF's side.",
//     icon: <FiAlertOctagon />,
//     content: (
//       <>
//         <p>While we provide support and advice, we do not guarantee legal outcomes or serve as a substitute for law enforcement.</p>
//       </>
//     )
//   },
//   {
//     slug: "copyright-registration",
//     title: "Copy Right Registration",
//     description: "Services related to copyright filing and support.",
//     icon: <FiCheckCircle />,
//     content: (
//       <>
//         <p>We assist individuals and businesses in understanding and registering copyrights for their digital creations.</p>
//       </>
//     )
//   },
//   {
//     slug: "legal-compliance",
//     title: "Legal & Compliance",
//     description: "Ensuring legal alignment in all our processes and services.",
//     icon: <FiLock />,
//     content: (
//       <>
//         <p>All our operations adhere to Indian IT laws, privacy regulations, and digital safety frameworks.</p>
//       </>
//     )
//   },
//   {
//     slug: "department",
//     title: "Department of CRCCF",
//     description: "The internal structure and key departments.",
//     icon: <FiUsers />,
//     content: (
//       <>
//         <ul>
//           <li>Legal Department</li>
//           <li>Cyber Investigation</li>
//           <li>Training & Awareness</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     slug: "history",
//     title: "Our Story / History",
//     description: "The journey and evolution of CRCCF since inception.",
//     icon: <FiClock />,
//     content: (
//       <>
//         <p>Founded in 2025, we started with a handful of volunteers and have grown into a nationwide initiative combating cybercrime.</p>
//       </>
//     )
//   },
//   {
//     slug: "partnerships",
//     title: "Partnerships & Collaborations",
//     description: "Our affiliations with government, academic, and private bodies.",
//     icon: <FiHeart />,
//     content: (
//       <>
//         <ul>
//           <li>Cybersecurity Institutions</li>
//           <li>Law Enforcement Agencies</li>
//           <li>Universities & Research Centers</li>
//         </ul>
//       </>
//     )
//   }
// ];


// src/data/aboutUsData.js
import {
  FiInfo,
  FiTarget,
  FiEye,
  FiHelpCircle,
  FiActivity,
  FiClipboard,
  FiBriefcase,
  FiShield,
  FiLock,
  FiGlobe,
  FiFileText,
  FiBookOpen,
  FiFlag,
  FiEdit,
  FiAlertOctagon,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiHeart,
} from "react-icons/fi";

// Color mapping for each card based on content
export const cardColors = {
  "introduction": { bg: "#2563EB", text: "#FFFFFF", border: "#1D4ED8" }, // Blue - informational
  "what-we-do": { bg: "#059669", text: "#FFFFFF", border: "#047857" }, // Green - action-oriented
  "mission-vision": { bg: "#7C3AED", text: "#FFFFFF", border: "#6D28D9" }, // Purple - visionary
  "purpose": { bg: "#DB2777", text: "#FFFFFF", border: "#BE185D" }, // Pink - purpose-driven
  "activity": { bg: "#D97706", text: "#FFFFFF", border: "#B45309" }, // Amber - active
  "objective": { bg: "#DC2626", text: "#FFFFFF", border: "#B91C1C" }, // Red - important
  "service": { bg: "#0891B2", text: "#FFFFFF", border: "#0E7490" }, // Cyan - service-oriented
  "privacy-policy": { bg: "#4F46E5", text: "#FFFFFF", border: "#4338CA" }, // Indigo - trustworthy
  "data-protection-policy": { bg: "#0369A1", text: "#FFFFFF", border: "#0C4A6E" }, // Light blue - protective
  "gdpr": { bg: "#0D9488", text: "#FFFFFF", border: "#0F766E" }, // Teal - compliance
  "terms": { bg: "#65A30D", text: "#FFFFFF", border: "#4D7C0F" }, // Lime - formal
  "rules-regulation": { bg: "#EA580C", text: "#FFFFFF", border: "#C2410C" }, // Orange - regulatory
  "guidelines": { bg: "#7E22CE", text: "#FFFFFF", border: "#6B21A8" }, // Deep purple - guidance
  "instruction": { bg: "#EAB308", text: "#000000", border: "#CA8A04" }, // Yellow - instructional
  "legal-disclaimer": { bg: "#475569", text: "#FFFFFF", border: "#334155" }, // Gray - cautionary
  "copyright-registration": { bg: "#10B981", text: "#FFFFFF", border: "#059669" }, // Emerald - creative
  "legal-compliance": { bg: "#3730A3", text: "#FFFFFF", border: "#312E81" }, // Deep indigo - legal
  "department": { bg: "#BE185D", text: "#FFFFFF", border: "#9D174D" }, // Rose - organizational
  "history": { bg: "#4B5563", text: "#FFFFFF", border: "#374151" }, // Slate - historical
  "partnerships": { bg: "#A855F7", text: "#FFFFFF", border: "#9333EA" }, // Light purple - collaborative
};

export const aboutUsData = [
  {
    slug: "introduction",
    title: "Introduction of CRCCF",
    description: "A foundational overview of CRCCF, who we are and our legal basis.",
    icon: <FiInfo />,
    content: (
      <>
        <p>CRCCF (Cyber Crime Foundation) was established in 2025 under Section 8 of the Companies Act.</p>
        <p>We are a non-profit dedicated to strengthening India's digital security ecosystem through awareness, research, and support.</p>
      </>
    )
  },
  {
    slug: "what-we-do",
    title: "What we do",
    description: "Services, initiatives, and contributions of CRCCF.",
    icon: <FiTarget />,
    content: (
      <>
        <p>We conduct cyber awareness drives, investigate digital crimes, and provide legal and psychological support to victims.</p>
        <ul>
          <li>Cyber Awareness Campaigns</li>
          <li>Incident Response Support</li>
          <li>Training & Capacity Building</li>
        </ul>
      </>
    )
  },
  {
    slug: "mission-vision",
    title: "Mission or Vision of CRCCF",
    description: "Our goals and long-term vision for a cyber-safe nation.",
    icon: <FiEye />,
    content: (
      <>
        <p>Our mission is to protect and empower citizens in the digital age.</p>
        <p>Our vision is to make cyberspace safer, inclusive, and legally equipped to fight cybercrimes.</p>
      </>
    )
  },
  {
    slug: "purpose",
    title: "Purpose of CRCCF",
    description: "Why CRCCF exists and the issues it addresses.",
    icon: <FiHelpCircle />,
    content: (
      <>
        <p>CRCCF was born out of the urgent need to support victims of cybercrimes and to prevent digital threats through awareness and action.</p>
      </>
    )
  },
  {
    slug: "activity",
    title: "Activity of CRCCF",
    description: "Ongoing programs and fieldwork of CRCCF.",
    icon: <FiActivity />,
    content: (
      <>
        <ul>
          <li>Workshops and Seminars</li>
          <li>Online and Offline Investigations</li>
          <li>Legal Clinics for Cyber Victims</li>
        </ul>
      </>
    )
  },
  {
    slug: "objective",
    title: "Objective of CRCCF",
    description: "Core objectives that drive our mission.",
    icon: <FiClipboard />,
    content: (
      <>
        <p>To create a secure digital environment by reducing cyber vulnerabilities and helping affected individuals legally and emotionally.</p>
      </>
    )
  },
  {
    slug: "service",
    title: "Service of CRCCF",
    description: "Our range of public services and assistance offerings.",
    icon: <FiBriefcase />,
    content: (
      <>
        <ul>
          <li>Cyber Helpdesk</li>
          <li>Legal Aid</li>
          <li>Digital Literacy Training</li>
        </ul>
      </>
    )
  },
  {
    slug: "privacy-policy",
    title: "Privacy policy",
    description: "How we collect and manage user data.",
    icon: <FiShield />,
    content: (
      <>
        <p>We respect user privacy and follow strict data protection measures to ensure confidentiality.</p>
      </>
    )
  },
  {
    slug: "data-protection-policy",
    title: "Privacy Data Protection Policy",
    description: "Steps we take to protect personal data and digital identities.",
    icon: <FiLock />,
    content: (
      <>
        <p>Data is stored securely with minimal retention periods and encrypted access protocols.</p>
      </>
    )
  },
  {
    slug: "gdpr",
    title: "GDPR",
    description: "Compliance with international data regulations like GDPR.",
    icon: <FiGlobe />,
    content: (
      <>
        <p>We adhere to GDPR principles to ensure transparency, accountability, and user rights.</p>
      </>
    )
  },
  {
    slug: "terms",
    title: "Term & Condition of CRCCF",
    description: "The user terms for accessing our platforms and services.",
    icon: <FiFileText />,
    content: (
      <>
        <p>Use of our services is subject to terms ensuring responsible and lawful usage.</p>
      </>
    )
  },
  {
    slug: "rules-regulation",
    title: "Rules & Regulation of CRCCF",
    description: "Internal and public rules that govern CRCCF operations.",
    icon: <FiBookOpen />,
    content: (
      <>
        <ul>
          <li>Transparency</li>
          <li>Accountability</li>
          <li>Fair Usage</li>
        </ul>
      </>
    )
  },
  {
    slug: "guidelines",
    title: "Guidelines of CRCCF",
    description: "General and legal guidelines we follow.",
    icon: <FiFlag />,
    content: (
      <>
        <p>All our programs and user interactions are governed by ethical and legal guidelines laid out by relevant authorities.</p>
      </>
    )
  },
  {
    slug: "instruction",
    title: "Instruction of CRCCF",
    description: "Important instructions for users and beneficiaries.",
    icon: <FiEdit />,
    content: (
      <>
        <p>Please follow the instructions while reporting cybercrime or using our services to ensure smooth assistance.</p>
      </>
    )
  },
  {
    slug: "legal-disclaimer",
    title: "Legal Declaimer of CRCCF",
    description: "Limitation of legal liability from CRCCF's side.",
    icon: <FiAlertOctagon />,
    content: (
      <>
        <p>While we provide support and advice, we do not guarantee legal outcomes or serve as a substitute for law enforcement.</p>
      </>
    )
  },
  {
    slug: "copyright-registration",
    title: "Copy Right Registration",
    description: "Services related to copyright filing and support.",
    icon: <FiCheckCircle />,
    content: (
      <>
        <p>We assist individuals and businesses in understanding and registering copyrights for their digital creations.</p>
      </>
    )
  },
  {
    slug: "legal-compliance",
    title: "Legal & Compliance",
    description: "Ensuring legal alignment in all our processes and services.",
    icon: <FiLock />,
    content: (
      <>
        <p>All our operations adhere to Indian IT laws, privacy regulations, and digital safety frameworks.</p>
      </>
    )
  },
  {
    slug: "department",
    title: "Department of CRCCF",
    description: "The internal structure and key departments.",
    icon: <FiUsers />,
    content: (
      <>
        <ul>
          <li>Legal Department</li>
          <li>Cyber Investigation</li>
          <li>Training & Awareness</li>
        </ul>
      </>
    )
  },
  {
    slug: "history",
    title: "Our Story / History",
    description: "The journey and evolution of CRCCF since inception.",
    icon: <FiClock />,
    content: (
      <>
        <p>Founded in 2025, we started with a handful of volunteers and have grown into a nationwide initiative combating cybercrime.</p>
      </>
    )
  },
  {
    slug: "partnerships",
    title: "Partnerships & Collaborations",
    description: "Our affiliations with government, academic, and private bodies.",
    icon: <FiHeart />,
    content: (
      <>
        <ul>
          <li>Cybersecurity Institutions</li>
          <li>Law Enforcement Agencies</li>
          <li>Universities & Research Centers</li>
        </ul>
      </>
    )
  }
];