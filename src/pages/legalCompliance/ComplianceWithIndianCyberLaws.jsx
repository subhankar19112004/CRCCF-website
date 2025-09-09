import React from "react";
import { Link } from "react-router-dom";

const ComplianceWithIndianCyberLaws = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Compliance with Indian Cyber Laws
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Compliance with Indian Cyber Laws
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF ensures strict adherence to all Indian cyber laws, including IT Act 2000, amendments,
          and data protection regulations.
        </p>
        <p>
          We actively align policies with government directives to maintain full legal compliance.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular compliance audits.</li>
          <li>Implementation of legal recommendations.</li>
          <li>Close collaboration with Indian regulatory bodies.</li>
        </ul>
      </div>
    </section>
  );
};

export default ComplianceWithIndianCyberLaws;
