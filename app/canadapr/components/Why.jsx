import React from 'react';
import Image from 'next/image';
import { FaRocket, FaHome, FaDollarSign, FaClipboardCheck, FaHandshake } from 'react-icons/fa';

const Why = () => {
  const roadmap = [
    {
      title: "Quick Pathway to PR",
      icon: <FaRocket className="text-saffron text-3xl" />,
      description: "Canada's Express Entry and Provincial Nominee Programs provide a streamlined process for skilled professionals to obtain permanent residency efficiently."
    },
    {
      title: "Opportunity for Citizenship",
      icon: <FaHome className="text-saffron text-3xl" />,
      description: "With PR status, you can work toward Canadian citizenship after fulfilling the residency requirements, securing your future and your family's."
    },
    {
      title: "Attractive Salaries & Quality of Life",
      icon: <FaDollarSign className="text-saffron text-3xl" />,
      description: "Canada offers competitive wages across sectors along with world-class healthcare, education, and a safe environment for you and your family."
    },
    {
      title: "Full Work & Travel Rights",
      icon: <FaClipboardCheck className="text-saffron text-3xl" />,
      description: "As a PR holder, you have the legal right to live, work, and travel freely anywhere in Canada without job or employer restrictions."
    },
    {
      title: "Diverse Job Opportunities",
      icon: <FaHandshake className="text-saffron text-3xl" />,
      description: "Canada's growing economy and skilled labor demand create excellent job prospects across IT, healthcare, engineering, trades, and more."
    },
  ];

  return (
    <div className='h-fit mb-20'>
      <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-6 text-dark">
        Why Choose <span className='text-saffron'>Canada Permanent Residency Visa?</span>
      </h2>
      <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-8">
        
        {/* Right Side Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 ml-0 md:ml-20 lg:ml-20">
          <Image 
            src="/canadapr1.png" 
            alt="Canada Permanent Residency Visa" 
            width={416}
            height={592}
            className="object-cover w-[20rem] h-[20rem] md:w-[26rem] md:h-[37rem] lg:w-[26rem] lg:h-[37rem] ml-14 md:ml-0 lg:ml-0 tablet:ml-24 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Requirements Content (on Left) */}
        <div className="lg:w-1/2 w-full">
          <ul className="space-y-6">
            {roadmap.map((item, index) => (
              <li key={index} className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="text-saffron">{item.icon}</div>
                  <h3 className="text-lg font-medium text-dark">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 text-justify">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Why;
