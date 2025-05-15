"use client";
import React from "react";
import { motion } from "framer-motion";

const FormLeft = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col text-left px-4 py-8 md:p-8 space-y-6 bg-white/70"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
        Work in Canada with Canada PR Visa
      </h2>

      <p className="text-gray-700 text-base">
        Looking to take your career global? With a Canada Permanent Residency (PR) Visa, your professional journey begins in one of the world’s most stable, welcoming, and opportunity-rich countries.
      </p>

      <h3 className="text-2xl font-semibold text-sky-600">
        Unlock a World of Job Opportunities
      </h3>
      <p className="text-gray-700 text-base">
        Work in any industry, for any employer, anywhere in Canada—without needing a separate work permit.
      </p>

      <h3 className="text-2xl font-semibold text-sky-600">
        High-Paying Jobs & Skill Demand
      </h3>
      <p className="text-gray-700 text-base">
        From IT and engineering to healthcare and finance, Canadian employers are actively seeking skilled global talent.
      </p>

     

      <h3 className="text-2xl font-semibold text-sky-600">
        No Job Offer? No Problem!
      </h3>
      <p className="text-gray-700 text-base">
        You can apply for PR through Express Entry without a job offer and still land top opportunities after arrival.
      </p>

      <h3 className="text-2xl font-semibold text-sky-600">
        Equal Access to Professional Growth
      </h3>
      <p className="text-gray-700 text-base">
        PR status gives you access to upskilling programs, government training, and even business support if you want to start your own venture.
      </p>

      <h3 className="text-2xl font-semibold text-sky-600">
        Pathway to Citizenship
      </h3>
      <p className="text-gray-700 text-base">
        Every working day counts toward your eligibility for Canadian citizenship—invest in your future with every paycheck.
      </p>

      <h3 className="text-2xl font-semibold text-sky-600">
        Work-Life Balance Like Nowhere Else
      </h3>
      <p className="text-gray-700 text-base">
        Enjoy flexible work options, generous paid leaves, and a healthy work-life culture in one of the happiest countries in the world.
      </p>
    </motion.div>
  );
};

export default FormLeft;
