"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function AustraliaPRCard({ item, isEven }: any) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial={isEven ? "hiddenLeft" : "hiddenRight"}
      animate={inView ? "visible" : ""}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-6 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="w-[500px] h-[300px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-orange-600 mb-2">{item.title}</h3>
        <p className="text-gray-700 text-sm">{item.desc}</p>
      </div>
    </motion.div>
  );
}
