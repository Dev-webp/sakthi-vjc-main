"use client";

import { useEffect } from "react";
import { FaRegClipboard } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    id: "001",
    title: "Academic Assessment",
    desc: "We review your academic background and career interests.",
  },
  {
    id: "002",
    title: "Choosing a Suitable University",
    desc: "We assist you in selecting the right university based on your preferences and requirements.",
  },
  {
    id: "003",
    title: "Scholarship Opportunities",
    desc: "We guide you in finding and applying for scholarships based on your academic achievements.",
  },
  {
    id: "004",
    title: "Financial Planning",
    desc: "We help you find affordable study options and plan your education budget.",
  },
];

export default function StudentCounselling() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // <- animation replays on scroll
    });
  }, []);

  return (
    <section className="w-full px-4 md:px-10 pt-10 pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-orange-600 to-orange-400 text-center mb-12"
          data-aos="fade-up"
        >
          Student Counselling
        </h2>

        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          {/* Left Image */}
          <div className="lg:w-1/4 w-full" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/studyinuk/Counseling.png" // Replace with your actual image path
              alt="Counselling"
              className="w-full h-auto shadow-md rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="lg:w-3/4 w-full text-gray-700 text-base space-y-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              We are partnered with over 230+ leading institutions across Canada, Australia, the UK, New Zealand,
              Denmark, and Sweden. Our expert counselors assess your academic background, financial situation, and
              long-term goals to create a clear, customized pathway.
            </p>
            <p>
              Our Free Counselling Sessions provide in-depth career and course advice, university shortlisting,
              scholarship insights, financial planning tips, and visa documentation support — all at no cost.
            </p>
            <p>
              Whether you're still deciding on a course or ready to apply, our free counselling can help you move
              forward with confidence.
            </p>

            <div className="pt-4">
              <Link href="/assessment" passHref>
                <button className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-orange-500 rounded-full group hover:bg-blue-400 transition-all duration-300 ease-in-out">
                  <span className="relative z-10">Book Free Counselling</span>
                  <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section Tag */}
        <div
          className="inline-block mb-10 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-white font-bold text-base shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          What we discuss
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-orange-500 rounded-2xl shadow-md hover:shadow-xl transition p-6 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-between mb-4">
                <FaRegClipboard className="text-orange-500 text-xl group-hover:scale-110 transition" />
                <div className="text-black font-bold text-xl">{item.id}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-black to-orange-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
