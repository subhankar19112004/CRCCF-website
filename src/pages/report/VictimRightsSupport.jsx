import React from "react";
import { Route, Routes } from "react-router-dom";
import VictimRightsSupportLanding from "../victimSupport/VictimRightsSupportLanding";

const VictimRightsSupport = () => {
  return (
    <Routes>
      <Route index element={<VictimRightsSupportLanding />} />
    </Routes>
  );
};

export default VictimRightsSupport;
