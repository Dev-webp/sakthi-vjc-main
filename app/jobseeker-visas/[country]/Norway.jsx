import Image from "next/image";
const NorwayJobseekerVisa = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
          <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
            Norway Jobseeker Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
          </h1> {/* Image and Intro Text Side by Side */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                      {/* Image */}
                      <div className="md:w-1/2 w-full">
                        <Image
                          src="/norway-jobseeker.jpg"
                          alt=" germany jobseeker Guidance by VJC Overseas"
                          width={700}
                          height={400}
                          className="w-full object-cover "
                          priority
                        />
                      </div>
              
                      {/* Text */}
                      <div className="md:w-1/2 text-justify">
                        <p className="mb-4 ">
          Are you looking to start a new career in one of Europe’s most vibrant and prosperous countries? With its stunning landscapes, high standard of living, and robust economy, Norway offers fantastic opportunities for skilled professionals seeking employment. The Norway Jobseeker Visa allows you to travel to Norway and search for a job, providing you the chance to explore the country while pursuing your career goals.
        </p>
        </div>
        </div>
        <p>
          At <span className="text-orange-500">VJC Overseas</span>, we help you navigate the application process for the Norway Jobseeker Visa, ensuring that you have all the necessary documentation and information to maximize your chances of success.
        </p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">What is the Norway Jobseeker Visa?</h2>
        <p>
          The Norway Jobseeker Visa is a residence permit that allows non-EU/EEA nationals to enter Norway for up to 6 months to look for a job. This visa is a great option for skilled professionals, researchers, and those looking to explore the job market in Norway before applying for a long-term work permit.
        </p>
        <p>
          During your stay, you can search for work, attend interviews, and network with potential employers. Once you secure a job offer, you can transition to a regular work visa.
        </p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Key Requirements for the Jobseeker Visa</h2>
        <ul className="list-disc pl-6">
          <li><strong>Educational Qualifications:</strong> You must have a higher education degree or relevant work experience.</li>
          <li><strong>Proof of Funds:</strong> You need to show that you can financially support yourself during your stay in Norway.</li>
          <li><strong>Health Insurance:</strong> Applicants must show proof of comprehensive health insurance.</li>
          <li><strong>Accommodation:</strong> You must show proof of your accommodation arrangements in Norway.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Living in Norway: Lifestyle and Expenses</h2>
        <p>
          Norway is famous for its high quality of life, incredible natural beauty, and excellent public services. While living costs can be higher than in many other countries, the wages are also competitive, and social welfare systems provide extensive support.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Cost of Living</h3>
        <ul className="list-disc pl-6">
          <li><strong>Accommodation:</strong> Renting an apartment in Oslo costs NOK 10,000–15,000 per month.</li>
          <li><strong>Groceries and Food:</strong> Monthly expenses range between NOK 3,000 to NOK 4,500.</li>
          <li><strong>Transportation:</strong> Public transport passes cost between NOK 600 to NOK 1,000 per month.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Processing Time for the Norway Jobseeker Visa</h2>
        <p>The processing time typically ranges from 6 to 8 weeks.</p>
        <h3 className="text-xl font-semibold mt-4">Tips to Speed Up Processing:</h3>
        <ul className="list-disc pl-6">
          <li>Ensure all documentation is complete and accurate.</li>
          <li>Provide clear proof of financial support and insurance.</li>
          <li>Submit additional supporting documents like letters of recommendation.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Norway Jobseeker Visa Fees</h2>
        <p>The visa application fee is approximately NOK 6,300 (around USD 600).</p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
        <p>
          At <span className="text-orange-500">VJC Overseas</span>, we specialize in providing professional assistance with visa applications for Norway and other countries in Europe. Our team ensures your documents are in order and guides you every step of the way.
        </p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Contact Us</h2>
        <p>For more details, get in touch with our experienced visa consultants at <span className="text-orange-500">VJC Overseas</span>.</p>
        <p><strong>Phone:</strong> +91-9160449000</p>
        <p><strong>Email:</strong> info@vjcoverseas.com</p>
        <p><strong>Website:</strong> <a href="https://www.vjcoverseas.com" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>www.vjcoverseas.com</a></p>
        <p className="mt-4 font-bold">Let’s make your dream of working in Norway a reality!</p>
      </div>
    );
  };
  
  export default NorwayJobseekerVisa;
  