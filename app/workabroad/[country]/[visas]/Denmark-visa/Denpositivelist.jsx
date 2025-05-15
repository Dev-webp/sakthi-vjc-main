import React from "react";
import Image from "next/image";

const DenmarkPositiveListVisa = () => {
  return (
    <div className="font-[Times New Roman] p-5 mt-6 leading-relaxed">
      <h1 className="text-2xl font-bold text-center mb-4 text-black">
  Denmark Positive List Visa for Indians:{" "}
  <span className="text-blue-400">Unlocking Opportunities in Denmark</span>
</h1>


      {/* Introduction with Image */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="flex-1">
          <p>
            Are you an Indian professional seeking to build a prosperous career in Denmark? The Denmark Positive List Visa is your gateway to a brighter future. This visa program is designed for skilled professionals in specific fields that are in demand in Denmark, 
          </p>

         
        </div>
        <div className="w-full md:w-[300px] h-auto mt-4 md:mt-0 rounded-md shadow-lg overflow-hidden relative">
          <Image
            src="/denmarkpositivelist.jpg" // Make sure this image is in the public folder
            alt="Denmark Positive List Visa"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
      <p>
            offering a unique opportunity for individuals who meet the criteria. If you have the right qualifications, you can live and work in Denmark, one of the happiest and most welcoming countries in the world.
          </p>
      <h2 className="text-xl font-bold mt-4 mb-2 text-black">What is the Denmark Positive List Visa?</h2>
      <p>
        The Denmark Positive List Visa is a special work visa designed for individuals who have expertise in fields where Denmark is facing a shortage of skilled professionals. The list includes various sectors such as engineering, IT, healthcare, education, and other high-demand professions. The Positive List is updated regularly, ensuring that the visa program aligns with Denmark's current labor market needs.
      </p>
      <p>
        If you are a skilled worker in one of these fields, you are eligible to apply for this work visa, allowing you to reside and work in Denmark. This visa offers an excellent chance for Indians to expand their career horizons in an advanced, well-structured economy.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">Benefits of Applying for the Denmark Positive List Visa</h2>
      <ul className="list-disc pl-6">
        <li><strong>Permanent Residency Pathway:</strong> After several years, you may apply for permanent residency and even citizenship.</li>
        <li><strong>High Demand Jobs with Great Salaries:</strong> Enjoy competitive salaries and strong labor protections.</li>
        <li><strong>Access to a Quality Education System:</strong> Residents benefit from Denmark’s excellent and often free education.</li>
        <li><strong>Work-Life Balance:</strong> Denmark offers an outstanding quality of life, great healthcare, and green living.</li>
        <li><strong>Social Welfare Benefits:</strong> Get healthcare, unemployment benefits, parental leave, and more.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">Cost of Living in Denmark for Indians</h2>
      <ul className="list-disc pl-6">
        <li><strong>Accommodation:</strong> INR 40,000–1,00,000/month depending on the city.</li>
        <li><strong>Food & Groceries:</strong> INR 15,000–20,000/month. Dining out: INR 800–2,500 per meal.</li>
        <li><strong>Transportation:</strong> INR 5,000–8,000/month for public transport.</li>
        <li><strong>Healthcare:</strong> Covered by taxes; accessible and high-quality care for residents.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">Other Useful Information for Indians in Denmark</h2>
      <ul className="list-disc pl-6">
        <li><strong>Language:</strong> Danish is official, but English is widely used.</li>
        <li><strong>Work Culture:</strong> Collaborative, balanced, and employee-focused.</li>
        <li><strong>Indian Community:</strong> Supportive network of Indian expats and cultural groups.</li>
        <li><strong>Taxes:</strong> High, but fund excellent services and social security.</li>
        <li><strong>Family Reunification:</strong> Bring your spouse and children with you.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">How to Apply for the Denmark Positive List Visa</h2>
      <ul className="list-disc pl-6">
        <li><strong>Check Eligibility:</strong> Your profession must be on the Positive List.</li>
        <li><strong>Gather Documents:</strong> Educational, professional, and job offer proofs.</li>
        <li><strong>Submit Application:</strong> Through the SIRI (Danish Agency for International Recruitment and Integration) portal.</li>
        <li><strong>Wait for Approval:</strong> You’ll be notified once your application is processed.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">Conclusion: Make Your Career Flourish in Denmark</h2>
      <p>
        The Denmark Positive List Visa opens doors to new career opportunities in one of Europe’s most prosperous and innovative countries. If you’re an Indian professional looking to make a significant career move, this visa is the perfect opportunity.
      </p>
      <p>
        With high salaries, a high standard of living, and access to great social benefits, living and working in Denmark can offer you the perfect balance of career growth and personal well-being.
      </p>
      <p className="mt-2">
        <strong>Ready to take the next step?</strong> Apply for the Denmark Positive List Visa today and begin your new life in Denmark!
      </p>
    </div>
  );
};

export default DenmarkPositiveListVisa;
