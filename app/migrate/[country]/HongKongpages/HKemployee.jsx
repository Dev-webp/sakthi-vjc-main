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
          Hong Kong Employment Visa - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
        </h3>
      </div>
  
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>
        Your Gateway to Working in Asia`s Financial Hub
      </h3>
      <p style={{ marginBottom: '20px' }}>
        Hong Kong, often regarded as one of the most dynamic financial and business hubs in the world, attracts professionals from all over the globe. Whether you’re looking to advance your career in finance, technology, or another field, obtaining an Employment Visa for Hong Kong is an essential step. At VJC Overseas, we are dedicated to helping you navigate the application process smoothly and efficiently, so you can focus on making the most of your career opportunities in this vibrant city.
      </p>
      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
  <div className="flex-shrink-0 mx-auto lg:mx-0">
    <Image
      src="/ukimage1.jpg"
      alt="Image description"
      width={500} // Replace with your image's actual width
      height={300}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
    />
  </div>

  <div className="px-4 lg:px-0">
          <h3 className="text-black font-semibold mb-2 text-md sm:text-lg">
          What is the Hong Kong Employment Visa?
</h3>

          <p>
          The1 Hong Kong Employment Visa, officially known as the <strong>General Employment Policy (GEP) visa</strong>, allows foreign professionals to work in Hong Kong in a job that requires specific skills or expertise. It is designed for individuals who have secured a job offer in Hong Kong that cannot be easily filled by local talent.
          </p>
          </div>

  
</div>

      <p style={{ marginBottom: '20px' }}>
        This visa is typically granted to professionals in industries such as finance, technology, education, healthcare, engineering, and various others where the demand for skilled labour exceeds the local supply.
      </p>
  
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Eligibility Requirements</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>1. Job Offer:</strong> You must have a confirmed job offer from a Hong Kong employer who is willing to sponsor your visa application.</li>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>2. Specialized Skills:</strong> The role must require specialized knowledge or skills that are not readily available in the local labour market.</li>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>3. Educational Qualifications:</strong> Applicants must possess a relevant degree or professional qualifications in the field of employment.</li>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>4. Salary Level:</strong> The job offer must meet the minimum salary level set by the Hong Kong government, ensuring it is competitive and in line with local standards.</li>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>5. Good Character:</strong> Applicants must not have a criminal record and must comply with immigration policies.</li>
      </ul>
  
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Employment Visa Processing Time</h3>
      <p style={{ marginBottom: '20px' }}>
        The processing time for a Hong Kong Employment Visa can vary, but on average, it takes around 4 to 8 weeks for the Immigration Department to process the application. However, it is important to factor in additional time for document preparation and potential delays, depending on your nationality or specific circumstances.
      </p>
      <p style={{ marginBottom: '20px' }}>
        For individuals from countries that have frequent visa applications to Hong Kong, the process may be faster. However, applicants from less common jurisdictions or those with complex cases may experience longer processing times.
      </p>
      <p style={{ marginBottom: '20px' }}>
        At VJC Overseas, we guide you through every step of the process, ensuring that your application is as streamlined and efficient as possible.
      </p>
  
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Hong Kong Employment Visa Fees</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Visa Application Fee:</strong> Approximately HKD 230 (around USD 30). This fee is non-refundable, even if your application is unsuccessful.</li>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Visa Issuance Fee:</strong> Once approved, the issuance fee for the visa sticker is approximately HKD 450 (around USD 58), depending on the visa`s duration.</li>
        <li><strong style={{ color: 'rgb(3, 60, 65)' }}>Dependent Visas:</strong> The application fee for each dependent visa is around HKD 230 (USD 30).</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>
        Fees are subject to change, so confirm the latest information with the Hong Kong Immigration Department or through VJC Overseas.
      </p>
  
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>How VJC Overseas Can Help</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li>Document Verification: Ensuring all your documents, including academic qualifications, work experience certificates, and passport, meet the requirements.</li>
        <li>Employer Coordination: Helping liaise with your Hong Kong-based employer to ensure they provide the correct sponsorship documentation.</li>
        <li>Visa Application Submission: Managing the submission process on your behalf, keeping you informed every step of the way.</li>
        <li>Follow-Up: Tracking your application’s progress and handling additional requests from the Hong Kong Immigration Department.</li>
      </ul>
  
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: '20px' }}>Conclusion</h3>
      <p style={{ marginBottom: '20px' }}>
        Securing an Employment Visa for Hong Kong can be a highly rewarding step for professionals looking to enhance their careers in one of Asia’s most thriving economies. With VJC Overseas, you can ensure a smooth and successful application process, giving you more time to prepare for your new life in Hong Kong.
      </p>
      <p style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '15px' }}>
        Ready to start your journey? Contact us today for expert guidance and support in obtaining your Hong Kong Employment Visa.
      </p>
    </div>
  );
  
};

export default Content;
