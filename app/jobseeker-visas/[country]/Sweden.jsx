import React from "react";
import Image from "next/image";
const SwedenJobseekerVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      Sweden Jobseeker Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1> {/* Image and Intro Text Side by Side */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <Image
                    src="/jobseeker-sweden.jpg"
                    alt=" germany jobseeker Guidance by VJC Overseas"
                    width={700}
                    height={400}
                    className="w-full object-cover "
                    priority
                  />
                </div>
        
                {/* Text */}
                <div className="md:w-1/2 text-justify">
                  <p className="mb-4 ">
        • Looking to jumpstart your career in one of the most innovative and
        thriving economies in Europe? Sweden, with its high quality of life,
        strong job market, and excellent work-life balance, is an ideal
        destination for skilled professionals. The Sweden Jobseeker Visa allows
        you to enter the country to search for employment, giving you the
        opportunity to explore one of the world's most welcoming job markets.
        Here’s everything you need to know about applying for the Sweden
        Jobseeker Visa with{" "}
        <span className="text-orange-500">VJC Overseas</span>.
      </p> 
      </div>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• What is the Sweden Jobseeker Visa?</strong>
      </h2>
      <p>
        • The Sweden Jobseeker Visa is designed for individuals who wish to
        come to Sweden and search for a job. With this visa, you are allowed to
        stay in Sweden for up to six months to look for a job that matches your
        qualifications. If you find employment during this time, you can then
        apply for a work permit. It is an excellent opportunity for skilled
        professionals in various fields, including technology, engineering,
        healthcare, and more.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Key Eligibility Criteria</strong>
      </h2>
      <ul>
        <li>• You must be a citizen of a non-EU/EEA country.</li>
        <li>• You need to have sufficient funds to support yourself.</li>
        <li>• Proof of qualifications and skills relevant to the job you are seeking.</li>
        <li>• Health insurance coverage for the duration of your stay in Sweden.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Sweden Jobseeker Visa – Application Process</strong>
      </h2>
      <ol>
        <li>• Gather Documents: Prepare your passport, proof of funds, health insurance, and qualifications.</li>
        <li>• Submit Application: Apply online or at the nearest Swedish consulate or embassy.</li>
        <li>• Wait for Processing: Processing time is typically 2 to 4 weeks.</li>
        <li>• Receive Visa Decision: If approved, you can start planning your trip.</li>
      </ol>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Living Expenses and Cost of Living in Sweden</strong>
      </h2>
      <ul>
        <li>• Rent: SEK 10,000 - SEK 15,000 per month in city centers.</li>
        <li>• Groceries: SEK 2,000 - SEK 3,500 per month.</li>
        <li>• Utilities: Around SEK 800 - SEK 1,500.</li>
        <li>• Transportation: SEK 900 - SEK 1,200 per month.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Sweden Lifestyle</strong>
      </h2>
      <ul>
        <li>• Work-life Balance: Shorter work weeks, flexible hours, and ample vacation time.</li>
        <li>• Outdoor Activities: Hiking, skiing, and cycling in beautiful nature.</li>
        <li>• Social Welfare: Comprehensive healthcare, education, and parental leave.</li>
        <li>• Cultural Life: Rich arts scene, museums, and sustainable living.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Sweden Jobseeker Visa Fees</strong>
      </h2>
      <p>
        • The visa application fee ranges from SEK 1,500 to SEK 2,000 (USD 140 - USD 190). Fees may vary, so check the latest updates with{" "}
        <span className="text-orange-500">VJC Overseas</span>.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Processing Time</strong>
      </h2>
      <p>
        • Processing usually takes between 2 to 4 weeks, but it may vary depending on application volume and circumstances.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">
        <strong>• Why Choose <span className="text-orange-500">VJC Overseas</span>?</strong>
      </h2>
      <p>
        • Navigating the visa process can be complex, but with{" "}
        <span className="text-orange-500">VJC Overseas</span>, you can rely on
        our expertise for a smooth application process. We assist with gathering
        documents, submitting applications, and guiding you every step of the
        way.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">
        <strong>• Ready to Start Your Career in Sweden?</strong>
      </h2>
      <p>
        • Contact <span className="text-orange-500">VJC Overseas</span> today,
        and let us help you unlock the door to a brighter professional future in
        one of the world’s most dynamic countries.
      </p>

      <p>
        • <strong>Disclaimer:</strong> Visa requirements and fees may change.
        Consult with <span className="text-orange-500">VJC Overseas</span> for
        the latest information.
      </p>
    </div>
  );
};

export default SwedenJobseekerVisa;
