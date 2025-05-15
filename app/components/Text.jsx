import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedCountriesWithBgImage = () => {
  const countries = [
    { name: "Canada" },
    { name: "USA" },
    { name: "UK" },
    { name: "Australia" },
    { name: "Germany" },
    { name: "New Zealand" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [countries.length]);

  return (
    <div className="relative text-center text-gray-200 max-w-xl mx-auto lg:max-w-none">
      {/* Country Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <p className="text-lg md:text-xl lg:text-2xl font-medium mt-4">
          Wanna go{" "}
          <AnimatePresence>
            <motion.span
              key={countries[currentIndex].name}
              className="font-bold text-primary cursor-pointer"
              initial={{ opacity: 0, rotateY: -90 }} // Start with a flip effect (off screen)
              animate={{ opacity: 1, rotateY: 0 }} // Flip to normal view
              exit={{ opacity: 0, rotateY: 90 }} // Flip out to the other side
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.2, // Slight delay for smooth transitions
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {countries[currentIndex].name}
            </motion.span>
          </AnimatePresence>
          ?
        </p>

        {/* Description Text */}
        <motion.p
          className="mt-4 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          At VJC Overseas, we turn your international dreams into reality with trusted expertise.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AnimatedCountriesWithBgImage;
