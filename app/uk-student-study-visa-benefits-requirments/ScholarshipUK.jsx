'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Form from './Form';
import { motion } from 'framer-motion';
import { FaUniversity, FaUserGraduate, FaGraduationCap, FaGlobe } from "react-icons/fa";

const iconContent = [
  {
    id: 0,
    icon: <FaUserGraduate className="text-3xl" />,
    label: 'Student Counselling',
    points: [
      'Expert guidance for course and university selection.',
      'Personalized counseling based on academic and career goals.',
      'Support through application, visa process, and beyond.'
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'Top Universities',
    points: [
      'Globally ranked institutions like Oxford, Cambridge, and Imperial College.',
      'Innovative curriculum with research opportunities.',
      'Recognition across industries worldwide.'
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-3xl" />,
    label: 'Scholarships',
    points: [
      'Wide range of scholarships for international students.',
      'Government and university-funded aid.',
      'Merit-based and need-based options available.'
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Global Exposure',
    points: [
      'Multicultural classrooms and communities.',
      'Networking with global leaders and thinkers.',
      'Access to international internships and exchanges.'
    ],
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function StudyInUK() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => (prev + 1) % iconContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-4 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-stretch">
        
        {/* Form First in Small Screens */}
        <motion.div
          className="block lg:hidden rounded-xl p-6 bg-gradient-to-b from-white to-orange-500 shadow-md"
          initial="hidden"
          animate="visible"
          custom={6}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold text-gray-900 ml-4 mb-4">
            Sign up & Get Free{" "}
            <span className="text-black font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent animate-pulse">
              UK
            </span>{" "}
            Assessment
          </h3>
          <Form />
        </motion.div>

        {/* Left Column - Content */}
        <div className="lg:w-2/3 flex flex-col space-y-6 h-full">
          <motion.h2
            className="text-3xl md:text-3xl font-bold text-gray-900"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Study in UK – Start Your Global Education Journey with <span className='text-orange-500'>VJC Overseas</span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-md leading-relaxed"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            The United Kingdom is a top choice for international students due to its world-renowned universities, globally accepted degrees, and multicultural environment. Whether you dream of studying at Oxford,
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 items-start"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <div className="md:w-1/4 w-full">
              <Image
                src="/studyinuk/ukstudy.png"
                width={400}
                height={300}
                alt="Study in UK"
                className="rounded-md object-cover w-full"
              />
            </div>
            <div className="md:w-3/4 w-full text-gray-700 text-md leading-relaxed">
              <p>
                Cambridge, or any modern university, the UK offers unmatched academic excellence and career opportunities.
                With over 400,000 international students each year, the UK remains a preferred destination for higher education.
                Institutions in the UK blend tradition and innovation, offering industry-relevant programs and global opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            {iconContent.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl shadow transition-all duration-300 text-center ${
                  selected === item.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {item.icon}
                <p className="text-sm mt-2">{item.label}</p>
              </button>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-50 p-4 rounded-md shadow-md text-gray-700"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
          >
            <ul className="list-disc list-inside space-y-2">
              {iconContent[selected].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Column - Form on Large Screens Only */}
        <motion.div
          className="hidden lg:block lg:w-1/2 rounded-xl p-6 bg-gradient-to-b from-white to-orange-500 shadow-md h-full"
          initial="hidden"
          animate="visible"
          custom={6}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold text-gray-900 ml-4 mb-4">
            Sign up & Get Free{" "}
            <span className="text-black font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent animate-pulse">
              UK
            </span>{" "}
            Assessment
          </h3>
          <Form />
        </motion.div>
      </div>
    </section>
  );
}
