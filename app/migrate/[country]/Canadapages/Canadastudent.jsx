import React from 'react';
import Image from 'next/image';
const Canadastudent = () =>{
    return (
        <div
          style={{
            position: "relative",
            padding: "50px",
            boxSizing: "border-box",
            backgroundColor: "white",
            fontFamily: "Times New Roman",
            overflow: "hidden",
          }}
        >
          <div style={{ marginBottom: "40px" }}>
            <h3 className="text-2xl font-semibold text-black text-center">
              Canada Student Visa - <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
            </h3>
          </div>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
            Your Pathway to World-Class Education
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Canada is a top destination for international students, offering a high standard of education, a welcoming multicultural environment, and numerous opportunities for career growth. If you’re planning to study in Canada, obtaining a Canada Student Visa (Study Permit) is an essential step. At VJC Overseas, we guide you through the process, ensuring a smooth and successful application journey.
          </p>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
            Canada Student Visa: Basic Eligibility Criteria
          </h3>
          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">

  <div className="flex-shrink-0 mx-auto lg:mx-0">
    <Image
      src="/canadaimg1.webp"
      alt="Image description"
      width={500} // Replace with your image's actual width
      height={300}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg" 
    />
  </div>
          <ul style={{ marginBottom: "20px", listStyleType: "decimal", paddingLeft: "20px" }}>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Proof of Acceptance from a Recognized Institution:</strong> You must have an acceptance letter from a Designated Learning Institution (DLI) in Canada.
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Sufficient Financial Resources:</strong> Demonstrate you have enough money to cover tuition fees, living expenses, and return transportation (CAD 10,000 minimum).
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>No Criminal Record:</strong> Provide a police certificate confirming no criminal background.
            </li>
            
           
          </ul>
          </div>
          <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Health and Medical Requirements:</strong> Undergo a medical examination if required.
            </li>
          <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Intention to Leave Canada after Studies:</strong> Prove ties to your home country to show you plan to return after completing your studies.
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Language Proficiency:</strong> Provide proof of English or French proficiency (IELTS, TOEFL, or TEF) if required.
            </li>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
            Documents Required for Canada Student Visa Application
          </h3>
          <ul style={{ marginBottom: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Valid Passport</li>
            <li>Proof of Acceptance from a Designated Learning Institution (DLI)</li>
            <li>Proof of Sufficient Funds</li>
            <li>Passport-sized Photographs</li>
            <li>Statement of Purpose (SOP)</li>
            <li>Police Clearance Certificate</li>
            <li>Medical Examination Results (if applicable)</li>
            <li>Language Proficiency Test Results</li>
            <li>Transcripts and Educational Certificates</li>
            <li>Visa Application Forms and Fees</li>
            <li>Biometrics (if required)</li>
          </ul>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
            Steps to Apply for a Canada Student Visa
          </h3>
          <ol style={{ marginBottom: "20px", listStyleType: "decimal", paddingLeft: "20px" }}>
            <li>Prepare Your Documents</li>
            <li>Complete the Application Form</li>
            <li>Submit the Application</li>
            <li>Attend Biometrics Appointment (if required)</li>
            <li>Wait for Processing</li>
            <li>Receive Your Visa</li>
          </ol>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
            Why Choose VJC Overseas?
          </h3>
          <p style={{ marginBottom: "20px" }}>
            At VJC Overseas, we provide step-by-step guidance to ensure your documents are in order and your application is submitted correctly. From visa counselling to document verification, we are here to support you at every step.
          </p>
    
          <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: "20px" }}>
            Get in Touch Today!
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "15px" }}>
            Start your journey to studying in Canada with the trusted experts at VJC Overseas. Contact us today for a consultation and take the first step toward your Canadian dream!
          </p>
        </div>
      );

};
export default Canadastudent;