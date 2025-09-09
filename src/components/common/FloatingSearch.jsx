
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, X, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import all data files
// import { aboutUsData } from "../../data/aboutUsData";
// import cyberEducationData from "../../data/cyberEducationData";
// import { legalComplianceData } from "../../data/legalComplianceData";
// import { recruitmentData } from "../../data/recruitmentData";
// import { reportCyberCrimeData } from "../../data/reportCyberCrimeData";
// import { resourceData } from "../../data/resourceData";
// import { softwareData } from "../../data/softwareData";
// import { teamMembers } from "../../data/teamData.js";
// import { victimRightsSupportData } from "../../data/victimRightsSupportData";

// const FloatingSearch = () => {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   const modalRef = useRef(null);

//   // Normalize all imported data
//   const allData = useMemo(() => {
//     const map = (arr, source) =>
//       (arr || []).map((it, idx) => ({
//         ...it,
//         title: it.title || it.name || "Untitled",
//         description:
//           it.description || (it.content ? String(it.content).slice(0, 200) : ""),
//         _source: source,
//         _index: idx,
//       }));

//     return [
//       ...map(aboutUsData, "about"),
//       ...map(cyberEducationData, "cyber-education"),
//       ...map(legalComplianceData, "legal-compliance"),
//       ...map(recruitmentData, "recruitment-process"),
//       ...map(reportCyberCrimeData, "report"),
//       ...map(resourceData, "resources"),
//       ...map(softwareData, "software-services"),
//       ...map(teamMembers, "team"),
//       ...map(victimRightsSupportData, "victim-rights"),
//     ];
//   }, []);

//   // Path base map
//   const baseMap = {
//     about: "/about/",
//     "cyber-education": "/cyber-education/",
//     "legal-compliance": "/about/legal-compliance/",
//     "recruitment-process": "/recruitment-process/",
//     report: "/report/",
//     resources: "/resource-and-download/",
//     "software-services": "/software-services/",
//     team: "/our-team/",
//     "victim-rights": "/report/victim-rights-support/",
//   };

//   const buildPath = (item) => {
//     const s = item.slug || item.path || item.url || "";
//     if (!s) return "/";
//     if (s.startsWith("/")) return s;
//     if (s.includes("/")) return s.startsWith("/") ? s : `/${s}`;
//     const base = baseMap[item._source] || "/";
//     return `${base}${s}`;
//   };

//   // Search filter
//   const results = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return [];
//     return allData
//       .map((item) => {
//         const title = (item.title || "").toLowerCase();
//         const desc = (item.description || "").toLowerCase();
//         let score = 0;
//         if (title === q) score += 100;
//         if (title.includes(q)) score += 50;
//         if (desc.includes(q)) score += 20;
//         return { item, score };
//       })
//       .filter(({ score }) => score > 0)
//       .sort((a, b) => b.score - a.score)
//       .map(({ item }) => item);
//   }, [query, allData]);

//   // Shortcuts
//   useEffect(() => {
//     const handler = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
//         e.preventDefault();
//         setOpen((v) => !v);
//       }
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // Autofocus
//   useEffect(() => {
//     if (open) {
//       setTimeout(() => inputRef.current?.focus(), 80);
//     } else {
//       setQuery("");
//     }
//   }, [open]);

//   // Click outside close
//   useEffect(() => {
//     const onClick = (e) => {
//       if (open && modalRef.current && !modalRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("mousedown", onClick);
//     return () => window.removeEventListener("mousedown", onClick);
//   }, [open]);

//   // Highlight search
//   const highlight = (text) => {
//     if (!query) return text;
//     try {
//       const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
//       return parts.map((part, i) =>
//         part.toLowerCase() === query.toLowerCase() ? (
//           <mark key={i} className="bg-yellow-200 px-0.5 rounded-sm">
//             {part}
//           </mark>
//         ) : (
//           <span key={i}>{part}</span>
//         )
//       );
//     } catch {
//       return text;
//     }
//   };

//   function escapeRegExp(string) {
//     return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
//   }

//   const onSelect = (item) => {
//     const path = buildPath(item);
//     setOpen(false);
//     setQuery("");
//     setTimeout(() => navigate(path), 120);
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <motion.button
//         aria-label="Open site search"
//         title="Search (Ctrl/Cmd + K)"
//         onClick={() => setOpen(true)}
//         className="fixed top-45 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.95, rotate: -5 }}
//       >
//         <Search className="w-5 h-5 sm:w-6 sm:h-6" />
//       </motion.button>

//       {/* Modal */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               ref={modalRef}
//               className="w-full sm:max-w-4xl bg-white rounded-b-2xl sm:rounded-2xl shadow-2xl overflow-hidden mt-6"
//               initial={{ y: -60, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -60, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220, damping: 26 }}
//             >
//               {/* Header */}
//               <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b">
//                 <Search className="w-5 h-5 text-gray-500" />
//                 <motion.input
//                   ref={inputRef}
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search the website..."
//                   className="w-full text-base sm:text-lg md:text-xl focus:outline-none placeholder:text-gray-400"
//                   initial={{ x: -15, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 }}
//                 />
//                 <motion.button
//                   onClick={() => setOpen(false)}
//                   className="p-2 rounded hover:bg-gray-100"
//                   aria-label="Close search"
//                   title="Close"
//                   whileHover={{ rotate: 90, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </motion.button>
//               </div>

//               {/* Body */}
//               <motion.div
//                 className="p-4 sm:p-5 max-h-[65vh] overflow-auto"
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.15 }}
//               >
//                 {!query ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-base sm:text-lg font-semibold">
//                       Search the site
//                     </p>
//                     <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
//                       Type anything — e.g., "victim support", "privacy policy".
//                     </p>
//                   </div>
//                 ) : results.length === 0 ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-base sm:text-lg font-medium">No results</p>
//                     <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
//                       Try different keywords or check spelling.
//                     </p>
//                   </div>
//                 ) : (
//                   <motion.div
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
//                     layout
//                   >
//                     {results.map((item, idx) => (
//                       <motion.article
//                         key={`${item._source}-${item._index}-${idx}`}
//                         onClick={() => onSelect(item)}
//                         className="cursor-pointer p-3 sm:p-4 rounded-lg border hover:shadow-md transition bg-white"
//                         role="link"
//                         tabIndex={0}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         layout
//                       >
//                         <div className="flex items-start gap-2 sm:gap-3">
//                           {item.icon ? (
//                             <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-gray-50 flex items-center justify-center">
//                               <div className="text-blue-600">{item.icon}</div>
//                             </div>
//                           ) : (
//                             <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-semibold">
//                               {String(item.title || "").charAt(0).toUpperCase()}
//                             </div>
//                           )}

//                           <div className="flex-1">
//                             <h3 className="text-sm sm:text-base font-semibold text-slate-800">
//                               {highlight(String(item.title))}
//                             </h3>
//                             <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 line-clamp-3">
//                               {highlight(
//                                 String(item.description || "").slice(0, 220)
//                               )}
//                             </p>
//                             <div className="mt-1 sm:mt-2 text-xs text-gray-400 flex items-center gap-1 sm:gap-2">
//                               <span className="capitalize">
//                                 {item._source.replace("-", " ")}
//                               </span>
//                               <span>•</span>
//                               <span>Click to open</span>
//                             </div>
//                           </div>

//                           <div className="flex-none pl-2 sm:pl-3">
//                             <ExternalLink className="w-4 h-4 text-gray-400" />
//                           </div>
//                         </div>
//                       </motion.article>
//                     ))}
//                   </motion.div>
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FloatingSearch;

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, X, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import all data files
// import { aboutUsData } from "../../data/aboutUsData";
// import cyberEducationData from "../../data/cyberEducationData";
// import { legalComplianceData } from "../../data/legalComplianceData";
// import { recruitmentData } from "../../data/recruitmentData";
// import { reportCyberCrimeData } from "../../data/reportCyberCrimeData";
// import { resourceData } from "../../data/resourceData";
// import { softwareData } from "../../data/softwareData";
// import { teamMembers } from "../../data/teamData.js";
// import { victimRightsSupportData } from "../../data/victimRightsSupportData";

// const FloatingSearch = () => {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   const modalRef = useRef(null);

//   // ✅ NEW: Navbar items & Social links (added to search index)
//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Education & Internship", path: "/cyber-education" },
//     { label: "IT and Software", path: "/software-services" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Recruitment Process", path: "/recruitment-process" },
//     { label: "Cyber Crime Report", path: "/report-a-cyber-crime" },
//     { label: "Resource and download", path: "/resource-and-download" },
//     { label: "Contact Us", path: "/contact-us" },
//   ];

//   const socialLinks = [
//     { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61576052739281" },
//     { name: "Twitter", url: "https://twitter.com" },
//     { name: "LinkedIn", url: "http://www.linkedin.com/in/cr-cyber-crime-foundation-b1313b377" },
//     { name: "Instagram", url: "https://www.instagram.com/crcybercrime/" },
//     { name: "YouTube Studio", url: "https://studio.youtube.com/channel/UCxrhFdTCVoqdzE4jEaMsIgw/editing/profile" },
//     { name: "location", url: "https://maps.app.goo.gl/xwU59PK7iPxPVtfc8" },
//     { name: "Telegram", url: "https://t.me/yourchannel" },
//     { name: "WhatsApp", url: "https://wa.me/919777999529" },
//     { name: "Phone", url: "tel:+919777999529" },
//     { name: "Email", url: "mailto:hr@crcybercrime.org" },
//   ];

//   // Normalize all imported data + nav + social into one index
//   const allData = useMemo(() => {
//     const mapSection = (arr, source) =>
//       (arr || []).map((it, idx) => ({
//         ...it,
//         title: it.title || it.name || it.label || "Untitled",
//         description:
//           it.description ||
//           (it.body ? String(it.body).slice(0, 200) : "") ||
//           (it.content ? String(it.content).slice(0, 200) : ""),
//         _source: source,
//         _index: idx,
//         // normalize paths/urls for selection
//         slug: it.slug,
//         path: it.path,
//         url: it.url,
//       }));

//     // Map nav items
//     const mapNav = navItems.map((n, idx) => ({
//       title: n.label,
//       description: `Go to ${n.label}`,
//       slug: n.path,
//       _source: "navigation",
//       _index: idx,
//     }));

//     // Map social links
//     const mapSocial = socialLinks.map((s, idx) => ({
//       title: s.name,
//       description:
//         s.name === "Phone"
//           ? "Call us"
//           : s.name === "Email"
//           ? "Send us an email"
//           : `Open our ${s.name}`,
//       url: s.url,
//       _source: "social",
//       _index: idx,
//       _badge: (s.name || "S").slice(0, 2).toUpperCase(), // 'FB', 'TW', etc.
//     }));

//     return [
//       ...mapSection(aboutUsData, "about"),
//       ...mapSection(cyberEducationData, "cyber-education"),
//       ...mapSection(legalComplianceData, "legal-compliance"),
//       ...mapSection(recruitmentData, "recruitment-process"),
//       ...mapSection(reportCyberCrimeData, "report"),
//       ...mapSection(resourceData, "resources"),
//       ...mapSection(softwareData, "software-services"),
//       ...mapSection(teamMembers, "team"),
//       ...mapSection(victimRightsSupportData, "victim-rights"),
//       ...mapNav,
//       ...mapSocial,
//     ];
//   }, []);

//   // Base path map for section data
//   const baseMap = {
//     about: "/about/",
//     "cyber-education": "/cyber-education/",
//     "legal-compliance": "/about/legal-compliance/",
//     "recruitment-process": "/recruitment-process/",
//     report: "/report/",
//     resources: "/resource-and-download/",
//     "software-services": "/software-services/",
//     team: "/our-team/",
//     "victim-rights": "/report/victim-rights-support/",
//     navigation: "/", // nav items already pass full path slugs
//     social: "/",     // social uses absolute URLs (handled below)
//   };

//   // Build display path (handles internal slugs and absolute links)
//   const buildPath = (item) => {
//     const s = item.slug || item.path || item.url || "";
//     if (!s) return "/";

//     // ✅ External targets (open in new tab)
//     if (/^(https?:|mailto:|tel:)/i.test(s)) return s;

//     // ✅ Full internal path already
//     if (s.startsWith("/")) return s;

//     // If "section/slug" format, ensure leading slash
//     if (s.includes("/")) return s.startsWith("/") ? s : `/${s}`;

//     // Otherwise compose from section base
//     const base = baseMap[item._source] || "/";
//     return `${base}${s}`;
//   };

//   // Search filter (title + description with simple scoring)
//   const results = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return [];
//     return allData
//       .map((item) => {
//         const title = (item.title || "").toLowerCase();
//         const desc = (item.description || "").toLowerCase();
//         let score = 0;
//         if (title === q) score += 100;
//         if (title.includes(q)) score += 50;
//         if (desc.includes(q)) score += 20;
//         return { item, score };
//       })
//       .filter(({ score }) => score > 0)
//       .sort((a, b) => b.score - a.score)
//       .map(({ item }) => item);
//   }, [query, allData]);

//   // Shortcuts
//   useEffect(() => {
//     const handler = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
//         e.preventDefault();
//         setOpen((v) => !v);
//       }
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // Autofocus
//   useEffect(() => {
//     if (open) {
//       setTimeout(() => inputRef.current?.focus(), 80);
//     } else {
//       setQuery("");
//     }
//   }, [open]);

//   // Click outside close
//   useEffect(() => {
//     const onClick = (e) => {
//       if (open && modalRef.current && !modalRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("mousedown", onClick);
//     return () => window.removeEventListener("mousedown", onClick);
//   }, [open]);

//   // Highlight search
//   const highlight = (text) => {
//     if (!query) return text;
//     try {
//       const parts = String(text).split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
//       return parts.map((part, i) =>
//         part.toLowerCase() === query.toLowerCase() ? (
//           <mark key={i} className="bg-yellow-200 px-0.5 rounded-sm">
//             {part}
//           </mark>
//         ) : (
//           <span key={i}>{part}</span>
//         )
//       );
//     } catch {
//       return text;
//     }
//   };

//   function escapeRegExp(string) {
//     return String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
//   }

//   // Select handler: internal vs external
//   const onSelect = (item) => {
//     const path = buildPath(item);
//     setOpen(false);
//     setQuery("");
//     // External → open new tab; Internal → navigate
//     if (/^(https?:|mailto:|tel:)/i.test(path)) {
//       setTimeout(() => window.open(path, "_blank", "noopener,noreferrer"), 120);
//     } else {
//       setTimeout(() => navigate(path), 120);
//     }
//   };

//   // Small helper for nice tag label
//   const tagLabel = (src) => {
//     if (src === "navigation") return "navigation";
//     if (src === "social") return "social";
//     return src.replace("-", " ");
//   };

//   // Badge for social (FB, TW, etc.) or first letter fallback
//   const renderThumb = (item) => {
//     if (item._source === "social") {
//       const text = item._badge || (item.title || "S").slice(0, 2).toUpperCase();
//       return (
//         <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-rose-50 flex items-center justify-center text-rose-600 font-semibold">
//           {text}
//         </div>
//       );
//     }
//     if (item.icon) {
//       return (
//         <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-gray-50 flex items-center justify-center">
//           <div className="text-blue-600">{item.icon}</div>
//         </div>
//       );
//     }
//     return (
//       <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-semibold">
//         {String(item.title || "").charAt(0).toUpperCase()}
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <motion.button
//         aria-label="Open site search"
//         title="Search (Ctrl/Cmd + K)"
//         onClick={() => setOpen(true)}
//         className="fixed top-55 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.95, rotate: -5 }}
//       >
//         <Search className="w-5 h-5 sm:w-6 sm:h-6" />
//       </motion.button>

//       {/* Modal */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               ref={modalRef}
//               className="w-full sm:max-w-4xl bg-white rounded-b-2xl sm:rounded-2xl shadow-2xl overflow-hidden mt-6"
//               initial={{ y: -60, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -60, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220, damping: 26 }}
//             >
//               {/* Header */}
//               <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b">
//                 <Search className="w-5 h-5 text-gray-500" />
//                 <motion.input
//                   ref={inputRef}
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search the website (pages, navigation, social)…"
//                   className="w-full text-base sm:text-lg md:text-xl focus:outline-none placeholder:text-gray-400"
//                   initial={{ x: -15, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 }}
//                 />
//                 <motion.button
//                   onClick={() => setOpen(false)}
//                   className="p-2 rounded hover:bg-gray-100"
//                   aria-label="Close search"
//                   title="Close"
//                   whileHover={{ rotate: 90, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </motion.button>
//               </div>

//               {/* Body */}
//               <motion.div
//                 className="p-4 sm:p-5 max-h-[65vh] overflow-auto"
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.15 }}
//               >
//                 {!query ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-base sm:text-lg font-semibold">
//                       Search the site
//                     </p>
//                     <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
//                       Try “victim support”, “privacy policy”, “Instagram”, “Contact Us”…
//                     </p>
//                   </div>
//                 ) : results.length === 0 ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-base sm:text-lg font-medium">No results</p>
//                     <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
//                       Try different keywords or check spelling.
//                     </p>
//                   </div>
//                 ) : (
//                   <motion.div
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
//                     layout
//                   >
//                     {results.map((item, idx) => (
//                       <motion.article
//                         key={`${item._source}-${item._index}-${idx}`}
//                         onClick={() => onSelect(item)}
//                         className="cursor-pointer p-3 sm:p-4 rounded-lg border hover:shadow-md transition bg-white"
//                         role="link"
//                         tabIndex={0}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         layout
//                       >
//                         <div className="flex items-start gap-2 sm:gap-3">
//                           {renderThumb(item)}

//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-sm sm:text-base font-semibold text-slate-800 truncate">
//                               {highlight(String(item.title))}
//                             </h3>
//                             <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 line-clamp-3">
//                               {highlight(String(item.description || "").slice(0, 220))}
//                             </p>
//                             <div className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-gray-400 flex items-center gap-2">
//                               <span className="capitalize">{tagLabel(item._source)}</span>
//                               <span>•</span>
//                               <span>Click to open</span>
//                             </div>
//                           </div>

//                           <div className="flex-none pl-2 sm:pl-3">
//                             <ExternalLink className="w-4 h-4 text-gray-400" />
//                           </div>
//                         </div>
//                       </motion.article>
//                     ))}
//                   </motion.div>
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FloatingSearch;


// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, X, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import all data files
// import { aboutUsData } from "../../data/aboutUsData";
// import cyberEducationData from "../../data/cyberEducationData";
// import { legalComplianceData } from "../../data/legalComplianceData";
// import { recruitmentData } from "../../data/recruitmentData";
// import { reportCyberCrimeData } from "../../data/reportCyberCrimeData";
// import { resourceData } from "../../data/resourceData";
// import { softwareData } from "../../data/softwareData";
// import { teamMembers } from "../../data/teamData.js";
// import { victimRightsSupportData } from "../../data/victimRightsSupportData";

// // ✅ NEW: Indux (home) cards
// import { homeServicesData } from "../../data/homeServicesData";

// const FloatingSearch = () => {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   const modalRef = useRef(null);

//   // ✅ Navbar items & Social links (added to search index)
//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Education & Internship", path: "/cyber-education" },
//     { label: "IT and Software", path: "/software-services" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Recruitment Process", path: "/recruitment-process" },
//     { label: "Cyber Crime Report", path: "/report-a-cyber-crime" },
//     { label: "Resource and download", path: "/resource-and-download" },
//     { label: "Contact Us", path: "/contact-us" },
//   ];

//   const socialLinks = [
//     { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61576052739281" },
//     { name: "Twitter", url: "https://twitter.com" },
//     { name: "LinkedIn", url: "http://www.linkedin.com/in/cr-cyber-crime-foundation-b1313b377" },
//     { name: "Instagram", url: "https://www.instagram.com/crcybercrime/" },
//     { name: "YouTube Studio", url: "https://studio.youtube.com/channel/UCxrhFdTCVoqdzE4jEaMsIgw/editing/profile" },
//     { name: "location", url: "https://maps.app.goo.gl/xwU59PK7iPxPVtfc8" },
//     { name: "Telegram", url: "https://t.me/yourchannel" },
//     { name: "WhatsApp", url: "https://wa.me/919777999529" },
//     { name: "Phone", url: "tel:+919777999529" },
//     { name: "Email", url: "mailto:hr@crcybercrime.org" },
//   ];

//   // Normalize all imported data + nav + social into one index
//   const allData = useMemo(() => {
//     const mapSection = (arr, source) =>
//       (arr || []).map((it, idx) => {
//         // enrich description with features (helps search)
//         const baseDesc =
//           it.description ||
//           (it.body ? String(it.body).slice(0, 200) : "") ||
//           (it.content ? String(it.content).slice(0, 200) : "");
//         const featuresText = Array.isArray(it.features) && it.features.length
//           ? ` • ${it.features.join(" • ")}`
//           : "";
//         return {
//           ...it,
//           title: it.title || it.name || it.label || "Untitled",
//           description: `${baseDesc}${featuresText}`.trim(),
//           _source: source,
//           _index: idx,
//           // normalize paths/urls for selection
//           slug: it.slug,
//           path: it.path,
//           url: it.url,
//         };
//       });

//     // Map nav items
//     const mapNav = navItems.map((n, idx) => ({
//       title: n.label,
//       description: `Go to ${n.label}`,
//       slug: n.path,
//       _source: "navigation",
//       _index: idx,
//     }));

//     // Map social links
//     const mapSocial = socialLinks.map((s, idx) => ({
//       title: s.name,
//       description:
//         s.name === "Phone"
//           ? "Call us"
//           : s.name === "Email"
//           ? "Send us an email"
//           : `Open our ${s.name}`,
//       url: s.url,
//       _source: "social",
//       _index: idx,
//       _badge: (s.name || "S").slice(0, 2).toUpperCase(), // 'FB', 'TW', etc.
//     }));

//     return [
//       // ✅ Core site sections
//       ...mapSection(aboutUsData, "about"),
//       ...mapSection(cyberEducationData, "cyber-education"),
//       ...mapSection(legalComplianceData, "legal-compliance"),
//       ...mapSection(recruitmentData, "recruitment-process"),
//       ...mapSection(reportCyberCrimeData, "report"),
//       ...mapSection(resourceData, "resources"),
//       ...mapSection(softwareData, "software-services"),
//       ...mapSection(teamMembers, "team"),
//       ...mapSection(victimRightsSupportData, "victim-rights"),

//       // ✅ NEW: Indux cards
//       ...mapSection(homeServicesData, "indux"),

//       // nav + socials
//       ...mapNav,
//       ...mapSocial,
//     ];
//   }, []);

//   // Base path map for section data
//   const baseMap = {
//     about: "/about/",
//     "cyber-education": "/cyber-education/",
//     "legal-compliance": "/about/legal-compliance/",
//     "recruitment-process": "/recruitment-process/",
//     report: "/report/",
//     resources: "/resource-and-download/",
//     "software-services": "/software-services/",
//     team: "/our-team/",
//     "victim-rights": "/report/victim-rights-support/",
//     // ✅ NEW: Indux cards generally carry full paths, but keep a base for any slugs
//     indux: "/",
//     navigation: "/", // nav items already pass full path slugs
//     social: "/",     // social uses absolute URLs (handled below)
//   };

//   // Build display path (handles internal slugs and absolute links)
//   const buildPath = (item) => {
//     const s = item.slug || item.path || item.url || "";
//     if (!s) return "/";

//     // External targets (open in new tab)
//     if (/^(https?:|mailto:|tel:)/i.test(s)) return s;

//     // Full internal path already
//     if (s.startsWith("/")) return s;

//     // If "section/slug" format, ensure leading slash
//     if (s.includes("/")) return s.startsWith("/") ? s : `/${s}`;

//     // Otherwise compose from section base
//     const base = baseMap[item._source] || "/";
//     return `${base}${s}`;
//   };

//   // Search filter (title + description with simple scoring)
//   const results = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return [];
//     return allData
//       .map((item) => {
//         const title = (item.title || "").toLowerCase();
//         const desc = (item.description || "").toLowerCase();
//         let score = 0;
//         if (title === q) score += 100;
//         if (title.includes(q)) score += 50;
//         if (desc.includes(q)) score += 20;
//         return { item, score };
//       })
//       .filter(({ score }) => score > 0)
//       .sort((a, b) => b.score - a.score)
//       .map(({ item }) => item);
//   }, [query, allData]);

//   // Shortcuts
//   useEffect(() => {
//     const handler = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
//         e.preventDefault();
//         setOpen((v) => !v);
//       }
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // Autofocus
//   useEffect(() => {
//     if (open) {
//       setTimeout(() => inputRef.current?.focus(), 80);
//     } else {
//       setQuery("");
//     }
//   }, [open]);

//   // Click outside close
//   useEffect(() => {
//     const onClick = (e) => {
//       if (open && modalRef.current && !modalRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("mousedown", onClick);
//     return () => window.removeEventListener("mousedown", onClick);
//   }, [open]);

//   // Highlight search
//   const highlight = (text) => {
//     if (!query) return text;
//     try {
//       const parts = String(text).split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
//       return parts.map((part, i) =>
//         part.toLowerCase() === query.toLowerCase() ? (
//           <mark key={i} className="bg-yellow-200 px-0.5 rounded-sm">
//             {part}
//           </mark>
//         ) : (
//           <span key={i}>{part}</span>
//         )
//       );
//     } catch {
//       return text;
//     }
//   };

//   function escapeRegExp(string) {
//     return String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
//   }

//   // Select handler: internal vs external
//   const onSelect = (item) => {
//     const path = buildPath(item);
//     setOpen(false);
//     setQuery("");
//     // External → open new tab; Internal → navigate
//     if (/^(https?:|mailto:|tel:)/i.test(path)) {
//       setTimeout(() => window.open(path, "_blank", "noopener,noreferrer"), 120);
//     } else {
//       setTimeout(() => navigate(path), 120);
//     }
//   };

//   // Small helper for nice tag label
//   const tagLabel = (src) => {
//     if (src === "navigation") return "navigation";
//     if (src === "social") return "social";
//     return src.replace("-", " ");
//   };

//   // Badge for social (FB, TW, etc.) or first letter fallback
//   const renderThumb = (item) => {
//     if (item._source === "social") {
//       const text = item._badge || (item.title || "S").slice(0, 2).toUpperCase();
//       return (
//         <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-rose-50 flex items-center justify-center text-rose-600 font-semibold">
//           {text}
//         </div>
//       );
//     }
//     if (item.icon) {
//       return (
//         <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-gray-50 flex items-center justify-center">
//           <div className="text-blue-600">{item.icon}</div>
//         </div>
//       );
//     }
//     return (
//       <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-semibold">
//         {String(item.title || "").charAt(0).toUpperCase()}
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <motion.button
//         aria-label="Open site search"
//         title="Search (Ctrl/Cmd + K)"
//         onClick={() => setOpen(true)}
//         className="fixed top-55 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.95, rotate: -5 }}
//       >
//         <Search className="w-5 h-5 sm:w-6 sm:h-6" />
//       </motion.button>

//       {/* Modal */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               ref={modalRef}
//               className="w-full sm:max-w-4xl bg-white rounded-b-2xl sm:rounded-2xl shadow-2xl overflow-hidden mt-6"
//               initial={{ y: -60, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -60, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220, damping: 26 }}
//             >
//               {/* Header */}
//               <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b">
//                 <Search className="w-5 h-5 text-gray-500" />
//                 <motion.input
//                   ref={inputRef}
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search the website (pages, navigation, social, indux)…"
//                   className="w-full text-base sm:text-lg md:text-xl focus:outline-none placeholder:text-gray-400"
//                   initial={{ x: -15, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 }}
//                 />
//                 <motion.button
//                   onClick={() => setOpen(false)}
//                   className="p-2 rounded hover:bg-gray-100"
//                   aria-label="Close search"
//                   title="Close"
//                   whileHover={{ rotate: 90, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </motion.button>
//               </div>

//               {/* Body */}
//               <motion.div
//                 className="p-4 sm:p-5 max-h-[65vh] overflow-auto"
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.15 }}
//               >
//                 {!query ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-base sm:text-lg font-semibold">Search the site</p>
//                     <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
//                       Try “victim support”, “privacy policy”, “Instagram”, “Contact Us”, “forensics”, “mentorship”…
//                     </p>
//                   </div>
//                 ) : results.length === 0 ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-base sm:text-lg font-medium">No results</p>
//                     <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Try different keywords or check spelling.</p>
//                   </div>
//                 ) : (
//                   <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" layout>
//                     {results.map((item, idx) => (
//                       <motion.article
//                         key={`${item._source}-${item._index}-${idx}`}
//                         onClick={() => onSelect(item)}
//                         className="cursor-pointer p-3 sm:p-4 rounded-lg border hover:shadow-md transition bg-white"
//                         role="link"
//                         tabIndex={0}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         layout
//                       >
//                         <div className="flex items-start gap-2 sm:gap-3">
//                           {renderThumb(item)}

//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-sm sm:text-base font-semibold text-slate-800 truncate">
//                               {highlight(String(item.title))}
//                             </h3>
//                             <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 line-clamp-3">
//                               {highlight(String(item.description || "").slice(0, 220))}
//                             </p>
//                             <div className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-gray-400 flex items-center gap-2">
//                               <span className="capitalize">{tagLabel(item._source)}</span>
//                               <span>•</span>
//                               <span>Click to open</span>
//                             </div>
//                           </div>

//                           <div className="flex-none pl-2 sm:pl-3">
//                             <ExternalLink className="w-4 h-4 text-gray-400" />
//                           </div>
//                         </div>
//                       </motion.article>
//                     ))}
//                   </motion.div>
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FloatingSearch;

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import all data files
import { aboutUsData } from "../../data/aboutUsData";
import cyberEducationData from "../../data/cyberEducationData";
import { legalComplianceData } from "../../data/legalComplianceData";
import { recruitmentData } from "../../data/recruitmentData";
import { reportCyberCrimeData } from "../../data/reportCyberCrimeData";
import { resourceData } from "../../data/resourceData";
import { softwareData } from "../../data/softwareData";
import { teamMembers } from "../../data/teamData.js";
import { victimRightsSupportData } from "../../data/victimRightsSupportData";

// ✅ NEW: Indux data
import { homeServicesData } from "../../data/homeServicesData";

const FloatingSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Navbar items & Social links
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Education & Internship", path: "/cyber-education" },
    { label: "IT and Software", path: "/software-services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Recruitment Process", path: "/recruitment-process" },
    { label: "Cyber Crime Report", path: "/report-a-cyber-crime" },
    { label: "Resource and download", path: "/resource-and-download" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61576052739281" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/cr-cyber-crime-foundation-b1313b377" },
    { name: "Instagram", url: "https://www.instagram.com/crcybercrime/" },
    { name: "YouTube Studio", url: "https://studio.youtube.com/channel/UCxrhFdTCVoqdzE4jEaMsIgw/editing/profile" },
    { name: "location", url: "https://maps.app.goo.gl/xwU59PK7iPxPVtfc8" },
    { name: "Telegram", url: "https://t.me/yourchannel" },
    { name: "WhatsApp", url: "https://wa.me/919777999529" },
    { name: "Phone", url: "tel:+919777999529" },
    { name: "Email", url: "mailto:hr@crcybercrime.org" },
  ];

  // Chip Styling
  const chipStyle = (src) => {
    const base =
      "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium";
    const map = {
      indux: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
      about: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
      "cyber-education": "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200",
      "legal-compliance": "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
      "recruitment-process": "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
      report: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
      resources: "bg-teal-50 text-teal-700 ring-1 ring-teal-200",
      "software-services": "bg-slate-50 text-slate-700 ring-1 ring-slate-200",
      team: "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200",
      "victim-rights": "bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-200",
      navigation: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
      social: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
    };
    return `${base} ${map[src] || "bg-gray-100 text-gray-700 ring-1 ring-gray-200"}`;
  };

  // Combine all data into one searchable index
  const allData = useMemo(() => {
    const mapSection = (arr, source) =>
      (arr || []).map((it, idx) => {
        const baseDesc =
          it.description ||
          (it.body ? String(it.body).slice(0, 200) : "") ||
          (it.content ? String(it.content).slice(0, 200) : "");
        const featuresText = Array.isArray(it.features) && it.features.length
          ? ` • ${it.features.join(" • ")}`
          : "";
        return {
          ...it,
          title: it.title || it.name || it.label || "Untitled",
          description: `${baseDesc}${featuresText}`.trim(),
          _source: source,
          _index: idx,
          slug: it.slug,
          path: it.path,
          url: it.url,
        };
      });

    const mapNav = navItems.map((n, idx) => ({
      title: n.label,
      description: `Go to ${n.label}`,
      slug: n.path,
      _source: "navigation",
      _index: idx,
    }));

    const mapSocial = socialLinks.map((s, idx) => ({
      title: s.name,
      description:
        s.name === "Phone"
          ? "Call us"
          : s.name === "Email"
          ? "Send us an email"
          : `Open our ${s.name}`,
      url: s.url,
      _source: "social",
      _index: idx,
      _badge: (s.name || "S").slice(0, 2).toUpperCase(),
    }));

    return [
      ...mapSection(aboutUsData, "about"),
      ...mapSection(cyberEducationData, "cyber-education"),
      ...mapSection(legalComplianceData, "legal-compliance"),
      ...mapSection(recruitmentData, "recruitment-process"),
      ...mapSection(reportCyberCrimeData, "report"),
      ...mapSection(resourceData, "resources"),
      ...mapSection(softwareData, "software-services"),
      ...mapSection(teamMembers, "team"),
      ...mapSection(victimRightsSupportData, "victim-rights"),
      ...mapSection(homeServicesData, "indux"), // ✅ Indux cards added here
      ...mapNav,
      ...mapSocial,
    ];
  }, []);

  const baseMap = {
    about: "/about/",
    "cyber-education": "/cyber-education/",
    "legal-compliance": "/about/legal-compliance/",
    "recruitment-process": "/recruitment-process/",
    report: "/report/",
    resources: "/resource-and-download/",
    "software-services": "/software-services/",
    team: "/our-team/",
    "victim-rights": "/report/victim-rights-support/",
    indux: "/",
    navigation: "/",
    social: "/",
  };

  const buildPath = (item) => {
    const s = item.slug || item.path || item.url || "";
    if (!s) return "/";
    if (/^(https?:|mailto:|tel:)/i.test(s)) return s;
    if (s.startsWith("/")) return s;
    if (s.includes("/")) return s.startsWith("/") ? s : `/${s}`;
    return `${baseMap[item._source] || "/"}${s}`;
  };

  // Search Logic
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allData
      .map((item) => {
        const title = (item.title || "").toLowerCase();
        const desc = (item.description || "").toLowerCase();
        let score = 0;
        if (title === q) score += 100;
        if (title.includes(q)) score += 50;
        if (desc.includes(q)) score += 20;
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [query, allData]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const onClick = (e) => {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  const highlight = (text) => {
    if (!query) return text;
    try {
      const parts = String(text).split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
      return parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 px-0.5 rounded-sm">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      );
    } catch {
      return text;
    }
  };

  function escapeRegExp(string) {
    return String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  const onSelect = (item) => {
    const path = buildPath(item);
    setOpen(false);
    setQuery("");
    if (/^(https?:|mailto:|tel:)/i.test(path)) {
      setTimeout(() => window.open(path, "_blank", "noopener,noreferrer"), 120);
    } else {
      setTimeout(() => navigate(path), 120);
    }
  };

  const renderThumb = (item) => {
    if (item._source === "social") {
      const text = item._badge || (item.title || "S").slice(0, 2).toUpperCase();
      return (
        <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-rose-50 flex items-center justify-center text-rose-600 font-semibold">
          {text}
        </div>
      );
    }
    if (item.icon) {
      return (
        <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-gray-50 flex items-center justify-center">
          <div className="text-blue-600">{item.icon}</div>
        </div>
      );
    }
    return (
      <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-semibold">
        {String(item.title || "").charAt(0).toUpperCase()}
      </div>
    );
  };

  return (
    <>
      {/* Floating Search Button */}
      <motion.button
        aria-label="Open site search"
        title="Search (Ctrl/Cmd + K)"
        onClick={() => setOpen(true)}
        className="fixed top-55 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95, rotate: -5 }}
      >
        <Search className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Search Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="w-full sm:max-w-4xl bg-white rounded-b-2xl sm:rounded-2xl shadow-2xl overflow-hidden mt-6"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {/* Search Header */}
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b">
                <Search className="w-5 h-5 text-gray-500" />
                <motion.input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the site…"
                  className="w-full text-base sm:text-lg md:text-xl focus:outline-none placeholder:text-gray-400"
                  initial={{ x: -15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded hover:bg-gray-100"
                  aria-label="Close search"
                  title="Close"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Results Body */}
              <motion.div
                className="p-4 sm:p-5 max-h-[65vh] overflow-auto"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {!query ? (
                  <div className="text-center text-gray-500 py-10 sm:py-12">
                    <p className="text-base sm:text-lg font-semibold">Search the site</p>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
                      Try “victim support”, “privacy policy”, “Instagram”, “forensics”, “mentorship”…
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="text-center text-gray-500 py-10 sm:py-12">
                    <p className="text-base sm:text-lg font-medium">No results</p>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Try different keywords or check spelling.</p>
                  </div>
                ) : (
                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" layout>
                    {results.map((item, idx) => (
                      <motion.article
                        key={`${item._source}-${item._index}-${idx}`}
                        onClick={() => onSelect(item)}
                        className="cursor-pointer p-3 sm:p-4 rounded-lg border hover:shadow-md transition bg-white"
                        role="link"
                        tabIndex={0}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        layout
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          {renderThumb(item)}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-slate-800 truncate">
                              {highlight(String(item.title))}
                            </h3>
                            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 line-clamp-3">
                              {highlight(String(item.description || "").slice(0, 220))}
                            </p>
                            <div className="mt-1 sm:mt-2 flex items-center gap-2">
                              <span className={chipStyle(item._source)}>
                                {item._source}
                              </span>
                              <span className="text-[11px] sm:text-xs text-gray-400">Click to open</span>
                            </div>
                          </div>
                          <div className="flex-none pl-2 sm:pl-3">
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingSearch;
