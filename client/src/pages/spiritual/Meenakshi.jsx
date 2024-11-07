// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
import img from '../../assets/meenakshi.jpg';
const   Meenakshi= () => {
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
          backgroundImage:  `url('${img}')`, // Add an image of Meenakshi Amman Temple in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Meenakshi Amman Temple, Madurai</h1>
          <p className="text-lg">
            A majestic temple known for its elaborate gopurams, vibrant colors, and spiritual significance.
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
            The Meenakshi Amman Temple, located in Madurai, Tamil Nadu, is a historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar (a form of Lord Shiva). Renowned for its architectural beauty, this temple features intricately carved gopurams (gateway towers) and is a major pilgrimage site in South India.
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
            The origins of the Meenakshi Amman Temple can be traced back to the early centuries CE. It was expanded and renovated in the 14th and 16th centuries by various dynasties, especially under the Nayak rulers of Madurai. The temple stands as a testament to Dravidian architecture and attracts millions of devotees and tourists annually.
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
            Notable attractions near the Meenakshi Amman Temple include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Thirumalai Nayakkar Palace: A magnificent palace built in the 17th century, showcasing Indo-Saracenic architecture.</li>
            <li>Gandhi Memorial Museum: A museum dedicated to Mahatma Gandhi, housing relics and exhibitions about his life.</li>
            <li>Vandiyur Mariamman Teppakulam: A large temple tank where the Float Festival is celebrated.</li>
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
            <li>Nearest Airport: Madurai Airport, approximately 12 km from the city center.</li>
            <li>Nearest Railway Station: Madurai Junction, well-connected to major cities across India.</li>
            <li>By Road: Madurai is accessible by road from nearby cities, with frequent buses and taxis available.</li>
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

export default   Meenakshi;
