import { React, useState, useEffect, useRef } from "react";


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
    <>
    <div className="heading text-5xl w-full underline underline-offset-8 decoration-4 mt-6 ">
      <span className="text-emerald-500">{props.name}</span>
    </div>
    <div
      ref={sectionRef}
      className={`cardcontainer mt-20 ${
        hasAnimated ? "animate" : ""
      } flex flex-row-reverse space-x-16 justify-center items-center`}
    >
      <div className="dish1 w-full">
        <img src={props.image} alt="" className="w-72 h-72 rounded-full" />
      </div>
      <div className="info flex flex-col bg-z">
        <div className="head text-left text-4xl underline underline-offset-8 decoration-orange-500">
          <span>{props.dish}</span>
        </div>
        <div className="content pt-4 text-left">
          <p className="text-lg">
         {props.info}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Infocard;
