"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import Form from "@/app/components/Form";
import { FaSpinner } from "react-icons/fa";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Function to preload the background image and set the state when it's loaded
  useEffect(() => {
    const img = new Image();
    img.src = "/form-bg.jpg";
    img.onload = () => setIsImageLoaded(true); // Set to true once the image is loaded
  }, []); // Empty dependency array ensures this runs only once after the first render

  return (
    <div className="contact-page">
      {/* Background Image Section with Framer Motion */}
      <motion.div
        className={`relative bg-cover bg-center min-h-screen`}
        style={{ backgroundImage: "url('/form-bg.jpg')" }}
        initial={{ opacity: 0 }} // Set initial opacity to 0
        animate={{ opacity: isImageLoaded ? 1 : 0 }} // Animate opacity change based on image load
        transition={{ duration: 1.5 }} // Smooth transition for opacity
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative max-w-screen-lg mx-auto px-4 py-2">
          <div className="mt-[4.70rem] max-w-[40rem] mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
            {/* Logo */}
            
            <Form />
          </div>
        </div>
      </motion.div>

      {/* This div is used for initial loading before the image is fully loaded */}
      {!isImageLoaded && (
         <div className="absolute inset-0 bg-white flex items-center justify-center">
         <FaSpinner className="animate-spin text-blue-600" size={40} /> {/* Using React Icon for spinner */}
       </div>
      )}
    </div>
  );
};

export default ContactPage;
