'use client';

import { useEffect } from "react";
import { FaRegClipboard, FaUserGraduate, FaEnvelopeOpenText, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Research and Choose a Course",
    desc: "Identify the course that aligns with your interests and career goals.",
    icon: <HiOutlineClipboardList size={28} className="text-orange-500" />,
  },
  {
    title: "Meet Entry Requirements",
    desc: (
      <>
        Academic qualifications (A-Levels, IB, etc.)<br />
        English proficiency test (IELTS, TOEFL)<br />
        Portfolio (for arts programs)<br />
        Letters of recommendation (for PG)
      </>
    ),
    icon: <FaUserGraduate size={28} className="text-orange-500" />,
  },
  {
    title: "Application Submission",
    desc: (
      <>
        Undergraduate: Apply via UCAS (up to 5 choices)<br />
        Postgraduate: Apply directly through the university
      </>
    ),
    icon: <FaEnvelopeOpenText size={28} className="text-orange-500" />,
  },
  {
    title: "Attend Interview (If Required)",
    desc: "Some courses and universities may conduct interviews to assess suitability.",
    icon: <FaUniversity size={28} className="text-orange-500" />,
  },
  {
    title: "Receive and Accept Offer",
    desc: "Get your conditional/unconditional offer letter and confirm your acceptance.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
  {
    title: "Apply for Student Visa",
    desc: "Once you receive your CAS (Confirmation of Acceptance for Studies), proceed with the visa application.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
];

export default function UKAdmissionProcess() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-full px-6 md:px-20 pt-12 pb-8 bg-white"> {/* Reduced the bottom padding (pb-20 -> pb-8) */}
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-14"
          data-aos="fade-up"
        >
          Admission Process for UK Universities
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-orange-500 shadow-md hover:shadow-xl transition rounded-xl p-6 space-y-3 group hover:border-orange-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-50 rounded-full group-hover:bg-orange-100 transition">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-black to-blue-400 text-transparent bg-clip-text">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
