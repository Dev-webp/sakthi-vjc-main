"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sliderData = [
  
  {
    title: "Congratulations!",
description: "You've unlocked a special visa offer. Apply now and save!",

    image: "/3.png",
  },
  {
    title: "Easy Visa Application",
description: "Tourist, work, or family visas made simple.",

image: "/germanypopupimg.avif",
  },
  {
    title: "Study Abroad Offer",
description: "Exclusive deals for students applying for overseas education visas.",
    image: "/POPUP2.png",
  },
  {
    title: "Tourist Visa Offer",
    description: "Enjoy special deals on your next travel visa application.",
    image: "/popup3.png",
  },
  {
    title: "Business Visa Offer",
description: "Get exclusive deals on business visa applications.",

    image: "/popup7.jpg",
  },
];

function AutoSlider({ delay = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderData.length);
    }, delay);
    return () => clearInterval(timer);
  }, [delay]);

  const current = sliderData[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <div className="w-[160px] md:w-[280px] aspect-square mb-2">
          <img
            src={current.image}
            alt={current.title}
            className="rounded-lg object-cover w-full h-full "
          />
        </div>
        <h2 className="text-sm md:text-base font-semibold mb-1">{current.title}</h2>
        <p className="text-gray-600 text-xs md:text-sm">{current.description}</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PopupModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white border border-orange-600 w-full h-96 max-w-4xl shadow-xl overflow-hidden"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-white hover:text-black text-2xl"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-stretch">
              {/* Left: Slider */}
              <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-6 px-4">
                <AutoSlider />
              </div>

              {/* Right: Half-Moon Content */}
<div className="w-full md:w-1/2  bg-gray-800 border border-orange-600 p-8 rounded-l-full md:rounded-l-full md:rounded-r-none flex items-center justify-center overflow-hidden">
  <div className="text-center max-w-sm px-2">
    <h2 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight hidden md:block">
      Move Abroad with Confidence
    </h2>
    <p className="text-white text-base mb-6 hidden md:block">
      Let experts guide you through every step of your visa and immigration process.
      Covering 10+ countries with a proven success record.
    </p>
    <Link
      href="/assessment"
      className="inline-block bg-gradient-to-tr from-white to-orange-600 border-2 border-orange-600  font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-100 transition duration-300"
    >
      Book Free Consultation
    </Link>
  </div>
</div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
