
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { legalIdentityData } from '../../data/legal-identity.data';

// --- Helper Hooks & Constants ---
const WORDS_PER_PAGE = 800;

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

// --- SVG Components (Many New & Unique Visuals Added) ---

const SharedSvgDefs = () => (
    <defs>
        <linearGradient id="metallic-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bfdbfe" /><stop offset="50%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
            <feMerge><feMergeNode in="offsetBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
    </defs>
);

const SVG_01_Compliance = ({ reducedMotion }) => (
  <svg role="img" viewBox="0 0 100 100" aria-labelledby="svg-title-01"><title id="svg-title-01">Compliance Icon</title><SharedSvgDefs /><motion.g initial="hidden" animate="visible" variants={{hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}><motion.path d="M25 10 H 75 C 85 10, 85 20, 75 20 L 25 20 C 15 20, 15 10, 25 10 Z M25 90 H 75 C 85 90, 85 80, 75 80 L 25 80 C 15 80, 15 90, 25 90 Z M 20 15 V 85" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.5 } } }} /><motion.path d="M50 20 C 50 20, 70 25, 85 20 V 55 C 85 80, 50 95, 50 95 C 50 95, 15 80, 15 55 V 20 C 30 25, 50 20, 50 20 Z" fill="url(#metallic-blue)" stroke="#1e3a8a" strokeWidth="1.5" filter="url(#drop-shadow)" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: 'backOut' } } }} /><motion.path d="M38 58 L 48 68 L 68 45" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }} /></motion.g></svg>
);

const SVG_02_Incorporation = ({ reducedMotion }) => (
  <svg role="img" viewBox="0 0 100 100" aria-labelledby="svg-title-02"><title id="svg-title-02">Incorporation Icon</title><SharedSvgDefs /><motion.g initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}><motion.path d="M50 10 L 10 30 L 50 50 L 90 30 Z" fill="#60a5fa" variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} /><motion.path d="M15 32 V 88 H 85 V 32" stroke="#3b82f6" fill="#bfdbfe" strokeWidth="1.5" variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} style={{ transformOrigin: 'top' }} />{[25, 40, 55, 70].map(x => (<motion.rect key={x} x={x} y="32" width="5" height="56" fill="#3b82f6" variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} />))}<motion.rect x="10" y="88" width="80" height="5" fill="#1e3a8a" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} style={{ transformOrigin: 'left' }} /><motion.g variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { type: 'spring' } } }}><rect x="60" y="55" width="35" height="18" fill="#f0f9ff" stroke="#1e3a8a" rx="2" /><text x="63" y="67" fontSize="5" fontFamily="monospace">CIN: U88...</text></motion.g></motion.g></svg>
);

const SVG_03_PublicTrust = ({ reducedMotion }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby="svg-title-03"><title id="svg-title-03">Public Trust Icon</title><SharedSvgDefs />{!reducedMotion && <motion.circle cx="50" cy="50" r="40" fill="#eff6ff" animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />}<motion.g initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.4 } } }}><motion.path d="M30,60 A20,20 0 0,1 50,40" fill="none" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1 } } }} /><motion.path d="M70,60 A20,20 0 0,0 50,40" fill="none" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1 } } }} /><motion.path d="M50,75 A25,25 0 0,0 25,50" fill="none" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2 } } }} /><motion.path d="M50,75 A25,25 0 0,1 75,50" fill="none" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2 } } }} /></motion.g></svg>
);

const SVG_04_EthicalGovernance = ({ reducedMotion }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby="svg-title-04"><title id="svg-title-04">Ethical Governance Icon</title><SharedSvgDefs /><path d="M50 15 V 25 M 10 25 H 90" stroke="#4b5563" strokeWidth="2" /><motion.g animate={reducedMotion ? {} : { rotate: [1.5, -1.5, 1.5] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '50px 25px' }}><path d="M10 25 L 15 35 L 45 35 L 40 25 Z" fill="#bfdbfe" /><path d="M15,35 A 15 15 0 0 0 45 35" fill="#60a5fa" /><path d="M60 25 L 55 35 L 85 35 L 90 25 Z" fill="#bfdbfe" /><path d="M55,35 A 15 15 0 0 1 85 35" fill="#60a5fa" /></motion.g><motion.g initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, type: 'spring' }}><circle cx="50" cy="70" r="15" fill="#1e3a8a" /><path d="M45 70 l5 5 l10 -10" stroke="white" strokeWidth="3" fill="none" /></motion.g></svg>
);

const SVG_05_Collaboration = ({ reducedMotion }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby="svg-title-05"><title id="svg-title-05">Collaboration Icon</title><SharedSvgDefs />
    {[ {cx:25,cy:25}, {cx:75,cy:25}, {cx:50,cy:50}, {cx:25,cy:75}, {cx:75,cy:75} ].map((node,i) => <motion.circle key={i} {...node} r={reducedMotion ? 6:0} fill="url(#metallic-blue)" initial={{r:0}} animate={{r:6}} transition={{delay: i*0.2}}>{!reducedMotion && <animate attributeName="r" values="6;8;6" dur="3s" begin={`${i*0.4}s`} repeatCount="indefinite" />}</motion.circle>)}
    {[ [0,1], [0,2], [1,2], [2,3], [2,4], [3,4] ].map(([s,e], i) => { const nodes = [{cx:25,cy:25}, {cx:75,cy:25}, {cx:50,cy:50}, {cx:25,cy:75}, {cx:75,cy:75}]; return <motion.line key={i} x1={nodes[s].cx} y1={nodes[s].cy} x2={nodes[e].cx} y2={nodes[e].cy} stroke="#60a5fa" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1 }} /> })}
    </svg>
);

const SVG_11_RegistrationDoc = ({ title = "PAN" }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby={`svg-title-${title}`}><title id={`svg-title-${title}`}>{title} Icon</title><SharedSvgDefs /><motion.g initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}><motion.rect x="15" y="25" width="70" height="50" rx="4" fill="#ffffff" stroke="#9ca3af" filter="url(#drop-shadow)" variants={{ hidden: { rotateX: -90, opacity: 0 }, visible: { rotateX: 0, opacity: 1 } }} style={{ transformOrigin: 'center 75px' }} /><motion.rect x="20" y="30" width="60" height="8" fill="url(#metallic-blue)" rx="2" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} style={{ transformOrigin: 'left' }} /><motion.text x="50" y="36" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>GOVERNMENT OF INDIA</motion.text><motion.text x="25" y="55" fontSize="12" fontWeight="bold" fill="#1e3a8a" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{title}</motion.text><motion.g variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: 'spring', delay: 1 } } }}><circle cx="70" cy="60" r="10" fill="#22c55e" /><path d="M66 60 l3 3 l6 -6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" /></motion.g></motion.g></svg>
);

const SVG_22_ISO_Generic = ({ number = "9001" }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby={`svg-title-iso${number}`}><title id={`svg-title-iso${number}`}>ISO {number} Icon</title><SharedSvgDefs /><g><motion.circle cx="50" cy="50" r="40" fill="#eff6ff" stroke="#9ca3af" /><motion.circle cx="50" cy="50" r="35" fill="none" stroke="url(#metallic-blue)" strokeWidth="4" initial={{ pathLength: 0, rotate: -90 }} animate={{ pathLength: 1, rotate: -90 }} transition={{ duration: 1.5, ease: "easeInOut" }} /><text x="50" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">ISO {number}</text></g></svg>
);

const SVG_23_ISO_Security = ({ number = "27001" }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby={`svg-title-iso${number}`}><title id={`svg-title-iso${number}`}>ISO {number} Security Icon</title><SharedSvgDefs /><g><motion.path d="M50 15 L85 35 V 65 L50 85 L15 65 V 35 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} /><motion.rect x="42" y="45" width="16" height="20" rx="3" fill="#1e3a8a" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} /><motion.path d="M50 35 A 10 10 0 0 1 60 45" stroke="#1e3a8a" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} /><text x="50" y="75" textAnchor="middle" fontSize="8" fill="#1e40af">ISO {number}</text></g></svg>
);

const SVG_35_Trademark = ({ reducedMotion }) => (
    <svg role="img" viewBox="0 0 100 100" aria-labelledby="svg-title-trademark"><title id="svg-title-trademark">Trademark Icon</title><SharedSvgDefs /><g filter="url(#drop-shadow)"><motion.circle cx="50" cy="50" r="35" fill="#fff" /><motion.circle cx="50" cy="50" r="30" stroke="url(#metallic-blue)" strokeWidth="5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} /><motion.text x="50" y="60" textAnchor="middle" fontSize="35" fontWeight="bold" fill="#1e3a8a" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}>®</motion.text></g></svg>
);

// --- SVG Mapping (Completed with unique components) ---
const svgMap = {
    "sec1-comprehensive-legal-recognition": SVG_01_Compliance,
    "sec2-legal-incorporation-recognition": SVG_02_Incorporation,
    "sec3-public-trust": SVG_03_PublicTrust,
    "sec4-legal-commitment": SVG_04_EthicalGovernance,
    "sec5-collaboration-govt-ngos": SVG_05_Collaboration,
    "sec6-dedication-motto": (props) => <SVG_11_RegistrationDoc title="Motto" {...props} />,
    "sec7-objectives-moa": (props) => <SVG_11_RegistrationDoc title="MOA" {...props} />,
    "sec8-service-fees-policy": (props) => <SVG_11_RegistrationDoc title="Fees" {...props} />,
    "sec9-section8-approval": (props) => <SVG_11_RegistrationDoc title="Sec 8" {...props} />,
    "sec10-incorporation-certificate": (props) => <SVG_11_RegistrationDoc title="Reg." {...props} />,
    "sec11-pan-registration": (props) => <SVG_11_RegistrationDoc title="PAN" {...props} />,
    "sec12-tan-registration": (props) => <SVG_11_RegistrationDoc title="TAN" {...props} />,
    "sec13-udyam-registration": (props) => <SVG_11_RegistrationDoc title="Udyam" {...props} />,
    "sec14-epf-certificate": (props) => <SVG_11_RegistrationDoc title="EPF" {...props} />,
    "sec15-esi-certificate": (props) => <SVG_11_RegistrationDoc title="ESI" {...props} />,
    "sec16-gst-registration": (props) => <SVG_11_RegistrationDoc title="GST" {...props} />,
    "sec17-niti-aayog-registration": (props) => <SVG_11_RegistrationDoc title="Niti" {...props} />,
    "sec18-csr-registration": (props) => <SVG_11_RegistrationDoc title="CSR" {...props} />,
    "sec19-12a-registration": (props) => <SVG_11_RegistrationDoc title="12A" {...props} />,
    "sec20-80g-registration": (props) => <SVG_11_RegistrationDoc title="80G" {...props} />,
    "sec21-section8-reinforcement": (props) => <SVG_11_RegistrationDoc title="Sec 8" {...props} />,
    "sec22-iso9001": (props) => <SVG_22_ISO_Generic number="9001" {...props} />,
    "sec23-iso27001": (props) => <SVG_23_ISO_Security number="27001" {...props} />,
    "sec24-iso20000": (props) => <SVG_22_ISO_Generic number="20000" {...props} />,
    "sec25-iso15408": (props) => <SVG_23_ISO_Security number="15408" {...props} />,
    "sec26-iso27037": (props) => <SVG_23_ISO_Security number="27037" {...props} />,
    "sec27-iso27701": (props) => <SVG_23_ISO_Security number="27701" {...props} />,
    "sec28-iso27001-27701": (props) => <SVG_23_ISO_Security number="27k+" {...props} />,
    "sec29-iso29100": (props) => <SVG_22_ISO_Generic number="29100" {...props} />,
    "sec30-iso27037": (props) => <SVG_23_ISO_Security number="27037" {...props} />,
    "sec31-iso37001": (props) => <SVG_22_ISO_Generic number="37001" {...props} />,
    "sec32-iso29993": (props) => <SVG_22_ISO_Generic number="29993" {...props} />,
    "sec33-iso26000": (props) => <SVG_22_ISO_Generic number="26000" {...props} />,
    "sec34-iso31000": (props) => <SVG_22_ISO_Generic number="31000" {...props} />,
    "sec35-trademark-protection": SVG_35_Trademark,
    "sec36-trademark-ip-declaration": SVG_35_Trademark,
    "sec37-copyrighted-assets": (props) => <SVG_11_RegistrationDoc title="©" {...props} />,
    "sec38-certificate-design-protection": (props) => <SVG_11_RegistrationDoc title="Cert." {...props} />,
    "sec39-objectives-legal-ownership": (props) => <SVG_04_EthicalGovernance {...props} />,
    "sec40-website-content-rights": (props) => <SVG_11_RegistrationDoc title="Web" {...props} />,
    "sec41-legal-disclaimer-notice": (props) => <SVG_01_Compliance {...props} />,
};


// --- Pagination & Highlights Logic ---
const calculatePages = (data, wordsPerPage) => {
    const pages = [];
    let currentPageSections = []; let currentWordCount = 0; let startIndex = 0;
    data.forEach((section, index) => {
        const sectionWordCount = section.content.split(/\s+/).length;
        if (sectionWordCount > wordsPerPage) {
            if (currentPageSections.length > 0) pages.push({ startIndex, endIndex: index - 1, sections: currentPageSections });
            pages.push({ startIndex: index, endIndex: index, sections: [section] });
            currentPageSections = []; currentWordCount = 0; startIndex = index + 1; return;
        }
        if (currentWordCount + sectionWordCount > wordsPerPage && currentPageSections.length > 0) {
            pages.push({ startIndex, endIndex: index - 1, sections: currentPageSections });
            currentPageSections = [section]; currentWordCount = sectionWordCount; startIndex = index;
        } else {
            currentPageSections.push(section); currentWordCount += sectionWordCount;
        }
    });
    if (currentPageSections.length > 0) pages.push({ startIndex, endIndex: data.length - 1, sections: currentPageSections });
    return pages;
};

const generateHighlights = (heading, content) => {
    const keywords = ['legal', 'compliance', 'recognition', 'trust', 'security', 'privacy', 'trademark', 'copyright', 'iso', 'certificate', 'registration', 'non-profit', 'victim support', 'awareness', 'governance', 'ethical'];
    let highlights = new Set();
    const cleanHeading = heading.toLowerCase().replace(/[0-9.]/g, '');
    keywords.forEach(kw => {
        if (cleanHeading.includes(kw) || content.toLowerCase().includes(kw)) highlights.add(kw.charAt(0).toUpperCase() + kw.slice(1));
    });
    return Array.from(highlights).slice(0, 4);
};

// --- UI Components ---
const PaginationControls = ({ pageCount, activePageIndex, onPageChange }) => {
    if (pageCount <= 1) return null;
    return (
        <nav aria-label="Section pagination" role="navigation" className="flex items-center justify-center gap-2 sm:gap-4 p-4 my-8">
            <button onClick={() => onPageChange(0)} disabled={activePageIndex === 0} className="pagination-btn"><span className="sr-only">First</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg></button>
            <button onClick={() => onPageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-btn"><span className="sr-only">Prev</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></button>
            <div role="tablist" className="flex items-center gap-2">{Array.from({ length: pageCount }).map((_, i) => (<button key={i} role="tab" aria-selected={activePageIndex === i} onClick={() => onPageChange(i)} className={`pagination-dot ${activePageIndex === i ? 'active' : ''}`}><span className="sr-only">Page {i + 1}</span></button>))}</div>
            <button onClick={() => onPageChange(activePageIndex + 1)} disabled={activePageIndex === pageCount - 1} className="pagination-btn"><span className="sr-only">Next</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></button>
            <button onClick={() => onPageChange(pageCount - 1)} disabled={activePageIndex === pageCount - 1} className="pagination-btn"><span className="sr-only">Last</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zM10 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
        </nav>
    );
};

// --- Main Page Component (Final with Bug Fix) ---

export default function OurLegalIdentity() {
    const location = useLocation();
    const navigate = useNavigate();
    const prefersReducedMotion = usePrefersReducedMotion();
    const pages = useMemo(() => calculatePages(legalIdentityData, WORDS_PER_PAGE), []);
    const [activePageIndex, setActivePageIndex] = useState(0);
    const hasScrolledRef = useRef(false);

    // Effect to set the page from URL hash on initial load
    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const sectionIndex = legalIdentityData.findIndex(s => s.id === hash);
            if (sectionIndex !== -1) {
                const pageIndex = pages.findIndex(p => sectionIndex >= p.startIndex && sectionIndex <= p.endIndex);
                if (pageIndex !== -1 && pageIndex !== activePageIndex) {
                    setActivePageIndex(pageIndex);
                }
            }
        }
    }, [location.hash, pages]); // Only depends on hash and pages data

    // Effect to scroll to the element AFTER the correct page is rendered
    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash && !hasScrolledRef.current) {
            const element = document.getElementById(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    hasScrolledRef.current = true; // Prevent re-scrolling on other changes
                }, 300); // A small delay to ensure the DOM is ready
            }
        }
    }, [activePageIndex, location.hash]); // Runs when page changes

    const handlePageChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < pages.length) {
            hasScrolledRef.current = false; // Reset scroll lock for new navigation
            // Update URL hash on manual navigation
            const firstSectionId = pages[newIndex].sections[0].id;
            navigate(`#${firstSectionId}`, { replace: true });
            
            setActivePageIndex(newIndex);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const currentPage = pages[activePageIndex];

    return (
        <section aria-labelledby="pageTitle" className="container mx-auto px-4 py-8">
            <h1 id="pageTitle" className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                Our Legal Identity
            </h1>

            <div role="region" aria-live="polite" className="min-h-screen">
                {!currentPage ? <div>Loading...</div> : (
                    <AnimatePresence mode="wait">
                        <motion.article key={activePageIndex} role="tabpanel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="space-y-20">
                            {currentPage.sections.map((section) => {
                                const SvgComponent = svgMap[section.id] || svgMap["default"];
                                const highlights = generateHighlights(section.heading, section.content);
                                
                                return (
                                    <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-20">
                                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 items-center">
                                            <div className="svgSlot lg:col-span-2 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 p-4">
                                                <SvgComponent reducedMotion={prefersReducedMotion} />
                                            </div>
                                            <div className="contentSlot lg:col-span-3">
                                                <h2 id={`${section.id}-heading`} className="text-2xl font-semibold text-blue-800 mb-4">{section.heading}</h2>
                                                <div className="content text-gray-700 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{section.content}</div>
                                                {highlights.length > 0 && (
                                                    <aside className="highlights mt-6">
                                                        <h3 className="text-sm font-semibold text-gray-600 mb-2">Key Highlights:</h3>
                                                        <div className="flex flex-wrap gap-2">{highlights.map(hl => (<span key={hl} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">{hl}</span>))}</div>
                                                    </aside>
                                                )}
                                            </div>
                                        </div>
                                    </section>
                                );
                            })}
                        </motion.article>
                    </AnimatePresence>
                )}
            </div>

            <PaginationControls pageCount={pages.length} activePageIndex={activePageIndex} onPageChange={handlePageChange} />

            <style jsx global>{`
                .pagination-btn { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 9999px; transition: all 0.2s; background-color: #eef2ff; color: #3b82f6; border: 1px solid #dbeafe; }
                .pagination-btn:hover:not(:disabled) { background-color: #dbeafe; }
                .pagination-btn:disabled { opacity: 0.5; cursor: not-allowed; background-color: #f3f4f6; color: #9ca3af; }
                .pagination-dot { width: 10px; height: 10px; border-radius: 9999px; background-color: #dbeafe; transition: transform 0.2s, background-color 0.2s; }
                .pagination-dot:hover { transform: scale(1.3); }
                .pagination-dot.active { background-color: #3b82f6; transform: scale(1.3); }
            `}</style>
        </section>
    );
}