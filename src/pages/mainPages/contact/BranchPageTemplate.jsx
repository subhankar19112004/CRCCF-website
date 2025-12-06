// src/pages/mainPages/contact/BranchPageTemplate.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiChevronLeft, FiNavigation, FiClock } from 'react-icons/fi';
import { branchData } from '../../../data/contactUs/branchData';
import BranchLoader from '../../../components/common/BranchLoader';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

const BranchPageTemplate = () => {
    const { branchId } = useParams();
    const [loading, setLoading] = useState(true);
    const [branch, setBranch] = useState(null);

    // Simulate Data Fetching & Find Branch
    useEffect(() => {
        setLoading(true);
        // Simulate a 1.2 second network delay
        setTimeout(() => {
            const foundBranch = branchData.find(b => b.id === branchId);
            setBranch(foundBranch);
            setLoading(false);
        }, 1200);
    }, [branchId]);

    // Error State (If ID doesn't exist)
    if (!loading && !branch) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Branch Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">We couldn't locate the branch details you requested. It might have been moved or deleted.</p>
                <Link to="/contact-us/branch-details" className="text-cyan-600 font-bold hover:underline text-lg">
                    Return to Directory
                </Link>
            </div>
        );
    }

    return (
        <>
            <CleanBackground />

            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BranchLoader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        // Added overflow-x-hidden to prevent horizontal scroll on small screens
                        className="relative min-h-screen bg-transparent text-gray-900 pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 font-sans overflow-x-hidden"
                    >
                        <div className="max-w-7xl mx-auto relative z-10">

                            {/* --- HEADER SECTION --- */}
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-8 sm:mb-12 text-center md:text-left border-b border-gray-100 pb-6 sm:pb-8"
                            >
                                <Link to="/contact-us/branch-details" className="inline-flex items-center text-gray-400 hover:text-cyan-600 transition-colors mb-4 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                                    <FiChevronLeft className="mr-1" /> Back to All Locations
                                </Link>
                                {/* Responsive Title Size */}
                                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                                    {branch.name}
                                </h1>
                                <p className="text-base sm:text-xl text-cyan-600 mt-2 font-medium flex items-center justify-center md:justify-start">
                                    <FiMapPin className="mr-2 flex-shrink-0" /> 
                                    <span>{branch.district}, {branch.state}</span>
                                </p>
                            </motion.div>

                            {/* --- MAIN CONTENT GRID --- */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                                {/* LEFT COLUMN (Images & Profile) - Span 7 */}
                                <div className="lg:col-span-7 space-y-8 sm:space-y-10">

                                    {/* Main Hero Image - Responsive Height */}
                                    <motion.div
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        // Mobile: h-64, Tablet: h-96, Desktop: h-[450px]
                                        className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl h-64 sm:h-96 lg:h-[450px] w-full relative group"
                                    >
                                        <img
                                            src={branch.images[0]}
                                            alt={branch.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                                    </motion.div>

                                    {/* Profile Description */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="prose prose-lg max-w-none text-gray-600"
                                    >
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">About This Branch</h3>
                                        <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
                                            {branch.profileDescription}
                                        </p>
                                    </motion.div>

                                    {/* Mini Gallery - Grid 2 columns always (looks great on mobile too) */}
                                    {branch.images.length > 1 && (
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            {branch.images.slice(1).map((img, idx) => (
                                                <motion.img
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    className="rounded-lg sm:rounded-xl h-32 sm:h-48 w-full object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT COLUMN (Contact Info & Map Action) - Span 5 */}
                                <div className="lg:col-span-5 space-y-6 sm:space-y-8">

                                    {/* Contact Card */}
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        // Reduced padding on mobile (p-5) to save space
                                        className="bg-gray-50 p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg"
                                    >
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>

                                        <div className="space-y-5 sm:space-y-6">
                                            {/* Item 1: Address */}
                                            <div className="flex items-start">
                                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-cyan-600 mr-3 sm:mr-4 shrink-0">
                                                    <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Address</p>
                                                    <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">{branch.fullAddress}</p>
                                                </div>
                                            </div>

                                            {/* Item 2: Phone */}
                                            <div className="flex items-start">
                                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-green-600 mr-3 sm:mr-4 shrink-0">
                                                    <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Phone</p>
                                                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-base sm:text-lg text-gray-800 font-medium hover:text-green-600 transition-colors block">
                                                        {branch.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Item 3: Email */}
                                            <div className="flex items-start">
                                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-blue-600 mr-3 sm:mr-4 shrink-0">
                                                    <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="text-xs sm:text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                                                    <a href={`mailto:${branch.email}`} className="text-sm sm:text-base text-gray-800 font-medium hover:text-blue-600 transition-colors break-all">
                                                        {branch.email}
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Item 4: Hours */}
                                            <div className="flex items-start">
                                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-orange-500 mr-3 sm:mr-4 shrink-0">
                                                    <FiClock className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Hours</p>
                                                    <p className="text-sm sm:text-base text-gray-800 font-medium">Mon - Fri: 09:00 - 18:00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Map Action Button */}
                                    <motion.a
                                        href={branch.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block w-full bg-gray-900 text-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl text-center group cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                                            <FiNavigation className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
                                            <span className="text-lg sm:text-xl font-bold">Navigate on Google Maps</span>
                                        </div>
                                        {/* Hover Effect Background */}
                                        <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                                    </motion.a>

                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default BranchPageTemplate;