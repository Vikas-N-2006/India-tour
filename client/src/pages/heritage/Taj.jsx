// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
import img from '../../assets/taj.jpeg';
import Footer from "../../components/Footer"
const Taj= () => {
    const sectionsRef = useRef([]); 

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1, 
    });

    
    sectionsRef.current.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Navbar/>
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white brightness-50"
        style={{
          backgroundImage: `url('${img}')`, 
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Taj Mahal</h1>
          <p className="text-lg">
            A UNESCO World Heritage Site and one of the Seven Wonders of the World, known for its architectural beauty and rich history.
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-yellow-600 py-4 flex justify-center gap-8 text-white text-lg">
        <a href="#overview" className="hover:text-yellow-200">Overview</a>
        <a href="#history" className="hover:text-yellow-200">History</a>
        <a href="#explore" className="hover:text-yellow-200">Explore</a>
        <a href="#how-to-reach" className="hover:text-yellow-200">How to Reach</a>
      </nav>

      {/* Sections */}
      <section
        id="overview"
        ref={el => (sectionsRef.current[0] = el)}
        className="section slide-in opacity-0 transform -translate-x-10 transition-all duration-700"
      >
        <br />
        <h2 className="text-3xl font-bold mb-4 underline">Overview</h2>
        <br />
        <div className="text-box">
          <p className="text-gray-700 leading-relaxed">
            The Taj Mahal, located in Agra, India, is an iconic white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. It is celebrated for its intricate artistry, symmetrical design, and stunning setting along the Yamuna River.
          </p>
        </div>
      </section>

      <section
        id="history"
        ref={el => (sectionsRef.current[1] = el)}
        className="section slide-in opacity-0 transform -translate-x-10 transition-all duration-700"
      >
        <br />
        <h2 className="text-3xl font-bold mb-4 underline">History</h2>
        <br />
        <div className="text-box">
          <p className="text-gray-700 leading-relaxed">
            Commissioned in 1632 and completed in 1653, the Taj Mahal stands as a testament to Emperor Shah Jahan’s love for Mumtaz Mahal. The mausoleum combines elements from Islamic, Persian, Ottoman, and Indian architectural styles, showcasing a mastery of design and engineering that attracts millions of visitors every year.
          </p>
        </div>
      </section>

      <section
        id="explore"
        ref={el => (sectionsRef.current[2] = el)}
        className="section slide-in opacity-0 transform -translate-x-10 transition-all duration-700"
      >
        <br />
        <h2 className="text-3xl font-bold mb-4 underline">Explore</h2>
        <br />
        <div className="text-box">
          <p className="text-gray-700 leading-relaxed">
            Notable attractions near the Taj Mahal include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Agra Fort: A UNESCO World Heritage Site and former royal residence of the Mughal emperors, located just 2.5 km from the Taj Mahal.</li>
            <li>Mehtab Bagh: A charbagh garden complex situated across the Yamuna River, offering a stunning view of the Taj Mahal, especially at sunset.</li>
            <li>Itmad-ud-Daula's Tomb: Often referred to as the "Baby Taj," this beautiful mausoleum is an architectural precursor to the Taj Mahal.</li>
          </ul>
        </div>
      </section>

      <section
        id="how-to-reach"
        ref={el => (sectionsRef.current[3] = el)}
        className="section slide-in opacity-0 transform -translate-x-10 transition-all duration-700"
      >
        <br />
        <h2 className="text-3xl font-bold mb-4 underline">How to Reach</h2>
        <br />
        <div className="text-box">
          <ul className="list-disc pl-8 text-gray-700">
            <li>Nearest Airport: Agra’s Kheria Airport, located about 13 km from the Taj Mahal, has limited flights; the nearest major airport is in New Delhi.</li>
            <li>Nearest Railway Station: Agra Cantt is the main station, with regular trains from cities like Delhi, Jaipur, and Mumbai.</li>
            <li>By Road: Agra is well-connected by road via the Yamuna Expressway from Delhi, making it a popular day-trip destination.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <br />
      <Footer/>
    </div>
  );
}

export default Taj;
