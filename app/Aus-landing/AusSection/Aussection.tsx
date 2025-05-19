"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AustraliaPRBenefits = [
  {
    title: "Freedom to Live, Work & Study Anywhere in Australia",
    desc: "Settle in any state—from vibrant cities like Sydney to peaceful towns in Queensland.",
    image: "/assets/auspr/slides/slide1.png",
  },
  {
    title: "World-Class Free Healthcare",
    desc: "Access government-funded healthcare services with no extra cost.",
    image: "/assets/auspr/slides/slide2.png",
  },
  {
    title: "Free Quality Education for Children",
    desc: "PR holders’ children enjoy free public education up to grade 12.",
    image: "/assets/auspr/slides/slide3.png",
  },
  {
    title: "Family Sponsorship Made Easy",
    desc: "Bring your spouse, children, and even parents to join your Australian journey.",
    image: "/assets/auspr/slides/slide4.png",
  },
  {
    title: "No Job Offer Needed to Apply",
    desc: "Many immigration streams like the Skilled Independent Visa don’t require a job offer.",
    image: "/assets/auspr/slides/slide5.png",
  },
  {
    title: "Travel Visa-Free to Over 25 Countries (After Citizenship)",
    desc: "Australia offers a clear path to citizenship, unlocking powerful passport privileges.",
    image: "/assets/auspr/slides/slide6.png",
  },
  {
    title: "Access to Social Security Benefits",
    desc: "Receive unemployment support, pension plans, and child care benefits.",
    image: "/assets/auspr/slides/slide7.png",
  },
  {
    title: "Own Property & Start a Business Freely",
    desc: "Enjoy the same legal rights as citizens when it comes to investing or starting a venture.",
    image: "/assets/auspr/slides/slide8.png",
  },
  {
    title: "Safe, Peaceful & Inclusive Society",
    desc: "Live in one of the world’s safest and most multicultural countries.",
    image: "/assets/auspr/slides/slide9.png",
  },
  {
    title: "Quick Citizenship Eligibility – Just 3 Years of Residency",
    desc: "Become eligible to apply for citizenship after just 3 years of living in Australia.",
    image: "/assets/auspr/slides/slide10.png",
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const AustraliaVisaSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Australia Permanent Residency Visa Benefits
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Discover a better life with these unbeatable Australia PR advantages.
        </p>
      </div>

      <div className="relative space-y-16 max-w-5xl mx-auto">
        {AustraliaPRBenefits.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

          return (
            <motion.div
              key={idx}
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
        })}
      </div>
    </section>
  );
};

export default AustraliaVisaSection;
