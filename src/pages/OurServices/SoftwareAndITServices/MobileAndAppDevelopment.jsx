

import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// Exact import path
import { mobileAppDevelopmentData } from '../../../data/OurServices/software_it_services/mobileAppDevelopmentData';

// --- Configuration ---
const DEFAULT_CARDS_VISIBLE = 8; 

// ---------------------------------
// --- 1. Service Card (Square Mobile Layout + Rose Hover) ---
// ---------------------------------
const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // --- 3D TILT LOGIC ---
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltRange = 25;
    const tiltX = (y / rect.height) * tiltRange; 
    const tiltY = (x / rect.width) * tiltRange;
    rotateX.set(-tiltX);
    rotateY.set(tiltY);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  
  const rotateX = useSpring(0, { stiffness: 300, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 20 });
  const scale = useTransform(rotateX, [-25, 25], [1.02, 1.02]); 

  const sheenVariants = { 
    rest: { x: '-120%', opacity: 0 }, 
    hover: { x: '130%', opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } 
  };
  
  // --- NEW HOVER COLOR: ROSE (Pink/Red) ---
  const cardVariants = {
    rest: { 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      y: 0,
      borderColor: 'rgba(229, 231, 235, 1)', 
    },
    hover: { 
      // Vibrant Rose Glow
      boxShadow: '0 20px 40px -10px rgba(225, 29, 72, 0.25), 0 0 15px rgba(225, 29, 72, 0.1)',
      y: -8,
      borderColor: 'rgba(225, 29, 72, 1)', // rose-600
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const iconVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -5, transition: { type: "spring", stiffness: 300 } }
  };

  const scrollInVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: (index % DEFAULT_CARDS_VISIBLE) * 0.05 },
    },
  };

  return (
    <motion.div style={{ perspective: '1200px' }} variants={scrollInVariants} className="h-full">
      <Link to={service.path} className="block h-full group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); resetTilt(); }}
          style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
          className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200"
          variants={cardVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        >
          <motion.div
            className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none bg-gradient-to-r from-white/0 via-white/40 to-white/0 z-20"
            variants={sheenVariants}
          />

          {/* Icon Area - Compact for mobile */}
          <div className="relative bg-gray-50 flex items-center justify-center border-b border-gray-100 h-[100px] md:h-[150px] p-4">
            <motion.div
              variants={iconVariants}
              // Changed text color to Rose-600
              className="w-10 h-10 md:w-16 md:h-16 text-rose-600"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: service.svg }}
                className="w-full h-full [&_svg]:w-full [&_svg]:h-full drop-shadow-sm"
              />
            </motion.div>
          </div>
          
          {/* Content Area - Clamped Text for mobile */}
          <div className="flex-1 flex flex-col p-3 md:p-6 bg-white">
            <h3 
              className="font-bold text-gray-900 mb-1 md:mb-2 text-center md:text-left text-xs md:text-lg leading-tight"
              style={{ transform: 'translateZ(20px)' }}
            >
              {service.heading}
            </h3>
            <p 
              className="text-gray-500 leading-snug text-center md:text-left text-[10px] md:text-sm line-clamp-3 md:line-clamp-none"
              style={{ transform: 'translateZ(10px)' }}
            >
              {service.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};


// ---------------------------------
// --- 2. Collapsible Category Section ---
// ---------------------------------
const ServiceCategorySection = ({ category, services }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const createProfessionalHeading = (category) => {
    if (category.includes('Education')) return "Education & E-Learning Apps";
    if (category.includes('Healthcare')) return "m-Health & Medical Apps";
    if (category.includes('Finance')) return "FinTech & Legal Apps";
    if (category.includes('Business')) return "Enterprise Mobility";
    if (category.includes('Commerce')) return "M-Commerce & Retail";
    if (category.includes('Media')) return "Media & Lifestyle";
    if (category.includes('Community')) return "Social & Community Apps";
    return `${category} App Services`;
  };

  const visibleServices = isExpanded ? services : services.slice(0, DEFAULT_CARDS_VISIBLE);

  return (
    <motion.section 
      className="mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Rose Border for Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 pb-2 border-b-2 border-rose-100 flex items-center gap-2">
        <span className="w-2 h-8 bg-rose-600 rounded-full hidden md:block"></span>
        {createProfessionalHeading(category)}
      </h2>

      {/* Grid: 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        <AnimatePresence>
          {visibleServices.map((service, i) => (
            <ServiceCard 
              key={service.path || i} 
              service={service} 
              index={i} 
            />
          ))}
        </AnimatePresence>
      </div>

      {services.length > DEFAULT_CARDS_VISIBLE && (
        <div className="text-center mt-8 md:mt-10">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            // Rose Button Styling
            className="px-6 py-2 md:px-8 md:py-3 bg-white text-rose-600 font-semibold rounded-full border-2 border-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Show Less' : 'View All Solutions'}
          </motion.button>
        </div>
      )}
    </motion.section>
  );
};


// ---------------------------------
// --- 3. Main Page Component (HERO UPDATED) ---
// ---------------------------------
const MobileAndAppDevelopment = () => {
  const servicesByCategory = mobileAppDevelopmentData.reduce((acc, service) => {
    const category = service.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});

  const categories = Object.keys(servicesByCategory);

  return (
    <section className="w-full bg-white text-gray-900 py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-3 md:px-4">
        
        {/* --- HERO SECTION: FIXED SIDE-BY-SIDE LAYOUT --- */}
        <motion.div 
          className="flex flex-row items-center justify-between gap-3 md:gap-12 mb-12 md:mb-32" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Side: 55% Width on mobile */}
          <div className="w-[55%] md:w-1/2 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-2 md:mb-6 leading-tight text-gray-900">
              Your Vision,
              {/* Rose Text Accent */}
              <span className="block text-rose-600">in Their Hands.</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-xl text-gray-600 max-w-xl">
              High-performance iOS and Android applications that bring your ideas to life.
            </p>
          </div>

          {/* Image Side: 45% Width on mobile */}
          <div className="w-[45%] md:w-1/2 flex justify-center items-center">
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-2xl drop-shadow-xl">
              <defs>
                <filter id="svgShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
                  <feOffset dx="0" dy="8"/>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* --- Phone 1 (iOS style) --- */}
              <motion.g 
                initial={{ x: -20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                filter="url(#svgShadow)"
              >
                <rect x="40" y="20" width="100" height="170" rx="15" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2" />
                <rect x="50" y="30" width="80" height="10" rx="5" fill="#e5e7eb" /> 
                <circle cx="90" cy="70" r="15" fill="#fda4af" /> {/* Soft Rose */}
                <rect x="60" y="95" width="60" height="6" rx="3" fill="#fecdd3" />
                <rect x="60" y="110" width="40" height="6" rx="3" fill="#e5e7eb" />
                <rect x="60" y="130" width="60" height="10" rx="5" fill="#fda4af" />
                <rect x="60" y="150" width="60" height="10" rx="5" fill="#e5e7eb" />
              </motion.g>

              {/* --- Phone 2 (Android style) --- */}
              <motion.g 
                initial={{ x: 20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                filter="url(#svgShadow)"
              >
                <rect x="160" y="10" width="100" height="170" rx="15" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2" />
                <circle cx="210" cy="22" r="3" fill="#d1d5db" /> 
                
                {/* Screen content: VIDEO feed (Rose themed) */}
                <rect x="170" y="40" width="80" height="50" rx="5" fill="#e11d48" /> {/* Rose-600 */}
                <path d="M 200 55 L 215 65 L 200 75 z" fill="white" /> 
                <rect x="170" y="100" width="80" height="6" rx="3" fill="#fecdd3" />
                <rect x="170" y="115" width="50" height="6" rx="3" fill="#e5e7eb" />
                <rect x="170" y="135" width="80" height="30" rx="5" fill="#e5e7eb" />
              </motion.g>
              
              {/* --- Floating Icons --- */}
              <motion.g
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                <path d="M 145 60 L 160 70 L 145 80 z" fill="#e11d48" opacity="0.8" />
              </motion.g>

              <motion.g
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                <path d="M 140 120 l 5 5 l -5 5" stroke="#e11d48" strokeWidth="2" fill="none" opacity="0.8" />
                <path d="M 160 120 l -5 5 l 5 5" stroke="#e11d48" strokeWidth="2" fill="none" opacity="0.8" />
              </motion.g>
            </svg>
          </div>
        </motion.div>

        {/* --- Services Section --- */}
        <div className="space-y-12 md:space-y-16">
          {categories.map((category) => (
            <ServiceCategorySection
              key={category}
              category={category}
              services={servicesByCategory[category]}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MobileAndAppDevelopment;