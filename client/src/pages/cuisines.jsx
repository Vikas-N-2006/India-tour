import { React, useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Infocard from "../components/infocard";
import imgc1 from "../assets/image.jpeg";

const Cuisine = () => {
  return (
    <>
      <div className='absolute'>
        <Navbar />
      </div>

      <img src={imgc1} alt='dal' className='size-fit relative' />
    </>
  );
};

export default Cuisine;
