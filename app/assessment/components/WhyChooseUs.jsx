import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons
import Image from 'next/image';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Competent and Professional',
      description:
        'Our team has years of expertise and a track record of success with all visa procedures.',
      image: '/cpimg.jpg', // Replace with your actual image path
    },
    {
      title: 'High Rate of Success',
      description:
        'Continental Immigration has assisted thousands of candidates in filing their visa applications successfully.',
      image: '/cpimg.jpg', // Replace with your actual image path
    },
    {
      title: 'Dedicated Assistance',
      description:
        'You will be allocated a Continental Immigration counsellor to assist you during the process.',
      image: '/cpimg.jpg', // Replace with your actual image path
    },
    {
      title: 'More Rapid Documentation',
      description:
        'Our centralized document repository securely maintains all your documents in one location, expediting the visa application process.',
      image: '/cpimg.jpg', // Replace with your actual image path
    },
  ];

  return (
    <div className="w-full py-16 bg-white text-center -mt-12" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Why We're the Right Choice</h2>
      <div className="flex justify-center items-center mb-12 -m-8">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group border border-orange-400 p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to- flex flex-col justify-between"
          >
            <div className="flex justify-center mb-6">
            <Image
                src={reason.image}
                alt={reason.title}
                width={96}  // Adjust width
                height={96} // Adjust height
                className="object-cover rounded-full border-4 border-blue-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{reason.title}</h3>
            <p className="text-gray-600 mb-6">{reason.description}</p>
            <a
              href="#"
              className="text-orange-500 flex items-center justify-start font-medium mt-auto"
            >
              Know More <FaArrowRight className="ml-2 text-orange-500" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
