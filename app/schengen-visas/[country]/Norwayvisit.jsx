"use client";

import Image from "next/image";

export const metadata = {
  title: "Apply for Norway Tourist Visa from India | VJC Overseas – Expert Visa Consultants",
  description: "Planning a trip to Norway? Apply for your Norway visit visa with VJC Overseas. Expert support, fast processing, and complete documentation. Explore fjords, Northern Lights & more!",
};

export default function NorwayTouristVisa() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      {/* Heading */}
      <h1 className="flex flex-col items-center text-lg sm:text-2xl md:text-2xl font-bold mb-6 text-center">
        <span>Norway Visit/Tourist Visa – Explore the Land of Fjords with <span className="text-orange-500">VJC Overseas</span></span>
      </h1>

      {/* Introduction Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">Dreaming of Norway? Let VJC Overseas Help You Get There!</h2>
          <p className="mb-6">
            Norway, the Land of the Midnight Sun and spectacular Northern Lights, is one of the most enchanting travel destinations in Europe. With its dramatic landscapes, pristine fjords, and vibrant culture, Norway promises an unforgettable travel experience. Whether you're planning a leisure trip, visiting family, or exploring the country's natural wonders, <span className="text-orange-500 font-semibold">VJC Overseas</span> simplifies your journey with expert Norway Visit Visa assistance.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/norwaytouristcontent.webp" // Make sure this image is inside your public folder
            alt="Norway Tourist Attractions"
            width={500}
            height={600}
            className="object-cover  shadow-lg"
          />
        </div>
      </div>

      {/* Why Visit Norway */}
      <h2 className="text-xl font-semibold mt-10 mb-2">🇳🇴 Why Visit Norway?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Northern Lights in Tromsø</li>
        <li>Cruises through the majestic Norwegian Fjords</li>
        <li>Hiking trails in Lofoten Islands</li>
        <li>Viking history in Oslo and Bergen</li>
        <li>Midnight sun in Nordkapp (North Cape)</li>
        <li>Charming towns like Ålesund and Flam</li>
      </ul>

      {/* Visa Key Info */}
      <h2 className="text-xl font-semibold mt-4 mb-2">📄 Norway Tourist Visa – Key Information</h2>
      
      <p className="mb-2"><strong>✅ Visa Validity:</strong> Short-stay Schengen Tourist Visa: Valid for up to 90 days within a 180-day period. Multiple-entry options available depending on application and travel history.</p>

      <p className="mb-2"><strong>💶 Visa Fees:</strong><br/>
        Adults: €80 (approx. ₹7,200)<br/>
        Children (6–12 years): €40 (approx. ₹3,600)<br/>
        Children under 6: Free<br/>
        <em>Note: VFS service charges and courier/biometric charges may apply.</em>
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">📃 Required Documents</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Valid Passport (min. 3 months validity beyond intended stay)</li>
        <li>Visa Application Form (filled and signed)</li>
        <li>Two recent passport-size photos (as per Schengen specs)</li>
        <li>Proof of Travel Itinerary (flight bookings, accommodation)</li>
        <li>Travel Medical Insurance (minimum €30,000 coverage)</li>
        <li>Proof of Financial Means (bank statements, IT returns)</li>
        <li>Employment Proof (letter from employer, NOC if employed)</li>
        <li>Cover Letter stating purpose and itinerary of the visit</li>
        <li>Invitation letter (if visiting family or friends)</li>
        <li>Visa fee payment receipt</li>
      </ul>

      {/* Top Places */}
      <h2 className="text-xl font-semibold mt-4 mb-2">🏞️ Top Places to Visit in Norway</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Oslo:</strong> Norway’s cultural capital with museums, art, and waterfront beauty.</li>
        <li><strong>Bergen:</strong> Gateway to the fjords with colourful houses and historic Bryggen.</li>
        <li><strong>Geirangerfjord:</strong> UNESCO-listed fjord with waterfalls and scenic cruises.</li>
        <li><strong>Tromsø:</strong> Best place to witness the magical Aurora Borealis.</li>
        <li><strong>Lofoten Islands:</strong> Dramatic peaks and quaint fishing villages.</li>
        <li><strong>Flåm Railway:</strong> One of the most beautiful train rides in the world.</li>
        <li><strong>Stavanger:</strong> Home to the famous Pulpit Rock (Preikestolen).</li>
        <li><strong>Svalbard:</strong> Arctic wilderness and polar bear sightings!</li>
      </ul>

      {/* Why Choose VJC Overseas */}
      <h2 className="text-xl font-semibold mt-4 mb-2">✈️ Why Choose VJC Overseas for Your Norway Visa?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>15+ Years of Expertise in Schengen Visa Applications</li>
        <li>Personalized Visa Guidance & Documentation Support</li>
        <li>Quick Appointment Scheduling & Follow-ups</li>
        <li>100% Transparency & Dedicated Travel Consultants</li>
        <li>Trusted by Thousands of Happy Travelers</li>
      </ul>

      {/* Call to Action */}
      <p className="text-lg font-semibold text-orange-600 mt-6">
        📞 Ready to Explore Norway? Contact VJC Overseas Today!
      </p>
      <p className="mt-4">
        Let us take care of your Norway tourist visa process from start to finish. With our hassle-free services, all you need to do is pack your bags!
      </p>

    </div>
  );
}
