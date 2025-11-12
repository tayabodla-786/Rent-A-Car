import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCar, FaShieldAlt, FaTruck, FaClock } from 'react-icons/fa';
import slide5 from '../assets/images/slide5.jpg'

const image =[
  slide5
]

const services = [
  {
    icon: FaCar,
    title: "Wide Range of Cars",
    description: "Choose from economy to luxury vehicles for any trip.",
  },
  {
    icon: FaShieldAlt,
    title: "Insurance Coverage",
    description: "Full coverage with 24/7 roadside assistance.",
  },
  {
    icon: FaTruck,
    title: "Free Delivery",
    description: "Pickup and drop-off at your location within city limits.",
  },
  {
    icon: FaClock,
    title: "Flexible Booking",
    description: "Hourly, daily, or weekly rentals with easy online booking.",
  },
];

const Services = () => {
  return (
    <div className=" bg-blue-100">
      <section className="relative w-full h-96 bg-linear-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>  {/* Overlay */}
        <img src={image} alt="About Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center mt-38">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact with Us</h1>
          
        </div>
      </section>  {/* Light blue background */}
      <div className="max-w-7xl mx-auto  ">
        <h2 className="text-3xl mt-8 font-bold text-center mb-8 text-gray-800">Our Services</h2>
        <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">Discover our premium car rental services designed for comfort and convenience.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10  lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;