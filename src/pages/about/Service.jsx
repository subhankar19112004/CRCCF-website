// src/pages/about/Service.jsx
import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// Data import (Using your original data file for services)
// NOTE: Make sure the import path is correct for your project structure
import { ourServicesData } from "../../data/OurServices/ourServicesData.js";


// -------------------------------------------------------------------
// 1. DYNAMIC TILT CARD COMPONENT (Most Futuristic Logic)
// -------------------------------------------------------------------

const DynamicTiltCard = ({ service, index }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Get the bounds and mouse position relative to the card
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        
        // Calculate the center position of the card (0, 0)
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Map the coordinates to the tilt values (-1 to 1 range)
        const tiltRange = 20; // Increased tilt factor for a dramatic, futuristic feel
        const tiltX = (y / rect.height) * tiltRange; 
        const tiltY = (x / rect.width) * tiltRange;

        // Animate the values using Framer Motion's springs for smooth movement
        rotateX.set(-tiltX); // Tilts away from the cursor vertically
        rotateY.set(tiltY);  // Tilts away from the cursor horizontally
    };

    const resetTilt = () => {
        rotateX.set(0);
        rotateY.set(0);
    };
    
    // Initialize Framer Motion spring values for smooth animation
    const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
    const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
    const scale = useTransform(rotateX, [-20, 20], [1.02, 1.02]); // Subtle scale on tilt

    // --- VARIANTS from your ReportACyberCrimeLanding example ---

    // Title: Glassmorphism effect
    const titleVariants = {
        rest: {
            y: 0,
            opacity: 1,
            filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
        },
        hover: {
            y: -8, // Lifts the text up
            opacity: 1,
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
            backgroundColor: 'rgba(0, 0, 0, 0.35)', // Semi-transparent background
            backdropFilter: 'blur(5px)', // The "frosted glass" effect
            transition: { type: 'tween', duration: 0.28, ease: 'easeOut' },
        },
    };

    // Image: Counter-parallax zoom
    const imageVariants = {
        rest: {
            filter: 'brightness(1) saturate(1)',
            scale: 1,
        },
        hover: {
            filter: 'brightness(1.25) saturate(1.05)',
            scale: 1.15, // Image zooms *inside* the card container
            transition: { type: 'tween', duration: 0.28, ease: 'easeOut' },
        },
    };

    // Border and Sheen (Unchanged from your example)
    const outerBorderVariants = { rest: { opacity: 0.45 }, hover: { opacity: 0.85, transition: { duration: 0.25 } } };
    const innerBorderVariants = { rest: { opacity: 0.25 }, hover: { opacity: 0.6, transition: { duration: 0.25 } } };
    const sheenVariants = { rest: { x: '-120%', opacity: 0 }, hover: { x: '130%', opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } };

    return (
        <motion.div
            key={`${service.title}-${index}`}
            // Scroll-in animation
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
            // Container for 3D perspective
            style={{ perspective: '1000px' }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setIsHovered(false); resetTilt(); }}
                
                // Dynamic 3D transform properties
                style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }} 
                
                className="relative rounded-lg overflow-hidden shadow-xl"
                initial="rest"
                animate={isHovered ? "hover" : "rest"} // Control variants based on local state
            >
                <Link
                    to={service.path}
                    role="link"
                    aria-label={service.title}
                    className="block h-full w-full relative"
                >
                    {/* Image Container */}
                    <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
                        <motion.img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            variants={imageVariants}
                        />

                        {/* Readability Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />

                        {/* Double Border */}
                        <motion.div className="absolute inset-0 rounded-lg border-2 border-white/40 pointer-events-none" variants={outerBorderVariants} animate={isHovered ? "hover" : "rest"} />
                        <motion.div className="absolute inset-1 rounded-lg border border-white/30 pointer-events-none" variants={innerBorderVariants} animate={isHovered ? "hover" : "rest"} />

                        {/* Sheen Sweep */}
                        <motion.div
                            className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                            variants={sheenVariants}
                            animate={isHovered ? "hover" : "rest"}
                        />

                        {/* Title - The Glassmorphism element */}
                        <motion.h3
                            className="absolute bottom-0 left-0 right-0 px-2 py-2 text-sm sm:text-base md:text-lg font-semibold text-white text-center rounded-b-lg"
                            variants={titleVariants}
                            animate={isHovered ? "hover" : "rest"}
                        >
                            {service.title}
                        </motion.h3>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
};


// -------------------------------------------------------------------
// 2. MAIN SERVICE COMPONENT
// -------------------------------------------------------------------

const Service = () => {
    return (
        <section className="w-full mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
            
            {/* Header / Introductory Text (Adapted from your original component) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10 sm:mb-16"
            >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
                    Our Comprehensive Services
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We leverage **Innovation and Technology** to provide comprehensive support, from IT solutions and digital marketing to specialized victim and legal aid.
                </p>
            </motion.div>

            {/* Grid using the DynamicTiltCard component */}
            {/* 2 cols on small, 4 on large, as per your initial blueprint */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {/* 3. Map over the correct data: ourServicesData */}
                {ourServicesData.map((service, i) => (
                    <DynamicTiltCard key={service.title} service={service} index={i} />
                ))}
            </div>

            {/* Back to Home Link (Adapted from your original component) */}
            <div className="mt-12 text-center">
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white text-lg 
                               font-semibold tracking-wide shadow-lg hover:bg-indigo-500 transition-all duration-300"
                >
                    <FiArrowLeft className="mr-2 h-5 w-5" /> Back to Home Console
                </Link>
            </div>
        </section>
    );
};

export default Service;