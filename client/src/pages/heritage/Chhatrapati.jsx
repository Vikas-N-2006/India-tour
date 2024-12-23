// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import img from '../../assets/terminal.jpg'
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer"
const Chhatrapati = () => {
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
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${img}')`, 
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Chhatrapati Shivaji Terminus</h1>
          <p className="text-lg">
            A UNESCO World Heritage Site and iconic landmark of Mumbai, known for its blend of Victorian Gothic Revival architecture and Indian influences.
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
            Chhatrapati Shivaji Terminus (CST), located in Mumbai, India, is an architectural marvel and one of the busiest railway stations in the country. Originally named Victoria Terminus, this iconic structure exemplifies the Victorian Gothic Revival style with unique Indian elements and has become a symbol of Mumbai's colonial history and vibrant urban life.
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
            Designed by British architect Frederick William Stevens, CST was completed in 1887 to commemorate Queen Victoria's Golden Jubilee. The structure integrates elements of Italianate, Gothic, and Mughal architecture, making it a significant symbol of colonial-era engineering. Recognized as a UNESCO World Heritage Site, CST stands as a testament to the grandeur of British colonial architecture fused with Indian craftsmanship.
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
            Notable features around Chhatrapati Shivaji Terminus include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Gateway of India: An iconic monument built during the British era, located about 3 km from CST.</li>
            <li>Marine Drive: Known as the "Queen’s Necklace," this scenic promenade offers stunning views of Mumbai's coastline, just a short drive away.</li>
            <li>Elephanta Caves: A UNESCO World Heritage Site located on an island near Mumbai, accessible via ferry from the Gateway of India.</li>
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
            <li>Nearest Airport: Chhatrapati Shivaji Maharaj International Airport in Mumbai, about 20 km from CST, connects Mumbai with major cities worldwide.</li>
            <li>Nearest Railway Station: CST itself is a major railway terminal, connecting Mumbai to numerous destinations across India.</li>
            <li>By Road: Mumbai is well-connected by road with the rest of Maharashtra and neighboring states, and taxis and buses offer convenient transit options.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <br />
      <Footer/>
    </div>
  );
}

export default Chhatrapati;
