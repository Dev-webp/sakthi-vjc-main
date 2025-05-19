"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slidesData = [
  {
    image: "/assets/auspr/reviews/review1.png",
    content:
    "Excellent work! I would like to thank VJC Overseas help me getting my Australia PR Visa and would highly recommend to everyone to consult with VJC Overseas for visa processes. The whole team is very competitive and helpful.",
      
    author: "Kavya mopuri",
    title: "UK Study Visa",
  },
  {
    image: "/assets/auspr/reviews/review2.png",
    content:
      "The team at VJC Overseas is incredibly professional and experienced. They helped me with my Australia PR Visa, and We are happily settled in Melbourne. I would highly recommend their services to anyone looking for an immigration consultant in Bangalore.",
    author: "Rohit Naidu",
    title: "Student Visa",
  },
  {
    image: "/assets/auspr/reviews/review3.png",
    content:
     "VJC Overseas Bangalore is the best immigration consultancy I’ve come across. Their team made my permanent residency application process for Australia so simple and hassle-free. I couldn’t be happier with their service!",
    author: "Monisha Vijaykumar",
    title: "Skilled Worker",
  },
  {
    image: "/assets/auspr/reviews/review4.png",
    content:
      "had an amazing experience with VJC Overseas Bangalore. They helped me with my Australia PR immigration process, and everything went smoothly from start to finish. Their expertise and dedication are unmatched.",
    author: "Sai Preethi",
    title: "Australia Immigration",
  },
  {
    image: "/assets/auspr/reviews/review5.png",
    content:
      "VJC overseas made my Australia PR Visa application process very easy. Their staff is very friendly and helpful.",
    author: "Hanish Mj",
    title: "Investor Program",
  },
];

const Passport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-r from-orange-50 to-orange-100 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:flex items-center gap-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-10 rounded-3xl shadow-lg w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 text-orange-400 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 12h-3a4.5 4.5 0 019 0v6a2.25 2.25 0 11-4.5 0v-6zM18 12h-3a4.5 4.5 0 019 0v6a2.25 2.25 0 11-4.5 0v-6z"
                />
              </svg>

              <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                "{slidesData[currentSlide].content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-orange-400 text-white flex items-center justify-center text-xl font-semibold shadow-md">
                  {slidesData[currentSlide].author[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {slidesData[currentSlide].author}
                  </p>
                  <p className="text-orange-500">{slidesData[currentSlide].title}</p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-3 mt-10">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-orange-600"
                        : "bg-orange-300 hover:bg-orange-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={slidesData[currentSlide].image}
                alt={slidesData[currentSlide].author}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Passport;
