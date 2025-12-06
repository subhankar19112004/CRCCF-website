// src/pages/mainPages/contact/InquiryDetails.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiSend, FiInfo } from 'react-icons/fi';
import { inquiryFormSchema } from '../../../data/contactUs/inquiryData';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- ROBUST ANIMATED INPUT COMPONENT (Fixed Placeholders) ---
const AnimatedInput = ({ field, value, onChange, onToggle }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value && value.toString().length > 0;
    
    // Logic: Label floats if focused OR has value.
    // We removed 'isDate' from here so the Date label behaves like others (starts inside)
    const isActive = focused || hasValue; 

    // Date Mask Logic: Hide the ugly 'dd-mm-yyyy' unless focused or has value
    const isDate = field.type === 'date';
    const hideDateMask = isDate && !isActive;

    return (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
        >
            {/* 1. TEXTAREA */}
            {field.type === 'textarea' && (
                <textarea
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    // Placeholder logic: Only show when focused
                    placeholder={focused ? field.placeholder : ''}
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 resize-none h-32
                        ${focused ? 'border-cyan-500 shadow-md bg-white' : 'border-gray-200'}`}
                />
            )}

            {/* 2. SELECT DROPDOWN */}
            {field.type === 'select' && (
                <div className="relative">
                    <select
                        id={field.id}
                        value={value}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 appearance-none cursor-pointer relative z-10 bg-transparent
                            ${focused ? 'border-cyan-500 shadow-md bg-white' : 'border-gray-200'}`}
                    >
                        <option value="" disabled></option>
                        {field.options.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                        ))}
                    </select>
                    {/* Custom Arrow Icon */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 z-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            )}

            {/* 3. STANDARD INPUT (Text, Tel, Email, Date) */}
            {field.type !== 'textarea' && field.type !== 'select' && (
                <input
                    type={field.type}
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    // FIX: Only show placeholder if label is floating (active)
                    placeholder={isActive ? field.placeholder : ''} 
                    
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300
                        ${isDate ? 'min-h-[3.5rem]' : ''} 
                        ${hideDateMask ? 'text-transparent' : 'text-gray-900'} 
                        ${focused ? 'border-cyan-500 shadow-md bg-white' : 'border-gray-200'}`}
                    
                    // Specific fix for Date inputs to hide calendar icon when not focused if desired, 
                    // or just manage text color as above.
                    style={isDate ? { WebkitAppearance: 'none' } : {}} 
                />
            )}

            {/* FLOATING LABEL */}
            <label
                htmlFor={field.id}
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium z-0
                    ${isActive ? 'top-2 text-xs text-cyan-600' : 'top-5 text-gray-500 text-base'}`}
            >
                {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>

            {/* WHATSAPP LOGIC TOGGLE */}
            {field.hasCopyToggle && (
                <div className="absolute top-4 right-4 flex items-center z-20">
                    <label className="flex items-center cursor-pointer text-xs font-semibold text-gray-500 hover:text-cyan-600 transition-colors select-none">
                        <input 
                            type="checkbox" 
                            className="mr-2 accent-cyan-600 h-4 w-4 cursor-pointer"
                            onChange={(e) => onToggle(e.target.checked)}
                        />
                        {field.toggleLabel}
                    </label>
                </div>
            )}
        </motion.div>
    );
};


// --- MAIN INQUIRY PAGE COMPONENT ---
const InquiryDetails = () => {
    const [formData, setFormData] = useState({});
    const [isCopyEnabled, setIsCopyEnabled] = useState(false); // State for WhatsApp Toggle

    // Initialize State based on Schema
    useEffect(() => {
        const initialData = {};
        inquiryFormSchema.forEach(section => {
            section.fields.forEach(field => {
                initialData[field.id] = '';
            });
        });
        setFormData(initialData);
    }, []);

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
                            Submit an <span className="text-cyan-600">Inquiry</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Fill out the form below to route your request to the right department.
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
                        {inquiryFormSchema.map((section, index) => (
                            <div key={index} className="p-8 md:p-10 border-b border-gray-100 last:border-0">
                                
                                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                                    <span className="bg-cyan-100 text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                                        {index + 1}
                                    </span>
                                    {section.sectionTitle}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <AnimatePresence>
                                        {section.fields.map((field) => {
                                            
                                            // --- CONDITIONAL LOGIC CHECK (The "Other" Logic) ---
                                            if (field.dependency) {
                                                const parentValue = formData[field.dependency.fieldId];
                                                if (parentValue !== field.dependency.value) {
                                                    return null; // Don't render if "Other" is not selected
                                                }
                                            }
                                            // ----------------------------------------------------

                                            return (
                                                <AnimatedInput
                                                    key={field.id}
                                                    field={field}
                                                    value={formData[field.id] || ''}
                                                    onChange={handleInputChange}
                                                    onToggle={setIsCopyEnabled} // Pass the toggle handler
                                                />
                                            );
                                        })}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}

                        {/* Submit Action Area */}
                        <div className="p-10 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center text-gray-500 text-sm">
                                <FiInfo className="w-5 h-5 mr-2 text-cyan-600" />
                                <span>Typical response time: <strong>24-48 Business Hours</strong></span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-cyan-600 transition-colors flex items-center gap-3 w-full md:w-auto justify-center"
                            >
                                Send Inquiry <FiSend />
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

export default InquiryDetails;