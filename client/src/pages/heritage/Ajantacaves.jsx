// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
import img from '../../assets/ajanta.jpg';
import Footer from "../../components/Footer"
const Ajantacaves = () => {
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
          <h1 className="text-4xl font-bold mb-4">Ajanta Caves</h1>
          <p className="text-lg">
            A UNESCO World Heritage Site, renowned for its rock-cut Buddhist temples and paintings.
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
            The Ajanta Caves are a complex of around 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. They are renowned for their exquisite wall paintings and sculptures, depicting the life and teachings of Buddha and various Jataka tales.
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
            The Ajanta Caves were built in two phases, the early Hinayana phase in the 2nd century BCE and the later Mahayana phase between the 5th and 6th centuries CE. They served as monasteries, study centers, and places of worship for Buddhist monks, with intricate frescoes illustrating the progression of Buddhist art.
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
            Notable attractions near Ajanta Caves include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Ellora Caves: Another UNESCO World Heritage Site with Hindu, Buddhist, and Jain rock-cut temples.</li>
            <li>Daulatabad Fort: A historic hilltop fortress with incredible defensive features and panoramic views.</li>
            <li>Bibi Ka Maqbara: A beautiful mausoleum reminiscent of the Taj Mahal in Aurangabad.</li>
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
            <li>Nearest Airport: Aurangabad Airport, about 100 km away, offers flights from major Indian cities.</li>
            <li>Nearest Railway Station: Jalgaon Railway Station, around 60 km away, provides rail connections to Mumbai, Delhi, and other cities.</li>
            <li>By Road: Buses and taxis are available from Aurangabad and Jalgaon for easy access to the caves.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <br />
      <Footer/>

    </div>
  );
}

export default Ajantacaves;
