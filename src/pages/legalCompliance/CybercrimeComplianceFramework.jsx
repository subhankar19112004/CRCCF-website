import React from "react";
import { Link } from "react-router-dom";

const CybercrimeComplianceFramework = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Cybercrime Compliance Framework
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Cybercrime Compliance Framework
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          Our Cybercrime Compliance Framework ensures every aspect of investigation 
          aligns with global and national compliance mandates.
        </p>
        <p>
          This framework is periodically updated for emerging threats and legal updates.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Policy-driven investigation approach.</li>
          <li>Integration of legal, ethical, and technical standards.</li>
          <li>Compliance monitoring and audits.</li>
        </ul>
      </div>
    </section>
  );
};

export default CybercrimeComplianceFramework;