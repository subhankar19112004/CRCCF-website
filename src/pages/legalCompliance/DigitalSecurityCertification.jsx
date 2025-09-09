import React from "react";
import { Link } from "react-router-dom";

const DigitalSecurityCertification = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Digital Security Certification
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Digital Security Certification
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF is certified in multiple cybersecurity frameworks, ensuring high standards 
          in digital investigation and data security.
        </p>
        <p>
          Our certifications enhance trust, efficiency, and compliance for our operations.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ISO 27001 certified information security framework.</li>
          <li>Certified digital forensic laboratory standards.</li>
          <li>Compliance with national cybersecurity frameworks.</li>
        </ul>
      </div>
    </section>
  );
};

export default DigitalSecurityCertification;