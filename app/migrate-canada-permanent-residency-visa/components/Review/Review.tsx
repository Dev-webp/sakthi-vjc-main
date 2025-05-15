"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slidesData = [
  {
    image: "/assets/canadapr/Reviews/review1.png",
    content: "The team at VJC Overseas Bangalore made my dream of studying in the UK a reality. Their guidance and support in securing my education visa were invaluable. I’m so grateful for their help and would recommend them to anyone looking to study abroad.",
    author: "Kavya mopuri",
    title: "UK Study Visa"
  },
  {
    image: "/assets/canadapr/Reviews/review4.png",
    content: "VJC Overseas Bangalore is the best immigration consultancy I’ve come across. Their team made my permanent residency application process for Australia so simple and hassle-free. I couldn’t be happier with their service!",
    author: "Rohit Naidu",
    title: "Student Visa"
  },
  {
    image: "/assets/canadapr/Reviews/review3.png",
    content: "As someone who was completely new to the study abroad application process, I was so grateful for the support I received from VJC Overseas. They guided me through every step, helping me secure my education visa without any complications. I highly recommend their services!",
    author: "Monisha Vijaykumar",
    title: "Skilled Worker"
  },
  {
    image: "/assets/canadapr/Reviews/review2.png",
    content: "had an amazing experience with VJC Overseas Bangalore. They helped me with my Australia immigration process, and everything went smoothly from start to finish. Their expertise and dedication are unmatched.",
    author: "Sai Preethi",
    title: "Australia Immigration"
  },
  {
    image: "/assets/canadapr/Reviews/review5.png",
    content: "Excellent work! I would like to thank VJC Overseas help me getting my study visa extension and would highly recommend to everyone to consult with VJC Overseas for visa processes. The whole team is very competitive and helpful.",
    author: "Hanish Mj",
    title: "Investor Program"
  }
];

const Passport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="w-full pb-16 bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: "url('/assets/canadapr/review.png')" }}
    >
      <div className="w-full max-w-6xl px-6 md:flex items-center gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="w-full md:flex items-center gap-10"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full h-[500px] max-w-md">
                <Image
                  src={slidesData[currentSlide].image}
                  alt="Reviewer"
                  fill
                  className="rounded-xl object-cover shadow-md"
                />
              </div>
            </div>

            {/* Right: Quote Box */}
            <div className="w-full md:w-1/2 bg-sky-600 text-white p-8 rounded-xl shadow-lg relative mt-10 md:mt-0">
              <span className="text-5xl text-yellow-400 absolute top-4 left-4">“</span>
              <p className="text-lg italic mb-6 mt-8">{slidesData[currentSlide].content}</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  {slidesData[currentSlide].author[0]}
                </div>
                <div>
                  <p className="font-semibold">{slidesData[currentSlide].author}</p>
                  <p className="text-sm text-gray-300">{slidesData[currentSlide].title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Passport;
