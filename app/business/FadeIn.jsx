"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Context for stagger effect
const FadeInStaggerContext = createContext(false);

// Optimized viewport settings
const viewport = { once: true, margin: "0px 0px -150px" };

// FadeIn component
const FadeIn = ({ children, duration = 0.4, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger component
export const FadeInStagger = ({ faster = false, children, ...props }) => (
  <FadeInStaggerContext.Provider value={true}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ staggerChildren: faster ? 0.1 : 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  </FadeInStaggerContext.Provider>
);

export default FadeIn;
