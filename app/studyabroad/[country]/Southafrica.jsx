import React from 'react';
import Image from 'next/image';
const StudyInSouthAfrica = () => {
  return (
<div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                 <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                Study in the South-Africa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p>
        Are you looking to study in South Africa? <span className="text-orange-500">VJC Overseas</span> provides expert guidance to help you explore
        higher education opportunities in South Africa's top universities and colleges. Known for its diverse culture,
        world-class institutions, and affordable education, South Africa is rapidly becoming one of the most sought-after
        destinations for international students.
      </p>
      <div className="mt-4 ml-12">
                              <Image
                                 src="/africa_Study.jpg"
                                 alt="Study in Singapore"
                                 width={500}
                                 height={700}
                               />
                               </div>
      <h2 className="text-xl md-2 font-semibold mt-4">Why Study in South Africa?</h2>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        <li><strong>World-Class Education:</strong> South African universities rank among the top in the world, offering globally recognized qualifications.</li>
        <li><strong>Affordable Fees:</strong> High-quality education at a fraction of the cost compared to other countries.</li>
        <li><strong>Cultural Diversity:</strong> Experience a rich cultural heritage, with a mix of languages, traditions, and experiences.</li>
        <li><strong>Innovative Research Opportunities:</strong> Universities excel in research and innovation across various fields.</li>
        <li><strong>Post-Graduation Work Opportunities:</strong> Many institutions offer post-study work permits.</li>
      </ul>

      <h2 className="text-xl md-2 font-semibold mt-4">Top Universities in South Africa</h2>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        <li><strong>University of Cape Town (UCT):</strong> Ranked among the top 200 universities worldwide.</li>
        <li><strong>University of the Witwatersrand (Wits University):</strong> Known for research-driven programs.</li>
        <li><strong>Stellenbosch University:</strong> Renowned for its high academic standards.</li>
        <li><strong>University of Pretoria (UP):</strong> Offers a wide range of courses.</li>
        <li><strong>University of Johannesburg (UJ):</strong> Modern campus with diverse student body.</li>
      </ul>

      <h2 className="text-xl md-2 font-semibold mt-4">Fee Structure for South African Universities</h2>

      <h3 className="text-xl md-2 font-semibold mt-4">Undergraduate Fees</h3>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        <li>Tuition Fees: R40,000 – R100,000 per year</li>
        <li>Living Expenses: R60,000 – R100,000 per year</li>
        <li>Accommodation: R50,000 – R70,000 per year</li>
      </ul>

      <h3 className="text-xl md-2 font-semibold mt-4">Postgraduate Fees</h3>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        <li>Tuition Fees: R50,000 – R120,000 per year</li>
        <li>Living Expenses: R70,000 – R100,000 per year</li>
        <li>Accommodation: R55,000 – R80,000 per year</li>
      </ul>

      <h3 className="text-xl md-2 font-semibold mt-4">Additional Costs</h3>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        <li>Books and Materials: R5,000 – R10,000 annually</li>
        <li>Health Insurance: R10,000 – R15,000 per year</li>
      </ul>

      <h2 className="text-xl  md-2 font-semibold mt-4">Scholarships and Financial Aid</h2>
      <p>Many South African universities offer scholarships based on academic merit, financial need, or specific program requirements.</p>

      <h2 className="text-xl md-2 font-semibold mt-4">Benefits of Choosing <span className="text-orange-500">VJC Overseas</span></h2>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        <li><strong>Expert Guidance:</strong> Personalized counseling and university selection assistance.</li>
        <li><strong>Application Assistance:</strong> Help with the entire application process.</li>
        <li><strong>Visa Support:</strong> Guidance on obtaining a student visa.</li>
        <li><strong>Accommodation Arrangements:</strong> Assistance in finding suitable housing.</li>
        <li><strong>Post-Arrival Services:</strong> Help with settling in and adapting to student life.</li>
      </ul>

      <h2 className="text-xl md-2 font-semibold mt-4">Start Your Study Abroad Journey with <span className="text-orange-500">VJC Overseas</span></h2>
      <p>
        At <span className="text-orange-500">VJC Overseas</span>, we simplify your study abroad process, from university selection to post-arrival support.
        Contact us today for a free consultation and take the first step toward a brighter future!
      </p>
    </div>
  );
};

export default StudyInSouthAfrica;
