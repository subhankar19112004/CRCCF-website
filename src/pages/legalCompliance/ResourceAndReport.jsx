import React from "react";
import { Link } from "react-router-dom";

const ResourceAndReport = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Resource & Report
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Resource & Report
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF publishes legal and compliance resources along with detailed annual 
          reports on cybercrime handling and digital investigations.
        </p>
        <p>
          Reports enhance transparency and strengthen stakeholder trust.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Annual cybercrime response reports.</li>
          <li>Research and compliance guides.</li>
          <li>Open-access cybersecurity awareness resources.</li>
        </ul>
      </div>
    </section>
  );
};

export default ResourceAndReport;
