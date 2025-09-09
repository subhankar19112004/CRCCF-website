import React from "react";
import { Link } from "react-router-dom";

const TeamToolAndTechCapacity = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Team, Tool & Tech Capacity
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Team, Tool & Tech Capacity
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF leverages advanced forensic tools, cybersecurity technologies, and a skilled workforce 
          to handle complex digital investigations effectively.
        </p>
        <p>
          Investment in latest technologies keeps us ahead in cybercrime detection and prevention.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use of AI-powered forensic and threat intelligence tools.</li>
          <li>Well-trained investigators and ethical hackers.</li>
          <li>Secure and scalable digital infrastructure.</li>
        </ul>
      </div>
    </section>
  );
};

export default TeamToolAndTechCapacity;
