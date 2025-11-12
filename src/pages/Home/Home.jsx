import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Cars from '../../components/Cars.jsx'
import Contact from '../../components/Contact.jsx'
import Map from '../../components/Map.jsx'
import Slider from '../../components/Slider.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Cars />
      <Map />
      <Contact />
    </>
  )
}

export default Home
