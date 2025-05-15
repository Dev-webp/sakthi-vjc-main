"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion, px } from "framer-motion";
import Image from "next/image";

const visas = [
  { name: "Hong Kong Student Visa", path: "/migrate/hong-kong/student-visa" },
    { name: "Hong Kong Employment Visa", path: "/migrate/hong-kong/employment-visa" },
    { name: "Hong Kong Business Visa", path: "/migrate/hong-kong/business-visa" },
    { name: "Hong Kong Tourist Visa", path: "/migrate/hong-kong/tourist-visa" },
    { name: "Hong Kong Dependent Visa", path: "/migrate/hong-kong/dependent-visa" },
    { name: "Hong Kong Work Visa", path: "/migrate/hong-kong/work-visa" },
];

const countries = [
  { name: "Germany", path: "/migrate/germany" },
  { name: "Canada", path: "/migrate/canada" },
  { name: "UnitedStates", path: "/migrate/united-states" },
  { name: "Australia", path: "/migrate/australia", },
  { name: "United Kingdom", path: "/migrate/united-kingdom",  },
  { name: "New Zealand", path: "/migrate/new-zealand",  },
  { name: "South Africa", path: "/migrate/south-africa", },
  { name: "Hong Kong", path: "/migrate/hong-kong",  },
  { name: "Denmark", path: "/migrate/denmark", },
  { name: "UAE", path: "/migrate/uae",  },
];

const AustraliaVisaSection = () => {
  const router = useRouter();
  const backgroundImage = "/australiaopgimg.jpg";

  return (
    <>
    <div className="relative w-full flex flex-col items-center text-white px-10 py-10 bg-black">
      {/* Background Image with Text Overlay */}
      <div
        className="absolute w-full h-80 flex items-center justify-center bg-cover bg-center -mt-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-700 to-white text-transparent bg-clip-text">
            Migrate to Hong-Kong
          </h1>
          <p className="text-sm sm:text-sm font-medium text-gray-300 mt-2 max-w-xl mt-4">
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
        </motion.div>
      </div>

      {/* Visa Buttons Section */}
      <div className="relative z-10 w-full flex flex-wrap justify-center mt-64 gap-4">
        {visas.map(({ name, path }) => (
          <motion.button
            key={path}
            className="w-64 px-6 py-4 text-lg font-semibold rounded-lg shadow-lg border border-orange-500 transition-transform transform bg-black bg-opacity-50 hover:bg-orange-500 hover:text-white hover:scale-110 active:scale-90"
            onClick={() => router.push(path)}
            whileHover={{ rotateX: 360 }}
            transition={{ duration: 0.5 }}
          >
            {name}
            <span className="block text-sm mt-1">Click here to know more</span>
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </motion.button>
        ))}
      </div>

      {/* Country Buttons and Side Image */}
      <hr className="border-t-inherit border-orange-500 w-full mx-auto lg:mx-0 mb-5 mt-10" />
      
      <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between mt-10 bg-orange-600 text-white py-10 px-6 rounded-lg shadow-lg gap-16">
  
  {/* Right Side - Image (Now Comes First for Mobile Layout) */}
  <div className="w-full lg:w-1/2 flex justify-center">
  <Image
  src="/australiaplaneimg.png"
  alt="Migration"
  width={500} // Set an appropriate width
  height={500} // Set an appropriate height
  className="max-w-full lg:max-w-[100%] h-auto shadow-lg object-contain"
/>
  </div>

  {/* Left Side - Country Buttons (Will be below the image on mobile) */}
  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Migrate to Country!..</h2>
    <hr className="border-t-2 border-white w-24 mb-6" />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-x-2 justify-center">
      {countries.map(({ name, path }) => (
        <button
          key={path}
          className="w-44 px-3 py-3 bg-black opacity-80 text-orange-400 font-semibold shadow-md 
          hover:bg-orange-600 hover:text-white transition 
          transform hover:scale-110 active:scale-90"
          onClick={() => router.push(path)}
        >
          {name}
        </button>
      ))}
    </div>
  </div>
</div>

<div className="w-full flex flex-col items-center text-center bg-black bg-opacity-80 text-white py-10 px-6 mt-10 rounded-lg shadow-lg">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
      Join the Best Team of Experts
    </h2>
    <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl">
      Build a rewarding career with our professional team.
    </p>
    <button 
      className="px-6 py-3 bg-black border border-orange-600 text-white font-semibold shadow-md 
      hover:bg-orange-700 transition transform hover:scale-110 active:scale-90"
    >
      VJC Overseas
    </button>
  </div>


    </div>
   
  </>
  );
};

export default AustraliaVisaSection;
