"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

const video = {
  src: "/assets/canadapr/Landing/video1.mp4",
  title: "Work, Live & Settle in Canada with Canada PR Visa - Apply Now",
  subtitle: "Expert guidance and seamless processing for Canada PR Visas.",
  isVideo: true,
};

const overlayVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="relative min-h-[96vh] md:min-h-[110vh] w-full bg-white overflow-hidden">
      {/* Video and Content Section */}
      <div className="absolute inset-x-0 top-0 h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            key={video.src}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-blue-300 font-bold  text-sm tracking-widest uppercase mb-4"
          >
            Welcome to Entryway
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-white tracking-wider leading-10 md:leading-normal text-3xl md:text-5xl md:w-[70%] font-bold mb-4"
          >
            {video.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-200 tracking-widest max-w-xl mb-6"
          >
            {video.subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4">
            <Link
              href="/contact"
              className="relative overflow-hidden inline-block px-6 py-3 mt-6 rounded-md font-semibold text-white bg-orange-500 group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-sky-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Boxes - Responsive Positioning */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 20,
              stiffness: 100,
              delayChildren: 0.3,
              staggerChildren: 0.25,
            },
          },
        }}
        className="relative mt-[calc(80vh+40px)]  md:mt-0 md:absolute md:top-[68%] w-full hidden md:flex flex-col md:flex-row justify-center items-center gap-20 pb-20 px-6"
      >
        {[
          {
            icon: "🛂",
            title: "Canada PR Eligibility",
            desc: "Check if you qualify for Canada Permanent Residency.",
          },
          {
            icon: "📝",
            title: "Step-by-Step Process",
            desc: "Complete support through each stage of your PR application.",
          },
          {
            icon: "💼",
            title: "Career Opportunities",
            desc: "Explore your professional future in Canada with PR.",
          },
        ].map((box, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.1, // Zoom effect on hover
              transition: {
                duration: 0.3, // Duration of the zoom
                ease: "easeInOut", // Smooth easing
              },
            }}
            className="bg-white shadow-lg p-4 rounded-md text-center w-60 h-48"
          >
            <div className="text-yellow-500 text-3xl mb-2">{box.icon}</div>
            <h3 className="font-bold text-lg mb-1 text-orange-600">
              {box.title}
            </h3>
            <p className="text-sm text-gray-600">{box.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
