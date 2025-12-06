// src/pages/mainPages/contact/FeedbackDetails.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiUploadCloud, FiCheck, FiStar, FiSend } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa'; // For filled stars
import { feedbackFormSchema } from '../../../data/contactUs/feedbackData';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- 1. FLOATING LABEL INPUT COMPONENT ---
const AnimatedInput = ({ field, value, onChange, onToggle }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value && value.length > 0;
    const isActive = focused || hasValue;

    return (
        <div className={`relative mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            
            {/* Input Element */}
            {field.type === 'textarea' ? (
                <textarea
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 resize-none h-32
                        ${focused ? 'border-cyan-500 shadow-md bg-white' : 'border-gray-200'}`}
                />
            ) : field.type === 'select' ? (
                <div className="relative">
                    <select
                        id={field.id}
                        value={value}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 appearance-none
                            ${focused ? 'border-cyan-500 shadow-md bg-white' : 'border-gray-200'}`}
                    >
                        <option value="" disabled></option>
                        {field.options.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <input
                    type={field.type}
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300
                        ${focused ? 'border-cyan-500 shadow-md bg-white' : 'border-gray-200'}`}
                />
            )}

            {/* Floating Label */}
            <label
                htmlFor={field.id}
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium
                    ${isActive ? 'top-2 text-xs text-cyan-600' : 'top-5 text-gray-500 text-base'}`}
            >
                {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>

            {/* Special Toggle Logic (Example: Same as Mobile) */}
            {field.hasCopyToggle && (
                <div className="absolute top-4 right-4 flex items-center">
                    <label className="flex items-center cursor-pointer text-xs font-semibold text-gray-500 hover:text-cyan-600 transition-colors">
                        <input 
                            type="checkbox" 
                            className="mr-2 accent-cyan-600 h-4 w-4"
                            onChange={(e) => onToggle(e.target.checked)}
                        />
                        {field.toggleLabel}
                    </label>
                </div>
            )}
        </div>
    );
};

// --- 2. STAR RATING COMPONENT ---
const RatingInput = ({ field, value, onChange }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={`mb-8 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            <label className="block text-gray-700 font-bold mb-3 text-lg">
                {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex gap-2">
                {[...Array(field.maxStars)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                        <motion.button
                            key={i}
                            type="button"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onChange(field.id, ratingValue)}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            className="focus:outline-none"
                        >
                            {ratingValue <= (hover || value) ? (
                                <FaStar className="w-8 h-8 text-yellow-400 drop-shadow-sm" />
                            ) : (
                                <FiStar className="w-8 h-8 text-gray-300" />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

// --- 3. FILE UPLOAD COMPONENT ---
const FileUploadInput = ({ field }) => {
    return (
        <div className={`mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            <label className="block text-gray-700 font-bold mb-3">
                {field.label}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-cyan-400 transition-all group">
                <div className="p-4 bg-gray-100 rounded-full mb-4 group-hover:bg-cyan-100 transition-colors">
                    <FiUploadCloud className="w-8 h-8 text-gray-500 group-hover:text-cyan-600" />
                </div>
                <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-2">{field.helperText}</p>
            </div>
        </div>
    );
};


// --- MAIN FORM PAGE ---
const FeedbackDetails = () => {
    // State for all dynamic fields
    const [formData, setFormData] = useState({});
    const [isCopyEnabled, setIsCopyEnabled] = useState(false);

    // Initialize State from Schema
    useEffect(() => {
        const initialData = {};
        feedbackFormSchema.forEach(section => {
            section.fields.forEach(field => {
                initialData[field.id] = '';
            });
        });
        setFormData(initialData);
    }, []);

    // Handle Input Change
    const handleInputChange = (id, value) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Logic: Sync WhatsApp with Mobile
    useEffect(() => {
        if (isCopyEnabled) {
            setFormData(prev => ({ ...prev, whatsappNumber: prev.mobileNumber }));
        }
    }, [formData.mobileNumber, isCopyEnabled]);


    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
    };

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            
            <CleanBackground />
            
            <div className="relative min-h-screen bg-transparent text-gray-900 pt-16 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
                
                {/* WIDE CONTAINER */}
                <div className="max-w-6xl mx-auto relative z-10">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                            We Value Your <span className="text-cyan-600">Feedback</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Help us improve our services by sharing your experience. Your insights drive our innovation.
                        </p>
                    </div>

                    {/* MAIN FORM CARD - WIDE */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Loop through Sections */}
                        {feedbackFormSchema.map((section, index) => (
                            <div key={index} className="p-8 md:p-10 border-b border-gray-100 last:border-0">
                                
                                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                                    <span className="bg-cyan-100 text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                                        {index + 1}
                                    </span>
                                    {section.sectionTitle}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    {section.fields.map((field) => {
                                        
                                        // 1. Render Rating
                                        if (field.type === 'rating') {
                                            return (
                                                <RatingInput 
                                                    key={field.id} 
                                                    field={field} 
                                                    value={formData[field.id]} 
                                                    onChange={handleInputChange} 
                                                />
                                            );
                                        }
                                        
                                        // 2. Render File Upload
                                        if (field.type === 'file') {
                                            return <FileUploadInput key={field.id} field={field} />;
                                        }

                                        // 3. Render Standard Inputs (Text, Select, Date, Tel)
                                        return (
                                            <AnimatedInput
                                                key={field.id}
                                                field={field}
                                                value={formData[field.id] || ''}
                                                onChange={handleInputChange}
                                                onToggle={setIsCopyEnabled} // Pass toggle handler
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Submit Action Area */}
                        <div className="p-10 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-sm text-gray-500 italic">
                                * Your feedback is confidential and used solely for quality assurance.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-cyan-600 transition-colors flex items-center gap-3 w-full md:w-auto justify-center"
                            >
                                Submit Feedback <FiSend />
                            </motion.button>
                        </div>

                    </motion.div>

                    {/* Back Link */}
                    <div className="mt-12 text-center">
                        <Link 
                            to="/contact-us" 
                            className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:text-cyan-600 transition-all shadow-sm"
                        >
                            <FiChevronLeft className="mr-2 h-5 w-5" /> Back to Contact Hub
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default FeedbackDetails;