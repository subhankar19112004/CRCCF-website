import React from 'react'
import { Route, Routes } from 'react-router'
import CyberEducationLanding from '../cyberEducation/CyberEducationLanding'

const CyberEducation = () => {
  return (
    <div className='mt-3'>
      <Routes>
      <Route index element={<CyberEducationLanding />} />
    </Routes>
    </div>
  )
}

export default CyberEducation