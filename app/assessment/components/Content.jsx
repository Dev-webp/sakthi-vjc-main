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
  <h3 className="text-3xl font-semibold text-black text-center">
    Germany Opportunity Card - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
  </h3>
</div>

        
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>
        VJC Overseas: Germany Opportunity Card – Your Gateway to a Bright Future
      </h3>
      <p style={{ marginBottom: '20px' }}>
        At VJC Overseas, we take immense pride in offering one of the most promising pathways to secure a future in Germany: the Germany Opportunity Card. This new, innovative initiative has opened up exciting prospects for skilled professionals, allowing them to live and work in one of Europe’s most thriving economies.
      </p>
      

      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">

      <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/gocimg.png"
            alt="Germany Opportunity Card"
            width={320} // Adjust width as per requirement
            height={280} // Adjust height as per requirement
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
          />
        </div>

  {/* Text Section */}
  <div className="px-4 lg:px-0">
    <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
      What is the Germany Opportunity Card?
    </h3>
    <p className="mb-4 text-sm sm:text-base">
      The Germany Opportunity Card is a new immigration pathway designed for
      highly skilled workers from outside the European Union to move to
      Germany. The card offers a flexible and faster approach to obtaining a
      residence permit for work purposes, especially for those in fields where
      there is a recognized skills shortage.
    </p>
   
  </div>
</div>
      
<p className="hidden lg:block">
  This opportunity card is the perfect solution for individuals seeking to
  explore career opportunities, enhance professional growth, and experience
  life in one of the world’s most advanced countries.
</p>



      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Why Choose VJC Overseas?</h3>
      <p style={{ marginBottom: '20px' }}>
        At VJC Overseas, our mission is to simplify the process for professionals looking to move to Germany. With our unparalleled expertise and deep understanding of the German immigration system, we ensure that every step of your application is handled with care, precision, and efficiency.
      </p>
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Why is the Germany Opportunity Card a Game Changer?</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li><strong style={{color:'rgb(3, 60, 65)', fontWeight:'bolder'}}>1.Faster Processing Times:</strong> The new card allows quicker processing of skilled professionals into Germany`s workforce.</li>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>2.Job Flexibility:</strong> The Germany Opportunity Card allows professionals to enter Germany without needing a prior job offer. You can arrive in Germany and search for a job within your field of expertise once you’re there.</li>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>3.Permanent Residency Path:</strong> After holding the Germany Opportunity Card for a certain number of years, you may be eligible to apply for permanent residency.</li>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>4.Visa Approvals at Record Speed:</strong> Our proven approach ensures that applications are handled efficiently, increasing the likelihood of approval and reducing delays.</li>
      </ul>
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>VJC Overseas – Your Trusted Partner for Success</h3>
      <p style={{ marginBottom: '20px' }}>Here at VJC Overseas, we pride ourselves on providing clear, transparent, and expert guidance throughout your journey.</p>
      <p style={{ marginBottom: '20px' }}>We understand that relocating to a new country can feel overwhelming, but our team is here to make the process seamless and stress-free.</p>
      <p style={{ marginBottom: '20px' }}>Our unparalleled success in securing visas — with new approvals coming in every alternate day — speaks volumes about our dedication and expertise.</p>
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>The VJC Overseas Advantage:</h3>
      <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>Expert Consultation:</strong> We provide tailored advice on the most effective path for your individual needs.</li>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>Customized Job Search Assistance:</strong> Our extensive network of German employers helps you find the right job to match your skills.</li>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>Comprehensive Visa Support:</strong> From start to finish, we assist with all the required documentation and processes for a smooth visa approval.</li>
        <li><strong style={{color:'rgb(3, 60, 65)'}}>Rapid Success Rate:</strong> With visa approvals every alternate day, we have earned a reputation for being reliable, fast, and results-oriented.</li>
      </ul>
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' , color:'brown', fontWeight:'bold' }}>Success Stories</h3>
      <p style={{ marginBottom: '20px',fontFamily:'cursive', fontSize:'14px' }}>We are proud to have helped hundreds of professionals and families successfully relocate to Germany. Hear from our satisfied clients who are now thriving in their new careers:</p>
      <p style={{ marginBottom: '20px',fontFamily:'cursive', fontSize:'14px' }}>``I never thought that applying for the Germany Opportunity Card would be this easy. Thanks to VJC Overseas, my visa was approved quickly, and I found a great job within just a few months.`` — Anjali S., Software Developer</p>
      <h3 style={{ marginBottom: '20px',fontFamily:'cursive', fontSize:'14px', fontWeight:'bolder' }}>Start Your Journey Today</h3>
      <p style={{ marginBottom: '20px',fontFamily:'cursive', fontSize:'14px' }}>Ready to take the next step in your career? The Germany Opportunity Card offers a unique chance to live, work, and thrive in one of Europe’s most prosperous countries. With VJC Overseas, your path to success is just a few steps away.</p>
      <p style={{ marginBottom: '20px', fontSize:'15px', fontWeight:'bolder' }}>Contact us today for a free consultation and let us guide you toward securing your Germany Opportunity Card.</p>
    </div>
  );
};

export default Content;
