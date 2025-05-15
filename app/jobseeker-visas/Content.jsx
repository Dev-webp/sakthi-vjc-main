"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const paragraphs = [
  {
    text: "At VJC Overseas, we specialize in guiding aspiring professionals through the Job Seeker Visa process. Our experts evaluate your profile and identify the best-fit countries like Germany, Austria, and Sweden based on your qualifications and goals. We provide a detailed consultation to help you understand which country aligns best with your industry. Our team also educates you about the legal requirements, visa success rates, and current employment trends in each destination.",
    image: "/Job-Seeker-Visa-Guide.jpg",
  },
  {
    text: "We provide personalized resume and cover letter creation services as per international standards. Our team helps you create a CV that stands out in European and global job markets. We ensure your resume highlights relevant skills, uses ATS-friendly formats, and aligns with employer expectations. Cover letters are customized to specific roles, industries, and countries, making your application more compelling.",
    image: "/job_seeker_visa_1.png",
  },
  {
    text: "With VJC Overseas, you get full support in application documentation, embassy appointments, and interview scheduling. Our dedicated case managers help you compile all necessary paperwork including educational, professional, and financial documents. We ensure that your file meets embassy standards, guide you through online submissions, and coordinate timely interview slot bookings.",
    image: "/JOB-SEEKER-VISA.png",
  },
  {
    text: "We assist with job portal access, employer outreach strategies, and offer mock interview preparation to boost your confidence and communication skills during job interviews. You’ll get guidance on creating profiles on leading job boards, writing attention-grabbing emails to recruiters, and participating in career fairs. Our mock interviews simulate real employer questions, helping you prepare effectively.",
    image: "/jobseeker1.png",
  },
  {
    text: "Even after landing abroad, our post-arrival services include accommodation guidance, local tips, and continued support until you're comfortably settled in your new career journey. We help you find affordable and safe housing options, explain local transportation, and support you in registering with local authorities. You’ll also receive cultural orientation and professional networking tips for a smooth transition.",
    image: "/jobseekwe.avif",
  },
];

const JobSeekerHelp = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("animate-scroll-text");
            el.classList.remove("before-scroll");
          } else {
            el.classList.remove("animate-scroll-text");
            el.classList.add("before-scroll");
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="py-10 px-4 md:px-12 font-times">
      <style jsx>{`
        .font-times {
          font-family: "Times New Roman", Times, serif;
        }
        .before-scroll {
          opacity: 0;
          transform: translateY(40px);
        }
        .animate-scroll-text {
          opacity: 1 !important;
          transform: translateY(0px) !important;
          transition: all 0.9s ease-out;
        }
      `}</style>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        How VJC Overseas Supports Your Job Seeker Visa Journey
      </h2>

      <div className="space-y-10 ml-6 md:ml-14 mr-6 md:mr-14">
        {paragraphs.map((item, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`before-scroll flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 md:gap-10`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="md:w-3/4">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {item.text}
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <Image
                src={item.image}
                alt={`Job Seeker Help ${index + 1}`}
                width={600}
                height={350}
                className="object-cover object-center w-full h-[250px] max-w-[400px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerHelp;
