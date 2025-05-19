"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  "Settle Anywhere in One of the World’s Best Countries",
  "A Safe, Diverse & Welcoming Society",
  "Free World-Class Healthcare",
  "Free Education for Children",
  "Unmatched Quality of Life",
  "Enjoy All Citizen Privileges (Except Voting)",
  "Bring Your Loved Ones Along",
  "A Clear Path to Citizenship",
];

const descriptions = [
  "From vibrant cities like Toronto & Vancouver to peaceful, nature-rich towns—you choose your home.",
  "Experience true multicultural living in a country that celebrates inclusion and equality for all.",
  "Enjoy universal health coverage for you and your family—no extra cost, no worries.",
  "Give your kids the best start with access to Australia’s top-rated public schools.",
  "Clean air, scenic beauty, low crime, and a strong social system—it’s more than a move, it’s a fresh start.",
  "Live, work, study, and buy property like a Canadian citizen. PR gives you nearly all the same benefits.",
  "Australia PR lets you sponsor your spouse, children, and even parents for a united future.",
  "Live in Australia for just 3 years to become eligible for citizenship—and a powerful passport!",
];

function getBenefitDescription(index: number): string {
  return descriptions[index] || "Benefit description coming soon.";
}

const Livein = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // 👈 animate on every view
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 text-gray-800 "
    >
    

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold text-orange-600"
        >
          Live in Australia with Australia{" "}
          <span className="text-sky-700">Permanent Residence</span> Visa
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg text-gray-700"
        >
          <b>Live the Life You Deserve – In Australia, With a PR Visa!</b>
          <br />
          Dreaming of a life where opportunity meets peace of mind? With a
          Australia Permanent Residence Visa, you&apos;re not just moving—you’re
          upgrading your entire lifestyle.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-orange-500 hover:bg-orange-200"
            >
              <h3 className="text-xl font-bold mb-2 text-sky-700 ">
                {benefit}
              </h3>
              <p className="text-gray-600">
                {getBenefitDescription(index)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={itemVariants}
          className="text-lg mt-12 font-semibold text-orange-700"
        >
          Australia is not just a destination—it’s a new chapter filled with
          stability, opportunity, and freedom.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Livein;
