import React, { useState } from 'react';
import Image from 'next/image';

const MigrateToYourDreamCountry = () => {
  // State to track hover effect on the images
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array of country images, names, and links
  const countries = [
    { name: "Australia", img: "/australiaimg.jpg" },
    { name: "Canada", img: "/canadaimg.jpg" },
    { name: "USA", img: "/germanyimg.jpg" },
    { name: "UK", img: "/hkimg.jpg" },
    { name: "Germany", img: "/nzimg.webp" },
    { name: "France", img: "/usaimg.webp" },
  ];

  return (
    <div className="text-center py-12 bg-white" style={{ fontFamily: 'Times New Roman' }}>
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12">Migrate to Your Dream Country</h2>
      <div className="flex justify-center items-center mb-12 -m-8">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>


      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6 lg:px-12 justify-center">
        {/* Images with Hover Effect */}
        {countries.map(({ name, img }, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)} // Hover effect
            onMouseLeave={() => setHoveredIndex(null)}
          >
             <Image
              src={img}
              alt={name}
              width={400} // Adjust based on your layout
              height={256} // Adjust based on your layout
              className={`w-full h-64 object-cover transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : 'scale-100'} animate-pulse`}
            />
            {/* Name at the center, always visible */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold opacity-100 transition-opacity duration-300">
              {name}
            </div>
          </div>
        ))}
      </div>

      {/* Get in Touch Section */}
      <div className="mt-12 flex justify-start">
  <button className="bg-white text-orange-700 text-3xl py-2 px-6 rounded-full flex items-center ml-7">
    Get in Touch
    <span className="ml-2 text-3xl">→</span>
  </button>
</div>

    </div>
  );
};

export default MigrateToYourDreamCountry;
