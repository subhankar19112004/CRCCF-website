import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { resourceData } from "../../data/resourceData";

const ResourceLanding = () => {
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredResources = resourceData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Function to determine card shape based on index (only for desktop)
  const getCardShape = (index) => {
    if (isMobile) return 'rectangle'; // Force rectangle on mobile
    const shapes = ['square', 'rectangle', 'rhombus', 'circular'];
    return shapes[index % shapes.length];
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-6 sm:py-12 px-4 sm:px-8 lg:px-16">
      {/* Page Header */}
      <div className="text-center mb-6 sm:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl font-bold text-gray-800"
        >
          Cyber Resources & Downloads
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-xs sm:text-base text-gray-600 max-w-2xl mx-auto"
        >
          Explore a curated collection of cybersecurity resources, toolkits, forms,
          and compliance documents to support digital security operations.
        </motion.p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-6 sm:mb-12">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-xs sm:text-base"
        />
      </div>

      {/* Card Grid */}
      <motion.div
        layout
        className="grid gap-3 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredResources.map((resource, index) => {
          const shape = getCardShape(index);
          
          return (
            <motion.div
              key={resource.slug}
              whileHover={{ scale: isMobile ? 1.02 : 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/resources/${resource.slug}`)}
              className={`
                cursor-pointer group bg-white shadow-sm hover:shadow-md p-3 sm:p-6 border border-gray-800 relative overflow-hidden
                ${isMobile ? 'aspect-[4/3]' : 
                  shape === 'square' ? 'aspect-square' :
                  shape === 'rectangle' ? 'aspect-[4/3]' :
                  shape === 'rhombus' ? 'transform rotate-3 origin-center' :
                  'rounded-3xl'
                }
              `}
            >
              {/* Shape-specific background elements (desktop only) */}
              {!isMobile && shape === 'rhombus' && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-3"></div>
              )}
              
              {!isMobile && shape === 'circular' && (
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-200 transition-all duration-300"></div>
              )}

              <div className={`relative z-10 h-full flex flex-col ${
                !isMobile && shape === 'rhombus' ? 'transform -rotate-3' : ''
              }`}>
                <div className={`
                  text-indigo-500 mb-1 sm:mb-4 transition-transform text-lg sm:text-2xl
                  ${isMobile ? 'group-hover:rotate-3' :
                    shape === 'square' ? 'group-hover:scale-110' : 
                    shape === 'rhombus' ? 'group-hover:-rotate-6' : 
                    'group-hover:rotate-3'
                  }
                `}>
                  {resource.icon}
                </div>
                
                <h3 className="text-xs sm:text-base font-semibold mb-1 sm:mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-xxs sm:text-sm text-gray-600 mb-1 sm:mb-4 line-clamp-2">
                  {resource.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-1 sm:gap-2">
                  {resource.features?.slice(0, isMobile ? 2 : (shape === 'square' ? 1 : 2)).map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 sm:px-3 sm:py-1 text-xxs sm:text-xs rounded-full bg-indigo-50 text-indigo-600"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                
                <motion.span
                  className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 5 }}
                  animate={{ x: 0 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {filteredResources.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-8 sm:mt-12 text-xs sm:text-base"
        >
          No resources found matching your search.
        </motion.p>
      )}
    </div>
  );
};

export default ResourceLanding;