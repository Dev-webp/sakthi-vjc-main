import React from "react";
import Image from 'next/image';

const StudyInSweden = () => {
  return (
   
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      Study in Sweden - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>
    <div className="mt-3 ml-24 mb-4">
                                                     <Image
                                                         src="/study-in-sweden.png"
                                                         alt="Study in Singapore"
                                                         width={500}
                                                         height={400}
                                                        
                                                       />
                                                       </div>
      <p className="mb-6">
        Sweden is renowned for its high-quality education, innovative research, and diverse cultural experiences.
        As one of the most desirable study destinations in Europe, Sweden offers an exceptional education system
        that is both globally recognized and deeply rooted in tradition. At <span className="text-orange-500 font-semibold">VJC Overseas</span>,
        we guide you through the process of studying in Sweden—from tuition insights to uncovering key benefits of this Nordic gem.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Why Study in Sweden?</h2>

      <div className="space-y-1">
        <div>
          <h3 className="text-xl font-semibold">1. World-Class Education</h3>
          <p>
            Home to top universities like Karolinska Institute, Uppsala University, and Lund University,
            Sweden nurtures independent thinking and global competence.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2. Innovative Research & Development</h3>
          <p>
            With a legacy of Nobel Prize-level innovation, Swedish institutions promote groundbreaking research
            and industry collaboration across sectors.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">3. Multicultural & Inclusive Environment</h3>
          <p>
            Sweden celebrates diversity. Students from across the world contribute to a vibrant, welcoming academic culture.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. Sustainability & Quality of Life</h3>
          <p>
            Sustainability is central in Sweden—reflected in campus design, urban infrastructure, and everyday living.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">5. Post-Graduation Opportunities</h3>
          <p>
            Sweden’s robust job market in tech, healthcare, and business supports post-study work opportunities for international students.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-2 mt-4">Tuition Fees and Costs in Sweden</h2>

      <div className="space-y-1">
        <div>
          <h3 className="text-xl font-semibold">1. Tuition Fees</h3>
          <p>
            Non-EU/EEA students typically pay between SEK 80,000 and SEK 295,000 per year depending on the program.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2. Living Costs</h3>
          <p>
            Estimated monthly expenses range from SEK 8,000 to SEK 12,000 based on location and lifestyle.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">3. Scholarships</h3>
          <p>
            Several scholarships are available to ease the financial burden, including university-specific and Swedish Institute options.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. Financial Aid</h3>
          <p>
            While student loans for international students are limited, many manage costs through scholarships, family support, and part-time jobs.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Benefits of Studying in Sweden</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Globally recognized education system</li>
        <li>Multilingual and multicultural environment</li>
        <li>Strong focus on innovation and sustainability</li>
        <li>Flexible work-study options</li>
        <li>Safe, inclusive, and student-friendly society</li>
      </ul>

      <h2 className="text-xl font-bold text-black mb-2 mt-4">How <span className="text-orange-500 font-semibold">VJC Overseas</span> Can Help You</h2>
      <p className="mb-4">
        VJC Overseas offers expert guidance for your study abroad plans—from selecting universities and courses to managing visa processes and scholarships. Here's how we can assist specifically with your journey to Sweden:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Personalized university and program selection based on your profile and career goals.</li>
        <li>Assistance with applications to top Swedish universities with high acceptance rates for international students.</li>
        <li>Guidance on applying for scholarships like the Swedish Institute Scholarships for Global Professionals.</li>
        <li>Step-by-step support with the Sweden student visa process, including residence permit and financial documentation.</li>
        <li>Help with accommodation options, part-time work advice, and pre-departure orientation tailored for Sweden.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Start Your Journey Today!</h2>
      <p>
        Contact <span className="text-orange-500 font-semibold">VJC Overseas</span> now and take the first step toward an enriching academic journey in Sweden.
      </p>
    </div>
  );
};

export default StudyInSweden;
