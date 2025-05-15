"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPassport, FaClipboardList, FaRegPaperPlane, FaMoneyCheckAlt, FaCheckCircle, FaTruckMoving, FaPlayCircle } from "react-icons/fa";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";

const VisaProcessSteps = () => {
  const steps = [
    {
      title: "1. Counselling & Consultation",
      description: "Expert guidance tailored to your specific needs to ensure a smooth visa process.",
      image: "/s1.png",
      icon: <FaPassport className="text-4xl text-white" />
    },
    {
      title: "2. Eligibility Check",
      description: "Comprehensive evaluation of your qualifications and documentation.",
      image: "/s2.png",
      icon: <FaClipboardList className="text-4xl text-white" />
    },
    {
      title: "3. Start the Process",
      description: "Begin your journey with us by formally initiating your visa application process.",
      image: "/s3.png",
      icon: <FaPlayCircle className="text-4xl text-white" />
    },
    {
      title: "4. Documents Preparation",
      description: "Thorough assistance in preparing all necessary documents for your application.",
      image: "/s4.png",
      icon: <FaRegPaperPlane className="text-4xl text-white" />
    },
    {
      title: "5. Submission of Application",
      description: "Ensure your application is submitted accurately and on time.",
      image: "/s5.png",
      icon: <FaMoneyCheckAlt className="text-4xl text-white" />
    },
    {
      title: "6. Interview Preparation",
      description: "Mock interviews and tips to confidently handle visa interviews.",
      image: "/s6.png",
      icon: <FaCheckCircle className="text-4xl text-white" />
    },
    {
      title: "7. Visa Approval & Departure",
      description: "Step-by-step support until you successfully embark on your journey.",
      image: "/s7.png",
      icon: <FaTruckMoving className="text-4xl text-white" />
    }
  ];

  return (
    <section className="px-4 bg-cover bg-center overflow-x-hidden" style={{ backgroundImage: "url('/comp-1.webp')" }}>
      <div className="mx-auto text-center -space-y-14">
        <h1 className={`text-[2.75rem] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 md:text-4xl xl:text-5xl leading-tight text-center`}>
          Easy Visa Process<br/> 
          <span className="text-lg text-gray-600">Follow these steps for a smooth visa application process.</span>
        </h1>
        
        <div className="relative flex items-center justify-center">
          {/* Black Vertical Line */}
          <div className="w-[3px] bg-black min-h-[57rem] tablet:min-h-[10rem] lg:min-h-[80rem] absolute"></div>
          
          {/* Icons positioned above the vertical line */}
          <div className="flex flex-col items-center -space-y-32 lg:-space-y-40">
            {steps.map((step, index) => {
              const isLeftSide = index % 2 === 0; // Steps 1, 3, 5, 7 on the left

              return (
                <motion.div
                  key={index}
                  className={`flex justify-start items-center relative w-full px-8 ${isLeftSide ? '' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeftSide ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Content Section */}
                  <div className={`flex flex-col items-center ${isLeftSide ? 'mr-auto w-1/2' : 'ml-auto w-1/2'}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mt-16 md:mt-0 lg:mt-10">{step.title}</h3>
                    <p className="text-gray-600 max-w-60 mb-10">{step.description}</p>
                    
                    {/* Horizontal line below the description */}
                    <div className="w-full mt-0 lg:mt-0 mb-4 border-b-2 border-gray-400"></div>
                  </div>

                  {/* Icon Section */}
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex justify-center items-center border-4 border-gray-200 relative">
                    {step.icon}
                    
                    {/* Arrow icon */}
                    {isLeftSide ? (
                      <MdArrowRight className="text-gray-900 absolute top-1/2 transform h-10 w-10 -translate-y-1/2 text-lg left-10" />
                    ) : (
                      <MdArrowLeft className="text-gray-900 absolute top-1/2 transform h-10 w-10 -translate-y-1/2 text-lg right-10" />
                    )}
                  </div>

                  {/* Image Section */}
                  <div className={`w-1/2 ${isLeftSide ? '' : 'order-last'}`}>
  <Image
    src={step.image}
    alt={step.title}
    width={600} // Replace with the actual width of your images
    height={500} // Replace with the actual height of your images
    className="w-full h-auto lg:h-full rounded-lg mb-0 lg:mb-0 mt-20 md:mt-20 lg:mt-20"
  />
</div>


                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcessSteps;
