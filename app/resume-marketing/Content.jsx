"use client";

import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLinkedin, FaFileAlt, FaRedo } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <Head>
        <title>VJC Overseas | Resume Marketing Services</title>
        <meta
          name="description"
          content="Boost your international job prospects with VJC Overseas' expert resume marketing services tailored for countries like the USA, UK, Canada, Australia, and more."
        />
      </Head>

      {/* Main Container */}
      <div className="w-full bg-gradient-to-b from-blue-400 to-white min-h-screen sm:h-screen relative  flex items-center justify-center overflow-y-auto sm:overflow-hidden">
        
        {/* Small Screen Layout */}
        <div className="flex flex-col items-center gap-4 p-6 sm:hidden">
          {/* Top Two Boxes */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li><FaBriefcase className="inline mr-2 text-orange-600" /> ATS-compliant formatting</li>
              <li><FaFileAlt className="inline mr-2 text-orange-600" /> Keyword-rich content</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li><FaRedo className="inline mr-2 text-orange-600" /> Industry-specific templates</li>
              <li><FaLinkedin className="inline mr-2 text-orange-600" /> International HR best practices</li>
            </ul>
          </motion.div>

          {/* Center Circle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <img
              src="/resume-marketing-bg.webp"
              alt="Resume Marketing Centerpiece"
              className="w-48 h-48 object-cover rounded-full border-4 border-orange-600 shadow-xl"
            />
          </motion.div>

          {/* Bottom Two Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li><FaFileAlt className="inline mr-2 text-orange-600" /> Profile highlights & summaries</li>
              <li><FaLinkedin className="inline mr-2 text-orange-600" /> LinkedIn profile optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li><FaBriefcase className="inline mr-2 text-orange-600" /> Professional cover letters</li>
              <li><FaRedo className="inline mr-2 text-orange-600" /> Unlimited revisions</li>
            </ul>
          </motion.div>

          {/* Bottom Text */}
          <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-center w-full max-w-md rounded text-sm font-[Times_New_Roman]">
            <p>
              Whether you're targeting jobs in <strong>USA, UK, Canada, Australia, Germany, or UAE</strong>, our resume marketing ensures you’re seen by the right recruiters.
              <span className="text-orange-600"> VJC Overseas </span> is your trusted global career accelerator.
            </p>
          </div>
        </div>

        {/* Large Screen Layout */}
        <div className="hidden sm:grid absolute inset-0 grid-cols-3 grid-rows-3 gap-8 p-8 z-0">
          {/* Top Text */}
          <motion.div
            className="col-span-3 row-start-1 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-center w-full sm:max-w-3xl rounded shadow-lg">
              <p className="text-base font-[Times_New_Roman]">
                <strong className="text-orange-600">VJC Overseas</strong> crafts resumes that align with global hiring standards and trends. A powerful resume unlocks interviews and builds confidence.
              </p>
            </div>
          </motion.div>

          {/* Left Text */}
          <motion.div
            className="row-span-1 col-start-1 row-start-2 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-64 rounded shadow-xl">
              <ul className="list-disc ml-4 text-base font-[Times_New_Roman] space-y-2">
                <li><FaBriefcase className="inline mr-2 text-orange-600" /> ATS-compliant formatting</li>
                <li><FaFileAlt className="inline mr-2 text-orange-600" /> Keyword-rich content</li>
                <li><FaRedo className="inline mr-2 text-orange-600" /> Industry-specific templates</li>
                <li><FaLinkedin className="inline mr-2 text-orange-600" /> International HR best practices</li>
              </ul>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="col-start-2 row-start-2 z-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/resume-marketing-bg.webp"
              alt="Resume Marketing Centerpiece"
              className="w-80 h-80 object-cover rounded-full border-4 border-orange-600 shadow-xl"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="row-span-1 col-start-3 row-start-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 2 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-64 rounded shadow-xl">
              <ul className="list-disc ml-4 text-base font-[Times_New_Roman] space-y-2">
                <li><FaFileAlt className="inline mr-2 text-orange-600" /> Profile highlights & summaries</li>
                <li><FaLinkedin className="inline mr-2 text-orange-600" /> LinkedIn profile optimization</li>
                <li><FaBriefcase className="inline mr-2 text-orange-600" /> Professional cover letters</li>
                <li><FaRedo className="inline mr-2 text-orange-600" /> Unlimited revisions</li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            className="col-span-3 row-start-3 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2.5 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-center w-full sm:max-w-3xl rounded font-[Times_New_Roman] text-base">
              <p>
                Whether you're targeting jobs in <strong>USA, UK, Canada, Australia, Germany, or UAE</strong>, our resume marketing ensures you’re seen by the right recruiters.
                <span className="text-orange-600"> VJC Overseas </span> is your trusted global career accelerator.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Content;
