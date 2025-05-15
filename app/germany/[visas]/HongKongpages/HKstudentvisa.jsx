
import React from "react";
import Image from "next/image";

const Content = () => {
    return (
        <div style={{
            position: 'relative',
            padding: '50px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            fontFamily: 'Times New Roman',
            overflow: 'hidden',
           
          }}>
          <div style={{ marginBottom: '50px' }}>
            <h3 className="text-2xl font-semibold text-black text-center">
              Hong Kong Student Visa - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
          </div>
      
         
          <p style={{ marginBottom: '20px' }}>
            Studying in Hong Kong offers a unique opportunity to experience world-class education in one of the most dynamic cities in Asia. Whether you`re pursuing undergraduate, postgraduate, or language studies, a Hong Kong Student Visa is your ticket to a truly international academic experience.
          </p>
      
          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/HKimage2.jpg"
                alt="Hong Kong Student Visa"
                width={500} // Replace with your image's actual width
                height={300}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
              />
            </div>
      
            <div className="px-4 lg:px-0">
              <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
                Why Choose Hong Kong for Your Education?
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                Hong Kong is known for its high academic standards, with several universities ranking among the top globally. The city is a vibrant blend of East meets West, offering a rich cultural experience, cutting-edge research opportunities, and a thriving international student community.
              </p>
             
            </div>
          </div>
          <p className="mb-4 text-sm sm:text-base">
                With a diverse range of study programs and courses, Hong Kong offers something for every student aiming for a successful future.
              </p>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Eligibility Requirements for a Hong Kong Student Visa</h3>
          <ul style={{ marginBottom: '20px' }}>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>1. Offer of Admission:</strong> You must have an official letter of acceptance from a recognized institution in Hong Kong.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>2. Sufficient Financial Support:</strong> Demonstrate the ability to support yourself financially while studying in Hong Kong.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>3. Valid Passport:</strong> Your passport must have a minimum validity of six months beyond your intended stay.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>4. No Criminal Record:</strong> You must have a clean criminal record and meet health requirements.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Visa Application Process</h3>
          <p style={{ marginBottom: '20px' }}>
            The process for applying for a Hong Kong Student Visa includes:
          </p>
          <ol style={{ marginBottom: '20px', listStyleType: 'decimal', paddingLeft: '20px' }}>
            <li>Secure an offer of admission from a recognized institution.</li>
            <li>Complete the visa application form (Form ID 995A).</li>
            <li>Gather required documents, including financial proof and medical records if needed.</li>
            <li>Submit your application to the Hong Kong Immigration Department.</li>
            <li>Wait for visa processing, which typically takes 4-8 weeks.</li>
            <li>Receive your student visa upon approval.</li>
          </ol>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Visa Fees</h3>
          <ul style={{ marginBottom: '20px' }}>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Visa Application Fee:</strong> HKD 230 (approximately USD 30) per application.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Re-entry Permit Fee (if applicable):</strong> HKD 230 (approximately USD 30).</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>
            Additional fees may apply for expedited processing or re-application.
          </p>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Processing Time</h3>
          <p style={{ marginBottom: '20px' }}>
            The standard processing time for a Hong Kong Student Visa is generally between 4 to 8 weeks from the date your application is submitted to the Immigration Department. Processing times may vary depending on the volume of applications and completeness of your application. It’s advisable to apply well in advance to avoid delays.
          </p>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Visa Extension and Work Rights</h3>
          <ul style={{ marginBottom: '20px' }}>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Visa Extension:</strong> You must apply for an extension if you need to stay beyond your visa`s expiration.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Work Rights:</strong> International students are permitted to work part-time (up to 20 hours/week) during semesters and full-time during breaks, with approval from the Immigration Department.</li>
          </ul>
      
          <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: '20px' }}>Living in Hong Kong</h3>
          <p style={{ marginBottom: '20px', fontFamily: 'cursive', fontSize: '14px' }}>
            As a student, you’ll experience vibrant city life, excellent public transportation, and a diverse food scene. Hong Kong offers a high standard of living and plenty of opportunities to explore.
          </p>
      
          <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: '20px' }}>Start Your Journey Today</h3>
          <p style={{ marginBottom: '20px', fontFamily: 'cursive', fontSize: '14px' }}>
            Ready to take the next step? With VJC Overseas, your path to success in Hong Kong is just a few steps away.
          </p>
          <p style={{ marginBottom: '20px', fontSize: '15px', fontWeight: 'bolder' }}>
            Contact us today for a free consultation and let us guide you toward securing your Hong Kong Student Visa.
          </p>
        </div>
      );
      
  
};

export default Content;
