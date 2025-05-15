import React from "react";
import { Image } from "lucide-react";

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
          <div style={{ marginBottom: '40px' }}>
            <h3 className="text-2xl font-semibold text-black text-center">
              Hong Kong Dependent Visa –<span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
          </div>
          
      
          <p style={{ marginBottom: '20px' }}>
            At VJC Overseas, we specialize in helping families reunite in Hong Kong by providing expert services for the Hong Kong Dependent Visa. Whether youre joining a spouse, parent, or child who is a Hong Kong resident, we are here to guide you through the entire visa application process. With our in-depth knowledge of Hong Kong immigration laws and efficient service, you can be assured of a smooth application process.
          </p>
          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
  <div className="flex-shrink-0 mx-auto lg:mx-0">
    <Image
      src="/ukimage4.jpg"
      alt="Image description"
      width={500} // Replace with your image's actual width
      height={300}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
    />
  </div>
  <div className="px-4 lg:px-0">
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>What is the Hong Kong Dependent Visa?</h3>
          <p style={{ marginBottom: '20px' }}>
            The Hong Kong Dependent Visa allows dependents (spouses, children, or parents) of individuals who are Hong Kong permanent residents, or holders of a Hong Kong Employment or Investment Visa, to live in Hong Kong. This visa is designed to help families stay together while one member works or resides in Hong Kong.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Dependents may include:
          </p>
          <ul style={{ marginBottom: '20px' }}>
            <li>Spouses: Legally married partners (same-sex marriage is also accepted).</li>
            
           
          </ul>
          </div>
          </div>
          <li>Children: Unmarried children under the age of 18, or those over 18 but financially dependent due to mental or physical disabilities.</li>
          <li>Parents: Parents of a Hong Kong resident, if they are financially dependent.</li>
          
         
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Eligibility Criteria</h3>
          <p style={{ marginBottom: '20px' }}>
            To be eligible for a Hong Kong Dependent Visa, the sponsor (the primary visa holder) must meet certain criteria, including:
          </p>
          <ul style={{ marginBottom: '20px' }}>
            <li>Being a Hong Kong permanent resident or a holder of a valid employment, investment, or other relevant visa.</li>
            <li>The sponsor must be able to prove they can financially support their dependents.</li>
            <li>Dependents must meet the general immigration requirements, including having no criminal record.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Application Process</h3>
          <ol style={{ marginBottom: '20px' }}>
            <li><strong>Preparation of Documents:</strong> We help you gather and prepare all necessary documents, including proof of relationship, financial statements, and sponsor’s documents.</li>
            <li><strong>Application Submission:</strong> Once all documents are in order, we will submit your application to the Hong Kong Immigration Department.</li>
            <li><strong>Visa Approval:</strong> The processing time typically takes between 4 to 8 weeks. However, this can vary depending on individual circumstances or if additional information is required.</li>
            <li><strong>Visa Issuance:</strong> Upon approval, the dependent visa will be issued. If the applicant is overseas, they may need to submit their passport to the nearest Hong Kong consulate for stamping.</li>
          </ol>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Processing Time</h3>
          <p style={{ marginBottom: '20px' }}>
            The processing time for the Hong Kong Dependent Visa typically ranges from 4 to 8 weeks. However, some cases may take longer depending on the complexity of the application or additional documentation requested by the Immigration Department. We at VJC Overseas are committed to providing timely updates and ensuring a smooth process from start to finish.
          </p>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Visa Fees</h3>
          <ul style={{ marginBottom: '20px' }}>
            <li><strong>Visa Application Fee:</strong> HKD 230 (for each dependent application).</li>
            <li><strong>Additional Charges:</strong> There may be additional charges for specific services, such as visa extensions or document translations, depending on your case.</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>
            Please note that these fees are subject to change, and we will provide an accurate estimate when you consult with us for your specific application.
          </p>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Why Choose VJC Overseas?</h3>
          <ul style={{ marginBottom: '20px' }}>
            <li>Expert Knowledge: Our team has a deep understanding of Hong Kong immigration policies, ensuring your application complies with all requirements.</li>
            <li>Personalized Service: We provide tailored assistance for your unique situation, ensuring you meet all eligibility criteria.</li>
            <li>Efficiency: We handle all the paperwork and submission process to ensure a seamless and hassle-free experience.</li>
            <li>Transparent Pricing: We provide clear and upfront information about all fees, with no hidden charges.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Get Started Today</h3>
          <p style={{ marginBottom: '20px' }}>
            Whether youre planning to reunite with your family in Hong Kong or seeking advice on your dependent visa application, VJC Overseas is here to help. Contact us today to schedule a consultation and begin your journey towards living in Hong Kong with your loved ones.
          </p>
          <p style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '15px' }}>
            For inquiries or further assistance, feel free to reach out to us via phone or email, or fill out the contact form on our website.
          </p>
        </div>
      );
      
  
    
   
};

export default Content;
