"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Form from "./Form";
import Content from "./Content";

const HeroSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Top Section with Two Images */}
      <div className="w-full h-auto md:h-[30%] flex flex-col md:flex-row">
        {/* Left Image (30% Width on Desktop, Full on Mobile) */}
        <div
          className="w-full md:w-[30%] h-[250px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/southafricaimg1.avif')" }}
        ></div>

        {/* Right Image (70% Width on Desktop, Full on Mobile) */}
        <div
          className="w-full md:w-[70%] h-[250px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white p-6"
          style={{ backgroundImage: "url('/quebecimg2.jpg')" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center text-black">
            Your Migration Journey Starts Here!..
          </h1>
        </div>
      </div>

      {/* Buttons Section (Centered & Responsive) */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-14 -mt-6 md:-mt-9 px-4">
        <Link href="/migrate">
        <button className="w-full md:w-48 h-14 md:h-20 bg-gradient-to-r from-orange-500 to-black text-white text-lg font-semibold rounded">
          Migrate to Germany
        </button>
        </Link>
        <Link href="/quebec">
        <button className="w-full md:w-48 h-14 md:h-20 bg-gradient-to-r from-blue-500 to-white text-black text-lg font-semibold rounded">
        Migrate to Quebec
        </button>
        </Link>
        <Link href="/south-africa">
        <button className="w-full md:w-48 h-14 md:h-20 bg-gradient-to-r from-red-500 to-black text-white text-lg font-semibold rounded">
        Migrate to South-Africa
        </button>
        </Link>
      </div>

      {/* Bottom Section with Content & Form */}
      <div className="w-full flex flex-col md:flex-row mt-6 md:mt-8 bg-white">
        {/* Left Content (70% on Desktop, Full Width on Mobile) */}
        <div className="w-full md:w-[70%] p-6 overflow-y-auto h-auto md:h-[90vh] mt-0 md:mt-8">
          <Content />
        </div>

        {/* Right Form (30% on Desktop, Full Width on Mobile) */}
        <div className="w-full md:w-[40%] -mt-20 md:-mt-0 p-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
