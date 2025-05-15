"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";  // Import useRouter

const Migrate = () => {
  const router = useRouter();  // Initialize router

  // Define the navigation function
  const handleNavigation = (path) => {
    router.push(path);
  };

  // Counter for stats
  const [visaCount, setVisaCount] = useState(0);
  const [languagesCount, setLanguagesCount] = useState(0);
  const [consultantsCount, setConsultantsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisaCount((prev) => (prev < 500000 ? prev + 5000 : 500000));
      setLanguagesCount((prev) => (prev < 10 ? prev + 1 : 10));
      setConsultantsCount((prev) => (prev < 30 ? prev + 1 : 30));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full items-center text-center px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-black bg-clip-text text-transparent">
  
Don't let the visa interview</h2>

      {/* 6 Images Grid */}
      {/* Horizontal Scrollable Image Row */}
<div className="flex gap-0 overflow-x-auto mt-6 scrollbar-hide px-4 md:justify-center">
  <Image src="/germany.jpg" alt="Image 1" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
  <Image src="/canada.webp" alt="Image 2" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
  <Image src="/hk.jpg" alt="Image 3" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
  <Image src="/australia.jpg" alt="Image 4" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
  <Image src="/uk-flag.png" alt="Image 5" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
  <Image src="/uaebgimgnew.jpg" alt="Image 6" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
  <Image src="/usapr.jpg" alt="Image 7" width={200} height={200} className="w-40 h-40 object-cover flex-shrink-0" />
</div>


      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-black to-orange-600 bg-clip-text text-transparent">stop you—train with experts and succeed!</h1>

      {/* Consultation Box */}
      <div className="w-full max-w-4xl mt-12 flex flex-col md:flex-row items-center bg-gray-700 ">
        <div className="w-full md:w-4/5 text-left text-lg font-semibold text-white p-2">Get expert guidance and ace your visa interview with confidence.</div>
        <div className="w-full md:w-1/5 bg-yellow-600 text-white flex justify-center items-center">
          <Link href="/assessment">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-1 py-1 bg-yellow-600 text-black font-bold"
            >
              Book Your Consultation
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full bg-white mt-12 py-6 flex flex-col md:flex-row items-center justify-around text-center">
  <div className="flex flex-col items-center">
  <div className="text-xl font-bold mt-2 w-full">Visa Interviews Conducted</div>
    <div className="text-3xl font-extrabold ">{visaCount.toLocaleString()}+</div>
    
  </div>
  <div className="flex flex-col items-center mt-6 md:mt-0">
  <div className="text-xl font-bold mt-2 w-full">Languages Spoken</div>
    <div className="text-3xl font-extrabold ">{languagesCount}+</div>
    
  </div>
  <div className="flex flex-col items-center mt-6 md:mt-0">
    
    <div className="text-xl font-bold mt-2 w-full">Consultants & Embassies</div>
    <div className="text-3xl font-extrabold ">{consultantsCount}+</div>
  </div>
</div>
<hr className="w-full border-1 border-orange-600" />

      {/* Experience Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch mt-12">
  {/* Left Section - Buttons */}
  <div className="w-full md:w-1/2 bg-white py-6 flex flex-col items-center text-center">
    {/* Heading */}
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      To know more about study materials, tips, strategies, click below links
    </h2>

    {/* Buttons */}
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <button
        onClick={() => handleNavigation('/ielts')}
        className="bg-gradient-to-r from-orange-600 to-gray-800 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700"
      >
        IELTS
      </button>
      <button
        onClick={() => handleNavigation('/pte')}
        className="bg-gradient-to-r from-gray-800 to-orange-600 text-white py-2 px-4 rounded-lg w-full hover:bg-green-700"
      >
        PTE
      </button>
      <button
        onClick={() => handleNavigation('/gre')}
        className="bg-gradient-to-r from-orange-600 to-gray-800 text-white py-2 px-4 rounded-lg w-full hover:bg-red-700"
      >
        GRE
      </button>
      <button
        onClick={() => handleNavigation('/gmat')}
        className="bg-gradient-to-r from-gray-800 to-orange-600 text-white py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
      >
        GMAT
      </button>
      <button
        onClick={() => handleNavigation('/toefl')}
        className="bg-gradient-to-r from-orange-600 to-gray-800 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-700"
      >
        TOEFL
      </button>
      <button
        onClick={() => handleNavigation('/duolingo')}
        className="bg-gradient-to-r from-gray-800 to-orange-600 text-white py-2 px-4 rounded-lg w-full hover:bg-gray-900"
      >
        DUOLINGO
      </button>
    </div>
  </div>

  {/* Right Section - Text */}
  <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-center">
      Our team has a wide range of experience
    </h2>
    <ul className="pl-0 space-y-5 text-left">
      <li className="text-lg font-semibold text-orange-600">
        Prepare for your interview
        <p className="text-sm text-gray-600">
        Did you know 1 in 4 people get rejected? Get preparation from a Former Visa Officer who can help you pass on the first try! 
        </p>
      </li>
      <li className="text-lg font-semibold text-orange-600">
        Overcome a visa refusal
        <p className="text-sm text-gray-600">
        Find out why you really got denied with our help. We will help you see your case through the eyes of the Visa Officer so you can get approved on your next attempt
        </p>
      </li>
      <li className="text-lg text-orange-600 font-semibold">
        Strategies for complicated situations
        <p className="text-sm text-gray-600">
        We know better than anyone else how Visa Officers think and make decisions. Argo can help you prepare for how to work through any challenges at your visa interview.
        </p>
      </li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Migrate;