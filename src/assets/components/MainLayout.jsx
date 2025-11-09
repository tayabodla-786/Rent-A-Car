import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import ScrollRestoration from './ScrollRestoration'
import Slider from './Slider'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      
    </div>
  )
}

export default MainLayout
