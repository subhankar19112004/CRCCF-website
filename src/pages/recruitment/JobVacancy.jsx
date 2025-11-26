import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Still needed for INTERNAL animations
import { jobData } from '../../data/job_vacancy/jobData'; // Our complete data file

// NO Navbar, Footer, or ScrollToTop imports - App.jsx handles them!

const JobVacancy = () => {

  // This is for the "animation on scroll" effect for each card
  const cardVariants = {
    offscreen: {
      y: 50, // Start 50px down
      opacity: 0 // Start invisible
    },
    onscreen: {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    // We start right with the container.
    // Your App.jsx adds the padding-top, and AnimatedRoutes.jsx adds the page animation.
    <div className="container mx-auto px-4 py-16">
      
      {/* 1. Your Intro Description (Internal animation) */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mission</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to the CR Cyber Crime Foundation's career page. We are 
          a team of innovators dedicated to making the digital world safer.
          Browse our open positions and find where you fit in.
        </p>
      </motion.div>

      {/* 2. The Responsive Job List (with Scroll Animations) */}
      <div className="space-y-8">
        {jobData.map((job) => (
          
          // This motion.div wrapper handles the "scroll into view" animation
          <motion.div
            key={job.id}
            initial="offscreen"
            whileInView="onscreen" // Triggers when it enters the viewport
            viewport={{ once: true, amount: 0.3 }} // Animates only once
            variants={cardVariants}
          >
            {/* This motion.div adds the "border animation" on hover */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-6 relative"
              whileHover={{ 
                y: -5, // Lift the card up slightly
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(0, 100, 255, 0.5)" // Animate border color
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                
                {/* Job Info */}
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-semibold text-gray-900">{job.jobTitle}</h2>
                  <p className="text-gray-600 mt-1">
                    {job.department} | {job.jobLocation}
                  </p>
                  {/* The "Master Switch" for Status */}
                  <div className="mt-3">
                    {job.status === 'Available' ? (
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
                        Status: Available
                      </span>
                    ) : (
                      <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-4 py-1 rounded-full">
                        Status: Not Available
                      </span>
                    )}
                  </div>
                </div>

                {/* The "Apply Now" Button Logic */}
                <div className="w-full md:w-auto md:ml-6 flex-shrink-0">
                  {job.status === 'Available' ? (
                    // If 'Available', show the "Apply Now" button
                    <Link
                      to={`/job-details/${job.id}`} // Dynamic link (we'll add this route next)
                      className="block text-center w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                    >
                      Apply Now
                    </Link>
                  ) : (
                    // If 'Not Available', show a "View Details" button
                    <Link
                      to={`/job-details/${job.id}`} // Still links, so they can read
                      className="block text-center w-full md:w-auto bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default JobVacancy;