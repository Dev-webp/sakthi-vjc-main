import React from 'react';
import Image from "next/image";

const GermanyJobseekerVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
          <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
            Germany Jobseeker Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
          </h1>
    
          {/* Image and Intro Text Side by Side */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/germany-job-seeker-visa.jpg"
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
        Are you looking to take the next step in your career by working in Germany? The Germany Jobseeker Visa offers an exciting
        opportunity for skilled professionals to live and work in one of Europe’s strongest economies. At <span className="text-orange-500">VJC Overseas</span>,
        we specialize in guiding you through every step of the application process, helping you unlock a world of career opportunities in Germany.
      </p>
      </div>
      </div>
      <h2 className="text-xl font-bold mt-4 md-2" style={{ fontFamily: 'Times New Roman' }}>What is the Germany Jobseeker Visa?</h2>
      <p className="mt-2 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        The Germany Jobseeker Visa allows qualified professionals from non-EU countries to travel to Germany for up to six months to search for a job.
        This visa is designed for individuals who have the skills and qualifications that are in demand in Germany’s labour market but don’t yet have a concrete job offer.
      </p>

      <h2 className="text-xl font-bold mt-4 md-2" style={{ fontFamily: 'Times New Roman' }}>Who Can Apply for the Germany Jobseeker Visa?</h2>
      <ul className="list-disc ml-6 mt-2 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li>Qualifications: You must hold a recognized university degree or equivalent qualification.</li>
        <li>Work Experience: Relevant professional experience in your field can increase your chances of securing a job.</li>
        <li>Financial Stability: Proof of sufficient funds to support yourself during your stay in Germany.</li>
        <li>Language Skills: While German language skills are not mandatory, proficiency in German can improve your chances of finding a job.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 md-2" style={{ fontFamily: 'Times New Roman' }}>Living Expenses and Lifestyle in Germany</h2>
      <ul className="list-disc ml-6 mt-2 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li>Cost of Living: €700 to €1,200 per month, depending on the city.</li>
        <li>Accommodation: Rent in major cities ranges from €800–€1,500 per month.</li>
        <li>Health Insurance: Mandatory for all residents in Germany.</li>
        <li>Public Transport: Monthly passes cost around €70–€100.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 md-2" style={{ fontFamily: 'Times New Roman' }}>Processing Time for the Germany Jobseeker Visa</h2>
      <p className="mt-2 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        The processing time varies between 4 to 12 weeks, depending on the application completeness and the specific visa office handling your case.
      </p>

      <h2 className="text-xl font-bold mt-4 md-2" style={{ fontFamily: 'Times New Roman' }}>Visa Fees</h2>
      <p className="mt-2 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        The visa application fee is approximately €75, and applicants must show proof of sufficient funds of around €6,000 for six months.
      </p>

      <h2 className="text-xl font-bold mt-4 md-2" style={{ fontFamily: 'Times New Roman' }}>How <span className="text-orange-500">VJC Overseas</span> Can Help You</h2>
      <ul className="list-disc ml-6 mt-2 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li>Visa Application Assistance</li>
        <li>Job Search Guidance</li>
        <li>Accommodation and Living Advice</li>
        <li>Ongoing Career Support</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 md-2 text-center" style={{ fontFamily: 'Times New Roman' }}>
        Start your journey today with <span className="text-orange-500">VJC Overseas</span>
      </h2>
      <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Times New Roman' }}>
        We are committed to helping you succeed in your career and make Germany your new home. Contact us today to begin your application!
      </p>
    </div>
  );
};

export default GermanyJobseekerVisa;
