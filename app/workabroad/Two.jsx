"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Form from "./Form"; // adjust path if needed
import Wbcontent from "./Wbcontent"; // assuming you have this component

const countriesData = [
  {
    name: "Germany Work Permit",
    path: "/workabroad/germany-work-permit",
    image: "/germany.jpg",
  },
  {
    name: "Canada Work Permit",
    path: "/workabroad/canada-work-permit",
    image: "/canada.webp",
  },
  {
    name: "USA H1b Visa",
    path: "/workabroad/usa-h1b-visa",
    image: "/usa1.jpg",
  },
  {
    name: "Australia Work Permit",
    path: "/workabroad/australia-work-permit",
    image: "/australia.jpg",
  },
  {
    name: "UK Work Permit",
    path: "/workabroad/united-kingdom-work-permit",
    image: "/uk1.webp",
  },
  {
    name: "Denmark Work Permit",
    path: "/workabroad/denmark-work-permit",
    image: "/de.jpg",
  },
  {
    name: "Dubai Work Permit",
    path: "/workabroad/dubai-work-permit",
    image: "/du.webp",
  },
];

const carouselImages = [
  { image: "/germany.jpg", text: "WORK IN GERMANY" },
  { image: "/canada.webp", text: "WORK IN CANADA " },
  { image: "/usa1.jpg", text: "OPPORTUNITIES IN USA" },
];

const Migrate = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col w-full bg-white">

      {/* Top Full Width Carousel Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {carouselImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <img src={item.image} alt="carousel" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">{item.text}</h2>
              <Link href="/assessment">
              <button className="bg-gray-800 hover:bg-orange-500 text-white font-semibold py-2 px-6 transition">
                Free Assessment
              </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Middle Section: 7 Buttons + Wbcontent */}
      <div className="flex flex-col md:flex-row w-full my-10 px-4 md:px-16 gap-8">
        
        {/* 30% Left - Buttons */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {countriesData.map((country, idx) => (
            <button
              key={idx}
              onClick={() => handleButtonClick(country.path)}
              className="flex items-center gap-4 bg-white border border-orange-500 hover:bg-orange-500 rounded-lg p-3 shadow-md transition"
            >
              <img src={country.image} alt={country.name} className="w-12 h-12 object-cover rounded-md" />
              <span className="font-semibold text-gray-800">{country.name}</span>
            </button>
          ))}
        </div>

        {/* 70% Right - Wbcontent */}
        <div className="w-full md:w-2/3">
          <Wbcontent />
        </div>
      </div>

      {/* Bottom Section: Form + Image */}
      <div className="flex flex-col gap-48 md:flex-row items-center w-full my-10 px-4 md:px-16">
        
        {/* 40% Left - Form */}
        <div className="w-full md:w-2/6 -mt-36">
          <Form />
        </div>

        {/* 60% Right - Image */}
        <div className=" w-full md:w-2/5 -mt-28 ">
          <img src="/workabroadimg2.avif" alt="Work Abroad" className="w-full h-auto " />
        </div>

      </div>

    </div>
  );
};

export default Migrate;
