'use client';

import {
  FaPhoneAlt,
  FaComments,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaThumbsUp,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Form from './Form';

export default function GetInTouch() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Hero */}
      <div
        className="relative w-full flex flex-col items-center justify-center text-white text-center min-h-[500px] px-6"
        style={{
          backgroundImage: `url('/Customer-service-agent.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg md:text-xl">
            We'd love to hear from you. Whether you have a question, feedback, or need assistance — reach out anytime.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-20 z-20 relative pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md border text-center px-3 py-5 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl mb-3 shake">
              <FaPhoneAlt />
            </div>
            <h3 className="text-base font-bold mb-1">Talk to Expert</h3>
            <p className="text-gray-600 mb-2 text-sm font-medium">for Free Eligibility Check !</p>
            <a href="tel:+18578295060" className="text-blue-600 font-bold hover:underline text-sm mb-1">+91 9160449000</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md border text-center px-3 py-5 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 mb-3">
              <FaComments />
            </div>
            <h3 className="text-base font-bold mb-1">Chat with US</h3>
            <p className="text-gray-600 mb-3 text-sm font-medium">For Free Assessment Report</p>
            <button
  onClick={() => window.location.href = "/assessment"}
  className="bg-orange-500 hover:bg-blue-400 text-white font-bold px-5 py-2 rounded text-sm transition-colors duration-200"
>
  Contact Support
</button>

          </motion.div>
        </div>
      </div>

      {/* Shake animation */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }
        .shake {
          animation: shake 0.9s infinite;
        }
      `}</style>
    </div>
  );
}
