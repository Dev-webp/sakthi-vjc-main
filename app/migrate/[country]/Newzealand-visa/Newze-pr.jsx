import React from 'react'
import Image from 'next/image'

const Newzepr = () => {
  return (
    <div className="m-2 p-2" style={{
        fontFamily: "Times New Roman", backgroundColor: 'white', position: 'relative',
        overflow: 'hidden',
    }}>
        <div style={{ marginBottom: '5%' }}>
            <h3 className="text-2xl mt-4 font-semibold text-black text-center">
            New Zealand Permanent Resident Visa  - VJC Overseas<span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
        </div>
        <h3 className="text-blue-500 text-center m-2 font-bold text-lg mb-6">
        Your Pathway to a New Life in New Zealand
        </h3>
        <p className='mb-6'>Are you looking to make New Zealand your permanent home? Whether you’re attracted by the stunning landscapes, the vibrant culture, or the high quality of life, a New Zealand Permanent Resident Visa (PR) allows you to live, work, and study indefinitely in this beautiful country. At VJC Overseas, we guide you through the entire process, ensuring a smooth and hassle-free application.</p>
       

        <div className="flex mb-6 flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
                <Image
                    src="/assets/Newzepr.png"
                    alt="Australia Business Visa"
                    width={500} // Replace with your image's actual width
                    height={300}

                    className="w-full max-w-xs mt-5 sm:max-w-sm md:max-w-md lg:w-full lg:h-60 object-contain shadow-lg rounded-lg"/>
            </div>
            <div>
            <h3 className='text-black m-2 font-bold text-lg mb-6'>
        What is the New Zealand Permanent Resident Visa?
        </h3>
        <p className='mb-6'>The New Zealand Permanent Resident Visa offers individuals who have already held a New Zealand Resident Visa the opportunity to gain permanent residency. With this visa, you can enjoy all the benefits of a New Zealand citizen, including the ability to:</p>
        <ul className='mb-6 ml-8 list-disc'>
            <li>Live, work, and study in New Zealand indefinitely.</li>
            <li>Access public services, including healthcare and education.</li>
            <li>Travel freely in and out of New Zealand.</li>
            <li>Travel freely in and out of New Zealand.</li>
        </ul>
         </div>  
        </div>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>
       Eligibility Criteria
        </h3>
        <p className='mb-6'>To apply for a New Zealand Permanent Resident Visa, you must meet the following basic criteria:</p>
        <ul className='list-decimal mb-6 ml-8'>
            <li><b>Resident Visa Status: </b>You must have held a New Zealand Resident Visa for at least 2 years.</li>
            <li><b>Good Character: </b>You need to demonstrate that you have no significant criminal convictions.</li>
            <li><b>Ongoing Commitment: </b>You must show your commitment to New Zealand, such as having spent time in the country and maintaining a stable job or business.</li>
            <li><b>Financial Independence: </b>You may need to demonstrate your ability to support yourself and any dependents.</li>
        </ul>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>
        Key Benefits of the New Zealand Permanent Resident Visa
        </h3>
        <ul className='list-decimal mb-6 ml-8'>
            <li><b>Indefinite Stay:  </b>No expiry date on your residency status once granted.</li>
            <li><b>Unrestricted Work Rights: </b>Freedom to work in any job or profession.</li>
            <li><b>Access to Public Services: </b>Eligible for the same healthcare and social services as New Zealand citizens.</li>
            <li><b>Travel Flexibility: </b>Enjoy the ability to travel in and out of New Zealand without limitations.</li>
            <li><b>Pathway to Citizenship: </b>The Permanent Resident Visa is the final step before you can apply for New Zealand citizenship.</li>
        </ul>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>Visa Fees</h3>
        <p className='mb-6'>The application fees for the New Zealand Permanent Resident Visa can vary depending on the specific circumstances of your application. As of now, the typical fee structure is as follows:</p>
        <ul className='mb-6 ml-8 list-disc'>
            <li><b>Application Fee: </b>NZD 500 to NZD 600 (subject to change based on immigration policies)</li>
            <li><b>Immigration Levy:</b> NZD 90 to NZD 150 (as per the latest guidelines)</li>
        </ul>
        <p>Please note that additional fees may apply for supplementary services such as medical examinations, police clearances, or translation services.</p>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>Processing Time</h3>
        <p className='mb-6'>The processing time for a New Zealand Permanent Resident Visa typically takes between 4 to 6 months from the date of submission, depending on the complexity of your application and the volume of applications being processed at that time. While processing times may vary, our experienced team at VJC Overseas ensures your application is complete, accurate, and submitted promptly, helping to speed up the process.</p>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>Why Choose VJC Overseas?</h3>
        <ul className='list-decimal mb-6 ml-8'>
            <li><b>Expert Guidance:  </b>Our immigration consultants are trained professionals with years of experience in handling New Zealand PR visas.</li>
            <li><b>Tailored Solutions:  </b>We provide tailored advice based on your specific background and circumstances.</li>
            <li><b>Comprehensive Support:  </b>From document collection to interview preparation, we offer end-to-end support throughout the entire process.</li>
            <li><b>Transparent Fees: </b>We provide clear, upfront pricing with no hidden costs, ensuring that you know exactly what you’re paying for.</li>
            
        </ul>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>Ready to Apply?</h3>
        <p className='mb-6'>If you’re ready to take the next step toward securing your New Zealand Permanent Resident Visa, <b>contact VJC Overseas today</b>. Our team is here to assist you with all aspects of the application process, from eligibility assessment to submission, ensuring that you achieve your immigration goals.</p>
        <h3 className='text-black m-2 font-bold text-lg mb-6'>Contact Us</h3>
        <p className='mb-6'>For more information or to schedule a consultation with one of our immigration experts, call us at <b>+91-9160449000</b> or email us about info@vjcoverseas.com.</p>
<p className='mb-6'>Start your journey to New Zealand today with VJC Overseas – your trusted immigration partner.</p>

<hr style={{ borderColor: 'black' }} className="mb-6" />

<p className='mb-6'>Please note: All information provided is subject to change based on New Zealand immigration policies. Always check the latest updates on official immigration websites or consult with one of our experts for the most accurate and up-to-date details.</p>
        </div>
  )
   
}

export default Newzepr 