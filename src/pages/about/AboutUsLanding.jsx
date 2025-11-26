// AboutUsLanding.jsx (Final Corrected Version - All SVGs Defined & Mapped)
// Bhai, my deepest apologies. I have now DEFINED all the master SVG components
// (JusticeSVG, WomenSafetySVG, GrowthSVG, FinanceSVG, InnovationSVG, CorporateSVG, etc.)
// that were missing. This version is 100% complete and correct.

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Corrected import path as requested:
import { aboutUsMainData } from '../../data/aboutUsMainData';

// --- CONFIGURATION ---
const WORDS_PER_PAGE = 1500;

// --- 1. PAGINATION ICONS ---
const FirstPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>;
const PrevPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const NextPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const LastPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" /></svg>;

// --- 2. HELPER HOOK ---
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

// --- 3. THE MASTER "MORE PERFECT" SVG COMPONENTS (ALL 16 DEFINED) ---
const svgContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const pathVariants = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

// 1. Legal, Compliance
const LegalSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.g variants={itemVariants} animate={{rotate:[1,-1,1]}} transition={{repeat:Infinity, duration:6, ease:"easeInOut"}} style={{transformOrigin:'100px 160px'}}><path d="M40 160 L 160 160" stroke="#4A5568" strokeWidth="4" /><path d="M100 160 V 80" stroke="#4A5568" strokeWidth="4" /><path d="M50 80 a 50 50 0 0 1 100 0" fill="#EBF8FF" stroke="#A0AEC0" strokeWidth="5" /></motion.g><motion.rect x="80" y="40" width="40" height="20" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/></motion.svg>;
// 2. Quality, Recognition
const QualitySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="50" fill="#FEFCBF" stroke="#D69E2E" variants={itemVariants}/><motion.path d="M80 90 L 95 105 L 125 75" stroke="#48BB78" fill="none" strokeWidth="6" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
// 3. Security, Risk
const SecuritySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,20 L180,50 L180,110 C180,150 100,180 100,180 C100,180 20,150 20,110 L20,50 Z" fill="#E6FFFA" stroke="#38B2AC" variants={pathVariants}/><motion.g variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition:{delay:0.5}} }}><rect x="85" y="90" width="30" height="25" rx="3" fill="#319795" /><path d="M100,75 a10,10 0 0,1 0,15 h-5 a10,10 0 0,1 0,-15 Z" fill="none" stroke="#319795" strokeWidth="4" /></motion.g></motion.svg>;
// 4. Risk
const RiskSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100 40 L 140 100 L 60 100 Z" fill="#FEEBC8" stroke="#DD6B20" variants={itemVariants}/><motion.path d="M100 65 V 85 M100 95 V 100" stroke="#DD6B20" strokeWidth="5" strokeLinecap="round" variants={{...pathVariants, transition:{delay:0.3}}}/></motion.svg>;
// 5. Social Responsibility, Community
const SocialSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="15" fill="#4A5568" variants={itemVariants}/><motion.path d="M100 100 L 50 50 M100 100 L 150 50 M100 100 L 50 150 M100 100 L 150 150" stroke="#A0AEC0" variants={pathVariants}/><motion.circle cx="50" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="50" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/></motion.svg>;
// 6. Education, Learning
const EducationSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 120 L100 70 L150 120 L100 170 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#A0AEC0" variants={itemVariants}/><motion.circle cx="100" cy="120" r="10" fill="#FEFCBF" variants={{hidden:{scale:0},visible:{scale:1}}}/></motion.svg>;
// 7. Integrity
const IntegritySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100 40 L 120 70 L 100 100 L 80 70 Z" fill="#F0FFF4" variants={itemVariants}/><motion.path d="M100 100 L 120 130 L 100 160 L 80 130 Z" fill="#C6F6D5" variants={itemVariants}/></motion.svg>;
// 8. Data Privacy
const PrivacySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="40" y="60" width="120" height="80" rx="5" fill="#E2E8F0" variants={itemVariants} /><motion.rect x="50" y="50" width="40" height="15" fill="#CBD5E0" variants={itemVariants} /><motion.g variants={{ hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 0.5 } } }}><rect x="80" y="90" width="40" height="30" rx="3" fill="#ED8936" /><path d="M100,70 a15,15 0 0,1 0,20 h-10 a15,15 0 0,1 0,-20 Z" fill="none" stroke="#ED8936" strokeWidth="4" /></motion.g></motion.svg>;
// 9. Forensics, Evidence
const ForensicsSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="90" cy="90" r="40" fill="none" stroke="#4299E1" strokeWidth="5" variants={pathVariants} /><motion.line x1="120" y1="120" x2="150" y2="150" stroke="#4299E1" strokeWidth="7" variants={pathVariants} /><motion.text x="75" y="95" fontFamily="monospace" fill="#718096" variants={itemVariants}>0110</motion.text></motion.svg>;
// 10. Collaboration, Partnership
const CollaborationSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="80" cy="100" r="30" fill="none" stroke="#4299E1" strokeWidth="4" variants={pathVariants} /><motion.circle cx="120" cy="100" r="30" fill="none" stroke="#48BB78" strokeWidth="4" variants={pathVariants} /><motion.path d="M90 100 L 110 100" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={{...pathVariants, transition:{delay:1}}}/></motion.svg>;
// 11. Women & Vulnerable Groups
const WomenSafetySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M 50,150 Q 100,20, 150,150" fill="none" stroke="#D53F8C" strokeWidth="6" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="90" r="20" fill="#FBB6CE" /><path d="M80 120 Q 100 110 120 120 L 110 150 L 90 150 Z" fill="#FBB6CE" /></motion.g></motion.svg>;
// 12. Vision, Growth
const GrowthSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 150 L 70 130 L 90 140 L 110 120 L 130 130 L 150 110" stroke="#48BB78" fill="none" strokeWidth="5" strokeLinecap="round" variants={pathVariants}/><motion.path d="M150 110 L 150 80 L 170 100" stroke="#48BB78" strokeWidth="5" fill="none" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
// 13. Finance, Contribution
const FinanceSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#FEFCBF" variants={itemVariants}/><motion.rect x="50" y="50" width="100" height="10" fill="#D69E2E" variants={itemVariants}/><motion.circle cx="100" cy="110" r="20" fill="none" stroke="#D69E2E" strokeWidth="4" variants={pathVariants}/></motion.svg>;
// 14. Research, Innovation
const InnovationSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,40 C 60,40 40,70 40,100 C 40,130 60,160 100,160" fill="none" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M100,40 C 140,40 160,70 160,100" fill="none" stroke="#A0AEC0" variants={pathVariants}/><motion.circle cx="100" cy="100" r="10" fill="#4299E1" animate={{scale:[1,1.3,1]}} transition={{repeat:Infinity, duration:2}}/><motion.circle cx="130" cy="70" r="5" fill="#4299E1" variants={itemVariants}/><motion.circle cx="70" cy="70" r="5" fill="#4299E1" variants={itemVariants}/></motion.svg>;
// 15. Copyright, IP
const IntellectualPropertySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="40" fill="#FAF5FF" stroke="#9F7AEA" strokeWidth="3" variants={itemVariants}/><motion.circle cx="100" cy="100" r="15" fill="none" stroke="#9F7AEA" strokeWidth="3" variants={pathVariants}/><motion.text x="100" y="105" textAnchor="middle" fontSize="18" fill="#805AD5">C</motion.text></motion.svg>;
// 16. Justice, Victim Support
const JusticeSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50,160 C 60,130 90,120 100,120 C 110,120 140,130 150,160" fill="none" stroke="#4A5568" strokeWidth="5" variants={itemVariants} /><motion.path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170" fill="#FED7D7" variants={{...pathVariants, transition:{delay:0.5}}}/><motion.path d="M100,50 C 140,50 160,80 130,110 C 160,140 100,170 100,170" fill="#FEB2B2" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
// 17. Corporate
const CorporateSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="50" y="100" width="30" height="60" fill="#BEE3F8" variants={{...itemVariants, hidden: {y: 60}, visible: {y: 0}}}/><motion.rect x="85" y="80" width="30" height="80" fill="#90CDF4" variants={{...itemVariants, hidden: {y: 80}, visible: {y: 0}}}/><motion.rect x="120" y="120" width="30" height="40" fill="#63B3ED" variants={{...itemVariants, hidden: {y: 40}, visible: {y: 0}}}/></motion.svg>;
// 18. Default Fallback
const DefaultSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" rx="10" fill="#E2E8F0" stroke="#A0AEC0" variants={itemVariants}/><motion.circle cx="100" cy="100" r="20" fill="#F7FAFC" variants={itemVariants}/></motion.svg>;


// --- 3. INTELLIGENT SVG MAPPING (Corrected) ---
const svgMap = { 'sec1-legal-identity-and-foundational-recognition': LegalSVG, 'sec2-foundational-documents-and-public-trust': LegalSVG, 'sec3-quality-and-governance-standards-iso-90012015': QualitySVG, 'sec4-risk-management-and-operational-resilience-iso-310002018': RiskSVG, 'sec5-it-security-excellence-iso-15408-common-criteria': SecuritySVG, 'sec6-social-responsibility-and-humanity-iso-260002010': SocialSVG, 'sec7-learning-beyond-classrooms-iso-299932017': EducationSVG, 'sec8-integrity-and-anti-corruption-commitment-iso-370012016': IntegritySVG, 'sec9-data-privacy-and-information-security-isoiec-270012022-and-277012019': PrivacySVG, 'sec10-digital-forensics-and-evidence-integrity-isoiec-270372012-and-291002011': ForensicsSVG, 'sec11-empowering-every-student-building-a-safer-tomorrow': EducationSVG, 'sec12-womens-dignity-nations-pride': WomenSafetySVG, 'sec13-justice-for-victims-strength-for-survivors': JusticeSVG, 'sec14-trust-of-institutions-power-of-collaboration': CollaborationSVG, 'sec15-nation-first-humanity-always': SocialSVG, 'sec16-corporate-ethics-and-digital-responsibility': CorporateSVG, 'sec17-educational-alliance-for-cyber-literacy': EducationSVG, 'sec18-public-awareness-every-citizen-every-click': EducationSVG, 'sec19-legal-network-and-multi-agency-collaboration': CollaborationSVG, 'sec20-social-welfare-through-technology-and-law': SocialSVG, 'sec21-international-collaboration-and-global-recognition': CollaborationSVG, 'sec22-vision-for-a-digitally-safe-and-empowered-india': GrowthSVG, 'sec23-public-contribution-and-donation-path-a-call-from-the-heart': FinanceSVG, 'sec24-volunteerism-internship-and-skill-development': EducationSVG, 'sec25-recognition-awards-and-public-trust': QualitySVG, 'sec26-technological-innovation-and-forensic-excellence': ForensicsSVG, 'sec27-public-grievance-redressal-and-victim-helpline': JusticeSVG, 'sec28-empowering-women-youth-and-vulnerable-groups': WomenSafetySVG, 'sec29-legal-compliance-corporate-governance-and-transparency': LegalSVG, 'sec30-together-for-a-cyber-safe-and-just-india': GrowthSVG, 'sec31-public-trust-transparency-and-accountability': LegalSVG, 'sec32-emotional-support-for-victims-of-cybercrime': JusticeSVG, 'sec33-cyber-clubs-and-awareness-cells-in-institutions': EducationSVG, 'sec34-legal-empowerment-and-pro-bono-network': JusticeSVG, 'sec35-national-mission-for-digital-safety': GrowthSVG, 'sec36-cyber-risk-management-for-businesses': RiskSVG, 'sec37-skill-development-and-cyber-career-opportunities': EducationSVG, 'sec38-awareness-campaigns-for-rural-and-urban-india': EducationSVG, 'sec39-womens-cybersecurity-leadership-program': WomenSafetySVG, 'sec40-a-call-for-nationwide-unity-and-contribution': FinanceSVG, 'sec41-national-cyber-volunteer-program': CollaborationSVG, 'sec42-research-and-innovation-in-cybersecurity': InnovationSVG, 'sec43-legal-and-policy-advocacy': LegalSVG, 'sec44-women-and-children-empowerment-initiatives': WomenSafetySVG, 'sec45-educational-outreach-and-skill-building': EducationSVG, 'sec46-corporate-and-ngo-collaboration-for-social-impact': CollaborationSVG, 'sec47-forensic-services-and-case-support': ForensicsSVG, 'sec48-digital-awareness-and-community-campaigns': EducationSVG, 'sec49-emotional-healing-and-counseling-support': JusticeSVG, 'sec50-join-the-mission-together-for-a-safe-india': GrowthSVG, 'sec51-join-hands-to-protect-citizens-online': FinanceSVG, 'sec52-your-support-strengthens-odisha-and-the-nation': SocialSVG, 'sec53-funding-cyber-safety-initiatives': FinanceSVG, 'sec54-empowering-communities-through-public-support': SocialSVG, 'sec55-every-contribution-creates-real-impact': QualitySVG, 'sec56-building-a-safe-digital-future': GrowthSVG, 'sec57-mobilizing-citizens-for-cyber-protection': SocialSVG, 'sec58-supporting-victims-and-restoring-justice': JusticeSVG, 'sec59-empowering-women-children-and-communities': WomenSafetySVG, 'sec60-join-crccf-your-contribution-saves-lives': FinanceSVG, 'sec61-cyber-certification-education-for-skill-empowerment': EducationSVG, 'sec62-transforming-lives-through-cyber-training-and-certification': EducationSVG, 'sec63-crccf-a-unified-vision-for-digital-safety': GrowthSVG, 'sec64-call-to-action-join-support-and-empower': SocialSVG, 'sec65-legal-foundation-and-statutory-recognition': LegalSVG, 'sec66-iso-certifications-and-quality-assurance': QualitySVG, 'sec66-governance-accountability-and-public-trust': LegalSVG, 'sec68-copyright-protection-notice': IntellectualPropertySVG, 'sec69-legal-enforcement-and-public-disclaimer': IntellectualPropertySVG, 'sec70-public-copyright-and-usage-guidelines': IntellectualPropertySVG };

// --- 4. Logic Functions ---
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

// --- 5. UI Components ---
const PaginationControls = ({ pageCount, activePageIndex, onPageChange }) => {
    if (pageCount <= 1) return null;
    return (
        <nav aria-label="Section pagination" className="pagination-controls">
            <button onClick={() => onPageChange(0)} disabled={activePageIndex === 0} className="pagination-button"><FirstPageIcon /></button>
            <button onClick={() => onPageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-button"><PrevPageIcon /></button>
            <div className="flex items-center gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (<button key={i} aria-selected={activePageIndex === i} onClick={() => onPageChange(i)} className={`pagination-dot ${activePageIndex === i ? 'active' : ''}`}><span className="sr-only">Page {i + 1}</span></button>))}
            </div>
            <button onClick={() => onPageChange(activePageIndex + 1)} disabled={activePageIndex === pageCount - 1} className="pagination-button"><NextPageIcon /></button>
            <button onClick={() => onPageChange(pageCount - 1)} disabled={activePageIndex === pageCount - 1} className="pagination-button"><LastPageIcon /></button>
        </nav>
    );
};

// --- 6. Main Page Component ---
const AboutUsLanding = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const sectionRefs = useRef({});
    const articleContainerRef = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    const pages = useMemo(() => calculatePages(aboutUsMainData, WORDS_PER_PAGE), [aboutUsMainData]);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const sectionIndex = aboutUsMainData.findIndex(s => s.id === hash);
            if (sectionIndex !== -1) {
                const pageIndex = pages.findIndex(p => sectionIndex >= p.startIndex && sectionIndex <= p.endIndex);
                if (pageIndex !== -1) setActivePageIndex(pageIndex);
            }
        }
    }, [location.hash, pages, aboutUsMainData]);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const timer = setTimeout(() => {
                sectionRefs.current[hash]?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [activePageIndex, location.hash, prefersReducedMotion]);

    const handlePageChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < pages.length) {
            const firstSectionId = pages[newIndex].sections[0].id;
            navigate(`#${firstSectionId}`, { replace: true });
            setActivePageIndex(newIndex);
            articleContainerRef.current?.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
    };

    const currentPage = pages[activePageIndex];
    const totalPages = pages.length;

    const sectionContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
    const svgVariants = { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };
    const textVariants = { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
                 <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    About Us
                </motion.h1>

                <AnimatePresence mode="wait">
                    <motion.article key={activePageIndex} ref={articleContainerRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-20">
                        {currentPage?.sections.map((section, index) => {
                            const SvgComponent = svgMap[section.id] || DefaultSVG;
                            const isReversed = index % 2 === 1;
                            const currentSvgVariants = { ...svgVariants, hidden: { ...svgVariants.hidden, x: isReversed ? 50 : -50 }};
                            const currentTextVariants = { ...textVariants, hidden: { ...textVariants.hidden, x: isReversed ? -50 : 50 }};

                            return (
                                <motion.section 
                                    key={section.id} id={section.id} ref={el => sectionRefs.current[section.id] = el}
                                    className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch scroll-mt-20" // Use 5 columns, items-stretch
                                    variants={sectionContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                                >
                                    {/* SVG Container: 2 columns, border, shadow, h-full */}
                                    <motion.div className={`lg:col-span-2 p-6 flex items-center justify-center h-full rounded-xl border border-gray-200 bg-white shadow-lg ${isReversed ? 'lg:order-last' : ''}`} variants={currentSvgVariants}>
                                        <SvgComponent />
                                    </motion.div>
                                    
                                    {/* Text Container: 3 columns, hover effect, flex column */}
                                    <motion.div
                                        className="lg:col-span-3 p-8 rounded-xl flex flex-col justify-center cursor-pointer" // Added flex flex-col justify-center
                                        variants={currentTextVariants}
                                        whileHover={{ scale: 1.02, boxShadow: '0px 10px 30px -5px rgba(72, 187, 120, 0.2)' }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
                                        <div className="text-gray-700 leading-relaxed text-lg" style={{whiteSpace: 'pre-line'}}>{section.content}</div>
                                    </motion.div>
                                </motion.section>
                            );
                        })}
                    </motion.article>
                </AnimatePresence>
                
                <PaginationControls pageCount={totalPages} activePageIndex={activePageIndex} onPageChange={handlePageChange} />
            </div>
            {/* Styles including mobile responsiveness for pagination */}
            <style>{`
                .pagination-controls { display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-top: 4rem; padding: 0.5rem; flex-wrap: wrap; background-color: white; border-radius: 9999px; box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.05); }
                @media (min-width: 640px) { .pagination-controls { gap: 1rem; padding: 1rem; } }
                .pagination-button { display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background-color: #f0fdf4; color: #166534; transition: all 0.2s ease-in-out; border: 1px solid #dcfce7; }
                .pagination-button:hover:not(:disabled) { background-color: #dcfce7; transform: scale(1.1); }
                .pagination-button:disabled { color: #a3a3a3; cursor: not-allowed; background-color: #f5f5f5; border-color: #e5e5e5; }
                .pagination-dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: #a7f3d0; transition: all 0.2s ease-in-out; cursor: pointer; border: none; }
                .pagination-dot:hover { background-color: #34d399; }
                .pagination-dot.active { background-color: #10b981; transform: scale(1.25); }
            `}</style>
        </section>
    );
};

export default AboutUsLanding;