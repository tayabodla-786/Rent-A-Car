
import { NavLink } from 'react-router-dom';



const Navbar = () => {


  return (
    <div className="relative bg-amber-400 w-full  overflow-hidden">
      

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 bg-black h-24 flex items-center justify-between">
          <h1 className="text-5xl ml-10 font-bold text-shadow-amber-800 text-shadow-lg text-gray-300">Car Hub</h1>
          <ul className="flex items-center mr-20 space-x-20">
            <li>
              <NavLink to="/" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-xl font-light hover:text-orange-700`}>
                Home
              </NavLink>
            </li>
            <li className='relative group '>
              <NavLink to="#" className={({ isActive }) => `duration-200 ${isActive ? "text-gray-300" : "text-gray-300"} text-xl font-light hover:text-orange-700`}>
                Car's & Services
              </NavLink>
              <ul className="absolute left-0 m-1 w-48 bg-white rounded-md border-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <NavLink to="/booking" className="block px-4 py-2 bg-black text-gray-300 hover:bg-orange-700 hover:text-black font-sans">Booking</NavLink>
                </li>
                <li>
                  <NavLink to="/booking" className="block px-4 py-2 bg-black text-gray-300 hover:bg-orange-700 hover:text-black  font-sans">Cars</NavLink>
                </li>
                <li>
                  <NavLink to="/reviews" className="block px-4 py-2 bg-black text-gray-300 hover:bg-orange-700 hover:text-black  font-sans">Clients Reviews</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-xl font-light hover:text-orange-700`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-xl font-light hover:text-orange-700`}>
                Contact
              </NavLink>
            </li>
            
            <li>
              <button className="bg-orange-700 text-gray-300 px-4 py-2 text-md  rounded-md  font-medium hover:bg-gray-300 hover:text-orange-700 transition duration-200">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;