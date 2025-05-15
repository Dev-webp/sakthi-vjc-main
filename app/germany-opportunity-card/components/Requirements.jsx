import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaLanguage, FaUser, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const Requirements = () => {
  const roadmap = [
    {
      title: "Education & Work Experience (Up to 7 Points)",
      icon: <FaGraduationCap className="text-saffron text-3xl" />,
      points: [
        "4 points for diplomas and qualifications Germany recognizes. ",
        "3 points for working in your field for 5+ years (in the last 7 years). ",
        "2 points for working in your field for 2+ years (in the last 5 years). ",
        "1 extra point for training in jobs Germany needs (like health, IT, construction, etc.). "
      ]
    },
    {
      title: "Language Skills (Up to 4 Points)",
      icon: <FaLanguage className="text-saffron text-3xl" />,
      points:[
        "3 points for knowing German at B2 or higher.",
        "2 points for knowing German at B1. 1 point for knowing German at A1-A2.",
        "1 extra point for knowing English at C1 or higher."
      ]
    },
    {
      title: "Age (Up to 2 Points)",
      icon: <FaUser className="text-saffron text-3xl" />,
      points: [
        "2 points if you're under 35.",
        "1 point if you're between 35 and 40."
      ]
    },
    {
      title: "Ties to Germany (Up to 1 Point)",
      icon: <FaMapMarkerAlt className="text-saffron text-3xl" />,
      points: [
        "1 point for living in Germany for at least 6 months in the last 5 years."
      ]
    },
    {
      title: "Spouse (Up to 1 Point)",
      icon: <FaUsers className="text-saffron text-3xl" />,
      points: [
        "1 point if your spouse can also get the Opportunity Card."
      ]
    }
  ];


  return (
    <>
     <div className='h-[95rem] lg:h-fit'>
      <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-1 text-dark">
      Germany Opportunity Card <span className='text-saffron'>Requirements</span>
      </h2>
      <p className='text-center font-medium text-[1rem]'>To get the Opportunity Card, you need to score 6 points or more.</p>
      <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left Side Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 mt-5">
          <Image 
            src="/germany opportunity card requirements.png" 
            alt="UK Study Visa" 
            width={320}  // Adjust width
    height={280} // Adjust heigh
            className="object-cover w-[100%] h-[31rem] rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>
{/*  */}
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
