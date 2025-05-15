'use client';

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      id: '01',
      title: 'Profile Evaluation',
      description: 'We begin by thoroughly analyzing your education, work experience, and language proficiency to determine your eligibility under Canada’s PR programs.',
      image: '/assets/canadapr/process/process1.png',
    },
    {
      id: '02',
      title: 'Counseling and Planning',
      description: 'Based on your profile, we guide you on the most suitable PR stream such as Express Entry, PNP, or others. Our expert counselors help you plan your migration path strategically.',
      image: '/assets/canadapr/process/process2.png',
    },
    {
      id: '03',
      title: 'Documentation Support',
      description: 'We assist in gathering, organizing, and verifying all necessary documents, including educational credentials, work experience letters, and language test results.',
      image: '/assets/canadapr/process/process3.png',
    },
    {
      id: '04',
      title: 'Application Submission',
      description: 'Once your profile and documents are ready, we submit your application accurately through the appropriate Canada immigration portals such as Express Entry or PNP portals.',
      image: '/assets/canadapr/process/process4.png',
    },
    {
      id: '05',
      title: 'Follow-Up & Updates',
      description: 'We constantly track your application progress, respond to government queries, and keep you informed about every milestone and document request.',
      image: '/assets/canadapr/process/process5.png',
    },
    {
      id: '06',
      title: 'Visa Approval & Pre-departure',
      description: 'After your visa approval, we provide you with pre-departure guidance covering travel, accommodation, and integration tips to make your transition to Canada smooth and stress-free.',
      image: '/assets/canadapr/process/process6.png',
    }
  ];

  return (
   <div className="relative w-full px-8 md:px-16 tracking-wider lg:px-32 py-14 mt-10 bg-gradient-to-b bg-orange-50">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl lg:text-5xl text-left font-bold text-orange-600">
          Canada PR Visa  Application Process
        </h2>
        
      </motion.div>

      <div className="space-y-14">
        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-left"
            >
              <p className="text-sm font-bold text-gray-700">{step.id}</p>
              <h3 className="text-xl lg:text-3xl font-bold text-orange-600 mt-2">{step.title}</h3>
              <p className="text-gray-600 mt-4">{step.description}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
