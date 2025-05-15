"use client";

import React from "react";
import { motion } from "framer-motion";

const UKPR = () => {
  return (
    <motion.div
      className="text-gray-800 text-lg space-y-6 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold">
        UK Permanent Residence Visa – Your Pathway to Settling in the UK with{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span>
      </h2>

      <p>
        The UK is one of the most sought-after destinations for individuals looking to build a life in a dynamic and diverse environment. With its strong economy, excellent healthcare system, and world-class education, it’s no surprise that many individuals aim for a UK Permanent Residence Visa (PR), also known as <strong>Indefinite Leave to Remain (ILR)</strong>. At{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span>, we are dedicated to helping you navigate the complexities of UK immigration and guide you through the process of obtaining your permanent residence.
      </p>

      <h3 className="text-xl font-semibold">What is the UK Permanent Residence Visa?</h3>
      <p>
        The UK Permanent Residence Visa allows non-British nationals to live and work in the UK indefinitely. After holding this status for a specified period, typically 5 years, applicants can apply for British citizenship. This visa is a major step for individuals looking to settle in the UK and enjoy all the rights and privileges that come with being a permanent resident.
      </p>

      <h3 className="text-xl font-semibold">Eligibility Criteria for UK Permanent Residence</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Residency Requirement:</strong> You must have legally lived in the UK for at least 5 years on a qualifying visa such as a Skilled Worker Visa, Spouse Visa, or Tier 2 Visa.</li>
        <li><strong>Good Character:</strong> You must not have any serious criminal convictions or immigration violations.</li>
        <li><strong>English Language Proficiency:</strong> You’ll need to prove your English language skills via approved tests or qualifications.</li>
        <li><strong>Life in the UK Test:</strong> A test assessing your knowledge of British culture, history, and society.</li>
      </ul>

      <h3 className="text-xl font-semibold">Living Expenses and Lifestyle in the UK</h3>
      <p>
        Living in the UK offers a modern lifestyle blended with rich cultural heritage. London is the most expensive city, with monthly living costs between £1,500–£2,500. More affordable cities like Manchester, Birmingham, or Glasgow have living expenses around £1,200–£1,800.
      </p>
      <p>
        The UK offers top-tier healthcare, educational institutions, public transportation, and recreational activities like museums, parks, shopping districts, and sporting events.
      </p>

      <h3 className="text-xl font-semibold">Processing Time and Visa Fees</h3>
      <p>
        The typical processing time ranges between <strong>6 to 12 months</strong> based on your visa type and profile. The application fee for ILR is approximately <strong>£2,404</strong>. Additional costs may apply for biometric registration and document verification.
      </p>

      <h3 className="text-xl font-semibold">Why Choose <span className="text-orange-600 font-semibold">VJC Overseas</span>?</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Expert Guidance:</strong> Our team provides personalized consultancy based on your background.</li>
        <li><strong>End-to-End Support:</strong> We assist from document preparation to application submission and interview prep.</li>
        <li><strong>Transparent Process:</strong> No hidden charges and complete transparency in every step.</li>
      </ul>

      <h3 className="text-xl font-semibold">Ready to Apply?</h3>
      <p>
        If you're ready to begin your journey to UK permanent residence, connect with{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span> today. Let us help you make your dream of settling in the UK a reality.
      </p>

      <h3 className="text-xl font-semibold">Contact Us</h3>
      <p>
        📞 <strong>+91-9160449000</strong><br />
        ✉️ <strong>info@vjcoverseas.com</strong>
      </p>

      <p className="text-sm text-gray-600 italic">
        *Information provided is subject to change as per UK immigration policy. Always refer to the official site or consult our team for the latest updates.
      </p>
    </motion.div>
  );
};

export default UKPR;
