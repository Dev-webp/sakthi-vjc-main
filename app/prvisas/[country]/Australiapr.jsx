import React from "react";
import Image from "next/image";

const AustraliaPRVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman] text-[15px] sm:text-base">
      <h1 className="flex justify-center text-xl sm:text-2xl font-bold mb-8 text-center">
        Australia Permanent Residence Visa -{" "}
        <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/permanent-residency-visa.jpg"
            alt="australia permanent residence Guidance by VJC Overseas"
            width={400}
            height={300}
            className="w-full h-auto "
            priority
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-justify">
          <h2 className=" font-bold">
            Welcome to <span className="text-orange-500">VJC Overseas</span>,
          </h2>
          <p>
            • <b>Your trusted partner</b> in obtaining Australia Permanent Residency (PR). Whether you're looking to settle in Australia's bustling cities, picturesque coastal regions, or tranquil rural areas, 
         </p>
        </div>
      </div>
      <p className=" -mt-8">this visa offers you the opportunity to enjoy a high quality of life, lucrative job opportunities, and a stable future.</p>
      <h2 className="font-bold mt-6">• What is an Australia Permanent Residency Visa?</h2>
      <p>
        • <b>A gateway for skilled individuals</b> and families to live and work in Australia. PR holders enjoy access to healthcare, education, and a path to Australian citizenship.
      </p>
      <p>
        • <b>VJC Overseas</b> guides you through the application process, helping you meet all criteria confidently.
      </p>

      <h2 className="font-bold mt-6">• Why Choose Australia?</h2>
      <p>
        • <b>World-class living standards</b>, strong economy, diverse culture, and excellent public infrastructure make Australia a top migration destination.
      </p>

      <h2 className="font-bold mt-6">• Job Opportunities in Australia for PR Holders</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><b>Information Technology (IT):</b> Software developers, network engineers, cybersecurity experts.</li>
        <li><b>Healthcare:</b> Doctors, nurses, allied health professionals, healthcare admins.</li>
        <li><b>Engineering:</b> Civil, mechanical, electrical, and mining engineers.</li>
        <li><b>Construction & Trades:</b> Builders, electricians, plumbers, and carpenters.</li>
        <li><b>Education:</b> Teachers, trainers, education administrators.</li>
        <li><b>Business & Finance:</b> Accountants, financial analysts, HR professionals.</li>
      </ul>

      <h2 className="font-bold mt-6">• Salary Range for Australia Permanent Residents</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><b>IT:</b> AU$70,000 - AU$130,000/year</li>
        <li><b>Healthcare:</b> AU$60,000 - AU$250,000/year</li>
        <li><b>Engineering:</b> AU$75,000 - AU$150,000/year</li>
        <li><b>Construction & Trades:</b> AU$60,000 - AU$100,000/year</li>
        <li><b>Business & Finance:</b> AU$70,000 - AU$120,000/year</li>
        <li><b>Education:</b> AU$50,000 - AU$95,000/year</li>
      </ul>

      <h2 className="font-bold mt-6">• Benefits of an Australia PR Visa</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Work and live anywhere in Australia</li>
        <li>Access to Medicare and public healthcare</li>
        <li>Free or subsidized education</li>
        <li>Social security benefits</li>
        <li>Eligibility for Australian citizenship</li>
      </ul>

      <h2 className="font-bold mt-6">• How <span className="text-orange-500">VJC Overseas</span> Can Help</h2>
      <p>
        • <b>Expert advice and personal guidance</b> for skilled migration, family sponsorship, and employer-sponsored visa pathways.
      </p>
      <p>
        • We ensure <b>your application is accurate</b> and aligns with Australian immigration requirements.
      </p>

      <h2 className="font-bold mt-6">• Get Started Today</h2>
      <p>
        • Don’t wait to begin your Australian PR journey. <b>Contact VJC Overseas</b> now for a free consultation and unlock a prosperous future!
      </p>
      <p>
        • We’re here to make your <b>dreams of Australian living a reality</b> — reach out today!
      </p>
    </div>
  );
};

export default AustraliaPRVisa;
