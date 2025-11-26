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

        </Routes>
    );
};

export default AnimatedRoutes2;
