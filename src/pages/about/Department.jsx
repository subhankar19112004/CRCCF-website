// src/pages/about/Department.jsx
import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import DepartmentLanding from "../department/DepartmentLanding";

const Department = () => {
  return (
    
        <Routes>
          <Route index element={<DepartmentLanding />} />
        </Routes>
        
  );
};

export default Department;
