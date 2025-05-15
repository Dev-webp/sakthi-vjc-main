import React from "react";
import Image from "next/image";

const Content = () => {
    return (
        <div
          style={{
            position: "relative",
            padding: "50px",
            boxSizing: "border-box",
            backgroundColor: "white",
            fontFamily: "Times New Roman",
            overflow: "hidden",
            marginTop:'-7%',
          }}
        >
          <div style={{ marginBottom: "40px", marginTop:'20px' }}>
            <h3 className="text-2xl font-semibold text-black text-center">
            <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>: Study in the UK – Your Gateway to World-Class Education
            </h3>
          </div>
    
          <p style={{ marginBottom: "20px" }}>
            At VJC Overseas, we aim to simplify your journey to studying in the UK by providing expert guidance
            on the visa process, university selection, and application process.
          </p>
    
          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0" style={{marginBottom:'20px'}}>
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/UKstudimage.png"
                alt="UK Study Image"
                width={500} 
                height={300}

                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
              />
            </div>
    
            {/* Text Section */}
            <div className="px-4 lg:px-0">
              <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
                What Makes the UK a Top Destination for Students?
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                The UK boasts world-class universities, diverse cultural experiences, and excellent career
                opportunities for international students. From obtaining a student visa to understanding tuition
                fees and living costs, VJC Overseas is here to guide you every step of the way.
              </p>
            </div>
          </div>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>UK Study Visa: Key Highlights</h3>
          <ul style={{ marginBottom: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)", fontWeight: "bolder" }}>Step 1:</strong> Choose your
              course and university, receive your CAS (Confirmation of Acceptance for Studies).
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Step 2:</strong> Meet visa requirements, including
              financial proof and English proficiency.
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Step 3:</strong> Submit your visa application online.
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>Step 4:</strong> Attend your biometrics appointment
              and await your visa decision.
            </li>
          </ul>
    
          <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>Top UK Universities</h3>
          <ul style={{ marginBottom: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>University of Oxford:</strong> £26,770–£38,010/year
              (undergraduate).
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>University of Cambridge:</strong> £22,227–£58,038/year
              (undergraduate).
            </li>
            <li>
              <strong style={{ color: "rgb(3, 60, 65)" }}>London School of Economics:</strong> £22,000–£31,000/year
              (undergraduate).
            </li>
          </ul>
    
          <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: "20px" }}>Success Stories</h3>
          <p style={{ marginBottom: "20px", fontFamily: "cursive", fontSize: "14px" }}>
            ``I never thought studying in the UK would be so easy. Thanks to VJC Overseas, my visa process was
            seamless, and I got admission to my dream university!`` — Ravi K., Engineering Student
          </p>
    
          <h3 style={{ marginBottom: "20px", fontFamily: "cursive", fontSize: "14px", fontWeight: "bolder" }}>
            Start Your Journey Today
          </h3>
          <p style={{ marginBottom: "20px", fontFamily: "cursive", fontSize: "14px" }}>
            Ready to begin? Contact us today for expert consultation on studying in the UK.
          </p>
        </div>
      );
 
    
   
};

export default Content;
