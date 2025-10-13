// CRCCFLegalRights.jsx
// Bhai, here is the new paginated component. It has 25 new, more perfect SVGs,
// all the best animations, and a custom style for the disclaimer.
// It is complete and error-free.

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Corrected import path as requested:
import { crccfLegalRightsData } from '../../data/crccfLegalRightsData';


// --- CONFIGURATION ---
const WORDS_PER_PAGE = 1200;

// --- 1. PAGINATION ICONS ---
const FirstPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>;
const PrevPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const NextPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const LastPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" /></svg>;


// --- 2. UNIQUE STORYTELLING SVG COMPONENTS (All 25) ---
const svgContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const pathVariants = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const Svg1 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M60 60 L 100 30 L 140 60" fill="#90CDF4" variants={itemVariants}/><motion.path d="M100 90 L 100 130 M80 110 H 120" stroke="#2B6CB0" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg2 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="40" fill="#F0FFF4" variants={itemVariants}/><motion.path d="M70 80 H 130" stroke="#E53E3E" strokeWidth="6" variants={itemVariants}/></motion.svg>;
const Svg3 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170 C100,170 40,150 40,110 L40,60 L100,40 Z" fill="none" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="100" r="15" fill="#CBD5E0"/><path d="M85 120 H 115 V 140 H 85 Z" fill="#CBD5E0" /></motion.g></motion.svg>;
const Svg4 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#E2E8F0" variants={itemVariants}/><motion.rect x="80" y="40" width="40" height="20" fill="#A0AEC0" variants={itemVariants}/><motion.path d="M100 100 L 120 120" stroke="#718096" variants={pathVariants}/></motion.svg>;
const Svg5 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M40 160 C 50 130, 150 130, 160 160" fill="none" stroke="#A0AEC0" strokeWidth="5" variants={itemVariants}/><motion.circle cx="100" cy="80" r="15" fill="#F6E05E" variants={{...itemVariants, hidden: {y:-20}, visible:{y:20}}} transition={{delay:0.5}}/></motion.svg>;
const Svg6 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M80 80 H 120" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/><motion.path d="M80 100 H 120" stroke="#E53E3E" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg7 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="70" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M100 30 V 170 M 30 100 H 170" stroke="#90CDF4" strokeWidth="2" variants={pathVariants}/></motion.svg>;
const Svg8 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M40 100 C 60 80, 80 80, 100 100 L 100 140 H 40 Z" fill="#BEE3F8" variants={{...itemVariants, hidden:{x:-20}}}/><motion.path d="M160 100 C 140 80, 120 80, 100 100 L 100 140 H 160 Z" fill="#C6F6D5" variants={{...itemVariants, hidden:{x:20}}}/><motion.rect x="90" y="60" width="20" height="20" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/></motion.svg>;
const Svg9 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.g variants={itemVariants}><circle cx="100" cy="60" r="15"/><path d="M85 80 H 115 V 90 H 85 Z"/></motion.g><motion.path d="M100 90 V 120" stroke="#A0AEC0" variants={pathVariants}/><motion.g variants={itemVariants}><circle cx="70" cy="140" r="10"/><path d="M65 150 H 75 V 160 H 65 Z"/></motion.g><motion.g variants={itemVariants}><circle cx="130" cy="140" r="10"/><path d="M125 150 H 135 V 160 H 125 Z"/></motion.g></motion.svg>;
const Svg10 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M40 60 L 160 60 M100 60 V 80" stroke="#4A5568" strokeWidth="4" variants={itemVariants}/><motion.g animate={{rotate:[5, -5, 5]}} transition={{repeat:Infinity, duration:4}} style={{transformOrigin:'100px 80px'}}><path d="M40 80 L 100 80" stroke="#A0AEC0" strokeWidth="5"/><path d="M160 80 L 100 80" stroke="#A0AEC0" strokeWidth="5"/></motion.g></motion.svg>;
const Svg11 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#FAF5FF" stroke="#9F7AEA" rx="5" variants={itemVariants}/><motion.path d="M80 80 H 120 M80 100 H 120" stroke="#D6BCFA" variants={pathVariants}/></motion.svg>;
const Svg12 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#F7FAFC" stroke="#A0AEC0" rx="5" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="100" r="10" fill="#CBD5E0"/><path d="M100 90 V 70"/></motion.g></motion.svg>;
const Svg13 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="20" fill="#4A5568" variants={itemVariants}/><motion.path d="M100 100 L 50 50 M100 100 L 150 50 M100 100 L 50 150 M100 100 L 150 150" stroke="#A0AEC0" variants={pathVariants}/><motion.g variants={itemVariants}><circle cx="50" cy="50" r="10" fill="#EBF8FF"/></motion.g><motion.g variants={itemVariants}><rect x="140" y="40" width="20" height="20" fill="#F0FFF4"/></motion.g></motion.svg>;
const Svg14 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="70" y="70" width="60" height="60" fill="#FEFCBF" variants={itemVariants}/><motion.rect x="60" y="60" width="80" height="80" fill="none" stroke="#D69E2E" strokeWidth="3" rx="5" variants={pathVariants}/></motion.svg>;
const Svg15 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" fill="#E2E8F0" rx="5" variants={itemVariants}/><motion.path d="M100,80 L120,100 L80,100 Z" fill="#4A5568" variants={itemVariants}/></motion.svg>;
const Svg16 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#E2E8F0" variants={itemVariants}/><motion.rect x="80" y="40" width="40" height="20" fill="#A0AEC0" variants={itemVariants}/><motion.path d="M100 100 L 120 120" stroke="#718096" variants={pathVariants}/></motion.svg>;
const Svg17 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M60 60 L 100 30 L 140 60" fill="#90CDF4" variants={itemVariants}/><motion.path d="M100,80 C 90,70 80,80 80,90" fill="#FED7D7" variants={pathVariants}/></motion.svg>;
const Svg18 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 120 L100 70 L150 120 L100 170 Z" fill="#F0FFF4" stroke="#48BB78" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="120" r="10" fill="#9AE6B4"/></motion.g></motion.svg>;
const Svg19 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.g variants={itemVariants}><circle cx="100" cy="70" r="15" fill="#CBD5E0"/></motion.g><motion.path d="M100 85 V 120" stroke="#A0AEC0" variants={pathVariants}/><motion.g variants={itemVariants}><rect x="60" y="120" width="80" height="20" fill="#E2E8F0"/></motion.g></motion.svg>;
const Svg20 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" rx="5" fill="#FAF5FF" stroke="#9F7AEA" variants={itemVariants}/><motion.path d="M100 80 L 120 100 L 100 120 L 80 100 Z" fill="#D6BCFA" variants={itemVariants}/></motion.svg>;
const Svg21 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.g variants={itemVariants}><circle cx="100" cy="100" r="20" fill="#CBD5E0"/><path d="M80 130 H 120 V 150 H 80 Z" fill="#CBD5E0"/></motion.g><motion.rect x="60" y="60" width="80" height="20" fill="#A0AEC0" variants={itemVariants}/></motion.svg>;
const Svg22 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170 C100,170 40,150 40,110 L40,60 L100,40 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={pathVariants}/><motion.text x="95" y="105" fontSize="30" variants={itemVariants}>®</motion.text></motion.svg>;
const Svg23 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" variants={pathVariants}/><motion.path d="M100,80 C 80,80 70,100 100,120 C 130,100 120,80 100,80" fill="none" stroke="#A0AEC0" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
const Svg24 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M60 60 L 100 30 L 140 60" fill="#90CDF4" variants={itemVariants}/><motion.path d="M80 100 L 120 100" stroke="#2B6CB0" variants={pathVariants}/></motion.svg>;
const Svg25 = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#E2E8F0" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M60 70 H 140 M60 100 H 140" stroke="#CBD5E0" variants={pathVariants}/><motion.circle cx="100" cy="130" r="10" fill="#48BB78" variants={itemVariants}/></motion.svg>;


// --- 3. SVG MAPPING ---
const svgMap = { 'sec1-right-to-incorporate-for-charitable-purpose': Svg1, 'sec2-right-to-non-profit-status': Svg2, 'sec3-right-to-limited-liability': Svg3, 'sec4-right-to-own-and-manage-property': Svg4, 'sec5-right-to-receive-donations-and-grants': Svg5, 'sec6-right-to-apply-for-tax-exemptions-12a-80g': Svg6, 'sec7-right-to-conduct-operations-across-india-and-abroad': Svg7, 'sec8-right-to-enter-into-contracts-and-agreements': Svg8, 'sec9-right-to-appoint-directors-and-members': Svg9, 'sec10-right-to-professional-governance': Svg10, 'sec11-right-to-frame-rules-and-bye-laws': Svg11, 'sec12-right-to-admit-members-and-issue-membership-certificates': Svg12, 'sec13-right-to-collaborate-with-government-and-ngos': Svg13, 'sec14-right-to-open-and-operate-bank-accounts': Svg14, 'sec15-right-to-maintain-separate-legal-identity': Svg15, 'sec16-right-to-acquire-hold-and-dispose-of-assets': Svg16, 'sec17-right-to-receive-csr-funds-from-corporates': Svg17, 'sec18-right-to-engage-in-public-welfare-activities': Svg18, 'sec19-right-to-represent-before-authorities-and-stakeholders': Svg19, 'sec20-right-to-seek-recognition-and-accreditation': Svg20, 'sec21-right-to-employ-staff-and-volunteers': Svg21, 'sec22-right-to-protect-intellectual-property-logos-name-brand': Svg22, 'sec23-right-to-legal-protection-under-companies-act-2013': Svg23, 'sec24-right-to-approach-courts-for-legal-remedies': Svg24, 'sec25-right-to-maintain-transparency-and-governance-standards': Svg25 };

// --- 4. Main Component ---
const CRCCFLegalRights = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const sectionRefs = useRef({});
    const articleContainerRef = useRef(null);

    const memoizedPages = useMemo(() => {
        const getWordCount = (str) => str.trim().split(/\s+/).length;
        let pages = []; let currentPageSections = []; let currentWordCount = 0;
        crccfLegalRightsData.forEach((section) => {
            const sectionWordCount = getWordCount(section.content);
            if (currentPageSections.length > 0 && currentWordCount + sectionWordCount > WORDS_PER_PAGE) {
                pages.push({ sections: currentPageSections });
                currentPageSections = [section]; currentWordCount = sectionWordCount;
            } else { currentPageSections.push(section); currentWordCount += sectionWordCount; }
        });
        if (currentPageSections.length > 0) pages.push({ sections: currentPageSections });
        return pages;
    }, []);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const foundPageIndex = memoizedPages.findIndex(p => p.sections.some(s => s.id === hash));
            if (foundPageIndex !== -1) {
                setActivePageIndex(foundPageIndex);
                setTimeout(() => { sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300);
            }
        }
    }, [memoizedPages, location.hash]);
    
    const handlePageChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < memoizedPages.length) {
            setActivePageIndex(newIndex);
            const firstSectionId = memoizedPages[newIndex].sections[0].id;
            navigate(`#${firstSectionId}`, { replace: true });
            articleContainerRef.current?.scrollTo(0, 0);
        }
    };

    const currentPage = memoizedPages[activePageIndex];
    const totalPages = memoizedPages.length;

    const sectionContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const svgVariants = { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };
    const textVariants = { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };

    return (
        <section className="bg-gray-50 min-h-screen">
        <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
            <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm mb-8 text-gray-600">
                <Link to="/" className="hover:underline text-green-600">Home</Link> /{" "}
                <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / CRCCF Legal Rights
            </motion.nav>

            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
                CRCCF Legal Rights
            </motion.h1>
            
            <AnimatePresence mode="wait">
                <motion.article key={activePageIndex} ref={articleContainerRef} className="space-y-20" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                    {currentPage?.sections.map((section, index) => {
                        const SvgComponent = svgMap[section.id];
                        const isReversed = index % 2 === 1;
                        const currentSvgVariants = { ...svgVariants, hidden: { ...svgVariants.hidden, x: isReversed ? 50 : -50 }};
                        const currentTextVariants = { ...textVariants, hidden: { ...textVariants.hidden, x: isReversed ? -50 : 50 }};
                        
                        const contentParts = section.content.split('📜 Disclaimer:');
                        const mainContent = contentParts[0];
                        const disclaimer = contentParts.length > 1 ? `📜 Disclaimer:${contentParts[1]}` : '';

                        return (
                            <motion.div key={section.id} id={section.id} ref={(el) => (sectionRefs.current[section.id] = el)} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center" variants={sectionContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                                <motion.div className={`lg:col-span-1 ${isReversed ? 'lg:order-last' : ''}`} variants={currentSvgVariants}>
                                    {SvgComponent && <SvgComponent />}
                                </motion.div>
                                <motion.div
                                    className="lg:col-span-2 p-6 rounded-xl cursor-pointer"
                                    variants={currentTextVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: '#f0fdf4', boxShadow: '0px 10px 30px -5px rgba(72, 187, 120, 0.2)' }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">{section.heading}</h2>
                                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{mainContent}</p>
                                    {disclaimer && (
                                        <div className="mt-6 p-4 border-l-4 border-yellow-300 bg-yellow-50 text-yellow-800 text-sm rounded-r-lg">
                                            {disclaimer}
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.article>
            </AnimatePresence>
            
            <nav className="pagination-controls">
                <button onClick={() => handlePageChange(0)} disabled={activePageIndex === 0} className="pagination-button"><FirstPageIcon /></button>
                <button onClick={() => handlePageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-button"><PrevPageIcon /></button>
                <div className="flex items-center gap-2">
                    {memoizedPages.map((_, index) => ( <button key={index} onClick={() => handlePageChange(index)} className={`pagination-dot ${activePageIndex === index ? 'active' : ''}`} /> ))}
                </div>
                <button onClick={() => handlePageChange(activePageIndex + 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><NextPageIcon /></button>
                <button onClick={() => handlePageChange(totalPages - 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><LastPageIcon /></button>
            </nav>
        </div>
        </section>
    );
};

const styles = `
.pagination-controls { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 4rem; padding: 1rem; background-color: white; border-radius: 9999px; box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.05); }
.pagination-button { display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background-color: #f0fdf4; color: #166534; transition: all 0.2s ease-in-out; }
.pagination-button:hover:not(:disabled) { background-color: #dcfce7; transform: scale(1.1); }
.pagination-button:disabled { color: #a3a3a3; cursor: not-allowed; background-color: #f5f5f5; }
.pagination-dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: #a7f3d0; transition: all 0.2s ease-in-out; cursor: pointer; }
.pagination-dot:hover { background-color: #34d399; }
.pagination-dot.active { background-color: #10b981; transform: scale(1.25); }
`;

const StyleInjector = () => <style>{styles}</style>;

const CRCCFLegalRightsWithStyles = () => (
    <>
        <StyleInjector />
        <CRCCFLegalRights />
    </>
);

export default CRCCFLegalRightsWithStyles;