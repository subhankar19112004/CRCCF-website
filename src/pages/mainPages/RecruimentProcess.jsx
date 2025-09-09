import React from "react";
import { Routes, Route } from "react-router-dom";
import RecruitmentLanding from "../recruitment/RecruitmentLanding";

const RecruimentProcess = () => {
  return (
    <Routes>
      <Route index element={<RecruitmentLanding />} />
    </Routes>
  );
};

export default RecruimentProcess;
