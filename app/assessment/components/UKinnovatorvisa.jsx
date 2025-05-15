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
              UK Innovator Visa - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h3 className="text-3xl font-semibold text-black text-center">
              Unlocking Opportunities with the UK Innovator Visa: A Gateway to Entrepreneurial Success
            </h3>
          </div>
      
          <p style={{ marginBottom: '20px' }}>
            In today’s fast-paced global economy, the United Kingdom stands as a beacon for innovation, offering a wealth of opportunities for entrepreneurs looking to expand their businesses and make an impact on the world. If you’re an ambitious individual with a ground-breaking idea, the UK Innovator Visa could be your key to success.
          </p>
          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0" style={{marginBottom:'20px'}}>
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/ukinnovation.webp"
                alt="UK Business Visa Image"
                width={320}  // Adjust width
                height={280} // Adjust height
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
              />
            </div>
          <p style={{ marginBottom: '20px' }}>
            At VJC Overseas, we specialize in guiding dynamic entrepreneurs like you through the UK’s immigration process. Whether you’re starting a new venture or scaling an existing one, the Innovator Visa offers you the chance to bring your vision to life in one of the most vibrant business environments on the planet.
          </p>
          </div>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>What is the UK Innovator Visa?</h3>
          <p style={{ marginBottom: '20px' }}>
            The Innovator Visa is designed for experienced entrepreneurs who wish to establish or run a business in the UK. Unlike its predecessor, the Tier 1 (Entrepreneur) Visa, which required applicants to secure large sums of investment funding, the Innovator Visa offers more flexibility. It is specifically for those with a unique business idea that is endorsed by an approved UK organization.
          </p>
          <p style={{ marginBottom: '20px' }}>
            This route is perfect for those with a highly innovative, scalable business idea that could contribute to the UK’s economy and create jobs while also offering a sustainable and profitable model for growth.
          </p>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Key Benefits of the UK Innovator Visa</h3>
          <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Flexible Entry Requirements:</strong> Accessible for entrepreneurs with a unique business idea that meets endorsement and funding requirements, without needing large upfront capital.</li>
            <li><strong>Longer Duration & Path to Settlement:</strong> Stay in the UK for up to 3 years, with the possibility of extension and eligibility for Indefinite Leave to Remain (ILR) after 3 years.</li>
            <li><strong>Access to the UK’s Thriving Ecosystem:</strong> Connect with investors, accelerators, and networks to help grow your business.</li>
            <li><strong>Family Inclusion:</strong> Bring your spouse or partner and children under 18 to settle in the UK with you.</li>
            <li><strong>No Minimum Investment Requirement:</strong> Qualify with a viable and scalable business idea endorsed by an accredited body, without demonstrating large investment funds upfront.</li>
            <li><strong>Permission to Work & Scale Your Business:</strong> Work full-time on your business and expand operations without restrictions.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Key Eligibility Criteria</h3>
          <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Endorsement by an Approved Organization:</strong> Your business idea must be endorsed by an approved UK endorsing body.</li>
            <li><strong>Business Idea Requirements:</strong> The business should be innovative, viable, and scalable, with growth potential in the UK market and beyond.</li>
            <li><strong>English Language Proficiency:</strong> Demonstrate proficiency at CEFR Level B2 via a recognized test or equivalent qualifications.</li>
            <li><strong>Financial Requirements:</strong> Have at least £1,270 in your bank account for 28 days prior to application, unless financially guaranteed by the endorsing body.</li>
            <li><strong>No Need for Initial Investment Funds:</strong> Qualify based on the credibility of your business plan, not by demonstrating large capital funds.</li>
          </ul>
      
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>How VJC Overseas Can Help You</h3>
          <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Business Idea Validation & Endorsement Process:</strong> We help refine your business idea and guide it through the endorsement process with recognized bodies.</li>
            <li><strong>Visa Application Support:</strong> End-to-end support with document preparation and Home Office submission.</li>
            <li><strong>Business Plan Development:</strong> Assistance in crafting a compelling business plan aligned with UK immigration standards.</li>
            <li><strong>Post-Visa Support & Settling in the UK:</strong> Guidance for establishing your business in the UK and navigating settlement processes.</li>
          </ul>
      
          <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: '20px' }}>Conclusion</h3>
          <p style={{ marginBottom: '20px' }}>
            The UK Innovator Visa offers an exciting opportunity for entrepreneurs to bring their ideas to life and expand their businesses in one of the world’s most dynamic economies. Whether you’re looking to launch a startup or grow an existing business, the UK provides a platform to transform your vision into reality.
          </p>
          <p style={{ marginBottom: '20px' }}>
            At VJC Overseas, we’re committed to supporting you on your entrepreneurial journey. Our team of immigration experts ensures a seamless process, from securing your endorsement to guiding you through the visa application.
          </p>
          <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: '20px' }}>
            Start your innovation journey with VJC Overseas — where opportunities meet expertise.
          </h3>
        </div>
      );
      
 
};

export default Content;
