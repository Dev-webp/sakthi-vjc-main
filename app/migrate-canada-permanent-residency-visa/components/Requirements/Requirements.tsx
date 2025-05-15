'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CanadaPRRequirements() {
  return (
    <div className="bg-[#fef6f2] min-h-screen px-4 py-10 md:px-20">
      <h1 className="text-3xl lg:text-4xl text-sky-700 font-extrabold text-center mb-2">
       Eligibility Requirements for  <span className="text-orange-500">Canada PR Visa Process </span>
      </h1>
      <p className='font-bold text-center mt-8'>Are You Eligible for Canada PR? Let’s Find Out! </p>
      <p className="text-center text-lg mb-10 mt-4">
       Canada is calling! But first—do you meet the eligibility to apply for a <b>Canada Permanent Residence (PR)</b> Visa? Here’s a quick breakdown of what you need: 
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image section with motion */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/assets/canadapr/require.png"
            alt="Canada PR"
            width={500}
            height={500}
            className="mx-auto rounded-2xl h-full shadow-2xl"
          />
        </motion.div>

        {/* Requirements section with motion */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {[
             {
              title: 'Age Matters - Ideal age: 18 - 35',
              details: ['Points decrease gradually after 35 (but you can still qualify with other strengths!) '],
              icon: '🎯'
            },
            {
              title: 'Education - Minimum : High School Diploma',
              details: [  
                'Higher education = more CRS (Comprehensive Ranking System) points Get bonus points for Canadian study credentials too! '
              ],
              icon: '🎓'
            },
            {
              title: 'Language Proficiency - Must take IELTS or CELPIP',
              details: [
                'Required: CLB 7 or higher (in most programs)',
                'Strong English or French = big boost in your score! '
              ],
              icon: '🗣️'
            },
            {
              title: 'Work Experience',
              details: [
                'Minimum 1 year of full-time skilled work (last 10 years) Overseas experience is valid—Canadian experience is even better! .'
              ],
              icon: '💼'
            },
           
            {
              title: 'CRS Score – Your Golden Ticket',
              details: ['Points if you have a valid job offer from a Canadian employer.'],
              icon: '📄'
            },
            {
              title: 'Medical & Police Clearance ',
              details: [
                'You must be in good health and have a clean record to qualify for PR.'
              ],
              icon: '🩺'
            }

          ].map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-4 hover:bg-orange-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="font-bold text-lg mb-1 flex items-center">
                <span className="text-2xl mr-2">{section.icon}</span>
                {section.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {section.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
             
            </motion.div>
          ))}
           <p className=''>🔍 Not sure if you qualify? We can assess your profile FREE! </p>
        </motion.div>
      </div>
    </div>
  );
}
