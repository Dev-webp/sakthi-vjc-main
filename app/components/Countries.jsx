"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Image from "next/image";

// Updated list with 15 countries (removed duplicate Spain)
const countries = [
  {
    name: "Canada study visa",
    image: "/c3.jpg",
    description:
      "Canada is known for its beautiful landscapes and outdoor activities.",
    color: "bg-gradient-to-r from-red-600 to-white",
  },
  {
    name: "Australia study visa",
    image: "/c4.png",
    description:
      "Australia is famous for its wildlife, beaches, and cultural diversity.",
    color: "bg-gradient-to-r from-blue-700 to-white",
  },
  {
    name: "Usa study visa",
    image: "/c2.png",
    description:
      "The USA is famous for its world-class education system and career opportunities.",
    color: "bg-gradient-to-r from-red-600 to-red-600",
  },
  {
    name: "Germany study visa",
    image: "/c5.png",
    description:
      "Germany boasts a strong economy, rich history, and modern infrastructure.",
    color: "bg-gradient-to-r from-black to-yellow-600",
  },
  {
    name: "Uk study visa",
    image: "/c1.png",
    description:
      "The UK is one of the most sought-after destinations for international students and skilled professionals.",
    color: "bg-gradient-to-r from-red-700 to-blue-700",
  },
  {
    name: "France study visa",
    image: "/c6.png",
    description:
      "France is known for its art, cuisine, and historical landmarks.",
    color: "bg-gradient-to-r from-blue-500 to-white",
  },
  {
    name: "Italy study visa",
    image: "/c7.png",
    description: "Italy is famous for its art, architecture, and cuisine.",
    color: "bg-gradient-to-r from-green-600 to-white",
  },
  {
    name: "Spain study visa",
    image: "/c13.png",
    description: "Spain is known for its vibrant culture, food, and festivals.",
    color: "bg-gradient-to-r from-red-600 to-yellow-600",
  },
  {
    name: "Netherlands study visa",
    image: "/c15.png",
    description:
      "The Netherlands is famous for its windmills, tulips, and canals.",
    color: "bg-gradient-to-r from-red-600 to-blue-600",
  },
  {
    name: "UAE study visa",
    image: "/c16.png",
    description:
      "The UAE offers a unique blend of ancient traditions and modern technology.",
    color: "bg-gradient-to-r from-green-700 to-white",
  },
  {
    name: "Switzerland study visa",
    image: "/c9.png",
    description:
      "Switzerland is known for its Alps, chocolates, and financial services.",
    color: "bg-gradient-to-r from-red-600 to-white",
  },
  {
    name: "Sweden study visa",
    image: "/c13.png",
    description:
      "Sweden is famous for its design, technology, and sustainability.",
    color: "bg-gradient-to-r from-blue-500 to-yellow-500",
  },
  {
    name: "South Africa study visa",
    image: "/c12.png",
    description:
      "South Africa offers stunning landscapes, fjords, and a rich cultural history.",
    color: "bg-gradient-to-r from-green-500 to-yellow-500",
  },
  {
    name: "Singapore study visa",
    image: "/c11.png",
    description:
      "Singapore is known for its high-tech infrastructure and cleanliness.",
    color: "bg-gradient-to-r from-red-500 to-white",
  },
  {
    name: "New Zealand study visa",
    image: "/c10.png",
    description:
      "New Zealand is famous for its beautiful nature, lakes, and high education standards.",
    color: "bg-gradient-to-r from-blue-500 to-white",
  },
  {
    name: "Malaysia study visa",
    image: "/c8.png",
    description:
      "Malaysia offers beautiful beaches, rich history, and amazing food.",
    color: "bg-gradient-to-r from-blue-600 to-yellow-600",
  },
];

const CountrySlider = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const handleClick = (index) => {
    const fullIndex = scrollPosition * 5 + index;
    setExpandedIndex(fullIndex === expandedIndex ? null : fullIndex);
  };

  const handleCancel = () => {
    setExpandedIndex(null);
  };

  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollBy({
        left: e.deltaY > 0 ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) =>
      Math.min(prev + 1, Math.floor(countries.length / 5) - 1)
    );
  };

  useEffect(() => {
    const currentSliderRef = sliderRef.current;
    if (currentSliderRef) {
      currentSliderRef.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    return () => {
      if (currentSliderRef) {
        currentSliderRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const logos = Array.from({ length: 8 }, (_, i) => `/logo${i + 1}.png`);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {expandedIndex !== null && (
        <motion.div
          className="absolute top-0 left-0 w-full h-[60vh] lg:h-full bg-cover bg-center z-50"
          style={{ backgroundImage: `url(${countries[expandedIndex].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute bottom-28 left-1/3 transform -translate-x-1/2 w-[60%] h-[60%] overflow-y-auto overflow-x-hidden  rounded-lg  p-6 scroll-smooth hide-scrollbar">
           <Swiper
    slidesPerView={4}
    spaceBetween={30}
    loop
    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
    speed={3000}
    allowTouchMove={false}
    modules={[Autoplay]}
    breakpoints={{
      320: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
  >
    {logos.map((logo, i) => (
      <SwiperSlide key={`top-${i}`}>
        <div className="flex items-center justify-center bg-white rounded-md p-4 shadow-md h-36 w-full hover:scale-105 transition-transform duration-300">
          <Image
            src={logo}
            alt={`Logo ${i + 1}`}
            width={100}
            height={70}
            className="object-contain"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Bottom Reverse Auto Slider */}
  <Swiper
    slidesPerView={4}
    spaceBetween={30}
    loop
    autoplay={{
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
    speed={3000}
    allowTouchMove={false}
    modules={[Autoplay]}
    className="mt-8"
    breakpoints={{
      320: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
  >
    {logos.map((logo, i) => (
      <SwiperSlide key={`bottom-${i}`}>
        <div className="flex items-center justify-center bg-white rounded-md p-4 shadow-md h-36 w-full hover:scale-105 transition-transform duration-300">
          <Image
            src={logo}
            alt={`Logo ${i + 1}`}
            width={100}
            height={70}
            className="object-contain"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
          </div>

          <motion.button
            className="absolute top-10 right-9 bg-neutral-200 text-neutral-400 p-2 rounded-full z-50"
            onClick={handleCancel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FaTimes size={14} />
          </motion.button>

          <motion.div
            className="absolute top-0 right-0 w-screen lg:w-[33rem] h-full bg-white p-6 flex flex-col justify-center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="ml-6 mr-4">
              <h2 className="text-4xl font-bold text-black mb-4 uppercase">
                {countries[expandedIndex].name}
              </h2>
              <p className="text-base text-justify text-black">
                {countries[expandedIndex].description}
              </p>
             <a
                href={`/`}
                className="inline-flex items-center mt-6 justify-center bg-gradient-to-r from-sky-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 ease-in-out"
              >
                Read More
              </a>
            </div>
          </motion.div>

          {/* Sponsor Logos over background image */}
          <motion.div
            className="absolute bottom-10 right-10 flex gap-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>
      )}

      {/* Navigation buttons */}
      <motion.button
        className="absolute top-[33.20rem] lg:top-1/2 left-4 z-20 transform -translate-y-1/2 bg-neutral-200 text-neutral-400 p-2 rounded-full"
        onClick={scrollLeft}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <MdOutlineKeyboardDoubleArrowLeft size={24} />
      </motion.button>

      <motion.button
        className="absolute top-[33.20rem] lg:top-1/2 right-4 z-20 transform -translate-y-1/2 bg-neutral-200 text-neutral-400 p-2 rounded-full"
        onClick={scrollRight}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <MdOutlineKeyboardDoubleArrowRight size={24} />
      </motion.button>

      {/* Slider */}
      <motion.div
        ref={sliderRef}
        className="flex w-full h-screen snap-x snap-mandatory gap-6 rounded-lg mt-0 lg:mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ scrollBehavior: "smooth" }}
      >
        {countries
          .slice(scrollPosition * 5, (scrollPosition + 1) * 5)
          .map((country, index) => (
            <motion.div
              key={index}
              className="relative w-[20%] h-[33rem] mt-6 bg-cover bg-center flex items-center justify-center rounded-xl snap-center overflow-hidden"
              style={{
                backgroundImage: `url(${country.image})`,
                cursor: "pointer",
              }}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-orange-500 opacity-50 z-10 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h2
                className={`absolute bottom-16 left-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-white z-20 uppercase ${country.color}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {country.name}
              </motion.h2>
              <motion.p
                className="absolute bottom-16 left-16 text-lg font-semibold text-white z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Explore the best universities
              </motion.p>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-gray-900 to-transparent opacity-65"></div>
              <div className="absolute -bottom-4 left-0 w-full h-1/2 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-65"></div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default CountrySlider;
