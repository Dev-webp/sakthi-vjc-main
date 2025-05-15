import React from "react";
import Image from 'next/image';
const Spainvisit = () => {

    return (
        <div className="flex flex-col gap-8">
          {/* Heading Section */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-2xl font-bold">
              Spain Visit/Tourist Visa – Travel to Spain with <span className="text-orange-500">VJC Overseas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Discover the Charm of Spain with a Tourist Visa
            </p>
          </div>
    
          {/* Introduction Section */}
           <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
                                                                                                  
                                                                                                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                                                                                                      <Image
                                                                                                        src="/spaintimg.avif"
                                                                                                        alt="Image description"
                                                                                                        width={500} // Replace with your image's actual width
                                                                                                        height={300}
                                                                                                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg" 
                                                                                                      />
                                                                                                     </div>
                                                                                                     <p className="mb-4">
              Spain, a vibrant country in southwestern Europe, is renowned for its rich cultural heritage, world-class architecture, golden beaches, flamenco music, and delicious cuisine. From the sunny coastlines of Costa del Sol to the historic streets of Barcelona and Madrid, Spain promises an unforgettable experience for every traveller.
            </p>
            
          </div>
          <p>
              Whether you’re planning a family holiday, a solo adventure, or a romantic getaway, VJC Overseas is here to guide you through the Spain tourist visa application process with expert support and updated guidelines.
            </p>
          {/* Visa Overview */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Spain Tourist Visa – Overview</h2>
            <p>
              A Spain visit visa, also known as a Schengen short-stay visa, allows you to travel not only to Spain but to all 27 Schengen countries. It is perfect for tourism, visiting friends or relatives, or attending short business meetings or events.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Visa Validity:</strong> Short-stay visa (Type C): Up to 90 days within a 180-day period</li>
              <li>Single-entry or multiple-entry options available based on your travel history and documentation</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Visa Fees (as of 2024):</strong></li>
              <li>Adults: €80</li>
              <li>Children (6–12 years): €40</li>
              <li>Children under 6 years: Free</li>
              <li>VFS service charges and courier fees may apply additionally</li>
            </ul>
          </div>
    
          {/* Documents Required */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Required Documents for Spain Tourist Visa</h2>
            <p>To apply for a Spain visa from India, you must provide the following:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Valid passport (issued within the last 10 years, valid for at least 3 months beyond stay)</li>
              <li>Duly filled and signed Schengen visa application form</li>
              <li>Recent passport-sized photographs (as per Schengen photo specifications)</li>
              <li>Cover letter stating the purpose of visit and travel itinerary</li>
              <li>Proof of accommodation (hotel bookings, invitation letter if staying with family/friends)</li>
              <li>Travel insurance (minimum coverage of €30,000 for medical emergencies)</li>
              <li>Proof of financial means (bank statements for the last 3–6 months, income tax returns)</li>
              <li>Flight reservation or travel itinerary</li>
              <li>Employment proof or student ID, if applicable</li>
            </ul>
            <p>
              At VJC Overseas, we offer document verification, checklist support, and appointment booking to ensure a smooth and successful visa process.
            </p>
          </div>
    
          {/* Top Attractions */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Top Must-See Places in Spain</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Sagrada Familia, Barcelona:</strong> An architectural marvel designed by Antoni Gaudí, this basilica is a UNESCO World Heritage Site and an iconic symbol of Barcelona.</li>
              <li><strong>Alhambra Palace, Granada:</strong> A masterpiece of Moorish art and architecture, the Alhambra is a must-visit for history lovers.</li>
              <li><strong>Costa Brava and Costa del Sol:</strong> Stunning coastlines offering sun-soaked beaches, luxury resorts, and Mediterranean charm.</li>
              <li><strong>Prado Museum, Madrid:</strong> Home to one of the world’s finest collections of European art, featuring works by Goya, Velázquez, and El Greco.</li>
              <li><strong>Park Güell and Montjuïc Hill:</strong> Experience panoramic views, colourful mosaics, and serene gardens that define the artistic spirit of Spain.</li>
            </ul>
          </div>
    
          {/* Why Choose VJC Overseas */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Why Choose VJC Overseas for Your Spain Tourist Visa?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>10+ Years of Visa Expertise</li>
              <li>Personalized Document Support</li>
              <li>Appointment Booking & Interview Prep</li>
              <li>98% Visa Success Rate</li>
              <li>End-to-End Travel Guidance</li>
            </ul>
            <p>
              Travel smarter, stress-free, and with full confidence—VJC Overseas is your trusted Spain visa consultant.
            </p>
          </div>
    
          {/* Contact Section */}
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-semibold">Plan Your Dream Trip to Spain Today!</h2>
            <p>
              From cobblestone streets to sunlit shores, Spain awaits you! Let VJC Overseas simplify your visa journey and bring your European dream to life.
            </p>
            <p className="font-bold">
              Contact us today for a free consultation and expert visa assistance.
            </p>
          </div>
        </div>
      );

}

export default Spainvisit;