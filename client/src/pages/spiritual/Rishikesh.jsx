// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
const Rishikesh= () => {
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
          backgroundImage: "url('./rishikesh2.jpeg')", // Add an image of Rishikesh in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Rishikesh, Uttarakhand</h1>
          <p className="text-lg">
            Known as the Yoga Capital of the World, Rishikesh is a spiritual and adventure hub on the banks of the Ganges.
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
            Rishikesh, located in the foothills of the Himalayas, is a serene and sacred town known for its yoga and meditation centers. It attracts spiritual seekers, adventure enthusiasts, and those looking for peace along the holy river Ganges.
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
            Rishikesh has been a spiritual center for centuries, attracting saints, sages, and yogis. Known as a gateway to the Himalayas, it is considered a place for meditation and spiritual healing, often associated with Hindu mythology and religious practices.
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
            Notable attractions in Rishikesh include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Laxman Jhula and Ram Jhula: Famous suspension bridges offering scenic views of the river and temples.</li>
            <li>Triveni Ghat: A sacred bathing ghat known for its evening Ganga Aarti ceremony.</li>
            <li>Adventure Sports: Rishikesh is popular for river rafting, bungee jumping, and trekking.</li>
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
            <li>Nearest Airport: Jolly Grant Airport in Dehradun, approximately 35 km from Rishikesh.</li>
            <li>Nearest Railway Station: Rishikesh Railway Station, with connections to nearby cities.</li>
            <li>By Road: Rishikesh is well-connected by road, with regular buses and taxis from Haridwar and Dehradun.</li>
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

export default Rishikesh;
