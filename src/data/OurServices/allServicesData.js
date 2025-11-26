// src/data/OurServices/allServicesData.js

// --- STEP 1: Import all your LANDING PAGE data files ---
// (These are your files with the long 'content' and 'tagline')

// from /education_sector
import { allServicesData2 } from './allServicesData2.js'
import { allServicesData3 } from './allServicesData3.js';
import { schoolManagementData } from './software_it_services/website_services/education_sector/schoolManagementData.js';
import { collegeWebDevelopmentData } from './software_it_services/website_services/education_sector/collegeWebDevelopmentData.js';
import { universityWebDevelopmentData } from './software_it_services/website_services/education_sector/universityWebDevelopmentData.js';
import { instituteWebDevelopmentData } from './software_it_services/website_services/education_sector/instituteWebDevelopmentData.js';
import { educationalLmsWebDevlopmentData } from './software_it_services/website_services/education_sector/educationalLmsWebDevlopmentData.js';
import { hospitalWebDevelopmentData } from './software_it_services/website_services/healthcare_sector/hospitalWebDevelopmentData.js';
import { doctorWebDevelopment } from './software_it_services/website_services/healthcare_sector/doctorWebDevelopment.js';
import { medicalShopWebDevelopmentData } from './software_it_services/website_services/healthcare_sector/medicalShopWebDevelopmentData.js';
import { medicalDistributerWebDevelopment } from './software_it_services/website_services/healthcare_sector/medicalDistributerWebDevelopment.js';
import { diagnosticLapWebDevelopmentData } from './software_it_services/website_services/healthcare_sector/diagnosticLapWebDevelopmentData.js';
import { healthcareEquipmentB2BWebDevelopmentData } from './software_it_services/website_services/healthcare_sector/healthcareEquipmentB2BWebDevelopmentData.js';
import { digitalBankingWebDevelopmentData } from './software_it_services/website_services/finance_and_legalSector/digitalBankingWebDevelopmentData.js';
import { centralGovernmentWebDevelopmentData } from './software_it_services/website_services/finance_and_legalSector/centralGovernmentWebDevelopmentData.js';
import { stateGovernmentWebDevelopmentData } from './software_it_services/website_services/finance_and_legalSector/stateGovernmentWebDevelopmentData.js';
import { lawFirmLawyerWebDevlopmentData } from './software_it_services/website_services/finance_and_legalSector/lawFirmLawyerWebDevlopmentData.js';
import { lawAgencyWebDevlopmentData } from './software_it_services/website_services/finance_and_legalSector/lawAgencyWebDevlopmentData.js';
import { courtJudicialServiceWebDevlopmentData } from './software_it_services/website_services/finance_and_legalSector/courtJudicialServiceWebDevlopmentData.js';
import { charteredAccountWebDevlopmentData } from './software_it_services/website_services/finance_and_legalSector/charteredAccountWebDevlopmentData.js';
import { investmentFinancialAdvisorWebDevlopmentData } from './software_it_services/website_services/finance_and_legalSector/investmentFinancialAdvisorWebDevlopmentData.js';
import { insuranceCompanyWebDevlopmentData } from './software_it_services/website_services/finance_and_legalSector/insuranceCompanyWebDevlopmentData.js';
import { startupWebDevlopmentData } from './software_it_services/website_services/buisness_startup/startupWebDevlopmentData.js';
import { corporateBusinessConsultingWebDevlopmentData } from './software_it_services/website_services/buisness_startup/corporateBusinessConsultingWebDevlopmentData.js';
import { itCompanySoftwareFirmWebDevlopmentData } from './software_it_services/website_services/buisness_startup/itCompanySoftwareFirmWebDevlopmentData.js';
import { manufacturingIndustrialWebDevlopmentData } from './software_it_services/website_services/buisness_startup/manufacturingIndustrialWebDevlopmentData.js';
import { wholesaleDistributorWebDevlopmentData } from './software_it_services/website_services/buisness_startup/wholesaleDistributorWebDevlopmentData.js';
import { supermarketGroceryWebDevlopmentData } from './software_it_services/website_services/buisness_startup/supermarketGroceryWebDevlopmentData.js';
import { constructionInfrastructureWebDevlopmentData } from './software_it_services/website_services/buisness_startup/constructionInfrastructureWebDevlopmentData.js';
import { eCommerceWebDevlopmentData } from './software_it_services/website_services/commerce_retail/eCommerceWebDevlopmentData.js';
import { multiVendorMarketplaceWebDevlopmentData } from './software_it_services/website_services/commerce_retail/multiVendorMarketplaceWebDevlopmentData.js';
import { shoppingMallRetailWebDevlopmentData } from './software_it_services/website_services/commerce_retail/shoppingMallRetailWebDevlopmentData.js'; 
import { realeStatePropertyWebDevlopmentData } from './software_it_services/website_services/commerce_retail/realeStatePropertyWebDevlopmentData.js';
import { hospitalManagementWebDevelopment } from './software_it_services/website_services/commerce_retail/hospitalManagementWebDevelopment.js';
import { travelTourismWebDevlopmentData } from './software_it_services/website_services/commerce_retail/travelTourismWebDevlopmentData.js';
import { eventManagementWebDevlopmentData } from './software_it_services/website_services/commerce_retail/eventManagementWebDevlopmentData.js';
import { logisticsTransportCompanyWebDevlopmentData } from './software_it_services/website_services/commerce_retail/logisticsTransportCompanyWebDevlopmentData.js';
import { digitalYoutubeCreatorWebDevlopmentData } from './software_it_services/website_services/media_content_lifestyle/digitalYoutubeCreatorWebDevlopmentData.js'; 
import { newsBlogWebDevlopmentData } from './software_it_services/website_services/media_content_lifestyle/newsBlogWebDevlopmentData.js';
import { astrologyWebDevlopmentData } from './software_it_services/website_services/media_content_lifestyle/astrologyWebDevlopmentData.js'; 
import { beautySalonWebDevlopmentData } from './software_it_services/website_services/media_content_lifestyle/beautySalonWebDevlopmentData.js';
import { photographyWebDevlopmentData } from './software_it_services/website_services/media_content_lifestyle/photographyWebDevlopmentData.js';
import { sportsClubFitnessCenterWebDevlopmentData } from './software_it_services/website_services/media_content_lifestyle/sportsClubFitnessCenterWebDevlopmentData.js';
import { policeDepartmentWebDevlopmentData  } from './software_it_services/website_services/community_social/policeDepartmentWebDevlopmentData.js';
import { ngoFoundationWebDevlopmentData } from './software_it_services/website_services/community_social/ngoFoundationWebDevlopmentData.js';
import { religiousTempleWebDevlopmentData } from './software_it_services/website_services/community_social/religiousTempleWebDevlopmentData.js';
import { communitySocietyWebDevlopmentData } from './software_it_services/website_services/community_social/communitySocietyWebDevlopmentData.js';
import { eLearningOnlineCourseWebDevlopmentData } from './software_it_services/website_services/e_learning/eLearningOnlineCourseWebDevlopmentData.js';
import { educationConsultancyWebDevlopmentData } from './software_it_services/website_services/e_learning/educationConsultancyWebDevlopmentData.js';
import { jobPortalWebDevlopmentData } from './software_it_services/website_services/specialized_applications/jobPortalWebDevlopmentData.js';
import { portfolioPersonalBrandingWebDevlopmentData } from './software_it_services/website_services/specialized_applications/portfolioPersonalBrandingWebDevlopmentData.js';
import { agricultureFarmingWebDevlopmentData } from './software_it_services/website_services/specialized_applications/agricultureFarmingWebDevlopmentData.js';
import { automobileVehicleDealershipWebDevlopmentData } from './software_it_services/website_services/specialized_applications/automobileVehicleDealershipWebDevlopmentData.js';
import { aiPowerChatWebDevelopmentData } from './software_it_services/website_services/specialized_applications/aiPowerChatWebDevelopmentData.js';
import { hotelRestaurantWebDevlopmentData } from './software_it_services/website_services/commerce_retail/hotelRestaurantWebDevlopmentData.js';
import { staticWebDevlopmentData } from './software_it_services/website_services/technical_solutions/staticWebDevlopmentData.js';
import { dynamicWebDevlopmentData } from './software_it_services/website_services/technical_solutions/dynamicWebDevlopmentData.js';
import { customWebDevlopmentData } from './software_it_services/website_services/technical_solutions/customWebDevlopmentData.js';
import { cmsBashedWebDevlopmentData } from './software_it_services/website_services/technical_solutions/cmsBashedWebDevlopmentData.js';
import { bookingReservationWebDevlopmentData } from './software_it_services/website_services/technical_solutions/bookingReservationWebDevlopmentData.js';
import { progressiveWebDevlopmentData } from './software_it_services/website_services/technical_solutions/progressiveWebDevlopmentData.js';
import { appSaasProductLandingWebDevlopmentData } from './software_it_services/website_services/technical_solutions/appSaasProductLandingWebDevlopmentData.js';


const schoolData = schoolManagementData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/school-management-solution' 
}));

const customWebDevlopment = customWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/custom-web-application'
}));


const collegeData = collegeWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/college-campus-platform'
}));

const universityData = universityWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/university-e-learning-platform'
}));

const instituteData = instituteWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/institute-management-system'
}));

const educationalLmsData = educationalLmsWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/learning-management-system'
}));


const hospitalData = hospitalWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/hospital-management-system'
}));

const doctorData = doctorWebDevelopment.map(item => ({
  ...item,
  path: '/services/software-it/website-services/doctor-clinic-platform'
}));

const medicalShopData = medicalShopWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/online-pharmacy-solution'
}));

const hotelRestaurantData = hotelRestaurantWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/hotel-restaurant-website'
}));

const medicalDistributerData = medicalDistributerWebDevelopment.map(item => ({
  ...item,
  path: '/services/software-it/website-services/medicine-distributor-system'
}));

const diagnosticLapData = diagnosticLapWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/diagnostic-lab-portal'
}));

const healthcareEquipmentB2BData = healthcareEquipmentB2BWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/healthcare-equipment-b2b'
}));

const digitalBankingData = digitalBankingWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/digital-banking-solution'
}));

const centralGovernmentData = centralGovernmentWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/central-govt-citizen-portal'
}));

const stateGovernmentData = stateGovernmentWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/state-govt-service-portal'
}));

const lawFirmLawyerData = lawFirmLawyerWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/law-firm-practice-management'
}));

const lawAgencyData = lawAgencyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/law-agency-portal'
}));

const courtJudicialServiceData = courtJudicialServiceWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/court-judicial-system'
}));

const charteredAccountData = charteredAccountWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/ca-client-management-portal'
}));

const investmentFinancialAdvisorData = investmentFinancialAdvisorWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/financial-advisor-platform'
}));

const insuranceCompanyData = insuranceCompanyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/insurance-policy-system'
}));

const startupWebDevlopment = startupWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/startup-mvp-development'
}));

const corporateBusinessConsultingData = corporateBusinessConsultingWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/corporate-consulting-tools'
}));

const itCompanySoftwareFirmWebDevlopment = itCompanySoftwareFirmWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/it-firm-client-portal'
}));

const manufacturingIndustrialWebDevlopment = manufacturingIndustrialWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/industrial-automation-system'
}));

const wholesaleDistributorWebDevlopment = wholesaleDistributorWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/wholesale-b2b-portal'
}));

const supermarketGroceryWebDevlopment = supermarketGroceryWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/online-grocery-solution'
}));

const constructionInfrastructureWebDevlopment = constructionInfrastructureWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/construction-management'
}));

const eCommerceWebDevlopment = eCommerceWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/e-commerce-platform-dev'
}));

const multiVendorMarketplaceWebDevlopment = multiVendorMarketplaceWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/multi-vendor-marketplace'
}));

const shoppingMallRetailWebDevlopment = shoppingMallRetailWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/retail-mall-engagement'
}));

const realeStatePropertyWebDevlopment = realeStatePropertyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/real-estate-portal'
}));

const hospitalManagementWebDevlopment = hospitalManagementWebDevelopment.map(item => ({
  ...item,
  path: '/services/software-it/website-services/hospitality-management'
}));

const travelTourismWebDevlopment = travelTourismWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/travel-booking-platform'
}));

const eventManagementWebDevlopment = eventManagementWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/event-management-system'
}));

const logisticsTransportCompanyWebDevlopment = logisticsTransportCompanyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/logistics-transport-system'
}));

const digitalYoutubeCreatorWebDevlopment = digitalYoutubeCreatorWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/digital-media-creator-tools'
}));

const newsBlogWebDevlopment = newsBlogWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/news-blog-platform'
}));

const astrologyWebDevlopment = astrologyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/astrology-portal'
}));

const beautySalonWebDevlopment = beautySalonWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/beauty-salon-booking'
}));

const photographyWebDevlopment = photographyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/photography-portfolio'
}));

const sportsClubFitnessCenterWebDevlopment = sportsClubFitnessCenterWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/fitness-center-management'
}));

const ngoFoundationWebDevlopment = ngoFoundationWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/ngo-foundation-platform'
}));

const religiousTempleWebDevlopment = religiousTempleWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/religious-temple-portal'
}));

const communitySocietyWebDevlopment = communitySocietyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/community-management'
}));

const eLearningOnlineCourseWebDevlopment = eLearningOnlineCourseWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/online-course-platform'
}));

const educationConsultancyWebDevlopment = educationConsultancyWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/ed-tech-consultancy-portal'
}));

const jobPortalWebDevlopment = jobPortalWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/job-portal-development'
}));

const portfolioPersonalBrandingWebDevlopment = portfolioPersonalBrandingWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/personal-branding-website'
}));

const agricultureFarmingWebDevlopment = agricultureFarmingWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/agri-tech-solution'
}));

const automobileVehicleDealershipWebDevlopment = automobileVehicleDealershipWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/automobile-showroom-portal'
}));

const aiPowerChatWebDevelopment = aiPowerChatWebDevelopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/ai-powered-chatbot'
}));

const policeDepartmentWebDevelopment =  policeDepartmentWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/police-department-website'
}));

const staticWebDevlopment = staticWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/static-website-app'
}));

const dynamicWebDevlopment = dynamicWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/dynamic-web-application'
}));

const cmsBashedWebDevlopment = cmsBashedWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/cms-based-development'
}));

const bookingReservationWebDevlopment = bookingReservationWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/booking-reservation-system'
}));

const progressiveWebDevlopment = progressiveWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/pwa-development'
}));

const appSaasProductLandingWebDevelopment = appSaasProductLandingWebDevlopmentData.map(item => ({
  ...item,
  path: '/services/software-it/website-services/saas-product-landing-page'
}));























// --- STEP 3: Combine them all into ONE single array ---
export const allServicesData = [
  ...schoolData,
  ...collegeData,
  ...universityData,
  ...staticWebDevlopment,
  ...instituteData,
  ...educationalLmsData,
  ...hospitalData,
  ...doctorData,
  ...medicalShopData,
  ...hotelRestaurantData,
  ...dynamicWebDevlopment,
  ...medicalDistributerData,
  ...diagnosticLapData,
  ...healthcareEquipmentB2BData,
  ...digitalBankingData,
  ...centralGovernmentData,
  ...stateGovernmentData,
  ...lawFirmLawyerData,
  ...lawAgencyData,
  ...policeDepartmentWebDevelopment,
  ...courtJudicialServiceData,
  ...charteredAccountData,
  ...investmentFinancialAdvisorData,
  ...insuranceCompanyData,
  ...startupWebDevlopment,
  ...corporateBusinessConsultingData,
  ...itCompanySoftwareFirmWebDevlopment,
  ...manufacturingIndustrialWebDevlopment,
  ...wholesaleDistributorWebDevlopment,
  ...supermarketGroceryWebDevlopment,
  ...constructionInfrastructureWebDevlopment,
  ...eCommerceWebDevlopment,
  ...multiVendorMarketplaceWebDevlopment,
  ...shoppingMallRetailWebDevlopment,
  ...realeStatePropertyWebDevlopment,
  ...hospitalManagementWebDevlopment,
  ...travelTourismWebDevlopment,
  ...eventManagementWebDevlopment,
  ...logisticsTransportCompanyWebDevlopment,
  ...digitalYoutubeCreatorWebDevlopment,
  ...newsBlogWebDevlopment,
  ...astrologyWebDevlopment,
  ...beautySalonWebDevlopment,
  ...photographyWebDevlopment,
  ...sportsClubFitnessCenterWebDevlopment,
  ...ngoFoundationWebDevlopment,
  ...religiousTempleWebDevlopment,
  ...communitySocietyWebDevlopment,
  ...eLearningOnlineCourseWebDevlopment,
  ...educationConsultancyWebDevlopment,
  ...jobPortalWebDevlopment,
  ...portfolioPersonalBrandingWebDevlopment,
  ...agricultureFarmingWebDevlopment,
  ...automobileVehicleDealershipWebDevlopment,
  ...aiPowerChatWebDevelopment,
  ...customWebDevlopment,
  ...cmsBashedWebDevlopment,
  ...bookingReservationWebDevlopment,
  ...progressiveWebDevlopment,
  ...appSaasProductLandingWebDevelopment,

  // Android services and iOS services data from allServicesData2.js
  ...allServicesData2,

  // Dextop Applications, Cloud Services, and other services can be added here similarly
  ...allServicesData3,

];