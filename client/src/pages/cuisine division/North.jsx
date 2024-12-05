import React from "react";
import Navbar from "../../components/Navbar";
import { useRef, useState, useEffect } from "react";
import img0 from "../../assets/WhatsApp Image 2024-11-05 at 14.00.48_726ce92c.jpg";
import img1 from "../../assets/himachalpradesh.jpg";
import img2 from "../../assets/bihar.webp";
import img3 from "../../assets/haryana.jpg";
import img4 from "../../assets/Punjab.jpg";
import img5 from '../../assets/Kashmir.jpg'
import Infocard from "../../components/Infocard";
import Infocard2 from "../../components/Infocard2";
import Footer from "../../components/Footer"

const North = () => {
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
            Warning: North Indian Cuisine May Cause
            <br /> Serious Naan-Stop Cravings!
          </p>
        </div>
      </div>
      <div className="bg-green-600 h-2"></div>
      <div className="places mt-2 relative">
        <div className="w-full text-white p-8 text-center overflow-y-hidden font-serif relative z-10">
        <Infocard
            name="Himachal Pradesh"
            image={img1}
            dish="Dhaam"
            info="Dhaam is a complete food that along with a great taste promises a healthy dose of nutrients. The dish includes dal, rajma, rice, curd, boor ki Kadi and is very well complemented with gur (jaggery). Dhaam is a plate full of delicious delicacies that are a must-serve on the occasions and festivals. The distinctive feature about this dish is that it is prepared by special chefs known as ‘botis’. To grab the best taste of Dhaam you must visit Himachal during festivals."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Bihar"
            image={img2}
            dish="Litti Chokha"
            info="The lip-smacking taste of Litti Chokha, savoured by one and all, needs no introduction. It is your grand welcome to the food of Bihar, in all its ghee-dripping glory. It consists of wheat and sattu with spices, kneaded into round spicy balls, dipped in ghee. The texture of Litti along with the crunchy crust makes it a foodie’s delight. Chokha is prepared by mashing boiled vegetables (most common being potatoes, brinjal, tomatoes), adding spices and chopped onion, garlic etc and served with Litti as a complimentary delicacy."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Haryana"
            image={img3}
            dish="Bajara Khichri"
            info="Khichri is had almost throughout the country. However, what makes Haryana Khichri so popular is that instead of rice, Bajara is used. For preparing bajara khichri, bajara is soaked overnight. Then Moong daal and bajara are washed together and cooked in a pressure cooker along with spices. We all know that bajara is very good for health as it is a hardy crop (grows even in harsh conditions and is easily found). Thus this recipe is recommended to all especially to those who do not wish to have rice."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Punjab"
            image={img4}
            dish="Makki di Roti and Sarson da Saag"
            info="Makki di Roti and Sarson da Saag make for the staple food in North India especially in the state of Punjab. This traditional Indian dish may not look very enticing at first, but it has an authentic flavour to it, and it is rich in nutritive value. Accompany it with a glass of lassi and one has the perfect combination for a healthy and fulfilling lunch."

          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Jammu And Kashmir"
            image={img5}
            dish="Rogan Josh"
            info="A must try dish for all the Lamb or meat lovers, Rogan Josh, an aromatic lamb dish is one of the signature recipes of Kashmiri cuisine. It was introduced in India with the coming of the Mughals. Robust with flavours of browned onions, various spices and yoghurt, it is a very healthy low-fat dish. Try it with rice or naan and you will yearn for more."
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default North;
