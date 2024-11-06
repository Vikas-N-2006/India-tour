import React from 'react';
 // Import if you have additional custom styles
import Navbar from '../components/Navbar';
function App() {
  return (
    <div className="relative">
      <Navbar/>
      {/* Main Content with Background Image */}
      <div
        className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./photo1.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-0 px-4 py-2 shadow-lg animate-pulse">
          The Heart of Incredible India
        </h1>
      </div>

      {/* Footer Navigation */}
      <nav className="flex justify-around bg-yellow-100 py-4 mt-4">
        <a href="#wildlife" className="text-lg font-bold hover:text-red-700">WILDLIFE</a>
        <a href="#heritage" className="text-lg font-bold hover:text-red-700">HERITAGE</a>
        <a href="#spirituality" className="text-lg font-bold hover:text-red-700">SPIRITUALITY</a>
        <a href="#nature" className="text-lg font-bold hover:text-red-700">NATURE</a>
      </nav>
    </div>
  );
}

export default App;
