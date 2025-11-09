
import { NavLink } from 'react-router-dom';



const Navbar = () => {


  return (
    <div className="relative bg-amber-400 w-full  overflow-hidden">
      {/* Slider */}
      

      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 bg-black h-28 flex items-center justify-between">
          <h1 className="text-5xl ml-10 font-bold text-gray-300">Rent A Car</h1>
          <ul className="flex items-center mr-20 space-x-20">
            <li>
              <NavLink to="/" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-2xl font-light hover:text-orange-700`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-2xl font-light hover:text-orange-700`}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-2xl font-light hover:text-orange-700`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-300"} text-2xl font-light hover:text-orange-700`}>
                Contact
              </NavLink>
            </li>
            {/* Login Button */}
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