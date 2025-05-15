import Head from 'next/head';
import Image from "next/image";

export default function AustraliaResumeMarketing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      Australia Resume Marketing Services - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
     
        
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in Resume Marketing Services tailored for the Australian job market. Whether you're a skilled professional, a fresh graduate, or planning to relocate, our customized strategies ensure that your resume doesn’t just get noticed — it gets shortlisted.
          </p>
  

      {/* Why Choose Section */}
      <h3 className="text-lg font-semibold mt-8 mb-2 text-black">Why Choose <span className="text-orange-500">VJC Overseas</span> for Your Resume Marketing?</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Expert Resume Writers:</strong> Industry-experienced professionals craft your resume.</li>
        <li><strong>Tailored to Australian Standards:</strong> We align your CV with local job market expectations.</li>
        <li><strong>ATS Optimization:</strong> Boost visibility with Applicant Tracking System-friendly formatting.</li>
        <li><strong>Professional Formatting:</strong> Polished layout with strategic keyword placement.</li>
        <li><strong>Job Portal Distribution:</strong> Share your resume across top Australian job sites.</li>
        <li><strong>Real-time Feedback:</strong> Get iterative improvements through feedback loops.</li>
      </ul>
      
      {/* Salary Section */}
      <h3 className="text-lg font-semibold mt-8 mb-2 text-black">Average Salary Structure in Australia</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Healthcare & Medical:</strong> AUD $60,000 - $150,000 annually</li>
        <li><strong>Information Technology:</strong> AUD $80,000 - $150,000 per year</li>
        <li><strong>Construction & Trades:</strong> AUD $60,000 - $100,000 annually</li>
        <li><strong>Education & Training:</strong> AUD $60,000 - $90,000 yearly</li>
        <li><strong>Finance & Accounting:</strong> AUD $70,000 - $130,000 per year</li>
        <li><strong>Marketing & Sales:</strong> AUD $65,000 - $120,000 annually</li>
      </ul>

      {/* Work Opportunities */}
      <h3 className="text-lg font-semibold mt-8 mb-2 text-black">Work Opportunities in Australia</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Technology:</strong> Demand for cybersecurity, AI, and cloud professionals.</li>
        <li><strong>Healthcare:</strong> Doctors, nurses, and aged care professionals are in high demand.</li>
        <li><strong>Engineering:</strong> Civil, mechanical, and mining engineers are sought after.</li>
        <li><strong>Skilled Trades:</strong> Plumbers, electricians, and carpenters are urgently needed.</li>
        <li><strong>Education Sector:</strong> Teachers, lecturers, and academic professionals.</li>
      </ul>

      {/* Benefits of Working */}
      <h3 className="text-lg font-semibold mt-8 mb-2 text-black">Benefits of Working in Australia</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>High Income:</strong> Competitive salaries across all sectors.</li>
        <li><strong>Superannuation:</strong> Employers contribute 10.5% towards your retirement fund.</li>
        <li><strong>Free Healthcare:</strong> Access to Medicare and subsidized treatments.</li>
        <li><strong>Work-Life Balance:</strong> 4 weeks paid leave and public holidays.</li>
        <li><strong>Equality & Safety:</strong> Strong legal protections and anti-discrimination laws.</li>
      </ul>

      {/* Our Services */}
      <h3 className="text-lg font-semibold mt-8 mb-2 text-black">How <span className="text-orange-500">VJC Overseas</span> Can Help You</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Professional Resume Writing:</strong> Tailored to your industry and goals.</li>
        <li><strong>LinkedIn Profile Revamp:</strong> Improve visibility and recruiter reach.</li>
        <li><strong>Customized Cover Letters:</strong> Personalized for each job application.</li>
        <li><strong>Job Search Support:</strong> Regular job alerts and company match suggestions.</li>
        <li><strong>Interview Coaching:</strong> One-on-one mock sessions and expert tips.</li>
        <li><strong>Networking Guidance:</strong> Helping you connect with Australian professionals.</li>
      </ul>

      {/* Contact Section */}
      <h3 className="text-lg font-semibold mt-8 mb-2 text-black">Contact Us Today</h3>
      <p className="mb-2">
        Ready to take the next big step in your Australian career? Let <span className="text-orange-500 font-semibold">VJC Overseas</span> guide you through a professionally tailored resume marketing experience.
      </p>

      {/* Contact Details */}
      <div className="mt-4 space-y-1 text-sm md:text-base">
        <p><strong>Phone:</strong> +91-9160449000</p>
        <p><strong>Email:</strong> info@vjcoverseas.com</p>
        <p><strong>Website:</strong> <a href="https://www.vjcoverseas.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.vjcoverseas.com</a></p>
      </div>
    </div>
  );
}
