import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlockchainFintechSolutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-6 md:p-12"
    >
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> /{" "}
        <Link to="/software" className="hover:text-blue-600">Software Services</Link> /{" "}
        <span className="text-gray-700">Blockchain & Fintech Solutions</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Blockchain & Fintech Solutions</h1>

      <p className="text-gray-700 mb-4">
        We design and build blockchain-powered fintech solutions that deliver transparency, security, 
        and decentralized control for financial transactions and services.
      </p>
      <p className="text-gray-700 mb-4">
        From payment gateways to decentralized finance (DeFi) platforms, we help organizations 
        integrate blockchain technology to enhance trust and operational efficiency.
      </p>
      <p className="text-gray-700 mb-4">
        Our team specializes in smart contract development, cryptocurrency wallets, 
        NFT marketplaces, and blockchain-based identity verification.
      </p>
      <p className="text-gray-700 mb-4">
        We ensure compliance with financial regulations and industry standards while 
        delivering innovative solutions for modern financial ecosystems.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Smart contract development</li>
        <li>Decentralized finance (DeFi) solutions</li>
        <li>Blockchain-based payment systems</li>
        <li>Cryptocurrency wallet applications</li>
        <li>Blockchain identity verification tools</li>
      </ul>
    </motion.div>
  );
};

export default BlockchainFintechSolutions;

