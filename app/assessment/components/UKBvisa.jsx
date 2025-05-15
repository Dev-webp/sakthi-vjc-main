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
          marginTop:'-7%',
        }}>
          <div style={{ marginBottom: '40px' }}>
            <h3 className="text-3xl font-semibold text-black text-center">
              UK Business Visa - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
          </div>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>
            UK Business Visa: Your Gateway to Expanding Opportunities
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Are you looking to expand your business or investment prospects in the UK? The UK, with its world-class infrastructure, stable economy, and global market access, offers tremendous opportunities for entrepreneurs, investors, and business professionals. Whether youre attending meetings, negotiating deals, or establishing long-term business ventures, a UK Business Visa can be your passport to success.
          </p>
      
          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
    src="/UKBuisnessimage.jpg"
    alt="UK Business Visa Image"
    width={320}  // Adjust width
    height={280} // Adjust height
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
  />
            </div>
      
            <div className="px-4 lg:px-0">
              <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
                Types of UK Business Visas
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                The UK offers several types of business-related visas, each tailored to different needs and circumstances. Understanding which one is right for you is crucial to ensuring your visa application process is smooth and efficient.
              </p>
              <li><strong style={{ color: 'rgb(3, 60, 65)', fontWeight: 'bolder' }}>UK Start-up Visa:</strong> Ideal for entrepreneurs who want to establish a new business in the UK.</li>
              <li  style={{marginBottom:'20px'}}><strong style={{ color: 'rgb(3, 60, 65)' }}>UK Innovator Visa:</strong> For experienced businesspeople with a viable business idea and £50,000 investment funds.</li>
            </div>
          </div>
      
          <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
           
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>UK Investor Visa (Tier 1):</strong> Designed for individuals with at least £2 million to invest in the UK.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>UK Sole Representative Visa:</strong> For senior employees representing overseas companies in the UK.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>UK Global Talent Visa:</strong> Aimed at highly skilled individuals in sectors like technology, science, and business.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Why Choose VJC Overseas?</h3>
          <p style={{ marginBottom: '20px' }}>
            Navigating the complexities of the UK Business Visa process requires careful planning and expert guidance. VJC Overseas has a team of experienced consultants who can provide you with personalised support to successfully secure a UK Business Visa.
          </p>
      
          <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Expert Consultation:</strong> Tailored advice on the most effective visa for your goals.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Document Preparation:</strong> Assistance in gathering and preparing all necessary documents.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Application Submission:</strong> Efficient handling of the application process.</li>
            <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Ongoing Support:</strong> Continuous assistance from application to arrival in the UK.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px', color: 'brown' }}>Start Your Journey Today</h3>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            Ready to take the next step? Contact VJC Overseas today for a consultation on your UK Business Visa application. Our expert team is dedicated to helping you succeed in your business ventures and ensuring that your visa application process is as seamless as possible.
          </p>
        </div>
      );
      
  
    
    
};

export default Content;
