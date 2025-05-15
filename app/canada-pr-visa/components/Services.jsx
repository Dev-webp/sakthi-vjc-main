import React from 'react';
import { FaFastForward, FaFileAlt, FaSuitcase, FaBriefcase, FaHome, FaUserTie, FaClipboardList, FaPenFancy, FaLanguage } from 'react-icons/fa';

export const services = [
  { id: "0", title: "Priority Processing for Quick Track Application", icon: <FaFastForward className="text-saffron text-3xl" /> },
  { id: "1", title: "Resume Preparation by German Standards", icon: <FaClipboardList className="text-saffron text-3xl" /> },
  { id: "2", title: "Job Posting and Applications", icon: <FaBriefcase className="text-saffron text-3xl" /> },
  { id: "3", title: "Post Landing Services for Easy Settlement", icon: <FaHome className="text-saffron text-3xl" /> },
  { id: "4", title: "General Relocation Assistance", icon: <FaSuitcase className="text-saffron text-3xl" /> },
  { id: "5", title: "Case Officer of Special Expertise", icon: <FaUserTie className="text-saffron text-3xl" /> },
  { id: "6", title: "Comprehensive Documentation Support", icon: <FaFileAlt className="text-saffron text-3xl" /> },
  { id: "7", title: "Writing Motivational Letter", icon: <FaPenFancy className="text-saffron text-3xl" /> },
  { id: "8", title: "Language Training for Better Opportunities", icon: <FaLanguage className="text-saffron text-3xl" /> }
];


const ServicesComponent = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center w-full h-[115rem] md:h-[37rem] lg:h-[48rem] tablet:h-[70rem]  relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/germany opportunity card apply.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-white opacity-75 z-10"></div>
      
      {/* Content Area */}
      <div className="relative z-20 py-12">
        <div className="text-center">
          <h2 className="text-[2.50rem] font-semibold text-dark mb-4 uppercase text-saffron">
            Services Provided By <span className='text-black'><br />VJC Overseas Immigration Consultancy</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            With streamlined processes and exceptional support, our services offer the ideal solution for students.
          </p>
        </div>
        
        {/* Service Boxes */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
