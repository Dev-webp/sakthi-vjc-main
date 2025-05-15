"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form"; // Adjust path if necessary
import Content from "./Content";


const Migrate = () => {
  const router = useRouter();
  const backgroundImage = "/cyprusimg.webp";

  // Country array
  const countries = ["Germany", "Canada", "Australia","UAE","Denmark","New-Zealand"];

  // Background images for buttons
  const countryImages = {
    Germany: "/germanybtn.webp",
    Canada: "/canadabtn.avif",
    Australia: "/australiabtn.avif",
    "New-Zealand":"/nzbtn.jpg",
    UAE: "/uaebtn.jpg",
    Denmark: "/denmarkbtn.webp",
  };

  return (
    <div className="relative w-full flex flex-col items-center text-white bg-white">
      {/* Background Image with Motion Text */}
      <div
        className="relative w-full h-[300px] sm:h-[500px] md:h-[200px] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 mt-5 bg-black/50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0"></div>

        {/* Motion Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white
           text-transparent bg-clip-text -mt-10 md:mt-0">
            Own History, Build Your Future
          </h1>
        
        </motion.div>
      </div>

      {/* Country Selection Buttons */}
      <div className="relative z-10 -mt-20 sm:mt-4 md:mt-2 w-full max-w-6xl px-4 sm:px-6 mx-auto grid grid-cols-3 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
  {countries.map((country, index) => (
    <Link key={index} href={`/migrate/${country.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center bg-cover bg-center text-black font-bold text-xs sm:text-sm md:text-lg border border-orange-600 bg-black/70 cursor-pointer transition-all p-4 sm:p-6 rounded-full shadow-lg"
        style={{
          backgroundImage: `url(${countryImages[country]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {country}
      </motion.div>
    </Link>
  ))}
</div>




      {/* Image on Left, Text on Right */}
      <div className="relative z-10 mt-10 sm:mt-4 flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 sm:px-6">
          <Image 
            src="/investimg.png" 
            alt="Migration Image" 
            width={600} 
            height={400} 
            className="w-[90%] sm:w-[80%] md:w-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-6 py-6 text-center md:text-left bg-white">
          <h2 className="text-2xl sm:text-3xl text-orange-600 font-bold mb-4 flex justify-center md:justify-start">VJC Overseas</h2>
          <p className="text-lg mb-4">
            We specialize in turning migration dreams into reality. Whether you're planning to invest, work, or settle overseas, our expert team provides end-to-end support with visa assistance, country selection, and personalized migration strategies tailored to your profile.
          </p>
          <p className="text-lg">Global Visions. Trusted Guidance</p>
          <p className="text-lg">Your Bridge to a Brighter Future</p>
          <p className="text-lg">Seamless Migration Starts with VJC Overseas.</p>
          <div className="flex justify-center md:justify-start mt-8">
            <button className="w-36 h-12 sm:h-14 bg-gradient-to-tr from-orange-600 to-black/20 text-white font-semibold rounded-lg">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="w-full">
        <Content />
      </div>

      {/* Form Section */}
      <div className="w-full px-4 sm:px-6">
        <Form />
      </div>

     
      
    </div>
  );
};

export default Migrate;
