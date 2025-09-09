import React from 'react'
import ResourceLanding from '../resources/ResourceLanding';
import { Route, Routes } from 'react-router';

const ResourceAndDownload = () => {
  return (
    <Routes>
      <Route index element={<ResourceLanding />} />
    </Routes>
  )
}

export default ResourceAndDownload;