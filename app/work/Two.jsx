"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Form from "./Form"; // Adjust path if necessary
import Footer from "./Footer";

const Migrate = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col bg-black bg-cover bg-center bg-fixed relative m-0 p-0"
        style={{ backgroundImage: `url('/workpageimg.webp')` , fontFamily:'times new roman'}}
      >
        <div className=" flex flex-col items-center justify-center text-center mt-16">
  <motion.div 
    initial={{ y: -100, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration: 1 }}
    className="relative"
  >
    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-700 to-gray-300 text-transparent bg-clip-text leading-tight">
      Work Abroad -<span> Work</span>
      
    </h1>

    <p className="text-sm sm:text-base font-bold text-white max-w-xl mt-6">
    "Working abroad is not just a career move, it's a life-changing adventure, 🌎
Work abroad not just to earn, but to learn, grow, and experience the world from a new perspective,Your dream job may not be where you were born—sometimes, you have to chase it across borders." ✈️
    </p>
  </motion.div>
</div>

              
        {/* Buttons - At the Top on Mobile, Left on Large Screens */}
   
  
    <div className="flex flex-col items-center space-y-6 mt-20 md:absolute md:left-10 md:mt-96 md:grid md:grid-cols-2 md:gap-x-3">
      <div className="flex flex-col mt-0 md:-mt-32 space-y-6 md:space-y-20">

        {/* Germany */}
        <Link href="/migrate/germany">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black/10 hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to Germany
          </motion.button>
        </Link>

        {/* Canada */}
        <Link href="/migrate/canada">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black/10 hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to Canada
          </motion.button>
        </Link>

        {/* Australia */}
        <Link href="/migrate/australia">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to Australia
          </motion.button>
        </Link>

        {/* UAE */}
        <Link href="/migrate/uae">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to UAE
          </motion.button>
        </Link>
      </div>

      <div className="flex flex-col space-y-8 mt-0 md:space-y-20 md:mt-28">

        {/* USA */}
        <Link href="/migrate/united-states">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to USA
          </motion.button>
        </Link>

        {/* Hong Kong */}
        <Link href="/migrate/hong-kong">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black/10 hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to Hong Kong
          </motion.button>
        </Link>

        {/* New Zealand */}
        <Link href="/migrate/new-zealand">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to New Zealand
          </motion.button>
        </Link>

        {/* UK */}
        <Link href="/migrate/united-kingdom">
          <motion.button
            className="w-60 py-3 text-black font-bold rounded-lg border border-orange-500 bg-gradient-to-br from-slate-50 to-black hover:bg-gray-600 hover:text-white transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Migrate to UK
          </motion.button>
        </Link>

      </div>
    </div>



        {/* Form - Below Buttons on Mobile, Right on Large Screens */}
        <div className="w-full md:w-[450px] min-h-[500px] bg-gray-800 shadow-2xl p-4 mt-20 mx-auto md:absolute md:right-16 md:mt-80">
          <Form />
        </div>

        {/* Content Section - Centered Below Everything */}
        <div className="w-full flex justify-center mt-24 md:mt-[800px] px-8 mb-20">
          <div className="max-w-5xl bg-black/25 border border-orange-500 text-white px-8 md:px-16 lg:px-32 py-12 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">
            Work Abroad with <span className="text-orange-500">VJC Overseas:</span> Unlock Global Career Opportunities
            </h1>
            <p className="text-lxl leading-relaxed mb-6 mt-16">
            At VJC Overseas, we believe that the world is full of exciting career opportunities waiting for talented individuals like you. Whether you're looking to advance your career, experience new cultures, or seek better work-life balance, we specialize in connecting skilled professionals with top-tier employers worldwide.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400"> Why Choose VJC Overseas?</h2>
            <p className="text-1xl leading-relaxed mb-6">
            1. Tailored Career Pathways
We understand that each individual’s career journey is unique. Our expert consultants work closely with you to understand your skills, experience, and aspirations, helping you find the perfect job abroad that matches your goals. Whether you're a healthcare professional, engineer, IT specialist, or tradesperson, we have the right opportunities waiting for you.







           
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">2. Global Network of Employers</h2>
            <p className="text-1xl leading-relaxed mb-6">
            Our extensive network of trusted international employers spans across various industries and countries. From Canada and the Middle East to Australia and Europe, we collaborate with leading companies looking to hire qualified professionals from diverse fields. With VJC Overseas, you’ll have access to some of the best job offers available worldwide.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">3. Hassle-Free Immigration and Relocation Support</h2>
            <p className="text-1xl leading-relaxed mb-6">
            We know that moving abroad can be overwhelming, which is why we provide end-to-end support, from visa and work permit assistance to relocation advice. Our dedicated team ensures you navigate the entire process smoothly, so you can focus on what truly matters – your career growth and new experiences.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">4. Long-Term Success</h2>
            <p className="text-1xl leading-relaxed mb-6">
            Our commitment to your success doesn't end with securing a job. We are here for the long haul, offering guidance and support throughout your overseas employment, helping you adapt to your new workplace and environment, and ensuring you thrive in your international career.
            Start your journey towards an exciting new career abroad today with VJC Overseas. Explore endless opportunities, enhance your professional skills, and embrace new horizons with us.
            </p>
            
          </div>
          
        </div>
       
 
        
       
      </div>
      
    </>
  );
};

export default Migrate;
