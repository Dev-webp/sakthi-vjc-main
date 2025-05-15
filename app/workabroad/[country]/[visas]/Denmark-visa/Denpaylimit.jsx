import React from "react";
import Image from "next/image";

const DenmarkPayLimitScheme = () => {
  return (
    <div className="font-[Times New Roman] p-5 mt-6 leading-relaxed">
      <h1 className="text-2xl font-bold text-center mb-4 text-black">
        Denmark Pay Limit Scheme Visa: A Gateway to Work & Settle in Denmark
      </h1>

      {/* First paragraph with image */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="flex-1">
          <p>
            Are you an Indian professional looking for high-paying job
            opportunities in Denmark? The Denmark Pay Limit Scheme Visa could be
            your gateway to a fulfilling career and a new life in Denmark!
          </p>
        </div>

        <div className="w-full md:w-[300px] h-auto mt-4 md:mt-0 rounded-md shadow-lg overflow-hidden relative">
          <Image
            src="/denmarkpaylimit.jpg" // make sure this image is in the /public folder
            alt="Denmark Visa Information"
            width={300}
            height={200}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <p className="mt-4">
        At{" "}
        <span className="font-semibold text-orange-500">VJC Overseas</span>, we
        help skilled professionals navigate their visa journey with ease. In
        this guide, we’ll explain everything you need to know about the Denmark
        Pay Limit Scheme Visa – from its benefits to eligibility, cost of
        living, and more.
      </p>

      <h2 className="text-xl font-bold mt-6 text-black">
        What is the Denmark Pay Limit Scheme Visa?
      </h2>
      <p>
        The Denmark Pay Limit Scheme Visa is a special visa designed for highly
        skilled foreign workers in professions that require advanced expertise.
        It is tailored to attract professionals in high-demand sectors like
        technology, healthcare, finance, and engineering.
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>
          <strong>High Salary Threshold:</strong> Applicants must have a job
          offer with a salary above a certain threshold (varies annually).
        </li>
        <li>
          <strong>Skilled Professionals:</strong> Ideal for those with
          experience in key sectors.
        </li>
        <li>
          <strong>Work & Residency Benefits:</strong> Allows you to work and
          live in Denmark, with the option for permanent residency after 4
          years.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 text-black">
        Benefits of Applying for the Denmark Pay Limit Scheme Visa
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Lucrative Salary Packages:</strong> Earn a competitive salary
          that supports career growth and financial well-being.
        </li>
        <li>
          <strong>Pathway to Permanent Residency:</strong> Become eligible for
          permanent residency after 4 years of working in Denmark.
        </li>
        <li>
          <strong>Access to Social Security and Healthcare:</strong> Enjoy the
          same healthcare and benefits as Danish citizens.
        </li>
        <li>
          <strong>High Quality of Life:</strong> Live in one of the happiest,
          safest, and most progressive countries in the world.
        </li>
        <li>
          <strong>Family Benefits:</strong> Bring your spouse and children to
          live, study, and work in Denmark.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 text-black">
        Eligibility Criteria for the Denmark Pay Limit Scheme Visa
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Job Offer:</strong> You must have a valid job offer from a
          Danish employer that meets the salary threshold.
        </li>
        <li>
          <strong>Salary Threshold:</strong> Ensure the job pays the minimum
          salary set by the Danish government (updated annually).
        </li>
        <li>
          <strong>Qualifications:</strong> Hold relevant qualifications or work
          experience for the offered job.
        </li>
        <li>
          <strong>Residence:</strong> You can live and work in Denmark for up to
          4 years, with extensions possible.
        </li>
      </ul>
      <p className="mt-2">
        💡 Tip: Salary thresholds are updated annually.{" "}
        <span className="text-orange-500 font-semibold">VJC Overseas</span> will
        keep you informed and help ensure compliance.
      </p>

      <h2 className="text-xl font-bold mt-6 text-black">
        Cost of Living in Denmark: What to Expect
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Accommodation:</strong> DKK 7,000–12,000/month in Copenhagen;
          DKK 5,000–9,000 outside.
        </li>
        <li>
          <strong>Food & Groceries:</strong> Monthly grocery expenses range from
          DKK 2,000 to DKK 3,500. Dining out can cost DKK 200–350 per meal.
        </li>
        <li>
          <strong>Transportation:</strong> Monthly public transport passes cost
          DKK 400–800. Petrol costs DKK 12–15/liter.
        </li>
        <li>
          <strong>Health Insurance:</strong> Public healthcare is covered.
          Private insurance (optional) costs DKK 500–1,500/month.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 text-black">
        Useful Information for Indians Moving to Denmark
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Language:</strong> Danish is official, but English is widely
          spoken. Learning Danish is helpful.
        </li>
        <li>
          <strong>Work Culture:</strong> Work-life balance is prioritized.
          Standard hours are 9 AM–4:30 PM with ample vacation time.
        </li>
        <li>
          <strong>Taxation:</strong> Taxes range from 30% to 50%, offset by
          world-class public services.
        </li>
        <li>
          <strong>Cultural Integration:</strong> Denmark is multicultural.
          Indian communities, restaurants, and temples are accessible.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 text-black">
        Why Choose <span className="text-orange-500">VJC Overseas</span> for
        Your Denmark Pay Limit Scheme Visa?
      </h2>
      <p>
        At{" "}
        <span className="text-orange-500 font-semibold">VJC Overseas</span>, we
        specialize in assisting Indian professionals in securing their Denmark
        Pay Limit Scheme Visa. Our end-to-end support includes job placement,
        documentation guidance, and visa application processing – all tailored
        to ensure a seamless transition to Denmark.
      </p>

      <h2 className="text-xl font-bold mt-6 text-black">
        Ready to start your journey?
      </h2>
      <p>
        Contact{" "}
        <span className="text-orange-500 font-semibold">VJC Overseas</span>{" "}
        today for expert guidance and personalized support. Let us help turn
        your dream of living and working in Denmark into a reality!
      </p>
    </div>
  );
};

export default DenmarkPayLimitScheme;
