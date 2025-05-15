import React from 'react';
import Image from 'next/image';
const StudyInFrance = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in France - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/study-in-france.png"
            alt="france Student Visa"
            width={500}
            height={300}
            className=" w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 text-justify">
      <p className="mb-6">
        Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in achieving your dream of studying in France.
        France, celebrated for its world-class education, art, and culture, offers a premium academic experience for international students.
      </p>
      </div>
      </div>
      <h2 className="text-xl font-bold mt-4 mb-2">Why Study in France?</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li><strong>World-Class Education:</strong> France is home to globally renowned institutions and research facilities.</li>
        <li><strong>Affordable Tuition Fees:</strong> Public universities offer subsidized tuition for international students.</li>
        <li><strong>Cultural & Linguistic Experience:</strong> Immerse yourself in French language, cuisine, and heritage.</li>
        <li><strong>Strong Industry Links:</strong> French institutions maintain robust ties with global industries for internships and placements.</li>
        <li><strong>Post-Study Work Opportunities:</strong> France allows international graduates to stay and work up to two years post-graduation.</li>
        <li><strong>Quality of Life:</strong> Enjoy a beautiful and vibrant lifestyle while pursuing your studies.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Top French Universities & Grandes Écoles</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li><strong>Sorbonne University:</strong> A historic and prestigious university in Paris.</li>
        <li><strong>Université PSL (Paris Sciences et Lettres):</strong> Known for innovation and academic excellence.</li>
        <li><strong>University of Grenoble Alpes:</strong> Offers strong programs in tech, business, and research.</li>
        <li><strong>HEC Paris:</strong> One of the leading business schools in Europe.</li>
        <li><strong>École Normale Supérieure:</strong> Renowned for elite academic training in humanities and sciences.</li>
      </ul>

      <h2 className="text-xl font-bold  mt-4 mb-2">Tuition Fees</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li>Public Universities (UG): €170 - €450 per year</li>
        <li>Grandes Écoles: €6,000 - €15,000 per year</li>
        <li>Private Institutions: €4,000 - €25,000 per year</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Living Expenses</h2>
      <p className="mb-6 text-justify">
        Estimated monthly cost of living in France ranges from €800 to €1,200, including accommodation, food, transportation, and other essentials.
      </p>

      <h2 className="text-xl font-bold  mt-4 mb-2">Scholarships & Financial Aid</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li>Eiffel Excellence Scholarship – covers tuition and living expenses</li>
        <li>Charpak Scholarship – specifically for Indian students</li>
        <li>Erasmus Mundus Scholarships – for joint master’s programs across Europe</li>
      </ul>

      <h2 className="text-xl font-bold  mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li>Personalized Counseling</li>
        <li>University Application Assistance</li>
        <li>Visa Process Support</li>
        <li>Pre-Departure Orientation</li>
        <li>Post-Arrival Assistance</li>
        <li>Career Counseling & Internship Guidance</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Get Started Today!</h2>
      <p className="text-justify">
        Ready to study in France? <span className="text-orange-500">VJC Overseas</span> is here to guide you every step of the way. Contact us today to explore your options, secure scholarships, and build your dream academic journey in France.
      </p>
    </div>
  );
};

export default StudyInFrance;
