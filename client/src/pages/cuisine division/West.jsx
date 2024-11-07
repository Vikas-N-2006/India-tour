import React from "react";
import Navbar from "../../components/Navbar";
import { useRef, useState, useEffect } from "react";
import img0 from "../../assets/WhatsApp Image 2024-11-05 at 14.02.07_185a0e4d.jpg";
import img1 from "../../assets/Rajasthan.jpg";
import img2 from "../../assets/Gujrat.jpg";
import img3 from "../../assets/Maharashtra.webp";
import img4 from "../../assets/goa.jpeg";
import img5 from '../../assets/Madhyapradesh.webp'
import Infocard from "../../components/Infocard";
import Infocard2 from "../../components/Infocard2";

const West = () => {
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
          From Pav Bhaji to Poha: 
            <br /> The Diverse Delights of Western India!
          </p>
        </div>
      </div>
      <div className="bg-green-600 h-2"></div>
      <div className="places mt-2 relative">
        <div className="w-full text-white p-8 text-center overflow-y-hidden font-serif relative z-10">
        <Infocard
            name="Rajasthan"
            image={img1}
            dish="Dal Bati Churma"
            info="This famous Rajasthani dish needs no introduction. Dal bati churma is synonymous to Rajasthan; known for its crunchy batis, dipped in ghee along with spicy daal and sweet churma. This delicious dish is prepared using various dals such as Chana dal, mung dal, Urad dal etc"
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Gujrat"
            image={img2}
            dish="Dhokla"
            info="Dhokla is an authentic snack which has originated from the state of Gujarat. This traditional food item is prepared out of gram flour and chana dal. Plus it is a reasonably easy recipe which can be prepared quickly within half an hour. Dhokla coupled with some chilli paste and chutney makes for the perfect snack to enjoy with friends over gossiping sessions."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Maharashtra"
            image={img3}
            dish="Misal Pav"
            info="Misal Pav is quintessentially from Pune and is one of the most popular Maharashtrian breakfast, snack or even brunch. It is a street food popularly found in Mumbai. It has a spicy and tangy lentil curry which is made with moth beans and is served with Pav bread. At times, it is eaten with yoghurt to lessen the spice. Although it is a breakfast food but Maharashtrians enjoy it at time of the day."
          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard2
            name="Goa"
            image={img4}
            dish="Fish Curry"
            info="The Goan fish curry or the Xitti Kodi is the staple diet of every Goan. The Goan fish curry is loaded with various spices along with coconut. Raw mango is also used to give the dish a tangy flavour. The main ingredients of the dish are a decent sized Pomfret and a raw mango. Instead of Pomfret, Kingfish may also be used. This Goan dish is served along with rice."

          />
          <div className="bg-white  h-1 mt-8"></div>
          <Infocard
            name="Madhyapradesh"
            image={img5}
            dish="Poha"
            info="Another healthy and yet delicious delicacy of Madhya Pradesh is Bhutte Ka Kees(poha). As the name clearly suggests, this dish mainly comprises of corns. Grated corns are well-cooked with spices and skimmed milk which adds a slightly sweet taste to the dish. Mustard seeds and green chillies are further added to enhance the taste of this authentic cuisine of Madhya Pradesh."
          />
        </div>
      </div>
    </div>
  );
};
export default West;
