import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
        question: "What are the eligibility requirements for Australian PR?",
        answer: "Clients typically ask about the general requirements such as age, work experience, education qualifications, English proficiency, and health and character checks."
      },
      {
        question: "What are the different pathways to apply for Australian PR?",
        answer: "Clients may inquire about the various PR pathways, including:\n- Skilled Migration (points-based system) – Subclass 189, 190, 491\n- Family Sponsorship – Partner visas, Parent visas, etc.\n- Employer-Sponsored PR – Subclass 186\n- Business & Investment Visa – Subclass 188, 888\n- Graduate Visa – Subclass 485 (for international students)\n- Regional Visas – Subclass 491, 494"
      },
      {
        question: "What is the points system for Australian PR?",
        answer: "Clients often ask about the Points Test, which is used to determine eligibility for the Skilled Migration program. They want to know how their age, work experience, language ability, and education are scored."
      },
      {
        question: "How long does the Australian PR application process take?",
        answer: "Clients typically ask about the average processing time for different visa subclasses, and whether there are any ways to speed up the process."
      },
      {
        question: "How much does it cost to apply for Australian PR?",
        answer: "Cost is a big concern. Clients usually want to know about:\n- Visa application fees\n- Skills assessment costs\n- English language test fees\n- Consulting fees and other related expenses (medical, police clearance, etc.)"
      },
      {
        question: "Can I apply for Australian PR if I have a criminal record or health issues?",
        answer: "Clients often ask whether criminal convictions or health issues will impact their eligibility for PR, and if so, what steps they need to take."
      },
      {
        question: "What is the difference between Subclass 189, 190, and 491?",
        answer: "Clients typically seek clarification on the differences between the various skilled migration visas, including the requirements, benefits, and limitations of each visa type."
      },
      {
        question: "Do I need a job offer to apply for Australian PR?",
        answer: "Clients might want to know if they need a job offer to apply for skilled migration or if they can apply without one, such as through the Subclass 189."
      },
      {
        question: "Can I apply for Australian PR as a student or recent graduate?",
        answer: "International students often ask about pathways for gaining PR after completing their studies in Australia, particularly through the Temporary Graduate Visa (Subclass 485) and then transitioning to PR."
      },
      {
        question: "What are the chances of my PR application being approved?",
        answer: "Clients may want to know about their chances of success based on their individual profiles and the current immigration policies. They may ask about how to improve their chances (e.g., by boosting points or applying for regional areas)."
      },
      {
        question: "How does the Regional Visa (Subclass 491) work?",
        answer: "For those interested in living and working in regional areas, clients may ask about the Subclass 491, which is a provisional visa that can lead to PR after a few years."
      },
      {
        question: "Can I bring my family with me if I get PR?",
        answer: "Many clients are interested in understanding how family members can be included in their PR application, including partners, children, and other dependents."
      },
      {
        question: "What documents do I need to submit for the PR application?",
        answer: "Clients typically ask for a detailed list of documents required for the application process, such as:\n- Skills assessment\n- English language test results (IELTS, PTE)\n- Employment references\n- Medical examination results\n- Police clearance certificates"
      },
      {
        question: "How do I improve my points score?",
        answer: "Clients with a lower points score often ask for advice on how to improve their chances of meeting the required points threshold (e.g., through additional qualifications, better English test results, or obtaining a state nomination for Subclass 190)."
      },
      {
        question: "What is the process for applying for PR through Employer Sponsorship (Subclass 186)?",
        answer: "Clients who have job offers may ask about the requirements and process for applying for the Employer Nomination Scheme (ENS) visa."
      },
      {
        question: "What happens after I get Australian PR?",
        answer: "After PR approval, clients often ask about their rights and responsibilities, including:\n- How long it takes to receive the PR visa\n- Travel restrictions\n- Pathways to Australian citizenship"
      },
      {
        question: "What should I do if my PR application is refused?",
        answer: "If their PR application is rejected, clients may seek advice on the appeals process, whether they can reapply, and how to overcome any obstacles."
      },
      {
        question: "Is it worth hiring a consultant for the Australian PR application?",
        answer: "Many clients are curious about the benefits of working with an immigration consultant, especially regarding avoiding mistakes, speeding up the process, or improving their application."
      }
    
  ];

  return (
    <div className="w-full px-4 text-2xl py-10 relative z-10 bg-white" style={{fontFamily:'Times new roman'}}>
      <h2 className="text-center text-3xl font-bold mb-8">Dreaming of Australia? We’re Here to Help!</h2>

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
