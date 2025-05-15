"use client";
import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EligibilityRequirements = () => {
  const roadmap = [
    { title: "Passport, which was issued within the last 10 years of the issue date and does not contain less than two blank visa pages. " },
    { title: "Application form, declaration " },
    { title: "Signed according to Section 54 Residence Act, including any supplementary contact/legal representation. " },
    { title: "2 biometric passport photos. " },
    { title: "Papers with proof of sufficient financial means for living in Germany . " },
    { title: "Proof of accommodation in Germany " },
    { title: "Proof of vocational/academic training. degree, diploma, etc., as well as work experience. " },
    { title: "Recognition of ANABIN" },
    { title: "Work experience relevant to qualifications " },
    { title: "A motivational letter stating the intentions on jobs, intent to learn the German language, job applications, and reasons for staying in Germany " },
    { title: "Proof of personal status in India (birth certificate, Aadhar card) " },
    { title: "Curriculum Vitae ,Declaration of retirement in case of applicant above 45 years " },
    { title: "Health insurance cover for their period of stay in Germany." },
  ];

  return (
    <>
      <div className=" mt-24 h-auto lg:h-fitbg bg-white">
        <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-2 text-dark">
          Canada Permanent Residency visa <span className="text-saffron">Checklist</span>
        </h2>

        {/* First Section */}
        <motion.div
          className="p-8 bg-gray-50/50 rounded-lg shadow-xl max-w-[73rem] mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="lg:w-1/2 w-full ml-0 md:ml-14 lg:ml-14"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ul className="space-y-3">
              {roadmap.slice(0, Math.ceil(roadmap.length / 2)).map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="text-saffron">
                    <FaCheckCircle className="text-saffron text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-justify text-dark">{item.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full mt-2 lg:mt-0 ml-0 md:ml-20 lg:ml-20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/canadapr4.png"
              alt="Germany Opportunity Card"
              width={416}
              height={592}
              className="object-cover w-[20rem] h-[20rem] md:w-[26rem] md:h-[37rem] lg:w-[26rem] lg:h-[25rem] ml-14 md:ml-0 lg:ml-0 tablet:ml-36 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-[73rem] mx-auto flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 mt-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="lg:w-1/2 w-full mt-2 lg:mt-0 ml-0 md:ml-14 lg:ml-14"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ul className="space-y-3">
              {roadmap.slice(Math.ceil(roadmap.length / 2)).map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="text-saffron">
                    <FaCheckCircle className="text-saffron text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-justify text-dark">{item.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full mt-2 lg:mt-0 ml-0 md:ml-20 lg:ml-20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/canadapr3.png"
              alt="Germany Opportunity Card"
              width={416}
              height={592}
              className="object-cover w-[20rem] h-[20rem] md:w-[26rem] md:h-[37rem] lg:w-[26rem] lg:h-[25rem] ml-14 md:ml-0 lg:ml-0 tablet:ml-36 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default EligibilityRequirements;
