import React from "react";
import { Link } from "react-router-dom";

const DigitalInvestigationInfrastructure = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Digital Investigation Infrastructure
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Digital Investigation Infrastructure
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF’s digital infrastructure is designed to support fast, secure, and efficient cyber investigations. 
          This includes forensic labs, high-performance servers, and secure data storage systems.
        </p>
        <p>
          Infrastructure upgrades are continuous to meet evolving cyber threats and investigation requirements.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dedicated forensic data centers.</li>
          <li>High-capacity secure cloud and on-prem solutions.</li>
          <li>Encrypted networks for evidence management.</li>
        </ul>
      </div>
    </section>
  );
};

export default DigitalInvestigationInfrastructure;
