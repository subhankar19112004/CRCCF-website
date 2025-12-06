// src/pages/mainPages/contact/ContactPersonDetails.jsx (FINAL DESIGN V10 - ULTRA MINIMALIST)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiMail, FiUser, FiHome } from 'react-icons/fi';
import { contactPersonsData } from '../../../data/contactUs/contactPersonsData';

// --- CLEAN BACKGROUND (Pure White) ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- FINAL PROFESSIONAL FLUID HEADER COMPONENT ---
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


// --- The Officer Profile Card Component (Clean Card with Shadow) ---
const OfficerCard = ({ officer, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            
            // Clean, minimal elevation
            whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)', // Light, professional lift
            }}
            
            className="bg-white rounded-xl p-6 transition-all duration-300 border border-gray-100 text-gray-900"
            style={{ 
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)' 
            }}
        >
            <div className="flex flex-col items-center text-center">
                <img 
                    src={officer.photoUrl} 
                    alt={officer.fullName} 
                    className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-cyan-600 shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-900">{officer.fullName}</h3>
                <p className="text-sm font-semibold text-cyan-600 mb-1">{officer.designation}</p>
                <p className="text-sm text-gray-500 mb-4">{officer.department}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-auto">
                 <div className="flex items-center justify-center text-gray-600 mb-3">
                    <FiMail className="w-4 h-4 mr-2 text-red-600" />
                    <a href={`mailto:${officer.mailId}`} className="hover:text-red-700 text-sm">{officer.mailId}</a>
                 </div>
                 
                 <Link 
                    to={`/contact-us/person/${officer.slug}`}
                    className="flex items-center justify-center bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-cyan-600 transition-colors shadow-lg shadow-gray-900/10"
                    whileHover={{ scale: 1.05 }}
                 >
                    <FiUser className="w-4 h-4 mr-2" /> View Profile
                 </Link>
            </div>
        </motion.div>
    );
};

const ContactPersonDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const categories = ['All', 'Management', 'Operations', 'Support', 'Legal', 'Technical'];
    
    // ... (Filter logic remains the same) ...
    const filteredPersons = contactPersonsData.filter(person => {
        const matchesSearch = person.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              person.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'All' || person.category === filterCategory;
        return matchesSearch && matchesCategory;
    });
    
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
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    {/* CUSTOM HEADER - Directory Title */}
                    <FluidPageHeader 
                        title="Officer <Directory>" 
                        subtitle="Leadership & Key Contacts for all major departments."
                    />
                    
                    {/* Filter and Search Bar - ULTRA-CLEAN, FLUID DESIGN */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.6 }}
                        className="mb-10 px-4 py-6 rounded-xl mx-auto max-w-4xl bg-gray-50 shadow-lg" // Soft container background
                    >
                        {/* Search Input - Cleanest possible field */}
                        <div className="relative mb-4">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by Name, Department, or Role..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 shadow-inner"
                            />
                        </div>

                        {/* Category Filters - Horizontal, Scrollable, Animated Buttons */}
                        <div className="flex overflow-x-auto gap-3 py-1 justify-center border-t border-gray-200 pt-3">
                            {categories.map(category => (
                                <motion.button
                                    key={category}
                                    onClick={() => setFilterCategory(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                                                ${filterCategory === category 
                                                    ? 'bg-cyan-600 text-white shadow-md' 
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Officer Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredPersons.length > 0 ? (
                            filteredPersons.map((person, i) => (
                                <OfficerCard key={person.id} officer={person} index={i} />
                            ))
                        ) : (
                            <p className="text-xl text-gray-500 col-span-full text-center py-10">No officers match your search or filter criteria.</p>
                        )}
                    </div>
                    
                    {/* Back Link to Contact Hub */}
                    <div className="mt-12 text-center">
                        <Link 
                            to="/contact-us" 
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white text-lg font-semibold tracking-wide shadow-lg hover:bg-cyan-600 transition-all duration-300"
                        >
                            <FiHome className="mr-2 h-5 w-5" /> Back to Contact Hub
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ContactPersonDetails;