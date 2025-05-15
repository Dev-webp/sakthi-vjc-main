// components/studyabroad/Denmark.jsx
import React from "react";
import Image from "next/image";
const Denmark = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Heading */}
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-4 text-center whitespace-nowrap">
        Study in Denmark - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
       {/* Image and Intro Text Side by Side */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  src="/study-in-denmark.jpg"
                  alt="Canada Student Visa"
                  width={600}
                  height={400}
                  className=" w-full object-cover"
                />
              </div>
      
              {/* Text */}
              <div className="md:w-1/2 text-justify">
                <p className="mb-4">
    Studying in Denmark offers students an excellent opportunity to experience world-class education, a high standard of living, and an internationally recognized degree. At <span className="text-orange-500">VJC Overseas</span>, we guide you through every step of obtaining a Denmark student visa, ensuring a smooth application process so you can focus on your academic journey.
  </p>
  </div>
  </div>
  <h2 className="text-xl font-semibold mt-6">Why Study in Denmark?</h2>
  <p>
    Denmark is renowned for its innovative teaching methods, strong academic traditions, and high-quality institutions. With a mix of modern cities, beautiful landscapes, and a vibrant cultural scene, Denmark offers the perfect setting for both personal and academic growth. The country’s universities and colleges consistently rank among the best globally, making it an attractive destination for international students.
  </p>

  <h2 className="text-xl font-semibold mt-6">How to Apply for a Denmark Student Visa?</h2>
  <p>
    To study in Denmark, you need to apply for a student visa, officially known as the "Residence Permit for Studies." This permit allows you to live and study in Denmark for the duration of your course. At <span className="text-orange-500">VJC Overseas</span>, we make the process as easy as possible by providing step-by-step guidance on documentation, eligibility, and submission.
  </p>

  <h3 className="text-xl font-semibold mt-4">Eligibility Requirements:</h3>
  <ul className="list-disc ml-6 space-y-2">
    <li><strong>Admission to a Recognized Danish Educational Institution:</strong> You must have an acceptance letter from a government-recognized university or college.</li>
    <li><strong>Proof of Sufficient Funds:</strong> Demonstrate that you can cover your living expenses and tuition fees.</li>
    <li><strong>Health Insurance:</strong> Valid health insurance coverage during your stay is required.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">Documents Required:</h3>
  <ul className="list-disc ml-6 space-y-2">
    <li>Valid passport (at least 3 months beyond your intended stay)</li>
    <li>Letter of acceptance from a Danish educational institution</li>
    <li>Proof of sufficient financial means (approx. DKK 7,000/month)</li>
    <li>Health insurance documentation</li>
    <li>Proof of housing arrangements in Denmark</li>
    <li>Academic transcripts and certificates</li>
    <li>Language proficiency proof (if applicable)</li>
  </ul>

  <h2 className="text-xl font-semibold mt-4 md-2">College and University Fees in Denmark</h2>
  <p>
    Denmark offers a wide range of academic programs across bachelor's, master's, and Ph.D. levels. Tuition fees depend on your course, university, and program level.
  </p>

  <h3 className="text-xl font-semibold mt-4 md-2">Tuition Fees:</h3>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Public Universities:</strong> DKK 45,000 – DKK 120,000 per year (€6,000 – €16,000) for non-EU/EEA students.</li>
    <li><strong>Private Institutions:</strong> DKK 50,000 – DKK 150,000 per year, depending on the course and institution.</li>
  </ul>
  <p>
    <span className="text-orange-500">VJC Overseas</span> provides updated and personalized tuition guidance based on your selected universities and programs.
  </p>

  <h3 className="text-xl font-semibold mt-4 md-2">Living Expenses:</h3>
  <p>
    The average cost of living is around DKK 6,000 – DKK 8,000/month (€800 – €1,100), covering accommodation, food, transport, and personal expenses. Denmark offers various student discounts to help manage costs.
  </p>

  <h2 className="text-xl font-semibold mt-4 md-2">Denmark Student Visa Processing Time</h2>
  <p>
    Processing time is typically 4 to 8 weeks. Apply at least 3 months before your planned travel date. <span className="text-orange-500">VJC Overseas</span> ensures timely and accurate application submission to avoid delays.
  </p>

  <h2 className="text-xl font-semibold mt-4 md-2">Visa Fees</h2>
  <p>
    The visa fee is around DKK 1,750 (approximately €230), non-refundable. Our experts at <span className="text-orange-500">VJC Overseas</span> will help ensure your documents are fully ready before submission.
  </p>

  <h2 className="text-xl font-semibold mt-4 md-2">Why Choose <span className="text-orange-500">VJC Overseas</span> for Your Denmark Student Visa?</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Comprehensive Visa Guidance:</strong> From document prep to visa interviews, we’ve got you covered.</li>
    <li><strong>University and Course Selection:</strong> We help you find the best fit for your interests and career goals.</li>
    <li><strong>Ongoing Support:</strong> Our team supports you from application to settling down in Denmark.</li>
  </ul>
  <p>
    Let <span className="text-orange-500">VJC Overseas</span> simplify your Denmark student visa journey so you can focus on what really matters—your education and future!
  </p>

  <h2 className="text-xl font-semibold mt-4 md-2">Contact Us Today</h2>
  <p>
    For more details on Denmark student visas, tuition fees, and living arrangements, reach out to <span className="text-orange-500">VJC Overseas</span>:
  </p>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Phone:</strong> +91-9160449000</li>
    <li><strong>Email:</strong> info@vjcoverseas.com</li>
    <li><strong>Office Hours:</strong> 10 AM – 7 PM</li>
    <li><strong>Locations:</strong> Hyderabad | Bengaluru | USA</li>
  </ul>
  <p>
    Explore the opportunities waiting for you in Denmark with <span className="text-orange-500">VJC Overseas</span> – your gateway to a brighter academic future!
  </p>
</div>

  );
};

export default Denmark;
