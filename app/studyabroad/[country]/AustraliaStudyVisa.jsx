import React from "react";
import Image from "next/image";

const AustraliaStudentVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Australia - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/Australia-Study-Visa (1).jpg"
            alt="Australian Student Visa Guidance by VJC Overseas"
            width={700}
            height={300}
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-justify">
          <p className="mb-4">
            Australia has long been a popular destination for international students, offering world-class education, diverse cultural experiences, and a safe environment to study and live. Whether you're planning to pursue undergraduate, postgraduate, or vocational courses, Australia provides an array of high-quality academic opportunities at competitive tuition rates. At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we help you navigate the process of obtaining an Australian Study Visa and finding universities with affordable fees and strong global rankings.
          </p>
        </div>
      </div>

      {/* Why Choose Australia */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Why Choose Australia for Higher Education?</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>High-Quality Education:</strong> World-class universities with cutting-edge programs and strong global rankings.</li>
        <li><strong>Cultural Diversity:</strong> A multicultural environment offering a welcoming atmosphere for international students.</li>
        <li><strong>Post-Study Work Opportunities:</strong> Subclass 485 visa allows graduates to gain work experience in Australia.</li>
        <li><strong>Affordable Tuition Fees:</strong> Competitive tuition with available scholarships for international students.</li>
      </ul>

      {/* Top Universities */}
      <h2 id="top-universities" className="text-xl md:text-xl font-semibold mb-2 mt-4">Top Australian Universities with Low Tuition Fees & High Rankings</h2>
      <ol className="list-decimal list-inside space-y-4 mb-6">
        {[
          {
            name: "University of Southern Queensland (USQ)",
            rank: "Top 600 globally (QS World University Rankings)",
            fees: "Approx. AUD 22,000 - 30,000 per year",
            programs: "Engineering, Business, Health Sciences, Arts & Education",
            highlights: "Strong support for international students and flexible learning options.",
          },
          {
            name: "University of Tasmania (UTAS)",
            rank: "Top 300 globally",
            fees: "Approx. AUD 25,000 - 35,000 per year",
            programs: "Marine and Environmental Science, Arts, Business, Law",
            highlights: "Strong research opportunities and a close-knit community.",
          },
          {
            name: "Griffith University",
            rank: "Top 300 globally",
            fees: "Approx. AUD 24,000 - 33,000 per year",
            programs: "Arts, Education, Business, Engineering, Environmental Sciences",
            highlights: "Innovative research and high student satisfaction.",
          },
          {
            name: "La Trobe University",
            rank: "Top 400 globally",
            fees: "Approx. AUD 23,000 - 32,000 per year",
            programs: "Health Sciences, Education, Business, Computer Science, Arts",
            highlights: "Flexible study options and focus on employability.",
          },
          {
            name: "Charles Darwin University (CDU)",
            rank: "Top 600 globally",
            fees: "Approx. AUD 21,000 - 30,000 per year",
            programs: "Engineering, Education, Environmental Science, Business",
            highlights: "Affordable tuition, practical training, Indigenous education support.",
          },
        ].map((uni, i) => (
          <li key={i}>
            <strong>{uni.name}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Rank: {uni.rank}</li>
              <li>Tuition Fees: {uni.fees}</li>
              <li>Programs: {uni.programs}</li>
              <li>Highlights: {uni.highlights}</li>
            </ul>
          </li>
        ))}
      </ol>

      {/* Document Checklist */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Document Checklist for Australian Study Visa</h2>
      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>Valid Passport</li>
        <li>Confirmation of Enrolment (CoE)</li>
        <li>Financial Evidence</li>
        <li>Genuine Temporary Entrant (GTE) Statement</li>
        <li>English Proficiency Test Scores</li>
        <li>Academic Transcripts and Certificates</li>
        <li>Health Insurance (OSHC)</li>
        <li>Police Clearance</li>
        <li>Visa Application Fee (Approx. AUD 630)</li>
      </ol>

      {/* Processing Time */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Processing Time for Australian Study Visa</h2>
      <p className="mb-6">Typically 4 to 6 weeks. Apply 3–4 months before your course begins to avoid delays.</p>

      {/* Steps to Apply */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Steps to Apply for Your Australian Study Visa</h2>
      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>Choose a Course and University</li>
        <li>Secure Admission (Get CoE)</li>
        <li>Prepare Documents</li>
        <li>Submit Visa Application Online</li>
        <li>Attend Interview (if required)</li>
        <li>Wait for Visa Decision</li>
      </ol>

      {/* Why VJC Overseas */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <p className="mb-4">
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we are committed to making your Australian study journey smooth and hassle-free. From selecting the right course to visa processing, we provide personalized guidance at every step. Our team of experts is well-versed with the latest regulations, scholarships, and opportunities in Australian education.
      </p>

      <p className="font-semibold mb-6">
        Let us help you turn your dream of studying in Australia into a reality!
        <br />Contact us today to start your application process or to get more information about affordable study options in Australia.
      </p>

      
    </div>
  );
};

export default AustraliaStudentVisa;
