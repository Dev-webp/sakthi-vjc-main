"use client";

import Image from "next/image";

export const metadata = {
  title: "Romania Tourist Visa from India – Easy Romania Visit Visa | VJC Overseas",
  description: "Apply for a Romania Tourist Visa from India with VJC Overseas. Expert assistance, quick processing, document checklist & top Romania travel attractions. Start your journey today!",
};

export default function RomaniaTouristVisa() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      {/* Heading */}
      <h1 className="flex flex-col items-center text-lg sm:text-2xl md:text-2xl font-bold mb-6 text-center">
        <span>✈️ Romania Visit/Tourist Visa – <span className="text-orange-500">Explore Europe’s Hidden Gem</span> with VJC Overseas</span>
      </h1>
      <h2 className="text-xl font-bold mt-4 mb-2">Discover Romania – A Land of Enchanting Castles and Natural Wonders</h2>
      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Text */}
        <div>
          
          <p className="mb-6">
            Planning your next European getaway? Romania offers a perfect blend of ancient history, medieval towns, fairytale castles, and stunning landscapes. Nestled in Eastern Europe, Romania is home to the famous Transylvania region, the mythical Bran Castle (Dracula’s Castle), the breathtaking Carpathian Mountains, and the vibrant capital Bucharest.
          </p>
          
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/romaniavisitcontent.jpg" // Make sure this image exists in your /public folder
            alt="Romania Tourist Visa Content"
            width={500}
            height={700}
            className="object-cover  shadow-lg"
          />
        </div>

      </div>
      <p className="mb-6">
            With a Romania Tourist Visa, you can immerse yourself in this culturally rich and scenic destination for a truly unforgettable travel experience. <span className="font-semibold text-orange-500">VJC Overseas</span> is here to simplify your visa process with expert guidance, updated requirements, and end-to-end support.
          </p>
      {/* Visa Details */}
      <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
        🛂 Romania Tourist Visa Details
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Visa Validity:</strong> Short-stay visa (Type C) – Up to 90 days within 180 days</li>
        <li><strong>Entry Options:</strong> Single-entry, double-entry, or multiple-entry available</li>
        <li><strong>Visa Processing Time:</strong> Standard: 10–15 working days (Faster processing in some cases)</li>
      </ul>

      {/* Visa Fees */}
      <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
        💰 Romania Tourist Visa Fees
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Short-Stay Visa (Type C):</strong> €80 (~₹7,200)</li>
        <li><strong>Children (6–12 years):</strong> €40 (~₹3,600)</li>
        <li><strong>Children under 6 years:</strong> Free</li>
      </ul>
      <p className="italic text-sm mb-6">
        Note: VJC Overseas offers expert visa assistance at nominal service charges.
      </p>

      {/* Required Documents */}
      <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
        📄 Required Documents for Romania Tourist Visa
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>Valid passport (minimum 3 months validity after return)</li>
        <li>Recent passport-sized photographs</li>
        <li>Completed and signed visa application form</li>
        <li>Confirmed flight itinerary</li>
        <li>Proof of accommodation in Romania</li>
        <li>Travel medical insurance (minimum €30,000 coverage)</li>
        <li>Financial proof (bank statements, ITR, sponsorship letter if applicable)</li>
        <li>Covering letter mentioning travel purpose</li>
        <li>Employment or business registration documents (if applicable)</li>
      </ul>

      {/* Top Attractions */}
      <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
        🌍 Top Tourist Attractions in Romania
      </h2>
      <p className="mb-4">
        Romania offers a magical travel experience for every visitor—be it history lovers, nature enthusiasts, or adventure seekers.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Bran Castle (Dracula’s Castle):</strong> Gothic legend and history</li>
        <li><strong>Peles Castle:</strong> Fairytale royal residence in Sinaia</li>
        <li><strong>Transfăgărășan Highway:</strong> Scenic mountain driving route</li>
        <li><strong>Sibiu & Sighișoara:</strong> Beautiful medieval towns</li>
        <li><strong>Bucharest:</strong> Vibrant capital city</li>
        <li><strong>Danube Delta:</strong> UNESCO-listed natural paradise</li>
        <li><strong>Painted Monasteries of Bucovina:</strong> Unique historic frescoes</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
        ✅ Why Choose VJC Overseas?
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>✅ Hassle-free Romania visa application support</li>
        <li>✅ Expert advice on correct documentation</li>
        <li>✅ Personalized itinerary planning help</li>
        <li>✅ End-to-end customer service</li>
        <li>✅ High success rate for tourist visas</li>
      </ul>

      {/* CTA Section */}
      <div className="mt-10 text-center">
        <p className="text-lg font-bold text-orange-600 mb-2">
          📞 Start Your Romania Visa Application Today!
        </p>
        <p className="mb-2">Contact <span className="font-bold text-orange-500">VJC Overseas</span> for a free consultation!</p>
        <p className="mb-2">Call/WhatsApp: <a href="tel:+919160449000" className="text-blue-600">+91-9160449000</a></p>
        <p>Email: <a href="mailto:info@vjcoverseas.com" className="text-blue-600">info@vjcoverseas.com</a></p>
      </div>

    </div>
  );
}
