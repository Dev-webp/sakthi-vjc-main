import React from 'react';
import Image from 'next/image';
const StudyInItaly = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Italy - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
      <div className="w-full md:w-2/3">
      <p className="mb-6">
        Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in making your dream of studying in Italy come true. Italy, renowned for its rich history, culture, and exceptional education system, offers a world-class education experience that attracts students globally.
      </p>
       </div>
               <div className="w-full md:w-1/3">
                 <Image
                   src="/study-in-itlay.webp"
                   alt="Study in Germany"
                   width={500}
                   height={500}
                  
                 />
               </div>
             </div>
      <h2 className="text-xl font-semibold mt-2 mb-2">Why Study in Italy?</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Quality Education:</strong> Italian universities consistently rank among the top in the world.</li>
        <li><strong>Cultural Heritage:</strong> Immerse yourself in Italy’s rich history, art, and architecture.</li>
        <li><strong>Affordable Tuition Fees:</strong> Italy offers a more budget-friendly education compared to other Western countries.</li>
        <li><strong>Scholarships & Financial Aid:</strong> Numerous scholarships make studying in Italy accessible for international students.</li>
        <li><strong>International Career Opportunities:</strong> Studying in Italy opens doors to global careers.</li>
        <li><strong>Vibrant Student Life:</strong> Enjoy world-famous cuisine, beautiful landscapes, and an inspiring environment.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Top Italian Universities & Colleges</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>University of Bologna:</strong> The world’s oldest university, offering a range of programs.</li>
        <li><strong>Sapienza University of Rome:</strong> A leading university for engineering, economics, and medicine.</li>
        <li><strong>Politecnico di Milano:</strong> Renowned for engineering, architecture, and design.</li>
        <li><strong>University of Padua:</strong> A prestigious institution known for scientific research.</li>
        <li><strong>Bocconi University:</strong> A top-ranked university for business, economics, and management.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Tuition Fees</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Undergraduate Programs:</strong> €1,000 - €4,000 per year</li>
        <li><strong>Postgraduate Programs:</strong> €1,500 - €4,500 per year</li>
        <li><strong>Ph.D. Programs:</strong> €2,000 - €5,000 per year</li>
        <li><strong>Language Courses:</strong> €300 - €1,000 per semester</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Living Expenses</h2>
      <p className="leading-relaxed mb-4">
        Estimated cost of living in Italy ranges from €700 to €1,000 per month, covering accommodation, food, and transportation.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Scholarships & Financial Aid</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Regional Scholarships</li>
        <li>Government Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>Erasmus+ Scholarships (for EU students)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Personalized Counseling</li>
        <li>Application Assistance</li>
        <li>Visa Support</li>
        <li>Pre-Departure Guidance</li>
        <li>Post-Arrival Support</li>
        <li>Career Guidance</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Get Started Today!</h2>
      <p className="leading-relaxed">
        Ready to study in Italy? <span className="text-orange-500">VJC Overseas</span> is here to guide you. Contact us today to learn more about study opportunities in Italy, available scholarships, and how we can help you achieve your academic goals.
      </p>
    </div>
  );
};

export default StudyInItaly;
