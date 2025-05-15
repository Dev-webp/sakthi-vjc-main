"use client";

import Image from "next/image";

export const metadata = {
  title: "Netherlands Tourist Visa from India – Apply with VJC Overseas",
  description: "Planning a trip to the Netherlands? Apply for your Netherlands Tourist Visa with VJC Overseas. Expert guidance, fast processing & complete documentation support.",
};

export default function NetherlandsTouristVisa() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      {/* Heading */}
      <h1 className="flex flex-col items-center text-lg sm:text-2xl md:text-2xl font-bold mb-6 text-center">
        <span>Explore the Netherlands with a Tourist Visa – <span className="text-orange-500">VJC Overseas</span></span>
      </h1>

      {/* Introduction Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">Discover the Charm of the Netherlands</h2>
          <p className="mb-6">
            The Netherlands, often referred to as Holland, is a captivating country in Western Europe known for its picturesque canals, iconic windmills, vibrant tulip fields, and rich cultural heritage.
          </p>
        </div>
         
        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/netherlandtouristcontent.png" // Make sure this is added to your /public folder
            alt="Netherlands Tourist Attractions"
            width={500}
            height={700}
            className="object-cover  shadow-lg"
          />
        </div>
      </div>
      <p className="-mt-4"> From the art-filled streets of Amsterdam to the medieval charm of Utrecht and the coastal beauty of The Hague, the Netherlands is a top destination for travellers seeking a perfect blend of history, modernity, and natural beauty.</p>
      {/* Visa Overview */}
      <h2 className="text-xl font-semibold mt-4 mb-2">Netherlands Tourist Visa (Schengen Visa) – At a Glance</h2>
      <p className="mb-6">
        If you're planning a short-term visit to explore the Netherlands for tourism, sightseeing, or visiting family or friends, you’ll need to apply for a Netherlands Schengen Tourist Visa. This visa allows non-EU citizens to travel across all 27 Schengen countries, including the Netherlands.
      </p>

      {/* Visa Validity */}
      <h2 className="text-xl font-semibold mt-4 mb-2">✅ Visa Validity</h2>
      <p className="mb-6">
        Short-Stay Visa (Type C): Valid for up to 90 days within a 180-day period. Single-entry / Multiple-entry options available based on purpose and travel history.
      </p>

      {/* Visa Fees */}
      <h2 className="text-xl font-semibold mt-4 mb-2">💶 Netherlands Visa Fees</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Adults (12 years and above):</strong> €80 (~₹7,200)</li>
        <li><strong>Children (6-11 years):</strong> €40 (~₹3,600)</li>
        <li><strong>Children below 6:</strong> Free</li>
      </ul>
      <p className="mb-6 italic">Note: VFS service charges and courier fees may apply additionally.</p>

      {/* Required Documents */}
      <h2 className="text-xl font-semibold mt-4 mb-2">📑 Required Documents for Netherlands Tourist Visa</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Valid Passport (Minimum 3 months validity beyond return date, at least 2 blank pages)</li>
        <li>Visa Application Form (Duly filled and signed)</li>
        <li>Recent Passport-size Photos (White background, as per Schengen standards)</li>
        <li>Travel Itinerary (Flight reservations and hotel bookings)</li>
        <li>Travel Insurance (Minimum €30,000 coverage for medical emergencies)</li>
        <li>Proof of Financial Means (Bank statements for last 3–6 months, ITR, or sponsorship letter)</li>
        <li>Cover Letter (Explaining the purpose of visit)</li>
        <li>Proof of Employment / Business / Studies</li>
        <li>NOC from Employer/Institute, if applicable</li>
        <li><em>Additional documents may be required based on personal circumstances.</em></li>
      </ul>

      {/* Top Places to Visit */}
      <h2 className="text-xl font-semibold mt-4 mb-2">🌍 Top Places to Visit in the Netherlands</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Amsterdam:</strong> Explore the world-famous canals, Rijksmuseum, Anne Frank House, and Van Gogh Museum.</li>
        <li><strong>Keukenhof Gardens:</strong> A springtime paradise of over 7 million tulips in bloom.</li>
        <li><strong>Zaanse Schans:</strong> Traditional windmills, wooden houses, and Dutch cheese factories.</li>
        <li><strong>Rotterdam:</strong> Known for its futuristic architecture and vibrant nightlife.</li>
        <li><strong>Giethoorn:</strong> A fairytale village with no roads, just canals!</li>
        <li><strong>The Hague:</strong> Home to the Dutch Royal Family and the International Court of Justice.</li>
        <li><strong>Utrecht:</strong> A medieval city with unique canal wharves and gothic architecture.</li>
        <li><strong>Maastricht:</strong> A charming town with cobbled streets and Roman ruins.</li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-xl font-semibold mt-4 mb-2">🛫 Why Choose VJC Overseas for Your Netherlands Visa?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>✅ Expert Visa Assistance</li>
        <li>✅ End-to-End Documentation Support</li>
        <li>✅ Visa Interview Guidance</li>
        <li>✅ Proven Track Record with High Approval Rates</li>
        <li>✅ Transparent Process & Timely Updates</li>
      </ul>

      {/* Contact CTA */}
      <p className="text-lg font-semibold text-orange-600 mt-6">
        📞 Contact Us Today!
      </p>
      <p className="mt-4">
        Start your Netherlands tourist visa process now with <span className="text-orange-500 font-bold">VJC Overseas</span>. Our expert team is ready to assist you every step of the way.
      </p>

    </div>
  );
}
