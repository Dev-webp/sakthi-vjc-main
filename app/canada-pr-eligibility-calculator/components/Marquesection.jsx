'use client';

import { motion } from 'framer-motion';

const MarqueeSection = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-600 to-black py-6 mt-10">
      <motion.div
        className="flex gap-12 text-xl md:text-2xl font-semibold text-white whitespace-nowrap"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {/* Repeating Items with Plane Icon */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-6">
            Visa Process
            <span className="mx-2">✈️</span>

            Travel
            <span className="mx-2">✈️</span>

            Documents
            <span className="mx-2">✈️</span>

            Consultation
            <span className="mx-2">✈️</span>

            Approval
            <span className="mx-2">✈️</span>

          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
