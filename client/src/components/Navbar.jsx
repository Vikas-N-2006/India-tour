import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Keep this if you're using the .underline-hover CSS class

const Navbar = () => {
  return (
    <header className="w-screen p-4 fixed  bg-transparent top-0 left-0 z-20">
      <div className="container flex justify-between items-center px-6">
        <div className="logo-brand flex items-center">
          <NavLink to="/" className="flex">
            <h1 className="text-3xl font-bold text-orange-400">India</h1>
            <h1 className="text-3xl font-bold text-green-400 ml-1">Tour</h1>
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-8 text-xl text-white">
            <li>
              <NavLink className="underline-hover" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-hover" to="/explore">
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-hover" to="/cuisines">
                Cuisine
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-hover" to="/">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
