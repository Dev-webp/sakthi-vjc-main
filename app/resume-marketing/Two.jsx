"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Briefcase,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Form from "./Form";
import Content from "./Content";
import Image from "next/image";

const cards = [
  {
    name: "Canada Resume Marketing",
    image: "/canadaresume1.webp",
    path: "/resume-marketing/canada-resume-marketing",
  },
  {
    name: "Germany Resume Marketing",
    image: "/germanyresume.jpeg",
    path: "/resume-marketing/germany-resume-marketing",
  },
  {
    name: "USA Resume Marketing",
    image: "/usaresume.jpg",
    path: "/resume-marketing/usa-resume-marketing",
  },
  {
    name: "Australia Resume Marketing",
    image: "/australiaresume.jpg",
    path: "/resume-marketing/australia-resume-marketing",
  },
  {
    name: "UK Resume Marketing",
    image: "/ukresume.jpg",
    path: "/resume-marketing/uk-resume-marketing",
  },
  {
    name: "Denmark Resume Marketing",
    image: "/denmarkresume.jpg",
    path: "/resume-marketing/denmark-resume-marketing",
  },
  {
    name: "Ireland Resume Marketing",
    image: "/irelandresume.jpg",
    path: "/resume-marketing/ireland-resume-marketing",
  },
  {
    name: "Dubai Resume Marketing",
    image: "/uaeresume.jpg",
    path: "/resume-marketing/dubai-resume-marketing",
  },
  {
    name: "Austria Resume Marketing",
    image: "/austriaresume.jpg",
    path: "/resume-marketing/austria-resume-marketing",
  },
  {
    name: "Singapore Resume Marketing",
    image: "/singaporeresume.jpg",
    path: "/resume-marketing/singapore-resume-marketing",
  },
  {
    name: "New Zealand Resume Marketing",
    image: "/nzresume.jpg",
    path: "/resume-marketing/new-zealand-resume-marketing",
  },
  {
    name: "Malaysia Resume Marketing",
    image: "/malaysiaresume.jpg",
    path: "/resume-marketing/malaysia-resume-marketing",
  },
  {
    name: "Poland Resume Marketing",
    image: "/polandresume.jpg",
    path: "/resume-marketing/poland-resume-marketing",
  },
  {
    name: "Malta Resume Marketing",
    image: "/maltaresume.jpg",
    path: "/resume-marketing/malta-resume-marketing",
  },
];

const BookFlipAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentPage < cards.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = () => {
    router.push(cards[currentPage].path);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Form and Flip Card */}
      <div
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-start justify-between px-4 py-10 gap-10 lg:gap-[80px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/investor-visa1.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Left - Form */}
        <div className="relative z-10 w-full lg:w-1/2 max-w-xl mt-16 lg:mt-0">
          <Form />
        </div>

        {/* Right - Flip Cards */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center">
          <motion.h3
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white drop-shadow-lg"
          >
            {cards[currentPage].name}
          </motion.h3>

          <div className="relative w-[280px] sm:w-[320px] md:w-[450px] h-[420px] sm:h-[460px] md:h-[500px] perspective-[1200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={handlePageClick}
                className="absolute inset-0 w-full h-full bg-cover bg-center cursor-pointer overflow-hidden flex flex-col justify-center items-center text-center text-white"
                style={{
                  backgroundImage: `url(${cards[currentPage].image})`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="bg-black bg-opacity-30 w-full h-full flex flex-col justify-center items-center p-4 sm:p-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base text-white drop-shadow text-center"
                  >
                    Explore our premium resume marketing services in{" "}
                    <strong>
                      {cards[currentPage].name.split(" ")[0]}
                    </strong>{" "}
                    to get noticed by global employers.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs text-gray-300 mt-2 sm:mt-3"
                  >
                    (Click anywhere to open details)
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-3 sm:px-4 z-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-30"
              >
                <ChevronLeft />
              </button>
              <div className="text-sm font-semibold text-orange-700 bg-white px-3 py-1 rounded-full shadow">
                Page {currentPage + 1} / {cards.length}
              </div>
              <button
                onClick={handleNext}
                disabled={currentPage === cards.length - 1}
                className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-30"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <Content />

      {/* Features */}
      <div className="bg-white py-10 px-6 sm:px-10 md:px-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          Why Choose VJC Resume Marketing?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <ThumbsUp className="w-10 h-10 text-blue-600 mb-3" />
            <p className="text-lg font-medium text-gray-700">
              Guaranteed Visibility Boost
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Briefcase className="w-10 h-10 text-green-600 mb-3" />
            <p className="text-lg font-medium text-gray-700">
              Targeted Global Job Platforms
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-10 h-10 text-yellow-500 mb-3" />
            <p className="text-lg font-medium text-gray-700">
              Expert CV Customization
            </p>
          </div>
        </div>
      </div>

     {/* Resume Samples */}
<div className="bg-white py-12 px-6 sm:px-10 md:px-20 text-center">
  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
    Check Out Our Sample Resume Designs
  </h3>

  <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 overflow-x-auto">
    {[
      {
        src: "/resumemarkeingexample.webp",
        alt: "Sample Resume 1",
        caption: "Professional & Clean Design",
      },
      {
        src: "/resume-marketing-bg.webp",
        alt: "Sample Resume 2",
        caption: "Modern and Creative Style",
      },
      {
        src: "/resumemarketingexample-2.webp",
        alt: "Sample Resume 3",
        caption: "Detailed and Comprehensive Layout",
      },
    ].map((sample, index) => (
      <div
        key={index}
        className="flex flex-col items-center min-w-[300px] max-w-[350px]"
      >
        <Image
          src={sample.src}
          alt={sample.alt}
          width={350}
          height={450}
          className="rounded-lg shadow-lg object-cover"
        />
        <p className="mt-4 text-gray-600 text-sm">{sample.caption}</p>
      </div>
    ))}
  </div>
</div>
</div>
  );
};

export default BookFlipAnimation;
