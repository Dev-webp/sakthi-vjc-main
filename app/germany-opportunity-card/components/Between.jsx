import React from 'react';

const Between = () => {
  // Use window.innerWidth to check for screen width dynamically
  const isLargeDevice = typeof window !== "undefined" && window.innerWidth >= 1024; // Large screen breakpoint (1024px)

  const contactLink = isLargeDevice 
    ? "mailto:info@vjcoverseas.com" 
    : "tel:+919160449000"; // Change the number accordingly

  return (
    <div className="h-72 md:h-52 lg:h-52 bg-gradient-to-b from-orange-500 to-saffron flex items-center justify-center">
      {/* Left Section - Content Centered */}
      <div className="text-white max-w-[60%] md:max-w-[40%] lg:max-w-[40%] tablet:max-w-[48%] text-center">
        <h3 className="text-2xl font-semibold mb-2 uppercase">Unlock Your Future with Germany&apos;s Opportunity Card</h3>
        <p className="text-lg mb-4">Pursue career growth and work opportunities in Germany. Start your journey today!</p>
        <a href={contactLink}>
          <button className="bg-white text-saffron py-2 px-6 rounded-full hover:bg-black hover:text-saffron transition-all">
            Contact Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Between;

