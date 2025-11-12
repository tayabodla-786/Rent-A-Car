import React from 'react'
import Contact from '../../components/Contact.jsx'
import Navbar from '../../components/Navbar.jsx'
import Map from '../../components/Map.jsx'
import Message from '../../components/Message.jsx'
import Services from '../../components/Services.jsx'

const Footer = () => {
  return (
    <div className='pt-24'>
      <Navbar />
      <Services />
      <Message />
      <Map />
      <Contact />
    </div>
  )
}

export default Footer
