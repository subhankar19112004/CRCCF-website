import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// Removing the .jsx extension to resolve the build error
import { websiteServicesData } from '../../../data/OurServices/software_it_services/websiteServicesData';

const DEFAULT_CARDS_VISIBLE = 8;

// --- 1. Service Card (Square + Violet) ---
const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-((y / rect.height) * 25));
    rotateY.set((x / rect.width) * 25);
  };

  const rotateX = useSpring(0, { stiffness: 300, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 20 });
  const scale = useTransform(rotateX, [-25, 25], [1.02, 1.02]);

  const cardVariants = {
    rest: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      y: 0,
      borderColor: 'rgba(229, 231, 235, 1)'
    },
    hover: {
      boxShadow: '0 20px 40px -10px rgba(124, 58, 237, 0.25)',
      y: -8,
      borderColor: 'rgba(124, 58, 237, 1)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div style={{ perspective: '1200px' }}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: (index % 8) * 0.05 } }
      }}
      className="h-full"
    >
      <Link to={service.path} className="block h-full group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); rotateX.set(0); rotateY.set(0); }}
          style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
          className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200"
          variants={cardVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        >
          <motion.div
            className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none bg-gradient-to-r from-white/0 via-white/40 to-white/0 z-20"
            variants={{ rest: { x: '-120%', opacity: 0 }, hover: { x: '130%', opacity: 1, transition: { duration: 0.8 } } }}
          />

          <div className="relative bg-gray-50 flex items-center justify-center border-b border-gray-100 h-[100px] md:h-[150px] p-4">
            <motion.div
              variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.1, y: -5, transition: { type: "spring" } } }}
              className="w-10 h-10 md:w-16 md:h-16 text-violet-600"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="w-full h-full [&_svg]:w-full [&_svg]:h-full drop-shadow-sm flex items-center justify-center">
                {service.svg}
              </div>            </motion.div>
          </div>

          <div className="flex-1 flex flex-col p-3 md:p-6 bg-white">
            <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-center md:text-left text-xs md:text-lg leading-tight" style={{ transform: 'translateZ(20px)' }}>
              {service.heading}
            </h3>
            <p className="text-gray-500 leading-snug text-center md:text-left text-[10px] md:text-sm line-clamp-3 md:line-clamp-none" style={{ transform: 'translateZ(10px)' }}>
              {service.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

// --- 2. Category Section ---
const ServiceCategorySection = ({ category, services }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleServices = isExpanded ? services : services.slice(0, DEFAULT_CARDS_VISIBLE);

  return (
    <motion.section className="mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 pb-2 border-b-2 border-violet-100 flex items-center gap-2">
        <span className="w-2 h-8 bg-violet-600 rounded-full hidden md:block"></span>
        {category} Services
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        <AnimatePresence>
          {visibleServices.map((service, i) => (
            <ServiceCard key={service.path || i} service={service} index={i} />
          ))}
        </AnimatePresence>
      </div>
      {services.length > DEFAULT_CARDS_VISIBLE && (
        <div className="text-center mt-8 md:mt-10">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 md:px-8 md:py-3 bg-white text-violet-600 font-semibold rounded-full border-2 border-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Show Less' : 'View All Solutions'}
          </motion.button>
        </div>
      )}
    </motion.section>
  );
};

// --- 3. Main Page (Hero + Complex Animation) ---
const WebsiteServices = () => {
  // Ensure data exists before reducing to prevent crashes if import fails silently
  const data = websiteServicesData || [];
  const servicesByCategory = data.reduce((acc, service) => {
    const category = service.category || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(service);
    return acc;
  }, {});
  const categories = Object.keys(servicesByCategory);

  return (
    <section className="w-full bg-white text-gray-900 py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-3 md:px-4">
        {/* Hero */}
        <motion.div className="flex flex-row items-center justify-between gap-3 md:gap-12 mb-12 md:mb-32" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="w-[55%] md:w-1/2 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-2 md:mb-6 leading-tight text-gray-900">
              Crafting Digital <span className="block text-violet-600">Futures.</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-xl text-gray-600 max-w-xl">
              We engineer bespoke web solutions that drive growth.
            </p>
          </div>

          {/* Complex Animation SVG */}
          <div className="w-[45%] md:w-1/2 flex justify-center items-center">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl drop-shadow-2xl">
              <defs>
                <filter id="svgShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                  <feOffset dx="0" dy="10" />
                  <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <clipPath id="codeWindowClip"><rect x="10" y="40" width="120" height="150" rx="6" /></clipPath>
                <clipPath id="browserWindowClip"><rect x="140" y="20" width="170" height="130" rx="6" /></clipPath>
              </defs>

              {/* Window 1: Code Editor */}
              <motion.g initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <rect x="10" y="40" width="120" height="150" rx="6" fill="#1e293b" filter="url(#svgShadow)" />
                <rect x="10" y="40" width="120" height="20" rx="6" fill="#334155" />
                <rect x="10" y="55" width="120" height="5" fill="#334155" />
                <circle cx="20" cy="50" r="3" fill="#ef4444" /><circle cx="28" cy="50" r="3" fill="#f59e0b" /><circle cx="36" cy="50" r="3" fill="#22c55e" />
                <g clipPath="url(#codeWindowClip)">
                  <motion.rect x="20" y="70" width="0" height="4" rx="2" fill="#c084fc" animate={{ width: 40 }} transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="65" y="70" width="0" height="4" rx="2" fill="#94a3b8" animate={{ width: 30 }} transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="30" y="80" width="0" height="4" rx="2" fill="#60a5fa" animate={{ width: 25 }} transition={{ duration: 0.5, delay: 1.0, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="60" y="80" width="0" height="4" rx="2" fill="#e2e8f0" animate={{ width: 40 }} transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="30" y="90" width="0" height="4" rx="2" fill="#fbbf24" animate={{ width: 60 }} transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="30" y="105" width="0" height="4" rx="2" fill="#34d399" animate={{ width: 35 }} transition={{ duration: 0.5, delay: 1.8, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="20" y="120" width="2" height="10" fill="#ffffff" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                </g>
              </motion.g>

              {/* Window 2: Browser */}
              <motion.g initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <rect x="140" y="20" width="170" height="130" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" filter="url(#svgShadow)" />
                <rect x="140" y="20" width="170" height="20" rx="6" fill="#f1f5f9" />
                <rect x="140" y="35" width="170" height="5" fill="#f1f5f9" />
                <circle cx="150" cy="30" r="3" fill="#cbd5e1" />
                <rect x="160" y="26" width="100" height="8" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                <g clipPath="url(#browserWindowClip)">
                  <motion.rect x="140" y="40" width="170" height="15" fill="#f8fafc" borderBottom="1px solid #e2e8f0" initial={{ y: -20 }} animate={{ y: 40 }} transition={{ delay: 2.0, duration: 0.5, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="150" y="65" width="150" height="40" rx="4" fill="#ede9fe" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2.5, duration: 0.5, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="160" y="75" width="0" height="4" rx="2" fill="#7c3aed" animate={{ width: 80 }} transition={{ delay: 2.8, duration: 0.5, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="150" y="115" width="45" height="25" rx="3" fill="#f1f5f9" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3.2, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="202" y="115" width="45" height="25" rx="3" fill="#f1f5f9" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3.3, repeat: Infinity, repeatDelay: 5 }} />
                  <motion.rect x="254" y="115" width="45" height="25" rx="3" fill="#f1f5f9" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3.4, repeat: Infinity, repeatDelay: 5 }} />
                </g>
                <motion.path d="M 0 0 L 0 11 L 3 8 L 6 14 L 8 13 L 5 7 L 9 7 Z" fill="#0f172a" stroke="white" strokeWidth="1" initial={{ x: 80, y: 120, opacity: 0 }} animate={{ x: [80, 290, 290], y: [120, 48, 48], opacity: [1, 1, 0] }} transition={{ duration: 3, times: [0, 0.8, 1], delay: 2.5, repeat: Infinity, repeatDelay: 5 }} />
                <motion.circle cx="290" cy="48" r="5" stroke="#7c3aed" strokeWidth="2" fill="none" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ delay: 3.3, duration: 0.6, repeat: Infinity, repeatDelay: 7.7 }} />
              </motion.g>
            </svg>
          </div>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {categories.map((category) => (
            <ServiceCategorySection key={category} category={category} services={servicesByCategory[category]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteServices;