"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function AustraliaPRCard({ item, isEven }: any) {
  return (
    <motion.div
      initial={isEven ? "hiddenLeft" : "hiddenRight"}
      whileInView="visible"
      variants={cardVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className={`flex flex-col md:flex-row items-center gap-6 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 w-full">
        <div className="relative w-full h-64 md:h-[300px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 h-64 md:h-[150px] bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-orange-600 mb-2">{item.title}</h3>
        <p className="text-gray-700 text-sm overflow-hidden text-ellipsis">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
