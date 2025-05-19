'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function AustraliaPR() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const headingControls = useAnimation();
  const stepsControls = useAnimation();

  useEffect(() => {
    if (inView) {
      headingControls.start("visible");
      stepsControls.start("visible");
    } else {
      headingControls.start("hidden");
      stepsControls.start("hidden");
    }
  }, [inView, headingControls, stepsControls]);

  const steps = [
    {
      step: 'Determine Eligibility',
      description:
        'Ensure you meet the eligibility criteria based on age, education, work experience, language skills, etc.',
    },
    {
      step: 'Choose Your Program',
      description:
        'Select the right visa stream based on your profile — Skilled Independent, State Nomination, etc.',
    },
    {
      step: 'Gather Documents',
      description:
        'Collect educational certificates, language proficiency results, proof of work experience, and more.',
    },
    {
      step: 'Submit Your Application',
      description:
        'Apply online through the official immigration portal with required documents and fees.',
    },
    {
      step: 'Wait for Processing',
      description:
        'Processing may take a few weeks to months. Additional documents or interviews might be required.',
    },
    {
      step: 'Receive Your PR',
      description:
        'Once approved, get your PR grant letter and start planning your new life in Australia!',
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/auspr/howto.png)" }}
    >
      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6 md:px-16 lg:px-28 py-20"
      >
        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12"
        >
          How to Apply for Australia PR Visa
        </motion.h1>

        {/* Steps Section - Centered on small screens, left-aligned on large */}
        <motion.div
          initial="hidden"
          animate={stepsControls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
          }}
          className="flex justify-center lg:justify-start"
        >
          <div className="space-y-10 w-full max-w-4xl lg:ml-0">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-orange-500 relative lg:max-w-[800px]"
              >
                <div className="absolute -left-6 top-1 text-xl font-bold text-orange-700 bg-orange-100 w-10 h-10 flex items-center justify-center rounded-full shadow">
                  {index + 1}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-sky-700 mb-2">
                  {item.step}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
