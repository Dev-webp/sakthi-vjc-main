"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FAQ from "./FAQ";
import Canadafaq from "./canadafaq";
import Usafaq from "./Usafaq";
import Ukfaq from "./Ukfaq";
import Australiafaq from "./Australiafaq";

// Define country data
const countriesData = {
  Germany: { img: "/germanybtn.webp", component: <FAQ /> },
  Canada: { img: "/canadabtn.avif", component: <Canadafaq /> },
  USA: { img: "/usabtn.avif", component: <Usafaq /> },
  UK: { img: "/ukbtn.avif", component: <Ukfaq /> },
  Australia: { img: "/australiabtn.avif", component: <Australiafaq/> },
  NewZealand: { img: "/newzeleandbtn.avif", component: <FAQ /> },
};

const CountriesData = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isClient, setIsClient] = useState(false); // Fix for hydration issues

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <section className="py-10 bg-gradient-to-bl from-white to-white -mt-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar - Country List */}
        <div className="w-full lg:w-[30%] sticky top-0 h-full">
        <h2 className="text-2xl font-bold mb-6 uppercase text-center tracking-wide bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
  Need Assistance? <br />
  <span className="text-2xl font-bold text-black">Select Your Destination!</span>
</h2>

          
          <ul className="space-y-4 flex flex-col items-center lg:items-center">
            {Object.keys(countriesData).map((country, index) => (
              <li
                key={index}
                onClick={() => handleCountrySelect(country)}
                className="relative cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                {/* Country Image */}
                <div className="relative">
                  <Image
                    src={countriesData[country].img}
                    alt={country}
                    width={128} // 32px * 4 for proper scaling
                    height={128}
                    className="object-cover rounded-full border-2 border-orange-500"
                  />
                  {/* Country Name Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-full">
                    <span className="text-white font-bold text-1xl">{country}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Display Selected Country Component */}
        <div className="w-full lg:w-[70%]">
          {!selectedCountry ? (
            <>
             
              <FAQ />
            </>
          ) : (
            <>
              
              {countriesData[selectedCountry].component}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountriesData;
