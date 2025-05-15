import React from "react";
import Image from 'next/image';
const StudyInSingapore = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                 <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                Study in the Singapore - <span className="text-orange-500">&nbsp;VJC Overseas</span>
                 </h1>
                 <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                 <div className="w-full md:w-2/3">
      <p>
        Are you looking to pursue higher education in one of the most prestigious educational hubs of Asia? Welcome to <span className="text-orange-500">VJC Overseas</span>! We specialize in providing expert guidance and assistance to students who aspire to study in Singapore, home to world-class universities and colleges. With our professional advice and support, you can unlock a successful academic journey in Singapore’s thriving educational landscape.
      </p>
      
      </div>
      <div className="w-full md:w-1/3">
                       <Image
                         src="/study-in-singapore.webp"
                         alt="Study in Singapore"
                         width={500}
                         height={700}
                        
                       />
                     </div>
                   </div>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Why Study in Singapore?</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>World-Class Universities & Colleges:</strong> Home to top-ranked institutions such as National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU), and Singapore University of Technology and Design (SUTD).
        </li>
        <li>
          <strong>Cultural Diversity:</strong> Study in a cosmopolitan environment that attracts students from all over the world, enriching your academic and social experiences.
        </li>
        <li>
          <strong>Post-Graduation Opportunities:</strong> Singapore’s strong economy offers numerous job opportunities for international graduates.
        </li>
        <li>
          <strong>High Quality of Life:</strong> Singapore boasts a safe, clean, and efficient environment with excellent public services.
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Top Universities and Colleges in Singapore</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>National University of Singapore (NUS)</strong> - Fees: SGD 17,550 to SGD 56,000 per year (Undergraduate), SGD 26,000 to SGD 58,000 per year (Graduate)
        </li>
        <li>
          <strong>Nanyang Technological University (NTU)</strong> - Fees: SGD 18,000 to SGD 47,000 per year (Undergraduate), SGD 24,000 to SGD 48,000 per year (Graduate)
        </li>
        <li>
          <strong>Singapore Management University (SMU)</strong> - Fees: SGD 29,000 to SGD 50,000 per year (Undergraduate), SGD 30,000 to SGD 65,000 per year (Graduate)
        </li>
        <li>
          <strong>Singapore University of Technology and Design (SUTD)</strong> - Fees: SGD 18,000 to SGD 40,000 per year (Undergraduate), SGD 20,000 to SGD 50,000 per year (Graduate)
        </li>
        <li>
          <strong>INSEAD Asia Campus</strong> - Fees: SGD 115,000 (MBA Program)
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Benefits of Studying in Singapore</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>High-Quality Education</li>
        <li>Global Recognition</li>
        <li>Strategic Location</li>
        <li>Affordable Education</li>
        <li>Excellent Infrastructure</li>
        <li>Work and Stay Opportunities</li>
      </ul>
      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Popular Courses</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Business Management</li>
        <li>Engineering & Technology</li>
        <li>Computer Science & IT</li>
        <li>Finance & Banking</li>
        <li>Biological & Life Sciences</li>
      </ul>
      <h2 className="mt-4 mb-2 text-xl font-semibold">
        Study in Singapore with <span >VJC Overseas</span>
      </h2>
      <p>
        At <span className="text-orange-500">VJC Overseas</span>, we are committed to helping you achieve your dreams of studying in Singapore. Our services include:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>University & College Admissions Guidance</li>
        <li>Scholarship Assistance</li>
        <li>Visa Support</li>
        <li>Accommodation and Living Guidance</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Take the First Step Toward Your Future Today!</h2>
      <p>
        At <span className="text-orange-500">VJC Overseas</span>, we ensure that your study abroad experience in Singapore is seamless and successful. Contact us today to get started on your journey!
      </p>
    </div>
  );
};

export default StudyInSingapore;
