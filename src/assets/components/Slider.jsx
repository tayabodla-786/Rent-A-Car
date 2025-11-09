import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

const images = [slide1, slide2, slide3];

const Slider = () => {
  const [slide, setSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    
      <div className="relative bg-amber-400 w-full h-screen overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-full shrink-0">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}


export default Slider
