"use client";

import React from "react";
import { motion } from "framer-motion";

const UsaGreenCard = () => {
  return (
    <motion.div
      className="text-gray-800 text-lg space-y-6 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold">
        USA Green Card Visa: Your Path to the American Dream with <span className="text-orange-600">VJC Overseas</span>
      </h2>

      <p>
        Are you ready to embark on a life-changing journey to the United States? With a Green Card, you can enjoy permanent residency in the USA and open doors to unlimited opportunities in work, education, and lifestyle. At <span className="text-orange-600 font-semibold">VJC Overseas</span>, we specialize in helping you navigate the Green Card visa process, ensuring a smooth and successful application journey.
      </p>

      <h3 className="text-xl font-semibold">What is a USA Green Card Visa?</h3>
      <p>
        The USA Green Card is an official immigration visa that grants permanent residency to foreign nationals in the United States. With a Green Card, you gain the right to live and work permanently in the USA, access social services, and eventually apply for citizenship if you choose. It's a crucial step toward building a future in one of the world’s most dynamic and prosperous countries.
      </p>

      <h3 className="text-xl font-semibold">Lifestyle in the USA with a Green Card</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Employment Opportunities:</strong> Work for any employer or start your own business. The job market is vast, especially in technology, healthcare, education, and finance sectors.</li>
        <li><strong>Healthcare:</strong> Access high-quality medical services through private and public health insurance options.</li>
        <li><strong>Education:</strong> Children can attend free public schools and benefit from in-state tuition rates at public universities.</li>
        <li><strong>Social Security Benefits:</strong> Qualify for retirement, disability, and survivor benefits after working a certain period.</li>
      </ul>

      <h3 className="text-xl font-semibold">Living Expenses in the USA</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Housing:</strong> Rent varies by location. A 1-bedroom apartment in New York City may cost $2,500/month, while in smaller towns it may be around $800.</li>
        <li><strong>Groceries and Utilities:</strong> Groceries typically cost $300–$600/month. Utilities range from $100 to $300/month.</li>
        <li><strong>Transportation:</strong> Public transport is available in cities. In suburban or rural areas, owning a car is common, so consider fuel and maintenance costs.</li>
      </ul>

      <h3 className="text-xl font-semibold">Processing Time for USA Green Card Visa</h3>
      <p>
        Processing time ranges from <strong>12 months to 2 years</strong>, depending on visa category and applicant origin. Key factors include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Family-based Green Cards:</strong> Varies based on relationship and applicant country.</li>
        <li><strong>Employment-based Green Cards:</strong> Faster for professionals in specialized fields like IT, medicine, and engineering.</li>
        <li><strong>Diversity Visa Lottery:</strong> Competitive process with limited spots but potentially faster processing if selected.</li>
      </ul>

      <h3 className="text-xl font-semibold">USA Green Card Visa Fees</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Family-based Green Card:</strong>
          <ul className="ml-5 list-disc space-y-1">
            <li>Form I-130 Filing Fee: $535</li>
            <li>Form I-485 Adjustment of Status: $1,140 (adults)</li>
            <li>Biometric Fee: $85 (if applicable)</li>
          </ul>
        </li>
        <li><strong>Employment-based Green Card:</strong>
          <ul className="ml-5 list-disc space-y-1">
            <li>Form I-140 Filing Fee: $700</li>
            <li>Form I-485 Adjustment of Status: $1,140 (adults)</li>
            <li>Biometric Fee: $85 (if applicable)</li>
          </ul>
        </li>
        <li><strong>Diversity Visa Lottery:</strong>
          <ul className="ml-5 list-disc space-y-1">
            <li>No fee to enter</li>
            <li>Winners pay processing fees post-selection</li>
          </ul>
        </li>
      </ul>
      <p>
        Additional charges may apply for medical exams, translations, and supporting documents. <span className="text-orange-600 font-semibold">VJC Overseas</span> ensures clarity and transparency throughout the process.
      </p>

      <h3 className="text-xl font-semibold">How <span className="text-orange-600 font-semibold">VJC Overseas</span> Can Help You</h3>
      <p>
        At <span className="text-orange-600 font-semibold">VJC Overseas</span>, we are committed to helping you achieve your American dream. Our experienced consultants will guide you through the Green Card application process — from eligibility checks to accurate paperwork submission. We provide end-to-end personalized support.
      </p>

      <h3 className="text-xl font-semibold">Why Choose <span className="text-orange-600 font-semibold">VJC Overseas</span>?</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Expert legal advice and step-by-step guidance</li>
        <li>Comprehensive assistance for all Green Card categories</li>
        <li>Timely processing and regular updates</li>
        <li>Tailored services to match your profile</li>
      </ul>

      <h3 className="text-xl font-semibold">Start Your Green Card Journey Today</h3>
      <p>
        Don’t let your dream of living and working in the United States remain unfulfilled. <span className="text-orange-600 font-semibold">Contact VJC Overseas</span> today to begin your Green Card application. Our team offers expert advice, simplifies the process, and maximizes your chances of success.
      </p>

      <h3 className="text-xl font-semibold">Contact Us</h3>
      <p>
        📞 <strong>+91-9160449000</strong><br />
        🌐 <strong>www.vjcoverseas.com</strong>
      </p>

      <p className="text-sm text-gray-600 italic">
        *Visa regulations and fees are subject to change. Please verify with official U.S. immigration authorities or consult <span className="text-orange-600">VJC Overseas</span>.
      </p>
    </motion.div>
  );
};

export default UsaGreenCard;
