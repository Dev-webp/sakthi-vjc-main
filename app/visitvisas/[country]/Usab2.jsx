'use client';

import Image from 'next/image';

export default function USAB2Visa() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">USA B2 Tourist Visa – Your Gateway to Explore the United States</h1>
      <h2 className="text-xl mt-4 mb-2 font-semibold text-orange-500 mb-2">Plan Your Dream Visit with <span className="text-orange-500">VJC Overseas</span> – Expert Visa Guidance for Indian Travelers</h2>
          <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
          <div className="md:w-1/2">
         <p>Are you dreaming of exploring the bustling streets of New York, witnessing the magic of Hollywood, or visiting family in the USA? The USA B2 Visa is your ticket to experiencing America’s iconic landmarks, rich culture, and unforgettable adventures. At <span className="text-orange-500">VJC Overseas</span>, we specialize in helping Indian citizens navigate the USA B2 Visa application process with ease, accuracy, and expert care.</p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image src="/B-2-Tourist-Visa.jpg" alt="USA B2 Visa" width={350} height={270} className=" shadow-md" />
        </div>
      </div>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">🌍 What is the USA B2 Visa?</h3>
        <p>The USA B2 Visa is a non-immigrant visa designed for individuals visiting the United States temporarily for tourism, leisure, medical treatment, or family visits. It is part of the broader B-category of visas, and is the most common choice for Indian tourists planning a short stay in the USA.</p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">📅 Validity and Duration of Stay</h3>
        <ul className="list-disc ml-6">
          <li>Visa Validity: Typically valid for up to 10 years (Multiple Entry), depending on consulate discretion.</li>
          <li>Stay Duration: You can stay in the U.S. for a maximum of 6 months per visit.</li>
          <li>Extension: Possible under certain circumstances, but must be filed with USCIS before your current stay expires.</li>
        </ul>
        <p className="text-sm mt-2">✅ Pro Tip: Having a 10-year B2 visa doesn’t mean you can stay for 10 years continuously. Each entry is generally limited to 6 months.</p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">💵 Cost of Living in the USA – Budgeting for Your Trip</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Category</th>
                <th className="border-b p-2">Average Cost (Per Month)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Accommodation (Budget Hotel / Airbnb)</td><td className="p-2">$700 – $1,500</td></tr>
              <tr><td className="p-2">Food (Dining + Groceries)</td><td className="p-2">$300 – $600</td></tr>
              <tr><td className="p-2">Transportation (Public/Car Rentals)</td><td className="p-2">$100 – $300</td></tr>
              <tr><td className="p-2">Sightseeing & Entertainment</td><td className="p-2">$200 – $500</td></tr>
              <tr><td className="p-2">Medical Insurance (Highly Recommended)</td><td className="p-2">$50 – $100</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-2">💡 Budget Tip: Major cities like New York, Los Angeles, and San Francisco are more expensive. Consider visiting hidden gems like Austin, Portland, or Seattle for a rich experience at a lower cost.</p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">✈️ Top Reasons Indians Apply for a USA B2 Visa</h3>
        <ul className="list-disc ml-6">
          <li>Visiting children, relatives, or friends</li>
          <li>Attending weddings or family functions</li>
          <li>Tourism and sightseeing</li>
          <li>Medical treatments or health checkups</li>
          <li>Cultural or religious events</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">🧳 Important USA B2 Visa Information for Indian Applicants</h3>
        <ul className="list-disc ml-6">
          <li>Visa Fee (MRV Fee): $185 USD (~₹15,000 INR) – Non-refundable</li>
          <li>Processing Time: Interview appointments can take 2 weeks to several months</li>
          <li>Interview Required: Yes, at the nearest U.S. Embassy or Consulate</li>
        </ul>
        <p className="mt-2 font-semibold">📋 Required Documents:</p>
        <ul className="list-disc ml-6">
          <li>Valid Indian passport</li>
          <li>DS-160 confirmation page</li>
          <li>Visa appointment confirmation</li>
          <li>Bank statements / Financial proof</li>
          <li>Letter of invitation (if visiting family)</li>
          <li>Travel itinerary and accommodation details</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">🔍 Why Choose VJC Overseas for Your USA B2 Visa Application?</h3>
        <ul className="list-disc ml-6">
          <li>✅ Personalized Consultation – We assess your profile and travel purpose</li>
          <li>✅ 100% Documentation Support – From DS-160 to interview prep</li>
          <li>✅ Mock Interviews & Tips – Boost your confidence for consulate interviews</li>
          <li>✅ Real-time Updates – We track and notify you about every step</li>
          <li>✅ Proven Success – Thousands of happy Indian travellers trust VJC Overseas</li>
        </ul>
      </section>

      <section className="text-center">
        <h3 className="text-xl mt-4 mb-2 font-bold">🌐 Plan Your USA Visit with Confidence</h3>
        <p>At <span className="text-orange-500">VJC Overseas</span>, we go beyond just filing your visa – we empower you with the right guidance, preparation, and travel tips for a seamless U.S. visit.</p>
        <p className="mt-2">📞 Connect with Our Visa Experts Today</p>
        <p>📍 Offices across India | ✉️ info@vjcoverseas.com | 📱 +91-9160449000</p>
        <p className="mt-2 font-semibold">👉 Start your USA B2 Visa journey now – because America is waiting for you!</p>
      </section>
    </div>
  );
}
