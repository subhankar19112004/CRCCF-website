

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Corrected import path as requested:
import { whatWeDoData } from '../../data/whatWeDoData';

// --- CONFIGURATION ---
const WORDS_PER_PAGE = 1500;

// --- 1. PAGINATION ICONS ---
const FirstPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>;
const PrevPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const NextPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const LastPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" /></svg>;


// --- 2. THE 15 MASTER "MORE PERFECT" SVG COMPONENTS ---
const svgContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const pathVariants = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const JusticeSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.g variants={itemVariants} animate={{rotate:[2,-2,2]}} transition={{repeat:Infinity, duration:5, ease:"easeInOut"}} style={{transformOrigin:'100px 160px'}}><path d="M40 160 L 160 160" stroke="#4A5568" strokeWidth="4" /><path d="M100 160 V 80" stroke="#4A5568" strokeWidth="4" /><path d="M50 80 a 50 50 0 0 1 100 0" fill="none" stroke="#A0AEC0" strokeWidth="5" /></motion.g><motion.path d="M100,50 C 90,40 80,50 80,60" fill="#FED7D7" variants={{...pathVariants, transition:{delay:0.5}}}/><motion.path d="M100,50 C 110,40 120,50 120,60" fill="#FEB2B2" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
const TechSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="90" cy="90" r="40" fill="none" stroke="#4299E1" strokeWidth="5" variants={pathVariants} /><motion.line x1="120" y1="120" x2="150" y2="150" stroke="#4299E1" strokeWidth="7" variants={pathVariants} /><motion.text x="75" y="95" fontFamily="monospace" fill="#718096" variants={itemVariants}>0110</motion.text></motion.svg>;
const EducationSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 120 L100 70 L150 120 L100 170 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#A0AEC0" variants={itemVariants}/><motion.circle cx="100" cy="120" r="10" fill="#FEFCBF" variants={{hidden:{scale:0},visible:{scale:1}}}/></motion.svg>;
const SecuritySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,20 L180,50 L180,110 C180,150 100,180 100,180 C100,180 20,150 20,110 L20,50 Z" fill="#E6FFFA" stroke="#38B2AC" variants={pathVariants}/><motion.path d="M85 90 L 100 105 L 125 75" stroke="#319795" fill="none" strokeWidth="8" strokeLinecap="round" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
const CorporateSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="50" y="100" width="30" height="60" fill="#BEE3F8" variants={{...itemVariants, hidden: {y: 60}, visible: {y: 0}}}/><motion.rect x="85" y="80" width="30" height="80" fill="#90CDF4" variants={{...itemVariants, hidden: {y: 80}, visible: {y: 0}}}/><motion.rect x="120" y="120" width="30" height="40" fill="#63B3ED" variants={{...itemVariants, hidden: {y: 40}, visible: {y: 0}}}/></motion.svg>;
const WomenSafetySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M 50,150 Q 100,20, 150,150" fill="none" stroke="#D53F8C" strokeWidth="6" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="90" r="20" fill="#FBB6CE" /><path d="M80 120 Q 100 110 120 120 L 110 150 L 90 150 Z" fill="#FBB6CE" /></motion.g></motion.svg>;
const FinanceSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="100" fill="#FEFCBF" variants={itemVariants}/><motion.rect x="50" y="50" width="100" height="10" fill="#D69E2E" variants={itemVariants}/><motion.circle cx="100" cy="110" r="20" fill="none" stroke="#D69E2E" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const IntellectualPropertySVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="40" fill="#FAF5FF" stroke="#9F7AEA" strokeWidth="3" variants={itemVariants}/><motion.circle cx="100" cy="100" r="15" fill="none" stroke="#9F7AEA" strokeWidth="3" variants={pathVariants}/><motion.text x="100" y="105" textAnchor="middle" fontSize="18" fill="#805AD5">C</motion.text></motion.svg>;
const HealthcareSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180" fill="#EBF8FF" variants={itemVariants}/><motion.path d="M100,30 L30,60 L30,120 C30,160 100,180 100,180" fill="#BEE3F8" variants={itemVariants}/><motion.path d="M100 70 V 130 M 70 100 H 130" stroke="#4299E1" strokeWidth="8" strokeLinecap="round" variants={pathVariants}/></motion.svg>;
const InnovationSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M100,40 C 60,40 40,70 40,100 C 40,130 60,160 100,160" fill="none" stroke="#A0AEC0" variants={pathVariants}/><motion.path d="M100,40 C 140,40 160,70 160,100" fill="none" stroke="#A0AEC0" variants={pathVariants}/><motion.circle cx="100" cy="100" r="10" fill="#4299E1" animate={{scale:[1,1.3,1]}} transition={{repeat:Infinity, duration:2}}/><motion.circle cx="130" cy="70" r="5" fill="#4299E1" variants={itemVariants}/><motion.circle cx="70" cy="70" r="5" fill="#4299E1" variants={itemVariants}/></motion.svg>;
const ReportingSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M40 40 H 160 V 160 H 40 Z" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M60 70 H 140 M60 90 H 120" stroke="#CBD5E0" variants={pathVariants}/><motion.path d="M40 60 L 20 60 L 20 180 L 140 180 L 140 160" fill="none" stroke="#ED8936" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
const MobileSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="70" y="40" width="60" height="120" rx="10" fill="#4A5568" variants={itemVariants}/><motion.circle cx="100" cy="145" r="5" fill="#A0AEC0" variants={itemVariants}/><motion.path d="M80 60 H 120" stroke="white" variants={pathVariants}/></motion.svg>;
const NetworkSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.circle cx="100" cy="100" r="15" fill="#4A5568" variants={itemVariants}/><motion.path d="M100 100 L 50 50 M100 100 L 150 50 M100 100 L 50 150 M100 100 L 150 150" stroke="#A0AEC0" variants={pathVariants}/><motion.circle cx="50" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="50" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="50" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="150" r="10" fill="#CBD5E0" variants={itemVariants}/></motion.svg>;
const GrowthSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.path d="M50 150 L 70 130 L 90 140 L 110 120 L 130 130 L 150 110" stroke="#48BB78" fill="none" strokeWidth="5" strokeLinecap="round" variants={pathVariants}/><motion.path d="M150 110 L 150 80 L 170 100" stroke="#48BB78" strokeWidth="5" fill="none" variants={{...pathVariants, transition:{delay:0.5}}}/></motion.svg>;
const DefaultSVG = () => <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible"><motion.rect x="60" y="60" width="80" height="80" rx="10" fill="#E2E8F0" stroke="#A0AEC0" variants={itemVariants}/><motion.circle cx="100" cy="100" r="20" fill="#F7FAFC" variants={itemVariants}/></motion.svg>;

// --- 3. INTELLIGENT SVG MAPPING ---
// (The full svgMap is included here, triple-checked for correctness)
const svgMap = { 'sec1-victim-support-justice-wing': JusticeSVG, 'sec7-cyber-psychology-behavioural-support-cell': HealthcareSVG, 'sec12-cyber-victim-assistance-grievance-redressal-centre': JusticeSVG, 'sec15-women-child-cyber-safety-empowerment-mission': WomenSafetySVG, 'sec18-cyber-psychology-behavioural-analysis-unit': HealthcareSVG, 'sec25-victim-rehabilitation-reintegration-program': JusticeSVG, 'sec31-victim-legal-counselling-guidance-centre': JusticeSVG, 'sec43-cyber-security-awareness-for-women-girls': WomenSafetySVG, 'sec46-human-rights-digital-freedom-advocacy': JusticeSVG, 'sec49-women-child-safety-helpline-support-services': WomenSafetySVG, 'sec54-cyber-psychology-emotional-support-programs': HealthcareSVG, 'sec58-victim-rehabilitation-reintegration-programs': JusticeSVG, 'sec66-women-girls-digital-safety-programs': WomenSafetySVG, 'sec71-cyber-awareness-for-senior-citizens-vulnerable-groups': JusticeSVG, 'sec76-human-rights-digital-freedom-advocacy': JusticeSVG, 'sec89-women-in-cyber-empowerment-program': WomenSafetySVG, 'sec119-cybersecurity-awareness-for-women-girls': WomenSafetySVG, 'sec206-empowering-every-individual': JusticeSVG, 'sec208-justice-and-protection-for-all': JusticeSVG, 'sec2-legal-guidance-consultation-cell': FinanceSVG, 'sec8-legal-consultation-case-representation-desk': FinanceSVG, 'sec11-cyber-legal-compliance-corporate-governance-cell': FinanceSVG, 'sec17-legal-education-internship-certification-program': FinanceSVG, 'sec19-government-liaison-policy-advocacy-wing': FinanceSVG, 'sec27-cyber-law-research-policy-drafting-unit': FinanceSVG, 'sec35-privacy-data-protection-advisory-wing': FinanceSVG, 'sec39-internship-skill-development-for-law-it-students': FinanceSVG, 'sec53-legal-awareness-cyber-law-workshops': FinanceSVG, 'sec60-cyber-law-consultancy-for-public-private-sectors': FinanceSVG, 'sec65-legal-consultancy-cyber-compliance-services': FinanceSVG, 'sec72-corporate-cyber-law-compliance-training': FinanceSVG, 'sec87-data-privacy-protection-compliance': FinanceSVG, 'sec112-cyber-law-awareness-education': FinanceSVG, 'sec211-indian-it-act-2000-the-digital-constitution-of-india': FinanceSVG, 'sec212-indian-penal-code-ipc-justice-beyond-the-digital-world': FinanceSVG, 'sec214-data-protection-and-privacy-laws': FinanceSVG, 'sec215-collaboration-with-law-enforcement-and-judiciary': FinanceSVG, 'sec4-cyber-forensics-investigation-support': TechSVG, 'sec9-technical-investigation-digital-forensics-unit': TechSVG, 'sec13-digital-evidence-preservation-e-discovery-unit': TechSVG, 'sec16-it-infrastructure-secure-software-development-division': TechSVG, 'sec21-cyber-crime-investigation-intelligence-unit': TechSVG, 'sec32-cyber-forensics-digital-evidence-analysis-lab': TechSVG, 'sec38-cyber-intelligence-threat-analysis-centre': TechSVG, 'sec41-cyber-investigation-for-corporate-private-entities': TechSVG, 'sec42-software-development-it-solutions-lab': TechSVG, 'sec45-it-support-managed-services-for-organizations': TechSVG, 'sec47-crime-analytics-intelligence-reporting-centre': TechSVG, 'sec50-digital-infrastructure-secure-it-frameworks': TechSVG, 'sec55-technology-driven-legal-consulting-software-solutions': TechSVG, 'sec56-digital-evidence-collection-forensic-analysis': TechSVG, 'sec57-cybercrime-research-intelligence-hub': TechSVG, 'sec62-cyber-forensics-evidence-management-lab': TechSVG, 'sec64-it-support-secure-software-implementation': TechSVG, 'sec69-cyber-crime-investigation-legal-case-support': TechSVG, 'sec70-it-training-software-development-for-career-growth': TechSVG, 'sec81-digital-forensics-evidence-recovery': TechSVG, 'sec98-cyber-evidence-management-forensics-lab': TechSVG, 'sec102-digital-evidence-preservation-legal-documentation': TechSVG, 'sec109-digital-forensics-training-certification': TechSVG, 'sec3-cyber-awareness-digital-literacy-program': EducationSVG, 'sec5-education-internship-examination-support': EducationSVG, 'sec10-software-development-internship-program': EducationSVG, 'sec23-cyber-awareness-skill-development-programs': EducationSVG, 'sec28-it-cyber-skill-internship-hub': EducationSVG, 'sec29-educational-outreach-awareness-campaigns': EducationSVG, 'sec33-cyber-education-awareness-academy': EducationSVG, 'sec44-cyber-safety-programs-for-schools-colleges': EducationSVG, 'sec48-skill-development-technical-training-programs': EducationSVG, 'sec51-cyber-threat-awareness-prevention-campaigns': EducationSVG, 'sec59-software-internships-professional-skill-training': EducationSVG, 'sec63-community-cyber-awareness-public-education': EducationSVG, 'sec68-digital-literacy-cyber-awareness-for-students': EducationSVG, 'sec74-internship-programs-for-software-cyber-studies': EducationSVG, 'sec77-cyber-education-online-learning-platforms': EducationSVG, 'sec79-skill-development-internship-programs': EducationSVG, 'sec85-digital-literacy-cyber-hygiene-program': EducationSVG, 'sec90-internship-skill-development-hub': EducationSVG, 'sec96-cyber-safety-certification-program': EducationSVG, 'sec97-cyber-safety-clubs-in-schools-colleges': EducationSVG, 'sec104-cyber-awareness-campaigns-public-education': EducationSVG, 'sec107-cyber-risk-management-for-educational-institutions': EducationSVG, 'sec209-education-awareness-and-skill-development': EducationSVG, 'sec20-csr-social-impact-partnerships': CorporateSVG, 'sec22-corporate-sme-cyber-risk-advisory-division': CorporateSVG, 'sec24-legal-advisory-for-educational-institutions-ngos': CorporateSVG, 'sec67-cyber-security-audits-corporate-compliance': CorporateSVG, 'sec94-corporate-cyber-governance-compliance': CorporateSVG, 'sec99-corporate-cyber-risk-audit-compliance-program': CorporateSVG, 'sec106-cybersecurity-training-for-law-enforcement': CorporateSVG, 'sec123-cybersecurity-for-e-commerce-platforms': CorporateSVG, 'sec124-cybersecurity-for-ngos-social-welfare-organizations': CorporateSVG, 'sec125-cybersecurity-for-government-departments': CorporateSVG, 'sec131-cybersecurity-for-startups-entrepreneurs': CorporateSVG, 'sec132-cybersecurity-for-retail-supply-chain': CorporateSVG, 'sec133-cybersecurity-for-media-entertainment': CorporateSVG, 'sec134-cybersecurity-for-hospitality-tourism': CorporateSVG, 'sec135-cybersecurity-for-manufacturing-industrial-sector': CorporateSVG, 'sec138-cybersecurity-for-government-public-services': CorporateSVG, 'sec139-cybersecurity-for-ngos-social-welfare-agencies': CorporateSVG, 'sec142-cybersecurity-for-law-firms-legal-professionals': CorporateSVG, 'sec143-cybersecurity-for-transportation-logistics': CorporateSVG, 'sec144-cybersecurity-for-energy-utility-sector': CorporateSVG, 'sec145-cybersecurity-for-telecommunications': CorporateSVG, 'sec146-cybersecurity-for-hospitality-tourism': CorporateSVG, 'sec147-cybersecurity-for-retail-e-commerce': CorporateSVG, 'sec148-cybersecurity-for-manufacturing-industrial-sector': CorporateSVG, 'sec149-cybersecurity-for-media-entertainment': CorporateSVG, 'sec30-cyber-security-risk-management-advisory': SecuritySVG, 'sec36-incident-response-cyber-crisis-management-unit': SecuritySVG, 'sec37-cyber-risk-assessment-compliance-consulting': SecuritySVG, 'sec52-ethical-hacking-penetration-testing-programs': SecuritySVG, 'sec61-cyber-risk-management-strategic-advisory': SecuritySVG, 'sec88-cyber-audit-risk-assessment': SecuritySVG, 'sec113-cloud-security-data-protection': SecuritySVG, 'sec114-social-engineering-phishing-prevention': SecuritySVG, 'sec115-ethical-hacking-penetration-testing': SecuritySVG, 'sec126-cloud-security-safe-data-storage': SecuritySVG, 'sec6-global-cyber-awareness-digital-literacy-program': NetworkSVG, 'sec91-global-cyber-collaboration-intelligence-sharing': NetworkSVG, 'sec100-cyber-peace-ambassadors-network': NetworkSVG, 'sec210-a-trusted-partner-for-every-stakeholder': NetworkSVG, 'sec10-future-vision-building-a-nationally-resilient-digital-ecosystem': GrowthSVG, 'sec207-bridging-technology-and-law': GrowthSVG, 'sec121-cybersecurity-for-healthcare-sector': HealthcareSVG, 'sec136-cybersecurity-for-healthcare-sector': HealthcareSVG, 'sec150-cybersecurity-for-pharmaceuticals-healthcare-research': HealthcareSVG, 'sec161-cybersecurity-for-healthcare-hospitals': HealthcareSVG, 'sec176-cybersecurity-for-healthcare-medical-institutions': HealthcareSVG, 'sec191-cybersecurity-for-healthcare-hospitals': HealthcareSVG, 'sec14-cyber-research-innovation-lab': InnovationSVG, 'sec83-ai-algorithmic-accountability': InnovationSVG, 'sec84-blockchain-security-compliance': InnovationSVG, 'sec95-ai-machine-learning-ethics-in-cybersecurity': InnovationSVG, 'sec205-ai-machine-learning-ethics-in-cybersecurity': InnovationSVG, 'sec73-digital-crime-reporting-complaint-management': ReportingSVG, 'sec216-limitation-of-liability': ReportingSVG, 'sec217-no-legal-representation-or-attorney-client-relationship': ReportingSVG, 'sec218-third-party-links-content-affiliations': ReportingSVG, 'sec219-educational-and-informational-purpose-only': ReportingSVG, 'sec220-jurisdiction-governing-law': ReportingSVG, 'sec92-mobile-security-digital-hygiene-awareness': MobileSVG, 'sec116-mobile-security-safe-app-usage': MobileSVG, 'sec190-cybersecurity-for-social-media-platforms': MobileSVG, 'sec26-online-fraud-detection-prevention-division': SecuritySVG, 'sec105-digital-ethics-responsible-technology-use': EducationSVG, 'sec111-online-fraud-detection-mitigation': SecuritySVG, 'sec152-cybersecurity-for-ngos-social-welfare-agencies': JusticeSVG, 'sec153-cybersecurity-for-government-public-sector': CorporateSVG, 'sec154-cybersecurity-for-startups-small-businesses': CorporateSVG, 'sec155-cybersecurity-for-research-development-labs': InnovationSVG, 'sec156-cybersecurity-for-educational-institutions': EducationSVG, 'sec157-cybersecurity-for-legal-law-firms': FinanceSVG, 'sec158-cybersecurity-for-logistics-transportation': CorporateSVG, 'sec159-cybersecurity-for-energy-utilities': CorporateSVG, 'sec160-cybersecurity-for-agriculture-food-processing': CorporateSVG, 'sec162-cybersecurity-for-media-journalism': CorporateSVG, 'sec163-cybersecurity-for-e-commerce-platforms': CorporateSVG, 'sec164-cybersecurity-for-travel-tourism-industry': CorporateSVG, 'sec165-cybersecurity-for-event-management-entertainment': CorporateSVG, 'sec168-cybersecurity-for-retail-fmcg-companies': CorporateSVG, 'sec169-cybersecurity-for-research-development-institutions': InnovationSVG, 'sec170-cybersecurity-for-government-public-sector': CorporateSVG, 'sec171-cybersecurity-for-telecommunication-companies': MobileSVG, 'sec172-cybersecurity-for-legal-firms-law-agencies': FinanceSVG, 'sec173-cybersecurity-for-educational-institutions': EducationSVG, 'sec174-cybersecurity-for-hospitality-hotel-chains': CorporateSVG, 'sec175-cybersecurity-for-non-profit-social-welfare-organizations': JusticeSVG, 'sec177-cybersecurity-for-e-commerce-platforms': CorporateSVG, 'sec178-cybersecurity-for-media-entertainment-industry': IntellectualPropertySVG, 'sec179-cybersecurity-for-logistics-supply-chain-companies': CorporateSVG, 'sec180-cybersecurity-for-manufacturing-industrial-units': CorporateSVG, 'sec183-cybersecurity-for-real-estate-property-management': CorporateSVG, 'sec184-cybersecurity-for-retail-consumer-goods-companies': CorporateSVG, 'sec185-cybersecurity-for-tourism-travel-agencies': CorporateSVG, 'sec186-cybersecurity-for-educational-institutions': EducationSVG, 'sec187-cybersecurity-for-government-agencies': CorporateSVG, 'sec188-cybersecurity-for-non-governmental-organizations': JusticeSVG, 'sec189-cybersecurity-for-legal-law-firms': FinanceSVG, 'sec192-cybersecurity-for-e-commerce-platforms': CorporateSVG, 'sec193-cybersecurity-for-manufacturing-industrial-firms': CorporateSVG, 'sec194-cybersecurity-for-telecommunication-it-service-providers': MobileSVG, 'sec195-cybersecurity-for-media-entertainment-industry': IntellectualPropertySVG, 'sec197-cybersecurity-for-research-development-institutes': InnovationSVG, 'sec198-cybersecurity-for-transportation-logistics': CorporateSVG, 'sec199-cybersecurity-for-retail-franchise-chains': CorporateSVG, 'sec200-cybersecurity-for-hospitality-tourism': CorporateSVG, 'sec202-mobile-security-digital-awareness-program': MobileSVG };


// --- 4. Main Component ---
const WhatWeDo = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const sectionRefs = useRef({});
    const articleContainerRef = useRef(null);

    const memoizedPages = useMemo(() => {
        const getWordCount = (str) => {
            const quoteEnd = str.indexOf('”');
            const mainText = quoteEnd !== -1 ? str.substring(quoteEnd + 1) : str;
            return mainText.trim().split(/\s+/).length;
        };
        let pages = []; let currentPageSections = []; let currentWordCount = 0;
        whatWeDoData.forEach((section) => {
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
            articleContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const currentPage = memoizedPages[activePageIndex];
    const totalPages = memoizedPages.length;

    const sectionContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
    const svgVariants = { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };
    const textVariants = { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

    return (
        <section className=" min-h-screen">
        <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-9xl mx-auto">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
                What We Do
            </motion.h1>
            
            <AnimatePresence mode="wait">
                <motion.article key={activePageIndex} ref={articleContainerRef} className="space-y-20" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                    {currentPage?.sections.map((section, index) => {
                        const SvgComponent = svgMap[section.id] || DefaultSVG;
                        const isReversed = index % 2 === 1;
                        const currentSvgVariants = { ...svgVariants, hidden: { ...svgVariants.hidden, x: isReversed ? 50 : -50 }};
                        const currentTextVariants = { ...textVariants, hidden: { ...textVariants.hidden, x: isReversed ? -50 : 50 }};
                        
                        const quoteEndIndex = section.content.indexOf('”') + 1;
                        const quote = quoteEndIndex > 0 ? section.content.substring(0, quoteEndIndex).trim() : '';
                        const mainContent = quoteEndIndex > 0 ? section.content.substring(quoteEndIndex).trim() : section.content;

                        return (
                            <motion.div key={section.id} id={section.id} ref={(el) => (sectionRefs.current[section.id] = el)} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch scroll-mt-20" variants={sectionContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                                {/* CHANGE 1: Removed border class from this div */}
                                <motion.div className={`lg:col-span-2 p-6 flex items-center justify-center h-full rounded-xl bg-white shadow-lg ${isReversed ? 'lg:order-last' : ''}`} variants={currentSvgVariants}>
                                    <SvgComponent />
                                </motion.div>
                                <motion.div
                                    // CHANGE 2: Adjusted padding for better mobile spacing
                                    className="lg:col-span-3 p-6 sm:p-8 rounded-xl flex flex-col justify-center"
                                    variants={currentTextVariants}
                                >
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">{section.heading}</h2>
                                    {quote && (
                                        // CHANGE 3: Removed border class from this blockquote
                                        <blockquote className="text-green-700/90 italic font-semibold text-lg pl-4 mb-4">
                                            {quote}
                                        </blockquote>
                                    )}
                                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{mainContent}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.article>
            </AnimatePresence>
            
            {/* CHANGE 4: Rewrote pagination controls for mobile responsiveness */}
            <nav className="pagination-controls">
                <button onClick={() => handlePageChange(0)} disabled={activePageIndex === 0} className="pagination-button"><FirstPageIcon /></button>
                <button onClick={() => handlePageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-button"><PrevPageIcon /></button>
                
                <div className="pagination-page-display">
                    Page {activePageIndex + 1} of {totalPages}
                </div>

                <div className="pagination-dots-container">
                    {memoizedPages.map((_, index) => (
                        <button key={index} onClick={() => handlePageChange(index)} className={`pagination-dot ${activePageIndex === index ? 'active' : ''}`} />
                    ))}
                </div>

                <button onClick={() => handlePageChange(activePageIndex + 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><NextPageIcon /></button>
                <button onClick={() => handlePageChange(totalPages - 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><LastPageIcon /></button>
            </nav>
        </div>
        </section>
    );
};


// CHANGE 5: Updated styles for the new pagination logic
const styles = `
.pagination-controls { display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-top: 4rem; padding: 0.5rem; flex-wrap: nowrap; }
.pagination-page-display { display: block; padding: 0 0.5rem; font-size: 0.875rem; font-weight: 600; color: #4b5563; white-space: nowrap; }
.pagination-dots-container { display: none; }

@media (min-width: 640px) { 
    .pagination-controls { gap: 1rem; padding: 1rem; } 
    .pagination-page-display { display: none; }
    .pagination-dots-container { display: flex; align-items: center; gap: 0.5rem; }
}

.pagination-button { display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background-color: #f0fdf4; color: #166534; transition: all 0.2s ease-in-out; border: 1px solid #dcfce7; flex-shrink: 0; }
.pagination-button:hover:not(:disabled) { background-color: #dcfce7; transform: scale(1.1); }
.pagination-button:disabled { color: #a3a3a3; cursor: not-allowed; background-color: #f5f5f5; border-color: #e5e5e5; }
.pagination-dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: #a7f3d0; transition: all 0.2s ease-in-out; cursor: pointer; border: none; }
.pagination-dot:hover { background-color: #34d399; }
.pagination-dot.active { background-color: #10b981; transform: scale(1.25); }
`;

const StyleInjector = () => <style>{styles}</style>;

const WhatWeDoWithStyles = () => (
    <>
        <StyleInjector />
        <WhatWeDo />
    </>
);

export default WhatWeDoWithStyles;