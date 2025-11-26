import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// --- Futuristic Scroll Indicator (No changes) ---
function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 z-50 w-2"
      style={{ scaleY, originY: 0, background: '#00BFFF' }}
    />
  );
}

// --- Animation Variants (No changes) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      duration: 0.6,
    },
  },
};

const headingFadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      duration: 0.6,
    },
  },
};

/*
 * Your main component with all upgrades.
 */
function PageTemplate({ data }) {
  
  // --- "Smart Content" Logic (No changes) ---
  const formattedContent = data.content.split('\n').map((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      return null;
    }

    // --- 1. HYPHEN LINE FEATURE ---
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      return (
        <motion.div
          key={index}
          // RESPONSIVE TEXT: Added sm/lg prefixes
          className="flex items-start text-base sm:text-lg lg:text-xl text-gray-700 mb-4 ml-2 sm:ml-4 lg:ml-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-blue-500 font-bold mr-3 mt-1.5">—</span>
          <span>{trimmedLine.substring(2)}</span>
        </motion.div>
      );
    }

    // --- 2. BOLDER HEADING LOGIC (Improved) ---
    const isHeading =
      trimmedLine.length < 80 &&
      !trimmedLine.endsWith('.') &&
      !trimmedLine.includes('---');

    if (isHeading) {
      return (
        <motion.h3
          key={index}
          // PROFESSIONAL BOLD: font-semibold (600 weight)
          // RESPONSIVE TEXT: Added sm/md/lg prefixes
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-5 mt-10 lg:mt-12"
          variants={headingFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {trimmedLine}
        </motion.h3>
      );
    }

    // --- 3. Regular Paragraph Logic ---
    return (
      <motion.p
        key={index}
        // RESPONSIVE TEXT: Added sm/lg prefixes
        className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {trimmedLine}
      </motion.p>
    );
  });

  return (
    <>
      <title>{data.heading} - CR Cyber Crime Foundation</title>
      
      <ScrollProgressIndicator />
      
      {/* RESPONSIVE PADDING: Added sm/lg prefixes */}
      <div className="page-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12 md:py-20 lg:py-24">
        
        <motion.h1
          // PROFESSIONAL BOLD: font-extrabold (800 weight) & text-gray-950 (darker)
          // RESPONSIVE TEXT: Added sm/md/lg prefixes for smoother scaling
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 mb-6"
          variants={headingFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {data.heading}
        </motion.h1>

        {data.tagline && (
          <motion.h3
            // RESPONSIVE TEXT: Added sm/md/lg prefixes
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-blue-600 mb-10 md:mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {data.tagline}
          </motion.h3>
        )}

        <div className="content-body">
          {formattedContent}
        </div>

      </div>
    </>
  );
}

export default PageTemplate;