import React from "react";
import Image from "next/image";

const PortugalJobseekerVisa = () => {
  return (
   <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
             <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
               Portugal Jobseeker Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
             </h1>
       
             
                 <p className="mb-4 ">
  
        At <span className="text-orange-500 font-bold">VJC Overseas</span>, we’re here to guide you through the process and make your relocation to Portugal as smooth as possible.
      </p>


      <h2 className="text-2xl font-bold mt-6 mb-2">What is the Portugal Jobseeker Visa?</h2>
      <p className="mb-4">
        The Portugal Jobseeker Visa allows qualified non-EU citizens to enter Portugal with the goal of finding employment. Once you’ve secured a job, you can transition to a work visa. This visa is perfect for professionals in sectors such as IT, engineering, healthcare, tourism, and other in-demand industries.
      </p>
      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
              {/* Image and Intro Text Side by Side */}
<div className="flex flex-col md:flex-row items-center gap-6 mb-4">
  {/* Text */}
  <div className="md:w-1/2 text-justify">
    <h2 className="text-2xl font-bold mt-6 mb-2">Key Requirements</h2>
    <ul className="list-disc list-inside mb-4">
      <li>Proof of qualifications: Relevant degree or professional experience.</li>
      <li>Financial stability: Sufficient funds to support yourself.</li>
      <li>Health insurance: Valid insurance for your stay.</li>
      <li>Clean criminal record: Required background check.</li>
    </ul>
  </div>

  {/* Image */}
  <div className="md:w-1/2 w-full">
    <Image
      src="/Portugal-Job-Seeker-Visa-2024.jpg"
      alt="germany jobseeker Guidance by VJC Overseas"
      width={700}
      height={400}
      className="w-full object-cover"
      priority
    />
  </div>
</div>

      </div>
      <h2 className="text-xl font-bold mt-4 mb-2">Processing Time</h2>
      <p className="mb-4">The average processing time is 60 to 90 days.</p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Visa Fees</h2>
      <p className="mb-4">The application fee ranges from €90 to €150.</p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Living Expenses in Portugal</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Accommodation: €400 to €1,500/month.</li>
        <li>Food: €200 to €400/month.</li>
        <li>Transport: €35 to €50/month.</li>
        <li>Utilities: €100 to €150/month.</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Why Choose Portugal?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Great work-life balance.</li>
        <li>Thriving job market in IT, healthcare, and tourism.</li>
        <li>Beautiful weather and cultural richness.</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Ready to Begin Your Journey?</h2>
      <p className="mb-4">
        Let <span className="text-orange-500 font-bold">VJC Overseas</span> assist you with every aspect of the application process, ensuring a smooth transition to your new career in Portugal.
      </p>
      <p className="font-bold text-lg">Contact us today to start your journey!</p>
    </div>
  );
};

export default PortugalJobseekerVisa;