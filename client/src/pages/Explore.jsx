import React from 'react';
 // Import if you have additional custom styles
import Navbar from '../components/Navbar';
import img from '../assets/jagannath.jpg'
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="relative">
      <Navbar/>
      {/* Main Content with Background Image */}
      <div
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center brightness-90"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-0 px-4 py-2 shadow-lg animate-pulse">
          The Heart of Incredible India
        </h1>
      </div>

      {/* Footer Navigation */}
      <nav className="flex justify-around bg-yellow-100 py-4 mb-0">
        {/* <NavLink to="" className="text-lg font-bold hover:text-red-700">WILDLIFE</NavLink> */}
        <NavLink to="/explore/heritage" className="text-lg font-bold hover:text-red-700">HERITAGE</NavLink>
        <NavLink to="/explore/spiritual" className="text-lg font-bold hover:text-red-700">SPIRITUALITY</NavLink>
        {/* <NavLink to="" className="text-lg font-bold hover:text-red-700">NATURE</NavLink> */}
      </nav>
    </div>
  );
}

export default App;
