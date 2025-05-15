"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaCheckCircle } from 'react-icons/fa'; 

// Variants for the content
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Sequential animations for children
    },
  },
};

// Variants for individual content items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Variants for the image (delayed until content is fully visible)
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.1 }, // Delays after content fades in
  },
};

const ContentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // triggerOnce set to false

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-10"
    >
      <div
        className="max-w-[85rem] mx-auto px-5 sm:px-8 tablet:px-8 md:px-12 lg:px-10 flex flex-col md:flex-row gap-12 py-10 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50"
        style={{
          backgroundImage: 'url(/comp-22.webp)',  
        }}
      >
        {/* Image Section */}
        <motion.div variants={imageVariants} className="flex md:flex-1 justify-center">
          <Image
            src="/vjc-1.jpg"
            alt="Visa consultation services"
            width={1000}
            height={1000}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          className="md:w-1/2 space-y-6 text-gray-700"
        >
          <motion.h1
            variants={itemVariants}
            className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]"
          >
            At VJC Overseas,<br /> We Make Your<br /> Dreams a Reality
          </motion.h1>

          <motion.p variants={itemVariants} className="text-justify">
            With our wide spectrum of services, you may be wondering, &quot;What can VJC Overseas do for me?&quot; And the answer will be very simple: we are here to help you take the next step in your journey—whether you are here to study abroad, migrate to some other country, work overseas, or are investing in new opportunities.
          </motion.p>

          <motion.ul variants={contentVariants} className="space-y-4 text-left">
            {[
              "Study - right guidance and visa support for studying at the top universities of the world",
              "Migrate - secure path to Permanent Residency and settling down in your dream destination",
              "Work- Explore global job opportunities with professional work visa services",
              "Invest - Get expert assistance with investor visas to kick-start your international business journey",
              "Visit - Obtain tourist and visitor visas for hassle-free travelling",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-x-2"
              >
                <span className="text-2xl text-orange-600 mb-2">
                  <FaCheckCircle /> {/* Larger, more attractive check circle icon */}
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContentSection;


          {/* Optional button (Uncomment to use) */}
          {/* <motion.div variants={itemVariants} className="flex">
            <Link
              href="#"
              className="px-5 h-11 flex items-center bg-orange-600 rounded-lg text-white"
            >
              Get a Free Consultation
            </Link>
          </motion.div> */}
