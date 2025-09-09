import React from 'react'
import SoftwareLanding from '../software/SoftwareLanding';
import { Route, Routes } from 'react-router';

const SoftwareServices = () => {
  return (
    <Routes>
      <Route index element={<SoftwareLanding />} />
    </Routes>
  )
}

export default SoftwareServices;