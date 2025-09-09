import React from "react";
import { Routes, Route } from "react-router-dom";
import ReportACyberCrimeLanding from "../report/ReportACyberCrimeLanding";

const ReportACyberCrime = () => {
  return (
    <Routes>
      <Route index element={<ReportACyberCrimeLanding />} />
    </Routes>
  );
};

export default ReportACyberCrime;
 