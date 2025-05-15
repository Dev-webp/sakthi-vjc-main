"use client";

import { motion } from "framer-motion";

const containerVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const desVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Text = () => {
    return (
        <motion.div
          variants={containerVariants(0.4)}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8 sm:space-y-10 lg:items-start text-left max-w-2xl md:max-w-3xl mx-auto mb-0 lg:mb-0 relative z-10 font-serif"
        >
          <motion.h1
            variants={titleVariants}
            className="font-semibold uppercase leading-tight text-teal-950 text-4xl sm:text-5xl lg:text-[3.50rem] mt-20"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-100 to-orange-700">
              Migrate to Germany with Opportunity Card
            </span>
          </motion.h1>
          <motion.p
            variants={desVariants}
            className="flex text-gray-300 tracking-tight text-left md:font-medium max-w-xl lg:max-w-lg" style={{fontWeight:'bolder'}}
          >
            Discover endless opportunities with our expert immigration services.
            Whether you&apos;re looking to study or work abroad, we help make your
            dreams a reality.
          </motion.p>
        </motion.div>
      );
      
};

export default Text;
