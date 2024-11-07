import { React, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import img from "../../assets/istockphoto-1044399860-612x612.jpg"
import { NavLink } from "react-router-dom";

const Spiritual = () => {
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
             India: A Sacred Land of Faith,
              <br />
              Meditation, and Harmony
            </p>
          </div>
        </div>
      </div>
      <div className="places relative">
        <nav className="flex justify-around bg-yellow-100 py-4 w-full absolute ">
          <NavLink to="/explore/spiritual/rammandir" className="text-lg font-bold hover:text-red-700">
            Ram Mandir
          </NavLink>
          <NavLink to="/explore/spiritual/goldentemple" className="text-lg font-bold hover:text-red-700">
           Golden Temple
          </NavLink>
          <NavLink to="/explore/spiritual/rishikesh" className="text-lg font-bold hover:text-red-700">
            Rishikesh
          </NavLink>
          <NavLink to="/explore/spiritual/varanasi" className="text-lg font-bold hover:text-red-700">
            Varanasi
          </NavLink>
          <NavLink to="/explore/spiritual/meenakshi" className="text-lg font-bold hover:text-red-700">
           Meenakshi Temple
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Spiritual;
