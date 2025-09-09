import React from "react";
import { Link } from "react-router-dom";

const CyberLawComplianceStandards = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Cyber Law Compliance Standards
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Cyber Law Compliance Standards
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          Our operations are built upon industry-accepted cyber law compliance standards ensuring safe 
          and lawful digital practices.
        </p>
        <p>
          These standards ensure transparent, accountable, and ethical investigations.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compliance with international cyber regulations.</li>
          <li>Legal documentation and data handling practices.</li>
          <li>Regular review and upgrade of compliance policies.</li>
        </ul>
      </div>
    </section>
  );
};

export default CyberLawComplianceStandards;

