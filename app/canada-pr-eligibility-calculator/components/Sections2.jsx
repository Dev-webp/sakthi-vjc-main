// section2.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <section className="w-full h-96 py-16 bg-white flex flex-col items-center text-center">
      {/* Centered Heading */}
      <div className="mb-12 max-w-3xl">
      <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}      // Duration of the animation
  className="mb-12 max-w-3xl"
>
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug">
        Take the first step - check your Canada PR eligibility and plan confidently.
          
        </h2>
        <p>
        If your score is close to the current cut-off, our team can guide you on ways to improve your profile and maximize your chances of success
        </p>
        </motion.div>
      </div>

      {/* Right-Aligned Box */}
      <div className="w-full flex justify-end bg-white relative">
  {/* Gray Box */}
  <motion.div
   initial={{ x: -100, opacity: 0 }}
   whileInView={{ x: 0, opacity: 1 }}
   transition={{ duration: 0.8 }}
   viewport={{ once: true }}       // Duration of the animation
  className="w-full md:w-[70%] bg-gradient-to-br from-orange-600  border border-gray-200 shadow-md text-left min-h-[300px] md:min-h-[500px] flex items-center px-6 relative z-10"
>
  <ul className="list-disc list-inside ml-40 text-black font-bold space-y-8  text-base">
    <li>Our intuitive calculator is simple to use and delivers results in just a few clicks—perfect for busy professionals and first-time applicants.</li>
    <li>The tool uses the Comprehensive Ranking System (CRS)—the same system used by Canada’s Express Entry and Provincial Nominee Programs (PNPs)—to give you an accurate score.</li>
    <li>Your score is calculated based on critical criteria like age, education, work experience, IELTS language proficiency, and adaptability factors—just like the real application.</li>
    <li>Instantly understand where you stand and what steps you can take to boost your score, improve your chances, and confidently move forward with your Canadian immigration goals</li>
  </ul>
</motion.div>


  {/* Overlapping Image */}
  <img
  src="/canadacalimg.png"
  alt="Decorative"
  className="hidden md:block absolute left-28 bottom-20 w-[33%] rounded-lg h-auto z-20"
/>

</div>


    
    </section>
  );
};

export default Section2;
