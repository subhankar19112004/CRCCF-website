// src/data/applicationData.js
export const applications = [
  {
    id: "1",
    name: "Sonali Sharma",
    dob: "2000-05-10", // yyyy-mm-dd
    referenceNumber: "CRCCF/2025/12345",
    status: "Under Verification", // one of: Submitted, Under Verification, Final Review, Approved, Rejected
    postApplied: "Data Entry Operator",
    submissionDate: "2025-10-10",
    fatherName: "Ramesh Sharma",
    email: "sonali.sharma@example.com",
    phone: "+91-9876543210",
    remarks: "Documents received. Waiting for verification.",
  },
  {
    id: "2",
    name: "Amit Kumar",
    dob: "1995-01-15",
    referenceNumber: "CRCCF/2025/54321",
    status: "Final Review",
    postApplied: "Junior Accountant",
    submissionDate: "2025-09-25",
    fatherName: "Vinod Kumar",
    email: "amit.k@example.com",
    phone: "+91-9123456780",
    remarks: "Shortlisted for final interview.",
  },
  {
    id: "3",
    name: "Priya Das",
    dob: "1998-03-22",
    referenceNumber: "CRCCF/2025/98765",
    status: "Approved",
    postApplied: "Receptionist",
    submissionDate: "2025-08-14",
    fatherName: "Suresh Das",
    email: "priya.das@example.com",
    phone: "+91-9988776655",
    remarks: "Approved and offer letter sent.",
  },
];
