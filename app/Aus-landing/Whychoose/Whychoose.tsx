"use client";
import React from "react";
import { FaHandsHelping, FaGlobeAmericas, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseVJC = () => {
 const [ref, inView] = useInView({
  threshold: 0.5,
  triggerOnce: false, // 👈 allow multiple triggers
});


  const cards = [
    {
      icon: (
        <FaHandsHelping className="text-orange-500 text-4xl mx-auto mb-4" />
      ),
      title: "Expert Guidance",
      text: "Receive end-to-end support from experienced immigration consultants specialized in Australia PR processes.",
    },
    {
      icon: (
        <FaGlobeAmericas className="text-orange-500 text-4xl mx-auto mb-4" />
      ),
      title: "Global Recognition",
      text: "Trusted by thousands of clients globally, VJC offers unmatched service quality and transparency.",
    },
    {
      icon: <FaChartLine className="text-orange-500 text-4xl mx-auto mb-4" />,
      title: "High Success Rate",
      text: "We maintain a strong track record of successful PR visa applications for individuals and families.",
    },
  ];

  return (
    <section
  className="w-full py-28 px-4 bg-orange-100 relative bg-[url('/assets/auspr/whychoosebg.png')] bg-cover bg-center bg-no-repeat bg-fixed"
  ref={ref}
>
  <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Optional overlay */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 max-w-6xl mx-auto text-center"
  >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-4">
          Why Choose <span className="text-orange-500">VJC</span> for Australia
          PR Visa?
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12">
          Discover the benefits of choosing VJC Overseas to guide your journey
          to Canadian Permanent Residency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 hover:bg-orange-200"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // 👈 re-triggers on every scroll
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseVJC;
