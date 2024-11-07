// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
import img from '../../assets/ram.webp';
const Rammandir = () => {
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
      <Navbar/>
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:  `url('${img}')`, // Add an image of Ram Mandir in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Ram Mandir, Ayodhya</h1>
          <p className="text-lg">
            A grand temple dedicated to Lord Ram, symbolizing cultural heritage and spirituality.
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
            The Ram Mandir in Ayodhya is one of India's most revered Hindu temples, dedicated to Lord Ram. The temple is built with intricate architecture and serves as a symbol of devotion and spirituality.
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
            The Ram Mandir has a profound historical and cultural significance in India. It stands on the site believed to be the birthplace of Lord Ram. The construction of the temple started in 2020, following a historic Supreme Court verdict.
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
            Notable attractions near the Ram Mandir include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Hanuman Garhi: A temple dedicated to Lord Hanuman, located nearby.</li>
            <li>Kanak Bhawan: A historic palace dedicated to Lord Ram and Sita.</li>
            <li>Saryu River: A sacred river where pilgrims perform rituals.</li>
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
            <li>Nearest Airport: Ayodhya Airport, providing direct access to the temple city.</li>
            <li>Nearest Railway Station: Ayodhya Railway Station, well-connected to major cities.</li>
            <li>By Road: Ayodhya is accessible by road from nearby cities with buses and taxis available.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <br />
      <footer className="bg-yellow-600 text-white py-6 text-center">
        <p>&copy; India Tourism</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#facebook" className="hover:text-yellow-200">Facebook</a>
          <a href="#instagram" className="hover:text-yellow-200">Instagram</a>
          <a href="#twitter" className="hover:text-yellow-200">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default Rammandir;
