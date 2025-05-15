import React from "react";
import Image from "next/image";

const AustriaJobseekerVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      Austria Jobseeker Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>
      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/austria-joobseeker.jpg"
            alt="canada permanent residence Guidance by VJC Overseas"
            width={700}
            height={400}
            className="w-full object-cover "
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-justify text-lg leading-relaxed">
  <p className="mb-4">
    Are you dreaming of working in Austria, one of Europe's most dynamic and thriving job markets? With its robust economy, high quality of life, and a thriving work culture, Austria offers exceptional opportunities for skilled professionals.
  </p>
   </div>
      </div>
      <p className="text-xl text-blue-500  font-bold mt-6 mb-4 leading-relaxed">
    If you’re looking to take the next step in your career abroad, the Austria Jobseeker Visa is your ideal path. At{" "}
    <span className="text-orange-500">VJC Overseas</span>, we specialize in making your dream of working in Austria a reality. As the best Austria Jobseeker Consultants in India, Hyderabad, and Bengaluru, we provide expert guidance and support throughout your journey to Austria.
  </p>
      <h2 className="text-xl font-bold mt-6 mb-4 leading-relaxed">
        Why Choose the Austria Jobseeker Visa?
      </h2>
      <p className="text-lg leading-relaxed">The Austria Jobseeker Visa allows highly skilled professionals to come to Austria and search for employment...</p>

      <h2 className="text-xl font-bold mt-6 mb-4 leading-relaxed">
        What Sets <span className="text-orange-500">VJC Overseas</span> Apart as the Best Austria Jobseeker Consultants?
      </h2>
      <ul className="list-disc pl-8 text-lg leading-relaxed">
        <li><strong>Expert Guidance:</strong> Our consultants are highly trained...</li>
        <li><strong>Customized Solutions:</strong> Every individual’s career journey is different...</li>
        <li><strong>Proven Track Record:</strong> With years of experience...</li>
        <li><strong>End-to-End Support:</strong> From helping you gather documents...</li>
        <li><strong>Best Austria Jobseeker Consultants in India:</strong> We are proud to be considered the best...</li>
        <li><strong>Success Stories:</strong> Our clients' success stories speak for themselves...</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4 leading-relaxed">
        The Austria Jobseeker Visa Process: Simplified by <span className="text-orange-500">VJC Overseas</span>
      </h2>
      <ol className="list-decimal pl-8 space-y-2 text-lg leading-relaxed">
        <li><strong>Eligibility Assessment:</strong> We start by assessing your profile...</li>
        <li><strong>Document Preparation:</strong> Our consultants will guide you...</li>
        <li><strong>Visa Application Submission:</strong> We assist you with submitting your application...</li>
        <li><strong>Post-Visa Services:</strong> Once your visa is approved, we provide continued support...</li>
      </ol>

      <h2 className="text-xl font-bold mt-6 mb-4 leading-relaxed">
        Locations We Serve: Best Austria Jobseeker Consultants in Hyderabad and Bengaluru
      </h2>
      <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
        <li><strong>Best Austria Jobseeker Consultants in Hyderabad:</strong> Located in the heart of Hyderabad...</li>
        <li><strong>Best Austria Jobseeker Consultants in Bengaluru:</strong> Bengaluru, often referred to as the Silicon Valley of India...</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4 leading-relaxed">
        Ready to Take the Leap?
      </h2>
      <p className="text-lg leading-relaxed">
        The Austria Jobseeker Visa is your first step towards building a successful career in one of Europe’s leading countries. Let{" "}
        <span className="text-orange-500">VJC Overseas</span>, the best Austria Jobseeker Consultants in India, Hyderabad, and Bengaluru, guide you through the entire process and ensure your visa application is successful.
      </p>

      <p className="text-lg leading-relaxed"><strong>Contact us today</strong> to schedule a consultation and take the first step toward a brighter future in Austria! Your dream career is just a visa away with{" "}
        <span className="text-orange-500">VJC Overseas</span>.
      </p>
    </div>
  );
};

export default AustriaJobseekerVisa;
