import React from 'react'
import Navbar from './Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Contact from './Contact.jsx'
import Map from './Map.jsx'
import Cars from './Cars.jsx'
import Slider from './Slider.jsx'

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default MainLayout
