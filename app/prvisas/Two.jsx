"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Content from "./Content";


const visaData = [
  { name: "Canada Permanent Residency Visa", path: "/prvisas/canadapr", image: "/1.jpg" },
  { name: "Australia Permanent Residency Visa", path: "/prvisas/australiapr", image: "/airplane.png" },
  { name: "UK Permanent Residency Visa", path: "/prvisas/ukpr", image: "/dmbusi.jpg" },
  { name: "New Zealand Permanent Residency Visa", path: "/prvisas/newzealandpr", image: "/images/newzealand.jpg" },
  { name: "Germany Blue Card Visa", path: "/prvisas/germanybluecard", image: "/images/germany.jpg" },
  { name: "USA Green Card", path: "/prvisas/usagreencard", image: "/images/usa.jpg" },
];

const defaultVisa = {
  name: "Permanent Residency Visa",
  path: "/prvisas",
  image: "/pr1.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <>
    <div className="w-full overflow-x-hidden">
      
      {/* ===== FULL-WIDTH BACKGROUND IMAGE ===== */}
      <div
        className="w-full min-h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
          <motion.div
            className="text-white text-center max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl mt-24 md:mt-20 lg:text-[3rem] font-semibold uppercase leading-tight">
              {selectedVisa.name}
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Start your migration journey with the right Permanent Residency Visa option. Choose your destination and let us guide you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== FORM & VISA BUTTONS ===== */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-white flex flex-col lg:flex-row gap-8">
        
        {/* Left: Form (40%) */}
        <div className="w-full lg:w-[40%]">
          <Form />
        </div>

        {/* Right: Visa Buttons (60%) */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visaData.map((visa) => (
            <button
              key={visa.path}
              onClick={() => handleVisaClick(visa)}
              className={`h-40 w-full flex items-center justify-between text-base sm:text-lg font-semibold px-6 py-4 transition duration-300 shadow ${
                selectedVisa.path === visa.path
                  ? "bg-orange-500 text-white shadow-orange-400"
                  : "bg-white text-black border border-orange-200 hover:bg-orange-500 hover:text-white"
              } hover:scale-105`}
            >
              <span className="w-3/4 text-left">{visa.name}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ))}
        </div>

      </div>

      {/* ===== CONTENT SECTION (Always Visible) ===== */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-white">
  <Content />
</div>
          
        </div>
       
        </>
    
  );
};

export default Migrate;
