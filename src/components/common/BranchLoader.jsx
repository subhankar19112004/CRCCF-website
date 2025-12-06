// src/components/common/BranchLoader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SkeletonBlock = ({ className }) => (
    <motion.div 
        className={`bg-gray-100 rounded-lg ${className}`}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
);

const BranchLoader = () => {
    return (
        <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header Skeleton */}
            <div className="flex flex-col items-center mb-16 space-y-4">
                <SkeletonBlock className="h-12 w-3/4 md:w-1/2" />
                <SkeletonBlock className="h-6 w-1/3" />
            </div>

            {/* Content Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Side */}
                <SkeletonBlock className="w-full h-96 rounded-2xl" />

                {/* Text Side */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <SkeletonBlock className="h-8 w-1/3" />
                        <SkeletonBlock className="h-4 w-full" />
                        <SkeletonBlock className="h-4 w-5/6" />
                    </div>
                    
                    <div className="space-y-4 pt-8">
                        <SkeletonBlock className="h-16 w-full" />
                        <SkeletonBlock className="h-16 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchLoader;