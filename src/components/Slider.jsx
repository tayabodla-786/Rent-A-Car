import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';

const images = [slide1, slide4, slide5 , slide2, slide3];

console.log("images here", images)

const Slider = () => {
  const [slide, setSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    
    return () => clearInterval(interval );
  }, []);

  return (
    
      <div className="relative  w-full h-screen overflow-hidden">
      
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-screen shrink-0">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}


export default Slider
