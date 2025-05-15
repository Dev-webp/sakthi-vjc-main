import React from "react";
import Image from "next/image";

const CanadaFS = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        Looking to work in Canada and build a brighter future? The Canada W1 Visa is your golden gateway to a world of professional growth, high living standards, and international exposure. At VJC Overseas, we specialize in helping skilled individuals like you secure a W1 Work Permit in Canada, fast-tracking your career in one of the world’s most progressive economies.
      </p>

      <h2 className="font-bold text-xl">🌟 What is a Canada W1 Visa?</h2>

      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0 my-4">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/cwp1.webp"
            alt="Canada Work Visa"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
          />
        </div>
        <p>
          The W1 Visa for Canada is a temporary work permit issued to foreign nationals who have secured employment with a Canadian company. It allows you to legally live and work in Canada for a specified period, with potential pathways to Permanent Residency (PR).
          Whether you’re a skilled professional, tradesperson, or IT expert, the W1 Visa opens up a world of high-paying opportunities in industries like:
        </p>
      </div>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Information Technology</li>
        <li>Healthcare</li>
        <li>Engineering</li>
        <li>Construction</li>
        <li>Logistics & Transportation</li>
        <li>Hospitality & Tourism</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-600">💼 Top Benefits of the Canada W1 Work Visa</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>✅ Legal Work Authorization:</strong> Work legally in Canada under employer sponsorship with full rights and protection.</li>
        <li><strong>✅ High Salary Packages:</strong> Enjoy a competitive salary scale starting from CAD $45,000 to $120,000+ annually.</li>
        <li><strong>✅ Access to World-Class Infrastructure:</strong> Live in vibrant Canadian cities with top-tier amenities.</li>
        <li><strong>✅ Family Accompaniment:</strong> Bring your spouse and children under dependent visas.</li>
        <li><strong>✅ Pathway to PR:</strong> Transition to Permanent Residency through Express Entry or PNPs.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-black">💰 Canada W1 Visa Salary Expectations (2025)</h3>
      <table className="w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Profession</th>
            <th className="border px-4 py-2 text-left">Average Salary (CAD/year)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">IT Professionals</td><td className="border px-4 py-2">$70,000 - $120,000</td></tr>
          <tr><td className="border px-4 py-2">Registered Nurses</td><td className="border px-4 py-2">$60,000 - $90,000</td></tr>
          <tr><td className="border px-4 py-2">Mechanical Engineers</td><td className="border px-4 py-2">$65,000 - $100,000</td></tr>
          <tr><td className="border px-4 py-2">Construction Workers</td><td className="border px-4 py-2">$45,000 - $65,000</td></tr>
          <tr><td className="border px-4 py-2">Chefs & Hospitality</td><td className="border px-4 py-2">$40,000 - $60,000</td></tr>
          <tr><td className="border px-4 py-2">Truck Drivers</td><td className="border px-4 py-2">$50,000 - $75,000</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">🌍 Life in Canada – A World-Class Lifestyle</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Multicultural Environment with a welcoming community</li>
        <li>Free Public Healthcare (for residents and some visa holders)</li>
        <li>World-class Education for your children</li>
        <li>Scenic Beauty with access to nature, modern cities, and cultural diversity</li>
        <li>Safe & Secure Living with one of the lowest crime rates globally</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-600">💡 Why Choose VJC Overseas for Your W1 Visa to Canada?</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>✅ Expert Visa Consultation</li>
        <li>✅ Job Search Assistance with Employer Tie-ups</li>
        <li>✅ Resume Optimization for Canadian Employers</li>
        <li>✅ Faster Processing Times</li>
        <li>✅ 100% Transparency & Success Rate</li>
      </ul>
      <p className="mb-4">We walk with you from application to arrival, ensuring a seamless journey to Canada.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-black">✈️ Ready to Take Off? Start Your Canada W1 Visa Process Today!</h3>
      <p>
        Don’t miss your chance to live and work in one of the most advanced economies in the world. Whether you’re looking for career growth, higher income, or a better quality of life, the Canada W1 Work Visa is your first step.
        <br />
        📞 <strong>Book a Free Consultation with <span className="text-orange-600">VJC Overseas</span> today</strong> and let’s bring your Canadian dream to life!
      </p>
    </div>
  );
};

export default CanadaFS;
