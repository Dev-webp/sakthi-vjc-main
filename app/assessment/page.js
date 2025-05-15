"use client";

import { useState } from "react";



import HeroSection from "./components/HeroSection"; 
import WhyChooseUs from "./components/WhyChooseUs";


import ReviewSlider from "./components/ReviewSlider";




import "./components/styles.css"; // Importing the styles.css file

const ContactPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      
      <div className="bg-white" style={{fontFamily:'Times new roman'}}>

      
      
      

     
      <HeroSection />  
       
        <WhyChooseUs /> 
        
        <ReviewSlider />
       
      </div>
    </>
  );
};

export default ContactPage;
