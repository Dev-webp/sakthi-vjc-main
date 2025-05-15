import React, { useState } from 'react';

const Achievements = () => {
  const [zoomedInIndex, setZoomedInIndex] = useState(null);

  const handleCircleClick = (index) => {
    if (zoomedInIndex === index) {
      setZoomedInIndex(null);
    } else {
      setZoomedInIndex(index);
    }
  };

  const circleColors = [
    'bg-gray-400',  // Consultancy
    'bg-green-600', // Immigration
    'bg-red-600',   // Visa Assistance
    'bg-yellow-600',// Job Placement
    'bg-purple-600',// Guidance
    'bg-teal-600',  // Research
  ];

  return (
    <div className="text-center py-12 bg-white" style={{ fontFamily: 'Times New Roman' }}>
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8">How Can We Help You?</h2>

      {/* Orange Underline */}
      <div className="flex justify-center items-center mb-12">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>

      {/* Circle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-6 lg:px-16">
        {[
          { icon: "🎓", label: "Consultancy" },
          { icon: "🌍", label: "Immigration" },
          { icon: "📖", label: "Visa Assistance" },
          { icon: "💼", label: "Job Placement" },
          { icon: "💬", label: "Guidance" },
          { icon: "🔍", label: "Research" },
        ].map(({ icon, label }, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Main Circle with Hover & Zoom */}
            <div
              onClick={() => handleCircleClick(index)}
              className={`relative cursor-pointer transition-transform duration-300 ${
                zoomedInIndex === index ? "scale-110" : "scale-100"
              }`}
            >
              {/* Transparent Circle Background */}
              <div className="absolute w-28 h-28 bg-blue-900 opacity-20 rounded-full"></div>

              {/* Main Circle */}
              <div className={`${circleColors[index]} w-24 h-24 text-white flex items-center justify-center text-3xl rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
            </div>

            {/* Circle Text */}
            <p className="font-semibold text-lg">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
