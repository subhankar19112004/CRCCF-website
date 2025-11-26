// import { z } from 'zod';

// // --- 1. THE ZOD VALIDATION SCHEMA ---
// // We define all 48 validation rules here first
// export const validationSchema = z.object({
//   // Personal Details
//   fullName: z.string().min(3, "Full name must be at least 3 characters"),
//   fatherName: z.string().min(3, "Father's name is required"),
//   motherName: z.string().min(3, "Mother's name is required"),
//   dob: z.string().refine(val => val, "Date of Birth is required"),
//   placeOfBirth: z.string().min(2, "Place of birth is required"),
//   gender: z.string().min(1, "Please select a gender"),
//   maritalStatus: z.string().min(1, "Please select a marital status"),
//   nationality: z.string().min(2, "Nationality is required"),
//   religion: z.string().min(2, "Religion is required"),
//   caste: z.string().min(1, "Caste/Category is required"),
//   height: z.string().min(2, "Height is required (e.g., 5' 8\")"),
//   weight: z.string().min(2, "Weight is required (e.g., 70 kg)"),
//   bloodGroup: z.string().min(1, "Please select a blood group"),
//   identificationMark: z.string().min(2, "Identification mark is required (or write 'None')"),
  
//   // Contact & Residence
//   personalMobile: z.string().regex(/^[0-9]{10}$/, "Must be a 10-digit phone number"),
//   alternateMobile: z.string().regex(/^[0-9]{10}$/, "Must be a 10-digit number").optional().or(z.literal('')),
//   whatsAppNumber: z.string().regex(/^[0-9]{10}$/, "Must be a 10-digit phone number"),
//   personalEmail: z.string().email("Please enter a valid email"),
//   alternateEmail: z.string().email("Invalid email format").optional().or(z.literal('')),
//   residingSince: z.string().min(4, "Enter a valid year"),
//   residentialType: z.string().min(1, "Please select a type"),
//   stayingWith: z.string().min(1, "Please select an option"),
//   distanceFromOffice: z.string().min(1, "Enter distance"),
//   commuteMethod: z.string().min(1, "Please select a method"),
//   knownRelatives: z.string().min(2, "Required (or write 'None')"),

//   // Identification (KYC)
//   aadhaarCard: z.string().regex(/^[0-9]{12}$/, "Aadhaar must be 12 digits").optional().or(z.literal('')),
//   panCard: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format").optional().or(z.literal('')),
//   drivingLicense: z.string().optional(),
//   voterId: z.string().optional(),
//   passportNumber: z.string().optional(),

//   // Professional & Skills
//   lastQualification: z.string().min(2, "Qualification is required"),
//   computerCourse: z.string().min(2, "Required (or write 'None')"),
//   typingSpeed: z.string().min(1, "Enter speed (e.g., 40)"),
//   occupation: z.string().min(2, "Occupation is required"),
//   totalWorkExperience: z.string().min(1, "Required (e.g., 0, 2)"),

//   // Personal Profile
//   motherTongue: z.string().min(2, "Mother tongue is required"),
//   nickname: z.string().optional(),
//   languageKnown: z.string().min(2, "List languages you know"),
//   handedness: z.string().min(1, "Please select an option"),
//   personalityType: z.string().min(2, "e.g., Introvert, Extrovert"),
//   hobbies: z.string().min(3, "List at least one hobby"),
//   weakness: z.string().min(3, "List at least one weakness"),
//   strength: z.string().min(3, "List at least one strength"),
//   preferredLanguage: z.string().min(1, "Please select a language"),
//   familyType: z.string().min(1, "Please select a type"),
//   totalFamilyMembers: z.string().min(1, "Enter a number"),
//   personalMotto: z.string().optional(),

//   // Application Documents (We add these as they are essential)
//   resume: z.any().refine(file => file, "Resume is required."),
//   coverLetter: z.string().optional(),
// });


// // --- 2. THE DYNAMIC FORM RENDER SCHEMA ---
// // This array controls how the form is built.
// // `span: 2` means the field will take the full width.
// export const formGroups = [
//   {
//     groupName: "1. Personal Details",
//     fields: [
//       { id: "fullName", label: "Candidate Full Name", type: "text", placeholder: "Subhankar Jena" },
//       { id: "fatherName", label: "Candidate Father's Name", type: "text" },
//       { id: "motherName", label: "Candidate Mother's Name", type: "text" },
//       { id: "dob", label: "Date of Birth", type: "date" },
//       { id: "placeOfBirth", label: "Place of Birth", type: "text", placeholder: "e.g., Bhubaneswar" },
//       { id: "gender", label: "Gender", type: "select", options: ["Select Gender", "Male", "Female", "Other"] },
//       { id: "maritalStatus", label: "Marital Status", type: "select", options: ["Select Status", "Single", "Married", "Divorced", "Widowed"] },
//       { id: "nationality", label: "Nationality", type: "text", placeholder: "Indian" },
//       { id: "religion", label: "Religion", type: "text", placeholder: "e.g., Hinduism" },
//       { id: "caste", label: "Caste / Category", type: "text", placeholder: "e.g., General, OBC, SC/ST" },
//       { id: "height", label: "Height", type: "text", placeholder: "e.g., 5' 8\" or 173 cm" },
//       { id: "weight", label: "Weight", type: "text", placeholder: "e.g., 70 kg" },
//       { id: "bloodGroup", label: "Blood Group", type: "select", options: ["Select Group", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"] },
//       { id: "identificationMark", label: "Identification Mark", type: "text", placeholder: "e.g., Mole on right arm", span: 2 },
//     ]
//   },
//   {
//     groupName: "2. Contact & Residence",
//     fields: [
//       { id: "personalMobile", label: "Personal Mobile Number", type: "tel", placeholder: "9876543210" },
//       { id: "alternateMobile", label: "Alternate Mobile (Optional)", type: "tel", placeholder: "9876543211" },
//       { id: "whatsAppNumber", label: "WhatsApp Number", type: "tel", placeholder: "9876543210" },
//       { id: "personalEmail", label: "Personal Email ID", type: "email", placeholder: "you@example.com" },
//       { id: "alternateEmail", label: "Alternate Email ID (Optional)", type: "email", placeholder: "alt@example.com" },
//       { id: "residingSince", label: "Residing Since (Year)", type: "number", placeholder: "e.g., 1998" },
//       { id: "residentialType", label: "Residential Type", type: "select", options: ["Select Type", "Owned", "Rented", "Family Owned", "Hostel/PG"] },
//       { id: "stayingWith", label: "Staying With", type: "select", options: ["Select Option", "Family", "Alone", "Roommates"] },
//       { id: "distanceFromOffice", label: "Distance from Office (in km)", type: "number", placeholder: "e.g., 10" },
//       { id: "commuteMethod", label: "Daily Commute Method", type: "select", options: ["Select Method", "Personal Vehicle (2-wheeler)", "Personal Vehicle (4-wheeler)", "Public Transport", "Walk", "Other"] },
//       { id: "knownRelatives", label: "Known Relatives in Same City", type: "text", placeholder: "Name & Relation (or 'None')", span: 2 },
//     ]
//   },
//   {
//     groupName: "3. Identification (KYC)",
//     fields: [
//       { id: "aadhaarCard", label: "Aadhaar Card Number (Optional)", type: "text", placeholder: "1234 5678 9012" },
//       { id: "panCard", label: "PAN Card Number (Optional)", type: "text", placeholder: "ABCDE1234F" },
//       { id: "drivingLicense", label: "Driving License Number (Optional)", type: "text" },
//       { id: "voterId", label: "Voter ID Number (Optional)", type: "text" },
//       { id: "passportNumber", label: "Passport Number (Optional)", type: "text" },
//     ]
//   },
//   {
//     groupName: "4. Professional & Skills",
//     fields: [
//       { id: "lastQualification", label: "Last Educational Qualification", type: "text", placeholder: "e.g., B.Tech in Computer Science" },
//       { id: "computerCourse", label: "Computer Education Course Name", type: "text", placeholder: "e.g., PGDCA (or 'None')" },
//       { id: "typingSpeed", label: "Typing Speed (WPM)", type: "number", placeholder: "e.g., 40" },
//       { id: "occupation", label: "Current/Last Occupation", type: "text", placeholder: "e.g., Student, Software Developer" },
//       { id: "totalWorkExperience", label: "Total Work Experience (in years)", type: "number", placeholder: "e.g., 2.5" },
//     ]
//   },
//   {
//     groupName: "5. Personal Profile",
//     fields: [
//       { id: "motherTongue", label: "Mother Tongue", type: "text", placeholder: "e.g., Odia" },
//       { id: "nickname", label: "Nickname (Optional)", type: "text" },
//       { id: "languageKnown", label: "Languages Known (Read, Write, Speak)", type: "text", placeholder: "e.g., English, Hindi, Odia", span: 2 },
//       { id: "handedness", label: "Handedness", type: "select", options: ["Select Option", "Right-handed", "Left-handed", "Ambidextrous"] },
//       { id: "personalityType", label: "Personality Type", type: "text", placeholder: "e.g., Introvert, Extrovert" },
//       { id: "hobbies", label: "Hobbies", type: "textarea", placeholder: "e.g., Coding, reading books, playing cricket" },
//       { id: "weakness", label: "Weakness", type: "textarea", placeholder: "e.g., Public speaking" },
//       { id: "strength", label: "Strength", type: "textarea", placeholder: "e.g., Problem solving, time management" },
//       { id: "preferredLanguage", label: "Preferred Language for Communication", type: "select", options: ["Select Language", "English", "Hindi", "Odia", "Other"] },
//       { id: "familyType", label: "Family Type", type: "select", options: ["Select Type", "Nuclear Family", "Joint Family"] },
//       { id: "totalFamilyMembers", label: "Total Family Members", type: "number", placeholder: "e.g., 4" },
//       { id: "personalMotto", label: "Personal Motto or Life Goal (Optional)", type: "textarea", span: 2 },
//     ]
//   },
// ];


import { z } from 'zod';

// --- 1. THE ZOD VALIDATION SCHEMA ---
// This defines all the "required" rules.
export const validationSchema = z.object({
  
  // --- Step 1: Personal Details ---
  candidateFullName: z.string().min(3, "Full name must be at least 3 characters"),
  candidateFatherName: z.string().min(3, "Father's name is required"),
  candidateMotherName: z.string().min(3, "Mother's name is required"),
  dob: z.string().refine(val => val, "Date of Birth is required"),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Please select a gender"),
  maritalStatus: z.string().min(1, "Please select a marital status"),
  nationality: z.string().min(2, "Nationality is required"),
  religion: z.string().min(2, "Religion is required"),
  caste: z.string().min(1, "Caste/Category is required"),
  height: z.string().min(2, "Height is required (e.g., 5' 8\")"),
  weight: z.string().min(2, "Weight is required (e.g., 70 kg)"),
  bloodGroup: z.string().min(1, "Please select a blood group"),
  identificationMark: z.string().min(2, "Identification mark is required (or write 'None')"),

  // --- Step 2: Educational & Professional ---
  lastEducationalQualification: z.string().min(2, "Qualification is required"),
  computerEducationCourseName: z.string().min(2, "Required (or write 'None')"),
  typingSpeed: z.string().min(1, "Enter speed (e.g., 40)"),
  occupation: z.string().min(2, "Occupation is required"),
  totalWorkExperience: z.string().min(1, "Required (e.g., 0, 2)"),

  // --- Step 3: Language & Communication ---
  nickname: z.string().optional(),
  motherTongue: z.string().min(2, "Mother tongue is required"),
  languagesKnown: z.string().min(3, "List at least one language"),
  preferredLanguage: z.string().min(1, "Please select a language"),
  handedness: z.string().min(1, "Please select an option"),

  // --- Step 4: Residential Information ---
  residingSince: z.string().min(4, "Enter a valid year (YYYY)"),
  residentialType: z.string().min(1, "Please select a type"),
  stayingWith: z.string().min(1, "Please select an option"),
  distanceFromOffice: z.string().min(1, "Enter distance in km"),
  dailyCommuteMethod: z.string().min(1, "Please select a method"),
  knownRelativesInCity: z.string().min(2, "Required (or write 'None')"),

  // --- Step 5: Personality & Lifestyle ---
  personalityType: z.string().min(1, "Please select a type"),
  hobbies: z.string().min(3, "List at least one hobby"),
  weakness: z.string().min(3, "List at least one weakness"),
  strength: z.string().min(3, "List at least one strength"),
  familyType: z.string().min(1, "Please select a type"),
  totalFamilyMembers: z.string().min(1, "Enter a number"),
  personalMotto: z.string().optional(),

  // --- Step 6: Contact Information ---
  personalMobile: z.string().regex(/^[0-9]{10}$/, "Must be a 10-digit phone number"),
  alternateMobile: z.string().regex(/^[0-9]{10}$/, "Must be a 10-digit number").optional().or(z.literal('')),
  whatsappNumber: z.string().regex(/^[0-9]{10}$/, "Must be a 10-digit phone number"),
  personalEmail: z.string().email("Please enter a valid email"),
  alternateEmail: z.string().email("Invalid email format").optional().or(z.literal('')),

  // --- Step 7: Identification Details ---
  aadhaarNumber: z.string().regex(/^[0-9]{12}$/, "Aadhaar must be 12 digits"),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  drivingLicense: z.string().optional(),
  voterId: z.string().optional(),
  passportNumber: z.string().optional(),

  // --- Step 8: Bank Information ---
  accountNumber: z.string().min(5, "Enter a valid account number"),
  ifscCode: z.string().min(4, "Enter a valid IFSC code"),
  accountType: z.string().min(1, "Please select an account type"),
  bankName: z.string().min(2, "Bank name is required"),
  branchNameAddress: z.string().min(3, "Branch name is required"),

  // --- 9. Address (Present) ---
  presentAddressLine: z.string().min(5, "Address line is required"),
  presentCity: z.string().min(2, "City is required"),
  presentDistrict: z.string().min(2, "District is required"),
  presentState: z.string().min(2, "State is required"),
  presentPincode: z.string().regex(/^[0-9]{6}$/, "Must be a 6-digit pincode"),
  presentPoliceStation: z.string().min(3, "Police station is required"),
  
  // --- 10. Address (Permanent) ---
  permanentAddressLine: z.string().min(5, "Address line is required"),
  permanentCity: z.string().min(2, "City is required"),
  permanentDistrict: z.string().min(2, "District is required"),
  permanentState: z.string().min(2, "State is required"),
  permanentPincode: z.string().regex(/^[0-9]{6}$/, "Must be a 6-digit pincode"),
  permanentPoliceStation: z.string().min(3, "Police station is required"),

  // --- 11. Certificates & Proofs (Uploads) ---
  resume: z.any().refine(file => file, "Resume is required."),
  coverLetter: z.string().optional(),
  residenceCertificate: z.any().refine(file => file, "Residence Certificate is required."),
  casteCertificate: z.any().refine(file => file, "Caste Certificate is required."),
});


// --- 2. THE DYNAMIC FORM RENDER SCHEMA ---
// Now with 'info' added to every single field.
export const formSteps = [
  // --- STEP 1 ---
  {
    stepName: "1. Personal Details",
    fields: [
      { id: "candidateFullName", label: "Candidate Full Name", type: "text", placeholder: "e.g., Subhankar Jena", info: "Please enter your full name exactly as it appears on your 10th Marksheet or Aadhaar card." },
      { id: "candidateFatherName", label: "Candidate Father's Name", type: "text", info: "Enter your father's full name. Do not use prefixes like 'Mr.'." },
      { id: "candidateMotherName", label: "Candidate Mother's Name", type: "text", info: "Enter your mother's full name. Do not use prefixes like 'Mrs.'." },
      { id: "dob", label: "Date of Birth", type: "date", info: "Select your date of birth from the calendar. Ensure it matches your official documents." },
      { id: "placeOfBirth", label: "Place of Birth", type: "text", placeholder: "e.g., Bhubaneswar", info: "Enter the city or town where you were born." },
      { id: "age", label: "Age (as on today)", type: "number", placeholder: "e.g., 25", info: "Enter your current age in completed years." },
      { id: "gender", label: "Gender", type: "select", options: ["Select Gender", "Male", "Female", "Other"], info: "Select your gender." },
      { id: "maritalStatus", label: "Marital Status", type: "select", options: ["Select Status", "Single", "Married", "Divorced", "Widowed"], info: "Select your current marital status." },
      { id: "nationality", label: "Nationality", type: "text", placeholder: "Indian", info: "Enter your nationality. Default is 'Indian'." },
      { id: "religion", label: "Religion", type: "text", placeholder: "e.g., Hinduism", info: "Enter your religion." },
      { id: "caste", label: "Caste / Category", type: "text", placeholder: "e.g., General, OBC, SC/ST", info: "Specify your category (General, OBC, SC, ST, etc.) as per your government-issued caste certificate." },
      { id: "height", label: "Height", type: "text", placeholder: "e.g., 5' 8\" or 173 cm", info: "Enter your height in feet/inches or centimeters." },
      { id: "weight", label: "Weight", type: "text", placeholder: "e.g., 70 kg", info: "Enter your approximate weight in kilograms." },
      { id: "bloodGroup", label: "Blood Group", type: "select", options: ["Select Group", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], info: "Select your blood group. This is important for emergency purposes." },
      { id: "identificationMark", label: "Identification Mark", type: "text", placeholder: "e.g., Mole on right arm", span: 2, info: "A visible birthmark, mole, or scar. Write 'None' if you have no such marks." },
    ]
  },
  // --- STEP 2 ---
  {
    stepName: "2. Educational & Professional",
    fields: [
      { id: "lastEducationalQualification", label: "Last Educational Qualification", type: "text", placeholder: "e.g., B.Tech in Computer Science", span: 2, info: "Enter your highest completed degree or qualification (e.g., B.Tech, M.A., 12th Standard)." },
      { id: "computerEducationCourseName", label: "Computer Education Course Name", type: "text", placeholder: "e.g., PGDCA (or 'None')", info: "If you have any computer-related certification (PGDCA, Tally, etc.), enter it here. Otherwise, write 'None'." },
      { id: "typingSpeed", label: "Typing Speed (WPM)", type: "number", placeholder: "e.g., 40", info: "Enter your approximate typing speed in Words Per Minute (WPM)." },
      { id: "occupation", label: "Current/Last Occupation", type: "text", placeholder: "e.g., Student, Software Developer", info: "Enter your current job title. If you are not working, enter 'Student' or 'Not Employed'." },
      { id: "totalWorkExperience", label: "Total Work Experience (in years)", type: "number", placeholder: "e.g., 2.5", info: "Enter your total professional work experience in years. Use '0' for no experience." },
    ]
  },
  // --- STEP 3 ---
  {
    stepName: "3. Language & Communication",
    fields: [
      { id: "nickname", label: "Nickname (Optional)", type: "text", info: "If you have a name you prefer to be called, enter it here." },
      { id: "motherTongue", label: "Mother Tongue", type: "text", placeholder: "e.g., Odia", info: "Enter the primary language spoken in your home." },
      { id: "languagesKnown", label: "Languages Known (Read, Write, Speak)", type: "text", placeholder: "e.g., English, Hindi, Odia", span: 2, info: "List all languages you can read, write, or speak, separated by commas." },
      { id: "preferredLanguage", label: "Preferred Language for Communication", type: "select", options: ["Select Language", "English", "Hindi", "Other"], info: "Select the language you would prefer for official communication." },
      { id: "handedness", label: "Handedness", type: "select", options: ["Select Option", "Right-handed", "Left-handed", "Ambidextrous"], info: "Ambidextrous means you can use both your right and left hands with equal skill." },
    ]
  },
  // --- STEP 4 ---
  {
    stepName: "4. Residential Information",
    fields: [
      { id: "residingSince", label: "Residing Since (Year)", type: "number", placeholder: "e.g., 1998", info: "Enter the year you started living at your present address." },
      { id: "residentialType", label: "Residential Type", type: "select", options: ["Select Type", "Owned", "Rented", "Family Owned", "Hostel/PG"], info: "Select the type of your current residence." },
      { id: "stayingWith", label: "Staying With", type: "select", options: ["Select Option", "Family", "Alone", "Roommates"], info: "Select who you currently live with." },
      { id: "distanceFromOffice", label: "Distance from Office (in km)", type: "number", placeholder: "e.g., 10", info: "Enter the approximate one-way distance from your home to our office location." },
      { id: "dailyCommuteMethod", label: "Daily Commute Method", type: "select", options: ["Select Method", "Personal Vehicle (2-wheeler)", "Personal Vehicle (4-wheeler)", "Public Transport", "Walk", "Other"], span: 2, info: "Select your primary mode of transport for commuting to work." },
      { id: "knownRelativesInCity", label: "Known Relatives in Same City", type: "text", placeholder: "Name & Relation (or 'None')", span: 2, info: "If you have any relatives living in the same city, please provide their name and your relation. Otherwise, write 'None'." },
    ]
  },
  // --- STEP 5 ---
  {
    stepName: "5. Personality & Lifestyle",
    fields: [
      { id: "personalityType", label: "Personality Type", type: "select", options: ["Select Type", "Introvert", "Extrovert", "Ambivert"], info: "Select the personality type you most identify with." },
      { id: "familyType", label: "Family Type", type: "select", options: ["Select Type", "Nuclear Family", "Joint Family"], info: "A 'Nuclear' family is parents and children. A 'Joint' family includes other relatives like grandparents, uncles, etc." },
      { id: "totalFamilyMembers", label: "Total Family Members", type: "number", placeholder: "e.g., 4", info: "Enter the total number of members living in your immediate family." },
      { id: "hobbies", label: "Hobbies", type: "textarea", placeholder: "e.g., Coding, reading books, playing cricket", info: "List a few of your primary hobbies or interests." },
      { id: "weakness", label: "Weakness", type: "textarea", placeholder: "e.g., Public speaking", info: "Briefly describe one or two areas you are working to improve." },
      { id: "strength", label: "Strength", type: "textarea", placeholder: "e.g., Problem solving, time management", info: "Briefly describe one or two of your key personal or professional strengths." },
      { id: "personalMotto", label: "Personal Motto or Life Goal (Optional)", type: "textarea", span: 2, info: "If you have a personal motto or a guiding principle, you can share it here." },
    ]
  },
  // --- STEP 6 ---
  {
    stepName: "6. Contact Information",
    fields: [
      { id: "personalMobile", label: "Personal Mobile Number", type: "tel", placeholder: "9876543210", info: "Enter your 10-digit personal number without +91. This will be our primary contact number for you." },
      { id: "alternateMobile", label: "Alternate Mobile (Optional)", type: "tel", placeholder: "9876543211", info: "A secondary number (e.g., family member's) in case we cannot reach you." },
      { id: "whatsappNumber", label: "WhatsApp Number", type: "tel", placeholder: "9876543210", info: "Enter your 10-digit number used for WhatsApp. If same as personal, enter it again." },
      { id: "personalEmail", label: "Personal Email ID", type: "email", placeholder: "you@example.com", info: "Enter your primary email address. All official communication will be sent here." },
      { id: "alternateEmail", label: "Alternate Email ID (Optional)", type: "email", placeholder: "alt@example.com", span: 2, info: "A secondary email address for backup communication." },
    ]
  },
  // --- STEP 7 ---
  {
    stepName: "7. Identification Details",
    fields: [
      { id: "aadhaarNumber", label: "Aadhaar Card Number", type: "text", placeholder: "1234 5678 9012", info: "Enter your 12-digit unique identification number. Ensure it is correct." },
      { id: "panNumber", label: "PAN Card Number", type: "text", placeholder: "ABCDE1234F", info: "Enter your 10-character alphanumeric Permanent Account Number." },
      { id: "drivingLicense", label: "Driving License Number (Optional)", type: "text", info: "If you have a driving license, enter the number here." },
      { id: "voterId", label: "Voter ID Number (Optional)", type: "text", info: "If you have a Voter ID, enter the number here." },
      { id: "passportNumber", label: "Passport Number (Optional)", type: "text", span: 2, info: "If you have a passport, enter the number here." },
    ]
  },
  // --- STEP 8 ---
  {
    stepName: "8. Bank Information",
    fields: [
      { id: "accountNumber", label: "Account Number", type: "text", info: "Your personal bank account number (for salary-related purposes)." },
      { id: "ifscCode", label: "IFSC Code", type: "text", info: "The 11-character IFSC code of your bank branch." },
      { id: "accountType", label: "Account Type", type: "select", options: ["Select Type", "Savings", "Current"], info: "Select the type of your bank account." },
      { id: "bankName", label: "Bank Name", type: "text", info: "The full name of your bank (e.g., State Bank of India)." },
      { id: "branchNameAddress", label: "Branch Name & Address", type: "textarea", span: 2, info: "Enter the name and address of your bank branch." },
    ]
  },
  // --- STEP 9 ---
  {
    stepName: "9. Present Address",
    fields: [
      { id: "presentAddressLine", label: "Address Line", type: "textarea", span: 2, info: "Your full current residential address (House No., Street, Landmark)." },
      { id: "presentCity", label: "City", type: "text", info: "The city you currently live in." },
      { id: "presentDistrict", label: "District Name", type: "text", info: "The district you currently live in." },
      { id: "presentState", label: "State", type: "text", info: "The state you currently live in." },
      { id: "presentPincode", label: "Postal Pincode", type: "text", info: "The 6-digit postal code of your area." },
      { id: "presentPoliceStation", label: "Police Station Address", type: "textarea", span: 2, info: "The name and address of the police station nearest to your present address." },
    ]
  },
  // --- STEP 10 ---
  {
    stepName: "10. Permanent Address",
    // TODO: Add a checkbox here: "Same as Present"
    fields: [
      { id: "permanentAddressLine", label: "Address Line", type: "textarea", span: 2, info: "Your full permanent address (if different from present address)." },
      { id: "permanentCity", label: "City", type: "text", info: "The city of your permanent address." },
      { id: "permanentDistrict", label: "District Name", type: "text", info: "The district of your permanent address." },
      { id: "permanentState", label: "State", type: "text", info: "The state of your permanent address." },
      { id: "permanentPincode", label: "Postal Pincode", type: "text", info: "The 6-digit postal code of your permanent address." },
      { id: "permanentPoliceStation", label: "Police Station Address", type: "textarea", span: 2, info: "The name and address of the police station nearest to your permanent address." },
    ]
  },
  // --- STEP 11 (FINAL STEP) ---
  {
    stepName: "11. Document Upload",
    fields: [
      { id: "resume", label: "Upload Resume (PDF, DOCX)", type: "file", info: "Your most recent resume or CV. (Max 10MB)" },
      { id: "residenceCertificate", label: "Upload Residence Certificate (PDF)", type: "file", info: "Upload a scanned copy of your official residence/domicile certificate." },
      { id: "casteCertificate", label: "Upload Caste Certificate (PDF)", type: "file", info: "Upload a scanned copy of your government-issued caste certificate." },
      { id: "coverLetter", label: "Cover Letter (Optional)", type: "textarea", span: 2, placeholder: "Tell us why you are the best fit for this role...", info: "This is optional, but a good cover letter helps you stand out." },
    ]
  },
];