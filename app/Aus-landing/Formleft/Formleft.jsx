"use client";
import React from "react";
import { motion } from "framer-motion";

const FormLeft = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col text-left px-4 py-8 md:p-10 space-y-8 bg-white/90 border-l-4 border-orange-500 rounded-md shadow-md"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 leading-snug">
        Work in Australia with <br /> <span className="text-sky-600">Australia PR Visa</span>
      </h2>

      <p className="text-gray-700 text-base leading-relaxed">
        Looking to take your career global? With a <span className="font-medium text-orange-600">Permanent Residency (PR)</span> Visa, your professional journey begins in one of the world’s most stable, welcoming, and opportunity-rich countries.
      </p>

      <div className="space-y-6">
        {[
          {
            title: "Unlock a World of Job Opportunities",
            desc: "Work in any industry, for any employer, anywhere in Australia—without needing a separate work permit.",
          },
          {
            title: "High-Paying Jobs & Skill Demand",
            desc: "From IT and engineering to healthcare and finance, Australian employers are actively seeking skilled global talent.",
          },
          {
            title: "No Job Offer? No Problem!",
            desc: "You can apply for PR through Express Entry without a job offer and still land top opportunities after arrival.",
          },
          {
            title: "Equal Access to Professional Growth",
            desc: "PR status gives you access to upskilling programs, government training, and even business support if you want to start your own venture.",
          },
          {
            title: "Pathway to Citizenship",
            desc: "Every working day counts toward your eligibility for Australian citizenship—invest in your future with every paycheck.",
          },
          {
            title: "Work-Life Balance Like Nowhere Else",
            desc: "Enjoy flexible work options, generous paid leaves, and a healthy work-life culture in one of the happiest countries in the world.",
          },
        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-sky-600 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FormLeft;
