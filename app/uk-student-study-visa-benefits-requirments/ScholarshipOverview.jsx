'use client';

import Link from 'next/link';
import { FileText, Clock, Star, Users, GraduationCap, HandCoins, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FileText className="text-orange-500" />,
    text: 'Research scholarships via university portals, UCAS, and British Council.',
  },
  {
    icon: <Star className="text-orange-500" />,
    text: 'Check eligibility: academic, language, and financial requirements.',
  },
  {
    icon: <Users className="text-orange-500" />,
    text: 'Prepare documents: SOP, LORs, transcripts, IELTS, financial proof.',
  },
  {
    icon: <Clock className="text-orange-500" />,
    text: 'Apply before deadlines through official portals and track your application.',
  },
];

const tips = [
  'Write a compelling SOP with clarity and passion.',
  'Secure strong references from professors or mentors.',
  'Start early – ideally 6–8 months before your course starts.',
];

const scholarships = [
  {
    icon: <GraduationCap className="text-orange-500 w-8 h-8" />,
    title: 'Merit-Based Scholarships',
    description: `Awarded to students with strong academics, leadership, or extracurriculars. Includes Chevening, GREAT, Rhodes, and university-specific awards.`,
  },
  {
    icon: <HandCoins className="text-orange-500 w-8 h-8" />,
    title: 'Need-Based Scholarships',
    description: `Designed for students who show financial need. Includes Charles Wallace Trust, university bursaries, and government-funded aid.`,
  },
  {
    icon: <Globe className="text-orange-500 w-8 h-8" />,
    title: 'Country-Specific Scholarships',
    description: `For Indian or South Asian students. Includes Commonwealth, Inlaks, and India Excellence Scholarships.`,
  },
];

export default function ScholarshipSteps() {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Types of Scholarships Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6 animate-slideUp">
            Study in UK Scholarships for Indian Students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Make your dream of studying in the UK affordable with scholarships tailored to Indian students.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl p-6 rounded-2xl hover:shadow-blue-100 transition-shadow duration-300 animate-fadeUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Application Steps Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Side */}
          <div className="flex flex-col justify-between pl-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6 text-left">
                How to Apply for UK Scholarships
              </h2>

              <div className="space-y-5 text-sm md:text-base">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 rounded-full">{step.icon}</div>
                    <p className="text-gray-700">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                  Tips for a Successful Application
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  {tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex items-center justify-center">
            <img
              src="/studyinuk/process.png"
              alt="UK Scholarships"
              className="w-64 md:w-86 h-auto object-contain rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}
