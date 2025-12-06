// src/pages/mainPages/contact/OfficerProfileDetails.jsx (FINAL DESIGN V10 - ULTRA MINIMALIST)
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiMail, FiPhone, FiChevronLeft, FiUser, FiBriefcase, FiAward } from 'react-icons/fi';
import { contactPersonsData } from '../../../data/contactUs/contactPersonsData';

// --- CLEAN BACKGROUND (for consistency) ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- FINAL PROFESSIONAL FLUID HEADER COMPONENT ---
// NOTE: Reusing the same component definition here for self-containment
const FluidPageHeader = ({ title, subtitle }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            
            className="text-center mb-10 pb-6 relative overflow-hidden" 
        >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                {title.split(' ').map((word, index) => (
                    <span key={index} className={word.includes('<') ? "text-cyan-600" : ""}>
                        {word.replace(/[<>]/g, '')}{' '}
                    </span>
                ))}
            </h1>
            <p className="mt-2 text-xl font-light text-gray-600 max-w-4xl mx-auto">
                {subtitle}
            </p>
            
            {/* --- Subtle Animated Underline --- */}
             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-20 overflow-hidden">
                 <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                    className="h-full bg-cyan-500 origin-center shadow-lg shadow-cyan-500/50"
                 />
             </div>
        </motion.header>
    );
};
// ---------------------------------------------------


const OfficerProfileDetails = () => {
    const { slug } = useParams();
    const officer = contactPersonsData.find(p => p.slug === slug);

    if (!officer) {
        return (
             <div className="relative min-h-screen bg-white text-gray-900 pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
                <CleanBackground />
                <div className="max-w-4xl mx-auto relative z-10 text-center py-20 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
                    <h1 className="text-4xl font-extrabold text-red-600 mb-4">Profile Not Found</h1>
                    <p className="text-xl text-gray-700 mb-8">The requested officer profile could not be located.</p>
                    <Link to="/contact-us/contact-person" className="text-lg text-cyan-600 hover:underline flex items-center justify-center font-medium">
                        <FiChevronLeft className="mr-2" /> Back to Officer Directory
                    </Link>
                </div>
            </div>
        );
    }

    // Framer Motion page variants
    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
    };

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            
            <CleanBackground />
            
            {/* Main Page Container */}
            <div className="relative min-h-screen bg-transparent text-gray-900 pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
                <div className="max-w-4xl mx-auto relative z-10">
                    
                    {/* CUSTOM HEADER - Profile Title */}
                    <FluidPageHeader 
                        title={`${officer.fullName}'s <Profile>`}
                        subtitle={officer.designation}
                    />

                    
                    {/* Main Profile Card - FLUID SPLIT LAYOUT */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="bg-white rounded-xl shadow-2xl p-8 mb-10 flex flex-col md:flex-row items-start gap-8 border border-gray-100"
                        style={{ boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                    >
                        {/* Left Side: Photo and Contact Info (Clean, elevated) */}
                        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start p-4 rounded-lg bg-gray-50 shadow-inner">
                            <img 
                                src={officer.photoUrl} 
                                alt={officer.fullName} 
                                className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-cyan-600 shadow-md"
                            />
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">{officer.department}</h3>
                            
                            {/* Contact Details Panel */}
                            <div className="w-full space-y-3 mt-4 text-left border-t pt-3 border-gray-200">
                                
                                <a href={`tel:${officer.mobileNumber.replace(/\s/g, '')}`} className="flex items-center text-md text-gray-700 hover:text-red-600 transition-colors">
                                    <FiPhone className="w-4 h-4 mr-3 text-red-600" />
                                    <span>{officer.mobileNumber}</span>
                                </a>
                                
                                <a href={`mailto:${officer.mailId}`} className="flex items-center text-md text-gray-700 hover:text-red-600 transition-colors">
                                    <FiMail className="w-4 h-4 mr-3 text-red-600" />
                                    <span>{officer.mailId}</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Professional Profile (Clean Content) */}
                        <div className="w-full md:w-2/3">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center border-b pb-2">
                                <FiAward className="w-8 h-8 mr-3 text-cyan-600"/> Professional Expertise
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {officer.profile}
                            </p>
                        </div>
                    </motion.div>
                    
                    {/* Back Link */}
                    <div className="mt-10 text-center">
                        <Link to="/contact-us/contact-person" className="inline-flex items-center text-lg text-cyan-600 hover:text-cyan-800 transition-colors font-medium">
                            <FiChevronLeft className="mr-2" /> Back to Officer Directory
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default OfficerProfileDetails;