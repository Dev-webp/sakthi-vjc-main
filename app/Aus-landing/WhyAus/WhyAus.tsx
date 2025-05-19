"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseAustralia() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "url('/assets/auspr/Whyausbg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 py-16 px-6 md:px-20">
        {/* Decorative Shape */}
        <Image
          src="/assets/auspr/shape.svg"
          alt="Shape"
          width={400}
          height={400}
          className="absolute right-0 top-0 opacity-10 pointer-events-none z-0"
        />

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Why Choose Australia?
            </h2>

            {/* Staggered list animation */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-4 text-white text-base leading-relaxed"
            >
              {[
                "World-class education and healthcare systems",
                "Safe, multicultural society",
                "Thriving job market and high quality of life",
                "A pathway to Australian citizenship",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  ✅ {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/auspr/Whyaus.png"
              alt="Why Choose Australia"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full max-w-md"
            />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-xl shadow-xl border-l-4 border-orange-500"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">
            Need Expert Guidance?
          </h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Navigating the PR process can be complex — but you don’t have to do
            it alone. Our migration experts are here to help you at every step,
            from selecting the right visa to compiling your application with
            precision and care.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
