// src/pages/mainPages/contact/SuggestionDetails.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiSend, FiUploadCloud, FiFile } from 'react-icons/fi';
import { suggestionFormSchema } from '../../../data/contactUs/suggestionData';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- 1. BLACK-THEMED ANIMATED INPUT (FIXED PLACEHOLDERS & DATE) ---
const AnimatedInput = ({ field, value, onChange, onToggle }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value && value.toString().length > 0;
    
    // Logic: Label floats if focused OR has value.
    const isActive = focused || hasValue; 

    // Date Mask Logic: Hide the ugly 'dd-mm-yyyy' unless focused or has value
    const isDate = field.type === 'date';
    const hideDateMask = isDate && !isActive;

    // Theme Classes: Using Gray-900 (Black) instead of Cyan
    const activeBorder = "border-gray-900 shadow-md bg-white";
    const inactiveBorder = "border-gray-300";
    const activeLabel = "top-2 text-xs text-gray-900 font-bold";
    const inactiveLabel = "top-5 text-gray-500 text-base";

    return (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
        >
            {/* TEXTAREA */}
            {field.type === 'textarea' && (
                <textarea
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    // FIX: Only show placeholder if label is floating
                    placeholder={isActive ? field.placeholder : ''}
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 resize-none h-32
                        ${focused ? activeBorder : inactiveBorder}`}
                />
            )}

            {/* SELECT DROPDOWN */}
            {field.type === 'select' && (
                <div className="relative">
                    <select
                        id={field.id}
                        value={value}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 appearance-none cursor-pointer relative z-10 bg-transparent
                            ${focused ? activeBorder : inactiveBorder}`}
                    >
                        <option value="" disabled></option>
                        {field.options.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-900 z-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            )}

            {/* STANDARD INPUT */}
            {field.type !== 'textarea' && field.type !== 'select' && field.type !== 'file' && (
                <input
                    type={field.type}
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    // FIX: Only show placeholder if label is floating
                    placeholder={isActive ? field.placeholder : ''}
                    
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300
                        ${isDate ? 'min-h-[3.5rem]' : ''} 
                        ${hideDateMask ? 'text-transparent' : 'text-gray-900'} 
                        ${focused ? activeBorder : inactiveBorder}`}
                    
                    style={isDate ? { WebkitAppearance: 'none' } : {}} 
                />
            )}

            {/* FLOATING LABEL */}
            {field.type !== 'file' && (
                <label
                    htmlFor={field.id}
                    className={`absolute left-4 transition-all duration-300 pointer-events-none z-0
                        ${isActive ? activeLabel : inactiveLabel}`}
                >
                    {field.label} {field.required && <span className="text-red-600">*</span>}
                </label>
            )}

            {/* WHATSAPP LOGIC TOGGLE (Black Accent) */}
            {field.hasCopyToggle && (
                <div className="absolute top-4 right-4 flex items-center z-20">
                    <label className="flex items-center cursor-pointer text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors select-none">
                        <input 
                            type="checkbox" 
                            className="mr-2 accent-gray-900 h-4 w-4 cursor-pointer"
                            onChange={(e) => onToggle(e.target.checked)}
                        />
                        {field.toggleLabel}
                    </label>
                </div>
            )}
        </motion.div>
    );
};

// --- 2. BLACK-THEMED FILE UPLOAD ---
const FileUploadInput = ({ field }) => {
    return (
        <div className={`mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            <label className="block text-gray-900 font-bold mb-3 text-lg">
                {field.label}
            </label>
            <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-gray-900 transition-all group bg-gray-50">
                <div className="p-4 bg-white rounded-full mb-4 shadow-sm group-hover:bg-gray-200 transition-colors">
                    <FiUploadCloud className="w-8 h-8 text-gray-600 group-hover:text-gray-900" />
                </div>
                <p className="text-gray-800 font-bold">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-2 font-medium">{field.helperText}</p>
            </div>
        </div>
    );
};


// --- MAIN SUGGESTION PAGE ---
const SuggestionDetails = () => {
    const [formData, setFormData] = useState({});
    const [isCopyEnabled, setIsCopyEnabled] = useState(false);

    // Initialize State
    useEffect(() => {
        const initialData = {};
        suggestionFormSchema.forEach(section => {
            section.fields.forEach(field => {
                initialData[field.id] = '';
            });
        });
        setFormData(initialData);
    }, []);

    const handleInputChange = (id, value) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Logic: Sync WhatsApp
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
                    
                    {/* Header - BLACK THEME */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                            Your <span className="text-black underline decoration-gray-400 decoration-4 underline-offset-4">Suggestions</span> Matter
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Help us innovate and improve. Share your creative ideas and feedback directly with our team.
                        </p>
                    </div>

                    {/* MAIN FORM CARD */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-gray-900" // Bold top border
                    >
                        {/* Loop through Sections */}
                        {suggestionFormSchema.map((section, index) => (
                            <div key={index} className="p-8 md:p-10 border-b border-gray-100 last:border-0">
                                
                                <h2 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center">
                                    <span className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-md">
                                        {index + 1}
                                    </span>
                                    {section.sectionTitle}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    {section.fields.map((field) => {
                                        
                                        // Render File Upload
                                        if (field.type === 'file') {
                                            return <FileUploadInput key={field.id} field={field} />;
                                        }

                                        // Render Standard Inputs
                                        return (
                                            <AnimatedInput
                                                key={field.id}
                                                field={field}
                                                value={formData[field.id] || ''}
                                                onChange={handleInputChange}
                                                onToggle={setIsCopyEnabled}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Submit Action Area - BLACK BUTTON */}
                        <div className="p-10 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center text-gray-500 text-sm">
                                <FiFile className="w-5 h-5 mr-2 text-gray-900" />
                                <span>We review every suggestion personally.</span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-black transition-colors flex items-center gap-3 w-full md:w-auto justify-center"
                            >
                                Submit Suggestion <FiSend />
                            </motion.button>
                        </div>

                    </motion.div>

                    {/* Back Link */}
                    <div className="mt-12 text-center">
                        <Link 
                            to="/contact-us" 
                            className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-900 font-bold hover:bg-gray-100 transition-all shadow-sm"
                        >
                            <FiChevronLeft className="mr-2 h-5 w-5" /> Back to Contact Hub
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default SuggestionDetails;