import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Contact from '../../components/Contact.jsx'
import Map from '../../components/Map.jsx'
import About from '../../components/About.jsx'

const AboutUs = () => {
  return (
    <div className='pt-24'>
      <Navbar />
      <About />
      <Map />
      <Contact />
    </div>
  )
}

export default AboutUs
