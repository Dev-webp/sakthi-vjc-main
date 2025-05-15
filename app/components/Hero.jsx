"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, desVariants } from "../animation";  
import Form from "@/app/components/Form";
import Slider from "@/app/components/HeroSlider";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="py-4 lg:py-0 mt-20 md:-mt-20 lg:mt-20 bg-gradient-to-bl from-white to-white relative">
      
        {/* Background Image */}
        <motion.div
  className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
  style={{ backgroundImage: "url(/airplane.png)" }}
  animate={{ backgroundPositionY: ["0%", "5%"] }} // Moves the background instead of the entire div
  transition={{
    backgroundPositionY: { repeat: Infinity, repeatType: "reverse", duration: 10, ease: "easeInOut" }
  }}
  variants={containerVariants(0.4)}
>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
</motion.div>


        <motion.div
          variants={{}}
          initial="offscreen"
          animate="onscreen"
          className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 relative z-10"
        >

          {/* Left Section */}
          <motion.div
            variants={containerVariants(0.4)}
            className="flex flex-col space-y-8 lg:space-y-6 items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto"
          >

            {/* Optimized Video (Replacing 1.gif) */}
            <Image
  src="/1.gif"
  alt="Work in Germany"
  width={1120} // Adjust width based on actual GIF dimensions
  height={630}  // Adjust height based on actual GIF dimensions
  className="w-[24rem] lg:w-[70rem] h-auto mt-6 items-center"
  priority // Ensures it loads quickly
  unoptimized // Next.js normally optimizes images, but GIFs need to stay animated
/>

            {/* Award Image */}
            <Image 
              src="/award.png" 
              alt="Award"
              width={432} 
              height={112} 
              priority
              unoptimized
              className="w-[23rem] lg:w-[27rem] h-[7rem]"
            />

            <Slider /> 

            <motion.p
              variants={desVariants}
              className="text-gray-200 tracking-tight text-center text-xs lg:text-base md:font-medium max-w-xs mx-auto lg:max-w-xl"
            >
              Being India&apos;s Most Trusted Brand (2022 & 2024) and the Global Icon Award (2023), we do not just walk on the success trails; we make them. Your international aspirations are guided and managed at VJC Overseas with our track record and absolute commitment.
            </motion.p>

          </motion.div>

          {/* Right Section (Form) */}
          <motion.div
            variants={containerVariants(0.8)}
            initial="offscreen"
            animate="onscreen"
            className="z-20"
          >
            <div className="flex justify-center items-center mt-10">
              <Form />
            </div>
          </motion.div>

        </motion.div>

      </section>
    </>
  );
}
