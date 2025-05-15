'use client';
import React from 'react';
import { FaHandsHelping, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseVJC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="w-full py-16 px-4 bg-orange-100" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-6xl mx-auto text-center "
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
          Why Choose <span className="text-orange-500">VJC</span> for Canada PR Visa?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover the benefits of choosing VJC Overseas to guide your journey to Canadian Permanent Residency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {[{
            icon: <FaHandsHelping className="text-orange-500 text-4xl mx-auto mb-4" />,
            title: 'Expert Guidance',
            text: 'Receive end-to-end support from experienced immigration consultants specialized in Canada PR processes.'
          }, {
            icon: <FaGlobeAmericas className="text-orange-500 text-4xl mx-auto mb-4" />,
            title: 'Global Recognition',
            text: 'Trusted by thousands of clients globally, VJC offers unmatched service quality and transparency.'
          }, {
            icon: <FaChartLine className="text-orange-500 text-4xl mx-auto mb-4" />,
            title: 'High Success Rate',
            text: 'We maintain a strong track record of successful PR visa applications for individuals and families.'
          }].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 hover:bg-orange-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseVJC;
