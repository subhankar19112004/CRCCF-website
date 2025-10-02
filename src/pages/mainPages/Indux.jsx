// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     // FULL WIDTH on small screens; small side padding so cards don't touch edges
//     <section className="w-full mx-auto px-1 sm:px-3 md:px-6 py-10 sm:py-12 md:py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-10 sm:mb-16"
//       >
//         <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           Your shield against cyber threats, providing legal guidance, IT solutions,
//           and continuous support to empower society responsibly and securely.
//         </p>
//       </motion.div>

//       {/* 3 cols on mobile → 6 on xl; tiny gaps on mobile to make cards wider */}
//       <div className="grid grid-cols-3 xl:grid-cols-6 gap-[6px] sm:gap-3 xl:gap-5 px-0 items-stretch">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 22 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.45, delay: i * 0.03 }}
//             className="relative isolate"
//           >
//             <Link
//               to={service.path}
//               className={`
//                 ${service.color}
//                 group block h-full w-full rounded-lg text-white
//                 shadow-md md:hover:shadow-lg
//                 overflow-hidden transition-all duration-200
//                 touch-manipulation select-none
//                 md:hover:-translate-y-0.5
//                 /* slim internal padding on mobile so more width goes to text */
//                 p-2 sm:p-3 md:p-4
//               `}
//               role="link"
//               aria-label={service.title}
//             >
//               {/* non-interactive layers so taps don't leak */}
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
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

//               {/* CONTENT */}
//               <div className="relative z-10 flex flex-col items-center text-center min-h-24 sm:min-h-32 md:min-h-[200px]">
//                 {/* icon trimmed on mobile */}
//                 <div className="flex justify-center mb-1 sm:mb-2 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6">
//                   {service.icon}
//                 </div>

//                 {/* slightly smaller text; allow 3 lines on mobile so content fits */}
//                 <h3 className="px-0.5 sm:px-1 text-[10px] sm:text-xs md:text-sm font-semibold leading-snug mb-0.5 sm:mb-1 break-words line-clamp-3 sm:line-clamp-2">
//                   {service.title}
//                 </h3>

//                 <p className="px-0.5 sm:px-1 text-[8.5px] sm:text-[10px] md:text-xs text-white/90 leading-snug mb-1 sm:mb-2 break-words line-clamp-3 sm:line-clamp-2">
//                   {service.description}
//                 </p>

//                 {/* Features hidden on mobile (keeps height tight) */}
//                 <ul className="hidden sm:block space-y-1 w-full">
//                   {service.features.map((feature, j) => (
//                     <li key={j} className="flex items-start text-[10px] md:text-xs text-white/90 text-left">
//                       <span className="w-1 h-1 bg-white rounded-full mt-1 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

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

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { homeServicesData } from "../../data/homeServicesData";

// const Indux = () => {
//   return (
//     <section className="w-full mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
//       {/* Section intro text */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-10 sm:mb-16"
//       >
//         <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           Your shield against cyber threats, providing legal guidance, IT solutions,
//           and continuous support to empower society responsibly and securely.
//         </p>
//       </motion.div>

//       {/* Grid layout: 2 cols on mobile, 4 cols on large screens */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
//         {homeServicesData.map((service, i) => (
//           <motion.div
//             key={`${service.title}-${i}`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
//             className="relative group rounded-lg overflow-hidden shadow-md"
//           >
//             <Link to={service.path} role="link" aria-label={service.title} className="block h-full w-full">
//               {/* Background Image */}
//               <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
//                 <motion.img
//                   src={service.image}
//                   alt={service.title}
//                   className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-in-out group-hover:brightness-110"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8 }}
//                 />

//                 {/* Gradient Overlay for Text Readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                 {/* Title */}
//                 <motion.h3
//                   className="absolute bottom-0 left-0 right-0 px-2 py-2 text-sm sm:text-base md:text-lg font-semibold text-white text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   {service.title}
//                 </motion.h3>
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
  // variants for a clean, professional feel (no scale)
  const titleVariants = {
    rest: { y: 0, opacity: 1, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      y: -8,
      opacity: 1,
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
      transition: { type: "tween", duration: 0.28, ease: "easeOut" },
    },
  };

  const imageVariants = {
    rest: { filter: "brightness(1) saturate(1)" },
    hover: {
      filter: "brightness(1.25) saturate(1.05)",
      transition: { type: "tween", duration: 0.28, ease: "easeOut" },
    },
  };

  const outerBorderVariants = {
    rest: { opacity: 0.45 },
    hover: { opacity: 0.85, transition: { duration: 0.25 } },
  };
  const innerBorderVariants = {
    rest: { opacity: 0.25 },
    hover: { opacity: 0.6, transition: { duration: 0.25 } },
  };

  // subtle moving sheen on hover
  const sheenVariants = {
    rest: { x: "-120%", opacity: 0 },
    hover: {
      x: "130%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
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

      {/* 2 cols on small, 4 on large */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {homeServicesData.map((service, i) => (
          <motion.div
            key={`${service.title}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden shadow-md"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Link to={service.path} role="link" aria-label={service.title} className="block h-full w-full relative">
              {/* image */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={imageVariants}
                />

                {/* readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />

                {/* double border (animated + responds on hover) */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-white/40 pointer-events-none"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  variants={outerBorderVariants}
                />
                <motion.div
                  className="absolute inset-1 rounded-lg border border-white/30 pointer-events-none"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  variants={innerBorderVariants}
                />

                {/* sheen sweep */}
                <motion.div
                  className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none
                             bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                  variants={sheenVariants}
                />

                {/* title */}
                <motion.h3
                  className="absolute bottom-0 left-0 right-0 px-2 py-2 text-sm sm:text-base md:text-lg font-semibold text-white text-center"
                  variants={titleVariants}
                >
                  {service.title}
                </motion.h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Indux;
