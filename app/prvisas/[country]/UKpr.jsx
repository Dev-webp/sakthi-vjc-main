"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";

const UKPR = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
         <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
         UK Permanent Residence Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
         </h1>
          {/* Image and Intro Text Side by Side */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  {/* Image */}
                  <div className="">
                    <Image
                      src="/UK-Permanent-Residence.jpg"
                      alt="uk permanent residence Guidance by VJC Overseas"
                      width={300}
                      height={700}
                     
                      priority
                    />
                  </div>
          
                  {/* Text */}
                  <div className="md:w-1/2 text-justify">
                    <p className="mb-4 ">
        The UK is one of the most sought-after destinations for individuals looking to build a life in a dynamic and diverse environment. With its strong economy, excellent healthcare system, and world-class education, it’s no surprise that many individuals aim for a UK Permanent Residence Visa (PR),    </p>
      </div>
      </div>
      <p className=" -mt-8">
      also known as <strong>Indefinite Leave to Remain (ILR)</strong>. At{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span>, we are dedicated to helping you navigate the complexities of UK immigration and guide you through the process of obtaining your permanent residence.
  
      </p>
      <h3 className="text-xl font-semibold mb-2 mt-4">What is the UK Permanent Residence Visa?</h3>
      <p>
        The UK Permanent Residence Visa allows non-British nationals to live and work in the UK indefinitely. After holding this status for a specified period, typically 5 years, applicants can apply for British citizenship. This visa is a major step for individuals looking to settle in the UK and enjoy all the rights and privileges that come with being a permanent resident.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Eligibility Criteria for UK Permanent Residence</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Residency Requirement:</strong> You must have legally lived in the UK for at least 5 years on a qualifying visa such as a Skilled Worker Visa, Spouse Visa, or Tier 2 Visa.</li>
        <li><strong>Good Character:</strong> You must not have any serious criminal convictions or immigration violations.</li>
        <li><strong>English Language Proficiency:</strong> You’ll need to prove your English language skills via approved tests or qualifications.</li>
        <li><strong>Life in the UK Test:</strong> A test assessing your knowledge of British culture, history, and society.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Living Expenses and Lifestyle in the UK</h3>
      <p>
        Living in the UK offers a modern lifestyle blended with rich cultural heritage. London is the most expensive city, with monthly living costs between £1,500–£2,500. More affordable cities like Manchester, Birmingham, or Glasgow have living expenses around £1,200–£1,800.
      </p>
      <p>
        The UK offers top-tier healthcare, educational institutions, public transportation, and recreational activities like museums, parks, shopping districts, and sporting events.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Processing Time and Visa Fees</h3>
      <p>
        The typical processing time ranges between <strong>6 to 12 months</strong> based on your visa type and profile. The application fee for ILR is approximately <strong>£2,404</strong>. Additional costs may apply for biometric registration and document verification.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Why Choose <span className="text-orange-600 font-semibold">VJC Overseas</span>?</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Expert Guidance:</strong> Our team provides personalized consultancy based on your background.</li>
        <li><strong>End-to-End Support:</strong> We assist from document preparation to application submission and interview prep.</li>
        <li><strong>Transparent Process:</strong> No hidden charges and complete transparency in every step.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Ready to Apply?</h3>
      <p>
        If you're ready to begin your journey to UK permanent residence, connect with{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span> today. Let us help you make your dream of settling in the UK a reality.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Contact Us</h3>
      <p>
        📞 <strong>+91-9160449000</strong><br />
        ✉️ <strong>info@vjcoverseas.com</strong>
      </p>

      <p className="text-sm text-gray-600 italic">
        *Information provided is subject to change as per UK immigration policy. Always refer to the official site or consult our team for the latest updates.
      </p>
   </div>
  );
};

export default UKPR;
