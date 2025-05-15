'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section4 = () => {
  return (
    <section className="w-full bg-white py-12 relative">
      {/* Box 1: Image + Text Side by Side */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[300px] md:min-h-[400px] bg-gradient-to-r from-white to-orange-600 rounded-xl shadow-md overflow-hidden mb-[-80px] px-4">
      {/* Animated Left Image */}
       <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                viewport={{ once: true }}
                className="w-full md:w-[50%] px-8 mt-5 text-left"
              >
        <img
          src="/calgirlimg.png"
          alt="Left Visual"
          className="w-[65%] h-full object-cover"
        />
      </motion.div>

      {/* Animated Right Text */}
      <motion.div 
  initial={{ y: 100, opacity: 0 }} // start lower (bottom)
  whileInView={{ y: 0, opacity: 1 }} // animate to normal position
  transition={{ duration: 2.5 }}
  viewport={{ once: true }}
  className="w-full md:w-[50%] px-8 mt-5 text-left"
>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 mr-20">
        Why Use Our Calculator?
        </h3>
        <ul className='font-semibold list-disc'>
            <li>Instant Results: Get your CRS score in under a minute.</li>
            <li> Up-to-Date Criteria: Based on the latest Canadian immigration rules for 2025.</li>
            <li>Completely Free: No hidden charges or commitments.</li>
            <li>
            Expert Help: If your score is close to the cut-off, get a free consultation with our experts.</li>
           

        </ul>
      </motion.div>
    </div>

      {/* Box 2: Full-Width Background Image with Text + Button */}
      <div className="relative w-full h-[350px] md:h-[400px] z-0">
        <img
          src="/canadacalimg1.webp" // Replace with your background image
          alt="Explore More"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4" style={{fontFamily:'cursive'}}>Ready to Explore More Immigration Options?</h2>
          <p className="text-xl md:text-xl text-white font-semibold mb-4">Discover tailored immigration pathways for countries like Germany, Australia, UK, USA, and more. </p>
          <button className="bg-gradient-to-l from-white to-blue-500 hover:bg-orange-500 text-black font-semibold px-6 py-3 rounded-full text-lg transition mt-8">
            Explore More Countires
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
