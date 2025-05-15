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
           
          <div style={{ marginBottom: '40px' }}>
            <h3 className="text-3xl font-semibold text-black text-center">
            Hong Kong Bussiness Visa - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
          </div>
      
          <h3 className="text-3xl font-semibold text-black text-center">
        Hong Kong Business Visa: A Comprehensive Guide for VJC Overseas
      </h3>
    

    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>
      A Comprehensive Guide for VJC Overseas
    </h3>
    <p style={{ marginBottom: '20px' }}>
      Hong Kong, renowned as one of the worlds leading international business hubs, offers an ideal environment for entrepreneurs, professionals, and investors. Whether youre looking to explore business opportunities, attend meetings, or establish a company, obtaining a Hong Kong Business Visa is crucial to facilitate smooth and legal operations in the region.
    </p>
    <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
  <div className="flex-shrink-0 mx-auto lg:mx-0">
    <Image
      src="/ukimage3.jpg"
      alt="Image description"
      width={500} // Replace with your image's actual width
      height={300}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
    />
  </div>
  <div className="px-4 lg:px-0">
    <p style={{ marginBottom: '20px' }}>
      At VJC Overseas, we help individuals and businesses navigate the complexities of obtaining a Hong Kong Business Visa. Here’s an in-depth guide to understanding the process, the types of visas available, processing time, and visa fees.
    </p>
    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Types of Hong Kong Business Visas</h3>
    <ul style={{ marginBottom: '20px' }}>
    <li><strong style={{ color: 'rgb(3, 60, 65)' }}>1.General Employment Visa (Business Purpose):</strong> This visa is for individuals planning to work in Hong Kong for a specific employer or set of business activities. It is suitable for entrepreneurs, managers, and professionals who have secured a job or business-related activity.</li>
    </ul>
    </div>
  </div>

   
    <ul style={{ marginBottom: '20px' }}>
     
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>2. Investment Visa:</strong> If youre planning to set up or invest in a business in Hong Kong, the Investment Visa allows you to reside and work in the region as a business owner or investor. Applicants must demonstrate that their investment will benefit the local economy, create employment, and contribute to Hong Kong’s business environment.</li>
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>3. Entrepreneur Visa:</strong> For individuals planning to start their own businesses in Hong Kong, this visa enables you to establish a new company. You must prove that the business will be viable and sustainable, offering employment opportunities to local residents.</li>
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>4. Visiting Visa for Business Meetings:</strong> This visa is ideal for individuals who wish to attend business meetings, conferences, or negotiations in Hong Kong. It allows short-term stays for business purposes without the need to establish a long-term residence.</li>
    </ul>

    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Eligibility Requirements</h3>
    <ul style={{ marginBottom: '20px' }}>
      <li>A valid passport with at least six months of validity remaining.</li>
      <li>Proof of financial capability to support yourself during your stay.</li>
      <li>Proof of business activities including a detailed business plan, investment records, or employment contracts.</li>
      <li>Health and character requirements to demonstrate that you are a fit individual to enter the region.</li>
      <li>Educational and professional qualifications may be required depending on the type of visa.</li>
    </ul>

    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Processing Time</h3>
    <p style={{ marginBottom: '20px' }}>
      The processing time for a Hong Kong Business Visa typically ranges between 4 to 6 weeks. However, the duration can vary depending on the type of visa, the applicant’s specific case, and the completeness of the application. For business visas related to investments or setting up a new company, the processing time may take slightly longer as additional documentation and evaluation are required.
    </p>

    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Visa Fees</h3>
    <ul style={{ marginBottom: '20px' }}>
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>General Employment Visa:</strong> HKD 230 to HKD 450 (for the application).</li>
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Investment Visa:</strong> HKD 230 to HKD 450 (for the application).</li>
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Entrepreneur Visa:</strong> HKD 230 to HKD 450 (for the application).</li>
      <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Visiting Visa:</strong> HKD 230 to HKD 450 (for short-term business visits).</li>
    </ul>
    <p style={{ marginBottom: '20px' }}>
      These fees are subject to change, and additional costs may be incurred if supplementary documents are requested, or if a visa extension is necessary.
    </p>

    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>How VJC Overseas Can Help</h3>
    <ul style={{ marginBottom: '20px' }}>
      <li>Visa Consultation: Helping you choose the right visa category based on your business goals.</li>
      <li>Document Preparation: Ensuring your application is complete, accurate, and in line with Hong Kong immigration policies.</li>
      <li>Application Submission: Submitting your application on your behalf and liaising with immigration authorities.</li>
      <li>Follow-Up and Status Updates: Monitoring your application’s progress and providing regular updates.</li>
    </ul>

    <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Final Thoughts</h3>
    <p style={{ marginBottom: '20px' }}>
      Whether youre seeking to start a business, expand your operations, or attend meetings in Hong Kong, securing a business visa is essential to ensure smooth entry and legal status in the region. With VJC Overseas, you gain the support of seasoned professionals who can guide you through every aspect of the visa process.
    </p>
    <p style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '15px' }}>
      For more information or to begin your Hong Kong Business Visa application, get in touch with VJC Overseas today!
    </p>
  </div>
       
      );
      
 
};

export default Content;
