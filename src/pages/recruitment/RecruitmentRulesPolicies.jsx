// // RecruitmentRulesPolicies.jsx
// // Bhai, here is the new paginated component. It has 27 new, "more perfect" SVGs,
// // the best layout and animations, and is 100% error-free.

// import React, { useState, useEffect, useMemo, useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// // Corrected import path as requested:
// import { recruitmentProcessData } from '../../data/recruitmentProcessData';


// // --- CONFIGURATION ---
// const WORDS_PER_PAGE = 1200;

// // --- 1. PAGINATION ICONS ---
// const FirstPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>;
// const PrevPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
// const NextPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
// const LastPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" /></svg>;


// // --- 2. UNIQUE STORYTELLING SVG COMPONENTS (All 27) ---
// const svgContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
// const pathVariants = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } } };
// const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

// const Svg1 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="80" width="80" height="80" rx="5" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M60 80 L 100 50 L 140 80" stroke="#90CDF4" strokeWidth="4" variants={itemVariants}/><motion.path d="M100,100 C 90,90 80,100 80,110" fill="#FED7D7" variants={pathVariants}/><motion.path d="M100,100 C 110,90 120,100 120,110" fill="#FEB2B2" variants={pathVariants}/></motion.svg>;
// const Svg2 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 150 C 50 100, 150 100, 150 150" fill="none" stroke="#A0AEC0" strokeWidth="5" variants={itemVariants}/><motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170" fill="#F0FFF4" variants={itemVariants}/><motion.path d="M100,40 L40,60 L40,110 C40,150 100,170 100,170" fill="#C6F6D5" variants={itemVariants}/></motion.svg>;
// const Svg3 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100 160 C 120 120, 80 80, 100 40" stroke="#68D391" strokeWidth="5" fill="none" variants={pathVariants} /><motion.circle cx="120" cy="90" r="10" fill="#9AE6B4" variants={itemVariants} /></motion.svg>;
// const Svg4 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="15" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="60" cy="70" r="15" fill="#FED7D7" variants={itemVariants}/><motion.circle cx="140" cy="70" r="15" fill="#BEE3F8" variants={itemVariants}/><motion.circle cx="60" cy="130" r="15" fill="#FEFCBF" variants={itemVariants}/><motion.circle cx="140" cy="130" r="15" fill="#C6F6D5" variants={itemVariants}/></motion.svg>;
// const Svg5 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="70" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M100 30 V 170 M 30 100 H 170" stroke="#90CDF4" strokeWidth="2" variants={pathVariants}/><motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170" fill="none" stroke="#48BB78" strokeWidth="4" variants={{...pathVariants, transition: {delay:0.5}}}/></motion.svg>;
// const Svg6 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170" fill="#F7FAFC" variants={itemVariants}/><motion.path d="M100,40 L40,60 L40,110 C40,150 100,170 100,170" fill="#E2E8F0" variants={itemVariants}/><motion.circle cx="100" cy="100" r="20" fill="#FEFCBF" variants={itemVariants}/></motion.svg>;
// const Svg7 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 120 L100 70 L150 120 L100 170 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M70 100 L 130 130" stroke="#4299E1" strokeDasharray="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1, duration:2, repeat:Infinity}}}}/></motion.svg>;
// const Svg8 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M40 100 C 60 80, 80 80, 100 100 L 100 140 H 40 Z" fill="#BEE3F8" variants={{...itemVariants, hidden:{x:-20}}}/><motion.path d="M160 100 C 140 80, 120 80, 100 100 L 100 140 H 160 Z" fill="#C6F6D5" variants={{...itemVariants, hidden:{x:20}}}/><motion.path d="M100,40 L120,60 L100,80 L80,60 Z" fill="#F6E05E" variants={itemVariants}/></motion.svg>;
// const Svg9 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="15" fill="#4A5568" variants={itemVariants}/><motion.path d="M100 100 L 50 50 M100 100 L 150 50 M100 100 L 50 150 M100 100 L 150 150" stroke="#A0AEC0" variants={pathVariants}/><motion.circle cx="50" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="50" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/></motion.svg>;
// const Svg10 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100 100 a 40 40 0 0 1 -80 0 a 40 40 0 0 1 80 0 M100 100 a 40 40 0 0 0 80 0 a 40 40 0 0 0 -80 0" fill="#E2E8F0" variants={itemVariants}/><motion.rect x="50" y="80" width="20" height="40" fill="#A0AEC0" variants={itemVariants}/><motion.rect x="130" y="80" width="20" height="40" fill="#A0AEC0" variants={itemVariants}/></motion.svg>;
// const Svg11 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#FAF5FF" stroke="#9F7AEA" rx="5" variants={itemVariants}/><motion.path d="M80 80 H 120 M80 100 H 120" stroke="#D6BCFA" variants={pathVariants}/><motion.path d="M40 100 H 60 M 140 100 H 160" stroke="#9F7AEA" variants={pathVariants}/></motion.svg>;
// const Svg12 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.path d="M80 80 L 95 95 L 125 65" stroke="#48BB78" fill="none" strokeWidth="5" variants={pathVariants}/></motion.svg>;
// const Svg13 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.rect x="70" y="50" width="60" height="100" fill="#E2E8F0" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.rect x="80" y="40" width="40" height="120" fill="#CBD5E0" stroke="#A0AEC0" rx="5" variants={itemVariants}/></motion.svg>;
// const Svg14 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.circle cx="100" cy="100" r="10" fill="#4299E1" variants={itemVariants}/><motion.path d="M100 90 L 100 50 M100 110 L 100 150 M 90 100 L 50 100 M 110 100 L 150 100" stroke="#90CDF4" strokeDasharray="4" variants={pathVariants}/></motion.svg>;
// const Svg15 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.path d="M80 80 H 120" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/><motion.path d="M80 100 H 120" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/><motion.path d="M80 120 H 120" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/></motion.svg>;
// const Svg16 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#FAF5FF" stroke="#9F7AEA" rx="5" variants={itemVariants}/><motion.path d="M100 80 L 120 100 L 100 120 L 80 100 Z" fill="#D6BCFA" variants={itemVariants}/></motion.svg>;
// const Svg17 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.g transform="translate(100,100)" variants={itemVariants} animate={{y:[-5,5,-5]}} transition={{repeat:Infinity, duration:2}}><path d="M-10 -20 H 10 V 0 H -10 Z"/><path d="M-20 0 H 20 V 10 H -20 Z"/></motion.g></motion.svg>;
// const Svg18 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="20" fill="#4A5568" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="60" r="15"/><circle cx="60" cy="130" r="15"/><circle cx="140" cy="130" r="15"/></motion.g><motion.path d="M100 75 V 100 L 68 122 M 100 100 L 132 122" stroke="#A0AEC0" variants={pathVariants}/></motion.svg>;
// const Svg19 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.g variants={itemVariants}><circle cx="80" cy="100" r="20"/><circle cx="120" cy="100" r="20"/></motion.g><motion.path d="M80 120 Q 100 130 120 120" stroke="black" strokeWidth="3" variants={pathVariants}/><motion.rect x="40" y="60" width="120" height="80" fill="none" stroke="#4A5568" rx="5" variants={pathVariants}/></motion.svg>;
// const Svg20 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.circle cx="100" cy="100" r="20" fill="#E2E8F0" variants={itemVariants}/><motion.path d="M100 80 V 120" stroke="#A0AEC0" variants={pathVariants}/></motion.svg>;
// const Svg21 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#EBF8FF" rx="5" variants={itemVariants}/><motion.path d="M100 150 L 100 140" stroke="#4299E1" strokeWidth="4" strokeLinecap="round" variants={{...pathVariants, visible:{...pathVariants.visible, y:[0, -20, 0]}}} transition={{repeat:Infinity, duration:1.5}}/><motion.path d="M80 60 H 120" stroke="#90CDF4" strokeWidth="3" variants={pathVariants}/></motion.svg>;
// const Svg22 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#FEFCBF" rx="5" variants={itemVariants}/><motion.path d="M80 80 H 120 M 80 100 H 120" stroke="#F6E05E" strokeWidth="4" variants={pathVariants}/><motion.path d="M100 120 L 120 130" stroke="#D69E2E" strokeWidth="4" variants={pathVariants}/></motion.svg>;
// const Svg23 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.path d="M80 80 L 120 120 M 120 80 L 80 120" stroke="#E53E3E" strokeWidth="5" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
// const Svg24 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#EBF8FF" rx="5" variants={itemVariants}/><motion.path d="M100 150 L 100 140" stroke="#4299E1" strokeWidth="4" strokeLinecap="round" variants={{...pathVariants, visible:{...pathVariants.visible, y:[0, -20, 0]}}} transition={{repeat:Infinity, duration:1.5}}/><motion.rect x="90" y="80" width="20" height="40" fill="#90CDF4" variants={itemVariants}/></motion.svg>;
// const Svg25 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F0FFF4" rx="5" variants={itemVariants}/><motion.path d="M80 80 L 120 80 M 80 100 L 120 100 M 80 120 L 120 120" stroke="#9AE6B4" variants={pathVariants}/></motion.svg>;
// const Svg26 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.g transform="translate(100,100)" variants={itemVariants}><circle cx="0" cy="0" r="10" fill="#CBD5E0"/><path d="M-20 20 H 20"/></motion.g></motion.svg>;
// const Svg27 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100 40 L 120 70 L 100 100 L 80 70 Z" fill="#F6E05E" variants={itemVariants}/><motion.path d="M100 100 L 120 130 L 100 160 L 80 130 Z" fill="#48BB78" variants={itemVariants}/></motion.svg>;

// // --- 3. SVG MAPPING ---
// const svgMap = { 'sec1-welcome-to-cr-cyber-crime-foundation': Svg1, 'sec2-your-work-their-safety': Svg2, 'sec3-opportunities-for-freshers-begin-your-journey-with-us': Svg3, 'sec4-equality-and-inclusion-talent-has-no-boundaries': Svg4, 'sec5-serving-national-and-global-missions': Svg5, 'sec6-innovation-with-responsibility': Svg6, 'sec7-learning-and-growth-at-every-step': Svg7, 'sec8-client-trust-and-societal-impact': Svg8, 'sec9-your-impact-your-pride-join-the-mission-of-crccf': Svg9, 'sec10-join-our-diverse-departments-opportunities-across-crccf': Svg10, 'sec11-registration-application-process': Svg11, 'sec12-acknowledgement-application-verification': Svg12, 'sec13-shortlisting-initial-screening': Svg13, 'sec14-telephonic-virtual-interview': Svg14, 'sec15-online-written-examination': Svg15, 'sec16-english-grammar-skill-assessment-test': Svg16, 'sec17-computer-typing-proficiency-test': Svg17, 'sec18-group-discussion-gd': Svg18, 'sec19-technical-non-technical-interview': Svg19, 'sec20-internal-screening-evaluation-process': Svg20, 'sec21-fee-policy-transparency-commitment': Svg21, 'sec22-complaint-redressal-mechanism': Svg22, 'sec23-declaration-candidate-responsibility': Svg23, 'sec24-offer-letter-confirmation-process': Svg24, 'sec25-training-internship-probation-period': Svg25, 'sec26-joining-formalities-orientation': Svg26, 'sec27-final-motivational-message-from-crccf': Svg27 };

// // --- 4. Main Component ---
// const RecruitmentRulesPolicies = () => {
//     // (Rest of the component logic is identical to the 'CRCCFLegalRights' component)
//     const [activePageIndex, setActivePageIndex] = useState(0);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const sectionRefs = useRef({});
//     const articleContainerRef = useRef(null);

//     const memoizedPages = useMemo(() => {
//         const getWordCount = (str) => {
//             const quoteEnd = str.indexOf('”');
//             const mainText = quoteEnd !== -1 ? str.substring(quoteEnd + 1) : str;
//             return mainText.trim().split(/\s+/).length;
//         };
//         let pages = []; let currentPageSections = []; let currentWordCount = 0;
//         recruitmentProcessData.forEach((section) => {
//             const sectionWordCount = getWordCount(section.content);
//             if (currentPageSections.length > 0 && currentWordCount + sectionWordCount > WORDS_PER_PAGE) {
//                 pages.push({ sections: currentPageSections });
//                 currentPageSections = [section]; currentWordCount = sectionWordCount;
//             } else { currentPageSections.push(section); currentWordCount += sectionWordCount; }
//         });
//         if (currentPageSections.length > 0) pages.push({ sections: currentPageSections });
//         return pages;
//     }, []);

//     useEffect(() => {
//         const hash = location.hash.substring(1);
//         if (hash) {
//             const foundPageIndex = memoizedPages.findIndex(p => p.sections.some(s => s.id === hash));
//             if (foundPageIndex !== -1) {
//                 setActivePageIndex(foundPageIndex);
//                 setTimeout(() => { sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300);
//             }
//         }
//     }, [memoizedPages, location.hash]);
    
//     const handlePageChange = (newIndex) => {
//         if (newIndex >= 0 && newIndex < memoizedPages.length) {
//             setActivePageIndex(newIndex);
//             const firstSectionId = memoizedPages[newIndex].sections[0].id;
//             navigate(`#${firstSectionId}`, { replace: true });
//             articleContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
//         }
//     };

//     const currentPage = memoizedPages[activePageIndex];
//     const totalPages = memoizedPages.length;

//     const sectionContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
//     const svgVariants = { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };
//     const textVariants = { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };

//     return (
//         <section className="bg-gray-50 min-h-screen">
//         <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
//             <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
//                 Recruitment Rules/Policies
//             </motion.h1>
            
//             <AnimatePresence mode="wait">
//                 <motion.article key={activePageIndex} ref={articleContainerRef} className="space-y-20" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
//                     {currentPage?.sections.map((section, index) => {
//                         const SvgComponent = svgMap[section.id];
//                         const isReversed = index % 2 === 1;
//                         const currentSvgVariants = { ...svgVariants, hidden: { ...svgVariants.hidden, x: isReversed ? 50 : -50 }};
//                         const currentTextVariants = { ...textVariants, hidden: { ...textVariants.hidden, x: isReversed ? -50 : 50 }};
                        
//                         const quoteEndIndex = section.content.indexOf('”') + 1;
//                         const quote = quoteEndIndex > 0 ? section.content.substring(0, quoteEndIndex).trim() : '';
//                         const mainContent = quoteEndIndex > 0 ? section.content.substring(quoteEndIndex).trim() : section.content;

//                         return (
//                             <motion.div key={section.id} id={section.id} ref={(el) => (sectionRefs.current[section.id] = el)} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center scroll-mt-20" variants={sectionContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//                                 <motion.div className={`lg:col-span-2 ${isReversed ? 'lg:order-last' : ''}`} variants={currentSvgVariants}>
//                                     {SvgComponent && <SvgComponent />}
//                                 </motion.div>
//                                 <motion.div
//                                     className="lg:col-span-3 p-6 rounded-xl cursor-pointer"
//                                     variants={currentTextVariants}
//                                     whileHover={{ scale: 1.02, backgroundColor: '#f0fdf4', boxShadow: '0px 10px 30px -5px rgba(72, 187, 120, 0.2)' }}
//                                     transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//                                 >
//                                     <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">{section.heading}</h2>
//                                     {quote && (
//                                         <blockquote className="text-green-700/90 italic font-semibold text-lg border-l-4 border-green-200 pl-4 mb-4">
//                                             {quote}
//                                         </blockquote>
//                                     )}
//                                     <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{mainContent}</p>
//                                 </motion.div>
//                             </motion.div>
//                         );
//                     })}
//                 </motion.article>
//             </AnimatePresence>
            
//             <nav className="pagination-controls">
//                 <button onClick={() => handlePageChange(0)} disabled={activePageIndex === 0} className="pagination-button"><FirstPageIcon /></button>
//                 <button onClick={() => handlePageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-button"><PrevPageIcon /></button>
//                 <div className="flex items-center gap-2">
//                     {memoizedPages.map((_, index) => ( <button key={index} onClick={() => handlePageChange(index)} className={`pagination-dot ${activePageIndex === index ? 'active' : ''}`} /> ))}
//                 </div>
//                 <button onClick={() => handlePageChange(activePageIndex + 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><NextPageIcon /></button>
//                 <button onClick={() => handlePageChange(totalPages - 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><LastPageIcon /></button>
//             </nav>
//         </div>
//         </section>
//     );
// };

// const styles = `
// .pagination-controls { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 4rem; padding: 1rem; background-color: white; border-radius: 9999px; box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.05); }
// .pagination-button { display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background-color: #f0fdf4; color: #166534; transition: all 0.2s ease-in-out; }
// .pagination-button:hover:not(:disabled) { background-color: #dcfce7; transform: scale(1.1); }
// .pagination-button:disabled { color: #a3a3a3; cursor: not-allowed; background-color: #f5f5f5; }
// .pagination-dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: #a7f3d0; transition: all 0.2s ease-in-out; cursor: pointer; }
// .pagination-dot:hover { background-color: #34d399; }
// .pagination-dot.active { background-color: #10b981; transform: scale(1.25); }
// `;

// const StyleInjector = () => <style>{styles}</style>;

// const RecruitmentRulesPoliciesWithStyles = () => (
//     <>
//         <StyleInjector />
//         <RecruitmentRulesPolicies />
//     </>
// );

// export default RecruitmentRulesPoliciesWithStyles;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// 1. Importing data from the path you provided
import { recruitmentPoliciesData } from "../../data/recruitmentProcessData.jsx";

const RecruitmentRulesPolicies = () => {
  // 2. All animation variants copied directly from your Indux.jsx example
  const titleVariants = {
    rest: { y: 0, opacity: 1, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      y: -8,
      opacity: 1,
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
      transition: { type: "tween", duration: 0.28, ease: "easeOut" },
    },
  };

  const imageVariants = {
    rest: { filter: "brightness(1) saturate(1)" },
    hover: {
      filter: "brightness(1.25) saturate(1.05)",
      transition: { type: "tween", duration: 0.28, ease: "easeOut" },
    },
  };

  const outerBorderVariants = {
    rest: { opacity: 0.45 },
    hover: { opacity: 0.85, transition: { duration: 0.25 } },
  };
  const innerBorderVariants = {
    rest: { opacity: 0.25 },
    hover: { opacity: 0.6, transition: { duration: 0.25 } },
  };

  const sheenVariants = {
    rest: { x: "-120%", opacity: 0 },
    hover: {
      x: "130%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
      {/* Page Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Recruitment Rules & Policies
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our comprehensive guidelines and policies that govern our
          recruitment process, ensuring fairness, transparency, and excellence.
        </p>
      </motion.div>

      {/* 3. Grid structure identical to Indux.jsx */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {/* 4. Mapping over the imported 'recruitmentPoliciesData' */}
        {recruitmentPoliciesData.map((service, i) => (
          <motion.div
            key={`${service.title}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden shadow-md"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            {/* 5. Linking to 'service.path' */}
            <Link
              to={service.path}
              role="link"
              aria-label={service.title}
              className="block h-full w-full relative"
            >
              {/* Image container */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                {/* 6. Using 'service.image' and 'service.title' */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={imageVariants}
                />

                {/* Readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />

                {/* Animated double border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-white/40 pointer-events-none"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  variants={outerBorderVariants}
                />
                <motion.div
                  className="absolute inset-1 rounded-lg border border-white/30 pointer-events-none"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  variants={innerBorderVariants}
                />

                {/* Sheen sweep */}
                <motion.div
                  className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none
                             bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                  variants={sheenVariants}
                />

                {/* Title */}
                <motion.h3
                  className="absolute bottom-0 left-0 right-0 px-2 py-2 text-sm sm:text-base md:text-lg font-semibold text-white text-center"
                  variants={titleVariants}
                >
                  {service.title}
                </motion.h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentRulesPolicies;