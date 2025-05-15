"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
 
const sliderData = [
  {
    services: [
      { text: "Apply For Canada Permanent Residency", link: "/" },
      { text: "Apply For Canada Study Visa", link: "/" },
    ],
    backgroundImage: "/canada.webp",
    title: "Canada",
    gradient: "bg-gradient-to-r from-red-300 to-white",
  },
  {
    services: [
      { text: "Apply For Australia Permanent Residency Visa", link: "/" },
      { text: "Apply For Australia Study Visa", link: "/" },
    ],
    backgroundImage: "/australia.jpg",
    title: "Australia",
    gradient: "bg-gradient-to-r from-green-500 to-yellow-500",
  },
  {
    services: [
      { text: "Apply For Germany Opportunity Card Visa", link: "germany-opportunity-card" },
      { text: "Apply For Germany Study Visa", link: "/" },
    ],
    backgroundImage: "/germany.jpg",
    title: "Germany",
    gradient: "bg-gradient-to-r from-white to-yellow-500",
  },
  {
    services: [{ text: "Apply For UK Study Visa", link: "/" }],
    backgroundImage: "/uk-flag.png",
    title: "United Kingdom",
    gradient: "bg-gradient-to-r from-blue-500 to-white",
  },
  {
    services: [{ text: "Apply For Malta Study Visa", link: "/" }],
    backgroundImage: "/malta.png",
    title: "Malta",
    gradient: "bg-gradient-to-r from-red-700 to-white",
  },
];
 
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
 
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);
 
  const goToSlide = (index: number) => setCurrentSlide(index);
 
  return (
    <div
      className="relative w-[22rem] lg:w-[28rem] h-[8rem] max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${sliderData[currentSlide].backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        </motion.div>
      </AnimatePresence>
 
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderData[currentSlide].title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-xl lg:text-3xl font-extrabold uppercase text-transparent bg-clip-text ${sliderData[currentSlide].gradient}`}
            >
              {sliderData[currentSlide].title}
            </h2>
            <ul className={`space-y-1 ${currentSlide >= 3 ? "mt-3" : ""}`}>
              {sliderData[currentSlide].services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={service.link}
                    className="text-sm lg:text-base underline text-white hover:text-orange-400 transition"
                  >
                    {service.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
 
      {/* Progress Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {sliderData.map((_, index) => (
          <motion.span
            key={index}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-400"
            }`}
            animate={{
              scale: index === currentSlide ? [1, 1.2, 1] : 1,
              opacity: index === currentSlide ? 1 : 0.6,
            }}
            transition={{
              duration: 0.6,
              repeat: index === currentSlide ? Infinity : 0,
              repeatType: "reverse",
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
 
export default Slider;