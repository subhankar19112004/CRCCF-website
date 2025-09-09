import React from "react";
import { Link } from "react-router-dom";

const CybercrimeResponseCapabilities = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Cybercrime Response Capabilities
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Cybercrime Response Capabilities
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF provides rapid response to cybercrime incidents, minimizing impact and 
          supporting victims through immediate technical and legal assistance.
        </p>
        <p>
          Our incident response framework ensures effective detection, mitigation, and recovery.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>24/7 cybercrime emergency response team.</li>
          <li>Real-time threat intelligence and analysis.</li>
          <li>Victim support and digital evidence handling.</li>
        </ul>
      </div>
    </section>
  );
};

export default CybercrimeResponseCapabilities;
