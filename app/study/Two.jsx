"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import USAStudyVisa from "./USAStudyVisa";
import UAEStudyVisa from "./UAEStudyVisa"
import CanadaStudyVisa from "./CanadaStudyVisa";
import AustraliaStudyVisa from "./AustraliaStudyVisa";
import UKStudyVisa from "./UKStudyVisa";
import NZStudyVisa from "./NZStudyVisa";
import HongStudyVisa from "./HongStudyVisa";
import Study from "./Study";
import Germany from "./Germany";
const visaData = [
  
  { name: "Study in USA", path: "/studyabroad/usa", image: "/usa1.jpg"},
  { name: "Study in Uk", path: "/studyabroad/uk", image: "/uk1.webp" },
  { name: "Study in Canada", path: "/studyabroad/canada", image: "/canada1.jpg" },
  { name: "Study in Australia", path: "/studyabroad/australia", image: "/aus1.jpg" },
  { name: "Study in Germany", path: "/studyabroad/germany", image: "/germany.jpg" },
  { name: "Study in Italy", path: "/studyabroad/italy", image: "/itlay.jpg" },
  { name: "Study in France", path: "/studyabroad/france", image: "/france.jpg" },
  { name: "Study in Singapore", path: "/studyabroad/singapore", image: "/singapore.jpg" },
  { name: "Study in Malaysia", path: "/studyabroad/malaysia", image: "/m.jpg" },
  { name: "Study in South Africa", path: "/studyabroad/southafrica", image: "/sa.webp" },
  { name: "Study in New Zealand", path: "/studyabroad/newzealand", image: "/nz.webp" },
  { name: "Study in Philippiness", path: "/studyabroad/philippiness", image: "/p.jpg" },
  { name: "Study in Poland", path: "/studyabroad/poland", image: "/pol.webp" },
  { name: "Study in Ireland", path: "/studyabroad/ireland", image: "/ir.jpg" },
  { name: "Study in Spain", path: "/studyabroad/spain", image: "/spa.avif" },
  { name: "Study in Netherlands", path: "/studyabroad/netherlands", image: "/net.webp" },
  { name: "Study in Switzerland", path: "/studyabroad/switerland", image: "/sw.webp" },
  { name: "Study in Denmark", path: "/studyabroad/denmark", image: "/de.jpg" },
  { name: "Study in Dubai", path: "/studyabroad/Dubai", image: "/du.webp" },
  { name: "Study in Luxembourg", path: "/studyabroad/luxembourg", image: "/lux.jpg" },
  { name: "Study in Hongkong", path: "/studyabroad/hongkong", image: "/hk.jpg" },
  { name: "Study in UAE", path: "/studyabroad/uae", image: "/ua.jpg" },
  { name: "Study in Norway", path: "/studyabroad/norway", image: "/norwaystudy.avif" },
  { name: "Study in Sweden", path: "/studyabroad/sweden", image: "/swedenstudy.jpg" },
];

const defaultVisa = {
  name: "Study Abroad with VJC",
  path: "/Study",
  image: "/1.jpg",
  
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
  className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative"
  style={{ maxHeight: "700px", minHeight: "1550px", overflowY: "auto" }}
>
  {selectedVisa.name === "Study in USA" ? (
    <USAStudyVisa />
  ) : selectedVisa.name === "Study in Canada" ? (
    <CanadaStudyVisa />
  ) : selectedVisa.name === "Study in Australia" ? (
    <AustraliaStudyVisa />
  ) : selectedVisa.name === "Study in Uk" ? (
    <UKStudyVisa />
  ) : selectedVisa.name === "Study in New Zealand" ? (
    <NZStudyVisa />
  ) : selectedVisa.name === "Study in Hongkong" ? (
    <HongStudyVisa />
  ) : selectedVisa.name === "Study in UAE" ? (
    <UAEStudyVisa />
  ) : selectedVisa.name === "Study Abroad with VJC" ? (
    <Study />
  ) : selectedVisa.name === "Study in Germany" ? (
    <Germany />
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
