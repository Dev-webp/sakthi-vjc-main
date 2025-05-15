import React from "react";
import Image from 'next/image';
const StudyInPhilippines = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
                 <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
                Study in the Philippines - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
      {/* Image and Intro Text Side by Side */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  src="/study-in-Philippines.webp"
                  alt="Australian Student Visa Guidance by VJC Overseas"
                  width={700}
                  height={200}
                  className="w-full object-cover rounded-lg"
                  priority
                />
              </div>
      
              {/* Text */}
              <div className="mt-8 md:w-1/2 text-justify">
      <p>
        Studying abroad is an exciting opportunity to gain a world-class education while
        experiencing a vibrant, diverse culture. The Philippines has emerged as one of the
        top destinations for international students looking for high-quality education at
        affordable prices. At <span className="text-orange-500">VJC Overseas</span>, we guide you
        through the process of studying in the Philippines, from understanding
        college/university fees to exploring the many benefits this beautiful country
        offers.
      </p>
      </div>
      </div>
      <h2 className="font-semibold text-xl mt-4 mb-2">Why Study in the Philippines?</h2>
      <p>
        The Philippines is renowned for its excellent educational system, especially in
        fields like Medicine, Nursing, Engineering, Business, and Hospitality. But what
        makes the Philippines truly special for international students is its combination
        of high-quality education, affordability, and a welcoming environment for overseas
        learners.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">1. Affordable Tuition Fees</h3>
      <p>
        One of the main reasons students choose the Philippines for their higher education
        is its affordability. Tuition fees in Philippine colleges and universities are
        significantly lower compared to other popular study destinations like the US, UK,
        or Australia.
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Undergraduate Programs: PHP 40,000 - PHP 120,000 per year ($800 - $2,400 USD).</li>
        <li>Postgraduate Programs: PHP 50,000 - PHP 150,000 per year ($1,000 - $3,000 USD).</li>
        <li>Medical Courses: PHP 200,000 - PHP 500,000 per year ($4,000 - $10,000 USD).</li>
      </ul>

      <h3 className="font-semibold text-xl mt-4 mb-2">2. Living Costs in the Philippines</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Accommodation: PHP 5,000 - PHP 15,000 per month ($100 - $300 USD).</li>
        <li>Food & Transportation: PHP 5,000 - PHP 10,000 per month ($100 - $200 USD).</li>
      </ul>

      <h2 className="font-semibold text-xl mt-4 mb-2">Top Benefits of Studying in the Philippines</h2>

      <h3 className="font-semibold text-xl mt-4 mb-2">1. High-Quality Education</h3>
      <p>
        Philippine universities and colleges are known for their excellent educational
        standards. Institutions like the University of the Philippines, Ateneo de Manila
        University, and De La Salle University provide globally recognized degrees.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">2. English Language Proficiency</h3>
      <p>
        English is one of the official languages in the Philippines, and all academic
        courses are taught in English, making it easier for international students to
        adapt.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">3. World-Class Medical Education</h3>
      <p>
        The Philippines is renowned for its medical programs, particularly in MBBS and
        nursing. Many institutions offer globally recognized degrees that allow students
        to practice medicine internationally.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">4. Cultural Diversity</h3>
      <p>
        The Philippines is a multicultural country, known for its warm hospitality and
        diverse cultural heritage. The friendly nature of Filipinos makes it easy for
        international students to feel at home.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">5. Vibrant Student Life</h3>
      <p>
        The Philippines offers an exciting student life filled with extracurricular
        activities, cultural events, and sports. Whether it’s exploring pristine beaches or
        hiking, the Philippines has it all.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">6. Pathway to Global Careers</h3>
      <p>
        Studying in the Philippines provides access to a global network of alumni and job
        opportunities in various industries worldwide.
      </p>

      <h2 className="font-semibold text-xl mt-4 mb-2">
        Key Factors to Consider When Choosing a University
      </h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Accreditation and Recognition</li>
        <li>Course Offerings</li>
        <li>Location</li>
        <li>Student Support</li>
      </ul>

      <h2 className="font-semibold text-xl mt-4 mb-2">
        Conclusion: Why <span className="text-orange-500">VJC Overseas</span> is Your Gateway
        to Studying in the Philippines
      </h2>
      <p>
        At <span className="text-orange-500">VJC Overseas</span>, we are committed to helping
        you navigate your journey to study in the Philippines. From selecting the best
        university for your academic goals to assisting with your visa process and
        accommodation, we provide personalized support every step of the way.
      </p>
      <p>
        Studying in the Philippines is an investment in your future—high-quality education,
        affordable living costs, and the opportunity to immerse yourself in a vibrant
        culture. Contact us today to learn more about how you can start your academic
        journey in the Philippines!
      </p>
    </div>
  );
};

export default StudyInPhilippines;
