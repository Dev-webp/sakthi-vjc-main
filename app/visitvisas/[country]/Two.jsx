"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Usab1 from "./Usab1";
import Canadavisit from "./Canadavisit";
import Usab2 from "./Usab2";
import Usab1b2 from "./Usab1b2";
import Australiavisit from "./Australiavisit";
import UsaVisit from "./UsaVisit";
import Ukvisit from "./Ukvisit";
import Dubaivisit from "./Dubaivisit";
import Denmark from "./Denmark";
import Austria from "./Austria";
import Itlay from "./Itlay";
import Schengen from "./Schengen";
const visaData = [

  { name: "USA Visit Visa", path: "/visitvisas/usa-visit-visa", image: "/usaplanevisit.jpg" },
  { name: "USA B1 Visa", path: "/visitvisas/usa-b1-visa", image: "/visit1.webp" },
  { name: "USA B2 Visa", path: "/visitvisas/usa-b2-visa", image: "/visit1.webp" },
  { name: "USA B1/B2 Visa", path: "/visitvisas/usa-b1-b2-visa", image: "/visit1.webp" },
  { name: "Canada Visit Visa", path: "/visitvisas/canada-visit-visa" , image: "/canada.webp"},
  { name: "Australia Visit Visa", path: "/visitvisas/australia-visit-visa" , image: "/australiabgimg.jpg"},
  { name: "UK Visit Visa", path: "/visitvisas/uk-visit-visa" , image: "/uk1.webp"},
  { name: "Dubai Visit Visa", path: "/visitvisas/dubai-visit-visa", image: "/du.webp" },
  { name: "Denmark Visit Visa", path: "/visitvisas/denmark-visit-visa", image: "/44.webp" },
  { name: "Austria Visit Visa", path: "/visitvisas/austria-visit-visa" , image: "/austriavisitvisa.jpg"},
  { name: "Italy Visit Visa", path: "/visitvisas/italy-visit-visa", image: "/itlay23.webp" },
  { name: "Schengen Visit Visa", path: "/visitvisas/schengen-visit-visa", image: "/schengen.webp" },
 
];
const defaultVisa = {
  name: "Permanent Residency Visa",
  path: "/Jobseeker",
  image: "/.jpg",
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
                Start your migration journey with the right Permanent Residency Visa option. Choose your destination and let us guide you.
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
        <div className="flex justify-center md:justify-start mb-8 ml-0 md:ml-16">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">"Explore more,</span>
            <span className="block text-center">one visa away."</span>
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Visa Buttons Section */}
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
            className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative md:-mt-32 sm:-mt-20 mt-0"
            style={{ maxHeight: "700px", minHeight: "1050px", overflowY: "auto" }}
          >
            {selectedVisa.path === defaultVisa.path ? (
              <div className="text-gray-700 text-lg leading-relaxed">
                Please select a visa type from the left to view more detailed information about that particular Permanent Residency visa.
              </div>
            ) : selectedVisa.path === "/visitvisas/usa-visit-visa" ? (
              <UsaVisit />
            ) : selectedVisa.path === "/visitvisas/usa-b1-visa" ? (
              <Usab1 />
            ) : selectedVisa.path === "/visitvisas/usa-b2-visa" ? (
              <Usab2 />
            ) : selectedVisa.path === "/visitvisas/usa-b1-b2-visa" ? (
              <Usab1b2 />
            ) : selectedVisa.path === "/visitvisas/canada-visit-visa" ? (
              <Canadavisit />
            ) : selectedVisa.path === "/visitvisas/uk-visit-visa" ? (
              <Ukvisit />
            ) : selectedVisa.path === "/visitvisas/australia-visit-visa" ? (
              <Australiavisit />
            ) : selectedVisa.path === "/visitvisas/dubai-visit-visa" ? (
              <Dubaivisit />
            ) : selectedVisa.path === "/visitvisas/denmark-visit-visa" ? (
              <Denmark />
            ) : selectedVisa.path === "/visitvisas/austria-visit-visa" ? (
              <Austria />
            ) : selectedVisa.path === "/visitvisas/italy-visit-visa" ? (
              <Itlay />
            ) : selectedVisa.path === "/visitvisas/schengen-visit-visa" ? (
              <Schengen />
            ) : (
              <div className="text-gray-700 text-lg leading-relaxed">
                Information about <strong>{selectedVisa.name}</strong> will be displayed here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
