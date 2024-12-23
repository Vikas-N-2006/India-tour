import React from "react";
import Navbar from "../../components/Navbar";
import { useRef, useState, useEffect } from "react";
import img0 from "../../assets/northeast_food_banner.jpg";
import img1 from "../../assets/Arunachalpradesh.jpg";
import img2 from "../../assets/Assam.webp";
import img3 from "../../assets/West-bengal.jpg";
import img4 from "../../assets/Manipur.webp";
import img5 from '../../assets/meghalaya.jpg'
import Infocard from "../../components/Infocard";
import Infocard2 from "../../components/Infocard2";
import Footer from "../../components/Footer"

const East = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <div className="relative w-screen h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="navi absolute">
            <Navbar />
          </div>
          <img src={img0} alt="india" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-6xl text-white font-serif fade-in-up">
          A Taste of the East: 
            <br /> Where Tradition Meets Temptation!
          </p>
        </div>
      </div>
      <div className="bg-green-600 h-2"></div>
      <div className="places mt-2 relative">
        <div className="w-full text-white p-8 text-center overflow-y-hidden font-serif relative z-10">
        <Infocard
            name="Arunachal Pradesh"
            image={img1}
            dish="Thupka"
            info="Thukpa is a kind of noodle soup of Tibetan origin that has found its way to being one of the most loved food in Sikkim. Thukpa is something that is very healthy and tasty at the same time - a rare combination to find, isn't it? One can find both vegetables as well as chicken thukpa here and mind you both are worth trying. One can find almost every kind of locally grown vegetable in this soup, but the most common ones are carrots, bell peppers, spinach, cauliflower and celery. It is rich in spices too and has an enriching taste. One serving is enough for an individual, but no one can stop at one because why not. "
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Assam"
            image={img2}
            dish="Papaya Khar"
            info="This dish of Assamese cuisine is one of a kind. It is a delicious curry made from raw papaya, pulses, taro and also with a main non-vegetarian ingredient. All of these is then filtered through dried banana leaves which gives it a unique and an unexpectedly refreshing flavour. It is generally eaten with rice during lunch."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="West Bengal"
            image={img3}
            dish="Kosha Mangsho"
            info="Kosha Mangsho is a traditional dish prepared of Mutton (Goat meat) in every Bengali house. This dish of mutton with some thick curry is high on spices and richness. This dish is made with mutton and spices such as cloves, cinnamon, onion and garlic are used. This excellent recipe is full of the aroma and sweetness that is surely going to trigger your taste buds."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Manipur"
            image={img4}
            dish="Kangshoi"
            info="This dish is very popular in Manipur. It is a vegetable stew. It consists of seasonal vegetables that are boiled and flavoured with sliced onions, cloves, salt, garlic, maroi and a bit of ginger. This stew is served with rice or fish and is supposed to be consumed piping hot.."

          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Meghalaya"
            image={img5}
            dish="Jadoh"
            info="Jadoh is a very popular dish among the Khasi community of Meghalaya. It is especially appetising because of its rich and unique colour.  Jadoh is basically red rice, cooked with generous amounts of pork meat. Sometimes, it is also cooked with chicken or fish. A mix of green chillies, onions, ginger, turmeric, black pepper and bay leaves is made, then pieces of pork are added and fried off, after which the red rice is added and cooked off. The addition of turmeric imparts the rice its rich yellow colour and an aromatic flavour. For those willing to be more adventurous, Jadoh can also be cooked in pork blood. If you love pork, this is a dish not to be missed."
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default East;
