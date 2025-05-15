"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";

import Austriavisit from './Austriavisit';
import Belgiumvisit from './Belgiumvisit';
import Bulgariavisit from './Bulgariavisit';
import Croatiavisit from './Croatiavisit';
import Czechvisit from './Czechvisit';
import Denmarkvisit from './Denmarkvisit';  
import Estoniavisit from './Estoniavisit';
import Finelandvisit from './Finelandvisit';
import Francevisit from './Francevisit';
import Germanyvisit from './Germanyvisit'; 
import Greecevisit from './Greecevisit';
import Hungaryvisit from './Hungaryvisit';
import Icelandvisit from './Icelandvisit';
import Italyvisit from './Italyvisit';
import Latviavisit from './Latviavisit';
import Lithuaniavisit from './Lithuaniavisit';
import Liechtensteinvisit from './Liechtensteinvisit';


import Netherlandvisit from "./Netherlandvisit";
import Luxembergvisit from "./Luxembergvisit";
import Romaniavisit from "./Romaniavisit"
import Portugalvisit from "./Portugalvisit";
import Polandvisit from "./Polandvisit";
import Maltavisit from "./Maltavisit";
import Norwayvisit from "./Norwayvisit";

import Slovakiavisit from './Slovakiavisit';
import Sloveniavisit from './Sloveniavisit';
import Spainvisit from './Spainvisit';
import Swedenvisit from './Swedenvisit';
import Switzerlandvisit from './Switzerlandvisit';
 

const visaData = [
  { name: "Austria Visit/Tourist Visa", path: "/schengen-visas/austria", image: "/austriatour.avif" },
    { name: "Belgium Visit/Tourist Visa", path: "/schengen-visas/belgium", image: "/belgiumtour.jpg" },
    { name: "Bulgaria Visit/Tourist Visa", path: "/schengen-visas/bulgaria", image: "/balgeriatour.jpg" },
    { name: "Croatia Visit/Tourist Visa", path: "/schengen-visas/croatia", image: "/balgeriatour.webp" },
    { name: "Czech Republic Visit/Tourist Visa", path: "/schengen-visas/czech-republic", image: "/czechtour.jpg" },
    { name: "Denmark Visit/Tourist Visa", path: "/schengen-visas/denmark", image: "/dmtour.jpg" },
    { name: "Estonia Visit/Tourist Visa", path: "/schengen-visas/estonia", image: "/estonia.jpg" },
    { name: "Finland Visit/Tourist Visa", path: "/schengen-visas/finland", image: "/finland.jpg" },
    { name: "France Visit/Tourist Visa", path: "/schengen-visas/france", image: "/france1.jpg" },
    { name: "Germany Visit/Tourist Visa", path: "/schengen-visas/germany", image: "/gremany1.jpg" },
    { name: "Greece Visit/Tourist Visa", path: "/schengen-visas/greece", image: "/greece1.webp" },
    { name: "Hungary Visit/Tourist Visa", path: "/schengen-visas/hungary", image: "/hungary.jpg" },
    { name: "Iceland Visit/Tourist Visa", path: "/schengen-visas/iceland", image: "/iceland.avif" },
    { name: "Italy Visit/Tourist Visa", path: "/schengen-visas/italy", image: "/itlay1.jpg" },
    { name: "Latvia Visit/Tourist Visa", path: "/schengen-visas/latvia", image: "/latvia.jpg" },
    { name: "Liechtenstein Visit/Tourist Visa", path: "/schengen-visas/liechtenstein", image: "/liechtenstein.jpg" },
    { name: "Lithuania Visit/Tourist Visa", path: "/schengen-visas/lithuania", image: "/lithuania.jpeg" },
    { name: "Luxembourg Visit/Tourist Visa", path: "/schengen-visas/luxembourg", image: "/luxembourg.jpg" },
    { name: "Malta Visit/Tourist Visa", path: "/schengen-visas/malta", image: "/malta1.jpg" },
    { name: "Netherlands Visit/Tourist Visa", path: "/schengen-visas/netherlands", image: "/netherlands.jpg" },
    { name: "Norway Visit/Tourist Visa", path: "/schengen-visas/norway", image: "/norway.jpg" },
    { name: "Poland Visit/Tourist Visa", path: "/schengen-visas/poland", image: "/poland.jpg" },
    { name: "Portugal Visit/Tourist Visa", path: "/schengen-visas/portugal", image: "/portugal.avif" },
    { name: "Romania Visit/Tourist Visa", path: "/schengen-visas/romania", image: "/romania.jpg" },
    { name: "Slovakia Visit/Tourist Visa", path: "/schengen-visas/slovakia", image: "/slovakia.jpg" },
    { name: "Slovenia Visit/Tourist Visa", path: "/schengen-visas/slovenia", image: "/slovenia.webp" },
    { name: "Spain Visit/Tourist Visa", path: "/schengen-visas/spain", image: "/spain.jpg" },
    { name: "Sweden Visit/Tourist Visa", path: "/schengen-visas/sweden", image: "/sweden1.jpg" },
    { name: "Switzerland Visit/Tourist Visa", path: "/schengen-visas/switzerland", image: "/switzerland.jpg" },
  ];


const defaultVisa = {
  name: "Study Abroad with VJC",
  path: "/studyabroad",
  image: "/study-default.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
    } else {
      setSelectedVisa(defaultVisa);
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ===== TOP SECTION ===== */}
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12 py-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            <motion.div
              className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                {selectedVisa.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                Discover top global destinations to pursue your dreams. Choose your study country and take the first step today!
              </p>
            </motion.div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="flex justify-center md:justify-start mb-8 ml-0 ml-11">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">Plan Your Study Abroad,</span>
            <span className="block text-center">Shape Your Future</span>
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Study Destination Buttons Section */}
          <div className="w-full md:w-1/3">
            {visaData.map((visa) => (
              <div key={visa.path} className="mb-4 w-full">
                <button
                  className={`w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg ${
                    selectedVisa.path === visa.path
                      ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                      : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                  } transform hover:scale-105`}
                  onClick={() => handleVisaClick(visa)}
                >
                  {visa.name}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

{/* Visa Info Content Box */}
<div
  className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative -mt-0 md:-mt-24"
  style={{ maxHeight: "700px", minHeight: "1550px", overflowY: "auto" }}
>
  {selectedVisa.name === "Austria Visit/Tourist Visa" ? (
    <Austriavisit />
  ) : selectedVisa.name === "Belgium Visit/Tourist Visa" ? (
    <Belgiumvisit />
  ) : selectedVisa.name === "Bulgaria Visit/Tourist Visa" ? (
    <Bulgariavisit />
  ) : selectedVisa.name === "Croatia Visit/Tourist Visa" ? (
    <Croatiavisit />
  ) : selectedVisa.name === "Czech Republic Visit/Tourist Visa" ? (
    <Czechvisit />
  ) : selectedVisa.name === "Denmark Visit/Tourist Visa" ? (
    <Denmarkvisit />
  ) : selectedVisa.name === "Estonia Visit/Tourist Visa" ? (
    <Estoniavisit />
  ) : selectedVisa.name === "Finland Visit/Tourist Visa" ? (
    <Finelandvisit />
  ) : selectedVisa.name === "France Visit/Tourist Visa" ? (
    <Francevisit />
  ) : selectedVisa.name === "Germany Visit/Tourist Visa" ? (
    <Germanyvisit />
  ) : selectedVisa.name === "Greece Visit/Tourist Visa" ? (
    <Greecevisit />
  ) : selectedVisa.name === "Hungary Visit/Tourist Visa" ? (
    <Hungaryvisit />
  ) : selectedVisa.name === "Iceland Visit/Tourist Visa" ? (
    <Icelandvisit />
  ) : selectedVisa.name === "Italy Visit/Tourist Visa" ? (
    <Italyvisit />
  ) : selectedVisa.name === "Latvia Visit/Tourist Visa" ? (
    <Latviavisit />
  ) : selectedVisa.name === "Lithuania Visit/Tourist Visa" ? (
    <Lithuaniavisit />
  ) : selectedVisa.name === "Liechtenstein Visit/Tourist Visa" ? (
    <Liechtensteinvisit />
  ) : selectedVisa.name === "Slovakia Visit/Tourist Visa" ? (
    <Slovakiavisit />
  ): selectedVisa.name === "Slovenia Visit/Tourist Visa" ? (
    <Sloveniavisit />
  ) : selectedVisa.name === "Spain Visit/Tourist Visa" ? (
    <Spainvisit />
  ) : selectedVisa.name === "Sweden Visit/Tourist Visa" ? (
    <Swedenvisit />
  ) : selectedVisa.name === "Switzerland Visit/Tourist Visa" ? (
    <Switzerlandvisit />
  ) : selectedVisa.name === "Luxembourg Visit/Tourist Visa" ? (
    <Luxembergvisit/>
  ): selectedVisa.name === "Romania Visit/Tourist Visa" ? (
    <Romaniavisit/>
  ) : selectedVisa.name === "Portugal Visit/Tourist Visa" ? (
    <Portugalvisit/>
  ) : selectedVisa.name === "Poland Visit/Tourist Visa" ? (
    <Polandvisit/>
  ) : selectedVisa.name === "Malta Visit/Tourist Visa" ? (
    <Maltavisit/>
   ) :selectedVisa.name === "Norway Visit/Tourist Visa"?(
      <Norwayvisit/>
    
  ) : selectedVisa.name === "Netherlands Visit/Tourist Visa" ? (
    <Netherlandvisit />
    
  ) : (
    <div className="text-gray-700 text-lg leading-relaxed">
      Please select a visa type from the left to view more details.
    </div>
  )}
</div>


        </div>
      </div>
    </div>
  );
};

export default Migrate;
