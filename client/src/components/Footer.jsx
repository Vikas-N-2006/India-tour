import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
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
          <div className="i1 text-2xl pt-2">
            <FaGithub />
          </div>
          <div className="i2  text-2xl pt-2">
            <FaLinkedin/>
          </div>
          <div className="i3 text-2xl pt-2">
            <FaInstagramSquare/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
