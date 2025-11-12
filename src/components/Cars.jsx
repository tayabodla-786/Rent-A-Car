import React from 'react'
import { NavLink } from 'react-router-dom';
import CarCards from '../constants/CarCards.js'

const Cars = () => {
  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-700">Available Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {CarCards.map((car) => (
            <div key={car.id} className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-3d transition-all duration-300 transform">
              <img src={car.image} alt={car.title} className="w-8xl h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4">  
                <h3 className="text-3xl font-semibold text-gray-800 mb-2">{car.title}</h3>
                <div className="bg-orange-700 text-white hover:bg-gray-100 hover:text-orange-700 transition-shadow duration-700 px-3 py-1 mt-2 mr-2 mb-2 inline-block rounded-md"> 
                  <span className="text-sm font-bold  cursor-pointer  ">FROM {car.price}</span>
                  
                </div>
                
              </div>
              
            </div>
            
          ))}
          <NavLink to="/Services">
            <div className='w-full h-auto '>
                  <button className='bg-orange-700 text-white hover:text-orange-700 hover:bg-white cursor-pointer font-serif p-2 rounded-xl'>See More... </button>
                </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cars
