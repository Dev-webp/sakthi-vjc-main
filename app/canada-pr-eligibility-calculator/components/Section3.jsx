'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section3 = () => {
  return (
    <section className="w-full px-6 py-20 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16 max-w-7xl mx-auto">
        
        {/* Left: Text Section (60%) with Motion */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className="w-full md:w-[50%] px-8 mt-5 text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
          The Top 5 Benefits of Canadian PR card
          </h2>
      
          <ul className="list-decimal pl-6 text-gray-700 text-lg leading-relaxed space-y-4">
  <li>
    <strong className="text-blue-800">Live, Work & Study Freely:</strong> Enjoy the freedom to live, work, or study in any Canadian province or territory without restrictions.
  </li>
  <li>
    <strong className="text-blue-800">Healthcare & Social Benefits:</strong> Access Canada’s public healthcare system and essential social services, similar to citizens.
  </li>
  <li>
    <strong className="text-blue-800">Pathway to Citizenship:</strong> Become eligible for Canadian citizenship after fulfilling residency requirements.
  </li>
  <li>
    <strong className="text-blue-800">Sponsor Family Members:</strong> Bring your spouse, children, and eligible relatives to join you in Canada.
  </li>
  <li>
    <strong className="text-blue-800">Legal Rights & Mobility:</strong> Benefit from legal protection and move across provinces freely with your PR card.
  </li>
</ul>

      
          
        </motion.div>

        {/* Right: Image Section (40%) with Motion */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[50%] -mt-16"
        >
          <img 
            src="/canadagirlimg.png"
            alt="Immigration Support"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
