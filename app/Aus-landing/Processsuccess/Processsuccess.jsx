"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const textVariant = (delay) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeInOut" },
  },
});

const imageVariant = (delay) => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeInOut" },
  },
});

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Check Your Eligibility",
      description:
        "Evaluate your age, English proficiency, qualifications, and work experience. Use Australia’s Points Test for skilled visas — you’ll generally need at least 65 points to apply.",
      image: "/assets/auspr/process/process1.png",
    },
    {
      id: "02",
      title: "Choose the Right Visa Subclass",
      description:
        "Each visa type has specific requirements. Choosing the correct stream ensures a higher success rate and smoother processing.",
      image: "/assets/canadapr/process/process2.png",
    },
    {
      id: "03",
      title: "Skill Assessment",
      description:
        "Applicants for skilled visas must have their qualifications assessed by a relevant authority to confirm they meet Australian standards.",
      image: "/assets/canadapr/process/process3.png",
    },
    {
      id: "04",
      title: "Submit an Expression of Interest (EOI)",
      description:
        "Create a profile in SkillSelect to express your interest in migrating. State governments or employers can view your EOI and invite you to apply.",
      image: "/assets/canadapr/process/process4.png",
    },
    {
      id: "05",
      title: "Receive an Invitation to Apply",
      description:
        "If your profile is competitive, you’ll be invited to submit a formal visa application.",
      image: "/assets/canadapr/process/process5.png",
    },
    {
      id: "06",
      title: "Lodge Your Application",
      description:
        "Submit all required documents, police checks, medical exams, and proof of funds.",
      image: "/assets/canadapr/process/process6.png",
    },
    {
      id: "07",
      title: "Wait for a Decision",
      description:
        "Processing times vary depending on the visa subclass and your personal circumstances. You can track your application online.",
      image: "/assets/auspr/process/process7.png",
    },
    {
      id: "08",
      title: "Receive Your PR Grant",
      description:
        "Once approved, you’re officially a permanent resident of Australia. Welcome to your new chapter!",
      image: "/assets/auspr/process/process8.png",
    },
  ];

  return (
    <div className="relative w-full mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "url('/assets/auspr/process1.jpg')",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-32 py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-5xl text-left font-bold text-orange-400">
            Step-by-Step: The PR Visa Process
          </h2>
        </motion.div>

        <div className="space-y-14">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                variants={textVariant(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="md:w-1/2 text-left"
              >
                <p className="text-sm font-bold text-white">{step.id}</p>
                <h3 className="text-xl lg:text-3xl font-bold text-orange-500 mt-2">
                  {step.title}
                </h3>
                <p className="text-white mt-4">{step.description}</p>
              </motion.div>

              <motion.div
                variants={imageVariant(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="md:w-1/2"
              >
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg flex">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={700}
                    height={320}
                    className="w-full h-full object-cover mix-blend-multiply"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
