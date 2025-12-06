// src/pages/mainPages/contact/ContactUs.jsx
import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// Data import - IMPORTING FROM contactIconsData.js AS REQUESTED
import { contactIconsData } from "../../data/contactUs/contactIconsData.js";

// -------------------------------------------------------------------
// 1. DYNAMIC TILT CARD COMPONENT
// -------------------------------------------------------------------

const DynamicTiltCard = ({ service, index }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const tiltRange = 20; 
        const tiltX = (y / rect.height) * tiltRange; 
        const tiltY = (x / rect.width) * tiltRange;

        rotateX.set(-tiltX); 
        rotateY.set(tiltY);  
    };

    const resetTilt = () => {
        rotateX.set(0);
        rotateY.set(0);
    };
    
    const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
    const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
    const scale = useTransform(rotateX, [-20, 20], [1.02, 1.02]); 

    // --- VARIANTS ---
    const titleVariants = {
        rest: {
            y: 0, opacity: 1, filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))',
            backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)',
        },
        hover: {
            y: -8, opacity: 1, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
            backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(8px)', 
            transition: { type: 'tween', duration: 0.28, ease: 'easeOut' },
        },
    };
    const imageVariants = {
        rest: { filter: 'brightness(1) saturate(1)', scale: 1, },
        hover: { filter: 'brightness(1.1) saturate(1.1)', scale: 1.15, transition: { type: 'tween', duration: 0.28, ease: 'easeOut' }, },
    };
    const outerBorderVariants = { rest: { opacity: 0.45 }, hover: { opacity: 0.85, transition: { duration: 0.25 } } };
    const innerBorderVariants = { rest: { opacity: 0.25 }, hover: { opacity: 0.6, transition: { duration: 0.25 } } };
    const sheenVariants = { rest: { x: '-120%', opacity: 0 }, hover: { x: '130%', opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } };

    return (
        <motion.div
            key={`${service.title}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setIsHovered(false); resetTilt(); }}
                
                style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }} 
                
                className="relative rounded-lg overflow-hidden shadow-xl h-full"
                initial="rest"
                animate={isHovered ? "hover" : "rest"}
            >
                <Link
                    to={service.path}
                    role="link"
                    aria-label={service.title}
                    className="block h-full w-full relative"
                >
                    {/* Image Container */}
                    <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                        <motion.img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            variants={imageVariants}
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        <motion.div className="absolute inset-0 rounded-lg border-2 border-white/40 pointer-events-none" variants={outerBorderVariants} animate={isHovered ? "hover" : "rest"} />
                        <motion.div className="absolute inset-1 rounded-lg border border-white/30 pointer-events-none" variants={innerBorderVariants} animate={isHovered ? "hover" : "rest"} />
                        <motion.div
                            className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                            variants={sheenVariants}
                            animate={isHovered ? "hover" : "rest"}
                        />
                        
                        {/* Text Content Area */}
                        <motion.div 
                            className="absolute bottom-0 left-0 right-0 p-4 text-center rounded-b-lg flex flex-col items-center justify-end h-full pb-6"
                            variants={titleVariants}
                            animate={isHovered ? "hover" : "rest"}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 shadow-black drop-shadow-md">
                                {service.title}
                            </h3>
                            {/* Description - Fades in on hover/always visible but subtle */}
                            <p className="text-xs md:text-sm text-gray-200 opacity-90 max-w-[90%] font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
};


// -------------------------------------------------------------------
// 2. MAIN COMPONENT
// -------------------------------------------------------------------

const ContactUs = () => {
    return (
        <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
            
            {/* Header / Introductory Text */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                    Contact & <span className="text-blue-600">Support Hub</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Connect with the right department. Select an option below to get started.
                </p>
            </motion.div>

            {/* Grid using the DynamicTiltCard component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {contactIconsData.map((service, i) => (
                    <DynamicTiltCard key={service.title} service={service} index={i} />
                ))}
            </div>

            {/* Back to Home Link */}
            <div className="mt-16 text-center">
                <Link
                    to="/"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-gray-900 text-white text-lg 
                               font-bold tracking-wide shadow-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
                >
                    <FiArrowLeft className="mr-3 h-5 w-5" /> Back to Console
                </Link>
            </div>
        </section>
    );
};

export default ContactUs;