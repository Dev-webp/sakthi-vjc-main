"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import Two from "./Two";
import Content from "./Content";
import Form from "./Form";

import Footer from "./Footer";   

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-white">
        <div className="mt-10 z-20 relative">
          <Nav />
        </div>

        {/* Main Section */}
        <div className="mt-16 mb-16">
          <Two />
        </div>

        {/* Two-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 -mt-10 " >
          {/* Left Side - Scrollable Content (More Width) */}
          <div className="md:col-span-3 h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 ">
            <Content />
          </div>

          {/* Right Side - Form */}
          <div className="md:col-span-2">
            <Form />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
