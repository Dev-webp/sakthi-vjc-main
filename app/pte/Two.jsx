"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import Content from "./Content";

const Migrate = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { question: "What is the PTE Academic exam, and why is it important?", answer: "PTE Academic is a computer-based English proficiency test accepted by universities and immigration authorities worldwide." },
    { question: "How can VJC Overseas help me prepare for the PTE exam?", answer: "We offer expert coaching, practice tests, and personalized strategies to help you achieve your target PTE score." },
    { question: "What are the benefits of joining PTE coaching at VJC Overseas?", answer: "Our coaching includes experienced trainers, flexible schedules, mock tests, and customized study plans." },
    { question: "How long does it take to prepare for the PTE exam?", answer: "Preparation time varies, but with our structured coaching, most students improve within 4 to 6 weeks." },
    { question: "How do I enroll in PTE coaching at VJC Overseas?", answer: "Contact us via phone or email, take an initial assessment, and start your customized PTE training." }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="relative w-full h-72">
        <Image src="/ieltsimg.avif" alt="IELTS Coaching" layout="fill" objectFit="cover" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute left-12 bottom-20 text-white">
          <h1 className="text-3xl font-bold">PTE Coaching</h1>
          <p><Link href="/">Home</Link> &gt; PTE Coaching</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 mt-6">
  {/* Left Section - Buttons + Form */}
  <div className="w-full md:w-1/3 space-y-16">
    <div className="grid grid-cols-0 flex justify-center md:grid-cols-1 gap-6">
      <Link href="/ielts">
        <button className="w-52 md:w-80 bg-gradient-to-r from-white to-orange-400 border border-orange-600 text-black p-2 rounded-lg hover:bg-gray-700 hover:text-white">
        IELTS
        </button>
      </Link>
      <Link href="/pte">
        <button className="w-52 md:w-80 bg-gradient-to-r from-white to-orange-400 border border-orange-600 text-black p-2 rounded-lg hover:bg-gray-700 hover:text-white">
          PTE
        </button>
      </Link>
      <Link href="/gre">
        <button className="w-52 md:w-80 bg-gradient-to-r from-white to-orange-400 border border-orange-600 text-black p-2 rounded-lg hover:bg-gray-700 hover:text-white">
          GRE
        </button>
      </Link>
      <Link href="/gmat">
        <button className="w-52 md:w-80 bg-gradient-to-r from-white to-orange-400 border border-orange-600 text-black p-2 rounded-lg hover:bg-gray-700 hover:text-white">
          GMAT
        </button>
      </Link>
      <Link href="/toefl">
        <button className="w-52 md:w-80 bg-gradient-to-r from-white to-orange-400 border border-orange-600 text-black p-2 rounded-lg hover:bg-gray-700 hover:text-white">
          TOEFL
        </button>
      </Link>
      <Link href="/duolingo">
        <button className="w-52 md:w-80 bg-gradient-to-r from-white to-orange-400 border border-orange-600 text-black p-2 rounded-lg hover:bg-gray-700 hover:text-white">
          DUOLINGO
        </button>
      </Link>
    </div>
  


          <div className=""><Form /></div>
        </div>

        {/* Right Section - Content with Scrolling */}
        <div className="w-full md:w-4/5 md:pl-6">
          <div className="h-[500px] md:h-[650px] overflow-y-auto border rounded-lg p-4 bg-white shadow">
            <Content />
          </div>

          {/* Two Side-by-Side Images */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <Image src="/dmwork.jpg" alt="Sample 1" width={400} height={300} className="w-full md:w-1/2 rounded-lg shadow" />
            <Image src="/gtvimage.jpg" alt="Sample 2" width={400} height={300} className="w-full md:w-1/2 rounded-lg shadow" />
          </div>
        </div>
      </div>

      {/* Help & FAQ Section */}
      <div className="w-full flex flex-col md:flex-row items-start px-4 md:px-3 mt-6  p-6">
        {/* Help Box */}
        <div className="w-full md:w-1/3 bg-white p-16 border border-x-orange-600 text-center">
          <h2 className="text-xl font-bold text-orange-500">How Can We Help You?</h2>
          <p className="mt-2 text-gray-600">Contact us for guidance.</p>
          <p className="mt-2 font-bold">📞  +91 9160449000</p>
          <p className="mt-1 font-bold">✉️ info@vjcoverseas.com</p>
        </div>
        
        {/* FAQ Section */}
        <div className="w-full md:w-3/5 ml-0 md:ml-6">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2> */}
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-700" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="text-orange-500 text-2xl">{openFAQ === index ? "-" : "+"}</span>
              </button>
              {openFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Migrate;
