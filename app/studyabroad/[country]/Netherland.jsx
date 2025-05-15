import React from "react";
import Image from 'next/image';
const StudyNetherlands = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      Study in Netherland - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>
    <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
    <div className="w-full md:w-2/3">
      <p className="text-justify mb-4">
        Are you considering pursuing higher education in the Netherlands? Known for its high academic standards, diverse cultural environment, and excellent quality of life, the Netherlands is one of the top destinations for international students. At <span className="text-orange-500">VJC Overseas</span>, we are committed to guiding you through every step of the process, from selecting the right college or university to understanding the costs and benefits of studying in this vibrant country.
      </p>
      </div>
       <div className="w-full md:w-1/3">
                <Image
                  src="/study-in-netherland.jpg"
                  alt="Study in Germany"
                  width={500}
                  height={500}
                 
                />
              </div>
            </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose the Netherlands for Higher Education?</h2>
      <ul className="list-disc ml-6 space-y-1 text-justify mb-6">
        <li><strong>High-Quality Education:</strong> Dutch universities are globally recognized for their rigorous academic standards, offering a variety of undergraduate, postgraduate, and research programs.</li>
        <li><strong>Cultural Diversity:</strong> With students from all over the world, studying in the Netherlands offers an excellent opportunity to learn in a multicultural environment.</li>
        <li><strong>Innovative and Practical Approach:</strong> Dutch education emphasizes critical thinking, teamwork, and hands-on learning, preparing students for the global job market.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Top Universities and Colleges in the Netherlands</h2>
      <ol className="list-decimal ml-6 space-y-1 mb-6 text-justify">
        <li><strong>Delft University of Technology (TU Delft)</strong> - Known for its engineering and technical programs.</li>
        <li><strong>University of Amsterdam (UvA)</strong> - Offers a wide range of courses in social sciences, humanities, and business.</li>
        <li><strong>Leiden University</strong> - Renowned for its law, humanities, and science programs.</li>
        <li><strong>Eindhoven University of Technology (TU Eindhoven)</strong> - Focused on technology and innovation.</li>
        <li><strong>Wageningen University & Research</strong> - Specializes in agricultural and environmental sciences.</li>
        <li><strong>Rotterdam School of Management, Erasmus University</strong> - One of the top business schools in Europe.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-4 mb-2">Tuition Fees in the Netherlands</h2>
      <ul className="list-disc ml-6 space-y-1 text-justify mb-6">
        <li><strong>Bachelor’s Degree:</strong> €6,000 - €15,000 per year for non-EU students</li>
        <li><strong>Master’s Degree:</strong> €8,000 - €20,000 per year for non-EU students</li>
        <li><strong>PhD Programs:</strong> Fees vary depending on the university and research program.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Living Costs and Accommodation in the Netherlands</h2>
      <ul className="list-disc ml-6 space-y-1 text-justify mb-6">
        <li><strong>Rent:</strong> €300 - €1,000 per month</li>
        <li><strong>Food and Groceries:</strong> €150 - €250 per month</li>
        <li><strong>Utilities:</strong> €100 - €150 per month</li>
        <li><strong>Transportation:</strong> €35 - €100 per month</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Work Opportunities While Studying</h2>
      <p className="text-justify mb-2">
        The Netherlands offers excellent work opportunities for international students:
      </p>
      <ul className="list-disc ml-6 space-y-1 text-justify mb-4">
        <li>Up to 16 hours per week during the academic year</li>
        <li>Full-time during the summer months (June to August)</li>
      </ul>
      <p className="text-justify mb-6">
        <strong>Post-Graduation Work Visa:</strong> After completing studies, students can apply for the orientation year (zoekjaar) residence permit to stay in the Netherlands for up to one year to find work.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Benefits of Studying in the Netherlands</h2>
      <ul className="list-disc ml-6 space-y-1 text-justify mb-6">
        <li>Quality Education</li>
        <li>International Environment</li>
        <li>Work Opportunities</li>
        <li>Affordable Tuition</li>
        <li>Strategic Location</li>
        <li>Excellent Student Life</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Conclusion</h2>
      <p className="text-justify">
        Studying in the Netherlands offers a unique opportunity to experience world-class education while enjoying a vibrant, multicultural environment. At <span className="text-orange-500">VJC Overseas</span>, we are here to help you navigate every step of your journey. Contact us today to get started!
      </p>
    </div>
  );
};

export default StudyNetherlands;
