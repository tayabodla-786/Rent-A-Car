import React from "react";
import slide3 from '../assets/images/slide3.jpg'
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaCar, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';

const images =[
  slide3
]

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-96 bg-linear-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>  {/* Overlay */}
        <img src={images} alt="About Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl mb-6">Your trusted partner for premium car rentals in Lahore, Islamabad, and Karachi.</p>
          <NavLink to="/services" className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition duration-200">
            Booking Now
          </NavLink>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Founded in 2015, Rent A Car started as a small fleet of 10 vehicles in Lahore. Today, we serve thousands of customers across Pakistan with a diverse range of cars, from economy to luxury. Our mission is to make travel seamless, affordable, and enjoyable.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <FaCalendarAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">10k+ Years</h3>
              <p className="text-gray-600">In the business</p>
            </div>
            <div className="text-center">
              <FaCar className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">100+</h3>
              <p className="text-gray-600">Cars in fleet</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">5K+</h3>
              <p className="text-gray-600">Happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Mission</h3>
              <p className="text-gray-600">To provide reliable, affordable car rentals with exceptional customer service, making every journey memorable across Pakistan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Vision</h3>
              <p className="text-gray-600">To be the leading car rental provider in South Asia, expanding our fleet and services with innovation and sustainability at heart.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 mb-12">Our dedicated team ensures your rental experience is seamless and enjoyable.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 flex flex-col  rounded-lg">
              <img src="https://via.placeholder.com/150x150?text=John+Doe" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-50 p-6 flex flex-col  rounded-lg">
              <img src="https://via.placeholder.com/150x150?text=John+Doe" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-50 p-6 flex flex-col  rounded-lg">
              <img src="https://via.placeholder.com/150x150?text=John+Doe" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
          <p className="text-gray-600 mb-12">Join thousands of satisfied renters who trust us for their journeys.</p>
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <div className="flex items-center justify-center mb-4">
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
              </div>
              <p className="text-gray-600 mb-4">"Excellent service and clean cars. Highly recommend!"</p>
              <p className="font-semibold text-gray-800">- Sarah K., Lahore</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <div className="flex items-center justify-center mb-4">
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
              </div>
              <p className="text-gray-600 mb-4">"Fast pickup and great value. Will use again!"</p>
              <p className="font-semibold text-gray-800">- Ahmed R., Islamabad</p>
            </div>
            
          </div>
        </div>
      </section>
      <div className= " w-full h-auto text-center">
              <input className="bg-white w-4xl m-5 p-3 rounded-3xl outline-none  h-48 shadow-gray-400 shadow-lg" type="text" placeholder="Write Something About us" /><br />
            <button className="bg-white shadow-gray-400 hover:bg-gray-50 outline-none cursor-pointer rounded-xl shadow-lg m-6 p-2 w-24 ">Submit</button>
            </div>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent?</h2>
        <p className="text-xl mb-6">Book your dream car today and hit the road with confidence.</p>
        <NavLink to="/services" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-200">
          Get Started
        </NavLink>
      </section>
    </div>
    // <div className="bg-gray-300 align-text-bottom text-black w-full h-auto">
    //   <div className="p-10">

    //     <h1 className="p-1 text-3xl font-bold text-orange-700 flex justify-center">Carlay Car Rental - Rent a Car Services in Lahore, Islamabad & Karachi</h1>

    //     <p className="p-6">
    //       <strong className="text-orange-700 font-bold ">Carlay Car</strong> Rental is a premium Car Rental Services Company in Pakistan
    //       and is known for setting the highest standards in line with the
    //       international car renting industry. We as a professional company for
    //       Rent a Car in Lahore, Karachi and Islamabad and provide car rental
    //       services to large corporates based in Pakistan as well as the
    //       individual clients especially expatriates visiting Pakistan on
    //       vacations. Our primary objective is to delight our customers and thus
    //       we try to stand out in customer orientation and care by offering
    //       customer-friendly and easy to understand car rental packages. We
    //       provide all travel-related services under one roof, including car
    //       rental services, hotel reservations, and other travel-related
    //       services, and try to go the extra mile to assist our clients. <br /> <br /> We
    //       started our company in 2014 from just a few vehicles and have now
    //       expanded our fleet to become a major provider of car rental services
    //       with a wide range of vehicles in Lahore, Karachi, and Islamabad. <br /> <br /> If
    //       you are looking to rent a car in Lahore, Karachi, Islamabad,
    //       Faisalabad, Multan or Peshawar; whether it be new Honda Civic, Toyota
    //       Corolla, Honda City, Suzuki Cultus, Hyundai Grand Starex, Hyundai
    //       Elantra, Kia Sportage, Tucson, Toyota Hiace Hi-roof Grand Cabin,
    //       Prado, or Land Cruiser V8, we have the solution to all your car rental
    //       requirements. We are involved in every aspect of car hire services
    //       from time and mileage rentals to the daily and monthly car rental to
    //       even long term rentals. We provide cars both on self-drive (without
    //       driver) and with driver (Jeeps and Vans are however rented with driver
    //       only). All of our vehicles are comprehensively insured and liability
    //       of our customers is limited in case of any mishap/accident for
    //       chauffeur driven services; provided they abide by the law of the land
    //       and the speed limits set by the relevant authorities. We are deemed as
    //       the primary choice vendor by many national and multinational
    //       companies. <br /> <br /> Presently, we are renting cars in Lahore and Islamabad both
    //       on self-drive as well as with drivers; while we are providing car
    //       rental services in other cities of Pakistan, including Karachi,
    //       Hyderabad, Faisalabad, Multan, Peshawar, Gujranwala, Sialkot,
    //       Kartarpur, Narowal, with driver only. Whether you are looking to rent
    //       a car Lahore with driver or rent a car in Lahore without driver, we
    //       have got you covered. <br /> <br /> Our Head Office is located at Lahore however we
    //       provide Rent a Car services all across Pakistan. Visit our car rental
    //       website to rent a car in Lahore, rent a car in Islamabad, rent a car
    //       in Karachi, and rent a car in Faisalabad. Our car rental system
    //       enables us to concentrate more on customer service and to give more
    //       attention to detail. Our policy to upgrade fleet every 3rd year has
    //       helped us to achieve our objective of being the best <strong className="text-gray-800 font-bold ">car rental company</strong> in Pakistan. <br /><br /> We are always looking to improve and add new
    //       vehicles in our fleet, as and when they are launched in Pakistan. Our
    //       fleet currently includes Honda Civics, Honda City, Toyota Corollas,
    //       Suzuki Cultus, Land Cruiser Prado/V8, KIA Sportage, Hyundai
    //       Tucson/Elantra and Hyundai Grand Starex vehicles. <br /><br /> <strong className="text-gray-800 font-bold ">Our Operations</strong> <br /><br /> We
    //       provide rent a car services in Lahore, Karachi and Islamabad. However,
    //       cars in Karachi and Islamabad are available with driver only while in
    //       Lahore we provide cars both with driver and without driver basis. <br /><br /> In
    //       Lahore, we serve our customers in all areas including Lahore Airport,
    //       DHA Lahore, Park View Society, Lahore Cantt., Zaman Park, Wahga
    //       Border, Model Town, Garden Town, Kareem Block Town, Wapda Town, Faisal
    //       Town, Mustafa Town, Johar Town, Canal View, Valencia Town, Bahria
    //       Town, Bahria Orchard, Tricon Village, Sukh Chayn Gardens, Izmir
    //       Society, Green Town, Township, PIA Society, Garden Town, Barkat
    //       Market, Ferozpur Road, Jail Road, Gulberg, Lahore Gymkhana, Mall Road,
    //       Scotch Corner, Mughalpura, Saddar, Shadbagh, Harbanspura, Lahore
    //       Railway Station, Allama Iqbal Town, Samanabad, Bedian Road, DHA,
    //       Defence Housing Authority, Nishat Colony, Askari IX, Askari X, Askari
    //       XI, EME Society, DHA Rahber, State Life Society, NFC Society, PCSIR
    //       Society, Punjab Co-operative Housing Society, LDA Avenue, Lake City,
    //       Tech Society, PCSIR Society, Eden Cottages, Eden Villas, Cavalry
    //       Ground, Emporium Mall, Packages Mall, PC Hotel, Avari Hotel, Faletti’s
    //       Hotel, Nishat Hotel, Residency Hotel, Sunfort Hotel Gulberg, Heritage
    //       Luxury Suites, Best Western Hotel, Luxus Grand Hotel, Ambassador
    //       Hotel, Royaute Luxury, Lahore Continental, Bahria Grand Hotel, Hotel
    //       One, Park Lane Hotel and across the city. <br /><br /> In Islamabad and Karachi, we
    //       provide full-fledge chauffeur-driven car rental services, however, in
    //       other cities of Pakistan, we only provide intercity pick and drop
    //       services or provide cars on self-driven basis.
          
    //     </p>
    //   </div>
    // </div>
  );
};

export default About;
