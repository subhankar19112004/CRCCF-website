import React from "react";
import { motion } from "framer-motion";

const SuccessStoriesCaseStudies = () => {
  const cases = [
    { title: "Online Fraud Foiled", description: "A quick report prevented financial loss." },
    { title: "Cyberbullying Support", description: "Victim got timely counseling and legal aid." },
    { title: "Hacker Caught", description: "A hacker group was traced and arrested." },
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Success Stories & Case Studies
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="border p-5 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
            <p className="text-gray-600">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesCaseStudies;
