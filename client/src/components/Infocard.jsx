import { React, useState, useEffect, useRef } from "react";
import Card from "./Card";
import "../pages/home.css";

const Infocard = (props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  return (
    <div>
      <div className="w-screen text-white p-14 bg-black text-center overflow-y-hidden font-serif">
        <span className="heading text-5xl w-full mt-6">
          <span className={`text-${props.c1}`}>{props.head}</span>
          <span>{props.mid}</span>
          <span className={`text-${props.c2}`}>{props.tail}</span>
        </span>
        <div
          ref={sectionRef}
          className={`cardcontainer mt-8 ${
            hasAnimated ? "animate" : ""
          } flex space-x-8 justify-center items-center`}
        >
          <div className="c1 flex flex-col space-y-8 w-72 h-auto">
            <div className="">
              <Card />
              <p className=""></p>
            </div>
            <div className="">
              <Card />
            </div>
          </div>
          <div className="c2 flex flex-col space-y-8">
            <div className="">
              <Card />
            </div>
            <div className="">
              <Card />
            </div>
          </div>
          <div className="c3 flex flex-col space-y-8">
            <div className="">
              <Card />
            </div>
            <div className="">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
