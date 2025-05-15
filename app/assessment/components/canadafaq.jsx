import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What are the eligibility criteria for Canadian PR?',
      answer: 'Applicants often ask about the key requirements, including age, education, work experience, language proficiency, and other factors.',
    },
    {
      question: 'Which PR program is best suited for me?',
      answer: 'With multiple pathways like Express Entry, Provincial Nominee Programs (PNPs), and family sponsorship, clients want to know which option aligns with their profile.',
    },
    {
      question: 'How long does the PR application process take?',
      answer: 'Many applicants are curious about processing times and the factors that could impact the timeline.',
    },
    {
      question: 'What is the total cost of applying for Canadian PR?',
      answer: 'Clients often seek clarity on expenses, including government fees, consultant charges, medical exams, and other related costs',
    },
    {
      question: 'Is PR approval guaranteed?',
      answer: 'Applicants frequently ask about their chances of success and whether consultants can ensure approval, given the complexities of immigration policies.',
    },
    {
      question: 'What documents are required for a PR application?',
      answer: 'Essential paperwork includes proof of work experience, language test results, educational credentials, and other supporting documents.',
    },
    {
      question: 'How does the Express Entry system work?',
      answer: 'Many clients want a breakdown of the process, including the Comprehensive Ranking System (CRS) and ways to boost their score.',
    },
    {
      question: 'Can I apply for PR if I have past immigration issues or a criminal record?',
      answer: 'Those with prior immigration violations or legal issues often seek guidance on their eligibility and possible solutions.',
    },
    {
      question: 'Why should I hire a PR consultant?',
      answer: 'Clients want to know how an immigration consultant can assist with documentation, form accuracy, and navigating complex regulations.',
    },
    {
        question: 'What happens after I receive my PR?',
        answer:'After approval, applicants need information on their rights, responsibilities, and next steps, such as landing in Canada and settling in.',
      },
  ];

  return (
    <div className="w-full px-4 text-2xl py-10 relative z-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">Dreaming of Canada? We’re Here to Help!</h2>

      {/* Decorative line */}
      <div className="flex justify-center items-center mb-8">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="border border-orange-500 p-5 mb-4 rounded-lg shadow-md bg-white">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
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
