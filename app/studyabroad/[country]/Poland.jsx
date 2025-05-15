import React from "react";
import Image from 'next/image';
const StudyInPoland = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                     <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                    Study in the Poland - <span className="text-orange-500">&nbsp;VJC Overseas</span>
          </h1>
          {/* Image and Intro Text Side by Side */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  {/* Image */}
                  <div className="md:w-1/2 w-full">
                    <Image
                      src="/study-poland.jpg"
                      alt="Australian Student Visa Guidance by VJC Overseas"
                      width={700}
                      height={200}
                      className="w-full object-cover rounded-lg"
                      priority
                    />
                  </div>
          
                  {/* Text */}
                  <div className="mt-8 md:w-1/2 text-justify">
      <p >
        Poland, with its rich history, modern infrastructure, and outstanding educational institutions,
        has become one of the top destinations for international students seeking quality education at an
        affordable cost. With the help of <span className="text-orange-500">VJC Overseas</span>, students can easily navigate the admission
        process, understand the fees in Polish universities, and experience the many benefits of studying in Poland.
      </p>
      </div>
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Why Study in Poland?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Affordable Tuition Fees:</strong> Poland offers high-quality education at a fraction of the cost compared to other European countries.</li>
        <li><strong>High-Quality Education:</strong> Universities like University of Warsaw and Jagiellonian University are globally recognized.</li>
        <li><strong>English-Taught Programs:</strong> Many programs are available in English, making it accessible to international students.</li>
        <li><strong>Diverse Student Community:</strong> Poland attracts students from various cultures, fostering a global learning environment.</li>
        <li><strong>European Union Advantage:</strong> Graduates can work and live in other EU countries, opening global career opportunities.</li>
        <li><strong>Beautiful and Safe Environment:</strong> Poland offers a vibrant student life with an affordable cost of living.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Fees in Polish Universities</h2>
      <p>
        Understanding the tuition fees is crucial for students planning to study in Poland. Here's a general breakdown:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Undergraduate Programs:</strong> €2,000 to €6,000 per year</li>
        <li><strong>Postgraduate Programs:</strong> €3,000 to €10,000 per year</li>
        <li><strong>Doctoral Programs:</strong> €1,500 to €5,000 per year</li>
        <li><strong>Other Costs:</strong> Accommodation (€100–€700/month), Health Insurance (€50–€100/month), Application Fees (€50–€200)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Scholarships and Financial Aid</h2>
      <p>Poland offers various scholarships, including:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Polish Government Scholarships</strong>: Supporting talented international students.</li>
        <li><strong>Erasmus+</strong>: EU program offering scholarships for exchange students.</li>
        <li><strong>University-Specific Scholarships</strong>: Merit-based and need-based scholarships.</li>
      </ul>
      <div>
              <h2 className="text-xl font-semibold mt-4 mb-2 text-black">Poland Student Visa Requirements</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Valid passport</li>
                <li>Letter of acceptance from a Polish university</li>
                <li>Proof of financial means</li>
                <li>Health insurance</li>
                <li>Completed visa application & biometric photo</li>
              </ul>
            </div>
            <h2 className="text-xl font-semibold mt-4 mb-2 text-black">
        Work Opportunities for Students
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          International students in Poland can work part-time for up to 20
          hours/week during the academic year and full-time during holidays.
        </li>
        <li>
          After graduation, you can apply for a temporary residence permit to
          stay in Poland and look for a job or start a business.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <p>
        At <span className="text-orange-500">VJC Overseas</span>, we are committed to making your study abroad dreams a reality.
        From admission guidance and visa assistance to finding the right university, we provide comprehensive
        support for your educational journey in Poland.
      </p>
      <p>
        Start your journey to studying in Poland today! Contact <span className="text-orange-500">VJC Overseas</span> for personalized advice
        and guidance, and take the first step toward a brighter future.
      </p>
    </div>
  );
};

export default StudyInPoland;
