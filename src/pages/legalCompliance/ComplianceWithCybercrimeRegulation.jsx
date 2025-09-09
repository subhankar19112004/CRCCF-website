import React from "react";
import { Link } from "react-router-dom";

const ComplianceWithCybercrimeRegulation = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Compliance with Cybercrime Regulation
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Compliance with Cybercrime Regulation
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF’s investigative framework fully complies with cybercrime-specific 
          regulations set by law enforcement and judiciary authorities.
        </p>
        <p>
          Our team ensures procedural fairness and legal validation for all investigations.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Coordination with law enforcement agencies.</li>
          <li>Adoption of judicial investigation protocols.</li>
          <li>Documentation for legal admissibility of evidence.</li>
        </ul>
      </div>
    </section>
  );
};

export default ComplianceWithCybercrimeRegulation;
