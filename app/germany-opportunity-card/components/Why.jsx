import React from 'react';
import Image from 'next/image';
import { FaRocket, FaHome, FaDollarSign, FaClipboardCheck, FaHandshake } from 'react-icons/fa';

const Why = () => {
  const roadmap = [
    {
      title: "Fast Entry into Germany",
      icon: <FaRocket className="text-saffron text-3xl" />,
      description: "Germany has a fast and uncomplicated system for those who wish to work, study, or set up business. Germany Opportunity Card will help you get there quick."
    },
    {
      title: "Chance of Permanent Residence",
      icon: <FaHome className="text-saffron text-3xl" />,
      description: "If you have the right kind of skills and experience, Germany gives you a clear path to stay permanently, thus giving long-term security and growth."
    },
    {
      title: "Good Income",
      icon: <FaDollarSign className="text-saffron text-3xl" />,
      description: "Germany offers competitive salaries across different fields, helping you enjoy a high standard of living and good earning potential."
    },
    {
      title: "Guaranteed Work Permit",
      icon: <FaClipboardCheck className="text-saffron text-3xl" />,
      description: "Germany Opportunity Card (GOC) gives a guarantee for a permitted work, making sure that you can work legally without any restrictions and have job security."
    },
    {
      title: "Possibility for Full-Time Work",
      icon: <FaHandshake className="text-saffron text-3xl" />,
      description: "Germany offers plenty of full-time job opportunities in different sectors. So you can secure a stable and good career while developing your professional skills."
    },
  ];

  return (
    <>
    <div className='h-[80rem] lg:h-fit mb-0 md:mb-0 lg:mb-0 tablet:mb-20'>
      <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-6 text-dark">
      Why To Choose <span className='text-saffron'>Germany For Your Future?</span>
      </h2>
      <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-8">
        
        {/* Right Side Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 ml-0 md:ml-20 lg:ml-20">
  <Image 
    src="/germany opportunity card processing time.png" 
    alt="UK Study Visa" 
    width={416} // Adjust based on actual image resolution
    height={592} // Adjust based on aspect ratio
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
    </>
  );
};

export default Why;
