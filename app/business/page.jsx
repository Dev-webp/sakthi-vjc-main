"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import Two from "./Two";
import Content from "./Content";
import Form from "./Form";

import Footer from "./Footer";   

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-gradient-to-br from-orange-500 to-white">
      <div className="mt-10 z-20 relative">
        <Nav />
      </div>

      {/* Main Section */}
      <div className="mt-16 mb-16">
        <Two />
         
        
        
      </div>
<Content/>
      {/* <div className=" -mt-16" > */}
       
      {/* <Footer />  */}

      {/* </div> */}
 


      

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row min-h-screen ">
  {/* Left Side - Image (Full Cover) */}
  <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-orange-500 to-white relative">
    <Image 
      src="/airplane.jpg" 
      alt="Visa Image" 
      layout="fill" 
      objectFit="cover" 
      className="absolute inset-0 w-full h-full p-6" 
    />
  </div>

  {/* Right Side - Form */}
  <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-orange-500 to-white p-6">
    <Form />
  </div>
</div>




      
      </div>
      <Footer />
       
    </>
  );
};

export default ContactPage;
