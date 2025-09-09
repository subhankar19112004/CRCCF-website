// src/pages/about/LegalCompliance.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import LegalComplianceLanding from "../legalCompliance/LegalComplianceLanding";

const LegalCompliance = () => {
  return (
    <Routes>
      <Route index element={<LegalComplianceLanding />} />
    </Routes>
  );
};

export default LegalCompliance;
