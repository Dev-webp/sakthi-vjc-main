import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Globe,
  Plane,
  MapPin,
  Flag,
  Landmark,
  ChevronDown,
} from "lucide-react";
import Form from "./Form";
import Content from "./Content";
import Link from "next/link";

export default function JobSeekerVisaPage() {
  const countries = [
    { name: "Germany Jobseeker Visa", path: "/jobseeker-visas/germany-jobseeker-visa", icon: <Flag size={32} /> },
    { name: "Austria Jobseeker Visa", path: "/jobseeker-visas/austria-jobseeker-visa", icon: <Landmark size={32} /> },
    { name: "Portugal Jobseeker Visa", path: "/jobseeker-visas/portugal-jobseeker-visa", icon: <MapPin size={32} /> },
    { name: "Sweden Jobseeker Visa", path: "/jobseeker-visas/sweden-jobseeker-visa", icon: <Globe size={32} /> },
    { name: "Norway Jobseeker Visa", path: "/jobseeker-visas/norway-jobseeker-visa", icon: <Plane size={32} /> },
    { name: "UAE Jobseeker Visa", path: "/jobseeker-visas/uae-jobseeker-visa", icon: <Briefcase size={32} /> },
  ];

  const cardsRef = useRef(null);

  const handleScrollDown = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] min-h-screen font-sans">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/jobseeker.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Text */}
          <div className="space-y-6 bg-black/40 p-6 text-white rounded-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Apply for a Job Seeker Visa
            </h1>
            <p className="text-white text-lg">
              Explore top countries like Germany, Austria, and UAE to jumpstart your career abroad.
              Our experts at VJC Overseas are ready to guide you every step of the way.
            </p>
            <motion.button
              onClick={handleScrollDown}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              <span>Know More</span>
              <ChevronDown size={24} />
            </motion.button>
          </div>

          {/* Right Form */}
          <div className="z-10">
            <Form />
          </div>
        </div>
      </div>

      {/* Visa Cards Section */}
      <div ref={cardsRef} className="bg-gradient-to-br from-[#bb5a24] to-[#000000] py-16">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6">
          {countries.map((item, idx) => (
            <Link key={idx} href={item.path}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center justify-center w-40 h-40 rounded-2xl shadow-xl transform transition-all duration-300 cursor-pointer text-center ${
                  idx % 2 === 0
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div className="mb-3">{item.icon}</div>
                <h2 className="text-sm font-semibold px-2">{item.name}</h2>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* 👉 Content Section Below Buttons */}
      <Content selectedVisa={{ path: "/pr-visas" }} />
    </div>
  );
}