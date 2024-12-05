import { React, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import img from "../../assets/26.KhajurahoTemples_credit-RNMitraiStock-httpwww.istockphoto.comgbphotokandariya-mahadeva-temple-khajuraho-india-unesco-world-heritage-site-gm540115304-96377381-1024x6.jpg"
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer"

const Heritage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (sectionRef2.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (sectionRef2.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  return (
    <>
      <div className="overflow-x-hidden bg-black">
        <div className="relative w-screen h-screen flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="navi absolute">
              <Navbar />
            </div>
            <img
              src={img}
              alt="india"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 text-center">
            <p className="text-7xl text-white font-serif fade-in-up">
            From Temples to Palaces: 
              <br />
              Unveiling India’s Glorious Past
            </p>
          </div>
        </div>
      </div>
      <div className="places relative">
        <nav className="flex justify-around bg-yellow-100 py-4 w-full absolute ">
          <NavLink to="/explore/heritage/ajanta" className="text-lg font-bold hover:text-red-700">
            Ajanta Caves
          </NavLink>
          <NavLink to="/explore/heritage/bhimbetkar" className="text-lg font-bold hover:text-red-700">
           Bhimbetka Temple
          </NavLink>
          <NavLink to="/explore/heritage/chatrapati" className="text-lg font-bold hover:text-red-700">
            Chatrapathi Shivaji
          </NavLink>
          <NavLink to="/explore/heritage/tajmahal" className="text-lg font-bold hover:text-red-700">
            Taj Mahal
          </NavLink>
          <NavLink to="/explore/heritage/mahabodhi" className="text-lg font-bold hover:text-red-700">
            Mahabodhi Temple
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Heritage;
