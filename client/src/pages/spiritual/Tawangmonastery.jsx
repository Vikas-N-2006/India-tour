// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Footer from "../../components/Footer"
const Tawangmonastery = () => {
    const sectionsRef = useRef([]); // Array of refs for each section
  
  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1, // Trigger animation when 10% of the section is visible
    });

    // Observing each section for the scroll animation
    sectionsRef.current.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('./Tawang.jpg')", // Add an image of Tawang Monastery in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Tawang Monastery, Arunachal Pradesh</h1>
          <p className="text-lg">
            The largest monastery in India, known for its serene beauty and spiritual importance in Tibetan Buddhism.
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
            The Tawang Monastery, located in Tawang, Arunachal Pradesh, is one of the most significant Buddhist monasteries in India and the largest in the country. Perched at an altitude of 10,000 feet, it offers breathtaking views of the Tawang Valley and serves as an important cultural and spiritual hub for Tibetan Buddhism in the region.
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
            Tawang Monastery was founded in 1680 by Merak Lama Lodre Gyatso, following the wishes of the 5th Dalai Lama. It has a fascinating history and has been a center of Buddhist learning and spirituality for centuries. The monastery is home to around 450 monks and includes a three-story prayer hall with a stunning statue of Lord Buddha.
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
            Notable attractions near Tawang Monastery include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Urgyelling Monastery: The birthplace of the 6th Dalai Lama, an important site for Buddhists.</li>
            <li>Nuranang Waterfall: A scenic waterfall located near Tawang, also known as Bong Bong Waterfall.</li>
            <li>Gorichen Peak: The highest peak in Arunachal Pradesh, offering stunning views and trekking opportunities.</li>
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
            <li>Nearest Airport: Tezpur Airport in Assam, around 317 km from Tawang.</li>
            <li>Nearest Railway Station: Tezpur Railway Station, well-connected to nearby cities in Assam.</li>
            <li>By Road: Tawang is accessible by road, though it requires a journey through mountainous terrain. Shared taxis and buses are available from Tezpur.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <br />
      <Footer/>
    </div>
  );
}

export default Tawangmonastery;
