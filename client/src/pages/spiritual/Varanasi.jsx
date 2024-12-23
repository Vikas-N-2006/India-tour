// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
import img from '../../assets/varansi.jpg'
import Footer from "../../components/Footer"
const Varanasi= () => {
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
          backgroundImage:  `url('${img}')`, 
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Varanasi, Uttar Pradesh</h1>
          <p className="text-lg">
            Known as the spiritual capital of India, Varanasi is one of the oldest continuously inhabited cities in the world.
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
            Varanasi, also known as Kashi or Banaras, is a major cultural and spiritual center in northern India, situated along the banks of the sacred river Ganges. It is revered as the city of Lord Shiva and attracts millions of pilgrims seeking spiritual liberation and peace.
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
            Varanasi is one of the oldest cities in the world, with a history dating back thousands of years. It has been a prominent center of learning, culture, and spirituality, drawing sages, poets, and philosophers. The city’s history is deeply intertwined with Hindu mythology and is considered a gateway to spiritual enlightenment.
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
            Notable attractions in Varanasi include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Dashashwamedh Ghat: The main and most vibrant ghat, known for the evening Ganga Aarti ceremony.</li>
            <li>Kashi Vishwanath Temple: A major Hindu temple dedicated to Lord Shiva, one of the twelve Jyotirlingas.</li>
            <li>Sarnath: A Buddhist pilgrimage site where Lord Buddha delivered his first sermon after attaining enlightenment.</li>
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
            <li>Nearest Airport: Lal Bahadur Shastri Airport, located around 26 km from the city center.</li>
            <li>Nearest Railway Station: Varanasi Junction, well-connected to major cities across India.</li>
            <li>By Road: Varanasi is accessible by road, with regular buses and taxis available from nearby cities.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <br />
      <Footer/>
    </div>
  );
}

export default Varanasi;
