import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedHeader = () => {
  const contentBeforeGermany = "Sign up & Get "; // Text before "Germany"
  const germanyWord = "Germany"; // The word to animate
  const contentAfterGermany = " Assessment"; // Text after "Germany"

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Update the index to reveal one letter at a time and control the cursor blinking
  useEffect(() => {
    const typingTimer = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => {
        if (prevIndex < germanyWord.length) {
          return prevIndex + 1;
        }
        clearInterval(typingTimer); // Stop typing after full word is displayed
        setAnimationComplete(true); // Mark the animation as complete
        return prevIndex;
      });
    }, 150); // Adjust typing speed here (in ms)

    const cursorTimer = setInterval(() => {
      if (animationComplete) {
        setShowCursor(false); // Hide cursor once typing is done
      } else {
        setShowCursor((prev) => !prev); // Toggle cursor visibility
      }
    }, 500); // Cursor blink speed

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [animationComplete]);

  // Restart animation after completion
  useEffect(() => {
    if (animationComplete) {
      const restartTimer = setTimeout(() => {
        setCurrentLetterIndex(0);
        setShowCursor(true);
        setAnimationComplete(false);
      }, 2000); // Wait for 2 seconds before restarting animation

      return () => clearTimeout(restartTimer);
    }
  }, [animationComplete]);

  return (
    <h2 className="text-2xl font-bold text-center uppercase text-gray-800 mt-0 lg:mt-1 relative">
      {contentBeforeGermany}

      {/* Animated word "Germany" */}
      <span className="inline-block">
        {germanyWord.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: index < currentLetterIndex ? 1 : 0 }}
            transition={{
              duration: 0.1,
              delay: index * 0.1, // Adjust the delay between each letter
            }}
          >
            <span className="inline-block bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
              {letter}
            </span>
          </motion.span>
        ))}
      </span>

      {/* Blinking cursor at the end of the word */}
      {showCursor && (
        <span
          className="inline-block text-gray-800 absolute"
          style={{
            bottom: 35,
            left: `calc(84% + 10px)`, // Position it right after the last letter of "Germany"
            fontSize: "2rem", // Adjust cursor size
            whiteSpace: "nowrap",
          }}
        >
          |
        </span>
      )}

      {contentAfterGermany}
    </h2>
  );
};

export default AnimatedHeader;
