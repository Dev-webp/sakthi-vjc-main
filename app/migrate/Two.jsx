"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Form from "./Form";
import Footer from "./Footer";




import Content from "./Content";

const textContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};


const countriesData = [
  { name: "Migrate to Germany", path: "/migrate/germany" },
  { name: "Migrate to Canada", path: "/migrate/canada" },
  { name: "Migrate to UnitedStates", path: "/migrate/united-states" },
  { name: "Migrate to Australia", path: "/migrate/australia", },
  { name: "Migrate to United Kingdom", path: "/migrate/united-kingdom",  },
  { name: "Migrate to New Zealand", path: "/migrate/new-zealand",  },
  { name: "Migrate to South Africa", path: "/migrate/south-africa", },
  { name: "Migrate to Hong Kong", path: "/migrate/hong-kong",  },
  { name: "Migrate to Denmark", path: "/migrate/denmark", },
  { name: "Migrate to UAE", path: "/migrate/uae",  },
];

const Migrate = () => {
  const router = useRouter();
  const [background, setBackground] = useState("/migratepageimg.avif");

  const handleCountryClick = (path, image) => {
    setBackground(image || "/migratepageimg.avif");
    router.push(path);
  };

  return (
    <section
      className="py-10 bg-cover bg-center transition-all duration-500 min-h-screen "
      style={{
        backgroundImage: `url(${background})`,
        height: "700px", // smaller background height
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
  <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen">
    {/* Text Section */}
    <motion.div
      className="w-full lg:w-1/2 lg:ml-16"
      style={{ marginTop: "-2rem" }}
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-20 sm:mt-0"
        style={{ fontFamily: "Times New Roman, serif" }}
        variants={titleVariants}
      >
        Migrate to Your Dream Country
      </motion.h1>
      <motion.p
        className="flex text-black tracking-tight text-left md:font-medium max-w-xl lg:max-w-lg mt-2"
        style={{ fontWeight: "bolder", fontFamily: "Times New Roman, serif" }}
        variants={descriptionVariants}
      >
        Discover endless opportunities with our expert immigration services. Whether you're looking to study or work abroad, we help make your dreams a reality.
      </motion.p>
    </motion.div>

    {/* Form Section - aligned to the right */}
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
      <Form />
    </div>
  </div>
{/* </div> */}


        <div className="flex justify-center md:justify-start mb-8 ml-5 ">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent bg-white">
            <span className="block md:text-left text-center">Migrate to Your Dream</span>
            <span className="block text-center">Country</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Country Buttons */}
          <div className="w-full md:w-1/3">
            {countriesData.map(({ name, path, image }) => (
              <div key={path} className="mb-4 w-full flex justify-center">
                <button
                  className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 
                  shadow-lg shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 
                  hover:bg-orange-500 hover:text-white transform hover:scale-105"
                  onClick={() => handleCountryClick(path, image)}
                >
                  {name}
                  <ArrowRight className="w-6 h-6 transition duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="w-full md:w-2/3 overflow-y-auto max-h-[900px] bg-white p-6 rounded-xl shadow-md border border-gray-200 -mt-24">
            <Content />
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};


export default Migrate;