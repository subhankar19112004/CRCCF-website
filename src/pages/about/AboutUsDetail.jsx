import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {aboutUsData} from '../../data/aboutUsData';
import { motion } from 'framer-motion';

const AboutUsDetail = () => {
  const { slug } = useParams();
  const item = aboutUsData.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        Page not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link> /&nbsp;
        <Link to="/about" className="text-blue-600 hover:underline">About Us</Link> /&nbsp;
        <span className="text-gray-700">{item.title}</span>
      </nav>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="w-14 h-14 mb-4">{item.icon}</div>
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{item.title}</h1>
        <p className="text-gray-600 text-lg">{item.description}</p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="prose max-w-3xl prose-blue"
      >
        {item.content}
      </motion.div>
    </section>
  );
};

export default AboutUsDetail;
