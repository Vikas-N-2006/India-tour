import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="foot flex flex-col w-full h-20 bg-black justify-center items-center relative bottom-0">
        <div>
          <span className="text-center text-emerald-400 text-lg font-medium">
            India Tours | &copy; 2024 All Rights Reserved
          </span>
        </div>
        <div className="icons flex space-x-4 text-white">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="i1 text-2xl pt-2">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="i2 text-2xl pt-2">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="i3 text-2xl pt-2">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
