"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import {
  FaMoneyCheckAlt,
  FaUniversity,
  FaClock,
  FaUserCheck,
  FaWallet,
  FaAward,
} from "react-icons/fa";

const UKBenefitsSlider = () => {
  const points = [
    {
      text: "Free Processing: No hidden charges—transparent support from start to finish.",
      icon: <FaMoneyCheckAlt />,
    },
    {
      text: "Zero Application Fees: Save on upfront costs when applying to select UK universities.",
      icon: <FaUniversity />,
    },
    {
      text: "Fast Offer Letters: Receive your university offer letter in as little as 2 days (subject to university timelines).",
      icon: <FaClock />,
    },
    {
      text: "CAS Without Interview: For eligible students at select universities, get your Confirmation of Acceptance for Studies (CAS) without an interview.",
      icon: <FaUserCheck />,
    },
    {
      text: "No Initial Deposit Required: Flexible payment options available at many partner universities (university-specific).",
      icon: <FaWallet />,
    },
    {
      text: "Scholarships up to £10,000: Access merit-based and need-based scholarships, subject to eligibility and university criteria.",
      icon: <FaAward />,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <BsArrowLeftCircleFill color="gray" size={30} />,
    nextArrow: <BsArrowRightCircleFill color="gray" size={30} />,
    responsive: [
  {
    breakpoint: 1280,
    settings: { slidesToShow: 3 },
  },
  {
    breakpoint: 1024,
    settings: { slidesToShow: 2 },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "10px",
    },
  },
],

  };

  return (
    <div className="px-16 py-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6 text-black">
      Why Choose <span className="text-orange-500">VJC Overseas</span> for Studying in the <span className="text-blue-400">UK</span>?
      </h2>
      <Slider {...settings}>
        {points.map((point, index) => {
          const heading = point.text.split(":")[0];
          const description = point.text.split(":").slice(1).join(":").trim();

          return (
            <motion.div
              key={index}
              className="px-2" // Reduced padding between cards
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-2 border-orange-300 rounded-xl shadow-lg p-4 text-center w-[220px] h-[300px] flex flex-col justify-center hover:shadow-orange-500 hover:border-orange-500 transition duration-300 ease-in-out">
                <div className="text-orange-500 text-3xl mb-4 mx-auto">
                  {point.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  {heading}
                </h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default UKBenefitsSlider;
