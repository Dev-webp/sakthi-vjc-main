import React from "react";
import Image from "next/image";
const NewzealandPR = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
          <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
          New-Zealand Permanent Residence Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
          </h1>
           {/* Image and Intro Text Side by Side */}
                 <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                   {/* Image */}
                   <div className="md:w-1/2 w-full">
                     <Image
                       src="/Permanent Residency in New Zealand.png"
                       alt="New Zealand permanent residence Guidance by VJC Overseas"
                       width={700}
                       height={400}
                       className="w-full object-cover "
                       priority
                     />
                   </div>
           
                   {/* Text */}
                   <div className="md:w-1/2 text-justify">
                     
      <p className="text-lg font-medium">
        Your Pathway to a New Life in New Zealand
      </p>

      <p>
        Are you looking to make New Zealand your permanent home? Whether you’re
        attracted by the stunning landscapes, the vibrant culture, or the high
        quality of life,
      </p>
       </div>
       </div>
       <p className="-mt-6"> A New Zealand Permanent Resident Visa (PR) allows you
        to live, work, and study indefinitely in this beautiful country. At{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span>, we guide you through the entire process, ensuring a smooth and
        hassle-free application. </p>
      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        What is the New Zealand Permanent Resident Visa?
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Live, work, and study in New Zealand indefinitely.</li>
        <li>Access public services, including healthcare and education.</li>
        <li>Travel freely in and out of New Zealand.</li>
        <li>Sponsor family members to join you in New Zealand.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Eligibility Criteria
      </h3>
      <ul className="list-decimal list-inside space-y-1">
        <li>
          <strong>Resident Visa Status:</strong> You must have held a New Zealand Resident Visa for at least 2 years.
        </li>
        <li>
          <strong>Good Character:</strong> You need to demonstrate that you have no significant criminal convictions.
        </li>
        <li>
          <strong>Ongoing Commitment:</strong> Show your commitment to New Zealand, such as living there and having stable employment or a business.
        </li>
        <li>
          <strong>Financial Independence:</strong> You may need to show your ability to support yourself and dependents.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Key Benefits of the New Zealand Permanent Resident Visa
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Indefinite Stay:</strong> No expiry date on your residency status once granted.</li>
        <li><strong>Unrestricted Work Rights:</strong> Freedom to work in any job or profession.</li>
        <li><strong>Access to Public Services:</strong> Eligible for the same healthcare and social services as New Zealand citizens.</li>
        <li><strong>Travel Flexibility:</strong> Travel freely without limitations.</li>
        <li><strong>Pathway to Citizenship:</strong> The final step before applying for New Zealand citizenship.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Visa Fees
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Application Fee:</strong> NZD 500 to NZD 600 (subject to change)</li>
        <li><strong>Immigration Levy:</strong> NZD 90 to NZD 150 (as per latest guidelines)</li>
        <li>Additional fees may apply for services like medical tests, police clearance, or translations.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Processing Time
      </h3>
      <p>
        Processing typically takes 4 to 6 months from submission, depending on application complexity and volume. Our experienced{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span> team ensures timely, accurate submission to avoid delays.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Why Choose <span className="text-orange-600 font-semibold">VJC Overseas</span>?
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Expert Guidance:</strong> Skilled consultants experienced in handling New Zealand PR visas.</li>
        <li><strong>Tailored Solutions:</strong> Personalized advice based on your profile.</li>
        <li><strong>Comprehensive Support:</strong> End-to-end assistance, from document collection to interviews.</li>
        <li><strong>Transparent Fees:</strong> Clear and upfront with no hidden charges.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Ready to Apply?
      </h3>
      <p>
        If you’re ready to take the next step toward securing your New Zealand Permanent Resident Visa, contact{" "}
        <span className="text-orange-600 font-semibold">VJC Overseas</span> today. Our team is ready to help you with everything from eligibility checks to final submission.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        Contact Us
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Phone:</strong> +91-9160449000</li>
        <li><strong>Email:</strong> info@vjcoverseas.com</li>
      </ul>

      <p className="text-sm text-gray-600 mt-4 italic">
        Note: Information is subject to change as per New Zealand immigration policies. Always check official sources or consult with our team for the most updated details.
      </p>
    </div>
  );
};

export default NewzealandPR;
