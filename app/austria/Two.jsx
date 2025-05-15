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
        style={{ backgroundImage: `url('/austriabgimg.webp')` , fontFamily:'times new roman'}}
      >
        <div className=" flex flex-col items-center justify-center text-center mt-16">
  <motion.div 
    initial={{ y: -100, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration: 1 }}
    className="relative"
  >
    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-700 to-black text-transparent bg-clip-text leading-tight">
      Work Abroad -<span> Austria</span>
      
    </h1>

    <p className="text-sm sm:text-base font-bold text-black max-w-xl mt-6">
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
      Austria Jobseeker Visa - Your Gateway to Opportunities in Austria with <span className="text-orange-500">VJC Overseas</span>
    </h1>
    <p className="text-lxl leading-relaxed mb-6 mt-16">
      Are you dreaming of working in Austria, one of Europe's most dynamic and thriving job markets? With its robust economy, high quality of life, and a thriving work culture, Austria offers exceptional opportunities for skilled professionals. If you’re looking to take the next step in your career abroad, the Austria Jobseeker Visa is your ideal path. At VJC Overseas, we specialize in making your dream of working in Austria a reality.
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">Why Choose the Austria Jobseeker Visa?</h2>
    <p className="text-1xl leading-relaxed mb-6">
      The Austria Jobseeker Visa allows highly skilled professionals to come to Austria and search for employment. This visa offers a fantastic opportunity for qualified professionals to explore job opportunities in Austria without the need for a confirmed job offer beforehand. Once you secure a job in Austria, you can easily transition to a work permit and start your career in one of the most prestigious job markets in Europe.
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">What Sets VJC Overseas Apart?</h2>
    <p className="text-1xl leading-relaxed mb-6">
      1. <b>Expert Guidance:</b> Our consultants are highly trained and up-to-date on all the latest immigration rules and visa requirements. <br/>
      2. <b>Customized Solutions:</b> We offer personalized services to ensure a smooth and successful application process. <br/>
      3. <b>Proven Track Record:</b> Years of experience helping professionals secure Austria Jobseeker Visas. <br/>
      4. <b>End-to-End Support:</b> Assistance with documents, applications, interviews, and settlement in Austria. <br/>
      5. <b>Best Austria Jobseeker Consultants in India:</b> Serving Hyderabad, Bengaluru, and beyond.<br/>
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">The Austria Jobseeker Visa Process</h2>
    <p className="text-1xl leading-relaxed mb-6">
      1. <b>Eligibility Assessment:</b> We evaluate your profile to ensure you meet the visa requirements. <br/>
      2. <b>Document Preparation:</b> Assistance with preparing and submitting all necessary documents. <br/>
      3. <b>Visa Application Submission:</b> Guidance on filing the visa application with the Austrian embassy. <br/>
      4. <b>Post-Visa Services:</b> Support with relocation, housing, and settling in Austria. <br/>
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">Locations We Serve</h2>
    <p className="text-1xl leading-relaxed mb-6">
      <b>Best Austria Jobseeker Consultants in Hyderabad:</b> Extensive experience with clients across various industries. <br/>
      <b>Best Austria Jobseeker Consultants in Bengaluru:</b> Specialized in helping tech professionals expand their careers abroad. <br/>
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-400">Ready to Take the Leap?</h2>
    <p className="text-1xl leading-relaxed mb-6">
      The Austria Jobseeker Visa is your first step toward an exciting international career. Let VJC Overseas guide you through the entire process to ensure success. Contact us today to begin your journey toward a rewarding career in Austria!
    </p>
    <p className="text-1xl leading-relaxed mb-6">
    Contact us today to schedule a consultation and take the first step toward a brighter future in Austria! Your dream career is just a visa away with VJC Overseas.
We are here to assist you every step of the way. Let us help you unlock the doors to exciting opportunities in Austria!


    </p>
   
  </div>
</div>
</div>
      
    </>
  );
};

export default Migrate;
