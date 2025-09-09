import React from "react";
import { Link } from "react-router-dom";

const OperationalResourcesAndTeam = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Operational Resources & Team
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Operational Resources & Team
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF’s team comprises experienced investigators, cybersecurity analysts, and 
          forensic experts supported by state-of-the-art operational resources.
        </p>
        <p>
          Team training and resource development are prioritized to handle evolving cyber threats.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dedicated cyber investigation and forensic labs.</li>
          <li>Highly skilled multidisciplinary investigation team.</li>
          <li>Continuous professional development programs.</li>
        </ul>
      </div>
    </section>
  );
};

export default OperationalResourcesAndTeam;
