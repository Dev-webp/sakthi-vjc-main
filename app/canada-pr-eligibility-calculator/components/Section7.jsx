"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Section7 = () => {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[500px] relative overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-[70%] flex items-center justify-center bg-black bg-opacity-80 text-white p-6 md:p-10 shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-2xl space-y-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Why Choose VJC Overseas for Canada PR?
          </motion.h2>
          <motion.ul
            className="text-base md:text-lg space-y-3 text-white"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              "Personalized Immigration Assessment: We evaluate your profile and recommend the best pathway for your background and career goals.",
              "End-to-End Documentation Support: From ECA and IELTS guidance to NOC classification and application filing, we ensure your documents are flawless and compliant.",
              "Experienced Canada Immigration Experts: Our consultants stay updated with the latest IRCC policies and provide honest, actionable advice.",
              "High Success Rate: We have helped hundreds of individuals and families achieve their Canadian immigration dreams.",
              "Transparent Process: No hidden fees. Receive clear timelines, regular updates, and full transparency throughout your PR journey.",
            ].map((point, idx) => (
              <motion.li
                key={idx}
                className="leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Image Section */}
      <div className="relative w-full md:w-[30%] h-[300px] md:h-auto">
        <Image
          src="/calimgend.png"
          alt="Canada PR"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
    </section>
  );
};

export default Section7;
