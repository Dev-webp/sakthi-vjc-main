"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const ContentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 }); // triggerOnce set to false

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1, // Delays each child animation
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, delay: 0.2 }, // Delayed start
    },
  };

  return (
    <motion.section
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="py-0"
  >
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row-reverse gap-16 py-14 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50"
      style={{
        backgroundImage: 'url(/comp-1.webp)',  // Replace with your background image
      }}
    >
      {/* Image Section */}
      <motion.div
        variants={imageVariants} // Use the image-specific variants
        className="flex md:flex-1"
      >
        <Image
          src="/vjc-2.webp"
          alt="Immigration support services"
          width={1300}
          height={900}
          className="w-full md:h-full object-cover rounded-lg"
        />
      </motion.div>
  
      {/* Content Section */}
      <motion.div
        variants={contentVariants} // Use the content-specific variants
        className="md:w-1/2 space-y-6 text-gray-700"
      >
        <motion.h1
          variants={itemVariants} // Fade-in effect for each item
          className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]"
        >
          About US
        </motion.h1>
        <motion.p variants={itemVariants} className="text-justify">
        Welcome to VJC Overseas, a trusted name in the field of overseas education and immigration services. Founded in 2009, we began as a local firm with a simple yet powerful goal: to provide the highest quality services to students aspiring to study abroad and professionals seeking to build their careers overseas.
        </motion.p>
        <motion.p variants={itemVariants} className="text-justify">
        In 2015, we formally transitioned to a private limited company, allowing us to expand our services and strengthen our commitment to delivering personalised, reliable solutions. Since our founding, we have remained focused on continuously improving ourselves to meet the evolving needs of our clients.
        </motion.p>
        {/* <motion.p variants={itemVariants}>
        We achieved a 5-star rating due to our comprehensive, reliable, and expert advice. We've helped thousands of people around the world to achieve their dreams of living and working in countries like the United States, Canada, Australia, etc..
        </motion.p> */}
        <motion.p variants={itemVariants} className="text-justify">
        Each day, we strive to enhance the experience for every student and professional who walks through our doors, ensuring that their journey toward studying or settling abroad is as smooth and successful as possible.
        </motion.p>
        {/* <motion.ul variants={contentVariants} className="space-y-4">
          {[
            "Comprehensive Work Visa Solutions",
            "Family Sponsorship and Reunification Services",
            "Assistance with Citizenship and Residency Applications",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center gap-x-4"
            >
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-orange-500 text-white">
                ✓
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul> */}
        <motion.div variants={itemVariants} className="flex">
          <Link
            href="#"
            className="px-6 h-11 flex items-center bg-orange-500 rounded-lg text-white"
          >
            Learn How We Make It Happen
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
  
  );
};

export default ContentSection;
