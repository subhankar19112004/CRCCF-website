import React from "react";
import { Link } from "react-router-dom";

const OurCyberInvestigationCapacity = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Our Cyber Investigation Capacity
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Cyber Investigation Capacity
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF is equipped with advanced tools and highly trained professionals capable of 
          conducting complex cyber investigations.
        </p>
        <p>
          Our capacity includes incident response, malware analysis, forensic imaging, and digital 
          evidence preservation with complete chain-of-custody compliance.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Team of certified digital forensic experts.</li>
          <li>Advanced forensic labs with secure infrastructure.</li>
          <li>Capability to handle large-scale cyber attack investigations.</li>
        </ul>
      </div>
    </section>
  );
};

export default OurCyberInvestigationCapacity;
