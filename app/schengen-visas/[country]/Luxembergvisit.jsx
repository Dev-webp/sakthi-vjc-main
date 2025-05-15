"use client";

import Image from "next/image";

export const metadata = {
  title: "Luxembourg Tourist Visa for Indian Citizens | VJC Overseas",
  description: "Planning a trip to Luxembourg? Get expert assistance with your Luxembourg tourist visa application. Learn about visa fees, required documents, processing time, and top attractions. Apply with VJC Overseas today!",
};

export default function LuxembourgTouristVisa() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      {/* Heading */}
      <h1 className="flex flex-col items-center text-lg sm:text-2xl md:text-2xl font-bold mb-6 text-center">
        <span>Luxembourg Tourist Visa from India – <span className="text-orange-500">VJC Overseas</span></span>
      </h1>
      <h2 className="text-xl font-bold mt-4 mb-2">✨ Discover Luxembourg: Europe's Hidden Gem</h2>
      {/* Introduction Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          
          <p className="mb-6">
            Nestled between Belgium, France, and Germany, Luxembourg is a charming blend of medieval castles, lush forests, and cosmopolitan cities. As a member of the Schengen Area, it offers seamless travel to 26 European countries with a single visa. 
          </p>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/luxembergvisit.jpg" // Ensure you add this image in your /public folder
            alt="Luxembourg Tourist Attractions"
            width={500}
            height={700}
            className="object-cover shadow-lg"
          />
        </div>
      </div>
      <p>Whether you're exploring the capital, Luxembourg City, or the picturesque village of Vianden, Luxembourg promises an unforgettable experience.</p>
      {/* Key Details */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🛂 Luxembourg Tourist Visa: Key Details</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Visa Type:</strong> Short-Term Schengen Visa</li>
        <li><strong>Validity:</strong> Up to 90 days within a 180-day period</li>
        <li><strong>Processing Time:</strong> Typically 15 calendar days; may extend up to 45 days during peak seasons or if additional documentation is required.</li>
      </ul>

      {/* Visa Fees */}
      <h2 className="text-xl font-semibold mt-8 mb-2">💰 Luxembourg Visa Fees for Indian Citizens</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Adults (12 years & above):</strong> €90 (~₹8,114)</li>
        <li><strong>Children (6–11 years):</strong> €45 (~₹4,057)</li>
        <li><strong>Children (under 6 years):</strong> Free</li>
      </ul>
      <p className="italic mb-6">Note: Fees are subject to change based on exchange rates and embassy policies.</p>

      {/* Required Documents */}
      <h2 className="text-xl font-semibold mt-8 mb-2">📄 Required Documents</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Completed Visa Application Form: Signed and dated</li>
        <li>Passport: Valid for at least 3 months beyond intended stay, with two blank pages</li>
        <li>Photographs: Two recent passport-sized colour photos (35x45 mm, white background)</li>
        <li>Travel Itinerary: Detailed day-by-day travel plan</li>
        <li>Accommodation Proof: Hotel bookings or invitation letters</li>
        <li>Flight Reservations: Round-trip bookings</li>
        <li>Travel Insurance: Minimum €30,000 coverage for medical emergencies and repatriation</li>
        <li>Financial Proof: Bank statements, income tax returns, and payslips</li>
        <li>Cover Letter: Explaining purpose of visit and travel plans</li>
        <li>Additional Documents: NOC from employer/educational institution if applicable</li>
      </ul>
      <p className="italic mb-6">Note: All documents must be in English or accompanied by certified translations.</p>

      {/* Must-See Places */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🗺️ Must-See Places in Luxembourg</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Luxembourg City:</strong> Explore the UNESCO-listed Old Town, Bock Casemates, and Grand Ducal Palace.</li>
        <li><strong>Vianden Castle:</strong> A stunning hilltop castle offering panoramic views.</li>
        <li><strong>Mullerthal Region:</strong> Known as "Little Switzerland," perfect for hiking and nature walks.</li>
        <li><strong>Ettelbruck:</strong> Visit the National Resistance Museum.</li>
        <li><strong>Moselle Valley:</strong> Famous for vineyards and picturesque villages.</li>
      </ul>

      {/* Tips for Smooth Visa Application */}
      <h2 className="text-xl font-semibold mt-8 mb-2">📅 Tips for a Smooth Visa Application</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Apply Early: Submit at least 4–6 weeks before your travel date.</li>
        <li>Complete Documentation: Incomplete applications may cause delays.</li>
        <li>Biometric Data: First-time applicants must submit fingerprints and a photo.</li>
        <li>Visa Facilitation Agreements: Some nationals benefit from reduced fees.</li>
      </ul>

      {/* Application Process */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🛂 Application Process</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Schedule an Appointment: Through the Luxembourg Embassy or VFS Global.</li>
        <li>Prepare Documents: As per the official checklist.</li>
        <li>Attend Appointment: Submit application and biometrics.</li>
        <li>Wait for Processing: Track application status online.</li>
        <li>Receive Visa: Upon approval, collect your visa and prepare to travel!</li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🌐 Why Choose VJC Overseas?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>✅ Expert Guidance and Personalized Assistance</li>
        <li>✅ Timely Updates and Latest Visa Information</li>
        <li>✅ Comprehensive Services from Document Preparation to Appointment Scheduling</li>
      </ul>

      {/* Contact CTA */}
      <p className="text-lg font-semibold text-orange-600 mt-6">
        📞 Contact Us Today!
      </p>
      <p className="mt-4">
        Start your Luxembourg tourist visa application with <span className="text-orange-500 font-bold">VJC Overseas</span>. Our team is ready to make your European journey a reality!
      </p>

    </div>
  );
}
