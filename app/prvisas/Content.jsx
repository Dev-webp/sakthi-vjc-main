import React from "react";
import Image from "next/image";

const Content = ({ selectedVisa }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Permanent Residency Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p>
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we understand that securing permanent residency in a new country is a significant milestone in your life. It represents new opportunities, stability, and a fresh start. Whether you’re looking to move for work, education, family reunification, or personal growth, we are committed to helping you navigate the complex visa process with ease and confidence.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span> for Your Permanent Resident Visa?</h3>
      <p>
        With years of experience and expertise in immigration law, <span className="text-orange-500">VJC Overseas</span> stands as a trusted partner for individuals and families looking to become permanent residents in some of the world’s most desirable destinations. Our team of immigration consultants works closely with you to ensure that your application is thorough, accurate, and meets all legal requirements.
      </p>
      <p>
        We specialize in various immigration pathways, including skilled migration, family sponsorships, business investment visas, and more. Our in-depth knowledge of the latest immigration policies and procedures ensures that we can guide you through the complexities of each process to maximize your chances of approval.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Permanent Residency – A Gateway to Your Future</h3>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li><strong>Long-Term Stability:</strong> Live, work, and study in your new country indefinitely, without the need for frequent visa renewals.</li>
        <li><strong>Access to Healthcare and Social Benefits:</strong> Many countries offer permanent residents access to essential healthcare and social services.</li>
        <li><strong>Pathway to Citizenship:</strong> Permanent residency often leads to citizenship with added rights like voting and passport privileges.</li>
        <li><strong>Family Reunification:</strong> Sponsor your loved ones and build your future together in your new home country.</li>
      </ul>

      {/* Expertise Section with Image */}
      <div className="flex flex-col md:flex-row items-start gap-6 mt-8">
        {/* Text Content */}
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Our Expertise: Permanent Resident Visa Categories
          </h3>
          <ol className="list-decimal list-inside pl-4 space-y-1">
            <li><strong>Skilled Worker Visa:</strong> For professionals with in-demand skills in destination countries.</li>
            <li><strong>Family Sponsorship Visa:</strong> Reunite with your spouse, children, or parents easily and legally.</li>
            <li><strong>Investment & Entrepreneur Visas:</strong> Leverage your business acumen or investments to secure residency.</li>
            <li><strong>Student to PR Pathway:</strong> Transition from student visa to permanent residency after your studies.</li>
            <li><strong>Refugee and Humanitarian Visa:</strong> Get support for immigration on humanitarian grounds.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            How <span className="text-orange-500">VJC Overseas</span> Can Help
          </h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li><strong>Eligibility Assessment:</strong> We evaluate your profile and recommend suitable PR programs.</li>
            <li><strong>Visa Strategy:</strong> We craft a tailored immigration strategy based on your background and goals.</li>
            <li><strong>Application Preparation:</strong> Accurate, timely and professional documentation handling.</li>
            <li><strong>Document Guidance:</strong> Assistance in gathering and presenting required documents.</li>
            <li><strong>Ongoing Support:</strong> Stay informed and supported throughout your visa journey.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className=" ">
          <Image
            src="/permanent residency.png" // Make sure this image exists in /public
            alt="PR Visa Support"
            width={500}
            height={450}
          
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Start Your Journey Today</h3>
      <p>
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we believe that everyone deserves the chance to build a better future. Our Permanent Resident Visa services are designed to make the immigration process as smooth and hassle-free as possible.
      </p>
      <p>
        Whether you're just starting your immigration journey or need assistance with an ongoing application, our team is ready to help you every step of the way. Get in touch with us today to schedule your consultation and take the first step toward securing your permanent residency!
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Contact Us Today!</h3>
      <p>
        Let <span className="text-orange-500 font-semibold">VJC Overseas</span> be your trusted guide to permanent residency. Reach out to our expert immigration consultants now and start your journey towards a new chapter in life.
      </p>
    </div>
  );
};

export default Content;
