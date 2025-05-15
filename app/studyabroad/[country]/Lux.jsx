import React from 'react';
import Image from 'next/image';

const StudyInLuxembourg = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Luxembourg - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p className="mb-6">
        Luxembourg, a small yet dynamic country at the heart of Europe, offers world-class education, a rich cultural heritage,
        and unique work opportunities that make it a top destination for international students. Studying in Luxembourg not only
        provides access to some of the best universities and colleges but also allows you to experience an unparalleled lifestyle.
      </p>
      <div className='ml-14'>
                     <Image
                        src="/study-in-luxemburg.jpg"
                        alt="Study in luxemburg"
                        width={500}
                        height={500}
                       
                      />
                      </div>
                  
      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Why Study in Luxembourg?</h2>
      <p className="mb-6">
        Luxembourg boasts a robust education system with institutions offering a wide range of programs in English, French, and German.
        With its blend of international student community and cutting-edge academic research, Luxembourg provides a conducive environment
        for personal and professional growth.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Top Colleges & Universities in Luxembourg</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li><strong>University of Luxembourg</strong> – Offers various undergraduate, graduate, and Ph.D. programs and is renowned for its research.</li>
        <li><strong>Luxembourg Institute of Science and Technology (LIST)</strong> – Specializes in IT, engineering, and innovation programs.</li>
        <li><strong>Sacred Heart University Luxembourg</strong> – Provides business administration and finance programs.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">University Fees & Financial Aid</h2>
      <p className="mb-6">
        Tuition fees for non-EU international students range from €2,000 to €6,000 per year. Scholarships such as the Luxembourg Government Scholarship are available.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Cost of Living</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li><strong>Accommodation:</strong> €500 - €1,000 per month</li>
        <li><strong>Food & Groceries:</strong> €250 - €350 per month</li>
        <li><strong>Transportation:</strong> Free for all residents</li>
        <li><strong>Miscellaneous Expenses:</strong> €150 - €250 per month</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Work Opportunities for International Students</h2>
      <p className="mb-6">
        Students can work up to 15 hours per week during the semester, earning €12-€20 per hour. Internship and post-graduation work visa options are also available.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Benefits of Studying in Luxembourg</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li><strong>Cultural Diversity:</strong> Over 170 nationalities coexist in Luxembourg.</li>
        <li><strong>Proximity to Major European Cities:</strong> Easy access to Paris, Brussels, and Frankfurt.</li>
        <li><strong>High Quality of Life:</strong> One of the safest and most stable countries.</li>
        <li><strong>Language Skills:</strong> Opportunities to learn French, German, and Luxembourgish.</li>
      </ul>
      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Popular Courses</h2>
      <ul className="list-disc list-inside mb-4">
        <li>European Law & Politics</li>
        <li>Finance & Economics</li>
        <li>Computer Science & Engineering</li>
        <li>Business Administration</li>
        <li>Data Science & AI</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Conclusion: Make Luxembourg Your Study Destination</h2>
      <p>
        Luxembourg offers an unbeatable combination of high-quality education, a strong job market, and a rich cultural experience.
        For more information on studying in Luxembourg and to explore your options, reach out to{' '}
        <span className="text-orange-500 font-semibold">VJC Overseas</span>.
      </p>
    </div>
  );
};

export default StudyInLuxembourg;
