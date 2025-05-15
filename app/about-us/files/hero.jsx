"use client"
import React from 'react';
import { motion } from "framer-motion";
import { containerVariants, titleVariants, desVariants } from "../../animation";
import Nav from "@/app/components/Nav";
import Form from "@/app/components/Form";

const CompOne = () => {
  return (
    <>
      <Nav />
      <section className=" py-4 lg:py-0 mt-2 md:mt-0 lg:mt-10 bg-gradient-to-bl from-white to-white relative">
        {/* Parallax Background with Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/b1.webp)' }}
          animate={{ y: ['0%', '5%'] }}
          transition={{
            y: { repeat: Infinity, repeatType: "reverse", duration: 10, ease: "easeInOut" },
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>
        </div>

        <motion.div
          variants={containerVariants(0.4)}
          initial="offscreen"
          animate="onscreen"
          className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 relative z-10"
        >
          {/* Left Section (Text) */}
          <motion.div
            variants={containerVariants(0.4)}
            className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto"
          >
            <motion.h1
              variants={titleVariants}
              className="font-semibold uppercase leading-tight text-center text-teal-950 text-4xl sm:text-5xl lg:text-[3.50rem] mt-20"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-100 to-orange-600">
                About Us <br />VJC Overseas
              </span>
            </motion.h1>
            <motion.p
              variants={desVariants}
              className="text-gray-300 tracking-tight text-center md:font-medium max-w-xl mx-auto lg:max-w-lg"
            >
              Welcome to VJC Overseas, a trusted name in the field of overseas education and immigration services. Founded in 2009, we began as a local firm with a simple yet powerful goal: to provide the highest quality services to students aspiring to study abroad and professionals seeking to build their careers overseas. Over the years, our commitment to excellence has transformed us into a leading name in the industry.
            </motion.p>
          </motion.div>

          {/* Right Section (Form) */}
          <div
            variants={containerVariants(0.8)}
            initial="offscreen"
            animate="onscreen"
            className="flex justify-center lg:justify-start mt-6 lg:mt-0"
          >
            <div
              className="w-full max-w-md sm:max-w-lg md:max-w-xl md:mt-20 lg:max-w-full"
            >
              <Form />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CompOne;
