import React from 'react'
import Image from 'next/image'

const Newzeskillwork = () => {
  return (
    <div className="m-2 p-2" style={{
        fontFamily: "Times New Roman", backgroundColor: 'white', position: 'relative',
        overflow: 'hidden',
    }}>
        <div style={{ marginBottom: '5%' }}>
            <h3 className="text-2xl mt-4 font-semibold text-black text-center">
            New Zealand Skilled Work Visa  - VJC Overseas<span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
        </div>
        <h3 className=" text-sky-700 m-2  font-bold text-lg mb-6">
        Unlock Opportunities in New Zealand
        </h3>
        <p className='mb-6'>Looking to start a new chapter in New Zealand with a career that matches your skills and qualifications? The Skilled Work Visa provides you with the perfect opportunity to live and work in one of the world's most desirable destinations. Whether you're a highly skilled professional, a technician, or a specialist in demand, this visa opens doors to a thriving economy, a high quality of life, and unparalleled natural beauty.</p>
       

        <div className="flex mb-6 flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
                <Image
                    src="/assets/Newzeskillwork.png"
                    alt="Australia Business Visa"
                    width={500} // Replace with your image's actual width
                    height={300}

                    className="w-full max-w-xs mt-5 sm:max-w-sm md:max-w-md lg:w-full lg:h-60 object-contain shadow-lg rounded-lg"
                />
            </div>
            <div>
            <h3 className='text-black m-2 font-bold text-lg mb-6'>
            What is the New Zealand Skilled Work Visa?
        </h3>
        <p className='mb-6'>The Skilled Work Visa is designed for individuals who have a job offer from a New Zealand employer and whose occupation is listed on the country's skills shortage list or requires specific expertise. It allows skilled workers to live and work in New Zealand temporarily, with the possibility of transitioning to permanent residency after meeting the required criteria.</p>
      
         </div>  
        </div>
        <h3 className='mb-6 text-lg font-bold'>Key Benefits of the Skilled Work Visa:</h3>

<ul className='mb-6 ml-8 list-disc'>
    <li><b>Live and Work: </b>Stay in New Zealand for the duration of your visa, working in your skilled occupation.</li>
    <li><b>Pathway to Residency: </b>After holding a Skilled Work Visa for 2 years and meeting certain conditions, you may be eligible to apply for a Resident Visa under the Skilled Migrant Category.</li>
    <li><b>Family Support:</b>Your partner and dependent children can join you in New Zealand under specific conditions, making it easier to relocate as a family.</li>
    <li><b>Competitive Salary: </b>New Zealand's labour market offers competitive salaries for skilled workers, with a high standard of living.</li>
    <li><b>Work in Demand Sectors: </b>Opportunities are available in a wide range of industries, including IT, healthcare, engineering, construction, and more.</li>
</ul>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>
       Eligibility Criteria for the Skilled Work Visa
        </h3>
        <p className='mb-6'>To qualify for a Skilled Work Visa, you must meet the following requirements:</p>
        <ul className='list-decimal mb-6 ml-8'>
            <li><b>Jon Offer: </b>You must have a full-time job offer from a New Zealand employer in an occupation that appears on New Zealand's Essential Skills in Demand Lists or is considered a skilled job according to New Zealand immigration requirements.</li>
            <li><b>Skills and Qualifications:  </b>Your skills and qualifications must match the requirements of the job you have been offered. You may need to provide evidence of your education, professional experience, and/or relevant certification.</li>
            <li><b>Salary: </b>The job offer must meet the minimum salary requirements set by Immigration New Zealand, which typically reflects the standard wage for the occupation in New Zealand.</li>
            <li><b>English Language Proficiency: </b>You must demonstrate a good command of the English language, typically through recognized tests such as IELTS, TOEFL, or similar qualifications.</li>
            <li><b>Health and Character:  </b>You will need to meet certain health and character requirements, including undergoing a medical examination and providing police clearance.</li>
        </ul>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>
       Visa Fees
        </h3>
        <p className='mb-6'>The <b>Skilled Work Visa</b> fee can vary depending on your specific situation, but the following are approximate fees:</p>
        <ul className='list-disc mb-6 ml-8'>
            <li><b>Application Fee:   </b>NZD 495 (for a single applicant)</li>
            <li><b>Partner/Dependent Child: </b>NZD 495 per dependent</li>
            <li><b>Visa Duration: </b>The Skilled Work Visa is typically issued for up to 3 years, depending on the nature of your job offer and the skills required.</li>
           
        </ul>
        <p>It is always advisable to submit your application well in advance to avoid delays. To ensure the best outcome, ensure all your documents are correctly filled out and meet the requirements outlined by Immigration New Zealand.</p>







        <h3 className='text-black m-2 font-bold text-lg mb-6'>How We Can Help</h3>
        <p className='mb-6'>Navigating the visa application process can be complex, but with the right guidance, you can significantly improve your chances of success. At VJC Overseas, we specialize in New Zealand visa applications and offer personalized advice and support. From assessing your eligibility to preparing the required documents and submitting your application, we ensure that every step is handled efficiently.</p>
        <p className='mb-6'>Our services include:</p>
        <ul className='mb-6 ml-8 list-disc'>
            <li>Eligibility assessment</li>
            <li>Document preparation and review</li>
            <li>Visa application submission and tracking</li>
            <li>Post-application support, including appeals and re-submissions if necessary</li>
        </ul>
        <p className='mb-6'>With our expertise, you can focus on what matters most—planning your career and future in New Zealand—while we take care of the paperwork.</p>



        <h3 className='text-black m-2 font-bold text-lg mb-6'>Ready to Apply?</h3>
        <p className='mb-6'>If you're ready to take the next step in your career and life, the Skilled Work Visa can help you unlock the door to New Zealand's exciting job market. Contact <b>VJC Overseas</b> today to start your application process. Our experts are here to assist you every step of the way!</p>

        <hr style={{ borderColor: 'black' }} className="mb-6" />

        <p className='mb-6'><b>Disclaimer:</b>Visa fees and processing times mentioned above are approximate and subject to change. Please check with Immigration New Zealand or consult a visa expert for the most current information.</p>


       
        </div>
  )
   
}

export default Newzeskillwork