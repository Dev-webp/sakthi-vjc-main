import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaLanguage, FaUser, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const Requirements = () => {
  const roadmap = [
    {
      title: "Education & Qualifications (Up to 25 Points)",
      icon: <FaGraduationCap className="text-saffron text-3xl" />,
      points: [
        "Doctoral level: 25 points",
        "Master’s or professional degree: 23 points",
        "Two or more post-secondary credentials: 22 points",
        "One-year post-secondary credential: 15-21 points (based on level)"
      ]
    },
    {
      title: "Language Skills (Up to 28 Points)",
      icon: <FaLanguage className="text-saffron text-3xl" />,
      points: [
        "Maximum of 24 points for English or French proficiency (based on CLB scores)",
        "4 additional points if you're proficient in both English and French"
      ]
    },
    {
      title: "Age (Up to 12 Points)",
      icon: <FaUser className="text-saffron text-3xl" />,
      points: [
        "18-35 years: 12 points",
        "Deductions apply after 35; no points after age 47"
      ]
    },
    {
      title: "Work Experience (Up to 15 Points)",
      icon: <FaMapMarkerAlt className="text-saffron text-3xl" />,
      points: [
        "1 year: 9 points",
        "2-3 years: 11 points",
        "4-5 years: 13 points",
        "6 or more years: 15 points"
      ]
    },
    {
      title: "Adaptability & Spouse Factors (Up to 10 Points)",
      icon: <FaUsers className="text-saffron text-3xl" />,
      points: [
        "Spouse's language skills: up to 5 points",
        "Canadian education/experience: up to 5 points",
        "Arranged employment or family in Canada: up to 10 points"
      ]
    }
  ];

  return (
    <>
      <div className='h-[95rem] lg:h-fit'>
        <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-1 text-dark">
          Canada Permanent Residency <span className='text-saffron'>Requirements</span>
        </h2>
        <p className='text-center font-medium text-[1rem]'>To qualify under Canada’s Express Entry – FSWP, you need a minimum of 67 points out of 100.</p>
        
        <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
          
          {/* Left Side Image */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 mt-5">
            <Image 
              src="/canadapr2.jpeg" 
              alt="Canada PR Requirements" 
              width={320}
              height={280}
              className="object-cover w-[100%] h-[31rem] rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>

          {/* Requirements Content */}
          <div className="lg:w-1/2 w-full">
            <ul className="space-y-6">
              {roadmap.map((item, index) => (
                <li key={index} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="text-saffron">{item.icon}</div>
                    <h3 className="text-lg font-medium text-dark">{item.title}</h3>
                  </div>
                  <ul className="pl-12 space-y-0 list-disc text-sm text-gray-600">
                    {item.points?.map((point, subIndex) => (
                      <li key={subIndex}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Requirements;
