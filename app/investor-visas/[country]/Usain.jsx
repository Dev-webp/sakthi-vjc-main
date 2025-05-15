import React from "react";
import Image from "next/image";

const USAInvestorVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      USA Investor Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>
       
      <p className=" text-xl font-bold mt-4 mb-6">Introduction to the USA Investor Visa</p>
      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        {/* Image */}
        <div className="md:w-1/4 w-full">
          <Image
            src="/USBusinessVisa.webp"
            alt="canada permanent residence Guidance by VJC Overseas"
            width={200}
            height={100}
            className=""
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-3/4">
  <p className="mb-4">
        The USA offers several visa options for individuals wishing to invest in its economy, create jobs,
        and live in the United States. One of the most popular options is the{" "}
        <strong>EB-5 Immigrant Investor Visa Program</strong>. This program allows eligible foreign nationals
        to obtain a U.S. Green Card (Permanent Residency) by making a qualifying investment in a U.S. business
        that creates or preserves jobs for U.S. workers.
      </p>
     
      <p className="mt-2">
        At <span className="text-orange-500">VJC Overseas</span>, we provide expert guidance and support to investors
        navigating the complexities of the EB-5 visa process, ensuring a smooth and successful immigration journey.
      </p>
      </div>
      </div>

      <p className=" text-xl font-bold mt-4 mb-2">Key Features of the USA Investor Visa (EB-5)</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Eligibility:</strong> Available to foreign nationals and their immediate family (spouse and children under 21) who make a substantial investment.</li>
        <li><strong>Investment Requirement:</strong> $900,000 to $1.8 million, depending on the project and location.</li>
        <li><strong>Permanent Residency:</strong> Conditional Green Card for two years, converted to permanent residency upon meeting job creation criteria.</li>
        <li><strong>Processing Time:</strong> Generally 18–24 months, depending on USCIS processing times.</li>
      </ul>

      <p className=" text-xl font-bold mt-4 mb-2">USA Investor Visa Eligibility Requirements</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Investment Amount:</strong>
          <ul className="list-disc ml-6">
            <li>$1.8 million if investing outside a Targeted Employment Area (TEA).</li>
            <li>$900,000 if investing within a TEA (rural or high-unemployment areas).</li>
          </ul>
        </li>
        <li><strong>Job Creation:</strong> Must create or preserve at least 10 full-time jobs for U.S. workers.</li>
        <li><strong>At-Risk Investment:</strong> No passive financial interest; funds must be at risk.</li>
        <li><strong>Source of Funds:</strong> Must prove funds are from legal sources.</li>
        <li><strong>Active Involvement:</strong> Must have a role in management or policy formulation.</li>
      </ul>

      <p className=" text-xl font-bold mt-4 mb-2">Document Checklist for USA Investor Visa</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Proof of Identity:</strong>
          <ul className="list-disc ml-6">
            <li>Valid passport</li>
            <li>Birth certificate</li>
          </ul>
        </li>
        <li><strong>Proof of Investment Funds:</strong>
          <ul className="list-disc ml-6">
            <li>Bank statements (past 3–5 years)</li>
            <li>Tax returns, financial statements, or business records</li>
          </ul>
        </li>
        <li><strong>Investment Evidence:</strong>
          <ul className="list-disc ml-6">
            <li>Proof of investment (wire transfer receipts, business ownership documents)</li>
            <li>Business plan detailing job creation</li>
          </ul>
        </li>
      </ul>

      <p className=" text-xl font-bold mt-4 mb-2">EB-5 Processing Time</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Form I-526 Processing:</strong> 12–18 months</li>
        <li><strong>Conditional Green Card Issuance:</strong> 6–12 months</li>
        <li><strong>I-829 Petition to Remove Conditions:</strong> 12–18 months</li>
      </ul>

      <p className=" text-xl font-bold mt-4 mb-2">• Why Choose <span className="text-orange-500">VJC Overseas</span> for Your USA Investor Visa?</p>
      <ul className="list-disc list-inside space-y-1">
        <li>✔ <strong>Expert Guidance:</strong> Years of experience in EB-5 visa processing</li>
        <li>✔ <strong>Full-Service Support:</strong> Assistance from document preparation to post-visa support</li>
        <li>✔ <strong>Strong Success Track Record:</strong> Helping clients navigate the U.S. immigration system successfully</li>
        <li>✔ <strong>Comprehensive Legal Assistance:</strong> Working with trusted U.S. immigration attorneys</li>
      </ul>

      <p className=" text-xl font-bold mt-4 mb-2">• Start Your USA Investor Visa Journey Today!</p>
      <p>
        Contact us today for a personalized consultation and take the first step toward securing your U.S. residency
        through the EB-5 Investor Visa Program. Let <span className="text-orange-500">VJC Overseas</span> help you make
        your investment in the American Dream a reality!
      </p>

      <p className="text-xl mt-6 text-sm">
        • <strong>Disclaimer:</strong> The content provided above is for informational purposes only and should not be considered legal advice.
        Please consult with an immigration attorney for specific guidance on your case.
      </p>
    </div>
  );
};

export default USAInvestorVisa;
