// src/pages/mainPages/contact/FollowAppsDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiDownload, FiExternalLink } from 'react-icons/fi';
// Import from the new .jsx data file
import { followAppsData } from '../../../data/contactUs/followAppsData';

// --- CLEAN BACKGROUND ---
const CleanBackground = () => (
    <div className="fixed inset-0 bg-white" />
);

// --- FLUID PAGE HEADER COMPONENT ---
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

// --- ADVANCED CARD COMPONENT (Consuming Component Icons) ---
// --- SMART CARD COMPONENT (Internal & External Link Support) ---
const FollowAppCard = ({ app, index }) => {
    const IconComponent = app.icon;
    const ActionIcon = (app.type === 'download' || app.type === 'media') ? FiDownload : FiExternalLink;
    const cardColorClass = app.color;

    // CHECK: Is this an internal link (starts with /) or external (http)?
    const isInternal = app.path.startsWith('/');

    // Common Content to avoid duplication
    const CardContent = (
        <>
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`p-4 rounded-full mb-4 text-white shadow-lg flex items-center justify-center ${cardColorClass}`}
            >
                <IconComponent className="w-8 h-8" />
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{app.label}</h3>
            <p className="text-sm font-light text-gray-500 mb-4">{app.context}</p>

            <div className={`mt-auto flex items-center px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 ${cardColorClass}`}>
                {/* Use Chevron for internal navigation, ExternalLink for websites */}
                {isInternal ? <FiChevronLeft className="w-4 h-4 mr-2 rotate-180" /> : <ActionIcon className="w-4 h-4 mr-2" />}
                {isInternal ? "View Groups" : app.action}
            </div>
        </>
    );

    const cardStyles = `bg-white rounded-xl p-6 transition-all duration-300 flex flex-col items-center text-center cursor-pointer border border-gray-100 shadow-sm h-full`;
    const animationProps = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, delay: index * 0.08, ease: "easeOut" },
        whileHover: { scale: 1.05, y: -8, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }
    };

    // CONDITIONAL RENDERING
    if (isInternal) {
        return (
            <Link to={app.path}>
                <motion.div {...animationProps} className={cardStyles}>
                    {CardContent}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.a
            href={app.path}
            target="_blank"
            rel="noopener noreferrer"
            {...animationProps}
            className={cardStyles}
        >
            {CardContent}
        </motion.a>
    );
};

const FollowAppsDetails = () => {
    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
    };

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

            <CleanBackground />

            <div className="relative min-h-screen bg-transparent text-gray-900 pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
                <div className="max-w-7xl mx-auto relative z-10">

                    <FluidPageHeader
                        title="Follow Our <Apps>"
                        subtitle="Connect instantly with our official channels and community platforms."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mb-12 px-8 py-4 bg-gray-50 rounded-xl shadow-inner border border-gray-200 text-center max-w-3xl mx-auto"
                    >
                        <p className="text-lg font-medium text-gray-600">
                            **Tip:** Click any card to be directed instantly to the official platform or download page.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {followAppsData.map((app, i) => (
                            <FollowAppCard key={app.id} app={app} index={i} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white text-lg font-semibold tracking-wide shadow-lg hover:bg-cyan-600 transition-all duration-300"
                        >
                            <FiChevronLeft className="mr-2 h-5 w-5" /> Back to Home Console
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default FollowAppsDetails;