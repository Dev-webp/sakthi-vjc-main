import React from "react";
import Image from "next/image";
const StudyInDubai = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
    {/* Heading */}
    <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-4 text-center whitespace-nowrap">
      Study in Dubai - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>
{/* Image and Intro Text Side by Side */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              {/* Image */}
              <div className="mt-8 md:w-1/2 w-full">
                <Image
                  src="/study-in-dubai.webp"
                  alt="Canada Student Visa"
                  width={600}
                  height={400}
                  className=" w-full object-cover"
                />
              </div>
      
              {/* Text */}
              <div className="md:w-1/2 mt-8 text-justify">
                <p className="mb-4">
        Are you considering studying abroad? Dubai, the hub of global education, is calling you! With world-class
        universities, a vibrant multicultural environment, and limitless opportunities, Dubai is the ideal destination
        for international students. <span className="text-orange-500">VJC Overseas</span> is here to guide you through
        every step of your academic journey in this thriving city.
      </p>
      </div>
     </div>
      <h2 className="text-xl font-semibold mb-2 mt-4">Why Study in Dubai?</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>World-Class Education:</strong> Dubai is home to prestigious universities such as the University of Wollongong in Dubai, the American University in Dubai, and Dubai University of Science and Technology.</li>
        <li><strong>International Recognition:</strong> Degrees awarded by Dubai’s universities are globally recognized, offering you ample career opportunities worldwide.</li>
        <li><strong>Cultural Diversity:</strong> Study alongside students from various nationalities, experiencing the best of both Eastern and Western cultures.</li>
        <li><strong>Thriving Job Market:</strong> Dubai’s growing economy offers abundant job opportunities, internships, and hands-on learning experiences for students.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Universities and Colleges in Dubai</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>University of Wollongong in Dubai (UOWD):</strong> Offers internationally recognized degrees in fields like business, engineering, and IT.</li>
        <li><strong>American University in Dubai (AUD):</strong> Known for its diverse range of academic programs and globally recognized American-style education.</li>
        <li><strong>Hult International Business School Dubai:</strong> A leading business school offering a dynamic MBA program and business courses.</li>
        <li><strong>University of Dubai:</strong> Offers a wide range of programs in business, IT, law, and engineering.</li>
        <li><strong>Dubai Medical College:</strong> The first private medical school in the UAE, providing top-notch medical education.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">College and University Fees in Dubai</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Undergraduate Programs:</strong> Fees typically range from AED 30,000 to AED 80,000 per year, depending on the course and university.</li>
        <li><strong>Postgraduate Programs:</strong> Fees for master's programs range from AED 40,000 to AED 100,000 per year.</li>
        <li><strong>Doctoral Programs:</strong> Doctoral program fees can vary, usually between AED 70,000 to AED 150,000 per year.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Living Costs in Dubai</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Accommodation:</strong> Rent for a student apartment or shared accommodation can range from AED 2,500 to AED 6,000 per month.</li>
        <li><strong>Food:</strong> Monthly food expenses are approximately AED 1,000 to AED 1,500.</li>
        <li><strong>Transportation:</strong> Public transportation in Dubai is affordable, with a monthly metro pass costing around AED 300.</li>
        <li><strong>Miscellaneous:</strong> Entertainment and leisure activities may cost an additional AED 1,000 per month.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Work Opportunities for International Students in Dubai</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Part-Time Jobs:</strong> Students can work up to 20 hours per week during term time and full-time during holidays.</li>
        <li><strong>Internships:</strong> Many universities have partnerships with leading companies in Dubai, offering students the chance to gain industry experience.</li>
        <li><strong>Post-Graduation Employment:</strong> Dubai has a rapidly expanding job market with opportunities in various sectors.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Benefits of Studying in Dubai</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Global Networking Opportunities:</strong> Connect with students from all over the world.</li>
        <li><strong>High Quality of Life:</strong> Safe environment, modern infrastructure, and excellent healthcare.</li>
        <li><strong>Tax-Free Income:</strong> Maximize your earnings while studying and working.</li>
        <li><strong>Cultural Experience:</strong> Experience diverse cultures, cuisines, and traditions.</li>
        <li><strong>Visa Benefits:</strong> Student-friendly visa policies make it easier to study in Dubai.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Why Choose <span className="text-orange-500">VJC Overseas</span>?
      </h2>
      <p className="text-justify mb-2 mt-4">
        At <span className="text-orange-500">VJC Overseas</span>, we are committed to helping you achieve your academic
        and professional dreams in Dubai. Our experienced consultants will guide you through every step, from selecting
        the right university to managing your visa and accommodation.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Services We Offer:</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>University and Program Selection</li>
        <li>Visa Guidance and Application</li>
        <li>Accommodation Assistance</li>
        <li>Post-Graduation Career Counseling</li>
        <li>Cultural Integration Support</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
      <p className="text-justify">
        Ready to begin your journey in Dubai? Reach out to{" "}
        <span className="text-orange-500">VJC Overseas</span> today and let us help you find the perfect university and
        program for your future success.
      </p>
    </div>
  );
};

export default StudyInDubai;
