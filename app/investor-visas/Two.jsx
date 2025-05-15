"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

const Migrate = () => {
  const scrollRef = useRef(null);
  const backgroundImage = "/plane.webp";

  const countries = [
    { name: "USA Investor Visa", path: "/investor-visas/usa-investor-visa", image: "/usainvest.png" },
    { name: "Canada Investor Visa", path: "/investor-visas/canada-investor-visa", image: "/canadainvestbg.png" },
    { name: "Germany Investor Visa", path: "/investor-visas/germany-investor-visa", image: "/canadainvestorbg.png" },
    { name: "Australia Investor Visa", path: "/investor-visas/australia-investor-visa", image: "/australiainvestbg.png" },
    { name: "UK Investor Visa", path: "/investor-visas/uk-investor-visa", image: "/ukinvestorvisa.png" },
    { name: "UAE Investor Visa", path: "/investor-visas/uae-investor-visa", image: "/uaeinvestorbg.png" },
    { name: "Portugal Investor Visa", path: "/investor-visas/portugal-investor-visa", image: "/potugalinvestorbg.png" },
    { name: "Austria Investor Visa", path: "/investor-visas/austria-investor-visa", image: "/austriainvestbg.png" },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-black bg-opacity-40 flex flex-col items-center text-white px-4 sm:px-6 md:px-10 pb-10 bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="relative inset-0  w-screen max-w-none xl:w-[100vw] 3xl:w-[100vw]  h-[600px] sm:h-[600px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
          {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-10 mt-32 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Investor Visas
        </h1>
 
        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-6">
          Explore global opportunities with our expert Investor Visa guidance.
          <br />
          Secure your future in leading countries through strategic investments.
        </p>
 
        <Link href="/assessment">
          <button
            onClick={() => setShowAssessment(true)}
            className="bg-gradient-to-r from-orange-500 to-white text-black font-semibold
                       px-2 py-2 sm:px-6 sm:py-3 rounded-full shadow-md
                       hover:from-orange-600 hover:to-white hover:text-white
                       transition duration-200  sm:w-auto text-sm sm:text-base"
          >
             Free Visa Assessment
          </button>
        </Link>
      </div>
    
      </div>

      {/* Scrollable Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[500px] z-20 w-full flex justify-center"
      >
        <div className="flex items-center justify-center w-full max-w-7xl space-x-2 px-2">
          <button
            onClick={scrollLeft}
            className="text-gray-700 hover:text-orange-600 bg-white p-2 rounded-full shadow"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 w-full max-w-[1100px] scrollbar-hide scroll-smooth pb-4"
          >
            {countries.map((country, index) => (
              <Link key={index} href={country.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative min-w-[220px] max-w-[220px] sm:min-w-[250px] sm:max-w-[250px] h-40 sm:h-48 flex items-center justify-center text-white text-center text-sm sm:text-lg font-semibold shadow-md cursor-pointer rounded-lg overflow-hidden transition-all"
                  style={{
                    backgroundImage: `url(${country.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
                  <div className="relative z-10 px-3">{country.name}</div>
                </motion.div>
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="text-gray-700 hover:text-orange-600 bg-white p-2  shadow"
            aria-label="Scroll Right"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </motion.div>

      {/* Image + Form on Left and Combined Text on Right */}
      <div className="relative z-10 mt-[200px] w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 px-4">
        {/* LEFT SIDE: Image + Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Image Section */}
          <div className="w-full flex justify-center md:justify-start -mt-20 md:-mt-6">
            <Image
              src="/investor-visa.webp"
              alt="Migration Image"
              width={600}
              height={400}
              className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-full object-cover "
            />
          </div>

          {/* Form Section */}
          <div className="w-full">
            <Form />
          </div>
        </div>

{/* RIGHT SIDE: Combined Text Section */}
<div className="w-full md:w-1/2 max-w-full h-[160vh] overflow-y-auto pr-4 -mt-6" style={{ fontFamily: 'Times New Roman, serif' }}>
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
    <span className="text-orange-600">VJC Overseas</span> - Start Your Investment Journey
  </h2>

  {/* Existing Brief Description */}
  <p className="text-base sm:text-lg mb-3 text-gray-800">
    We specialize in turning migration dreams into reality. Whether you're planning to invest, work, or settle overseas,
    our expert team provides end-to-end support with visa assistance, country selection, and personalized migration strategies
    tailored to your profile.
  </p>

  <p className="text-base sm:text-lg mb-3 text-gray-800">
    Ready to take the first step towards your global future? Fill out the form and let our expert consultants guide you
    through every step of your investor visa process.
  </p>

  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
    <li>Expert Visa Consultation</li>
    <li>Tailored Investment Pathways</li>
    <li>End-to-End Support</li>
    <li>Global Opportunities Await</li>
  </ul>

  <p className="text-base sm:text-lg text-gray-800">Global Visions. Trusted Guidance.</p>
  <p className="text-base sm:text-lg text-gray-800">Your Bridge to a Brighter Future.</p>
  <p className="text-base sm:text-lg text-gray-800">Seamless Migration Starts with <span className="text-orange-600">VJC Overseas</span>.</p>
  <p className="mt-4 font-medium text-gray-700">
    Trusted by thousands of investors worldwide.
  </p>

  {/* NEW DETAILED CONTENT STARTS HERE */}
  <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-800">
    <h3 className="text-xl sm:text-2xl font-semibold">
      Investor Visa Services by <span className="text-orange-600">VJC Overseas</span> – Your Trusted Partner for Global Investment Opportunities
    </h3>
    <p>
      At <span className="text-orange-600">VJC Overseas</span>, we take immense pride in being one of the leading Investor Visa consultants in India,
      with an unparalleled reputation for guiding clients through the complexities of securing investor visas
      across various countries. With our expertise, personalized approach, and years of experience, we have
      become the go-to choice for individuals seeking to invest, live, and work abroad.
    </p>
    <p>
      Whether you’re based in Hyderabad, Bengaluru, or any other part of India, we are here to help you explore
      new horizons through Investor Visas, enabling you to expand your investment portfolio and enjoy the freedom
      of global mobility.
    </p>

    <h4 className="text-lg font-semibold mt-4">Why Choose <span className="text-orange-600">VJC Overseas</span> for Your Investor Visa?</h4>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Trusted Expertise:</strong> Profound understanding of immigration laws and global investment opportunities.</li>
      <li><strong>Personalized Consultation:</strong> Tailored strategies and support for first-time and experienced investors.</li>
      <li><strong>Global Reach with Local Expertise:</strong> Specialized assistance in Hyderabad, Bengaluru, and more.</li>
      <li><strong>Multiple Investor Visa Options:</strong> USA, Canada, UK, Europe, Australia and more.</li>
      <li><strong>Success-Driven Results:</strong> Hundreds of successful visa approvals.</li>
      <li><strong>Comprehensive Support:</strong> Legal, investment, documentation, and post-arrival assistance.</li>
      <li><strong>Complex Case Handling:</strong> Expert handling of complicated investor visa cases.</li>
    </ul>

    <h4 className="text-lg font-semibold mt-4">Our Investor Visa Programs</h4>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>USA Investor Visa (EB-5 Program):</strong> Invest in a U.S. business and create 10 full-time jobs for green card eligibility.</li>
      <li><strong>Canada Investor Visa:</strong> Explore Quebec or other Provincial Investor Programs with full application support.</li>
      <li><strong>UK Tier 1 Investor Visa:</strong> High-net-worth investment options starting from £2 million with legal and financial guidance.</li>
      <li><strong>Australia Investor Visa:</strong> From Significant Investor Visas to Business Innovation pathways for economic entry.</li>
      <li><strong>European Residency by Investment:</strong> Options in Portugal, Spain, Greece to access Schengen Area benefits.</li>
    </ul>

    <h4 className="text-lg font-semibold mt-4">How We Work</h4>
    <ul className="list-decimal list-inside space-y-2">
      <li><strong>Initial Consultation:</strong> Analyze your goals, finances, and destination preferences.</li>
      <li><strong>Investment Plan & Visa Strategy:</strong> Strategic investment planning aligned with visa requirements.</li>
      <li><strong>Document Preparation & Submission:</strong> Accurate document support and timely application submission.</li>
      <li><strong>Visa Application & Follow-up:</strong> Continuous tracking and coordination with immigration departments.</li>
      <li><strong>Post-Approval Support:</strong> Relocation, business registration, and legal setup assistance.</li>
    </ul>

    <p className="mt-4">
      <strong>Contact Us Today!</strong> If you are looking for the Best Investor Visa Consultants in India, <span className="text-orange-600">VJC Overseas</span> is your trusted partner. 
      From Hyderabad and Bengaluru to nationwide services, our team is ready to guide you.
    </p>
    <p>Get in touch for a free consultation and unlock your global investment potential.</p>
    <p className="font-semibold text-orange-600">VJC Overseas – Empowering Your Global Dreams, One Visa at a Time.</p>
  </div>

  {/* Optional CTA Button */}
  {/* 
  <div className="flex justify-start mt-6">
    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-300">
      Book Your Consultation
    </button>
  </div>
  */}



        </div>
      </div>
    </div>
  );
};

export default Migrate;
