import React, { useEffect, useRef } from 'react';
import './Bhimbetka.css'; 
import Navbar from '../../components/Navbar';
import img from '../../assets/Bhimbetka.jpg';
const Bhimbetka = () => {
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
    <div>
      <div className="font-sans text-gray-800">
      <Navbar/>
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${img}')`, // Add an image of Bhimbetka in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Bhimbetka Rock Shelters</h1>
          <p className="text-lg">
            A UNESCO World Heritage Site, known for its ancient rock shelters and prehistoric cave paintings.
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
            The Bhimbetka rock shelters are an archaeological site in central India that spans the prehistoric Paleolithic and Mesolithic periods. These shelters contain ancient cave paintings that are estimated to be around 30,000 years old, depicting scenes of hunting, dancing, and animal figures.
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
            The Bhimbetka rock shelters were discovered in 1957 and are considered one of the earliest evidence of human life in India. These shelters, which show continuous habitation from the Stone Age, feature artwork that reflects a primitive lifestyle and cultural activities, dating back to over 100,000 years.
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
            Notable attractions near Bhimbetka Rock Shelters include:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Sanchi Stupa: An ancient Buddhist complex with stupas and sculptures, a UNESCO World Heritage Site.</li>
            <li>Raisen Fort: A historic fort atop a hill, offering scenic views of the surrounding landscape.</li>
            <li>Bhojpur Temple: A famous temple dedicated to Lord Shiva, known for its massive unfinished Shiva Lingam.</li>
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
            <li>Nearest Airport: Raja Bhoj Airport in Bhopal, approximately 45 km away, offers flights from major Indian cities.</li>
            <li>Nearest Railway Station: Bhopal Railway Station, around 40 km away, connects to various parts of India.</li>
            <li>By Road: Bhimbetka is accessible by road from Bhopal, with taxis and buses providing easy transportation.</li>
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
    </div>
  )
}

export default Bhimbetka