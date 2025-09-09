import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, BrainCircuit, Scale, Fingerprint } from 'lucide-react';
import { teamMembers } from "../../data/teamData.js" // Adjust the import path if needed

const OurTeam = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  const totalSlides = Math.ceil(teamMembers.length / visibleCards);

  useEffect(() => {
    if (isAutoScrolling && totalSlides > 1) {
      autoScrollInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, 5000);
    } else {
      clearInterval(autoScrollInterval.current);
    }
    return () => clearInterval(autoScrollInterval.current);
  }, [isAutoScrolling, totalSlides]);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);
  
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleMembers = () => {
    const start = currentSlide * visibleCards;
    const end = start + visibleCards;
    return teamMembers.slice(start, end);
  };

  const visibleMembers = getVisibleMembers();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    }),
    hover: { y: -10, scale: 1.02, transition: { duration: 0.3 } }
  };

  const sliderVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    }
  };

  return (
    <>
      <section className="mb-24 px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-full blur-lg opacity-50"></div>
              <Shield className="relative w-12 h-12 text-blue-600 mx-auto" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds protecting our digital future and creating innovative websites
          </p>
        </motion.div>

        <div className="relative">
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors group"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors group"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          <div className="relative overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={sliderVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                {visibleMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    custom={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative group cursor-pointer"
                    onClick={() => setActiveTeamMember(member)}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-md"></div>
                    </div>
                    <div className="relative bg-white rounded-2xl h-full">
                      <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-blue-200 text-sm">{member?.designation}</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                          {member.designation.includes('AI') ? (
                            <BrainCircuit className="w-6 h-6 text-blue-600" />
                          ) : member.designation.includes('Legal') ? (
                            <Scale className="w-6 h-6 text-blue-600" />
                          ) : member.designation.includes('Forensic') ? (
                            <Fingerprint className="w-6 h-6 text-blue-600" />
                          ) : (
                            <Shield className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {member?.department}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.expertise.slice(0, 3).map((skill, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
                            >
                              {skill}
                            </motion.span>
                          ))}
                          {member.expertise.length > 3 && (
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                              +{member.expertise.length - 3} more
                            </span>
                          )}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-2 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors text-left"
                        >
                          View Profile →
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}
        
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isAutoScrolling ? (
                <>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause Auto-scroll
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play Auto-scroll
                </>
              )}
            </button>
          </div>
        )}
      </section>

      <AnimatePresence>
        {activeTeamMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center md:pt-300 pt-[3500px] justify-center bg-black/40 backdrop-blur-md"
            onClick={() => setActiveTeamMember(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.16}
              onDragEnd={(event, info) => {
                if (info.offset.y > 120) setActiveTeamMember(null);
              }}
              className="bg-white w-full max-w-md md:max-w-xl rounded-t-3xl shadow-2xl relative max-h-[92vh] overflow-y-auto px-6 pt-3 pb-7"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-center mb-4">
                <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
              </div>
              <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl flex flex-col items-center justify-center pt-5 pb-5 mb-1">
                <img
                  src={activeTeamMember.image}
                  alt={activeTeamMember.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover mb-3"
                />
                <h3 className="text-lg md:text-2xl font-bold text-white">{activeTeamMember.name}</h3>
                <p className="text-blue-200 text-sm">{activeTeamMember.designation}</p>
              </div>
              {activeTeamMember.department && (
                <p className="text-center text-gray-500 mb-4 text-sm">{activeTeamMember.department}</p>
              )}
              <div className="mb-5">
                <h4 className="text-md font-semibold text-gray-900 mb-2 text-center">Professional Bio</h4>
                <p className="text-gray-600 text-center whitespace-pre-line">{activeTeamMember.bio}</p>
              </div>
              {activeTeamMember.expertise?.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-md font-semibold text-gray-900 mb-2 text-center">Areas of Expertise</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {activeTeamMember.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800 shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-center mt-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition"
                  onClick={() => setActiveTeamMember(null)}
                >
                  Close Profile
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurTeam;