// // src/pages/department/DepartmentLanding.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { departmentData } from "../../data/departmentData";

// // color palette per department (distinct from AboutUs cardColors)
// const departmentColors = {
//   "admin-stative-department": { bg: "#0B1220", ring: "#60A5FA", accent: "#3B82F6", text: "#E5F0FF" }, // blue
//   "hr-department":             { bg: "#10141E", ring: "#34D399", accent: "#10B981", text: "#E9FFF6" }, // green
//   "legal-department":          { bg: "#171322", ring: "#A78BFA", accent: "#8B5CF6", text: "#F2ECFF" }, // purple
//   "cyber-investigation-department": { bg: "#16151A", ring: "#F472B6", accent: "#DB2777", text: "#FFF0F7" }, // pink
//   "it-department":             { bg: "#111827", ring: "#22D3EE", accent: "#06B6D4", text: "#E7FCFF" }, // cyan
//   "finance-department":        { bg: "#15110F", ring: "#F59E0B", accent: "#D97706", text: "#FFF7E8" }, // amber
//   "education-department":      { bg: "#0F172A", ring: "#4ADE80", accent: "#22C55E", text: "#ECFFEF" }, // emerald
//   "cyber-security-department": { bg: "#111827", ring: "#60A5FA", accent: "#2563EB", text: "#E6F0FF" }, // indigo/blue
//   "internship-department":     { bg: "#0F172A", ring: "#FCA5A5", accent: "#EF4444", text: "#FFF0F0" }, // red
//   "training-department":       { bg: "#0B1220", ring: "#93C5FD", accent: "#3B82F6", text: "#EAF3FF" }, // light blue
//   "cyber-awaranes-department": { bg: "#121212", ring: "#FDE68A", accent: "#EAB308", text: "#FFFBE8" }, // yellow
//   "revenue-department":        { bg: "#0F172A", ring: "#FDBA74", accent: "#FB923C", text: "#FFF3E9" }, // orange
// };

// const getColors = (route) => {
//   const slug = route.split("/").pop();
//   return departmentColors[slug] ?? { bg: "#0D1117", ring: "#94A3B8", accent: "#64748B", text: "#E5E7EB" };
// };

// const DepartmentCard = ({ item, index, onClick }) => {
//   const { bg, ring, accent, text } = getColors(item.route);

//   return (
//     <motion.div
//       key={item.route}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.45, delay: index * 0.06 + 0.12 }}
//       whileHover="hover"
//       onClick={onClick}
//       className="relative group cursor-pointer rounded-xl p-[1px] overflow-hidden"
//       style={{
//         // thin gradient edge different from AboutUs
//         background: `linear-gradient(135deg, ${ring}55, transparent 35%, ${accent}55)`,
//       }}
//     >
//       {/* card body */}
//       <motion.div
//         variants={{ hover: { y: -4, transition: { type: "spring", stiffness: 350, damping: 22 } } }}
//         className="relative rounded-[10px] h-full flex flex-col border border-white/10"
//         style={{
//           background: `linear-gradient(180deg, ${bg}EE, ${bg}CC)`,
//           backdropFilter: "blur(6px)",
//         }}
//       >
//         {/* top ribbon (distinct feature) */}
//         <div
//           className="h-1.5 w-full"
//           style={{ background: `linear-gradient(90deg, ${ring}, ${accent})` }}
//         />

//         {/* content */}
//         <div className="p-3 xs:p-4 md:p-6 flex flex-col">
//           {/* icon + title */}
//           <div className="flex items-center gap-3 mb-2 xs:mb-3 md:mb-4">
//             <div
//               className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center border border-white/10"
//               style={{ backgroundColor: `${ring}22` }}
//             >
//               {React.cloneElement(item.icon, {
//                 className: "w-5 h-5 sm:w-6 sm:h-6",
//                 style: { color: ring },
//               })}
//             </div>
//             <h3
//               className="text-sm xs:text-base sm:text-lg font-semibold"
//               style={{ color: text }}
//             >
//               {item.title}
//             </h3>
//           </div>

//           {/* description */}
//           <p className="text-xs xs:text-sm sm:text-base opacity-80 flex-grow" style={{ color: text }}>
//             {item.description}
//           </p>

//           {/* footer action distinct from AboutUs */}
//           <div className="mt-4 pt-3 flex items-center justify-between border-t border-white/10">
//             <span className="text-[11px] xs:text-xs font-medium opacity-75" style={{ color: text }}>
//               Open details
//             </span>
//             <motion.span
//               variants={{ hover: { x: 3 } }}
//               className="inline-flex items-center text-xs font-semibold"
//               style={{ color: ring }}
//             >
//               View
//               <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
//               </svg>
//             </motion.span>
//           </div>
//         </div>

//         {/* sheen overlay (new, subtle) */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 opacity-0"
//           variants={{ hover: { opacity: 0.08 } }}
//           style={{
//             background: `radial-gradient(600px 200px at 20% -20%, ${accent}, transparent 60%)`,
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// const DepartmentLanding = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-8 sm:py-20 pt-24 sm:pt-8">
//       <div className="max-w-full mx-auto px-3 sm:px-6">
//         {/* header (kept sizing cadence similar, but different styling) */}
//         <div className="text-center mb-10 sm:mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-xl font-bold tracking-tight text-gray-900 xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
//           >
//             Our Departments
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
//           >
//             Explore how each unit powers CRCCF—operations, people, legal, tech, and more.
//           </motion.p>
//         </div>

//         {/* grid — SAME responsiveness as your AboutUs (2 cols small, 4 cols large) */}
//         <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {departmentData.map((item, index) => (
//             <DepartmentCard
//               key={item.route}
//               item={item}
//               index={index}
//               onClick={() => navigate(item.route)}
//             />
//           ))}
//         </div>

//         {/* CTA styled differently from AboutUs */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12 sm:mt-20"
//         >
//           <motion.button
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg text-sm xs:text-base sm:text-lg font-semibold shadow-md bg-gray-900 text-white"
//             onClick={() => navigate("/contact-us")}
//           >
//             <span className="flex items-center justify-center">
//               Talk to our team
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DepartmentLanding;

// src/pages/department/DepartmentLanding.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { departmentData } from "../../data/departmentData";

// // very subtle, professional accents (distinct from AboutUs)
// const tone = {
//   "admin-stative-department": { accent: "#1F2937" }, // gray-800
//   "hr-department": { accent: "#0F766E" },            // teal-700
//   "legal-department": { accent: "#6D28D9" },         // violet-700
//   "cyber-investigation-department": { accent: "#B91C1C" }, // red-700
//   "it-department": { accent: "#075985" },            // sky-800
//   "finance-department": { accent: "#B45309" },       // amber-700
//   "education-department": { accent: "#166534" },     // green-700
//   "cyber-security-department": { accent: "#1D4ED8" },// blue-700
//   "internship-department": { accent: "#9A3412" },    // orange-800
//   "training-department": { accent: "#374151" },      // gray-700
//   "cyber-awaranes-department": { accent: "#A16207" },// yellow-700
//   "revenue-department": { accent: "#92400E" },       // amber-800
// };

// const getAccent = (route) => {
//   const slug = route.split("/").pop();
//   return (tone[slug]?.accent) || "#374151";
// };

// const DeptCard = ({ item, index, onClick }) => {
//   const accent = getAccent(item.route);

//   return (
//     <motion.button
//       type="button"
//       onClick={onClick}
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.25, delay: 0.03 * index }}
//       whileHover={{ y: -2 }}
//       className="relative w-full text-left rounded-lg border border-gray-200 bg-white shadow-[0_1px_0_#e5e7eb] hover:shadow-[0_2px_0_#e5e7eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
//     >
//       {/* corner tab (distinct feature) */}
//       <span
//         aria-hidden
//         className="absolute right-0 top-0 h-0 w-0"
//         style={{
//           borderTop: `12px solid ${accent}`,
//           borderLeft: "12px solid transparent",
//         }}
//       />

//       <div className="p-4 sm:p-5 md:p-6">
//         {/* top row */}
//         <div className="flex items-start justify-between">
//           {/* icon ring (not a filled blob) */}
//           <span
//             className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md border text-gray-700"
//             style={{ borderColor: `${accent}33` }}
//           >
//             {React.cloneElement(item.icon, {
//               className: "w-4 h-4 sm:w-5 sm:h-5",
//               style: { color: accent },
//               "aria-hidden": true,
//             })}
//           </span>

//           {/* small meta (kept neutral) */}
//           <span className="text-[11px] sm:text-xs text-gray-500">
//             CRCCF · Dept
//           </span>
//         </div>

//         {/* title */}
//         <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-gray-900 leading-snug">
//           {item.title}
//         </h3>

//         {/* description */}
//         <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2">
//           {item.description}
//         </p>

//         {/* divider + action */}
//         <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
//           <span className="text-[11px] sm:text-xs text-gray-500">View details</span>
//           <span
//             className="inline-flex items-center text-xs sm:text-sm font-medium"
//             style={{ color: accent }}
//           >
//             Open
//             <svg
//               className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               fill="none"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
//             </svg>
//           </span>
//         </div>
//       </div>
//     </motion.button>
//   );
// };

// const DepartmentLanding = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-gray-50 py-8 sm:py-20 pt-24 sm:pt-8">
//       <div className="max-w-full mx-auto px-3 sm:px-6">
//         {/* header (tight, neutral) */}
//         <div className="text-center mb-10 sm:mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
//           >
//             Departments
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.05 }}
//             className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
//           >
//             Concise pages for each functional unit—policies, scope, and contacts.
//           </motion.p>
//         </div>

//         {/* SAME responsiveness as your AboutUs: 2 cols small, 4 cols large */}
//         <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {departmentData.map((item, index) => (
//             <DeptCard
//               key={item.route}
//               item={item}
//               index={index}
//               onClick={() => navigate(item.route)}
//             />
//           ))}
//         </div>

//         {/* footer link (plain, enterprise) */}
//         <div className="text-center mt-12 sm:mt-20">
//           <button
//             onClick={() => navigate("/contact-us")}
//             className="text-xs sm:text-sm text-gray-600 underline underline-offset-4 hover:no-underline"
//           >
//             Not sure where to go? Contact us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DepartmentLanding;


// src/pages/department/DepartmentLanding.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { departmentData } from "../../data/departmentData";

// /**
//  * Subtle, professional accents (by route slug).
//  * We only use the accent for border/hover/focus—keeps it sober.
//  */
// const ACCENTS = {
//   "admin-stative-department": "#1F2937", // gray-800
//   "hr-department": "#0F766E", // teal-700
//   "legal-department": "#6D28D9", // violet-700
//   "cyber-investigation-department": "#B91C1C", // red-700
//   "it-department": "#075985", // sky-800
//   "finance-department": "#B45309", // amber-700
//   "education-department": "#166534", // green-700
//   "cyber-security-department": "#1D4ED8", // blue-700
//   "internship-department": "#9A3412", // orange-800
//   "training-department": "#374151", // gray-700
//   "cyber-awaranes-department": "#A16207", // yellow-700
//   "revenue-department": "#92400E", // amber-800
// };

// const accentFor = (route) => {
//   const slug = route.split("/").pop();
//   return ACCENTS[slug] || "#374151";
// };

// const Card = ({ item, index, navigate }) => {
//   const accent = accentFor(item.route);

//   // keyboard accessibility: Enter/Space triggers navigate
//   const onKeyDown = (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       navigate(item.route);
//     }
//   };

//   return (
//     <motion.li
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.28, delay: 0.035 * index }}
//       className="h-full"
//     >
//       <div
//         role="button"
//         tabIndex={0}
//         aria-label={`${item.title} — open details`}
//         onClick={() => navigate(item.route)}
//         onKeyDown={onKeyDown}
//         className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all
//                    hover:-translate-y-0.5 hover:shadow md:hover:-translate-y-1 focus:outline-none
//                    focus-visible:ring-2 focus-visible:ring-offset-2"
//         style={{
//           // dynamic focus ring color using inline style
//           ["--ring-color"]: accent,
//           // balanced padding & readable line-length
//         }}
//       >
//         {/* accent bar appears on hover/focus (keeps calm by default) */}
//         <span
//           aria-hidden
//           className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
//           style={{ backgroundColor: accent }}
//         />

//         <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
//           {/* top: icon in thin ring + small meta */}
//           <div className="flex items-start justify-between">
//             <span
//               className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md border bg-white"
//               style={{ borderColor: `${accent}33` }}
//             >
//               {React.cloneElement(item.icon, {
//                 className: "w-4 h-4 sm:w-5 sm:h-5",
//                 style: { color: accent },
//                 "aria-hidden": true,
//               })}
//             </span>

//             {/* Index badge (subtle order cue) */}
//             <span
//               className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] sm:text-xs font-medium text-gray-700"
//               style={{ backgroundColor: "#F3F4F6", border: "1px solid #E5E7EB" }}
//             >
//               {String(index + 1).padStart(2, "0")}
//             </span>
//           </div>

//           {/* title */}
//           <h3 className="mt-3 sm:mt-4 font-semibold leading-snug text-gray-900">
//             <span className="text-sm sm:text-base">{item.title}</span>
//           </h3>

//           {/* description (equal heights via flex-grow) */}
//           <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-3 flex-1">
//             {item.description}
//           </p>

//           {/* divider + action row */}
//           <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
//             <span className="text-[11px] sm:text-xs text-gray-500">Open department</span>
//             <span
//               className="inline-flex items-center text-xs sm:text-sm font-medium transition-transform"
//               style={{ color: accent }}
//             >
//               View
//               <svg
//                 className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeWidth="2"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
//               </svg>
//             </span>
//           </div>
//         </div>

//         {/* focus ring color override (uses inline CSS var above) */}
//         <style>{`
//           .group:focus-visible {
//             box-shadow:
//               0 0 0 2px var(--ring-color),
//               0 0 0 4px white;
//           }
//         `}</style>
//       </div>
//     </motion.li>
//   );
// };

// const DepartmentLanding = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-gray-50 py-8 sm:py-20 pt-24 sm:pt-8">
//       <div className="max-w-7xl mx-auto px-3 sm:px-6">
//         {/* header — calm, compact */}
//         <div className="text-center mb-10 sm:mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.25 }}
//             className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
//           >
//             Departments
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.25, delay: 0.04 }}
//             className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
//           >
//             Clear pages for each functional unit—scope, processes, and contacts.
//           </motion.p>
//         </div>

//         {/* same responsiveness as AboutUs: 2 cols small, 4 on lg */}
//         <ul className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
//           {departmentData.map((item, index) => (
//             <Card key={item.route} item={item} index={index} navigate={navigate} />
//           ))}
//         </ul>

//         {/* minimalist footer */}
//         <div className="text-center mt-12 sm:mt-20">
//           <button
//             onClick={() => navigate("/contact-us")}
//             className="text-xs sm:text-sm text-gray-600 underline underline-offset-4 hover:no-underline"
//           >
//             Need guidance? Contact us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DepartmentLanding;
// src/pages/department/DepartmentLanding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { departmentData } from "../../data/departmentData";

// Accent colors by route slug
const ACCENTS = {
  "admin-stative-department": "#1F2937", // gray-800
  "hr-department": "#0F766E",            // teal-700
  "legal-department": "#6D28D9",         // violet-700
  "cyber-investigation-department": "#B91C1C", // red-700
  "it-department": "#075985",            // sky-800
  "finance-department": "#B45309",       // amber-700
  "education-department": "#166534",     // green-700
  "cyber-security-department": "#1D4ED8",// blue-700
  "internship-department": "#9A3412",    // orange-800
  "training-department": "#374151",      // gray-700
  "cyber-awaranes-department": "#A16207",// yellow-700
  "revenue-department": "#92400E",       // amber-800
};

const accentFor = (route) => {
  const slug = route.split("/").pop();
  return ACCENTS[slug] || "#374151";
};

// tiny helper for transparent hex (00–FF)
const withAlpha = (hex, alphaHex = "22") => `${hex}${alphaHex}`;

const Card = ({ item, index, navigate }) => {
  const accent = accentFor(item.route);
  const [active, setActive] = useState(false); // hover/focus state

  // keyboard accessibility: Enter/Space triggers navigate
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(item.route);
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.28, delay: 0.035 * index }}
      className="h-full"
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`${item.title} — open details`}
        onClick={() => navigate(item.route)}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="group relative flex h-full flex-col rounded-lg border bg-white shadow-sm transition-transform
                   hover:-translate-y-0.5 md:hover:-translate-y-1 focus:outline-none"
        style={{ ["--ring-color"]: accent }}
        // Animate border color + shadow smoothly
        animate={{
          borderColor: active ? accent : "#E5E7EB", // gray-200 default
          boxShadow: active
            ? `0 8px 24px 0 ${withAlpha(accent, "22")}`
            : "0 1px 2px 0 rgba(0,0,0,0.04)",
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* top accent bar — grows and fades on hover/focus */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5"
          style={{ backgroundColor: accent }}
          initial={{ opacity: 0, scaleX: 0, originX: 0 }}
          animate={{ opacity: active ? 1 : 0, scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* soft glow overlay — same accent, very low opacity */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{ backgroundColor: withAlpha(accent, "14") }} // ~8% opacity
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1.01 : 0.995 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative p-4 sm:p-5 md:p-6 flex flex-col flex-1 z-10">
          {/* top row: icon + index badge */}
          <div className="flex items-start justify-between">
            <span
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md border bg-white"
              style={{ borderColor: withAlpha(accent, "33") }}
            >
              {React.cloneElement(item.icon, {
                className: "w-4 h-4 sm:w-5 sm:h-5",
                style: { color: accent },
                "aria-hidden": true,
              })}
            </span>

            <span
              className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] sm:text-xs font-medium text-gray-700"
              style={{ backgroundColor: "#F3F4F6", border: "1px solid #E5E7EB" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* title */}
          <h3 className="mt-3 sm:mt-4 font-semibold leading-snug text-gray-900">
            <span className="text-sm sm:text-base">{item.title}</span>
          </h3>

          {/* description */}
          <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-3 flex-1">
            {item.description}
          </p>

          {/* divider + action row */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] sm:text-xs text-gray-500">Open department</span>
            <span
              className="inline-flex items-center text-xs sm:text-sm font-medium"
              style={{ color: accent }}
            >
              View
              <motion.svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                animate={{ x: active ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </motion.svg>
            </span>
          </div>
        </div>

        {/* focus-visible ring with dynamic color */}
        <style>{`
          .group:focus-visible {
            box-shadow:
              0 0 0 2px var(--ring-color),
              0 0 0 4px white;
          }
        `}</style>
      </motion.div>
    </motion.li>
  );
};

const DepartmentLanding = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-8 sm:py-20 pt-24 sm:pt-8">
      <div className="max-w-9xl mx-auto px-3 sm:px-6">
        {/* header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
          >
            Departments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.04 }}
            className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
          >
            Clear pages for each functional unit—scope, processes, and contacts.
          </motion.p>
        </div>

        {/* grid (same responsiveness as AboutUs) */}
        <ul className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {departmentData.map((item, index) => (
            <Card key={item.route} item={item} index={index} navigate={navigate} />
          ))}
        </ul>

        {/* footer link */}
        <div className="text-center mt-12 sm:mt-20">
          <button
            onClick={() => navigate("/contact-us")}
            className="text-xs sm:text-sm text-gray-600 underline underline-offset-4 hover:no-underline"
          >
            Need guidance? Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default DepartmentLanding;
