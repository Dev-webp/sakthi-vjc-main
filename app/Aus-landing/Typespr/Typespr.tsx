"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const visaCategories = [
  {
    title: "Skilled Migration Visas",
    icon: <ShieldCheck className="text-orange-500 w-5 h-5 mr-2" />,
    color: "border-orange-500",
    items: [
      {
        name: "Subclass 189 – Skilled Independent Visa",
        desc: "For skilled workers not sponsored by an employer, state, or family.",
      },
      {
        name: "Subclass 190 – Skilled Nominated Visa",
        desc: "Requires nomination by an Australian state or territory.",
      },
      {
        name: "Subclass 491 – Skilled Work Regional (Provisional)",
        desc: "Leads to PR through the Subclass 191 after living and working in regional Australia.",
      },
    ],
  },
  {
    title: "Family and Partner Visas",
    icon: <Users className="text-pink-500 w-5 h-5 mr-2" />,
    color: "border-pink-500",
    items: [
      {
        name: "Partner Visa (Subclass 820/801 or 309/100)",
        desc: "For spouses or de facto partners of Australian citizens or PR holders.",
      },
      {
        name: "Parent Visas",
        desc: "Allows parents of Australian citizens or PR holders to join their families.",
      },
    ],
  },
  {
    title: "Business and Investor Visas",
    icon: <Briefcase className="text-green-600 w-5 h-5 mr-2" />,
    color: "border-green-600",
    items: [
      {
        name: "Business and Investor Visas",
        desc: "For entrepreneurs, business owners, or investors ready to contribute to Australia’s economy.",
      },
    ],
  },
];

export default function VisaTypesSection() {
  const [showVisaTypes, setShowVisaTypes] = useState(false);

  return (
    <section className="w-full bg-[#fdfaf6] py-16 px-6 md:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
          Types of Permanent Residence Visas
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Explore different pathways to Australian permanent residency.
        </p>
      </motion.div>

      {showVisaTypes && (
        <div className="relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-orange-100">
          {visaCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative mb-12 md:w-1/2 px-4 ${
                idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <div
                className={`bg-white shadow-lg rounded-xl border-l-4 ${category.color} p-6 relative hover:bg-orange-100 cursor-pointer`}
              >
                <div className="absolute -left-6 top-6 w-10 h-10 rounded-full bg-white border-4 border-orange-200 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-medium text-orange-600">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => setShowVisaTypes(!showVisaTypes)}
          className="px-6 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-lg shadow-md transition duration-200"
        >
          {showVisaTypes ? "Hide Types of PR Visas" : "Show Types of PR Visas"}
        </button>
      </div>
    </section>
  );
}
