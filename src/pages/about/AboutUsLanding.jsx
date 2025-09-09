// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { aboutUsData } from '../../data/aboutUsData.jsx';

// const AboutUsLanding = () => {
//   const navigate = useNavigate();
//   const borderColors = ['#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

//   return (
//     <section className="bg-gray-50 py-8 sm:py-20">
//       <div className="max-w-full mx-auto px-3 sm:px-6">
//         {/* Header - Reduced size for mobile */}
//         <div className="text-center mb-10 sm:mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-xl font-bold tracking-tight text-gray-900 xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
//           >
//             It's All About Us
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
//           >
//             Discover the core values, mission, and people that drive our success.
//           </motion.p>
//         </div>

//         {/* Cards Grid - Two columns on small screens, four on large */}
//         <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {aboutUsData.map((itemData, index) => (
//             <motion.div
//               key={itemData.slug}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//               whileHover="hover"
//               className="relative p-0.5 rounded-xl cursor-pointer group"
//               onClick={() => navigate(`/about/${itemData.slug}`)}
//             >
//               {/* --- Hover Effects --- */}
//               <motion.div
//                 className="absolute inset-0 rounded-xl border border-gray-300 mt-2 sm:mt-4"
//                 variants={{ hover: { borderColor: borderColors[index], transition: { duration: 0.3 } } }}
//               />
//               <motion.div
//                 className="absolute inset-0 rounded-xl"
//                 style={{
//                   background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${borderColors[index]}33, transparent 40%)`,
//                   opacity: 0
//                 }}
//                 variants={{ hover: { opacity: 1, transition: { duration: 0.4 } } }}
//               />
              
//               {/* --- Card Content - Compact on mobile --- */}
//               <motion.div
//                 className="relative bg-white hover:border-gray-900 rounded-lg p-3 sm:p-4 md:p-6 h-full flex flex-col z-10 border border-gray-900 group-hover:border-transparent transition-colors duration-300"
//                 variants={{ hover: { y: -4, transition: { type: 'spring', stiffness: 300 } } }}
//               >
//                 <div 
//                   className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg mb-2 xs:mb-3 sm:mb-5 flex items-center justify-center"
//                   style={{ backgroundColor: `${borderColors[index]}1A` }}
//                 >
//                   {React.cloneElement(itemData.icon, { 
//                     className: "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6",
//                     style: { color: borderColors[index] }
//                   })}
//                 </div>
                
//                 <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-1 xs:mb-2">
//                   {itemData.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-xs xs:text-sm sm:text-base mb-3 xs:mb-4 sm:mb-5 flex-grow">
//                   {itemData.description}
//                 </p>
                
//                 <div className="flex items-center font-semibold text-xs xs:text-sm"
//                   style={{ color: borderColors[index] }}
//                 >
//                   Learn more
//                   <motion.svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-3 w-3 xs:h-4 xs:w-4 ml-1"
//                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
//                     variants={{ hover: { x: 2, transition: { type: 'spring', stiffness: 400, damping: 15 } } }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </motion.svg>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA - Smaller on mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12 sm:mt-20"
//         >
//           <motion.button 
//             whileHover={{
//               boxShadow: `0 0 0 2px ${borderColors[0]}`,
//               transition: { duration: 0.3 }
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="px-5 py-2.5 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-lg text-sm xs:text-base sm:text-lg font-medium relative overflow-hidden"
//             onClick={() => navigate('/contact-us')}
//           >
//             <span className="relative z-10 flex items-center justify-center">
//               Get Started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </span>
//             <motion.span
//               className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
//               variants={{
//                 hover: { opacity: 1 }
//               }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsLanding;

// src/pages/AboutUsLanding.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { aboutUsData, cardColors } from '../../data/aboutUsData.jsx';

// const AboutUsLanding = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-8 sm:py-20">
//       <div className="max-w-7xl mx-auto px-3 sm:px-6">
//         {/* Header - Reduced size for mobile */}
//         <div className="text-center mb-10 sm:mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
//           >
//             It's All About Us
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-2xl mx-auto text-base xs:text-lg sm:text-xl text-gray-600 mt-4"
//           >
//             Discover the core values, mission, and people that drive our success.
//           </motion.p>
//         </div>

//         {/* Cards Grid - Two columns on small screens, four on large */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
//           {aboutUsData.map((itemData, index) => {
//             const colors = cardColors[itemData.slug];
            
//             return (
//               <motion.div
//                 key={itemData.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//                 whileHover={{ 
//                   y: -8,
//                   transition: { type: 'spring', stiffness: 300 }
//                 }}
//                 className="relative rounded-xl cursor-pointer overflow-hidden shadow-lg"
//                 onClick={() => navigate(`/about/${itemData.slug}`)}
//               >
//                 {/* Card Content */}
//                 <div 
//                   className="h-full p-5 flex flex-col"
//                   style={{ 
//                     backgroundColor: colors.bg,
//                     color: colors.text,
//                     border: `2px solid ${colors.border}`
//                   }}
//                 >
//                   <div className="mb-4 flex items-center">
//                     <div 
//                       className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3"
//                       style={{ backgroundColor: `${colors.border}40` }}
//                     >
//                       {React.cloneElement(itemData.icon, { 
//                         className: "w-5 h-5 sm:w-6 sm:h-6",
//                         style: { color: colors.text }
//                       })}
//                     </div>
//                     <h3 className="text-lg font-semibold">
//                       {itemData.title}
//                     </h3>
//                   </div>
                  
//                   <p className="text-sm mb-4 flex-grow opacity-90">
//                     {itemData.description}
//                   </p>
                  
//                   <div className="flex items-center font-semibold text-sm pt-2 border-t border-opacity-30"
//                     style={{ borderColor: colors.text }}
//                   >
//                     Learn more
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 ml-1"
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor" 
//                       strokeWidth={2.5}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </div>
//                 </div>
                
//                 {/* Hover overlay */}
//                 <motion.div 
//                   className="absolute inset-0 opacity-0"
//                   style={{ backgroundColor: colors.border }}
//                   whileHover={{ opacity: 0.1 }}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA - Smaller on mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12 sm:mt-20"
//         >
//           <motion.button 
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.3 }
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-base sm:text-lg font-semibold shadow-md"
//             onClick={() => navigate('/contact-us')}
//           >
//             <span className="flex items-center justify-center">
//               Get Started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 ml-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsLanding;

// src/pages/AboutUsLanding.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { aboutUsData, cardColors } from '../../data/aboutUsData.jsx';

// const AboutUsLanding = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-gradient-to-br  from-blue-50 to-purple-50 py-8 sm:py-20">
//       <div className="max-w-full mx-auto px-3 sm:px-6">
//         {/* Header - Reduced size for mobile */}
//         <div className="text-center mb-10 sm:mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-xl font-bold tracking-tight text-gray-900 xs:text-2xl  sm:text-3xl lg:text-4xl xl:text-5xl"
//           >
//             It's All About Us
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
//           >
//             Discover the core values, mission, and people that drive our success.
//           </motion.p>
//         </div>

//         {/* Cards Grid - Two columns on small screens, four on large */}
//         <div className="grid grid-cols-2 gap-3 xs:gap-4  sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {aboutUsData.map((itemData, index) => {
//             const colors = cardColors[itemData.slug];
            
//             return (
//               <motion.div
//                 key={itemData.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//                 whileHover="hover"
//                 className="relative p-0.5 rounded-xl cursor-pointer group"
//                 onClick={() => navigate(`/about/${itemData.slug}`)}
//               >
//                 {/* --- Hover Effects --- */}
//                 <motion.div
//                   className="absolute inset-0 rounded-xl border border-gray-300 mt-2 sm:mt-4"
//                   style={{ borderColor: colors.border }}
//                   variants={{ hover: { borderColor: colors.border, transition: { duration: 0.3 } } }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 rounded-xl"
//                   style={{
//                     background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${colors.border}33, transparent 40%)`,
//                     opacity: 0
//                   }}
//                   variants={{ hover: { opacity: 1, transition: { duration: 0.4 } } }}
//                 />
                
//                 {/* --- Card Content - Compact on mobile --- */}
//                 <motion.div
//                   className="relative rounded-lg p-3 sm:p-4 md:p-6 h-full flex flex-col z-10 transition-colors duration-300"
//                   style={{ 
//                     backgroundColor: colors.bg,
//                     color: colors.text,
//                   }}
//                   variants={{ hover: { y: -4, transition: { type: 'spring', stiffness: 300 } } }}
//                 >
//                   <div 
//                     className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg mb-2 xs:mb-3 sm:mb-5 flex items-center justify-center"
//                     style={{ backgroundColor: `${colors.border}40` }}
//                   >
//                     {React.cloneElement(itemData.icon, { 
//                       className: "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6",
//                       style: { color: colors.text }
//                     })}
//                   </div>
                  
//                   <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2">
//                     {itemData.title}
//                   </h3>
                  
//                   <p className="text-xs xs:text-sm sm:text-base mb-3 xs:mb-4 sm:mb-5 flex-grow opacity-90">
//                     {itemData.description}
//                   </p>
                  
//                   <div className="flex items-center font-semibold text-xs xs:text-sm"
//                     style={{ color: colors.text }}
//                   >
//                     Learn more
//                     <motion.svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-3 w-3 xs:h-4 xs:w-4 ml-1"
//                       fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
//                       variants={{ hover: { x: 2, transition: { type: 'spring', stiffness: 400, damping: 15 } } }}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </motion.svg>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA - Smaller on mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12 sm:mt-20"
//         >
//           <motion.button 
//             whileHover={{
//               boxShadow: `0 0 0 2px ${cardColors["introduction"].border}`,
//               transition: { duration: 0.3 }
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="px-5 py-2.5 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-lg text-sm xs:text-base sm:text-lg font-medium relative overflow-hidden"
//             onClick={() => navigate('/contact-us')}
//           >
//             <span className="relative z-10 flex items-center justify-center">
//               Get Started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </span>
//             <motion.span
//               className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
//               variants={{
//                 hover: { opacity: 1 }
//               }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsLanding;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutUsData, cardColors } from '../../data/aboutUsData.jsx';

const AboutUsLanding = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-8 sm:py-20 pt-24 sm:pt-8">
      <div className="max-w-full mx-auto px-3 sm:px-6">
        {/* Header - Reduced size for mobile */}
        <div className="text-center mb-10 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold tracking-tight text-gray-900 xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            It's All About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 mt-2"
          >
            Discover the core values, mission, and people that drive our success.
          </motion.p>
        </div>

        {/* Cards Grid - Two columns on small screens, four on large */}
        <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutUsData.map((itemData, index) => {
            const colors = cardColors[itemData.slug];
            
            return (
              <motion.div
                key={itemData.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                whileHover="hover"
                className="relative p-0.5 rounded-xl cursor-pointer group"
                onClick={() => navigate(`/about/${itemData.slug}`)}
              >
                {/* --- Hover Effects --- */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-gray-300 mt-2 sm:mt-4"
                  style={{ borderColor: colors.border }}
                  variants={{ hover: { borderColor: colors.border, transition: { duration: 0.3 } } }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${colors.border}33, transparent 40%)`,
                    opacity: 0
                  }}
                  variants={{ hover: { opacity: 1, transition: { duration: 0.4 } } }}
                />
                
                {/* --- Card Content - Compact on mobile --- */}
                <motion.div
                  className="relative rounded-lg p-3 sm:p-4 md:p-6 h-full flex flex-col z-10 transition-colors duration-300"
                  style={{ 
                    backgroundColor: colors.bg,
                    color: colors.text,
                  }}
                  variants={{ hover: { y: -4, transition: { type: 'spring', stiffness: 300 } } }}
                >
                  <div 
                    className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg mb-2 xs:mb-3 sm:mb-5 flex items-center justify-center"
                    style={{ backgroundColor: `${colors.border}40` }}
                  >
                    {React.cloneElement(itemData.icon, { 
                      className: "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6",
                      style: { color: colors.text }
                    })}
                  </div>
                  
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2">
                    {itemData.title}
                  </h3>
                  
                  <p className="text-xs xs:text-sm sm:text-base mb-3 xs:mb-4 sm:mb-5 flex-grow opacity-90">
                    {itemData.description}
                  </p>
                  
                  <div className="flex items-center font-semibold text-xs xs:text-sm"
                    style={{ color: colors.text }}
                  >
                    Learn more
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 xs:h-4 xs:w-4 ml-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      variants={{ hover: { x: 2, transition: { type: 'spring', stiffness: 400, damping: 15 } } }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Smaller on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-20"
        >
          <motion.button 
            whileHover={{
              boxShadow: `0 0 0 2px ${cardColors["introduction"].border}`,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-lg text-sm xs:text-base sm:text-lg font-medium relative overflow-hidden"
            onClick={() => navigate('/contact-us')}
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
              variants={{
                hover: { opacity: 1 }
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsLanding;