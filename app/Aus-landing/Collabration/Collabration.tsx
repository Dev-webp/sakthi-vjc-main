"use client";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Image from "next/image";

export default function StudyInUK() {
  return (
    <section className="w-full bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative min-h-[400px] overflow-hidden rounded-xl shadow-lg">
        {/* Left Image Section with Diagonal Cut */}
        <motion.div
          className="relative w-full lg:w-[60%] h-[300px] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          viewport={{ once: false, amount: 0.5 }} // Animate every time enters viewport
          transition={{ duration: 1 }}
        >
          <div className="clip-left relative w-full h-full">
            <Image
              src="/assets/auspr/collab.png"
              alt="Study in UK"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content Section with Matching Diagonal Cut */}
        <motion.div
          className="w-full lg:w-[40%] bg-white p-6 lg:p-12 flex flex-col justify-center overflow-hidden"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          viewport={{ once: false, amount: 0.5 }} // Animate every time enters viewport
          transition={{ duration: 1 }}
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            <span className="text-orange-600 tracking-widest">Australia PR Eligibility</span>
          </h3>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">
            Explore Australia Residency with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Australia offers numerous opportunities for skilled professionals and
            immigrants through its Permanent Residency (PR) program. Whether
            you&apos;re looking to start a new life in a multicultural environment or
            expand your career prospects, the Australia PR process ensures that
            your application is supported at every step.
          </p>
        </motion.div>
      </div>

      {/* Tailwind Custom Styles for Diagonal Clipping */}
      <style jsx>{`
        .clip-left {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
        .clip-right {
          clip-path: polygon(0% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
}
