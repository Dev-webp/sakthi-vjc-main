"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import Content from "./Content";

const Migrate = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto ">
      {/* Background Image for Mobile & Tablet */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/visitvisa.jpg')" }} />

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Image (Hidden on Small Screens) */}
        <div className="w-full hidden md:flex justify-start -ml-16">
          <Image 
            src="/businessvisa.jpg"
            alt="Migration"
            width={900} 
            height={500} 
            className="shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center text-center md:text-left md:-mt-10 md:bg-transparent p-6 md:p-0 rounded-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent ml-5 mb-4 mt-10 md:-mt-60">
  Migrate with Confidence - BUSINESS VISA
</h2>

          <p className="text-lg text-black ml-7">
            Explore new opportunities abroad with our expert guidance. We help you with visas, documentation, and the entire migration process.
          </p>
        </div>
      </div>

      {/* Centered Box Section */}
      <div className="relative z-10 mt-16 md:-mt-64 ml-auto md:mr-0 h-auto bg-gray-800  shadow-lg p-5 w-full max-w-3xl text-center">
  {/* Top Buttons with Image on Left and Text on Right */}
  <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
  <Link href="/visit">
    <button className="flex items-center w-full md:w-60  shadow-md hover:shadow-lg transition h-[100px]">
      
      <Image src="/visitvisaimg1.jpg" alt="Visa 1" width={50} height={100} className="w-20 h-20 p-1" />
      <span className="flex-1 text-center text-white font-semibold p-3">
      VISIT VISA
      </span>
    </button>
    </Link>

<Link href="/visit-tourist">
    <button className="flex items-center w-full md:w-60   shadow-md hover:shadow-lg transition h-[100px]">
      <Image src="/visit-touristvisa.jpg" alt="Visa 2" width={50} height={100} className="w-20 h-20 p-1" />
      <span className="flex-1 text-center text-white font-semibold p-3">
       VISIT-TOURIST VISA
      </span>
    </button>
    </Link>
  </div>

  {/* Bottom Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-6">
    <Link href="/dependant">
    <button className="flex items-center w-full md:w-60  shadow-md hover:shadow-lg transition h-[100px]">
      <Image src="/dvimg1.jpg" alt="Visa 3" width={50} height={100} className="w-20 h-20 p-1" />
      <span className="flex-1 text-center text-white font-semibold p-3">
        DEPENDENT VISA
      </span>
    </button>
    </Link>

    <Link href="/business">
    <button className="flex items-center w-full md:w-60  shadow-md hover:shadow-lg transition h-[100px]">
      <Image src="/bvimg1.jpg" alt="Visa 4" width={50} height={100} className="w-20 h-20 p-1" />
      <span className="flex-1 text-center text-white font-semibold p-3">
        BUSINESS VISA
      </span>
    </button>
    </Link>
  </div>
  
</div>

</div>
  );
};

export default Migrate;
