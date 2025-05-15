import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
        question: 'Which EU countries do you help with job search services?',
        answer: 'We assist clients in finding job opportunities in multiple EU countries, including Germany, France, the Netherlands, Spain, Belgium, Austria, Ireland, and other EU member states based on industry demand.'
    },
    {
        question: 'How do I start my job search in the EU?',
        answer: `
        <ul>
            <li>• Creating a European-style CV (Europass CV is commonly used in some countries).</li>
            <li>• Building a strong LinkedIn profile to improve visibility among recruiters.</li>
            <li>• Understanding the job market, including in-demand sectors.</li>
            <li>• Using job portals specific to certain EU countries.</li>
        </ul>`
    },
    {
        question: 'Do I need to speak the local language to get a job in the EU?',
        answer: `
        <ul>
            <li>• In some countries, English is widely spoken in professional settings.</li>
            <li>• In other countries, local language proficiency might be required for most jobs (e.g., German in Germany, French in France).</li>
            <li>• Many companies offer positions specifically for English speakers.</li>
        </ul>`
    },
    {
        question: 'Can you help me find a job in any field, or do you specialize in certain industries?',
        answer: 'We specialize in job placements for various industries, including IT, engineering, healthcare, education, finance, and skilled trades. However, we assist in job searches across all sectors based on availability and demand.'
    },
    {
        question: 'How long does it typically take to find a job in the EU?',
        answer: 'The job search duration depends on industry demand, applicant qualifications, visa requirements, and location preferences. Typically, it can take anywhere from a few weeks to several months to secure employment.'
    },
    {
        question: 'What kind of visa do I need to work in the EU?',
        answer: 'Non-EU nationals generally need a work visa or work permit to be employed in most EU countries. EU nationals have the right to work freely in any EU country. We offer guidance on work visa applications based on country-specific requirements.'
    },
    {
        question: 'Do I need a degree to find a job in the EU?',
        answer: 'Many jobs in the EU require a university degree, especially in fields like engineering, finance, IT, and healthcare. However, vocational training, work experience, and skills can also qualify candidates for specific roles in industries like skilled trades and hospitality.'
    },
    {
        question: 'How can I tailor my CV and cover letter for EU employers?',
        answer: 'We recommend using a Europass CV format, highlighting key skills and qualifications, tailoring the cover letter to each job application, and emphasizing how your experience matches employer needs.'
    },
    {
        question: 'What job search platforms should I use for the EU market?',
        answer: `
        <ul>
            <li>• EURES (the European Job Mobility Portal).</li>
            <li>• LinkedIn.</li>
            <li> .</li>
            <li> •National job boards like Monster (Germany), Pole Emploi (France), Jobat (Belgium).</li>
            <li>• Industry-specific job boards.</li>
        </ul>`
    },
    {
        question: 'Can you help me with interview preparation for EU companies?',
        answer: 'Yes, we provide mock interviews, cultural insights, and tips on common interview questions to help you succeed in your job applications in Europe.'
    },
    {
        question: 'Are there opportunities for internships or entry-level jobs in the EU?',
        answer: 'Yes, we assist with finding internships and entry-level positions, especially in fields like finance, technology, and marketing. Many companies offer graduate programs and training opportunities.'
    },
    {
        question: 'Can I apply for jobs in the EU while still in my home country?',
        answer: 'Yes, you can apply for jobs online and attend remote interviews. If you secure a job, you will need to apply for the appropriate visa before relocating.'
    },
    {
        question: 'What are the salary expectations in different EU countries?',
        answer: 'Salaries vary by country, industry, and experience level. Generally, Western European countries offer higher salaries than Eastern Europe. We provide guidance on salary expectations based on industry trends.'
    },
    {
        question: 'Do you help with relocation services after securing a job in the EU?',
        answer: 'Yes, we offer relocation assistance, including finding accommodation, setting up bank accounts, and understanding taxation and cultural adjustments.'
    },
    {
        question: 'What are the top skills that employers in the EU are looking for?',
        answer: `
        <ul>
            <li>• Technology (Software development, AI, cybersecurity).</li>
            <li>• Healthcare (Doctors, nurses, medical researchers).</li>
            <li>• Engineering (Civil, electrical, mechanical).</li>
            <li>• Finance (Financial analysts, accountants).</li>
            <li>• Multilingual skills (Customer service, sales roles).</li>
        </ul>`
    },
    {
        question: 'Do you provide support with obtaining a work permit or visa for EU countries?',
        answer: 'Yes, we provide visa guidance, document assistance, and work permit application support for various EU countries.'
    },
    {
        question: 'Can I transition from a temporary work visa to permanent residency in the EU?',
        answer: 'Yes, most EU countries allow work visa holders to transition to long-term residency after meeting employment and residency duration requirements.'
    },
    {
        question: 'Can I bring my family with me if I move to the EU for work?',
        answer: 'Many EU countries allow family reunification. Once you secure a job and meet residence permit requirements, your spouse and children may be eligible to join you.'
    },
    {
        question: 'What happens if I don’t find a job within the allowed visa period?',
        answer: 'If you do not find a job within the permitted time, you may need to return to your home country. Some countries offer visa extensions or alternative visa options.'
    },
    {
        question: 'Is working in the EU a pathway to citizenship?',
        answer: 'Yes, after residing and working in an EU country for several years, you may become eligible to apply for permanent residency and eventually citizenship, depending on national laws.'
    }
];

  return (
    <div className="w-full px-4 text-2xl py-10 relative z-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">Dreaming of UK? We’re Here to Help!</h2>

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
