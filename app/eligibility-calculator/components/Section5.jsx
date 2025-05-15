'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
 // Replace with your actual image path

export default function Section5() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-800 to-orange-600 mb-6">
            How Does Canada PR Eligibility Work?
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            To apply for Canada PR through the Federal Skilled Worker Program (FSWP) under Express Entry,
            you must first score at least 67 out of 100 points on the initial eligibility grid, which evaluates six key factors:
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Left: Image */}
          <div className="w-full md:w-2/5">
  <Image
    src="/canadacalimg2.png"
    alt="Canada PR Eligibility"
    width={500}  // Set width for responsive layout
    height={300} // Set height for responsive layout
    layout="responsive" // This will make it adjust based on container width
    className=" object-cover"
  />
</div>


          {/* Right: Table-style structure */}
          <div className="w-full md:w-3/5  p-6">
            <div className="grid grid-cols-2 gap-y-4 text-black text-lg">
              <div className="font-semibold border-b pb-2">Factor</div>
              <div className="font-semibold border-b pb-2">Maximum Points</div>

              <div className="border-b py-2">Age</div>
              <div className="border-b py-2">12</div>

              <div className="border-b py-2">Education</div>
              <div className="border-b py-2">25</div>

              <div className="border-b py-2">Work Experience</div>
              <div className="border-b py-2">15</div>

              <div className="border-b py-2">Language Proficiency</div>
              <div className="border-b py-2">28</div>

              <div className="border-b py-2">Adaptability</div>
              <div className="border-b py-2">10</div>

              <div className="border-b py-2">Arranged Employment</div>
              <div className="border-b py-2">10</div>

              <div className="font-bold pt-2">Total</div>
              <div className="font-bold pt-2">100</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
