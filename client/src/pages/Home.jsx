import React from "react";
import './home.css'
import img from "../assets/Ganga-Aarti-Varanasi-A-Visual-Treat-at-the-Banks-of-River-Ganga.avif";
const Home = () => {
  return (
    <>
      <div className="container w-screen h-screen truncate flex flex-col justify-center text-center">
        <div className="image top-0 w-full h-full absolute box">
          <img src={img} alt="india" className="object-cover w-full h-full bg-center" />
        </div>
        <div className="container absolute">
          <p className="text-6xl text-gray-950 text-center relative fade-in-up">
            Explore the Colors of India:<br></br>A World in Itself
          </p>
        </div>
      </div>
      <div className="box1 inset-0 text-white ">
        <p className="messs">hello</p>
      </div>
    </>
  );
};

export default Home;
