import React, {useState} from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const  Usafaq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const questions = [
        {
          question: 'What is the H-1B visa?',
          answer: '•	The H-1B visa is a non-immigrant visa that allows U.S. companies to employ foreign workers in specialty occupations that require theoretical or technical expertise. These occupations typically include fields like technology, engineering, healthcare, finance, and education.',
        },
        {
          question: 'What are the basic eligibility requirements for the H-1B visa?',
          answer: `
        <ul>
            <li>•	To qualify for the H-1B visa, applicants typically need:
                <ul>
                    <li>•	A job offer from a U.S. employer for a position that requires specialized knowledge.</li>
                    <li>•	A Bachelor's degree or higher (or its equivalent) in a specialized field related to the job.</li>
                    <li>•	Proof of expertise in the occupation and academic qualifications.</li>
                   
                </ul>
            </li>
        </ul>
        `
        },
        {
          question: 'Can I apply for an H-1B visa without a job offer?',
          answer: 'No, the H-1B visa requires a job offer from a U.S. employer. The employer must also be willing to sponsor your visa application.',
        },
        {
          question: 'What are the most common occupations that qualify for the H-1B visa?',
          answer: `
        <ul>
            <li>•	Common fields include:
                <ul>
                    <li>• Information Technology (e.g., software engineers, systems analysts)</li>
                    <li>• Engineering (e.g., civil, mechanical, electrical engineers)</li>
                    <li>•	Healthcare (e.g., doctors, physical therapists, medical scientists)</li>
                    <li>•	Finance (e.g., accountants, financial analysts)</li>
                    <li>• Education (e.g., professors, teachers)</li>
                    <li>•	Research and development (e.g., scientists, data analysts)</li>
                   
                </ul>
            </li>
        </ul>
        `
        },
        {
          question: 'How long is the H-1B visa valid for?',
          answer: 'The H-1B visa is typically granted for an initial period of 3 years and can be extended for an additional 3 years, for a total of 6 years. After 6 years, the individual may need to leave the U.S. for at least one year before applying for a new H-1B or another type of visa.',
        },
        {
          question: 'How does the H-1B lottery work?',
          answer: 'Due to high demand, the H-1B visa is subject to an annual cap. The U.S. Citizenship and Immigration Services (USCIS) runs a random lottery to select the petitions that will be processed. There are typically 65,000 regular H-1B visas and an additional 20,000 for applicants with a U.S. master’s degree or higher',
        },
        {
          question: 'How can I increase my chances of being selected in the H-1B lottery?',
          answer:  `
          <ul>
              <li>While the lottery is random, some ways to improve your chances include:
                  <ul>
                      <li>• Having a master’s degree or higher from a U.S. institution (this gives you a second chance in the lottery).</li>
                      <li>• Ensuring that your application is complete and accurately filled out, as errors could lead to disqualification.c</li>
                     
                     
                  </ul>
              </li>
          </ul>
          `,
        },
        {
          question: 'What documents are required to apply for the H-1B visa?',
          answer: `
          <ul>
              <li>The following documents are typically required:
                  <ul>
                      <li>• Job offer letter from the U.S. employer</li>
                      <li>• Copy of your educational qualifications (degree certificates, transcripts)</li>
                      <li>• Resume/CV</li>
                      <li>• Copy of your passport</li>
                      <li>• Evidence of work experience (if applicable)</li>
                      <li>• Any licenses or certifications required for your occupation</li>
                  </ul>
              </li>
          </ul>
        `,
        
        },
        {
          question: 'How much does the H-1B visa application cost?',
          answer: `
  <ul>
      <li>• The cost of applying for the H-1B visa varies. Typical fees include:
          <ul>
              <li>• Filing fee (typically paid by the employer)</li>
              <li>• ACWIA fee (for training U.S. workers)</li>
              <li>• Fraud prevention and detection fee</li>
              <li>• Public law fee (if applicable)</li>
              <li>• Premium processing fee (optional, speeds up processing)</li>
          </ul>
      </li>
  </ul>
`,
        },
        {
          question: 'Can my employer apply for an H-1B visa on my behalf?',
          answer: 'Yes, the employer is the petitioner for the H-1B visa. They must file the petition with USCIS, and the employer is responsible for paying certain fees. However, you must meet the qualifications and requirements for the job.',
        },
        {
          question: 'Can I change employers while on an H-1B visa?',
          answer: 'Yes, you can change employers while on an H-1B visa, but the new employer must file a new H-1B petition for you. If approved, you can transfer to the new employer without losing your visa status.',
        },
        {
          question: 'Can I bring my family members with me on an H-1B visa?',
          answer: 'Yes, your spouse and children (under 21) can accompany you to the U.S. on an H-4 visa. In some cases, spouses on an H-4 visa may be eligible to apply for work authorization if the H-1B holder has an approved immigrant petition or is seeking permanent residency.',
        },
        {
          question: 'Can I travel outside the U.S. while on an H-1B visa?',
          answer: 'Yes, you can travel abroad while on an H-1B visa, but you must have a valid visa stamp in your passport to re-enter the U.S. You may also need to provide documents to prove your employment and current visa status.',
        },
        {
          question: 'What happens if my H-1B application is denied?',
          answer: 'If your H-1B visa is denied, the employer can appeal the decision, or you may need to reapply in the next cycle, depending on the reason for the denial. Denials often occur due to incomplete applications or failure to meet eligibility criteria.',
        },
        {
          question: 'Can I apply for permanent residency (Green Card) while on an H-1B visa?',
          answer: 'Yes, individuals on an H-1B visa can apply for a Green Card (permanent residency) through an employer-sponsored process. The H-1B visa allows dual intent, meaning you can apply for permanent residency while holding an H-1B visa.',
        },
        {
          question: 'What is H-1B premium processing?',
          answer: 'Premium processing is an optional service where USCIS expedites the processing of your H-1B petition for a fee. This guarantees that your petition will be processed within 15 calendar days.',
        },
        {
          question: 'Can I switch from an F-1 visa (student visa) to an H-1B visa?',
          answer: 'Yes, you can switch from an F-1 student visa to an H-1B visa as long as you have a job offer from a U.S. employer in a specialty occupation. Many F-1 students apply for the H-1B visa after graduating (through Optional Practical Training (OPT)).',
        },
        {
          question: 'Can I stay in the U.S. after my H-1B visa expires?',
          answer: 'If your H-1B visa expires and you do not have an extension or a change of status, you must leave the U.S. You can apply for an extension before the visa expires if you are still employed in the same job.',
        },
        {
          question: 'How long does it take to process an H-1B visa application?',
          answer: 'Processing time for the H-1B visa can vary but typically takes around 3 to 6 months. However, using premium processing can speed up this process to 15 calendar days.',
        },
        {
          question: 'Can I apply for an H-1B visa more than once?',
          answer: 'Yes, you can apply for the H-1B visa multiple times if you don’t get selected in the lottery or if your employer is filing a new petition for you.',
        },
        
      ];
    
      return (
        <div className="w-full px-4 text-2xl py-10 relative z-10 bg-white">
          <h2 className="text-center text-3xl font-bold mb-8">Dreaming of USA? We’re Here to Help!</h2>
    
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


}

export default Usafaq;