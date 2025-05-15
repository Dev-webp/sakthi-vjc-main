'use client';

import React from 'react';
import Image from 'next/image';

const awards = [
  { image: '/award2022.png', name: "India's Best Overseas Education Consultancy Of The Year" },
  { image: '/award2023.png', name: 'Global Icon Award Winner' },
  { image: '/award2024.png', name: "India's Most Trusted Immigration And Overseas Education Consultancy Of The Year" },
];

export default function AwardCarouselSliding() {
  return (
    <div className="w-full py-12 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/awardbgimg.png')" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Our Legacy of Recognition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <Image
                src={award.image}
                alt={`Award ${index + 1}`}
                width={220}
                height={220}
                className="object-contain max-h-[200px]"
              />
              <p className="mt-4 text-center text-sm font-bold text-gray-800">
                {award.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
