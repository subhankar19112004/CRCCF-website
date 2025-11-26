

import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// Exact import path
import { dextopAndLaptopApplicationData } from '../../../data/OurServices/software_it_services/dextopAndLaptopApplicationData';

// --- Configuration ---
const DEFAULT_CARDS_VISIBLE = 8; 

// ---------------------------------
// --- 1. Futuristic Service Card (Square Mobile Layout) ---
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
  
  const cardVariants = {
    rest: { 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      y: 0,
      borderColor: 'rgba(229, 231, 235, 1)', 
    },
    hover: { 
      boxShadow: '0 20px 40px -10px rgba(79, 70, 229, 0.25), 0 0 15px rgba(79, 70, 229, 0.1)',
      y: -8,
      borderColor: 'rgba(99, 102, 241, 1)', 
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
              className="w-10 h-10 md:w-16 md:h-16 text-indigo-600"
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
    if (category.includes('Education')) return "Education & LMS";
    if (category.includes('Healthcare')) return "Healthcare ERPs";
    if (category.includes('Finance')) return "FinTech Solutions";
    if (category.includes('Business')) return "Enterprise Software";
    if (category.includes('Commerce')) return "Retail & POS";
    if (category.includes('Legal')) return "Legal Tech";
    return `${category} Services`;
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
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 pb-2 border-b-2 border-indigo-100 flex items-center gap-2">
        <span className="w-2 h-8 bg-indigo-600 rounded-full hidden md:block"></span>
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
            className="px-6 py-2 md:px-8 md:py-3 bg-white text-indigo-600 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm"
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
const DextopAndLaptopApplication = () => {
  const servicesByCategory = dextopAndLaptopApplicationData.reduce((acc, service) => {
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
          // 'flex-row' ensures they stay side-by-side even on small screens
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Side: 55% Width on mobile */}
          <div className="w-[55%] md:w-1/2 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-2 md:mb-6 leading-tight text-gray-900">
              Desktop
              <span className="block text-indigo-600">Powerhouse.</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-xl text-gray-600 max-w-xl">
              High-performance, offline-capable desktop apps for Windows, macOS, and Linux.
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
                <clipPath id="desktopScreen">
                  <rect x="30" y="25" width="160" height="100" rx="5" />
                </clipPath>
                <clipPath id="laptopScreen">
                  <rect x="155" y="80" width="110" height="70" rx="3" />
                </clipPath>
              </defs>

              <motion.g 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <rect x="25" y="20" width="170" height="110" rx="8" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2" filter="url(#svgShadow)"/>
                <rect x="60" y="130" width="100" height="5" rx="2.5" fill="#e5e7eb" />
                <rect x="50" y="135" width="120" height="10" rx="5" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
              </motion.g>

              <motion.g 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <rect x="150" y="75" width="120" height="80" rx="5" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2" filter="url(#svgShadow)"/>
                <path d="M 140 155 L 280 155 L 290 165 L 130 165 z" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
              </motion.g>

              <g clipPath="url(#desktopScreen)">
                <rect x="30" y="25" width="160" height="100" fill="#ffffff" />
                <motion.path 
                  d="M 40 110 q 20 -40 40 -20 t 40 30 40 -10" 
                  stroke="#4f46e5" strokeWidth="3" fill="none"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.rect x="45" y="70" width="15" height="40" rx="3" fill="#a5b4fc" initial={{ height: 0, y: 110 }} animate={{ height: 40, y: 70 }} transition={{ duration: 1, delay: 1 }} />
                <motion.rect x="70" y="50" width="15" height="60" rx="3" fill="#a5b4fc" initial={{ height: 0, y: 110 }} animate={{ height: 60, y: 50 }} transition={{ duration: 1, delay: 1.2 }} />
                <motion.rect x="95" y="80" width="15" height="30" rx="3" fill="#a5b4fc" initial={{ height: 0, y: 110 }} animate={{ height: 30, y: 80 }} transition={{ duration: 1, delay: 1.4 }} />
              </g>

              <g clipPath="url(#laptopScreen)">
                <rect x="155" y="80" width="110" height="70" fill="#1e293b" />
                <motion.path d="M 165 95 h 70" stroke="#60a5fa" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} />
                <motion.path d="M 165 105 h 50" stroke="#a78bfa" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.8 }} />
              </g>
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

export default DextopAndLaptopApplication;