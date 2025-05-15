import React from "react";
import Image from 'next/image';

const StudyInNorway = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                 <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                Study in the Norway - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
      <p className="mt-4 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        Norway is not only known for its breathtaking landscapes and high standard of living, but it also offers exceptional education that attracts students from all over the world. If you're considering studying abroad, Norway should be on your radar. <span style={{ color: 'orange' }}>VJC Overseas</span> specializes in helping students navigate the process of studying in Norway by providing comprehensive guidance on everything from university fees to the unique benefits of living and learning in this Scandinavian country.
      </p>
      <div className="mt-3 ml-6 mb-4">
                                                 <Image
                                                     src="/study-in-norway.jpg"
                                                     alt="Study in Singapore"
                                                     width={700}
                                                     height={600}
                                                    
                                                   />
                                                   </div>
      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Why Study in Norway?</h2>
      <ul className="list-disc pl-6 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li><strong>No Tuition Fees at Public Universities:</strong> Study at top universities without tuition costs.</li>
        <li><strong>World-Class Education and Research:</strong> Universities rank among the top 200 globally.</li>
        <li><strong>Student-Friendly Environment:</strong> Safe and inclusive study atmosphere.</li>
        <li><strong>Work While Studying:</strong> Part-time work opportunities for international students.</li>
        <li><strong>High Quality of Life:</strong> Norway is known for its sustainable and progressive society.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Cost of Studying in Norway: Fees Breakdown</h2>
      <ul className="list-disc pl-6 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li><strong>Application Fees:</strong> Most public universities do not charge application fees.</li>
        <li><strong>Living Expenses:</strong> Budget NOK 10,000–12,000 per month.</li>
        <li><strong>Accommodation:</strong> Costs range from NOK 4,000–6,000 per month.</li>
        <li><strong>Books and Materials:</strong> Annual costs between NOK 2,000–4,000.</li>
        <li><strong>Health Insurance:</strong> Required for international students.</li>
      </ul>
      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Visa & Admission Info</h2>
      <p className="mb-4">
        Non-EU/EEA students need a **student residence permit**. Requirements include an admission letter, proof of housing, and financial capability to cover living expenses (approx. NOK 137,907/year). Applications are processed by the Norwegian Directorate of Immigration (UDI).
      </p>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Work Opportunities</h2>
      <p className="mb-4">
        International students can work up to **20 hours/week** during semesters and full-time during breaks. After completing studies, students can apply for a **job seeker visa** to stay and find employment in Norway.
      </p>
      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Top Universities in Norway</h2>
      <ul className="list-disc list-inside mb-4">
        <li>University of Oslo</li>
        <li>Norwegian University of Science and Technology (NTNU)</li>
        <li>University of Bergen</li>
        <li>BI Norwegian Business School</li>
        <li>University of Tromsø – The Arctic University of Norway</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Scholarships and Financial Aid</h2>
      <p className="text-lg" style={{ fontFamily: 'Times New Roman' }}>
        There are various scholarships available for international students in Norway. Some universities offer scholarships for non-EU/EEA students, and government-sponsored programs support students from developing countries.
      </p>
      
      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Apply Now with <span style={{ color: 'orange' }}>VJC Overseas</span></h2>
      <p className="text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <span style={{ color: 'orange' }}>VJC Overseas</span> provides expert guidance and personalized support for students wishing to study in Norway. We help with university selection, applications, and settling into your new academic life.
      </p>
    </div>
  );
};

export default StudyInNorway;
