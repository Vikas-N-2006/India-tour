import React from "react";
import Navbar from "../../components/Navbar";
import { useRef, useState, useEffect } from "react";
import img0 from "../../assets/WhatsApp Image 2024-11-05 at 14.03.53_7d3b01bd.jpg";
import img1 from "../../assets/Karnataka.jpg";
import img2 from "../../assets/kerala.jpg";
import img3 from "../../assets/Tamilnadu.jpg";
import img4 from "../../assets/andhra.jpg";
import img5 from '../../assets/Telangana.jpg'
import Infocard from "../../components/Infocard";
import Infocard2 from "../../components/Infocard2";

const South = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <div className="relative w-screen h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="navi absolute">
            <Navbar />
          </div>
          <img src={img0} alt="india" className="object-cover w-full h-full brightness-50" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-6xl text-white font-serif fade-in-up">
          Where Every Bite Brings 
            <br /> You Closer to the Coast
          </p>
        </div>
      </div>
      <div className="bg-green-600 h-2"></div>
      <div className="places mt-2 relative">
        <div className="w-full text-white p-8 text-center overflow-y-hidden font-serif relative z-10">
        <Infocard
            name="Karnataka"
            image={img1}
            dish="Bisi Bele Bath"
            info="Bisi Bele Bath is a traditional recipe of Karnataka that is prepared in every Kannadiga's home. The dish has a distinct coconut flavour and is available at any restaurant in Bangalore. The recipe is a complicated one that involves many vegetables and flavours but the dish is a must-try.."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Kerala"
            image={img2}
            dish="Appam"
            info="Ask anybody from Kerala what their favourite dish is from back home and they will swear by appam and stew! I think it's justified for them to do so because appam is just something that seems to be a revolution in the food world. It is a rice pancake with a soft and thick centre and a crispy, paper thin outside. No matter what you eat it with, appam will increase that dish's taste value beyond hundred! However, it is usually paired with a southern style stew where chunks of any kind of meat in smothered in a silky, rich, dreamy coconut curry which will leave you sad when it finishes."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Tamil Nadu"
            image={img3}
            dish="Pongal"
            info="This is a staple meal during every auspicious festival of Tamil Nadu. Besides the rice and sweet milk, the dish is cooked with ingredients like cardamom, green gram, raisins and cashew nuts. According to the traditional beliefs, Pongal is cooked in open space in the sunlight, as it is dedicated to the sun god. The dish has two variants- one that's sweet another that's savoury which is served on banana leaves.."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Andhra Pradesh"
            image={img4}
            dish="Pootha Rekulu"
            info="Pootharekulu, one of the most popular sweet dish in Andhra Pradesh prepared during festivals, religious occasions. The water-like sweet is made extensively in Attreyapuram, a village in East Godavari district, AP. This unique saviour is prepared by rice batter, Ghee, and powdered sugar. Also, it is stuffed with various kinds of dry fruits to enrich the taste."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Telangana"
            image={img5}
            dish="Hyderbadi Biryani"
            info="Thanks to the major influence of Nizams in the state, Hyderabadi Biryani has come to be known worldwide as one of India’s jeweled food items. It is of two types; Kachchi gosht ki biryani and Pakki biryani. Marinated meat is cooked in layers of rice in a big handi which is covered with flat dough that eventually rises due to heat; indicating that the biryani is ready to be devoured."
          />
        </div>
      </div>
    </div>
  );
};
export default South;
