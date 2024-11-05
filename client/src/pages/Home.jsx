import {React,useEffect,useState,useRef} from "react";
import img1 from '../assets/Lakshadweep.webp'
import img2 from '../assets/india-81244_1280.jpg'
import img3 from '../assets/360_F_708072155_k6rBFoteJrYLnosUZgsWVQjZV84ZTW7V.jpg'
import "./home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Infocard from "../components/infocard";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden ">
        <div className="relative w-screen h-screen flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="navi absolute">
              <Navbar />
            </div>
            <img
              src={img1}
              alt="india"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 text-center">
            <p className="text-7xl text-white font-serif fade-in-up">
              Explore the Colors of India:
              <br />A World in Itself
            </p>
          </div>
        </div>
        <div className="places mt-4 underline underline-offset-8 decoration-4 decoration-blue-800">
          <img className="absolute w-screen h-full brightness-90" src={img2} alt="" />
        <Infocard head="Places" mid=" To" tail=" Visit" bg="black" text="white" c1="" c2=""/>
        </div>
        <div className="cuisine mt-auto underline underline-offset-8 decoration-4 decoration-pink-700 ">
          <img className="absolute w-screen h-full blur-sm brightness-90"src={img3} alt="" />
          <Infocard head="Cuisines" mid=" To" tail=" Try" c1="" c2=""/>
        </div>
        <div className="relative mt-12 p-8 bg-black text-white w-full h-full text-center border border-white">
          <p className="text-5xl">About</p>
        </div>
        <div className="relative mt-12 p-8 bg-black text-white w-full h-full text-center border border-white">
          <p className="text-5xl">Contact</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
