import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUsLanding from "../about/AboutUsLanding";

const AboutUs = () => {
  return (
    <Routes>
      <Route index element={<AboutUsLanding />} />
    </Routes>
  );
};

export default AboutUs;
