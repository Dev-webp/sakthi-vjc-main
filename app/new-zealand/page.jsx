"use client";

import { useState } from "react";
import Nav from "./Nav";
import Two from "./Two";
import Footer from "./Footer";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div className="mt-10 z-20 relative">
        <Nav />
      </div>

      {/* Main Section */}
      <div className="mt-16">
        <Two />
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ContactPage;
