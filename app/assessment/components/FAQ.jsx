import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
        question: 'What is the Germany Opportunity Card?',
        answer: 'Clients often ask for a general overview of the Germany Opportunity Card, which is a points-based immigration system designed to attract skilled workers from outside the European Union to Germany. It allows workers to enter the country and search for a job in their field.',
    },
    {
      question: "Who is eligible to apply for the Germany Opportunity Card?",
      answer: `
      <ul>
          <li>Applicants typically need to have specific qualifications and experience in fields where Germany faces labor shortages. Key eligibility factors include:
              <ul>
                  <li>• Educational qualifications (e.g., university degree, vocational training)</li>
                  <li>• Relevant work experience in specific sectors (e.g., IT, engineering, healthcare)</li>
                  <li>• Language proficiency (typically at least B1 in German, though some fields might accept English proficiency)</li>
              </ul>
          </li>
      </ul>
      `
    },
    {
        question: 'How does the points system work for the Opportunity Card?',
        answer: `
      <ul>
          <li>The card operates on a points-based system, where applicants need to accumulate a certain number of points to be eligible. Points are awarded based on factors like:
              <ul>
                  <li>•	Education and qualifications</li>
                  <li>•	Work experience</li>
                  <li>•	Age (younger applicants may get more points)</li>
                  <li>•  Language skills</li>
                  <li>•  Previous stays in Germany</li>
                  <li>• Other factors like knowledge of German labor market conditions or adaptability/li>
              </ul>
          </li>
      </ul>
      `
    },
    {
        question: 'How many points are required to apply for the Opportunity Card?',
        answer: 'The specific number of points required may vary, but it is essential to meet the minimum threshold to apply for the card. Typically, applicants need a set number of points to qualify for the visa and enter Germany to search for work.',
    },
    {
        question: 'Can I apply for the Opportunity Card if I don’t have a job offer in Germany yet?',
        answer: 'Yes, the Germany Opportunity Card allows skilled workers to enter the country without having a job offer. Once in Germany, applicants have 6 months to find a job that matches their qualifications. During this time, they can look for employment and attend interviews.',
    },
    {
        question: 'Which job sectors are covered under the Opportunity Card?',
        answer: `
      <ul>
          <li>The card targets sectors with high demand for skilled workers, including but not limited to::
              <ul>
                  <li>•	Information Technology (IT)</li>
                  <li>•	Engineering (Mechanical, Electrical, Civil)</li>
                  <li>•	Healthcare and Nursing/li>
                  <li>•	Science and Research</li>
                  <li>•	Skilled trades (e.g., electricians, carpenters)</li>
                  <li>•	Finance and Business</li>
              </ul>
          </li>
      </ul>
      `
    },
    {
        question: 'Do I need to speak German to apply?',
        answer: 'While language proficiency is not a strict requirement for all applicants, having German language skills will give you more points in the application process. Some sectors may accept English as the working language, but generally, knowledge of German will improve your chances of securing employment.',
    },
    {
        question: 'How long can I stay in Germany with the Opportunity Card?',
        answer: 'The Germany Opportunity Card allows applicants to stay in Germany for up to 6 months to search for a job. If the applicant finds a job, they can then transition to a long-term residence permit.',
    },
    {
        question: 'Can I bring my family with me if I receive the Opportunity Card?',
        answer: 'Yes, family reunification is generally allowed for skilled workers in Germany. After you find a job and secure your long-term residence permit, you may apply for your spouse and dependent children to join you in Germany.',
    },
    {
        question: 'What documents do I need to apply for the Opportunity Card?',
        answer:  `
        <ul>
            <li>Applicants typically need to submit:
                <ul>
                    <li>•	Valid passport</li>
                    <li>•	Proof of education (degrees, diplomas)</li>
                    <li>•	Work experience certificates (job references, employment contracts)</li>
                    <li>•	Proof of language proficiency (German or English, depending on the sector)</li>
                    <li>•	Proof of health insurance (if applicable)</li>
                    <li>•	Proof of sufficient funds to support yourself during your stay (if necessary)</li>
                </ul>
            </li>
        </ul>
        `
    },
    {
        question: 'Is there a maximum age limit for the Opportunity Card?',
        answer: 'The age of the applicant is a factor in the points system, with younger candidates receiving more points. However, there is no official maximum age limit, though applicants in their 30s and early 40s typically have the best chances of scoring high points.',
    },
    {
        question: 'Can I transition from the Opportunity Card to permanent residency in Germany?',
        answer: 'Yes, once you find a job and meet the requirements, you can apply for a long-term residence permit (also known as the Niederlassungserlaubnis), which can eventually lead to permanent residency in Germany. The length of time required for this process may vary based on your individual situation.',
    },
    {
        question: 'How do I apply for the Germany Opportunity Card?',
        answer: 'The application for the Germany Opportunity Card typically involves submitting an online application through the German immigration portal, providing your personal and professional details, supporting documents, and evidence of your points score. After applying, you will be evaluated based on the points system.',
    },
    {
        question: 'Can I use the Opportunity Card to look for jobs outside Germany?',
        answer: 'No, the Germany Opportunity Card is specifically designed for those looking to work in Germany. It is not applicable for job searches in other countries.',
    },
    {
        question: 'What happens if I don’t find a job within 6 months?',
        answer: 'If you are unable to secure a job within 6 months, you may need to leave Germany. In some cases, you can apply for an extension or explore other visa options if applicable.',
    },
    {
        question: 'Is the Opportunity Card a permanent solution for immigration to Germany?',
        answer: 'No, the Opportunity Card is a temporary visa that allows skilled workers to search for a job in Germany. However, it can lead to a permanent residency permit once you find a job and meet the required criteria.',
    },
    {
        question: 'Can I apply for the Opportunity Card if I am already living in Germany?',
        answer: 'Yes, if you are already in Germany on another type of visa (such as a student visa or temporary work visa), you may be able to apply for the Germany Opportunity Card while in the country, depending on your current status and eligibility.',
    }
  ];

  return (
    <div className="w-full px-4 text-2xl py-10 relative z-10 bg-white" style={{fontFamily:'Times new roman'}}>
      <h2 className="text-center text-3xl font-bold mb-8">Dreaming of Germany? We’re Here to Help!</h2>

      {/* Decorative line */}
      <div className="flex justify-center items-center mb-8">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto" style={{fontFamily:'Times new roman'}}>
        {questions.map((item, index) => (
          <div key={index} className="border border-orange-500 p-5 mb-4 rounded-lg shadow-md bg-white">
            <div 
              className="flex justify-between items-center cursor-pointer" style={{fontFamily:'Times new roman'}}
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-bold">{item.question}</span>
              <span className="text-orange-500">
                {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer mt-2 text-black text-lg" style={{fontFamily:'Times new roman'}} dangerouslySetInnerHTML={{ __html: item.answer }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
