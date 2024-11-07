// App.js
import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
const  Mahabodhi = () => {
    const sectionsRef = useRef([]);// Array of refs for each section
 
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
          backgroundImage: "url('./bodhgaya.jpg')", // Add an image of the Mahabodhi Temple in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Mahabodhi Temple Complex</h1>
          <p className="text-lg">
            A UNESCO World Heritage Site, the Mahabodhi Temple Complex is the site where Buddha attained enlightenment, attracting visitors and pilgrims from around the world.
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
            The Mahabodhi Temple Complex, located in Bodh Gaya, India, marks the site where Siddhartha Gautama, the Buddha, is believed to have attained enlightenment under the Bodhi Tree. This sacred complex is a key pilgrimage destination for Buddhists worldwide, featuring the revered temple and a descendant of the original Bodhi Tree.
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
            The Mahabodhi Temple was originally built by Emperor Ashoka in the 3rd century BCE, though it has been rebuilt and expanded over centuries. The current structure dates from the 5th–6th centuries CE and showcases architectural influences from early Indian design. The site includes the Bodhi Tree, where Buddha meditated and reached enlightenment, making it one of Buddhism's holiest sites.
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
            Notable features near the Mahabodhi Temple Complex include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Animesh Lochana Chaitya: A small shrine where the Buddha is believed to have gazed at the Bodhi Tree after enlightenment.</li>
            <li>Sujata Stupa: Located in the village of Sujata, this stupa honors the milkmaid Sujata, who offered Buddha his last meal before enlightenment.</li>
            <li>Great Buddha Statue: A 25-meter-tall statue of Buddha in meditation posture, inaugurated by the Dalai Lama, and a landmark of Bodh Gaya.</li>
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
            <li>Nearest Airport: Gaya Airport, about 12 km from Bodh Gaya, has flights from Kolkata, Delhi, and other major cities.</li>
            <li>Nearest Railway Station: Gaya Junction, 16 km away, connects to major cities like Delhi, Kolkata, and Patna.</li>
            <li>By Road: Regular buses and taxis are available from Gaya, Patna, and other nearby cities, making Bodh Gaya easily accessible.</li>
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

export default  Mahabodhi;
