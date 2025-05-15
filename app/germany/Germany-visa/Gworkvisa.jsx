import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    
    <div style={{
        position: 'relative', 
        padding: '50px', 
        boxSizing: 'border-box',
        backgroundColor: 'white', 
        fontFamily:'Times New Roman',
        position: 'relative',
  overflow: 'hidden',
      }}>
      <div style={{marginBottom: '40px' }}>
  <h3 className="text-2xl font-semibold text-black text-center">
    Germany Work Visa - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
  </h3>
</div>

        
<h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
      Germany Work Visa: Your Gateway to a Bright Future in Germany
    </h3>
    <p style={{marginBottom:'20px'}}>
      At <strong>VJC Overseas</strong>, we are committed to turning your dreams of working in Germany into reality. 
      As experts in immigration services, we understand the complexities of securing a 
      <strong>Germany Work Visa</strong> and the opportunities that come with it. 
      With an outstanding success rate of securing visas every alternate day, we’ve become a trusted partner 
      for thousands of professionals looking to advance their careers in Germany.
    </p> 
    <h4 className="text-black font-semibold mb-2 text-md sm:text-lg">
      Why Choose VJC Overseas for Your Germany Work Visa?
    </h4>
     <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0" style={{marginBottom:'30px'

     }}>
          <div className="flex-shrink-0 mx-auto lg:mx-0">
    <Image
      src="/gwvisaimage.jpg"
      alt="Image description"
      width={500} // Replace with your image's actual width
      height={300}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
    />
  </div>
    

   
    <p><strong>Unmatched Success Rate:</strong> We proudly process and secure Germany Work Visas every alternate day, 
        helping professionals from various industries start their careers in Germany. With our dedicated team of 
        immigration consultants, we ensure your application is handled with the utmost care and precision, maximizing your chances of success.</p>
    </div>
    <ol style={{marginBottom:'20px'}}>

     
      <li>
        <strong>Tailored Visa Solutions:</strong> Germany offers multiple work visa categories depending on your qualifications, experience, and job offer. 
        Whether you’re an IT professional, engineer, healthcare worker, or skilled tradesperson, we tailor our services to suit your specific needs.
      </li>
      <li>
    
        <strong>Expert Guidance Through the Process:</strong> Applying for a Germany Work Visa can be a complicated process 
        with detailed paperwork and strict deadlines. At VJC Overseas, we guide you every step of the way, from eligibility assessment to documentation preparation and follow-ups.
      </li>
      <li>
        <strong>Knowledge of the Latest Immigration Changes:</strong> Germany’s immigration policies are continually evolving. 
        We stay updated to ensure your application meets the latest requirements.
      </li>
    </ol>
   

    <h4 className="text-black font-semibold mb-2 text-md sm:text-lg">
      Key Changes to Germany Work Visa Rule
    </h4>
    <ul style={{marginBottom:'20px'}}>
      <li>Simplified Application Process for skilled workers, reducing paperwork and waiting time.</li>
      <li>Expansion of Shortage Occupation List for IT, healthcare, engineering, and skilled trades.</li>
      <li>Introduction of Digital Nomad Visa for remote workers employed by foreign companies.</li>
      <li>Faster Processing Times due to Germany’s push to attract global talent.</li>
    </ul>

    <h4 className="text-black font-semibold mb-2 text-md sm:text-lg">
      How VJC Overseas Can Help:
    </h4>
    <ul>
      <li>
        <strong>Eligibility Assessment:</strong> Comprehensive evaluation of your qualifications, experience, and job offer.
      </li>
      <li>
        <strong>Documentation Support:</strong> Assistance with gathering required documents, such as proof of qualifications and job offers.
      </li>
      <li>
        <strong>Application Submission & Follow-up:</strong> End-to-end support from submission to tracking application status.
      </li>
      <li>
        <strong>Pre-Departure Assistance:</strong> Guidance on relocation, accommodation, and healthcare needs.
      </li>
    </ul>

    <h4 className="text-black font-semibold mb-2 text-md sm:text-lg">
      Success Stories from VJC Overseas Clients:
    </h4>
    <p style={{marginBottom:'20px'}}>
      <strong>Maria S., IT Professional:</strong> Received her visa within 3 weeks and now works at a top tech company in Berlin.<br />
      <strong>Raj P., Mechanical Engineer:</strong> Secured a visa and started his role at a leading manufacturing firm in Munich.<br />
      <strong>Sophie K., Healthcare Worker:</strong> Now works as a nurse in one of Germany’s renowned hospitals.
    </p>

    <h4 className="text-black font-semibold mb-2 text-md sm:text-lg">
      Why Germany?
    </h4>
    <ul style={{marginBottom:'20px'}}>
      <li>A Thriving Job Market with high demand for skilled professionals.</li>
      <li>World-Class Infrastructure with excellent public services.</li>
      <li>Rich Cultural Heritage and an outstanding work-life balance.</li>
    </ul>

    <h4 className="text-black font-bold mb-4 text-lg sm:text-xl" >
      Start Your Germany Work Visa Journey with VJC Overseas Today!
    </h4>
    <p>
      Ready to take the first step? Contact <strong>VJC Overseas</strong> today for expert guidance and make your dream of working in Germany a reality!
    </p>
    </div>
  );
};

export default Content;
