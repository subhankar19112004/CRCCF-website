// // src/pages/mainPages/Indux.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
//       {/* <div className="text-center mb-8 sm:mb-12">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
//           Our Comprehensive Services
//         </h1>
//         <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
//           Your shield against cyber threats, providing legal guidance, IT solutions, and continuous support.
//         </p>
//       </div> */}

//       {/* Always 3 cols → 6 on xl (matches your Home layout) */}
//       <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center mb-16"
//                   >
//                     {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
//                       Our Comprehensive Cybersecurity Services
//                     </h2> */}
//                     <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//                       Your shield against cyber threats, providing legal guidance, IT
//                       solutions, and continuous support to empower society
//                       responsibly and securely.
//                     </p>
//                   </motion.div>
//       <div className="grid grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 px-2 sm:px-0 items-stretch">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.05 }}
//             whileHover={{ y: -4, scale: 1.02 }}
//             className={`${service.color} flex flex-col p-3 sm:p-5 rounded-xl text-white shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group h-auto sm:min-h-[300px]`}
//           >
//             {/* Dual border animation */}
//             <motion.div
//               className="absolute inset-0 rounded-xl border border-white/20"
//               animate={{ opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="absolute inset-1 rounded-xl border border-white/10"
//               animate={{ opacity: [0.2, 0.4, 0.2] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//             />

//             {/* Hover glow */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform rotate-45 scale-150" />

//             {/* Card content */}
//             <div className="relative z-10 flex flex-col flex-1 items-center text-center">
//               <div className="flex justify-center mb-2">{service.icon}</div>
//               <h3 className="text-[11px] sm:text-base font-semibold mb-1 sm:mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-[9px] sm:text-xs text-white/90 mb-2 sm:mb-3 px-0.5 sm:px-1">
//                 {service.description}
//               </p>

//               {/* Features → hidden on mobile */}
//               <ul className="hidden sm:block space-y-1.5 w-full">
//                 {service.features.map((feature, j) => (
//                   <li key={j} className="flex items-start text-xs text-white/90 text-left">
//                     <div className="w-1 h-1 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Indux;
// src/pages/mainPages/Indux.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//           Your shield against cyber threats, providing legal guidance, IT
//           solutions, and continuous support to empower society responsibly and securely.
//         </p>
//       </motion.div>

//       {/* Always 3 cols → 6 on xl (matches your Home layout) */}
//       <div className="grid grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 px-2 sm:px-0 items-stretch">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.05 }}
//             whileHover={{ y: -4, scale: 1.02 }}
//             className="relative"
//           >
//             <Link
//               to={service.path}
//               className={`${service.color} block h-full rounded-xl text-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group`}
//               role="link"
//               aria-label={service.title}
//             >
//               {/* Dual border animation */}
//               <motion.div
//                 className="absolute inset-0 rounded-xl border border-white/20"
//                 animate={{ opacity: [0.3, 0.6, 0.3] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="absolute inset-1 rounded-xl border border-white/10"
//                 animate={{ opacity: [0.2, 0.4, 0.2] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1,
//                 }}
//               />

//               {/* Hover glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform rotate-45 scale-150" />

//               {/* Card content */}
//               <div className="relative z-10 flex flex-col flex-1 items-center text-center p-3 sm:p-5 h-full">
//                 <div className="flex justify-center mb-2">{service.icon}</div>
//                 <h3 className="text-[11px] sm:text-base font-semibold mb-1 sm:mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-[9px] sm:text-xs text-white/90 mb-2 sm:mb-3 px-0.5 sm:px-1">
//                   {service.description}
//                 </p>

//                 {/* Features → hidden on mobile */}
//                 <ul className="hidden sm:block space-y-1.5 w-full">
//                   {service.features.map((feature, j) => (
//                     <li
//                       key={j}
//                       className="flex items-start text-xs text-white/90 text-left"
//                     >
//                       <div className="w-1 h-1 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <span className="mt-3 text-xs sm:text-sm text-white/90 font-medium group-hover:underline">
//                   Open →
//                 </span>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Indux;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//           Your shield against cyber threats, providing legal guidance, IT
//           solutions, and continuous support to empower society responsibly and securely.
//         </p>
//       </motion.div>

//       {/* Keep layout: 3 cols (mobile) → 6 cols (xl). Slightly smaller gap on mobile to feel wider. */}
//       <div className="grid grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-4 xl:gap-6 px-2 sm:px-0 items-stretch">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.05 }}
//             className="relative isolate" // isolates stacking context so neighbors can't overlap
//           >
//             <Link
//               to={service.path}
//               className={`
//                 ${service.color}
//                 card-inner block h-full w-full
//                 rounded-xl text-white
//                 shadow-md md:hover:shadow-xl
//                 transition-all duration-300
//                 overflow-hidden touch-manipulation select-none
//                 /* hover effects only on md+ to avoid mobile overlap */
//                 md:hover:-translate-y-1
//               `}
//               role="link"
//               aria-label={service.title}
//             >
//               {/* Dual border animation (non-interactive) */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-xl border border-white/20"
//                 animate={{ opacity: [0.3, 0.6, 0.3] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="pointer-events-none absolute inset-1 rounded-xl border border-white/10"
//                 animate={{ opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               />

//               {/* Hover glow (non-interactive) */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 transform rotate-45 scale-150" />

//               {/* Card content */}
//               <div className="relative z-10 flex flex-col items-center text-center h-full
//                               p-2.5 sm:p-4">
//                 <div className="flex justify-center mb-1.5 sm:mb-2">
//                   {service.icon}
//                 </div>

//                 <h3 className="text-[11px] sm:text-base font-semibold mb-1 sm:mb-2 leading-tight line-clamp-2">
//                   {service.title}
//                 </h3>

//                 <p className="text-[9px] sm:text-xs text-white/90 mb-2 sm:mb-3 px-0.5 sm:px-1 line-clamp-3">
//                   {service.description}
//                 </p>

//                 {/* Features → hidden on mobile */}
//                 <ul className="hidden sm:block space-y-1.5 w-full">
//                   {service.features.map((feature, j) => (
//                     <li key={j} className="flex items-start text-xs text-white/90 text-left">
//                       <div className="w-1 h-1 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <span className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/90 font-medium md:group-hover:underline">
//                   Open →
//                 </span>
//               </div>

//               {/* MOBILE HEIGHT CONTROL – smaller on mobile, comfortable on larger screens */}
//               <div className="pointer-events-none invisible min-h-28 sm:min-h-32 md:min-h-[220px]" />
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Indux;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//           Your shield against cyber threats, providing legal guidance, IT
//           solutions, and continuous support to empower society responsibly and securely.
//         </p>
//       </motion.div>

//       {/* layout unchanged: 3 cols mobile → 6 cols xl */}
//       <div className="grid grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-4 xl:gap-6 px-2 sm:px-0 items-stretch">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.03 }}
//             className="relative isolate"
//           >
//             <Link
//               to={service.path}
//               className={`${service.color} group block h-full w-full rounded-lg text-white shadow-md md:hover:shadow-lg transition-all duration-200 overflow-hidden touch-manipulation select-none md:hover:-translate-y-0.5`}
//               role="link"
//               aria-label={service.title}
//             >
//               {/* non-interactive borders/glow so they never steal taps */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-lg border border-white/20"
//                 animate={{ opacity: [0.35, 0.6, 0.35] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="pointer-events-none absolute inset-1 rounded-lg border border-white/10"
//                 animate={{ opacity: [0.25, 0.4, 0.25] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

//               {/* content – real height control */}
//               <div className="relative z-10 flex flex-col items-center text-center p-2 sm:p-3 md:p-4 min-h-24 sm:min-h-32 md:min-h-[200px]">
//                 <div className="flex justify-center mb-1 sm:mb-2 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-6 sm:[&_svg]:w-6 md:[&_svg]:h-7 md:[&_svg]:w-7">
//                   {service.icon}
//                 </div>

//                 <h3 className="text-[11px] sm:text-sm md:text-base font-semibold leading-tight mb-0.5 sm:mb-1 line-clamp-2">
//                   {service.title}
//                 </h3>

//                 <p className="text-[9px] sm:text-xs text-white/90 mb-1.5 sm:mb-2 px-0.5 sm:px-1 leading-snug line-clamp-2">
//                   {service.description}
//                 </p>

//                 {/* features hidden on mobile */}
//                 <ul className="hidden sm:block space-y-1 w-full">
//                   {service.features.map((feature, j) => (
//                     <li key={j} className="flex items-start text-xs text-white/90 text-left">
//                       <span className="w-1 h-1 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <span className="mt-1 sm:mt-2 text-[10.5px] sm:text-sm text-white/90 font-medium md:group-hover:underline">
//                   Open →
//                 </span>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Indux;
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     <section className="w-full mx-auto px-3 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
//       {/* Top intro text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-14"
//       >
//         <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           Your shield against cyber threats, providing legal guidance, IT solutions, 
//           and continuous support to empower society responsibly and securely.
//         </p>
//       </motion.div>

//       {/* Grid layout: mobile 3 → xl 6 */}
//       <div className="grid grid-cols-3 xl:grid-cols-6 gap-[6px] sm:gap-4 xl:gap-6 px-1 sm:px-0">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.03 }}
//             className="relative isolate"
//           >
//             <Link
//               to={service.path}
//               className={`
//                 ${service.color} group block w-full h-full
//                 rounded-lg text-white
//                 shadow-md md:hover:shadow-lg
//                 overflow-hidden
//                 transition-all duration-200
//                 touch-manipulation select-none
//                 md:hover:-translate-y-0.5
//                 px-2
//               `}
//               role="link"
//               aria-label={service.title}
//             >
//               {/* Non-interactive animated borders */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-lg border border-white/20"
//                 animate={{ opacity: [0.3, 0.6, 0.3] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="pointer-events-none absolute inset-1 rounded-lg border border-white/10"
//                 animate={{ opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               />

//               {/* Hover glow */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col items-center text-center p-2 sm:p-3 md:p-4 min-h-24 sm:min-h-32 md:min-h-[200px]">
//                 {/* Icon */}
//                 <div className="flex justify-center mb-1 sm:mb-1.5 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6">
//                   {service.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold leading-snug mb-0.5 sm:mb-1 line-clamp-2">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-[8px] sm:text-[10px] md:text-xs text-white/90 mb-1 sm:mb-1.5 px-0.5 sm:px-1 line-clamp-2">
//                   {service.description}
//                 </p>

//                 {/* Features – hidden on mobile */}
//                 <ul className="hidden sm:block space-y-1 w-full">
//                   {service.features.map((feature, j) => (
//                     <li
//                       key={j}
//                       className="flex items-start text-[10px] md:text-xs text-white/90 text-left"
//                     >
//                       <span className="w-1 h-1 bg-white rounded-full mt-1 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Open Link */}
//                 <span className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] md:text-sm text-white/90 font-medium md:group-hover:underline">
//                   Open →
//                 </span>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Indux;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { homeServicesData } from "../../data/homeServicesData";

const Indux = () => {
  return (
    // FULL WIDTH on small screens; small side padding so cards don't touch edges
    <section className="w-full mx-auto px-1 sm:px-3 md:px-6 py-10 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16"
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your shield against cyber threats, providing legal guidance, IT solutions,
          and continuous support to empower society responsibly and securely.
        </p>
      </motion.div>

      {/* 3 cols on mobile → 6 on xl; tiny gaps on mobile to make cards wider */}
      <div className="grid grid-cols-3 xl:grid-cols-6 gap-[6px] sm:gap-3 xl:gap-5 px-0 items-stretch">
        {homeServicesData.map((service, i) => (
          <motion.div
            key={`${service.title}-${i}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            className="relative isolate"
          >
            <Link
              to={service.path}
              className={`
                ${service.color}
                group block h-full w-full rounded-lg text-white
                shadow-md md:hover:shadow-lg
                overflow-hidden transition-all duration-200
                touch-manipulation select-none
                md:hover:-translate-y-0.5
                /* slim internal padding on mobile so more width goes to text */
                p-2 sm:p-3 md:p-4
              `}
              role="link"
              aria-label={service.title}
            >
              {/* non-interactive layers so taps don't leak */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-lg border border-white/20"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute inset-1 rounded-lg border border-white/10"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center text-center min-h-24 sm:min-h-32 md:min-h-[200px]">
                {/* icon trimmed on mobile */}
                <div className="flex justify-center mb-1 sm:mb-2 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6">
                  {service.icon}
                </div>

                {/* slightly smaller text; allow 3 lines on mobile so content fits */}
                <h3 className="px-0.5 sm:px-1 text-[10px] sm:text-xs md:text-sm font-semibold leading-snug mb-0.5 sm:mb-1 break-words line-clamp-3 sm:line-clamp-2">
                  {service.title}
                </h3>

                <p className="px-0.5 sm:px-1 text-[8.5px] sm:text-[10px] md:text-xs text-white/90 leading-snug mb-1 sm:mb-2 break-words line-clamp-3 sm:line-clamp-2">
                  {service.description}
                </p>

                {/* Features hidden on mobile (keeps height tight) */}
                <ul className="hidden sm:block space-y-1 w-full">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-[10px] md:text-xs text-white/90 text-left">
                      <span className="w-1 h-1 bg-white rounded-full mt-1 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] md:text-sm text-white/90 font-medium md:group-hover:underline">
                  Open →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Indux;
