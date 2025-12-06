import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import WebsiteServices from "./pages/OurServices/SoftwareAndITServices/WebsiteServices";
import SoftwareAndITServices from "./pages/OurServices/SoftwareAndITServices/SoftwareAndITServices";
import MobileAndAppDevelopment from "./pages/OurServices/SoftwareAndITServices/MobileAndAppDevelopment";
import DextopAndLaptopApplication from "./pages/OurServices/SoftwareAndITServices/DextopAndLaptopApplication";
import ServicePageLoader from "./components/common/ServicePageLoader";
import InnovationAndTechnology from "./pages/InduxPages/InnovationAndTechnology";
import LegalSupport from "./pages/InduxPages/LegalSupport";
import ContactPersonDetails from "./pages/mainPages/contact/ContactPersonDetails"; // The Directory Hub
import OfficerProfileDetails from "./pages/mainPages/contact/OfficerProfileDetails"; // The Dynamic Spoke
import FollowAppsDetails from "./pages/mainPages/contact/FollowAppsDetails"; // ADD THIS LINE
import GroupListingPage from "./pages/mainPages/contact/GroupListingPage";
import BranchDetails from "./pages/mainPages/contact/BranchDetails";
import BranchPageTemplate from "./pages/mainPages/contact/BranchPageTemplate";
import FeedbackDetails from "./pages/mainPages/contact/FeedbackDetails";
import InquiryDetails from "./pages/mainPages/contact/InquiryDetails";
import SuggestionDetails from "./pages/mainPages/contact/SuggestionDetails";
import RequestDetails from "./pages/mainPages/contact/RequestDetails";
import ReviewDetails from "./pages/mainPages/contact/ReviewDetails";
import SoftwareServicesIntroduction from "./pages/OurServices/SoftwareAndITServices/Software_services_introduction/SoftwareServicesIntroduction";
import AmcServices from "./pages/OurServices/SoftwareAndITServices/AMC_Services/AmcServices";
import AiIntelligenceSolutions from "./pages/OurServices/SoftwareAndITServices/AI_Intelligence_Solutions/AiIntelligenceSolutions";

const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const AnimatedRoutes2 = () => {
    return (
        <Routes>
            {/* Software and IT Services section from our services */}
            <Route
                path="/services/software-it/website-services"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <WebsiteServices />
                    </motion.div>
                }
            />

            <Route
                path="/services/software-it"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <SoftwareAndITServices />
                    </motion.div>
                }
            />

            <Route
                path="/services/software-it/mobile-app-development"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <MobileAndAppDevelopment />
                    </motion.div>
                }
            />

            <Route
                path="/services/software-it/desktop-solutions"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <DextopAndLaptopApplication />
                    </motion.div>
                }
            />

            <Route
                path="/services/software-it/introduction"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <SoftwareServicesIntroduction />
                    </motion.div>
                }
            />

            <Route
                path="/services/software-it/amc-services"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <AmcServices />
                    </motion.div>
                }
            />

            <Route
                path="/services/software-it/ai-solutions"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <AiIntelligenceSolutions />
                    </motion.div>
                }
            />

            {/* Indux pages */}

            <Route
                path="/innovation-technology"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <InnovationAndTechnology />
                    </motion.div>
                }
            />

            <Route
                path="/legal-support"
                element={
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <LegalSupport />
                    </motion.div>
                }
            />


            <Route path="/services/*" element={<ServicePageLoader />} />

            {/* Contact Person Details and Officer Profile Details */}
            <Route
                path="/contact-us/contact-person"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ContactPersonDetails /></motion.div>}
            />
            <Route
                path="/contact-us/person/:slug" // DYNAMIC ROUTE for individual officer
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><OfficerProfileDetails /></motion.div>}
            />
            {/* Follow Apps Details Route */}
            <Route
                path="/contact-us/follow-apps"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <FollowAppsDetails />
                    </motion.div>
                }
            />
            {/* --- NEW ROUTES FOR SOCIAL GROUPS --- */}
            <Route
                path="/contact-us/follow-apps/whatsapp"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <GroupListingPage platform="whatsapp" />
                    </motion.div>
                }
            />
            <Route
                path="/contact-us/follow-apps/telegram"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <GroupListingPage platform="telegram" />
                    </motion.div>
                }
            />

            {/* --- BRANCH LOCATION ROUTES --- */}
            <Route
                path="/contact-us/branch-details"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <BranchDetails />
                    </motion.div>
                }
            />
            <Route
                path="/contact-us/branch/:branchId"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <BranchPageTemplate />
                    </motion.div>
                }
            />

            <Route
                path="/contact-us/feedback"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <FeedbackDetails />
                    </motion.div>
                }
            />

            <Route
                path="/contact-us/inquiry"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <InquiryDetails />
                    </motion.div>
                }
            />

            <Route
                path="/contact-us/suggestion"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <SuggestionDetails />
                    </motion.div>
                }
            />

            <Route
                path="/contact-us/request"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <RequestDetails />
                    </motion.div>
                }
            />

            <Route
                path="/contact-us/review"
                element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <ReviewDetails />
                    </motion.div>
                }
            />

        </Routes>
    );
};

export default AnimatedRoutes2;
