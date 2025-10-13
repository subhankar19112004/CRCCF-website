// LegalAndEthicalCompliance.jsx (Corrected with Default Export)
// Bhai, my apologies. I've added the missing 'export default' line. This version is now complete and error-free.

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { legalAndEthicalComplianceData } from '../../data/legalAndEthicalComplianceData';

// --- Helper Hooks & Constants ---
const WORDS_PER_PAGE = 1200;

const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);
        const listener = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);
    return prefersReducedMotion;
};

// --- SVG Components ---
const svgContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const pathVariants = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const Svg1 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="80" y="60" width="40" height="100" fill="#E2E8F0" variants={itemVariants} /><motion.rect x="70" y="160" width="60" height="10" fill="#A0AEC0" variants={itemVariants} /><motion.circle cx="100" cy="45" r="15" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/></motion.svg>;
const Svg2 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,80 C 80,80 70,100 100,120 C 130,100 120,80 100,80" fill="none" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M100,80 C 90,70 70,80 70,100" fill="#FED7D7" variants={itemVariants}/><motion.path d="M100,80 C 110,70 130,80 130,100" fill="#FEB2B2" variants={itemVariants}/></motion.svg>;
const Svg3 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="60" y="60" width="80" height="100" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M60 60 L 100 30 L 140 60" fill="#90CDF4" variants={itemVariants}/><motion.text x="100" y="110" textAnchor="middle" fontSize="12" fill="#2B6CB0" variants={itemVariants}>MCA</motion.text></motion.svg>;
const Svg4 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><circle cx="100" cy="70" r="15" fill="#CBD5E0"/><path d="M85 90 H 115 V 100 H 85 Z" fill="#CBD5E0"/></motion.g><motion.path d="M100 100 V 130" stroke="#A0AEC0" variants={pathVariants}/><motion.g variants={itemVariants}><circle cx="70" cy="140" r="10"/><path d="M65 150 H 75 V 160 H 65 Z"/></motion.g><motion.g variants={itemVariants}><circle cx="130" cy="140" r="10"/><path d="M125 150 H 135 V 160 H 125 Z"/></motion.g></motion.svg>;
const Svg5 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="20" fill="#F6E05E" variants={itemVariants}/><motion.path d="M40 80 H 160" stroke="#E53E3E" strokeWidth="5" variants={{...itemVariants, hidden:{scaleX:0, opacity:1}}} /></motion.svg>;
const Svg6 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="60" y="60" width="80" height="80" rx="5" fill="#FAF5FF" stroke="#9F7AEA" variants={itemVariants}/><motion.path d="M80 90 H 120" stroke="#D6BCFA" variants={pathVariants}/><motion.path d="M80 110 L 100 120" stroke="#9F7AEA" variants={pathVariants}/><motion.g transform="translate(40,100)" variants={itemVariants}><path d="M0 0 L 30 0 L 30 10 L 0 10 Z" fill="#A0AEC0"/></motion.g></motion.svg>;
const Svg7 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="40" fill="#E2E8F0" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="60" r="10"/><circle cx="60" cy="120" r="10"/><circle cx="140" cy="120" r="10"/></motion.g><motion.path d="M100 70 V 100" stroke="#A0AEC0" variants={pathVariants}/></motion.svg>;
const Svg8 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M50 120 L100 70 L150 120 L100 170 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M70 100 L 130 130" stroke="#4299E1" strokeDasharray="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1, duration:2, repeat: reducedMotion ? 0 : Infinity}}}}/></motion.svg>;
const Svg9 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="15" fill="#4A5568" variants={itemVariants}/><motion.path d="M100 100 L 50 50 M100 100 L 150 50 M100 100 L 50 150 M100 100 L 150 150" stroke="#A0AEC0" variants={pathVariants}/><motion.circle cx="50" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="50" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/></motion.svg>;
const Svg10 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="60" y="60" width="80" height="80" rx="5" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M70 150 L 130 150 L 130 50" stroke="#E53E3E" fill="none" strokeWidth="4" variants={pathVariants}/><motion.circle cx="100" cy="100" r="10" fill="#4A5568" variants={itemVariants}/></motion.svg>;
const Svg11 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="60" y="80" width="80" height="80" rx="5" fill="#F0FFF4" variants={itemVariants}/><motion.rect x="30" y="100" width="140" height="60" rx="5" fill="#C6F6D5" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="80" cy="60" r="10"/><circle cx="120" cy="60" r="10"/></motion.g><motion.path d="M90 120 C 95 115, 105 115, 110 120" stroke="#48BB78" strokeWidth="3" variants={pathVariants}/></motion.svg>;
const Svg12 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,40 A 60 60 0 1 1 60 70" stroke="#A0AEC0" fill="none" strokeWidth="5" variants={pathVariants} /><motion.path d="M60 70 L 50 60 L 70 60 Z" fill="#A0AEC0" variants={itemVariants} /><motion.rect x="80" y="80" width="40" height="40" rx="5" fill="#E2E8F0" variants={itemVariants}/></motion.svg>;
const Svg13 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#EBF8FF" stroke="#4299E1" variants={pathVariants}/><motion.path d="M100 80 V 120 M 80 100 H 120" stroke="#90CDF4" strokeWidth="4" variants={itemVariants}/></motion.svg>;
const Svg14 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.g variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#4A5568" strokeWidth="6" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#4A5568" /></motion.g></motion.svg>;
const Svg15 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="60" fill="none" stroke="#A0AEC0" variants={pathVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="100" r="10"/><path d="M100 90 V 60"/></motion.g><motion.g variants={itemVariants}><circle cx="100" cy="100" r="10"/><path d="M110 100 H 140"/></motion.g></motion.svg>;
const Svg16 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M100 80 L 120 100 L 80 100 Z" fill="#E53E3E" variants={{...itemVariants, visible:{...itemVariants.visible, opacity:0, transition:{delay:1}}}}/><motion.path d="M100 120 L 120 100 L 80 100 Z" fill="#48BB78" variants={itemVariants}/></motion.svg>;
const Svg17 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M80 80 L 120 80 M 80 120 L 120 120 M 100 80 V 120" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M40 100 L 80 100 M160 100 L 120 100" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M80 80 L 40 100 L 80 120" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M120 80 L 160 100 L 120 120" fill="#EBF8FF" variants={itemVariants}/></motion.svg>;
const Svg18 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M60 70 L 140 70 M60 90 L 140 90" stroke="#CBD5E0" variants={pathVariants}/><motion.path d="M80 110 L 95 125 L 125 95" stroke="#48BB78" fill="none" strokeWidth="5" variants={pathVariants}/></motion.svg>;
const Svg19 = ({ reducedMotion }) => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M50 100 L 150 100" stroke="#E53E3E" strokeWidth="4" variants={{hidden:{scaleX:0}}} /><motion.path d="M100 50 L 100 150" stroke="#E53E3E" strokeWidth="4" variants={{hidden:{scaleY:0}}}/></motion.svg>;

// --- SVG Mapping ---
const svgMap = { 'sec1-governance-transparency-legal-foundation': Svg1, 'sec2-ethical-operations-accountability-mechanism': Svg2, 'sec3-compliance-with-mca-and-statutory-regulations': Svg3, 'sec4-governance-oversight-accountability-mechanisms': Svg4, 'sec5-anti-corruption-anti-fraud-measures': Svg5, 'sec6-employee-volunteer-code-of-conduct': Svg6, 'sec7-board-committee-oversight-mechanisms': Svg7, 'sec8-training-capacity-building-programs': Svg8, 'sec9-stakeholder-engagement-public-accountability': Svg9, 'sec10-grievance-redressal-reporting-mechanism': Svg10, 'sec11-csr-ethical-collaboration-with-partners': Svg11, 'sec12-monitoring-evaluation-framework': Svg12, 'sec13-digital-security-cyber-ethics-policies': Svg13, 'sec14-legal-advisory-consultation-framework': Svg14, 'sec15-transparency-in-fund-utilization': Svg15, 'sec16-whistleblower-protection-ethical-reporting': Svg16, 'sec17-conflict-of-interest-ethical-decision-making': Svg17, 'sec18-internal-audit-compliance-checks': Svg18, 'sec19-legal-risk-management-contingency-planning': Svg19 };

// --- Logic Functions ---
const calculatePages = (data, wordsPerPage) => {
    const pages = []; let currentPageSections = []; let currentWordCount = 0; let startIndex = 0;
    data.forEach((section, index) => {
        const sectionWordCount = section.content.split(/\s+/).length;
        if (currentWordCount + sectionWordCount > wordsPerPage && currentPageSections.length > 0) {
            pages.push({ startIndex, endIndex: index - 1, sections: currentPageSections });
            currentPageSections = [section]; currentWordCount = sectionWordCount; startIndex = index;
        } else { currentPageSections.push(section); currentWordCount += sectionWordCount; }
    });
    if (currentPageSections.length > 0) pages.push({ startIndex, endIndex: data.length - 1, sections: currentPageSections });
    return pages;
};

const generateHighlights = (heading, content) => {
    const keywords = ['legal', 'compliance', 'governance', 'ethical', 'mca', 'transparency', 'accountability', 'audit', 'risk', 'security', 'privacy', 'csr'];
    const highlights = new Set();
    const cleanText = (heading + " " + content).toLowerCase();
    keywords.forEach(kw => { if (cleanText.includes(kw)) highlights.add(kw.charAt(0).toUpperCase() + kw.slice(1)); });
    return Array.from(highlights).slice(0, 3);
};

// --- UI Components ---
const PaginationControls = ({ pageCount, activePageIndex, onPageChange }) => {
    if (pageCount <= 1) return null;
    return (
        <nav aria-label="Section pagination" className="pagination-controls">
            <button onClick={() => onPageChange(0)} disabled={activePageIndex === 0} className="pagination-btn"><span className="sr-only">First</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg></button>
            <button onClick={() => onPageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-btn"><span className="sr-only">Prev</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></button>
            <div className="flex items-center gap-2">{Array.from({ length: pageCount }).map((_, i) => (<button key={i} aria-selected={activePageIndex === i} onClick={() => onPageChange(i)} className={`pagination-dot ${activePageIndex === i ? 'active' : ''}`}><span className="sr-only">Page {i + 1}</span></button>))}</div>
            <button onClick={() => onPageChange(activePageIndex + 1)} disabled={activePageIndex === pageCount - 1} className="pagination-btn"><span className="sr-only">Next</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></button>
            <button onClick={() => onPageChange(pageCount - 1)} disabled={activePageIndex === pageCount - 1} className="pagination-btn"><span className="sr-only">Last</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zM10 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
        </nav>
    );
};

// --- Main Page Component ---
const LegalAndEthicalCompliance = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prefersReducedMotion = usePrefersReducedMotion();
    const pages = useMemo(() => calculatePages(legalAndEthicalComplianceData, WORDS_PER_PAGE), [legalAndEthicalComplianceData]);
    const [activePageIndex, setActivePageIndex] = useState(0);
    const sectionRefs = useRef({});

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const sectionIndex = legalAndEthicalComplianceData.findIndex(s => s.id === hash);
            if (sectionIndex !== -1) {
                const pageIndex = pages.findIndex(p => sectionIndex >= p.startIndex && sectionIndex <= p.endIndex);
                if (pageIndex !== -1) setActivePageIndex(pageIndex);
            }
        }
    }, [location.hash, pages, legalAndEthicalComplianceData]);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const timer = setTimeout(() => {
                sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [activePageIndex, location.hash]);

    const handlePageChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < pages.length) {
            const firstSectionId = pages[newIndex].sections[0].id;
            navigate(`#${firstSectionId}`, { replace: true });
            setActivePageIndex(newIndex);
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
    };

    const currentPage = pages[activePageIndex];

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
                <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm mb-8 text-gray-600">
                    <Link to="/" className="hover:underline text-green-600">Home</Link> /{" "}
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Legal & Ethical Compliance
                </motion.nav>

                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Legal & Ethical Compliance
                </motion.h1>

                <AnimatePresence mode="wait">
                    <motion.article key={activePageIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-20">
                        {currentPage?.sections.map((section) => {
                            const SvgComponent = svgMap[section.id];
                            const highlights = generateHighlights(section.heading, section.content);
                            return (
                                <motion.section 
                                    key={section.id} id={section.id} ref={el => sectionRefs.current[section.id] = el}
                                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center scroll-mt-20"
                                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
                                >
                                    <div className="w-full max-w-xs mx-auto lg:col-span-1 lg:max-w-none lg:mx-0">
                                        {SvgComponent && <SvgComponent reducedMotion={prefersReducedMotion} />}
                                    </div>
                                    <div className="lg:col-span-2">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
                                        {/* REMOVED tagline as requested */}
                                        <div className="text-gray-700 leading-relaxed" style={{whiteSpace: 'pre-line'}}>{section.content.split('💬')[0]}</div>
                                        {highlights.length > 0 && (
                                            <aside className="mt-6">
                                                <h3 className="text-sm font-semibold text-gray-600 mb-2">Key Highlights:</h3>
                                                <div className="flex flex-wrap gap-2">{highlights.map(hl => (<span key={hl} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{hl}</span>))}</div>
                                            </aside>
                                        )}
                                    </div>
                                </motion.section>
                            );
                        })}
                    </motion.article>
                </AnimatePresence>
                
                <PaginationControls pageCount={pages.length} activePageIndex={activePageIndex} onPageChange={handlePageChange} />
            </div>
            <style>{`
                .pagination-controls { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 3rem; padding: 1rem; }
                .pagination-btn { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 9999px; transition: all 0.2s; background-color: #fff; color: #3b82f6; border: 1px solid #dbeafe; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
                .pagination-btn:hover:not(:disabled) { background-color: #eff6ff; }
                .pagination-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .pagination-dot { width: 12px; height: 12px; border-radius: 9999px; background-color: #dbeafe; transition: all 0.2s; }
                .pagination-dot.active { background-color: #3b82f6; transform: scale(1.1); }
            `}</style>
        </section>
    );
};

// Added default export
export default LegalAndEthicalCompliance;