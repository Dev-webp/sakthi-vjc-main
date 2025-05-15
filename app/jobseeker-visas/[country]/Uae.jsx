import React from "react";
import Image from "next/image";

const UAEJobseekerVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-bold">
          UAE Jobseeker Visa - <span className="text-orange-500">VJC Overseas</span>
        </h1>
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <Image
            src="/uae333.jpg" // Replace with your actual image path
            alt="UAE Flag"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <p className="mb-5">
        At <span className="text-orange-500">VJC Overseas</span>, we understand that embarking on a career journey in the UAE
        is an exciting and life-changing opportunity. With its thriving economy,
        world-class infrastructure, and vibrant culture, the UAE offers a dynamic
        job market for professionals from all over the world. The UAE Jobseeker Visa
        is designed to provide talented individuals with the flexibility to explore
        career prospects within the UAE before securing a full-time position.
      </p>

      <h2 className="font-bold mt-8">What is the UAE Jobseeker Visa?</h2>
      <p className="mb-5">
        The UAE Jobseeker Visa allows qualified professionals to enter the UAE and
        look for employment. Unlike a traditional work visa, this visa does not
        require a job offer in advance, offering you the freedom to explore different
        opportunities, attend interviews, and network with potential employers.
      </p>

      <h2 className="font-bold mt-8">Benefits of the UAE Jobseeker Visa</h2>
      <ul className="mb-5 list-disc list-inside">
        <li>Flexibility: Enter the UAE without the need for a job offer in hand.</li>
        <li>Access to Employment: Search for job opportunities, attend interviews, and explore the job market.</li>
        <li>Shorter Processing Times: Quickly obtain your visa and get started on your career search.</li>
        <li>Stay in the UAE: Live and work in the UAE while you seek permanent employment.</li>
      </ul>

      <h2 className="font-bold mt-8">UAE Jobseeker Visa – Processing Time</h2>
      <p className="mb-5">
        One of the key advantages of the UAE Jobseeker Visa is the relatively quick
        processing time. Typically, the processing time is between 5 to 10 working days,
        depending on the type of application and the applicant’s profile.
      </p>

      <h2 className="font-bold mt-8">Visa Fees</h2>
      <ul className="mb-5 list-disc list-inside">
        <li>30-day Jobseeker Visa: AED 1,200 to AED 1,500</li>
        <li>60-day Jobseeker Visa: AED 2,000 to AED 2,500</li>
        <li>90-day Jobseeker Visa: AED 3,000 to AED 3,500</li>
      </ul>
      <p className="mb-8">Additional processing fees, medical checks, and health insurance may apply.</p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="md:w-1/2 text-justify">
          <h2 className="font-bold mt-8">Living Expenses in the UAE</h2>

          <h3 className="font-bold mt-5">Accommodation</h3>
          <ul className="list-disc list-inside">
            <li>1-Bedroom Apartment in City Centre: AED 3,000 to AED 6,000/month</li>
            <li>1-Bedroom Apartment Outside City Center: AED 2,000 to AED 4,500/month</li>
          </ul>

          <h3 className="font-bold mt-5">Utilities</h3>
          <p>Electricity, water, and cooling bills: AED 300 to AED 600/month</p>

          <h3 className="font-bold mt-5">Food & Groceries</h3>
          <ul className="list-disc list-inside">
            <li>Supermarket Shopping: AED 500 to AED 1,000/month</li>
            <li>Dining Out (Mid-Range Restaurant): AED 50 to AED 150 for a meal for two</li>
          </ul>

          <h3 className="font-bold mt-5">Transportation</h3>
          <ul className="list-disc list-inside">
            <li>Public Transport: AED 300 to AED 500/month</li>
            <li>Car Rental: AED 1,500 to AED 3,000/month</li>
            <li>Petrol: AED 2.2 per liter (as of 2024)</li>
          </ul>

          <h2 className="font-bold mt-8">Lifestyle in the UAE</h2>
          <ul className="mb-5 list-disc list-inside">
            <li>World-Class Shopping and Entertainment</li>
            <li>Cultural Diversity</li>
            <li>Excellent Healthcare</li>
            <li>Safety and Security</li>
          </ul>

          <h2 className="font-bold mt-8">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
          <p>
            At <span className="text-orange-500">VJC Overseas</span>, we are committed to helping you navigate the UAE Jobseeker Visa process smoothly and efficiently.
          </p>

          <h2 className="font-bold mt-8">Ready to start your journey?</h2>
          <p>
            Contact us today for a free consultation and begin your path to a new career in the UAE!
          </p>
        </div>

        <div className="md:w-1/2 w-full -mt-78">
          <Image
            src="/UAE-Job-Seeker-Visa.jpg"
            alt="UAE jobseeker Guidance by VJC Overseas"
            width={700}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default UAEJobseekerVisa;
