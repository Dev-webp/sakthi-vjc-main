'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <section className="w-full py-16 bg-orange-50 flex flex-col items-center text-center mt-7">
      {/* Centered Heading */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 max-w-3xl px-4"
      >
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug mt-5">
          Take the first step - check your Canada PR eligibility and plan confidently.
        </h2>
      </motion.div>

      {/* Box 1 - Image Left, Text Right */}
      <div className="w-full flex justify-center relative mb-12 px-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[80%] bg-gray-50 border border-gray-200 shadow-md text-left min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row relative z-10"
        >
          {/* Image */}
          <div className="w-full md:w-[30%] h-48 md:h-auto">
            <img
              src="/canadacalimg.png"
              alt="Canada Calculator"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-[70%] flex items-center px-6 py-6">
            <ul className="list-disc list-inside text-black font-bold space-y-6 text-base">
              <li>Our intuitive calculator is simple to use and delivers results in just a few clicks—perfect for busy professionals and first-time applicants.</li>
              <li>The tool uses the Comprehensive Ranking System (CRS)—the same system used by Canada’s Express Entry and Provincial Nominee Programs (PNPs).</li>
              <li>Your score is based on age, education, work experience, IELTS scores, and adaptability factors—just like the real application.</li>
              <li>Instantly understand where you stand and what steps you can take to boost your score and chances.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Box 2 - Text Left, Image Right */}
      <div className="w-full flex justify-center relative px-4">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[80%] bg-gray-50 border border-gray-200 shadow-md text-left min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row relative z-10"
        >
          {/* Text */}
          <div className="w-full md:w-[70%] flex items-center px-6 py-6">
            <ul className="list-disc list-inside text-black font-bold space-y-6 text-base">
              <li>We provide expert guidance after you calculate your score to help you understand pathways like Express Entry, PNP, and Work Permits.</li>
              <li>Our team ensures your profile aligns with the latest eligibility criteria for higher ITA chances.</li>
              <li>Get advice on improving weak profile areas like IELTS or ECA.</li>
              <li>Start with confidence, backed by experienced immigration professionals.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-[30%] h-48 md:h-auto">
            <img
              src="/canadaimg1.webp"
              alt="Immigration Experts"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
