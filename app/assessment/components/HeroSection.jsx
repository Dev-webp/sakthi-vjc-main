import React from "react";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from 'framer-motion';  // Import motion from framer-motion
import Form from "./Form";

import CountriesData from "./CountriesData";

// Define the animation variants
const containerVariants = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay, duration: 1 }
  }
});

// const desVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
// };

const HeroSection = () => {
  return (
    <>
     <header className="relative w-full h-[550px] bg-[url('/img2.jpg')] bg-cover bg-center bg-no-repeat">
  {/* Black overlay for background only */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Content (Ensures it stays above the overlay) */}
  <div className="relative z-10">
    {/* Logo */}
    <div className="flex items-start ml-2 pb-1">
            <Image src="/logo-1.webp" alt="Logo 1" width={56} height={56} />
            <Image src="/logo-2.webp" alt="Logo 2" width={56} height={56} />
          </div>

    {/* Contact Info */}
    <div className="absolute top-4 right-4 text-gray-300 flex flex-row items-center gap-2 text-sm font-bold">
  {/* Locations */}
  <div className="hidden lg:flex items-center space-x-2 text-gray-300 uppercase text-[14px]">
              {["Bangalore", "Hyderabad", "USA"].map((location, index) => (
                <div key={index} className="flex items-center animate-pulse text-custom-blue">
                  <Image src="/loc.png" alt={location} width={16} height={16} className="mr-1" />
                  <p>{location}</p>
                </div>
              ))}
            </div>

  {/* Email */}
  <div className="flex items-center text-gray-300 text-xs md:text-sm lg:text-[16px] mt-1 md:mt-0 md:ml-1">
    <a href="mailto:info@vjcoverseas.com" className="flex items-center text-custom-blue">
      <FaEnvelope className="mr-1 w-4 h-4 text-orange-700" />
      <p>info@vjcoverseas.com</p>
    </a>
  </div>

  {/* Phone */}
  <a href="tel:+919160449000" className="flex items-center text-white font-bold text-xs md:text-sm lg:text-[14px] mt-1 md:mt-0 md:ml-1">
              <Image src="/callicon.png" alt="Phone" width={20} height={20} className="mr-1" />
              <span className="text-gray-300">+91 9160449000</span>
            </a>
</div>

    <hr className="border-black w-[48%] ml-auto border-spacing-1 hidden md:block -mt-3" />

    {/* Motion Div */}
    <div className="mt-16">
      <motion.div
        variants={containerVariants(0.4)}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-8 lg:space-y-6 items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto relative z-10 mb-0 lg:mb-14"
      >
        <Image src="/1.gif" alt="Work in Germany" width={700} height={400} className="w-full max-w-[24rem] lg:max-w-[70rem]" />
              <Image src="/award.png" alt="Award" width={400} height={100} className="w-full max-w-[23rem] lg:max-w-[27rem]" />
            </motion.div>
    </div>

    {/* Form Container */}
    <div className="absolute top-[80%] sm:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white border border-orange-500 w-full max-w-[900px] h-[400px] flex justify-center items-center shadow-lg rounded-lg mt-60">
      <div className="w-full flex justify-center">
        <Form /> 
      </div>
    </div>
  </div>
</header>


      {/* Why Choose Us Section */}
      <div className="mt-64">
        <CountriesData />
      </div>
      
    </>
  );
};

export default HeroSection;
