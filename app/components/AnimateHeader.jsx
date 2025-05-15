import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const AnimatedHeader = () => {
  const contentBeforeCountry = 'Sign up & Get ';
  const countries = useMemo(() => ['Germany', 'Canada', 'Australia'], []);
  const contentAfterCountry = ' Assessment';

  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => {
        if (prevIndex < countries[currentCountryIndex].length) {
          return prevIndex + 1;
        }
        clearInterval(typingTimer);
        setAnimationComplete(true);
        return prevIndex;
      });
    }, 150);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [animationComplete, currentCountryIndex, countries]);

  useEffect(() => {
    if (animationComplete) {
      const restartTimer = setTimeout(() => {
        setCurrentLetterIndex(0);
        setShowCursor(true);
        setAnimationComplete(false);
        setCurrentCountryIndex((prevIndex) => (prevIndex + 1) % countries.length);
      }, 2000);

      return () => clearTimeout(restartTimer);
    }
  }, [animationComplete, countries.length]);

  return (
    <h2 className="text-2xl font-bold text-center uppercase text-gray-800 mt-0 lg:mt-1 relative">
      {contentBeforeCountry}
      <span className="inline-block">
        {countries[currentCountryIndex].split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: index < currentLetterIndex ? 1 : 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
          >
            <span className="inline-block bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
              {letter}
            </span>
          </motion.span>
        ))}
      </span>
      {showCursor && (
        <span
          className="inline-block text-gray-800 absolute"
          style={{
            bottom: 35,
            left: `calc(84% + 10px)`,
            fontSize: '2rem',
            whiteSpace: 'nowrap',
          }}
        >
          |
        </span>
      )}
      {contentAfterCountry}
    </h2>
  );
};

export default AnimatedHeader;
