import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// --- Main Pages ---
import Home from "./pages/mainPages/Home";
import AboutUs from "./pages/mainPages/AboutUs";
import ContactUs from "./pages/mainPages/ContactUs";
import CyberEducation from "./pages/mainPages/CyberEducation";
import RecruimentProcess from "./pages/mainPages/RecruimentProcess";
import ReportACyberCrime from "./pages/mainPages/ReportACyberCrime";
import ResourceAndDownload from "./pages/mainPages/ResourceAndDownload";
import SoftwareServices from "./pages/mainPages/SoftwareServices";

// --- About Pages ---
import IntroductionOfCRCCF from "./pages/about/IntroductionOfCRCCF";
import WhatWeDo from "./pages/about/WhatWeDo";
import MissionVision from "./pages/about/MissionVision";
import Purpose from "./pages/about/Purpose";
import Activity from "./pages/about/Activity";
import Objective from "./pages/about/Objective";
import Service from "./pages/about/Service";
import PrivacyPolicy from "./pages/about/PrivacyPolicy";
import DataProtectionPolicy from "./pages/about/DataProtectionPolicy";
import GDPR from "./pages/about/GDPR";
import Terms from "./pages/about/Terms";
import RulesRegulation from "./pages/about/RulesRegulation";
import Guidelines from "./pages/about/Guidelines";
import Instruction from "./pages/about/Instruction";
import LegalDisclaimer from "./pages/about/LegalDisclaimer";
import CopyrightRegistration from "./pages/about/CopyrightRegistration";
import LegalCompliance from "./pages/about/LegalCompliance";
import Department from "./pages/about/Department";
import History from "./pages/about/History";
import Partnerships from "./pages/about/Partnerships";

// --- Recruitment Pages ---
import JobVacancy from "./pages/recruitment/JobVacancy";
import RecruitmentRulesPolicies from "./pages/recruitment/RecruitmentRulesPolicies";
import RecruitmentGuideline from "./pages/recruitment/RecruitmentGuideline";
import RecruitmentInstructions from "./pages/recruitment/RecruitmentInstructions";
import RTI from "./pages/recruitment/RTI";
import EligibilityCriteria from "./pages/recruitment/EligibilityCriteria";
import JobDescriptions from "./pages/recruitment/JobDescriptions";
import RecruitmentCalendar from "./pages/recruitment/RecruitmentCalendar";
import SelectionProcess from "./pages/recruitment/SelectionProcess";
import SelectionList from "./pages/recruitment/SelectionList";
import PressRelease from "./pages/recruitment/PressRelease";
import CheckStatus from "./pages/recruitment/CheckStatus";

// --- Legal Compliance Pages ---
import OurLegalIdentity from "./pages/legalCompliance/OurLegalIdentity";
import OurLegalEntity from "./pages/legalCompliance/OurLegalEntity";
import LegalAuthorizationsCyberLicenses from "./pages/legalCompliance/LegalAuthorizationsAndCyberLicenses";
import LegalRightOperationalLimits from "./pages/legalCompliance/LegalRightAndOperationalLimits";
import CRCCFLegalRights from "./pages/legalCompliance/CRCCFLegalRights";
import LegalEthicalCompliance from "./pages/legalCompliance/LegalAndEthicalCompliance";
import CyberCrimeInvestigationApproval from "./pages/legalCompliance/CyberCrimeInvestigationApproval";
import OurCyberInvestigationCapacity from "./pages/legalCompliance/OurCyberInvestigationCapacity";
import DigitalInvestigationInfrastructure from "./pages/legalCompliance/DigitalInvestigationInfrastructure";
import OurRoleInCybercrimeInvestigation from "./pages/legalCompliance/OurRoleInCybercrimeInvestigation";
import InvestigationScopeSocialResponsibility from "./pages/legalCompliance/InvestigationScopeAndSocialResponsibility";
import CyberInvestigationComplianceFramework from "./pages/legalCompliance/CyberInvestigationComplianceFramework";
import InvestigationEthicsLegalStandards from "./pages/legalCompliance/InvestigationEthicsAndLegalStandards";
import CyberSecurityInvestigationProtocols from "./pages/legalCompliance/CyberSecurityAndInvestigationProtocols";
import DigitalSecurityCertification from "./pages/legalCompliance/DigitalSecurityCertification";
import OperationalResourcesTeam from "./pages/legalCompliance/OperationalResourcesAndTeam";
import CybercrimeResponseCapabilities from "./pages/legalCompliance/CybercrimeResponseCapabilities";
import TeamToolTechCapacity from "./pages/legalCompliance/TeamToolAndTechCapacity";
import ComplianceWithIndianCyberLaws from "./pages/legalCompliance/ComplianceWithIndianCyberLaws";
import CyberLawComplianceStandards from "./pages/legalCompliance/CyberLawComplianceStandards";
import ComplianceWithCybercrimeRegulation from "./pages/legalCompliance/ComplianceWithCybercrimeRegulation";
import CybercrimeComplianceFramework from "./pages/legalCompliance/CybercrimeComplianceFramework";
import ResourceReport from "./pages/legalCompliance/ResourceAndReport";
import RecognizedPowerResponsibility from "./pages/legalCompliance/RecognizedPowerAndResponsibility";

// --- Report Pages ---
import AnonymousTipReport from "./pages/report/AnonymousTipReport";
import CheckComplaintStatus from "./pages/report/CheckComplaintStatus";
import CompliantRegistration from "./pages/report/CompliantRegistration";
import CyberCrimeFAQs from "./pages/report/CyberCrimeFAQs";
import CyberCrimeLawyers from "./pages/report/CyberCrimeLawyers";
import CyberCrimeReporter from "./pages/report/CyberCrimeReporter";
import CyberLawsRights from "./pages/report/CyberLawsRights";
import CyberSecurityTips from "./pages/report/CyberSecurityTips";
import EmergencyHelplineContact from "./pages/report/EmergencyHelplineContact";
import LegalGuidanceAwareness from "./pages/report/LegalGuidanceAwareness";
import MembersRegistration from "./pages/report/MembersRegistration";
import OnlineSafetyTips from "./pages/report/OnlineSafetyTips";
import ReportACyberCrimeLanding from "./pages/report/ReportACyberCrimeLanding";
import StepByStepGuide from "./pages/report/StepByStepGuide";
import SuccessStoriesCaseStudies from "./pages/report/SuccessStoriesCaseStudies";
import TypesOfCyberCrimes from "./pages/report/TypesOfCyberCrimes";
import VictimRightsSupport from "./pages/report/VictimRightsSupport";

// --- Victim Support Pages ---
import RightOfCybercrimeVictims from "./pages/victimSupport/RightOfCybercrimeVictims";
import VictimAssistanceProtection from "./pages/victimSupport/VictimAssistanceProtection";
import CybercrimeVictimRightsRelief from "./pages/victimSupport/CybercrimeVictimRightsRelief";
import DigitalCrimeVictimHelpDesk from "./pages/victimSupport/DigitalCrimeVictimHelpDesk";
import SupportServicesForVictims from "./pages/victimSupport/SupportServicesForVictims";
import HelpJusticeVictims from "./pages/victimSupport/HelpJusticeVictims";
import EmpoweringCybercrimeVictims from "./pages/victimSupport/EmpoweringCybercrimeVictims";
import DigitalVictimSupport from "./pages/victimSupport/DigitalVictimSupport";
import VictimProtectionLegalAid from "./pages/victimSupport/VictimProtectionLegalAid";
import OnlineHarassmentHelpRights from "./pages/victimSupport/OnlineHarassmentHelpRights";
import CyberJusticeForVictims from "./pages/victimSupport/CyberJusticeForVictims";
import CybercrimeVictimAdvocacy from "./pages/victimSupport/CybercrimeVictimAdvocacy";
import OnlineSafetyVictimHelp from "./pages/victimSupport/OnlineSafetyVictimHelp";
import JusticeHealingForVictims from "./pages/victimSupport/JusticeHealingForVictims";
import RestoringDignityCyberVictims from "./pages/victimSupport/RestoringDignityCyberVictims";
import DigitalJusticeSupportServices from "./pages/victimSupport/DigitalJusticeSupportServices";
import VictimOutreachLegalSupport from "./pages/victimSupport/VictimOutreachLegalSupport";
import PsychologicalCounsellingCyberVictims from "./pages/victimSupport/PsychologicalCounsellingCyberVictims";
import VictimHelplineChatSupport from "./pages/victimSupport/VictimHelplineChatSupport";
import WomenChildCyberSafetySupport from "./pages/victimSupport/WomenChildCyberSafetySupport";
import LegalGuidanceDigitalCrimeVictims from "./pages/victimSupport/LegalGuidanceDigitalCrimeVictims";
import DataPrivacyProtectionSupport from "./pages/victimSupport/DataPrivacyProtectionSupport";
import SocialMediaMisuseVictimAid from "./pages/victimSupport/SocialMediaMisuseVictimAid";
import PhishingOnlineScamVictimSupport from "./pages/victimSupport/PhishingOnlineScamVictimSupport";
import CyberExtortionBlackmailResponse from "./pages/victimSupport/CyberExtortionBlackmailResponse";
import DigitalForensicsVictimAssistance from "./pages/victimSupport/DigitalForensicsVictimAssistance";
import EducationalResourcesVictimRights from "./pages/victimSupport/EducationalResourcesVictimRights";
import CyberVictimReliefEmergencyResponse from "./pages/victimSupport/CyberVictimReliefEmergencyResponse";
import Gallery from "./pages/mainPages/Gallery";

// --- Resource Pages ---
import DigitalResourceCentre from "./pages/resources/DigitalResourceCentre";
import CyberVault from "./pages/resources/CyberVault";
import InvestigationToolkit from "./pages/resources/InvestigationToolkit";
import KnowledgeDownloadHub from "./pages/resources/KnowledgeDownloadHub";
import CyberSecurityResources from "./pages/resources/CyberSecurityResources";
import DocumentsUtilities from "./pages/resources/DocumentsUtilities";
import TechToolsReport from "./pages/resources/TechToolsReport";
import ResourcesCompliance from "./pages/resources/ResourcesCompliance";
import ELibraryDownloads from "./pages/resources/ELibraryDownloads";
import SecurityDocsKits from "./pages/resources/SecurityDocsKits";
import VictimAssistanceForms from "./pages/resources/VictimAssistanceForms";
import CaseStudyLibrary from "./pages/resources/CaseStudyLibrary";

// --- Software Services Pages ---
import CustomSoftwareDevelopment from "./pages/software/CustomSoftwareDevelopment";
import WebMobileAppDevelopment from "./pages/software/WebMobileAppDevelopment";
import EnterpriseSolution from "./pages/software/EnterpriseSolution";
import AIBigDataAnalytics from "./pages/software/AIBigDataAnalytics";
import CloudBasedSoftwareSolutions from "./pages/software/CloudBasedSoftwareSolutions";
import CybersecurityThreatProtection from "./pages/software/CybersecurityThreatProtection";
import DigitalForensicEvidenceManagement from "./pages/software/DigitalForensicEvidenceManagement";
import BlockchainFintechSolutions from "./pages/software/BlockchainFintechSolutions";
import IoTSmartDeviceSoftware from "./pages/software/IoTSmartDeviceSoftware";
import WorkflowTools from "./pages/software/WorkflowTools";
import SaaSApiIntegration from "./pages/software/SaaSApiIntegration";
import SoftwareConsultationAuditSupport from "./pages/software/SoftwareConsultationAuditSupport";
import DigitalForensicsTools from "./pages/software/DigitalForensicsTools";
import SoftwareConsultationAudit from "./pages/software/SoftwareConsultationAudit";
import IdentityAccessManagementTools from "./pages/software/IdentityAccessManagementTools";
import SoftwareTestingQA from "./pages/software/SoftwareTestingQA";
import DevOps from "./pages/software/DevOps";
import UIUXDesign from "./pages/software/UIUXDesign";
import ProductMaintenanceSupport from "./pages/software/ProductMaintenanceSupport";
import IndustrySpecificSolutions from "./pages/software/IndustrySpecificSolutions";

// --- Cyber Education Pages ---
import SoftwareEducation from "./pages/cyberEducation/SoftwareEducation";
import ComputerEducation from "./pages/cyberEducation/ComputerEducation";
import LegalEducation from "./pages/cyberEducation/LegalEducation";
import CyberEducationDetails from "./pages/cyberEducation/CyberEducation";
import Clients from "./pages/InduxPages/Clients";
import ITSupport from "./pages/InduxPages/ITSupport";
import Reviews from "./pages/InduxPages/Reviews";
import OurTeamOverview from "./pages/InduxPages/OurTeamOverview";
import Students from "./pages/InduxPages/Students";
import TechnicalAssistance from "./pages/InduxPages/TechnicalAssistance";
import Testimonials from "./pages/InduxPages/Testimonials";







const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* --- Main Pages --- */}
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
        <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><AboutUs /></motion.div>} />
        <Route path="/contact-us" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ContactUs /></motion.div>} />
        <Route path="/cyber-education" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberEducation /></motion.div>} />
        <Route path="/gallery" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Gallery /></motion.div>} />
        <Route path="/recruitment-process" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RecruimentProcess /></motion.div>} />
        <Route path="/report-a-cyber-crime" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ReportACyberCrime /></motion.div>} />
        <Route path="/resource-and-download" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ResourceAndDownload /></motion.div>} />
        <Route path="/software-services" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SoftwareServices /></motion.div>} />

        {/* --- About Pages --- */}
        <Route path="/about/introduction" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><IntroductionOfCRCCF /></motion.div>} />
        <Route path="/about/what-we-do" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><WhatWeDo /></motion.div>} />
        <Route path="/about/mission-vision" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><MissionVision /></motion.div>} />
        <Route path="/about/purpose" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Purpose /></motion.div>} />
        <Route path="/about/activity" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Activity /></motion.div>} />
        <Route path="/about/objective" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Objective /></motion.div>} />
        <Route path="/about/service" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Service /></motion.div>} />
        <Route path="/about/privacy-policy" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><PrivacyPolicy /></motion.div>} />
        <Route path="/about/data-protection-policy" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DataProtectionPolicy /></motion.div>} />
        <Route path="/about/gdpr" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><GDPR /></motion.div>} />
        <Route path="/about/terms" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Terms /></motion.div>} />
        <Route path="/about/rules-regulation" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RulesRegulation /></motion.div>} />
        <Route path="/about/guidelines" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Guidelines /></motion.div>} />
        <Route path="/about/instruction" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Instruction /></motion.div>} />
        <Route path="/about/legal-disclaimer" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalDisclaimer /></motion.div>} />
        <Route path="/about/copyright-registration" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CopyrightRegistration /></motion.div>} />
        <Route path="/about/legal-compliance" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalCompliance /></motion.div>} />
        <Route path="/about/department" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Department /></motion.div>} />
        <Route path="/about/history" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><History /></motion.div>} />
        <Route path="/about/partnerships" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Partnerships /></motion.div>} />

        {/* --- Recruitment Pages --- */}
        <Route path="/recruitment-process/job-vacancy" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><JobVacancy /></motion.div>} />
        <Route path="/recruitment-process/recruitment-rules-policies" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RecruitmentRulesPolicies /></motion.div>} />
        <Route path="/recruitment-process/recruitment-guideline" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RecruitmentGuideline /></motion.div>} />
        <Route path="/recruitment-process/recruitment-instructions" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RecruitmentInstructions /></motion.div>} />
        <Route path="/recruitment-process/rti" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RTI /></motion.div>} />
        <Route path="/recruitment-process/eligibility-criteria" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><EligibilityCriteria /></motion.div>} />
        <Route path="/recruitment-process/job-descriptions" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><JobDescriptions /></motion.div>} />
        <Route path="/recruitment-process/recruitment-calendar" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RecruitmentCalendar /></motion.div>} />
        <Route path="/recruitment-process/selection-process" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SelectionProcess /></motion.div>} />
        <Route path="/recruitment-process/selection-list" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SelectionList /></motion.div>} />
        <Route path="/recruitment-process/press-release" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><PressRelease /></motion.div>} />
        <Route path="/recruitment-process/check-status" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CheckStatus /></motion.div>} />

        {/* --- Legal Compliance Pages --- */}
        <Route path="/about/legal-compliance/our-legal-identity" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OurLegalIdentity /></motion.div>} />
        <Route path="/about/legal-compliance/our-legal-entity" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OurLegalEntity /></motion.div>} />
        <Route path="/about/legal-compliance/legal-authorizations-cyber-licenses" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalAuthorizationsCyberLicenses /></motion.div>} />
        <Route path="/about/legal-compliance/legal-right-operational-limits" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalRightOperationalLimits /></motion.div>} />
        <Route path="/about/legal-compliance/crccf-legal-rights" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CRCCFLegalRights /></motion.div>} />
        <Route path="/about/legal-compliance/legal-ethical-compliance" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalEthicalCompliance /></motion.div>} />
        <Route path="/about/legal-compliance/cyber-crime-investigation-approval" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberCrimeInvestigationApproval /></motion.div>} />
        <Route path="/about/legal-compliance/our-cyber-investigation-capacity" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OurCyberInvestigationCapacity /></motion.div>} />
        <Route path="/about/legal-compliance/digital-investigation-infrastructure" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalInvestigationInfrastructure /></motion.div>} />
        <Route path="/about/legal-compliance/our-role-in-cybercrime-investigation" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OurRoleInCybercrimeInvestigation /></motion.div>} />
        <Route path="/about/legal-compliance/investigation-scope-social-responsibility" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><InvestigationScopeSocialResponsibility /></motion.div>} />
        <Route path="/about/legal-compliance/cyber-investigation-compliance-framework" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberInvestigationComplianceFramework /></motion.div>} />
        <Route path="/about/legal-compliance/investigation-ethics-legal-standards" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><InvestigationEthicsLegalStandards /></motion.div>} />
        <Route path="/about/legal-compliance/cyber-security-investigation-protocols" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberSecurityInvestigationProtocols /></motion.div>} />
        <Route path="/about/legal-compliance/digital-security-certification" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalSecurityCertification /></motion.div>} />
        <Route path="/about/legal-compliance/operational-resources-team" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OperationalResourcesTeam /></motion.div>} />
        <Route path="/about/legal-compliance/cybercrime-response-capabilities" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CybercrimeResponseCapabilities /></motion.div>} />
        <Route path="/about/legal-compliance/team-tool-tech-capacity" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><TeamToolTechCapacity /></motion.div>} />
        <Route path="/about/legal-compliance/compliance-with-indian-cyber-laws" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ComplianceWithIndianCyberLaws /></motion.div>} />
        <Route path="/about/legal-compliance/cyber-law-compliance-standards" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberLawComplianceStandards /></motion.div>} />
        <Route path="/about/legal-compliance/compliance-with-cybercrime-regulation" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ComplianceWithCybercrimeRegulation /></motion.div>} />
        <Route path="/about/legal-compliance/cybercrime-compliance-framework" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CybercrimeComplianceFramework /></motion.div>} />
        <Route path="/about/legal-compliance/resource-and-report" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ResourceReport /></motion.div>} />
        <Route path="/about/legal-compliance/recognized-power-responsibility" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RecognizedPowerResponsibility /></motion.div>} />

        {/* --- Report Pages --- */}
        <Route path="/report/anonymous-tip-report" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><AnonymousTipReport /></motion.div>} />
        <Route path="/report/check-complaint-status" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CheckComplaintStatus /></motion.div>} />
        <Route path="/report/compliant-registration" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CompliantRegistration /></motion.div>} />
        <Route path="/report/cyber-crime-faqs" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberCrimeFAQs /></motion.div>} />
        <Route path="/report/cyber-crime-lawyers" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberCrimeLawyers /></motion.div>} />
        <Route path="/report/cybercrime-reporter" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberCrimeReporter /></motion.div>} />
        <Route path="/report/cyber-laws-rights" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberLawsRights /></motion.div>} />
        <Route path="/report/cyber-security-tips" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberSecurityTips /></motion.div>} />
        <Route path="/report/emergency-helpline-contact" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><EmergencyHelplineContact /></motion.div>} />
        <Route path="/report/legal-guidance-awareness" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalGuidanceAwareness /></motion.div>} />
        <Route path="/report/members-registration" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><MembersRegistration /></motion.div>} />
        <Route path="/report/online-safety-tips" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OnlineSafetyTips /></motion.div>} />
        <Route path="/report/report-a-cyber-crime-landing" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ReportACyberCrimeLanding /></motion.div>} />
        <Route path="/report/step-by-step-guide" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><StepByStepGuide /></motion.div>} />
        <Route path="/report/success-stories-case-studies" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SuccessStoriesCaseStudies /></motion.div>} />
        <Route path="/report/types-of-cyber-crimes" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><TypesOfCyberCrimes /></motion.div>} />
        <Route path="/report/victim-rights-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><VictimRightsSupport /></motion.div>} />


        {/* Victim Support Individual Pages */}
        <Route path="/report/victim-rights-support/right-of-cybercrime-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RightOfCybercrimeVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/victim-assistance-protection" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><VictimAssistanceProtection /></motion.div>} />
        <Route path="/report/victim-rights-support/cybercrime-victim-rights-relief" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CybercrimeVictimRightsRelief /></motion.div>} />
        <Route path="/report/victim-rights-support/digital-crime-victim-help-desk" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalCrimeVictimHelpDesk /></motion.div>} />
        <Route path="/report/victim-rights-support/support-services-for-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SupportServicesForVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/help-justice-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><HelpJusticeVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/empowering-cybercrime-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><EmpoweringCybercrimeVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/digital-victim-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalVictimSupport /></motion.div>} />
        <Route path="/report/victim-rights-support/victim-protection-legal-aid" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><VictimProtectionLegalAid /></motion.div>} />
        <Route path="/report/victim-rights-support/online-harassment-help-rights" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OnlineHarassmentHelpRights /></motion.div>} />
        <Route path="/report/victim-rights-support/cyber-justice-for-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberJusticeForVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/cybercrime-victim-advocacy" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CybercrimeVictimAdvocacy /></motion.div>} />
        <Route path="/report/victim-rights-support/online-safety-victim-help" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OnlineSafetyVictimHelp /></motion.div>} />
        <Route path="/report/victim-rights-support/justice-healing-for-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><JusticeHealingForVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/restoring-dignity-cyber-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RestoringDignityCyberVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/digital-justice-support-services" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalJusticeSupportServices /></motion.div>} />
        <Route path="/report/victim-rights-support/victim-outreach-legal-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><VictimOutreachLegalSupport /></motion.div>} />
        <Route path="/report/victim-rights-support/psychological-counselling-cyber-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><PsychologicalCounsellingCyberVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/victim-helpline-chat-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><VictimHelplineChatSupport /></motion.div>} />
        <Route path="/report/victim-rights-support/women-child-cyber-safety-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><WomenChildCyberSafetySupport /></motion.div>} />
        <Route path="/report/victim-rights-support/legal-guidance-digital-crime-victims" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LegalGuidanceDigitalCrimeVictims /></motion.div>} />
        <Route path="/report/victim-rights-support/data-privacy-protection-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DataPrivacyProtectionSupport /></motion.div>} />
        <Route path="/report/victim-rights-support/social-media-misuse-victim-aid" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SocialMediaMisuseVictimAid /></motion.div>} />
        <Route path="/report/victim-rights-support/phishing-online-scam-victim-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><PhishingOnlineScamVictimSupport /></motion.div>} />
        <Route path="/report/victim-rights-support/cyber-extortion-blackmail-response" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberExtortionBlackmailResponse /></motion.div>} />
        <Route path="/report/victim-rights-support/digital-forensics-victim-assistance" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalForensicsVictimAssistance /></motion.div>} />
        <Route path="/report/victim-rights-support/educational-resources-victim-rights" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><EducationalResourcesVictimRights /></motion.div>} />
        <Route path="/report/victim-rights-support/cyber-victim-relief-emergency-response" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberVictimReliefEmergencyResponse /></motion.div>} />

        {/* --- Resource Landing & Individual Pages --- */}
        <Route path="/resources/digital-resource-centre" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalResourceCentre /></motion.div>} />
        <Route path="/resources/cyber-vault" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberVault /></motion.div>} />
        <Route path="/resources/investigation-toolkit" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><InvestigationToolkit /></motion.div>} />
        <Route path="/resources/knowledge-download-hub" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><KnowledgeDownloadHub /></motion.div>} />
        <Route path="/resources/cyber-security-resources" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CyberSecurityResources /></motion.div>} />
        <Route path="/resources/documents-utilities" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DocumentsUtilities /></motion.div>} />
        <Route path="/resources/tech-tools-report" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><TechToolsReport /></motion.div>} />
        <Route path="/resources/resources-compliance" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ResourcesCompliance /></motion.div>} />
        <Route path="/resources/e-library-downloads" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ELibraryDownloads /></motion.div>} />
        <Route path="/resources/security-docs-kits" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SecurityDocsKits /></motion.div>} />
        <Route path="/resources/victim-assistance-forms" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><VictimAssistanceForms /></motion.div>} />
        <Route path="/resources/case-study-library" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CaseStudyLibrary /></motion.div>} />


        {/* --- Software Services Pages --- */}
        <Route path="/software/custom-software-development" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CustomSoftwareDevelopment /></motion.div>} />
        <Route path="/software/web-mobile-app-development" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><WebMobileAppDevelopment /></motion.div>} />
        <Route path="/software/enterprise-solution" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><EnterpriseSolution /></motion.div>} />
        <Route path="/software/ai-big-data-analytics" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><AIBigDataAnalytics /></motion.div>} />
        <Route path="/software/cloud-based-software-solutions" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CloudBasedSoftwareSolutions /></motion.div>} />
        <Route path="/software/cybersecurity-threat-protection" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CybersecurityThreatProtection /></motion.div>} />
        <Route path="/software/digital-forensic-evidence-management" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalForensicEvidenceManagement /></motion.div>} />
        <Route path="/software/blockchain-fintech-solutions" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><BlockchainFintechSolutions /></motion.div>} />
        <Route path="/software/iot-smart-device-software" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><IoTSmartDeviceSoftware /></motion.div>} />
        <Route path="/software/workflow-tools" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><WorkflowTools /></motion.div>} />
        <Route path="/software/saas-api-integration" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SaaSApiIntegration /></motion.div>} />
        <Route path="/software/software-consultation-audit-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SoftwareConsultationAuditSupport /></motion.div>} />
        <Route path="/software/digital-forensics-tools" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DigitalForensicsTools /></motion.div>} />
        <Route path="/software/software-consultation-audit" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SoftwareConsultationAudit /></motion.div>} />
        <Route path="/software/identity-access-management-tools" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><IdentityAccessManagementTools /></motion.div>} />
        <Route path="/software/software-testing-qa" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SoftwareTestingQA /></motion.div>} />
        <Route path="/software/devops" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><DevOps /></motion.div>} />
        <Route path="/software/ui-ux-design" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><UIUXDesign /></motion.div>} />
        <Route path="/software/product-maintenance-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ProductMaintenanceSupport /></motion.div>} />
        <Route path="/software/industry-specific-solutions" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><IndustrySpecificSolutions /></motion.div>} />

        {/* --- Cyber Education Pages --- */}
        <Route
          path="/cyber-education/software-education"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <SoftwareEducation />
            </motion.div>
          }
        />
        <Route
          path="/cyber-education/computer-education"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ComputerEducation />
            </motion.div>
          }
        />
        <Route
          path="/cyber-education/legal-education"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <LegalEducation />
            </motion.div>
          }
        />
        <Route
          path="/cyber-education/cyber-education"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <CyberEducationDetails />
            </motion.div>
          }
        />

        {/* --- Indux Pages --- */}
        <Route path="/clients" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Clients /></motion.div>} />
        <Route path="/it-support" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ITSupport /></motion.div>} />
        <Route path="/reviews" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Reviews /></motion.div>} />
        <Route path="/our-team-overview" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OurTeamOverview /></motion.div>} />
        <Route path="/students" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Students /></motion.div>} />
        <Route path="/technical-assistance" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><TechnicalAssistance /></motion.div>} />
        <Route path="/testimonials" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Testimonials /></motion.div>} />


        


      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
