import { React, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Lakshadweep.webp";
import img4 from "../assets/26.KhajurahoTemples_credit-RNMitraiStock-httpwww.istockphoto.comgbphotokandariya-mahadeva-temple-khajuraho-india-unesco-world-heritage-site-gm540115304-96377381-1024x6.jpg";
import img5 from "../assets/image19.jpg";
import img6 from "../assets/img1.jfif";
import img7 from "../assets/WhatsApp Image 2024-11-05 at 14.00.48_726ce92c.jpg";
import img8 from "../assets/WhatsApp Image 2024-11-05 at 14.03.53_7d3b01bd.jpg";
import img9 from "../assets/WhatsApp Image 2024-11-05 at 14.02.07_185a0e4d.jpg";
import "./home.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const sectionRef2=useRef(null);
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
        <div className="places mt-2 relative">
          <div className="absolute w-screen h-full brightness-50 bg-gradient-to-r from-blue-500 to-white"></div>
          <div className="w-screen text-white p-14 bg-black text-center overflow-y-hidden font-serif">
            <span className="heading text-5xl w-full mt-6 underline underline-offset-8 decoration-4 decoration-black">
              <span className="">Places </span>
              <span>To</span>
              <span className=""> Visit</span>
            </span>
            <div
              ref={sectionRef}
              className={`cardcontainer mt-20 ${
                hasAnimated ? "animate" : ""
              } flex space-x-16 justify-center items-center`}
            >
              <div className="flex flex-col text-left">
                <div className="c1 group  relative flex justify-center items-center">
                  <div className="absolute z-20">
                    <p className="text-3xl text-transparent group-hover:text-white   transition ease-in">
                      Religious
                    </p>
                  </div>
                  <Card
                    src={img4}
                    effect="transition ease-in hover:scale-105 hover:brightness-50"
                    link="/explore"
                  />
                </div>
                <div className="info text-center mt-8">
                  <p className="text-lg w-96 text-black">
                    India's religious sites blend spirituality and heritage,
                    showcasing diverse faiths and awe-inspiring architecture
                    across centuries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="c2 group  relative flex justify-center items-center ">
                  <div className="absolute z-20">
                    <p className="text-3xl text-transparent group-hover:text-white   transition ease-in">
                      Historial
                    </p>
                  </div>
                  <Card
                    src={img5}
                    effect="transition ease-in hover:scale-105 hover:brightness-50"
                  />
                </div>
                <div className="info text-center mt-6">
                  <p className="text-lg w-96 text-black">
                    India's historical sites reveal centuries of rich heritage,
                    showcasing grand architecture, ancient culture, and timeless
                    stories.
                  </p>
                </div>
              </div>
              <div>
                <div className="c3 group  relative flex justify-center items-center ">
                  <div className="absolute z-20">
                    <p className="text-3xl text-transparent group-hover:text-white   transition ease-in">
                      Adventurous
                    </p>
                  </div>
                  <Card
                    src={img6}
                    effect="transition ease-in hover:scale-105 hover:brightness-50"
                  />
                </div>
                <div className="info text-center mt-6">
                  <p className="text-lg w-96 text-black">
                    India's adventurous spots promise thrilling experiences,
                    from mountain treks to river rafting, paragliding, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="btn mt-12 align-middle w-full h-full flex justify-center items-center">
              <button
                className="text-black bg-blue-900 z-20 border-2 border-black rounded-2xl p-2 w-44 text-center text-xl hover:bg-blue-500"
                onClick={() => navigate("/explore")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="places mt-2 relative">
        <div className="absolute w-screen h-full brightness-50 bg-gradient-to-r from-blue-500 to-white"></div>
          <div className="w-screen text-white p-14 bg-black text-center overflow-y-hidden font-serif">
            <span className="heading text-5xl w-full mt-6 underline underline-offset-8 decoration-4 decoration-black">
              <span className="">Cuisine's</span>
              <span> To</span>
              <span className=""> Try</span>
            </span>
            <div
              ref={sectionRef2}
              className={`cardcontainer mt-20 ${
                hasAnimated ? "animate" : ""
              } flex space-x-16 justify-center items-center`}
            >
              <div className="flex flex-col text-left">
                <div className="c1 group  relative flex justify-center items-center">
                  <div className="absolute z-20">
                    <p className="text-3xl text-transparent group-hover:text-white   transition ease-in">
                      North
                    </p>
                  </div>
                  <Card
                    src={img7}
                    effect="transition ease-in hover:scale-105 hover:brightness-50"
                  />
                </div>
                <div className="info text-center mt-8">
                  <p className="text-lg w-96 text-black">
                    North Indian cuisine offers rich, flavorful dishes, from
                    spicy curries to hearty breads and kebabs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="c2 group  relative flex justify-center items-center ">
                  <div className="absolute z-20">
                    <p className="text-3xl text-transparent group-hover:text-white   transition ease-in">
                      South
                    </p>
                  </div>
                  <Card
                    src={img8}
                    effect="transition ease-in hover:scale-105 hover:brightness-50"
                  />
                </div>
                <div className="info text-center mt-10">
                  <p className="text-lg w-96 text-black">
                    South Indian cuisine delights with vibrant flavors,
                    featuring tangy dosas, spicy sambars, and coconut-infused
                    dishes.
                  </p>
                </div>
              </div>
              <div>
                <div className="c3 group  relative flex justify-center items-center ">
                  <div className="absolute z-20">
                    <p className="text-3xl text-transparent group-hover:text-white   transition ease-in">
                      East and West
                    </p>
                  </div>
                  <Card
                    src={img9}
                    effect="transition ease-in hover:scale-105 hover:brightness-50"
                  />
                </div>
                <div className="info text-center mt-16">
                  <p className="text-lg w-96 text-black ">
                    East Indian cuisine boasts rich flavors with fish curries,
                    pithas, and sweets
                  </p>
                </div>
              </div>
            </div>
            <div className="btn mt-12 align-middle w-full h-full flex justify-center items-center">
              <button className="text-black bg-blue-900 z-20 border border-2 border-black rounded-2xl p-2 w-44 text-center text-xl hover:bg-blue-500" 
              onClick={() => navigate("/cuisine")}>
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-2 mb-2 p-8 bg-black  w-full h-full text-center  brightness-50 bg-gradient-to-r from-blue-500 to-white text-black font-serif ">
          <p className="text-3xl underline underline-offset-8 decoration-blue-500">About</p>
          <div className="info mt-8 text-lg"> 
          <p>India, a land of incredible diversity, is renowned for its rich culture, ancient history, and breathtaking landscapes. Known as one of the world’s oldest civilizations, India offers a unique blend of traditions, religions, arts, and cuisine that reflect its vibrant heritage. Each state in India has its own cultural identity, with distinct languages, festivals, attire, and art forms that together create a colorful mosaic of traditions and customs.</p><br />
          <p>Indian culture is deeply rooted in spirituality, with Hinduism, Buddhism, Jainism, and Sikhism originating here. The country is also home to significant Muslim, Christian, Jewish, and Parsi communities, making it a rich tapestry of religions. Festivals like Diwali, Holi, Eid, and Christmas are celebrated with equal enthusiasm, showcasing the nation’s unity in diversity.</p>
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
};

export default Home;
