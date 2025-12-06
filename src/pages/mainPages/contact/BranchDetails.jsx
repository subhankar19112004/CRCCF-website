// src/pages/mainPages/contact/BranchDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { branchData } from '../../../data/contactUs/branchData';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- MINIMALIST CARD COMPONENT ---
const BranchDirectoryCard = ({ branch, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer h-full"
        >
            <Link to={`/contact-us/branch/${branch.id}`} className="block h-full">
                <div className="bg-white h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-xl flex flex-col">
                    
                    {/* Image Container - Responsive Height (shorter on mobile, taller on desktop) */}
                    <div className="h-32 sm:h-48 md:h-56 overflow-hidden relative shrink-0">
                        <motion.img 
                            src={branch.coverImage} 
                            alt={branch.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                    </div>

                    {/* Content Body - Compact padding on mobile */}
                    <div className="p-3 sm:p-5 md:p-6 relative flex flex-col flex-grow">
                        {/* State Tag */}
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-cyan-600 uppercase mb-1 sm:mb-2 block truncate">
                            {branch.state}
                        </span>
                        
                        {/* Branch Name - Responsive Text Size */}
                        <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight group-hover:text-cyan-700 transition-colors line-clamp-2">
                            {branch.name}
                        </h3>
                        
                        {/* Location - Responsive Text Size */}
                        <p className="text-gray-500 text-[10px] sm:text-sm font-medium flex items-start sm:items-center mt-auto">
                            <FiMapPin className="mr-1 sm:mr-2 mt-0.5 sm:mt-0 flex-shrink-0" /> 
                            <span className="truncate">{branch.district}</span>
                        </p>

                        {/* Hover Arrow Indicator - Hidden on mobile, visible on desktop hover */}
                        <div className="hidden sm:block absolute bottom-6 right-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-600">
                            <FiChevronRight size={24} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const BranchDetails = () => {
    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
    };

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            
            <CleanBackground />
            
            {/* Added overflow-x-hidden to prevent horizontal scrolling on small phones */}
            <div className="relative min-h-screen bg-transparent text-gray-900 pt-16 pb-24 px-3 sm:px-6 lg:px-8 font-sans overflow-x-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    {/* --- FLUID HEADER --- */}
                    <motion.header
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center mb-8 sm:mb-16 pb-4 sm:pb-6 relative" 
                    >
                        {/* Responsive Title Sizes */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
                            Our <span className="text-cyan-600">Locations</span>
                        </h1>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-xl font-light text-gray-600 max-w-3xl mx-auto px-4">
                            Visit our headquarters or find a regional office near you.
                        </p>
                        
                        {/* Animated Underline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-16 sm:w-24 overflow-hidden">
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                                className="h-full bg-cyan-500 origin-center shadow-lg shadow-cyan-500/50"
                            />
                        </div>
                    </motion.header>

                    {/* --- BRANCH GRID (The Logic You Requested) --- */}
                    {/* grid-cols-2 for mobile, grid-cols-3 for tablet/desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                        {branchData.map((branch, index) => (
                            <BranchDirectoryCard key={branch.id} branch={branch} index={index} />
                        ))}
                    </div>
                    
                    {/* --- BACK NAVIGATION --- */}
                    <div className="mt-12 sm:mt-20 text-center">
                        <Link 
                            to="/contact-us" 
                            className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gray-900 text-white text-sm sm:text-lg font-semibold tracking-wide shadow-lg hover:bg-cyan-600 transition-all duration-300 transform active:scale-95"
                        >
                            <FiChevronLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Back to Contact Hub
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default BranchDetails;