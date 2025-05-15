import React from "react";
import Image from 'next/image';

const StudyInMalaysia = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                 <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                Study in the Singapore - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p>
        Welcome to <span className="text-orange-500">VJC Overseas</span>, your gateway to pursuing higher education in Malaysia, a rising destination known for quality education, global exposure, and affordability. Whether you're looking for top-ranked universities, vibrant student life, or cost-effective tuition, Malaysia is the perfect blend of all.
      </p>

      <h2 className="text-xl font-semibold">Why Choose to Study in Malaysia?</h2>

      <h3 className="text-xl mb-2 font-semibold mt-4">1. Top-Ranked Universities and Colleges</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>University of Malaya (UM)</strong> – The oldest and highest-ranking university in Malaysia.</li>
        <li><strong>Monash University Malaysia</strong> – A global leader in education.</li>
        <li><strong>Universiti Teknologi Malaysia (UTM)</strong> – Known for excellence in engineering and technology.</li>
        <li><strong>Taylor's University</strong> – Ranked among the top 100 universities in Asia.</li>
        <li><strong>Asia Pacific University (APU)</strong> – A leading institution for IT, design, and business programs.</li>
      </ul>

      <h3 className="text-xl mb-2 font-semibold mt-4">2. Affordable Tuition Fees</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Undergraduate Programs:</strong> MYR 12,000 – MYR 40,000 per year</li>
        <li><strong>Postgraduate Programs:</strong> MYR 20,000 – MYR 45,000 per year</li>
        <li><strong>Diploma Programs:</strong> MYR 10,000 – MYR 15,000 per year</li>
      </ul>

      <h3 className="text-xl mb-2 font-semibold mt-4">3. High-Quality Education with International Recognition</h3>
      <p>
        Many universities in Malaysia offer internationally recognized degrees through collaborations with institutions from the UK, Australia, and the US, ensuring global mobility and career prospects.
      </p>

      <h2 className="text-xl mb-2 font-semibold mt-4">Top Courses to Study in Malaysia</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Engineering and Technology:</strong> Civil Engineering, Computer Science, AI, Software Engineering</li>
        <li><strong>Business and Management:</strong> Marketing, Finance, International Business</li>
        <li><strong>Medical and Health Sciences:</strong> Medicine, Pharmacy, Nursing</li>
        <li><strong>Law:</strong> LLB, Corporate Law, International Law</li>
        <li><strong>Arts and Humanities:</strong> Psychology, Social Sciences, History</li>
        <li><strong>Design and Creative Arts:</strong> Graphic Design, Animation, Film Production</li>
      </ul>
                                     <Image
                                      src="/study-in-malaysia.webp"
                                      alt="Study in Singapore"
                                      width={500}
                                      height={600}
                                     
                                    />
      <h2 className="text-xl mb-2 font-semibold mt-4">Cost of Living in Malaysia</h2>
      <p>
        Malaysia is known for its low cost of living compared to Western countries. Students can expect monthly expenses to range between MYR 1,200 to MYR 2,500, including accommodation, food, transportation, and leisure.
      </p>

      <h2 className="text-xl mb-2 font-semibold mt-4">Benefits of Studying in Malaysia with <span className="text-orange-500">VJC Overseas</span></h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Expert Guidance:</strong> End-to-end consultation for students.</li>
        <li><strong>Visa Assistance:</strong> Hassle-free visa processing.</li>
        <li><strong>University Placement:</strong> Matching students with the right programs.</li>
        <li><strong>Pre-Departure and On-Arrival Support:</strong> Flight bookings, accommodation, and on-ground assistance.</li>
        <li><strong>Scholarships and Financial Aid:</strong> Assistance in securing scholarships for eligible students.</li>
      </ul>

      <h2 className="textxl mb-2 font-semibold mt-4">Start Your Journey to Study in Malaysia with <span className="text-orange-500">VJC Overseas</span></h2>
      <p>
        Let <span className="text-orange-500">VJC Overseas</span> be your trusted partner in navigating your academic journey in Malaysia. Contact us today and take the first step toward a bright and promising future!
      </p>
    </div>
  );
};

export default StudyInMalaysia;
