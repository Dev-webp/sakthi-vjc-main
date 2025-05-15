import React from 'react';

const ContactCTA = () => {
  return (
    <div
      className="w-full bg-gray-900 py-12 text-white text-center h-[350px]"
      style={{
        backgroundImage: 'url(/planeimg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily:'Times new Roman',
        marginBottom:'20px'
      }}
    >
      <h2 className="text-3xl font-bold mb-4 sm:text-2xl md:text-3xl">
      Leading Visa & Immigration Consultancy for All Countries visas
      
      </h2>
      <p className="text-xl mb-6">
      Get your visa from most trusted Visa & Immigration consultant. Dedicated and experienced team member working hard to reach your dream destination.
      </p>
      <button
        className="font-semibold px-8 py-3 transition duration-300 bg- text-white border-2 border-white 
          sm:mt-4 md:mt-11 lg:mt-11"
      >
        BOOK YOUR CONSULTATION
      </button>
    </div>
  );
};

export default ContactCTA;
