'use client'; // Add this to enable animations in app router (if using it)

import { motion } from 'framer-motion';


export default function CanadaPR() {
  return (
    <div
      className="relative bg-white h-full bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/canadapr/flag.png)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(254,246,242,0.1)] z-0" />


      <div className="container mx-auto text-white relative px-4 md:px-12 lg:px-32 z-10 py-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-orange-600 font-bold text-center mb-8"
        >
          How to Apply for Canada PR Visa
        </motion.h1>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left Side: Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:basis-[77%] w-full"
          >
            {[
              {
                step: 'Determine Eligibility',
                description: 'Before applying for a Canada PR visa, ensure you meet the eligibility criteria based on factors like age, education, work experience, language skills, etc.'
              },
              {
                step: 'Choose Your Program',
                description: 'Depending on your profile, you can apply under programs such as Express Entry, (PNP), etc.'
              },
              {
                step: 'Gather Documents',
                description: 'Collect all the necessary documents like educational certificates, language test results, work experience proof, etc.'
              },
              {
                step: 'Submit Your Application',
                description: 'Submit your application online via the official website, along with all documents and fees.'
              },
              {
                step: 'Wait for Processing',
                description: 'After submitting, wait for the visa processing time. You might provide more documents or attend an interview.'
              },
              {
                step: 'Receive Your PR',
                description: 'Once approved, you will receive your PR. Congratulations, you are now a Canadian permanent resident!'
              }
            ].map((item, index) => (
              <div key={index} className="mb-5">
                <h3 className="text-xl text-sky-700 font-semibold mb-2">{`Step ${index + 1}: ${item.step}`}</h3>
                <p className="text-sm md:text-base text-gray-800">{item.description}</p>
              </div>
            ))}
          </motion.div>

         
        </div>
      </div>
    </div>
  );
}
