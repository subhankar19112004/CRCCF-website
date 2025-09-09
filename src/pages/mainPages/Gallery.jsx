// src/pages/mainPages/Gallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Users,
  FileText,
  Shield,
  Award,
  Globe,
  Lightbulb,
  Search,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

const galleryCategories = [
  "All",
  "Events",
  "Investigations",
  "Training",
  "Community",
  "Publications",
  "Media",
];

const galleryItems = [
  {
    title: "Cyber Awareness Symposium 2023",
    description: "Annual cybersecurity conference with 500+ attendees featuring keynote speakers from industry leaders.",
    icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Events",
    date: "2023-05-15",
    imagesCount: 42,
  },
  {
    title: "Digital Forensics Case Study",
    description: "Successful resolution of a complex corporate data breach investigation.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Investigations",
    date: "2023-03-22",
    imagesCount: 18,
  },
  {
    title: "Advanced Threat Detection Workshop",
    description: "Hands-on training session for cybersecurity professionals on emerging threats.",
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Training",
    date: "2023-04-10",
    imagesCount: 36,
  },
  {
    title: "Rural Cybersecurity Initiative",
    description: "Outreach program educating rural communities about online safety practices.",
    icon: <Users className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    category: "Community",
    date: "2023-02-05",
    imagesCount: 27,
  },
  {
    title: "Annual Cybersecurity Report 2023",
    description: "Comprehensive analysis of emerging cyber threats and defense strategies.",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Publications",
    date: "2023-01-18",
    imagesCount: 1,
  },
  {
    title: "CRCCF on National News",
    description: "Feature coverage of our work in combating cybercrime across the region.",
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1475739138285-5f08a190c6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Media",
    date: "2023-06-30",
    imagesCount: 8,
  },
  {
    title: "Award Ceremony Highlights",
    description: "Moments from our annual excellence awards recognizing cybersecurity champions.",
    icon: <Camera className="w-8 h-8 text-pink-500" />,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Events",
    date: "2023-07-12",
    imagesCount: 53,
  },
  {
    title: "Cybersecurity Awareness Documentary",
    description: "Short film showcasing our mission to create a safer digital world.",
    icon: <Video className="w-8 h-8 text-orange-500" />,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    category: "Media",
    date: "2023-05-28",
    imagesCount: 1,
  },
  {
    title: "Cyber Range Training Facility",
    description: "Behind-the-scenes look at our state-of-the-art training center.",
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Training",
    date: "2023-03-15",
    imagesCount: 24,
  },
  {
    title: "School Cybersecurity Program",
    description: "Teaching digital safety to students in grades 6-12 across the district.",
    icon: <Users className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    category: "Community",
    date: "2023-04-22",
    imagesCount: 31,
  },
  {
    title: "Incident Response Handbook",
    description: "Practical guide for organizations to handle cybersecurity incidents.",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Publications",
    date: "2023-02-28",
    imagesCount: 1,
  },
  {
    title: "Cyber Defense Competition",
    description: "Annual event challenging teams to protect systems from simulated attacks.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
    image: "https://images.unsplash.com/photo-1581093057305-3ecb60a3d1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Events",
    date: "2023-08-15",
    imagesCount: 47,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      when: "beforeChildren"
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState(null);

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-12 max-w-4xl mx-auto"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore Our <span className="text-indigo-600">Digital Gallery</span>
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Witness our journey through impactful events, training programs, community initiatives, 
          and groundbreaking research in cybersecurity.
        </motion.p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search gallery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-md backdrop-blur-sm">
                  {item.icon}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <div className="flex items-center text-white/80 text-sm mt-1">
                    <span>{item.category}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 text-sm mb-3">
                      {expandedItem === index 
                        ? item.description 
                        : `${item.description.substring(0, 80)}${item.description.length > 80 ? '...' : ''}`
                      }
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded-md">
                        {item.imagesCount} {item.imagesCount === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="text-indigo-600 hover:text-indigo-800 ml-2"
                  >
                    {expandedItem === index ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: expandedItem === index ? 1 : 0,
                    height: expandedItem === index ? 'auto' : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300">
                      View Collection
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No items found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}

      {/* Stats Section */}
      <motion.div 
        className="mt-16 bg-indigo-600 rounded-2xl p-8 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">120+</div>
              <div className="text-indigo-100">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5,000+</div>
              <div className="text-indigo-100">People Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">350+</div>
              <div className="text-indigo-100">Cases Investigated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-indigo-100">Publications</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Want to feature your event in our gallery?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Partner with us for cybersecurity events, workshops, or community programs and get featured.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition duration-300">
            Contact Our Team
          </button>
          <button className="px-6 py-3 bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 rounded-lg shadow-sm transition duration-300">
            View Media Kit
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;