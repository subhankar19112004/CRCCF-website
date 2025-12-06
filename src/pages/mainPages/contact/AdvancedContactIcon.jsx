// src/pages/mainPages/contact/AdvancedContactIcon.jsx (REDESIGNED)
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdvancedContactIcon = ({ data, index }) => {
  const IconComponent = data.icon;
  const delay = 0.1 + index * 0.05; // Staggered entry

  // Framer Motion variants for the glass card
  const cardVariants = {
    // Initial state (hidden and scaled down for scroll reveal)
    initial: { opacity: 0, y: 30, scale: 0.95 },
    
    // State when scrolled into view (Scroll Reveal)
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.7, 
        delay: delay, 
        ease: [0.17, 0.67, 0.83, 0.67] // Smoother easing
      } 
    },
    
    // Hover State: Lift, subtle 3D tilt, and stronger blur
    hover: {
      y: -5, // Slight lift
      scale: 1.02,
      rotateX: 2, // Subtle 3D tilt up
      rotateY: -2,
      // Stronger blur and shadow on hover for a sharper glass effect
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)',
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    },
    
    // Click State: Instant feedback
    tap: {
      scale: 0.98,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    }
  };

  // Icon Hover State: Subtle scale and color change
  const iconVariants = {
    rest: { scale: 1, color: data.primaryColor.replace('text-', '#').replace('-600', '600') },
    hover: { scale: 1.1, color: data.primaryColor.replace('text-', '#').replace('-600', '800') },
  };

  return (
    <motion.div
      className="relative z-10"
      initial="initial"
      whileInView="whileInView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      style={{ perspective: '1000px' }}
    >
      <Link 
        to={data.path}
        className="block h-full w-full"
      >
        <div 
          className="flex flex-col items-center justify-center p-6 sm:p-8 h-44 
                     bg-white/40 border border-gray-600 backdrop-blur-md rounded-2xl 
                     transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
          style={{ 
            // Initial subtle glass shadow
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
          }}
        >
          <motion.div variants={iconVariants} initial="rest">
            <IconComponent className="w-12 h-12 mb-3" />
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
            {data.label}
          </h3>
          <p className="text-sm text-gray-700 text-center px-2">
            {data.briefDescription}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default AdvancedContactIcon;