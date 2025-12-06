// src/pages/mainPages/contact/GroupListingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiUsers, FiChevronLeft, FiFilter, FiExternalLink, FiLock, FiUnlock } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'; // Brand icons
import { whatsAppGroups, telegramGroups } from '../../../data/contactUs/socialGroupsData';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- DYNAMIC HEADER ---
const FluidPageHeader = ({ platform }) => {
    const isWA = platform === 'whatsapp';
    const titleText = isWA ? 'WhatsApp' : 'Telegram';
    const subtitleText = isWA 
        ? "Join our official community groups for real-time alerts and discussions."
        : "Subscribe to our broadcast channels and discussion hubs.";
    const accentColor = isWA ? 'text-green-600' : 'text-blue-500';

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-10 pb-6 relative overflow-hidden" 
        >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                Join <span className={accentColor}>{titleText}</span> {isWA ? 'Groups' : 'Channels'}
            </h1>
            <p className="mt-2 text-xl font-light text-gray-600 max-w-4xl mx-auto">
                {subtitleText}
            </p>
            
            {/* Animated Underline with Brand Color */}
             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-24 overflow-hidden">
                 <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                    className={`h-full origin-center shadow-lg ${isWA ? 'bg-green-500 shadow-green-500/50' : 'bg-blue-500 shadow-blue-500/50'}`}
                 />
             </div>
        </motion.header>
    );
};

// --- GROUP CARD COMPONENT ---
const GroupCard = ({ group, index, platform }) => {
    const isWA = platform === 'whatsapp';
    const brandColor = isWA ? 'bg-green-600' : 'bg-blue-500';
    const hoverColor = isWA ? 'hover:bg-green-700' : 'hover:bg-blue-600';
    const BrandIcon = isWA ? FaWhatsapp : FaTelegramPlane;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col h-full relative overflow-hidden group"
        >
            {/* Status Badge (Top Right) */}
            <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 
                ${group.status === 'Open' || group.status === 'Public' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {group.status === 'Open' || group.status === 'Public' ? <FiUnlock size={10} /> : <FiLock size={10} />}
                {group.status}
            </div>

            {/* Header: Icon + Category */}
            <div className="flex items-start justify-between mb-4 mt-2">
                <div className={`p-3 rounded-full text-white shadow-md ${brandColor}`}>
                    <BrandIcon size={24} />
                </div>
            </div>

            {/* Content */}
            <div className="mb-6 flex-grow">
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1 block">
                    {group.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {group.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {group.description}
                </p>
            </div>

            {/* Footer: Members + Join Button */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm font-medium">
                    <FiUsers className="mr-2" /> {group.members}
                </div>
                
                <a 
                    href={group.inviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2 rounded-lg text-white text-sm font-bold shadow-md transition-colors flex items-center gap-2 ${brandColor} ${hoverColor}`}
                >
                    Join <FiExternalLink />
                </a>
            </div>
        </motion.div>
    );
};

// --- MAIN PAGE COMPONENT ---
const GroupListingPage = ({ platform }) => { // Accepts 'whatsapp' or 'telegram' prop
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    
    // 1. Select the correct dataset based on props
    const data = platform === 'whatsapp' ? whatsAppGroups : telegramGroups;
    
    // 2. Extract unique categories dynamically for the filter buttons
    const categories = ['All', ...new Set(data.map(item => item.category))];

    // 3. Filter Logic
    const filteredGroups = data.filter(group => {
        const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              group.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'All' || group.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    // Page Transitions
    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
    };

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <CleanBackground />
            
            <div className="relative min-h-screen bg-transparent text-gray-900 pt-16 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    <FluidPageHeader platform={platform} />

                    {/* --- SEARCH & FILTER BAR --- */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.2 }}
                        className="mb-12 mx-auto max-w-5xl"
                    >
                        <div className="bg-gray-50 p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                            
                            {/* Search Input */}
                            <div className="relative w-full md:flex-1">
                                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder={`Search ${platform === 'whatsapp' ? 'groups' : 'channels'}...`}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border-none focus:ring-2 focus:ring-gray-200 text-gray-900 placeholder-gray-400 shadow-sm"
                                />
                            </div>

                            {/* Filter Toggles (Horizontal Scroll on Mobile) */}
                            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 px-2 no-scrollbar">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(cat)}
                                        className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-all
                                            ${filterCategory === cat 
                                                ? (platform === 'whatsapp' ? 'bg-green-600 text-white shadow-md' : 'bg-blue-600 text-white shadow-md')
                                                : 'bg-white text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* --- GROUPS GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGroups.length > 0 ? (
                            filteredGroups.map((group, index) => (
                                <GroupCard key={group.id} group={group} index={index} platform={platform} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                <p className="text-xl">No groups found matching your criteria.</p>
                                <button 
                                    onClick={() => {setSearchTerm(''); setFilterCategory('All');}}
                                    className="mt-4 text-blue-600 hover:underline font-medium"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* --- BACK NAVIGATION --- */}
                    <div className="mt-16 text-center">
                        <Link 
                            to="/contact-us/follow-apps" 
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white text-lg font-semibold tracking-wide shadow-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <FiChevronLeft className="mr-2 h-5 w-5" /> Back to Follow Apps
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default GroupListingPage;