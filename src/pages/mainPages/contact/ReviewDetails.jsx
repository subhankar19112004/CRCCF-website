// src/pages/mainPages/contact/ReviewDetails.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiSend, FiUploadCloud, FiEdit3, FiEye, FiStar, FiUser, FiCalendar } from 'react-icons/fi';
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; // Filled star & Quote icon
import { reviewFormSchema } from '../../../data/contactUs/reviewFormData';
import { viewReviewsData } from '../../../data/contactUs/viewReviewsData'; // IMPORT NEW DATA

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- 1. ORANGE-THEMED ANIMATED INPUT (Same as before) ---
const AnimatedInput = ({ field, value, onChange, onToggle }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value && value.toString().length > 0;
    const isActive = focused || hasValue; 
    const isDate = field.type === 'date';
    const hideDateMask = isDate && !isActive;

    const activeBorder = "border-orange-500 shadow-md bg-white";
    const inactiveBorder = "border-gray-300";
    const activeLabel = "top-2 text-xs text-orange-600 font-bold";
    const inactiveLabel = "top-5 text-gray-500 text-base";

    return (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
        >
            {field.type === 'textarea' ? (
                <textarea
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 resize-none h-32 ${focused ? activeBorder : inactiveBorder}`}
                />
            ) : field.type === 'select' ? (
                <div className="relative">
                    <select
                        id={field.id}
                        value={value}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 appearance-none cursor-pointer relative z-10 bg-transparent ${focused ? activeBorder : inactiveBorder}`}
                    >
                        <option value="" disabled></option>
                        {field.options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-900 z-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            ) : (
                <input
                    type={field.type}
                    id={field.id}
                    value={value}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={isActive ? field.placeholder : ''}
                    className={`w-full p-4 pt-6 rounded-xl bg-gray-50 border-2 outline-none transition-all duration-300 ${isDate ? 'min-h-[3.5rem]' : ''} ${hideDateMask ? 'text-transparent' : 'text-gray-900'} ${focused ? activeBorder : inactiveBorder}`}
                    style={isDate ? { WebkitAppearance: 'none' } : {}} 
                />
            )}
            <label htmlFor={field.id} className={`absolute left-4 transition-all duration-300 pointer-events-none z-0 ${isActive ? activeLabel : inactiveLabel}`}>
                {field.label} {field.required && <span className="text-red-600">*</span>}
            </label>
            {field.hasCopyToggle && (
                <div className="absolute top-4 right-4 flex items-center z-20">
                    <label className="flex items-center cursor-pointer text-xs font-bold text-gray-500 hover:text-orange-600 transition-colors select-none">
                        <input type="checkbox" className="mr-2 accent-orange-600 h-4 w-4 cursor-pointer" onChange={(e) => onToggle(e.target.checked)} />
                        {field.toggleLabel}
                    </label>
                </div>
            )}
        </motion.div>
    );
};

// --- 2. RATING INPUT ---
const RatingInput = ({ field, value, onChange }) => {
    const [hover, setHover] = useState(0);
    return (
        <div className={`mb-8 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            <label className="block text-gray-800 font-bold mb-3 text-sm uppercase tracking-wide">
                {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 w-fit">
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
                            className="focus:outline-none transition-colors"
                        >
                            {ratingValue <= (hover || value) ? (
                                <FaStar className="w-8 h-8 text-orange-500 drop-shadow-sm" />
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

// --- 3. FILE UPLOAD ---
const FileUploadInput = ({ field }) => {
    return (
        <div className={`mb-6 ${field.gridSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            <label className="block text-gray-900 font-bold mb-3 text-lg">{field.label}</label>
            <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-orange-50 hover:border-orange-500 transition-all group bg-white">
                <div className="p-4 bg-gray-50 rounded-full mb-4 shadow-sm group-hover:bg-orange-100 transition-colors">
                    <FiUploadCloud className="w-8 h-8 text-gray-600 group-hover:text-orange-600" />
                </div>
                <p className="text-gray-800 font-bold">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-2 font-medium">{field.helperText}</p>
            </div>
        </div>
    );
};

// --- 4. REVIEW DISPLAY CARD (NEW) ---
const ReviewCard = ({ review, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:shadow-2xl transition-shadow duration-300"
    >
        <FaQuoteLeft className="absolute top-6 right-6 text-orange-100 text-4xl" />
        
        {/* Header: User Info */}
        <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mr-4">
                {review.fullName.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-gray-900">{review.fullName}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
            </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`w-5 h-5 ${i < review.rating ? 'text-orange-400' : 'text-gray-200'}`} />
            ))}
        </div>

        {/* Review Content */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{review.subject}</h3>
        <p className="text-gray-600 leading-relaxed text-sm mb-4">"{review.message}"</p>

        {/* Footer: Date */}
        <div className="border-t border-gray-100 pt-4 flex items-center text-gray-400 text-xs font-medium">
            <FiCalendar className="mr-2" /> {review.date}
        </div>
    </motion.div>
);


// --- MAIN REVIEW PAGE CONTAINER ---
const ReviewDetails = () => {
    const [viewMode, setViewMode] = useState('selection'); // 'selection', 'add', 'view'
    const [formData, setFormData] = useState({});
    const [isCopyEnabled, setIsCopyEnabled] = useState(false);

    // Initialize Form State
    useEffect(() => {
        const initialData = {};
        reviewFormSchema.forEach(section => {
            section.fields.forEach(field => {
                initialData[field.id] = '';
            });
        });
        setFormData(initialData);
    }, []);

    const handleInputChange = (id, value) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    useEffect(() => {
        if (isCopyEnabled) setFormData(prev => ({ ...prev, whatsappNumber: prev.mobileNumber }));
    }, [formData.mobileNumber, isCopyEnabled]);

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <CleanBackground />
            
            <div className="relative min-h-screen bg-transparent text-gray-900 pt-16 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-6xl mx-auto relative z-10">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                            Community <span className="text-orange-500">Reviews</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Share your experience or see how we've helped others.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        
                        {/* MODE 1: SELECTION SCREEN */}
                        {viewMode === 'selection' && (
                            <motion.div 
                                key="selection"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                            >
                                {/* Add Review Card */}
                                <div 
                                    onClick={() => setViewMode('add')}
                                    className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-orange-500 cursor-pointer group hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                                >
                                    <div className="p-6 bg-orange-50 rounded-full mb-6 group-hover:bg-orange-100 transition-colors">
                                        <FiEdit3 className="w-12 h-12 text-orange-600" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Write a Review</h2>
                                    <p className="text-gray-500">Share your feedback, rate our services, and help us improve.</p>
                                </div>

                                {/* View Reviews Card */}
                                <div 
                                    onClick={() => setViewMode('view')}
                                    className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-gray-800 cursor-pointer group hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                                >
                                    <div className="p-6 bg-gray-100 rounded-full mb-6 group-hover:bg-gray-200 transition-colors">
                                        <FiEye className="w-12 h-12 text-gray-800" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Read Testimonials</h2>
                                    <p className="text-gray-500">See what others are saying about their experience with CRCCF.</p>
                                </div>
                            </motion.div>
                        )}

                        {/* MODE 2: ADD REVIEW FORM */}
                        {viewMode === 'add' && (
                            <motion.div 
                                key="add"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                            >
                                <div className="p-6 bg-orange-50 border-b border-orange-100 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-gray-900">Submit Your Experience</h2>
                                    <button onClick={() => setViewMode('selection')} className="text-sm font-bold text-orange-600 hover:underline">Cancel</button>
                                </div>

                                {/* Form Rendering Loop */}
                                {reviewFormSchema.map((section, index) => (
                                    <div key={index} className="p-8 md:p-10 border-b border-gray-100 last:border-0">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                                            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">{index + 1}</span>
                                            {section.sectionTitle}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                            {section.fields.map((field) => {
                                                if (field.type === 'rating') return <RatingInput key={field.id} field={field} value={formData[field.id]} onChange={handleInputChange} />;
                                                if (field.type === 'file') return <FileUploadInput key={field.id} field={field} />;
                                                return <AnimatedInput key={field.id} field={field} value={formData[field.id] || ''} onChange={handleInputChange} onToggle={setIsCopyEnabled} />;
                                            })}
                                        </div>
                                    </div>
                                ))}

                                <div className="p-10 bg-gray-50 flex justify-center">
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-12 py-4 bg-orange-500 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-orange-600 transition-colors flex items-center gap-3">
                                        Post Review <FiSend />
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}

                        {/* MODE 3: VIEW REVIEWS (UPDATED WITH REAL DATA) */}
                        {viewMode === 'view' && (
                            <motion.div 
                                key="view"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-8"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Recent Testimonials</h2>
                                    <button onClick={() => setViewMode('selection')} className="px-6 py-2 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-colors text-sm">
                                        Back to Options
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {viewReviewsData.map((review, index) => (
                                        <ReviewCard key={review.id} review={review} index={index} />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>

                    {/* Back Link (Only show in selection mode) */}
                    {viewMode === 'selection' && (
                        <div className="mt-16 text-center">
                            <Link to="/contact-us" className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:text-orange-600 transition-all shadow-sm">
                                <FiChevronLeft className="mr-2 h-5 w-5" /> Back to Contact Hub
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </motion.div>
    );
};

export default ReviewDetails;