// src/components/Marquee.jsx
import React from "react";
import { marqueeData } from "../../data/induxData/marqueeData.jsx";

const Marquee = () => {
  return (
    <div className="bg-blue-900 text-white py-2 overflow-hidden relative">
      <div className="whitespace-nowrap animate-marquee flex gap-10 text-sm sm:text-base">
        {marqueeData.map((item, i) => (
          <span key={i} className="font-semibold">
            {item}
          </span>
        ))}

        {/* Duplicate for endless scrolling */}
        {marqueeData.map((item, i) => (
          <span key={`duplicate-${i}`} className="font-semibold">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
