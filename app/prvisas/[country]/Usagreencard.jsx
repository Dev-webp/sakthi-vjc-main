"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const UsaGreenCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        USA Green Card - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="">
          <Image
            src="/usa-green-card.jpg"
            alt="USA Green Card Guidance by VJC Overseas"
            width={300}
            height={700}
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-justify">
          <p className="mb-4 mt-4">
            Are you ready to embark on a life-changing journey to the United States? With a Green Card, you can enjoy permanent residency in the USA and open doors to unlimited opportunities in work, education, and lifestyle. At <span className="text-orange-600 font-semibold">VJC Overseas</span>, we specialize in helping you navigate the Green Card visa process, ensuring a smooth and successful application journey.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 mt-4">What is a USA Green Card Visa?</h3>
      <p className="mb-4">
        The USA Green Card is an official immigration visa that grants permanent residency to foreign nationals in the United States. With a Green Card, you gain the right to live and work permanently in the USA, access social services, and eventually apply for citizenship if you choose. It's a crucial step toward building a future in one of the world’s most dynamic and prosperous countries.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Lifestyle in the USA with a Green Card</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li><strong>Employment Opportunities:</strong> Work for any employer or start your own business.</li>
        <li><strong>Healthcare:</strong> Access high-quality medical services.</li>
        <li><strong>Education:</strong> Free public schools & in-state college tuition.</li>
        <li><strong>Social Security Benefits:</strong> Qualify for retirement and other benefits after certain years of work.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Living Expenses in the USA</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li><strong>Housing:</strong> Rent ranges from $800 to $2,500 based on city.</li>
        <li><strong>Groceries and Utilities:</strong> $400–$900/month total.</li>
        <li><strong>Transportation:</strong> Public transport is city-based; cars common in suburbs.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Processing Time for USA Green Card Visa</h3>
      <p className="mb-2">
        Processing time ranges from <strong>12 months to 2 years</strong>, depending on visa category and applicant origin.
      </p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li><strong>Family-based Green Cards:</strong> Depends on relation and nationality.</li>
        <li><strong>Employment-based:</strong> Faster for professionals in high-demand fields.</li>
        <li><strong>Diversity Lottery:</strong> Competitive but quicker if selected.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">USA Green Card Visa Fees</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li><strong>Family-based Green Card:</strong>
          <ul className="ml-5 list-disc space-y-1">
            <li>Form I-130: $535</li>
            <li>Form I-485: $1,140</li>
            <li>Biometric Fee: $85</li>
          </ul>
        </li>
        <li><strong>Employment-based Green Card:</strong>
          <ul className="ml-5 list-disc space-y-1">
            <li>Form I-140: $700</li>
            <li>Form I-485: $1,140</li>
            <li>Biometric Fee: $85</li>
          </ul>
        </li>
        <li><strong>Diversity Visa Lottery:</strong>
          <ul className="ml-5 list-disc space-y-1">
            <li>No fee to enter</li>
            <li>Processing fees apply post-selection</li>
          </ul>
        </li>
      </ul>

      <p className="mb-4">
        Additional charges may apply for medical exams, translations, and documentation. <span className="text-orange-600 font-semibold">VJC Overseas</span> ensures complete clarity.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">How <span className="text-orange-600 font-semibold">VJC Overseas</span> Can Help You</h3>
      <p className="mb-4">
        Our consultants help with every step — eligibility, paperwork, interviews — ensuring a smooth journey.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Why Choose <span className="text-orange-600 font-semibold">VJC Overseas</span>?</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Expert legal support</li>
        <li>Complete guidance for all categories</li>
        <li>Regular updates and fast processing</li>
        <li>Personalized approach</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Start Your Green Card Journey Today</h3>
      <p className="mb-4">
        Contact <span className="text-orange-600 font-semibold">VJC Overseas</span> now and take the first step toward your dream life in the USA.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Contact Us</h3>
      <p className="mb-6">
        📞 <strong>+91-9160449000</strong><br />
        🌐 <strong>www.vjcoverseas.com</strong>
      </p>

      <p className="text-sm text-gray-600 italic">
        *Visa regulations and fees are subject to change. Please verify with U.S. immigration or <span className="text-orange-600">VJC Overseas</span>.
      </p>
    </div>
  );
};

export default UsaGreenCard;
