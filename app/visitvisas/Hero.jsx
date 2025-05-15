'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Explore Europe with a <span className="text-blue-600">Visit Visa</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the beauty of Schengen countries. Let us simplify your visa process so you can focus on planning your adventure.
          </p>
          <ul className="mt-6 space-y-3 text-left text-gray-700 font-medium">
            <li>✅ Schengen Visa Documentation Assistance</li>
            <li>✅ Tourist Itinerary & Hotel Booking Support</li>
            <li>✅ Embassy Appointment Guidance</li>
            <li>✅ Dedicated Case Manager</li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Apply Now
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
              Free Consultation
            </button>
          </div>
        </motion.div>

        {/* Instead of an image, let’s add an animated feature block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-blue-100"
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>📌 98% Success Rate</li>
            <li>📌 Personalized Travel Planning</li>
            <li>📌 Multilingual Support</li>
            <li>📌 Fast Turnaround Time</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
