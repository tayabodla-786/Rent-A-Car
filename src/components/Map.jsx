import React from 'react';

const MapSection = () => {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-4 text-orange-700">Our Location</h2>
        <p className="text-center text-xl mb-6 text-gray-600">66-D, State Life Housing Society, 54000</p>
        <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6807.482254171401!2d74.40603900000002!3d31.448793000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919034e547b0d25%3A0x78e577ea3bf246fc!2sCarlay%20Car%20Rental!5e0!3m2!1sen!2sus!4v1762705535326!5m2!1sen!2sus" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carlay Car Rental Location"
          />
        </div>
      </div>
    </div>
  );
};

export default MapSection;