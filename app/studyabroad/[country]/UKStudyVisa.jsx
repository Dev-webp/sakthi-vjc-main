import React from "react";
import Image from 'next/image';
const UKStudyGuide = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                 <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                Study in the UK - <span className="text-orange-500">&nbsp;VJC Overseas</span>
                 </h1>
      <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-[45%]  mt-8 h-full">
        <div className="relative w-full h-full min-h-[300px] md:min-h-[200px]">
          <Image
            src="/study-in-uk.jpg" // Make sure this exists inside /public
            alt="Study in UK"
            fill
            className=" object-cover"
            sizes="(max-width: 698px) 100vw, 45vw"
          />
        </div>
      </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full">
          <p className="mb-2">
            The UK has long been a favourite destination for international students seeking world-class education, cultural diversity, and outstanding career opportunities. With its rich history, vibrant cities, and renowned institutions, it’s no wonder that the UK remains one of the top choices for students worldwide. If you’re considering studying in the UK, this guide provides an overview of the UK study visa process, some top universities, their fee structures, and the admission process to help you navigate your journey from application to graduation.
          </p>
           
        </div>
      </div>
      {/* Visa Section */}
      <h2 className="text-xl font-bold text-black mt-4 mb-2">UK Study Visa: An Overview</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Choose Your Course and University: You must be accepted into a recognized UK institution and obtain a Confirmation of Acceptance for Studies (CAS).</li>    
        <li>
          Check Visa Requirements:
          <ul className="list-disc pl-6">
            <li>Unconditional offer from a UK institution</li>
            <li>Sufficient financial support for tuition and living costs</li>
            <li>Meet English language requirements (IELTS/TOEFL)</li>
          </ul>
        </li>
         
       
        <li>
          Complete Visa Application:
          <ul className="list-disc pl-6">
            <li>Valid passport</li>
            <li>Proof of CAS</li>
            <li>Proof of funds (~£1,023/month in London or £850 outside)</li>
            <li>English language test results</li>
            <li>Visa fee (~£348 for Tier 4 student visa)</li>
          </ul>
        </li>
        <li>Attend Biometrics Appointment</li>
        <li>Wait for Visa Decision (typically up to 3 weeks)</li>
        <li>Arrival in the UK: Visa is valid for the course duration plus extra time.</li>
      </ol>

      {/* Universities */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Top UK Universities and Their Fee Structure</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>University of Oxford</strong><br />Undergraduate: £26,770 – £38,010/year<br />Postgraduate: £24,000 – £45,000/year</li>
        <li><strong>University of Cambridge</strong><br />Undergraduate: £22,227 – £58,038/year<br />Postgraduate: £22,000 – £45,000/year</li>
        <li><strong>London School of Economics (LSE)</strong><br />Undergraduate: £22,000 – £31,000/year<br />Postgraduate: £24,000 – £45,000/year</li>
        <li><strong>University College London (UCL)</strong><br />Undergraduate: £20,000 – £35,000/year<br />Postgraduate: £20,000 – £50,000/year</li>
        <li><strong>University of Edinburgh</strong><br />Undergraduate: £19,000 – £34,000/year<br />Postgraduate: £21,000 – £40,000/year</li>
        <li><strong>University of Manchester</strong><br />Undergraduate: £20,000 – £33,000/year<br />Postgraduate: £22,000 – £40,000/year</li>
      </ul>

      {/* Admission Process */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Admission Process for UK Universities</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Research and Choose a Course</li>
        <li>
          Meet Entry Requirements:
          <ul className="list-disc pl-6">
            <li>Academic qualifications (A-Levels, IB, etc.)</li>
            <li>English proficiency test</li>
            <li>Portfolio (for arts)</li>
            <li>Letters of recommendation (for PG)</li>
          </ul>
        </li>
        <li>
          Application Submission:
          <ul className="list-disc pl-6">
            <li>UG: Apply via UCAS (max 5 choices)</li>
            <li>PG: Direct university application</li>
          </ul>
        </li>
        <li>Attend Interview (if required)</li>
        <li>Receive and Accept Offer Letter</li>
        <li>Apply for Student Visa (with CAS)</li>
      </ol>

      {/* Cost of Living */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Cost of Living in the UK</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>London: £1,200 – £1,800/month</li>
        <li>Outside London: £900 – £1,300/month</li>
        <li>Cost includes housing, food, transport, leisure</li>
        <li>Students can work part-time (up to 20 hrs/week)</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Conclusion</h2>
      <p className="mb-4">
        Studying in the UK offers not just an academic challenge but also an opportunity to immerse yourself in a rich cultural experience. With a well-structured visa process, world-renowned universities, and a diverse student community, the UK is an excellent choice for international students.
      </p>

      <p className="mb-4 font-semibold text-orange-500">
        At <span className="text-orange-500 font-bold">VJC Overseas</span>, we specialize in helping students navigate every step of the study abroad process—from selecting the right university to obtaining your visa and arriving in the UK. Contact us today to get started on your path to studying in the UK!
      </p>
    </div>
  );
};

export default UKStudyGuide;
