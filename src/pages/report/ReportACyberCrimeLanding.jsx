
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { reportCyberCrimeData } from "../../data/reportCyberCrimeData";

// const ReportACyberCrimeLanding = () => {
//   const navigate = useNavigate();
//   const colorPalette = [
//     "#3b82f6", "#10b981", "#f59e0b", "#ef4444",
//     "#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"
//   ];

//   return (
//     <section className="relative bg-gray-50 py-16 sm:py-20 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 via-white to-purple-50 animate-gradient" />

//       <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
//           >
//             Report a Cyber Crime
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-2xl mx-auto text-lg text-gray-600"
//           >
//             Explore resources, reporting tools, and guidance to handle cyber crimes efficiently.
//           </motion.p>
//         </div>

//         {/* Cards Grid (Masonry-like) */}
//         <div className="grid auto-rows-[minmax(220px,auto)]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {reportCyberCrimeData.map((item, index) => {
//             const isTall = index % 7 === 0 || index % 7 === 3;
//             const color = colorPalette[index % colorPalette.length];

//             return (
//               <motion.div
//                 key={item.slug}
//                 whileHover={{ scale: 1.04, y: -5 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 onClick={() => navigate(`/report-a-cyber-crime/${item.slug}`)}
//                 className={`group cursor-pointer relative rounded-2xl shadow-md hover:shadow-2xl transition-all 
//                   p-6 flex flex-col justify-between overflow-hidden bg-white border`}
//                 style={{
//                   gridRow: isTall ? "span 2" : "span 1",
//                 }}
//               >
//                 {/* Background Hover Glow */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{
//                     background: `radial-gradient(circle at top right, ${color}22, transparent 70%)`
//                   }}
//                 />

//                 {/* Icon */}
//                 <div
//                   className="w-14 h-14 flex items-center justify-center rounded-xl mb-5"
//                   style={{ backgroundColor: `${color}1A` }}
//                 >
//                   {React.cloneElement(item.icon, {
//                     className: "w-8 h-8",
//                     style: { color: color },
//                   })}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 flex-grow mb-4 relative z-10">
//                   {item.description}
//                 </p>

//                 {/* CTA */}
//                 <div
//                   className="flex items-center font-semibold text-sm relative z-10"
//                   style={{ color: color }}
//                 >
//                   Learn more
//                   <motion.svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 ml-1.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2.5}
//                     whileHover={{ x: 4 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 15 }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </motion.svg>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReportACyberCrimeLanding;


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { reportCyberCrimeData } from "../../data/reportCyberCrimeData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const ReportACyberCrimeLanding = () => {
  const navigate = useNavigate();
  const colorPalette = [
    "#3b82f6", "#10b981", "#f59e0b", "#ef4444",
    "#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"
  ];

  return (
    <section className="relative bg-gray-50 pt-24 sm:pt-8 py-16 sm:py-20 overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gray-300/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            We are here to report
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            Explore resources, reporting tools, and guidance to handle cyber crimes efficiently.
          </motion.p>
        </div>

        {/* Cards Grid with Staggered Animation */}
        <motion.div
          className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {reportCyberCrimeData.map((item, index) => {
            const isTall = index % 7 === 0 || index % 7 === 3;
            const color = colorPalette[index % colorPalette.length];

            return (
              <motion.div
                key={item.slug}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => navigate(`/report/${item.slug}`)}
                className={`group cursor-pointer relative rounded-2xl border bg-white shadow-md hover:shadow-2xl transition-all 
                  p-6 flex flex-col justify-between overflow-hidden`}
                style={{
                  gridRow: isTall ? "span 2" : "span 1"
                }}
              >
                {/* Gradient Border on Hover */}
                <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></span>

                {/* Floating Icon */}
                <motion.div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 relative z-10"
                  style={{ backgroundColor: `${color}1A` }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {React.cloneElement(item.icon, {
                    className: "w-8 h-8",
                    style: { color: color }
                  })}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 flex-grow mb-4 relative z-10">
                  {item.description}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center font-semibold text-sm relative z-10"
                  style={{ color: color }}
                >
                  Learn more
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ReportACyberCrimeLanding;
