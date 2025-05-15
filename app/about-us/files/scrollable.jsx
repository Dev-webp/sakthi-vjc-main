"use client";
import React, { useState, useRef, useEffect } from "react";

const EnhancedScrollableComponent = () => {
  const [canScrollParent, setCanScrollParent] = useState(false);
  const scrollableRef = useRef(null);

  // Track scrolling in the right section
  const handleRightScroll = () => {
    const element = scrollableRef.current;
    if (element) {
      const isAtBottom =
        element.scrollTop + element.clientHeight >= element.scrollHeight;
      setCanScrollParent(isAtBottom); // Allow parent scroll only when at the bottom
    }
  };

  // Prevent default scroll behavior on the left side
  const handleLeftScroll = (e) => {
    if (!canScrollParent) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const rightElement = scrollableRef.current;
    if (rightElement) {
      rightElement.addEventListener("scroll", handleRightScroll);
    }

    return () => {
      if (rightElement) {
        rightElement.removeEventListener("scroll", handleRightScroll);
      }
    };
  }, []);

  return (
    <div
      className={`flex h-screen bg-gray-50 ${
        canScrollParent ? "overflow-y-auto" : "overflow-hidden"
      }`}
    >
      {/* Left Section (Fixed) */}
      <aside
        className="w-1/3 bg-blue-700 text-white p-8 flex flex-col justify-center sticky top-0 h-screen"
        onWheel={handleLeftScroll} // Block parent scroll if the right section isn't fully scrolled
      >
        <h2 className="text-4xl font-extrabold mb-6">Welcome</h2>
        <p className="text-lg leading-relaxed">
          Discover more with our featured sections. Scroll through the content
          on the right to explore all the amazing features we offer.
        </p>
      </aside>

      {/* Right Section (Scrollable) */}
      <main
        ref={scrollableRef}
        className="w-2/3 overflow-y-auto p-8 h-screen"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-48 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-semibold"
            >
              Feature {index + 1}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EnhancedScrollableComponent;
