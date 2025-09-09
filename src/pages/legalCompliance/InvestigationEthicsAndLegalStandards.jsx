import React from "react";
import { Link } from "react-router-dom";

const InvestigationEthicsAndLegalStandards = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Investigation Ethics & Legal Standards
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Investigation Ethics & Legal Standards
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF adheres to the highest ethical standards while conducting cybercrime investigations. 
          Our team strictly follows legal protocols and ensures impartiality.
        </p>
        <p>
          Ethics training and continuous compliance monitoring are core elements of our approach.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Commitment to fairness and transparency.</li>
          <li>Following internationally accepted investigation principles.</li>
          <li>Respect for privacy and data protection regulations.</li>
        </ul>
      </div>
    </section>
  );
};

export default InvestigationEthicsAndLegalStandards;
